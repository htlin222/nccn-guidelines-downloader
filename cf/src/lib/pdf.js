// R2-backed PDF serving + the daily cron refresh. Pulls from NCCN only on a
// cache miss (or explicit refresh) using the stored cookie.
import { GUIDELINES } from "../data/guidelines.js";
import { COOKIE_KEY, CRON_HEALTH_KEY, CRON_STATE_KEY } from "./constants.js";
import { notifyCron } from "./notify.js";

export async function fetchLive(env, id) {
	const cookie = await env.NCCN_KV.get(COOKIE_KEY);
	if (!cookie) return { ok: false, error: "no-cookie" };
	const upstream = await fetch(
		`https://www.nccn.org/professionals/physician_gls/pdf/${id}.pdf`,
		{
			headers: {
				authority: "www.nccn.org",
				accept:
					"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
				"accept-language": "zh-TW,zh;q=0.9",
				"cache-control": "max-age=0",
				cookie,
			},
		},
	);
	const ctype = (upstream.headers.get("content-type") || "").toLowerCase();
	if (!upstream.ok || !ctype.includes("pdf"))
		return { ok: false, status: upstream.status, ctype };
	const buf = await upstream.arrayBuffer();
	const head = new Uint8Array(buf.slice(0, 4));
	if (String.fromCharCode(...head) !== "%PDF")
		return { ok: false, status: upstream.status, ctype, error: "not-pdf" };
	return { ok: true, buf };
}

// Freshly-fetched NCCN PDFs carry the per-page disclaimer banner, so they land
// under raw/. The root <id>.pdf is the banner-free copy that gen_clean.sh
// derives from raw/ in CI — writing the original there would put the banner
// back on every guideline the cron happened to touch.
// One transient hiccup at NCCN used to cost a guideline a whole cycle, so try
// twice. A missing cookie is not transient — retrying it just wastes a request.
export async function refreshOne(env, id, tries = 2) {
	let last = { error: "no-attempt" };
	for (let k = 0; k < tries; k++) {
		const r = await fetchLive(env, id);
		if (r.ok) {
			await env.PDFS.put(`raw/${id}.pdf`, r.buf, {
				httpMetadata: { contentType: "application/pdf" },
			});
			return { id, ok: true, size: r.buf.byteLength, tries: k + 1 };
		}
		last = r;
		if (r.error === "no-cookie") break;
	}
	return { id, ok: false, error: last.error || `${last.status} ${last.ctype}` };
}

// Pure planner: pick the `n` guidelines most in need of a refresh — never-cached
// first, then oldest-copy first. This replaces the old round-robin cursor, which
// advanced whether or not the fetch succeeded: a failed day silently skipped
// those guidelines for another full cycle. Ranking by the age of what is
// actually in R2 makes the cron self-repairing — a guideline that failed to
// refresh is still the stalest tomorrow, so it gets retried until it lands, and
// a hole in the bucket fills itself instead of waiting out the cycle.
//
// `deferred` is the escape hatch: an id that keeps failing (NCCN pulled it, say)
// would otherwise stay top of the queue forever and starve everything behind it.
// refreshBatch parks such an id with a timestamp, which counts here as if it had
// just been refreshed — so it drops to the back and comes round again in a cycle.
export function pickStalest(guidelines, cached, n, deferred) {
	const at = (s) => {
		const t = Date.parse(s || "");
		return Number.isFinite(t) ? t : -Infinity;
	};
	const rank = guidelines.map((g, i) => {
		const u = at(cached && cached[g.id] && cached[g.id].uploaded);
		const d = at(deferred && deferred[g.id]);
		return { id: g.id, i, t: d > u ? d : u };
	});
	// Ties (two never-cached ids are both -Infinity) fall back to catalogue order
	// so the pick is deterministic; `a.t - b.t` alone would be NaN there.
	rank.sort((a, b) => (a.t === b.t ? a.i - b.i : a.t - b.t));
	return rank.slice(0, Math.max(0, n)).map((r) => r.id);
}

