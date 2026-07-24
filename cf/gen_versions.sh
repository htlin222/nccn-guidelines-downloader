#!/bin/bash
# Extract the "Version X.YYYY — <date>" string from each cached PDF's first page
# and publish a versions map to R2 as meta/versions.json (served by the Worker,
# shown on the cards). Pulls PDFs from R2 — does NOT hit NCCN.
set -u
cd "$(dirname "$0")"
del(){ command rip "$@" 2>/dev/null || find "$@" -delete 2>/dev/null; }
BUCKET="nccn-pdfs"
IDS=$(python3 -c "import json;print('\n'.join(g['id'] for g in json.load(open('guidelines.json'))))")
WORK=$(mktemp -d)
OUT="$WORK/versions.json"
LOG="gen_versions.log"; : > "$LOG"
: > "$WORK/pairs.txt"
ok=0; miss=0; i=0; total=$(echo "$IDS" | wc -l | tr -d ' ')
for id in $IDS; do
  i=$((i+1))
  pdf="$WORK/x.pdf"
  if ! wrangler r2 object get "$BUCKET/$id.pdf" --file="$pdf" --remote >/dev/null 2>&1; then
    miss=$((miss+1)); echo "[$i/$total] GET-FAIL $id" | tee -a "$LOG"; continue
  fi
  line=$(pdftotext -f 1 -l 3 "$pdf" - 2>/dev/null | grep -oiE 'version [0-9]+\.[0-9]{4}( . [A-Za-z]+ [0-9]{1,2}, [0-9]{4})?' | head -1)
  ver=$(echo "$line" | grep -oiE '[0-9]+\.[0-9]{4}' | head -1)
  date=$(echo "$line" | grep -oE '[A-Za-z]+ [0-9]{1,2}, [0-9]{4}' | head -1)
  if [ -n "$ver" ]; then
    ok=$((ok+1)); printf '%s\t%s\t%s\n' "$id" "$ver" "$date" >> "$WORK/pairs.txt"
    echo "[$i/$total] OK $id → $ver ${date:+($date)}" | tee -a "$LOG"
  else
    miss=$((miss+1)); echo "[$i/$total] NO-VERSION $id" | tee -a "$LOG"
  fi
  del "$pdf" 2>/dev/null
done
python3 - "$WORK/pairs.txt" "$OUT" <<'PY'
import sys, json
pairs, out = sys.argv[1], sys.argv[2]
m = {}
for ln in open(pairs, encoding='utf-8'):
    parts = ln.rstrip('\n').split('\t')
    if len(parts) >= 2 and parts[1]:
        m[parts[0]] = {'v': parts[1], 'd': parts[2] if len(parts) > 2 else ''}
json.dump(m, open(out, 'w', encoding='utf-8'), ensure_ascii=False)
print('versions:', len(m))
PY
wrangler r2 object put "$BUCKET/meta/versions.json" --file="$OUT" \
  --content-type="application/json" --remote >/dev/null 2>&1 \
  && echo "uploaded meta/versions.json" | tee -a "$LOG" || echo "UPLOAD-FAIL" | tee -a "$LOG"
echo "DONE ok=$ok miss=$miss / $total" | tee -a "$LOG"
del "$WORK" 2>/dev/null
