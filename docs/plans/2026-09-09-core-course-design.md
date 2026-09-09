# 核心課程（Core Course）設計

第四個 tab，在「臨床筆記」之後。它回答的問題跟前三個都不一樣：

| tab                | 問題                                         |
| ------------------ | -------------------------------------------- |
| NCCN / MD Anderson | 我要哪一份 PDF                               |
| 臨床筆記           | 病人在我面前，我現在要核對什麼               |
| **核心課程**       | **這個病該怎麼想——而且我等一下要講給別人聽** |

前三個是查詢，這一個是**學習與輸出**。差別不是內容多寡，是它必須「教得會」：
有心智模型、有必背、有記憶法、有考點，而且**圖要能直接拿去做投影片**。

---

## 0. 一句話

以癌別為 track、subtype × 治療線為模組，把 NCCN 拆成 13 堂圖文並茂的課；
每堂課的圖是白底 2:1、黑 + `#3d6869` 雙色、可匯出 PNG 的簡報素材，每張自帶
AMA 引用；文字裡每個決策節點都連回我們自己的 viewer。

先做乳癌。大腸癌、肺癌後續照同一套骨架長出來。

---

## 1. 四個決定

### 1.1 內容真相在 git，網頁是唯讀

`cf/courses/breast/10-mbc-her2.md`，TOML frontmatter + Markdown，跟 `cf/snippets/`
同一個格式。理由跟 snippets 一樣：課程本文是要被 review 的醫學內容，git 的 diff
是唯一能看出「這一版改了哪句話」的東西。

**不動 D1、不加 API。** 勾選狀態與遮罩進度走 `localStorage`（key `course:<id>:…`），
換裝置不同步——這是刻意的取捨：為了跨裝置同步而開一張 D1 表、一組讀寫 API 與一套
per-user 語意（`marks` 那幾張表目前沒有 email 欄，見 CLAUDE.md §5.6），代價遠大於
「在另一台電腦上重新勾一次」。要同步時再走 expand/contract 加上去。

### 1.2 預先編譯成 JS 模組，不在 Worker 裡解析 Markdown

`gen_courses.sh` 把 `courses/**.md` 編成 `cf/src/data/courses.js`（渲染好的 HTML
片段 + metadata），Worker 直接 import。這是 `data/algorithms.js` 已經走過的路：
Worker 沒有檔案系統，而把 markdown parser 搬進 Worker 等於每個請求重做一次同樣的
解析。生成檔開頭標 `// GENERATED — 不要手改`，測試比對它與 md 是否同步（照
`test/catalog.test.js` 檢查四份 copy 的模式）。

**Bundle 預算**：13 個模組每個約 15 KB HTML ≈ 200 KB。`viewer.js` 已經 108 KB。
可接受，但這是有上限的路——第三個癌別（約 40 個模組、600 KB）進來時就該把本文搬去
R2、只在 bundle 裡留索引。設計上先留這條退路：`courses.js` 只被 `views/course.js`
引用，換成 R2 讀取是單點改動。

### 1.3 圖永遠白底，不隨主題變

課程頁面跟主題走（Catppuccin，深淺兩色），**但圖不跟**。一張圖在深色模式下就是一張
白色卡片。

這不是偷懶，是這個功能的重點：**網頁上看到的那張圖，就是匯出成 PNG 貼進投影片的那
張圖**。如果圖跟著主題反白，就有兩套渲染，而只有其中一套會出現在你的演講裡——另一套
的排版問題你永遠不會發現。所見即所得比「深色模式好看」重要。

### 1.4 圖是手刻 HTML，但共用一套 primitives

每張圖一個 `.html` 檔，自由排版。但 class 來自共用的 `figure.css`：`.fig-node`、
`.fig-node.solid`、`.fig-group`、`.fig-lane`、`.fig-elbow`、`.fig-legend`……

手刻是為了每張圖都能長成它該有的樣子（矩陣、分解樹、環形、時間軸沒有一個共同的資料
模型）。共用 CSS 是為了第 30 張圖跟第 1 張看起來像同一個人做的，而且改配色只改一處。

---

## 2. 視覺系統

