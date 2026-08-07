// Pure viewer helpers: which page am I on, what should be rendered next, and
// how fast is the reader moving. The viewer injects all three verbatim via
// `.toString()`, so they MUST stay self-contained: only their params + JS
// built-ins, no closures over module scope.
//
// These exist as separate functions purely so they can be unit-tested. The
// logic is small; the reason it is worth extracting is that the old inline
// versions were the two biggest sources of scroll jank in the viewer and there
// was no way to prove a replacement behaved the same.

// Which page contains viewport offset `y`? `tops` is every page's offsetTop in
// ascending order. Returns a 0-based index — the last page that starts at or
// above `y`, clamped to 0.
//
// This replaces a linear walk that called getBoundingClientRect() on every page
// from 1 to the current one, on every scroll frame. On a 500-page guideline
// that was ~500 forced layouts per frame; a cached offset table plus a binary
// search is zero layout reads and O(log n).
export function pageAtOffset(tops, y) {
	if (!tops || !tops.length) return 0;
	var lo = 0;
	var hi = tops.length - 1;
	var best = 0;
	while (lo <= hi) {
		var mid = (lo + hi) >> 1;
		if (tops[mid] <= y) {
			best = mid;
			lo = mid + 1;
		} else {
			hi = mid - 1;
		}
	}
	return best;
}

// Which pages to render, in priority order, given the 0-based current page and
// the scroll direction. Reading is asymmetric — you almost always continue in
// the direction you were already going — so prefetch is too: `ahead` pages the
// way you are heading, `behind` pages the way you came.
//
// `dir < 0` means scrolling up; 0 (idle / unknown) is treated as forward,
// because that is what a reader who has just stopped will do next.
export function prefetchPlan(cur, dir, total, ahead, behind) {
	if (!(total > 0)) return [];
	var a = ahead == null ? 3 : ahead;
	var b = behind == null ? 1 : behind;
	var step = dir < 0 ? -1 : 1;
	var out = [];
	var k;
	if (cur >= 0 && cur < total) out.push(cur);
	for (k = 1; k <= a; k++) {
		var f = cur + step * k;
		if (f >= 0 && f < total && out.indexOf(f) < 0) out.push(f);
	}
	for (k = 1; k <= b; k++) {
		var r = cur - step * k;
		if (r >= 0 && r < total && out.indexOf(r) < 0) out.push(r);
	}
	return out;
}

// Which rendered pages to throw away, furthest from the reader first, until the
// total fits `budget`. `px[i]` is the pixel count page i is currently holding (0
// if it holds nothing); `budget` is a pixel count, not a page count — a 500-page
// guideline mixes portrait text pages with landscape algorithm pages at 3× the
// area, so "keep 40 pages" means wildly different memory on different documents.
//
// The current page and its two neighbours are never evicted: dropping what the
// reader is looking at to save memory produces the exact blank this whole change
// exists to remove.
export function evictPlan(px, cur, budget) {
	if (!px || !px.length) return [];
	var held = [];
	var total = 0;
	for (var i = 0; i < px.length; i++) {
		if (px[i] > 0) {
			held.push(i);
			total += px[i];
		}
	}
	if (total <= budget) return [];
	held.sort(function (a, b) {
		return Math.abs(b - cur) - Math.abs(a - cur) || b - a;
	});
	var out = [];
	for (var k = 0; k < held.length && total > budget; k++) {
		if (Math.abs(held[k] - cur) <= 1) continue;
		out.push(held[k]);
		total -= px[held[k]];
	}
	return out;
}

// Smoothed scroll direction + speed. `dy` is pixels moved since the last
// sample, `dt` the milliseconds between them, `prev` the previous return value.
//
// `fast` is the gate that matters: while it is true the viewer renders nothing
// new, because a full-resolution rasterise that lands after the page has already
// scrolled past is pure wasted main thread. The thumbnails carry the visual
// until the scroll settles. Speed is an EMA so one stuttery frame cannot flip
// the gate on its own.
export function scrollIntent(dy, dt, prev, fastPx) {
	var t = dt > 0 ? dt : 16;
	var v = Math.abs(dy) / t;
	var p = prev && typeof prev.speed === "number" ? prev.speed : 0;
	var speed = p * 0.6 + v * 0.4;
	var dir = dy > 0 ? 1 : dy < 0 ? -1 : prev && prev.dir ? prev.dir : 1;
	var lim = fastPx == null ? 2 : fastPx;
	return { dir: dir, speed: speed, fast: speed > lim };
}

// PDF 內的一個外部連結 → 站內要開哪一份，或 null（就照原樣外開）。
//
// 這是「文件內連結導航」的全部判斷。兩個上游各有一種跨檔連結的長相：
//   NCCN  https://www.nccn.org/professionals/physician_gls/pdf/breast.pdf
//   MDA   https://www.mdanderson.org/content/dam/mdanderson/documents/
//         for-physicians/algorithms/clinical-management/clin-management-pert-web-algorithm.pdf
//
// NCCN 那條可以從網址裁出 id，因為它的檔名就是 id。MDA 那條**不行**，所以走查表：
// 上游檔名不規則（有的少了 -web、有一份在 survivorship/ 而不是 clinical-management/、
// 有一份帶 %20），任何「裁掉前後綴再猜」的寫法都會在那幾份上安靜地失敗，連到一個
// 不存在的 /preview/。fileIds 的鍵是 data/algorithms.js 裡的 file 欄位，也就是抓檔
// 用的同一個字串——連結解析與抓取因此不可能各自漂走。
//
// 站外連結（MDA 的 sharepoint 院內網、CDC、期刊）一律回 null。頁內跳轉不走這裡，
// 那是 annotation 的 dest 分支，pdf.js 自己就給得出目標頁。
//
// 跟 view.js 其他函式一樣會被 `.toString()` 注入頁面，必須自給自足。
export function internalLinkId(url, valids, fileIds) {
	var u = String(url || "");
	var V = valids || {};

	var nk = "/physician_gls/pdf/";
	var ni = u.indexOf(nk);
	if (ni >= 0) {
		var rest = u.slice(ni + nk.length);
		var dot = rest.indexOf(".pdf");
		if (dot < 0) return null;
		var cand = rest.slice(0, dot);
		return V[cand] ? cand : null;
	}

	var mk = "/for-physicians/algorithms/";
	var mi = u.indexOf(mk);
	if (mi >= 0) {
		// 只取路徑，丟掉 ?query 與 #fragment——上游偶爾在連結尾巴掛追蹤參數。
		var tail = u.slice(mi + mk.length).split("?")[0].split("#")[0];
		var id = (fileIds || {})[tail];
		return id && V[id] ? id : null;
	}

	return null;
}
