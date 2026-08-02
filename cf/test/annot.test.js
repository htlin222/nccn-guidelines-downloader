import { describe, it, expect, beforeAll } from "vitest";
import { annotRect, annotNextNum, annotHit, annotDraw } from "../src/lib/annot.js";

// 假的 2D context：只記下呼叫順序與參數，斷言「有沒有畫、用什麼規則裁切」。
function stubCtx() {
	var ops = [];
	var self = {
		ops: ops,
		canvas: { width: 1000, height: 800 },
	};
	[
		"save",
		"restore",
		"beginPath",
		"rect",
		"clip",
		"fillRect",
		"strokeRect",
		"arc",
		"fill",
		"stroke",
		"fillText",
		"translate",
		"scale",
	].forEach((m) => {
		self[m] = (...a) => {
			ops.push([m, ...a]);
		};
	});
	return self;
}
function names(ctx) {
	return ctx.ops.map((o) => o[0]);
}

beforeAll(() => {
	// Path2D 是瀏覽器全域，node 沒有；圖章那段只需要它可以被 new 出來。
	if (typeof globalThis.Path2D === "undefined") {
		globalThis.Path2D = class {
			constructor(d) {
				this.d = d;
			}
		};
	}
});

describe("annotRect", () => {
	it("normalises a backwards drag", () => {
		const r = annotRect(0.8, 0.9, 0.2, 0.3);
		expect(r.t).toBe("sel");
		expect(r.x).toBeCloseTo(0.2);
		expect(r.y).toBeCloseTo(0.3);
		expect(r.w).toBeCloseTo(0.6);
		expect(r.h).toBeCloseTo(0.6);
	});

	it("clamps to the page", () => {
		const r = annotRect(-0.5, -0.2, 0.5, 0.5);
		expect(r.x).toBe(0);
		expect(r.y).toBe(0);
		expect(r.w).toBeCloseTo(0.5);
		expect(r.h).toBeCloseTo(0.5);
		const r2 = annotRect(0.5, 0.5, 1.9, 1.4);
		expect(r2.x + r2.w).toBeCloseTo(1);
		expect(r2.y + r2.h).toBeCloseTo(1);
	});

	it("rejects a click-sized rect so a stray tap leaves nothing behind", () => {
		expect(annotRect(0.5, 0.5, 0.5, 0.5)).toBeNull();
		expect(annotRect(0.5, 0.5, 0.9, 0.503)).toBeNull();
	});
});

describe("annotNextNum", () => {
	it("starts at 1", () => {
		expect(annotNextNum([])).toBe(1);
		expect(annotNextNum(undefined)).toBe(1);
	});

	it("continues past the highest number, not the count", () => {
		const anns = [
			{ t: "num", x: 0.1, y: 0.1, n: 1 },
			{ t: "num", x: 0.2, y: 0.2, n: 3 },
			{ t: "sel", x: 0, y: 0, w: 0.5, h: 0.5 },
		];
		expect(annotNextNum(anns)).toBe(4);
	});
});

describe("annotHit", () => {
	const W = 1000,
		H = 800;

	it("finds a marker near its centre and misses one far away", () => {
		const anns = [{ t: "num", x: 0.5, y: 0.5, n: 1 }];
		expect(annotHit(anns, 0.5, 0.5, W, H)).toBe(0);
		expect(annotHit(anns, 0.51, 0.5, W, H)).toBe(0);
		expect(annotHit(anns, 0.7, 0.5, W, H)).toBe(-1);
	});

	it("prefers the marker added last", () => {
		const anns = [
			{ t: "stamp", x: 0.5, y: 0.5, k: "check" },
			{ t: "num", x: 0.5, y: 0.5, n: 1 },
		];
		expect(annotHit(anns, 0.5, 0.5, W, H)).toBe(1);
	});

	it("hits a selection only near its border, so a big dim box is not one huge delete target", () => {
		const anns = [{ t: "sel", x: 0.1, y: 0.1, w: 0.8, h: 0.8 }];
		expect(annotHit(anns, 0.1, 0.5, W, H)).toBe(0);
		expect(annotHit(anns, 0.5, 0.9, W, H)).toBe(0);
		expect(annotHit(anns, 0.5, 0.5, W, H)).toBe(-1);
		expect(annotHit(anns, 0.95, 0.5, W, H)).toBe(-1);
	});

	it("returns -1 for an empty list", () => {
		expect(annotHit([], 0.5, 0.5, W, H)).toBe(-1);
	});
});

