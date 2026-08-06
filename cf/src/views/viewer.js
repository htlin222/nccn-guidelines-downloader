import { NAME_BY_ID, VALID_IDS } from "../data/guidelines.js";
import { escapeHtml } from "../lib/http.js";
import { tocGroups, tocBestIndex } from "../lib/toc.js";
import { citeText, copyText, showToast, TOAST_CSS } from "../lib/cite.js";
import { bookmarkMd } from "../lib/marks.js";
import { annotRect, annotNextNum, annotHit, annotDraw } from "../lib/annot.js";
import { viewerMeta } from "../lib/viewermeta.js";

// 每一頁都是 792×612 pts（landscape letter）。抽查 10 份跨腫瘤／支持治療／篩檢／
// 兒童／遺傳的指引，86 份的目錄裡沒有例外——所以骨架可以照這個比例撐出來，不必
// 等 PDF 解析。萬一哪天真的出現不同尺寸的頁，needPage() 會在那一頁就地校正。
const PAGE_W = 792;
const PAGE_H = 612;

export async function renderViewer(env, id) {
	const name = NAME_BY_ID[id] || id;
	const meta = await viewerMeta(env, id);
	return `<!doctype html>
<html lang="zh-Hant">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${escapeHtml(name)} — NCCN 預覽</title>
<meta name="theme-color" content="#0b0f19">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<script>(function(){try{var t=localStorage.getItem('theme');if(t)document.documentElement.dataset.theme=t;}catch(e){}})();</script>
<style>
  :root{ --bg:0 0% 96%; --fg:240 10% 3.9%; --bar:0 0% 100%; --border:240 5.9% 90%;
    --muted:240 4.8% 95.9%; --muted-fg:240 3.8% 46.1%; --primary:240 5.9% 10%; --primary-fg:0 0% 98%; --accent:240 4.8% 92%; --ring:240 5% 65%; }
  :root[data-theme="dark"]{ --bg:240 10% 5%; --fg:0 0% 98%; --bar:240 8% 9%; --border:240 3.7% 16%;
    --muted:240 3.7% 13%; --muted-fg:240 5% 64.9%; --primary:0 0% 98%; --primary-fg:240 5.9% 10%; --accent:240 3.7% 16%; --ring:240 4.9% 45%; }
  @media (prefers-color-scheme:dark){ :root:not([data-theme="light"]){ --bg:240 10% 5%; --fg:0 0% 98%; --bar:240 8% 9%; --border:240 3.7% 16%;
    --muted:240 3.7% 13%; --muted-fg:240 5% 64.9%; --primary:0 0% 98%; --primary-fg:240 5.9% 10%; --accent:240 3.7% 16%; --ring:240 4.9% 45%; } }
  *{box-sizing:border-box;}
  html,body{height:100%;}
  body{margin:0;display:flex;flex-direction:column;background:hsl(var(--bg));color:hsl(var(--fg));
    font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","PingFang TC",sans-serif;overflow:hidden;}
  svg{width:1em;height:1em;stroke:currentColor;stroke-width:2;fill:none;stroke-linecap:round;stroke-linejoin:round;}
  .tb{display:flex;align-items:center;gap:6px;padding:8px 12px;background:hsl(var(--bar)/.9);
    backdrop-filter:saturate(180%) blur(12px);border-bottom:1px solid hsl(var(--border));flex-wrap:wrap;z-index:10;}
  .tb .title{font-size:.88rem;font-weight:650;flex:1;min-width:70px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;letter-spacing:-.01em;cursor:copy;}
  .tb .title:hover{text-decoration:underline dotted;text-underline-offset:3px;}
  .tver{flex-shrink:0;font-size:.68rem;font-weight:700;padding:2px 7px;border-radius:999px;background:hsl(var(--accent));color:hsl(var(--muted-fg));letter-spacing:.02em;cursor:copy;}
  .tver[hidden]{display:none;}
  .btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;font:inherit;text-decoration:none;
    border:1px solid hsl(var(--border));border-radius:8px;padding:6px 8px;font-size:15px;cursor:pointer;background:hsl(var(--bar));color:hsl(var(--fg));}
  .btn:hover{background:hsl(var(--accent));}
  .btn.on{background:hsl(var(--accent));border-color:hsl(var(--ring));}
  .btn.off{opacity:.35;pointer-events:none;}
  .findbar{display:flex;align-items:center;gap:6px;padding:7px 12px;background:hsl(var(--bar));border-bottom:1px solid hsl(var(--border));}
  .findbar[hidden]{display:none;}
  .findbar .fi{color:hsl(var(--muted-fg));font-size:15px;display:inline-flex;}
  .findbar input{flex:1;min-width:0;height:32px;padding:0 10px;border:1px solid hsl(var(--border));border-radius:8px;background:hsl(var(--bg));color:inherit;font:inherit;font-size:.85rem;outline:none;}
  .fcount{font-size:.76rem;color:hsl(var(--muted-fg));min-width:46px;text-align:center;}
  .gridview{position:absolute;inset:0;overflow:auto;background:hsl(var(--bg));padding:16px;display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:14px;align-content:start;z-index:7;}
  .gridview[hidden]{display:none;}
  .gcell{position:relative;cursor:pointer;border:2px solid transparent;border-radius:6px;overflow:hidden;background:#fff;box-shadow:0 2px 10px rgba(0,0,0,.3);padding:0;line-height:0;}
  .gcell canvas{width:100%;display:block;}
  .gcell .pn{position:absolute;bottom:4px;right:5px;font-size:.66rem;background:#000a;color:#fff;padding:0 6px;border-radius:6px;line-height:1.5;}
  .gcell:hover{border-color:hsl(var(--ring));}
  .gcell.cur{border-color:#3b82f6;}
  /* 目錄、書籤、AI 重點三個面板住在同一個容器裡，共用一份寬度與一支拖曳把手。
     以前它們各是獨立的 aside、各有各的預設寬度與 localStorage key，於是切換面板
     就會改變檢視區寬度 → relayout() → 整份 PDF 重繪、捲動位置跳掉。同寬之後，
     切換分頁對版面完全沒有影響，只有「開／關」才需要重排。 */
  .rightpane{width:340px;flex-shrink:0;min-height:0;display:flex;
    background:hsl(var(--bar));border-left:1px solid hsl(var(--border));}
  .rightpane[hidden]{display:none;}
  .rightpane > *{flex:1;min-width:0;min-height:0;}
  @media (max-width:640px){ .rightpane{position:absolute;right:0;top:0;height:100%;z-index:9;
    width:min(340px,88vw);box-shadow:-2px 0 14px rgba(0,0,0,.35);} }
  .tocpane{min-height:0;background:hsl(var(--bar));display:flex;flex-direction:column;}
  .toctabs{display:flex;gap:2px;padding:6px;border-bottom:1px solid hsl(var(--border));flex-shrink:0;}
  .toctabs[hidden]{display:none;}
  .toctab{flex:1;font:inherit;font-size:.72rem;font-weight:600;padding:6px 2px;border:1px solid transparent;border-radius:7px;background:none;color:hsl(var(--muted-fg));cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
  .toctab:hover{background:hsl(var(--accent));}
  .toctab.on{background:hsl(var(--accent));color:hsl(var(--fg));border-color:hsl(var(--ring));}
  .toctab .n{font-weight:700;opacity:.55;margin-left:5px;}
  .toclist{flex:1;overflow-y:auto;padding:6px;}
  .panegrip{flex-shrink:0;width:10px;cursor:col-resize;display:flex;align-items:center;justify-content:center;color:hsl(var(--muted-fg));background:hsl(var(--bar));border-left:1px solid hsl(var(--border));}
  .panegrip[hidden]{display:none;}
  .panegrip:hover{background:hsl(var(--accent));color:hsl(var(--fg));}
  .panegrip svg{width:14px;height:14px;pointer-events:none;}
  .tocpane[hidden]{display:none;}
  .tochdr{font-size:.68rem;font-weight:700;color:hsl(var(--muted-fg));padding:8px 8px 6px;text-transform:uppercase;letter-spacing:.05em;}
  .tocitem{display:flex;gap:8px;align-items:baseline;justify-content:space-between;padding:5px 8px;border-radius:7px;text-decoration:none;color:hsl(var(--fg));font-size:.8rem;cursor:pointer;line-height:1.3;}
  .tocitem:hover{background:hsl(var(--accent));}
  .tocitem.l1{padding-left:22px;font-size:.76rem;color:hsl(var(--muted-fg));}
  .tocitem.cur{background:hsl(var(--accent));color:#3b82f6;font-weight:600;}
  .tocitem .tms{flex-shrink:0;font-size:.66rem;color:hsl(var(--muted-fg));font-weight:600;}
  .bkrow{display:flex;flex-direction:column;gap:2px;padding:6px 8px 7px;border-radius:7px;}
  .bkrow:hover{background:hsl(var(--accent));}
  .bkhd{display:flex;align-items:baseline;gap:6px;}
  .bkgo{flex:1;min-width:0;text-align:left;font:inherit;font-size:.8rem;border:0;background:none;color:inherit;
    cursor:pointer;padding:0;display:flex;gap:8px;align-items:baseline;line-height:1.35;}
  .bkgo .pg{flex-shrink:0;font-weight:700;font-size:.72rem;color:hsl(var(--muted-fg));min-width:38px;}
  .bkgo .lb{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
  .bkgo .lb:empty::before{content:"（無章節）";color:hsl(var(--muted-fg));}
  .bkrow.cur .bkgo .pg{color:#3b82f6;}
  .bkx{border:0;background:none;color:hsl(var(--muted-fg));cursor:pointer;font-size:12px;padding:1px 5px;border-radius:6px;flex-shrink:0;}
  .bkx:hover{background:hsl(var(--bg));color:hsl(var(--fg));}
  .bknote{width:100%;font:inherit;font-size:.74rem;border:1px solid transparent;border-radius:6px;
    background:none;color:hsl(var(--muted-fg));padding:2px 5px;outline:none;}
  .bknote:hover{border-color:hsl(var(--border));}
  .bknote:focus{border-color:hsl(var(--ring));background:hsl(var(--bg));color:hsl(var(--fg));}
  .bkgid{font-size:.66rem;font-weight:700;color:hsl(var(--muted-fg));text-transform:uppercase;letter-spacing:.05em;padding:10px 8px 3px;}
  .bkmsg{color:hsl(var(--muted-fg));font-size:.8rem;padding:16px 8px;line-height:1.6;}
  .btn.bkon svg{fill:currentColor;}
  .aipane{overflow-y:auto;background:hsl(var(--bar));display:flex;flex-direction:column;}
  .aipane[hidden]{display:none;}
  .aitabs{display:flex;gap:2px;padding:6px;border-bottom:1px solid hsl(var(--border));position:sticky;top:0;background:hsl(var(--bar));z-index:2;}
  .aitab{flex:1;font:inherit;font-size:.72rem;font-weight:600;padding:6px 2px;border:1px solid transparent;border-radius:7px;background:none;color:hsl(var(--muted-fg));cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
  .aitab:hover{background:hsl(var(--accent));}
  .aitab.on{background:hsl(var(--accent));color:hsl(var(--fg));border-color:hsl(var(--ring));}
  .aihdr{display:flex;align-items:center;gap:6px;padding:7px 10px;font-size:.7rem;color:hsl(var(--muted-fg));border-bottom:1px solid hsl(var(--border));}
  .aihdr .sp{flex:1;}
  .aihdr .btn{padding:3px 6px;font-size:13px;}
  .aisrc{font-size:.62rem;font-weight:700;padding:1px 6px;border-radius:999px;background:hsl(var(--accent));letter-spacing:.02em;}
  .aisrc[hidden]{display:none;}
  .aibody{flex:1;padding:10px 12px;font-size:.82rem;line-height:1.62;}
  .aibody ul{margin:0;padding-left:1.05em;display:flex;flex-direction:column;gap:9px;}
  .aibody li{padding-left:2px;}
  .aibody code{background:hsl(var(--accent));border-radius:4px;padding:0 4px;font-size:.92em;font-family:ui-monospace,monospace;}
  .aimsg{color:hsl(var(--muted-fg));display:flex;flex-direction:column;gap:12px;align-items:flex-start;padding-top:6px;}
  .aimsg.aiquiet{flex-direction:row;align-items:center;gap:8px;font-size:.78rem;}
  .aimsg.aiquiet .btn{padding:3px 9px;font-size:.75rem;}
  .aisv{display:flex;flex-direction:column;gap:2px;}
  .aisvbar{display:flex;gap:6px;align-items:center;padding:0 0 8px;flex-wrap:wrap;}
  .aisvbar .btn{font-size:.72rem;padding:4px 8px;}
  .aisvit{text-align:left;font:inherit;font-size:.78rem;border:0;background:none;color:inherit;cursor:pointer;
    padding:7px 8px;border-radius:7px;display:flex;gap:8px;align-items:baseline;line-height:1.35;}
  .aisvit:hover{background:hsl(var(--accent));}
  .aisvit .pg{flex-shrink:0;font-weight:700;font-size:.72rem;color:hsl(var(--muted-fg));min-width:44px;}
  .aisvit .kd{flex-shrink:0;font-size:.62rem;font-weight:700;padding:1px 6px;border-radius:999px;background:hsl(var(--accent));}
  .aisvit .tx{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:hsl(var(--muted-fg));}
  .aisvgid{font-size:.66rem;font-weight:700;color:hsl(var(--muted-fg));text-transform:uppercase;letter-spacing:.05em;padding:9px 8px 3px;}
  .aifoot{padding:7px 10px;border-top:1px solid hsl(var(--border));font-size:.66rem;color:hsl(var(--muted-fg));display:flex;flex-direction:column;gap:5px;}
  .aiprov{display:flex;gap:4px;}
  .aiprov[hidden]{display:none;}
  .aiprov .btn{flex:1;font-size:.7rem;font-weight:600;padding:4px 6px;color:hsl(var(--muted-fg));}
  .aiprov .btn.on{color:hsl(var(--fg));}
  .ainote{margin-top:10px;padding-top:8px;border-top:1px dashed hsl(var(--border));font-size:.7rem;color:hsl(var(--muted-fg));line-height:1.5;}
  .aibar{height:3px;border-radius:999px;background:hsl(var(--accent));overflow:hidden;}
  .aibar i{display:block;height:100%;background:#3b82f6;width:0;transition:width .3s;}
  .aiauto{display:flex;align-items:center;gap:5px;cursor:pointer;user-select:none;}
  .btn.dl{background:hsl(var(--primary));color:hsl(var(--primary-fg));border-color:transparent;font-weight:600;font-size:.82rem;padding:6px 11px;}
  .grp{display:inline-flex;align-items:center;gap:2px;padding:2px;border:1px solid hsl(var(--border));border-radius:9px;background:hsl(var(--bar));}
  .grp .btn{border:0;padding:5px 7px;}
  .pageinput{width:36px;text-align:center;font:inherit;font-size:.8rem;border:1px solid hsl(var(--border));border-radius:6px;background:hsl(var(--bg));color:inherit;padding:3px;}
  .pcount{font-size:.76rem;color:hsl(var(--muted-fg));padding:0 4px;}
  .zpct{font-size:.76rem;color:hsl(var(--muted-fg));min-width:40px;text-align:center;}
  .body{flex:1;display:flex;min-height:0;position:relative;}
  .rail{width:150px;flex-shrink:0;overflow-y:auto;background:hsl(var(--bar));border-right:1px solid hsl(var(--border));padding:10px 8px;display:flex;flex-direction:column;gap:8px;}
  .rail.hide{display:none;}
  .thumb{border:2px solid transparent;border-radius:6px;padding:0;background:hsl(var(--muted));cursor:pointer;position:relative;line-height:0;aspect-ratio:17/22;overflow:hidden;flex-shrink:0;width:100%;}
  .thumb canvas{position:absolute;inset:0;width:100%;height:100%;background:#fff;}
  .thumb .pn{position:absolute;bottom:3px;right:4px;font-size:.62rem;background:#000a;color:#fff;padding:0 5px;border-radius:6px;line-height:1.5;}
  .thumb.cur{border-color:#3b82f6;}
  .viewer{flex:1;overflow:auto;padding:18px;display:flex;flex-direction:column;align-items:center;gap:16px;position:relative;}
  .page{position:relative;background:#fff;box-shadow:0 4px 22px -6px rgba(0,0,0,.4);border-radius:3px;flex-shrink:0;}
  .page canvas{display:block;border-radius:3px;}
  .textLayer{position:absolute;inset:0;overflow:hidden;line-height:1;pointer-events:auto;}
  .textLayer span{color:transparent;position:absolute;white-space:pre;cursor:text;transform-origin:0 0;}
  .textLayer ::selection{background:rgba(37,99,235,.4);}
  .textLayer span.hl{background:rgba(253,224,71,.55);box-shadow:0 0 0 1px rgba(234,179,8,.55);border-radius:2px;}
  .annotationLayer{position:absolute;inset:0;pointer-events:none;}
  .annotationLayer a{position:absolute;pointer-events:auto;cursor:pointer;border-radius:2px;}
  .annotationLayer a:hover{background:rgba(59,130,246,.18);}
  #msg{position:absolute;top:20px;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:12px;color:hsl(var(--muted-fg));font-size:.82rem;max-width:92%;text-align:center;}
  /* 有骨架時，載入提示縮成底部的一顆膠囊——它不該蓋在已經畫好的第一頁上。
     sticky 讓它跟著捲動留在視窗底部，且不佔版面高度。 */
  #msg.pill{top:auto;bottom:16px;background:hsl(var(--bar));border:1px solid hsl(var(--border));
    border-radius:999px;padding:5px 14px;box-shadow:0 4px 16px -6px rgba(0,0,0,.4);}
  /* 低解析度預覽：縮圖當第一頁的背景，尺寸就是最終尺寸，所以換成 canvas 時
     不會有任何位移。用 background 而不是 <img> 子元素，是因為 renderPage() 和
     relayout() 都會清掉 innerHTML——背景不受影響，畫面不會閃一下空白。 */
  .page.lqip{background-size:100% 100%;background-repeat:no-repeat;background-position:center;}
  .ldot{display:inline-flex;align-items:center;gap:8px;animation:pulse 1.2s ease-in-out infinite;}
  @keyframes pulse{0%,100%{opacity:.45}50%{opacity:1}}
  .modal{position:fixed;inset:0;background:rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center;z-index:50;padding:16px;}
  .modal[hidden]{display:none;}
  .sheet{background:hsl(var(--bar));color:hsl(var(--fg));border:1px solid hsl(var(--border));border-radius:14px;width:min(680px,100%);max-height:90vh;overflow:auto;padding:16px;display:flex;flex-direction:column;gap:10px;}
  .sheethead{display:flex;justify-content:space-between;align-items:center;font-size:.95rem;}
  .meta{font-size:.8rem;color:hsl(var(--muted-fg));}
  .snapimg{width:100%;height:auto;display:block;border:1px solid hsl(var(--border));border-radius:8px;background:#fff;}
  /* 標註工具列：跟工具列同一套 .btn／.grp，只是字級縮一號塞得下六個工具。 */
  .anntb{display:flex;align-items:center;gap:6px;flex-wrap:wrap;}
  .anntb .btn{font-size:.76rem;padding:5px 8px;}
  .anntb .grp .btn{padding:5px 7px;}
  .anntb .sp{flex:1;}
  .annhint{font-size:.7rem;color:hsl(var(--muted-fg));line-height:1.5;}
  /* touch-action:none 讓手機上拖曳框選不會被當成捲動而把 pointermove 吃掉。 */
  .snapwrap{position:relative;line-height:0;}
  .snapwrap canvas{touch-action:none;}
  .snapwrap.tool canvas{cursor:crosshair;}
  .snapwrap.erase canvas{cursor:pointer;}
  .sheet textarea{width:100%;min-height:120px;border:1px solid hsl(var(--border));border-radius:8px;background:hsl(var(--bg));color:inherit;padding:10px;font-family:ui-monospace,monospace;font-size:.85rem;box-sizing:border-box;}
  .sheetfoot{display:flex;gap:8px;justify-content:flex-end;flex-wrap:wrap;}
  @media (max-width:640px){ .rail{position:absolute;z-index:9;height:100%;box-shadow:2px 0 14px rgba(0,0,0,.35);} }
${TOAST_CSS}
</style>
</head>
<body>
<div class="tb">
  <a href="/" class="btn" id="back" title="回清單"></a>
  <button class="btn" id="railBtn" title="縮圖側欄"></button>
  <button class="btn" id="gridBtn" title="總覽所有頁面"></button>
  <span class="title" id="gtitle" title="點一下複製 AMA 引用">${escapeHtml(name)}</span><span class="tver" id="tver"${meta.version ? ` title="${escapeHtml(meta.date || "")}"` : " hidden"}>${meta.version ? `v${escapeHtml(meta.version)}` : ""}</span>
  <div class="grp"><button class="btn" id="histBack" title="回上一個位置"></button><button class="btn" id="histFwd" title="前往下一個位置"></button></div>
  <div class="grp"><button class="btn" id="prev" title="上一頁"></button>
    <input class="pageinput" id="pageNum" value="1" inputmode="numeric"><span class="pcount">/ <span id="pageCount">${meta.pages || "–"}</span></span>
    <button class="btn" id="next" title="下一頁"></button></div>
  <div class="grp"><button class="btn" id="zout" title="縮小"></button>
    <span class="zpct" id="zpct">–</span>
    <button class="btn" id="zin" title="放大"></button>
    <button class="btn" id="fit" title="符合寬度"></button></div>
  <button class="btn" id="findBtn" title="在本檔搜尋內文"></button>
  <button class="btn" id="printBtn" title="列印本頁"></button>
  <button class="btn" id="snap" title="截圖成筆記"></button>
  <button class="btn" id="bkAdd" title="收藏本頁"></button>
  <button class="btn" id="bkBtn" title="書籤清單"></button>
  <button class="btn" id="tocBtn" title="目錄（Discussion）"${meta.hasToc ? "" : " hidden"}></button>
  <button class="btn" id="aiBtn" title="AI 本頁重點"></button>
  <button class="btn" id="theme" title="切換主題"></button>
  <a class="btn dl" href="/dl/${encodeURIComponent(id)}"><span id="dlic"></span>下載</a>
</div>
<div class="findbar" id="findbar" hidden><span class="fi" id="findIcon"></span><input id="findInput" type="search" placeholder="在本檔搜尋內文（含藥名同義詞）…"><span class="fcount" id="findCount"></span><button class="btn" id="findPrev" title="上一個"></button><button class="btn" id="findNext" title="下一個"></button><button class="btn" id="findClose" title="關閉">✕</button></div>
<div class="body">
  <aside class="rail" id="rail"></aside>
  <div class="viewer" id="viewer"><div id="msg"${meta.pages ? ' class="pill"' : ""}><div class="ldot">載入完整版 PDF…</div></div></div>
  <div class="panegrip" id="panegrip" hidden></div>
  <aside class="rightpane" id="rightpane" hidden>
  <section class="tocpane" id="tocpane" hidden>
    <div class="toctabs" id="toctabs" hidden></div>
    <div class="toclist" id="toclist"></div>
  </section>
  <section class="tocpane bkpane" id="bkpane" hidden>
    <div class="toctabs" id="bktabs"></div>
    <div class="toclist" id="bklist"></div>
  </section>
  <section class="aipane" id="aipane" hidden>
    <div class="aitabs" id="aitabs"></div>
    <div class="aihdr"><span id="aipg">p.–</span><span class="aisrc" id="aisrc" hidden></span><span class="sp"></span>
      <button class="btn" id="aiSaved" title="已存重點清單"></button>
      <button class="btn" id="aiCopy" title="複製條列"></button>
      <button class="btn" id="aiRedo" title="重新產生（覆蓋快取）"></button></div>
    <div class="aibody" id="aibody"></div>
    <div class="aifoot">
      <div class="aiprov" id="aiprov" hidden><button class="btn" data-p="ag">Antigravity</button><button class="btn" data-p="cf">Workers AI</button></div>
      <label class="aiauto"><input type="checkbox" id="aiAuto"> 翻頁時自動產生</label>
      <div class="aibar"><i id="aibarfill"></i></div>
      <span id="aiquota">額度 –</span>
      <span>AI 生成，僅供快速參考，臨床決策請以原文為準。</span>
    </div>
  </section>
  </aside>
  <div id="gridView" class="gridview" hidden></div>
</div>
<div id="snapModal" class="modal" hidden><div class="sheet"><div class="sheethead"><b>頁面截圖筆記</b><button class="btn" id="snapClose">✕</button></div><div class="meta" id="snapMeta"></div>
  <div class="anntb">
    <div class="grp" id="annTools">
      <button class="btn" data-tool="sel" title="框選：拖曳出重點區域"></button>
      <button class="btn" data-tool="num" title="編號：點一下放 ①，再點一下放 ②…"></button>
      <button class="btn" data-tool="pointer" title="圖章：游標"></button>
      <button class="btn" data-tool="arrow" title="圖章：左上箭頭"></button>
      <button class="btn" data-tool="check" title="圖章：打勾"></button>
      <button class="btn" data-tool="ok" title="圖章：圈起來的勾"></button>
    </div>
    <div class="grp" id="annStyles">
      <button class="btn" data-st="stroke" title="只畫紅色外框">外框</button>
      <button class="btn" data-st="dim" title="框以外的區域變暗">框外變暗</button>
      <button class="btn" data-st="shadow" title="框以外的區域加陰影">框外陰影</button>
    </div>
    <span class="sp"></span>
    <button class="btn" id="annUndo" title="復原上一個標註"></button>
    <button class="btn" id="annClear" title="清除全部標註"></button>
  </div>
  <div class="annhint" id="annHint"></div>
  <div class="snapwrap" id="snapWrap"><canvas id="snapCv" class="snapimg"></canvas></div>
  <textarea id="snapNote" placeholder="在這裡寫你的 Markdown 筆記…"></textarea><div class="sheetfoot"><button class="btn" id="snapCopy">複製 PNG</button><button class="btn" id="snapPng">下載 PNG</button><button class="btn dl" id="snapMd">下載 Markdown 筆記</button></div></div></div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
<script>
// 根層 <id>.pdf 就是去掉頁首橫幅的版本，所以連截圖成筆記／總覽匯出的圖都不帶橫幅。
var PDF_URL='/pdf/${encodeURIComponent(id)}';
var GID=${JSON.stringify(id)};var GNAME=${JSON.stringify(name)};var VALIDS=${JSON.stringify(Object.fromEntries([...VALID_IDS].map((x) => [x, 1])))};
// Worker 端就讀好的 metadata（lib/viewermeta.js）。PAGES 為 null 代表這一份還沒
// 進 meta/clean.json，一切退回舊行為：等 PDF 解析完才建版面。
var PAGES=${meta.pages || "null"};var VERSION=${JSON.stringify(meta.version || "")};
var THUMB_URL='/thumb/${encodeURIComponent(id)}'+${JSON.stringify(meta.version ? `?v=${meta.version}` : "")};
var PW=${PAGE_W},PH=${PAGE_H};
(function(){
window.addEventListener('error',function(ev){var m=document.getElementById('msg');if(m){m.style.display='';m.textContent='執行錯誤：'+(ev.message||(ev.error&&ev.error.message)||ev);}});
if('scrollRestoration' in history){try{history.scrollRestoration='manual';}catch(e){}}
var pdfjsLib=window['pdfjs-dist/build/pdf']||window.pdfjsLib;
pdfjsLib.GlobalWorkerOptions.workerSrc='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
var ICONS={
  gripv:'<circle cx="9" cy="12" r="1"/><circle cx="9" cy="5" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="19" r="1"/>',
  list:'<line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/>',
  grid:'<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',
  find:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  histb:'<path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5 5.5 5.5 0 0 1-5.5 5.5H11"/>',
  histf:'<path d="m15 14 5-5-5-5"/><path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5 5.5 5.5 0 0 0 9.5 20H13"/>',
  camera:'<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',
  back:'<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
  panel:'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/>',
  cl:'<path d="m15 18-6-6 6-6"/>', cr:'<path d="m9 18 6-6-6-6"/>',
  minus:'<path d="M5 12h14"/>', plus:'<path d="M5 12h14"/><path d="M12 5v14"/>',
  fit:'<path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
  moon:'<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
  dl:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>',
  spark:'<path d="M9.9 2.6 8.5 6.9 4.2 8.3l4.3 1.4 1.4 4.3 1.4-4.3 4.3-1.4-4.3-1.4z"/><path d="M18 13.5 17.2 16l-2.5.8 2.5.8.8 2.5.8-2.5 2.5-.8-2.5-.8z"/>',
  redo:'<path d="M21 12a9 9 0 1 1-3-6.7L21 8"/><path d="M21 3v5h-5"/>',
  copy:'<rect width="13" height="13" x="9" y="9" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
  archive:'<rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/>',
  bookmark:'<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>',
  bookmarks:'<path d="M7 3h10a2 2 0 0 1 2 2v16l-7-4-7 4V5a2 2 0 0 1 2-2z"/><path d="M21 17V7a2 2 0 0 0-2-2"/>',
  trash:'<path d="M3 6h18"/><path d="M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/>',
  printer:'<path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"/><rect width="12" height="8" x="6" y="14" rx="1"/>',
  // 截圖標註工具列。pointer2/upleft/check/checkbig 的路徑跟 lib/annot.js 蓋在圖上
  // 的那份是同一組，按鈕長什麼樣蓋出來就是什麼樣。
  crop:'<path d="M6 2v14a2 2 0 0 0 2 2h14"/><path d="M18 22V8a2 2 0 0 0-2-2H2"/>',
  num1:'<circle cx="12" cy="12" r="9"/><path d="M10.5 9.5 13 8v8"/>',
  pointer2:'<path d="m4 4 7.07 17 2.51-7.39L21 11.07z"/>',
  upleft:'<path d="M8 15V8h7"/><path d="M21 21 8 8"/>',
  check:'<path d="M20 6 9 17l-5-5"/>',
  checkbig:'<path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/>',
  undo:'<path d="M3 7v6h6"/><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"/>'
};
function svg(n){return '<svg viewBox="0 0 24 24" aria-hidden="true">'+(ICONS[n]||'')+'</svg>';}
function $(i){return document.getElementById(i);}
function esc(s){var _d=document.createElement('div');_d.textContent=(s==null?'':s);return _d.innerHTML;}
$('back').innerHTML=svg('back');$('railBtn').innerHTML=svg('panel');$('gridBtn').innerHTML=svg('grid');$('tocBtn').innerHTML=svg('list');
$('prev').innerHTML=svg('cl');$('next').innerHTML=svg('cr');
$('zout').innerHTML=svg('minus');$('zin').innerHTML=svg('plus');$('fit').innerHTML=svg('fit');$('dlic').innerHTML=svg('dl');$('snap').innerHTML=svg('camera');$('histBack').innerHTML=svg('histb');$('histFwd').innerHTML=svg('histf');
var themeBtn=$('theme');
function curTheme(){return document.documentElement.dataset.theme||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');}
function paintTheme(){themeBtn.innerHTML=svg(curTheme()==='dark'?'sun':'moon');}
themeBtn.onclick=function(){var nx=curTheme()==='dark'?'light':'dark';document.documentElement.dataset.theme=nx;try{localStorage.setItem('theme',nx);}catch(e){}paintTheme();};
paintTheme();

var viewer=$('viewer'),rail=$('rail'),msg=$('msg');
var pages=[],scale=1.2,fit=true,cur=1,dpr=window.devicePixelRatio||1,pdfDoc=null;
var hBack=[],hFwd=[],hlTerms=[],TOC=[],TOCR=[];
// VERSION 由 Worker 直接注入（見上面）。以前是開頁後打 /api/r2-status 再把徽章
// 從 hidden 解開——那一次往返省掉了，header 也就不會在資料回來時變寬。
// 點工具列的書名（或版本徽章）＝抄一份 AMA 引用。
var citeText=${citeText.toString()};
var copyText=${copyText.toString()};
var showToast=${showToast.toString()};
function yankCite(){var txt=citeText({name:GNAME,id:GID,version:VERSION});
  copyText(txt).then(function(ok){showToast(ok?'已複製引用':'複製失敗，請手動選取',txt);});}
$('gtitle').onclick=yankCite;$('tver').onclick=yankCite;
// 按鈕的顯示與否已經由 Worker 決定（meta.hasToc），這裡只補內容。抓不到就把
// 按鈕收回去——寧可少一顆，也不要點下去是空的。
fetch('/api/toc?id='+encodeURIComponent(GID)).then(function(r){return r.json();}).then(function(d){TOC=(d&&d.length)?d:[];if(TOC.length){buildTOC();$('tocBtn').hidden=false;}else{$('tocBtn').hidden=true;}}).catch(function(){$('tocBtn').hidden=true;});
// Pure helpers shared with the server + unit tests, injected verbatim.
var tocGroups=${tocGroups.toString()};
var tocBestIndex=${tocBestIndex.toString()};
// 目錄分成「演算法／討論」兩個分頁，一次只渲染一段，免得討論要滾很久才看得到。
var TOCG=[],tocSec='',tocPageSec='';
try{var _ts=localStorage.getItem('nccntocsec');if(_ts)tocSec=_ts;}catch(e){}
function tocGroup(s){for(var i=0;i<TOCG.length;i++)if(TOCG[i].sec===s)return TOCG[i];return null;}
// 目前頁屬於哪一段：把各段依序攤平後，取最後一個 page<=cur 的項目所屬段。
function tocSecOfPage(p){var pn=[],ss=[];for(var i=0;i<TOCG.length;i++)for(var j=0;j<TOCG[i].items.length;j++){pn.push(TOCG[i].items[j].p);ss.push(TOCG[i].sec);}var b=tocBestIndex(pn,p);return b<0?'':ss[b];}
function buildTOC(){
  TOCG=tocGroups(TOC);
  var tb=$('toctabs');
  if(TOCG.length>1){var h='';for(var i=0;i<TOCG.length;i++)h+='<button class="toctab" data-s="'+TOCG[i].sec+'">'+TOCG[i].label+'<span class="n">'+TOCG[i].items.length+'</span></button>';tb.innerHTML=h;tb.hidden=false;}
  else{tb.innerHTML='';tb.hidden=true;}
  if(!tocGroup(tocSec))tocSec=(TOCG[0]||{}).sec||'';
  tocPageSec=tocSecOfPage(cur)||tocSec;
  renderTOC();
  tb.addEventListener('click',function(ev){var b=ev.target.closest&&ev.target.closest('.toctab');if(!b)return;
    tocSec=b.getAttribute('data-s');try{localStorage.setItem('nccntocsec',tocSec);}catch(e){}renderTOC();});
  $('toclist').addEventListener('click',function(ev){var a=ev.target.closest&&ev.target.closest('.tocitem');if(a){jumpTo(+a.getAttribute('data-p'),true);markTOC();}});}
function renderTOC(){
  var g=tocGroup(tocSec);TOCR=g?g.items:[];
  var h=TOCG.length>1?'':'<div class="tochdr">'+((g&&g.label)||'')+'</div>';
  for(var i=0;i<TOCR.length;i++){var e=TOCR[i];h+='<a class="tocitem l'+(e.l||0)+'" data-p="'+e.p+'">'+esc(e.t)+'<span class="tms">'+esc(e.ref||('MS-'+e.ms))+'</span></a>';}
  $('toclist').innerHTML=h;
  var t=$('toctabs').children;for(var k=0;k<t.length;k++)t[k].className='toctab'+(t[k].getAttribute('data-s')===tocSec?' on':'');
  paintTOC();}
function paintTOC(){if(!TOCR.length)return;var it=$('toclist').querySelectorAll('.tocitem');var pn=[];for(var i=0;i<it.length;i++)pn.push(+it[i].getAttribute('data-p'));var best=tocBestIndex(pn,cur);for(var j=0;j<it.length;j++)it[j].className='tocitem l'+((TOCR[j]||{}).l||0)+(j===best?' cur':'');var c=it[best];if(c)c.scrollIntoView({block:'nearest'});}
// 只有在「跨段」時才自動換分頁；同一段內捲動不會蓋掉使用者手動選的分頁。
function markTOC(){if(!TOCG.length)return;
  var s=tocSecOfPage(cur);
  if(s&&s!==tocPageSec){tocPageSec=s;if(s!==tocSec){tocSec=s;renderTOC();return;}}
  paintTOC();}
// 右邊一次只留一個 pane：目錄、書籤、AI 重點三選一，但它們共用同一個容器與寬度。
// 回傳 true 代表「這次是新打開了某個 pane」，呼叫端據此決定要不要載入內容。
var curPane=null;
function showPane(which){
  var was=curPane;
  curPane=(which===was)?null:which;   // 再按同一顆＝關閉
  $('rightpane').hidden=!curPane;$('panegrip').hidden=!curPane;
  $('tocpane').hidden=curPane!=='toc';
  $('bkpane').hidden=curPane!=='bk';
  $('aipane').hidden=curPane!=='ai';
  $('tocBtn').classList.toggle('on',curPane==='toc');
  $('bkBtn').classList.toggle('on',curPane==='bk');
  $('aiBtn').classList.toggle('on',curPane==='ai');
  // 關鍵：只有「開↔關」會改變檢視區寬度。分頁之間切換寬度不變，就不能重排——
  // relayout() 會把每一頁 innerHTML 清掉重繪，捲動位置也會被重新錨定而看起來在跳。
  if(!!curPane!==!!was&&fit)relayout();
  return !!curPane&&curPane!==was;}
$('tocBtn').onclick=function(){if(showPane('toc'))markTOC();};
// 右側 pane 的拖曳把手（目錄與 AI 重點共用）。
function gripDrag(g,t,key,min,max){var drag=false,sx=0,sw=0;
  g.innerHTML=svg('gripv');
  g.addEventListener('mousedown',function(e){drag=true;sx=e.clientX;sw=t.getBoundingClientRect().width;document.body.style.userSelect='none';document.body.style.cursor='col-resize';e.preventDefault();});
  document.addEventListener('mousemove',function(e){if(!drag)return;var w=Math.max(min,Math.min(max,sw+(sx-e.clientX)));t.style.width=w+'px';});
  document.addEventListener('mouseup',function(){if(!drag)return;drag=false;document.body.style.userSelect='';document.body.style.cursor='';try{localStorage.setItem(key,parseInt(t.style.width,10)||min);}catch(e){}if(fit)relayout();});}
// 一支把手管一個共用寬度。舊版三支各存各的（nccntocw / nccnbkw / nccnaiw），
// 寬度不一樣正是切換時會重排的原因；沿用舊的 AI 寬度當初始值，換版不會突然變窄。
gripDrag($('panegrip'),$('rightpane'),'nccnpanew',220,760);
(function(){try{
  var w=parseInt(localStorage.getItem('nccnpanew'),10);
  if(!(w>=220&&w<=760))w=parseInt(localStorage.getItem('nccnaiw'),10);
  if(w>=220&&w<=760)$('rightpane').style.width=w+'px';
}catch(e){}})();
function activeScale(){ if(fit&&pages.length){ var w=viewer.clientWidth-40; var pw=(pages[cur-1]||pages[0]).w; return Math.max(0.2,Math.min(w/pw,4)); } return scale; }
function setZpct(){ $('zpct').textContent=Math.round(activeScale()*100)+'%'; $('fit').className='btn'+(fit?' on':''); }

// 兩個觀察器都要宣告在 buildSkeleton() 被呼叫之前——骨架是同步建的，那時就會
// 用到它們（var 只提升宣告不提升賦值，晚一行都是 undefined）。
var io=new IntersectionObserver(function(es){es.forEach(function(e){ if(e.isIntersecting){renderPage(+e.target.dataset.i);} });},{root:viewer,rootMargin:'1000px 0px'});
// 側欄縮圖刻意不在觸發後 unobserve：骨架期間就會觸發一次，那時 pdfDoc 還沒好，
// 取消觀察等於讓那幾格永遠空著。重複觸發由 p.tdone 擋掉，成本可以忽略。
var tio=new IntersectionObserver(function(es){es.forEach(function(e){ if(e.isIntersecting){ thumbRender(+e.target.dataset.i);} });},{root:rail,rootMargin:'400px 0px'});
// 骨架先用 metadata 撐出版面，真正的 PDFPageProxy 到要畫的時候才抓。
// 舊版在第一次繪製前把 getPage(1..N) 全部序列跑完——PDF 走的是 HTTP Range，
// 所以那等於幾百次往返之後才看得到第一頁。
function needPage(i){ var p=pages[i]; if(!p) return Promise.resolve(null);
  if(p.pg) return Promise.resolve(p.pg);
  if(!pdfDoc) return Promise.resolve(null);
  if(!p.req) p.req=pdfDoc.getPage(i+1).then(function(pg){ p.pg=pg;
    // 骨架照全站一致的 792×612 撐出來。萬一這一頁不是，就地校正——只有那一頁
    // 會動一下，不會整份重排。
    var vp=pg.getViewport({scale:1});
    if(Math.abs(vp.width-p.w)>1||Math.abs(vp.height-p.h)>1){ p.w=vp.width; p.h=vp.height;
      var s=activeScale(); p.el.style.width=(p.w*s)+'px'; p.el.style.height=(p.h*s)+'px';
      var rb=rail.children[i]; if(rb) rb.style.aspectRatio=p.w+'/'+p.h; }
    return pg; }).catch(function(){ p.req=null; return null; });
  return p.req; }
// relayout() 會把每一頁清掉重畫。needPage() 讓 renderPage 多了一個 await，
// 期間若使用者縮放，回來時的 sc 就過期了——用世代號把那次繪製丟掉。
var layoutGen=0;
function renderPage(i){ var p=pages[i]; if(!p||p.done)return; p.done=true;
  var gen=layoutGen;
  needPage(i).then(function(pg){ if(!pg){ p.done=false; return; } if(gen!==layoutGen) return; drawPage(p,i); }); }
function drawPage(p,i){
  var sc=activeScale(); var vp=p.pg.getViewport({scale:sc});
  p.el.style.width=vp.width+'px';p.el.style.height=vp.height+'px';p.el.innerHTML='';
  // 第一頁的低解析度預覽已經完成任務，撤掉它，免得半透明處透出舊圖。
  p.el.classList.remove('lqip');p.el.style.backgroundImage='';
  var cv=document.createElement('canvas'); cv.width=Math.floor(vp.width*dpr);cv.height=Math.floor(vp.height*dpr);
  cv.style.width=vp.width+'px';cv.style.height=vp.height+'px'; p.el.appendChild(cv);
  p.pg.render({canvasContext:cv.getContext('2d'),viewport:vp,transform:dpr!==1?[dpr,0,0,dpr,0,0]:null});
  var tl=document.createElement('div'); tl.className='textLayer'; tl.style.setProperty('--scale-factor',sc); p.el.appendChild(tl); p.el.style.setProperty('--scale-factor',sc);
  p.pg.getTextContent().then(function(tc){ try{ var td=[]; var tk=pdfjsLib.renderTextLayer({textContent:tc,container:tl,viewport:vp,textDivs:td}); (tk&&tk.promise?tk.promise:Promise.resolve()).then(function(){ hlOne(tl); }).catch(function(){}); }catch(e){} }).catch(function(){});
  var al=document.createElement('div'); al.className='annotationLayer'; p.el.appendChild(al);
  p.pg.getAnnotations().then(function(anns){ anns.forEach(function(a){ if(a.subtype!=='Link')return; var v=vp.convertToViewportRectangle(a.rect); var x=Math.min(v[0],v[2]),y=Math.min(v[1],v[3]),w=Math.abs(v[2]-v[0]),h=Math.abs(v[3]-v[1]); var L=document.createElement('a'); L.style.cssText='left:'+x+'px;top:'+y+'px;width:'+w+'px;height:'+h+'px;'; if(a.url){var _u=a.url,_mk='/physician_gls/pdf/',_ix=_u.indexOf(_mk),_id=null;if(_ix>=0){var _r=_u.slice(_ix+_mk.length),_d=_r.indexOf('.pdf');if(_d>=0){var _c=_r.slice(0,_d);if(VALIDS[_c])_id=_c;}}if(_id){L.href='/preview/'+encodeURIComponent(_id);L.title='本站開啟：'+_id;}else{L.href=_u;L.target='_blank';L.rel='noopener';}}else if(a.dest){L.href='#';(function(dest){L.addEventListener('click',function(e){e.preventDefault();var pr=(typeof dest==='string')?pdfDoc.getDestination(dest):Promise.resolve(dest);Promise.resolve(pr).then(function(dd){if(!dd||!dd[0])return;pdfDoc.getPageIndex(dd[0]).then(function(idx){jumpTo(idx+1,true);});});});})(a.dest);} al.appendChild(L); }); }).catch(function(){});
}
// 符合寬度時，開關右側 pane 會改變頁面尺寸，總高度一變，px 的 scrollTop 就落到
// 別頁去了——所以重算前先記住目前頁與頁內的相對位置，重算後貼回原處。
function relayout(){ var ap=pages[cur-1], anchor=null; layoutGen++;
  if(ap&&ap.el&&ap.el.offsetHeight) anchor=Math.max(0,Math.min(1,(viewer.scrollTop-ap.el.offsetTop)/ap.el.offsetHeight));
  var sc=activeScale(); pages.forEach(function(p){ p.done=false; p.el.style.width=(p.w*sc)+'px'; p.el.style.height=(p.h*sc)+'px'; p.el.innerHTML=''; io.unobserve(p.el); io.observe(p.el); }); setZpct();
  if(anchor!==null) viewer.scrollTop=Math.max(0,ap.el.offsetTop+anchor*ap.el.offsetHeight); }
function scrollToPage(n){ if(pages[n-1]) pages[n-1].el.scrollIntoView({block:'start'}); }
function spanHit(t){t=(t||'').toLowerCase();for(var i=0;i<hlTerms.length;i++){if(t.indexOf(hlTerms[i])>=0)return true;}return false;}
function hlSpans(td){if(!hlTerms.length)return;for(var i=0;i<td.length;i++){if(td[i]&&spanHit(td[i].textContent))td[i].classList.add('hl');}}
function hlOne(tl){if(!tl)return;var sp=tl.querySelectorAll('span');for(var i=0;i<sp.length;i++){if(hlTerms.length&&spanHit(sp[i].textContent))sp[i].classList.add('hl');else sp[i].classList.remove('hl');}}
function applyHighlights(){for(var k=0;k<pages.length;k++){if(!pages[k].el)continue;var sp=pages[k].el.querySelectorAll('.textLayer span');for(var j=0;j<sp.length;j++){if(hlTerms.length&&spanHit(sp[j].textContent))sp[j].classList.add('hl');else sp[j].classList.remove('hl');}}}
function setHL(terms){hlTerms=(terms||[]).map(function(t){return String(t).toLowerCase();});applyHighlights();}
// 網址列跟著目前頁走，複製起來就是可以直接回到這一頁的連結（?page=N 開檔時會讀）。
// 用 replaceState 不是 pushState：翻頁不該把上一頁塞進瀏覽器的返回堆疊。
var urlT=null;
function syncURL(){clearTimeout(urlT);urlT=setTimeout(function(){
  try{var u=new URL(location.href);u.searchParams.set('page',cur);history.replaceState(null,'',u.pathname+u.search+u.hash);}catch(e){}},400);}
function jumpTo(n,rec){ if(n<1||n>pages.length)return; if(rec){hBack.push(cur);hFwd=[];} cur=n; $('pageNum').value=n; scrollToPage(n); try{localStorage.setItem('nccnpg:'+GID,n);}catch(e){} updateHist(); markRail(); if(TOC.length)markTOC(); bkPaint(); aiOnPage(); syncURL(); }
function updateHist(){ $('histBack').classList.toggle('off',!hBack.length); $('histFwd').classList.toggle('off',!hFwd.length); }
function markRail(){ var items=rail.children; for(var k=0;k<items.length;k++){ items[k].className='thumb'+(k===cur-1?' cur':''); } var c=items[cur-1]; if(c) c.scrollIntoView({block:'nearest'}); }
function updateCur(){ if(!pages.length)return; var vr=viewer.getBoundingClientRect(); var line=vr.top+vr.height*0.3; var best=1;
  for(var k=0;k<pages.length;k++){ if(pages[k].el.getBoundingClientRect().top<=line) best=k+1; else break; }
  if(best!==cur){ cur=best; $('pageNum').value=cur; markRail(); if(TOC.length)markTOC(); bkPaint(); aiOnPage(); syncURL(); try{localStorage.setItem('nccnpg:'+GID,cur);}catch(e){} } }
var ticking=false;
viewer.addEventListener('scroll',function(){ if(!ticking){ ticking=true; requestAnimationFrame(function(){ updateCur(); ticking=false; }); } });

// 建出 n 頁的空版面：正確的頁數、正確的長寬比、正確的最終尺寸。
// 只要頁數已知就能做，完全不需要 PDF——這就是「首屏即最終版面」的來源。
function buildSkeleton(n){
  pages=[]; viewer.querySelectorAll('.page').forEach(function(el){el.remove();}); rail.innerHTML='';
  var pf=document.createDocumentFragment(), rf=document.createDocumentFragment();
  for(var k=0;k<n;k++){
    var el=document.createElement('div'); el.className='page'; el.dataset.i=k; pf.appendChild(el);
    pages.push({pg:null,req:null,w:PW,h:PH,el:el,done:false});
    var tb=document.createElement('button'); tb.className='thumb'; tb.dataset.i=k;
    tb.style.aspectRatio=PW+'/'+PH; tb.innerHTML='<span class="pn">'+(k+1)+'</span>';
    (function(idx){tb.onclick=function(){jumpTo(idx+1,true);};})(k); rf.appendChild(tb);
  }
  viewer.appendChild(pf); rail.appendChild(rf);
  // 第一頁先鋪縮圖。尺寸已經是最終尺寸，所以之後換成 canvas 不會有任何位移。
  if(pages[0]){ pages[0].el.classList.add('lqip'); pages[0].el.style.backgroundImage='url("'+THUMB_URL+'")'; }
  relayout(); buildThumbs();
}
// 開場該停在哪一頁：?page=N 優先，其次是這一份上次讀到哪。
function wantedPage(){ var pp=parseInt(new URLSearchParams(location.search).get('page'),10);
  if(!(pp>=1)){try{pp=parseInt(localStorage.getItem('nccnpg:'+GID),10);}catch(e){}}
  return pp>=2?pp:1; }
// 只做「捲到位置」。書籤、搜尋那些狀態留給 pdfDoc 就緒後那一輪——它們依賴的
// 變數（BK、fHits…）在這個檔案更後面才初始化，這裡碰會是 undefined。
function restoreScroll(){ var pp=wantedPage();
  if(pp>=2&&pp<=pages.length){cur=pp;$('pageNum').value=pp;scrollToPage(pp);} syncURL(); }

// 頁數已知就立刻建版面，不等 pdf.js。骨架一旦在，getPage 就能完全交給
// IntersectionObserver 按需觸發。
if(PAGES){ buildSkeleton(PAGES); restoreScroll(); }

pdfjsLib.getDocument({url:PDF_URL}).promise.then(function(d){ pdfDoc=d;
  $('pageCount').textContent=d.numPages;
  // clean.json 可能落後於實際的 PDF（例如剛換版還沒重建索引）。以 PDF 為準重建；
  // 只有頁數真的對不上時才會看到這一次重排。
  if(d.numPages!==pages.length){ buildSkeleton(d.numPages); }
  // 一定要重新掛觀察器。骨架期間可視範圍內那幾頁早就觸發過一次了，但當時
  // pdfDoc 還是 null，needPage 只能放棄——IntersectionObserver 不會為了
  // 「還在畫面上」再叫一次，不重掛的話那幾頁會永遠空白。
  relayout(); buildThumbs(); restoreScroll();
  msg.style.display='none';
  renderPage(cur-1); if(pages[cur])renderPage(cur);
  updateHist(); bkPaint();
  var _q=new URLSearchParams(location.search).get('q');
  if(_q){$('findInput').value=_q;$('findbar').hidden=false;runFind(wantedPage()<2);}
}).catch(function(e){ msg.style.display=''; msg.className=''; msg.textContent='無法載入 PDF：'+(e&&e.message?e.message:e)+'（可能尚未快取或 cookie 過期）'; });

// unobserve→observe 是重點：只有這樣才會為「已經在可視範圍內」的那幾格再叫一次。
function buildThumbs(){ for(var k=0;k<rail.children.length;k++){ tio.unobserve(rail.children[k]); tio.observe(rail.children[k]); } markRail(); }
function thumbRender(i){ var p=pages[i]; if(!p||p.tdone)return; p.tdone=true;
  needPage(i).then(function(pg){ if(!pg){p.tdone=false;return;}
    var vp=pg.getViewport({scale:130/p.w}); var cv=document.createElement('canvas');
    cv.width=vp.width;cv.height=vp.height; var btn=rail.children[i]; if(!btn)return;
    btn.insertBefore(cv,btn.firstChild); pg.render({canvasContext:cv.getContext('2d'),viewport:vp}); }); }

$('prev').onclick=function(){ if(cur>1) scrollToPage(cur-1); };
$('next').onclick=function(){ if(cur<pages.length) scrollToPage(cur+1); };
$('pageNum').addEventListener('change',function(){ var n=parseInt(this.value,10); if(n>=1&&n<=pages.length) jumpTo(n,true); });
$('zin').onclick=function(){ var b=activeScale(); fit=false; scale=Math.min(b+0.15,4); relayout(); };
$('zout').onclick=function(){ var b=activeScale(); fit=false; scale=Math.max(b-0.15,0.3); relayout(); };
$('fit').onclick=function(){ fit=!fit; if(!fit) scale=activeScale(); relayout(); };
$('railBtn').onclick=function(){ rail.classList.toggle('hide'); if(fit) relayout(); };
$('histBack').onclick=function(){ if(!hBack.length)return; hFwd.push(cur); var n=hBack.pop(); cur=n; $('pageNum').value=n; scrollToPage(n); updateHist(); markRail(); if(TOC.length)markTOC(); bkPaint(); syncURL(); };
$('histFwd').onclick=function(){ if(!hFwd.length)return; hBack.push(cur); var n=hFwd.pop(); cur=n; $('pageNum').value=n; scrollToPage(n); updateHist(); markRail(); if(TOC.length)markTOC(); bkPaint(); syncURL(); };
document.addEventListener('keydown',function(e){ if(e.target&&e.target.tagName==='INPUT')return;
  if(e.key==='ArrowRight'||e.key==='ArrowDown'||e.key==='PageDown'){ e.preventDefault(); if(cur<pages.length)scrollToPage(cur+1); }
  else if(e.key==='ArrowLeft'||e.key==='ArrowUp'||e.key==='PageUp'){ e.preventDefault(); if(cur>1)scrollToPage(cur-1); }
  else if(e.key==='+'||e.key==='='){ $('zin').onclick(); } else if(e.key==='-'){ $('zout').onclick(); } });
var rt; window.addEventListener('resize',function(){ clearTimeout(rt); rt=setTimeout(function(){ if(fit) relayout(); },200); });
function savePage(){try{localStorage.setItem('nccnpg:'+GID,cur);}catch(e){}}
window.addEventListener('pagehide',savePage);document.addEventListener('visibilitychange',function(){if(document.visibilityState==='hidden')savePage();});
var NL=String.fromCharCode(10);
function makeSnapCanvas(){var pg=pages[cur-1];if(!pg)return null;var src=pg.el.querySelector('canvas');if(!src)return null;var maxW=1100;var sc=Math.min(1,maxW/src.width);var c=document.createElement('canvas');c.width=Math.round(src.width*sc);c.height=Math.round(src.height*sc);c.getContext('2d').drawImage(src,0,0,c.width,c.height);return c;}
function dl2(u,nm){var a=document.createElement('a');a.href=u;a.download=nm;document.body.appendChild(a);a.click();a.remove();}
// ── 列印本頁 ─────────────────────────────────────────────────────────────────
// 從 pdf.js 的 page object 離屏重繪成 300 DPI 再送印，不是抓畫面上那張 canvas
// ——後者是照螢幕寬度算的（常常 <150 DPI），印出來字邊會糊。PDF 的使用者單位是
// 1/72 吋，所以 scale = 300/72；長邊再設一個上限，免得超大版面把記憶體吃爆。
var PRINT_DPI=300,PRINT_MAX_PX=4200;
// 頁面改成按需抓之後，列印／截圖／AI 都可能指到一頁還沒取回來的 PDFPageProxy
// （以前開檔就全部抓齊，所以 !p.pg 幾乎不會發生）。統一走 needPage 補抓。
function printCanvas(n){
  return needPage(n-1).then(function(pg){ if(!pg) throw new Error('page not ready');
  var base=pg.getViewport({scale:1});
  var sc=Math.min(PRINT_DPI/72,PRINT_MAX_PX/Math.max(base.width,base.height));
  var vp=pg.getViewport({scale:sc});
  var cv=document.createElement('canvas');
  cv.width=Math.floor(vp.width);cv.height=Math.floor(vp.height);
  var ctx=cv.getContext('2d');
  // PDF 頁面本身多半沒有背景色，不先填白的話透明區在某些印表機驅動會變黑。
  ctx.fillStyle='#fff';ctx.fillRect(0,0,cv.width,cv.height);
  var t=pg.render({canvasContext:ctx,viewport:vp});
  return (t&&t.promise?t.promise:Promise.resolve()).then(function(){
    return {url:cv.toDataURL('image/png'),landscape:vp.width>vp.height};});});}
// 用隱藏 iframe 而不是 window.open：不會被彈窗封鎖，也不會把整個閱讀器 UI 一起印進去。
function printPage(){
  var btn=$('printBtn'),n=cur;
  if(btn.classList.contains('off'))return;
  btn.classList.add('off');
  printCanvas(n).then(function(r){
    var f=document.createElement('iframe');
    f.setAttribute('aria-hidden','true');
    f.style.cssText='position:fixed;right:0;bottom:0;width:0;height:0;border:0;visibility:hidden;';
    document.body.appendChild(f);
    var d=f.contentWindow.document;
    d.open();
    d.write('<!doctype html><html><head><meta charset="utf-8"><title>'
      +esc(GNAME)+' p.'+n+'</title><style>'
      // 紙張方向跟著這一頁走，橫式流程圖才不會被縮成一小條。
      +'@page{size:'+(r.landscape?'landscape':'portrait')+';margin:8mm;}'
      // 一定要同時鎖住兩個方向。只給 width:100% 的話，只要頁面的長寬比比紙張「胖」，
      // 撐滿寬度後高度就會超出可印範圍而掉到第二頁——NCCN 是 letter 橫式（比例
      // 0.773），A4 橫式可印區是 0.690，撐滿 281mm 寬會變成 217mm 高，可印高度只有
      // 194mm。max-width + max-height 讓它取兩者較嚴格的那個，等比縮到一定放得下。
      // height:100% 要一路標到 html 才有具體高度可以拿來算百分比。
      +'html,body{margin:0;padding:0;height:100%;background:#fff;}'
      +'body{overflow:hidden;}'
      +'img{display:block;max-width:100%;max-height:100%;width:auto;height:auto;margin:0 auto;}'
      +'</style></head><body><img alt=""></body></html>');
    d.close();
    var img=d.body.firstChild;
    var done=false;
    function go(){
      if(done)return;done=true;
      try{f.contentWindow.focus();f.contentWindow.print();}catch(e){}
      // 列印對話框是同步阻塞的，但 Safari 不一定，所以延後移除而不是馬上砍。
      setTimeout(function(){f.remove();btn.classList.remove('off');},1000);}
    img.onload=go;
    img.onerror=go;
    img.src=r.url;
  }).catch(function(e){
    btn.classList.remove('off');
    showToast('列印失敗',String(e&&e.message||e));});}
$('printBtn').innerHTML=svg('printer');
$('printBtn').onclick=printPage;
// ── 截圖標註 ─────────────────────────────────────────────────────────────────
// 標註不會燒進底圖：SNAP.base 永遠是那張乾淨的底圖，畫面上那張是每次操作後用
// base + anns 整個重畫出來的。所以「復原」只是 pop 掉一個元素，切換框線樣式也不用
// 重新截圖——代價只有一次 drawImage，這個尺寸的圖上感覺不出來。
var annotRect=${annotRect.toString()};
var annotNextNum=${annotNextNum.toString()};
var annotHit=${annotHit.toString()};
var annotDraw=${annotDraw.toString()};
var STAMPS={pointer:1,arrow:1,check:1,ok:1};
var ANNIC={sel:'crop',num:'num1',pointer:'pointer2',arrow:'upleft',check:'check',ok:'checkbig'};
var SNAP={base:null,anns:[],tool:'',style:'stroke',drag:null,anchor:null};
(function(){var t=$('annTools').children;for(var i=0;i<t.length;i++)t[i].innerHTML=svg(ANNIC[t[i].dataset.tool]);})();
$('annUndo').innerHTML=svg('undo');$('annClear').innerHTML=svg('trash');
function snapPaint(){var cv=$('snapCv'),b=SNAP.base;
  if(!b){cv.width=0;cv.height=0;return;}
  if(cv.width!==b.width||cv.height!==b.height){cv.width=b.width;cv.height=b.height;}
  var ctx=cv.getContext('2d');
  ctx.clearRect(0,0,cv.width,cv.height);ctx.drawImage(b,0,0);
  annotDraw(ctx,SNAP.drag?SNAP.anns.concat([SNAP.drag]):SNAP.anns,cv.width,cv.height,SNAP.style);}
function annHint(){var h;
  if(SNAP.tool==='sel')h='在圖上拖曳出要強調的區域。右邊那三個樣式是整層共用的——有幾個框就一起變。';
  else if(SNAP.tool==='num')h='點一下放一個編號，號碼自己往下接。';
  else if(SNAP.tool)h='點一下把圖章蓋上去。';
  else h='先選一個工具再點圖片。沒選工具時，點既有的標註可以刪掉它（框要點在邊線上）。';
  $('annHint').textContent=h;}
function annSync(){var i,t=$('annTools').children,s=$('annStyles').children;
  for(i=0;i<t.length;i++)t[i].classList.toggle('on',t[i].dataset.tool===SNAP.tool);
  for(i=0;i<s.length;i++)s[i].classList.toggle('on',s[i].dataset.st===SNAP.style);
  var w=$('snapWrap');
  w.classList.toggle('tool',!!SNAP.tool);
  w.classList.toggle('erase',!SNAP.tool&&SNAP.anns.length>0);
  $('annUndo').classList.toggle('off',!SNAP.anns.length);
  $('annClear').classList.toggle('off',!SNAP.anns.length);
  annHint();}
// 再點同一個工具＝取消選取，回到「點標註可刪」的狀態。
$('annTools').onclick=function(e){var b=e.target.closest('button[data-tool]');if(!b)return;
  SNAP.tool=SNAP.tool===b.dataset.tool?'':b.dataset.tool;annSync();};
$('annStyles').onclick=function(e){var b=e.target.closest('button[data-st]');if(!b)return;
  SNAP.style=b.dataset.st;annSync();snapPaint();};
$('annUndo').onclick=function(){SNAP.anns.pop();annSync();snapPaint();};
$('annClear').onclick=function(){SNAP.anns=[];SNAP.tool='';annSync();snapPaint();};
// 座標一律換算成 0..1 再存，跟 CSS 把 canvas 縮到多寬無關。
function snapPt(e){var cv=$('snapCv'),r=cv.getBoundingClientRect();
  return {x:(e.clientX-r.left)/(r.width||1),y:(e.clientY-r.top)/(r.height||1)};}
$('snapCv').addEventListener('pointerdown',function(e){
  if(!SNAP.base)return;
  var p=snapPt(e);
  if(SNAP.tool==='sel'){
    e.preventDefault();
    SNAP.anchor=p;SNAP.drag=null;
    // 抓住指標，拖到圖外面（甚至拖到 modal 背景上）放開也還算同一次拖曳。
    try{$('snapCv').setPointerCapture(e.pointerId);}catch(_e){}
    return;}
  if(SNAP.tool==='num'){SNAP.anns.push({t:'num',x:p.x,y:p.y,n:annotNextNum(SNAP.anns)});annSync();snapPaint();return;}
  if(STAMPS[SNAP.tool]){SNAP.anns.push({t:'stamp',x:p.x,y:p.y,k:SNAP.tool});annSync();snapPaint();return;}
  var h=annotHit(SNAP.anns,p.x,p.y,$('snapCv').width,$('snapCv').height);
  if(h>=0){SNAP.anns.splice(h,1);annSync();snapPaint();}});
$('snapCv').addEventListener('pointermove',function(e){
  if(!SNAP.anchor)return;
  var p=snapPt(e);SNAP.drag=annotRect(SNAP.anchor.x,SNAP.anchor.y,p.x,p.y);snapPaint();});
$('snapCv').addEventListener('pointerup',function(e){
  if(!SNAP.anchor)return;
  var p=snapPt(e),r=annotRect(SNAP.anchor.x,SNAP.anchor.y,p.x,p.y);
  SNAP.anchor=null;SNAP.drag=null;
  if(r)SNAP.anns.push(r);
  annSync();snapPaint();});
$('snapCv').addEventListener('pointercancel',function(){SNAP.anchor=null;SNAP.drag=null;snapPaint();});
// 匯出的就是畫面上這張——標註已經在裡面了，不用再合成一次。
function snapURL(){var cv=$('snapCv');return (SNAP.base&&cv.width)?cv.toDataURL('image/png'):'';}
// 底圖從 pdf.js 的 page object 離屏重繪，跟 printCanvas 同一套路，不抄畫面上那張
// canvas：那張可能還沒畫完（p.done 是在「送出 render」時就設 true 的），剛翻到的頁
// 甚至還沒開始畫、連 canvas 都還不存在，而且它的解析度是照螢幕寬度算的。
var SNAP_W=1600;
function snapRender(n){
  return needPage(n-1).then(function(pg){ if(!pg)return null;
  var base=pg.getViewport({scale:1});
  var vp=pg.getViewport({scale:Math.min(SNAP_W/base.width,4)});
  var cv=document.createElement('canvas');
  cv.width=Math.floor(vp.width);cv.height=Math.floor(vp.height);
  var ctx=cv.getContext('2d');
  ctx.fillStyle='#fff';ctx.fillRect(0,0,cv.width,cv.height);
  var t=pg.render({canvasContext:ctx,viewport:vp});
  return (t&&t.promise?t.promise:Promise.resolve()).then(function(){return cv;});});}
$('snap').onclick=function(){
  var n=cur;
  // 先擺畫面上那張頂著，視窗立刻打得開；離屏那張畫好再換上去。不等它才開視窗是因為
  // 分頁在背景時 pdf.js 的 rAF 會停擺，promise 可能一直不 settle，等下去就是對著空
  // 白發呆。已經動手標註就不換圖，免得把使用者畫的東西弄不見。
  SNAP.base=makeSnapCanvas();SNAP.anns=[];SNAP.tool='';SNAP.drag=null;SNAP.anchor=null;
  snapPaint();annSync();
  $('snapMeta').textContent=GNAME+'  ·  '+(VERSION?('v'+VERSION+'  ·  '):'')+'p.'+cur;$('snapModal').hidden=false;
  snapRender(n).then(function(cv){
    if(cv&&n===cur&&!SNAP.anns.length){SNAP.base=cv;snapPaint();annSync();}}).catch(function(){});};
$('snapClose').onclick=function(){$('snapModal').hidden=true;};
$('snapModal').addEventListener('click',function(e){if(e.target===$('snapModal'))$('snapModal').hidden=true;});
// Esc：先退掉工具（怕誤刪），沒有工具在用才關視窗。
document.addEventListener('keydown',function(e){if(e.key!=='Escape'||$('snapModal').hidden)return;
  if(SNAP.tool){SNAP.tool='';annSync();}else $('snapModal').hidden=true;});
$('snapPng').onclick=function(){var u=snapURL();if(u)dl2(u,'NCCN-'+GID+'-p'+cur+'.png');};
// 複製 PNG：Safari 只認「在點擊事件的同一個 tick 內就呼叫 clipboard.write」，先 await
// 把 data: URL 轉成 blob 再寫，權限已經過期會被擋掉。所以這裡把 blob 當成 Promise
// 直接塞進 ClipboardItem——規格允許，Chrome/Safari/Firefox 都吃這一招。
$('snapCopy').onclick=function(){
  var u=snapURL();if(!u)return;
  var btn=$('snapCopy');
  if(!(window.ClipboardItem&&navigator.clipboard&&navigator.clipboard.write)){
    showToast('複製失敗','這個瀏覽器不支援把圖片寫進剪貼簿，請改用「下載 PNG」');return;}
  var blob=fetch(u).then(function(r){return r.blob();});
  navigator.clipboard.write([new ClipboardItem({'image/png':blob})]).then(function(){
    // 就地改字比 toast 好讀——按鈕就在指標底下，不用把視線移到畫面下緣。
    if(btn._t)clearTimeout(btn._t);
    btn.textContent='已複製 ✓';
    btn._t=setTimeout(function(){btn.textContent='複製 PNG';btn._t=null;},1600);
  }).catch(function(e){showToast('複製失敗',String(e&&e.message||e));});};
$('snapMd').onclick=function(){var u=snapURL();var note=$('snapNote').value;var url=location.origin+'/preview/'+encodeURIComponent(GID)+'?page='+cur;var lines=['---','guideline: '+GNAME.split('"').join(''),'id: '+GID,'version: '+(VERSION||''),'page: '+cur,'source: '+url,'captured: '+new Date().toISOString(),'---','','# '+GNAME+' — p.'+cur+(VERSION?(' (v'+VERSION+')'):''),'','!['+GNAME+' p.'+cur+']('+u+')','',note,''];var md=lines.join(NL);var blob=new Blob([md],{type:'text/markdown;charset=utf-8'});dl2(URL.createObjectURL(blob),'NCCN-'+GID+'-p'+cur+'.md');};
var fHits=[],fIdx=-1,fTimer=null;
$('findBtn').innerHTML=svg('find');$('findIcon').innerHTML=svg('find');$('findPrev').innerHTML=svg('cl');$('findNext').innerHTML=svg('cr');
$('findBtn').onclick=function(){var fb=$('findbar');fb.hidden=!fb.hidden;if(!fb.hidden){$('findInput').focus();$('findInput').select();}};
$('findClose').onclick=function(){$('findbar').hidden=true;setHL([]);};
function gotoHit(){if(fIdx<0||!fHits.length)return;$('findCount').textContent=(fIdx+1)+'/'+fHits.length;jumpTo(fHits[fIdx],true);}
function runFind(jump){var qq=$('findInput').value.trim();if(qq.length<2){fHits=[];fIdx=-1;$('findCount').textContent='';setHL([]);return;}fetch('/api/search?q='+encodeURIComponent(qq)+'&id='+encodeURIComponent(GID)).then(function(r){return r.json();}).then(function(d){if($('findInput').value.trim()!==qq)return;setHL(d.terms);var seen={};fHits=[];(d.results||[]).forEach(function(x){if(!seen[x.page]){seen[x.page]=1;fHits.push(x.page);}});fHits.sort(function(a,b){return a-b;});if(!fHits.length){fIdx=-1;$('findCount').textContent='0';return;}fIdx=0;for(var i=0;i<fHits.length;i++){if(fHits[i]>=cur){fIdx=i;break;}}if(jump!==false)gotoHit();else $('findCount').textContent=(fIdx+1)+'/'+fHits.length;}).catch(function(){});}
$('findInput').addEventListener('input',function(){clearTimeout(fTimer);fTimer=setTimeout(function(){runFind(true);},250);});
$('findInput').addEventListener('keydown',function(e){if(e.key==='Enter'){e.preventDefault();if(fHits.length){fIdx=(fIdx+(e.shiftKey?-1:1)+fHits.length)%fHits.length;gotoHit();}}});
$('findPrev').onclick=function(){if(fHits.length){fIdx=(fIdx-1+fHits.length)%fHits.length;gotoHit();}};
$('findNext').onclick=function(){if(fHits.length){fIdx=(fIdx+1)%fHits.length;gotoHit();}};
document.addEventListener('keydown',function(e){if((e.metaKey||e.ctrlKey)&&(e.key==='f'||e.key==='F')){e.preventDefault();var fb=$('findbar');fb.hidden=false;$('findInput').focus();$('findInput').select();}else if(e.key==='Escape'&&!$('findbar').hidden){$('findbar').hidden=true;setHL([]);}});
var gio=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){gcellRender(+e.target.dataset.i);gio.unobserve(e.target);}});},{root:$('gridView'),rootMargin:'400px 0px'});
function gcellRender(i){var p=pages[i];if(!p||p.gdone)return;p.gdone=true;
  needPage(i).then(function(pg){if(!pg){p.gdone=false;return;}
    var vp=pg.getViewport({scale:220/p.w});var cv=document.createElement('canvas');cv.width=vp.width;cv.height=vp.height;
    var cell=$('gridView').children[i];if(!cell)return;cell.insertBefore(cv,cell.firstChild);
    pg.render({canvasContext:cv.getContext('2d'),viewport:vp});});}
var gridBuilt=false;
function buildGridView(){var gv=$('gridView');var h='';for(var i=0;i<pages.length;i++){h+='<button class="gcell" data-i="'+i+'"><span class="pn">'+(i+1)+'</span></button>';}gv.innerHTML=h;for(var k=0;k<gv.children.length;k++){var c=gv.children[k];c.style.aspectRatio=pages[k].w+'/'+pages[k].h;gio.observe(c);(function(idx,el){el.onclick=function(){closeGrid();jumpTo(idx+1,true);};})(k,c);}gridBuilt=true;}
function markGrid(){var ch=$('gridView').children;for(var i=0;i<ch.length;i++){ch[i].className='gcell'+(i===cur-1?' cur':'');}var c=ch[cur-1];if(c)c.scrollIntoView({block:'nearest'});}
function openGrid(){if(!pages.length)return;if(!gridBuilt)buildGridView();markGrid();$('gridView').hidden=false;$('gridBtn').classList.add('on');}
function closeGrid(){$('gridView').hidden=true;$('gridBtn').classList.remove('on');}
$('gridBtn').onclick=function(){if($('gridView').hidden)openGrid();else closeGrid();};
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!$('gridView').hidden)closeGrid();});

// ── 書籤 ─────────────────────────────────────────────────────────────────────
// 一頁一則，存 D1（/api/bookmark）所以換裝置還在。收藏時自動把目前的 TOC 章節名
// 當標籤存下來，備註事後在清單裡直接打、失焦就存。畫面一律先樂觀更新再送出：
// 按下去要立刻有反應，失敗才回捲並用 toast 講清楚。
var BK={},BKALL=[],bkAll=false;
try{bkAll=localStorage.getItem('nccnbkall')==='1';}catch(e){}
$('bkAdd').innerHTML=svg('bookmark');$('bkBtn').innerHTML=svg('bookmarks');
// esc() 不會轉義雙引號，塞進 value="…" 的備註是使用者打的字，得另外處理。
function escA(s){return esc(s).split('"').join('&quot;');}
// 目前頁屬於哪個章節：TOC 各段攤平後取最後一個 page<=p 的標題。沒目錄就留空。
function bkAutoLabel(p){var pn=[],tx=[];
  for(var i=0;i<TOCG.length;i++)for(var j=0;j<TOCG[i].items.length;j++){pn.push(TOCG[i].items[j].p);tx.push(TOCG[i].items[j].t);}
  if(!pn.length)return '';
  var b=tocBestIndex(pn,p);return b<0?'':(tx[b]||'');}
function bkList(){var out=[];for(var k in BK)if(Object.prototype.hasOwnProperty.call(BK,k))out.push(BK[k]);
  out.sort(function(a,b){return a.page-b.page;});return out;}
function bkRows(){return bkAll?BKALL:bkList();}
function bkPaint(){var on=!!BK[cur];
  $('bkAdd').classList.toggle('bkon',on);
  $('bkAdd').title=on?'移除本頁書籤':'收藏本頁';
  if(!$('bkpane').hidden)bkMarkCur();}
function bkMarkCur(){var rs=$('bklist').querySelectorAll('.bkrow');
  for(var i=0;i<rs.length;i++)rs[i].classList.toggle('cur',
    rs[i].getAttribute('data-g')===GID&&+rs[i].getAttribute('data-p')===cur);}
function bkAfterChange(){bkPaint();if(!$('bkpane').hidden)bkRender();}
function bkSave(body,onFail){
  return fetch('/api/bookmark',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(body)})
    .then(function(r){return r.json();}).then(function(d){if(!d.ok)throw new Error(d.error||'儲存失敗');return d;})
    .catch(function(e){showToast('書籤沒存成功',String(e&&e.message||e));if(onFail)onFail();});}
function bkLoad(){return fetch('/api/bookmarks?id='+encodeURIComponent(GID))
  .then(function(r){return r.json();}).then(function(d){
    BK={};(d.rows||[]).forEach(function(r){BK[r.page]={gid:GID,page:r.page,label:r.label||'',note:r.note||''};});
    bkPaint();}).catch(function(){});}
function bkLoadAll(){$('bklist').innerHTML='<div class="bkmsg">讀取中…</div>';
  return fetch('/api/bookmarks?all=1').then(function(r){return r.json();})
    .then(function(d){BKALL=d.rows||[];bkRender();})
    .catch(function(e){$('bklist').innerHTML='<div class="bkmsg">讀取失敗：'+esc(String(e&&e.message||e))+'</div>';});}
// 存失敗時就別自己猜狀態了，直接把伺服器那份抓回來重畫。
function bkReload(){bkLoad().then(function(){if(bkAll)bkLoadAll();else if(!$('bkpane').hidden)bkRender();});}
// 「全部」檢視畫的是 BKALL，所以本份的增刪也得同步進去；只更新 BK 的話，清單停在
// 全部時新收的那一頁不會出現，看起來像沒收到。排序跟後端的 ORDER BY gid, page 一致。
function bkAllSync(gid,page,rec){
  BKALL=BKALL.filter(function(x){return !(x.gid===gid&&x.page===page);});
  if(rec){BKALL.push(rec);
    BKALL.sort(function(a,b){return a.gid<b.gid?-1:a.gid>b.gid?1:a.page-b.page;});}}
function bkRec(page,src){return {gid:GID,page:page,label:(src&&src.label)||'',note:(src&&src.note)||'',name:GNAME};}
function bkToggle(){var page=cur,prev=BK[page],on=!prev;
  if(on)BK[page]={gid:GID,page:page,label:bkAutoLabel(page),note:''};else delete BK[page];
  bkAllSync(GID,page,on?bkRec(page,BK[page]):null);
  bkAfterChange();
  bkSave({id:GID,page:page,label:on?BK[page].label:null,on:on},function(){
    if(prev)BK[page]=prev;else delete BK[page];
    bkAllSync(GID,page,prev?bkRec(page,prev):null);
    bkAfterChange();});}
function bkRemove(g,p){
  if(g===GID)delete BK[p];
  BKALL=BKALL.filter(function(x){return !(x.gid===g&&x.page===p);});
  bkAfterChange();
  bkSave({id:g,page:p,on:false},bkReload);}
function bkTabs(){var n=bkList().length;
  $('bktabs').innerHTML='<button class="toctab'+(bkAll?'':' on')+'" data-s="one">本份<span class="n">'+n+'</span></button>'
    +'<button class="toctab'+(bkAll?' on':'')+'" data-s="all">全部</button>'
    +'<button class="toctab" id="bkExport" style="flex:0 0 auto" title="匯出 Markdown">.md</button>';}
function bkRender(){bkTabs();
  var rows=bkRows();
  if(!rows.length){$('bklist').innerHTML='<div class="bkmsg">'
    +(bkAll?'目前整站還沒有書籤。':'這一份還沒有書籤。<br>按工具列的書籤鈕就能收藏目前這一頁。')+'</div>';return;}
  var h='',lastGid='';
  for(var i=0;i<rows.length;i++){var r=rows[i];
    if(bkAll&&r.gid!==lastGid){lastGid=r.gid;h+='<div class="bkgid">'+esc(r.name||r.gid)+'</div>';}
    h+='<div class="bkrow" data-p="'+r.page+'" data-g="'+escA(r.gid)+'"><div class="bkhd">'
      +'<button class="bkgo"><span class="pg">p.'+r.page+'</span><span class="lb">'+esc(r.label||'')+'</span></button>'
      +'<button class="bkx" title="移除">'+svg('trash')+'</button></div>'
      +'<input class="bknote" placeholder="備註…" value="'+escA(r.note||'')+'"></div>';}
  $('bklist').innerHTML=h;bkMarkCur();}
var bookmarkMd=${bookmarkMd.toString()};
function bkExport(){var rows=bkRows();if(!rows.length)return;
  var md=bookmarkMd(rows,{origin:location.origin,scopeAll:bkAll,name:GNAME});
  dl2(URL.createObjectURL(new Blob([md],{type:'text/markdown;charset=utf-8'})),
    'NCCN-bookmarks-'+(bkAll?'all':GID)+'.md');}
$('bkAdd').onclick=bkToggle;
$('bkBtn').onclick=function(){if(!showPane('bk'))return;
  if(bkAll)bkLoadAll();else bkRender();};
$('bktabs').addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('.toctab');if(!b)return;
  if(b.id==='bkExport'){bkExport();return;}
  var want=b.getAttribute('data-s')==='all';if(want===bkAll)return;
  bkAll=want;try{localStorage.setItem('nccnbkall',bkAll?'1':'0');}catch(e){}
  if(bkAll)bkLoadAll();else bkRender();});
$('bklist').addEventListener('click',function(e){
  var row=e.target.closest&&e.target.closest('.bkrow');if(!row)return;
  var g=row.getAttribute('data-g'),p=+row.getAttribute('data-p');
  if(e.target.closest('.bkx')){bkRemove(g,p);return;}
  if(!e.target.closest('.bkgo'))return;
  if(g!==GID){location.href='/preview/'+encodeURIComponent(g)+'?page='+p;return;}
  jumpTo(p,true);});
$('bklist').addEventListener('change',function(e){
  var inp=e.target.closest&&e.target.closest('.bknote');if(!inp)return;
  var row=inp.closest('.bkrow'),g=row.getAttribute('data-g'),p=+row.getAttribute('data-p'),note=inp.value;
  if(g===GID&&BK[p])BK[p].note=note;
  for(var i=0;i<BKALL.length;i++)if(BKALL[i].gid===g&&BKALL[i].page===p)BKALL[i].note=note;
  bkSave({id:g,page:p,note:note,on:true},bkReload);});
bkLoad();

// ── AI 本頁重點 ───────────────────────────────────────────────────────────────
// 右側 pane 跟著目前頁走，四種格式各自獨立生成與快取（/api/insight）。
// GET 只讀快取所以翻頁時可以無限打；真正花 Workers AI 額度的生成走 POST，
// 預設要按鈕確認（「翻頁時自動產生」打開才會跟著翻頁自動跑）。
// 演算法流程圖頁後端會回 vision:true，前端就把該頁 rasterize 成 JPEG 一起送，
// 讓多模態模型直接讀圖——比抽字穩，方框與箭頭的決策路徑才讀得出來。
// 兩個 AI 來源可切換：Antigravity（Gemini 模型階梯）與 Workers AI。後端沒設
// ANTIGRAVITY_API_KEY 的話回 ag:false，這時整個切換列就不出現。
var AIKINDS=[['key','重點整理'],['hy','High Yield'],['phrase','病歷片語'],['sdm','SDM']];
var aiKind='key',aiSeq=0,aiTimer=null,aiPage=0,aiAuto=false,aiProv='ag',AGOK=false;
$('aiBtn').innerHTML=svg('spark');$('aiRedo').innerHTML=svg('redo');$('aiCopy').innerHTML=svg('copy');
try{var _sk=localStorage.getItem('nccnaikind');if(_sk)aiKind=_sk;aiAuto=localStorage.getItem('nccnaiauto')==='1';
  var _sp=localStorage.getItem('nccnaiprov');if(_sp==='ag'||_sp==='cf')aiProv=_sp;}catch(e){}
$('aiAuto').checked=aiAuto;
function aiProvMark(){var b=$('aiprov').children;for(var i=0;i<b.length;i++)b[i].className='btn'+(b[i].getAttribute('data-p')===aiProv?' on':'');}
// 後端說有金鑰才顯示切換列；沒有就一律走 Workers AI。
function aiProvAvail(ok){AGOK=!!ok;$('aiprov').hidden=!AGOK;if(!AGOK)aiProv='cf';aiProvMark();}
$('aiprov').addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('.btn');if(!b)return;
  var p=b.getAttribute('data-p');if(p===aiProv)return;aiProv=p;try{localStorage.setItem('nccnaiprov',p);}catch(e){}
  aiProvMark();aiQuotaPaint();});
aiProvMark();
// 模型字串在畫面上要短：@cf/meta/llama-4-scout-17b-16e-instruct → llama-4-scout
function aiShortModel(m){if(!m)return '';m=String(m);if(m.indexOf('@cf/')===0){var t=m.split('/').pop();return t.split('-').slice(0,3).join('-');}return m;}
function aiLabel(k){for(var i=0;i<AIKINDS.length;i++)if(AIKINDS[i][0]===k)return AIKINDS[i][1];return k;}
// 翻頁時右側 pane 每次都重畫成「讀取中…」再變成「還沒有…」，看起來一直在閃。
// 兩個對策：讀快取這種通常 <100ms 的事，等 250ms 還沒回來才畫載入中；畫面內容
// 帶一個 key，內容其實沒變（例如連續好幾頁都還沒產生）就完全不動 DOM。
var aiBodyKey='',aiPend=null;
function aiSet(h,key){clearTimeout(aiPend);aiPend=null;$('aibody').innerHTML=h;aiBodyKey=key||'';}
function aiLoading(msg){clearTimeout(aiPend);aiPend=setTimeout(function(){
  aiSet('<div class="aimsg"><span class="ldot">'+msg+'</span></div>','load');},250);}
function aiMd(s){return esc(s).split('**').map(function(x,i){return i%2?'<b>'+x+'</b>':x;}).join('').replace(/\`([^\`]+)\`/g,'<code>$1</code>');}
(function(){var h='';for(var i=0;i<AIKINDS.length;i++)h+='<button class="aitab" data-k="'+AIKINDS[i][0]+'">'+AIKINDS[i][1]+'</button>';$('aitabs').innerHTML=h;
  $('aitabs').addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('.aitab');if(!b)return;aiKind=b.getAttribute('data-k');try{localStorage.setItem('nccnaikind',aiKind);}catch(e){}aiMarkTabs();
    if(aiSavedOn){aiSavedOn=false;$('aiSaved').classList.remove('on');aiPage=0;} // 點分頁就離開清單模式
    aiLoad(false);});})();
function aiMarkTabs(){var t=$('aitabs').children;for(var i=0;i<t.length;i++)t[i].className='aitab'+(t[i].getAttribute('data-k')===aiKind?' on':'');}
aiMarkTabs();
var AIQ=null,AGQ=null;
function aiQuota(d){if(!d)return;if(d.quota&&d.quota.cap)AIQ=d.quota;if(d.agquota&&d.agquota.cap)AGQ=d.agquota;aiQuotaPaint();}
// 兩邊的計量單位不同：Workers AI 記 neurons，Antigravity 記「每模型每天幾次」。
function aiQuotaPaint(){var q=(aiProv==='ag'?AGQ:AIQ);if(!q||!q.cap){$('aiquota').textContent='額度 –';return;}
  var pct=Math.min(100,Math.round(q.used/q.cap*100));
  $('aibarfill').style.width=pct+'%';
  $('aiquota').textContent=aiProv==='ag'
    ? '今日 '+q.used+' / '+q.cap+' 次（'+pct+'%）· 下一階 '+(q.next||'（都滿了）')
    : '今日額度 '+q.used+' / '+q.cap+' neurons（'+pct+'%）· UTC 00:00 重置';}
function aiShow(d){var b=d.bullets||[];var s=$('aisrc');s.hidden=false;
  s.textContent=(d.src==='vision'?'讀圖':'文字')+(d.cached?' · 快取':'')+(d.model?' · '+aiShortModel(d.model):'');
  if(!b.length){aiSet('<div class="aimsg">（這一頁沒有可整理的內容）</div>');return;}
  var h='<ul>';for(var i=0;i<b.length;i++)h+='<li>'+aiMd(b[i])+'</li>';h+='</ul>';
  // 有掉階或掉回 Workers AI 就講清楚，不然使用者會以為切換沒生效。
  var n=d.notes||[];if(d.fell||n.length)h+='<div class="ainote">'+(d.fell?'Antigravity 這次沒跑成，已改用 Workers AI。':'')+(n.length?(d.fell?'<br>':'')+esc(n.join('；')):'')+'</div>';
  aiSet(h);}
// 直接從 pdf.js 的 page object 離屏重繪，不依賴畫面上那張 canvas 有沒有渲染好。
function rasterPage(n,maxW){return new Promise(function(res,rej){
  needPage(n-1).then(function(pg){ if(!pg)return rej(new Error('page not ready'));
  var p=pages[n-1];
  var vp=pg.getViewport({scale:Math.min(2.5,(maxW||1100)/p.w)});
  var cv=document.createElement('canvas');cv.width=Math.floor(vp.width);cv.height=Math.floor(vp.height);
  var ctx=cv.getContext('2d');ctx.fillStyle='#fff';ctx.fillRect(0,0,cv.width,cv.height);
  var t=pg.render({canvasContext:ctx,viewport:vp});
  (t&&t.promise?t.promise:Promise.resolve()).then(function(){var u=cv.toDataURL('image/jpeg',.82);res(u.slice(u.indexOf(',')+1));}).catch(rej);}).catch(rej);});}
// 不設 busy 鎖：翻頁翻很快時舊的請求靠 aiSeq 判斷過期直接忽略，而它的結果後端
// 還是會寫進快取，所以不算白花——加鎖反而會讓新頁卡在「產生中」的畫面出不來。
function aiGen(page,kind,seq,force,vision){
  var who=(aiProv==='ag'&&AGOK)?'Antigravity':'Workers AI';
  aiSet('<div class="aimsg"><span class="ldot">'+(vision?('把這頁轉成圖，請 '+who+' 讀…'):(who+' 產生中…'))+'</span></div>');
  (vision?rasterPage(page,1100).catch(function(){return null;}):Promise.resolve(null))
    .then(function(img){return fetch('/api/insight',{method:'POST',headers:{'content-type':'application/json'},
      body:JSON.stringify({id:GID,page:page,kind:kind,image:img,force:!!force,provider:aiProv})}).then(function(r){return r.json();});})
    .then(function(d){if(seq!==aiSeq)return;aiQuota(d);if(typeof d.ag!=='undefined')aiProvAvail(d.ag);
      if(!d.ok){aiSet('<div class="aimsg"><span>'+esc(d.error||'產生失敗')+'</span><button class="btn" id="aiGo">再試一次</button></div>');$('aiGo').onclick=function(){aiGen(page,kind,seq,force,vision);};return;}
      aiMapPut(page,kind,d);aiShow(d);})
    .catch(function(e){if(seq===aiSeq)aiSet('<div class="aimsg">產生失敗：'+esc(String(e&&e.message||e))+'</div>');});}
// 「這一頁還沒有 X」在沒產生過的頁之間是同一句話，所以只有 kind／讀圖與否變了才
// 重畫；其餘情況只把按鈕的 onclick 換成新的頁碼，畫面完全不動。
function aiEmpty(page,kind,seq,vision){
  var k='empty:'+kind+':'+(vision?'v':'t');
  if(aiBodyKey!==k)
    aiSet('<div class="aimsg aiquiet"><span>這一頁還沒有「'+esc(aiLabel(kind))+'」</span>'
      +'<button class="btn" id="aiGo">產生'+(vision?'（讀圖）':'')+'</button></div>',k);
  else clearTimeout(aiPend);
  var go=$('aiGo');if(go)go.onclick=function(){aiGen(page,kind,seq,false,vision);};}
// 整份的已存內容與讀圖清單，開面板時一次抓完（/api/insight-map），之後翻頁只查
// 這裡，不再打網路——所以不會再有「讀取中…」閃一下才變成「這一頁還沒有…」。
var AIMAP=null,aiMapPend=null;
function aiMapKey(page,kind){return page+':'+kind;}
function aiMapLoad(){
  if(aiMapPend)return aiMapPend;
  aiMapPend=fetch('/api/insight-map?id='+encodeURIComponent(GID))
    .then(function(r){return r.json();}).then(function(d){
      if(!d||!d.ok)throw new Error(d&&d.error||'map failed');
      var rows={};for(var i=0;i<(d.rows||[]).length;i++){var r=d.rows[i];rows[aiMapKey(r.page,r.kind)]=r;}
      var vis={};for(var j=0;j<(d.vision||[]).length;j++)vis[d.vision[j]]=1;
      AIMAP={rows:rows,vision:vis};
      aiQuota(d);if(typeof d.ag!=='undefined')aiProvAvail(d.ag);
      return AIMAP;})
    .catch(function(){aiMapPend=null;return null;});
  return aiMapPend;}
// 產生完就順手更新本地的 map，翻走再翻回來不用重抓。
function aiMapPut(page,kind,d){if(!AIMAP)return;
  AIMAP.rows[aiMapKey(page,kind)]={page:page,kind:kind,bullets:d.bullets,src:d.src,model:d.model};}
function aiLoad(force){
  if($('aipane').hidden)return;
  var page=cur,kind=aiKind,seq=++aiSeq;
  aiPage=page;$('aipg').textContent='p.'+page;$('aisrc').hidden=true;
  // map 在手就直接畫，零往返、零載入狀態。
  if(AIMAP&&!force){
    var hit=AIMAP.rows[aiMapKey(page,kind)];
    if(hit){aiShow({bullets:hit.bullets,src:hit.src,model:hit.model,cached:true});return;}
    var vis=!!AIMAP.vision[page];
    if(aiAuto){aiGen(page,kind,seq,false,vis);return;}
    aiEmpty(page,kind,seq,vis);return;
  }
  aiLoading('讀取中…');
  fetch('/api/insight?id='+encodeURIComponent(GID)+'&page='+page+'&kind='+kind+'&provider='+aiProv)
    .then(function(r){return r.json();}).then(function(d){
      if(seq!==aiSeq)return;
      aiQuota(d);if(typeof d.ag!=='undefined')aiProvAvail(d.ag);
      if(d.cached&&!force){aiShow(d);return;}
      // 重做已快取的頁時沿用上次的來源；沒快取就照後端的判斷。
      var vision=d.cached?(d.src==='vision'):!!d.vision;
      if(force||aiAuto){aiGen(page,kind,seq,force,vision);return;}
      aiEmpty(page,kind,seq,vision);})
    .catch(function(e){if(seq===aiSeq)aiSet('<div class="aimsg">讀取失敗：'+esc(String(e&&e.message||e))+'</div>');});}
// 有 map 時畫面是免費的，等 200ms 就好；要自動產生才維持 700ms，免得翻太快亂燒額度。
function aiOnPage(){if($('aipane').hidden||aiSavedOn)return;clearTimeout(aiTimer);if(cur===aiPage)return;
  aiTimer=setTimeout(function(){aiLoad(false);},(AIMAP&&!aiAuto)?200:700);}
$('aiBtn').onclick=function(){if(!showPane('ai'))return;
  aiPage=0;
  // 開面板時付一次往返把整份抓進來；之後翻頁都是記憶體查表。
  if(!AIMAP)aiSet('<div class="aimsg"><span class="ldot">讀取中…</span></div>','load');
  aiMapLoad().then(function(){aiLoad(false);});};
// 已存重點清單：哪一份、第幾頁、什麼內容。全部來自 D1，翻頁不會掉。
$('aiSaved').innerHTML=svg('archive');
var aiSavedOn=false;
function aiSavedRender(rows,scopeAll){
  if(!rows.length){aiSet('<div class="aimsg">'+(scopeAll?'目前整站還沒有存過任何重點。':'這一份還沒有存過重點。')+'</div>');return;}
  var h='<div class="aisvbar"><button class="btn'+(scopeAll?'':' on')+'" id="aiScopeOne">本份</button>'
    +'<button class="btn'+(scopeAll?' on':'')+'" id="aiScopeAll">全部</button>'
    +'<span class="sp" style="flex:1"></span><button class="btn" id="aiExport">匯出 .md</button></div><div class="aisv">';
  var lastGid='';
  for(var i=0;i<rows.length;i++){var r=rows[i];
    if(scopeAll&&r.gid!==lastGid){lastGid=r.gid;h+='<div class="aisvgid">'+esc(r.gid)+'</div>';}
    h+='<button class="aisvit" data-p="'+r.page+'" data-k="'+esc(r.kind)+'" data-g="'+esc(r.gid)+'">'
      +'<span class="pg">p.'+r.page+'</span><span class="kd">'+esc(aiLabel(r.kind))+'</span>'
      +'<span class="tx">'+esc((r.bullets||[])[0]||'')+'</span></button>';}
  aiSet(h+'</div>');
  $('aiScopeOne').onclick=function(){aiSavedLoad(false);};
  $('aiScopeAll').onclick=function(){aiSavedLoad(true);};
  $('aiExport').onclick=function(){aiExport(rows,scopeAll);};
  var its=$('aibody').querySelectorAll('.aisvit');
  for(var k=0;k<its.length;k++)(function(b){b.onclick=function(){
    var g=b.getAttribute('data-g');
    if(g!==GID){location.href='/preview/'+encodeURIComponent(g)+'?page='+b.getAttribute('data-p');return;}
    aiKind=b.getAttribute('data-k');try{localStorage.setItem('nccnaikind',aiKind);}catch(e){}
    aiMarkTabs();aiSavedOn=false;$('aiSaved').classList.remove('on');
    jumpTo(+b.getAttribute('data-p'),true);aiPage=0;aiLoad(false);};})(its[k]);}
function aiSavedLoad(scopeAll){
  aiSet('<div class="aimsg"><span class="ldot">讀取已存清單…</span></div>');
  fetch('/api/insights?'+(scopeAll?'all=1':'id='+encodeURIComponent(GID)))
    .then(function(r){return r.json();}).then(function(d){
      if(!aiSavedOn)return;
      $('aipg').textContent='已存 '+(d.count||0)+' 則';$('aisrc').hidden=true;
      aiSavedRender(d.rows||[],scopeAll);})
    .catch(function(e){aiSet('<div class="aimsg">讀取失敗：'+esc(String(e&&e.message||e))+'</div>');});}
function aiExport(rows,scopeAll){
  var out=['# NCCN AI 重點'+(scopeAll?'（全部）':'（'+GNAME+'）'),'','匯出時間：'+new Date().toISOString(),''];
  var lastKey='';
  for(var i=0;i<rows.length;i++){var r=rows[i];var key=r.gid+'/'+r.page;
    if(key!==lastKey){lastKey=key;
      out.push('','## '+r.gid+' — p.'+r.page,'',
        location.origin+'/preview/'+encodeURIComponent(r.gid)+'?page='+r.page,'');}
    out.push('### '+aiLabel(r.kind)+'  ('+(r.src==='vision'?'讀圖':'文字')+')','');
    for(var j=0;j<(r.bullets||[]).length;j++)out.push('- '+r.bullets[j]);
    out.push('');}
  var blob=new Blob([out.join(NL)],{type:'text/markdown;charset=utf-8'});
  dl2(URL.createObjectURL(blob),'NCCN-AI-'+(scopeAll?'all':GID)+'.md');}
$('aiSaved').onclick=function(){
  aiSavedOn=!aiSavedOn;$('aiSaved').classList.toggle('on',aiSavedOn);
  if(aiSavedOn)aiSavedLoad(false);else{aiPage=0;aiLoad(false);}};
$('aiRedo').onclick=function(){aiLoad(true);};
$('aiAuto').onchange=function(){aiAuto=this.checked;try{localStorage.setItem('nccnaiauto',aiAuto?'1':'0');}catch(e){}if(aiAuto)aiLoad(false);};
$('aiCopy').onclick=function(){var li=$('aibody').querySelectorAll('li');if(!li.length)return;
  var out=[];for(var i=0;i<li.length;i++)out.push('- '+li[i].textContent);
  var txt=GNAME+' p.'+aiPage+' — '+aiLabel(aiKind)+NL+out.join(NL);
  if(navigator.clipboard)navigator.clipboard.writeText(txt).catch(function(){});
  $('aiCopy').classList.add('on');setTimeout(function(){$('aiCopy').classList.remove('on');},900);};
})();
</script>
</body>
</html>`;
}
