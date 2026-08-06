import { describe, it, expect } from "vitest";
import { buildMatch, hayHit, queryTerms } from "../src/lib/search.js";

describe("buildMatch (FTS5 query builder)", () => {
	it("prefix-matches a single plain term", () => {
		expect(buildMatch("pembro")).toBe('"pembro"*');
	});

	it("expands a brand name to its generic synonym as an OR group", () => {
		const m = buildMatch("keytruda");
		expect(m).toContain('"keytruda"*');
		expect(m).toContain('"pembrolizumab"*');
		expect(m.startsWith("(") && m.endsWith(")")).toBe(true);
		expect(m).toContain(" OR ");
	});

	it("joins multiple tokens with a space (implicit AND)", () => {
		const m = buildMatch("stage workup");
		expect(m).toBe('"stage"* "workup"*');
	});

	it("strips FTS punctuation that would break the query", () => {
		expect(buildMatch('("stage")*')).toBe('"stage"*');
	});
});

describe("hayHit (guideline-name matching in the search box)", () => {
	const hay = "Breast Cancer breast Oncology";

	it("matches case-insensitively", () => {
		expect(hayHit(hay, "BREAST")).toBe(true);
	});

	it("requires every token, in any order", () => {
		expect(hayHit(hay, "cancer breast")).toBe(true);
		expect(hayHit(hay, "breast leukemia")).toBe(false);
	});

	it("treats an empty query as matching everything", () => {
		expect(hayHit(hay, "  ")).toBe(true);
	});

	it("survives a missing haystack", () => {
		expect(hayHit(undefined, "breast")).toBe(false);
	});
});

describe("queryTerms (client highlight terms)", () => {
	it("lowercases and de-duplicates terms", () => {
		expect(queryTerms("Stage STAGE stage")).toEqual(["stage"]);
	});

	it("includes synonyms for brand/generic expansion", () => {
		const terms = queryTerms("opdivo");
		expect(terms).toContain("opdivo");
		expect(terms).toContain("nivolumab");
	});

	it("returns [] for whitespace / punctuation only", () => {
		expect(queryTerms("  () ** ")).toEqual([]);
	});
});
