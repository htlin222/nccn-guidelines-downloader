import { NAME_BY_ID, VALID_IDS } from "../data/guidelines.js";
import { escapeHtml } from "../lib/http.js";
import { tocGroups, tocBestIndex } from "../lib/toc.js";

export function renderViewer(id) {
	const name = NAME_BY_ID[id] || id;
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
  .tb .title{font-size:.88rem;font-weight:650;flex:1;min-width:70px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;letter-spacing:-.01em;}
  .tver{flex-shrink:0;font-size:.68rem;font-weight:700;padding:2px 7px;border-radius:999px;background:hsl(var(--accent));color:hsl(var(--muted-fg));letter-spacing:.02em;}
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
  .tocpane{width:290px;flex-shrink:0;overflow-y:auto;background:hsl(var(--bar));padding:6px;}
  .tocgrip{flex-shrink:0;width:10px;cursor:col-resize;display:flex;align-items:center;justify-content:center;color:hsl(var(--muted-fg));background:hsl(var(--bar));border-left:1px solid hsl(var(--border));}
  .tocgrip[hidden]{display:none;}
  .tocgrip:hover{background:hsl(var(--accent));color:hsl(var(--fg));}
  .tocgrip svg{width:14px;height:14px;pointer-events:none;}
  .tocpane[hidden]{display:none;}
  .tochdr{font-size:.68rem;font-weight:700;color:hsl(var(--muted-fg));padding:8px 8px 6px;text-transform:uppercase;letter-spacing:.05em;}
  .tochdr2{margin-top:6px;border-top:1px solid hsl(var(--border));}
  .tocitem{display:flex;gap:8px;align-items:baseline;justify-content:space-between;padding:5px 8px;border-radius:7px;text-decoration:none;color:hsl(var(--fg));font-size:.8rem;cursor:pointer;line-height:1.3;}
  .tocitem:hover{background:hsl(var(--accent));}
  .tocitem.l1{padding-left:22px;font-size:.76rem;color:hsl(var(--muted-fg));}
  .tocitem.cur{background:hsl(var(--accent));color:#3b82f6;font-weight:600;}
  .tocitem .tms{flex-shrink:0;font-size:.66rem;color:hsl(var(--muted-fg));font-weight:600;}
  @media (max-width:640px){ .tocpane{position:absolute;right:0;top:0;height:100%;z-index:9;box-shadow:-2px 0 14px rgba(0,0,0,.35);} }
  .aipane{width:340px;flex-shrink:0;overflow-y:auto;background:hsl(var(--bar));border-left:1px solid hsl(var(--border));display:flex;flex-direction:column;}
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
  .aibar{height:3px;border-radius:999px;background:hsl(var(--accent));overflow:hidden;}
  .aibar i{display:block;height:100%;background:#3b82f6;width:0;transition:width .3s;}
  .aiauto{display:flex;align-items:center;gap:5px;cursor:pointer;user-select:none;}
  @media (max-width:640px){ .aipane{position:absolute;right:0;top:0;height:100%;z-index:9;width:min(340px,88vw);box-shadow:-2px 0 14px rgba(0,0,0,.35);} }
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
  .preview{max-width:min(72vw,520px);width:auto;border-radius:4px;box-shadow:0 6px 26px -8px rgba(0,0,0,.5);background:#fff;}
  .ldot{display:inline-flex;align-items:center;gap:8px;animation:pulse 1.2s ease-in-out infinite;}
  @keyframes pulse{0%,100%{opacity:.45}50%{opacity:1}}
  .modal{position:fixed;inset:0;background:rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center;z-index:50;padding:16px;}
  .modal[hidden]{display:none;}
  .sheet{background:hsl(var(--bar));color:hsl(var(--fg));border:1px solid hsl(var(--border));border-radius:14px;width:min(680px,100%);max-height:90vh;overflow:auto;padding:16px;display:flex;flex-direction:column;gap:10px;}
  .sheethead{display:flex;justify-content:space-between;align-items:center;font-size:.95rem;}
  .meta{font-size:.8rem;color:hsl(var(--muted-fg));}
  .snapimg{width:100%;border:1px solid hsl(var(--border));border-radius:8px;background:#fff;}
  .sheet textarea{width:100%;min-height:120px;border:1px solid hsl(var(--border));border-radius:8px;background:hsl(var(--bg));color:inherit;padding:10px;font-family:ui-monospace,monospace;font-size:.85rem;box-sizing:border-box;}
  .sheetfoot{display:flex;gap:8px;justify-content:flex-end;flex-wrap:wrap;}
  @media (max-width:640px){ .rail{position:absolute;z-index:9;height:100%;box-shadow:2px 0 14px rgba(0,0,0,.35);} }
</style>
</head>
<body>
<div class="tb">
  <a href="/" class="btn" id="back" title="回清單"></a>
  <button class="btn" id="railBtn" title="縮圖側欄"></button>
  <button class="btn" id="gridBtn" title="總覽所有頁面"></button>
  <span class="title">${escapeHtml(name)}</span><span class="tver" id="tver" hidden></span>
  <div class="grp"><button class="btn" id="histBack" title="回上一個位置"></button><button class="btn" id="histFwd" title="前往下一個位置"></button></div>
  <div class="grp"><button class="btn" id="prev" title="上一頁"></button>
    <input class="pageinput" id="pageNum" value="1" inputmode="numeric"><span class="pcount">/ <span id="pageCount">–</span></span>
    <button class="btn" id="next" title="下一頁"></button></div>
  <div class="grp"><button class="btn" id="zout" title="縮小"></button>
    <span class="zpct" id="zpct">–</span>
    <button class="btn" id="zin" title="放大"></button>
    <button class="btn" id="fit" title="符合寬度"></button></div>
  <button class="btn" id="findBtn" title="在本檔搜尋內文"></button>
  <button class="btn" id="snap" title="截圖成筆記"></button>
  <button class="btn" id="tocBtn" title="目錄（Discussion）" hidden></button>
  <button class="btn" id="aiBtn" title="AI 本頁重點"></button>
  <button class="btn" id="theme" title="切換主題"></button>
  <a class="btn dl" href="/dl/${encodeURIComponent(id)}"><span id="dlic"></span>下載</a>
</div>
<div class="findbar" id="findbar" hidden><span class="fi" id="findIcon"></span><input id="findInput" type="search" placeholder="在本檔搜尋內文（含藥名同義詞）…"><span class="fcount" id="findCount"></span><button class="btn" id="findPrev" title="上一個"></button><button class="btn" id="findNext" title="下一個"></button><button class="btn" id="findClose" title="關閉">✕</button></div>
<div class="body">
  <aside class="rail" id="rail"></aside>
  <div class="viewer" id="viewer"><div id="msg"><img id="preview" class="preview" src="/thumb/${encodeURIComponent(id)}" alt="" onerror="this.remove()"><div class="ldot">載入完整版 PDF…</div></div></div>
  <div class="tocgrip" id="tocgrip" hidden></div>
  <aside class="tocpane" id="tocpane" hidden></aside>
  <div class="tocgrip" id="aigrip" hidden></div>
  <aside class="aipane" id="aipane" hidden>
    <div class="aitabs" id="aitabs"></div>
    <div class="aihdr"><span id="aipg">p.–</span><span class="aisrc" id="aisrc" hidden></span><span class="sp"></span>
      <button class="btn" id="aiSaved" title="已存重點清單"></button>
      <button class="btn" id="aiCopy" title="複製條列"></button>
      <button class="btn" id="aiRedo" title="重新產生（覆蓋快取）"></button></div>
    <div class="aibody" id="aibody"></div>
    <div class="aifoot">
      <label class="aiauto"><input type="checkbox" id="aiAuto"> 翻頁時自動產生</label>
      <div class="aibar"><i id="aibarfill"></i></div>
      <span id="aiquota">額度 –</span>
      <span>AI 生成，僅供快速參考，臨床決策請以原文為準。</span>
    </div>
  </aside>
  <div id="gridView" class="gridview" hidden></div>
</div>
<div id="snapModal" class="modal" hidden><div class="sheet"><div class="sheethead"><b>頁面截圖筆記</b><button class="btn" id="snapClose">✕</button></div><div class="meta" id="snapMeta"></div><img id="snapImg" class="snapimg" alt="page"><textarea id="snapNote" placeholder="在這裡寫你的 Markdown 筆記…"></textarea><div class="sheetfoot"><button class="btn" id="snapPng">下載 PNG</button><button class="btn dl" id="snapMd">下載 Markdown 筆記</button></div></div></div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
<script>
// 根層 <id>.pdf 就是去掉頁首橫幅的版本，所以連截圖成筆記／總覽匯出的圖都不帶橫幅。
var PDF_URL='/pdf/${encodeURIComponent(id)}';
var GID=${JSON.stringify(id)};var GNAME=${JSON.stringify(name)};var VALIDS=${JSON.stringify(Object.fromEntries([...VALID_IDS].map((x) => [x, 1])))};
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
  archive:'<rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/>'
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
var hBack=[],hFwd=[],hlTerms=[],TOC=[],TOCR=[];var VERSION='';fetch('/api/r2-status').then(function(r){return r.json();}).then(function(d){var v=(d.versions||{})[GID];if(v){VERSION=v.v;var tv=document.getElementById('tver');if(tv){tv.textContent='v'+v.v;if(v.d)tv.title=v.d;tv.hidden=false;}}}).catch(function(){});
fetch('/api/toc?id='+encodeURIComponent(GID)).then(function(r){return r.json();}).then(function(d){TOC=(d&&d.length)?d:[];if(TOC.length){buildTOC();$('tocBtn').hidden=false;}}).catch(function(){});
// Pure helpers shared with the server + unit tests, injected verbatim.
var tocGroups=${tocGroups.toString()};
var tocBestIndex=${tocBestIndex.toString()};
function buildTOC(){var el=$('tocpane');var h='';TOCR=[];tocGroups(TOC).forEach(function(g,gi){h+='<div class="tochdr'+(gi>0?' tochdr2':'')+'">'+g.label+'</div>';g.items.forEach(function(e){TOCR.push(e);h+='<a class="tocitem l'+(e.l||0)+'" data-p="'+e.p+'">'+esc(e.t)+'<span class="tms">'+esc(e.ref||('MS-'+e.ms))+'</span></a>';});});el.innerHTML=h;el.addEventListener('click',function(ev){var a=ev.target.closest&&ev.target.closest('.tocitem');if(a){jumpTo(+a.getAttribute('data-p'),true);markTOC();}});}
function markTOC(){if(!TOCR.length)return;var it=$('tocpane').querySelectorAll('.tocitem');var pn=[];for(var i=0;i<it.length;i++)pn.push(+it[i].getAttribute('data-p'));var best=tocBestIndex(pn,cur);for(var j=0;j<it.length;j++)it[j].className='tocitem l'+((TOCR[j]||{}).l||0)+(j===best?' cur':'');var c=it[best];if(c)c.scrollIntoView({block:'nearest'});}
$('tocBtn').onclick=function(){var t=$('tocpane');var open=t.hidden;t.hidden=!open;$('tocgrip').hidden=!open;$('tocBtn').classList.toggle('on',open);if(open){aiClose();try{var w=parseInt(localStorage.getItem('nccntocw'),10);if(w>=200&&w<=700)t.style.width=w+'px';}catch(e){}markTOC();}if(fit)relayout();};
// 右側 pane 的拖曳把手（目錄與 AI 重點共用）。
function gripDrag(g,t,key,min,max){var drag=false,sx=0,sw=0;
  g.innerHTML=svg('gripv');
  g.addEventListener('mousedown',function(e){drag=true;sx=e.clientX;sw=t.getBoundingClientRect().width;document.body.style.userSelect='none';document.body.style.cursor='col-resize';e.preventDefault();});
  document.addEventListener('mousemove',function(e){if(!drag)return;var w=Math.max(min,Math.min(max,sw+(sx-e.clientX)));t.style.width=w+'px';});
  document.addEventListener('mouseup',function(){if(!drag)return;drag=false;document.body.style.userSelect='';document.body.style.cursor='';try{localStorage.setItem(key,parseInt(t.style.width,10)||min);}catch(e){}if(fit)relayout();});}
gripDrag($('tocgrip'),$('tocpane'),'nccntocw',200,700);
gripDrag($('aigrip'),$('aipane'),'nccnaiw',240,760);
function activeScale(){ if(fit&&pages.length){ var w=viewer.clientWidth-40; var pw=(pages[cur-1]||pages[0]).w; return Math.max(0.2,Math.min(w/pw,4)); } return scale; }
function setZpct(){ $('zpct').textContent=Math.round(activeScale()*100)+'%'; $('fit').className='btn'+(fit?' on':''); }

var io=new IntersectionObserver(function(es){es.forEach(function(e){ if(e.isIntersecting){renderPage(+e.target.dataset.i);} });},{root:viewer,rootMargin:'1000px 0px'});
function renderPage(i){ var p=pages[i]; if(!p||p.done)return; p.done=true;
  var sc=activeScale(); var vp=p.pg.getViewport({scale:sc});
  p.el.style.width=vp.width+'px';p.el.style.height=vp.height+'px';p.el.innerHTML='';
  var cv=document.createElement('canvas'); cv.width=Math.floor(vp.width*dpr);cv.height=Math.floor(vp.height*dpr);
  cv.style.width=vp.width+'px';cv.style.height=vp.height+'px'; p.el.appendChild(cv);
  p.pg.render({canvasContext:cv.getContext('2d'),viewport:vp,transform:dpr!==1?[dpr,0,0,dpr,0,0]:null});
  var tl=document.createElement('div'); tl.className='textLayer'; tl.style.setProperty('--scale-factor',sc); p.el.appendChild(tl); p.el.style.setProperty('--scale-factor',sc);
  p.pg.getTextContent().then(function(tc){ try{ var td=[]; var tk=pdfjsLib.renderTextLayer({textContent:tc,container:tl,viewport:vp,textDivs:td}); (tk&&tk.promise?tk.promise:Promise.resolve()).then(function(){ hlOne(tl); }).catch(function(){}); }catch(e){} }).catch(function(){});
  var al=document.createElement('div'); al.className='annotationLayer'; p.el.appendChild(al);
  p.pg.getAnnotations().then(function(anns){ anns.forEach(function(a){ if(a.subtype!=='Link')return; var v=vp.convertToViewportRectangle(a.rect); var x=Math.min(v[0],v[2]),y=Math.min(v[1],v[3]),w=Math.abs(v[2]-v[0]),h=Math.abs(v[3]-v[1]); var L=document.createElement('a'); L.style.cssText='left:'+x+'px;top:'+y+'px;width:'+w+'px;height:'+h+'px;'; if(a.url){var _u=a.url,_mk='/physician_gls/pdf/',_ix=_u.indexOf(_mk),_id=null;if(_ix>=0){var _r=_u.slice(_ix+_mk.length),_d=_r.indexOf('.pdf');if(_d>=0){var _c=_r.slice(0,_d);if(VALIDS[_c])_id=_c;}}if(_id){L.href='/preview/'+encodeURIComponent(_id);L.title='本站開啟：'+_id;}else{L.href=_u;L.target='_blank';L.rel='noopener';}}else if(a.dest){L.href='#';(function(dest){L.addEventListener('click',function(e){e.preventDefault();var pr=(typeof dest==='string')?pdfDoc.getDestination(dest):Promise.resolve(dest);Promise.resolve(pr).then(function(dd){if(!dd||!dd[0])return;pdfDoc.getPageIndex(dd[0]).then(function(idx){jumpTo(idx+1,true);});});});})(a.dest);} al.appendChild(L); }); }).catch(function(){});
}
function relayout(){ var sc=activeScale(); pages.forEach(function(p){ p.done=false; p.el.style.width=(p.w*sc)+'px'; p.el.style.height=(p.h*sc)+'px'; p.el.innerHTML=''; io.unobserve(p.el); io.observe(p.el); }); setZpct(); }
function scrollToPage(n){ if(pages[n-1]) pages[n-1].el.scrollIntoView({block:'start'}); }
function spanHit(t){t=(t||'').toLowerCase();for(var i=0;i<hlTerms.length;i++){if(t.indexOf(hlTerms[i])>=0)return true;}return false;}
function hlSpans(td){if(!hlTerms.length)return;for(var i=0;i<td.length;i++){if(td[i]&&spanHit(td[i].textContent))td[i].classList.add('hl');}}
function hlOne(tl){if(!tl)return;var sp=tl.querySelectorAll('span');for(var i=0;i<sp.length;i++){if(hlTerms.length&&spanHit(sp[i].textContent))sp[i].classList.add('hl');else sp[i].classList.remove('hl');}}
function applyHighlights(){for(var k=0;k<pages.length;k++){if(!pages[k].el)continue;var sp=pages[k].el.querySelectorAll('.textLayer span');for(var j=0;j<sp.length;j++){if(hlTerms.length&&spanHit(sp[j].textContent))sp[j].classList.add('hl');else sp[j].classList.remove('hl');}}}
function setHL(terms){hlTerms=(terms||[]).map(function(t){return String(t).toLowerCase();});applyHighlights();}
function jumpTo(n,rec){ if(n<1||n>pages.length)return; if(rec){hBack.push(cur);hFwd=[];} cur=n; $('pageNum').value=n; scrollToPage(n); try{localStorage.setItem('nccnpg:'+GID,n);}catch(e){} updateHist(); markRail(); if(TOC.length)markTOC(); aiOnPage(); }
function updateHist(){ $('histBack').classList.toggle('off',!hBack.length); $('histFwd').classList.toggle('off',!hFwd.length); }
function markRail(){ var items=rail.children; for(var k=0;k<items.length;k++){ items[k].className='thumb'+(k===cur-1?' cur':''); } var c=items[cur-1]; if(c) c.scrollIntoView({block:'nearest'}); }
function updateCur(){ if(!pages.length)return; var vr=viewer.getBoundingClientRect(); var line=vr.top+vr.height*0.3; var best=1;
  for(var k=0;k<pages.length;k++){ if(pages[k].el.getBoundingClientRect().top<=line) best=k+1; else break; }
  if(best!==cur){ cur=best; $('pageNum').value=cur; markRail(); if(TOC.length)markTOC(); aiOnPage(); try{localStorage.setItem('nccnpg:'+GID,cur);}catch(e){} } }
var ticking=false;
viewer.addEventListener('scroll',function(){ if(!ticking){ ticking=true; requestAnimationFrame(function(){ updateCur(); ticking=false; }); } });

pdfjsLib.getDocument({url:PDF_URL}).promise.then(function(d){ pdfDoc=d; $('pageCount').textContent=d.numPages;
  var chain=Promise.resolve();
  for(var n=1;n<=d.numPages;n++){ (function(n){ chain=chain.then(function(){ return d.getPage(n).then(function(pg){
    var vp=pg.getViewport({scale:1}); var el=document.createElement('div'); el.className='page'; el.dataset.i=n-1;
    viewer.appendChild(el); var idx=pages.length; pages.push({pg:pg,w:vp.width,h:vp.height,el:el,done:false});
    var tb=document.createElement('button'); tb.className='thumb'; tb.dataset.i=n-1; tb.style.aspectRatio=vp.width+'/'+vp.height; tb.innerHTML='<span class="pn">'+n+'</span>';
    tb.onclick=function(){ jumpTo(idx+1,true); }; rail.appendChild(tb);
  }); }); })(n); }
  chain.then(function(){ msg.style.display='none'; relayout(); buildThumbs(); renderPage(0); if(pages[1])renderPage(1); var pp=parseInt(new URLSearchParams(location.search).get('page'),10); if(!(pp>=1)){try{pp=parseInt(localStorage.getItem('nccnpg:'+GID),10);}catch(e){}} if(pp>=2&&pp<=pages.length){cur=pp;$('pageNum').value=pp;scrollToPage(pp);} updateHist(); var _q=new URLSearchParams(location.search).get('q'); if(_q){$('findInput').value=_q;$('findbar').hidden=false;runFind(!(pp>=1));} });
}).catch(function(e){ msg.textContent='無法載入 PDF：'+(e&&e.message?e.message:e)+'（可能尚未快取或 cookie 過期）'; });

var tio=new IntersectionObserver(function(es){es.forEach(function(e){ if(e.isIntersecting){ thumbRender(+e.target.dataset.i); tio.unobserve(e.target);} });},{root:rail,rootMargin:'400px 0px'});
function buildThumbs(){ for(var k=0;k<rail.children.length;k++) tio.observe(rail.children[k]); markRail(); }
function thumbRender(i){ var p=pages[i]; if(!p)return; var vp=p.pg.getViewport({scale:130/p.w}); var cv=document.createElement('canvas');
  cv.width=vp.width;cv.height=vp.height; var btn=rail.children[i]; btn.insertBefore(cv,btn.firstChild); p.pg.render({canvasContext:cv.getContext('2d'),viewport:vp}); }

$('prev').onclick=function(){ if(cur>1) scrollToPage(cur-1); };
$('next').onclick=function(){ if(cur<pages.length) scrollToPage(cur+1); };
$('pageNum').addEventListener('change',function(){ var n=parseInt(this.value,10); if(n>=1&&n<=pages.length) jumpTo(n,true); });
$('zin').onclick=function(){ var b=activeScale(); fit=false; scale=Math.min(b+0.15,4); relayout(); };
$('zout').onclick=function(){ var b=activeScale(); fit=false; scale=Math.max(b-0.15,0.3); relayout(); };
$('fit').onclick=function(){ fit=!fit; if(!fit) scale=activeScale(); relayout(); };
$('railBtn').onclick=function(){ rail.classList.toggle('hide'); if(fit) relayout(); };
$('histBack').onclick=function(){ if(!hBack.length)return; hFwd.push(cur); var n=hBack.pop(); cur=n; $('pageNum').value=n; scrollToPage(n); updateHist(); markRail(); if(TOC.length)markTOC(); };
$('histFwd').onclick=function(){ if(!hFwd.length)return; hBack.push(cur); var n=hFwd.pop(); cur=n; $('pageNum').value=n; scrollToPage(n); updateHist(); markRail(); if(TOC.length)markTOC(); };
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
$('snap').onclick=function(){var c=makeSnapCanvas();var img=$('snapImg');if(c){img.src=c.toDataURL('image/png');}else{img.removeAttribute('src');}$('snapMeta').textContent=GNAME+'  ·  '+(VERSION?('v'+VERSION+'  ·  '):'')+'p.'+cur;$('snapModal').hidden=false;};
$('snapClose').onclick=function(){$('snapModal').hidden=true;};
$('snapModal').addEventListener('click',function(e){if(e.target===$('snapModal'))$('snapModal').hidden=true;});
$('snapPng').onclick=function(){var u=$('snapImg').getAttribute('src');if(u)dl2(u,'NCCN-'+GID+'-p'+cur+'.png');};
$('snapMd').onclick=function(){var u=$('snapImg').getAttribute('src')||'';var note=$('snapNote').value;var url=location.origin+'/preview/'+encodeURIComponent(GID)+'?page='+cur;var lines=['---','guideline: '+GNAME.split('"').join(''),'id: '+GID,'version: '+(VERSION||''),'page: '+cur,'source: '+url,'captured: '+new Date().toISOString(),'---','','# '+GNAME+' — p.'+cur+(VERSION?(' (v'+VERSION+')'):''),'','!['+GNAME+' p.'+cur+']('+u+')','',note,''];var md=lines.join(NL);var blob=new Blob([md],{type:'text/markdown;charset=utf-8'});dl2(URL.createObjectURL(blob),'NCCN-'+GID+'-p'+cur+'.md');};
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
function gcellRender(i){var p=pages[i];if(!p||p.gdone)return;p.gdone=true;var vp=p.pg.getViewport({scale:220/p.w});var cv=document.createElement('canvas');cv.width=vp.width;cv.height=vp.height;var cell=$('gridView').children[i];if(cell)cell.insertBefore(cv,cell.firstChild);p.pg.render({canvasContext:cv.getContext('2d'),viewport:vp});}
var gridBuilt=false;
function buildGridView(){var gv=$('gridView');var h='';for(var i=0;i<pages.length;i++){h+='<button class="gcell" data-i="'+i+'"><span class="pn">'+(i+1)+'</span></button>';}gv.innerHTML=h;for(var k=0;k<gv.children.length;k++){var c=gv.children[k];c.style.aspectRatio=pages[k].w+'/'+pages[k].h;gio.observe(c);(function(idx,el){el.onclick=function(){closeGrid();jumpTo(idx+1,true);};})(k,c);}gridBuilt=true;}
function markGrid(){var ch=$('gridView').children;for(var i=0;i<ch.length;i++){ch[i].className='gcell'+(i===cur-1?' cur':'');}var c=ch[cur-1];if(c)c.scrollIntoView({block:'nearest'});}
function openGrid(){if(!pages.length)return;if(!gridBuilt)buildGridView();markGrid();$('gridView').hidden=false;$('gridBtn').classList.add('on');}
function closeGrid(){$('gridView').hidden=true;$('gridBtn').classList.remove('on');}
$('gridBtn').onclick=function(){if($('gridView').hidden)openGrid();else closeGrid();};
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!$('gridView').hidden)closeGrid();});

// ── AI 本頁重點 ───────────────────────────────────────────────────────────────
// 右側 pane 跟著目前頁走，四種格式各自獨立生成與快取（/api/insight）。
// GET 只讀快取所以翻頁時可以無限打；真正花 Workers AI 額度的生成走 POST，
// 預設要按鈕確認（「翻頁時自動產生」打開才會跟著翻頁自動跑）。
// 演算法流程圖頁後端會回 vision:true，前端就把該頁 rasterize 成 JPEG 一起送，
// 讓多模態模型直接讀圖——比抽字穩，方框與箭頭的決策路徑才讀得出來。
var AIKINDS=[['key','重點整理'],['hy','High Yield'],['phrase','病歷片語'],['sdm','SDM']];
var aiKind='key',aiSeq=0,aiTimer=null,aiPage=0,aiAuto=false;
$('aiBtn').innerHTML=svg('spark');$('aiRedo').innerHTML=svg('redo');$('aiCopy').innerHTML=svg('copy');
try{var _sk=localStorage.getItem('nccnaikind');if(_sk)aiKind=_sk;aiAuto=localStorage.getItem('nccnaiauto')==='1';}catch(e){}
$('aiAuto').checked=aiAuto;
function aiLabel(k){for(var i=0;i<AIKINDS.length;i++)if(AIKINDS[i][0]===k)return AIKINDS[i][1];return k;}
function aiSet(h){$('aibody').innerHTML=h;}
function aiMd(s){return esc(s).split('**').map(function(x,i){return i%2?'<b>'+x+'</b>':x;}).join('').replace(/\`([^\`]+)\`/g,'<code>$1</code>');}
(function(){var h='';for(var i=0;i<AIKINDS.length;i++)h+='<button class="aitab" data-k="'+AIKINDS[i][0]+'">'+AIKINDS[i][1]+'</button>';$('aitabs').innerHTML=h;
  $('aitabs').addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('.aitab');if(!b)return;aiKind=b.getAttribute('data-k');try{localStorage.setItem('nccnaikind',aiKind);}catch(e){}aiMarkTabs();
    if(aiSavedOn){aiSavedOn=false;$('aiSaved').classList.remove('on');aiPage=0;} // 點分頁就離開清單模式
    aiLoad(false);});})();
function aiMarkTabs(){var t=$('aitabs').children;for(var i=0;i<t.length;i++)t[i].className='aitab'+(t[i].getAttribute('data-k')===aiKind?' on':'');}
aiMarkTabs();
function aiQuota(q){if(!q||!q.cap)return;var pct=Math.min(100,Math.round(q.used/q.cap*100));
  $('aibarfill').style.width=pct+'%';
  $('aiquota').textContent='今日額度 '+q.used+' / '+q.cap+' neurons（'+pct+'%）· UTC 00:00 重置';}
function aiShow(d){var b=d.bullets||[];var s=$('aisrc');s.hidden=false;s.textContent=(d.src==='vision'?'讀圖':'文字')+(d.cached?' · 快取':'');
  if(!b.length){aiSet('<div class="aimsg">（這一頁沒有可整理的內容）</div>');return;}
  var h='<ul>';for(var i=0;i<b.length;i++)h+='<li>'+aiMd(b[i])+'</li>';aiSet(h+'</ul>');}
// 直接從 pdf.js 的 page object 離屏重繪，不依賴畫面上那張 canvas 有沒有渲染好。
function rasterPage(n,maxW){return new Promise(function(res,rej){
  var p=pages[n-1];if(!p||!p.pg)return rej(new Error('page not ready'));
  var vp=p.pg.getViewport({scale:Math.min(2.5,(maxW||1100)/p.w)});
  var cv=document.createElement('canvas');cv.width=Math.floor(vp.width);cv.height=Math.floor(vp.height);
  var ctx=cv.getContext('2d');ctx.fillStyle='#fff';ctx.fillRect(0,0,cv.width,cv.height);
  var t=p.pg.render({canvasContext:ctx,viewport:vp});
  (t&&t.promise?t.promise:Promise.resolve()).then(function(){var u=cv.toDataURL('image/jpeg',.82);res(u.slice(u.indexOf(',')+1));}).catch(rej);});}
// 不設 busy 鎖：翻頁翻很快時舊的請求靠 aiSeq 判斷過期直接忽略，而它的結果後端
// 還是會寫進快取，所以不算白花——加鎖反而會讓新頁卡在「產生中」的畫面出不來。
function aiGen(page,kind,seq,force,vision){
  aiSet('<div class="aimsg"><span class="ldot">'+(vision?'把這頁轉成圖，請 AI 讀…':'AI 產生中…')+'</span></div>');
  (vision?rasterPage(page,1100).catch(function(){return null;}):Promise.resolve(null))
    .then(function(img){return fetch('/api/insight',{method:'POST',headers:{'content-type':'application/json'},
      body:JSON.stringify({id:GID,page:page,kind:kind,image:img,force:!!force})}).then(function(r){return r.json();});})
    .then(function(d){if(seq!==aiSeq)return;if(d.quota)aiQuota(d.quota);
      if(!d.ok){aiSet('<div class="aimsg"><span>'+esc(d.error||'產生失敗')+'</span><button class="btn" id="aiGo">再試一次</button></div>');$('aiGo').onclick=function(){aiGen(page,kind,seq,force,vision);};return;}
      aiShow(d);})
    .catch(function(e){if(seq===aiSeq)aiSet('<div class="aimsg">產生失敗：'+esc(String(e&&e.message||e))+'</div>');});}
function aiLoad(force){
  if($('aipane').hidden)return;
  var page=cur,kind=aiKind,seq=++aiSeq;
  aiPage=page;$('aipg').textContent='p.'+page;$('aisrc').hidden=true;
  aiSet('<div class="aimsg"><span class="ldot">讀取中…</span></div>');
  fetch('/api/insight?id='+encodeURIComponent(GID)+'&page='+page+'&kind='+kind)
    .then(function(r){return r.json();}).then(function(d){
      if(seq!==aiSeq)return;
      if(d.quota)aiQuota(d.quota);
      if(d.cached&&!force){aiShow(d);return;}
      // 重做已快取的頁時沿用上次的來源；沒快取就照後端的判斷。
      var vision=d.cached?(d.src==='vision'):!!d.vision;
      if(force||aiAuto){aiGen(page,kind,seq,force,vision);return;}
      aiSet('<div class="aimsg"><span>這一頁還沒有「'+esc(aiLabel(kind))+'」。</span><button class="btn dl" id="aiGo">產生本頁'+(vision?'（讀圖）':'')+'</button></div>');
      $('aiGo').onclick=function(){aiGen(page,kind,seq,false,vision);};})
    .catch(function(e){if(seq===aiSeq)aiSet('<div class="aimsg">讀取失敗：'+esc(String(e&&e.message||e))+'</div>');});}
function aiOnPage(){if($('aipane').hidden||aiSavedOn)return;clearTimeout(aiTimer);if(cur===aiPage)return;aiTimer=setTimeout(function(){aiLoad(false);},700);}
function aiClose(){$('aipane').hidden=true;$('aigrip').hidden=true;$('aiBtn').classList.remove('on');}
$('aiBtn').onclick=function(){var a=$('aipane');
  if(!a.hidden){aiClose();if(fit)relayout();return;}
  $('tocpane').hidden=true;$('tocgrip').hidden=true;$('tocBtn').classList.remove('on'); // 右邊一次只留一個 pane
  try{var w=parseInt(localStorage.getItem('nccnaiw'),10);if(w>=240&&w<=760)a.style.width=w+'px';}catch(e){}
  a.hidden=false;$('aigrip').hidden=false;$('aiBtn').classList.add('on');
  if(fit)relayout();aiPage=0;aiLoad(false);};
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
