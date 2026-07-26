// Pure TOC helpers shared by the server (tests) and the viewer client.
// The viewer injects these two functions verbatim via `.toString()`, so they
// MUST stay self-contained: only their params + JS built-ins, no closures.

// Group a flat TOC array into ordered render sections (algorithm first, then
// discussion), dropping empty sections. Entries lacking `sec` count as discussion.
export function tocGroups(toc) {
	var defs = [
		["algorithm", "演算法 · Algorithm"],
		["discussion", "討論 · Discussion"],
	];
	var out = [];
	for (var i = 0; i < defs.length; i++) {
		var sec = defs[i][0];
		var items = toc.filter(function (e) {
			return (e.sec || "discussion") === sec;
		});
		if (items.length) out.push({ sec: sec, label: defs[i][1], items: items });
	}
	return out;
}

// Given the rendered items' page numbers (DOM order) and the current page,
// return the index of the last entry whose page <= cur, or -1 if none.
export function tocBestIndex(pageNums, cur) {
	var best = -1;
	for (var i = 0; i < pageNums.length; i++) {
		if (pageNums[i] <= cur) best = i;
	}
	return best;
}
