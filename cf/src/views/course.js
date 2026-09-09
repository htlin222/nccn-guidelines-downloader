// 「核心課程」頁：以 subtype × 治療線切分的學習模組（第四個 tab）。
//
// 跟前三頁分開，因為問題不同。首頁問「我要哪一份 PDF」，臨床筆記問「病人在我面前，
// 現在要核對什麼」，這一頁問「這個病該怎麼想——而且我等一下要講給別人聽」。前三個
// 是查詢，這一個是學習與輸出。
//
// 版面是 Starlight 那種三欄文檔：左邊課程樹、中間本文、右邊 on-this-page。樣式跟
// notes.js 一樣是重抄一份而不是抽共用檔——兩頁都是單一 template literal、沒有建置
// 步驟，抽出來的東西得用字串拼接組回去，那比重複更難讀也更容易壞。共用的只有 :root
// 的顏色變數值與 .tabs 那一列，改的時候三個檔要一起改。
//
// 圖是白底的，深色模式下不跟著反白：網頁上看到的那張圖，就是匯出成 PNG 貼進投影片
// 的那一張。所見即所得比深色模式好看重要。

import { COURSES, COURSE_TREE, FIGURES, FIGURE_CSS } from "../data/courses.js";
import { GUIDELINES } from "../data/guidelines.js";
import { ALGORITHMS } from "../data/algorithms.js";
import { NAME_BY_ID, SOURCE_BY_ID, FILE_BY_ID } from "../data/catalog.js";
import { citeText, copyText, showToast, TOAST_CSS } from "../lib/cite.js";

const CAP_SVG =
	'<svg viewBox="0 0 24 24" aria-hidden="true">' +
	'<path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>' +
	'<path d="M2 10l10-5 10 5-10 5z"/></svg>';

const NOTEBOOK_SVG =
	'<svg viewBox="0 0 24 24" aria-hidden="true">' +
	'<path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"/>' +
	'<path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/>' +
	'<path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87' +
	'a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/></svg>';

