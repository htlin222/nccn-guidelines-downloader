---
name: nccn
description: Read NCCN oncology guidelines through a private API — catalogue, table of contents, per-version "Summary of Guidelines Updates", full page text, whole-section text, full-text search across every guideline, cached AI page notes, and the PDFs themselves. Use when the user asks about NCCN recommendations, staging, treatment algorithms, drug regimens, or what changed between guideline versions.
---

# NCCN Guidelines

透過私有 API 讀 NCCN 指引。金鑰已經內嵌在這個 skill 裡，不需要登入。

## 設定

`.env` 就在這個 skill 目錄下，含兩個變數：

```bash
source "$CLAUDE_SKILL_DIR/.env" 2>/dev/null || source .env
# NCCN_API_KEY=nccn_…
# NCCN_API_BASE=https://nccn.hsiehting.com/api/v1
```

所有請求都帶 `Authorization: Bearer $NCCN_API_KEY`。定義一個 helper 省得重打：

```bash
q() { curl -sS -H "Authorization: Bearer $NCCN_API_KEY" "$NCCN_API_BASE$@"; }
```

## 端點

| 端點 | 用途 |
|---|---|
| `/catalogue` | 全部 guideline 的 id、英文名、分類、版本、日期，以及有沒有 TOC / 更新摘要 |
| `/toc/<id>` | 目錄。`sec:"algorithm"` 是前面的流程圖區，`sec:"discussion"` 是後面的正文 |
| `/updates/<id>` | 這一版改了什麼，逐條列出並標明所屬節點 |
| `/page/<id>?p=12` 或 `?p=12-18` | 逐頁全文。單次上限 40 頁 |
| `/section/<id>?ref=MS-3` | 整個章節的全文，頁碼區間由伺服器從 TOC 算好 |
| `/search?q=…` | 全庫全文搜尋。可加 `&id=<id>` 限定一份、`&cat=<分類>` 限定一類 |
| `/pdf/<id>` | 去掉頁首橫幅的 PDF |
| `/insights/<id>` | 已快取的 AI 逐頁重點（唯讀，不會觸發新的生成） |

## 怎麼用

**先找 id。** id 是短代號（`aml`、`nscl`、`breast`），不是全名。不確定就搜：

```bash
q "/search?q=venetoclax%20azacitidine" | jq '.results[:5]'
```

回傳每筆都有 `gid` 與 `page`，可以直接拿去讀那一頁。要看全部代號就打 `/catalogue`。

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

## 演算法流程圖

Algorithm 區（`sec:"algorithm"`）是流程圖，抽出來的純文字會散掉、看不出箭頭指向。
遇到這種頁碼，改成把 PDF 抓下來、用 Read 工具直接看那一頁的圖：

```bash
python3 "$CLAUDE_SKILL_DIR/nccn.py" pdf aml     # 印出本地路徑
```

它會把 PDF 快取在 `~/.cache/nccn-skill/`，並比對 `/catalogue` 的版本字串決定要不要
重拉，所以重複呼叫幾乎不花時間。拿到路徑後用 Read 工具讀該檔的指定頁。

## 回報時的規矩

- **一定要附出處**：講到某個建議就標明是哪一份、第幾頁（例如「NCCN AML v3.2025, p.12」）。
- **版本要講清楚**：NCCN 一年改好幾版，`/catalogue` 的 `version` 就是目前這份的版本。
- 這是臨床決策參考資料。照著回答內容，不要自行外推到指引沒寫的情境。

## 錯誤

- `401` —— 金鑰無效或已被撤銷。告訴使用者去站上重新產生一次 skill，不要重試。
- `404 這份還沒建 TOC / 更新摘要` —— 那份的建置還沒跑過，改用 `/search` 或 `/page`。
- `404 這個頁碼範圍沒有文字` —— 頁碼超出範圍，或索引還沒涵蓋這份。
