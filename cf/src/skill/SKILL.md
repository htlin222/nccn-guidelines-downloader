---
name: nccn
description: Read NCCN oncology guidelines and MD Anderson clinical management algorithms through a private API — catalogue, table of contents, per-version "Summary of Guidelines Updates", full page text, whole-section text, full-text search across everything, transcribed flowchart pages, clinic checklists, cached AI page notes, saved bookmarks, and the PDFs themselves. Use when the user asks about NCCN recommendations, staging, treatment algorithms, drug regimens, what changed between guideline versions, or MD Anderson's inpatient/emergency management algorithms (neutropenic fever, sepsis, tumor lysis, immunotherapy toxicity, VTE…).
---

# NCCN Guidelines + MD Anderson Algorithms

透過私有 API 讀兩套指引，金鑰已經內嵌在這個 skill 裡，不需要登入：

| 來源 | `src` | 內容 | id 長相 |
|---|---|---|---|
| NCCN | `nccn` | 87 份 clinical practice guidelines | `aml`、`nscl`、`breast` |
| MD Anderson | `mda` | 91 份 clinical management algorithms | `mda-sepsis-management-adult` |

兩者性質不同，回答時要分清楚：NCCN 是**跨機構的疾病治療指引**，MD Anderson 是
**單一機構的院內處置流程**（誰去評估、多久內給藥、什麼時候轉 ICU）。後者不能當成
通用建議引用。

## 設定

`.env` 就在這個 skill 目錄下：

```bash
source "$CLAUDE_SKILL_DIR/.env" 2>/dev/null || source .env
# NCCN_API_KEY=nccn_…
# NCCN_API_BASE=https://nccn.hsiehting.com/api/v1
# NCCN_USER_EMAIL=…        # 新版金鑰才有
```

所有請求都帶 `Authorization: Bearer $NCCN_API_KEY`，另外**如果 `.env` 有
`NCCN_USER_EMAIL` 就一定要帶 `X-User-Email`**——那把金鑰是從這個 email 算出來的，
少了它會 401。定義一個 helper 省得重打（沒有那個變數時多送一個空標頭無妨）：

```bash
q() { curl -sS -H "Authorization: Bearer $NCCN_API_KEY" \
        -H "X-User-Email: $NCCN_USER_EMAIL" "$NCCN_API_BASE$@"; }
```

不確定自己拿的是哪一把就問：`python3 "$CLAUDE_SKILL_DIR/nccn.py" whoami`。

## 端點

全部唯讀，全部是 GET。

| 端點 | 用途 |
|---|---|
| `/catalogue` | 兩個來源全部的 id、英文名、分類、`src`、版本、日期，以及有沒有 TOC / 更新摘要 |
| `/toc/<id>` | 目錄。`sec:"algorithm"` 是前面的流程圖區，`sec:"discussion"` 是後面的正文。**僅 NCCN** |
| `/updates/<id>` | 這一版改了什麼，逐條列出並標明所屬節點。**僅 NCCN** |
| `/page/<id>?p=12` 或 `?p=12-18` | 逐頁全文。單次上限 40 頁 |
| `/raw/<id>?p=12` | **流程圖那幾頁的逐頁轉錄**，已經是文字。取代「下載 PDF 看圖」 |
| `/section/<id>?ref=MS-3` | 整個章節的全文，頁碼區間由伺服器從 TOC 算好 |
| `/search?q=…` | 全庫全文搜尋（跨兩個來源）。可加 `&id=<id>` 限定一份、`&cat=<分類>` 限定一類 |
| `/notes?q=…` | 門診核對清單檢索。中英混雜、可打「乳癌 三期 檢查」 |
| `/notes/<gid>/<ref>` | 單一份清單全文 |
| `/marks` | 已收的書籤與星號。可加 `?id=<id>` 限定一份 |
| `/pdf/<id>` | 去掉頁首橫幅的 PDF |
| `/insights/<id>` | 已快取的 AI 逐頁重點。可加 `?p=12` 與 `?kind=key\|hy\|phrase\|sdm` |

## 怎麼用

**先找 id。** id 是短代號（`aml`、`nscl`、`breast`），不是全名；MD Anderson 那邊一律
以 `mda-` 開頭。不確定就搜：

```bash
q "/search?q=venetoclax%20azacitidine" | jq '.results[:5]'
```

回傳每筆都有 `gid` 與 `page`，可以直接拿去讀那一頁。要看全部代號就打 `/catalogue`。
只想要某一邊就在本地篩：

```bash
q "/catalogue" | jq '.guidelines[] | select(.src=="mda") | {id,name,cat,version}'
```

