#!/bin/bash
# Build banner-free copies of every cached PDF and upload to R2 as clean/<id>.pdf.
#
# NCCN stamps two 6pt lines onto the top of every page as *separate content
# stream objects* appended to the page's /Contents array:
#   1. "PLEASE NOTE that use of this NCCN Content is governed by the End-User
#       License Agreement, and you MAY NOT distribute this Content …"
#   2. "Printed by <name> on <date> <time>. Copyright © <year> NCCN, Inc. …"
# ../strip_nccn_disclaimer.py drops exactly those streams — the page's own
# content stream is untouched, so nothing under the banner gets clipped.
#
# Pulls PDFs from R2 (already seeded) — does NOT hit NCCN.
# Skips ids whose source PDF is unchanged since the last run, tracked by sha256
# in meta/clean.json; the strip is byte-deterministic (no_new_id=True) so an
# unchanged input really does mean an unchanged output.
#
#   bash gen_clean.sh          # incremental
#   FORCE=1 bash gen_clean.sh  # rebuild every id
#   LIMIT=5 bash gen_clean.sh  # only the first 5 ids (smoke test)
set -u
cd "$(dirname "$0")"
[ -f .env ] && set -a && . ./.env && set +a  # load token if present
BUCKET="nccn-pdfs"
STRIP="../strip_nccn_disclaimer.py"
FORCE="${FORCE:-0}"
LIMIT="${LIMIT:-0}"
WORK=$(mktemp -d)
LOG="gen_clean.log"; : > "$LOG"
del(){ command rip "$@" 2>/dev/null || rm -rf "$@" 2>/dev/null; }
sha(){ if command -v sha256sum >/dev/null 2>&1; then sha256sum "$1" | awk '{print $1}';
       else shasum -a 256 "$1" | awk '{print $1}'; fi; }

IDS=$(python3 -c "import json;print('\n'.join(g['id'] for g in json.load(open('guidelines.json'))))")
[ "$LIMIT" -gt 0 ] && IDS=$(echo "$IDS" | head -n "$LIMIT")

# Previous run's manifest: { "<id>": {"src_sha": "…", "pages": N, "updated": "…"} }
if ! wrangler r2 object get "$BUCKET/meta/clean.json" --file="$WORK/prev.json" --remote >/dev/null 2>&1; then
  echo '{}' > "$WORK/prev.json"
fi
python3 -c "import json,sys;json.load(open('$WORK/prev.json'))" 2>/dev/null || echo '{}' > "$WORK/prev.json"
: > "$WORK/rows.tsv"   # id \t src_sha \t pages

ok=0; skip=0; fail=0; i=0; total=$(echo "$IDS" | wc -l | tr -d ' ')
for id in $IDS; do
  i=$((i+1))
  pdf="$WORK/$id.pdf"
  if ! wrangler r2 object get "$BUCKET/$id.pdf" --file="$pdf" --remote >/dev/null 2>&1; then
    fail=$((fail+1)); echo "[$i/$total] GET-FAIL $id" | tee -a "$LOG"; continue
  fi
  # A failed/expired-cookie fetch lands as an HTML login page, not a PDF.
  if [ "$(head -c 4 "$pdf")" != "%PDF" ]; then
    fail=$((fail+1)); echo "[$i/$total] NOT-PDF $id" | tee -a "$LOG"; del "$pdf"; continue
  fi

  src_sha=$(sha "$pdf")
  prev_sha=$(python3 -c "
import json;d=json.load(open('$WORK/prev.json'));print(d.get('$id',{}).get('src_sha',''))" 2>/dev/null)
  if [ "$FORCE" != "1" ] && [ "$src_sha" = "$prev_sha" ]; then
    pages=$(python3 -c "
import json;d=json.load(open('$WORK/prev.json'));print(d.get('$id',{}).get('pages',0))" 2>/dev/null)
    printf '%s\t%s\t%s\n' "$id" "$src_sha" "$pages" >> "$WORK/rows.tsv"
    skip=$((skip+1)); echo "[$i/$total] SKIP $id (unchanged)" | tee -a "$LOG"; del "$pdf"; continue
  fi

  # strip + verify; the script exits non-zero if any marker survives
  out="$WORK/out/$id.pdf"
  if ! python3 "$STRIP" "$pdf" -o "$WORK/out" > "$WORK/strip.log" 2>&1; then
    fail=$((fail+1)); echo "[$i/$total] STRIP-FAIL $id" | tee -a "$LOG"
    sed -n '1,12p' "$WORK/strip.log" | tee -a "$LOG"; del "$pdf"; continue
  fi
  pages=$(grep -oE 'pages: [0-9]+' "$WORK/strip.log" | head -1 | grep -oE '[0-9]+')

  if wrangler r2 object put "$BUCKET/clean/$id.pdf" --file="$out" \
       --content-type="application/pdf" --remote >/dev/null 2>&1; then
    printf '%s\t%s\t%s\n' "$id" "$src_sha" "${pages:-0}" >> "$WORK/rows.tsv"
    ok=$((ok+1))
    echo "[$i/$total] OK $id (${pages:-?} pages, $(wc -c < "$out") bytes)" | tee -a "$LOG"
  else
    fail=$((fail+1)); echo "[$i/$total] PUT-FAIL $id" | tee -a "$LOG"
  fi
  del "$pdf" "$out"
done

# Republish the manifest so the next run can skip unchanged ids, and so the
# Worker can tell which guidelines have a clean copy available.
python3 - "$WORK/rows.tsv" "$WORK/clean.json" <<'PY'
import sys, json, datetime
rows, out = sys.argv[1], sys.argv[2]
now = datetime.datetime.now(datetime.timezone.utc).isoformat(timespec="seconds")
m = {}
for line in open(rows, encoding="utf-8"):
    parts = line.rstrip("\n").split("\t")
    if len(parts) != 3 or not parts[0]:
        continue
    gid, src_sha, pages = parts
    m[gid] = {"src_sha": src_sha, "pages": int(pages or 0), "updated": now}
json.dump(m, open(out, "w"), ensure_ascii=False, separators=(",", ":"), sort_keys=True)
print("manifest entries", len(m))
PY

if wrangler r2 object put "$BUCKET/meta/clean.json" --file="$WORK/clean.json" \
     --content-type="application/json" --remote >/dev/null 2>&1; then
  echo "manifest uploaded" | tee -a "$LOG"
else
  echo "MANIFEST-PUT-FAIL" | tee -a "$LOG"; fail=$((fail+1))
fi

del "$WORK"
echo "DONE ok=$ok skip=$skip fail=$fail / $total" | tee -a "$LOG"
[ "$fail" -eq 0 ]
