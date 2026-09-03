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

//
// ---------------------------------------------------------------------------
// 第二種金鑰：綁 email 的 HMAC 衍生金鑰（issue #11）
//
//   key = "nccn_" + b64url(HMAC-SHA256(env.API_KEY_SECRET, `${email}:${version}`))
//
// 兩種金鑰並存，靠長相分辨（32 hex vs 43 個 base64url 字元），不會互相誤認。舊的
// 隨機金鑰保留是因為它們已經裝在別人的機器上——改動不該讓它們安靜地死掉。
//
// 衍生金鑰換到的東西是**身分**：呼叫端用 X-User-Email 自報是誰，而那個 email 被綁
// 進 HMAC，所以冒用別人的 email 只會算出對不上的雜湊。API 從此知道打進來的是誰，
// 個人資料（書籤、星號）才有辦法開放。
//
// 撤銷從「把某一列標記起來」變成「把某個人的版本號加一」：一次寫入，只影響他自己。
// D1 仍然是唯一的事實來源，理由跟上面那段一模一樣。

const KEY_RE = /^nccn_[0-9a-f]{32}$/;
// 32 bytes 的 HMAC 輸出以 base64url 表示是 43 個字元（無 padding）。跟上面的 32 個
// 十六進位字元長度不同，所以兩種格式永遠分得開。
const DERIVED_RE = /^nccn_[A-Za-z0-9_-]{43}$/;
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

