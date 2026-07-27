import { describe, expect, it } from "vitest";
import {
	cleanPageText,
	needsVision,
	toBullets,
	todayKey,
	budgetCap,
	DEFAULT_BUDGET,
} from "../src/lib/insight.js";

const EULA =
	"PLEASE NOTE that use of this NCCN Content is governed by the End-User License Agreement, " +
	"and you MAY NOT distribute this Content or use it with any artificial intelligence model or tool. " +
	"Printed by Hsiehting Lin on 7/23/2026 2:01:13 PM. " +
	"Copyright © 2026 National Comprehensive Cancer Network, Inc. All Rights Reserved. ";

// 取自 breast v5.2026 p.20（演算法）與 p.266（Discussion 散文）的真實形狀。
const ALGO =
	EULA +
	"NCCN Guidelines Index Table of Contents Discussion SYSTEMIC ADJUVANT TREATMENT: " +
	"HR-POSITIVE – HER2-NEGATIVE DISEASE PREMENOPAUSAL PATIENTS with pT1–3 AND pN0 TUMORS " +
	"Consider adjuvant endocrine therapy (category 2B) pT1a (≤0.5 cm) and pN0 Adjuvant endocrine " +
	"therapy ± ovarian suppression/ablation Consider adjuvant chemotherapy 21-gene RT-PCR assay " +
	"Recurrence Score ≤25 Recurrence Score ≥26 See BINV-17 Adjuvant chemotherapy followed by " +
	"endocrine therapy pT1b–T3 and pN0 chemotherapy candidate not a chemotherapy candidate";

// Discussion 頁的句號密度高，除了句子短，還因為滿是 "et al." 這類引用縮寫。
const PROSE =
	EULA +
	"Adjuvant endocrine therapy is recommended. The benefit was shown in SOFT and TEXT. " +
	"See Smith et al. and Jones et al. for the pooled analysis. Higher-risk patients benefited most. " +
	"Toxicity was increased; quality of life declined. The decision should be individualized. " +
	"AIs require concurrent ovarian suppression. Tamoxifen remains an option. " +
	"It is appropriate when suppression is not tolerated. Extended therapy may be considered. " +
	"Evidence beyond 5 years is limited. The panel reviewed the data. Consensus was reached. " +
	"Refer to Brown et al. for details. Long-term follow-up is ongoing.";

describe("cleanPageText", () => {
	it("strips the per-page EULA / printed-by / copyright boilerplate", () => {
		const out = cleanPageText(EULA + "Adjuvant endocrine therapy.");
		expect(out).toBe("Adjuvant endocrine therapy.");
	});
	it("collapses whitespace and tolerates null", () => {
		expect(cleanPageText("  a \n\n b \t c ")).toBe("a b c");
		expect(cleanPageText(null)).toBe("");
	});
});

describe("needsVision", () => {
	it("flags algorithm pages (low sentence density) for rasterize + vision", () => {
		expect(needsVision(ALGO)).toBe(true);
	});
	it("leaves Discussion prose on the cheap text path", () => {
		expect(needsVision(PROSE)).toBe(false);
	});
	it("flags pages with no usable extracted text", () => {
		expect(needsVision("")).toBe(true);
		expect(needsVision(null)).toBe(true);
		expect(needsVision(EULA)).toBe(true); // 只剩樣板 → 等於沒內容
	});
});

describe("toBullets", () => {
	it("strips bullet markers, numbering and headings", () => {
		const out = toBullets("- alpha\n* beta\n3. gamma\n(4) delta\n### 標題x");
		expect(out).toEqual(["alpha", "beta", "gamma", "delta", "標題x"]);
	});
	it("drops lead-in lines that end in a colon, blanks and duplicates", () => {
		const out = toBullets("以下是重點：\n\n- alpha\n- alpha\n- beta");
		expect(out).toEqual(["alpha", "beta"]);
	});
	it("caps at max", () => {
		expect(toBullets("- a\n- b\n- c\n- d", 2)).toEqual(["a", "b"]);
	});
	it("returns an empty list for empty model output", () => {
		expect(toBullets("")).toEqual([]);
		expect(toBullets(null)).toEqual([]);
	});
});

describe("quota helpers", () => {
	it("keys usage by UTC date, matching the free-tier reset", () => {
		expect(todayKey(Date.UTC(2026, 6, 27, 23, 59))).toBe("2026-07-27");
		expect(todayKey(Date.UTC(2026, 6, 28, 0, 1))).toBe("2026-07-28");
	});
	it("reads the cap from vars and falls back to the default", () => {
		expect(budgetCap({ AI_DAILY_NEURONS: "500" })).toBe(500);
		expect(budgetCap({})).toBe(DEFAULT_BUDGET);
		expect(budgetCap({ AI_DAILY_NEURONS: "nope" })).toBe(DEFAULT_BUDGET);
	});
});
