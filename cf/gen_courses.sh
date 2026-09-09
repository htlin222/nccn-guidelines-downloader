#!/usr/bin/env bash
# courses/**/*.md + courses/figures/**/*.html  →  src/data/courses.js
#
#   bash gen_courses.sh              # 產生
#   bash gen_courses.sh --check      # 只檢查產物是否與來源同步（CI 用），不寫檔
#
# 為什麼要有這個編譯步驟：Worker 裡沒有檔案系統，而把 markdown parser 搬進 Worker
# 等於每個請求重做一次同樣的解析。產物是純 HTML 字串，Worker 直接 import
# ——`src/data/algorithms.js` 已經走過這條路。
#
# 圖的 HTML 也一起編進來（只取 <section class="fig"> 那一段），所以網頁上看到的圖
# 跟 gen_figures.sh 截成 PNG 的是同一份原始碼，不可能長得不一樣。
set -u
cd "$(dirname "$0")" || exit 1

OUT=src/data/courses.js
MODE=${1:-write}

# 用環境變數而不是位置參數把模式傳進去：`node -e 'script' --check` 會被 node 當成
# 自己的旗標（"either --check or --eval can be used, not both"），而不是 script 的
# 參數。這個錯誤訊息完全看不出跟 gen_courses.sh 有關。
export COURSE_MODE="$MODE"

node --input-type=module -e '
import fs from "node:fs";
import path from "node:path";
import { parseModule, splitFrontmatter, courseTree, courseByRef } from "./src/lib/course.js";
import { NAME_BY_ID } from "./src/data/catalog.js";

const MODE = process.env.COURSE_MODE || "write";
const OUT = "src/data/courses.js";

// ---- 圖：抽出 <section class="fig"> 與 HTML 註解裡的 metadata --------------
const figures = {};
const figDir = "courses/figures";
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => {
  const p = path.join(d, e.name);
  return e.isDirectory() ? walk(p) : p.endsWith(".html") ? [p] : [];
});
for (const f of fs.existsSync(figDir) ? walk(figDir) : []) {
  const src = fs.readFileSync(f, "utf8");
  const meta = /<!--\s*fig\n([\s\S]*?)\n-->/.exec(src);
  if (!meta) { console.error("圖缺 <!-- fig --> metadata：" + f); process.exit(1); }
  const get = (k) => {
    const m = new RegExp("^" + k + ":\\s*(.+)$", "m").exec(meta[1]);
    return m ? m[1].trim() : "";
  };
  const id = get("id");
  if (!id) { console.error("圖缺 id：" + f); process.exit(1); }
  // 只取畫布本身。整份 HTML 含 <head> 與 <link>，塞進文章裡會壞掉。
  // class 要整段留著（"fig dense tight"），不能寫死成 "fig"：dense/tight 是密度
  // 修飾子，掉了的話網頁上的圖會用預設間距而溢出，PNG 卻是對的——兩邊不一樣，
  // 而這正是這整套「同一份原始碼」要避免的事。
  // 整個開標籤都要留著，不只 class。圖可以在 section 上帶 style（例如覆寫
  // --fig-side-w），那些屬性掉了的話網頁版會用預設值而溢出，PNG 卻是對的——
  // 兩邊不一樣，正是這整套「同一份原始碼」要避免的事。第一版寫死 class="fig"、
  // 第二版只抓 class 屬性，都在加修飾子的當下才發現。
  const body = /<section (class="fig[^"]*"[^>]*)>([\s\S]*?)<\/section>/.exec(src);
  if (!body) { console.error("圖裡找不到 <section class=\"fig…\">：" + f); process.exit(1); }
  const cite = get("cite");
  figures[id] = {
    title: get("title"),
    kind: get("kind"),
    tags: (get("tags").match(/[\w-]+/g) || []),
    // cite 只留 refs 與 page，view 端用 lib/cite.js 現算 AMA 文字——編譯期算出來的
    // 日期會被凍在產物裡，過幾週就是錯的。
    refs: (cite.match(/"([A-Z][A-Z0-9]*-[0-9A-Z]+)"/g) || []).map((s) => s.slice(1, -1)),
    page: Number((/page:\s*(\d+)/.exec(cite) || [])[1] || 0) || null,
    file: f,
    html: `<section ${body[1]}>${body[2]}</section>`,
  };
}

