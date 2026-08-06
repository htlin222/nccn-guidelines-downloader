#!/bin/bash
# Build the D1 full-text search index: pull each cached PDF from R2, extract
# per-page text with pdftotext, and load it into the D1 FTS5 `pages` table.
# Pulls PDFs from R2 — does NOT hit NCCN. Set LIMIT=N to index only the first N.
set -u
cd "$(dirname "$0")" || exit 1
[ -f ../.env ] && set -a && . ../.env && set +a  # load token if present
BUCKET="nccn-pdfs"
DB="nccn-search"
LIMIT="${LIMIT:-0}"
# The staging index has to clear this before it is allowed to replace the live
# one. Lower it only for a deliberate partial run (LIMIT=N), never in CI.
MIN_ROWS="${MIN_ROWS:-1000}"
WORK=$(mktemp -d)
LOG="build_index.log"; : > "$LOG"
del(){ command rip "$@" 2>/dev/null || find "$@" -delete 2>/dev/null; }

python3 - "$WORK" "$LIMIT" <<'PY'
import sys, os, json, shutil, subprocess, re
work, limit = sys.argv[1], int(sys.argv[2])
# gen_clean.sh 這一輪剝好的 PDF 就在這裡，優先用它——見 lib.sh 的 fetch_clean。
clean_dir = os.environ.get('CLEAN_DIR', '')
guides = json.load(open('guidelines.json'))
if limit > 0: guides = guides[:limit]
chunk, cn, size = [], 0, 0
def flush():
    global chunk, cn, size
    if not chunk: return
    cn += 1
    open(os.path.join(work, f'chunk_{cn:03d}.sql'), 'w', encoding='utf-8').write(
        "\n".join(chunk) + "\n")
    chunk, size = [], 0
# Chunks are capped by BYTES, not statement count. Each page emits two rows (the
# 2000-char FTS body and the untruncated page_text body), so a fixed 50-statement
# chunk balloons past what `wrangler d1 execute --file` will accept.
# 80 KB, not 150: the first run at 150 KB lost 1 chunk in 388 to an oversized
# request. The old 50-statement cap worked out to ~100 KB, so this stays under
# what was already proven. It roughly doubles the chunk count — that is the real
# cost of storing each page twice, and it is paid once a week.
def add(stmt):
    global size
    chunk.append(stmt); size += len(stmt)
    if size >= 80000: flush()
def esc(s): return s.replace("'", "''")

# The per-page NCCN banner is stripped from the TEXT, not trusted to be absent
# from the PDF. Two reasons: the root objects only became banner-free after the
# raw/ migration, and `wrangler r2 object get` reads through a 4-hour CDN cache
# that can hand back a stale (still-bannered) copy right after a rewrite. Doing
# it here makes the index correct either way.
# It also matters for recall. Bodies are capped at 2000 chars and ~90% of pages
# hit that cap, so the boilerplate was pushing real text past the cut. Measured
# on breast v5.2026 (278 pages): stripping first indexes 19.4% more real content,
# +332 chars on each of 266 pages.
BOILER = [re.compile(p, re.I) for p in (
    r"PLEASE NOTE that use of this NCCN Content.{0,300}?artificial intelligence model or tool\.",
    r"Printed by .{0,60}?\d{1,2}/\d{1,2}/\d{4}.{0,40}?\.",
    r"Copyright\s*©\s*\d{4} National Comprehensive Cancer Network.{0,120}?All Rights Reserved\.",
    r"NCCN Guidelines Index Table of Contents Discussion",
)]
def strip_boiler(s):
    for r in BOILER: s = r.sub(' ', s)
    return re.sub(r'\s+', ' ', s).strip()
