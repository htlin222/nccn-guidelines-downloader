#!/bin/bash
# Generate first-page thumbnails for every cached PDF and upload to R2 as
# thumb/<id>.webp. Pulls PDFs from R2 (already seeded) — does NOT hit NCCN.
set -u
cd "$(dirname "$0")"
[ -f .env ] && set -a && . ./.env && set +a  # load token if present
BUCKET="nccn-pdfs"
IDS=$(python3 -c "import json;print('\n'.join(g['id'] for g in json.load(open('guidelines.json'))))")
WORK=$(mktemp -d)
LOG="gen_thumbs.log"; : > "$LOG"
ok=0; fail=0; i=0; total=$(echo "$IDS" | wc -l | tr -d ' ')
for id in $IDS; do
  i=$((i+1))
  pdf="$WORK/$id.pdf"; png="$WORK/$id"; webp="$WORK/$id.webp"
  if ! wrangler r2 object get "$BUCKET/$id.pdf" --file="$pdf" --remote >/dev/null 2>&1; then
    fail=$((fail+1)); echo "[$i/$total] GET-FAIL $id" | tee -a "$LOG"; continue
  fi
  # first page -> png (width 480), then webp q80
  if pdftoppm -png -f 1 -l 1 -scale-to 480 -singlefile "$pdf" "$png" >/dev/null 2>&1 \
     && cwebp -quiet -q 80 "$png.png" -o "$webp" >/dev/null 2>&1 \
     && wrangler r2 object put "$BUCKET/thumb/$id.webp" --file="$webp" \
          --content-type="image/webp" --remote >/dev/null 2>&1; then
    ok=$((ok+1)); echo "[$i/$total] OK $id ($(wc -c < "$webp") bytes)" | tee -a "$LOG"
  else
    fail=$((fail+1)); echo "[$i/$total] THUMB-FAIL $id" | tee -a "$LOG"
  fi
  rip "$pdf" "$png.png" "$webp" 2>/dev/null
done
rip -r "$WORK" 2>/dev/null
echo "DONE ok=$ok fail=$fail / $total" | tee -a "$LOG"
