# NCCN Downloader — Cloudflare 部署

把原本 `nccn.sh` 的下載器改成一個掛在 **Cloudflare Access** 後面的網頁 + Worker：
登入自己的帳號後，從網頁點選任一 guideline 即可下載官方 PDF（由 Worker 用儲存的
NCCN cookie 代理抓取）。

- **網址**：https://nccn.hsiehting.com
- **登入**：Cloudflare Access（僅白名單 email：mail@hsiehting.com、ppoiu87@gmail.com、
  hsieh.ting.lin@gmail.com；收 email OTP 一次性密碼即可進入）
- **Worker 名稱**：`nccn-download`
- **KV**：`NCCN_KV`（id `f1c25d8c3a604b3c9fb56d4ddc5f24bb`），存 `cookie`、`cookie_meta`、`cron_health`、`cron_state`
- **R2**：`nccn-pdfs`（binding `PDFS`），存 `<id>.pdf` 快取
- **Cron**：`0 3 * * *`（每天 UTC 03:00），刷新最舊的 `PER_DAY=3` 份 → 約每月一輪

## 運作

- `GET /` — 可搜尋的 guideline 清單（86 項），每項有「預覽」與「下載」；標示是否已 R2 快取 + 更新日
- `GET /preview/:id` — 內嵌 **pdf.js** 線上預覽（含縮放、下載鍵）
- `GET /pdf/:id` — inline 供預覽用：優先讀 R2 快取，沒有才即時回 NCCN 抓並順手寫入 R2
- `GET /dl/:id` — attachment 下載，同樣 R2 優先、fallback 即時抓
- `GET /api/r2-status` — 回報已快取哪些 id、大小、更新時間，以及最近一次 cron 的健康度
- `POST /api/refresh?n=3`（或 `?id=breast`） — 手動觸發刷新（Access 保護）
- `GET /api/cookie-status`、`POST /api/cookie` — cookie 狀態 / 更新

### 更新排程（cron）

每天挑 **R2 上最舊的 3 份**重抓（`pickStalest`），約 29 天走完全部 86 份。
要改頻率：調 `src/lib/constants.js` 的 `PER_DAY` 或 `wrangler.jsonc` 的 `triggers.crons` 後重新 deploy。

**為什麼是「挑最舊的」而不是輪流走游標**：舊版用 KV 的 `cron_cursor` 依序前進，而且
*不管抓成功與否都會前進* —— cookie 一過期，那一天的 3 份就被靜默跳過，要再等 29 天
才輪到。改成依 R2 上實際的 `uploaded` 時間排序之後，沒抓成功的那份**明天仍然是最舊的**，
會自動被重試到成功為止；R2 上缺檔的（`uploaded` 視為無限舊）則排在最前面優先補回來。
換句話說，排程本身就是修復機制，不需要額外的重試佇列。

唯一的例外是「永遠抓不到」的 id（NCCN 下架了之類）：它會一直卡在隊首。所以
`nextCronState` 會數連續失敗次數，滿 3 次就把它「暫緩」（記一個時間戳，排序時當成
剛更新過），讓它退到隊尾，下一輪再試一次。

**健康度**：每次跑完把 `{at, ok, fail, ids, errors}` 寫進 KV 的 `cron_health`，
`/api/r2-status` 會回傳，首頁設定面板顯示成一行狀態；全軍覆沒時 Worker 走
`console.error`，在 Workers Observability 裡是 error 級別，可以直接設告警。

id 會比對內建白名單，非清單內的 id 一律 404（防路徑注入）。cookie 過期時 NCCN 會
回傳登入 HTML 而非 PDF，Worker 偵測到（非 `%PDF` 開頭）就回 502 並提示更新 cookie。

## 日常維護

### cookie 過期後更新（最常用）

在瀏覽器登入頁面 → 展開「更新 NCCN cookie」→ 貼上新的 Http Header value → 儲存。
或用 CLI：

```bash
cd NCCN/cf
set -a; . ../.env; set +a          # 見下方「認證」
wrangler kv key put "cookie" --path=../cookie.txt \
  --namespace-id=f1c25d8c3a604b3c9fb56d4ddc5f24bb --remote
```

### 認證（手動下 wrangler 指令時要注意）

