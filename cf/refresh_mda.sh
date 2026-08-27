#!/bin/bash
# Pull every MD Anderson clinical management algorithm into R2.
#
# Unlike the NCCN side there is no cookie and no banner to strip, which changes
# two things:
#   * no credential can expire, so this is a plain monthly full pull rather than
#     NCCN's self-repairing "three stalest per day" cron;
#   * the file lands at the R2 ROOT (<id>.pdf), not under raw/. raw/ exists only
#     so gen_clean.sh has an untouched source to strip NCCN's per-page
#     disclaimer from; MDA PDFs carry no such banner, so a second copy would be
#     ~90 MB of R2 storing the same bytes. gen_clean.sh therefore only ever
#     iterates guidelines.json and never sees an mda- id.
#
# Reads algorithms.json — `file` is the upstream path under
# …/for-physicians/algorithms/, kept verbatim because the names are irregular
# enough that they cannot be reconstructed from the id (see gen_mda_catalogue.py).
#
#   bash refresh_mda.sh           # all of them
#   LIMIT=5 bash refresh_mda.sh   # smoke test
#   SLEEP=0 bash refresh_mda.sh   # no pacing
set -u
cd "$(dirname "$0")" || exit 1
[ -f ../.env ] && set -a && . ../.env && set +a  # load token if present
BUCKET="nccn-pdfs"
BASE="https://www.mdanderson.org/content/dam/mdanderson/documents/for-physicians/algorithms"
UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"
LIMIT="${LIMIT:-0}"
SLEEP="${SLEEP:-1}"
LOG="refresh_mda.log"; : > "$LOG"
del(){ command rip "$@" 2>/dev/null || rm -f "$@" 2>/dev/null; }

# id<TAB>file, one per line. Tab-separated because `file` contains slashes and a
# %20 — anything cleverer than read -r with IFS=$'\t' will mangle one of them.
ROWS=$(python3 -c "
import json
for g in json.load(open('algorithms.json')):
    print(g['id'] + '\t' + g['file'])
")
[ "$LIMIT" -gt 0 ] && ROWS=$(echo "$ROWS" | head -n "$LIMIT")

ok=0; fail=0; i=0; total=$(echo "$ROWS" | wc -l | tr -d ' ')
while IFS=$'\t' read -r id file; do
  [ -n "$id" ] || continue
  i=$((i+1))
  TMP=$(mktemp)
  # --retry 只對連線錯誤與 5xx 生效，也就是「再試一次可能就好」的那一類；上游把
  # 404 換成 200 + HTML 的情況它管不到，那是下面 %PDF 檢查的事。Verify 那步要求
  # 91 份裡至少 82 份落地，一次網路瞬斷不該把整個月的更新推過那條線。
  code=$(curl -s -o "$TMP" -w "%{http_code}" -L "$BASE/$file" \
    -H "user-agent: $UA" -H 'accept: application/pdf,*/*;q=0.8' \
    --compressed --max-time 120 --retry 2 --retry-delay 3)
  # A 200 is not proof of a PDF: a CDN error page or a redirect to the site's
  # 404 comes back 200 with HTML in it. Check the magic bytes, same as the
  # Worker's readPdf() does.
  head=$(head -c 4 "$TMP" | tr -d '\0')
  if [ "$code" = "200" ] && [ "$head" = "%PDF" ]; then
    if wrangler r2 object put "$BUCKET/$id.pdf" --file="$TMP" \
         --content-type="application/pdf" --remote >/dev/null 2>&1; then
      ok=$((ok+1)); echo "[$i/$total] OK $id ($(wc -c < "$TMP") bytes)" | tee -a "$LOG"
    else
      fail=$((fail+1)); echo "[$i/$total] R2-FAIL $id" | tee -a "$LOG"
    fi
  else
    fail=$((fail+1)); echo "[$i/$total] DL-FAIL $id (HTTP=$code head=$head)" | tee -a "$LOG"
  fi
  del "$TMP"
  [ "$SLEEP" != "0" ] && sleep "$SLEEP"
done <<< "$ROWS"

echo "DONE ok=$ok fail=$fail / $total" | tee -a "$LOG"
# Same guard as every other script here: individual misses are normal, ok=0
# means network or auth is broken and CI must go red.
[ "$ok" -gt 0 ]