describe("annotDraw", () => {
	const W = 1000,
		H = 800;
	const sel = [{ t: "sel", x: 0.2, y: 0.2, w: 0.4, h: 0.4 }];

	it("draws nothing for an empty list", () => {
		const ctx = stubCtx();
		expect(annotDraw(ctx, [], W, H, "dim")).toBe(0);
		expect(ctx.ops).toHaveLength(0);
	});

	it("stroke style only outlines — no clip, no dimming fill", () => {
		const ctx = stubCtx();
		annotDraw(ctx, sel, W, H, "stroke");
		expect(names(ctx)).not.toContain("clip");
		expect(names(ctx)).not.toContain("fillRect");
		expect(ctx.ops.filter((o) => o[0] === "strokeRect")).toHaveLength(1);
		expect(ctx.strokeStyle).toBe("#ef4444");
	});

	it("dim clips the complement with evenodd and fills the whole page", () => {
		const ctx = stubCtx();
		annotDraw(ctx, sel, W, H, "dim");
		expect(ctx.ops).toContainEqual(["clip", "evenodd"]);
		// 外圈整頁 + 內圈選取框，兩個 rect 才構成「框以外」。
		expect(ctx.ops.filter((o) => o[0] === "rect")).toHaveLength(2);
		expect(ctx.ops).toContainEqual(["fillRect", 0, 0, W, H]);
	});

	it("shadow fills the rects themselves so only the spill outside survives the clip", () => {
		const ctx = stubCtx();
		annotDraw(ctx, sel, W, H, "shadow");
		expect(ctx.ops).toContainEqual(["clip", "evenodd"]);
		expect(ctx.ops).toContainEqual(["fillRect", 200, 160, 400, 320]);
		expect(ctx.shadowBlur).toBeGreaterThan(0);
	});

	it("defaults to stroke when no style is given", () => {
		const ctx = stubCtx();
		annotDraw(ctx, sel, W, H);
		expect(names(ctx)).not.toContain("clip");
	});

	it("scales one style across every selection instead of per rect", () => {
		const ctx = stubCtx();
		annotDraw(
			ctx,
			[sel[0], { t: "sel", x: 0.7, y: 0.1, w: 0.2, h: 0.2 }],
			W,
			H,
			"dim",
		);
		expect(ctx.ops.filter((o) => o[0] === "clip")).toHaveLength(1);
		expect(ctx.ops.filter((o) => o[0] === "rect")).toHaveLength(3);
		expect(ctx.ops.filter((o) => o[0] === "strokeRect")).toHaveLength(2);
	});

	it("draws a numbered circle with its digit", () => {
		const ctx = stubCtx();
		annotDraw(ctx, [{ t: "num", x: 0.5, y: 0.5, n: 12 }], W, H);
		expect(ctx.ops).toContainEqual(["arc", 500, 400, 17, 0, Math.PI * 2]);
		expect(ctx.ops).toContainEqual(["fillText", "12", 500, 400]);
	});

	it("stamps an icon centred on the click, haloed then coloured", () => {
		const ctx = stubCtx();
		annotDraw(ctx, [{ t: "stamp", x: 0.5, y: 0.5, k: "check" }], W, H);
		expect(ctx.ops).toContainEqual(["translate", 500 - 22, 400 - 22]);
		// check 是一條 path，白底 + 紅線兩次描邊。
		expect(ctx.ops.filter((o) => o[0] === "stroke")).toHaveLength(2);
	});

	it("fills the pointer stamp but not the outline-only ones", () => {
		const p = stubCtx();
		annotDraw(p, [{ t: "stamp", x: 0.5, y: 0.5, k: "pointer" }], W, H);
		expect(names(p)).toContain("fill");
		const c = stubCtx();
		annotDraw(c, [{ t: "stamp", x: 0.5, y: 0.5, k: "check" }], W, H);
		expect(names(c)).not.toContain("fill");
	});

	it("ignores an unknown stamp instead of throwing", () => {
		const ctx = stubCtx();
		expect(() => annotDraw(ctx, [{ t: "stamp", x: 0.5, y: 0.5, k: "nope" }], W, H)).not.toThrow();
		expect(ctx.ops).toHaveLength(0);
	});

	it("keeps annotations the same size relative to the page when exported bigger", () => {
		const small = stubCtx();
		annotDraw(small, [{ t: "num", x: 0.5, y: 0.5, n: 1 }], 1000, 800);
		const big = stubCtx();
		annotDraw(big, [{ t: "num", x: 0.5, y: 0.5, n: 1 }], 2000, 1600);
		const rs = small.ops.find((o) => o[0] === "arc")[3];
		const rb = big.ops.find((o) => o[0] === "arc")[3];
		expect(rb / rs).toBeCloseTo(2);
	});
});
