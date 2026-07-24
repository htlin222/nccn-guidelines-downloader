// NCCN guideline downloader — Cloudflare Worker
// - Serves a gated page listing all guidelines (Access-protected hostname).
// - Caches PDFs in R2; a daily cron refreshes them round-robin (PER_DAY at a time).
// - /pdf/:id serves inline (from R2, else live), /dl/:id downloads, /preview/:id = pdf.js viewer.

const GUIDELINES = [{"id":"all","name":"Acute Lymphoblastic Leukemia","cat":"Cancer Types"},{"id":"aml","name":"Acute Myeloid Leukemia","cat":"Cancer Types"},{"id":"ampullary","name":"Ampullary Adenocarcinoma","cat":"Cancer Types"},{"id":"anal","name":"Anal Carcinoma","cat":"Cancer Types"},{"id":"nmsc","name":"Basal Cell Skin Cancer","cat":"Cancer Types"},{"id":"b-cell","name":"B-Cell Lymphomas","cat":"Cancer Types"},{"id":"btc","name":"Biliary Tract Cancers","cat":"Cancer Types"},{"id":"bladder","name":"Bladder Cancer","cat":"Cancer Types"},{"id":"bone","name":"Bone Cancer","cat":"Cancer Types"},{"id":"breast","name":"Breast Cancer","cat":"Cancer Types"},{"id":"cns","name":"Central Nervous System Cancers","cat":"Cancer Types"},{"id":"cervical","name":"Cervical Cancer","cat":"Cancer Types"},{"id":"cll","name":"Chronic Lymphocytic Leukemia/Small Lymphocytic Lymphoma","cat":"Cancer Types"},{"id":"cml","name":"Chronic Myeloid Leukemia","cat":"Cancer Types"},{"id":"colon","name":"Colon Cancer","cat":"Cancer Types"},{"id":"dfsp","name":"Dermatofibrosarcoma Protuberans","cat":"Cancer Types"},{"id":"esophageal","name":"Esophageal and Esophagogastric Junction Cancers","cat":"Cancer Types"},{"id":"gastric","name":"Gastric Cancer","cat":"Cancer Types"},{"id":"gist","name":"Gastrointestinal Stromal Tumors","cat":"Cancer Types"},{"id":"gtn","name":"Gestational Trophoblastic Neoplasia","cat":"Cancer Types"},{"id":"hairy_cell","name":"Hairy Cell Leukemia","cat":"Cancer Types"},{"id":"head-and-neck","name":"Head and Neck Cancers","cat":"Cancer Types"},{"id":"hepatobiliary","name":"Hepatobiliary Cancers","cat":"Cancer Types"},{"id":"hcc","name":"Hepatocellular Carcinoma","cat":"Cancer Types"},{"id":"histiocytic_neoplasms","name":"Histiocytic Neoplasms","cat":"Cancer Types"},{"id":"hodgkins","name":"Hodgkin Lymphoma","cat":"Cancer Types"},{"id":"kaposi","name":"Kaposi Sarcoma","cat":"Cancer Types"},{"id":"kidney","name":"Kidney Cancer","cat":"Cancer Types"},{"id":"cutaneous_melanoma","name":"Melanoma: Cutaneous","cat":"Cancer Types"},{"id":"uveal","name":"Melanoma: Uveal","cat":"Cancer Types"},{"id":"mcc","name":"Merkel Cell Carcinoma","cat":"Cancer Types"},{"id":"meso_peritoneal","name":"Mesothelioma: Peritoneal","cat":"Cancer Types"},{"id":"meso_pleural","name":"Mesothelioma: Pleural","cat":"Cancer Types"},{"id":"Myeloma","name":"Multiple Myeloma","cat":"Cancer Types"},{"id":"mds","name":"Myelodysplastic Syndromes","cat":"Cancer Types"},{"id":"mlne","name":"Myeloid/Lymphoid Neoplasms with Eosinophilia and Tyrosine Kinase Gene Fusions","cat":"Cancer Types"},{"id":"mpn","name":"Myeloproliferative Neoplasms","cat":"Cancer Types"},{"id":"neuroendocrine","name":"Neuroendocrine and Adrenal Tumors","cat":"Cancer Types"},{"id":"nscl","name":"Non-Small Cell Lung Cancer","cat":"Cancer Types"},{"id":"occult","name":"Occult Primary","cat":"Cancer Types"},{"id":"ovarian","name":"Ovarian Cancer/Fallopian Tube Cancer/Primary Peritoneal Cancer","cat":"Cancer Types"},{"id":"pancreatic","name":"Pancreatic Adenocarcinoma","cat":"Cancer Types"},{"id":"ped_all","name":"Pediatric Acute Lymphoblastic Leukemia","cat":"Cancer Types"},{"id":"ped_b-cell","name":"Pediatric Aggressive Mature B-Cell Lymphomas","cat":"Cancer Types"},{"id":"ped_cns","name":"Pediatric Central Nervous System Cancers","cat":"Cancer Types"},{"id":"ped_hodgkin","name":"Pediatric Hodgkin Lymphoma","cat":"Cancer Types"},{"id":"penile","name":"Penile Cancer","cat":"Cancer Types"},{"id":"cutaneous_lymphomas","name":"Primary Cutaneous Lymphomas","cat":"Cancer Types"},{"id":"prostate","name":"Prostate Cancer","cat":"Cancer Types"},{"id":"rectal","name":"Rectal Cancer","cat":"Cancer Types"},{"id":"small_bowel","name":"Small Bowel Adenocarcinoma","cat":"Cancer Types"},{"id":"sclc","name":"Small Cell Lung Cancer","cat":"Cancer Types"},{"id":"sarcoma","name":"Soft Tissue Sarcoma","cat":"Cancer Types"},{"id":"squamous","name":"Squamous Cell Skin Cancer","cat":"Cancer Types"},{"id":"amyloidosis","name":"Systemic Light Chain Amyloidosis","cat":"Cancer Types"},{"id":"mastocytosis","name":"Systemic Mastocytosis","cat":"Cancer Types"},{"id":"t-cell","name":"T-Cell Lymphomas","cat":"Cancer Types"},{"id":"testicular","name":"Testicular Cancer","cat":"Cancer Types"},{"id":"thymic","name":"Thymomas and Thymic Carcinomas","cat":"Cancer Types"},{"id":"thyroid","name":"Thyroid Carcinoma","cat":"Cancer Types"},{"id":"uterine","name":"Uterine Neoplasms","cat":"Cancer Types"},{"id":"vulvar","name":"Vulvar Cancer","cat":"Cancer Types"},{"id":"waldenstroms","name":"Waldenström Macroglobulinemia / Lymphoplasmacytic Lymphoma","cat":"Cancer Types"},{"id":"wilms_tumor","name":"Wilms Tumor (Nephroblastoma)","cat":"Cancer Types"},{"id":"antiemesis","name":"Antiemesis","cat":"Supportive Care"},{"id":"pain","name":"Adult Cancer Pain","cat":"Supportive Care"},{"id":"vte","name":"Cancer-Associated Venous Thromboembolic Disease","cat":"Supportive Care"},{"id":"fatigue","name":"Cancer-Related Fatigue","cat":"Supportive Care"},{"id":"distress","name":"Distress Management","cat":"Supportive Care"},{"id":"hct","name":"Hematopoietic Cell Transplantation","cat":"Supportive Care"},{"id":"growthfactors","name":"Hematopoietic Growth Factors","cat":"Supportive Care"},{"id":"immunotherapy","name":"Management of Immunotherapy-Related Toxicities","cat":"Supportive Care"},{"id":"palliative","name":"Palliative Care","cat":"Supportive Care"},{"id":"infections","name":"Prevention and Treatment of Cancer-Related Infections","cat":"Supportive Care"},{"id":"smoking","name":"Smoking Cessation","cat":"Supportive Care"},{"id":"survivorship","name":"Survivorship","cat":"Supportive Care"},{"id":"aya","name":"Adolescent and Young Adult (AYA) Oncology","cat":"Screening / Prevention / Special"},{"id":"older_adult","name":"Older Adult Oncology","cat":"Screening / Prevention / Special"},{"id":"hiv","name":"Cancer in People with HIV","cat":"Screening / Prevention / Special"},{"id":"breast_risk","name":"Breast Cancer Risk Reduction","cat":"Screening / Prevention / Special"},{"id":"breast-screening","name":"Breast Cancer Screening and Diagnosis","cat":"Screening / Prevention / Special"},{"id":"colorectal_screening","name":"Colorectal Cancer Screening","cat":"Screening / Prevention / Special"},{"id":"genetics_bopp","name":"Genetic/Familial High-Risk Assessment: Breast, Ovarian, and Pancreatic","cat":"Screening / Prevention / Special"},{"id":"genetics_ceg","name":"Genetic/Familial High-Risk Assessment: Colorectal","cat":"Screening / Prevention / Special"},{"id":"lung_screening","name":"Lung Cancer Screening","cat":"Screening / Prevention / Special"},{"id":"prostate_detection","name":"Prostate Cancer Early Detection","cat":"Screening / Prevention / Special"}];