// Pure bookkeeping for the deferral above: three consecutive failures parks an
// id; any success clears it. Kept separate from the I/O so it can be tested.
export const MAX_FAILS = 3;
export function nextCronState(state, results, now) {
	const fails = { ...((state && state.fails) || {}) };
	const deferred = { ...((state && state.deferred) || {}) };
	for (const r of results) {
		if (r.ok) {
			delete fails[r.id];
			delete deferred[r.id];
			continue;
		}
		const n = (fails[r.id] || 0) + 1;
		if (n >= MAX_FAILS) {
			delete fails[r.id];
			deferred[r.id] = now;
		} else fails[r.id] = n;
	}
	return { fails, deferred };
}

async function readJson(env, key, fallback) {
	try {
		return (await env.NCCN_KV.get(key, "json")) || fallback;
	} catch (e) {
		return fallback;
	}
}

export async function refreshBatch(env, n) {
	const listed = await env.PDFS.list({ prefix: "raw/", limit: 1000 });
	const cached = {};
	for (const o of listed.objects) {
		if (!o.key.endsWith(".pdf")) continue;
		cached[o.key.slice("raw/".length, -".pdf".length)] = {
			uploaded: o.uploaded ? o.uploaded.toISOString() : null,
		};
	}
	const state = await readJson(env, CRON_STATE_KEY, {
		fails: {},
		deferred: {},
	});
	const ids = pickStalest(GUIDELINES, cached, n, state.deferred);
	const results = [];
	for (const id of ids) results.push(await refreshOne(env, id));

	const now = new Date().toISOString();
	await env.NCCN_KV.put(
		CRON_STATE_KEY,
		JSON.stringify(nextCronState(state, results, now)),
	);
	const ok = results.filter((r) => r.ok).length;
	const health = {
		at: now,
		ok,
		fail: results.length - ok,
		ids,
		errors: results.filter((r) => !r.ok).map((r) => `${r.id}: ${r.error}`),
	};
	await env.NCCN_KV.put(CRON_HEALTH_KEY, JSON.stringify(health));
	// KV 只留最後一次，看不出「上週是不是也壞了」。同一份結果再寫一列進 D1 的
	// 通知表，那裡才有歷史與已讀狀態。notifyCron 自己吞例外：PDF 都已經進 R2 了，
	// 通知寫不進去不該讓整輪 cron 看起來像失敗。
	await notifyCron(env, health);
	// Nothing at all got through = systemic (an expired cookie, nearly always).
	// console.error so it shows up as an error in Workers observability rather
	// than blending into the normal daily log line.
	if (ok === 0 && results.length)
		console.error("cron refresh FAILED", JSON.stringify(health));
	else console.log("cron refresh", JSON.stringify(health));
	return health;
}

