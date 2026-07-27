import { describe, expect, it } from "vitest";
import { servePdf } from "../src/lib/pdf.js";

// Minimal R2 stand-in: `keys` maps object key → body string.
function fakeEnv(keys) {
	const puts = [];
	return {
		puts,
		PDFS: {
			async head(k) {
				return k in keys ? { size: keys[k].length } : null;
			},
			async get(k) {
				if (!(k in keys)) return null;
				return {
					size: keys[k].length,
					body: keys[k],
					uploaded: new Date("2026-07-01T00:00:00Z"),
				};
			},
			async put(k, v) {
				puts.push(k);
				keys[k] = v;
			},
		},
	};
}

// Post-migration layout: the root object is the banner-free copy, raw/ holds
// the untouched original the cron pulls from NCCN.
const BOTH = { "aml.pdf": "CLEAN-PDF", "raw/aml.pdf": "RAW-PDF-BYTES" };
const ONLY_RAW = { "raw/aml.pdf": "RAW-PDF-BYTES" };

describe("servePdf raw/clean selection", () => {
	it("serves the banner-free root copy by default", async () => {
		const res = await servePdf(fakeEnv(BOTH), "aml", { download: false });
		expect(await res.text()).toBe("CLEAN-PDF");
		expect(res.headers.get("x-nccn-clean")).toBe("1");
		expect(res.headers.get("content-disposition")).toContain("NCCN-aml-2026");
		expect(res.headers.get("content-disposition")).not.toContain("-raw-");
	});

	it("serves the untouched original on ?raw=1", async () => {
		const res = await servePdf(fakeEnv(BOTH), "aml", {
			download: true,
			raw: true,
		});
		expect(await res.text()).toBe("RAW-PDF-BYTES");
		expect(res.headers.get("x-nccn-clean")).toBe("0");
		expect(res.headers.get("content-disposition")).toContain("NCCN-aml-raw-");
		expect(res.headers.get("content-disposition")).toContain("attachment");
	});

	it("falls back to raw when a guideline has never been cleaned", async () => {
		const res = await servePdf(fakeEnv(ONLY_RAW), "aml", { download: false });
		expect(await res.text()).toBe("RAW-PDF-BYTES");
		// 沒有乾淨版時不能謊稱是乾淨的
		expect(res.headers.get("x-nccn-clean")).toBe("0");
	});

	it("serves a Range request out of whichever copy was selected", async () => {
		const res = await servePdf(fakeEnv(BOTH), "aml", {
			download: false,
			request: { headers: { get: () => "bytes=0-4" } },
		});
		expect(res.status).toBe(206);
		expect(res.headers.get("content-range")).toBe("bytes 0-4/9"); // CLEAN-PDF = 9
	});

	it("never writes a live NCCN fetch over the clean root object", async () => {
		// Nothing cached at all: the live-fetch fallback must land under raw/,
		// otherwise a cache miss would put the banner back at the root key.
		const env = fakeEnv({});
		env.NCCN_KV = { async get() { return null; } }; // no cookie -> 502, no put
		const res = await servePdf(env, "aml", { download: false });
		expect(res.status).toBe(502);
		expect(env.puts).toEqual([]);
	});
});
