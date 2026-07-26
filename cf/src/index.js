// NCCN guideline downloader — Cloudflare Worker
// - Access-gated hostname; shadcn-styled PWA card grid on the home page.
// - PDFs cached in R2; a daily cron refreshes them round-robin (PER_DAY at a time).
// - First-page thumbnails in R2 under thumb/<id>.webp; PWA icons under asset/.
// Routes: / (grid), /preview/:id (pdf.js), /pdf/:id (inline), /dl/:id (download),
//         /thumb/:id, /manifest.webmanifest, /sw.js, /icons/*, /apple-touch-icon.png,
//         /api/{cookie,cookie-status,r2-status,refresh}.

const GUIDELINES = [{"id":"all","name":"Acute Lymphoblastic Leukemia","cat":"Hematology"},{"id":"aml","name":"Acute Myeloid Leukemia","cat":"Hematology"},{"id":"ampullary","name":"Ampullary Adenocarcinoma","cat":"Gastrointestinal"},{"id":"anal","name":"Anal Carcinoma","cat":"Gastrointestinal"},{"id":"nmsc","name":"Basal Cell Skin Cancer","cat":"Skin & Melanoma"},{"id":"b-cell","name":"B-Cell Lymphomas","cat":"Hematology"},{"id":"btc","name":"Biliary Tract Cancers","cat":"Gastrointestinal"},{"id":"bladder","name":"Bladder Cancer","cat":"Genitourinary"},{"id":"bone","name":"Bone Cancer","cat":"Bone & Sarcoma"},{"id":"breast","name":"Breast Cancer","cat":"Breast"},{"id":"cns","name":"Central Nervous System Cancers","cat":"CNS"},{"id":"cervical","name":"Cervical Cancer","cat":"Gynecologic"},{"id":"cll","name":"Chronic Lymphocytic Leukemia/Small Lymphocytic Lymphoma","cat":"Hematology"},{"id":"cml","name":"Chronic Myeloid Leukemia","cat":"Hematology"},{"id":"colon","name":"Colon Cancer","cat":"Gastrointestinal"},{"id":"dfsp","name":"Dermatofibrosarcoma Protuberans","cat":"Skin & Melanoma"},{"id":"esophageal","name":"Esophageal and Esophagogastric Junction Cancers","cat":"Gastrointestinal"},{"id":"gastric","name":"Gastric Cancer","cat":"Gastrointestinal"},{"id":"gist","name":"Gastrointestinal Stromal Tumors","cat":"Gastrointestinal"},{"id":"gtn","name":"Gestational Trophoblastic Neoplasia","cat":"Gynecologic"},{"id":"hairy_cell","name":"Hairy Cell Leukemia","cat":"Hematology"},{"id":"head-and-neck","name":"Head and Neck Cancers","cat":"Head & Neck"},{"id":"hepatobiliary","name":"Hepatobiliary Cancers","cat":"Gastrointestinal"},{"id":"hcc","name":"Hepatocellular Carcinoma","cat":"Gastrointestinal"},{"id":"histiocytic_neoplasms","name":"Histiocytic Neoplasms","cat":"Hematology"},{"id":"hodgkins","name":"Hodgkin Lymphoma","cat":"Hematology"},{"id":"kaposi","name":"Kaposi Sarcoma","cat":"Skin & Melanoma"},{"id":"kidney","name":"Kidney Cancer","cat":"Genitourinary"},{"id":"cutaneous_melanoma","name":"Melanoma: Cutaneous","cat":"Skin & Melanoma"},{"id":"uveal","name":"Melanoma: Uveal","cat":"Skin & Melanoma"},{"id":"mcc","name":"Merkel Cell Carcinoma","cat":"Skin & Melanoma"},{"id":"meso_peritoneal","name":"Mesothelioma: Peritoneal","cat":"Thoracic"},{"id":"meso_pleural","name":"Mesothelioma: Pleural","cat":"Thoracic"},{"id":"Myeloma","name":"Multiple Myeloma","cat":"Hematology"},{"id":"mds","name":"Myelodysplastic Syndromes","cat":"Hematology"},{"id":"mlne","name":"Myeloid/Lymphoid Neoplasms with Eosinophilia and Tyrosine Kinase Gene Fusions","cat":"Hematology"},{"id":"mpn","name":"Myeloproliferative Neoplasms","cat":"Hematology"},{"id":"neuroendocrine","name":"Neuroendocrine and Adrenal Tumors","cat":"Neuroendocrine"},{"id":"nscl","name":"Non-Small Cell Lung Cancer","cat":"Thoracic"},{"id":"occult","name":"Occult Primary","cat":"Other"},{"id":"ovarian","name":"Ovarian Cancer/Fallopian Tube Cancer/Primary Peritoneal Cancer","cat":"Gynecologic"},{"id":"pancreatic","name":"Pancreatic Adenocarcinoma","cat":"Gastrointestinal"},{"id":"ped_all","name":"Pediatric Acute Lymphoblastic Leukemia","cat":"Pediatric"},{"id":"ped_b-cell","name":"Pediatric Aggressive Mature B-Cell Lymphomas","cat":"Pediatric"},{"id":"ped_cns","name":"Pediatric Central Nervous System Cancers","cat":"Pediatric"},{"id":"ped_hodgkin","name":"Pediatric Hodgkin Lymphoma","cat":"Pediatric"},{"id":"penile","name":"Penile Cancer","cat":"Genitourinary"},{"id":"cutaneous_lymphomas","name":"Primary Cutaneous Lymphomas","cat":"Hematology"},{"id":"prostate","name":"Prostate Cancer","cat":"Genitourinary"},{"id":"rectal","name":"Rectal Cancer","cat":"Gastrointestinal"},{"id":"small_bowel","name":"Small Bowel Adenocarcinoma","cat":"Gastrointestinal"},{"id":"sclc","name":"Small Cell Lung Cancer","cat":"Thoracic"},{"id":"sarcoma","name":"Soft Tissue Sarcoma","cat":"Bone & Sarcoma"},{"id":"squamous","name":"Squamous Cell Skin Cancer","cat":"Skin & Melanoma"},{"id":"amyloidosis","name":"Systemic Light Chain Amyloidosis","cat":"Hematology"},{"id":"mastocytosis","name":"Systemic Mastocytosis","cat":"Hematology"},{"id":"t-cell","name":"T-Cell Lymphomas","cat":"Hematology"},{"id":"testicular","name":"Testicular Cancer","cat":"Genitourinary"},{"id":"thymic","name":"Thymomas and Thymic Carcinomas","cat":"Thoracic"},{"id":"thyroid","name":"Thyroid Carcinoma","cat":"Head & Neck"},{"id":"uterine","name":"Uterine Neoplasms","cat":"Gynecologic"},{"id":"vulvar","name":"Vulvar Cancer","cat":"Gynecologic"},{"id":"waldenstroms","name":"Waldenström Macroglobulinemia / Lymphoplasmacytic Lymphoma","cat":"Hematology"},{"id":"wilms_tumor","name":"Wilms Tumor (Nephroblastoma)","cat":"Pediatric"},{"id":"antiemesis","name":"Antiemesis","cat":"Supportive Care"},{"id":"pain","name":"Adult Cancer Pain","cat":"Supportive Care"},{"id":"vte","name":"Cancer-Associated Venous Thromboembolic Disease","cat":"Supportive Care"},{"id":"fatigue","name":"Cancer-Related Fatigue","cat":"Supportive Care"},{"id":"distress","name":"Distress Management","cat":"Supportive Care"},{"id":"hct","name":"Hematopoietic Cell Transplantation","cat":"Supportive Care"},{"id":"growthfactors","name":"Hematopoietic Growth Factors","cat":"Supportive Care"},{"id":"immunotherapy","name":"Management of Immunotherapy-Related Toxicities","cat":"Supportive Care"},{"id":"palliative","name":"Palliative Care","cat":"Supportive Care"},{"id":"infections","name":"Prevention and Treatment of Cancer-Related Infections","cat":"Supportive Care"},{"id":"smoking","name":"Smoking Cessation","cat":"Supportive Care"},{"id":"survivorship","name":"Survivorship","cat":"Supportive Care"},{"id":"aya","name":"Adolescent and Young Adult (AYA) Oncology","cat":"Special Populations"},{"id":"older_adult","name":"Older Adult Oncology","cat":"Special Populations"},{"id":"hiv","name":"Cancer in People with HIV","cat":"Special Populations"},{"id":"breast_risk","name":"Breast Cancer Risk Reduction","cat":"Screening & Prevention"},{"id":"breast-screening","name":"Breast Cancer Screening and Diagnosis","cat":"Screening & Prevention"},{"id":"colorectal_screening","name":"Colorectal Cancer Screening","cat":"Screening & Prevention"},{"id":"genetics_bopp","name":"Genetic/Familial High-Risk Assessment: Breast, Ovarian, and Pancreatic","cat":"Genetics & Risk"},{"id":"genetics_ceg","name":"Genetic/Familial High-Risk Assessment: Colorectal","cat":"Genetics & Risk"},{"id":"lung_screening","name":"Lung Cancer Screening","cat":"Screening & Prevention"},{"id":"prostate_detection","name":"Prostate Cancer Early Detection","cat":"Screening & Prevention"}];

