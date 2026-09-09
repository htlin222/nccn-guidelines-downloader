// 核心課程的解析與渲染。純函式，`gen_courses.sh` 在編譯期用 node 跑它，產物是
// `src/data/courses.js` 裡的 HTML 字串——Worker 端不需要這個檔，也不需要任何
// markdown parser。
//
// 為什麼自己寫一個 markdown 子集而不是裝 markdown-it：我們只用到 h3、清單、表格、
// 引言、粗體斜體行內碼，加上四個自訂語法（[[ref]]、==遮罩==、![[fig:id]]、- [ ]）。
// 那四個才是重點，而它們在任何現成的 parser 裡都要寫 plugin。與其裝一個函式庫再寫
// 四個 plugin，不如寫一個看得懂的 200 行——而且它是純函式，測試能釘住每一條規則。
//
// 內容是 repo 裡自己寫的 md，不是使用者輸入，所以原始 HTML 直接放行（課程裡會用
// <b> 標記口訣的首字母）。裸露的 `<` 仍會被跳脫，見 escapeStrayLt。

// 八段固定骨架。第 9 段「原文對照」不在這裡：它由 frontmatter 的 refs 生成，手寫
// 的話會慢慢跟 refs 對不上，而那種不一致沒有任何東西會報。
export const SECTIONS = [
	"這一課回答什麼",
	"治療地景",
	"決策路徑",
	"關鍵試驗",
	"必背數字",
	"記憶法",
	"門診核對",
	"常見陷阱",
];

// ---------------------------------------------------------------- frontmatter

// 只認課程 frontmatter 用得到的 TOML：字串、整數、字串陣列、單層 inline table。
// 刻意不做完整 TOML——支援得越多，md 裡就越可能出現 gen 看得懂而 verify 看不懂的
// 寫法。看不懂就報錯，比默默解析成別的東西好。
export function parseToml(src) {
	const out = {};
	for (const raw of src.split("\n")) {
		const line = raw.trim();
		if (!line || line.startsWith("#")) continue;
		const eq = line.indexOf("=");
		if (eq < 0) throw new Error("frontmatter 這一行沒有 `=`：" + line);
		const key = line.slice(0, eq).trim();
		out[key] = parseTomlValue(line.slice(eq + 1).trim(), line);
	}
	return out;
}

function parseTomlValue(v, line) {
	if (v.startsWith('"')) {
		const end = v.lastIndexOf('"');
		if (end <= 0) throw new Error("字串沒有收尾引號：" + line);
		return v.slice(1, end);
	}
	if (v.startsWith("[")) {
		const end = v.lastIndexOf("]");
		if (end < 0) throw new Error("陣列沒有收尾括號：" + line);
		const inner = v.slice(1, end).trim();
		if (!inner) return [];
		return inner.split(",").map((s) => {
			const t = s.trim();
			if (!t.startsWith('"')) throw new Error("陣列只收字串：" + line);
			return t.slice(1, t.lastIndexOf('"'));
		});
	}
	if (v.startsWith("{")) {
		const end = v.lastIndexOf("}");
		if (end < 0) throw new Error("inline table 沒有收尾括號：" + line);
		const t = {};
		for (const pair of splitTop(v.slice(1, end))) {
			const eq = pair.indexOf("=");
			if (eq < 0) continue;
			t[pair.slice(0, eq).trim()] = parseTomlValue(pair.slice(eq + 1).trim(), line);
		}
		return t;
	}
	if (/^-?\d+$/.test(v)) return parseInt(v, 10);
	throw new Error("看不懂的值：" + line);
}

// 只在最外層切逗號，這樣 inline table 裡的陣列不會被切碎。
function splitTop(s) {
	const out = [];
	let depth = 0;
	let cur = "";
	for (const ch of s) {
		if (ch === "[" || ch === "{") depth++;
		else if (ch === "]" || ch === "}") depth--;
		if (ch === "," && depth === 0) {
			out.push(cur);
			cur = "";
			continue;
		}
		cur += ch;
	}
	if (cur.trim()) out.push(cur);
	return out;
}

