# NCCN Claude Code skill + token API — 設計

2026-08-06

把這個站的資料開一條給 Claude Code 用的路：使用者登入站台（SSO）後鑄造一把
API key，站台當場產生一個內嵌該 key 的 `.skill` 檔給他下載。裝進 Claude Code
之後，Claude 就能直接讀目錄、TOC、本版更新摘要、單頁全文、章節全文、全庫搜尋、
PDF 與已快取的 AI 重點 —— 全程不需要再登入。key 在站上發放與撤銷。

## 為什麼不能沿用現有的架構

三件事擋在前面，設計基本上是繞開它們的結果。

**1. Cloudflare Access 罩住整個網域。** skill 帶著 bearer token 來，會先撞到
Access 的登入頁，根本到不了 Worker。解法是在 Zero Trust 再開一個 application
指向 `nccn.hsiehting.com/api/v1`，政策設 Bypass (Everyone)；Access 以最長路徑
優先，所以 `/api/v1/*` 直通 Worker，其餘照樣要登入。

由此推出一條**必須遵守的路徑紀律**：bypass 只給 `/api/v1/`。鑄造與撤銷 key 的
管理 API 走 `/api/keys`、skill 下載走 `/api/skill.zip`，兩者留在 Access 保護內。
任何時候把管理端點放進 `/api/v1/` 前綴，等於把發 key 的能力對全世界開放。

**2. `pages` 是 FTS5 虛擬表，`gid`/`page` 是 UNINDEXED。** 直接
`WHERE gid=? AND page=?` 會全表掃描：實測 10,670 列、38ms、`rows_read=10670`。
D1 免費層每天 5M rows read，500 次單頁查詢就見底。所以另建一張有主鍵的
`page_text`，同一份文字存兩遍，換取 `rows_read=1`。D1 從 50MB 變約 100MB，上限
5GB，無感。

**3. key 內嵌與公開發布互斥。** `.skill` 就是 zip 改副檔名。走 GitHub Release
公開發布的話，烤進去的 key 當場外洩。所以不公開發布：`.skill` 由 Worker 在
Access 保護的路徑上即時鑄造，每次下載都是一把可單獨撤銷的新 key。

## 資料層

`cf/sql/api.sql`（獨立檔、`CREATE TABLE IF NOT EXISTS`，永遠不會被索引重建洗掉
—— 同 `insights.sql` / `marks.sql` / `notify.sql` 的理由）：

```sql
CREATE TABLE IF NOT EXISTS api_keys (
  id INTEGER PRIMARY KEY,
  hash TEXT UNIQUE NOT NULL,   -- sha256(明文)；明文永不落地
  prefix TEXT NOT NULL,        -- 明文前 12 碼，面板用來辨識是哪一把
  label TEXT NOT NULL,
  created TEXT NOT NULL,
  last_used TEXT,
  calls INTEGER NOT NULL DEFAULT 0,
  revoked TEXT                 -- 非 NULL 即失效
);
CREATE TABLE IF NOT EXISTS page_text (
  gid TEXT NOT NULL,
  page INTEGER NOT NULL,
  body TEXT NOT NULL,
  PRIMARY KEY (gid, page)
) WITHOUT ROWID;
```

`build_index.sh` 現有的 staging → 驗列數 → promote 流程要一併涵蓋 `page_text`。
兩張表必須同時換版，否則會出現「搜尋已是新版、單頁全文還是舊版」的錯位。

兩者的**截斷長度刻意不同**：`pages` 每頁截 2000 字（那是 FTS5 索引，只需要命中
與摘要，截斷是為了索引大小）；`page_text` 不截（12000 只是防呆上限）。半頁文字
交給 Claude，讀起來會像一頁完整內容剛好停在句子中間。

`build_updates.sh` + `build_updates.py`（作法沿用 `build_toc.sh`：從 R2 拉 PDF、
`pdftotext -layout`、解析、PUT 回 R2）產生 `meta/updates/<id>.json`：

```json
{ "version": "3.2025",
  "pages": [8, 9],
  "items": [{ "sec": "AML-2", "page": 8, "text": "Added olutasidenib…" }] }
```

`sec` 取自頁尾的節點標籤（`AML-2`、`MS-3`），bullet 逐條拆成 item。掛進
`update-versions.yml` 第 6 步之後，一樣以 `[ "$ok" -gt 0 ]` 收尾，讓全盤失敗的
run 變紅。

## 快取

**世代號失效法。** 所有快取 key 帶一個世代前綴：`api:<gen>:toc:aml`。`gen` 存在
KV `api:gen`，由每週 CI 最後一步改寫一次 —— 一次寫入就讓整批舊快取孤兒化，不必
逐鍵刪除；全部設 30 天 TTL 讓屍體自己消失。Worker 內用 isolate 全域變數把 `gen`
記 60 秒，同一個 isolate 的連續請求連 KV 都不用打。

四層，由快到慢：

| 層 | 命中延遲 | 存什麼 |
|---|---|---|
| isolate 記憶體 | ~0 | `gen`、catalogue、token 驗證結果 |
| `caches.default` | ~1ms | 完整 HTTP 回應 |
| KV（`cacheTtl: 3600`） | ~5ms | toc / updates / catalogue / 熱門單頁 |
| D1 / R2 | ~30–80ms | 冷資料 |

`caches.default` 的 cache key 用**去掉 token 的 URL**，所有 key 共用同一份快取。
安全性靠順序保證：驗證在前，未通過的請求根本走不到讀快取那一行。

