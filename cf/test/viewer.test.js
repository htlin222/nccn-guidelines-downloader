import { JSDOM, VirtualConsole } from "jsdom";
import { beforeAll, describe, expect, it } from "vitest";
import { renderViewer } from "../src/views/viewer.js";

// viewer.js 的 <script> 是一整塊注入字串，node --check 只看得出語法錯。
// 真正會出事的是「同步初始化的先後順序」——var 只提升宣告不提升賦值，所以
// 骨架在第 N 行呼叫某個第 N+200 行才賦值的東西，就是一個 TypeError 把整頁打死。
// 這個測試把那段 script 真的在 jsdom 裡跑起來，就是為了擋這一類。
// （寫這支的時候它立刻抓到兩個：restorePos→bkPaint 用到還沒初始化的 BK，
//   以及 buildSkeleton→buildThumbs 用到還沒初始化的 tio。）

const PAGES = 213;

function fakeEnv() {
	const keys = {
		"meta/versions.json": JSON.stringify({
			aml: { v: "5.2026", d: "July 15, 2026" },
		}),
		"meta/clean.json": JSON.stringify({ aml: { pages: PAGES } }),
		"meta/toc/aml.json": "[]",
	};
	return {
		PDFS: {
			async get(k) {
				return k in keys ? { async text() { return keys[k]; } } : null;
			},
			async head(k) {
				return k in keys ? { size: 1 } : null;
			},
		},
	};
}

function fakePage() {
	return {
		getViewport: ({ scale }) => ({
			width: 792 * scale,
			height: 612 * scale,
			convertToViewportRectangle: (r) => r,
		}),
		render: () => ({ promise: Promise.resolve() }),
		getTextContent: () => Promise.resolve({ items: [] }),
		getAnnotations: () => Promise.resolve([]),
	};
}

const tick = () => new Promise((r) => setTimeout(r, 30));

// 把 viewer 跑起來，回傳操作它所需要的把手。
async function boot() {
	const html = await renderViewer(fakeEnv(), "aml");
	const jsdomErrors = [];
	const vc = new VirtualConsole();
	vc.on("jsdomError", (e) => jsdomErrors.push(e));
	const { window } = new JSDOM(html, {
		url: "https://nccn.test/preview/aml",
		virtualConsole: vc,
		runScripts: "outside-only",
		pretendToBeVisual: true,
	});

	const getPageCalls = [];
	let resolveDoc;
	const docPromise = new Promise((r) => { resolveDoc = r; });
	window.pdfjsLib = {
		GlobalWorkerOptions: {},
		getDocument: () => ({ promise: docPromise }),
		renderTextLayer: () => ({ promise: Promise.resolve() }),
	};
	const observers = [];
	window.IntersectionObserver = class {
		constructor(cb) { this.cb = cb; this.els = new Set(); observers.push(this); }
		observe(el) { this.els.add(el); }
		unobserve(el) { this.els.delete(el); }
		disconnect() { this.els.clear(); }
		fire(els) {
			this.cb(els.map((target) => ({ isIntersecting: true, target })));
		}
	};
	window.fetch = () => Promise.resolve({ json: () => Promise.resolve([]) });
	window.matchMedia = () => ({ matches: false, addEventListener() {}, addListener() {} });
	window.requestAnimationFrame = (f) => setTimeout(f, 0);
	window.HTMLCanvasElement.prototype.getContext = () => ({
		fillRect() {}, drawImage() {}, set fillStyle(_v) {},
	});
	window.Element.prototype.scrollIntoView = function () {};

	let threw = null;
	try {
		for (const m of html.matchAll(/<script>([\s\S]*?)<\/script>/g)) window.eval(m[1]);
	} catch (e) { threw = e; }

	const doc = window.document;
	return {
		threw, jsdomErrors, getPageCalls, observers, window, html,
		$: (id) => doc.getElementById(id),
		pageEls: () => [...doc.querySelectorAll("#viewer .page")],
		railEls: () => [...doc.querySelectorAll("#rail .thumb")],
		loadPdf: async (numPages = PAGES) => {
			resolveDoc({
				numPages,
				getPage: (n) => { getPageCalls.push(n); return Promise.resolve(fakePage()); },
				getDestination: () => Promise.resolve(null),
				getPageIndex: () => Promise.resolve(0),
			});
			await tick();
		},
	};
}