const CSS = `
  :root{
    --background:0 0% 100%; --foreground:240 10% 3.9%;
    --card:0 0% 100%; --muted:240 4.8% 95.9%; --muted-foreground:240 3.8% 46.1%;
    --border:240 5.9% 90%; --primary:240 5.9% 10%; --primary-foreground:0 0% 98%;
    --accent:240 4.8% 95.9%; --radius:.6rem;
    /* 品牌色。跟圖裡的 #3d6869 是同一個色，圖與頁面才像一套東西。 */
    --brand:181 27% 32%; --brand-wash:181 27% 32%;
  }
  :root[data-theme="dark"]{
    --background:240 10% 3.9%; --foreground:0 0% 98%;
    --card:240 8% 7%; --muted:240 3.7% 15.9%; --muted-foreground:240 5% 64.9%;
    --border:240 3.7% 16%; --primary:0 0% 98%; --primary-foreground:240 5.9% 10%;
    --accent:240 3.7% 15.9%; --brand:181 30% 55%;
  }
  @media (prefers-color-scheme:dark){ :root:not([data-theme="light"]){
    --background:240 10% 3.9%; --foreground:0 0% 98%;
    --card:240 8% 7%; --muted:240 3.7% 15.9%; --muted-foreground:240 5% 64.9%;
    --border:240 3.7% 16%; --primary:0 0% 98%; --primary-foreground:240 5.9% 10%;
    --accent:240 3.7% 15.9%; --brand:181 30% 55%;
  }}
  *{box-sizing:border-box;}
  html,body{height:100%;}
  body{margin:0;background:hsl(var(--background));color:hsl(var(--foreground));
    font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","PingFang TC","Microsoft JhengHei",sans-serif;
    -webkit-font-smoothing:antialiased;display:flex;flex-direction:column;overflow:hidden;}
  svg{width:1em;height:1em;stroke:currentColor;stroke-width:2;fill:none;stroke-linecap:round;stroke-linejoin:round;}
  a{color:inherit;}
  header{flex:none;z-index:20;background:hsl(var(--background));border-bottom:1px solid hsl(var(--border));}
  .wrap{max-width:1400px;margin:0 auto;padding:0 20px;}
  .htop{display:flex;align-items:center;gap:14px;padding:14px 0 12px;}
  .brand{display:flex;align-items:center;gap:10px;font-weight:700;font-size:1.12rem;}
  .brand small{display:block;font-weight:400;font-size:.72rem;color:hsl(var(--muted-foreground));}
  .spacer{flex:1;}
  .who{font-size:.74rem;color:hsl(var(--muted-foreground));}
  .tabs{display:flex;gap:2px;border-bottom:1px solid hsl(var(--border));margin-bottom:0;}
  .tabs a{position:relative;display:inline-flex;align-items:center;gap:6px;
    padding:9px 14px;font-size:.85rem;font-weight:600;text-decoration:none;
    color:hsl(var(--muted-foreground));border-bottom:2px solid transparent;margin-bottom:-1px;}
  .tabs a:hover{color:hsl(var(--foreground));}
  .tabs a.act{color:hsl(var(--foreground));border-bottom-color:hsl(var(--brand));}
  .tabs a b{font-weight:600;font-size:.72rem;padding:1px 6px;border-radius:99px;
    background:hsl(var(--muted));color:hsl(var(--muted-foreground));}
  .tabs .ni{display:inline-flex;font-size:.95rem;}

  /* 三欄。整頁不捲，捲軸落在三欄各自身上——課程樹跟 on-this-page 要一直在視野裡，
     那是這一頁的導覽方式。 */
  .cols{flex:1;display:grid;grid-template-columns:250px minmax(0,1fr) 210px;
    gap:0;max-width:1400px;width:100%;margin:0 auto;overflow:hidden;}
  .side{overflow-y:auto;padding:20px 16px 60px 20px;border-right:1px solid hsl(var(--border));}
  .main{overflow-y:auto;padding:26px 40px 90px;scroll-behavior:smooth;}
  .toc{overflow-y:auto;padding:26px 20px 60px 14px;border-left:1px solid hsl(var(--border));}
  @media (max-width:1100px){
    .cols{grid-template-columns:220px minmax(0,1fr);}
    .toc{display:none;}
  }
  @media (max-width:760px){
    .cols{grid-template-columns:1fr;}
    .side{display:none;}
    .main{padding:20px 18px 80px;}
  }

  /* 左：課程樹 */
  .sgroup{margin-bottom:18px;}
  .sgroup>h4{margin:0 0 6px;font-size:.7rem;font-weight:700;letter-spacing:.08em;
    text-transform:uppercase;color:hsl(var(--muted-foreground));}
  .sgroup a{display:block;padding:6px 10px;margin-left:-10px;border-radius:6px;
    font-size:.83rem;line-height:1.4;text-decoration:none;color:hsl(var(--muted-foreground));}
  .sgroup a:hover{background:hsl(var(--muted));color:hsl(var(--foreground));}
  .sgroup a.act{background:hsl(var(--brand)/.12);color:hsl(var(--brand));font-weight:650;}
  .sgroup a i{font-style:normal;opacity:.5;margin-right:6px;font-variant-numeric:tabular-nums;}

  /* 右：on-this-page */
  .toc h4{margin:0 0 8px;font-size:.7rem;font-weight:700;letter-spacing:.08em;
    text-transform:uppercase;color:hsl(var(--muted-foreground));}
  .toc a{display:block;padding:4px 0 4px 10px;font-size:.78rem;line-height:1.45;
    text-decoration:none;color:hsl(var(--muted-foreground));
    border-left:2px solid hsl(var(--border));}
  .toc a:hover{color:hsl(var(--foreground));}
  .toc a.act{color:hsl(var(--brand));border-left-color:hsl(var(--brand));font-weight:650;}

  /* 中：本文 */
  .mhead{margin-bottom:22px;}
  .mkick{font-size:.72rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;
    color:hsl(var(--brand));}
  .mhead h1{margin:6px 0 8px;font-size:1.72rem;line-height:1.25;letter-spacing:-.01em;}
  .mone{margin:0;font-size:.98rem;color:hsl(var(--muted-foreground));line-height:1.6;}
  .sect{margin:34px 0 0;scroll-margin-top:14px;}
  .sect>h2{margin:0 0 12px;font-size:1.18rem;letter-spacing:-.005em;
    padding-bottom:7px;border-bottom:1px solid hsl(var(--border));}
  .main p{line-height:1.78;margin:0 0 12px;font-size:.95rem;}
  .main h3{margin:22px 0 8px;font-size:1rem;}
  .main h4{margin:16px 0 6px;font-size:.9rem;color:hsl(var(--muted-foreground));}
  .main ul.cl{margin:0 0 12px;padding-left:20px;}
  .main ul.cl ul{margin:4px 0;padding-left:20px;}
  .main li{line-height:1.72;margin-bottom:5px;font-size:.94rem;}
  .main blockquote{margin:0 0 14px;padding:10px 14px;border-left:3px solid hsl(var(--brand)/.5);
    background:hsl(var(--muted));border-radius:0 6px 6px 0;font-size:.9rem;
    color:hsl(var(--muted-foreground));line-height:1.65;}
  .main code{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:.86em;
    background:hsl(var(--muted));padding:1px 5px;border-radius:4px;}
  .main hr.sep{border:0;border-top:1px solid hsl(var(--border));margin:24px 0;}
  .tblwrap{overflow-x:auto;margin:0 0 16px;}
  .main table{border-collapse:collapse;width:100%;font-size:.86rem;}
  .main th,.main td{border:1px solid hsl(var(--border));padding:8px 10px;
    text-align:left;vertical-align:top;line-height:1.6;}
  .main th{background:hsl(var(--muted));font-weight:650;white-space:nowrap;}
  .muted{color:hsl(var(--muted-foreground));font-size:.84rem;}

  /* ref 標記與連結 */
  .refc{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:.8em;
    padding:1px 5px;border-radius:4px;background:hsl(var(--brand)/.12);color:hsl(var(--brand));
    white-space:nowrap;}
  a.refl{text-decoration:none;}
  a.refl:hover .refc{background:hsl(var(--brand)/.22);}
  .refc.bad{background:hsl(0 70% 50%/.14);color:hsl(0 70% 45%);text-decoration:line-through;}

  /* 遮罩自我測驗 */
  mark.cz{background:hsl(var(--brand)/.16);color:transparent;border-radius:4px;padding:0 4px;
    cursor:pointer;user-select:none;text-shadow:none;transition:color .12s;}
  mark.cz *{color:transparent;}
  mark.cz.on,mark.cz.on *{color:hsl(var(--foreground));}
  mark.cz.on{background:hsl(var(--brand)/.16);cursor:default;}
  mark.cz:focus-visible{outline:2px solid hsl(var(--brand));}

  /* 勾選 */
  li.ck{list-style:none;margin-left:-20px;}
  li.ck label{display:flex;gap:9px;align-items:flex-start;cursor:pointer;}
  li.ck input{margin-top:6px;flex:none;width:15px;height:15px;accent-color:hsl(var(--brand));}
  li.ck input:checked + span{color:hsl(var(--muted-foreground));text-decoration:line-through;}

  /* 圖 */
  figure.figblk{margin:0 0 18px;}
  figure.figblk figcaption{display:flex;align-items:center;gap:10px;flex-wrap:wrap;
    margin-top:8px;font-size:.78rem;color:hsl(var(--muted-foreground));}
  .figt{flex:1;min-width:200px;}
  .figcite,.figdl{font:inherit;font-size:.74rem;font-weight:600;padding:4px 9px;border-radius:6px;
    border:1px solid hsl(var(--border));background:hsl(var(--card));color:hsl(var(--muted-foreground));
    cursor:pointer;text-decoration:none;white-space:nowrap;}
  .figcite:hover,.figdl:hover{border-color:hsl(var(--brand));color:hsl(var(--brand));}
  .figmiss{padding:14px;border:1px dashed hsl(0 70% 50%/.5);border-radius:8px;
    color:hsl(0 70% 45%);font-size:.85rem;margin-bottom:16px;}

  /* 課程首頁的卡片 */
  .cards{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:12px;}
  .card{display:block;padding:14px 16px;border:1px solid hsl(var(--border));border-radius:10px;
    text-decoration:none;background:hsl(var(--card));}
  .card:hover{border-color:hsl(var(--brand));}
  .card .cno{font-size:.7rem;font-weight:700;color:hsl(var(--brand));letter-spacing:.06em;}
  .card h3{margin:4px 0 6px;font-size:1rem;}
  .card p{margin:0;font-size:.82rem;line-height:1.6;color:hsl(var(--muted-foreground));}

  /* 圖庫 */
  .fbar{display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin-bottom:16px;}
  .fbar input{flex:1;min-width:220px;padding:8px 12px;font:inherit;font-size:.9rem;
    border:1px solid hsl(var(--border));border-radius:8px;
    background:hsl(var(--card));color:hsl(var(--foreground));}
  .fbar input:focus{outline:none;border-color:hsl(var(--brand));}
  .chip{padding:5px 11px;font-size:.78rem;font-weight:600;border-radius:99px;cursor:pointer;
    border:1px solid hsl(var(--border));background:hsl(var(--card));
    color:hsl(var(--muted-foreground));}
  .chip.on{border-color:hsl(var(--brand));background:hsl(var(--brand)/.12);color:hsl(var(--brand));}
  .fgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(400px,1fr));gap:18px;}
  .fcard{border:1px solid hsl(var(--border));border-radius:10px;overflow:hidden;
    background:hsl(var(--card));}
  .fcard .figwrap{border:0;border-radius:0;border-bottom:1px solid hsl(var(--border));}
  .fmeta{padding:10px 12px;display:flex;gap:8px;align-items:center;flex-wrap:wrap;}
  .fmeta .ft{flex:1;min-width:160px;font-size:.82rem;font-weight:600;line-height:1.4;}
  .fmeta .fk{font-size:.68rem;font-weight:700;letter-spacing:.05em;text-transform:uppercase;
    color:hsl(var(--brand));}
  .fmeta .fsrc{width:100%;font-size:.72rem;color:hsl(var(--muted-foreground));}
  .fnone{padding:40px;text-align:center;color:hsl(var(--muted-foreground));font-size:.9rem;}
${TOAST_CSS}

  /* 圖的樣式就是 courses/figures/figure.css 本人，編譯期原樣帶進來。圖在深色模式
     下維持白底，所以這一段不需要任何主題覆寫——它刻意獨立於上面那組變數之外。 */
${FIGURE_CSS}`;

