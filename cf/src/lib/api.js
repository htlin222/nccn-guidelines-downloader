// /api/v1 —— 給 Claude Code skill 用的唯讀 API，以 bearer token 認證。
//
// 這條路徑在 Cloudflare Access 開了 Bypass，所以它是這個站唯一對整個網際網路開放
// 的表面，擋在前面的只有 token。發放與撤銷 token 的管理端點必須留在 /api/keys
// （Access 保護內）——任何時候把它們搬進 /api/v1/ 前綴，等於把發 key 的能力送出去。
//
// 快取分兩段：caches.default 存完整 HTTP 回應（cache key 用不帶 token 的 URL，所以
// 所有金鑰共用一份），KV 存資料本身（lib/cache.js 的世代號 + 滑動 TTL）。安全性靠
// 順序保證：驗證在最前面，沒過的請求走不到讀快取那一行。

import { CATS } from "../data/categories.js";
import { GUIDELINES, NAME_BY_ID, VALID_IDS } from "../data/guidelines.js";
import { remember } from "./cache.js";
import { parseBearer, verifyKey } from "./apikey.js";
import { servePdf } from "./pdf.js";
import { listInsights } from "./insight.js";
import { buildMatch, queryTerms } from "./search.js";

export const API_PREFIX = "/api/v1/";
const MAX_PAGES = 40; // 單次最多回幾頁全文，免得一個請求把整份倒出來
const EDGE_TTL = 3600;

const ok = (obj) =>
	new Response(JSON.stringify(obj), {
		headers: {
			"content-type": "application/json; charset=utf-8",
			"cache-control": "public, s-maxage=" + EDGE_TTL,
		},
	});

const fail = (status, error) =>
	new Response(JSON.stringify({ ok: false, error }), {
		status,
		headers: {
			"content-type": "application/json; charset=utf-8",
			"cache-control": "no-store",
		},
	});

// 把 R2 的 JSON 原樣包成回應。remember 回的是字串，這裡不再解析＋序列化一次。
const raw = (body) =>
	new Response(body, {
		headers: {
			"content-type": "application/json; charset=utf-8",
			"cache-control": "public, s-maxage=" + EDGE_TTL,
		},
	});

// 頁碼參數：12 或 12-18。回 [a, b]，不合法回 null。
export function parsePages(spec) {
	const s = String(spec || "").trim();
	const m = /^(\d+)(?:\s*-\s*(\d+))?$/.exec(s);
	if (!m) return null;
	const a = parseInt(m[1], 10);
	const b = m[2] ? parseInt(m[2], 10) : a;
	if (!(a >= 1) || b < a) return null;
	return [a, Math.min(b, a + MAX_PAGES - 1)];
}

// 從 TOC 算出某一節涵蓋的頁碼區間。
// 結束頁是「下一個起點不同的條目的前一頁」——同一頁上有好幾個小節是常態，若直接
// 取下一個條目就會算出空區間。找不到後續條目就一路到 lastPage。純函式，好測。
export function sectionRange(toc, ref, lastPage) {
	const want = String(ref || "").toUpperCase();
	const list = (toc || []).filter((e) => e && e.p >= 1);
	const i = list.findIndex((e) => String(e.ref || "").toUpperCase() === want);
	if (i < 0) return null;
	const start = list[i].p;
	let end = lastPage || start;
	for (let k = i + 1; k < list.length; k++) {
		if (list[k].p > start) {
			end = list[k].p - 1;
			break;
		}
	}
	if (end < start) end = start;
	return [start, Math.min(end, start + MAX_PAGES - 1)];
}

async function r2Json(env, key) {
	const obj = await env.PDFS.get(key);
	return obj ? await obj.text() : null;
}

// 逐頁全文。走 page_text 的主鍵，rows_read 等於回傳的頁數；改打 FTS5 的 pages
// 會變成全表掃描（10,670 列）。
async function pageRows(env, gid, a, b) {
	const { results } = await env.DB.prepare(
		"SELECT page, body FROM page_text WHERE gid = ? AND page BETWEEN ? AND ? ORDER BY page",
	)
		.bind(gid, a, b)
		.all();
	return results || [];
}

async function lastPageOf(env, gid) {
	const row = await env.DB.prepare(
		"SELECT MAX(page) AS n FROM page_text WHERE gid = ?",
	)
		.bind(gid)
		.first();
	return row?.n || 0;
}

export async function handleApi(request, env, ctx, url) {
	if (request.method !== "GET")
		return fail(405, "只接受 GET");

	const key = parseBearer(request.headers.get("authorization"));
	if (!key) return fail(401, "缺少 Authorization: Bearer <key>");
	const auth = await verifyKey(env, key, ctx);
	if (!auth.ok) return fail(401, "金鑰無效或已撤銷，請到站上重新產生 skill");

	// 驗過才輪到快取。cache key 不帶 token，所有金鑰共用同一份。
	const cache = caches.default;
	const ckey = new Request(url.toString(), { method: "GET" });
	const hit = await cache.match(ckey);
	if (hit) return hit;

	const res = await route(request, env, ctx, url);
	// 只快取自己標了 s-maxage 的 JSON 回應。PDF 走 R2 直出，不值得再佔一份邊緣快取。
	if (res.ok && res.headers.get("cache-control")?.includes("s-maxage"))
		ctx?.waitUntil(cache.put(ckey, res.clone()));
	return res;
}

