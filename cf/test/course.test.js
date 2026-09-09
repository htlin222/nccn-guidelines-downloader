import { describe, it, expect } from "vitest";
import {
	SECTIONS,
	parseToml,
	splitFrontmatter,
	splitSections,
	slug,
	escapeStrayLt,
	renderInline,
	renderBlocks,
	parseModule,
	courseTree,
	courseByRef,
} from "../src/lib/course.js";

const CTX = {
	gid: "breast",
	pageByRef: { "BINV-21": 34, "BINV-24": 37, "BINV-Q": 90 },
	refTitles: { "BINV-21": "晚期系統治療的分岔點" },
	figures: {
		"breast/x": { title: "示範圖", html: '<section class="fig">FIG</section>' },
	},
};

describe("parseToml", () => {
	it("讀字串、整數、陣列與 inline table", () => {
		const t = parseToml(`
id      = "breast/mbc-her2"
order   = 10
refs    = ["BINV-21", "BINV-24"]
nccn    = { gid = "breast", version = "6.2026" }
`);
		expect(t).toEqual({
			id: "breast/mbc-her2",
			order: 10,
			refs: ["BINV-21", "BINV-24"],
			nccn: { gid: "breast", version: "6.2026" },
		});
	});

	it("空陣列", () => {
		expect(parseToml('figures = []').figures).toEqual([]);
	});

	// 看不懂就報錯，不要默默解析成別的東西——這是刻意不做完整 TOML 的代價，
	// 也是它的目的。
	it("看不懂的值要報錯，不是回 undefined", () => {
		expect(() => parseToml("x = true")).toThrow(/看不懂的值/);
		expect(() => parseToml("x")).toThrow(/沒有 `=`/);
		expect(() => parseToml('x = "abc')).toThrow(/收尾引號/);
	});

	it("跳過註解與空行", () => {
		expect(parseToml('# 註解\n\nid = "a"\n')).toEqual({ id: "a" });
	});
});

describe("splitFrontmatter", () => {
	it("切出 meta 與本文", () => {
		const { meta, body } = splitFrontmatter('+++\nid = "a"\n+++\n## 甲\n內容\n');
		expect(meta.id).toBe("a");
		expect(body).toBe("## 甲\n內容\n");
	});

	it("沒有 frontmatter 要報錯", () => {
		expect(() => splitFrontmatter("## 甲")).toThrow(/開頭不是/);
		expect(() => splitFrontmatter('+++\nid = "a"\n')).toThrow(/沒有收尾/);
	});
});

describe("splitSections", () => {
	it("靠 ## 切段並保留順序", () => {
		const s = splitSections("## 甲\na\n\n## 乙\nb\n### 不是段\nc\n");
		expect([...s.keys()]).toEqual(["甲", "乙"]);
		expect(s.get("乙")).toBe("b\n### 不是段\nc");
	});

	it("## 之前的內容不屬於任何段", () => {
		expect([...splitSections("前言\n## 甲\na").keys()]).toEqual(["甲"]);
	});
});

describe("slug", () => {
	it("保留中文，空白轉連字號", () => {
		expect(slug("這一課回答什麼")).toBe("這一課回答什麼");
		expect(slug("Treatment landscape")).toBe("Treatment-landscape");
	});
	it("去掉標點", () => {
		expect(slug("必背數字（重要）")).toBe("必背數字重要");
	});
});

describe("escapeStrayLt", () => {
	// 這一條是為了「腫瘤 <1 cm」：不跳脫的話瀏覽器會把後面整段吃成未知標籤，
	// 畫面上只是「有一段字不見了」，看起來像內容漏寫而不像渲染錯誤。
	it("跳脫不像標籤開頭的 <", () => {
		expect(escapeStrayLt("腫瘤 <1 cm")).toBe("腫瘤 &lt;1 cm");
		expect(escapeStrayLt("a < b")).toBe("a &lt; b");
	});
	it("保留真正的標籤", () => {
		expect(escapeStrayLt("<b>T</b>axane")).toBe("<b>T</b>axane");
		expect(escapeStrayLt("<!-- c -->")).toBe("<!-- c -->");
	});
});

