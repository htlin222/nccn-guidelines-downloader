import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { beforeAll, describe, expect, it } from "vitest";

// build_updates.py is the one piece of this feature with no way to be checked by
// reading it: it parses `pdftotext -layout` output, and that output is full of
// surprises (Wingdings bullets landing on control characters, headings repeated
// on every continuation page). So this drives the real script over a fixture
// lifted verbatim from AML v5.2026 — same bytes, same \x17 bullets, same
// running heads — and asserts the shape that /api/v1/updates depends on.

const HEAD = [
	"                    NCCN Guidelines Version 5.2026                    NCCN Guidelines Index",
	"                                                                          Table of Contents",
	"                    Acute Myeloid Leukemia (Age ≥18 years)                       Discussion",
	"",
].join("\n");

const FIXTURE = [
	// p.1–2: front matter, must not be mistaken for updates
	HEAD + "Some panel roster page with no bullets at all.\n",
	HEAD + "Another front page.\n",
	// p.3: the newest version's updates
	HEAD +
		[
			"Updates in Version 5.2026 of the NCCN Guidelines for Acute Myeloid Leukemia include:",
			"BPDCN-1",
			"• Diagnosis",
			" \x17BPDCN confirmed revised: Treatment Induction (BPDCN-2)",
			"     ◊ Bullet removed: Eligible for tagraxofusp-erzs (BPDCN-2)",
			"BPDCN-3A",
			"• Footnote e added: For disease with absent CD123 expression, the benefit of",
			"  CD123-targeted therapies is unknown.",
			"                                                                    Continued",
			"Version 5.2026, 07/01/26 © 2026 National Comprehensive Cancer Network® (NCCN®)",
		].join("\n"),
	// p.4 and p.5: one older version spread over two pages, heading repeated
	HEAD +
		[
			"Updates in Version 1.2026 of the NCCN Guidelines for Acute Myeloid Leukemia include:",
			"EVAL-1",
			"• Evaluation For AML",
			" \x175th bullet modified: Bone marrow core biopsy",
			" \x176th bullet modified: Molecular analyses",
		].join("\n"),
	HEAD +
		[
			"Updates in Version 1.2026 of the NCCN Guidelines for Acute Myeloid Leukemia include:",
			"AML-4",
			"• Lower Intensity Therapy",
			" \x17Therapy added: Oral decitabine",
			" \x17Regimen added: Oral decitabine and cedazuridine",
		].join("\n"),
].join("\f");

let out;

beforeAll(() => {
	const dir = mkdtempSync(join(tmpdir(), "upd-test-"));
	const src = join(dir, "t.txt");
	const dst = join(dir, "out.json");
	writeFileSync(src, FIXTURE);
	execFileSync("python3", ["build_updates.py", src, dst, "aml"], {
		cwd: new URL("..", import.meta.url).pathname,
	});
	out = JSON.parse(readFileSync(dst, "utf8"));
});

describe("build_updates.py", () => {
	it("只把最新版當成本體", () => {
		expect(out.version).toBe("5.2026");
		expect(out.id).toBe("aml");
		expect(out.pages).toEqual([3]);
	});

	// 每一頁都重印標題，天真的作法會把一個 8 頁的版本記成 8 筆 history。
	it("同一版本跨頁併成一筆 history", () => {
		expect(out.history).toEqual([{ version: "1.2026", pages: [4, 5] }]);
	});

	it("逐條拆開並歸到所屬節點", () => {
		expect(out.items.map((i) => i.sec)).toEqual([
			"BPDCN-1",
			"BPDCN-1",
			"BPDCN-1",
			"BPDCN-3A",
		]);
	});

	// 這是最容易壞的一項：第二層 bullet 是 \x17 而且後面沒有空白。要求空白的話
	// 它會被降級成續行，整條黏到上一個 bullet 後面。
	it("縮排決定層級，控制字元 bullet 也算 bullet", () => {
		expect(out.items.map((i) => i.lv)).toEqual([0, 1, 2, 0]);
		expect(out.items[1].text).toBe(
			"BPDCN confirmed revised: Treatment Induction (BPDCN-2)",
		);
	});

	it("續行接回它的 bullet，不會自成一條", () => {
		expect(out.items[3].text).toBe(
			"Footnote e added: For disease with absent CD123 expression, the benefit of CD123-targeted therapies is unknown.",
		);
	});

	it("頁首、頁尾與 Continued 都不會變成節點", () => {
		const secs = new Set(out.items.map((i) => i.sec));
		for (const noise of ["Continued", "Table of Contents", "Discussion", "NCCN Guidelines Index"])
			expect(secs.has(noise)).toBe(false);
	});

	it("沒有更新頁的文件回 0，不寫出檔案", () => {
		const dir = mkdtempSync(join(tmpdir(), "upd-none-"));
		const src = join(dir, "t.txt");
		writeFileSync(src, HEAD + "Nothing to see here.\n");
		const n = execFileSync(
			"python3",
			["build_updates.py", src, join(dir, "out.json"), "xx"],
			{ cwd: new URL("..", import.meta.url).pathname, encoding: "utf8" },
		);
		expect(n.trim()).toBe("0");
	});
});