// ---- 素材：ref → 頁碼與標題 ------------------------------------------------
//
// 這份對應**進版控**（courses/refmap.json），不是每次從 snippets/_src 現掃。
//
// 原因是 CI 紅了才想到的：_src 是 D1 page_text 的衍生檔、刻意不進版控，所以 CI 上
// 沒有它——第 9 段「原文對照」的頁碼與標題生不出來，產物就跟 committed 的 courses.js
// 不一樣，`--check` 直接失敗。生成檔不可以依賴一個不在版控的輸入。
//
// 所以 _src 的角色降為「更新這份對應」：本機有 _src 時重建並寫檔，之後一律**只讀
// refmap**。這樣本機與 CI 讀到的是同一份東西。
const REFMAP = "courses/refmap.json";
const srcRoot = "snippets/_src";
if (MODE !== "--check" && fs.existsSync(srcRoot)) {
  const pages = {}, titles = {};
  for (const gid of fs.readdirSync(srcRoot)) {
    const dir = path.join(srcRoot, gid);
    if (!fs.statSync(dir).isDirectory()) continue;
    pages[gid] = {}; titles[gid] = {};
    for (const f of fs.readdirSync(dir)) {
      if (!f.endsWith(".txt")) continue;
      const head = fs.readFileSync(path.join(dir, f), "utf8").slice(0, 400);
      const ref = (/^ref:\s*(.+)$/m.exec(head) || [])[1];
      const page = (/^page:\s*(\d+)$/m.exec(head) || [])[1];
      const title = (/^title:\s*(.*)$/m.exec(head) || [])[1] || "";
      if (ref && page) { pages[gid][ref.trim()] = Number(page); titles[gid][ref.trim()] = title.trim(); }
    }
    if (!Object.keys(pages[gid]).length) { delete pages[gid]; delete titles[gid]; }
  }
  if (Object.keys(pages).length)
    fs.writeFileSync(REFMAP, JSON.stringify({ pages, titles }, null, 1) + "\n");
}
const refmap = fs.existsSync(REFMAP)
  ? JSON.parse(fs.readFileSync(REFMAP, "utf8"))
  : { pages: {}, titles: {} };
const refPages = refmap.pages, refTitles = refmap.titles;

// ---- 課程 ------------------------------------------------------------------
const modules = [];
const usedFigures = new Set();
for (const track of fs.readdirSync("courses", { withFileTypes: true })) {
  if (!track.isDirectory() || track.name === "figures") continue;
  const dir = path.join("courses", track.name);
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".md")).sort()) {
    const p = path.join(dir, f);
    const text = fs.readFileSync(p, "utf8");
    let m;
    try {
      // gid 藏在 frontmatter 裡，而 parseModule 要的是單一 gid 的 ref 表——所以先
      // 讀一次 frontmatter 把表選好再交給它。parseModule 不自己查 gid，是為了讓
      // 它保持純函式、測試不必準備整個 snippets 目錄。
      const gid = splitFrontmatter(text).meta.nccn.gid;
      m = parseModule(text, {
        figures,
        pageByRef: refPages[gid] || {},
        refTitles: refTitles[gid] || {},
        gidName: NAME_BY_ID[gid] || gid,
      });
    } catch (e) { console.error(`${p}: ${e.message}`); process.exit(1); }
    modules.push({ ...m, file: p });
    for (const id of m.meta.figures || []) usedFigures.add(id);
  }
}

// 一張沒有任何課引用的圖仍然要留在庫裡（簡報用），但值得說出來——多半是課程改名時
// 漏掉的引用，而漏掉的話那張圖就從文章裡消失了，畫面上看不出來。
const orphan = Object.keys(figures).filter((id) => !usedFigures.has(id));
if (orphan.length) console.error("  沒有課引用的圖（仍收進圖庫）：" + orphan.join("、"));

const metas = modules.map((m) => m.meta);
const body =
  "// GENERATED by gen_courses.sh — 不要手改。改 courses/**.md 或 courses/figures/**.html\n" +
  "// 然後重跑 `bash gen_courses.sh`。CI 會用 --check 比對這個檔有沒有跟來源脫節。\n\n" +
  "export const COURSES = " + JSON.stringify(modules.map((m) => ({
    ...m.meta, sections: m.sections,
  })), null, 1) + ";\n\n" +
  "export const COURSE_TREE = " + JSON.stringify(courseTree(metas), null, 1) + ";\n\n" +
  "export const COURSE_BY_REF = " + JSON.stringify(courseByRef(metas), null, 1) + ";\n\n" +
  "export const FIGURES = " + JSON.stringify(figures, null, 1) + ";\n\n" +
  // 圖的 CSS 一起編進來。網頁上的圖與 gen_figures.sh 截出來的 PNG 必須是同一份
  // 原始碼「加」同一份樣式——只帶 HTML 的話，網頁上會是一堆沒有版面的純文字，而
  // PNG 仍然是對的，於是兩邊長得完全不一樣卻沒有任何東西會報。
  "export const FIGURE_CSS = " + JSON.stringify(fs.readFileSync("courses/figures/figure.css", "utf8")) + ";\n";

if (MODE === "--check") {
  const cur = fs.existsSync(OUT) ? fs.readFileSync(OUT, "utf8") : "";
  if (cur !== body) {
    console.error("src/data/courses.js 與來源不同步 — 跑 `bash gen_courses.sh`");
    process.exit(1);
  }
  console.log(`in sync: ${modules.length} modules, ${Object.keys(figures).length} figures`);
} else {
  fs.writeFileSync(OUT, body);
  console.log(`wrote ${OUT}: ${modules.length} modules, ${Object.keys(figures).length} figures`);
}
'