async function route(request, env, ctx, url) {
	const rest = url.pathname.slice(API_PREFIX.length);
	const [head, tail] = [rest.split("/")[0], rest.split("/").slice(1).join("/")];
	const gid = decodeURIComponent(tail || url.searchParams.get("id") || "");
	const needsId = ["toc", "updates", "page", "section", "pdf", "insights"];
	if (needsId.includes(head) && !VALID_IDS.has(gid))
		return fail(404, "不認得的 guideline id：" + gid);

	if (head === "catalogue") return catalogue(env, ctx);

	if (head === "toc") {
		const body = await remember(env, ctx, "toc", gid, () =>
			r2Json(env, "meta/toc/" + gid + ".json"),
		);
		if (!body) return fail(404, "這份還沒建 TOC");
		return raw(body);
	}

	if (head === "updates") {
		const body = await remember(env, ctx, "upd", gid, () =>
			r2Json(env, "meta/updates/" + gid + ".json"),
		);
		if (!body) return fail(404, "這份還沒建更新摘要");
		return raw(body);
	}

	if (head === "page") {
		const span = parsePages(url.searchParams.get("p"));
		if (!span) return fail(400, "p 要是頁碼或範圍，例如 p=12 或 p=12-18");
		return pageBody(env, ctx, gid, span[0], span[1]);
	}

	if (head === "section") {
		const ref = url.searchParams.get("ref");
		if (!ref) return fail(400, "section 要帶 ref，例如 ref=MS-3 或 ref=AML-2");
		const tocBody = await remember(env, ctx, "toc", gid, () =>
			r2Json(env, "meta/toc/" + gid + ".json"),
		);
		if (!tocBody) return fail(404, "這份還沒建 TOC，無法定位章節");
		const span = sectionRange(
			JSON.parse(tocBody),
			ref,
			await lastPageOf(env, gid),
		);
		if (!span) return fail(404, "TOC 裡沒有這個 ref：" + ref);
		return pageBody(env, ctx, gid, span[0], span[1], ref);
	}

	if (head === "search") return search(env, url);

	if (head === "pdf")
		return servePdf(env, gid, { download: true, request, raw: false });

	if (head === "insights") {
		const rows = await listInsights(env, gid);
		return ok({ ok: true, id: gid, count: rows.length, rows });
	}

	return fail(404, "沒有這個端點");
}

async function catalogue(env, ctx) {
	const body = await remember(env, ctx, "cat", "", async () => {
		const [vRaw, cRaw] = await Promise.all([
			r2Json(env, "meta/versions.json"),
			r2Json(env, "meta/clean.json"),
		]);
		const versions = vRaw ? JSON.parse(vRaw) : {};
		const clean = cRaw ? JSON.parse(cRaw) : {};
		// 一次 list 換掉「每份各 head 一次」的 N 次往返。
		const has = async (prefix) => {
			const set = new Set();
			let cursor;
			do {
				const r = await env.PDFS.list({ prefix, cursor, limit: 1000 });
				for (const o of r.objects)
					set.add(o.key.slice(prefix.length).replace(/\.json$/, ""));
				cursor = r.truncated ? r.cursor : null;
			} while (cursor);
			return set;
		};
		const [tocs, upds] = await Promise.all([
			has("meta/toc/"),
			has("meta/updates/"),
		]);
		return {
			ok: true,
			count: GUIDELINES.length,
			cats: CATS.map((c) => c.name),
			guidelines: GUIDELINES.map((g) => ({
				id: g.id,
				name: g.name,
				cat: g.cat,
				version: versions[g.id]?.v || null,
				date: versions[g.id]?.d || null,
				clean: !!clean[g.id],
				toc: tocs.has(g.id),
				updates: upds.has(g.id),
			})),
		};
	});
	return raw(body);
}

async function pageBody(env, ctx, gid, a, b, ref) {
	const body = await remember(env, ctx, "page", gid + ":" + a + "-" + b, async () => {
		const rows = await pageRows(env, gid, a, b);
		if (!rows.length) return null;
		return {
			ok: true,
			id: gid,
			name: NAME_BY_ID[gid] || gid,
			from: a,
			to: b,
			pages: rows.map((r) => ({ page: r.page, text: r.body })),
		};
	});
	if (!body) return fail(404, "這個頁碼範圍沒有文字，可能索引還沒建到這份");
	// ref 是這次查詢才知道的，不屬於快取內容——只有 /section 會走到，多解析一次
	// 換掉把它混進快取值的麻煩（同一段頁碼可能來自不同 ref）。
	if (!ref) return raw(body);
	return raw(JSON.stringify({ ...JSON.parse(body), ref }));
}

function search(env, url) {
	const q = (url.searchParams.get("q") || "").trim();
	const gid = url.searchParams.get("id");
	const cat = url.searchParams.get("cat");
	if (q.length < 2) return fail(400, "q 至少兩個字");
	const match = buildMatch(q);
	if (!match) return fail(400, "查詢字串解析後是空的");

	let sql =
		"SELECT gid, page, name, cat, snippet(pages, 4, '[', ']', '…', 16) AS snip FROM pages WHERE pages MATCH ?";
	const binds = [match];
	if (gid && VALID_IDS.has(gid)) {
		sql += " AND gid = ?";
		binds.push(gid);
	}
	if (cat) {
		sql += " AND cat = ?";
		binds.push(cat);
	}
	sql += " ORDER BY rank LIMIT " + (gid ? 300 : 80);

	return env.DB.prepare(sql)
		.bind(...binds)
		.all()
		.then(({ results }) =>
			ok({
				ok: true,
				q,
				terms: queryTerms(q),
				count: (results || []).length,
				results: results || [],
			}),
		)
		.catch((e) => fail(500, String(e.message || e)));
}
