# MD Anderson Clinical Management Algorithms —— 設計

日期：2026-08-07
範圍：把 MD Anderson 的 [Clinical Management Algorithms](https://www.mdanderson.org/for-physicians/clinical-tools-resources/clinical-practice-algorithms/clinical-management-algorithms.html)
收成站內的第二個模組，沿用同一套 R2／D1／pdf.js viewer。

---

## 0. 先查證的事實

動手前實際抓過索引頁與 6 份 PDF，以下每一條都是量到的，不是推測：

| 事實 | 影響 |
|---|---|
| 索引頁分 4 類、列 87 條 | 四個新分類，跟 NCCN 的 17 類分開 |
| PDF 公開，`curl` 直接 200 `application/pdf` | **不需要 cookie**，NCCN 那套 cookie 機制完全用不到 |
| PDF 內有跨檔外連（`.../algorithms/clinical-management/*.pdf`） | 可以改寫成站內 `/preview/`，這是「文件內連結導航」的主體 |
| PDF 內有頁內 GoTo（例：`see Appendix A` → 第 4 頁） | viewer 既有的 `a.dest` 分支已經處理，不用改 |
| 也連到 `mdandersonorg.sharepoint.com`（院內網） | 這些連不到，維持外開 |
| 每頁頁尾都有 `Department of Clinical Effectiveness V<N>` | 版本徽章的 `v` |
| 同一行下方有 `Approved by [Tt]he Executive Committee of the Medical Staff on MM/DD/YYYY` | 版本徽章的 `d`；注意 `[Tt]he` 大小寫不一致 |
| 檔名不規則 | 見 §1 |

---

## 1. 資料模型

### 目錄項

```js
{ id: "mda-sepsis-management-adult",
  name: "Sepsis Management - Adult",
  cat: "急症",
  cats: ["急症"],                                       // 跨分類時才會多於一個
  file: "clin-management-sepsis-management-adult-web-algorithm.pdf" }
```

**`file` 原樣保留上游檔名**，因為它是唯一的抓取真相，而檔名不規則到無法從 `id` 反推：

- 多數是 `clin-management-<slug>-web-algorithm.pdf`
- 少數沒有 `-web`：`clin-management-pedi-delirium-algorithm.pdf`、`clin-management-nephrostomy-algorithm.pdf`
- 有一個前綴根本不同：`survivorship-ovarian-toxicity-web-algorithm.pdf`
- 有一個帶 `%20`：`clin-management-oral%20bleeding-web-algorithm.pdf`

**`id` 由 `file` 造，不是由 `name` 造**：去前綴（`clin-management-`／`survivorship-`）、去尾綴
（`-web-algorithm.pdf`／`-algorithm.pdf`）、`%20`→`-`，最後冠上 `mda-`。

`mda-` 命名空間一次解決兩件撞名：跟 NCCN 的 `vte`／`pain`／`distress` 撞 id，
以及跟 R2 根目錄 `<id>.pdf` 撞物件鍵。

### 去重

索引頁列 87 條但有重複檔案跨分類出現（`c-difficile` 在 Pediatrics 與
Non-Emergent 各一次、`hypoglycemia` 在 Emergent 與 Pediatrics 各一次），
去重後約 85 筆。以 `file` 為鍵去重，`cat` 取首次出現者，`cats` 保留全部——
兩個分類都要篩得到，但只能有一份 PDF 與一個 `/preview/` 網址。

### 檔案配置

| 檔案 | 給誰吃 | 對應現有 |
|---|---|---|
| `cf/algorithms.json` | shell 腳本（`gen_thumbs.sh` 等） | `cf/guidelines.json` |
| `cf/src/data/algorithms.js` | Worker | `cf/src/data/guidelines.js` |
| `cf/src/data/catalog.js` | 兩份目錄的合流點 | 新增 |

`catalog.js` 是新的：`VALID_IDS` / `NAME_BY_ID` 從 `guidelines.js` 搬過來，
改成涵蓋兩個來源，另加 `SOURCE_BY_ID`（`"nccn"` | `"mda"`）與 `FILE_BY_ID`。
留在 `guidelines.js` 會變成一個名字說 NCCN、內容含 MDA 的 export，遲早誤導人。

---

## 2. 目錄產生

`cf/gen_mda_catalogue.sh`：抓索引頁 → 解析 → 寫兩份檔案 → 印出與前次的差異。

放棄執行期抓取，理由是 Worker 冷啟動不該多一次外部往返，而目錄一個月才可能動一次。
代價是目錄變動需要重新部署——所以每月 workflow 會在目錄有變時**自動 commit 回
`main`**，`deploy.yml` 收到 push 就重新部署。這條鏈路是刻意的，不是副作用。

---

## 3. 抓取排程

`cf/refresh_mda.sh`：走一遍 `algorithms.json`，每份 PDF 抓下來寫進 R2 **根目錄
`<id>.pdf`**。

**為什麼不寫 `raw/`**：`raw/` 存在的唯一理由是 NCCN 每頁蓋了 disclaimer banner，
需要 `gen_clean.sh` 從 `raw/` 導出乾淨版到根目錄。MDA 的 PDF 沒有那層 banner，
沒有東西要剝，多存一份 `raw/` 只是白花 ~85 MB。因此 `gen_clean.sh` 維持只看
`guidelines.json`，永遠不會碰到 `mda-` 開頭的 id。

`.github/workflows/update-mda.yml`，每月 1 日 05:00 UTC：

1. 查 token（跟每週那支一樣，第一步就擋掉權限不足）
2. `gen_mda_catalogue.sh` —— 目錄有變就 commit 回 `main`
3. `refresh_mda.sh` —— 全量拉 PDF
4. `notify.sh mda …` —— 成敗都寫一筆進通知中心

衍生產物（縮圖、版本、搜尋索引）**不在這支裡重跑**，交給既有的每週 workflow。
這跟 NCCN 現在的契約一致：新抓下來的 PDF 最多要等到下一個週一才對讀者可見。

---

## 4. 衍生產物腳本

| 腳本 | 是否納入 MDA | 原因 |
|---|---|---|
| `gen_thumbs.sh` | ✅ | 純 `pdftoppm`，來源無關 |
| `build_index.sh` | ✅ | 純文字抽取；NCCN banner 剝除對 MDA 是 no-op |
| `gen_versions.sh` | ✅ 但要分派 regex | NCCN 是 `Version X.YYYY`，MDA 是 `Department of Clinical Effectiveness V<N>` + `Approved … on MM/DD/YYYY` |
| `build_toc.sh` | ❌ | MDA 沒有 Discussion 目錄，跑 85 次只會 85 次 no-toc |
| `build_updates.sh` | ❌ | MDA 沒有 "Summary of the Guidelines Updates" |
| `gen_clean.sh` | ❌ | 沒有 banner 要剝（見 §3） |

三支納入的腳本都改成讀 `guidelines.json` + `algorithms.json` 的聯集。
每支結尾的 `[ "$ok" -gt 0 ]` 守衛保持不動。

---

## 5. 前端

### 首頁：來源分頁

標題列下加一組 NCCN / MD Anderson 切換。兩個來源各有自己的 `DATA` 與 `CATS`，
切換時重畫格線、重畫分類 chip、更新標題計數。狀態存 `localStorage`（`nccnsrc`），
下次進站回到上次看的那一邊。

分類 chip 的篩選邏輯（按 `data-cat` 顯示／隱藏整段 `.catsec`）完全不動——
切換來源只是換掉餵進 `buildGrid()` 的兩個陣列。收藏區塊跨來源共用。

### Viewer：文件內連結導航

`views/viewer.js` 的 annotation layer 已經有這套骨架，目前只認 NCCN：

```
/physician_gls/pdf/<id>.pdf  →  /preview/<id>
```

加第二條同型規則：

```
/algorithms/clinical-management/<file>  →  /preview/<mda-id>
```

比對用 `file` → `id` 的對照表（`FILE_BY_ID` 反轉後注入頁面），不是靠字串裁切
猜 id——正因為檔名不規則（§1），猜會猜錯。查不到就照舊外開新分頁。

`cancer-treatment` 那一系列這次不收，它們的連結維持外開。

頁內 GoTo（`a.dest`）不需要任何改動，既有分支已經涵蓋。

---

## 6. 錯誤處理

- 索引頁抓不到 → `gen_mda_catalogue.sh` 不覆寫既有目錄，非零退出，workflow 紅
- 某份 PDF 抓不到 → 記一次 fail 繼續下一份；整輪 `ok=0` 才紅（沿用既有守衛）
- 抓回來的不是 `%PDF` → 當失敗，不寫進 R2
- 目錄裡有、R2 沒有的 id → 首頁卡片顯示「未快取」，`/preview/` 走既有的 404 路徑
- 版本抓不到 → 該份沒有版本徽章，不影響其他

## 7. 測試

- `id` 生成：四種不規則檔名各一個案例，加 `%20`
- 去重：同檔案跨分類 → 一筆、`cats` 兩個
- 版本解析：`V14 Rev` / `V3` / 大小寫不同的 `[Tt]he`
- 連結改寫：MDA 跨檔 URL → 站內；sharepoint URL → 外開；未知檔名 → 外開
- 既有 241 個測試全綠

---

## 8. 實作後與設計的偏差

寫下來是因為這幾條都是實際跑過才知道的，下次讀這份文件的人不該再踩一次。

| 設計時寫的 | 實際 | 為什麼 |
|---|---|---|
| 87 條、去重後約 85 筆 | **91 筆** | 索引頁的 `<a>` 有 92 個指向 clinical-management、1 個指向 survivorship；去重後 91 |
| 分類用中文（急症／兒科…） | 沿用頁面的英文原名 | 跟 NCCN 那 17 個分類（`Hematology`…）同一種寫法，混用兩種語言的分類名沒有道理 |
| `file` 是上游檔名 | `file` 是 `…/for-physicians/algorithms/` 底下的**路徑** | 「Ovarian Toxicity」在 `survivorship/` 而不是 `clinical-management/`。只存檔名的話這一份抓不到，而且是安靜地抓不到 |
| 分類 chip 的篩選邏輯完全不動 | 改成認得 `cats` | 不改的話 `cats` 就是一個沒有人讀的欄位，而上游把 hypoglycemia 同時列在兩區是臨床判斷，照抄比自己挑一個主分類誠實 |
| —（沒想到） | `/api/search` 加 `src=` | 首頁一次只顯示一個來源，內文命中卻是全庫的：在 MD Anderson 分頁搜尋會回一半點下去就切走分頁的結果 |
| —（沒想到） | `/api/r2-status` 改成 cursor 迴圈 | `R2.list` 單次上限 1000，加進 91 份 PDF ＋ 91 張縮圖後總物件數逼近 700。被截斷的那幾份會顯示成「未快取」而檔案其實在——最難查的那種錯 |
| —（沒想到） | `versionEvents` 的「首次取得版本」超過 10 筆收斂成一則 | 第一次跑 `gen_versions.sh` 會一口氣發 91 則，把通知中心洗掉 |
| —（沒想到） | `citeText` 依 `src` 分機構與網址 | 把一份 MD Anderson 的 algorithm 抄成 NCCN 的出版品，是錯的引用，不是格式問題 |

### 驗證過的事

- 目錄裡 **91 個 `file` 全部**都抓得到真的 PDF（`%PDF` 開頭），不是 91 個看起來合理的路徑
- `gen_versions.sh` 的 MDA 分支在 6 份樣本上都抽到版本與核准日期
- 首頁分頁切換：標題、份數、四個分類 chip（30/16/36/11）、93 張卡片、`/preview/mda-*` 連結、
  `localStorage` 記憶，都在真的瀏覽器裡確認過
- `pnpm test` 265 綠（原本 241，新增 24）
