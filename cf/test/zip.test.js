import { execFileSync } from "node:child_process";
import { mkdtempSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { crc32, dosStamp, zip } from "../src/lib/zip.js";

const u32 = (b, at) => new DataView(b.buffer, b.byteOffset).getUint32(at, true);
const u16 = (b, at) => new DataView(b.buffer, b.byteOffset).getUint16(at, true);

describe("crc32", () => {
	it("符合 IEEE 標準測試向量", () => {
		// APPNOTE 與 zlib 都用這個字串當 check value。
		expect(crc32(new TextEncoder().encode("123456789"))).toBe(0xcbf43926);
	});

	it("空輸入是 0", () => {
		expect(crc32(new Uint8Array(0))).toBe(0);
	});
});

describe("dosStamp", () => {
	it("1980 是日期欄位的原點", () => {
		const { date } = dosStamp(new Date(Date.UTC(1980, 0, 1)));
		expect(date >>> 9).toBe(0); // year - 1980
		expect((date >>> 5) & 0xf).toBe(1); // month
		expect(date & 0x1f).toBe(1); // day
	});

	it("1980 以前夾到下限，不產生負數欄位", () => {
		// epoch 0 是 1970，直接編碼會讓 year 欄位變負，解壓工具會報壞檔。
		expect(dosStamp(new Date(0)).date >>> 9).toBe(0);
	});

	it("秒數只有 5 bits，所以除以 2", () => {
		const { time } = dosStamp(new Date(Date.UTC(2026, 0, 1, 13, 45, 30)));
		expect(time >>> 11).toBe(13);
		expect((time >>> 5) & 0x3f).toBe(45);
		expect((time & 0x1f) * 2).toBe(30);
	});
});

describe("zip", () => {
	const files = [
		{ name: "SKILL.md", data: "# hello\n" },
		{ name: ".env", data: "NCCN_API_KEY=nccn_0123\n" },
	];

	it("寫出正確的 local header 與 EOCD", () => {
		const out = zip(files, { date: new Date(Date.UTC(2026, 7, 6)) });
		expect(u32(out, 0)).toBe(0x04034b50); // 第一個 local file header
		const eocd = out.subarray(out.length - 22);
		expect(u32(eocd, 0)).toBe(0x06054b50);
		expect(u16(eocd, 10)).toBe(2); // 兩個項目
		// central directory 起點 + 長度 = EOCD 的位置
		expect(u32(eocd, 16) + u32(eocd, 12)).toBe(out.length - 22);
	});

	it("store 模式下兩個 size 欄位相同", () => {
		const out = zip([{ name: "a.txt", data: "12345" }]);
		expect(u32(out, 18)).toBe(5); // compressed
		expect(u32(out, 22)).toBe(5); // uncompressed
		expect(u16(out, 8)).toBe(0); // method 0
	});

	it("反斜線路徑改成正斜線", () => {
		const out = zip([{ name: "a\\b.txt", data: "x" }]);
		const name = new TextDecoder().decode(out.subarray(30, 30 + u16(out, 26)));
		expect(name).toBe("a/b.txt");
	});

	it("空清單也是一個合法的 zip", () => {
		const out = zip([]);
		expect(out.length).toBe(22);
		expect(u32(out, 0)).toBe(0x06054b50);
	});

	// 前面全是自己驗自己。這一項才是真正的檢查：交給系統的 unzip 看它認不認。
	it("unzip 認得，且解出來的內容一字不差", () => {
		let unzipOk = true;
		try {
			execFileSync("unzip", ["-v"], { stdio: "ignore" });
		} catch {
			unzipOk = false;
		}
		if (!unzipOk) return; // 環境沒有 unzip 就跳過，不讓 CI 因此變紅

		const dir = mkdtempSync(join(tmpdir(), "zip-test-"));
		const path = join(dir, "t.zip");
		writeFileSync(path, zip(files, { date: new Date(Date.UTC(2026, 7, 6)) }));

		expect(() =>
			execFileSync("unzip", ["-t", path], { stdio: "ignore" }),
		).not.toThrow();

		execFileSync("unzip", ["-q", "-o", path, "-d", join(dir, "out")]);
		expect(readdirSync(join(dir, "out")).sort()).toEqual([".env", "SKILL.md"]);
		expect(readFileSync(join(dir, "out", "SKILL.md"), "utf8")).toBe("# hello\n");
	});
});
