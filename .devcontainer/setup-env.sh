#!/usr/bin/env bash
# postStartCommand：把 Codespaces secrets 還原成這個 repo 期待的檔案。
#
# 為什麼是 postStart 而不是 postCreate：prebuild 跑得到 postCreate，但那個階段
# 拿不到 secrets——用 postCreate 寫，預建出來的 Codespace 會帶著一份空的 .env，
# 然後每一個 wrangler 呼叫都安靜地讀到 0 筆（CLAUDE.md §7 的最後一列就是這個坑）。
#
# 只在檔案不存在時寫。手動改過的 .env 不會被重開機蓋掉；換 token 之後要重生：
#   FORCE=1 bash .devcontainer/setup-env.sh
set -u
cd "$(dirname "$0")/.." || exit 1
FORCE="${FORCE:-0}"

wrote=0

if [ "$FORCE" = "1" ] || [ ! -f .env ]; then
  if [ -n "${CLOUDFLARE_API_TOKEN:-}" ]; then
    cat > .env <<EOF
# 由 .devcontainer/setup-env.sh 從 Codespaces secrets 產生 — 不要 commit（已 gitignore）
CLOUDFLARE_API_TOKEN=$CLOUDFLARE_API_TOKEN
CLOUDFLARE_ACCOUNT_ID=${CLOUDFLARE_ACCOUNT_ID:-3a77813251d473c40d8873a59f6c0e80}
EOF
    [ -n "${ANTIGRAVITY_API_KEY:-}" ] && echo "ANTIGRAVITY_API_KEY=$ANTIGRAVITY_API_KEY" >> .env
    [ -n "${GROQ_API_KEY:-}" ] && echo "GROQ_API_KEY=$GROQ_API_KEY" >> .env
    chmod 600 .env
    wrote=1
    echo "✓ 寫好 .env（$(grep -c '=' .env) 個變數）"
  else
    echo "! 沒有 CLOUDFLARE_API_TOKEN，.env 沒建立。"
    echo "  gh secret set CLOUDFLARE_API_TOKEN --app codespaces   然後重開 Codespace"
  fi
fi

# NCCN 的 session cookie。平常不需要——每日 cron 用的那份在 KV 裡，本機腳本也可以
# 直接讀 KV。只有要在這台機器上手動抓 PDF 時才需要 cookie.txt。
if [ -n "${NCCN_COOKIE:-}" ] && { [ "$FORCE" = "1" ] || [ ! -f cookie.txt ]; }; then
  printf '%s\n' "$NCCN_COOKIE" > cookie.txt
  chmod 600 cookie.txt
  echo "✓ 寫好 cookie.txt"
fi

# 只在剛產生 .env 時驗一次。每次重開機都打三個 API 只會讓啟動變慢，
# 而 token 不會自己壞掉——會壞的時候你在跑腳本，那時候看得到錯誤。
if [ "$wrote" = "1" ]; then
  set -a
  # shellcheck disable=SC1091
  . ./.env
  set +a
  echo "── 驗 token 是否真的打得到三個 binding ──"
  wrangler d1 execute nccn-search --remote --command "SELECT 1" >/dev/null 2>&1 \
    && echo "  ✓ D1" || echo "  ✗ D1 — token 少了 D1: Edit（CLAUDE.md §1）"
  wrangler r2 object get nccn-pdfs/meta/versions.json --remote --file=/dev/null >/dev/null 2>&1 \
    && echo "  ✓ R2" || echo "  ✗ R2 — token 少了 Workers R2 Storage: Edit"
  wrangler kv key get cookie_meta --binding NCCN_KV --remote >/dev/null 2>&1 \
    && echo "  ✓ KV" || echo "  ✗ KV — token 少了 Workers KV Storage: Edit"
fi

# 核對清單的素材（cf/snippets/_src/，6 MB）不進版控，verify_snippets.py 要它。
# 重建一次是對 D1 做 93 次全表掃描，好幾分鐘——所以不自動跑，要用的時候再說。
if [ ! -d cf/snippets/_src ]; then
  echo "ℹ 要做 snippets（CLAUDE.md §5.9）的話，先重建素材："
  echo "  bash .devcontainer/dump-src.sh          # 全部，數分鐘"
  echo "  bash .devcontainer/dump-src.sh breast   # 只要一份"
fi
