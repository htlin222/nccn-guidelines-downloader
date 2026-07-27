import { describe, expect, it } from "vitest";
import { servePdf } from "../src/lib/pdf.js";

// Minimal R2 stand-in: `keys` maps object key → body string.
function fakeEnv(keys) {
	return {
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
			async put() {},
		},
	};
}

const RAW = { "aml.pdf": "RAW-PDF-BYTES" };
const BOTH = { "aml.pdf": "RAW-PDF-BYTES", "clean/aml.pdf": "CLEAN-PDF" };

describe("servePdf clean selection", () => {
	it("serves the banner-free copy when one exists", async () => {
		const res = await servePdf(fakeEnv(BOTH), "aml", {
			download: true,
			clean: true,
		});
		expect(await res.text()).toBe("CLEAN-PDF");
		expect(res.headers.get("x-nccn-clean")).toBe("1");
		expect(res.headers.get("content-disposition")).toContain("NCCN-aml-clean-");
		expect(res.headers.get("content-disposition")).toContain("attachment");
	});

	it("falls back to the raw PDF when CI has not built a clean copy yet", async () => {
		const res = await servePdf(fakeEnv(RAW), "aml", {
			download: false,
			clean: true,
		});
		expect(await res.text()).toBe("RAW-PDF-BYTES");
		expect(res.headers.get("x-nccn-clean")).toBe("0");
		// 沒有 clean 版時檔名不該騙人說是 clean
		expect(res.headers.get("content-disposition")).not.toContain("-clean-");
		expect(res.headers.get("content-disposition")).toContain("inline");
	});

	it("never reaches for the clean copy unless asked", async () => {
		const res = await servePdf(fakeEnv(BOTH), "aml", { download: false });
		expect(await res.text()).toBe("RAW-PDF-BYTES");
		expect(res.headers.get("x-nccn-clean")).toBe("0");
	});

	it("serves a Range request out of whichever copy was selected", async () => {
		const res = await servePdf(fakeEnv(BOTH), "aml", {
			download: false,
			clean: true,
			request: { headers: { get: () => "bytes=0-4" } },
		});
		expect(res.status).toBe(206);
		expect(res.headers.get("content-range")).toBe("bytes 0-4/9"); // CLEAN-PDF = 9 bytes
	});
});
