import { describe, it, expect } from "vitest";
import { tocGroups, tocBestIndex } from "../src/lib/toc.js";

describe("tocGroups", () => {
	it("orders algorithm before discussion and drops empty sections", () => {
		const toc = [
			{ t: "Diagnosis", ref: "ALL-1", p: 10, sec: "algorithm" },
			{ t: "Overview", ref: "MS-2", ms: 2, p: 75, sec: "discussion" },
			{ t: "Workup", ref: "ALL-3", p: 14, sec: "algorithm" },
		];
		const g = tocGroups(toc);
		expect(g.map((x) => x.sec)).toEqual(["algorithm", "discussion"]);
		expect(g[0].label).toContain("Algorithm");
		expect(g[0].items.map((e) => e.ref)).toEqual(["ALL-1", "ALL-3"]);
		expect(g[1].items).toHaveLength(1);
	});

	it("treats entries without sec as discussion (back-compat)", () => {
		const toc = [
			{ t: "A", ms: 2, p: 5 },
			{ t: "B", ms: 3, p: 6 },
		];
		const g = tocGroups(toc);
		expect(g).toHaveLength(1);
		expect(g[0].sec).toBe("discussion");
		expect(g[0].items).toHaveLength(2);
	});

	it("returns a single algorithm group when there is no discussion", () => {
		const g = tocGroups([{ t: "X", ref: "BINV-1", p: 1, sec: "algorithm" }]);
		expect(g).toHaveLength(1);
		expect(g[0].sec).toBe("algorithm");
	});

	it("returns [] for an empty toc", () => {
		expect(tocGroups([])).toEqual([]);
	});
});

describe("tocBestIndex", () => {
	const pages = [10, 12, 14, 21, 30]; // rendered data-p in DOM order

	it("picks the last entry at or before the current page", () => {
		expect(tocBestIndex(pages, 13)).toBe(1); // between 12 and 14 -> 12
		expect(tocBestIndex(pages, 14)).toBe(2); // exact match
		expect(tocBestIndex(pages, 25)).toBe(3); // between 21 and 30 -> 21
	});

	it("returns the final index when past the last entry", () => {
		expect(tocBestIndex(pages, 999)).toBe(4);
	});

	it("returns -1 when the current page precedes every entry", () => {
		expect(tocBestIndex(pages, 1)).toBe(-1);
	});

	it("handles an empty list", () => {
		expect(tocBestIndex([], 5)).toBe(-1);
	});
});
