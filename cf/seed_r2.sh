#!/bin/bash
# One-time seed: download every NCCN guideline locally and upload into the R2
# bucket so the Worker serves cached copies immediately. Gentle pacing (2s).
set -u
cd "$(dirname "$0")"
[ -f ../.env ] && set -a && . ../.env && set +a  # load token if present
COOKIE="$(cat ../cookie.txt)"
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
    if wrangler r2 object put "$BUCKET/$id.pdf" --file="$TMP" \
         --content-type="application/pdf" --remote >/dev/null 2>&1; then
      ok=$((ok+1)); echo "[$i/$total] OK   $id ($(wc -c < "$TMP") bytes)" | tee -a "$LOG"
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
