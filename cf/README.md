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
