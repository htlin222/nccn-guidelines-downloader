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
import sys, os, json, subprocess, re
work, limit = sys.argv[1], int(sys.argv[2])
guides = json.load(open('guidelines.json'))
if limit > 0: guides = guides[:limit]
chunk, cn, stmts = [], 0, 0
def flush():
    global chunk, cn
    if not chunk: return
    cn += 1
    open(os.path.join(work, f'chunk_{cn:03d}.sql'), 'w', encoding='utf-8').write(
        "\n".join(chunk) + "\n")
    chunk = []
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
        body = body[:2000]
        chunk.append(f"INSERT INTO pages(gid,page,name,cat,body) VALUES('{esc(gid)}',{pno},'{esc(name)}','{esc(cat)}','{esc(body)}');")
        npg += 1
        if len(chunk) >= 50: flush()
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
# Derive the staging DDL from sql/schema.sql so there is still one source of
# truth for the FTS5 column list: drop its DROP line, rename the table.
sed '/^DROP TABLE/d; s/CREATE VIRTUAL TABLE pages /CREATE VIRTUAL TABLE pages_new /' \
  sql/schema.sql > "$WORK/staging.sql"
if ! grep -q "pages_new" "$WORK/staging.sql"; then
  echo "FAIL: sql/schema.sql no longer matches the expected CREATE — fix the sed in this script" | tee -a "$LOG"
  del "$WORK" 2>/dev/null; exit 1
fi
if ! wrangler d1 execute "$DB" --file="$WORK/staging.sql" --remote >/dev/null 2>&1; then
  echo "FAIL: could not create staging table (D1 auth?) — live index left untouched" | tee -a "$LOG"
  del "$WORK" 2>/dev/null; exit 1
fi
i=0; bad=0
for f in "$WORK"/chunk_*.sql; do
  i=$((i+1))
  # The chunks are written against `pages`; retarget them at the staging table.
  sed 's/^INSERT INTO pages(/INSERT INTO pages_new(/' "$f" > "$f.staged"
  if wrangler d1 execute "$DB" --file="$f.staged" --remote >/dev/null 2>&1; then
    echo "chunk $i/$n ok" | tee -a "$LOG"
  else
    bad=$((bad+1)); echo "chunk $i/$n FAIL" | tee -a "$LOG"
  fi
done
echo "DONE loaded $((n - bad))/$n chunks" | tee -a "$LOG"

# A partial load is worse than no rebuild: it looks fine but silently loses
# pages. Throw the staging table away and keep the old index.
if [ "$bad" -ne 0 ]; then
  echo "FAIL: $bad/$n chunks failed — discarding staging table, live index left untouched" | tee -a "$LOG"
  sql "DROP TABLE IF EXISTS pages_new" || true
  del "$WORK" 2>/dev/null; exit 1
fi

# Sanity-check the staging table before it becomes the live one: a rebuild that
# somehow produced a near-empty index should not be promoted.
rows=$(wrangler d1 execute "$DB" --remote --json \
  --command "SELECT COUNT(*) AS n FROM pages_new" 2>/dev/null \
  | tr -d ' \n' | sed -n 's/.*"n":\([0-9]*\).*/\1/p')
rows="${rows:-0}"
if [ "$rows" -lt "$MIN_ROWS" ]; then
  echo "FAIL: staging index only has $rows rows (need $MIN_ROWS) — discarding, live index left untouched" | tee -a "$LOG"
  sql "DROP TABLE IF EXISTS pages_new" || true
  del "$WORK" 2>/dev/null; exit 1
fi

echo "promoting staging table ($rows rows)" | tee -a "$LOG"
sql "DROP TABLE IF EXISTS pages" || true
if ! sql "ALTER TABLE pages_new RENAME TO pages"; then
  echo "FAIL: could not promote staging table — rerun this script" | tee -a "$LOG"
  del "$WORK" 2>/dev/null; exit 1
fi
echo "DONE index live with $rows rows" | tee -a "$LOG"
del "$WORK" 2>/dev/null
