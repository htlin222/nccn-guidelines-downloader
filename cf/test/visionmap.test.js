// visionMap 是「翻頁不再打網路」的關鍵：整份的讀圖清單算一次放 KV，
// 之後只用 COUNT(*) 對帳。這裡確認快取真的省掉了那次昂貴的全文讀取。
import { describe, expect, it, vi } from "vitest";
import { visionMap } from "../src/lib/insight.js";

const ALGO = "SYSTEMIC ADJUVANT TREATMENT pT1a pN0 See BINV-17 Recurrence Score";
// needsVision 也會用字數把太短的頁判成「沒內容」，所以散文樣本要夠長（>60 字）。
const PROSE =
	"Adjuvant endocrine therapy is recommended for these patients. The benefit was shown in SOFT and TEXT. " +
	"See Smith et al. and Jones et al. for the pooled analysis. Higher-risk patients benefited most. " +
	"Toxicity was increased; quality of life declined. The decision should be individualized. " +
	"AIs require concurrent ovarian suppression. Tamoxifen remains an option for many. " +
	"It is appropriate when suppression is not tolerated. Extended therapy may be considered. " +
	"Evidence beyond five years is limited. The panel reviewed the data. Consensus was reached.";

function env(pages, kvValue) {
	const seen = { count: 0, bodies: 0, put: null };
	return {
		seen,
		NCCN_KV: {
			get: async () => kvValue,
			put: async (k, v) => {
				seen.put = { k, v: JSON.parse(v) };
			},
		},
		DB: {
			prepare(sql) {
				const s = {
					bind: () => s,
					async first() {
						seen.count++;
						return { n: pages.length };
					},
					async all() {
						seen.bodies++;
						return { results: pages };
					},
				};
				return s;
			},
		},
	};
}

const PAGES = [
	{ page: 1, body: ALGO },
	{ page: 2, body: PROSE },
	{ page: 3, body: ALGO },
];

describe("visionMap", () => {
	it("computes the algorithm pages and stores them in KV", async () => {
		const e = env(PAGES, null);
		expect(await visionMap(e, "breast")).toEqual([1, 3]);
		expect(e.seen.put.k).toBe("vmap:breast");
		expect(e.seen.put.v).toEqual({ n: 3, v: [1, 3] });
	});

	it("serves from KV without reading every page body again", async () => {
		const e = env(PAGES, { n: 3, v: [1, 3] });
		expect(await visionMap(e, "breast")).toEqual([1, 3]);
		expect(e.seen.count).toBe(1); // 只有 COUNT(*) 對帳
		expect(e.seen.bodies).toBe(0); // 沒碰全文
	});

	it("recomputes when the index was rebuilt and the page count moved", async () => {
		const e = env(PAGES, { n: 99, v: [7] });
		expect(await visionMap(e, "breast")).toEqual([1, 3]);
		expect(e.seen.bodies).toBe(1);
	});

	it("returns empty rather than throwing when the pages table is missing", async () => {
		const broken = {
			NCCN_KV: { get: async () => null, put: async () => {} },
			DB: {
				prepare() {
					return {
						bind: () => ({
							first: async () => {
								throw new Error("no such table: pages");
							},
						}),
					};
				},
			},
		};
		expect(await visionMap(broken, "breast")).toEqual([]);
	});

	it("survives KV being unavailable by just recomputing", async () => {
		const e = env(PAGES, null);
		e.NCCN_KV.get = async () => {
			throw new Error("kv down");
		};
		expect(await visionMap(e, "breast")).toEqual([1, 3]);
	});
});