export async function servePdf(env, id, { download, request, raw }) {
	// Root <id>.pdf is the banner-free copy (gen_clean.sh derives it from raw/);
	// raw/<id>.pdf is the untouched original the cron pulls from NCCN. ?raw=1
	// asks for the original. If a guideline has never been cleaned there is no
	// root object, so fall back to raw/ rather than 404 on it.
	let key = raw ? `raw/${id}.pdf` : `${id}.pdf`;
	let isClean = !raw;
	// One head() in the common case. The old shape probed the clean key, threw
	// the result away, then probed again below — two or three round trips before
	// a single byte moved, on the hottest route the site has.
	let head = await env.PDFS.head(key);
	if (!head && !raw) {
		key = `raw/${id}.pdf`;
		isClean = false;
		head = await env.PDFS.head(key);
	}
	const today = new Date().toISOString().slice(0, 10);
	const filename = `NCCN-${id}${isClean ? "" : "-raw"}-${today}.pdf`;
	const disposition = `${download ? "attachment" : "inline"}; filename="${filename}"`;
	const rangeHeader = request ? request.headers.get("Range") : null;

	if (head) {
		// These PDFs change once a week at most (gen_clean.sh, in the Monday
		// rebuild), and they are 5–80 MB. The old header was
		// `private, max-age=0, must-revalidate`, i.e. re-download the whole thing
		// on every single visit — the single most expensive line in the viewer's
		// load path. A day of freshness plus an ETag revalidation costs nothing:
		// a rebuild changes the R2 etag, so the next revalidation misses.
		//
		// Deliberately `private`: /pdf sits behind Cloudflare Access, and keeping
		// NCCN's copyrighted PDFs out of the shared edge cache is a policy call,
		// not a performance one. Flipping this to `public` is a separate decision.
		const CACHE = "private, max-age=86400, stale-while-revalidate=604800";
		const etag = head.httpEtag;

		// A revalidation that hits saves the entire body. Range requests are
		// excluded: pdf.js does not send If-None-Match with them, and answering a
		// Range with 304 would need If-Range semantics to be correct.
		if (!rangeHeader && etag && request) {
			const inm = request.headers.get("If-None-Match");
			if (inm && inm.split(",").some((t) => t.trim() === etag))
				return new Response(null, {
					status: 304,
					headers: { etag, "cache-control": CACHE },
				});
		}
		// HTTP Range → 206 so pdf.js can lazily fetch page data (mcq-bank style).
		if (rangeHeader && !download) {
			const m = /^bytes=(\d*)-(\d*)$/.exec(rangeHeader.trim());
			if (m && (m[1] !== "" || m[2] !== "")) {
				const total = head.size;
				let start =
					m[1] === ""
						? Math.max(total - parseInt(m[2], 10), 0)
						: parseInt(m[1], 10);
				let end = m[2] === "" ? total - 1 : parseInt(m[2], 10);
				if (end > total - 1) end = total - 1;
				if (start > end || start >= total)
					return new Response(null, {
						status: 416,
						headers: {
							"content-range": `bytes */${total}`,
							"accept-ranges": "bytes",
						},
					});
				const length = end - start + 1;
				const part = await env.PDFS.get(key, {
					range: { offset: start, length },
				});
				return new Response(part.body, {
					status: 206,
					headers: {
						"content-type": "application/pdf",
						"content-length": String(length),
						"content-range": `bytes ${start}-${end}/${total}`,
						"accept-ranges": "bytes",
						"content-disposition": disposition,
						"cache-control": CACHE,
						...(etag ? { etag } : {}),
					},
				});
			}
		}
		const obj = await env.PDFS.get(key);
		const headers = new Headers();
		headers.set("content-type", "application/pdf");
		headers.set("content-length", String(obj.size));
		headers.set("content-disposition", disposition);
		headers.set("accept-ranges", "bytes");
		// /dl stays uncached: its filename carries today's date, and a cached
		// attachment would hand back a stale one. It is a one-shot action anyway
		// — the route worth caching is /pdf, which the viewer hammers.
		headers.set(
			"cache-control",
			download ? "private, max-age=0, must-revalidate" : CACHE,
		);
		if (etag) headers.set("etag", etag);
		headers.set("x-nccn-clean", isClean ? "1" : "0");
		if (obj.uploaded) headers.set("x-r2-uploaded", obj.uploaded.toISOString());
		return new Response(obj.body, { status: 200, headers });
	}

	const r = await fetchLive(env, id);
	if (!r.ok) {
		const msg =
			r.error === "no-cookie"
				? "尚未設定 NCCN cookie，請回首頁貼上 cookie。"
				: `尚未快取且即時抓取失敗（cookie 可能過期，NCCN 回 ${r.status} ${r.ctype}）。`;
		return new Response(msg, { status: 502 });
	}
	// Anything pulled live from NCCN is an original, banner and all — it belongs
	// under raw/, never at the root key that is meant to be the clean copy.
	await env.PDFS.put(`raw/${id}.pdf`, r.buf, {
		httpMetadata: { contentType: "application/pdf" },
	});
	const headers = new Headers();
	headers.set("content-type", "application/pdf");
	headers.set("content-length", String(r.buf.byteLength));
	headers.set("x-nccn-clean", "0");
	headers.set("content-disposition", disposition);
	headers.set("accept-ranges", "bytes");
	return new Response(r.buf, { status: 200, headers });
}

export async function serveR2Asset(env, key, contentType, cache) {
	const obj = await env.PDFS.get(key);
	if (!obj) return new Response("Not found", { status: 404 });
	const headers = new Headers();
	headers.set("content-type", contentType);
	headers.set("content-length", String(obj.size));
	headers.set("cache-control", cache);
	return new Response(obj.body, { status: 200, headers });
}