function shell(title, user, bodyHtml, script) {
	const nccnN = GUIDELINES.length;
	const mdaN = ALGORITHMS.length;
	return `<!doctype html>
<html lang="zh-Hant"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>${title} · 核心課程</title>
<link rel="icon" href="/favicon.svg">
<meta name="theme-color" content="#0b0f19">
<script>(function(){try{var t=localStorage.getItem('theme');if(t)document.documentElement.dataset.theme=t;}catch(e){}})();</script>
<style>${CSS}</style>
</head><body>
<header>
  <div class="wrap">
    <div class="htop">
      <div class="brand">${CAP_SVG}<span>核心課程<small>NCCN 拆成能講給別人聽的模組</small></span></div>
      <div class="spacer"></div>
      <div class="who">${user ? user : ""}</div>
    </div>
    <div class="tabs">
      <a href="/?src=nccn">NCCN<b>${nccnN}</b></a>
      <a href="/?src=mda">MD Anderson<b>${mdaN}</b></a>
      <a href="/notes"><span class="ni">${NOTEBOOK_SVG}</span>臨床筆記</a>
      <a href="/course" class="act"><span class="ni">${CAP_SVG}</span>核心課程<b>${COURSES.length}</b></a>
      <a href="/figures">圖庫<b>${Object.keys(FIGURES).length}</b></a>
    </div>
  </div>
</header>
${bodyHtml}
<script>${script}</script>
</body></html>`;
}

