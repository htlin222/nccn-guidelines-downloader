// 「臨床筆記」頁：門診核對清單的瀏覽與檢索（issue #4）。
//
// 跟首頁分開是因為它們回答的是不同的問題。首頁問「我要哪一份 PDF」，這一頁問
// 「病人在我面前，我現在要核對什麼」——後者的入口是病人的特徵（乳癌、三期、
// 要做檢查），不是指引的名字。
//
// 樣式刻意重抄一份而不是從 home.js 抽共用檔：兩頁都是單一 template literal，
// 沒有建置步驟，抽出來的東西得用字串拼接組回去，那比重複更難讀也更容易壞。
// 共用的只有 :root 的顏色變數值，改配色時兩邊要一起改。

export function renderNotes(request) {
	const user = request.headers.get("cf-access-authenticated-user-email") || "";
	return `<!doctype html>
<html lang="zh-Hant"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>臨床筆記 · NCCN</title>
<link rel="icon" href="/favicon.svg">
<meta name="theme-color" content="#0b0f19">
<script>(function(){try{var t=localStorage.getItem('theme');if(t)document.documentElement.dataset.theme=t;}catch(e){}})();</script>
<style>
  :root{
    --background:0 0% 100%; --foreground:240 10% 3.9%;
    --card:0 0% 100%; --muted:240 4.8% 95.9%; --muted-foreground:240 3.8% 46.1%;
    --border:240 5.9% 90%; --primary:240 5.9% 10%; --primary-foreground:0 0% 98%;
    --accent:240 4.8% 95.9%; --radius:.6rem;
  }
  :root[data-theme="dark"]{
    --background:240 10% 3.9%; --foreground:0 0% 98%;
    --card:240 8% 7%; --muted:240 3.7% 15.9%; --muted-foreground:240 5% 64.9%;
    --border:240 3.7% 16%; --primary:0 0% 98%; --primary-foreground:240 5.9% 10%;
    --accent:240 3.7% 15.9%;
  }
  @media (prefers-color-scheme:dark){ :root:not([data-theme="light"]){
    --background:240 10% 3.9%; --foreground:0 0% 98%;
    --card:240 8% 7%; --muted:240 3.7% 15.9%; --muted-foreground:240 5% 64.9%;
    --border:240 3.7% 16%; --primary:0 0% 98%; --primary-foreground:240 5.9% 10%;
    --accent:240 3.7% 15.9%;
  }}
  *{box-sizing:border-box;}
  body{margin:0;background:hsl(var(--background));color:hsl(var(--foreground));
    font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","PingFang TC","Microsoft JhengHei",sans-serif;
    -webkit-font-smoothing:antialiased;}
  svg{width:1em;height:1em;stroke:currentColor;stroke-width:2;fill:none;stroke-linecap:round;stroke-linejoin:round;}
  header{position:sticky;top:0;z-index:20;backdrop-filter:saturate(180%) blur(12px);
    background:hsl(var(--background)/.85);border-bottom:1px solid hsl(var(--border));}
  .wrap{max-width:1180px;margin:0 auto;padding:0 20px;}
  .htop{display:flex;align-items:center;gap:14px;padding:14px 0 12px;}
  .brand{display:flex;align-items:center;gap:10px;font-weight:700;font-size:1.12rem;}
  .brand small{display:block;font-weight:400;font-size:.72rem;color:hsl(var(--muted-foreground));}
  .spacer{flex:1;}
  .tabs{display:flex;gap:6px;padding-bottom:10px;}
  .tabs a{padding:7px 14px;border-radius:999px;text-decoration:none;font-size:.86rem;font-weight:600;
    color:hsl(var(--muted-foreground));border:1px solid transparent;}
  .tabs a.act{background:hsl(var(--primary));color:hsl(var(--primary-foreground));}
  .tabs a:not(.act):hover{border-color:hsl(var(--border));color:hsl(var(--foreground));}
  .iconbtn{display:grid;place-items:center;width:36px;height:36px;border-radius:10px;cursor:pointer;
    background:transparent;border:1px solid hsl(var(--border));color:hsl(var(--foreground));font-size:16px;}
  .back{display:inline-flex;align-items:center;gap:6px;padding:7px 12px 7px 10px;border-radius:10px;
    text-decoration:none;font-size:.82rem;font-weight:600;white-space:nowrap;
    color:hsl(var(--muted-foreground));border:1px solid hsl(var(--border));background:transparent;}
  .back:hover{color:hsl(var(--foreground));background:hsl(var(--muted));}
  .back svg{width:15px;height:15px;}
  /* 窄螢幕只留箭頭：標籤列已經有「指引」可以回去，這裡不值得為它擠掉標題 */
  @media (max-width:560px){.back span{display:none;}.back{padding:7px 9px;}}
  .searchrow{position:relative;padding-bottom:12px;}
  .searchrow input{width:100%;padding:11px 14px 11px 40px;border-radius:10px;font-size:.95rem;
    background:hsl(var(--card));border:1px solid hsl(var(--border));color:hsl(var(--foreground));}
  .searchrow input:focus{outline:2px solid hsl(var(--primary)/.35);outline-offset:1px;}
  .si{position:absolute;left:13px;top:11px;color:hsl(var(--muted-foreground));
    display:grid;place-items:center;width:16px;height:16px;}
  .si svg{width:16px;height:16px;}
  .bicon{display:grid;place-items:center;color:hsl(var(--primary));}
  .bicon svg{width:20px;height:20px;}
  .iconbtn svg{width:17px;height:17px;}
  .hint{font-size:.76rem;color:hsl(var(--muted-foreground));padding-bottom:10px;line-height:1.7;}
  .hint b{color:hsl(var(--foreground));font-weight:600;}
  .chips{display:flex;flex-wrap:wrap;gap:6px;padding-bottom:12px;}
  .chip{padding:5px 11px;border-radius:999px;font-size:.78rem;cursor:pointer;
    background:hsl(var(--muted));border:1px solid transparent;color:hsl(var(--foreground));}
  .chip.on{background:hsl(var(--primary));color:hsl(var(--primary-foreground));}
  .chip small{opacity:.6;margin-left:5px;}
  main{max-width:1180px;margin:0 auto;padding:20px;}
  /* 左右兩欄：左邊是搜尋結果，右邊是選中那份的全文。--htop 由 JS 量 header 實高
     寫上去——header 是 sticky 的，而它的高度會隨 chips 換行變動，寫死會讓右欄
     在某些寬度下卡進 header 底下。 */
  .panes{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.1fr);gap:16px;align-items:start;}
  .lpane{min-width:0;}
  .rpane{position:sticky;top:calc(var(--htop,180px) + 12px);min-width:0;
    height:calc(100vh - var(--htop,180px) - 44px);display:flex;flex-direction:column;
    background:hsl(var(--card));border:1px solid hsl(var(--border));border-radius:var(--radius);}
  .phead{display:flex;align-items:flex-start;gap:10px;padding:13px 15px;
    border-bottom:1px solid hsl(var(--border));}
  .phead .pt{min-width:0;flex:1;}
  .pref{font-weight:700;font-size:.9rem;}
  .ptitle{font-size:.82rem;color:hsl(var(--muted-foreground));line-height:1.6;margin-top:3px;}
  .pmeta{font-size:.72rem;color:hsl(var(--muted-foreground));margin-top:5px;}
  .pbody{flex:1;overflow:auto;padding:14px 15px;}
  .pbody pre{white-space:pre-wrap;word-break:break-word;margin:0;
    font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:.82rem;line-height:1.75;}
  .pact{display:flex;gap:8px;padding:11px 15px;border-top:1px solid hsl(var(--border));}
  .pact button{padding:6px 12px;border-radius:8px;font-size:.8rem;cursor:pointer;
    background:hsl(var(--muted));border:1px solid hsl(var(--border));color:hsl(var(--foreground));}
  .pact button:hover{background:hsl(var(--accent));}
  .pempty{flex:1;display:grid;place-items:center;text-align:center;padding:24px;
    font-size:.84rem;line-height:1.9;color:hsl(var(--muted-foreground));}
  .pclose{display:none;width:32px;height:32px;border-radius:8px;cursor:pointer;flex:none;
    background:transparent;border:1px solid hsl(var(--border));color:hsl(var(--foreground));}
  .pclose svg{width:15px;height:15px;}
  /* 窄螢幕：右欄改成從右邊滑出的面板，不擠壓清單 */
  @media (max-width:900px){
    .panes{grid-template-columns:minmax(0,1fr);}
    .rpane{position:fixed;inset:0 0 0 auto;width:min(94vw,560px);height:100dvh;z-index:40;
      border-radius:0;border-width:0 0 0 1px;transform:translateX(101%);
      transition:transform .18s ease;box-shadow:-12px 0 32px hsl(0 0% 0%/.22);}
    .rpane.show{transform:none;}
    .pclose{display:grid;place-items:center;}
  }
  .meta{font-size:.8rem;color:hsl(var(--muted-foreground));padding-bottom:12px;}
  .card.sel{border-color:hsl(var(--primary));box-shadow:0 0 0 1px hsl(var(--primary)/.35);}
  .card{background:hsl(var(--card));border:1px solid hsl(var(--border));border-radius:var(--radius);
    margin-bottom:10px;overflow:hidden;}
  .chead{display:flex;align-items:center;gap:10px;padding:13px 15px;cursor:pointer;}
  .chead:hover{background:hsl(var(--accent));}
  .cref{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:.76rem;font-weight:700;
    padding:3px 7px;border-radius:5px;background:hsl(var(--muted));white-space:nowrap;}
  .ctitle{flex:1;font-size:.92rem;font-weight:600;line-height:1.4;}
  .cgid{font-size:.74rem;color:hsl(var(--muted-foreground));white-space:nowrap;}
  .cbadge{font-size:.68rem;padding:2px 6px;border-radius:4px;background:hsl(var(--muted));
    color:hsl(var(--muted-foreground));white-space:nowrap;}
  .cbody{display:none;padding:0 15px 15px;border-top:1px solid hsl(var(--border));}
  .card.open .cbody{display:block;}
  .cbody pre{white-space:pre-wrap;word-break:break-word;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;
    font-size:.82rem;line-height:1.75;margin:14px 0 0;}
  .cact{display:flex;gap:8px;padding-top:12px;}
  .cact button{padding:6px 12px;border-radius:8px;font-size:.8rem;cursor:pointer;
    background:hsl(var(--muted));border:1px solid hsl(var(--border));color:hsl(var(--foreground));}
  .cact button:hover{background:hsl(var(--accent));}
  .empty{text-align:center;padding:60px 20px;color:hsl(var(--muted-foreground));font-size:.9rem;line-height:1.9;}
  footer{max-width:1180px;margin:0 auto;padding:24px 20px 40px;font-size:.75rem;
    color:hsl(var(--muted-foreground));border-top:1px solid hsl(var(--border));}
</style>
</head><body>
<header>
  <div class="wrap">
    <div class="htop">
      <a class="back" href="/" title="回首頁">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg><span>回首頁</span>
      </a>
      <div class="brand"><span class="bicon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"/><path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/></svg></span><span>臨床筆記<small id="sub">NCCN 決策節點核對清單</small></span></div>
      <div class="spacer"></div>
      <button class="iconbtn" id="theme" title="切換主題"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path fill="currentColor" stroke="none" d="M12 18a6 6 0 0 1 0-12z"/></svg></button>
    </div>
    <div class="tabs">
      <a href="/">指引</a>
      <a href="/notes" class="act">臨床筆記</a>
    </div>
    <div class="searchrow">
      <span class="si"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg></span>
      <input id="q" type="search" placeholder="乳癌 三期 檢查　·　大腸癌 MSI-H　·　olaparib" autocomplete="off" autofocus>
    </div>
    <div class="hint">
      打<b>病人的特徵</b>就好，不必記指引編號。中英皆可，中文不必加空白（<b>乳癌三期檢查</b>也找得到）。
      字典外的詞會自動退回全文搜尋。
    </div>
    <div class="chips" id="chips"></div>
  </div>
</header>
<main>
  <div class="panes">
    <div class="lpane">
      <div class="meta" id="meta"></div>
      <div id="list"></div>
    </div>
    <aside class="rpane" id="pane" aria-live="polite">
      <div class="pempty" id="pempty">點左邊任何一份清單<br>全文會出現在這裡</div>
    </aside>
  </div>
</main>
<footer>
  單一真相在 git 的 <code>cf/snippets/</code>，這裡是它的可查詢副本。
  每份清單都標了來源指引、ref、頁碼與版本，可回溯。
  <b>僅為起草與核對工具，臨床決策以主治醫師判斷與病人個別狀況為準。</b>
  ${user ? `<span style="float:right">${user}</span>` : ""}
</footer>
<script>
var esc=function(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){
  return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});};
var listEl=document.getElementById('list'), metaEl=document.getElementById('meta'),
    chipsEl=document.getElementById('chips'), q=document.getElementById('q');
var STATE={q:'',chips:[]}, TIMER=null, LAST='';

// 常用的檢索組合。它們不是「所有可能的 facet」——那會是一面兩百顆按鈕的牆，
// 而門診要的是三秒內點到。這幾顆涵蓋的是「現在這個病人走到哪一步」。
var QUICK=[
  {t:'初診檢查',q:'檢查'},{t:'分期',q:'分期'},{t:'術前',q:'術前'},
  {t:'術後輔助',q:'輔助'},{t:'追蹤',q:'追蹤'},{t:'復發',q:'復發'},
  {t:'轉移',q:'轉移'},{t:'支持治療',q:'支持'}
];

function paintChips(){
  chipsEl.innerHTML=QUICK.map(function(c,i){
    return '<span class="chip'+(STATE.chips.indexOf(i)>=0?' on':'')+'" data-i="'+i+'">'+esc(c.t)+'</span>';
  }).join('');
}
chipsEl.addEventListener('click',function(e){
  var el=e.target.closest('.chip'); if(!el) return;
  var i=+el.dataset.i, at=STATE.chips.indexOf(i);
  if(at>=0) STATE.chips.splice(at,1); else STATE.chips.push(i);
  // header 是 sticky 的，右欄要貼在它底下。高度會隨 chips 換行與視窗寬度變，
// 所以量出來寫進 --htop，不寫死。
var headerEl=document.querySelector('header');
function syncHeader(){
  document.documentElement.style.setProperty('--htop',
    Math.round(headerEl.getBoundingClientRect().height)+'px');
}
syncHeader();
addEventListener('resize',syncHeader);
if(window.ResizeObserver) new ResizeObserver(syncHeader).observe(headerEl);

paintChips(); run();
});

function effectiveQuery(){
  var parts=STATE.chips.map(function(i){return QUICK[i].q;});
  return (q.value.trim()+' '+parts.join(' ')).trim();
}

function badges(r){
  return (r.kind==='decision' ? '' : '<span class="cbadge">參考</span>')
    +(r.review==='unaudited'
      ? '<span class="cbadge" title="尚未經過對照來源的審查">未審</span>' : '');
}

function card(r,i){
  return '<div class="card" data-i="'+i+'" data-gid="'+esc(r.gid)+'" data-ref="'+esc(r.ref)+'">'
    +'<div class="chead"><span class="cref">'+esc(r.ref)+'</span>'
    +'<span class="ctitle">'+esc(r.title)+'</span>'+badges(r)
    +'<span class="cgid">'+esc(r.gid)+' p'+esc(r.page)+' · v'+esc(r.version)+'</span></div></div>';
}

// ---- 右欄 ----
var paneEl=document.getElementById('pane');
var ROWS=[], SEL=-1, BODY={};

function paneEmpty(msg){
  paneEl.innerHTML='<div class="pempty">'+msg+'</div>';
}

function closePane(){
  paneEl.classList.remove('show');
  SEL=-1;
  var on=listEl.querySelector('.card.sel'); if(on) on.classList.remove('sel');
  paneEmpty('點左邊任何一份清單<br>全文會出現在這裡');
}

var CLOSE_SVG='<svg viewBox="0 0 24 24" aria-hidden="true">'
  +'<path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>';

function paintPane(r,text){
  paneEl.innerHTML='<div class="phead"><div class="pt">'
    +'<div class="pref">'+esc(r.ref)+' '+badges(r)+'</div>'
    +'<div class="ptitle">'+esc(r.title)+'</div>'
    +'<div class="pmeta">'+esc(r.gid)+'　·　p'+esc(r.page)+'　·　v'+esc(r.version)+'</div>'
    +'</div><button class="pclose" id="pclose" title="關閉">'+CLOSE_SVG+'</button></div>'
    +'<div class="pbody"><pre id="pbody"></pre></div>'
    +'<div class="pact"><button data-a="copy">複製</button>'
    +'<button data-a="pdf">開啟 PDF 第 '+esc(r.page)+' 頁</button></div>';
  document.getElementById('pbody').textContent=text;
  paneEl.classList.add('show');
}

function select(i){
  if(i<0||i>=ROWS.length) return;
  var r=ROWS[i]; SEL=i;
  var was=listEl.querySelector('.card.sel'); if(was) was.classList.remove('sel');
  var el=listEl.querySelector('.card[data-i="'+i+'"]');
  if(el){el.classList.add('sel');el.scrollIntoView({block:'nearest'});}
  var key=r.gid+'/'+r.ref;
  if(BODY[key]!=null){paintPane(r,BODY[key]);return;}
  paintPane(r,'載入中…');
  fetch('/api/notes/'+encodeURIComponent(r.gid)+'/'+encodeURIComponent(r.ref))
    .then(function(res){return res.json();})
    .then(function(d){
      BODY[key]=d.body||'(讀不到內容)';
      // 期間可能已經點了別份，晚到的回應不該蓋掉現在這份
      if(SEL===i) paintPane(r,BODY[key]);
    })
    .catch(function(){ if(SEL===i) paintPane(r,'(讀取失敗)'); });
}

listEl.addEventListener('click',function(e){
  var el=e.target.closest('.card'); if(!el) return;
  select(+el.dataset.i);
});

paneEl.addEventListener('click',function(e){
  if(e.target.closest('#pclose')){closePane();return;}
  var btn=e.target.closest('button[data-a]'); if(!btn) return;
  var r=ROWS[SEL]; if(!r) return;
  if(btn.dataset.a==='pdf'){
    window.open('/preview/'+encodeURIComponent(r.gid)+'?page='+encodeURIComponent(r.page),'_blank');
    return;
  }
  navigator.clipboard.writeText(document.getElementById('pbody').textContent).then(function(){
    btn.textContent='已複製'; setTimeout(function(){btn.textContent='複製';},1200);
  });
});

// 上下鍵在清單間移動。輸入框是單行的，方向鍵在裡面沒有別的意思，所以不必
// 先把焦點移出搜尋框——門診打完字直接按方向鍵就能翻。
document.addEventListener('keydown',function(e){
  if(e.key==='Escape'){closePane();return;}
  if(e.key!=='ArrowDown'&&e.key!=='ArrowUp') return;
  if(!ROWS.length) return;
  e.preventDefault();
  select(SEL<0 ? 0 : Math.max(0,Math.min(ROWS.length-1,SEL+(e.key==='ArrowDown'?1:-1))));
});

function run(){
  var query=effectiveQuery();
  if(query===LAST) return;
  LAST=query;
  metaEl.textContent='搜尋中…';
  fetch('/api/notes?q='+encodeURIComponent(query))
    .then(function(r){return r.json();})
    .then(function(d){
      var rows=d.rows||[];
      ROWS=rows; SEL=-1;
      if(!rows.length){
        metaEl.textContent='';
        listEl.innerHTML='<div class="empty">沒有符合的清單。<br>'
          +'試試病人的特徵，例如「乳癌 三期 檢查」或「大腸癌 MSI-H」。</div>';
        closePane();
        return;
      }
      var bits=[];
      if(d.facets && d.facets.length)
        bits.push('命中軸：'+d.facets.map(function(f){return f.axis+'='+f.value;}).join('、'));
      if(d.text && d.text.length) bits.push('全文：'+d.text.join('、'));
      metaEl.textContent=rows.length+' 份'+(bits.length?'　·　'+bits.join('　·　'):'');
      listEl.innerHTML=rows.map(card).join('');
      // 換一批結果就把右欄清掉——原本選的那份多半不在新結果裡，留著會讓右邊
      // 的內容和左邊的清單對不起來。
      closePane();
    })
    .catch(function(){metaEl.textContent='搜尋失敗';});
}

q.addEventListener('input',function(){clearTimeout(TIMER);TIMER=setTimeout(run,180);});
document.getElementById('theme').addEventListener('click',function(){
  var cur=document.documentElement.dataset.theme
    ||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');
  var next=cur==='dark'?'light':'dark';
  document.documentElement.dataset.theme=next;
  try{localStorage.setItem('theme',next);}catch(e){}
});
paintChips(); run();
</script>
</body></html>`;
}