describe("renderInline", () => {
	it("粗體、斜體、行內碼", () => {
		expect(renderInline("**粗** *斜* `碼`", CTX)).toBe("<b>粗</b> <i>斜</i> <code>碼</code>");
	});

	it("== == 變成可點的遮罩", () => {
		expect(renderInline("中位 OS ==57.1 個月==", CTX)).toContain(
			'<mark class="cz" tabindex="0">57.1 個月</mark>',
		);
	});

	it("遮罩包得住粗體", () => {
		expect(renderInline("==**28.8**==", CTX)).toBe(
			'<mark class="cz" tabindex="0"><b>28.8</b></mark>',
		);
	});

	it("[[ref]] 連到 viewer 的那一頁", () => {
		const h = renderInline("見 [[BINV-24]]", CTX);
		expect(h).toContain('href="/preview/breast?page=37"');
		expect(h).toContain("BINV-24");
	});

	// ref 寫錯了要看得出來。靜靜地變成純文字會讓錯字永遠留在頁面上。
	it("素材裡沒有的 ref 標成 bad，不是靜靜變純文字", () => {
		const h = renderInline("見 [[BINV-99]]", CTX);
		expect(h).toContain('class="refc bad"');
		expect(h).not.toContain("<a");
	});

	it("外部連結", () => {
		expect(renderInline("[X](https://a.b)", CTX)).toBe(
			'<a href="https://a.b" rel="noopener">X</a>',
		);
	});
});

describe("renderBlocks", () => {
	it("段落", () => {
		expect(renderBlocks("一行\n接續\n", CTX)).toBe("<p>一行 接續</p>");
	});

	it("h3/h4 帶錨點", () => {
		expect(renderBlocks("### 第一線", CTX)).toBe('<h3 id="第一線">第一線</h3>');
	});

	it("兩層清單", () => {
		const h = renderBlocks("- 甲\n    - 甲一\n- 乙", CTX);
		expect(h).toBe('<ul class="cl"><li>甲</li><ul><li>甲一</li></ul><li>乙</li></ul>');
	});

	it("表格分出表頭", () => {
		const h = renderBlocks("| a | b |\n|---|---|\n| 1 | 2 |", CTX);
		expect(h).toContain("<thead><tr><th>a</th><th>b</th></tr></thead>");
		expect(h).toContain("<tbody><tr><td>1</td><td>2</td></tr></tbody>");
	});

	it("引言", () => {
		expect(renderBlocks("> 注意\n> 這件事", CTX)).toBe("<blockquote>注意 這件事</blockquote>");
	});

	it("圖", () => {
		const h = renderBlocks("![[fig:breast/x]]", CTX);
		expect(h).toContain('<section class="fig">FIG</section>');
		expect(h).toContain("示範圖");
		expect(h).toContain('href="/figures/breast%2Fx.png"');
	});

	// 找不到的圖要在頁面上喊出來。課程與圖是分開兩個檔，改名時很容易只改一邊。
	it("找不到的圖要顯示出來", () => {
		expect(renderBlocks("![[fig:nope]]", CTX)).toContain("找不到圖：nope");
	});

	it("有 ckPrefix 時 - [ ] 變成可勾選", () => {
		const h = renderBlocks("- [ ] 甲\n- [ ] 乙", CTX, "breast/m");
		expect(h).toContain('data-ck="breast/m:0"');
		expect(h).toContain('data-ck="breast/m:1"');
		expect(h).toContain("<input type=\"checkbox\"");
	});

	it("沒有 ckPrefix 時 - [ ] 只是普通項目", () => {
		expect(renderBlocks("- [ ] 甲", CTX)).not.toContain("checkbox");
	});
});

