// 門診核對清單的檢索（issue #4）。
//
// 使用者打「乳癌 三期 檢查」時，這三個詞分屬三個不同的軸，而且沒有一個會逐字出現
// 在那一頁的文字裡——BINV-12 寫的是 c>=T2、cN+ 與 WORKUP。所以主力是 faceted
// lookup，不是全文搜尋；全文只是沒命中別名時的退路。
//
// parseQuery 是純函式（吃別名表，不碰 D1），因為它決定了「打什麼字找得到什麼」，
// 那是這套東西好不好用的全部，值得單獨測。
//
// 檔案末尾那幾支會碰 D1：它們是瀏覽器的 /api/notes 與 skill 的 /api/v1/notes 共用的
// 讀取路徑。共用是重點——兩邊各寫一份的話，API 讀到的內容遲早跟頁面上看到的不一樣，
// 而那種不一致沒有任何錯誤訊息會提醒你。

import { hashKey as sha256 } from "./apikey.js";
import { remember } from "./cache.js";

// 把使用者輸入切成詞。中英混雜，所以不能只靠空白：中文之間沒有空白，而
// 「乳癌三期」應該要能拆開。做法是先按空白與標點切，再對每個詞查別名表；
// 查不到的中文詞再嘗試最長前綴比對，讓「乳癌三期」也能命中。
export function tokenize(q) {
	return String(q || "")
		.toLowerCase()
		.split(/[\s,，、;；/]+/)
		.map((s) => s.trim())
		.filter(Boolean);
}

// 詞 → [{axis, value}]。alias 是 {axis: {alias: value}}。
//
// 一個詞可能同時落在多個軸上（例如 "her2+" 只在 biomarker，但 "III" 若哪天成為
// 另一個軸的值就會有兩筆），全部回傳，由 SQL 端做 OR。
export function matchAliases(term, alias) {
	const out = [];
	for (const axis of Object.keys(alias || {})) {
		const v = alias[axis][term];
		if (v) out.push({ axis, value: v });
	}
	return out;
}

// 對沒有直接命中的詞，試著從頭切出一個已知別名（處理「乳癌三期」這種黏在一起的
// 中文輸入）。只從長到短試一次，不做完整分詞——找到就把剩下的字丟回去繼續。
export function splitByAlias(term, alias) {
	const all = new Set();
	for (const axis of Object.keys(alias || {}))
		for (const a of Object.keys(alias[axis])) all.add(a);
	const found = [];
	let rest = term;
	let guard = 0;
	while (rest && guard++ < 8) {
		let hit = "";
		for (const a of all)
			if (a.length > hit.length && rest.startsWith(a)) hit = a;
		if (!hit) break;
		found.push(hit);
		rest = rest.slice(hit.length);
	}
	return rest ? [] : found; // 只有整個詞都被切完才算數，避免亂切
}

// 查詢字串 → {facets: [{axis,value}], text: [詞]}
//
// 命中別名的詞去做 facet 交集，沒命中的留給全文。兩邊都空就是空查詢。
export function parseQuery(q, alias) {
	const facets = [];
	const text = [];
	const seen = new Set();
	for (const term of tokenize(q)) {
		let hits = matchAliases(term, alias);
		if (!hits.length) {
			const parts = splitByAlias(term, alias);
			for (const p of parts) hits = hits.concat(matchAliases(p, alias));
		}
		if (hits.length) {
			for (const h of hits) {
				const k = h.axis + "=" + h.value;
				if (!seen.has(k)) {
					seen.add(k);
					facets.push(h);
				}
			}
		} else {
			text.push(term);
		}
	}
	return { facets, text };
}

// 命中的軸數越多越前面；同分時決策節點優先於參考附錄，再按指引與頁碼。
//
// kind 排在前面是刻意的：找的是門診情境，不是查閱資料。一份 principles 附錄可能
// 在字面上命中更多詞（它們往往是長篇說明），但它不是使用者要的東西。
export function rankRows(rows) {
	return (rows || []).slice().sort((a, b) => {
		if ((b.axes || 0) !== (a.axes || 0)) return (b.axes || 0) - (a.axes || 0);
		const ka = a.kind === "decision" ? 0 : 1;
		const kb = b.kind === "decision" ? 0 : 1;
		if (ka !== kb) return ka - kb;
		if (a.gid !== b.gid) return a.gid < b.gid ? -1 : 1;
		return (a.page || 0) - (b.page || 0);
	});
}