const CATS = [
  { name: "Hematology", icon: "droplet", color: "#ef4444" },
  { name: "Gastrointestinal", icon: "utensils", color: "#f59e0b" },
  { name: "Thoracic", icon: "wind", color: "#0ea5e9" },
  { name: "Breast", icon: "heart", color: "#ec4899" },
  { name: "Gynecologic", icon: "venus", color: "#d946ef" },
  { name: "Genitourinary", icon: "mars", color: "#06b6d4" },
  { name: "Head & Neck", icon: "scanface", color: "#8b5cf6" },
  { name: "Skin & Melanoma", icon: "sun", color: "#f97316" },
  { name: "CNS", icon: "activity", color: "#6366f1" },
  { name: "Bone & Sarcoma", icon: "bone", color: "#a8a29e" },
  { name: "Neuroendocrine", icon: "zap", color: "#10b981" },
  { name: "Pediatric", icon: "baby", color: "#14b8a6" },
  { name: "Other", icon: "help", color: "#64748b" },
  { name: "Supportive Care", icon: "buoy", color: "#22c55e" },
  { name: "Screening & Prevention", icon: "shield", color: "#3b82f6" },
  { name: "Genetics & Risk", icon: "flask", color: "#a855f7" },
  { name: "Special Populations", icon: "users", color: "#f43f5e" },
];

const VALID_IDS = new Set(GUIDELINES.map((g) => g.id));
const NAME_BY_ID = Object.fromEntries(GUIDELINES.map((g) => [g.id, g.name]));
const COOKIE_KEY = "cookie";
const META_KEY = "cookie_meta";
const CURSOR_KEY = "cron_cursor";
const PER_DAY = 3;
const BUILD_TIME = "2026-07-26 20:34 CST"; // stamped by deploy.sh

