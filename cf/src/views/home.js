import { GUIDELINES } from "../data/guidelines.js";
import { ALGORITHMS, ALGO_CATS } from "../data/algorithms.js";
import { CATS } from "../data/categories.js";
import { PER_DAY, BUILD_TIME } from "../lib/constants.js";
import { escapeHtml } from "../lib/http.js";
import { citeText, copyText, showToast, TOAST_CSS } from "../lib/cite.js";
import { fmtEvent, relTime, staleEvent } from "../lib/notify.js";
import { hayHit } from "../lib/search.js";

export function renderPage(request) {
	const user = request.headers.get("cf-access-authenticated-user-email") || "";
	// 兩份目錄各自成組地送到前端。合成一個陣列再靠 src 欄位篩看起來更省，但每次切
	// 分頁都要重掃 178 筆——分開存，切換就只是換一個指標。
	const srcs = JSON.stringify({
		nccn: { label: "NCCN", title: "NCCN Guidelines", data: GUIDELINES, cats: CATS },
		mda: {
			label: "MD Anderson",
			title: "Clinical Management Algorithms",
			data: ALGORITHMS,
			cats: ALGO_CATS,
		},
	});
	return `<!doctype html>
<html lang="zh-Hant">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>NCCN Guidelines</title>
<meta name="description" content="NCCN clinical practice guidelines — cached, previewable, downloadable.">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="manifest" href="/manifest.webmanifest">
<meta name="theme-color" content="#0b0f19">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="NCCN">
<!-- data-inv 跟閱讀器共用 localStorage 的 nccninv，但首頁不放切換鈕：偏好只在「真的
     在讀 PDF」的地方調（閱讀器工具列的 ◐），首頁只是照著跟。這裡要在 <head> 就決定，
     不然卡片縮圖是 lazy <img>、暗色模式下會先閃一排白圖再翻黑。 -->
<script>(function(){try{var t=localStorage.getItem('theme');if(t)document.documentElement.dataset.theme=t;
var d=(t||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'))==='dark';
document.documentElement.dataset.inv=(d&&localStorage.getItem('nccninv')!=='0')?'1':'0';}catch(e){}})();</script>
<style>
  :root{
    --background:0 0% 100%; --foreground:240 10% 3.9%;
    --card:0 0% 100%; --card-foreground:240 10% 3.9%;
    --muted:240 4.8% 95.9%; --muted-foreground:240 3.8% 46.1%;
    --border:240 5.9% 90%; --input:240 5.9% 90%;
    --primary:240 5.9% 10%; --primary-foreground:0 0% 98%;
    --accent:240 4.8% 95.9%; --accent-foreground:240 5.9% 10%;
    --ring:240 5% 65%; --radius:.6rem;
  }
  :root[data-theme="dark"]{
    --background:240 10% 3.9%; --foreground:0 0% 98%;
    --card:240 8% 7%; --card-foreground:0 0% 98%;
    --muted:240 3.7% 15.9%; --muted-foreground:240 5% 64.9%;
    --border:240 3.7% 16%; --input:240 3.7% 16%;
    --primary:0 0% 98%; --primary-foreground:240 5.9% 10%;
    --accent:240 3.7% 15.9%; --accent-foreground:0 0% 98%;
    --ring:240 4.9% 50%;
  }
  @media (prefers-color-scheme:dark){ :root:not([data-theme="light"]){
    --background:240 10% 3.9%; --foreground:0 0% 98%;
    --card:240 8% 7%; --card-foreground:0 0% 98%;
    --muted:240 3.7% 15.9%; --muted-foreground:240 5% 64.9%;
    --border:240 3.7% 16%; --input:240 3.7% 16%;
    --primary:0 0% 98%; --primary-foreground:240 5.9% 10%;
    --accent:240 3.7% 15.9%; --accent-foreground:0 0% 98%;
    --ring:240 4.9% 50%;
  }}
  *{box-sizing:border-box;}
  body{margin:0;overflow-x:hidden;background:hsl(var(--background));color:hsl(var(--foreground));
    font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","PingFang TC","Microsoft JhengHei",sans-serif;
    -webkit-font-smoothing:antialiased;}
  svg{width:1em;height:1em;stroke:currentColor;stroke-width:2;fill:none;stroke-linecap:round;stroke-linejoin:round;}
  header{position:sticky;top:0;z-index:20;backdrop-filter:saturate(180%) blur(12px);
    background:hsl(var(--background)/.8);border-bottom:1px solid hsl(var(--border));}
  .wrap{max-width:1180px;margin:0 auto;padding:0 20px;}
  .htop{display:flex;align-items:center;gap:14px;padding:14px 0 12px;}
  .navlink{display:inline-flex;align-items:center;gap:6px;height:36px;padding:0 13px;border-radius:10px;
    text-decoration:none;font-size:.84rem;font-weight:600;white-space:nowrap;
    background:transparent;border:1px solid hsl(var(--border));color:hsl(var(--foreground));}
  .navlink:hover{background:hsl(var(--accent));}
  @media(max-width:560px){.navlink span{display:none;}}
  .brand{display:flex;align-items:center;gap:10px;font-weight:700;font-size:1.12rem;letter-spacing:-.01em;}
  .brand .logo{display:grid;place-items:center;width:32px;height:32px;border-radius:9px;
    background:hsl(var(--primary));color:hsl(var(--primary-foreground));font-size:16px;}
  .brand small{font-weight:500;font-size:.72rem;color:hsl(var(--muted-foreground));display:block;letter-spacing:0;}
  .spacer{flex:1;}
  /* 來源分頁。刻意做成底線式而不是又一排 pill：底下的分類 chip 已經是 pill 了，
     兩排長得一樣的東西並排，看不出哪一排是「換一整套目錄」、哪一排是「篩這一套」。 */
  .srctabs{display:flex;gap:2px;border-bottom:1px solid hsl(var(--border));margin-bottom:12px;}
  .srctab{position:relative;font:inherit;font-size:.86rem;font-weight:600;cursor:pointer;
    border:0;background:transparent;color:hsl(var(--muted-foreground));padding:8px 14px 10px;}
  .srctab:hover{color:hsl(var(--foreground));}
  .srctab.act{color:hsl(var(--foreground));}
  .srctab.act::after{content:"";position:absolute;left:10px;right:10px;bottom:-1px;height:2px;
    border-radius:2px;background:hsl(var(--primary));}
  .srctab b{font-weight:600;margin-left:5px;color:hsl(var(--muted-foreground));font-size:.76rem;}
  .iconbtn{display:grid;place-items:center;width:38px;height:38px;border-radius:10px;cursor:pointer;flex:0 0 auto;
    border:1px solid hsl(var(--border));background:hsl(var(--card));color:hsl(var(--foreground));font-size:18px;}
  .iconbtn:hover{background:hsl(var(--accent));}
  .searchrow{padding-bottom:14px;position:relative;}
  .searchrow .si{position:absolute;left:14px;top:50%;transform:translateY(-50%);font-size:17px;color:hsl(var(--muted-foreground));pointer-events:none;margin-top:-7px;}
  input[type=search]{width:100%;height:42px;padding:0 14px 0 40px;font-size:.95rem;border-radius:12px;
    border:1px solid hsl(var(--input));background:hsl(var(--card));color:inherit;outline:none;}
  input[type=search]:focus{border-color:hsl(var(--ring));box-shadow:0 0 0 3px hsl(var(--ring)/.25);}
  .filters{display:flex;flex-wrap:wrap;gap:7px;padding:2px 0 12px;}
  .filters::-webkit-scrollbar{display:none;}
  .fchip{display:inline-flex;align-items:center;gap:5px;white-space:nowrap;flex:0 0 auto;font:inherit;font-size:.78rem;cursor:pointer;border:1px solid hsl(var(--border));background:hsl(var(--card));color:hsl(var(--foreground));border-radius:999px;padding:5px 11px;}
  .fchip svg{color:var(--cc,currentColor);}
  .fchip b{font-weight:600;color:hsl(var(--muted-foreground));}
  .fchip:hover{background:hsl(var(--accent));}
  .fchip.act{background:hsl(var(--primary));color:hsl(var(--primary-foreground));border-color:transparent;}
  .fchip.act svg,.fchip.act b{color:hsl(var(--primary-foreground));}
  .sresults{position:absolute;top:calc(100% - 6px);left:0;right:0;z-index:30;background:hsl(var(--card));border:1px solid hsl(var(--border));border-radius:12px;box-shadow:0 14px 36px -10px rgba(0,0,0,.45);max-height:min(64vh,540px);overflow-y:auto;padding:6px;}
  .sresults:empty{display:none;}
  .shdr{position:sticky;top:0;background:hsl(var(--card));font-size:.74rem;color:hsl(var(--muted-foreground));padding:4px 30px 8px 6px;font-weight:600;z-index:1;}
  /* 高度 0 的 sticky 外框：關閉鈕永遠停在下拉右上角，捲到第 200 頁命中也還在，
     而且不佔版面、不把第一行標題往下推。 */
  .sxwrap{position:sticky;top:0;height:0;z-index:3;text-align:right;}
  .sx{position:relative;top:2px;border:0;background:transparent;color:hsl(var(--muted-foreground));cursor:pointer;padding:3px;border-radius:999px;line-height:0;font-size:17px;}
  .sx:hover{color:hsl(var(--foreground));background:hsl(var(--accent));}
  .sitem{display:flex;gap:10px;padding:9px 11px;border:1px solid hsl(var(--border));border-radius:10px;background:hsl(var(--card));text-decoration:none;color:inherit;margin-bottom:6px;align-items:flex-start;}
  .sitem:hover{border-color:hsl(var(--ring));background:hsl(var(--accent));}
  .sdot{width:8px;height:8px;border-radius:999px;margin-top:5px;flex-shrink:0;}
  .sbody{min-width:0;flex:1;}
  .stitle{font-size:.85rem;font-weight:600;}
  .spage{font-size:.72rem;color:hsl(var(--muted-foreground));font-weight:500;}
  .snip{font-size:.78rem;color:hsl(var(--muted-foreground));margin-top:2px;line-height:1.4;overflow-wrap:anywhere;}
  .snip mark{background:#fde68a;color:#111;border-radius:2px;padding:0 1px;}
  .sgroup{border-top:1px solid hsl(var(--border));padding:4px 0 3px;}
  .sgroup:first-of-type{border-top:0;}
  .sgh{display:flex;align-items:center;gap:7px;padding:5px 6px 3px;font-size:.83rem;}
  .sgc{margin-left:auto;font-size:.68rem;color:hsl(var(--muted-foreground));background:hsl(var(--muted));padding:1px 8px;border-radius:999px;}
  .sitem .spage{flex-shrink:0;font-size:.72rem;color:hsl(var(--muted-foreground));font-weight:600;margin-top:1px;}
  .smore{display:block;font-size:.74rem;color:hsl(var(--muted-foreground));padding:3px 8px 5px;text-decoration:none;}
  .smore:hover{color:hsl(var(--foreground));}
  main{max-width:1180px;margin:0 auto;padding:8px 20px 80px;}
  .status{display:flex;gap:8px;flex-wrap:wrap;margin:10px 0 4px;font-size:.78rem;color:hsl(var(--muted-foreground));}
  .chip{display:inline-flex;align-items:center;gap:6px;padding:4px 10px;border-radius:999px;border:1px solid hsl(var(--border));background:hsl(var(--card));}
  .chip.warn{border-color:#f59e0b66;color:#b45309;background:#f59e0b14;}
  details{margin:8px 0 2px;font-size:.82rem;}
  summary{cursor:pointer;color:hsl(var(--muted-foreground));}
  textarea{width:100%;min-height:84px;margin-top:8px;padding:10px;border-radius:10px;
    border:1px solid hsl(var(--input));background:hsl(var(--card));color:inherit;font-family:ui-monospace,monospace;font-size:.78rem;}
  button.btn{font:inherit;cursor:pointer;border:0;border-radius:9px;padding:8px 14px;
    background:hsl(var(--primary));color:hsl(var(--primary-foreground));font-weight:600;font-size:.85rem;}
  .cat{display:flex;align-items:center;gap:9px;margin:30px 0 12px;}
  .cat .ci{display:grid;place-items:center;width:26px;height:26px;border-radius:8px;font-size:15px;}
  .cat h2{font-size:1rem;margin:0;font-weight:650;letter-spacing:-.01em;}
  .cat .count{font-size:.74rem;color:hsl(var(--muted-foreground));background:hsl(var(--muted));padding:2px 8px;border-radius:999px;}
  @keyframes fadeIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
  @keyframes imgIn{from{opacity:0}to{opacity:1}}
  .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(184px,1fr));gap:14px;}
  .card{position:relative;display:flex;flex-direction:column;border:1px solid hsl(var(--border));
    border-radius:var(--radius);background:hsl(var(--card));overflow:hidden;transition:.15s;text-decoration:none;color:inherit;}
  .card{animation:fadeIn .2s ease both;}
  .card:hover{border-color:hsl(var(--ring));transform:translateY(-2px);box-shadow:0 8px 24px -12px rgba(0,0,0,.4);}
  .thumb{position:relative;aspect-ratio:16/9;background:hsl(var(--muted));overflow:hidden;}
  .thumb img{width:100%;height:100%;object-fit:cover;object-position:top;display:block;animation:imgIn .5s ease both;}
  /* 跟閱讀器同一道公式（見 views/viewer.js）：invert 翻亮度、hue-rotate 把色相轉回來。
     .tag / .ver 兩顆徽章是 .thumb 的兄弟不是 img 的子孫，所以不會跟著翻。 */
  :root[data-inv="1"] .thumb img{filter:invert(1) hue-rotate(180deg);}
  .thumb .tag{position:absolute;top:8px;left:8px;display:inline-flex;align-items:center;gap:5px;
    font-size:.66rem;font-weight:600;padding:3px 8px;border-radius:999px;color:#fff;backdrop-filter:blur(4px);}
  .thumb .ver{position:absolute;top:8px;right:8px;font-size:.62rem;font-weight:700;padding:2px 7px;border-radius:999px;color:#fff;background:#000000aa;backdrop-filter:blur(4px);letter-spacing:.02em;}
  .cardbody{padding:10px 11px 11px;display:flex;flex-direction:column;gap:6px;flex:1;}
  .cardbody .t{font-size:.82rem;font-weight:600;line-height:1.25;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;cursor:copy;}
  .cardbody .t:hover{text-decoration:underline dotted;text-underline-offset:3px;}
  .cardbody .foot{margin-top:auto;display:flex;align-items:center;justify-content:space-between;gap:6px;padding-top:4px;}
  .r2{display:inline-flex;align-items:center;gap:4px;font-size:.66rem;color:hsl(var(--muted-foreground));}
  .r2 .d{width:7px;height:7px;border-radius:999px;background:#22c55e;}
  .r2.miss .d{background:hsl(var(--muted-foreground));}
  .acts{display:flex;gap:5px;flex-shrink:0;}
  .dlbtn{display:grid;place-items:center;width:30px;height:30px;border-radius:8px;font-size:15px;
    border:1px solid hsl(var(--border));background:hsl(var(--card));color:inherit;cursor:pointer;}
  .dlbtn:hover{background:hsl(var(--accent));}
  .starbtn{display:grid;place-items:center;width:30px;height:30px;border-radius:8px;font-size:15px;
    border:1px solid hsl(var(--border));background:hsl(var(--card));color:hsl(var(--muted-foreground));cursor:pointer;}
  .starbtn:hover{background:hsl(var(--accent));color:hsl(var(--foreground));}
  .starbtn.on{color:#f59e0b;border-color:#f59e0b66;background:#f59e0b14;}
  .starbtn.on svg{fill:currentColor;}
  .empty{opacity:.55;padding:30px 4px;text-align:center;}
  .modal{position:fixed;inset:0;background:rgba(0,0,0,.5);display:flex;align-items:flex-start;justify-content:center;z-index:60;padding:56px 16px 16px;}
  .modal[hidden]{display:none;}
  .sheet{background:hsl(var(--card));color:hsl(var(--foreground));border:1px solid hsl(var(--border));border-radius:14px;width:min(560px,100%);max-height:85vh;overflow:auto;padding:18px;display:flex;flex-direction:column;gap:11px;box-shadow:0 20px 50px -12px rgba(0,0,0,.5);}
  .sheethead{display:flex;justify-content:space-between;align-items:center;font-size:1.02rem;font-weight:650;}
  .xbtn{border:0;background:transparent;color:inherit;cursor:pointer;font-size:15px;padding:4px 9px;border-radius:8px;}
  .xbtn:hover{background:hsl(var(--accent));}
  .setlabel{font-weight:600;font-size:.9rem;margin-top:4px;}
  .sethint{opacity:.75;font-size:.82rem;margin:0;}
  .iconbtn.warn::after{content:"";position:absolute;top:6px;right:6px;width:8px;height:8px;border-radius:999px;background:#f59e0b;border:2px solid hsl(var(--background));}
  .iconbtn{position:relative;}
  /* 徽章只在有 warn/error 未讀時出現數字；純 info 未讀給一顆不吵人的灰點。 */
  .badge{position:absolute;top:-5px;right:-5px;min-width:17px;height:17px;padding:0 4px;border-radius:999px;
    background:#ef4444;color:#fff;font-size:.62rem;font-weight:700;line-height:17px;text-align:center;
    border:2px solid hsl(var(--background));box-sizing:content-box;}
  .badge.quiet{min-width:8px;height:8px;padding:0;background:hsl(var(--muted-foreground));font-size:0;line-height:0;top:2px;right:2px;}
  .nlist{display:flex;flex-direction:column;gap:7px;}
  .nrow{display:flex;gap:10px;align-items:flex-start;text-align:left;font:inherit;width:100%;cursor:pointer;
    padding:9px 11px;border:1px solid hsl(var(--border));border-radius:10px;background:hsl(var(--card));color:inherit;}
  .nrow:hover{border-color:hsl(var(--ring));background:hsl(var(--accent));}
  .nrow.read{opacity:.55;}
  .nrow.synthetic{cursor:default;border-style:dashed;}
  .nrow.lv-warn{border-color:#f59e0b66;}
  .nrow.lv-error{border-color:#ef444466;}
  .nico{font-size:.95rem;line-height:1.3;flex-shrink:0;}
  .nbody{min-width:0;flex:1;}
  .ntitle{font-size:.84rem;font-weight:600;line-height:1.35;}
  .nsub{font-size:.74rem;color:hsl(var(--muted-foreground));margin-top:2px;overflow-wrap:anywhere;}
  .nwhen{font-size:.7rem;color:hsl(var(--muted-foreground));flex-shrink:0;margin-top:1px;}
  .ndot{width:7px;height:7px;border-radius:999px;background:#3b82f6;flex-shrink:0;margin-top:7px;}
  .nrow.read .ndot{background:transparent;}
  .sheethead .btn{font-size:.74rem;padding:5px 10px;}
  .kin{background:hsl(var(--card));color:inherit;border:1px solid hsl(var(--border));border-radius:8px;padding:6px 9px;font-size:.8rem;width:190px;}
  .krow{display:flex;align-items:center;gap:8px;padding:6px 0;border-top:1px solid hsl(var(--border));font-size:.76rem;}
  .krow code{font-size:.72rem;opacity:.8;}
  .krow .kmeta{flex:1;min-width:0;color:hsl(var(--muted-foreground));font-size:.7rem;overflow-wrap:anywhere;}
  .krow.dead{opacity:.45;text-decoration:line-through;}
  .krow .xbtn{font-size:.74rem;padding:2px 7px;}
  footer{max-width:1180px;margin:0 auto;padding:0 20px 50px;color:hsl(var(--muted-foreground));font-size:.74rem;}
  footer a{color:inherit;}
${TOAST_CSS}
</style>
</head>
<body>
<header>
  <div class="wrap">
    <div class="htop">
      <div class="brand"><span class="logo" id="logo"></span><span><span id="brandName">NCCN Guidelines</span><small id="sub">${GUIDELINES.length} 份 · R2 · PWA</small></span></div>
      <div class="spacer"></div>
      <a class="navlink" href="/notes" title="門診核對清單">📋<span>臨床筆記</span></a>
      <button class="iconbtn" id="bell" title="通知"></button>
      <button class="iconbtn" id="settings" title="設定"></button>
      <button class="iconbtn" id="theme" title="切換主題"></button>
    </div>
    <div class="srctabs" id="srctabs"></div>
    <div class="searchrow">
      <span class="si" id="searchicon"></span>
      <input id="q" type="search" placeholder="搜尋病名、分類或 PDF 內文（如 trastuzumab）…" autocomplete="off">
      <div id="searchResults" class="sresults"></div>
    </div>
    <div class="filters" id="filters"></div>
  </div>
</header>
<main>
  <div id="list"></div>
</main>
<div id="notifModal" class="modal" hidden><div class="sheet"><div class="sheethead"><b>通知</b><span style="flex:1"></span><button class="btn" id="notifAll">全部已讀</button><button class="xbtn" id="notifClose">✕</button></div><span class="chip" id="notifAlive">⏱ 讀取中…</span><div class="nlist" id="notifList"></div></div></div>
<div id="setModal" class="modal" hidden><div class="sheet"><div class="sheethead"><b>設定</b><button class="xbtn" id="setClose">✕</button></div><span class="chip" id="cookieStatus">🔑 檢查 cookie…</span><span class="chip" id="cronStatus">⏱ 檢查每日更新…</span><div class="setlabel">更新 NCCN cookie（過期時使用）</div><p class="sethint">登入 <a href="https://www.nccn.org/login" target="_blank" rel="noopener">nccn.org</a>，用 cookie-cook 擴充功能複製 <b>Http Header value</b> 貼在下方存檔。</p><textarea id="cookieInput" placeholder="ASP.NET_SessionId=…; …"></textarea><div><button class="btn" id="saveCookie">儲存 cookie</button> <span id="saveMsg" style="font-size:.8rem;margin-left:6px"></span></div><div class="setlabel">Claude Code skill</div><p class="sethint">產生一個內嵌金鑰的 <code>nccn.skill</code>，解壓到 <code>~/.claude/skills/nccn/</code> 後，Claude Code 就能直接讀目錄、章節全文、本版更新與 PDF，<b>不需要再登入</b>。每次產生都是一把獨立的金鑰——換裝置就再產一把，弄丟了就撤銷那一把。</p><div><input class="kin" id="skillLabel" placeholder="這把要給誰用？例如 MacBook" maxlength="40"> <button class="btn" id="makeSkill">產生並下載</button> <span id="skillMsg" style="font-size:.8rem;margin-left:6px"></span></div><div id="keyList"></div></div></div>
<footer>
  透過你的 NCCN 登入 cookie 代理下載官方 PDF；MD Anderson 的 clinical management
  algorithms 為公開文件，不需登入。${user ? "登入身分：" + escapeHtml(user) + " · " : ""}
  NCCN 每日 cron 輪流更新 ${PER_DAY} 份、MD Anderson 每月全量更新 ·
  資料分屬 © NCCN 與 © The University of Texas MD Anderson Cancer Center，僅供個人臨床使用。<br>部署時間：${BUILD_TIME}
</footer>
<script>
const SRCS = ${srcs};
// 上次看的是哪一邊。回站時停在原地，而不是每次都被丟回 NCCN。
var SRC='nccn';try{var _s=localStorage.getItem('nccnsrc');if(_s&&SRCS[_s])SRC=_s;}catch(e){}
var DATA=SRCS[SRC].data, CATS=SRCS[SRC].cats;
const ICONS = {
  droplet:'<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>',
  utensils:'<path d="M3 2v7c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>',
  wind:'<path d="M12.8 19.6A2 2 0 1 0 14 16H2"/><path d="M17.5 8A2.5 2.5 0 1 1 19.5 12H2"/><path d="M9.8 4.4A2 2 0 1 1 11 8H2"/>',
  heart:'<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  venus:'<circle cx="12" cy="9" r="5"/><path d="M12 14v8"/><path d="M9 19h6"/>',
  mars:'<circle cx="10" cy="14" r="6"/><path d="M14.5 9.5 21 3"/><path d="M17 3h4v4"/>',
  scanface:'<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><path d="M9 9h.01"/><path d="M15 9h.01"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
  activity:'<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
  bone:'<path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"/>',
  zap:'<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
  baby:'<path d="M9 12h.01"/><path d="M15 12h.01"/><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"/>',
  help:'<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>',
  buoy:'<circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24 4.24"/><circle cx="12" cy="12" r="4"/>',
  shield:'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  flask:'<path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"/><path d="M6.453 15h11.094"/><path d="M8.5 2h7"/>',
  users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  moon:'<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
  download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>',
  file:'<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/>',
  settings:'<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
  cross:'<path d="M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2z"/>',
  star:'<path d="m12 2.5 2.95 5.98 6.6.96-4.77 4.65 1.12 6.57L12 17.56l-5.9 3.1 1.12-6.57L2.45 9.44l6.6-.96z"/>',
  bell:'<path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/><path d="M21 18H3a2 2 0 0 0 2-2v-5a7 7 0 0 1 14 0v5a2 2 0 0 0 2 2z"/>',
  circlex:'<circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/>',
};
function svg(name){return '<svg viewBox="0 0 24 24" aria-hidden="true">'+(ICONS[name]||'')+'</svg>';}
// 顏色／圖示查表涵蓋兩個來源的分類，不是只有目前這一邊：搜尋下拉與收藏區都可能
// 同時出現兩邊的項目，只填目前來源的話另一邊會退回灰色圓點。
const COLOR = {}; const ICON = {};
Object.keys(SRCS).forEach(function(k){SRCS[k].cats.forEach(function(c){COLOR[c.name]=c.color;ICON[c.name]=c.icon;});});
// 「有沒有變」的指紋。原本只數 versions 的鍵數，所以 v5.2026 -> v6.2026 這種換版
// 完全看不出來，refreshR2() 就不會重畫格子，徽章和縮圖要等下一次進站才更新。把
// 版本字串本身也算進來。
function r2Sig(o){var v=(o&&o.versions)||{};return (o&&o.count||0)+':'+Object.keys(v).sort().map(function(k){return k+'='+(v[k]&&v[k].v);}).join(',');}
let R2 = {}, VER = {}, r2sig='';try{var _c=JSON.parse(localStorage.getItem('nccnr2')||'null');if(_c){R2=_c.cached||{};VER=_c.versions||{};r2sig=r2Sig(_c);}}catch(e){}
const listEl=document.getElementById('list'), q=document.getElementById('q');
// 分類篩選是每個來源各記一份。兩邊的分類名稱沒有一個重疊，共用一格的話切過去就
// 是「篩到一個這裡不存在的分類」＝一片空白，而且看不出為什麼。
function catKey(s){return 'nccncat:'+s;}
var activeCat=null;try{activeCat=localStorage.getItem(catKey(SRC))||null;}catch(e){}
var filtersEl=document.getElementById('filters');
// 星號存 D1（跨裝置），localStorage 只是快取：開頁先照本地畫，/api/stars 回來再校正，
// 免得每次進站都要等一次往返才看得到自己收藏的東西。
var STARCAT='★';
var STARS={};try{var _st=JSON.parse(localStorage.getItem('nccnstars')||'[]');for(var _i=0;_i<_st.length;_i++)STARS[_st[_i]]=1;}catch(e){}
function starIds(){return Object.keys(STARS).sort();}
function saveStars(){try{localStorage.setItem('nccnstars',JSON.stringify(starIds()));}catch(e){}}
document.getElementById('logo').innerHTML=svg('cross');
document.getElementById('searchicon').innerHTML=svg('search');document.getElementById('settings').innerHTML=svg('settings');
function esc(s){const d=document.createElement('div');d.textContent=s;return d.innerHTML;}
function card(g){
  const c=R2[g.id];
  const col=COLOR[g.cat]||'#64748b';
  const dt=c&&c.uploaded?new Date(c.uploaded).toLocaleDateString():'';
  const r2html=c?'<span class="r2"><span class="d"></span>'+(dt||'R2')+'</span>':'<span class="r2 miss"><span class="d"></span>未快取</span>';
  return '<a class="card" data-h="'+esc((g.name+' '+g.id+' '+g.cat).toLowerCase())+'" href="/preview/'+encodeURIComponent(g.id)+'">'
    +'<div class="thumb">'
            // 帶上版本當快取鍵。Worker 只看 pathname，query 純粹是給瀏覽器和
            // service worker 看的：換版就是一個沒見過的網址，第一次載入就是新封面，
            // 不必等 stale-while-revalidate 的下一輪。
            +'<img loading="lazy" src="/thumb/'+encodeURIComponent(g.id)+(VER[g.id]&&VER[g.id].v?'?v='+encodeURIComponent(VER[g.id].v):'')+'" alt="" onerror="this.remove()">'
      +'<span class="tag" style="background:'+col+'cc">'+svg(ICON[g.cat]||'help')+esc(g.cat)+'</span>'+(VER[g.id]?'<span class="ver" title="'+esc((VER[g.id].d||''))+'">v'+esc(VER[g.id].v)+'</span>':'')
    +'</div>'
    +'<div class="cardbody"><div class="t" data-cite="'+esc(g.id)+'" title="點一下複製 AMA 引用">'+esc(g.name)+'</div>'
      +'<div class="foot">'+r2html+'<span class="acts">'
        +'<span class="starbtn'+(STARS[g.id]?' on':'')+'" title="收藏這一份" data-star="'+esc(g.id)+'">'+svg('star')+'</span>'
        +'<span class="dlbtn" title="下載 PDF" data-dl="'+encodeURIComponent(g.id)+'">'+svg('download')+'</span>'
      +'</span></div></div></a>';
}
// 收藏區塊是 .catsec 的一員（data-cat="★"），所以現有那套「按 data-cat 顯示／隱藏
// 整段」的篩選邏輯不用改，點 ★ chip 就自然只剩這一區。
function starSecHtml(items){
  return '<div class="catsec" data-cat="'+STARCAT+'"><div class="cat">'
    +'<span class="ci" style="background:#f59e0b22;color:#f59e0b">'+svg('star')+'</span>'
    +'<h2>已收藏</h2><span class="count">'+items.length+'</span></div>'
    +'<div class="grid">'+items.map(card).join('')+'</div></div>';
}
function starred(){return DATA.filter(function(g){return STARS[g.id];});}
// 一份可以掛在不只一個分類底下。MD Anderson 的索引頁就把 hypoglycemia 同時列在
// 「急症」與「兒科」、把 C. difficile 同時列在「兒科」與「非急症」——在哪一區找得到
// 它，是上游的臨床判斷，照抄比自己挑一個主分類誠實。同一份仍然只有一個 id、一份
// PDF、一個 /preview/ 網址，只是在格線上出現兩次。
//
// 只有卡片與「指南名稱命中」這半邊認得 cats。D1 的 pages 表每列只存一個 cat（主
// 分類），所以在次要分類底下做內文搜尋不會撈到那兩份——影響範圍是 91 份裡的 2 份、
// 而且只在「先選了次要分類再搜內文」時才看得到，不值得為它多開一張對照表。
function inCat(g,name){var cs=g.cats||[g.cat];return cs.indexOf(name)>=0;}
function buildGrid(){
  var html='';
  var st=starred();
  if(st.length)html+=starSecHtml(st);
  for(const c of CATS){
    const items=DATA.filter(function(g){return inCat(g,c.name);});
    if(!items.length)continue;
    html+='<div class="catsec" data-cat="'+esc(c.name)+'"><div class="cat"><span class="ci" style="background:'+c.color+'22;color:'+c.color+'">'+svg(c.icon)+'</span><h2>'+esc(c.name)+'</h2><span class="count">'+items.length+'</span></div><div class="grid">'+items.map(card).join('')+'</div></div>';
  }
  listEl.innerHTML=html+'<div class="empty" id="emptyMsg" style="display:none">沒有符合的項目</div>';
}
// 收藏一份不該讓整片格線重畫（縮圖會重載、卡片動畫會全部重跑），所以只換星號的
// 樣式與置頂那一區。
function paintStars(){
  var bs=listEl.querySelectorAll('[data-star]');
  for(var i=0;i<bs.length;i++)bs[i].className='starbtn'+(STARS[bs[i].getAttribute('data-star')]?' on':'');
}
function renderStarSec(){
  var sec=listEl.querySelector('.catsec[data-cat="'+STARCAT+'"]');
  var st=starred();
  if(!st.length){if(sec)sec.remove();return;}
  if(sec)sec.outerHTML=starSecHtml(st);
  else listEl.insertAdjacentHTML('afterbegin',starSecHtml(st));
}
var hayHit=${hayHit.toString()};
function applyFilter(){
  var f=q.value.trim().toLowerCase();var any=false;
  var secs=listEl.querySelectorAll('.catsec');
  for(var i=0;i<secs.length;i++){var sec=secs[i];
    if(activeCat && sec.getAttribute('data-cat')!==activeCat){sec.style.display='none';continue;}
    var vis=false;var cards=sec.querySelectorAll('.card');
    for(var j=0;j<cards.length;j++){var cd=cards[j];
      var show=!f||hayHit(cd.getAttribute('data-h')||'',f);
      cd.style.display=show?'':'none';if(show){vis=true;any=true;}
    }
    sec.style.display=vis?'':'none';
  }
  var em=document.getElementById('emptyMsg');if(em)em.style.display=any?'none':'';
}
q.addEventListener('input',applyFilter);
var sresEl=document.getElementById('searchResults');var sTimer=null;
function unmark(x){return esc(x||'').split('&lt;mark&gt;').join('<mark>').split('&lt;/mark&gt;').join('</mark>');}
// 全文搜尋是伺服器端按 cat 欄位過濾的，「★ 已收藏」不是真的分類，不能送上去。
function searchCat(){return activeCat&&activeCat!==STARCAT?activeCat:'';}
// 下拉是蓋在卡片清單上的浮層，所以清單被篩成什麼樣，搜尋時根本看不到。打 breast
// 十次有九次只是想打開那一份，得先在浮層最上面列出「指南名稱命中」，否則使用者
// 只能在幾百頁內文片段裡撈那份 PDF。這一段純用本機的 DATA 算，不等 fetch。
var FILE_MAX=8;
function fileHits(qq){
  var scat=searchCat();var onlyStar=activeCat===STARCAT;
  return DATA.filter(function(g){
    if(onlyStar&&!STARS[g.id])return false;
    if(scat&&!inCat(g,scat))return false;
    return hayHit(g.name+' '+g.id+' '+g.cat,qq);
  });
}
function fileHtml(qq){
  var hs=fileHits(qq);if(!hs.length)return '';
  var h='<div class="sgroup"><div class="shdr">指南名稱「'+esc(qq)+'」：'+hs.length+' 份</div>';
  hs.slice(0,FILE_MAX).forEach(function(g){
    h+='<a class="sitem" href="/preview/'+encodeURIComponent(g.id)+'">'
      +'<span class="sdot" style="background:'+(COLOR[g.cat]||'#64748b')+'"></span>'
      +'<div class="sbody"><div class="stitle">'+esc(g.name)+'</div>'
      +'<div class="snip">'+esc(g.cat)+' · '+esc(g.id)+(VER[g.id]?' · v'+esc(VER[g.id].v):'')+'</div></div></a>';
  });
  if(hs.length>FILE_MAX)h+='<div class="smore">還有 '+(hs.length-FILE_MAX)+' 份名稱符合，打字再精確一點</div>';
  return h+'</div>';
}
function ftHtml(d,qq,scat){
  var rs=d.results||[];
  if(!rs.length)return '<div class="shdr">內文搜尋「'+esc(qq)+'」：無命中</div>';
  var order=[],G={};
  rs.forEach(function(x){if(!G[x.gid]){G[x.gid]={name:x.name,cat:x.cat,hits:[]};order.push(x.gid);}G[x.gid].hits.push(x);});
  var html='<div class="shdr">內文命中 '+rs.length+' 頁 · '+order.length+' 份'+(scat?'（限 '+esc(scat)+'）':'')+'</div>';
  order.forEach(function(gid){var g=G[gid];
    html+='<div class="sgroup"><div class="sgh"><span class="sdot" style="background:'+(COLOR[g.cat]||'#64748b')+'"></span><b data-cite="'+esc(gid)+'" title="點一下複製 AMA 引用" style="cursor:copy">'+esc(g.name)+'</b><span class="sgc">'+g.hits.length+' 頁</span></div>';
    g.hits.slice(0,5).forEach(function(x){html+='<a class="sitem" href="/preview/'+encodeURIComponent(x.gid)+'?page='+x.page+'&q='+encodeURIComponent(qq)+'"><span class="spage">p.'+x.page+'</span><div class="snip">'+unmark(x.snip)+'</div></a>';});
    if(g.hits.length>5)html+='<a class="smore" href="/preview/'+encodeURIComponent(gid)+'?page='+g.hits[5].page+'&q='+encodeURIComponent(qq)+'">還有 '+(g.hits.length-5)+' 頁…</a>';
    html+='</div>';});
  return html;
}
// 名稱命中是本機算的、內文命中要等 D1，所以兩段分開畫：打字當下先出名稱，
// 內文那半塊等 fetch 回來再補上，中間掛一行「搜尋中」而不是整個下拉空著。
var ftQ='',ftCache='';
// 下拉是浮層，會蓋住底下的卡片清單。關掉它（✕ 或 Esc）只是收起浮層，搜尋字串
// 留著——底下的清單仍然是篩選後的結果，這才是「只挑一份檔案」時要看的東西。
var sHidden=false;
function closeSearch(){sHidden=true;sresEl.innerHTML='';}
function paintSearch(){
  var qq=q.value.trim();
  if(sHidden||qq.length<2){sresEl.innerHTML='';return;}
  sresEl.innerHTML='<div class="sxwrap"><button type="button" class="sx" title="關閉搜尋結果（Esc）" aria-label="關閉搜尋結果">'+svg('circlex')+'</button></div>'
    +fileHtml(qq)+(ftQ===qq?ftCache:'<div class="shdr">內文搜尋中…</div>');
}
sresEl.addEventListener('click',function(e){
  var b=e.target.closest&&e.target.closest('.sx');if(!b)return;
  e.preventDefault();e.stopPropagation();closeSearch();});
q.addEventListener('keydown',function(e){if(e.key==='Escape'||e.keyCode===27)closeSearch();});
function doSearch(){
  var qq=q.value.trim();if(qq.length<2)return;
  var scat=searchCat();
  var u='/api/search?q='+encodeURIComponent(qq)+'&src='+encodeURIComponent(SRC)+(scat?'&cat='+encodeURIComponent(scat):'');
  fetch(u).then(function(r){return r.json();}).then(function(d){
    if((d.q||'')!==q.value.trim())return;
    ftCache=ftHtml(d,qq,scat);ftQ=qq;paintSearch();
  }).catch(function(){
    // 名稱那半塊還在，別讓「內文搜尋中…」永遠掛著假裝還在跑。
    if(q.value.trim()!==qq)return;
    ftCache='<div class="shdr">內文搜尋「'+esc(qq)+'」：連線失敗</div>';ftQ=qq;paintSearch();
  });
}
q.addEventListener('input',function(){sHidden=false;paintSearch();clearTimeout(sTimer);sTimer=setTimeout(doSearch,250);});
listEl.addEventListener('click',function(e){
  var s=e.target.closest&&e.target.closest('[data-star]');
  if(s){e.preventDefault();e.stopPropagation();toggleStar(s.getAttribute('data-star'));return;}
  var b=e.target.closest&&e.target.closest('.dlbtn');if(b){e.preventDefault();e.stopPropagation();location.href='/dl/'+b.getAttribute('data-dl');}});
// 點標題＝抄一份 AMA 引用，不進 /preview。卡片標題在 <a> 裡面，所以要擋掉預設導覽。
var citeText=${citeText.toString()};
var copyText=${copyText.toString()};
var showToast=${showToast.toString()};
function yankCite(id){
  var g=null;for(var i=0;i<DATA.length;i++){if(DATA[i].id===id){g=DATA[i];break;}}
  if(!g)return;
  var v=VER[id];
  // src/file 決定引用掛在哪個機構、指向哪個網址。少了它們，一份 MD Anderson 的
  // algorithm 會被抄成 NCCN 的出版品。
  var txt=citeText({name:g.name,id:g.id,version:v&&v.v,src:SRC,file:g.file});
  copyText(txt).then(function(ok){showToast(ok?'已複製引用':'複製失敗，請手動選取',txt);});
}
document.addEventListener('click',function(e){
  var t=e.target.closest&&e.target.closest('[data-cite]');
  if(!t)return;
  e.preventDefault();e.stopPropagation();
  yankCite(t.getAttribute('data-cite'));
});
// 收藏數會變，所以這支要能重複呼叫；listener 因此掛在容器上一次就好，別放進來。
function buildFilters(){var counts={};DATA.forEach(function(g){var cs=g.cats||[g.cat];for(var i=0;i<cs.length;i++)counts[cs[i]]=(counts[cs[i]]||0)+1;});
  var ns=starIds().length;
  // 收藏全清光時 ★ chip 會消失，篩選狀態不跟著放掉就會停在一片空白。
  if(activeCat===STARCAT&&!ns){activeCat=null;try{localStorage.setItem(catKey(SRC),'');}catch(e){}}
  var h='<button class="fchip'+(activeCat?'':' act')+'" data-cat="">全部 <b>'+DATA.length+'</b></button>';
  if(ns)h+='<button class="fchip'+(activeCat===STARCAT?' act':'')+'" data-cat="'+STARCAT+'" style="--cc:#f59e0b">'+svg('star')+'<span>已收藏</span> <b>'+ns+'</b></button>';
  CATS.forEach(function(c){if(!counts[c.name])return;h+='<button class="fchip'+(activeCat===c.name?' act':'')+'" data-cat="'+c.name+'" style="--cc:'+c.color+'">'+svg(c.icon)+'<span>'+esc(c.name)+'</span> <b>'+counts[c.name]+'</b></button>';});
  filtersEl.innerHTML=h;}
filtersEl.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('.fchip');if(!b)return;
  activeCat=b.getAttribute('data-cat')||null;try{localStorage.setItem(catKey(SRC),activeCat||'');}catch(e){}
  // 分類一換，名稱命中與內文命中的範圍都變了，快取的那半塊不能再用。
  buildFilters();applyFilter();ftQ='';sHidden=false;paintSearch();doSearch();});

// ---------------------------------------------------------------- 來源分頁
var srcTabsEl=document.getElementById('srctabs');
function cachedIn(list){var n=0;for(var i=0;i<list.length;i++)if(R2[list[i].id])n++;return n;}
function buildTabs(){
  var h='';
  Object.keys(SRCS).forEach(function(k){
    h+='<button class="srctab'+(k===SRC?' act':'')+'" data-src="'+k+'">'+esc(SRCS[k].label)
      +'<b>'+SRCS[k].data.length+'</b></button>';
  });
  srcTabsEl.innerHTML=h;
  var nm=document.getElementById('brandName');if(nm)nm.textContent=SRCS[SRC].title;
  var sub=document.getElementById('sub');
  if(sub)sub.textContent=cachedIn(DATA)+' / '+DATA.length+' 份 · R2 · PWA';
}
function switchSrc(k){
  if(!SRCS[k]||k===SRC)return;
  SRC=k;DATA=SRCS[k].data;CATS=SRCS[k].cats;
  try{localStorage.setItem('nccnsrc',k);}catch(e){}
  // 分類是各記各的（catKey），所以切回來時上次篩的那一類還在。
  try{activeCat=localStorage.getItem(catKey(SRC))||null;}catch(e){activeCat=null;}
  // 搜尋的兩半塊都跟來源綁定：名稱命中掃的是 DATA，內文命中送的是 src=。舊的那份
  // 快取整個作廢，否則切過去的第一眼會看到上一個來源的結果。
  ftQ='';ftCache='';
  buildTabs();buildFilters();buildGrid();applyFilter();paintSearch();doSearch();
}
srcTabsEl.addEventListener('click',function(e){
  var b=e.target.closest&&e.target.closest('.srctab');if(!b)return;
  switchSrc(b.getAttribute('data-src'));});
function toggleStar(id){
  var on=!STARS[id];
  if(on)STARS[id]=1;else delete STARS[id];
  saveStars();paintStars();renderStarSec();buildFilters();applyFilter();
  fetch('/api/star',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({id:id,on:on})})
    .then(function(r){return r.json();}).then(function(d){if(!d.ok)throw new Error(d.error||'儲存失敗');})
    .catch(function(e){
      if(on)delete STARS[id];else STARS[id]=1;
      saveStars();paintStars();renderStarSec();buildFilters();applyFilter();
      showToast('收藏沒存成功，已還原',String(e&&e.message||e));});}
function refreshStars(){
  fetch('/api/stars').then(function(r){return r.json();}).then(function(d){
    if(!d||!d.ok)return;
    var next={};(d.ids||[]).forEach(function(x){next[x]=1;});
    if(Object.keys(next).sort().join(',')===starIds().join(','))return;
    STARS=next;saveStars();paintStars();renderStarSec();buildFilters();applyFilter();
  }).catch(function(){});}

const themeBtn=document.getElementById('theme');
function curTheme(){return document.documentElement.dataset.theme || (matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');}
function paintThemeBtn(){const dark=curTheme()==='dark';themeBtn.innerHTML=svg(dark?'sun':'moon');
  // 縮圖反轉只有暗色模式下才成立；關掉的旗標是閱讀器寫的，首頁只讀不寫。
  let off=false;try{off=localStorage.getItem('nccninv')==='0';}catch(e){}
  document.documentElement.dataset.inv=(dark&&!off)?'1':'0';}
themeBtn.onclick=()=>{const next=curTheme()==='dark'?'light':'dark';document.documentElement.dataset.theme=next;try{localStorage.setItem('theme',next);}catch(e){}paintThemeBtn();
  document.querySelector('meta[name=theme-color]').setAttribute('content',next==='dark'?'#0b0f19':'#ffffff');};
// 沒手動指定主題時 data-theme 是空的、跟著系統走；CSS 會自己更新，但 data-inv 是 JS
// 寫的，得監聽才會一起翻。
try{matchMedia('(prefers-color-scheme:dark)').addEventListener('change',paintThemeBtn);}catch(e){}
paintThemeBtn();
// 設定面板的接線以前縮在 themeBtn.onclick 的大括號裡，等於「先切一次主題，齒輪才會動」。
document.getElementById('settings').onclick=function(){document.getElementById('setModal').hidden=false;loadKeys();};
document.getElementById('setClose').onclick=function(){document.getElementById('setModal').hidden=true;};
document.getElementById('setModal').addEventListener('click',function(e){if(e.target===this)this.hidden=true;});

// 齒輪上的警示點有兩個來源（cookie、每日更新），各自非同步回來，所以記在同一個物件
// 裡一起判斷——不然後回來的那個會把前一個的警示擦掉。
var WARN={cookie:false,cron:false};
function paintWarn(){var g=document.getElementById('settings');
  if(g)g.classList.toggle('warn',!!(WARN.cookie||WARN.cron));}
async function refreshCookie(){
  const el=document.getElementById('cookieStatus');
  try{const s=await(await fetch('/api/cookie-status')).json();
    if(s.set){el.className='chip';el.textContent='🔑 cookie 已設定'+(s.updated?'（'+new Date(s.updated).toLocaleDateString()+'）':'');WARN.cookie=false;}
    else{el.className='chip warn';el.textContent='⚠ 尚未設定 cookie';WARN.cookie=true;}
  }catch(e){el.textContent='🔑 cookie 狀態未知';}
  paintWarn();
}
// 每日 cron 的健康度。最常見的壞法是 cookie 過期後整批抓不到，而 cron 本身照跑不誤，
// 所以這裡直接看最近一次「成功幾份、失敗幾份」，不是看它有沒有觸發。
function paintCron(h){
  var el=document.getElementById('cronStatus');if(!el)return;
  if(!h){el.className='chip';el.textContent='⏱ 每日更新：尚無紀錄';WARN.cron=false;paintWarn();return;}
  var when=new Date(h.at), days=Math.floor((Date.now()-when.getTime())/86400000);
  var stale=days>=2;
  if(h.fail&&!h.ok){el.className='chip warn';
    el.textContent='⚠ 每日更新失敗（'+when.toLocaleDateString()+'）：'+(h.errors&&h.errors[0]||'')+'　cookie 可能已過期';
    WARN.cron=true;}
  else if(h.fail){el.className='chip warn';
    el.textContent='⚠ 每日更新部分失敗 '+h.ok+'/'+(h.ok+h.fail)+'（'+when.toLocaleDateString()+'）';
    WARN.cron=true;}
  else if(stale){el.className='chip warn';
    el.textContent='⚠ 每日更新已 '+days+' 天沒跑（上次 '+when.toLocaleDateString()+'）';
    WARN.cron=true;}
  else{el.className='chip';
    el.textContent='⏱ 每日更新正常：'+when.toLocaleDateString()+' 更新 '+h.ok+' 份（'+(h.ids||[]).join('、')+'）';
    WARN.cron=false;}
  paintWarn();
}
// ── Claude Code skill 的金鑰 ────────────────────────────────────────────
// 這裡發出去的東西不需要 SSO 就能讀全站資料，所以列表把「最後用過」擺在顯眼處：
// 要決定該不該撤銷一把金鑰，需要知道的是它還有沒有人在用，不是它何時發出。
function kesc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){
  return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
function paintKeys(rows){
  var box=document.getElementById('keyList');if(!box)return;
  box.innerHTML=(rows||[]).map(function(k){
    var used=k.lastUsed?('最後用過 '+new Date(k.lastUsed).toLocaleDateString()):'還沒用過';
    return '<div class="krow'+(k.revoked?' dead':'')+'">'
      +'<code>'+kesc(k.prefix)+'…</code><span>'+kesc(k.label)+'</span>'
      +'<span class="kmeta">'+used+' · '+(k.calls||0)+' 次</span>'
      +(k.revoked?'<span class="kmeta">已撤銷</span>'
                 :'<button class="xbtn" data-revoke="'+k.id+'">撤銷</button>')
      +'</div>';
  }).join('');
}
async function loadKeys(){
  try{const r=await(await fetch('/api/keys')).json();paintKeys(r.rows);}
  catch(e){}
}
document.getElementById('keyList').addEventListener('click',async function(e){
  var id=e.target&&e.target.getAttribute&&e.target.getAttribute('data-revoke');
  if(!id)return;
  // 撤銷是立即的（伺服器連 KV 那層的快取一起刪），但已經下載的 .skill 檔還在對方
  // 手上，所以講清楚「檔案還在、只是打不通了」。
  if(!confirm('撤銷後這把金鑰立刻失效，已下載的 skill 會開始收到 401。確定？'))return;
  e.target.disabled=true;
  try{await fetch('/api/keys/revoke',{method:'POST',headers:{'content-type':'application/json'},
    body:JSON.stringify({id:parseInt(id,10)})});}catch(err){}
  loadKeys();
});
document.getElementById('makeSkill').onclick=async function(){
  var btn=this,msg=document.getElementById('skillMsg'),inp=document.getElementById('skillLabel');
  var label=(inp.value||'').trim()||'Claude Code';
  btn.disabled=true;msg.textContent='產生中…';
  try{
    const r=await fetch('/api/skill.zip?label='+encodeURIComponent(label));
    if(!r.ok)throw new Error('HTTP '+r.status);
    // 走 blob 而不是直接把 <a href> 指過去：這條路徑在 Access 後面，用 fetch 才
    // 確定帶得到登入 cookie，也才拿得到回應標頭裡的金鑰前綴。
    const blob=await r.blob(),url=URL.createObjectURL(blob),a=document.createElement('a');
    a.href=url;a.download='nccn.skill';document.body.appendChild(a);a.click();a.remove();
    setTimeout(function(){URL.revokeObjectURL(url);},10000);
    msg.textContent='已下載（'+(r.headers.get('x-key-prefix')||'')+'…）';
    inp.value='';loadKeys();
  }catch(e){msg.textContent='失敗：'+e.message;}
  btn.disabled=false;
};

// ── 通知中心 ────────────────────────────────────────────────────────────
// 徽章數字搭 /api/r2-status 回來（不多一次往返），完整清單等點開鈴鐺才拉。
var relTime=${relTime.toString()};
var fmtEvent=${fmtEvent.toString()};
var staleEvent=${staleEvent.toString()};
var NOTIF={unread:0,alert:0};
function paintBell(){
  var b=document.getElementById('bell');if(!b)return;
  var n=NOTIF.alert||0, quiet=!n&&(NOTIF.unread||0)>0;
  b.innerHTML=svg('bell')+(n?'<span class="badge">'+(n>9?'9+':n)+'</span>':quiet?'<span class="badge quiet"></span>':'');
  b.title=n?n+' 則未處理的警示':quiet?NOTIF.unread+' 則未讀':'通知';
}
function notifRow(r){
  var f=fmtEvent(r), read=!!r.read_at, syn=!!r.synthetic;
  return '<button class="nrow lv-'+esc(r.level||'info')+(read?' read':'')+(syn?' synthetic':'')+'"'+
    (syn?' disabled':' data-nid="'+esc(String(r.id))+'"')+'>'+
    '<span class="ndot"></span><span class="nico">'+f.icon+'</span>'+
    '<span class="nbody"><span class="ntitle">'+esc(r.title||'')+'</span>'+
    (f.sub?'<span class="nsub">'+esc(f.sub)+'</span>':'')+'</span>'+
    '<span class="nwhen">'+esc(relTime(r.created))+'</span></button>';
}
// cron 沒跑的時候沒有人會來寫那一列，所以「靜默」是前端從最新一筆推出來的，
// 排在清單最上面。這也是整個通知中心真正回答「它還活著嗎」的那一行。
function renderNotif(d){
  var alive=document.getElementById('notifAlive');
  var st=staleEvent(d.lastCron,new Date().toISOString(),2);
  if(alive){
    if(!d.lastCron){alive.className='chip warn';alive.textContent='⚠ 尚無任何每日更新紀錄';}
    else if(st){alive.className='chip warn';alive.textContent='⚠ '+st.title;}
    else{alive.className='chip';alive.textContent='✓ cron 正常：最後一次紀錄 '+relTime(d.lastCron);}
  }
  var rows=(d.rows||[]).slice();
  if(st)rows.unshift(st);
  var el=document.getElementById('notifList');if(!el)return;
  el.innerHTML=rows.length?rows.map(notifRow).join(''):'<div class="empty">還沒有任何通知</div>';
}
async function loadNotif(){
  try{const d=await(await fetch('/api/notifications')).json();
    NOTIF={unread:d.unread||0,alert:d.alert||0};paintBell();renderNotif(d);
  }catch(e){var el=document.getElementById('notifList');if(el)el.innerHTML='<div class="empty">讀不到通知</div>';}
}
async function markNotif(payload){
  try{await fetch('/api/notifications/read',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(payload)});}
  catch(e){showToast('標記已讀失敗',String(e&&e.message||e));}
  loadNotif();
}
document.getElementById('bell').onclick=function(){document.getElementById('notifModal').hidden=false;loadNotif();};
document.getElementById('notifClose').onclick=function(){document.getElementById('notifModal').hidden=true;};
document.getElementById('notifModal').addEventListener('click',function(e){if(e.target===this)this.hidden=true;});
document.getElementById('notifAll').onclick=function(){markNotif({all:true});};
// 逐筆已讀：開面板不自動全部標掉，否則你今天瞄一眼，明天就不知道昨天壞過。
document.getElementById('notifList').addEventListener('click',function(e){
  var b=e.target.closest&&e.target.closest('[data-nid]');if(!b)return;
  b.classList.add('read');markNotif({id:parseInt(b.getAttribute('data-nid'),10)});});

async function refreshR2(){
  try{const s=await(await fetch('/api/r2-status')).json();
    var sig=r2Sig(s);
    try{localStorage.setItem('nccnr2',JSON.stringify({cached:s.cached,versions:s.versions,count:s.count,total:s.total}));}catch(e){}
    R2=s.cached||{};VER=s.versions||{};
    if(s.notify){NOTIF={unread:s.notify.unread||0,alert:s.notify.alert||0};paintBell();}
    paintCron(s.health);
    // 副標的分母是「目前這個分頁的份數」，不是整個桶。s.count/s.total 兩邊加總，
    // 在 NCCN 分頁看到 178 只會讓人以為漏了一半。buildTabs 從剛更新的 R2 重算。
    buildTabs();
    if(sig!==r2sig){r2sig=sig;buildGrid();applyFilter();}
  }catch(e){}
}
document.getElementById('saveCookie').addEventListener('click',async()=>{
  const btn=document.getElementById('saveCookie'),msg=document.getElementById('saveMsg');
  const cookie=document.getElementById('cookieInput').value.trim();
  if(!cookie){msg.textContent='cookie 不可為空';return;}
  btn.disabled=true;msg.textContent='儲存中…';
  try{const s=await(await fetch('/api/cookie',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({cookie})})).json();
    msg.textContent=s.ok?'✓ 已儲存':'失敗：'+(s.error||'');
    if(s.ok){document.getElementById('cookieInput').value='';refreshCookie();}
  }catch(e){msg.textContent='儲存失敗';}
  btn.disabled=false;
});
paintBell();buildTabs();buildFilters();buildGrid();applyFilter();refreshCookie();refreshR2();refreshStars();
document.addEventListener('keydown',function(e){if((e.metaKey||e.ctrlKey)&&(e.key==='f'||e.key==='F')){e.preventDefault();q.focus();q.select();}});
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('/sw.js').catch(()=>{}));}
</script>
</body>
</html>`;
}
