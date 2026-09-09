#!/usr/bin/env bash
# figures-out/*.png → R2 figure/<id>.png，讓 /figures/<id>.png 服務得到。
#
#   bash gen_figures.sh && bash upload_figures.sh
#
# 為什麼 PNG 不進 Worker bundle：3200x1600 每張約 300 KB，三十張就是 9 MB 的二進位。
# 走 R2 是 thumb/ 已經在用的模式（CLAUDE.md §6）。
#
# 為什麼不在 gen_figures.sh 裡順便傳：截圖不需要任何憑證，上傳需要 R2 token。合成
# 一支的話，沒有 token 的機器（或還沒設好 .env 的新環境）連「看看圖長怎樣」都做不到。
set -u
cd "$(dirname "$0")" || exit 1

if [ -f ../.env ]; then
  set -a
  # shellcheck disable=SC1091
  . ../.env
  set +a
fi
if [ -z "${CLOUDFLARE_API_TOKEN:-}" ]; then
  echo "沒有 CLOUDFLARE_API_TOKEN — 見 CLAUDE.md §1" >&2
  exit 1
fi

OUT=${OUT:-figures-out}
[ -d "$OUT" ] || { echo "$OUT 不存在 — 先跑 bash gen_figures.sh" >&2; exit 1; }

ok=0; fail=0
for f in "$OUT"/*.png; do
  [ -f "$f" ] || continue
  key="figure/$(basename "$f")"
  if wrangler r2 object put "nccn-pdfs/$key" --file="$f" --content-type=image/png --remote >/dev/null 2>&1; then
    echo "OK   $key ($(wc -c < "$f" | tr -d ' ') bytes)"
    ok=$((ok+1))
  else
    echo "FAIL $key" >&2
    fail=$((fail+1))
  fi
done

echo "figures uploaded: $ok ok, $fail failed"
# 照這個 repo 的慣例：一張都沒成功就是紅燈。一個空的 token 會讓每一次 put 都安靜地
# 失敗，然後整支腳本回報成功（CLAUDE.md §5.5 的那個舊教訓）。
[ "$ok" -gt 0 ]
