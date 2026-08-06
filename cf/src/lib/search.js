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
// 首頁搜尋框的「檔名命中」判斷：純字串比對，跟 FTS 無關。輸入 breast 時最想做的
// 事通常是打開那一份，不是讀 200 頁內文片段，所以這一段要能獨立算出來、先畫出來。
// 瀏覽器端是用 .toString() 注入的，必須自給自足（只吃參數與 JS 內建）。
export function hayHit(hay, q) {
	const h = String(hay || "").toLowerCase();
	const toks = String(q || "")
		.toLowerCase()
		.split(/\s+/)
		.filter(Boolean);
	if (!toks.length) return true;
	for (const t of toks) if (h.indexOf(t) < 0) return false;
	return true;
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
