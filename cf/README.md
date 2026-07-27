# NCCN Downloader — Cloudflare 部署

把原本 `nccn.sh` 的下載器改成一個掛在 **Cloudflare Access** 後面的網頁 + Worker：
登入自己的帳號後，從網頁點選任一 guideline 即可下載官方 PDF（由 Worker 用儲存的
NCCN cookie 代理抓取）。

- **網址**：https://nccn.hsiehting.com
- **登入**：Cloudflare Access（僅白名單 email：mail@hsiehting.com、ppoiu87@gmail.com、
  hsieh.ting.lin@gmail.com；收 email OTP 一次性密碼即可進入）
- **Worker 名稱**：`nccn-download`
- **KV**：`NCCN_KV`（id `f1c25d8c3a604b3c9fb56d4ddc5f24bb`），存 `cookie`、`cookie_meta`、`cron_cursor`
- **R2**：`nccn-pdfs`（binding `PDFS`），存 `<id>.pdf` 快取
- **Cron**：`0 3 * * *`（每天 UTC 03:00），輪流刷新 `PER_DAY=3` 份 → 約每月一輪

## 運作

- `GET /` — 可搜尋的 guideline 清單（86 項），每項有「預覽」與「下載」；標示是否已 R2 快取 + 更新日
- `GET /preview/:id` — 內嵌 **pdf.js** 線上預覽（含縮放、下載鍵）
- `GET /pdf/:id` — inline 供預覽用：優先讀 R2 快取，沒有才即時回 NCCN 抓並順手寫入 R2
- `GET /dl/:id` — attachment 下載，同樣 R2 優先、fallback 即時抓
- `GET /api/r2-status` — 回報已快取哪些 id、大小、更新時間、cursor
- `POST /api/refresh?n=3`（或 `?id=breast`） — 手動觸發刷新（Access 保護）
- `GET /api/cookie-status`、`POST /api/cookie` — cookie 狀態 / 更新

### 更新排程（cron）

每天刷新 3 份，用 KV 的 `cron_cursor` 輪流走過全部 86 份，約 29 天一輪（≈ 每月全部更新一次）。
要改頻率：調 `src/index.js` 的 `PER_DAY` 或 `wrangler.jsonc` 的 `triggers.crons` 後重新 deploy。

id 會比對內建白名單，非清單內的 id 一律 404（防路徑注入）。cookie 過期時 NCCN 會
回傳登入 HTML 而非 PDF，Worker 偵測到（非 `%PDF` 開頭）就回 502 並提示更新 cookie。

## 日常維護

### cookie 過期後更新（最常用）

在瀏覽器登入頁面 → 展開「更新 NCCN cookie」→ 貼上新的 Http Header value → 儲存。
或用 CLI：

```bash
cd NCCN/cf
wrangler kv key put "cookie" --path=../cookie.txt \
  --namespace-id=f1c25d8c3a604b3c9fb56d4ddc5f24bb --remote
```

### 改程式後重新部署

