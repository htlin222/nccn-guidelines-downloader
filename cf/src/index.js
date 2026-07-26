// NCCN guideline downloader — Cloudflare Worker (entry / router).
// Modules: data/* (guideline + drug tables), lib/* (http, search, pdf, toc,
// constants), views/* (home, viewer, static). wrangler/esbuild bundles these
// into one Worker. See test/* for unit tests of the pure lib helpers.
// Routes: / (grid), /preview/:id (pdf.js), /pdf/:id (inline), /dl/:id (download),
//         /thumb/:id, /manifest.webmanifest, /sw.js, /icons/*, /apple-touch-icon.png,
//         /api/{cookie,cookie-status,r2-status,search,refresh,toc}.
import { GUIDELINES, VALID_IDS } from "./data/guidelines.js";
import { COOKIE_KEY, META_KEY, CURSOR_KEY, PER_DAY } from "./lib/constants.js";
import { json, html } from "./lib/http.js";
import { buildMatch, queryTerms } from "./lib/search.js";
import {
	fetchLive,
	refreshOne,
	refreshBatch,
	servePdf,
	serveR2Asset,
} from "./lib/pdf.js";
import { renderPage } from "./views/home.js";
import { renderViewer } from "./views/viewer.js";
import { faviconResponse, manifestResponse, SW_JS } from "./views/static.js";

export default {
	async scheduled(event, env, ctx) {
		const out = await refreshBatch(env, PER_DAY);
		console.log("cron refresh", JSON.stringify(out));
	},

	async fetch(request, env) {
		const url = new URL(request.url);
		const { pathname } = url;

		if (pathname === "/" || pathname === "/index.html")
			return html(renderPage(request));
		if (pathname === "/manifest.webmanifest") return manifestResponse();
		if (pathname === "/favicon.svg" || pathname === "/favicon.ico")
			return faviconResponse();
		if (pathname === "/sw.js")
			return new Response(SW_JS, {
				headers: {
					"content-type": "text/javascript; charset=utf-8",
					"cache-control": "no-cache",
				},
			});

		if (pathname === "/icons/icon-192.png")
			return serveR2Asset(
				env,
				"asset/icon-192.png",
				"image/png",
				"public, max-age=604800",
			);
		if (pathname === "/icons/icon-512.png")
			return serveR2Asset(
				env,
				"asset/icon-512.png",
				"image/png",
				"public, max-age=604800",
			);
		if (pathname === "/apple-touch-icon.png")
			return serveR2Asset(
				env,
				"asset/apple-touch.png",
				"image/png",
				"public, max-age=604800",
			);

		if (pathname.startsWith("/thumb/")) {
			const id = decodeURIComponent(pathname.slice("/thumb/".length));
			if (!VALID_IDS.has(id))
				return new Response("Unknown id", { status: 404 });
			return serveR2Asset(
				env,
				`thumb/${id}.webp`,
				"image/webp",
				"public, max-age=86400",
			);
		}

		if (pathname === "/api/cookie-status" && request.method === "GET") {
			const cookie = await env.NCCN_KV.get(COOKIE_KEY);
			const meta = await env.NCCN_KV.get(META_KEY, "json");
			return json({
				set: !!cookie,
				length: cookie ? cookie.length : 0,
				updated: meta?.updated || null,
			});
		}

		if (pathname === "/api/cookie" && request.method === "POST") {
			let value = "";
			const ct = request.headers.get("content-type") || "";
			if (ct.includes("application/json")) {
				const body = await request.json().catch(() => ({}));
				value = (body.cookie || "").trim();
			} else {
				const form = await request.formData();
				value = String(form.get("cookie") || "").trim();
			}
			if (!value) return json({ ok: false, error: "cookie 內容為空" }, 400);
			await env.NCCN_KV.put(COOKIE_KEY, value);
			await env.NCCN_KV.put(
				META_KEY,
				JSON.stringify({ updated: new Date().toISOString() }),
			);
			return json({ ok: true, length: value.length });
		}

		if (pathname === "/api/r2-status" && request.method === "GET") {
			const listed = await env.PDFS.list({ limit: 1000 });
			const map = {};
			for (const o of listed.objects) {
				if (!o.key.endsWith(".pdf")) continue;
				const id = o.key.replace(/\.pdf$/, "");
				map[id] = {
					size: o.size,
					uploaded: o.uploaded ? o.uploaded.toISOString() : null,
				};
			}
			const cursorRaw = await env.NCCN_KV.get(CURSOR_KEY);
			const vobj = await env.PDFS.get("meta/versions.json");
			const versions = vobj ? await vobj.json().catch(() => ({})) : {};
			return json({
				cached: map,
				versions,
				count: Object.keys(map).length,
				total: GUIDELINES.length,
				cursor: parseInt(cursorRaw || "0", 10) || 0,
				perDay: PER_DAY,
			});
		}

		if (pathname === "/api/search" && request.method === "GET") {
			const q = (url.searchParams.get("q") || "").trim();
			const gid = url.searchParams.get("id");
			const cat = url.searchParams.get("cat");
			if (q.length < 2) return json({ q, results: [] });
			const match = buildMatch(q);
			if (!match) return json({ q, results: [] });
			let sql =
				"SELECT gid, page, name, cat, snippet(pages, 4, '<mark>', '</mark>', '…', 12) AS snip FROM pages WHERE pages MATCH ?";
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
			try {
				const { results } = await env.DB.prepare(sql)
					.bind(...binds)
					.all();
				return json({
					q,
					terms: queryTerms(q),
					count: results.length,
					results,
				});
			} catch (e) {
				return json({ q, error: String(e), results: [] });
			}
		}

		if (pathname === "/api/refresh" && request.method === "POST") {
			const single = url.searchParams.get("id");
			if (single) {
				if (!VALID_IDS.has(single))
					return json({ ok: false, error: "unknown id" }, 404);
				return json(await refreshOne(env, single));
			}
			let n = parseInt(url.searchParams.get("n") || "3", 10);
			if (!Number.isFinite(n) || n < 1) n = 3;
			n = Math.min(n, 25);
			return json(await refreshBatch(env, n));
		}

		if (pathname === "/api/toc" && request.method === "GET") {
			const gid = url.searchParams.get("id");
			if (!gid || !VALID_IDS.has(gid)) return json([]);
			const obj = await env.PDFS.get("meta/toc/" + gid + ".json");
			if (!obj) return json([]);
			return new Response(obj.body, {
				headers: {
					"content-type": "application/json; charset=utf-8",
					"cache-control": "public, max-age=3600",
				},
			});
		}

		if (pathname.startsWith("/pdf/")) {
			const id = decodeURIComponent(pathname.slice("/pdf/".length));
			if (!VALID_IDS.has(id))
				return new Response("Unknown id", { status: 404 });
			return servePdf(env, id, { download: false, request });
		}
		if (pathname.startsWith("/dl/")) {
			const id = decodeURIComponent(pathname.slice("/dl/".length));
			if (!VALID_IDS.has(id))
				return new Response("Unknown id", { status: 404 });
			return servePdf(env, id, { download: true, request });
		}
		if (pathname.startsWith("/preview/")) {
			const id = decodeURIComponent(pathname.slice("/preview/".length));
			if (!VALID_IDS.has(id))
				return new Response("Unknown id", { status: 404 });
			return html(renderViewer(id));
		}

		return new Response("Not found", { status: 404 });
	},
};