function sidebar(activeId) {
	return COURSE_TREE.map(
		(g) =>
			`<div class="sgroup"><h4>${g.name}</h4>` +
			g.items
				.map(
					(m) =>
						`<a href="/course/${m.id}"${m.id === activeId ? ' class="act"' : ""}>` +
						`<i>${String(m.order).padStart(2, "0")}</i>${m.title}</a>`,
				)
				.join("") +
			`</div>`,
	).join("");
}

// 課程首頁：學習路徑。只有一個 track 時 /course 直接顯示它，不多一層選單。
export function renderCourseIndex(request) {
	const user = request.headers.get("cf-access-authenticated-user-email") || "";
	const body = `<div class="cols">
  <nav class="side">${sidebar(null)}</nav>
  <main class="main">
    <div class="mhead">
      <div class="mkick">學習路徑</div>
      <h1>乳癌</h1>
      <p class="mone">把 NCCN Invasive Breast Cancer 拆成 ${COURSES.length} 堂課。每一堂固定九段：
      這一課回答什麼 → 治療地景 → 決策路徑 → 關鍵試驗 → 必背數字 → 記憶法 → 門診核對 → 常見陷阱 → 原文對照。
      骨架固定，所以複習的時候知道去哪一段找。</p>
    </div>
    ${COURSE_TREE.map(
			(g) =>
				`<div class="sect"><h2>${g.name}</h2><div class="cards">` +
				g.items
					.map(
						(m) =>
							`<a class="card" href="/course/${m.id}">` +
							`<div class="cno">${String(m.order).padStart(2, "0")}</div>` +
							`<h3>${m.title}</h3><p>${m.oneline}</p></a>`,
					)
					.join("") +
				`</div></div>`,
		).join("")}
  </main>
  <nav class="toc"></nav>
</div>`;
	return shell("乳癌", user, body, "");
}