### 2.1 頁面：Starlight 式線上文檔

三欄：左 sidebar（癌別 → 四大群 → 13 模組，含完成度）、中內容、右 on-this-page
（九段錨點）。頂部沿用現有的 header + tab 列（`notes.js` 的 `.tabs` 抄過來，這一列
在四個頁面必須長得一樣）。

配色沿用專案既有的 HSL 變數，accent 換成品牌色 `#3d6869`（`hsl(181 27% 32%)`），
與 Catppuccin 的 teal 同一個位置但更沉。深淺兩套照 `notes.js` 的三段宣告
（`:root` / `[data-theme="dark"]` / `prefers-color-scheme`）。

### 2.2 圖：白底 2:1 雙色

**為什麼 2:1**：投影片是 16:9，上面要留標題、下面要留引用，中間剩下的內容區就是 2:1。
所以圖生下來就是 2:1，貼進去不用裁。

| 項目 | 值                                                      |
| ---- | ------------------------------------------------------- |
| 畫布 | 1600 × 800 CSS px（@2x → 3200 × 1600 PNG）              |
| 底   | `#ffffff`                                               |
| 墨   | `#111111`（正文、細線用 `#d4d4d4`）                     |
| 主色 | `#3d6869`（強調節點的底、群組標籤、圖例）               |
| 淡底 | `#3d6869` @ 6% / 12%（群組框、次要節點）                |
| 字   | 系統 sans（`-apple-system` … `PingFang TC`），最小 15px |
| 禁用 | 陰影、漸層、圓角 > 8px、第三個顏色                      |

節點語彙（兩張參考圖的共通語言）：

- `.fig-node` 白底 + 1px 細框 = 一般項目
- `.fig-node.solid` 實心 `#3d6869` 白字 = **這一格是重點**
- `.fig-node.ink` 實心黑白字 = 終點／結論
- `.fig-group` 淡底框 + 上方標籤 = 一群東西
- `.fig-group.dashed` 虛線 = 可選／範圍／不確定
- `.fig-elbow` 直角細線；`.fig-arrow` 細箭頭
- `.fig-legend` 右下角圖例

### 2.3 每張圖的引用

圖下方一列 plain text 的 AMA 引用 + copy 按鈕，沿用 `lib/cite.js` 的 `citeText()`
與 `copyText()`（它們已經被首頁與 viewer 用 `.toString()` 注入，是自足函式）。

一張圖若跨多個來源就列多筆。引用文字進 PNG 嗎？**不進**——PNG 只有圖，引用是網頁上
可複製的文字，因為你要貼的位置是投影片下緣的註腳，不是圖裡面。

---

## 3. 檔案佈局

```
cf/
  courses/
    breast/
      00-index.md              癌別首頁：學習路徑、這 13 課怎麼串
      01-subtypes.md           分子分型與 biomarker
      02-staging.md            分期與 workup
      03-dcis.md
      04-locoregional.md
      05-neoadjuvant.md
      06-early-hr.md
      07-early-her2.md
      08-early-tnbc.md
      09-mbc-hr.md
      10-mbc-her2.md
      11-mbc-tnbc.md
      12-special.md
      13-survivorship.md
    figures/
      figure.css               共用 primitives（唯一的配色真相）
      breast/
        mbc-her2-landscape.html
        mbc-her2-brain.html
        early-hr-decision.html
        ...
  gen_courses.sh               courses/**.md  → src/data/courses.js
  gen_figures.sh               figures/**.html → PNG → R2 figure/<id>.png
  verify_courses.py            四關（見 §6）
  src/
    views/course.js            三欄文檔頁
    data/courses.js            GENERATED
    lib/course.js              純函式：sidebar 樹、錨點、遮罩標記解析
```

### 模組 frontmatter

```toml
+++
id      = "breast/mbc-her2"
track   = "breast"
order   = 10
group   = "晚期"
title   = "轉移性 HER2 陽性乳癌"
oneline = "THP 打到進展，換 T-DXd，再來看有沒有腦轉移"
refs    = ["BINV-21", "BINV-24", "BINV-26", "BINV-P", "BINV-A"]
figures = ["breast/mbc-her2-landscape", "breast/mbc-her2-brain"]
nccn    = { gid = "breast", version = "6.2026" }
+++
```

