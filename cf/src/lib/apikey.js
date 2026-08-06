// /api/v1 的金鑰。明文只在鑄造當下回傳一次（烤進 .skill），之後永遠只剩 sha256。
//
// 熱路徑的成本是重點：每個 API 請求都要驗一次金鑰。所以驗證結果快取在 isolate
// 記憶體 10 秒，之後才回頭問 D1（hash 有 UNIQUE 索引，rows_read=1）。
//
// **這裡刻意沒有 KV 那一層**，雖然它看起來是這個站到處都在用的模式。原本有，而且
// 撤銷時會把 KV 那個 key 刪掉，理論上撤銷即時生效。實測是：D1 已標記撤銷、KV 的
// key 也確實不見了，被撤銷的金鑰仍然暢行無阻超過 24 秒。原因是 KV 的讀取在邊緣
// 節點另有一層快取，刪除要花時間傳播——KV 是最終一致的，拿它當授權判斷的來源，
// 「已撤銷」這個事實就會晚幾十秒才生效。
//
// 換句話說：快取層可以放資料，不能放「這個人能不能進來」。撤銷現在最壞延遲
// MEM_TTL_MS（10 秒，且只在撤銷當下已經看過這把金鑰的 isolate 上），代價是每個
// isolate 每 10 秒多一次 rows_read=1 的查詢。對這種流量而言那是零。

const KEY_RE = /^nccn_[0-9a-f]{32}$/;
const MEM_TTL_MS = 10_000; // isolate 記憶體：撤銷最壞殘留這麼久
const TOUCH_EVERY_MS = 300_000; // last_used / calls 的降頻寫入間隔

// isolate 全域。Worker 隨時可能被回收，所以這只能當快取，不能當事實來源。
const mem = new Map(); // hash -> { at, ok, id }
const touched = new Map(); // hash -> 上次寫 D1 的時間

// 失敗的驗證也會進 mem（否則無效金鑰猛打就等於直接壓 D1），代價是任何人都能用
// 隨機字串在這個 Map 裡塞東西。所以要有上限：滿了就整個倒掉，重建的成本只是幾次
// rows_read=1 的查詢。LRU 不值得為這點東西寫。
// （名字刻意不叫 remember——lib/cache.js 有一個同名但完全不同的東西。）
const MEM_MAX = 500;
function capped(map, k, v) {
	if (map.size >= MEM_MAX) map.clear();
	map.set(k, v);
}

export function parseBearer(header) {
	const s = String(header || "").trim();
	if (!s) return "";
	const m = /^Bearer\s+(.+)$/i.exec(s);
	return (m ? m[1] : s).trim();
}

export function looksLikeKey(key) {
	return KEY_RE.test(String(key || ""));
}

// 明文前 12 碼（"nccn_" + 7 hex）。設定面板只有這個能拿來認人。
export function keyPrefix(key) {
	return String(key || "").slice(0, 12);
}

export function newKey() {
	const raw = new Uint8Array(16); // 128 bits
	crypto.getRandomValues(raw);
	let hex = "";
	for (const b of raw) hex += b.toString(16).padStart(2, "0");
	return "nccn_" + hex;
}

export async function hashKey(key) {
	const buf = await crypto.subtle.digest(
		"SHA-256",
		new TextEncoder().encode(String(key)),
	);
	let out = "";
	for (const b of new Uint8Array(buf)) out += b.toString(16).padStart(2, "0");
	return out;
}

// 降頻判斷：距上次寫入未滿 TOUCH_EVERY_MS 就跳過。純函式，方便測。
export function needsTouch(lastMs, nowMs) {
	return !(lastMs > 0) || nowMs - lastMs >= TOUCH_EVERY_MS;
}

// 給面板看的樣子——絕不含 hash。
export function publicRow(row) {
	return {
		id: row.id,
		prefix: row.prefix,
		label: row.label,
		created: row.created,
		lastUsed: row.last_used || null,
		calls: row.calls || 0,
		revoked: row.revoked || null,
	};
}

// 驗證。回 { ok, id } 或 { ok:false, reason }。
// reason 只分 missing / bad —— 對外一律回 401，不透露是「格式錯」還是「已撤銷」。
export async function verifyKey(env, key, ctx) {
	if (!looksLikeKey(key)) return { ok: false, reason: "bad" };
	const hash = await hashKey(key);
	const now = Date.now();

	const hit = mem.get(hash);
	if (hit && now - hit.at < MEM_TTL_MS) {
		if (hit.ok) touch(env, hash, hit.id, ctx);
		return hit.ok ? { ok: true, id: hit.id } : { ok: false, reason: "bad" };
	}

	let id = null;
	try {
		const row = await env.DB.prepare(
			"SELECT id, revoked FROM api_keys WHERE hash = ?",
		)
			.bind(hash)
			.first();
		id = row && !row.revoked ? row.id : null;
	} catch (e) {
		// api.sql 沒跑過就是這裡炸。當成驗不過，而不是放行。
		return { ok: false, reason: "bad" };
	}

	// 失敗結果也記進來，否則拿無效 key 猛打就等於直接壓 D1。
	capped(mem, hash, { at: now, ok: id != null, id });
	if (id == null) return { ok: false, reason: "bad" };
	touch(env, hash, id, ctx);
	return { ok: true, id };
}

// last_used / calls 的非阻塞降頻更新。稽核用途，不值得讓使用者等一次 D1 寫入。
function touch(env, hash, id, ctx) {
	const now = Date.now();
	if (!needsTouch(touched.get(hash) || 0, now)) return;
	capped(touched, hash, now);
	if (!ctx?.waitUntil) return;
	ctx.waitUntil(
		env.DB.prepare(
			"UPDATE api_keys SET last_used = ?, calls = calls + 1 WHERE id = ?",
		)
			.bind(new Date(now).toISOString(), id)
			.run()
			.catch(() => {}),
	);
}

export async function listKeys(env) {
	try {
		const { results } = await env.DB.prepare(
			"SELECT id, prefix, label, created, last_used, calls, revoked FROM api_keys ORDER BY id DESC LIMIT 200",
		).all();
		return (results || []).map(publicRow);
	} catch (e) {
		return [];
	}
}

// 回傳明文——這是它唯一一次存在於 D1 之外的機會，呼叫端必須馬上用掉。
export async function mintKey(env, label) {
	const key = newKey();
	const hash = await hashKey(key);
	await env.DB.prepare(
		"INSERT INTO api_keys (hash, prefix, label, created) VALUES (?, ?, ?, ?)",
	)
		.bind(hash, keyPrefix(key), String(label || "未命名").slice(0, 80), new Date().toISOString())
		.run();
	return { key, prefix: keyPrefix(key) };
}

// D1 是唯一的事實來源，所以撤銷就是把它標記起來。順手清掉這個 isolate 的記憶體
// 快取，讓發出撤銷指令的那個人立刻看到效果；其他 isolate 最多 10 秒後跟上。
export async function revokeKey(env, id) {
	const row = await env.DB.prepare("SELECT hash FROM api_keys WHERE id = ?")
		.bind(id)
		.first();
	if (!row) return { ok: false, error: "unknown key" };
	await env.DB.prepare("UPDATE api_keys SET revoked = ? WHERE id = ?")
		.bind(new Date().toISOString(), id)
		.run();
	mem.delete(row.hash);
	return { ok: true, id };
}
