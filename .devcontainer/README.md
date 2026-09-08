# 在 GitHub Codespaces 裡跑這個 repo

開一台雲端機器，把 Claude Code 裝在上面，做的事跟本機一模一樣。
這個 repo 特別適合：本機 **0 個 PDF**、repo 只有 60 MB，所有狀態都在 Cloudflare
（R2 / D1 / KV），Codespace 開起來看到的就是本機看到的。

```bash
gh codespace create -R htlin222/nccn-guidelines-downloader -m standardLinux    # 4-core
gh codespace ssh
```

---

## 開之前：一個 secret

```bash
gh secret set CLOUDFLARE_API_TOKEN --app codespaces
# 選用
gh secret set ANTIGRAVITY_API_KEY --app codespaces   # gen_insights.sh 的 Gemini
gh secret set GROQ_API_KEY        --app codespaces   # gen_insights.sh 的四格式
gh secret set NCCN_COOKIE         --app codespaces   # 只有要手動抓 PDF 才需要
```

Token 的四個權限見 [`../CLAUDE.md`](../CLAUDE.md) §1 —— 少任何一個都會壞成「腳本
好像什麼都沒做」。`CLOUDFLARE_ACCOUNT_ID` 已經寫在 `devcontainer.json` 裡（它本來
就明文躺在 `.github/workflows/*.yml`，不是秘密）。

`setup-env.sh` 開機時會把這些還原成 `.env`（gitignored），並在第一次產生時驗一遍
D1 / R2 / KV 三個 binding 打不打得到。換 token 之後要重生：

```bash
FORCE=1 bash .devcontainer/setup-env.sh
```

## 裡面裝了什麼

| 東西 | 為什麼 |
|---|---|
| Node 24 | 對齊 CI（`.github/workflows/*.yml` 全部 `node-version: "24"`） |
| `wrangler`（全域） | 本機是 pnpm 全域裝的，**不在** `cf/package.json` 裡，`pnpm install` 帶不出來 |
| `poppler-utils` | `pdftotext` / `pdftoppm` / `pdfinfo` —— 索引、去橫幅、vision 全靠它 |
| `webp` | `cwebp`，`gen_thumbs.sh` 用 |
| `pymupdf` | `strip_nccn_disclaimer.py` 與 `gen_insights.sh` 內嵌的 python |
| `@anthropic-ai/claude-code` | 這台機器的用途 |

第一次跑 `claude` 會走瀏覽器登入，Codespaces 會把 callback port 轉回你的本機。

## 核對清單（CLAUDE.md §5.9）要多一步

素材 `cf/snippets/_src/`（6 MB）是 D1 `page_text` 的衍生檔、不進版控，而
`verify_snippets.py` 的來源關要比對它：

```bash
bash .devcontainer/dump-src.sh           # 全部 93 份，數分鐘
bash .devcontainer/dump-src.sh breast    # 只要一份
```

## 你的 Claude 設定不會自己跟過來

`~/.claude`（SuperClaude 的 CORE/FLAGS/PERSONAS/RTK、全部 skills、memory、MCP 設定）
在你本機的家目錄，不在這個 repo 裡。Codespaces 的官方解法是 **dotfiles**：它會自動
clone 你設定的 dotfiles repo 並執行其中的 `install.sh`。

到 <https://github.com/settings/codespaces> → Dotfiles → 勾選並指向你的 dotfiles
repo（你已經有 `~/.dotfiles/claude.symlink/`，推上去就行）。

## 這些在 Codespace 裡沒有意義

`ego-browser`、`kimi-webbridge`、`post-to-fb` —— 它們要的是**你本機那台真實瀏覽器
＋ 已登入的狀態**。OpenEvidence MCP 的 OAuth 理論上可以（callback port 會轉發），
但會比本機麻煩。

## 一個已知的小瑕疵

`gen_thumbs.sh` 與 `seed_r2.sh` 直接呼叫 `rip`（沒有 fallback，其他腳本都有）。
Codespace 裡沒有 `rip`，所以那兩處會靜靜地失敗、把暫存檔留在 `mktemp -d` 底下。
不影響產出——CI 本來就是這樣跑的。
