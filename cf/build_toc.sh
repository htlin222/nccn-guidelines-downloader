#!/bin/bash
# Extract a navigable Table of Contents from each guideline's Discussion section
# and publish it to R2 as meta/toc/<id>.json. The Discussion pages are labelled
# "MS-N" in the footer (bottom-right); we map MS-N -> physical PDF page by the
# per-page footer label, then parse the Discussion TOC (2-column, -layout) into
# {title, ms, page, level}. Pulls PDFs from R2 — does NOT hit NCCN.
# Set ONLY=<id> to process a single guideline (debug).
#
# NCCN only — deliberately reads guidelines.json and not algorithms.json. A
# Discussion section is an NCCN structure; MD Anderson's algorithms have none, so
# adding them here would buy 91 consecutive "no-toc" lines and nothing else.
set -u
cd "$(dirname "$0")"
[ -f ../.env ] && set -a && . ../.env && set +a
del(){ command rip "$@" 2>/dev/null || find "$@" -delete 2>/dev/null; }
BUCKET="nccn-pdfs"
ONLY="${ONLY:-}"
WORK=$(mktemp -d)
LOG="build_toc.log"; : > "$LOG"
IDS=$(python3 -c "import json;print('\n'.join(g['id'] for g in json.load(open('guidelines.json'))))")
[ -n "$ONLY" ] && IDS="$ONLY"

ok=0; none=0; i=0; total=$(echo "$IDS" | wc -w | tr -d ' ')
for id in $IDS; do
  i=$((i+1))
  pdf="$WORK/x.pdf"; [ -f "$pdf" ] && del "$pdf" 2>/dev/null
  wrangler r2 object get "$BUCKET/$id.pdf" --file="$pdf" --remote >/dev/null 2>&1
  [ -f "$pdf" ] || { echo "[$i] GET-FAIL $id" | tee -a "$LOG"; continue; }
  pdftotext -layout "$pdf" "$WORK/t.txt" 2>/dev/null
  n=$(python3 build_toc.py "$WORK/t.txt" "$WORK/out.json" "$id")
  del "$pdf" 2>/dev/null
  if [ "$n" -gt 0 ] 2>/dev/null; then
    if [ -z "$ONLY" ]; then
      wrangler r2 object put "$BUCKET/meta/toc/$id.json" --file="$WORK/out.json" --content-type="application/json" --remote >/dev/null 2>&1 \
        && { ok=$((ok+1)); echo "[$i/$total] OK $id ($n entries)" | tee -a "$LOG"; } \
        || echo "[$i/$total] PUT-FAIL $id" | tee -a "$LOG"
    else
      ok=$((ok+1)); echo "[$i/$total] $id → $n entries (dry, ONLY)"; cat "$WORK/out.json"
    fi
  else
    none=$((none+1)); echo "[$i/$total] no-TOC $id" | tee -a "$LOG"
  fi
done
echo "DONE ok=$ok none=$none / $total" | tee -a "$LOG"
del "$WORK" 2>/dev/null
# Guard against a wholly-failed run reporting success: individual misses are
# normal, but ok=0 means auth/network is broken and CI must go red. (An unset
# CLOUDFLARE_API_TOKEN silently no-op'd this workflow for weeks.)
[ "$ok" -gt 0 ]
