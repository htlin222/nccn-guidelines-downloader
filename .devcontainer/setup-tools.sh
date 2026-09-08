#!/usr/bin/env bash
# onCreateCommand：裝好「跑這個 repo 需要、但不在 package.json 裡」的東西。
#
# 只在建立（或 rebuild）容器時跑一次，而且會進 prebuild 快取——所以這裡不碰任何
# 秘密，秘密在 setup-env.sh。
set -euo pipefail
cd "$(dirname "$0")/.."

echo "── 系統套件 ────────────────────────────────────────────"
# poppler-utils = pdftotext / pdftoppm / pdfinfo。build_index.sh、gen_clean.sh、
# gen_insights.sh 全部靠它，缺了會安靜地產出空索引。
# webp = cwebp，gen_thumbs.sh 用。
# 兩個都跟 update-versions.yml 裝的一模一樣。
sudo apt-get update -qq
sudo apt-get install -y -qq --no-install-recommends poppler-utils webp shellcheck
sudo rm -rf /var/lib/apt/lists/*

echo "── 全域 CLI ────────────────────────────────────────────"
# wrangler 在本機是 pnpm 全域安裝、不在 cf/package.json 的 devDependencies 裡，
# 所以 pnpm install 不會帶出來。少了它，44 處呼叫全部 command not found。
npm install -g --silent wrangler

# 這台機器就是給 Claude Code 用的，所以直接裝好。
# 第一次執行 `claude` 會走瀏覽器登入；Codespaces 會把 callback 的 port 轉回本機。
npm install -g --silent @anthropic-ai/claude-code

corepack enable pnpm

echo "── Python ──────────────────────────────────────────────"
# strip_nccn_disclaimer.py 與 gen_insights.sh 內嵌的 python 都 import fitz。
python3 -m pip install --quiet --upgrade pymupdf

echo "── Node 相依 ───────────────────────────────────────────"
(cd cf && pnpm install --frozen-lockfile)

echo
echo "版本："
node -v
python3 -V
wrangler --version | tail -1
claude --version 2>/dev/null || echo "claude: 已安裝，尚未登入"
pdftotext -v 2>&1 | head -1