// 圖庫。跟課程頁分開的入口，因為進場目的不同：課程是「我要學」，圖庫是「我下週要
// 演講，需要一張講 CDK4/6 的圖」。所以這裡不照課程順序排，用檢索。
export function renderFigures(request) {
	const user = request.headers.get("cf-access-authenticated-user-email") || "";
	// 一張圖出自哪一課——備講時要知道去哪裡看它的完整脈絡。
	const courseOf = {};
	for (const c of COURSES)
		for (const f of c.figures || []) (courseOf[f] ||= []).push(c);

	const ids = Object.keys(FIGURES).sort();
	const kinds = [
		...new Set(ids.map((i) => FIGURES[i].kind).filter(Boolean)),
	].sort();

	const cards = ids
		.map((id) => {
			const f = FIGURES[id];
			const cs = courseOf[id] || [];
			const hay = [
				id,
				f.title,
				f.kind,
				...(f.tags || []),
				...cs.map((c) => c.title),
			]
				.join(" ")
				.toLowerCase();
			return (
				`<div class="fcard" data-hay="${hay.replace(/"/g, "")}" data-kind="${f.kind || ""}">` +
				`<div class="figwrap">${f.html}</div>` +
				`<div class="fmeta"><span class="fk">${f.kind || "figure"}</span>` +
				`<span class="ft">${f.title}</span>` +
				`<button class="figcite" data-fig="${id}" type="button">複製引用</button>` +
				`<a class="figdl" href="/figures/${encodeURIComponent(id)}.png" download>下載 PNG</a>` +
				(cs.length
					? `<div class="fsrc">出自　${cs
							.map((c) => `<a href="/course/${c.id}">${c.title}</a>`)
							.join("、")}</div>`
					: `<div class="fsrc">尚未被任何一課引用</div>`) +
				`</div></div>`
			);
		})
		.join("");

	const body = `<div class="cols">
  <nav class="side">${sidebar(null)}</nav>
  <main class="main">
    <div class="mhead">
      <div class="mkick">圖庫</div>
      <h1>簡報素材</h1>
      <p class="mone">${ids.length} 張，全部 1600×800（2:1）白底雙色，下載得到 3200×1600 的 PNG。
      2:1 是因為 16:9 的投影片上面要留標題、下面要留引用，中間剩下的就是這個比例——貼進去不用裁。</p>
    </div>
    <div class="fbar">
      <input id="fq" type="search" placeholder="搜尋圖名、癌別、藥物、課程　·　例如 HER2、landscape、內分泌" autocomplete="off">
      <button class="chip on" data-k="">全部</button>
      ${kinds.map((k) => `<button class="chip" data-k="${k}">${k}</button>`).join("")}
    </div>
    <div class="fgrid" id="fgrid">${cards}</div>
    <div class="fnone" id="fnone" hidden>沒有符合的圖</div>
  </main>
  <nav class="toc"></nav>
</div>`;

	// 引用用的是圖所依據的那份指引。取第一門引用它的課的版本號——同一張圖不會同時
	// 屬於兩個版本的指引。
	const figCite = {};
	for (const id of ids) {
		const c = (courseOf[id] || [])[0];
		const gid = c ? c.nccn.gid : "breast";
		figCite[id] = {
			name: NAME_BY_ID[gid] || gid,
			id: gid,
			version: c ? c.nccn.version : "",
			src: SOURCE_BY_ID[gid] || "nccn",
			file: FILE_BY_ID[gid] || "",
		};
	}

	const script = `
${citeText.toString()}
${copyText.toString()}
${showToast.toString()}
var FIGCITE=${JSON.stringify(figCite)};
var q=document.getElementById('fq'),grid=document.getElementById('fgrid'),none=document.getElementById('fnone');
var kind='';
function filt(){
  var t=(q.value||'').trim().toLowerCase(),n=0;
  grid.querySelectorAll('.fcard').forEach(function(c){
    var ok=(!t||c.dataset.hay.indexOf(t)>=0)&&(!kind||c.dataset.kind===kind);
    c.hidden=!ok; if(ok)n++;
  });
  none.hidden=n>0;
}
q.addEventListener('input',filt);
document.querySelectorAll('.chip').forEach(function(b){
  b.addEventListener('click',function(){
    document.querySelectorAll('.chip').forEach(function(x){x.classList.remove('on');});
    b.classList.add('on'); kind=b.dataset.k; filt();
  });
});
document.addEventListener('click',function(e){
  var b=e.target.closest('.figcite'); if(!b)return;
  var g=FIGCITE[b.dataset.fig]; if(!g)return;
  var t=citeText(g);
  copyText(t).then(function(ok){showToast(ok?'引用已複製':'複製失敗',t);});
});
`;
	return shell("圖庫", user, body, script);
}