for gi, g in enumerate(guides, 1):
    gid, name, cat = g['id'], g['name'], g['cat']
    pdf = os.path.join(work, 'x.pdf')
    if os.path.exists(pdf): os.remove(pdf)
    local_pdf = os.path.join(clean_dir, gid + '.pdf') if clean_dir else ''
    if local_pdf and os.path.exists(local_pdf) and os.path.getsize(local_pdf) > 0:
        shutil.copyfile(local_pdf, pdf)
    else:
        subprocess.run(['wrangler','r2','object','get',f'nccn-pdfs/{gid}.pdf','--file='+pdf,'--remote'], capture_output=True)
    if not os.path.exists(pdf):
        print(f'[{gi}] GET-FAIL {gid}'); continue
    txt = subprocess.run(['pdftotext','-enc','UTF-8',pdf,'-'], capture_output=True).stdout.decode('utf-8','ignore')
    os.remove(pdf)
    pages = txt.split('\f')
    npg = 0
    for pno, body in enumerate(pages, 1):
        body = body.replace('\x00',' ')
        body = strip_boiler(body)
        if len(body) < 15: continue
        # Two rows per page, deliberately different lengths:
        #   pages     — 2000 chars, an FTS5 index; the cap is about index size and
        #               snippet quality, and search only ever needs a match + snippet.
        #   page_text — untruncated (12000 is a sanity bound, not a budget); this is
        #               what /api/v1/page hands to Claude, and half a page of text
        #               reads as a complete page that happens to stop mid-sentence.
        add(f"INSERT INTO pages(gid,page,name,cat,body) VALUES('{esc(gid)}',{pno},'{esc(name)}','{esc(cat)}','{esc(body[:2000])}');")
        add(f"INSERT INTO page_text(gid,page,body) VALUES('{esc(gid)}',{pno},'{esc(body[:12000])}');")
        npg += 1
    print(f'[{gi}/{len(guides)}] {gid}: {npg} pages')
flush()
print('CHUNKS', cn)
PY

n=$(ls "$WORK"/chunk_*.sql 2>/dev/null | wc -l | tr -d ' ')

# Bail out BEFORE touching the live table. This used to run the DROP first and
# only check `n` afterwards, so a run that could read D1 but not R2 (bad R2
# permissions, a bucket outage) dropped `pages`, produced nothing, and left
# search returning zero hits until someone noticed. The only reason that never
# fired in production is luck: the one time it happened the same missing token
# broke the DROP too.
if [ "$n" -eq 0 ]; then
  echo "FAIL: no chunks were produced (could not read PDFs from R2?) — live index left untouched" | tee -a "$LOG"
  del "$WORK" 2>/dev/null; exit 1
fi

# Load into a staging table, then swap. Search keeps serving the old index for
# the whole rebuild, and a load that dies halfway leaves the live table alone
# rather than half-populated. D1 has no transactions, so the swap is two
# statements — a crash between them is the one window that still needs a rerun,
# and it is milliseconds wide instead of minutes.
echo "build staging table + load $n chunks" | tee -a "$LOG"
sql(){ wrangler d1 execute "$DB" --remote --command "$1" >/dev/null 2>&1; }
sql "DROP TABLE IF EXISTS pages_new" || true
sql "DROP TABLE IF EXISTS page_text_new" || true
# Derive the staging DDL from sql/schema.sql so there is still one source of
# truth for the FTS5 column list: drop its DROP line, rename the table.
sed '/^DROP TABLE/d; s/CREATE VIRTUAL TABLE pages /CREATE VIRTUAL TABLE pages_new /' \
  sql/schema.sql > "$WORK/staging.sql"
# Same trick for page_text, whose source of truth is sql/api.sql. It lives in a
# file full of tables this script must NEVER recreate (api_keys holds issued
# credentials), so pull out just its CREATE block rather than running the file.
awk '/^CREATE TABLE IF NOT EXISTS page_text/,/WITHOUT ROWID;/' sql/api.sql \
  | sed 's/TABLE IF NOT EXISTS page_text/TABLE page_text_new/' >> "$WORK/staging.sql"
if ! grep -q "pages_new" "$WORK/staging.sql" || ! grep -q "page_text_new" "$WORK/staging.sql"; then
  echo "FAIL: sql/schema.sql or sql/api.sql no longer matches the expected CREATE — fix the sed/awk in this script" | tee -a "$LOG"
  del "$WORK" 2>/dev/null; exit 1
fi
if grep -qi "api_keys" "$WORK/staging.sql"; then
  echo "FAIL: staging DDL picked up api_keys — that table holds live credentials and must never be rebuilt" | tee -a "$LOG"
  del "$WORK" 2>/dev/null; exit 1
fi
if ! wrangler d1 execute "$DB" --file="$WORK/staging.sql" --remote >/dev/null 2>&1; then
  echo "FAIL: could not create staging table (D1 auth?) — live index left untouched" | tee -a "$LOG"
  del "$WORK" 2>/dev/null; exit 1