token 放在 **repo 根目錄的 `NCCN/.env`**（gitignore 中，範本見 `.env.example`）。
所有腳本都會自己 `. ../.env`，所以 `bash deploy.sh`、`bash gen_clean.sh` 等直接跑就好。

但 **wrangler 只會自動載入跟 `wrangler.jsonc` 同目錄的 `.env`**，而 `.env` 不在 `cf/`，
所以**手動**下 `wrangler` 指令前要先自己 source：

```bash
cd NCCN/cf && set -a; . ../.env; set +a
```

漏掉的話會看到 `Invalid access token` 或 `Authentication error [code: 10000]`。

### 改程式後重新部署

```bash
cd NCCN/cf
bash deploy.sh          # 會自己載入 ../.env 並戳上建置時間
```

### 初始種子 / 手動全量刷新 R2

一次把全部 86 份下載並寫入 R2（本地跑，用 ../cookie.txt，逐一間隔 2 秒）：

```bash
cd NCCN/cf
bash seed_r2.sh          # 進度寫入 seed_r2.log
```

或用線上手動刷新端點（需已登入 Access 的瀏覽器）：`POST /api/refresh?n=25`。

### 測試 cron

```bash
cd NCCN/cf
wrangler dev --test-scheduled          # 另開 http://localhost:8787/__scheduled 觸發
# 或直接看正式環境紀錄：
wrangler tail nccn-download
```

### 管理登入閘門（cf-gate）

```bash
SKILL="$HOME/.claude/skills/cf-gate"
bash "$SKILL/scripts/cf-gate.sh" status nccn.hsiehting.com          # 看白名單
bash "$SKILL/scripts/cf-gate.sh" gate nccn.hsiehting.com a@b.com    # 更新白名單
bash "$SKILL/scripts/cf-gate.sh" ungate nccn.hsiehting.com          # 移除閘門
```

## PDF 閱讀器（`/preview/:id`）

