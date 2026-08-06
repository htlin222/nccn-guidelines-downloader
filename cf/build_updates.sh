#!/bin/bash
# Extract each guideline's "Summary of the Guidelines Updates" pages and publish
# them to R2 as meta/updates/<id>.json — the structured answer to "what changed
# in this version". PDF 走 lib.sh 的 fetch_clean — does NOT hit NCCN.
# Parsing lives in build_updates.py; this is just the R2 round trip.
# Set ONLY=<id> to process a single guideline (dry run, prints the JSON).
set -u
cd "$(dirname "$0")" || exit 1
[ -f ../.env ] && set -a && . ../.env && set +a
del(){ command rip "$@" 2>/dev/null || find "$@" -delete 2>/dev/null; }
. ./lib.sh
BUCKET="nccn-pdfs"
ONLY="${ONLY:-}"
WORK=$(mktemp -d)
LOG="build_updates.log"; : > "$LOG"
IDS=$(python3 -c "import json;print('\n'.join(g['id'] for g in json.load(open('guidelines.json'))))")
[ -n "$ONLY" ] && IDS="$ONLY"

ok=0; none=0; i=0; total=$(echo "$IDS" | wc -w | tr -d ' ')
for id in $IDS; do
  i=$((i+1))
  pdf="$WORK/x.pdf"; [ -f "$pdf" ] && del "$pdf" 2>/dev/null
  fetch_clean "$id" "$pdf"
  [ -f "$pdf" ] || { echo "[$i/$total] GET-FAIL $id" | tee -a "$LOG"; continue; }
  pdftotext -layout "$pdf" "$WORK/t.txt" 2>/dev/null
  n=$(python3 build_updates.py "$WORK/t.txt" "$WORK/out.json" "$id" 2>/dev/null)
  del "$pdf" 2>/dev/null
  if [ "${n:-0}" -gt 0 ] 2>/dev/null; then
    if [ -z "$ONLY" ]; then
      wrangler r2 object put "$BUCKET/meta/updates/$id.json" --file="$WORK/out.json" --content-type="application/json" --remote >/dev/null 2>&1 \
        && { ok=$((ok+1)); echo "[$i/$total] OK $id ($n items)" | tee -a "$LOG"; } \
        || echo "[$i/$total] PUT-FAIL $id" | tee -a "$LOG"
    else
      ok=$((ok+1)); echo "[$i/$total] $id → $n items (dry, ONLY)"; cat "$WORK/out.json"; echo
    fi
  else
    # Not every guideline ships update pages, and older ones use a different
    # heading. A miss is normal; only a run where NOTHING parsed is a failure.
    none=$((none+1)); echo "[$i/$total] no-updates $id" | tee -a "$LOG"
  fi
done
echo "DONE ok=$ok none=$none / $total" | tee -a "$LOG"
del "$WORK" 2>/dev/null
# Same guard as every other script here: ok=0 means auth or network is broken and
# CI must go red, rather than reporting success for weeks while writing nothing.
[ "$ok" -gt 0 ]
