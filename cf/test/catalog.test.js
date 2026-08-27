import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { CATS } from "../src/data/categories.js";
import { GUIDELINES } from "../src/data/guidelines.js";

// NCCN 的目錄存在兩個地方，而且兩份都是手寫的：
//
//   guidelines.json        — 七支 shell 腳本 iterate 的那一份（gen_versions、
//                            gen_thumbs、build_index、build_toc、build_updates、
//                            gen_clean、seed_r2）
//   src/data/guidelines.js — 編進 Worker 的那一份（VALID_IDS、卡片、搜尋篩選）
//
// 兩份漂開的後果是不對稱的，所以特別討厭：只加進 .js 的 id，站上點得進去但永遠
// 沒有 PDF、沒有縮圖、沒有版本；只加進 .json 的 id，每週會被完整重建，但 Worker
// 認為它不存在（VALID_IDS 擋掉），於是 404。兩種都不會有任何一支腳本跑紅——它們
// 各自都是自洽的。
//
// MDA 那半邊沒有這個問題：algorithms.json 與 algorithms.js 都由
// gen_mda_catalogue.py 一次寫出。這裡是用測試補上同一個保證。
const json = JSON.parse(
	readFileSync(new URL("../guidelines.json", import.meta.url), "utf8"),
);
const embed = JSON.parse(
	readFileSync(new URL("../embed.json", import.meta.url), "utf8"),
);

const key = (g) => `${g.id} ${g.name} ${g.cat}`;

describe("NCCN catalogue — the two hand-written copies must agree", () => {
	it("holds the same ids on both sides", () => {
		expect([...GUIDELINES.map((g) => g.id)].sort()).toEqual(
			[...json.map((g) => g.id)].sort(),
		);
	});

	// id 對上還不夠：改了名字或搬了分類卻只改一邊，卡片與搜尋結果會各說各話。
	it("holds the same name and cat for every id", () => {
		expect([...GUIDELINES.map(key)].sort()).toEqual([...json.map(key)].sort());
	});

	// embed.json 目前沒有任何消費者（grep 過整個 repo），留著是因為刪掉是
	// /deprecate 的工作而不是這裡的。既然留著，就不准它偷偷變成第三份真相。
	it("keeps embed.json identical to guidelines.json", () => {
		expect(embed).toEqual(json);
	});
});

describe("NCCN catalogue — internal consistency", () => {
	it("has no duplicate id", () => {
		const ids = json.map((g) => g.id);
		expect(new Set(ids).size).toBe(ids.length);
	});

	it("has no duplicate name", () => {
		const names = json.map((g) => g.name);
		expect(new Set(names).size).toBe(names.length);
	});

	// 首頁按 cat 分組渲染，圖示與顏色都從 CATS 查。查不到的分類會靜靜地掉進灰色
	// 的 'help' 圖示，而不是報錯。
	it("only uses categories that CATS declares", () => {
		const known = new Set(CATS.map((c) => c.name));
		expect(json.filter((g) => !known.has(g.cat)).map((g) => g.id)).toEqual([]);
	});

	// id 直接組成 R2 key 與 NCCN 的下載網址（lib/pdf.js 的 upstreamUrl），所以任何
	// 需要跳脫的字元都是個等著發生的 404。
	it("keeps every id url- and key-safe", () => {
		expect(json.filter((g) => !/^[a-zA-Z0-9_-]+$/.test(g.id))).toEqual([]);
	});

	// mda- 是 MDA 那半邊的命名空間（見 data/catalog.js）。NCCN 這邊佔用它，
	// sourceOf() 會把一份 NCCN 指引判成 MD Anderson 的。
	it("never claims the mda- namespace", () => {
		expect(json.filter((g) => g.id.startsWith("mda-"))).toEqual([]);
	});
});

// 第三份拷貝，住在 repo root：nccn.sh 的 fzf picker 從這裡取 id（README 也指向
// 它）。它沒有被任何 CI 步驟碰過，於是安靜地漂了很久——直到這條測試寫出來為止，
// 裡面還有三個 NCCN 早就改掉的 slug（primary_cutaneous、genetics_bop、
// genetics_colon），以及 older_adult 與 hiv 對調的兩個名字。挑到過時 slug 的
// 下場不是報錯，是 NCCN 回一頁登入 HTML，然後你拿到一個副檔名叫 .pdf 的網頁。
const dict = readFileSync(
	new URL("../../nccn_dict.txt", import.meta.url),
	"utf8",
);
const dictRows = [...dict.matchAll(/^\s*(\S+)\s+#\s*(.+?)\s*$/gm)].map((m) => ({
	id: m[1],
	name: m[2],
}));

describe("nccn_dict.txt — the fzf picker's copy", () => {
	it("offers exactly the ids the catalogue has", () => {
		expect(dictRows.map((g) => g.id).sort()).toEqual(
			json.map((g) => g.id).sort(),
		);
	});

	it("labels each id with the same name the catalogue uses", () => {
		const byId = new Map(json.map((g) => [g.id, g.name]));
		expect(dictRows.filter((g) => byId.get(g.id) !== g.name)).toEqual([]);
	});
});

describe("NCCN catalogue — guidelines NCCN has retired", () => {
	// 這兩份被上游拆掉了，R2 上剩下的是一頁公告 PDF：
	//   hepatobiliary -> hcc + btc
	//   immunotherapy -> ici_tox + cellular_tox
	// 公告頁沒有 "Version X.YYYY" 章，所以留在目錄裡的代價是 gen_versions 每週固定
	// NO-VERSION 兩筆，以及讀者點進去看到一頁廢話。這條測試是為了讓「不小心把它們
	// 加回來」變成一次 CI 失敗，而不是又一季的沉默 miss。
	it("does not list a guideline that upstream has split", () => {
		const ids = new Set(json.map((g) => g.id));
		expect(ids.has("hepatobiliary")).toBe(false);
		expect(ids.has("immunotherapy")).toBe(false);
	});

	it("lists every successor instead", () => {
		const ids = new Set(json.map((g) => g.id));
		for (const id of ["hcc", "btc", "ici_tox", "cellular_tox"])
			expect(ids.has(id)).toBe(true);
	});
});