// 倒掉這個 isolate 的記憶體快取。正式環境只有輪替金鑰時用得到（讓按下按鈕的人
// 立刻看到效果）；測試需要它是因為 mem 是 module 層的，不倒掉的話前一個測試驗過的
// 金鑰會在下一個測試裡繼續有效 10 秒，讓「這把應該要失效」測成綠的。
export function resetKeyCache() {
	mem.clear();
	touched.clear();
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

// --- 衍生金鑰 -------------------------------------------------------------

export function looksLikeDerived(key) {
	return DERIVED_RE.test(String(key || ""));
}

// email 一律小寫、去空白後才進 HMAC 與 SQL。兩邊用同一支，否則
// "A@b.com" 鑄出來的金鑰會驗不過 "a@b.com" 那一列。
export function normEmail(email) {
	return String(email || "").trim().toLowerCase();
}

function b64url(buf) {
	let bin = "";
	for (const b of new Uint8Array(buf)) bin += String.fromCharCode(b);
	return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

// 純函式：同樣的 (secret, email, version) 永遠得到同一把金鑰。鑄造端與驗證端各自
// 重算，所以金鑰本身不需要落地。
export async function deriveKey(secret, email, version) {
	const enc = new TextEncoder();
	const ck = await crypto.subtle.importKey(
		"raw",
		enc.encode(String(secret)),
		{ name: "HMAC", hash: "SHA-256" },
		false,
		["sign"],
	);
	const sig = await crypto.subtle.sign(
		"HMAC",
		ck,
		enc.encode(normEmail(email) + ":" + Number(version)),
	);
	return "nccn_" + b64url(sig);
}

// 定時比對。Workers 有 crypto.subtle.timingSafeEqual，Node（測試跑的地方）沒有，
// 所以改成先各自 SHA-256 成固定 32 bytes 再逐位元組 XOR 累加——長度固定、沒有提早
// 跳出，兩邊都成立。
export async function safeEqual(a, b) {
	const enc = new TextEncoder();
	const [ha, hb] = await Promise.all([
		crypto.subtle.digest("SHA-256", enc.encode(String(a))),
		crypto.subtle.digest("SHA-256", enc.encode(String(b))),
	]);
	const x = new Uint8Array(ha);
	const y = new Uint8Array(hb);
	let diff = 0;
	for (let i = 0; i < x.length; i++) diff |= x[i] ^ y[i];
	return diff === 0;
}

// 取某個 email 目前的金鑰；沒有那一列就當場建（版本 1）。
// 只在 Access 保護內呼叫——email 來自 Access 驗過的標頭，不是使用者自報的。
export async function userKey(env, email) {
	const secret = env.API_KEY_SECRET;
	if (!secret) return null;
	const em = normEmail(email);
	if (!em) return null;
	const now = new Date().toISOString();
	await env.DB.prepare(
		"INSERT INTO api_users (email, key_version, created, updated) VALUES (?, 1, ?, ?) " +
			"ON CONFLICT(email) DO NOTHING",
	)
		.bind(em, now, now)
		.run();
	const row = await env.DB.prepare(
		"SELECT key_version, created, updated, last_used, calls FROM api_users WHERE email = ?",
	)
		.bind(em)
		.first();
	const version = row?.key_version || 1;
	return {
		email: em,
		version,
		key: await deriveKey(secret, em, version),
		created: row?.created || null,
		updated: row?.updated || null,
		lastUsed: row?.last_used || null,
		calls: row?.calls || 0,
	};
}

// 輪替：版本 +1。之前發出去的每一份 .skill 立刻失效（最壞 MEM_TTL_MS），
// 別人的不受影響。
export async function rotateUserKey(env, email) {
	const secret = env.API_KEY_SECRET;
	if (!secret) return null;
	const em = normEmail(email);
	if (!em) return null;
	const now = new Date().toISOString();
	await env.DB.prepare(
		"INSERT INTO api_users (email, key_version, created, updated) VALUES (?, 2, ?, ?) " +
			"ON CONFLICT(email) DO UPDATE SET key_version = key_version + 1, updated = excluded.updated",
	)
		.bind(em, now, now)
		.run();
	// 這個 isolate 記得的舊答案要立刻丟掉，按下按鈕的人才會馬上看到效果；
	// 其他 isolate 最多 MEM_TTL_MS 之後跟上。
	resetKeyCache();
	return userKey(env, em);
}

// 驗證衍生金鑰。
//
// **未知的 email 與錯的金鑰必須無法區分。** 查無此人時一樣用 version 0 走完整條
// HMAC 再比對（版本從 1 起跳，所以 0 永遠對不上）——不提早 return，不換錯誤訊息。
// /api/v1 走 Access Bypass，任何差別都等於讓外面的人可以列舉成員。
async function verifyDerived(env, key, email, ctx) {
	const secret = env.API_KEY_SECRET;
	if (!secret) return { ok: false, reason: "bad" };
	const em = normEmail(email);
	if (!em) return { ok: false, reason: "bad" };

	const ck = await hashKey(key + "\n" + em);
	const now = Date.now();
	const hit = mem.get(ck);
	if (hit && now - hit.at < MEM_TTL_MS) {
		if (hit.ok) touchUser(env, ck, em, ctx);
		return hit.ok ? { ok: true, id: em, email: em } : { ok: false, reason: "bad" };
	}

	let version = 0;
	try {
		const row = await env.DB.prepare(
			"SELECT key_version FROM api_users WHERE email = ?",
		)
			.bind(em)
			.first();
		version = row?.key_version || 0;
	} catch (e) {
		// apiuser.sql 沒跑過就是這裡炸。當成驗不過，而不是放行。
		return { ok: false, reason: "bad" };
	}

	const expected = await deriveKey(secret, em, version);
	const ok = await safeEqual(key, expected);
	capped(mem, ck, { at: now, ok, id: em });
	if (!ok) return { ok: false, reason: "bad" };
	touchUser(env, ck, em, ctx);
	return { ok: true, id: em, email: em };
}

function touchUser(env, ck, email, ctx) {
	const now = Date.now();
	if (!needsTouch(touched.get(ck) || 0, now)) return;
	capped(touched, ck, now);
	if (!ctx?.waitUntil) return;
	ctx.waitUntil(
		env.DB.prepare(
			"UPDATE api_users SET last_used = ?, calls = calls + 1 WHERE email = ?",
		)
			.bind(new Date(now).toISOString(), email)
			.run()
			.catch(() => {}),
	);
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
//
// 先看長相決定走哪一條：43 個 base64url 字元是綁 email 的衍生金鑰，32 個十六進位
// 字元是舊的隨機金鑰（deprecated，只為了不弄死已經裝好的 .skill 而保留）。
export async function verifyKey(env, key, ctx, email) {
	if (looksLikeDerived(key)) return verifyDerived(env, key, email, ctx);
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