const VALID_IDS = new Set(GUIDELINES.map((g) => g.id));
const NAME_BY_ID = Object.fromEntries(GUIDELINES.map((g) => [g.id, g.name]));
const COOKIE_KEY = "cookie";
const META_KEY = "cookie_meta";
const CURSOR_KEY = "cron_cursor";
const PER_DAY = 3; // files refreshed per daily cron run (86 / 3 ≈ monthly full cycle)

const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });

// Fetch a guideline PDF live from nccn.org using the stored cookie.
// Returns { ok, buf?, status?, ctype? }.
async function fetchLive(env, id) {
  const cookie = await env.NCCN_KV.get(COOKIE_KEY);
  if (!cookie) return { ok: false, error: "no-cookie" };
  const upstream = await fetch(
    `https://www.nccn.org/professionals/physician_gls/pdf/${id}.pdf`,
    {
      headers: {
        authority: "www.nccn.org",
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "accept-language": "zh-TW,zh;q=0.9",
        "cache-control": "max-age=0",
        cookie,
      },
    }
  );
  const ctype = (upstream.headers.get("content-type") || "").toLowerCase();
  if (!upstream.ok || !ctype.includes("pdf")) {
    return { ok: false, status: upstream.status, ctype };
  }
  const buf = await upstream.arrayBuffer();
  // Guard: a real PDF starts with "%PDF".
  const head = new Uint8Array(buf.slice(0, 4));
  if (String.fromCharCode(...head) !== "%PDF") {
    return { ok: false, status: upstream.status, ctype, error: "not-pdf" };
  }
  return { ok: true, buf };
}