// 建 SQL。facet 用交集計數，text 用 LIKE——677 筆的規模不值得再開一張 FTS 表，
// 而且清單的 body 已經是逐字來自 page_text，FTS5 那邊搜得到的東西這裡也搜得到。
export function buildSearch(parsed, limit) {
	const { facets, text } = parsed;
	const binds = [];
	let sql =
		"SELECT s.gid, s.ref, s.title, s.kind, s.page, s.version, s.review";
	if (facets.length) {
		const pairs = facets.map(() => "(?,?)").join(",");
		for (const f of facets) binds.push(f.axis, f.value);
		sql +=
			", (SELECT COUNT(*) FROM snippet_facets f WHERE f.gid=s.gid AND f.ref=s.ref" +
			" AND (f.axis,f.value) IN (VALUES " +
			pairs +
			")) AS axes FROM snippets s WHERE axes > 0";
	} else {
		sql += ", 0 AS axes FROM snippets s WHERE 1=1";
	}
	for (const t of text) {
		sql += " AND (LOWER(s.title) LIKE ? OR LOWER(s.body) LIKE ? OR LOWER(s.gid) LIKE ?)";
		const like = "%" + t + "%";
		binds.push(like, like, like);
	}
	sql += " ORDER BY axes DESC, s.gid, s.page LIMIT ?";
	// 無效的 limit（0、負數、NaN）退回預設，不是夾到 1——夾到 1 會讓一個打錯的
	// 參數安靜地變成「只查一筆」，看起來像沒東西而不是像壞掉。
	const n = Number(limit);
	binds.push(Math.min(Number.isFinite(n) && n > 0 ? n : 60, 200));
	return { sql, binds };
}

// 別名表。走 KV，key 帶 notes:gen 世代號——load_snippets.sh 每次載完就改寫它，
// 所以改字典仍然一跑就生效，沒有犧牲「改了字典卻沒反應」那個顧慮。
export async function loadAlias(env, ctx) {
	return JSON.parse(
		await remember(
			env,
			ctx,
			"alias",
			"",
			async () => {
				const al = await env.DB.prepare(
					"SELECT axis, alias, value FROM facet_alias",
				).all();
				const m = {};
				for (const r of al.results || []) {
					(m[r.axis] = m[r.axis] || {})[r.alias] = r.value;
				}
				return m;
			},
			"notes",
		),
	);
}

// 檢索。回 { rows, facets, text }。
// 快取 key 用解析後的 facet + 文字而不是原始字串：「乳癌 三期」與「三期 乳癌」是
// 同一個查詢，不該各佔一份。
export async function searchSnippets(env, ctx, q, limit) {
	const alias = await loadAlias(env, ctx);
	const parsed = parseQuery(q, alias);
	const ckey =
		parsed.facets
			.map((f) => f.axis + "=" + f.value)
			.sort()
			.join("&") +
		"|" +
		[...parsed.text].sort().join(" ") +
		"|" +
		(limit || "");
	const body = await remember(
		env,
		ctx,
		"q",
		ckey,
		async () => {
			const { sql, binds } = buildSearch(parsed, limit);
			const res = await env.DB.prepare(sql)
				.bind(...binds)
				.all();
			// 空結果照樣快取——那是個正當答案。只有呼叫端 catch 到的錯誤不快取。
			return { rows: rankRows(res.results || []) };
		},
		"notes",
	);
	return { rows: JSON.parse(body).rows, facets: parsed.facets, text: parsed.text };
}

// 單一份清單。查無此份回 null。
//
// 只有生成內容進 KV，使用者的修改每次從 D1 讀。這是踩過才改的：原本整包（含修改）
// 一起快取，PUT 之後再刪那個 KV key，看起來嚴密，實際上存完馬上重讀還是拿到舊的
// ——remember() 用 cacheTtl 3600 讀 KV，而 KV 有自己的邊緣快取又是最終一致，
// 「這個 key 刪掉了」是照 KV 的時程生效，不是照我的。§5.6 的撤銷金鑰是同一個坑。
//
// 所以分法是：生成內容一週才變一次，快取它；修改是使用者剛剛按下儲存的東西，必須
// 讀得到自己寫的。多的那一趟 D1 是主鍵查詢（rows_read=1）。
export async function readSnippet(env, ctx, gid, ref) {
	const base = await remember(
		env,
		ctx,
		"s",
		gid + "/" + ref,
		async () => {
			// loader 回 null 代表這份不存在，remember 就不會把 404 釘住 30 天。
			const row = await env.DB.prepare(
				"SELECT gid, ref, title, body, page, version, review FROM snippets WHERE gid=? AND ref=?",
			)
				.bind(gid, ref)
				.first();
			return row || null;
		},
		"notes",
	);
	if (!base) return null;

	const row = JSON.parse(base);
	const ed = await env.DB.prepare(
		"SELECT body, base_hash, editor, updated FROM snippet_edits WHERE gid=? AND ref=?",
	)
		.bind(gid, ref)
		.first();
	if (ed) {
		row.generated = row.body;
		row.body = ed.body;
		row.edited = { editor: ed.editor, updated: ed.updated };
		// base 對不上代表這份修改是針對舊版寫的——之後重新生成過了。讀的人該知道，
		// 不然一份舊修改會安靜地擋住新版內容。
		row.stale = ed.base_hash
			? ed.base_hash !== (await sha256(row.generated))
			: false;
	}
	return row;
}