const GOOD = `+++
id      = "breast/x"
track   = "breast"
order   = 10
group   = "晚期"
title   = "測試課"
oneline = "一句話"
refs    = ["BINV-21"]
nccn    = { gid = "breast", version = "6.2026" }
+++

${SECTIONS.map((s) => `## ${s}\n內容\n`).join("\n")}`;

describe("parseModule", () => {
	it("八段齊全時解析成功，並自動補上第 9 段", () => {
		const m = parseModule(GOOD, CTX);
		expect(m.meta.id).toBe("breast/x");
		expect(m.sections.map((s) => s.name)).toEqual([...SECTIONS, "原文對照"]);
	});

	// 第 9 段由 refs 生成而不是手寫，就是為了它永遠跟 refs 一致。
	it("第 9 段從 refs 生成，含 viewer 連結", () => {
		const src = parseModule(GOOD, CTX).sections.at(-1).html;
		expect(src).toContain("BINV-21");
		expect(src).toContain('href="/preview/breast?page=34"');
		expect(src).toContain("晚期系統治療的分岔點");
	});

	it("只有門診核對那一段會產生勾選框", () => {
		const md = GOOD.replace("## 門診核對\n內容", "## 門診核對\n- [ ] 甲").replace(
			"## 常見陷阱\n內容",
			"## 常見陷阱\n- [ ] 乙",
		);
		const m = parseModule(md, CTX);
		expect(m.sections.find((s) => s.name === "門診核對").html).toContain("checkbox");
		expect(m.sections.find((s) => s.name === "常見陷阱").html).not.toContain("checkbox");
	});

	it("缺一段要報出缺哪一段", () => {
		expect(() => parseModule(GOOD.replace("## 記憶法\n內容\n", ""), CTX)).toThrow(/記憶法/);
	});

	// 打錯段名比缺一段更危險：缺的會被抓到，多的若放行就會變成一段永遠不顯示的內容。
	it("多出不認得的段要報錯", () => {
		expect(() => parseModule(GOOD + "\n## 亂入\n內容\n", CTX)).toThrow(/亂入/);
	});

	it("缺 frontmatter 欄位要報錯", () => {
		expect(() => parseModule(GOOD.replace('group   = "晚期"\n', ""), CTX)).toThrow(/缺 group/);
	});
});

describe("courseTree", () => {
	const mods = [
		{ id: "c", order: 3, group: "晚期", title: "丙" },
		{ id: "a", order: 1, group: "基礎", title: "甲" },
		{ id: "b", order: 2, group: "基礎", title: "乙" },
	];

	it("依 group 分群，群內依 order", () => {
		const t = courseTree(mods);
		expect(t.map((g) => g.name)).toEqual(["基礎", "晚期"]);
		expect(t[0].items.map((m) => m.id)).toEqual(["a", "b"]);
	});

	// 群的順序由第一次出現的 order 決定，所以不必另外維護一張群排序表。
	it("群的順序跟著 order 走，不是字典序", () => {
		const t = courseTree([
			{ id: "z", order: 1, group: "晚期", title: "" },
			{ id: "a", order: 2, group: "基礎", title: "" },
		]);
		expect(t.map((g) => g.name)).toEqual(["晚期", "基礎"]);
	});

	it("不改動傳進來的陣列", () => {
		const copy = [...mods];
		courseTree(mods);
		expect(mods).toEqual(copy);
	});
});

describe("courseByRef", () => {
	it("一個 ref 可以被多課涵蓋", () => {
		const idx = courseByRef([
			{ id: "a", title: "甲", refs: ["BINV-21", "BINV-24"] },
			{ id: "b", title: "乙", refs: ["BINV-21"] },
		]);
		expect(idx["BINV-21"].map((c) => c.id)).toEqual(["a", "b"]);
		expect(idx["BINV-24"].map((c) => c.id)).toEqual(["a"]);
	});

	it("沒有 refs 的模組不會炸", () => {
		expect(courseByRef([{ id: "a", title: "甲" }])).toEqual({});
	});
});
