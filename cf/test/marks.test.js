import { describe, it, expect } from "vitest";
import { bookmarkMd, starredList } from "../src/lib/marks.js";

const NOW = "2026-07-28T00:00:00.000Z";
const ORIGIN = "https://nccn.example";

describe("bookmarkMd", () => {
	it("renders one guideline as page links with notes", () => {
		const md = bookmarkMd(
			[
				{ gid: "breast", page: 12, label: "BINV-3", note: "HER2+ 分支" },
				{ gid: "breast", page: 40, label: "", note: "" },
			],
			{ origin: ORIGIN, name: "Breast Cancer", now: NOW },
		);
		expect(md).toBe(
			[
				"# NCCN 書籤（Breast Cancer）",
				"",
				"匯出時間：2026-07-28T00:00:00.000Z",
				"",
				"- [p.12](https://nccn.example/preview/breast?page=12) BINV-3",
				"  - HER2+ 分支",
				"",
				"- [p.40](https://nccn.example/preview/breast?page=40)",
				"",
			].join("\n"),
		);
	});

	it("groups by guideline when exporting everything", () => {
		const md = bookmarkMd(
			[
				{ gid: "aml", page: 3, label: "AML-2", name: "Acute Myeloid Leukemia" },
				{ gid: "aml", page: 9, label: "", name: "Acute Myeloid Leukemia" },
				{ gid: "breast", page: 1, label: "", name: "Breast Cancer" },
			],
			{ origin: ORIGIN, scopeAll: true, now: NOW },
		);
		expect(md.split("\n").filter((l) => l.startsWith("## "))).toEqual([
			"## Acute Myeloid Leukemia",
			"## Breast Cancer",
		]);
		expect(md).toContain("# NCCN 書籤（全部）");
	});

	it("percent-encodes ids that need it", () => {
		const md = bookmarkMd([{ gid: "b cell", page: 2 }], { origin: ORIGIN });
		expect(md).toContain("/preview/b%20cell?page=2");
	});

	it("keeps a note on one line", () => {
		const md = bookmarkMd([{ gid: "aml", page: 1, note: "上\n下" }], {});
		expect(md).toContain("  - 上 下");
	});

	it("survives an empty list", () => {
		expect(bookmarkMd([], { now: NOW })).toBe(
			"# NCCN 書籤（）\n\n匯出時間：2026-07-28T00:00:00.000Z\n",
		);
	});
});

describe("starredList", () => {
	const G = [
		{ id: "aml", name: "AML" },
		{ id: "breast", name: "Breast" },
		{ id: "nscl", name: "NSCLC" },
	];

	it("keeps the catalogue order, not the starring order", () => {
		expect(starredList(G, ["nscl", "aml"]).map((g) => g.id)).toEqual([
			"aml",
			"nscl",
		]);
	});

	it("drops ids that are no longer published", () => {
		expect(starredList(G, ["gone", "breast"]).map((g) => g.id)).toEqual([
			"breast",
		]);
	});

	it("returns nothing for no stars", () => {
		expect(starredList(G, null)).toEqual([]);
	});
});