```bash
cd NCCN/cf
wrangler deploy
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
- **鍵盤**：←/→/PageUp/PageDown 翻頁、`+` / `-` 縮放
- **light/dark 主題切換**（與首頁共用偏好）

後端 `/pdf/:id` 支援 **HTTP Range（206）**，讓 pdf.js 逐頁串流、首頁更快出現。

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

（Account ID 已寫在 workflow 內。）之後手動觸發一次：Actions 分頁 → *Update guideline versions* → *Run workflow*。

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

### 流程

`gen_clean.sh`（跟 `gen_versions.sh` / `gen_thumbs.sh` 同一套寫法）：

1. 從 R2 拉 `<id>.pdf`（**不打 NCCN**），檢查開頭是 `%PDF`（cookie 過期時抓到的是登入 HTML）
2. 算來源 sha256，跟 R2 上的 `meta/clean.json` 比對，一樣就 SKIP
3. 跑 `strip_nccn_disclaimer.py`，它會自我驗證（抽字 + 掃 raw content stream 兩層），
   **任何一份殘留 marker 就 exit 1**，CI 直接紅燈，不會把沒清乾淨的檔案上架
4. 上傳到 R2 `clean/<id>.pdf`，最後重新發佈 `meta/clean.json`

```bash
cd NCCN/cf
bash gen_clean.sh            # 增量
FORCE=1 bash gen_clean.sh    # 全部重建
LIMIT=5 bash gen_clean.sh    # 只跑前 5 份（冒煙測試）
```

**雲端自動更新**：已加進 `.github/workflows/update-versions.yml`（每週一 04:17 UTC，
與版本／縮圖／索引／TOC 同一個 workflow）。Worker 的每日 cron 只負責刷新原始 PDF；
乾淨版由這個 workflow 補上，最多落後一週。要更即時就把 workflow 的 cron 改成每日 —— 
因為有 sha256 skip，沒變動的那幾天幾乎不花時間。

### 怎麼用

- `GET /clean/:id` — 直接下載乾淨版（沒有就自動 fallback 回原檔）
- `GET /pdf/:id?clean=1`、`GET /dl/:id?clean=1` — 同樣支援
- **閱讀器工具列的橡皮擦鈕**（只在該份有乾淨版時出現）：切換後整份 PDF 用乾淨版重新載入，
  所以**「截圖成筆記」跟總覽匯出的圖也都不帶橫幅**——這才是做投影片真正需要的
- 回應帶 `x-nccn-clean: 1|0`，可以確認拿到的是哪一版

> 投影片上請自己掛一行 `Source: NCCN Guidelines Version X.YYYY` 當出處。

## AI 本頁重點（Workers AI）

閱讀器右側可展開一個**跟著目前頁走**的 AI 面板（工具列 ✨），把該頁轉成四種繁體中文條列：

| 分頁 | 內容 |
| --- | --- |
| **重點整理** | 這一頁的臨床重點：決策路徑、分層條件、適應症、category 等級 |
| **High Yield** | 以專科考試（Board Exam）角度挑的高頻考點：具體數字與切點、category 1 建議、易混淆的對比 |
| **病歷片語** | 可直接貼進病歷的 Assessment / Plan 英文片語，附中文說明 |
| **SDM** | 醫病共享決策要跟病人強調的重點：選項、好處、風險、取捨、可問病人的問題 |

藥名、分期、基因、category 等級一律保留英文原文，不翻成中文。

### 演算法頁改用「讀圖」

NCCN 的演算法頁是方框加箭頭，`pdftotext` 抽出來會散成沒有句子結構的碎片，直接餵文字會讀錯決策流程。
所以後端先看該頁抽出來的文字**句號密度**（`[.;]\s` / 字數）決定來源：

- `≥ 0.08` → 散文頁（Discussion），直接用 D1 裡抽好的文字，最省
- `< 0.08`、或該頁根本沒字 → **演算法頁**，回 `vision: true`，前端用 pdf.js 把該頁離屏
  rasterize 成 ~1100px 寬的 JPEG 送上來，由多模態模型直接讀圖（同時附上抽到的文字供藥名拼字對照）

門檻是對 breast v5.2026 全 279 頁校準的：演算法頁落在 0.007–0.057，Discussion 頁 0.12–0.20，兩邊都有很大餘裕。
面板右上的 `讀圖` / `文字` 徽章會顯示這一頁實際走哪條路。

### 額度與快取

- **模型**：`@cf/meta/llama-4-scout-17b-16e-instruct`（原生多模態，一個模型同時吃文字與圖）
- **免費額度**：Workers AI 每天 10,000 neurons，UTC 00:00 重置。實測一次純文字約 45–50 neurons、
  一次讀圖約 80–95 neurons，所以一天大約可生成 100–170 頁次
- **上限**：`wrangler.jsonc` 的 `vars.AI_DAILY_NEURONS`（預設 `8000`，留兩成餘裕）。
  逐次累加實際回報的 neuron 數到 D1 `ai_usage`，超過就回 429，面板底部有進度條顯示今日用量
- **快取**：結果永久存在 D1 `insights`（`gid, page, kind` 為主鍵），同一頁同一種格式只會生成一次。
  額度用完後**已快取的內容照常可讀**
- **懶載入**：翻頁只會打 `GET /api/insight`（純讀快取、免費）。真正花額度的生成一律走 `POST`，
  預設要按「產生本頁」；勾選面板底部的「翻頁時自動產生」才會跟著翻頁自動跑（停留 700ms 才觸發）

### 端點

- `GET /api/insight?id=&page=&kind=` — 只讀快取。未命中時回 `vision`（要不要送圖）與 `quota`
- `POST /api/insight` — `{id, page, kind, image?, force?}`，生成 + 記帳 + 寫快取

`kind` = `key` | `hy` | `phrase` | `sdm`。

### 一次性設定

```bash
cd NCCN/cf
wrangler d1 execute nccn-search --file=sql/insights.sql --remote
```

> 刻意跟 `sql/schema.sql` 分開：那支會 `DROP TABLE pages`，是 `build_index.sh` 每次重建全文索引時跑的，
> AI 快取不能跟著被洗掉。重建索引不會影響 `insights` / `ai_usage`。

### 一個你該知道的前提

NCCN PDF 每頁頁首都印著 *"you MAY NOT distribute this Content or **use it with any artificial intelligence
model or tool**"*——這是 NCCN EULA 對本帳號的限制，屬於使用者與 NCCN 之間的授權條款問題。
實作上全部留在自己的 Cloudflare 帳號內（Workers AI 是第一方推論，不外送任何第三方 API），
站台本身也在 Cloudflare Access 後面，是最收斂的做法；要不要這樣用請自行判斷。

面板底部固定顯示「AI 生成，僅供快速參考，臨床決策請以原文為準」。
