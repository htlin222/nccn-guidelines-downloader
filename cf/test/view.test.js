import { describe, expect, it } from "vitest";
import {
	evictPlan,
	pageAtOffset,
	prefetchPlan,
	scrollIntent,
} from "../src/lib/view.js";

describe("pageAtOffset (binary search over cached offsetTops)", () => {
	const tops = [0, 800, 1600, 2400, 3200];

	it("returns the page that starts at or above the offset", () => {
		expect(pageAtOffset(tops, 0)).toBe(0);
		expect(pageAtOffset(tops, 799)).toBe(0);
		expect(pageAtOffset(tops, 800)).toBe(1);
		expect(pageAtOffset(tops, 2399)).toBe(2);
		expect(pageAtOffset(tops, 2400)).toBe(3);
	});

	it("clamps past both ends instead of returning -1 or overflowing", () => {
		expect(pageAtOffset(tops, -500)).toBe(0);
		expect(pageAtOffset(tops, 99999)).toBe(4);
	});

	it("survives an empty or absent table (pages not built yet)", () => {
		expect(pageAtOffset([], 100)).toBe(0);
		expect(pageAtOffset(null, 100)).toBe(0);
	});

	// Pages are not uniform height — landscape algorithm pages sit between
	// portrait ones — so the search must not assume a constant stride.
	it("handles unevenly spaced pages", () => {
		const uneven = [0, 300, 1900, 2100];
		expect(pageAtOffset(uneven, 299)).toBe(0);
		expect(pageAtOffset(uneven, 1899)).toBe(1);
		expect(pageAtOffset(uneven, 2100)).toBe(3);
	});

	// The whole point of replacing the linear walk: the cost must not grow with
	// how deep into the document you are.
	it("agrees with a linear scan over a 500-page table", () => {
		const big = Array.from({ length: 500 }, (_, i) => i * 1000);
		const linear = (y) => {
			let best = 0;
			for (let i = 0; i < big.length; i++) if (big[i] <= y) best = i;
			return best;
		};
		for (const y of [0, 1, 999, 1000, 250_500, 498_999, 499_000, 600_000])
			expect(pageAtOffset(big, y)).toBe(linear(y));
	});
});

describe("prefetchPlan (direction-weighted, not symmetric)", () => {
	it("leans the way you are scrolling: +3 ahead, -1 behind", () => {
		expect(prefetchPlan(10, 1, 100)).toEqual([10, 11, 12, 13, 9]);
	});

	it("mirrors when scrolling up", () => {
		expect(prefetchPlan(10, -1, 100)).toEqual([10, 9, 8, 7, 11]);
	});

	// A reader who just stopped scrolling reads onward, so idle is forward.
	it("treats idle as forward", () => {
		expect(prefetchPlan(10, 0, 100)).toEqual(prefetchPlan(10, 1, 100));
	});

	it("puts the current page first — it is what the reader is staring at", () => {
		expect(prefetchPlan(4, 1, 100)[0]).toBe(4);
		expect(prefetchPlan(4, -1, 100)[0]).toBe(4);
	});

	it("drops out-of-range pages at both edges", () => {
		expect(prefetchPlan(0, -1, 5)).toEqual([0, 1]);
		expect(prefetchPlan(4, 1, 5)).toEqual([4, 3]);
	});

	it("never repeats a page in a short document", () => {
		const plan = prefetchPlan(1, 1, 3);
		expect(new Set(plan).size).toBe(plan.length);
		expect(plan.every((i) => i >= 0 && i < 3)).toBe(true);
	});

	it("returns nothing before any page exists", () => {
		expect(prefetchPlan(0, 1, 0)).toEqual([]);
	});

	it("honours custom depths", () => {
		expect(prefetchPlan(10, 1, 100, 1, 0)).toEqual([10, 11]);
	});
});

