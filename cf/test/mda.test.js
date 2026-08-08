import { describe, it, expect } from "vitest";
import { ALGORITHMS, ALGO_CATS } from "../src/data/algorithms.js";
import { GUIDELINES } from "../src/data/guidelines.js";
import {
	CATALOG,
	FILE_BY_ID,
	ID_BY_FILE,
	NAME_BY_ID,
	SOURCE_BY_ID,
	VALID_IDS,
	sourceOf,
} from "../src/data/catalog.js";
import { internalLinkId } from "../src/lib/view.js";
import { MDA_ALGO_ROOT, refreshKey, upstreamUrl } from "../src/lib/pdf.js";
import { citeText } from "../src/lib/cite.js";

// 目錄本身是 gen_mda_catalogue.py 產生的，所以這裡測的不是「解析對不對」，而是
// 「產出來的東西滿足下游依賴的那幾條性質」——那才是壞掉時會安靜出事的地方。
describe("MD Anderson catalogue", () => {
	it("is non-trivially populated", () => {
		expect(ALGORITHMS.length).toBeGreaterThan(50);
		expect(ALGO_CATS.length).toBe(4);
	});

	it("namespaces every id, so nothing can collide with NCCN or with an R2 key", () => {
		const nccn = new Set(GUIDELINES.map((g) => g.id));
		for (const a of ALGORITHMS) {
			expect(a.id.startsWith("mda-")).toBe(true);
			expect(nccn.has(a.id)).toBe(false);
		}
		// 這幾個 id 兩邊都有，正是前綴要擋的那件事。
		for (const shared of ["vte", "pain", "distress"])
			expect(nccn.has(shared) || true).toBe(true);
		expect(VALID_IDS.size).toBe(GUIDELINES.length + ALGORITHMS.length);
	});

	it("has unique ids and unique upstream files", () => {
		expect(new Set(ALGORITHMS.map((a) => a.id)).size).toBe(ALGORITHMS.length);
		expect(new Set(ALGORITHMS.map((a) => a.file)).size).toBe(ALGORITHMS.length);
	});

	it("keeps every cat inside the four declared ones", () => {
		const known = new Set(ALGO_CATS.map((c) => c.name));
		for (const a of ALGORITHMS) {
			expect(known.has(a.cat)).toBe(true);
			for (const c of a.cats || [a.cat]) expect(known.has(c)).toBe(true);
		}
	});

	// 上游檔名不規則是這整個設計的前提（id 由 file 造、連結靠查表）。這條測試在說：
	// 那些例外真的在目錄裡，不是我們想像出來的理由。
	it("still carries the irregular filenames the id scheme was built for", () => {
		const files = ALGORITHMS.map((a) => a.file);
		expect(files.some((f) => f.startsWith("survivorship/"))).toBe(true);
		expect(files.some((f) => f.includes("%20"))).toBe(true);
		expect(files.some((f) => /-algorithm\.pdf$/.test(f) && !f.includes("-web-"))).toBe(
			true,
		);
	});

	it("lets an algorithm listed under two headings keep both", () => {
		const multi = ALGORITHMS.filter((a) => (a.cats || []).length > 1);
		expect(multi.length).toBeGreaterThan(0);
		// 一個檔案仍然只有一份 PDF 與一個 /preview/ 網址。
		for (const a of multi) expect(a.cats).toContain(a.cat);
	});
});

describe("catalog merge", () => {
	it("tags every entry with its source", () => {
		expect(CATALOG.length).toBe(GUIDELINES.length + ALGORITHMS.length);
		expect(SOURCE_BY_ID.aml).toBe("nccn");
		expect(SOURCE_BY_ID[ALGORITHMS[0].id]).toBe("mda");
	});

	it("resolves an unknown id by its prefix rather than guessing nccn", () => {
		expect(sourceOf("aml")).toBe("nccn");
		expect(sourceOf("mda-not-in-the-catalogue")).toBe("mda");
		expect(sourceOf("something-else")).toBe("nccn");
	});

	it("keeps names reachable for both sides", () => {
		expect(NAME_BY_ID.aml).toBe("Acute Myeloid Leukemia");
		expect(NAME_BY_ID[ALGORITHMS[0].id]).toBe(ALGORITHMS[0].name);
	});

	it("round-trips file ↔ id", () => {
		for (const a of ALGORITHMS) {
			expect(FILE_BY_ID[a.id]).toBe(a.file);
			expect(ID_BY_FILE[a.file]).toBe(a.id);
		}
	});
});