// `+++ … +++` 加本文。回傳 { meta, body }。
export function splitFrontmatter(text) {
	const t = text.replace(/\r\n/g, "\n");
	if (!t.startsWith("+++\n")) throw new Error("檔案開頭不是 +++");
	const end = t.indexOf("\n+++\n", 3);
	if (end < 0) throw new Error("frontmatter 沒有收尾的 +++");
	return { meta: parseToml(t.slice(4, end)), body: t.slice(end + 5) };
}

// 靠 `## 標題` 切段。回傳 Map，順序即檔案順序——驗證關要靠順序判斷段落有沒有錯位。
export function splitSections(body) {
	const out = new Map();
	let cur = null;
	let buf = [];
	const flush = () => {
		if (cur !== null) out.set(cur, buf.join("\n").trim());
	};
	for (const line of body.split("\n")) {
		const m = /^##\s+(.+?)\s*$/.exec(line);
		if (m) {
			flush();
			cur = m[1];
			buf = [];
		} else if (cur !== null) {
			buf.push(line);
		}
	}
	flush();
	return out;
}

// ------------------------------------------------------------------- 錨點

// 右欄 on-this-page 與段落 id 共用。中文不轉拼音——瀏覽器對 UTF-8 片段識別碼支援
// 得很好，而轉成拼音會讓網址跟畫面上的字對不起來，複製連結時看不出是哪一段。
export function slug(s) {
	return String(s)
		.trim()
		.replace(/[\s/]+/g, "-")
		.replace(/[^\p{L}\p{N}_-]/gu, "");
}

// ------------------------------------------------------------------- 行內

// 只跳脫「不像標籤開頭」的 `<`。課程本文會用 <b> 標口訣首字母，但也會寫
// 「腫瘤 <1 cm」——後者若不跳脫，瀏覽器會把後面整段吃成一個未知標籤，而畫面上只
// 是「有一段字不見了」，看起來像內容漏寫。
export function escapeStrayLt(s) {
	return s.replace(/<(?![a-zA-Z/!])/g, "&lt;");
}

// [[BINV-24]] → 連到 viewer 的那一頁。pageByRef 沒有這個 ref 時仍然渲染成標記，
// 只是不可點——ref 寫錯了要看得出來，靜靜地變成純文字會讓錯字永遠留在頁面上。
function refAnchor(ref, ctx) {
	const page = ctx.pageByRef && ctx.pageByRef[ref];
	const label = `<span class="refc">${ref}</span>`;
	if (!page) return `<span class="refc bad" title="這個 ref 不在素材裡">${ref}</span>`;
	return `<a class="refl" href="/preview/${encodeURIComponent(ctx.gid)}?page=${page}" title="${ref}・第 ${page} 頁">${label}</a>`;
}

