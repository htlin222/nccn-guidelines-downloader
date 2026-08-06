import { describe, expect, it } from "vitest";
import { TTL, cacheKey, shouldRenew } from "../src/lib/cache.js";

describe("cacheKey", () => {
	it("世代號在 key 裡，換代等於整批失效", () => {
		expect(cacheKey("7", "toc", "aml")).toBe("api:7:toc:aml");
		expect(cacheKey("8", "toc", "aml")).not.toBe(cacheKey("7", "toc", "aml"));
	});

	it("沒有 id 的項目不留下多餘的冒號", () => {
		expect(cacheKey("7", "cat", "")).toBe("api:7:cat");
	});
});

describe("shouldRenew", () => {
	const now = 1_800_000_000;

	it("剛寫進去的不續期", () => {
		expect(shouldRenew(now + TTL, now, TTL)).toBe(false);
	});

	it("壽命用掉三成才續期", () => {
		// 剩 71% → 還不用；剩 69% → 該續了。門檻是 0.7。
		expect(shouldRenew(now + Math.floor(TTL * 0.71), now, TTL)).toBe(false);
		expect(shouldRenew(now + Math.floor(TTL * 0.69), now, TTL)).toBe(true);
	});

	it("快過期的一定續", () => {
		expect(shouldRenew(now + 60, now, TTL)).toBe(true);
	});

	it("沒有 metadata 的舊值順手補寫一次", () => {
		expect(shouldRenew(undefined, now, TTL)).toBe(true);
		expect(shouldRenew(0, now, TTL)).toBe(true);
	});
});
