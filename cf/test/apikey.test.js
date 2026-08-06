import { describe, expect, it } from "vitest";
import {
	hashKey,
	keyPrefix,
	looksLikeKey,
	needsTouch,
	newKey,
	parseBearer,
	publicRow,
} from "../src/lib/apikey.js";

describe("parseBearer", () => {
	it("剝掉 Bearer 前綴，大小寫不拘", () => {
		expect(parseBearer("Bearer nccn_abc")).toBe("nccn_abc");
		expect(parseBearer("bearer  nccn_abc  ")).toBe("nccn_abc");
	});

	it("沒有前綴時當成整串就是金鑰", () => {
		expect(parseBearer("nccn_abc")).toBe("nccn_abc");
	});

	it("空的就是空的", () => {
		expect(parseBearer("")).toBe("");
		expect(parseBearer(null)).toBe("");
	});
});

describe("looksLikeKey", () => {
	const good = "nccn_" + "0".repeat(32);

	it("認得正確格式", () => {
		expect(looksLikeKey(good)).toBe(true);
	});

	it("擋掉長度或字元不對的", () => {
		expect(looksLikeKey("nccn_" + "0".repeat(31))).toBe(false);
		expect(looksLikeKey("nccn_" + "g".repeat(32))).toBe(false);
		expect(looksLikeKey("nccn_" + "0".repeat(32) + "0")).toBe(false);
		expect(looksLikeKey("abcd_" + "0".repeat(32))).toBe(false);
		expect(looksLikeKey("")).toBe(false);
		expect(looksLikeKey(null)).toBe(false);
	});

	// 格式先擋掉，才不會讓亂打的字串每次都跑到 D1 去查。
	it("擋掉常見的 SQL 注入試探", () => {
		expect(looksLikeKey("' OR 1=1 --")).toBe(false);
	});
});

describe("newKey", () => {
	it("產出的一定通過自己的格式檢查", () => {
		for (let i = 0; i < 20; i++) expect(looksLikeKey(newKey())).toBe(true);
	});

	it("不會撞號", () => {
		const seen = new Set();
		for (let i = 0; i < 200; i++) seen.add(newKey());
		expect(seen.size).toBe(200);
	});

	it("prefix 是前 12 碼", () => {
		const k = newKey();
		expect(keyPrefix(k)).toBe(k.slice(0, 12));
		expect(keyPrefix(k).startsWith("nccn_")).toBe(true);
	});
});

describe("hashKey", () => {
	it("是標準 SHA-256 的十六進位", async () => {
		expect(await hashKey("abc")).toBe(
			"ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad",
		);
	});

	it("同輸入同輸出、異輸入異輸出", async () => {
		expect(await hashKey("nccn_a")).toBe(await hashKey("nccn_a"));
		expect(await hashKey("nccn_a")).not.toBe(await hashKey("nccn_b"));
	});
});

describe("needsTouch", () => {
	it("沒寫過就要寫", () => {
		expect(needsTouch(0, 1_000_000)).toBe(true);
	});

	it("五分鐘內不重複寫", () => {
		expect(needsTouch(1_000_000, 1_000_000 + 299_000)).toBe(false);
	});

	it("滿五分鐘才再寫一次", () => {
		expect(needsTouch(1_000_000, 1_000_000 + 300_000)).toBe(true);
	});
});

describe("publicRow", () => {
	it("絕不外洩 hash", () => {
		const out = publicRow({
			id: 1,
			hash: "deadbeef",
			prefix: "nccn_abc1234",
			label: "筆電",
			created: "2026-08-06T00:00:00.000Z",
			last_used: null,
			calls: 0,
			revoked: null,
		});
		expect(out.hash).toBeUndefined();
		expect(JSON.stringify(out)).not.toContain("deadbeef");
		expect(out.prefix).toBe("nccn_abc1234");
		expect(out.lastUsed).toBe(null);
	});
});