export function renderCourseModule(request, id) {
	const m = COURSES.find((c) => c.id === id);
	if (!m) return null;
	const user = request.headers.get("cf-access-authenticated-user-email") || "";
	const gid = m.nccn.gid;

	const body = `<div class="cols">
  <nav class="side">${sidebar(m.id)}</nav>
  <main class="main" id="main">
    <div class="mhead">
      <div class="mkick">${m.group}　·　第 ${String(m.order).padStart(2, "0")} 課</div>
      <h1>${m.title}</h1>
      <p class="mone">${m.oneline}</p>
    </div>
    ${m.sections
			.map(
				(s) =>
					`<section class="sect" id="${s.id}"><h2>${s.name}</h2>${s.html}</section>`,
			)
			.join("")}
  </main>
  <nav class="toc">
    <h4>這一課</h4>
    ${m.sections.map((s) => `<a href="#${s.id}" data-t="${s.id}">${s.name}</a>`).join("")}
  </nav>
</div>`;

	// citeText 需要指引的名字、版本與 id；圖的引用就是它所依據的那份指引的引用。
	const figCite = {};
	for (const fid of m.figures || []) {
		const f = FIGURES[fid];
		if (!f) continue;
		figCite[fid] = {
			name: NAME_BY_ID[gid] || gid,
			id: gid,
			version: m.nccn.version,
			src: SOURCE_BY_ID[gid] || "nccn",
			file: FILE_BY_ID[gid] || "",
		};
	}

	const script = `
${citeText.toString()}
${copyText.toString()}
${showToast.toString()}
var FIGCITE=${JSON.stringify(figCite)};
var MOD=${JSON.stringify(m.id)};

// 遮罩。開過的記在 localStorage，重新整理不必再點一次——複習時想重新蓋回去的話
// 有下面那顆「全部蓋回去」。key 用段落 id 而不是文字內容：內容改了之後，舊的
// 記錄應該失效，而不是套用到一段已經不一樣的文字上。
function czKey(el){var s=el.closest('.sect');return 'course:cz:'+MOD+':'+(s?s.id:'')+':'+el.textContent.slice(0,24);}
function czRestore(){
  document.querySelectorAll('mark.cz').forEach(function(el){
    try{ if(localStorage.getItem(czKey(el)))el.classList.add('on'); }catch(e){}
  });
}
document.addEventListener('click',function(e){
  var cz=e.target.closest('mark.cz');
  if(cz&&!cz.classList.contains('on')){
    cz.classList.add('on');
    try{localStorage.setItem(czKey(cz),'1');}catch(err){}
    return;
  }
  var b=e.target.closest('.figcite');
  if(b){
    var g=FIGCITE[b.dataset.fig];
    if(!g)return;
    var t=citeText(g);
    copyText(t).then(function(ok){showToast(ok?'引用已複製':'複製失敗',t);});
  }
});
document.addEventListener('keydown',function(e){
  if((e.key==='Enter'||e.key===' ')&&e.target.classList&&e.target.classList.contains('cz')){
    e.preventDefault();e.target.click();
  }
});

// 勾選狀態。門診核對那一段用，key 是編譯期給的 <module>:<n>。
document.querySelectorAll('input[data-ck]').forEach(function(el){
  var k='course:ck:'+el.dataset.ck;
  try{ el.checked=localStorage.getItem(k)==='1'; }catch(e){}
  el.addEventListener('change',function(){
    try{ localStorage.setItem(k,el.checked?'1':'0'); }catch(e){}
  });
});

// on-this-page 高亮。用捲動位置而不是 IntersectionObserver：段落很長時，
// observer 會在一段還佔滿螢幕時就把高亮交給下一段。
var secs=[].slice.call(document.querySelectorAll('.sect'));
var links={};
document.querySelectorAll('.toc a').forEach(function(a){links[a.dataset.t]=a;});
var main=document.getElementById('main');
function sync(){
  var top=main.scrollTop+90,cur=secs[0];
  for(var i=0;i<secs.length;i++){ if(secs[i].offsetTop<=top)cur=secs[i]; }
  for(var k in links)links[k].classList.toggle('act',cur&&k===cur.id);
}
if(main){main.addEventListener('scroll',sync,{passive:true});sync();}
document.querySelectorAll('.toc a').forEach(function(a){
  a.addEventListener('click',function(e){
    e.preventDefault();
    var el=document.getElementById(a.dataset.t);
    if(el&&main)main.scrollTo({top:el.offsetTop-8,behavior:'smooth'});
    history.replaceState(null,'','#'+a.dataset.t);
  });
});
czRestore();
`;
	return shell(m.title, user, body, script);
}
