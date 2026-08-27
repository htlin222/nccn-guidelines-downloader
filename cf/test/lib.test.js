import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

// lib.sh 的 fetch_clean 是週更流程的取檔閘門：gen_clean.sh 剛剝好的本機檔優先，
// 拿不到才回頭問 R2。它決定的是「這一輪的縮圖、版本、索引、TOC 是從哪一份 PDF
// 推導出來的」，答錯的後果是整週的衍生資料描述上一版的 PDF——安靜、看起來全綠。
//
// 這裡不碰真的 wrangler：把一支假的塞進 PATH 最前面，就能觀察到「有沒有回源」。
// 那才是這個函式唯一值得斷言的行為。
const CF = new URL("..", import.meta.url).pathname;

let dir;
let bin;
let clean;

// 假 wrangler：把被要求的 key 記進 calls.log，並寫出一份看得出來源的內容。
const FAKE = `#!/bin/bash
echo "$*" >> "$CALLS"
out=""
for a in "$@"; do case "$a" in --file=*) out="\${a#--file=}";; esac; done
[ -n "$out" ] && printf 'FROM-R2' > "$out"
exit 0
`;

const run = (script, env = {}) =>
	execFileSync("bash", ["-c", script], {
		cwd: CF,
		encoding: "utf8",
		env: {
			...process.env,
			PATH: `${bin}:${process.env.PATH}`,
			CALLS: join(dir, "calls.log"),
			...env,
		},
	});

const calls = () => {
	try {
		return readFileSync(join(dir, "calls.log"), "utf8").trim().split("\n")
			.filter(Boolean);
	} catch {
		return [];
	}
};

beforeEach(() => {
	dir = mkdtempSync(join(tmpdir(), "libsh-"));
	bin = join(dir, "bin");
	clean = join(dir, "clean");
	execFileSync("mkdir", ["-p", bin, clean]);
	writeFileSync(join(bin, "wrangler"), FAKE, { mode: 0o755 });
});

afterEach(() => rmSync(dir, { recursive: true, force: true }));

describe("fetch_clean — 本機優先，否則回源", () => {
	it("uses the local copy this round produced, and does not touch R2", () => {
		writeFileSync(join(clean, "aml.pdf"), "FROM-CLEAN-DIR");
		const out = join(dir, "out.pdf");
		run(`. ./lib.sh; fetch_clean aml "${out}"`, { CLEAN_DIR: clean });
		expect(readFileSync(out, "utf8")).toBe("FROM-CLEAN-DIR");
		expect(calls()).toEqual([]);
	});

	it("falls back to R2 when this round produced no local copy", () => {
		const out = join(dir, "out.pdf");
		run(`. ./lib.sh; fetch_clean aml "${out}"`, { CLEAN_DIR: clean });
		expect(readFileSync(out, "utf8")).toBe("FROM-R2");
		expect(calls().join(" ")).toContain("nccn-pdfs/aml.pdf");
	});

	// CLEAN_DIR 沒設 = 有人在本機單獨跑某一支腳本。行為必須跟改動之前一模一樣。
	it("behaves exactly as before when CLEAN_DIR is unset", () => {
		const out = join(dir, "out.pdf");
		run(`. ./lib.sh; fetch_clean aml "${out}"`);
		expect(readFileSync(out, "utf8")).toBe("FROM-R2");
		expect(calls().join(" ")).toContain("nccn-pdfs/aml.pdf");
	});

	// gen_clean.sh 只 iterate guidelines.json，所以 mda- 的檔永遠不在 CLEAN_DIR。
	// 對它們而言根物件就是唯一版本，回源是正確答案而不是退路。
	it("always goes to R2 for an MD Anderson id", () => {
		const out = join(dir, "out.pdf");
		run(`. ./lib.sh; fetch_clean mda-pert "${out}"`, { CLEAN_DIR: clean });
		expect(readFileSync(out, "utf8")).toBe("FROM-R2");
		expect(calls().join(" ")).toContain("nccn-pdfs/mda-pert.pdf");
	});

	// 一個 0 byte 的檔案是「cp 到一半斷了」，不是命中。當成命中的話，這一輪的索引
	// 就會少掉那份指引，而且沒有任何一步會跑紅。
	it("treats an empty local file as a miss, not a hit", () => {
		writeFileSync(join(clean, "aml.pdf"), "");
		const out = join(dir, "out.pdf");
		run(`. ./lib.sh; fetch_clean aml "${out}"`, { CLEAN_DIR: clean });
		expect(readFileSync(out, "utf8")).toBe("FROM-R2");
	});

	// 呼叫端全都長成 `for id in $IDS; do fetch_clean "$id" ...; done`。函式裡沒有
	// local 宣告的話，第一次呼叫就會把呼叫端的 $id 換掉，迴圈從第二圈起全錯。
	it("does not clobber the caller's $id or $out", () => {
		writeFileSync(join(clean, "aml.pdf"), "x");
		const got = run(
			`. ./lib.sh; id=CALLER; out=CALLER_OUT; fetch_clean aml "${join(dir, "o.pdf")}"; echo "$id/$out"`,
			{ CLEAN_DIR: clean },
		).trim();
		expect(got).toBe("CALLER/CALLER_OUT");
	});

	// 回源失敗要能被 `if ! fetch_clean …` 看見——那是每個呼叫端數 GET-FAIL 的依據。
	it("reports failure when R2 has nothing either", () => {
		writeFileSync(join(bin, "wrangler"), "#!/bin/bash\nexit 1\n", { mode: 0o755 });
		const code = run(
			`. ./lib.sh; fetch_clean nope "${join(dir, "o.pdf")}" && echo 0 || echo 1`,
		).trim();
		expect(code).toBe("1");
	});
});
