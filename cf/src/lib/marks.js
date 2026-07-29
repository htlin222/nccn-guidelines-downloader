// 書籤（逐頁）與星號（整份收藏）。兩者都存 D1，所以 Mac 上收的在 iPad 也看得到。
//
// bookmarkMd 是純函式，而且會被 views/viewer.js 用 `.toString()` 原樣注入頁面，
// 所以它跟 lib/cite.js 的那幾支一樣 MUST 保持自足：只能用自己的參數與 JS 內建，
// 不能參照模組層的任何東西（包括這裡的 const）。其餘是 D1 存取，只在 Worker 跑。

// rows 已由 SQL 依 gid, page 排好；跨份匯出時每換一份就下一個 H2。
// e.g. bookmarkMd(rows, { origin: "https://nccn.example", scopeAll: true })
export function bookmarkMd(rows, opt) {
	var o = opt || {};
	var NL = String.fromCharCode(10);
	var out = [
		"# NCCN 書籤" + (o.scopeAll ? "（全部）" : "（" + (o.name || "") + "）"),
		"",
		"匯出時間：" + (o.now || new Date().toISOString()),
	];
	var lastGid = "";
	for (var i = 0; i < rows.length; i++) {
		var r = rows[i];
		if (o.scopeAll && r.gid !== lastGid) {
			lastGid = r.gid;
			out.push("", "## " + (r.name || r.gid));
		}
		var head =
			"- [p." + r.page + "](" + (o.origin || "") + "/preview/" +
			encodeURIComponent(r.gid) + "?page=" + r.page + ")";
		if (r.label) head += " " + r.label;
		out.push("", head);
		if (r.note) out.push("  - " + String(r.note).split(NL).join(" "));
	}
	return out.join(NL) + NL;
}

// 給首頁的星號區塊用：把 ids 攤回 GUIDELINES 的原始順序，順便濾掉已下架的 id。
// 直接照 ids 的順序排會變成「收藏的先後」，同一份在分類區與置頂區的相對位置就對不起來。
export function starredList(guidelines, ids) {
	var on = {};
	for (var i = 0; i < (ids || []).length; i++) on[ids[i]] = 1;
	return guidelines.filter(function (g) {
		return on[g.id];
	});
}

export async function listBookmarks(env, gid) {
	const cols = "gid, page, label, note, created";
	try {
		const stmt = gid
			? env.DB.prepare(
					`SELECT ${cols} FROM bookmarks WHERE gid = ? ORDER BY page LIMIT 2000`,
				).bind(gid)
			: env.DB.prepare(
					`SELECT ${cols} FROM bookmarks ORDER BY gid, page LIMIT 2000`,
				);
		const { results } = await stmt.all();
		return results || [];
	} catch (e) {
		return [];
	}
}

// on=false 就是刪除。label/note 給 null 時保留舊值，這樣改備註不會把章節名清掉。
export async function putBookmark(env, { gid, page, label, note, on }) {
	if (on === false) {
		await env.DB.prepare("DELETE FROM bookmarks WHERE gid = ? AND page = ?")
			.bind(gid, page)
			.run();
		return { gid, page, on: false };
	}
	await env.DB.prepare(
		`INSERT INTO bookmarks (gid, page, label, note, created) VALUES (?, ?, ?, ?, ?)
		 ON CONFLICT(gid, page) DO UPDATE SET
		   label = COALESCE(excluded.label, bookmarks.label),
		   note  = COALESCE(excluded.note,  bookmarks.note)`,
	)
		.bind(
			gid,
			page,
			label == null ? null : String(label),
			note == null ? null : String(note),
			new Date().toISOString(),
		)
		.run();
	return { gid, page, on: true };
}

export async function listStars(env) {
	try {
		const { results } = await env.DB.prepare(
			"SELECT gid FROM stars ORDER BY created LIMIT 2000",
		).all();
		return (results || []).map((r) => r.gid);
	} catch (e) {
		return [];
	}
}

export async function setStar(env, gid, on) {
	if (on)
		await env.DB.prepare(
			"INSERT OR IGNORE INTO stars (gid, created) VALUES (?, ?)",
		)
			.bind(gid, new Date().toISOString())
			.run();
	else await env.DB.prepare("DELETE FROM stars WHERE gid = ?").bind(gid).run();
	return { gid, on: !!on };
}
