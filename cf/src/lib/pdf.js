// R2-backed PDF serving + the daily cron refresh. Pulls from NCCN only on a
// cache miss (or explicit refresh) using the stored cookie.
import { GUIDELINES } from "../data/guidelines.js";
import { COOKIE_KEY, CURSOR_KEY } from "./constants.js";

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
export async function refreshOne(env, id) {
	const r = await fetchLive(env, id);
	if (!r.ok)
		return { id, ok: false, error: r.error || `${r.status} ${r.ctype}` };
	await env.PDFS.put(`raw/${id}.pdf`, r.buf, {
		httpMetadata: { contentType: "application/pdf" },
	});
	return { id, ok: true, size: r.buf.byteLength };
}

// Pure round-robin batch planner: from `cursor`, pick `count` indices out of
// `total` guidelines, wrapping. Returns the picked indices and the next cursor.
export function planBatch(cursor, count, total) {
	let c = Number.isFinite(cursor) && cursor >= 0 ? cursor : 0;
	const indices = [];
	for (let i = 0; i < count; i++) {
		indices.push(c % total);
		c = (c + 1) % total;
	}
	return { indices, next: c };
}

export async function refreshBatch(env, n) {
	const cursorRaw = await env.NCCN_KV.get(CURSOR_KEY);
	const plan = planBatch(parseInt(cursorRaw || "0", 10), n, GUIDELINES.length);
	const results = [];
	for (const idx of plan.indices)
		results.push(await refreshOne(env, GUIDELINES[idx].id));
	await env.NCCN_KV.put(CURSOR_KEY, String(plan.next));
	return { cursor: plan.next, results };
}

export async function servePdf(env, id, { download, request, raw }) {
	// Root <id>.pdf is the banner-free copy (gen_clean.sh derives it from raw/);
	// raw/<id>.pdf is the untouched original the cron pulls from NCCN. ?raw=1
	// asks for the original. If a guideline has never been cleaned there is no
	// root object, so fall back to raw/ rather than 404 on it.
	let key = raw ? `raw/${id}.pdf` : `${id}.pdf`;
	let isClean = !raw;
	if (!raw && !(await env.PDFS.head(key))) {
		key = `raw/${id}.pdf`;
		isClean = false;
	}
	const today = new Date().toISOString().slice(0, 10);
	const filename = `NCCN-${id}${isClean ? "" : "-raw"}-${today}.pdf`;
	const disposition = `${download ? "attachment" : "inline"}; filename="${filename}"`;
	const rangeHeader = request ? request.headers.get("Range") : null;

	const head = await env.PDFS.head(key);
	if (head) {
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
						"cache-control": "private, max-age=86400",
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
		headers.set("cache-control", "private, max-age=0, must-revalidate");
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
