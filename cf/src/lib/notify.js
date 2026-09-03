// 通知中心的資料層。四種事件寫進同一張 D1 表（見 sql/notify.sql）：
//
//   cron    每日 refreshBatch 的結果    Worker 寫（本檔 notifyCron）
//   cookie  整輪全掛時的另一則警告      Worker 寫（本檔 notifyCron）
//   version 某份 guideline 版本變了     gen_versions.sh 經 notify.sh 寫
//   ci      每週 update-versions.yml    workflow 最後一步經 notify.sh 寫
//
// CI 那兩種不打 Worker：站台在 Cloudflare Access 後面，webhook 會被登入頁擋下來，
// 而 CI 本來就有一把 D1: Edit 的 token，直接寫表最省事，也少一組 secret。
//
// relTime / badgeCount / fmtEvent 會被 views/home.js 用 `.toString()` 原樣注入頁面，
// 所以跟 lib/cite.js、lib/marks.js 的那幾支一樣 MUST 保持自足：只能用自己的參數與
// JS 內建，不能參照模組層的任何東西（包括本檔的 const）。

export const KINDS = ["cron", "cookie", "version", "ci"];
export const LEVELS = ["info", "warn", "error"];
// 清單一次最多回這麼多；通知是給人看的，翻不到第 200 筆。
export const LIST_LIMIT = 60;
// body 是除錯用的附註，不是儲存空間。截斷免得一輪大失敗塞爆一列。
export const MAX_BODY = 4000;

// ---------------------------------------------------------------- 純函式

// 把 refreshBatch 的 health 記錄（{at, ok, fail, ids, errors}）翻成 0～2 則通知。
// 全成功只發一則 info；整輪全掛時額外發一則 cookie 警告，因為那幾乎必然是
// cookie 過期，而它需要人去處理，不該跟「今天抓了哪三份」混在同一則裡。
export function cronEvents(health, now) {
	const h = health || {};
	const ok = Number(h.ok) || 0;
	const fail = Number(h.fail) || 0;
	const total = ok + fail;
	if (!total) return [];
	const at = h.at || now || new Date().toISOString();
	const ids = Array.isArray(h.ids) ? h.ids : [];
	const errors = Array.isArray(h.errors) ? h.errors : [];
	const out = [];

	// same = 抓回來跟 R2 裡那份位元組完全相同，所以沒有重寫。
	//
	// same === 0 時**不能**反推「這幾份都有新版」。NCCN 每次下載都即時重產 PDF
	// （新的 /CreationDate、隨機的字型 subset 標籤），所以同一份指引連抓三次會
	// 得到三個不同的 sha256——位元組比對在那一側永遠說「不同」，那個 0 是量不到，
	// 不是沒變。真正可靠的改版訊號是 Version X.YYYY，那要 pdftotext，只有每週的
	// gen_clean.sh 抽得到。所以這裡只在確實比出相同時才多說一句。
	const same = Number(h.same) || 0;
	if (fail === 0)
		out.push({
			kind: "cron",
			level: "info",
			title:
				same === 0
					? `每日更新 ${ok}/${total} 完成`
					: same === ok
						? `每日更新 ${ok}/${total} 完成（都沒改版）`
						: `每日更新 ${ok}/${total} 完成（${same} 份沒改版）`,
			body: { ids, same },
			created: at,
		});
	else if (ok > 0)
		out.push({
			kind: "cron",
			level: "warn",
			title: `每日更新部分失敗 ${ok}/${total}`,
			body: { ids, errors },
			created: at,
		});
	else
		out.push({
			kind: "cron",
			level: "error",
			title: `每日更新全數失敗（0/${total}）`,
			body: { ids, errors },
			created: at,
		});

	if (ok === 0) {
		// no-cookie 是「還沒貼過」，其他錯是「貼過但過期了」——兩者的動作不同。
		const missing =
			errors.length > 0 &&
			errors.every((e) => String(e).indexOf("no-cookie") >= 0);
		out.push({
			kind: "cookie",
			level: "error",
			title: missing
				? "尚未設定 NCCN cookie，抓取全部停擺"
				: "NCCN cookie 可能已過期，請重新貼上",
			body: { errors },
			created: at,
		});
	}
	return out;
}

// 一次進來太多「首次取得版本」時，收斂成一則摘要的門檻。整份新目錄上線就是這個
// 情形：MD Anderson 那 91 份第一次被索引時，逐份發等於把通知中心洗掉。真正的改版
// （from → to）永遠逐份發，不受這個門檻影響——那才是需要一份一份看的東西。
export const NEW_VERSION_DIGEST_AT = 10;

