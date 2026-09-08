#!/usr/bin/env bash
# 重建核對清單的素材：cf/snippets/_src/<gid>/<ref>.txt。
#
# 這份東西不進版控（是 D1 page_text 的衍生檔），但 verify_snippets.py 的來源關要
# 比對它——所以新機器上做 snippets 之前一定要先跑一次。
#
#   bash .devcontainer/dump-src.sh           # 全部 93 份，數分鐘
#   bash .devcontainer/dump-src.sh breast    # 只要指定的幾份
#
# 邏輯跟 .github/workflows/snippets.yml 那一步一樣，包含刻意不用 set -e：一輪要對
# D1 做九十幾次全表掃描，暫時性失敗是常態；一份掛掉就中止的話，後面幾十份的素材
# 全部沒重建，而 verify 又必須靠素材。所以收集失敗、跑完再判。
set -u
cd "$(dirname "$0")/../cf" || exit 1

if [ -f ../.env ]; then
  set -a
  # shellcheck disable=SC1091
  . ../.env
  set +a
fi
if [ -z "${CLOUDFLARE_API_TOKEN:-}" ]; then
  echo "沒有 CLOUDFLARE_API_TOKEN — 先跑 FORCE=1 bash .devcontainer/setup-env.sh" >&2
  exit 1
fi

if [ "$#" -gt 0 ]; then
  gids="$*"
else
  # 只取目錄，而且跳過 _ 開頭的：snippets/ 底下還有 SPEC.md 與 _vocab.json，
  # 拿它們當 gid 會在第一輪就死在「no TOC for SPEC.md」。
  gids=$(for d in snippets/*/; do
           g=$(basename "$d"); case "$g" in _*) continue ;; esac; echo "$g"
         done)
fi

bad=""; n=0
for gid in $gids; do
  echo "--- $gid"
  if KIND=all bash dump_snippet_src.sh "$gid"; then n=$((n+1)); else bad="$bad $gid"; fi
done
echo "dumped $n guidelines, failed:${bad:- none}"
[ "$n" -gt 0 ]