**MD Anderson 那批只有 `/page`、`/search`、`/pdf`。** 它們沒有 Discussion 目錄，也沒有
「本版更新」章節，所以 `/toc` 會回空陣列、`/updates` 會 404——那是文件本來就沒有，
不是索引壞了。要定位到某一頁就用 `/search?q=…&id=mda-…`。

**問「這版改了什麼」用 `/updates`**，不要自己去翻 PDF 前幾頁：

```bash
q "/updates/aml" | jq '.items[] | "\(.sec): \(.text)"'
```

**問某個主題的完整說明用 `/section`**，比逐頁抓有效率。先看 TOC 找到 `ref`：

```bash
q "/toc/aml" | jq -r '.[] | select(.sec=="discussion") | "\(.ref)\t\(.t)"'
q "/section/aml?ref=MS-7"
```

**只要某幾頁的原文就用 `/page`：**

```bash
q "/page/aml?p=12-15" | jq -r '.pages[] | "--- p.\(.page) ---\n\(.text)"'
```

## 演算法流程圖 —— 先打 `/raw`，不要一上來就抓 PDF

Algorithm 區（`sec:"algorithm"`）是流程圖，`/page` 抽出來的純文字會散掉、看不出箭頭
指向。伺服器上已經有這些頁的**逐頁轉錄**（讀圖只做一次，存起來），直接拿文字：

```bash
q "/raw/aml?p=8-10" | jq -r '.pages[] | "--- p.\(.page) ---\n\(.text)"'
```

這條路徑省下的是整份 PDF（5–80 MB）與一整頁圖進 context 的成本，**永遠先試它**。

`404` 代表那個頁碼範圍沒有轉錄——可能不是流程圖頁，也可能只是還沒輪到它（讀圖有
每日額度，分好幾週補完）。那時候才退回下面兩條：先試 `/page` 的純文字，真的看不
懂箭頭再抓 PDF 看圖。

```bash
python3 "$CLAUDE_SKILL_DIR/nccn.py" pdf aml     # 印出本地路徑
```

它會把 PDF 快取在 `~/.cache/nccn-skill/`，並比對 `/catalogue` 的版本字串決定要不要
重拉，所以重複呼叫幾乎不花時間。拿到路徑後用 Read 工具讀該檔的指定頁。

## 門診核對清單

`/notes` 是把 NCCN 的決策節點寫成可以貼進病歷的核對清單，比原文濃縮得多。問的是
「這個病人現在該做什麼」而不是「指引怎麼說」時，先打這裡：

```bash
q "/notes?q=乳癌%20三期%20檢查" | jq -r '.rows[] | "\(.gid)/\(.ref)\t\(.title)"'
q "/notes/breast/BINV-12" | jq -r .body
```

回傳的 `review` 欄位是人審的結論（`null` 未審 / `ok` / `edited` / `rejected`）。
**`null` 代表這份清單還沒有臨床醫師看過**，引用時要說出來。

## 回報時的規矩

- **一定要附出處**：講到某個建議就標明是哪一份、第幾頁（例如「NCCN AML v3.2025, p.12」
  或「MD Anderson Sepsis Management - Adult V12, p.2」）。
- **版本要講清楚**：NCCN 一年改好幾版，`/catalogue` 的 `version` 就是目前這份的版本；
  MD Anderson 的版本是 `V<N>`（Department of Clinical Effectiveness 的版次）。
- **兩個來源不要混講**：NCCN 是跨機構的疾病治療指引，MD Anderson 是單一機構的院內
  處置流程。後者的劑量、時限、轉診路徑綁定他們自己的院內資源，不能當成通用建議。
  同時引用兩邊時，明說哪一句來自哪一邊。
- 這是臨床決策參考資料。照著回答內容，不要自行外推到指引沒寫的情境。

## 錯誤

- `401` —— 金鑰無效或已被撤銷。**先確認 `.env` 有 `NCCN_USER_EMAIL` 時請求也帶了
  `X-User-Email`**（漏掉一定 401）；標頭沒問題就是使用者在站上輪替過金鑰，告訴他
  重新下載一次 skill，不要重試。
- `403` —— 被 Cloudflare 的 bot 防護擋下，跟金鑰無關。用 `nccn.py` 而不是自己組
  請求，它帶了必要的 `User-Agent`。
- `404 這份還沒建 TOC / 更新摘要` —— 那份的建置還沒跑過，改用 `/search` 或 `/page`。
- `404 這個頁碼範圍沒有文字` —— 頁碼超出範圍，或索引還沒涵蓋這份。
- `404 這個頁碼範圍沒有轉錄` —— `/raw` 專屬，見上面「演算法流程圖」那節。不是壞掉。