// 比對新舊 meta/versions.json，只回「版本號真的變了」的那幾份。
// 舊表是空的（第一次跑、或 R2 上還沒有檔）就回空陣列——否則首次執行會一口氣
// 發出整份目錄的通知，把通知中心一開始就洗成沒人想看的樣子。
export function versionEvents(oldMap, newMap, nameById, now) {
	const a = oldMap || {};
	const b = newMap || {};
	if (!Object.keys(a).length) return [];
	const names = nameById || {};
	const at = now || new Date().toISOString();
	const out = [];
	const fresh = [];
	for (const id of Object.keys(b).sort()) {
		const to = b[id] && b[id].v;
		if (!to) continue;
		const from = a[id] && a[id].v;
		if (from === to) continue;
		const name = names[id] || id;
		if (!from) {
			fresh.push({ id, name, to, date: (b[id] && b[id].d) || "" });
			continue;
		}
		out.push({
			kind: "version",
			level: "info",
			title: `${name} 版本更新 v${from} → v${to}`,
			body: { id, from, to, date: (b[id] && b[id].d) || "" },
			created: at,
		});
	}
	if (fresh.length >= NEW_VERSION_DIGEST_AT) {
		out.push({
			kind: "version",
			level: "info",
			title: `${fresh.length} 份首次取得版本`,
			body: { ids: fresh.map((f) => f.id) },
			created: at,
		});
	} else {
		for (const f of fresh)
			out.push({
				kind: "version",
				level: "info",
				title: `${f.name} 首次取得版本 v${f.to}`,
				body: { id: f.id, from: null, to: f.to, date: f.date },
				created: at,
			});
	}
	return out;
}

// cron 沒跑這件事，cron 自己沒辦法通知你——沒觸發就沒有人寫那一列。所以「靜默」
// 只能由讀取端從最新一筆的時間推出來，這則是前端當場算的，不進資料庫。
export function staleEvent(lastAt, now, days) {
	const limit = days || 2;
	const n = Date.parse(now || "") || Date.now();
	const t = Date.parse(lastAt || "");
	if (!Number.isFinite(t))
		return {
			id: "synthetic-stale",
			kind: "cron",
			level: "warn",
			title: "尚無任何每日更新紀錄",
			body: {},
			created: new Date(n).toISOString(),
			synthetic: true,
		};
	const d = Math.floor((n - t) / 86400000);
	if (d < limit) return null;
	return {
		id: "synthetic-stale",
		kind: "cron",
		level: "error",
		title: `每日更新已 ${d} 天沒有紀錄 — cron 可能沒在跑`,
		body: { last: lastAt },
		created: new Date(n).toISOString(),
		synthetic: true,
	};
}

// 徽章數字只算 warn/error。每天一則「3/3 完成」若也計入，鈴鐺就永遠亮著，
// 亮著的徽章等於沒有徽章——真正壞掉那天你不會多看它一眼。info 仍然是未讀
// （清單上有小圓點），只是不吵人。
export function badgeCount(rows) {
	var unread = 0;
	var alert = 0;
	for (var i = 0; i < (rows || []).length; i++) {
		var r = rows[i];
		if (r.read_at) continue;
		unread++;
		if (r.level !== "info") alert++;
	}
	return { unread: unread, alert: alert };
}

// 相對時間。注入前端用，所以不用 Intl.RelativeTimeFormat（多一份 polyfill 心智
// 負擔，而且中文輸出還要另外調）。
export function relTime(iso, now) {
	var t = Date.parse(iso || "");
	if (!isFinite(t)) return "";
	var n = now ? Date.parse(now) : Date.now();
	var s = Math.round((n - t) / 1000);
	if (s < 0) s = 0;
	if (s < 60) return "剛剛";
	if (s < 3600) return Math.floor(s / 60) + " 分鐘前";
	if (s < 86400) return Math.floor(s / 3600) + " 小時前";
	var d = Math.floor(s / 86400);
	if (d === 1) return "昨天";
	if (d < 30) return d + " 天前";
	if (d < 365) return Math.floor(d / 30) + " 個月前";
	return Math.floor(d / 365) + " 年前";
}

// 一列通知的圖示與副標。body 是 JSON 字串（D1 存的）或已經 parse 好的物件。
export function fmtEvent(row) {
	var r = row || {};
	var b = r.body;
	if (typeof b === "string") {
		try {
			b = JSON.parse(b);
		} catch (e) {
			b = {};
		}
	}
	b = b || {};
	var icon =
		r.level === "error" ? "⛔" : r.level === "warn" ? "⚠️" : r.kind === "version" ? "✨" : "✓";
	var sub = "";
	if (b.errors && b.errors.length) sub = b.errors.join("　");
	else if (b.ids && b.ids.length) sub = b.ids.join("、");
	else if (b.rows != null) sub = "索引 " + b.rows + " 筆";
	else if (b.date) sub = b.date;
	return { icon: icon, sub: sub };
}

