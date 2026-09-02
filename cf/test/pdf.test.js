import { describe, it, expect } from "vitest";
import {
	MAX_FAILS,
	nextCronState,
	pickStalest,
	servePdf,
} from "../src/lib/pdf.js";

const G = ["a", "b", "c", "d"].map((id) => ({ id }));
const up = (o) => {
	const m = {};
	for (const k of Object.keys(o)) m[k] = { uploaded: o[k] };
	return m;
};

describe("pickStalest (age-ranked cron planner)", () => {
	it("picks the oldest copies first", () => {
		const cached = up({
			a: "2026-07-20T00:00:00Z",
			b: "2026-07-10T00:00:00Z",
			c: "2026-07-15T00:00:00Z",
			d: "2026-07-25T00:00:00Z",
		});
		expect(pickStalest(G, cached, 2)).toEqual(["b", "c"]);
	});

	it("puts never-cached guidelines ahead of everything", () => {
		const cached = up({ a: "2026-07-01T00:00:00Z", b: "2026-07-02T00:00:00Z" });
		expect(pickStalest(G, cached, 2)).toEqual(["c", "d"]);
	});

	it("breaks ties by catalogue order so the pick is deterministic", () => {
		expect(pickStalest(G, {}, 3)).toEqual(["a", "b", "c"]);
	});

	// The whole point of ranking by age: a guideline whose refresh did not land is
	// still the stalest tomorrow, so it gets retried instead of being skipped for
	// another full cycle the way the old cursor skipped it.
	it("re-picks a guideline whose refresh did not land", () => {
		const cached = up({
			a: "2026-07-01T00:00:00Z",
			b: "2026-07-20T00:00:00Z",
			c: "2026-07-21T00:00:00Z",
			d: "2026-07-22T00:00:00Z",
		});
		expect(pickStalest(G, cached, 1)).toEqual(["a"]);
		// `a` failed, so R2 is unchanged — the next run must pick it again.
		expect(pickStalest(G, cached, 1)).toEqual(["a"]);
	});

	it("sends a deferred guideline to the back of the queue", () => {
		const cached = up({
			a: "2026-07-01T00:00:00Z",
			b: "2026-07-20T00:00:00Z",
			c: "2026-07-21T00:00:00Z",
			d: "2026-07-22T00:00:00Z",
		});
		expect(pickStalest(G, cached, 1, { a: "2026-07-28T00:00:00Z" })).toEqual([
			"b",
		]);
	});

	it("ignores an unparseable or missing upload time", () => {
		expect(pickStalest(G, up({ a: "nonsense", b: null }), 1)).toEqual(["a"]);
	});

	it("handles n larger than the catalogue, and n <= 0", () => {
		expect(pickStalest(G, {}, 99)).toHaveLength(4);
		expect(pickStalest(G, {}, 0)).toEqual([]);
		expect(pickStalest(G, {}, -1)).toEqual([]);
	});
});

describe("nextCronState (failure bookkeeping)", () => {
	const NOW = "2026-07-29T03:00:00Z";
	const fail = (id) => ({ id, ok: false, error: "502" });
	const ok = (id) => ({ id, ok: true });

	it("counts consecutive failures without deferring too early", () => {
		let s = { fails: {}, deferred: {} };
		for (let i = 1; i < MAX_FAILS; i++) {
			s = nextCronState(s, [fail("a")], NOW);
			expect(s.fails.a).toBe(i);
			expect(s.deferred.a).toBeUndefined();
		}
	});

	it("defers after MAX_FAILS and resets the counter", () => {
		let s = { fails: {}, deferred: {} };
		for (let i = 0; i < MAX_FAILS; i++) s = nextCronState(s, [fail("a")], NOW);
		expect(s.deferred.a).toBe(NOW);
		expect(s.fails.a).toBeUndefined();
	});

	it("a success clears both the counter and the deferral", () => {
		const s = nextCronState(
			{ fails: { a: 2 }, deferred: { a: "2026-07-01T00:00:00Z" } },
			[ok("a")],
			NOW,
		);
		expect(s.fails.a).toBeUndefined();
		expect(s.deferred.a).toBeUndefined();
	});

	it("leaves untouched guidelines alone", () => {
		const s = nextCronState(
			{ fails: { z: 1 }, deferred: { y: NOW } },
			[ok("a")],
			NOW,
		);
		expect(s.fails.z).toBe(1);
		expect(s.deferred.y).toBe(NOW);
	});

	it("survives a missing / empty prior state", () => {
		expect(nextCronState(null, [fail("a")], NOW)).toEqual({
			fails: { a: 1 },
			deferred: {},
			checked: {},
		});
	});

	// 「內容沒變就不寫」的必要配套。排序看的是 R2 的 uploaded，不寫就不會前進，
	// 所以沒有這一筆的話三份沒改版的指引會把佇列卡死，而且完全不會報錯。
	it("records a check timestamp on success, changed or not", () => {
		const s = nextCronState(
			null,
			[
				{ id: "a", ok: true, same: true },
				{ id: "b", ok: true, same: false },
			],
			NOW,
		);
		expect(s.checked).toEqual({ a: NOW, b: NOW });
	});

	it("a failure leaves the previous check timestamp alone", () => {
		const s = nextCronState({ checked: { a: "2026-01-01T00:00:00Z" } }, [fail("a")], NOW);
		expect(s.checked.a).toBe("2026-01-01T00:00:00Z");
	});
});

