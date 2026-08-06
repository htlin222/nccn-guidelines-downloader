import { describe, expect, it } from "vitest";
import { parsePages, sectionRange } from "../src/lib/api.js";
import { envFile } from "../src/lib/skillpack.js";

describe("parsePages", () => {
	it("單頁", () => {
		expect(parsePages("12")).toEqual([12, 12]);
	});

	it("範圍，容忍空白", () => {
		expect(parsePages("12-18")).toEqual([12, 18]);
		expect(parsePages(" 12 - 18 ")).toEqual([12, 18]);
	});

	it("夾住上限，一個請求不會把整份倒出來", () => {
		expect(parsePages("1-9999")).toEqual([1, 40]);
	});

	it("擋掉不合法的輸入", () => {
		expect(parsePages("0")).toBe(null); // 頁碼從 1 開始
		expect(parsePages("18-12")).toBe(null); // 反向
		expect(parsePages("abc")).toBe(null);
		expect(parsePages("")).toBe(null);
		expect(parsePages(null)).toBe(null);
	});
});

describe("sectionRange", () => {
	const toc = [
		{ ref: "MS-1", p: 10 },
		{ ref: "MS-2", p: 12 },
		{ ref: "MS-3", p: 12 }, // 同一頁上的第二個小節
		{ ref: "MS-4", p: 15 },
		{ ref: "MS-5", p: 20 },
	];

	it("結束頁是下一節的前一頁", () => {
		expect(sectionRange(toc, "MS-1", 40)).toEqual([10, 11]);
	});

	// 同一頁塞好幾個小節是常態。若直接取「下一個條目」就會算出 [12, 11] 這種空區間。
	it("跳過起點相同的條目，不會算出空區間", () => {
		expect(sectionRange(toc, "MS-2", 40)).toEqual([12, 14]);
	});

	it("最後一節一路到最後一頁", () => {
		expect(sectionRange(toc, "MS-5", 26)).toEqual([20, 26]);
	});

	it("最後一節也吃上限，不會一次倒出兩百頁", () => {
		expect(sectionRange(toc, "MS-5", 500)).toEqual([20, 59]);
	});

	it("ref 比對不分大小寫", () => {
		expect(sectionRange(toc, "ms-1", 40)).toEqual([10, 11]);
	});

	it("找不到就回 null", () => {
		expect(sectionRange(toc, "MS-99", 40)).toBe(null);
		expect(sectionRange([], "MS-1", 40)).toBe(null);
		expect(sectionRange(null, "MS-1", 40)).toBe(null);
	});
});

describe("envFile", () => {
	it("兩個變數都在，且 base 帶到 /api/v1", () => {
		const out = envFile("nccn_" + "a".repeat(32), "https://x.example/api/v1");
		expect(out).toContain("NCCN_API_KEY=nccn_" + "a".repeat(32));
		expect(out).toContain("NCCN_API_BASE=https://x.example/api/v1");
	});

	it("每一行不是註解就是 KEY=VALUE，nccn.py 的解析器才吃得下", () => {
		for (const line of envFile("nccn_x", "https://x").split("\n"))
			if (line.trim()) expect(line.startsWith("#") || line.includes("=")).toBe(true);
	});
});
