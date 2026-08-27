import { describe, expect, it } from "vitest";
import {
	buildSearch,
	matchAliases,
	parseQuery,
	rankRows,
	splitByAlias,
	tokenize,
} from "../src/lib/notes.js";

// 縮小版的別名表，形狀跟 snippets/_vocab.json 的 alias 一致。
const ALIAS = {
	disease: { 乳癌: "breast", breast: "breast", 大腸癌: "colon" },
	stage: { 三期: "III", "stage 3": "III", 四期: "IV" },
	timepoint: { 檢查: "workup", workup: "workup", 術前: "neoadjuvant" },
	biomarker: { "her2+": "her2-positive", 三陰: "tnbc" },
};

describe("tokenize", () => {
	it("splits on spaces and CJK punctuation alike", () => {
		expect(tokenize("乳癌 三期、檢查")).toEqual(["乳癌", "三期", "檢查"]);
	});

	it("lowercases so the alias table can stay lowercase", () => {
		expect(tokenize("HER2+ Breast")).toEqual(["her2+", "breast"]);
	});

	it("survives an empty or absent query", () => {
		expect(tokenize("")).toEqual([]);
		expect(tokenize(null)).toEqual([]);
	});
});

describe("matchAliases", () => {
	it("finds the axis a term belongs to", () => {
		expect(matchAliases("三期", ALIAS)).toEqual([{ axis: "stage", value: "III" }]);
	});

	it("returns nothing for a term the dictionary does not know", () => {
		expect(matchAliases("olaparib", ALIAS)).toEqual([]);
	});
});

// 中文之間沒有空白，所以「乳癌三期」是一個 token。不拆的話這種輸入永遠找不到東西，
// 而使用者不會知道問題出在他沒打空白。
describe("splitByAlias — 中文黏在一起的輸入", () => {
	it("splits a run of concatenated aliases", () => {
		expect(splitByAlias("乳癌三期", ALIAS)).toEqual(["乳癌", "三期"]);
	});

	it("splits three in a row", () => {
		expect(splitByAlias("乳癌三期檢查", ALIAS)).toEqual(["乳癌", "三期", "檢查"]);
	});

	// 只有整串都切得完才算數。切一半代表這個詞不是別名的串接，硬拆會把
	// 「乳癌手術後」拆成「乳癌」加一段沒人認得的殘骸，然後靜靜地漏掉後半段的意思。
	it("gives up rather than half-splitting", () => {
		expect(splitByAlias("乳癌手術後", ALIAS)).toEqual([]);
	});

	it("returns nothing for a term with no known prefix", () => {
		expect(splitByAlias("olaparib", ALIAS)).toEqual([]);
	});
});

describe("parseQuery", () => {
	it("routes known terms to facets and the rest to full text", () => {
		const p = parseQuery("乳癌 三期 olaparib", ALIAS);
		expect(p.facets).toEqual([
			{ axis: "disease", value: "breast" },
			{ axis: "stage", value: "III" },
		]);
		expect(p.text).toEqual(["olaparib"]);
	});

	it("handles the concatenated form identically", () => {
		expect(parseQuery("乳癌三期檢查", ALIAS).facets).toEqual(
			parseQuery("乳癌 三期 檢查", ALIAS).facets,
		);
	});

	it("does not repeat an axis/value the user typed twice", () => {
		const p = parseQuery("乳癌 breast 乳癌", ALIAS);
		expect(p.facets).toEqual([{ axis: "disease", value: "breast" }]);
	});

	it("returns two empty lists for an empty query", () => {
		expect(parseQuery("", ALIAS)).toEqual({ facets: [], text: [] });
	});
});

describe("rankRows", () => {
	// 找的是門診情境，不是查閱資料。principles 附錄篇幅長、字面命中多，但使用者
	// 要的是決策節點。
	it("puts decision nodes above principles at the same score", () => {
		const out = rankRows([
			{ gid: "breast", ref: "BINV-A", kind: "principles", axes: 2, page: 42 },
			{ gid: "breast", ref: "BINV-12", kind: "decision", axes: 2, page: 25 },
		]);
		expect(out.map((r) => r.ref)).toEqual(["BINV-12", "BINV-A"]);
	});

	it("sorts by number of axes hit first", () => {
		const out = rankRows([
			{ gid: "colon", ref: "COL-2", kind: "decision", axes: 1, page: 2 },
			{ gid: "breast", ref: "BINV-1", kind: "decision", axes: 3, page: 14 },
		]);
		expect(out[0].ref).toBe("BINV-1");
	});

	it("falls back to guideline then page for a stable order", () => {
		const out = rankRows([
			{ gid: "breast", ref: "B", kind: "decision", axes: 1, page: 30 },
			{ gid: "breast", ref: "A", kind: "decision", axes: 1, page: 10 },
		]);
		expect(out.map((r) => r.ref)).toEqual(["A", "B"]);
	});

	it("does not mutate its input", () => {
		const rows = [
			{ gid: "b", ref: "X", kind: "decision", axes: 1, page: 2 },
			{ gid: "a", ref: "Y", kind: "decision", axes: 1, page: 1 },
		];
		rankRows(rows);
		expect(rows[0].ref).toBe("X");
	});
});

describe("buildSearch", () => {
	it("binds each facet pair and counts the intersection", () => {
		const { sql, binds } = buildSearch(
			{ facets: [{ axis: "disease", value: "breast" }], text: [] },
			10,
		);
		expect(sql).toContain("axes > 0");
		expect(binds.slice(0, 2)).toEqual(["disease", "breast"]);
	});

	it("falls back to a plain scan when nothing hit the dictionary", () => {
		const { sql, binds } = buildSearch({ facets: [], text: ["olaparib"] }, 10);
		expect(sql).toContain("0 AS axes");
		expect(binds.slice(0, 3)).toEqual(["%olaparib%", "%olaparib%", "%olaparib%"]);
	});

	// 沒有上限的話一次查詢可以把整張表拉回來，而那張表只會愈來愈大。
	it("clamps the limit at both ends", () => {
		expect(buildSearch({ facets: [], text: [] }, 9999).binds.pop()).toBe(200);
		expect(buildSearch({ facets: [], text: [] }, 0).binds.pop()).toBe(60);
		expect(buildSearch({ facets: [], text: [] }, -5).binds.pop()).toBe(60);
	});
});
