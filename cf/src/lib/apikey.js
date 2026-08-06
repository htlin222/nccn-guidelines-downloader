// /api/v1 的金鑰。明文只在鑄造當下回傳一次（烤進 .skill），之後永遠只剩 sha256。
//
// 熱路徑的成本是重點：每個 API 請求都要驗一次金鑰，若每次都打 D1，光認證就比取
// 資料還慢。所以驗證結果疊三層——isolate 記憶體 10 秒、KV 60 秒、最後才是 D1。
// 撤銷時主動刪掉 KV，所以撤銷不必等 TTL 到期；唯一的殘留是別的 isolate 的記憶體
// 快取，上限 10 秒，這是刻意換來的（記憶體那層擋掉的量最大）。

const KEY_RE = /^nccn_[0-9a-f]{32}$/;
const MEM_TTL_MS = 10_000; // isolate 記憶體：撤銷最壞殘留這麼久
const KV_TTL_S = 60; // KV：撤銷時會主動刪，所以可以放長一點
const TOUCH_EVERY_MS = 300_000; // last_used / calls 的降頻寫入間隔

// isolate 全域。Worker 隨時可能被回收，所以這只能當快取，不能當事實來源。
const mem = new Map(); // hash -> { at, ok, id }
const touched = new Map(); // hash -> 上次寫 D1 的時間

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
	const cached = await env.NCCN_KV.get("apikey:" + hash).catch(() => null);
	if (cached != null) {
		id = cached === "" ? null : parseInt(cached, 10);
	} else {
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
		// 失敗也快取（空字串），否則拿無效 key 猛打就等於直接壓 D1。
		if (ctx?.waitUntil)
			ctx.waitUntil(
				env.NCCN_KV.put("apikey:" + hash, id == null ? "" : String(id), {
					expirationTtl: KV_TTL_S,
				}).catch(() => {}),
			);
	}

	mem.set(hash, { at: now, ok: id != null, id });
	if (id == null) return { ok: false, reason: "bad" };
	touch(env, hash, id, ctx);
	return { ok: true, id };
}

// last_used / calls 的非阻塞降頻更新。稽核用途，不值得讓使用者等一次 D1 寫入。
function touch(env, hash, id, ctx) {
	const now = Date.now();
	if (!needsTouch(touched.get(hash) || 0, now)) return;
	touched.set(hash, now);
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

// 撤銷要立刻生效，所以連 KV 那層一起清掉，不是只把 D1 標記起來。
export async function revokeKey(env, id) {
	const row = await env.DB.prepare("SELECT hash FROM api_keys WHERE id = ?")
		.bind(id)
		.first();
	if (!row) return { ok: false, error: "unknown key" };
	await env.DB.prepare("UPDATE api_keys SET revoked = ? WHERE id = ?")
		.bind(new Date().toISOString(), id)
		.run();
	await env.NCCN_KV.delete("apikey:" + row.hash).catch(() => {});
	mem.delete(row.hash);
	return { ok: true, id };
}