// Download live and store into R2. Returns a small result record.
async function refreshOne(env, id) {
  const r = await fetchLive(env, id);
  if (!r.ok) return { id, ok: false, error: r.error || `${r.status} ${r.ctype}` };
  await env.PDFS.put(`${id}.pdf`, r.buf, {
    httpMetadata: { contentType: "application/pdf" },
  });
  return { id, ok: true, size: r.buf.byteLength };
}

// Refresh `n` guidelines starting at the stored cursor; advance & persist cursor.
async function refreshBatch(env, n) {
  const cursorRaw = await env.NCCN_KV.get(CURSOR_KEY);
  let cursor = parseInt(cursorRaw || "0", 10);
  if (!Number.isFinite(cursor) || cursor < 0) cursor = 0;
  const results = [];
  for (let i = 0; i < n; i++) {
    const g = GUIDELINES[cursor % GUIDELINES.length];
    results.push(await refreshOne(env, g.id));
    cursor = (cursor + 1) % GUIDELINES.length;
  }
  await env.NCCN_KV.put(CURSOR_KEY, String(cursor));
  return { cursor, results };
}

// Serve a guideline PDF: prefer R2 cache, fall back to live (and cache it).
async function servePdf(env, id, { download }) {
  const today = new Date().toISOString().slice(0, 10);
  const filename = `NCCN-${id}-${today}.pdf`;
  const disposition = download
    ? `attachment; filename="${filename}"`
    : `inline; filename="${filename}"`;

  const obj = await env.PDFS.get(`${id}.pdf`);
  if (obj) {
    const headers = new Headers();
    headers.set("content-type", "application/pdf");
    headers.set("content-disposition", disposition);
    headers.set("content-length", String(obj.size));
    headers.set("cache-control", "private, max-age=0, must-revalidate");
    if (obj.uploaded) headers.set("x-r2-uploaded", obj.uploaded.toISOString());
    return new Response(obj.body, { status: 200, headers });
  }

  // Not cached yet — fetch live and store for next time.
  const r = await fetchLive(env, id);
  if (!r.ok) {
    const msg =
      r.error === "no-cookie"
        ? "尚未設定 NCCN cookie，請回首頁貼上 cookie。"
        : `尚未快取且即時抓取失敗（cookie 可能過期，NCCN 回 ${r.status} ${r.ctype}）。`;
    return new Response(msg, { status: 502 });
  }
  await env.PDFS.put(`${id}.pdf`, r.buf, {
    httpMetadata: { contentType: "application/pdf" },
  });
  const headers = new Headers();
  headers.set("content-type", "application/pdf");
  headers.set("content-disposition", disposition);
  headers.set("content-length", String(r.buf.byteLength));
  return new Response(r.buf, { status: 200, headers });
}