export function renderInline(s, ctx) {
	let t = escapeStrayLt(s);
	t = t.replace(/`([^`]+)`/g, (_, c) => `<code>${c}</code>`);
	// 遮罩要在粗體之前處理：==**x**== 這種寫法要讓 mark 包住整段。
	t = t.replace(/==([^=]+)==/g, (_, c) => `<mark class="cz" tabindex="0">${c}</mark>`);
	t = t.replace(/\*\*([^*]+)\*\*/g, (_, c) => `<b>${c}</b>`);
	t = t.replace(/(^|[^*])\*([^*]+)\*/g, (_, p, c) => `${p}<i>${c}</i>`);
	t = t.replace(/\[\[([A-Z][A-Z0-9]*-[0-9A-Z]+)\]\]/g, (_, r) => refAnchor(r, ctx));
	t = t.replace(/\[([^\]]+)\]\((https?:[^)]+)\)/g, (_, a, h) => `<a href="${h}" rel="noopener">${a}</a>`);
	return t;
}

// ------------------------------------------------------------------- 區塊

// 一張圖在文章裡：白底卡片 + 標題 + AMA 引用列。引用文字由 view 端用 lib/cite.js
// 算，這裡只留 data 屬性——citeText() 需要當天日期，而編譯期算出來的日期會被凍在
// 產物裡，過幾週就是錯的。
function figureBlock(id, ctx) {
	const fig = ctx.figures && ctx.figures[id];
	if (!fig) return `<div class="figmiss">找不到圖：${id}</div>`;
	return (
		`<figure class="figblk" id="fig-${slug(id)}">` +
		`<div class="figwrap">${fig.html}</div>` +
		`<figcaption><span class="figt">${fig.title}</span>` +
		`<button class="figcite" data-fig="${id}" type="button">複製引用</button>` +
		`<a class="figdl" href="/figures/${encodeURIComponent(id)}.png" download>下載 PNG</a>` +
		`</figcaption></figure>`
	);
}

function tableBlock(rows, ctx) {
	// 第二行是 |---|---| 分隔列時，第一行是表頭。
	const cells = (line) =>
		line
			.replace(/^\||\|$/g, "")
			.split("|")
			.map((c) => c.trim());
	const isSep = (line) => /^\|?[\s:|-]+\|[\s:|-]*$/.test(line) && line.includes("-");
	let head = null;
	let body = rows;
	if (rows.length > 1 && isSep(rows[1])) {
		head = cells(rows[0]);
		body = rows.slice(2);
	}
	const th = head
		? `<thead><tr>${head.map((c) => `<th>${renderInline(c, ctx)}</th>`).join("")}</tr></thead>`
		: "";
	const td = body
		.map((r) => `<tr>${cells(r).map((c) => `<td>${renderInline(c, ctx)}</td>`).join("")}</tr>`)
		.join("");
	return `<div class="tblwrap"><table>${th}<tbody>${td}</tbody></table></div>`;
}

// 清單。兩層縮排就夠——第三層在課程本文裡讀起來已經像大綱而不像文章，寧可拆段。
function listBlock(lines, ctx, ckPrefix) {
	let out = "";
	let depth = 0;
	let n = 0;
	for (const line of lines) {
		const m = /^(\s*)([-*]|\d+\.)\s+(.*)$/.exec(line);
		if (!m) continue;
		const want = m[1].length >= 4 ? 1 : 0;
		while (depth < want) {
			out += "<ul>";
			depth++;
		}
		while (depth > want) {
			out += "</ul>";
			depth--;
		}
		let text = m[3];
		const ck = /^\[([ xX])\]\s*(.*)$/.exec(text);
		if (ck && ckPrefix) {
			const id = `${ckPrefix}:${n++}`;
			out += `<li class="ck"><label><input type="checkbox" data-ck="${id}">`;
			out += `<span>${renderInline(ck[2], ctx)}</span></label></li>`;
		} else {
			out += `<li>${renderInline(text, ctx)}</li>`;
		}
	}
	while (depth > 0) {
		out += "</ul>";
		depth--;
	}
	return `<ul class="cl">${out}</ul>`;
}

// 一段 markdown → HTML。ckPrefix 有值時，`- [ ]` 會編譯成可勾選項目。
export function renderBlocks(md, ctx, ckPrefix) {
	const lines = md.split("\n");
	const out = [];
	let i = 0;
	const isList = (l) => /^(\s*)([-*]|\d+\.)\s+/.test(l);
	const isTable = (l) => /^\|.*\|\s*$/.test(l);

	while (i < lines.length) {
		const line = lines[i];
		if (!line.trim()) {
			i++;
			continue;
		}
		const fig = /^!\[\[fig:([^\]]+)\]\]\s*$/.exec(line.trim());
		if (fig) {
			out.push(figureBlock(fig[1], ctx));
			i++;
			continue;
		}
		if (line.startsWith("---") && /^-{3,}\s*$/.test(line)) {
			out.push('<hr class="sep">');
			i++;
			continue;
		}
		const h = /^(#{3,4})\s+(.+?)\s*$/.exec(line);
		if (h) {
			const level = h[1].length;
			const text = h[2];
			out.push(`<h${level} id="${slug(text)}">${renderInline(text, ctx)}</h${level}>`);
			i++;
			continue;
		}
		if (line.startsWith(">")) {
			const buf = [];
			while (i < lines.length && lines[i].startsWith(">")) {
				buf.push(lines[i].replace(/^>\s?/, ""));
				i++;
			}
			out.push(`<blockquote>${renderInline(buf.join(" "), ctx)}</blockquote>`);
			continue;
		}
		if (isTable(line)) {
			const buf = [];
			while (i < lines.length && isTable(lines[i])) buf.push(lines[i].trim()), i++;
			out.push(tableBlock(buf, ctx));
			continue;
		}
		if (isList(line)) {
			const buf = [];
			while (i < lines.length && (isList(lines[i]) || /^\s+\S/.test(lines[i]))) buf.push(lines[i]), i++;
			out.push(listBlock(buf, ctx, ckPrefix));
			continue;
		}
		const buf = [];
		while (i < lines.length && lines[i].trim() && !isList(lines[i]) && !isTable(lines[i]) && !lines[i].startsWith(">") && !/^#{3,4}\s/.test(lines[i])) {
			buf.push(lines[i]);
			i++;
		}
		out.push(`<p>${renderInline(buf.join(" "), ctx)}</p>`);
	}
	return out.join("");
}

// ------------------------------------------------------------------- 模組

// 第 9 段。由 refs 生成，不手寫。
export function sourceSection(meta, ctx) {
	const rows = meta.refs.map((ref) => {
		const page = ctx.pageByRef && ctx.pageByRef[ref];
		const title = (ctx.refTitles && ctx.refTitles[ref]) || "";
		const link = page
			? `<a href="/preview/${encodeURIComponent(ctx.gid)}?page=${page}">第 ${page} 頁</a>`
			: '<span class="muted">未收錄</span>';
		return `<tr><td><span class="refc">${ref}</span></td><td>${title}</td><td>${link}</td></tr>`;
	});
	return (
		`<div class="tblwrap"><table class="srctbl">` +
		`<thead><tr><th>節點</th><th>標題</th><th>原文</th></tr></thead>` +
		`<tbody>${rows.join("")}</tbody></table></div>` +
		`<p class="muted">NCCN ${ctx.gidName || meta.nccn.gid} v${meta.nccn.version}。` +
		`頁碼對應我們快取的 PDF；點進去會直接跳到那一頁。</p>`
	);
}

const REQUIRED_META = ["id", "track", "order", "group", "title", "oneline", "refs", "nccn"];

export function parseModule(text, ctx) {
	const { meta, body } = splitFrontmatter(text);
	for (const k of REQUIRED_META) {
		if (meta[k] === undefined) throw new Error(`frontmatter 缺 ${k}`);
	}
	const found = splitSections(body);
	const missing = SECTIONS.filter((s) => !found.has(s));
	if (missing.length) throw new Error("缺這幾段：" + missing.join("、"));
	const extra = [...found.keys()].filter((s) => !SECTIONS.includes(s));
	if (extra.length) throw new Error("多了不認得的段：" + extra.join("、"));

	const c = { ...ctx, gid: meta.nccn.gid };
	const sections = SECTIONS.map((name) => ({
		name,
		id: slug(name),
		html: renderBlocks(found.get(name), c, name === "門診核對" ? meta.id : null),
	}));
	sections.push({ name: "原文對照", id: slug("原文對照"), html: sourceSection(meta, c) });
	return { meta, sections };
}

// ------------------------------------------------------------------- sidebar

// 依 group 分群、group 內依 order 排。群的順序由第一次出現的 order 決定，所以
// 群名不必另外維護一張排序表——把模組的 order 排對，群就跟著對。
export function courseTree(modules) {
	const groups = [];
	const byName = new Map();
	for (const m of [...modules].sort((a, b) => a.order - b.order)) {
		let g = byName.get(m.group);
		if (!g) {
			g = { name: m.group, items: [] };
			byName.set(m.group, g);
			groups.push(g);
		}
		g.items.push(m);
	}
	return groups;
}

// 反向索引：一個 NCCN ref 被哪幾課涵蓋。viewer 與臨床筆記靠它顯示「這一頁屬於哪
// 一課」的回連。
export function courseByRef(modules) {
	const out = {};
	for (const m of modules) {
		for (const ref of m.refs || []) {
			(out[ref] ||= []).push({ id: m.id, title: m.title });
		}
	}
	return out;
}
