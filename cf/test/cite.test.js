import { describe, it, expect } from "vitest";
import { citeText } from "../src/lib/cite.js";

const ACCESSED = new Date(2026, 6, 28); // July 28, 2026 (local, month is 0-based)

describe("citeText", () => {
	it("renders the full AMA reference", () => {
		expect(
			citeText({
				name: "Breast Cancer",
				id: "breast",
				version: "5.2026",
				accessed: ACCESSED,
			}),
		).toBe(
			"1. National Comprehensive Cancer Network. NCCN Clinical Practice Guidelines in Oncology: Breast Cancer. Version 5.2026. Accessed July 28, 2026. https://www.nccn.org/professionals/physician_gls/pdf/breast.pdf",
		);
	});

	it("drops the Version sentence when the version is unknown", () => {
		const s = citeText({ name: "Anal Carcinoma", id: "anal", accessed: ACCESSED });
		expect(s).not.toContain("Version");
		expect(s).toContain("Anal Carcinoma. Accessed July 28, 2026.");
	});

	it("keeps the id verbatim in the URL, including underscores and case", () => {
		expect(
			citeText({ name: "Multiple Myeloma", id: "Myeloma", accessed: ACCESSED }),
		).toContain("/physician_gls/pdf/Myeloma.pdf");
		expect(
			citeText({
				name: "Melanoma: Cutaneous",
				id: "cutaneous_melanoma",
				accessed: ACCESSED,
			}),
		).toContain("/physician_gls/pdf/cutaneous_melanoma.pdf");
	});

	it("formats single-digit days without padding", () => {
		expect(
			citeText({ name: "X", id: "x", accessed: new Date(2026, 0, 5) }),
		).toContain("Accessed January 5, 2026.");
	});

	it("defaults the access date to today", () => {
		const now = new Date();
		expect(citeText({ name: "X", id: "x" })).toContain(
			", " + now.getFullYear() + ".",
		);
	});
});