pdf.js 打造、參考 [mcq-bank](https://github.com/htlin222/mcq-bank) 的 EmbedPDF 設計：

- **縮圖側欄**：每頁縮圖（懶載入），點擊跳頁、標示目前頁
- **頁碼導覽**：上一頁 / 下一頁、直接輸入頁碼跳轉、`目前 / 總頁數`
- **縮放**：`−` / `+`、百分比、**符合寬度**（fit-width，預設）
- **連續捲動 + 懶載入**：IntersectionObserver 只渲染接近視窗的頁（大檔也順）
- **可選取文字層**：pdf.js text layer，可反白／複製
- **列印本頁**（工具列 🖨）：把目前這一頁以 **300 DPI** 離屏重繪後送印，不是抓螢幕上
  那張 canvas——後者是照螢幕寬度算的（常常不到 150 DPI），印出來字邊會糊。紙張方向
  跟著該頁走（橫式流程圖就用橫式紙），長邊上限 4200px 以免超大版面吃爆記憶體。
  圖片同時鎖 `max-width` 與 `max-height`：NCCN 是 letter 橫式（高/寬 0.773），A4 橫式
  可印區只有 0.690，只給 `width:100%` 撐滿寬度會變成 217mm 高、超出可印的 194mm 而
  掉到第二頁。鎖兩邊之後不論什麼紙張都等比縮到單頁（A4／Letter／A5 直橫共 10 種組合實測）。
  走隱藏 iframe 而不是 `window.open`，不會被彈窗封鎖，也不會把閱讀器 UI 一起印進去。
- **鍵盤**：←/→/PageUp/PageDown 翻頁、`+` / `-` 縮放
- **light/dark 主題切換**（與首頁共用偏好）

後端 `/pdf/:id` 支援 **HTTP Range（206）**，讓 pdf.js 逐頁串流、首頁更快出現。

### 網址參數（可直接分享到某一頁）

```
/preview/aml?page=42          直接開在第 42 頁
/preview/aml?q=venetoclax     開檔就跳到第一個命中並反白
/preview/aml/                 結尾多打斜線也可以（會自動忽略）
```

- **網址列會跟著目前頁走**：捲動或跳頁後 `?page=` 自動更新（`replaceState`，400ms 節流），
  所以隨時複製網址列就是「回到我現在看的這一頁」的連結
- 用 `replaceState` 而不是 `pushState`：翻頁不該把每一頁都塞進瀏覽器的返回堆疊。
  閱讀器自己的「回上一個位置 / 前往下一個位置」是工具列上那兩個箭頭
- 沒帶 `?page=` 時改用 localStorage 記住的上次位置（`nccnpg:<id>`），關掉再開會回到原處

## Favicon

`/favicon.svg` 由 Worker 動態產生（lucide「cross」醫療十字 SVG，深色圓角底），首頁與預覽頁都引用。

## 部署（含建置時間戳）

用 `deploy.sh` 部署——它會把台北時間戳進 Worker（顯示在首頁 footer「部署時間」）再 `wrangler deploy`：

```bash
cd NCCN/cf
bash deploy.sh
```

## 版本徽章與自動更新（雲端 end-to-end）

每張卡片右上顯示該 guideline 的 NCCN 版本（如 `v5.2026`，滑鼠移上看發布日期）。

- **抽取**：`gen_versions.sh` 從 R2 拉每份 PDF，用 `pdftotext` 抽第一頁的 `Version X.YYYY — <date>`，匯成 `meta/versions.json` 上傳 R2。
- **顯示**：Worker 在 `/api/r2-status` 回傳 `versions`，前端畫成徽章。
- **為什麼不在 Worker 內抽**：PDF 文字用內嵌子集字型的字形碼儲存，純解壓/regex 抽不到；要正確解出需 CMap-aware 的引擎（pdftotext / pdf.js / mupdf），塞進 Worker 太重。

**雲端自動更新**：`.github/workflows/update-versions.yml`（GitHub Actions，每週一 04:17 UTC + 可手動）在 GitHub 雲上安裝 poppler、跑 `gen_versions.sh`、刷新 `versions.json`——不需要你的電腦。

一次性設定：到 repo → Settings → Secrets and variables → Actions，新增

- `CLOUDFLARE_API_TOKEN`：Cloudflare API token，權限 **Account → Workers R2 Storage → Edit**

（Account ID 已寫在 workflow 內。）之後手動觸發一次：Actions 分頁 → _Update guideline versions_ → _Run workflow_。

## 全文內容搜尋（D1 + FTS5）

搜尋框輸入時，除了即時過濾病名/分類，還會**搜尋 PDF 內文**：命中的頁面列在上方（含 highlight 片段），點擊直接跳到該頁（`/preview/:id?page=N`）。

- **索引**：`build_index.sh` 從 R2 拉每份 PDF → `pdftotext` 逐頁抽文字 → 分塊灌進 **Cloudflare D1** 的 FTS5 虛擬表 `pages`（`gid,page,name,cat,body`，porter+unicode61 分詞）。D1 不允許 SQL 交易，故用單筆 INSERT 分塊（每塊 50 筆）。
- **查詢**：Worker `GET /api/search?q=...` → `... WHERE pages MATCH ? ORDER BY rank`，每 token 加 `"tok"*` 前綴比對，回傳 `snippet()` 片段 + 頁碼。
- **schema**：`sql/schema.sql`（`wrangler d1 execute nccn-search --file=sql/schema.sql --remote`）。
- **重建**：`bash build_index.sh`（本地）或 GitHub Action（每週自動，與版本更新同一個 workflow）。

> 為什麼抽文字在離線／CI 做：PDF 文字是字形碼，需 CMap-aware 引擎（pdftotext），Worker 內不可行；但**搜尋本身完全在雲端（Worker + D1），毫秒級**。

## 乾淨版 PDF（去掉頁首橫幅，給做投影片用）

NCCN 在每一頁頁首蓋兩行 6pt 小字，做投影片時很干擾：

1. `PLEASE NOTE that use of this NCCN Content is governed by the End-User License Agreement…`
2. `Printed by <名字> on <日期> <時間>. Copyright © <年> National Comprehensive Cancer Network, Inc. All Rights Reserved.`

這兩行是 NCCN 額外附加在每頁 `/Contents` 陣列後面的**獨立 content stream**，所以
`strip_nccn_disclaimer.py` 直接把那兩個 stream 從陣列移除即可 —— 頁面本身的 content stream
完全不動，橫幅底下壓到的標題文字不會被裁掉。這比用白色方塊遮蓋好：文字是**真的從檔案裡消失**，
不是視覺上蓋住。

### Deterministic

`doc.save(..., no_new_id=True)` 保留來源 PDF 的 `/ID` 而不是每次重存都生一個新的，
所以**同一份輸入永遠產生 byte-identical 的輸出**（實測兩次 sha256 相同）。
有了這個保證，`gen_clean.sh` 才能用來源 PDF 的 sha256 判斷「沒變就跳過」，
不然每週 CI 都會把 86 份全部重傳一次。

### R2 佈局：根層就是乾淨版

```
nccn-pdfs/
  <id>.pdf          ← 乾淨版（沒有橫幅）。viewer / 下載 / 縮圖 / D1 索引都讀這個
  raw/<id>.pdf      ← 原始檔（含橫幅），Worker cron 從 NCCN 抓回來就放這裡
  meta/clean.json   ← 每份的來源 sha256 + 頁數
```

**為什麼原檔要另外放 `raw/`**：Worker 的每日 cron 會從 NCCN 重抓 PDF。如果它寫回根層，
橫幅就會被一份一份帶回來（每天 3 份、約 29 天輪完全部）。所以 `refreshOne()` 寫入 `raw/`，
根層只由 `gen_clean.sh` 產生——cron 再也蓋不掉乾淨版。

原檔保留的用途：`gen_clean.sh` 可以隨時從 `raw/` 重新產生乾淨版，不必再打 NCCN。

### 流程

`gen_clean.sh`（跟 `gen_versions.sh` / `gen_thumbs.sh` 同一套寫法）：

1. 從 R2 拉 `raw/<id>.pdf`（**不打 NCCN**），檢查開頭是 `%PDF`（cookie 過期時抓到的是登入 HTML）
2. 算來源 sha256，跟 R2 上的 `meta/clean.json` 比對，一樣就 SKIP
3. 跑 `strip_nccn_disclaimer.py`，它會自我驗證（抽字 + 掃 raw content stream 兩層），
   **任何一份殘留 marker 就 exit 1**，CI 直接紅燈，不會把沒清乾淨的檔案上架
4. 覆寫根層 `<id>.pdf`，最後重新發佈 `meta/clean.json`

```bash
cd NCCN/cf
bash gen_clean.sh            # 增量
FORCE=1 bash gen_clean.sh    # 全部重建
LIMIT=5 bash gen_clean.sh    # 只跑前 5 份（冒煙測試）
```

**雲端自動更新**：已加進 `.github/workflows/update-versions.yml`（每週一 04:17 UTC，
與版本／縮圖／索引／TOC 同一個 workflow）。cron 抓到的新原檔最多落後一週才會被清理，
但期間根層仍是舊的乾淨版，**不會出現橫幅**。

### 怎麼用

不用做任何事——`/preview/:id`、`/pdf/:id`、`/dl/:id` 預設就是乾淨版，所以
**「截圖成筆記」和總覽匯出的圖本來就不帶橫幅**。

- `GET /pdf/:id?raw=1`、`GET /dl/:id?raw=1` — 要原始版（含橫幅）時才加參數
- 回應帶 `x-nccn-clean: 1|0`，可確認拿到哪一版
- 某份還沒清理過（根層沒有物件）時會自動 fallback 到 `raw/`，不會 404

> ⚠️ 用 `wrangler r2 object get` 或 Cloudflare API 的物件 GET 端點**驗不了剛寫入的東西**：
> 那條路徑有 4 小時 CDN 快取（`cf-cache-status: HIT`、`max-age=14400`），會回舊內容，
> 對剛建立的 key 甚至會回被快取的 404。要查真實狀態請用 **LIST 端點**（不快取）或
> 走 Worker 的 R2 binding。

> 投影片上請自己掛一行 `Source: NCCN Guidelines Version X.YYYY` 當出處。

## AI 本頁重點（Antigravity / Workers AI）

閱讀器右側可展開一個**跟著目前頁走**的 AI 面板（工具列 ✨），把該頁轉成四種繁體中文條列：

| 分頁           | 內容                                                                                    |
| -------------- | --------------------------------------------------------------------------------------- |
| **重點整理**   | 這一頁的臨床重點：決策路徑、分層條件、適應症、category 等級                             |
| **High Yield** | 以專科考試（Board Exam）角度挑的高頻考點：具體數字與切點、category 1 建議、易混淆的對比 |
| **病歷片語**   | 可直接貼進病歷的 Assessment / Plan 英文片語，附中文說明                                 |
| **SDM**        | 醫病共享決策要跟病人強調的重點：選項、好處、風險、取捨、可問病人的問題                  |

藥名、分期、基因、category 等級一律保留英文原文，不翻成中文。

### 演算法頁改用「讀圖」

NCCN 的演算法頁是方框加箭頭，`pdftotext` 抽出來會散成沒有句子結構的碎片，直接餵文字會讀錯決策流程。
所以後端先看該頁抽出來的文字**句號密度**（`[.;]\s` / 字數）決定來源：

- `≥ 0.08` → 散文頁（Discussion），直接用 D1 裡抽好的文字，最省
- `< 0.08`、或該頁根本沒字 → **演算法頁**，回 `vision: true`，前端用 pdf.js 把該頁離屏
  rasterize 成 ~1100px 寬的 JPEG 送上來，由多模態模型直接讀圖（同時附上抽到的文字供藥名拼字對照）

門檻是對 breast v5.2026 全 279 頁校準的：演算法頁落在 0.007–0.057，Discussion 頁 0.12–0.20，兩邊都有很大餘裕。
面板右上的 `讀圖` / `文字` 徽章會顯示這一頁實際走哪條路。

### 兩個 AI 來源可切換

面板底部有一組 **Antigravity / Workers AI** 切換鈕（選擇記在 localStorage），
兩邊吃同一組 prompt、同一套讀圖判斷、寫同一個快取表：

|          | Antigravity                         | Workers AI                                |
| -------- | ----------------------------------- | ----------------------------------------- |
| 實際模型 | Google Gemini（見下方階梯）         | `@cf/meta/llama-4-scout-17b-16e-instruct` |
| 憑證     | Worker secret `ANTIGRAVITY_API_KEY` | `env.AI` 綁定，不需金鑰                   |
| 額度單位 | 每模型每天請求數（RPD）             | neurons                                   |
| 每日總量 | 階梯加總 1,080 次                   | 10,000 neurons ≈ 100–170 頁次             |
| 資料流向 | 送到 Google 的 API                  | 留在自己的 Cloudflare 帳號內              |

沒設 `ANTIGRAVITY_API_KEY` 時後端回 `ag: false`，切換鈕整組不出現，行為與加這個功能之前完全一樣。

#### 模型階梯與自動掉階

免費層的瓶頸不是 token 而是 **RPD（每模型每天幾次請求）**：最好的 Flash 一天只有 20 次，
Flash Lite 則有 500 次。所以排一條「新世代優先、額度大的墊底」的階梯，撞到上限就自動往下走：

| 順位 | 模型                     | 免費層 RPD |
| ---- | ------------------------ | ---------- |
| 1    | `gemini-3.6-flash`       | 20         |
| 2    | `gemini-3.5-flash`       | 20         |
| 3    | `gemini-3-flash-preview` | 20         |
| 4    | `gemini-3.5-flash-lite`  | 500        |
| 5    | `gemini-3.1-flash-lite`  | 500        |
| 6    | `gemini-2.5-flash`       | 20         |

- 429 會先分類再處理：`PerDay` → 該模型當天記到滿，之後直接跳過不再浪費往返；
  `PerMinute` → 只壓 60 秒冷卻，不燒掉整天額度；404（模型下架）→ 比照當天不用
- 逐模型計數存在 D1 `ai_calls`（`day, model` 為主鍵），面板底部顯示「今日 n / 1080 次 · 下一階 <模型>」
- **整條階梯用完會自動掉回 Workers AI**，並在條列下方註明掉階原因；兩邊都沒額度才回 429
- 徽章會顯示這一則實際是哪個模型生的（例如 `讀圖 · gemini-3.6-flash`），快取列也存得住

實測（2026-07）兩個踩過的坑，寫在 `src/lib/gemini.js` 的開頭：Gemini 3.x 預設會 thinking 且
thinking 的 token 也算進 `maxOutputTokens`（用 800 跑 3.6-flash 會 `MAX_TOKENS` 只吐半句話，
所以送 `thinkingLevel: "low"` 並把上限開到 2400）；而 `thinkingBudget: 0` 在 3.6-flash 會 400、
`thinkingLevel` 在 2.5-flash 也會 400，兩種寫法都得留著。`gemini-2.5-flash-lite` 已經 404 下架。

### 額度與快取

- **Workers AI 免費額度**：每天 10,000 neurons，UTC 00:00 重置。實測一次純文字約 45–50 neurons、
  一次讀圖約 80–95 neurons，所以一天大約可生成 100–170 頁次
- **上限**：`wrangler.jsonc` 的 `vars.AI_DAILY_NEURONS`（預設 `8000`，留兩成餘裕）。
  逐次累加實際回報的 neuron 數到 D1 `ai_usage`，超過就回 429，面板底部有進度條顯示今日用量
- **快取**：結果永久存在 D1 `insights`（`gid, page, kind` 為主鍵），同一頁同一種格式只會生成一次。
  額度用完後**已快取的內容照常可讀**
- **懶載入**：翻頁只會打 `GET /api/insight`（純讀快取、免費）。真正花額度的生成一律走 `POST`，
  預設要按「產生」；勾選面板底部的「翻頁時自動產生」才會跟著翻頁自動跑（停留 700ms 才觸發）
- **翻頁零往返**：開面板時打一次 `GET /api/insight-map?id=<gid>`，把整份的已存內容與
  「哪些頁要讀圖」一次帶回前端，之後翻頁純查記憶體 —— 不再有「讀取中…」閃一下才變成
  「這一頁還沒有 X」。逐頁問 D1 的舊做法在跨海往返下每頁都要等 200–400ms，怎麼調延遲門檻都會閃
- **讀圖清單放 KV**：`needsVision` 要讀該頁全文，逐頁算太貴，所以整份算一次存進 KV `vmap:<gid>`，
  之後只用 `SELECT COUNT(*)` 對帳，`build_index.sh` 重建（頁數變了）才重算
- 「這一頁還沒有 X」在沒產生過的頁之間是同一句話，只有格式或讀圖與否變了才重畫 DOM，
  其餘只換按鈕綁的頁碼；產生完的內容也會就地寫回前端的 map，翻走再翻回來不用重抓

### 已存清單（不會因為翻頁而不見）

每一則都以 `(gid, page, kind)` 為主鍵存在 D1 `insights`，**永久保存**——翻走再翻回來會自動讀回，
關掉瀏覽器、換裝置也還在。面板標題列的封存鈕可以瀏覽已存的全部：

- **本份 / 全部** 兩種範圍，列出「哪一份、第幾頁、哪種格式、第一點的摘要」
- 點任一項跳到該頁並載入該格式；跨 guideline 的項目會直接開那一份
- **匯出 .md** 把清單內容整包下載（含每頁的回連結），適合丟進筆記軟體

### 端點

- `GET /api/insight?id=&page=&kind=` — 只讀快取。未命中時回 `vision`（要不要送圖）、
  `ag`（有沒有設 Antigravity 金鑰）、`quota`（Workers AI）與 `agquota`（Antigravity）
- `POST /api/insight` — `{id, page, kind, image?, force?, provider?}`，生成 + 記帳 + 寫快取。
  `provider` = `ag` | `cf`（預設 `cf`；沒設金鑰時 `ag` 會被忽略）。回應帶 `provider` / `model`
  實際用了誰、`fell` 有沒有掉回 Workers AI、`notes` 掉階原因
- `GET /api/insight-map?id=<gid>` — 開面板時打一次：整份的已存內容 + `vision`（要讀圖的頁碼陣列）
  - 兩邊的額度。之後翻頁都從這份資料查，不再打網路
- `GET /api/insights?id=<gid>` 或 `?all=1` — 列出已存的重點（含完整條列，供匯出用）

`kind` = `key` | `hy` | `phrase` | `sdm`。

### 一次性設定

```bash
cd NCCN/cf
set -a; . ../.env; set +a
wrangler d1 execute nccn-search --file=sql/insights.sql --remote

# 要用 Antigravity 才需要這一步：把金鑰放進 Worker secret（不是 vars，不會進 git）
printf '%s' "$ANTIGRAVITY_API_KEY" | wrangler secret put ANTIGRAVITY_API_KEY
```

> 刻意跟 `sql/schema.sql` 分開：那支會 `DROP TABLE pages`，是 `build_index.sh` 每次重建全文索引時跑的，
> AI 快取不能跟著被洗掉。重建索引不會影響 `insights` / `ai_usage` / `ai_calls`。
>
> secret 不隨 `wrangler deploy` 消失，設一次就好；要停用 Antigravity 就
> `wrangler secret delete ANTIGRAVITY_API_KEY`，前端的切換鈕會自動收起來。

### 一個你該知道的前提

NCCN PDF 每頁頁首都印著 _"you MAY NOT distribute this Content or **use it with any artificial intelligence
model or tool**"_——這是 NCCN EULA 對本帳號的限制，屬於使用者與 NCCN 之間的授權條款問題。
站台本身在 Cloudflare Access 後面，但**兩個 provider 的資料流向差很多，請自行斟酌**：

- **Workers AI**：第一方推論，頁面內容不離開自己的 Cloudflare 帳號，是最收斂的做法
- **Antigravity**：該頁的文字（或整頁截圖）會送到 Google 的 Gemini API，是實打實的**第三方外送**。
  免費層的資料是否被用於改進模型，以 Google 當下的條款為準

要不要開 Antigravity、開了要用在哪些頁，請自行判斷。

面板底部固定顯示「AI 生成，僅供快速參考，臨床決策請以原文為準」。

## 書籤與收藏（D1，跨裝置）

兩件事，都存在 D1 而不是 localStorage——在 Mac 上收的，iPad 開同一個站就看得到。

**書籤（逐頁）**：閱讀器工具列的書籤鈕收藏「目前這一頁」，實心＝已收藏，翻頁時跟著變。
旁邊那顆開右側的**書籤清單**，和目錄、AI 重點三個面板互斥（一次只留一個）。

> 三個面板住在同一個容器（`#rightpane`）裡，共用一份寬度與一支拖曳把手（`nccnpanew`）。
> 早期它們各是獨立的 aside、預設寬度還不一樣（目錄 290px、AI 340px），所以每次切換
> 面板都會改變檢視區寬度 → 觸發 `relayout()` → 整份 PDF 清空重繪、捲動位置被重新錨定
> 而看起來在跳。同寬之後，只有「開／關」才會重排，分頁之間切換對版面零影響；
> 各面板自己的內部捲動位置也會保留。

- 收藏時自動把目前的 TOC 章節名（例如 `AML-2`）存成標籤，沒有目錄的檔就留空
- 清單每列可以直接打**備註**，失焦就存
- `本份 / 全部` 切換，切到全部時依 guideline 分群並顯示書名；點別份的項目會導到 `/preview/<id>?page=N`
- `.md` 匯出：每則是一個帶 `?page=` 的連結，備註接在下面

**收藏（整份）**：首頁卡片右下角的星星。收藏後首頁最上方會多一個**已收藏**區塊，
篩選列也多一顆 `★ 已收藏 N` chip；星號全部取消時 chip 與區塊一起消失，篩選自動回到「全部」。

> 首頁的星號另外在 localStorage 存一份快取（`nccnstars`），開頁先照本地畫、`/api/stars`
> 回來再校正，所以不用等一次往返才看得到自己收藏的東西。

### 端點

- `GET /api/bookmarks?id=<gid>`（本份）或 `?all=1`（全部，附上書名）
- `POST /api/bookmark` — `{id, page, label?, note?, on?}`；`on:false` 是移除。
  `label` / `note` 給 `null` 時保留舊值，所以只改備註不會把章節名清掉
- `GET /api/stars` → `{ids:[…]}`；`POST /api/star` — `{id, on}`

### 一次性設定

```bash
cd NCCN/cf
set -a; . ../.env; set +a
wrangler d1 execute nccn-search --file=sql/marks.sql --remote
```

> 同樣刻意跟 `sql/schema.sql` 分開：那支會 `DROP TABLE pages`，重建全文索引時跑，
> 使用者自己收的東西不能跟著被洗掉。