fi
i=0; bad=0
for f in "$WORK"/chunk_*.sql; do
  i=$((i+1))
  # The chunks are written against the live table names; retarget both at staging.
  sed -e 's/^INSERT INTO pages(/INSERT INTO pages_new(/' \
      -e 's/^INSERT INTO page_text(/INSERT INTO page_text_new(/' "$f" > "$f.staged"
  # Retry before giving up. One chunk failing throws away the whole 20-minute
  # rebuild, and the usual cause is a transient D1 error, not bad SQL — losing
  # the run to a blip that a 5-second wait would have cleared is a bad trade.
  # The error text is captured rather than sent to /dev/null: the first failure
  # here was undiagnosable because the reason had been discarded.
  ok_chunk=0
  for attempt in 1 2 3; do
    if err=$(wrangler d1 execute "$DB" --file="$f.staged" --remote 2>&1 >/dev/null); then
      ok_chunk=1; break
    fi
    echo "chunk $i/$n attempt $attempt failed: $(echo "$err" | tr '\n' ' ' | cut -c1-300)" | tee -a "$LOG"
    sleep $((attempt * 5))
  done
  if [ "$ok_chunk" -eq 1 ]; then
    echo "chunk $i/$n ok" | tee -a "$LOG"
  else
    bad=$((bad+1)); echo "chunk $i/$n FAIL after 3 attempts ($(wc -c < "$f.staged") bytes)" | tee -a "$LOG"
  fi
done
echo "DONE loaded $((n - bad))/$n chunks" | tee -a "$LOG"

# A partial load is worse than no rebuild: it looks fine but silently loses
# pages. Throw the staging table away and keep the old index.
if [ "$bad" -ne 0 ]; then
  echo "FAIL: $bad/$n chunks failed — discarding staging tables, live index left untouched" | tee -a "$LOG"
  sql "DROP TABLE IF EXISTS pages_new" || true
  sql "DROP TABLE IF EXISTS page_text_new" || true
  del "$WORK" 2>/dev/null; exit 1
fi

# Sanity-check the staging tables before they become the live ones: a rebuild
# that somehow produced a near-empty index should not be promoted.
count(){ wrangler d1 execute "$DB" --remote --json --command "SELECT COUNT(*) AS n FROM $1" 2>/dev/null \
  | tr -d ' \n' | sed -n 's/.*"n":\([0-9]*\).*/\1/p'; }
rows=$(count pages_new); rows="${rows:-0}"
prows=$(count page_text_new); prows="${prows:-0}"
# Both are written from the same loop, so a mismatch means one of the two INSERT
# streams was silently dropped — promoting that gives search and /api/v1/page
# different views of the same guideline.
if [ "$rows" -lt "$MIN_ROWS" ] || [ "$prows" -ne "$rows" ]; then
  echo "FAIL: staging pages=$rows page_text=$prows (need >= $MIN_ROWS and equal) — discarding, live index left untouched" | tee -a "$LOG"
  sql "DROP TABLE IF EXISTS pages_new" || true
  sql "DROP TABLE IF EXISTS page_text_new" || true
  del "$WORK" 2>/dev/null; exit 1
fi

# Promote both tables in ONE file so they go over as a single batch. They must
# change version together: search hitting the new index while /api/v1/page still
# reads the old page_text is the exact inconsistency this staging dance exists to
# avoid. D1 has no transactions, so this is as narrow as the window gets.
echo "promoting staging tables ($rows rows)" | tee -a "$LOG"
cat > "$WORK/promote.sql" <<'SQL'
DROP TABLE IF EXISTS pages;
ALTER TABLE pages_new RENAME TO pages;
DROP TABLE IF EXISTS page_text;
ALTER TABLE page_text_new RENAME TO page_text;
SQL
if ! wrangler d1 execute "$DB" --file="$WORK/promote.sql" --remote >/dev/null 2>&1; then
  echo "FAIL: could not promote staging tables — rerun this script" | tee -a "$LOG"
  del "$WORK" 2>/dev/null; exit 1
fi
echo "DONE index live with $rows rows (page_text $prows)" | tee -a "$LOG"
del "$WORK" 2>/dev/null
