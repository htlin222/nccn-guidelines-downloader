import { DRUG_GROUPS } from "../data/drugs.js";

const SYN = (() => {
	const m = {};
	for (const g of DRUG_GROUPS)
		for (const t of g) {
			const k = t.toLowerCase();
			m[k] = (m[k] || []).concat(
				g.filter((x) => x.toLowerCase() !== k).map((x) => x.toLowerCase()),
			);
		}
	return m;
})();
export function buildMatch(q) {
	const toks = q
		.replace(/["*()]/g, " ")
		.split(/\s+/)
		.filter(Boolean);
	return toks
		.map((t) => {
			const alts = SYN[t.toLowerCase()];
			const terms = ['"' + t + '"*'];
			if (alts) for (const a of alts) terms.push('"' + a + '"*');
			return terms.length > 1 ? "(" + terms.join(" OR ") + ")" : terms[0];
		})
		.join(" ");
}
export function queryTerms(q) {
	const toks = q
		.replace(/["*()]/g, " ")
		.split(/\s+/)
		.filter(Boolean);
	const out = [];
	for (const t of toks) {
		const k = t.toLowerCase();
		if (out.indexOf(k) < 0) out.push(k);
		const alts = SYN[k];
		if (alts) for (const a of alts) if (out.indexOf(a) < 0) out.push(a);
	}
	return out;
}
