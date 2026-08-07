#!/bin/bash
# Strip the NCCN disclaimer banner off every cached PDF, in place at the R2 root.
#
# NCCN stamps two 6pt lines onto the top of every page as *separate content
# stream objects* appended to the page's /Contents array:
#   1. "PLEASE NOTE that use of this NCCN Content is governed by the End-User
#       License Agreement, and you MAY NOT distribute this Content …"
#   2. "Printed by <name> on <date> <time>. Copyright © <year> NCCN, Inc. …"
# ../strip_nccn_disclaimer.py drops exactly those streams — the page's own
# content stream is untouched, so nothing under the banner gets clipped.
#
# Reads raw/<id>.pdf (the untouched original the cron pulls from NCCN) and writes
# the stripped result to the ROOT <id>.pdf, which is what the viewer, downloads,
# thumbnails and the D1 search index all read. Never hits NCCN itself.
# Skips ids whose source PDF is unchanged since the last run, tracked by sha256
# in meta/clean.json; the strip is byte-deterministic (no_new_id=True) so an
# unchanged input really does mean an unchanged output.
#
# NCCN only — deliberately reads guidelines.json and not algorithms.json. MD
# Anderson's PDFs carry no such banner, so there is nothing to strip and no raw/
# copy to strip it from: refresh_mda.sh writes those straight to the R2 root
# (see lib/pdf.js refreshKey). Adding them here would look for raw/mda-*.pdf
# objects that by design do not exist.
#
#   bash gen_clean.sh          # incremental
#   FORCE=1 bash gen_clean.sh  # rebuild every id
#   LIMIT=5 bash gen_clean.sh  # only the first 5 ids (smoke test)
set -u
cd "$(dirname "$0")"
[ -f ../.env ] && set -a && . ../.env && set +a  # load token if present
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
  if ! wrangler r2 object get "$BUCKET/raw/$id.pdf" --file="$pdf" --remote >/dev/null 2>&1; then
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

  if wrangler r2 object put "$BUCKET/$id.pdf" --file="$out" \
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
# MERGE onto the previous manifest rather than rebuilding it: a LIMIT=N run (or
# one that died partway) only has rows for the ids it touched, and rewriting
# from those alone would drop the other 80-odd entries and force a full re-strip
# next time.
python3 - "$WORK/prev.json" "$WORK/rows.tsv" "$WORK/clean.json" <<'PY'
import sys, json, datetime
prev, rows, out = sys.argv[1], sys.argv[2], sys.argv[3]
now = datetime.datetime.now(datetime.timezone.utc).isoformat(timespec="seconds")
try:
    m = json.load(open(prev, encoding="utf-8"))
    if not isinstance(m, dict):
        m = {}
except Exception:
    m = {}
fresh = 0
for line in open(rows, encoding="utf-8"):
    parts = line.rstrip("\n").split("\t")
    if len(parts) != 3 or not parts[0]:
        continue
    gid, src_sha, pages = parts
    m[gid] = {"src_sha": src_sha, "pages": int(pages or 0), "updated": now}
    fresh += 1
json.dump(m, open(out, "w"), ensure_ascii=False, separators=(",", ":"), sort_keys=True)
print(f"manifest entries {len(m)} (this run touched {fresh})")
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