describe("scrollIntent (direction + smoothed speed gate)", () => {
	it("reports direction from the sign of the delta", () => {
		expect(scrollIntent(120, 16, null).dir).toBe(1);
		expect(scrollIntent(-120, 16, null).dir).toBe(-1);
	});

	// dy === 0 happens on a settle frame; forgetting the direction there would
	// throw away exactly the information prefetch needs.
	it("keeps the previous direction when the delta is zero", () => {
		expect(scrollIntent(0, 16, { dir: -1, speed: 0 }).dir).toBe(-1);
		expect(scrollIntent(0, 16, null).dir).toBe(1);
	});

	it("leaves the gate closed at reading speed", () => {
		let s = null;
		for (let i = 0; i < 10; i++) s = scrollIntent(8, 16, s);
		expect(s.fast).toBe(false);
	});

	it("opens the gate on a flick", () => {
		let s = null;
		for (let i = 0; i < 10; i++) s = scrollIntent(400, 16, s);
		expect(s.fast).toBe(true);
	});

	// The EMA rejects jitter, not flicks. One slightly-long frame in a run of
	// reading-speed ones must not blank the page the reader is staring at...
	it("ignores a jittery frame at reading speed", () => {
		let s = null;
		for (let i = 0; i < 10; i++) s = scrollIntent(8, 16, s);
		s = scrollIntent(60, 16, s);
		expect(s.fast).toBe(false);
	});

	// ...but the first frame of a real flick is already a flick, and reacting to
	// it costs only the 120ms settle. Waiting instead costs a wasted rasterise
	// of a page that has scrolled off by the time it lands, which is the exact
	// jank this gate exists to prevent.
	it("trips on the opening frame of a flick", () => {
		let s = null;
		for (let i = 0; i < 10; i++) s = scrollIntent(8, 16, s);
		expect(scrollIntent(300, 16, s).fast).toBe(true);
	});

	it("decays back to slow once scrolling stops", () => {
		let s = null;
		for (let i = 0; i < 10; i++) s = scrollIntent(400, 16, s);
		expect(s.fast).toBe(true);
		for (let i = 0; i < 10; i++) s = scrollIntent(0, 16, s);
		expect(s.fast).toBe(false);
	});

	it("does not divide by zero on a same-millisecond sample", () => {
		const s = scrollIntent(100, 0, null);
		expect(Number.isFinite(s.speed)).toBe(true);
	});
});

describe("evictPlan (pixel budget, not page count)", () => {
	// px[i] = pixels page i is holding. 0 = nothing rendered.
	const held = (idxs, each = 100) => {
		const px = new Array(20).fill(0);
		for (const i of idxs) px[i] = each;
		return px;
	};

	it("keeps everything while under budget", () => {
		expect(evictPlan(held([1, 2, 3]), 2, 1000)).toEqual([]);
	});

	it("drops the pages furthest from the reader first", () => {
		expect(evictPlan(held([0, 5, 10, 19]), 10, 250)).toEqual([0, 19]);
	});

	it("stops as soon as it is back under budget", () => {
		const plan = evictPlan(held([0, 5, 10, 15, 19]), 10, 400);
		expect(plan).toHaveLength(1);
		expect(plan[0]).toBe(0);
	});

	// Evicting the page being read to save memory recreates the exact blank the
	// rest of this change exists to remove.
	it("never evicts the current page or its neighbours", () => {
		const plan = evictPlan(held([9, 10, 11]), 10, 0);
		expect(plan).toEqual([]);
	});

	// A landscape algorithm page can hold 3x a portrait one; counting pages
	// instead of pixels would keep the wrong things.
	it("weighs a big page more than several small ones", () => {
		const px = new Array(20).fill(0);
		px[0] = 900;
		px[18] = 100;
		px[19] = 100;
		// Budget of 1000 needs 100 freed; page 0 is furthest from cur=19.
		expect(evictPlan(px, 19, 1000)).toEqual([0]);
	});

	it("survives an empty document", () => {
		expect(evictPlan([], 0, 10)).toEqual([]);
		expect(evictPlan(null, 0, 10)).toEqual([]);
	});

	it("is deterministic when two pages are equidistant", () => {
		const a = evictPlan(held([5, 15]), 10, 100);
		expect(a).toEqual(evictPlan(held([5, 15]), 10, 100));
		expect(a).toHaveLength(1);
	});
});