`refs` 是這一課涵蓋的 NCCN 節點；驗證關會檢查每個 ref 真的存在於
`snippets/_src/<gid>/`，並用它生成第 9 段「原文對照」的 viewer 連結。

### 圖的 metadata

HTML 註解，讓檔案仍是可以直接在瀏覽器打開來調的合法 HTML：

```html
<!-- fig
id:    breast/mbc-her2-landscape
title: 轉移性 HER2 陽性乳癌的治療地景
kind:  matrix
tags:  [breast, her2, metastatic, landscape]
cite:  [{ gid: "breast", refs: ["BINV-24", "BINV-26"] }]
-->
```

---

## 4. 模組的九段骨架

固定，13 課都一樣——複習時才知道去哪裡找。

| #   | 段                  | 內容                                   | 互動                 |
| --- | ------------------- | -------------------------------------- | -------------------- |
| 1   | 這一課回答什麼      | 一句話 + 3 行 take-home                | —                    |
| 2   | Treatment landscape | 矩陣圖（分層 × 治療線）                | 圖 + 引用 copy       |
| 3   | 決策路徑            | 條列，每條掛 ref                       | 點 ref → viewer 該頁 |
| 4   | 關鍵試驗            | trial / 族群 / arm / 結果 / 改變了什麼 | —                    |
| 5   | 必背數字            | 劑量、cutoff、間隔、監測頻率           | **遮罩自我測驗**     |
| 6   | 記憶法              | 口訣、首字母、對比表                   | 遮罩                 |
| 7   | 門診 checklist      | 接 `snippets/<gid>/<ref>.md`           | **可勾選**           |
| 8   | 常見陷阱            | 考點／易錯／不該做的事                 | —                    |
| 9   | 原文對照            | 本課涵蓋的 ref + 頁碼                  | 直連 viewer          |

### 兩個互動的寫法

**遮罩**：markdown 裡寫 `==300 mg BID==`，編譯成
`<mark class="hide" data-k="…">`。點一下顯示，`localStorage` 記「這一段我已經全開過」。

**勾選**：第 7 段的清單編譯成 `<li data-ck="<module>:<n>">`，狀態存
`localStorage`。

清單本文由課程自己寫，**不從 `snippets/` 抽**——原本的設計是抽，實作時發現那是錯
的，理由有兩個。粒度不同：`snippets/<gid>/<ref>.md` 是「一頁一清單」，而課程的核對
是「一個臨床情境一清單」，本來就要跨 ref 整合（模組 10 一課就橫跨 BINV-21/24/25/26
/P/Q/R 七頁）。而且抽不到：這七頁裡只有 BINV-21 有 snippet（見 §7 的發現）。

所以兩者不是同一份東西的兩個副本，不存在漂移問題。代價是每一條都必須自己掛出處
ref，這由驗證關的第 2 關強制。

**第 9 段「原文對照」不寫在 md 裡**，由 `gen_courses.sh` 從 frontmatter 的 `refs`
生成。手寫的話它會慢慢跟 `refs` 對不上，而那種不一致沒有任何東西會報。

---

## 5. Crossref

雙向，跟現有的 notes ↔ viewer 一樣：

- 課程 → viewer：`/preview/breast?page=34`（`snippets/_src` 的 `page:` 欄）
- 課程 → 臨床筆記：`/notes?gid=breast&ref=BINV-21`
- viewer / notes → 課程：某個 ref 若被課程涵蓋，該頁面顯示「這一頁屬於【轉移性
  HER2 陽性乳癌】」的回連。反向索引由 `gen_courses.sh` 從所有 `refs` 建出來，
  存進 `courses.js` 的 `COURSE_BY_REF`。

---

## 6. 驗證：四關

照 `verify_snippets.py` 的精神，`verify_courses.py`：