**熱門頁滑動 TTL。** KV 沒有原生 sliding TTL。每次命中都重寫的話寫入量等於讀取
量，太貴。改用 `getWithMetadata` 把到期時間存進 metadata，只在**壽命已用掉 30%**
時才 `waitUntil` 續期。效果與 sliding TTL 相同（反覆看的頁永不過期，冷掉的 30 天
後自己消失），但一頁最多每 9 天寫一次。

## 認證

`sha256(bearer)` 查 `api_keys.hash`（UNIQUE 索引，`rows_read=1`），結果再存進 KV
60 秒 + isolate 記憶體，穩定流量下幾乎不打 D1。**撤銷時主動刪掉那個 KV key**，
所以撤銷是即時的，不是等 TTL 到期。

`last_used` / `calls` 用 `ctx.waitUntil` 非阻塞更新，並降頻：距上次寫入未滿 5
分鐘就跳過，免得每次呼叫都吃一筆 D1 寫入額度。

## API 表面

`/api/v1/*`，一律 `Authorization: Bearer nccn_…`：

| 端點 | 回什麼 | 來源 |
|---|---|---|
| `GET /catalogue` | 全部 guideline：id、英文名、分類、版本、日期、有無 clean/toc/updates | R2 meta + 靜態表 |
| `GET /toc/:id` | `{algorithm:[…], discussion:[…]}` | `meta/toc/<id>.json` |
| `GET /updates/:id` | 逐條更新（`sec`/`page`/`text`） | `meta/updates/<id>.json` |
| `GET /page/:id?p=12` 或 `?p=12-18` | 逐頁全文陣列 | `page_text` 主鍵查 |
| `GET /section/:id?ms=MS-3` | 整章節全文（Worker 查 toc 算頁區間） | toc + `page_text` |
| `GET /search?q=&id=&cat=` | gid / page / snippet | 現有 FTS5 |
| `GET /pdf/:id` | 去橫幅 PDF | R2 |
| `GET /insights/:id` | 已快取的 AI 逐頁重點（唯讀，不觸發生成） | D1 insights |

`/insights` 唯讀是刻意的：從 API 觸發生成會燒掉 AI 額度，而額度是給瀏覽器端
互動用的。

## `.skill` 的鑄造與交付

`lib/zip.js` 寫 store 模式（不壓縮）ZIP：CRC32 表、local file header、central
directory、EOCD。約 80 行純函式，可單元測試，並用 `unzip -t` 驗一次真檔。skill
只有幾十 KB，不壓縮無所謂 —— 換來 Worker 裡零依賴。

skill 包三個檔：

- `SKILL.md` —— 教 Claude 用 curl，含所有端點範例與 gid 對照表
- `.env` —— `NCCN_API_KEY` + `NCCN_API_BASE`，鑄造時烤進去
- `nccn.py` —— 只用 stdlib，管 `~/.cache/nccn-skill/` 的 PDF 下載與版本比對

前兩者的來源是 `cf/src/skill/` 底下**真正的檔案**，靠 wrangler 的 Text module
規則讀成字串，不是塞在 JS 裡的字串常數。它住在 `src/` 底下是被迫的：wrangler 的
module rule glob 只認 `**/*.ext` 形式，帶目錄的 glob（`skill/**/*.md`、
`src/skill/*.md`）一律不匹配。另一個坑是 `fallthrough: true` —— 它的意思是「這條
不算數，往下找」，而下面沒有別條，結果就是「.md 沒有 loader」。兩個都寫進
`wrangler.jsonc` 的註解了。`vitest.config.js` 補了一個同行為的載入器，否則測試會
拿 SKILL.md 去當 JS 解析，炸在 YAML frontmatter 第一行。

快取放 `~/.cache/nccn-skill/` 而非專案目錄：多專案共用一份，且不會被誤 commit。
依 `versions.json` 的版本字串判斷要不要重拉。

key 失效時 API 回 401，`SKILL.md` 教 Claude 直接告訴使用者「去站上重新產生
skill」。

## 前端

設定面板新增一區：列出已發的 key（prefix、標籤、最後使用、呼叫數）、撤銷鈕、
以及「產生新的 skill」→ 打 `/api/skill.zip?label=…` 觸發瀏覽器下載。

## 測試

`pnpm test` 必須綠（實作後從 163 增至 201）。新增：

- `zip.test.js` —— zip 結構、CRC32 測試向量，最後交給系統的 `unzip -t` 認一次
- `apikey.test.js` —— hash、prefix、`parseBearer`、降頻門檻
- `cache.test.js` —— 世代 key 組法、續期判斷的門檻
- `updates.test.js` —— 用 subprocess 跑真的 `build_updates.py`，fixture 逐字取自
  AML v5.2026（含 `\x17` bullet 與重複的頁首）
- `apiflow.test.js` —— 假的 D1/KV/R2 上端到端走一次：鑄金鑰 → 認證 → 各端點 →
  撤銷 → 立刻打不通，並驗證 `.skill` 裡烤進去的金鑰真的能用

原本打算用 `wrangler dev --remote` 手動測，但 preview 網域也在 Access 後面，需要
service token；本地模式的 D1 state 又跟現在的 workerd 不相容。`apiflow.test.js`
的覆蓋面比手動 curl 更好，而且會留在 CI 裡。

## 已知風險

`/api/v1/*` 對整個網際網路開放，只有 bearer token 擋著。token 一外流等同 NCCN
全文與 PDF 對外開放，而那是有版權的內容。這正是「多把可命名、可單獨撤銷、看得到
last_used」比單一 super key 值錢的地方 —— 外流時能只撤那一把，並從 last_used
看出它是否真的被人在用。