// Oncology drug brand<->generic synonyms so "keytruda" also finds "pembrolizumab".
const DRUG_GROUPS = [
  ["pembrolizumab","keytruda"],["nivolumab","opdivo"],["atezolizumab","tecentriq"],
  ["durvalumab","imfinzi"],["ipilimumab","yervoy"],["cemiplimab","libtayo"],["dostarlimab","jemperli"],
  ["trastuzumab","herceptin"],["pertuzumab","perjeta"],["trastuzumab emtansine","kadcyla","t-dm1"],
  ["trastuzumab deruxtecan","enhertu","t-dxd"],["bevacizumab","avastin"],["rituximab","rituxan"],
  ["cetuximab","erbitux"],["panitumumab","vectibix"],["ramucirumab","cyramza"],
  ["osimertinib","tagrisso"],["erlotinib","tarceva"],["gefitinib","iressa"],["afatinib","gilotrif"],
  ["dacomitinib","vizimpro"],["alectinib","alecensa"],["crizotinib","xalkori"],["lorlatinib","lorbrena"],
  ["brigatinib","alunbrig"],["ceritinib","zykadia"],["sotorasib","lumakras"],["adagrasib","krazati"],
  ["tepotinib","tepmetko"],["capmatinib","tabrecta"],["selpercatinib","retevmo"],["pralsetinib","gavreto"],
  ["larotrectinib","vitrakvi"],["entrectinib","rozlytrek"],["amivantamab","rybrevant"],["mobocertinib","exkivity"],
  ["imatinib","gleevec"],["dasatinib","sprycel"],["nilotinib","tasigna"],["bosutinib","bosulif"],["ponatinib","iclusig"],
  ["ibrutinib","imbruvica"],["acalabrutinib","calquence"],["zanubrutinib","brukinsa"],["venetoclax","venclexta"],
  ["lenalidomide","revlimid"],["pomalidomide","pomalyst"],["thalidomide","thalomid"],
  ["bortezomib","velcade"],["carfilzomib","kyprolis"],["ixazomib","ninlaro"],
  ["daratumumab","darzalex"],["isatuximab","sarclisa"],["elotuzumab","empliciti"],
  ["palbociclib","ibrance"],["ribociclib","kisqali"],["abemaciclib","verzenio"],
  ["olaparib","lynparza"],["niraparib","zejula"],["rucaparib","rubraca"],["talazoparib","talzenna"],
  ["enzalutamide","xtandi"],["abiraterone","zytiga"],["apalutamide","erleada"],["darolutamide","nubeqa"],
  ["sunitinib","sutent"],["sorafenib","nexavar"],["pazopanib","votrient"],["cabozantinib","cabometyx","cometriq"],
  ["lenvatinib","lenvima"],["regorafenib","stivarga"],["axitinib","inlyta"],["tivozanib","fotivda"],
  ["everolimus","afinitor"],["temsirolimus","torisel"],["vemurafenib","zelboraf"],["dabrafenib","tafinlar"],
  ["trametinib","mekinist"],["encorafenib","braftovi"],["binimetinib","mektovi"],["cobimetinib","cotellic"],
  ["gemcitabine","gemzar"],["capecitabine","xeloda"],["paclitaxel","taxol"],["nab-paclitaxel","abraxane"],
  ["docetaxel","taxotere"],["pemetrexed","alimta"],["irinotecan","camptosar"],["oxaliplatin","eloxatin"],
  ["fluorouracil","5-fu"],["doxorubicin","adriamycin"],["liposomal doxorubicin","doxil"],
  ["sacituzumab govitecan","trodelvy"],["enfortumab vedotin","padcev"],["brentuximab vedotin","adcetris"],
  ["polatuzumab vedotin","polivy"],["blinatumomab","blincyto"],["mosunetuzumab","lunsumio"],
  ["tucatinib","tukysa"],["neratinib","nerlynx"],["lapatinib","tykerb"],["margetuximab","margenza"],
  ["fam-trastuzumab","enhertu"],["mirvetuximab soravtansine","elahere"],
];
const SYN = (() => {
  const m = {};
  for (const g of DRUG_GROUPS) for (const t of g) {
    const k = t.toLowerCase();
    m[k] = (m[k] || []).concat(g.filter((x) => x.toLowerCase() !== k).map((x) => x.toLowerCase()));
  }
  return m;
})();
function buildMatch(q) {
  const toks = q.replace(/["*()]/g, " ").split(/\s+/).filter(Boolean);
  return toks.map((t) => {
    const alts = SYN[t.toLowerCase()];
    const terms = ['"' + t + '"*'];
    if (alts) for (const a of alts) terms.push('"' + a + '"*');
    return terms.length > 1 ? "(" + terms.join(" OR ") + ")" : terms[0];
  }).join(" ");
}
function queryTerms(q) {
  const toks = q.replace(/["*()]/g, " ").split(/\s+/).filter(Boolean);
  const out = [];
  for (const t of toks) { const k = t.toLowerCase(); if (out.indexOf(k) < 0) out.push(k); const alts = SYN[k]; if (alts) for (const a of alts) if (out.indexOf(a) < 0) out.push(a); }
  return out;
}

const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), { status, headers: { "content-type": "application/json; charset=utf-8" } });
const html = (body) =>
  new Response(body, { headers: { "content-type": "text/html; charset=utf-8" } });

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
  if (!upstream.ok || !ctype.includes("pdf")) return { ok: false, status: upstream.status, ctype };
  const buf = await upstream.arrayBuffer();
  const head = new Uint8Array(buf.slice(0, 4));
  if (String.fromCharCode(...head) !== "%PDF") return { ok: false, status: upstream.status, ctype, error: "not-pdf" };
  return { ok: true, buf };
}

async function refreshOne(env, id) {
  const r = await fetchLive(env, id);
  if (!r.ok) return { id, ok: false, error: r.error || `${r.status} ${r.ctype}` };
  await env.PDFS.put(`${id}.pdf`, r.buf, { httpMetadata: { contentType: "application/pdf" } });
  return { id, ok: true, size: r.buf.byteLength };
}

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

async function servePdf(env, id, { download, request }) {
  const key = `${id}.pdf`;
  const today = new Date().toISOString().slice(0, 10);
  const filename = `NCCN-${id}-${today}.pdf`;
  const disposition = `${download ? "attachment" : "inline"}; filename="${filename}"`;
  const rangeHeader = request ? request.headers.get("Range") : null;

  const head = await env.PDFS.head(key);
  if (head) {
    // HTTP Range → 206 so pdf.js can lazily fetch page data (mcq-bank style).
    if (rangeHeader && !download) {
      const m = /^bytes=(\d*)-(\d*)$/.exec(rangeHeader.trim());
      if (m && (m[1] !== "" || m[2] !== "")) {
        const total = head.size;
        let start = m[1] === "" ? Math.max(total - parseInt(m[2], 10), 0) : parseInt(m[1], 10);
        let end = m[2] === "" ? total - 1 : parseInt(m[2], 10);
        if (end > total - 1) end = total - 1;
        if (start > end || start >= total)
          return new Response(null, { status: 416, headers: { "content-range": `bytes */${total}`, "accept-ranges": "bytes" } });
        const length = end - start + 1;
        const part = await env.PDFS.get(key, { range: { offset: start, length } });
        return new Response(part.body, {
          status: 206,
          headers: {
            "content-type": "application/pdf",
            "content-length": String(length),
            "content-range": `bytes ${start}-${end}/${total}`,
            "accept-ranges": "bytes",
            "content-disposition": disposition,
            "cache-control": "private, max-age=86400",
          },
        });
      }
    }
    const obj = await env.PDFS.get(key);
    const headers = new Headers();
    headers.set("content-type", "application/pdf");
    headers.set("content-length", String(obj.size));
    headers.set("content-disposition", disposition);
    headers.set("accept-ranges", "bytes");
    headers.set("cache-control", "private, max-age=0, must-revalidate");
    if (obj.uploaded) headers.set("x-r2-uploaded", obj.uploaded.toISOString());
    return new Response(obj.body, { status: 200, headers });
  }

  const r = await fetchLive(env, id);
  if (!r.ok) {
    const msg = r.error === "no-cookie"
      ? "尚未設定 NCCN cookie，請回首頁貼上 cookie。"
      : `尚未快取且即時抓取失敗（cookie 可能過期，NCCN 回 ${r.status} ${r.ctype}）。`;
    return new Response(msg, { status: 502 });
  }
  await env.PDFS.put(key, r.buf, { httpMetadata: { contentType: "application/pdf" } });
  const headers = new Headers();
  headers.set("content-type", "application/pdf");
  headers.set("content-length", String(r.buf.byteLength));
  headers.set("content-disposition", disposition);
  headers.set("accept-ranges", "bytes");
  return new Response(r.buf, { status: 200, headers });
}

async function serveR2Asset(env, key, contentType, cache) {
  const obj = await env.PDFS.get(key);
  if (!obj) return new Response("Not found", { status: 404 });
  const headers = new Headers();
  headers.set("content-type", contentType);
  headers.set("content-length", String(obj.size));
  headers.set("cache-control", cache);
  return new Response(obj.body, { status: 200, headers });
}

export default {
  async scheduled(event, env, ctx) {
    const out = await refreshBatch(env, PER_DAY);
    console.log("cron refresh", JSON.stringify(out));
  },

  async fetch(request, env) {
    const url = new URL(request.url);
    const { pathname } = url;

    if (pathname === "/" || pathname === "/index.html") return html(renderPage(request));
    if (pathname === "/manifest.webmanifest") return manifestResponse();
    if (pathname === "/favicon.svg" || pathname === "/favicon.ico") return faviconResponse();
    if (pathname === "/sw.js")
      return new Response(SW_JS, { headers: { "content-type": "text/javascript; charset=utf-8", "cache-control": "no-cache" } });

    if (pathname === "/icons/icon-192.png") return serveR2Asset(env, "asset/icon-192.png", "image/png", "public, max-age=604800");
    if (pathname === "/icons/icon-512.png") return serveR2Asset(env, "asset/icon-512.png", "image/png", "public, max-age=604800");
    if (pathname === "/apple-touch-icon.png") return serveR2Asset(env, "asset/apple-touch.png", "image/png", "public, max-age=604800");

    if (pathname.startsWith("/thumb/")) {
      const id = decodeURIComponent(pathname.slice("/thumb/".length));
      if (!VALID_IDS.has(id)) return new Response("Unknown id", { status: 404 });
      return serveR2Asset(env, `thumb/${id}.webp`, "image/webp", "public, max-age=86400");
    }

    if (pathname === "/api/cookie-status" && request.method === "GET") {
      const cookie = await env.NCCN_KV.get(COOKIE_KEY);
      const meta = await env.NCCN_KV.get(META_KEY, "json");
      return json({ set: !!cookie, length: cookie ? cookie.length : 0, updated: meta?.updated || null });
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

    if (pathname === "/api/r2-status" && request.method === "GET") {
      const listed = await env.PDFS.list({ limit: 1000 });
      const map = {};
      for (const o of listed.objects) {
        if (!o.key.endsWith(".pdf")) continue;
        const id = o.key.replace(/\.pdf$/, "");
        map[id] = { size: o.size, uploaded: o.uploaded ? o.uploaded.toISOString() : null };
      }
      const cursorRaw = await env.NCCN_KV.get(CURSOR_KEY);
      const vobj = await env.PDFS.get("meta/versions.json");
      const versions = vobj ? await vobj.json().catch(() => ({})) : {};
      return json({ cached: map, versions, count: Object.keys(map).length, total: GUIDELINES.length, cursor: parseInt(cursorRaw || "0", 10) || 0, perDay: PER_DAY });
    }

    if (pathname === "/api/search" && request.method === "GET") {
      const q = (url.searchParams.get("q") || "").trim();
      const gid = url.searchParams.get("id");
      const cat = url.searchParams.get("cat");
      if (q.length < 2) return json({ q, results: [] });
      const match = buildMatch(q);
      if (!match) return json({ q, results: [] });
      let sql = "SELECT gid, page, name, cat, snippet(pages, 4, '<mark>', '</mark>', '…', 12) AS snip FROM pages WHERE pages MATCH ?";
      const binds = [match];
      if (gid && VALID_IDS.has(gid)) { sql += " AND gid = ?"; binds.push(gid); }
      if (cat) { sql += " AND cat = ?"; binds.push(cat); }
      sql += " ORDER BY rank LIMIT " + (gid ? 300 : 80);
      try {
        const { results } = await env.DB.prepare(sql).bind(...binds).all();
        return json({ q, terms: queryTerms(q), count: results.length, results });
      } catch (e) {
        return json({ q, error: String(e), results: [] });
      }
    }

    if (pathname === "/api/refresh" && request.method === "POST") {
      const single = url.searchParams.get("id");
      if (single) {
        if (!VALID_IDS.has(single)) return json({ ok: false, error: "unknown id" }, 404);
        return json(await refreshOne(env, single));
      }
      let n = parseInt(url.searchParams.get("n") || "3", 10);
      if (!Number.isFinite(n) || n < 1) n = 3;
      n = Math.min(n, 25);
      return json(await refreshBatch(env, n));
    }

    if (pathname.startsWith("/pdf/")) {
      const id = decodeURIComponent(pathname.slice("/pdf/".length));
      if (!VALID_IDS.has(id)) return new Response("Unknown id", { status: 404 });
      return servePdf(env, id, { download: false, request });
    }
    if (pathname.startsWith("/dl/")) {
      const id = decodeURIComponent(pathname.slice("/dl/".length));
      if (!VALID_IDS.has(id)) return new Response("Unknown id", { status: 404 });
      return servePdf(env, id, { download: true, request });
    }
    if (pathname.startsWith("/preview/")) {
      const id = decodeURIComponent(pathname.slice("/preview/".length));
      if (!VALID_IDS.has(id)) return new Response("Unknown id", { status: 404 });
      return html(renderViewer(id));
    }

    return new Response("Not found", { status: 404 });
  },
};

function faviconResponse() {
  // lucide "cross" glyph on a rounded shadcn-dark tile.
  const svg =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">' +
    '<rect width="24" height="24" rx="5" fill="#0b0f19"/>' +
    '<g transform="translate(4.6 4.6) scale(0.617)" fill="none" stroke="#60a5fa" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2z"/>' +
    '</g></svg>';
  return new Response(svg, { headers: { "content-type": "image/svg+xml; charset=utf-8", "cache-control": "public, max-age=604800" } });
}

function manifestResponse() {
  const manifest = {
    name: "NCCN Guidelines",
    short_name: "NCCN",
    description: "NCCN clinical practice guidelines — cached, previewable, downloadable.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#0b0f19",
    theme_color: "#0b0f19",
    categories: ["medical", "health", "education"],
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
  return new Response(JSON.stringify(manifest), {
    headers: { "content-type": "application/manifest+json; charset=utf-8" },
  });
}

const SW_JS = `
const SHELL = 'nccn-shell-v2';
const ASSETS = 'nccn-assets-v1';
const SHELL_URLS = ['/', '/manifest.webmanifest', '/icons/icon-192.png', '/icons/icon-512.png'];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(SHELL).then((c) => c.addAll(SHELL_URLS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(
    keys.filter((k) => k !== SHELL && k !== ASSETS).map((k) => caches.delete(k))
  )).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== self.location.origin) return;
  if (url.pathname.startsWith('/thumb/') || url.pathname.startsWith('/icons/')) {
    e.respondWith(caches.open(ASSETS).then(async (c) => {
      const hit = await c.match(e.request);
      if (hit) return hit;
      const res = await fetch(e.request);
      if (res.ok) c.put(e.request, res.clone());
      return res;
    }));
    return;
  }
  if (url.pathname === '/') {
    e.respondWith(caches.open(SHELL).then(async (c) => {
      const cached = await c.match('/');
      const network = fetch(e.request).then((res) => { if (res && res.ok) c.put('/', res.clone()); return res; }).catch(() => cached);
      return cached || network;
    }));
  }
});
`;

function renderPage(request) {
  const user = request.headers.get("cf-access-authenticated-user-email") || "";
  const data = JSON.stringify(GUIDELINES);
  const cats = JSON.stringify(CATS);
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
<script>(function(){try{var t=localStorage.getItem('theme');if(t)document.documentElement.dataset.theme=t;}catch(e){}})();</script>
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
  .brand{display:flex;align-items:center;gap:10px;font-weight:700;font-size:1.12rem;letter-spacing:-.01em;}
  .brand .logo{display:grid;place-items:center;width:32px;height:32px;border-radius:9px;
    background:hsl(var(--primary));color:hsl(var(--primary-foreground));font-size:16px;}
  .brand small{font-weight:500;font-size:.72rem;color:hsl(var(--muted-foreground));display:block;letter-spacing:0;}
  .spacer{flex:1;}
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
  .shdr{position:sticky;top:0;background:hsl(var(--card));font-size:.74rem;color:hsl(var(--muted-foreground));padding:4px 6px 8px;font-weight:600;z-index:1;}
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
  .thumb .tag{position:absolute;top:8px;left:8px;display:inline-flex;align-items:center;gap:5px;
    font-size:.66rem;font-weight:600;padding:3px 8px;border-radius:999px;color:#fff;backdrop-filter:blur(4px);}
  .thumb .ver{position:absolute;top:8px;right:8px;font-size:.62rem;font-weight:700;padding:2px 7px;border-radius:999px;color:#fff;background:#000000aa;backdrop-filter:blur(4px);letter-spacing:.02em;}
  .cardbody{padding:10px 11px 11px;display:flex;flex-direction:column;gap:6px;flex:1;}
  .cardbody .t{font-size:.82rem;font-weight:600;line-height:1.25;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}
  .cardbody .foot{margin-top:auto;display:flex;align-items:center;justify-content:space-between;gap:6px;padding-top:4px;}
  .r2{display:inline-flex;align-items:center;gap:4px;font-size:.66rem;color:hsl(var(--muted-foreground));}
  .r2 .d{width:7px;height:7px;border-radius:999px;background:#22c55e;}
  .r2.miss .d{background:hsl(var(--muted-foreground));}
  .dlbtn{display:grid;place-items:center;width:30px;height:30px;border-radius:8px;font-size:15px;
    border:1px solid hsl(var(--border));background:hsl(var(--card));color:inherit;cursor:pointer;}
  .dlbtn:hover{background:hsl(var(--accent));}
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
  footer{max-width:1180px;margin:0 auto;padding:0 20px 50px;color:hsl(var(--muted-foreground));font-size:.74rem;}
  footer a{color:inherit;}
</style>
</head>
<body>
<header>
  <div class="wrap">
    <div class="htop">
      <div class="brand"><span class="logo" id="logo"></span><span>NCCN Guidelines<small id="sub">${GUIDELINES.length} 份 · R2 · PWA</small></span></div>
      <div class="spacer"></div>
      <button class="iconbtn" id="settings" title="設定"></button>
      <button class="iconbtn" id="theme" title="切換主題"></button>
    </div>
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
<div id="setModal" class="modal" hidden><div class="sheet"><div class="sheethead"><b>設定</b><button class="xbtn" id="setClose">✕</button></div><span class="chip" id="cookieStatus">🔑 檢查 cookie…</span><div class="setlabel">更新 NCCN cookie（過期時使用）</div><p class="sethint">登入 <a href="https://www.nccn.org/login" target="_blank" rel="noopener">nccn.org</a>，用 cookie-cook 擴充功能複製 <b>Http Header value</b> 貼在下方存檔。</p><textarea id="cookieInput" placeholder="ASP.NET_SessionId=…; …"></textarea><div><button class="btn" id="saveCookie">儲存 cookie</button> <span id="saveMsg" style="font-size:.8rem;margin-left:6px"></span></div></div></div>
<footer>
  透過你的 NCCN 登入 cookie 代理下載官方 PDF。${user ? "登入身分：" + escapeHtml(user) + " · " : ""}
  每日 cron 輪流更新 ${PER_DAY} 份 · 資料屬 © NCCN，僅供個人臨床使用。<br>部署時間：${BUILD_TIME}
</footer>
<script>
const DATA = ${data};
const CATS = ${cats};
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
};
function svg(name){return '<svg viewBox="0 0 24 24" aria-hidden="true">'+(ICONS[name]||'')+'</svg>';}
const COLOR = {}; const ICON = {};
CATS.forEach(c=>{COLOR[c.name]=c.color;ICON[c.name]=c.icon;});
let R2 = {}, VER = {}, r2sig='';try{var _c=JSON.parse(localStorage.getItem('nccnr2')||'null');if(_c){R2=_c.cached||{};VER=_c.versions||{};r2sig=(_c.count||0)+':'+Object.keys(_c.versions||{}).length;}}catch(e){}
const listEl=document.getElementById('list'), q=document.getElementById('q');
var activeCat=null;try{activeCat=localStorage.getItem('nccncat')||null;}catch(e){}var filtersEl=document.getElementById('filters');
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
            +'<img loading="lazy" src="/thumb/'+encodeURIComponent(g.id)+'" alt="" onerror="this.remove()">'
      +'<span class="tag" style="background:'+col+'cc">'+svg(ICON[g.cat]||'help')+esc(g.cat)+'</span>'+(VER[g.id]?'<span class="ver" title="'+esc((VER[g.id].d||''))+'">v'+esc(VER[g.id].v)+'</span>':'')
    +'</div>'
    +'<div class="cardbody"><div class="t">'+esc(g.name)+'</div>'
      +'<div class="foot">'+r2html
        +'<span class="dlbtn" title="下載 PDF" data-dl="'+encodeURIComponent(g.id)+'">'+svg('download')+'</span>'
      +'</div></div></a>';
}
function buildGrid(){
  var html='';
  for(const c of CATS){
    const items=DATA.filter(function(g){return g.cat===c.name;});
    if(!items.length)continue;
    html+='<div class="catsec" data-cat="'+esc(c.name)+'"><div class="cat"><span class="ci" style="background:'+c.color+'22;color:'+c.color+'">'+svg(c.icon)+'</span><h2>'+esc(c.name)+'</h2><span class="count">'+items.length+'</span></div><div class="grid">'+items.map(card).join('')+'</div></div>';
  }
  listEl.innerHTML=html+'<div class="empty" id="emptyMsg" style="display:none">沒有符合的項目</div>';
}
function applyFilter(){
  var f=q.value.trim().toLowerCase();var any=false;
  var secs=listEl.querySelectorAll('.catsec');
  for(var i=0;i<secs.length;i++){var sec=secs[i];
    if(activeCat && sec.getAttribute('data-cat')!==activeCat){sec.style.display='none';continue;}
    var vis=false;var cards=sec.querySelectorAll('.card');
    for(var j=0;j<cards.length;j++){var cd=cards[j];
      var show=!f||(cd.getAttribute('data-h')||'').indexOf(f)>=0;
      cd.style.display=show?'':'none';if(show){vis=true;any=true;}
    }
    sec.style.display=vis?'':'none';
  }
  var em=document.getElementById('emptyMsg');if(em)em.style.display=any?'none':'';
}
q.addEventListener('input',applyFilter);
var sresEl=document.getElementById('searchResults');var sTimer=null;
function unmark(x){return esc(x||'').split('&lt;mark&gt;').join('<mark>').split('&lt;/mark&gt;').join('</mark>');}
function doSearch(){var qq=q.value.trim();if(qq.length<2){sresEl.innerHTML='';return;}var u='/api/search?q='+encodeURIComponent(qq)+(activeCat?'&cat='+encodeURIComponent(activeCat):'');fetch(u).then(function(r){return r.json();}).then(function(d){if((d.q||'')!==q.value.trim())return;var rs=d.results||[];if(!rs.length){sresEl.innerHTML='<div class="shdr">內容搜尋「'+esc(qq)+'」：無命中</div>';return;}var order=[],G={};rs.forEach(function(x){if(!G[x.gid]){G[x.gid]={name:x.name,cat:x.cat,hits:[]};order.push(x.gid);}G[x.gid].hits.push(x);});var html='<div class="shdr">命中 '+rs.length+' 頁 · '+order.length+' 份'+(activeCat?'（限 '+esc(activeCat)+'）':'')+'</div>';order.forEach(function(gid){var g=G[gid];html+='<div class="sgroup"><div class="sgh"><span class="sdot" style="background:'+(COLOR[g.cat]||'#64748b')+'"></span><b>'+esc(g.name)+'</b><span class="sgc">'+g.hits.length+' 頁</span></div>';g.hits.slice(0,5).forEach(function(x){html+='<a class="sitem" href="/preview/'+encodeURIComponent(x.gid)+'?page='+x.page+'&q='+encodeURIComponent(qq)+'"><span class="spage">p.'+x.page+'</span><div class="snip">'+unmark(x.snip)+'</div></a>';});if(g.hits.length>5)html+='<a class="smore" href="/preview/'+encodeURIComponent(gid)+'?page='+g.hits[5].page+'&q='+encodeURIComponent(qq)+'">還有 '+(g.hits.length-5)+' 頁…</a>';html+='</div>';});sresEl.innerHTML=html;}).catch(function(){});}
q.addEventListener('input',function(){clearTimeout(sTimer);sTimer=setTimeout(doSearch,250);});
listEl.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('.dlbtn');if(b){e.preventDefault();e.stopPropagation();location.href='/dl/'+b.getAttribute('data-dl');}});
function buildFilters(){var counts={};DATA.forEach(function(g){counts[g.cat]=(counts[g.cat]||0)+1;});var h='<button class="fchip'+(activeCat?'':' act')+'" data-cat="">全部 <b>'+DATA.length+'</b></button>';CATS.forEach(function(c){if(!counts[c.name])return;h+='<button class="fchip'+(activeCat===c.name?' act':'')+'" data-cat="'+c.name+'" style="--cc:'+c.color+'">'+svg(c.icon)+'<span>'+esc(c.name)+'</span> <b>'+counts[c.name]+'</b></button>';});filtersEl.innerHTML=h;filtersEl.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('.fchip');if(!b)return;activeCat=b.getAttribute('data-cat')||null;try{localStorage.setItem('nccncat',activeCat||'');}catch(e){}[].forEach.call(filtersEl.children,function(x){x.className='fchip'+(x===b?' act':'');});applyFilter();});}

const themeBtn=document.getElementById('theme');
function curTheme(){return document.documentElement.dataset.theme || (matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');}
function paintThemeBtn(){themeBtn.innerHTML=svg(curTheme()==='dark'?'sun':'moon');}
themeBtn.onclick=()=>{const next=curTheme()==='dark'?'light':'dark';document.documentElement.dataset.theme=next;try{localStorage.setItem('theme',next);}catch(e){}paintThemeBtn();
document.getElementById('settings').onclick=function(){document.getElementById('setModal').hidden=false;};
document.getElementById('setClose').onclick=function(){document.getElementById('setModal').hidden=true;};
document.getElementById('setModal').addEventListener('click',function(e){if(e.target===this)this.hidden=true;});
  document.querySelector('meta[name=theme-color]').setAttribute('content',next==='dark'?'#0b0f19':'#ffffff');};
paintThemeBtn();

async function refreshCookie(){
  const el=document.getElementById('cookieStatus');const gear=document.getElementById('settings');
  try{const s=await(await fetch('/api/cookie-status')).json();
    if(s.set){el.className='chip';el.textContent='🔑 cookie 已設定'+(s.updated?'（'+new Date(s.updated).toLocaleDateString()+'）':'');if(gear)gear.classList.remove('warn');}
    else{el.className='chip warn';el.textContent='⚠ 尚未設定 cookie';if(gear)gear.classList.add('warn');}
  }catch(e){el.textContent='🔑 cookie 狀態未知';}
}
async function refreshR2(){
  try{const s=await(await fetch('/api/r2-status')).json();
    var sig=(s.count||0)+':'+Object.keys(s.versions||{}).length;
    try{localStorage.setItem('nccnr2',JSON.stringify({cached:s.cached,versions:s.versions,count:s.count,total:s.total}));}catch(e){}
    R2=s.cached||{};VER=s.versions||{};
    var sub=document.getElementById('sub');if(sub)sub.textContent=s.count+' / '+s.total+' 份 · R2 · PWA';
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
buildFilters();buildGrid();applyFilter();refreshCookie();refreshR2();
document.addEventListener('keydown',function(e){if((e.metaKey||e.ctrlKey)&&(e.key==='f'||e.key==='F')){e.preventDefault();q.focus();q.select();}});
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('/sw.js').catch(()=>{}));}
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
  .btn.dl{background:hsl(var(--primary));color:hsl(var(--primary-fg));border-color:transparent;font-weight:600;font-size:.82rem;padding:6px 11px;}
  .grp{display:inline-flex;align-items:center;gap:2px;padding:2px;border:1px solid hsl(var(--border));border-radius:9px;background:hsl(var(--bar));}
  .grp .btn{border:0;padding:5px 7px;}
  .pageinput{width:36px;text-align:center;font:inherit;font-size:.8rem;border:1px solid hsl(var(--border));border-radius:6px;background:hsl(var(--bg));color:inherit;padding:3px;}
  .pcount{font-size:.76rem;color:hsl(var(--muted-fg));padding:0 4px;}
  .zpct{font-size:.76rem;color:hsl(var(--muted-fg));min-width:40px;text-align:center;}
  .body{flex:1;display:flex;min-height:0;}
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
  <button class="btn" id="theme" title="切換主題"></button>
  <a class="btn dl" href="/dl/${encodeURIComponent(id)}"><span id="dlic"></span>下載</a>
</div>
<div class="findbar" id="findbar" hidden><span class="fi" id="findIcon"></span><input id="findInput" type="search" placeholder="在本檔搜尋內文（含藥名同義詞）…"><span class="fcount" id="findCount"></span><button class="btn" id="findPrev" title="上一個"></button><button class="btn" id="findNext" title="下一個"></button><button class="btn" id="findClose" title="關閉">✕</button></div>
<div class="body">
  <aside class="rail" id="rail"></aside>
  <div class="viewer" id="viewer"><div id="msg"><img id="preview" class="preview" src="/thumb/${encodeURIComponent(id)}" alt="" onerror="this.remove()"><div class="ldot">載入完整版 PDF…</div></div></div>
</div>
<div id="snapModal" class="modal" hidden><div class="sheet"><div class="sheethead"><b>頁面截圖筆記</b><button class="btn" id="snapClose">✕</button></div><div class="meta" id="snapMeta"></div><img id="snapImg" class="snapimg" alt="page"><textarea id="snapNote" placeholder="在這裡寫你的 Markdown 筆記…"></textarea><div class="sheetfoot"><button class="btn" id="snapPng">下載 PNG</button><button class="btn dl" id="snapMd">下載 Markdown 筆記</button></div></div></div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
<script>
var PDF_URL='/pdf/${encodeURIComponent(id)}';
var GID=${JSON.stringify(id)};var GNAME=${JSON.stringify(name)};
(function(){
window.addEventListener('error',function(ev){var m=document.getElementById('msg');if(m){m.style.display='';m.textContent='執行錯誤：'+(ev.message||(ev.error&&ev.error.message)||ev);}});
if('scrollRestoration' in history){try{history.scrollRestoration='manual';}catch(e){}}
var pdfjsLib=window['pdfjs-dist/build/pdf']||window.pdfjsLib;
pdfjsLib.GlobalWorkerOptions.workerSrc='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
var ICONS={
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
  dl:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>'
};
function svg(n){return '<svg viewBox="0 0 24 24" aria-hidden="true">'+(ICONS[n]||'')+'</svg>';}
function $(i){return document.getElementById(i);}
$('back').innerHTML=svg('back');$('railBtn').innerHTML=svg('panel');
$('prev').innerHTML=svg('cl');$('next').innerHTML=svg('cr');
$('zout').innerHTML=svg('minus');$('zin').innerHTML=svg('plus');$('fit').innerHTML=svg('fit');$('dlic').innerHTML=svg('dl');$('snap').innerHTML=svg('camera');$('histBack').innerHTML=svg('histb');$('histFwd').innerHTML=svg('histf');
var themeBtn=$('theme');
function curTheme(){return document.documentElement.dataset.theme||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');}
function paintTheme(){themeBtn.innerHTML=svg(curTheme()==='dark'?'sun':'moon');}
themeBtn.onclick=function(){var nx=curTheme()==='dark'?'light':'dark';document.documentElement.dataset.theme=nx;try{localStorage.setItem('theme',nx);}catch(e){}paintTheme();};
paintTheme();

var viewer=$('viewer'),rail=$('rail'),msg=$('msg');
var pages=[],scale=1.2,fit=true,cur=1,dpr=window.devicePixelRatio||1,pdfDoc=null;
var hBack=[],hFwd=[],hlTerms=[];var VERSION='';fetch('/api/r2-status').then(function(r){return r.json();}).then(function(d){var v=(d.versions||{})[GID];if(v){VERSION=v.v;var tv=document.getElementById('tver');if(tv){tv.textContent='v'+v.v;if(v.d)tv.title=v.d;tv.hidden=false;}}}).catch(function(){});
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
  p.pg.getAnnotations().then(function(anns){ anns.forEach(function(a){ if(a.subtype!=='Link')return; var v=vp.convertToViewportRectangle(a.rect); var x=Math.min(v[0],v[2]),y=Math.min(v[1],v[3]),w=Math.abs(v[2]-v[0]),h=Math.abs(v[3]-v[1]); var L=document.createElement('a'); L.style.cssText='left:'+x+'px;top:'+y+'px;width:'+w+'px;height:'+h+'px;'; if(a.url){L.href=a.url;L.target='_blank';L.rel='noopener';}else if(a.dest){L.href='#';(function(dest){L.addEventListener('click',function(e){e.preventDefault();var pr=(typeof dest==='string')?pdfDoc.getDestination(dest):Promise.resolve(dest);Promise.resolve(pr).then(function(dd){if(!dd||!dd[0])return;pdfDoc.getPageIndex(dd[0]).then(function(idx){jumpTo(idx+1,true);});});});})(a.dest);} al.appendChild(L); }); }).catch(function(){});
}
function relayout(){ var sc=activeScale(); pages.forEach(function(p){ p.done=false; p.el.style.width=(p.w*sc)+'px'; p.el.style.height=(p.h*sc)+'px'; p.el.innerHTML=''; io.unobserve(p.el); io.observe(p.el); }); setZpct(); }
function scrollToPage(n){ if(pages[n-1]) pages[n-1].el.scrollIntoView({block:'start'}); }
function spanHit(t){t=(t||'').toLowerCase();for(var i=0;i<hlTerms.length;i++){if(t.indexOf(hlTerms[i])>=0)return true;}return false;}
function hlSpans(td){if(!hlTerms.length)return;for(var i=0;i<td.length;i++){if(td[i]&&spanHit(td[i].textContent))td[i].classList.add('hl');}}
function hlOne(tl){if(!tl)return;var sp=tl.querySelectorAll('span');for(var i=0;i<sp.length;i++){if(hlTerms.length&&spanHit(sp[i].textContent))sp[i].classList.add('hl');else sp[i].classList.remove('hl');}}
function applyHighlights(){for(var k=0;k<pages.length;k++){if(!pages[k].el)continue;var sp=pages[k].el.querySelectorAll('.textLayer span');for(var j=0;j<sp.length;j++){if(hlTerms.length&&spanHit(sp[j].textContent))sp[j].classList.add('hl');else sp[j].classList.remove('hl');}}}
function setHL(terms){hlTerms=(terms||[]).map(function(t){return String(t).toLowerCase();});applyHighlights();}
function jumpTo(n,rec){ if(n<1||n>pages.length)return; if(rec){hBack.push(cur);hFwd=[];} cur=n; $('pageNum').value=n; scrollToPage(n); try{localStorage.setItem('nccnpg:'+GID,n);}catch(e){} updateHist(); }
function updateHist(){ $('histBack').classList.toggle('off',!hBack.length); $('histFwd').classList.toggle('off',!hFwd.length); }
function markRail(){ var items=rail.children; for(var k=0;k<items.length;k++){ items[k].className='thumb'+(k===cur-1?' cur':''); } var c=items[cur-1]; if(c) c.scrollIntoView({block:'nearest'}); }
function updateCur(){ if(!pages.length)return; var vr=viewer.getBoundingClientRect(); var line=vr.top+vr.height*0.3; var best=1;
  for(var k=0;k<pages.length;k++){ if(pages[k].el.getBoundingClientRect().top<=line) best=k+1; else break; }
  if(best!==cur){ cur=best; $('pageNum').value=cur; markRail(); try{localStorage.setItem('nccnpg:'+GID,cur);}catch(e){} } }
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
$('histBack').onclick=function(){ if(!hBack.length)return; hFwd.push(cur); var n=hBack.pop(); cur=n; $('pageNum').value=n; scrollToPage(n); updateHist(); };
$('histFwd').onclick=function(){ if(!hFwd.length)return; hBack.push(cur); var n=hFwd.pop(); cur=n; $('pageNum').value=n; scrollToPage(n); updateHist(); };
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
})();
</script>
</body>
</html>`;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