1. **結構關**：九段齊全、frontmatter 欄位完整、`order` 不重複
2. **來源關**：每個 `refs` 存在於 `snippets/_src/<gid>/`；每個 `figures` 的檔案存在
3. **同步關**：`src/data/courses.js` 與 `courses/**.md` 一致（CI 會 fail）
4. **圖關**：每張圖能在 1600×800 內渲染完（不溢出）、只用到白/黑/`#3d6869` 三個色
   族、有 `cite`

**機械四關擋不住的東西**：把 `± pertuzumab` 寫成 `Add pertuzumab`、把試驗族群寫寬、
憑空生一句總結規則。`cf/snippets/RESUME.md` 記著這三類都實際發生過而且四關全過。
所以每個模組完成後要跑一次對抗性審查（`/doubt`），這是流程的一部分不是可選項。

`review` 欄位維持 NULL 直到臨床人審——機械關與對抗性審查都還是模型。

---

## 7. 素材現況（乳癌）

`snippets/_src/breast/` 有 42 個節點，含 BINV-A~R 全部 principles 頁：

| 課程模組       | 主要素材                                  | 狀態         |
| -------------- | ----------------------------------------- | ------------ |
| 01 分型        | BINV-A（biomarker）、BINV-N（gene assay） | ✅           |
| 02 分期        | BINV-1、ST-1、BINV-B（MRI）               | ✅           |
| 03 DCIS        | DCIS-1、DCIS-2                            | ✅           |
| 04 局部治療    | BINV-2、3、D、E、F、G、H、I               | ✅           |
| 05 Neoadjuvant | BINV-12、16、L、M                         | ✅           |
| 06 早期 HR+    | BINV-6、7、8、K、N、O                     | ✅           |
| 07 早期 HER2+  | BINV-5、9、16、M                          | ✅           |
| 08 早期 TNBC   | BINV-10、M                                | ✅           |
| 09 晚期 HR+    | BINV-21、**22、23**、P、Q、R              | ⚠️ 缺 22、23 |
| 10 晚期 HER2+  | BINV-21、**24、25**、P、Q、R              | ⚠️ 缺 24、25 |
| 11 晚期 TNBC   | BINV-21、**26、27**、P、Q                 | ⚠️ 缺 26、27 |
| 12 特殊        | IBC-1、PAGET-1、PHYLL-1、PREG-1、BINV-J   | ✅           |
| 13 追蹤        | BINV-17、28、C                            | ✅           |

**要先補 dump BINV-22～27**（六頁，晚期四個 subtype 的分線演算法），來源是 D1
`page_text`，做法照 `.devcontainer/dump-src.sh`。這是第一步。

---

## 8. 實作順序

1. 補 dump `BINV-22`～`BINV-27`
2. `figures/figure.css` + 兩張樣品圖（`mbc-her2-landscape`、`mbc-her2-brain`）
   - `gen_figures.sh`，**先給人看風格對不對**
3. `lib/course.js` + 單元測試（sidebar 樹、遮罩解析、錨點）
4. `gen_courses.sh` + `verify_courses.py`
5. `views/course.js` 三欄版面 + 四個路由 + tab 列第四項
6. 寫第一課 `10-mbc-her2.md` 全九段，跑對抗性審查
7. 其餘 12 課
8. 反向 crossref（viewer / notes 顯示「屬於哪一課」）
9. `/figures` 圖庫頁（檢索、下載 PNG）

第 2 步的樣品圖是這整份設計裡唯一無法用文字確認的東西，所以它排在最前面。

---

## 9. 明確不做

- **不引入 Astro / 任何 build step 到前端。** Starlight 是視覺與資訊架構的參考，
  不是要裝的框架。這個 repo 的前端是單一 template literal、沒有建置步驟，換掉那個
  慣例的成本遠大於一個文檔版面。
- **不做線上編輯／共筆。** 「共筆式」讀成視覺風格（醫學生共筆那種整理表）。真要線上
  編輯，走 `snippet_edits` 已經驗證過的 overlay 模式再加。
- **不把 PNG 放進 bundle。** 3200×1600 每張約 300 KB，50 張就 15 MB。PNG 進 R2
  `figure/<id>.png`，Worker 照 `thumb/` 的模式服務。
- **不做第三個癌別**，直到乳癌 13 課走完一輪並被人審過。骨架要先被真實內容證明。