export default {
  // Daily cron: refresh PER_DAY guidelines round-robin.
  async scheduled(event, env, ctx) {
    const out = await refreshBatch(env, PER_DAY);
    console.log("cron refresh", JSON.stringify(out));
  },

  async fetch(request, env) {
    const url = new URL(request.url);
    const { pathname } = url;

    if (pathname === "/" || pathname === "/index.html") {
      return html(renderPage(request));
    }

    if (pathname === "/api/cookie-status" && request.method === "GET") {
      const cookie = await env.NCCN_KV.get(COOKIE_KEY);
      const meta = await env.NCCN_KV.get(META_KEY, "json");
      return json({
        set: !!cookie,
        length: cookie ? cookie.length : 0,
        updated: meta?.updated || null,
      });
    }

    if (pathname === "/api/cookie" && request.method === "POST") {
      let value = "";
      const ct = request.headers.get("content-type") || "";
      if (ct.includes("application/json")) {
        const body = await request.json().catch(() => ({}));
        value = (body.cookie || "").trim();
      } else {
        const form = await request.formData();
        value = String(form.get("cookie") || "").trim();
      }
      if (!value) return json({ ok: false, error: "cookie 內容為空" }, 400);
      await env.NCCN_KV.put(COOKIE_KEY, value);
      await env.NCCN_KV.put(META_KEY, JSON.stringify({ updated: new Date().toISOString() }));
      return json({ ok: true, length: value.length });
    }

    // R2 inventory: which guidelines are cached + when.
    if (pathname === "/api/r2-status" && request.method === "GET") {
      const listed = await env.PDFS.list({ limit: 1000 });
      const map = {};
      for (const o of listed.objects) {
        const id = o.key.replace(/\.pdf$/, "");
        map[id] = { size: o.size, uploaded: o.uploaded ? o.uploaded.toISOString() : null };
      }
      const cursorRaw = await env.NCCN_KV.get(CURSOR_KEY);
      return json({
        cached: map,
        count: Object.keys(map).length,
        total: GUIDELINES.length,
        cursor: parseInt(cursorRaw || "0", 10) || 0,
        perDay: PER_DAY,
      });
    }

    // Manual refresh trigger (gated by Access). ?n= how many, ?id= a single id.
    if (pathname === "/api/refresh" && request.method === "POST") {
      const single = url.searchParams.get("id");
      if (single) {
        if (!VALID_IDS.has(single)) return json({ ok: false, error: "unknown id" }, 404);
        return json(await refreshOne(env, single));
      }
      let n = parseInt(url.searchParams.get("n") || "3", 10);
      if (!Number.isFinite(n) || n < 1) n = 3;
      n = Math.min(n, 25); // stay under Workers subrequest limits
      return json(await refreshBatch(env, n));
    }

    if (pathname.startsWith("/pdf/")) {
      const id = decodeURIComponent(pathname.slice("/pdf/".length));
      if (!VALID_IDS.has(id)) return new Response("Unknown id", { status: 404 });
      return servePdf(env, id, { download: false });
    }

    if (pathname.startsWith("/dl/")) {
      const id = decodeURIComponent(pathname.slice("/dl/".length));
      if (!VALID_IDS.has(id)) return new Response("Unknown id", { status: 404 });
      return servePdf(env, id, { download: true });
    }

    if (pathname.startsWith("/preview/")) {
      const id = decodeURIComponent(pathname.slice("/preview/".length));
      if (!VALID_IDS.has(id)) return new Response("Unknown id", { status: 404 });
      return html(renderViewer(id));
    }

    return new Response("Not found", { status: 404 });
  },
};