describe("pickStalest × checked (unchanged ids must still rotate)", () => {
	// 這是這個功能最容易壞的地方：R2 的 uploaded 停在原地，光看它的話同一份會被
	// 一直挑中。checked 一寫上去，它就該退到隊尾。
	it("an id verified today drops behind one whose copy is older", () => {
		const cached = up({
			a: "2026-01-01T00:00:00Z",
			b: "2026-02-01T00:00:00Z",
			c: "2026-03-01T00:00:00Z",
			d: "2026-04-01T00:00:00Z",
		});
		expect(pickStalest(G, cached, 1)).toEqual(["a"]);
		expect(
			pickStalest(G, cached, 1, null, { a: "2026-09-01T00:00:00Z" }),
		).toEqual(["b"]);
	});

	it("three unchanged days in a row keep rotating instead of jamming", () => {
		const cached = up({
			a: "2026-01-01T00:00:00Z",
			b: "2026-01-02T00:00:00Z",
			c: "2026-01-03T00:00:00Z",
			d: "2026-01-04T00:00:00Z",
		});
		let st = null;
		const seen = [];
		for (let day = 1; day <= 4; day++) {
			const id = pickStalest(G, cached, 1, st && st.deferred, st && st.checked)[0];
			seen.push(id);
			st = nextCronState(st, [{ id, ok: true, same: true }], `2026-09-0${day}T00:00:00Z`);
		}
		expect(seen).toEqual(["a", "b", "c", "d"]);
	});

	it("checked never pulls an id forward — only ever pushes it back", () => {
		const cached = up({
			a: "2026-05-01T00:00:00Z",
			b: "2026-01-01T00:00:00Z",
			c: "2026-06-01T00:00:00Z",
			d: "2026-07-01T00:00:00Z",
		});
		// a 的 checked 比它自己的 uploaded 還舊。取大的之後 a 不該因此變得比 b 更急。
		expect(
			pickStalest(G, cached, 1, null, { a: "2026-01-01T00:00:00Z" }),
		).toEqual(["b"]);
	});
});

// ── servePdf caching ─────────────────────────────────────────────────────────
// These PDFs are 5–80 MB and change once a week. The route used to send
// `private, max-age=0, must-revalidate`, so every visit to a guideline
// re-downloaded the whole file before pdf.js could draw a single page.
describe("servePdf caching", () => {
	const ETAG = '"abc123"';
	const bucket = (keys) => ({
		head: async (k) =>
			keys[k] ? { size: keys[k], httpEtag: ETAG, uploaded: new Date(0) } : null,
		get: async (k, opts) =>
			keys[k]
				? {
						size: keys[k],
						uploaded: new Date(0),
						body: opts?.range ? "part" : "whole",
					}
				: null,
	});
	const env = (keys) => ({ PDFS: bucket(keys) });
	const req = (headers = {}) => new Request("https://x/pdf/aml", { headers });

	it("lets the browser hold an inline PDF for a day, with an ETag", async () => {
		const r = await servePdf(env({ "aml.pdf": 100 }), "aml", {
			download: false,
			request: req(),
		});
		expect(r.status).toBe(200);
		expect(r.headers.get("cache-control")).toContain("max-age=86400");
		expect(r.headers.get("etag")).toBe(ETAG);
	});

	// The whole point of the ETag: a revalidation that hits costs no body.
	it("answers a matching If-None-Match with 304 and no body", async () => {
		const r = await servePdf(env({ "aml.pdf": 100 }), "aml", {
			download: false,
			request: req({ "If-None-Match": ETAG }),
		});
		expect(r.status).toBe(304);
		expect(await r.text()).toBe("");
	});

	it("serves the body again once the object changes", async () => {
		const r = await servePdf(env({ "aml.pdf": 100 }), "aml", {
			download: false,
			request: req({ "If-None-Match": '"stale"' }),
		});
		expect(r.status).toBe(200);
	});

	it("handles a multi-value If-None-Match", async () => {
		const r = await servePdf(env({ "aml.pdf": 100 }), "aml", {
			download: false,
			request: req({ "If-None-Match": `"other", ${ETAG}` }),
		});
		expect(r.status).toBe(304);
	});

	// /dl's filename carries today's date; a cached attachment would hand back a
	// stale one, and it is a one-shot action with nothing to gain from caching.
	it("does not cache the download route", async () => {
		const r = await servePdf(env({ "aml.pdf": 100 }), "aml", {
			download: true,
			request: req(),
		});
		expect(r.headers.get("cache-control")).toContain("max-age=0");
	});

	// pdf.js sends Range without If-None-Match; a 304 there would need If-Range
	// semantics to be correct, so ranges always return bytes.
	it("never 304s a Range request", async () => {
		const r = await servePdf(env({ "aml.pdf": 100 }), "aml", {
			download: false,
			request: req({ Range: "bytes=0-9", "If-None-Match": ETAG }),
		});
		expect(r.status).toBe(206);
		expect(r.headers.get("cache-control")).toContain("max-age=86400");
		expect(r.headers.get("etag")).toBe(ETAG);
	});

	it("still falls back to raw/ when no cleaned copy exists", async () => {
		const r = await servePdf(env({ "raw/aml.pdf": 100 }), "aml", {
			download: false,
			request: req(),
		});
		expect(r.status).toBe(200);
		expect(r.headers.get("x-nccn-clean")).toBe("0");
	});
});
