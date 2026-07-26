import { describe, it, expect } from "vitest";
import { planBatch } from "../src/lib/pdf.js";

describe("planBatch (round-robin cron cursor)", () => {
	it("picks `count` sequential indices from the cursor", () => {
		expect(planBatch(0, 3, 10)).toEqual({ indices: [0, 1, 2], next: 3 });
		expect(planBatch(5, 2, 10)).toEqual({ indices: [5, 6], next: 7 });
	});

	it("wraps around the end of the list", () => {
		expect(planBatch(8, 4, 10)).toEqual({ indices: [8, 9, 0, 1], next: 2 });
	});

	it("normalizes a NaN / negative / missing cursor to 0", () => {
		expect(planBatch(NaN, 2, 10).indices).toEqual([0, 1]);
		expect(planBatch(-3, 2, 10).indices).toEqual([0, 1]);
		expect(planBatch(parseInt("", 10), 1, 10)).toEqual({ indices: [0], next: 1 });
	});

	it("advances the cursor across consecutive daily runs", () => {
		let cur = 0;
		const total = 86;
		for (let day = 0; day < 5; day++) cur = planBatch(cur, 3, total).next;
		expect(cur).toBe(15); // 5 days * 3/day
	});
});