const html = (body) =>
  new Response(body, { headers: { "content-type": "text/html; charset=utf-8" } });

function renderPage(request) {
  const user = request.headers.get("cf-access-authenticated-user-email") || "";
  const data = JSON.stringify(GUIDELINES);
  return `<!doctype html>
<html lang="zh-Hant">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>NCCN Guidelines 下載</title>
<style>
  :root { color-scheme: light dark; }
  * { box-sizing: border-box; }
  body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang TC", "Microsoft JhengHei", sans-serif; background: #f6f7f9; color: #1a1a1a; }
  @media (prefers-color-scheme: dark) { body { background: #14161a; color: #e7e9ec; } }
  header { padding: 20px 16px 8px; max-width: 940px; margin: 0 auto; }
  h1 { font-size: 1.35rem; margin: 0 0 4px; }
  .sub { font-size: .8rem; opacity: .65; }
  main { max-width: 940px; margin: 0 auto; padding: 0 16px 60px; }
  .bar { position: sticky; top: 0; padding: 12px 0; background: inherit; z-index: 5; }
  input[type=search] { width: 100%; padding: 11px 14px; font-size: 1rem; border-radius: 10px; border: 1px solid rgba(128,128,128,.35); background: rgba(128,128,128,.08); color: inherit; }
  .status { font-size: .78rem; padding: 8px 12px; border-radius: 8px; margin: 8px 0; }
  .status.ok { background: rgba(46,160,67,.14); }
  .status.warn { background: rgba(219,109,0,.16); }
  .row2 { display: flex; gap: 8px; flex-wrap: wrap; }
  .row2 > div { flex: 1; min-width: 220px; }
  details { margin: 8px 0 4px; font-size: .82rem; }
  summary { cursor: pointer; opacity: .8; }
  textarea { width: 100%; min-height: 90px; margin-top: 8px; padding: 10px; border-radius: 8px; border: 1px solid rgba(128,128,128,.35); background: rgba(128,128,128,.08); color: inherit; font-family: ui-monospace, monospace; font-size: .8rem; }
  button { font: inherit; cursor: pointer; border: 0; border-radius: 8px; padding: 8px 14px; background: #2563eb; color: #fff; font-weight: 600; }
  button.sm { padding: 6px 12px; font-size: .85rem; }
  button.ghost { background: rgba(128,128,128,.16); color: inherit; }
  h2.cat { font-size: .82rem; text-transform: uppercase; letter-spacing: .05em; opacity: .55; margin: 22px 0 6px; }
  ul { list-style: none; margin: 0; padding: 0; display: grid; gap: 6px; }
  li { display: flex; align-items: center; gap: 10px; padding: 10px 12px; border-radius: 10px; background: rgba(128,128,128,.07); border: 1px solid rgba(128,128,128,.14); }
  li .name { flex: 1; min-width: 0; }
  li .name b { font-weight: 600; font-size: .95rem; }
  li .name code { font-size: .72rem; opacity: .5; }
  .dot { font-size: .68rem; padding: 1px 7px; border-radius: 999px; margin-left: 8px; vertical-align: middle; white-space: nowrap; }
  .dot.cached { background: rgba(46,160,67,.2); color: #1a7f37; }
  .dot.miss { background: rgba(128,128,128,.2); opacity: .8; }
  @media (prefers-color-scheme: dark) { .dot.cached { color: #57d977; } }
  a.btn { text-decoration: none; }
  .empty { opacity: .5; padding: 20px 4px; }
</style>
</head>
<body>
<header>
  <h1>NCCN Guidelines</h1>
  <div class="sub">R2 快取 + 每日 cron 更新，可線上預覽（pdf.js）或下載${user ? " · 登入身分：" + escapeHtml(user) : ""}</div>
</header>
<main>
  <div class="bar">
    <input id="q" type="search" placeholder="搜尋癌別 / 關鍵字 / 代碼…" autocomplete="off">
    <div class="row2">
      <div id="cookieStatus" class="status warn">檢查 cookie…</div>
      <div id="r2Status" class="status ok">檢查 R2 快取…</div>
    </div>
    <details id="cookieBox">
      <summary>更新 NCCN cookie（過期時使用）</summary>
      <p style="opacity:.7;margin:8px 0 0">登入 <a href="https://www.nccn.org/login" target="_blank" rel="noopener">nccn.org</a>，用 cookie-cook 擴充功能複製 <b>Http Header value</b>，貼在下方存檔。</p>
      <textarea id="cookieInput" placeholder="ASP.NET_SessionId=…; …"></textarea>
      <div style="margin-top:8px"><button id="saveCookie" class="sm">儲存 cookie</button> <span id="saveMsg" style="font-size:.8rem"></span></div>
    </details>
  </div>
  <div id="list"></div>
</main>
<script>
const DATA = ${data};
let R2 = {};
const listEl = document.getElementById('list');
const q = document.getElementById('q');
function esc(s){const d=document.createElement('div');d.textContent=s;return d.innerHTML;}
function badge(id){
  const c = R2[id];
  if (c) {
    const d = c.uploaded ? new Date(c.uploaded).toLocaleDateString() : '';
    return '<span class="dot cached">R2 ✓ ' + d + '</span>';
  }
  return '<span class="dot miss">未快取</span>';
}
function render(filter) {
  const f = filter.trim().toLowerCase();
  const groups = {};
  for (const g of DATA) {
    if (f && !g.name.toLowerCase().includes(f) && !g.id.toLowerCase().includes(f)) continue;
    (groups[g.cat] ||= []).push(g);
  }
  const cats = Object.keys(groups);
  if (!cats.length) { listEl.innerHTML = '<div class="empty">沒有符合的項目</div>'; return; }
  listEl.innerHTML = cats.map(cat =>
    '<h2 class="cat">' + cat + '</h2><ul>' + groups[cat].map(g =>
      '<li><span class="name"><b>' + esc(g.name) + '</b> ' + badge(g.id) + '<br><code>' + g.id + '.pdf</code></span>' +
      '<a class="btn" href="/preview/' + encodeURIComponent(g.id) + '" target="_blank"><button class="sm ghost">預覽</button></a>' +
      '<a class="btn" href="/dl/' + encodeURIComponent(g.id) + '"><button class="sm">下載</button></a></li>'
    ).join('') + '</ul>'
  ).join('');
}
q.addEventListener('input', () => render(q.value));

async function refreshCookieStatus() {
  const el = document.getElementById('cookieStatus');
  try {
    const s = await (await fetch('/api/cookie-status')).json();
    if (s.set) {
      el.className = 'status ok';
      el.textContent = '✓ cookie 已設定（' + s.length + ' 字元' + (s.updated ? '，更新於 ' + new Date(s.updated).toLocaleString() : '') + '）';
    } else {
      el.className = 'status warn';
      el.textContent = '⚠ 尚未設定 cookie';
      document.getElementById('cookieBox').open = true;
    }
  } catch (e) { el.textContent = '無法取得 cookie 狀態'; }
}
async function refreshR2Status() {
  const el = document.getElementById('r2Status');
  try {
    const s = await (await fetch('/api/r2-status')).json();
    R2 = s.cached || {};
    el.className = 'status ok';
    el.textContent = '📦 R2 已快取 ' + s.count + ' / ' + s.total + ' 份（cron 每天更新 ' + s.perDay + ' 份）';
    render(q.value);
  } catch (e) { el.textContent = '無法取得 R2 狀態'; }
}
document.getElementById('saveCookie').addEventListener('click', async () => {
  const btn = document.getElementById('saveCookie');
  const msg = document.getElementById('saveMsg');
  const cookie = document.getElementById('cookieInput').value.trim();
  if (!cookie) { msg.textContent = 'cookie 不可為空'; return; }
  btn.disabled = true; msg.textContent = '儲存中…';
  try {
    const s = await (await fetch('/api/cookie', { method: 'POST', headers: {'content-type':'application/json'}, body: JSON.stringify({cookie}) })).json();
    msg.textContent = s.ok ? '✓ 已儲存' : ('失敗：' + (s.error||''));
    if (s.ok) { document.getElementById('cookieInput').value=''; refreshCookieStatus(); }
  } catch (e) { msg.textContent = '儲存失敗'; }
  btn.disabled = false;
});
render('');
refreshCookieStatus();
refreshR2Status();
</script>
</body>
</html>`;
}