// ---------------------------------------------------------------- D1 存取
//
// 全部包 try/catch 並回安全值：通知只是旁枝，表還沒建、D1 暫時抽風都不該讓
// 首頁或每日 cron 跟著倒。

function payload(ev) {
	const body =
		ev.body == null
			? null
			: typeof ev.body === "string"
				? ev.body
				: JSON.stringify(ev.body);
	return [
		String(ev.kind || "cron"),
		String(ev.level || "info"),
		String(ev.title || "").slice(0, 300),
		body == null ? null : body.slice(0, MAX_BODY),
		ev.created || new Date().toISOString(),
	];
}

// 寫一則。同一則「還沒讀的」警告重複發生時（cookie 連掛五天）只把時間往前推，
// 不再插一筆——否則清單會被同一句話洗版，而未讀數也不再代表「幾件事要處理」。
// info 不做這件事：每天的執行紀錄本來就該一天一列，那正是「cron 還活著」的證據。
export async function notify(env, ev) {
	const [kind, level, title, body, created] = payload(ev);
	try {
		if (level !== "info") {
			const r = await env.DB.prepare(
				`UPDATE notifications SET created = ?, body = ?
				   WHERE kind = ? AND title = ? AND read_at IS NULL`,
			)
				.bind(created, body, kind, title)
				.run();
			if (r && r.meta && r.meta.changes > 0) return { ok: true, deduped: true };
		}
		await env.DB.prepare(
			`INSERT INTO notifications (kind, level, title, body, created)
			 VALUES (?, ?, ?, ?, ?)`,
		)
			.bind(kind, level, title, body, created)
			.run();
		return { ok: true, deduped: false };
	} catch (e) {
		return { ok: false, error: String((e && e.message) || e) };
	}
}

export async function notifyMany(env, events) {
	const out = [];
	for (const ev of events || []) out.push(await notify(env, ev));
	return out;
}

// refreshBatch 的收尾。刻意不 throw：PDF 已經抓完寫進 R2 了，通知寫不進去是
// 附帶損害，不該讓整輪 cron 看起來像失敗。
export async function notifyCron(env, health) {
	try {
		return await notifyMany(env, cronEvents(health));
	} catch (e) {
		console.log("notify skipped", String((e && e.message) || e));
		return [];
	}
}

export async function listNotifications(env, limit) {
	const n = Math.min(Math.max(parseInt(limit, 10) || LIST_LIMIT, 1), 200);
	try {
		const { results } = await env.DB.prepare(
			`SELECT id, kind, level, title, body, created, read_at
			   FROM notifications ORDER BY created DESC, id DESC LIMIT ${n}`,
		).all();
		return results || [];
	} catch (e) {
		return [];
	}
}

// 徽章用。跟 badgeCount 同一套語意（alert 只算 warn/error），但在 SQL 裡算，
// 這樣首頁載入時不必先把整份清單拉下來。
export async function countNotifications(env) {
	try {
		const row = await env.DB.prepare(
			`SELECT COUNT(*) AS unread,
			        SUM(CASE WHEN level <> 'info' THEN 1 ELSE 0 END) AS alert
			   FROM notifications WHERE read_at IS NULL`,
		).first();
		return {
			unread: Number((row && row.unread) || 0),
			alert: Number((row && row.alert) || 0),
		};
	} catch (e) {
		return { unread: 0, alert: 0 };
	}
}

// 最新一筆 cron 紀錄的時間 —— 前端拿它算「幾天沒跑」（staleEvent）。
export async function lastCronAt(env) {
	try {
		const row = await env.DB.prepare(
			`SELECT created FROM notifications WHERE kind = 'cron'
			   ORDER BY created DESC LIMIT 1`,
		).first();
		return (row && row.created) || null;
	} catch (e) {
		return null;
	}
}

// all=true 全部標已讀；否則標單筆。已讀的不再改 read_at，免得「什麼時候看到的」
// 被後來的一次全部已讀蓋掉。
export async function markRead(env, { id, all }) {
	const now = new Date().toISOString();
	try {
		if (all) {
			const r = await env.DB.prepare(
				"UPDATE notifications SET read_at = ? WHERE read_at IS NULL",
			)
				.bind(now)
				.run();
			return { ok: true, changed: (r && r.meta && r.meta.changes) || 0 };
		}
		const n = parseInt(id, 10);
		if (!(n > 0)) return { ok: false, error: "bad id" };
		const r = await env.DB.prepare(
			"UPDATE notifications SET read_at = ? WHERE id = ? AND read_at IS NULL",
		)
			.bind(now, n)
			.run();
		return { ok: true, changed: (r && r.meta && r.meta.changes) || 0 };
	} catch (e) {
		return { ok: false, error: String((e && e.message) || e) };
	}
}
