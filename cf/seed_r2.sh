#!/bin/bash
# One-time seed: download every NCCN guideline from NCCN and upload it into R2
# under raw/. Gentle pacing (2s).
#
# **寫的是 raw/<id>.pdf，不是根物件。** 根物件是 gen_clean.sh 的產物——剝掉每頁
# 免責橫幅之後的版本，也是 /pdf/:id 實際端出去的那一份。這支以前直接覆寫根物件，
# 意思是「重新 seed 一次」會把橫幅原封不動地貼回全部 91 份，一路撐到下一個週一
# 的週更才被剝掉。README 又正好把它寫成「強制全量刷新」的做法。
#
# 寫 raw/ 之後跟每日 cron 走同一條路：新抓的 PDF 要等下一輪 gen_clean.sh 才對讀者
# 可見（≤ 6 天），這是刻意的契約，不是延遲。急的話手動跑一次 gen_clean.sh。
#
# NCCN only：MDA 的 PDF 是公開的、沒有橫幅、也沒有 raw/ 副本，用 refresh_mda.sh。
set -u
cd "$(dirname "$0")"
[ -f ../.env ] && set -a && . ../.env && set +a  # load token if present
# cookie 以 KV 上那份為準——設定頁改的是它，../cookie.txt 通常是更早以前留下的。
# 讀不到（沒有 token、沒有網路）才退回本機檔。
COOKIE="$(wrangler kv key get cookie --binding NCCN_KV --remote 2>/dev/null | tail -1)"
[ -n "$COOKIE" ] || COOKIE="$(cat ../cookie.txt 2>/dev/null)"
[ -n "$COOKIE" ] || { echo "no cookie: KV 的 cookie 讀不到，../cookie.txt 也沒有"; exit 1; }
BUCKET="nccn-pdfs"
IDS=$(python3 -c "import json;print('\n'.join(g['id'] for g in json.load(open('guidelines.json'))))")

ok=0; fail=0; total=$(echo "$IDS" | wc -l | tr -d ' ')
i=0
LOG="seed_r2.log"; : > "$LOG"
for id in $IDS; do
  i=$((i+1))
  TMP=$(mktemp)
  code=$(curl -s -o "$TMP" -w "%{http_code}" \
    "https://www.nccn.org/professionals/physician_gls/pdf/$id.pdf" \
    -H 'authority: www.nccn.org' \
    -H 'accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8' \
    -H 'accept-language: zh-TW,zh;q=0.9' \
    -H "Cookie: $COOKIE" --compressed --max-time 60)
  head=$(head -c 4 "$TMP" | tr -d '\0')
  if [ "$code" = "200" ] && [ "$head" = "%PDF" ]; then
    if wrangler r2 object put "$BUCKET/raw/$id.pdf" --file="$TMP" \
         --content-type="application/pdf" --remote >/dev/null 2>&1; then
      ok=$((ok+1)); echo "[$i/$total] OK   raw/$id.pdf ($(wc -c < "$TMP") bytes)" | tee -a "$LOG"
    else
      fail=$((fail+1)); echo "[$i/$total] R2-FAIL $id" | tee -a "$LOG"
    fi
  else
    fail=$((fail+1)); echo "[$i/$total] DL-FAIL $id (HTTP=$code head=$head)" | tee -a "$LOG"
  fi
  rip "$TMP" 2>/dev/null
  sleep 2
done
echo "DONE ok=$ok fail=$fail / $total" | tee -a "$LOG"
# Guard against a wholly-failed run reporting success: individual misses are
# normal, but ok=0 means auth/network is broken and CI must go red. (An unset
# CLOUDFLARE_API_TOKEN silently no-op'd this workflow for weeks.)
[ "$ok" -gt 0 ]