describe("viewer 的骨架", () => {
	let v;
	beforeAll(async () => { v = await boot(); });

	it("整段 inline script 跑得完，不會在同步初始化階段炸掉", () => {
		expect(v.threw && v.threw.message).toBeNull();
		expect(v.jsdomErrors).toHaveLength(0);
	});

	it("PDF 都還沒開始下載，版面就已經是最終的樣子", () => {
		expect(v.pageEls()).toHaveLength(PAGES);
		expect(v.railEls()).toHaveLength(PAGES);
		expect(v.$("pageCount").textContent).toBe(String(PAGES));
	});

	// 這三個以前都是「資料回來才長出來」，也就是 header 會跳的原因。伺服器送出的
	// HTML 本身就要是最終狀態，不能等前端 fetch 回來才解開 hidden。
	it("版本徽章與 TOC 按鈕在伺服器送出的 HTML 裡就是最終狀態", () => {
		expect(v.html).toContain('id="tver" title="July 15, 2026">v5.2026<');
		expect(v.html).toContain('id="tocBtn" title="目錄（Discussion）">');
		expect(v.$("tver").hidden).toBe(false);
		expect(v.$("tver").textContent).toBe("v5.2026");
	});

	// 反過來：TOC 真的是空的（stub 的 /api/toc 回 []）時，按鈕要自己收回去——
	// 寧可少一顆，也不要點下去是空的。
	it("TOC 抓回來是空的時候，按鈕會自己收起來", async () => {
		await tick();
		expect(v.$("tocBtn").hidden).toBe(true);
	});

	it("第一頁鋪的是帶版本號的縮圖，而且已經是最終寬度", () => {
		const p1 = v.pageEls()[0];
		expect(p1.classList.contains("lqip")).toBe(true);
		expect(p1.style.backgroundImage).toContain("/thumb/aml?v=5.2026");
		expect(parseFloat(p1.style.width)).toBeGreaterThan(0);
	});

	it("骨架階段一次 getPage 都不會呼叫", () => {
		expect(v.getPageCalls).toHaveLength(0);
	});
});

describe("viewer 的按需取頁", () => {
	let v;
	beforeAll(async () => { v = await boot(); await v.loadPdf(); });

	// 這是「變快」的核心。舊版在第一次繪製前把 getPage(1..213) 全部序列跑完，
	// 而 PDF 走的是 HTTP Range——那等於幾百次往返之後才看得到第一頁。
	it("PDF 就緒後只抓看得到的那幾頁，不是全部 213 頁", () => {
		expect(v.getPageCalls.length).toBeGreaterThan(0);
		expect(v.getPageCalls.length).toBeLessThan(10);
	});

	it("捲到某一頁才抓那一頁", async () => {
		const io = v.observers.find((o) => [...o.els].some((e) => e.classList?.contains("page")));
		const before = v.getPageCalls.length;
		io.fire([v.pageEls()[49]]);
		await tick();
		expect(v.getPageCalls).toContain(50);
		expect(v.getPageCalls).toHaveLength(before + 1);
	});

	it("第一頁畫好之後就撤掉低解析度預覽", () => {
		expect(v.pageEls()[0].classList.contains("lqip")).toBe(false);
	});

	it("骨架的頁數對得上時不會重建，版面不會再跳一次", () => {
		expect(v.pageEls()).toHaveLength(PAGES);
	});
});

describe("viewer 在沒有 metadata 時", () => {
	it("退回舊行為：不建骨架，等 PDF 解析完才有版面", async () => {
		const bare = {
			PDFS: { async get() { return null; }, async head() { return null; } },
		};
		const html = await renderViewer(bare, "aml");
		expect(html).toContain('<span id="pageCount">–</span>');
		expect(html).toContain('id="tver" hidden');
		expect(html).toContain('id="tocBtn" title="目錄（Discussion）" hidden');
		expect(html).toContain("var PAGES=null;");
	});
});

describe("clean.json 的頁數落後於實際 PDF 時", () => {
	it("以 PDF 為準重建骨架", async () => {
		const v2 = await boot();
		expect(v2.pageEls()).toHaveLength(PAGES);
		await v2.loadPdf(300);
		expect(v2.pageEls()).toHaveLength(300);
		expect(v2.$("pageCount").textContent).toBe("300");
	});
});