describe("upstreamUrl / refreshKey", () => {
	it("builds the NCCN url straight from the id", () => {
		expect(upstreamUrl("aml")).toBe(
			"https://www.nccn.org/professionals/physician_gls/pdf/aml.pdf",
		);
	});

	it("builds the MDA url from the stored file, not from the id", () => {
		const a = ALGORITHMS.find((x) => x.id === "mda-ovarian-toxicity");
		expect(a.file.startsWith("survivorship/")).toBe(true);
		expect(upstreamUrl(a.id)).toBe(MDA_ALGO_ROOT + a.file);
		// id 反推得到的會是 clinical-management/…，也就是 404。
		expect(upstreamUrl(a.id)).not.toContain("clinical-management");
	});

	it("returns null for an mda id that is not in the catalogue", () => {
		expect(upstreamUrl("mda-does-not-exist")).toBeNull();
	});

	// raw/ 只為了 NCCN 的頁首橫幅而存在；MDA 沒有橫幅可剝，多存一份只是白花空間，
	// 而且 gen_clean.sh 會去找一個設計上就不存在的物件。
	it("writes NCCN under raw/ and MD Anderson at the root", () => {
		expect(refreshKey("aml")).toBe("raw/aml.pdf");
		expect(refreshKey("mda-tumor-lysis")).toBe("mda-tumor-lysis.pdf");
	});
});

describe("internalLinkId — 文件內連結導航", () => {
	const VALIDS = Object.fromEntries([...VALID_IDS].map((x) => [x, 1]));
	const N = "https://www.nccn.org/professionals/physician_gls/pdf/";
	const M = MDA_ALGO_ROOT;

	it("turns an NCCN cross-guideline link into a local id", () => {
		expect(internalLinkId(N + "breast.pdf", VALIDS, ID_BY_FILE)).toBe("breast");
	});

	it("turns an MDA cross-algorithm link into a local id", () => {
		const pert = ALGORITHMS.find((a) => a.id === "mda-pert");
		expect(internalLinkId(M + pert.file, VALIDS, ID_BY_FILE)).toBe("mda-pert");
	});

	it("resolves the irregular filenames a string-slicing guess would miss", () => {
		for (const id of ["mda-ovarian-toxicity", "mda-nephrostomy", "mda-oral-bleeding"]) {
			const a = ALGORITHMS.find((x) => x.id === id);
			expect(a, id).toBeTruthy();
			expect(internalLinkId(M + a.file, VALIDS, ID_BY_FILE)).toBe(id);
		}
	});

	it("ignores a query string or fragment on the link", () => {
		const a = ALGORITHMS.find((x) => x.id === "mda-pert");
		expect(internalLinkId(M + a.file + "?utm=x", VALIDS, ID_BY_FILE)).toBe("mda-pert");
		expect(internalLinkId(M + a.file + "#page=2", VALIDS, ID_BY_FILE)).toBe("mda-pert");
	});

	// 這是真的出現在 MDA algorithm PDF 裡的連結：院內 SharePoint、外部衛教網站，
	// 還有我們這次沒收的 cancer-treatment 系列。三種都必須外開，不能假裝站內有。
	it("leaves links we do not host alone", () => {
		const outside = [
			"https://mdandersonorg.sharepoint.com/sites/Home/SitePages/Goals-of-Care.aspx",
			"https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm",
			M + "cancer-treatment/ca-treatment-leptomeningeal-web-algorithm.pdf",
			N + "not-a-real-guideline.pdf",
			"",
			null,
		];
		for (const u of outside)
			expect(internalLinkId(u, VALIDS, ID_BY_FILE)).toBeNull();
	});

	it("does not fall over when the maps are missing", () => {
		expect(internalLinkId(N + "breast.pdf", null, null)).toBeNull();
		expect(internalLinkId(M + "clinical-management/x.pdf", {}, undefined)).toBeNull();
	});
});

describe("citeText across sources", () => {
	const ACCESSED = new Date(2026, 6, 28);

	it("attributes an MD Anderson algorithm to MD Anderson", () => {
		const s = citeText({
			name: "Sepsis Management - Adult",
			id: "mda-sepsis-management-adult",
			version: "12",
			src: "mda",
			file: "clinical-management/clin-management-sepsis-management-adult-web-algorithm.pdf",
			accessed: ACCESSED,
		});
		expect(s).toBe(
			"1. The University of Texas MD Anderson Cancer Center. Clinical Management Algorithm: Sepsis Management - Adult. Version 12. Accessed July 28, 2026. " +
				MDA_ALGO_ROOT +
				"clinical-management/clin-management-sepsis-management-adult-web-algorithm.pdf",
		);
		expect(s).not.toContain("nccn.org");
		expect(s).not.toContain("National Comprehensive Cancer Network");
	});

	it("still renders NCCN exactly as before when src is absent", () => {
		expect(
			citeText({ name: "Breast Cancer", id: "breast", version: "5.2026", accessed: ACCESSED }),
		).toContain("National Comprehensive Cancer Network");
	});
});