function renderViewer(id) {
  const name = NAME_BY_ID[id] || id;
  return `<!doctype html>
<html lang="zh-Hant">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(name)} — NCCN 預覽</title>
<style>
  :root { color-scheme: light dark; }
  * { box-sizing: border-box; }
  body { margin: 0; background: #52565c; color: #eee; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang TC", sans-serif; }
  .top { position: sticky; top: 0; display: flex; align-items: center; gap: 12px; padding: 8px 14px; background: #2b2d31; box-shadow: 0 1px 6px rgba(0,0,0,.4); z-index: 10; flex-wrap: wrap; }
  .top .title { font-size: .9rem; font-weight: 600; flex: 1; min-width: 160px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .top a, .top button { font: inherit; text-decoration: none; border: 0; border-radius: 7px; padding: 6px 12px; font-size: .82rem; cursor: pointer; }
  .top .dl { background: #2563eb; color: #fff; font-weight: 600; }
  .top .zoom { background: #3a3d42; color: #eee; }
  #pages { padding: 18px 8px 60px; display: flex; flex-direction: column; align-items: center; gap: 14px; }
  #pages canvas { max-width: 100%; box-shadow: 0 2px 12px rgba(0,0,0,.5); background: #fff; }
  #msg { text-align: center; padding: 40px 16px; opacity: .8; font-size: .9rem; }
</style>
</head>
<body>
<div class="top">
  <a href="/" class="zoom">← 清單</a>
  <span class="title">${escapeHtml(name)}</span>
  <button class="zoom" id="zout">−</button>
  <button class="zoom" id="zin">＋</button>
  <a class="dl" href="/dl/${encodeURIComponent(id)}">下載 PDF</a>
</div>
<div id="msg">載入中…</div>
<div id="pages"></div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
<script>
(function(){
  const pdfjsLib = window['pdfjs-dist/build/pdf'] || window.pdfjsLib;
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
  const pagesEl = document.getElementById('pages');
  const msgEl = document.getElementById('msg');
  let pdfDoc = null, scale = 1.3;
  async function renderAll(){
    pagesEl.innerHTML = '';
    for (let n = 1; n <= pdfDoc.numPages; n++) {
      const page = await pdfDoc.getPage(n);
      const vp = page.getViewport({ scale: scale * (window.devicePixelRatio || 1) });
      const canvas = document.createElement('canvas');
      canvas.width = vp.width; canvas.height = vp.height;
      canvas.style.width = (vp.width / (window.devicePixelRatio || 1)) + 'px';
      pagesEl.appendChild(canvas);
      await page.render({ canvasContext: canvas.getContext('2d'), viewport: vp }).promise;
    }
  }
  pdfjsLib.getDocument('/pdf/${encodeURIComponent(id)}').promise.then(async (doc) => {
    pdfDoc = doc; msgEl.style.display = 'none'; await renderAll();
  }).catch((e) => { msgEl.textContent = '無法載入 PDF：' + (e && e.message ? e.message : e) + '（可能尚未快取或 cookie 過期）'; });
  document.getElementById('zin').onclick = () => { scale = Math.min(scale + 0.2, 3); if (pdfDoc) renderAll(); };
  document.getElementById('zout').onclick = () => { scale = Math.max(scale - 0.2, 0.5); if (pdfDoc) renderAll(); };
})();
</script>
</body>
</html>`;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
