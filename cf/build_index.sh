#!/bin/bash
# Build the D1 full-text search index: pull each cached PDF from R2, extract
# per-page text with pdftotext, and load it into the D1 FTS5 `pages` table.
# Pulls PDFs from R2 — does NOT hit NCCN. Set LIMIT=N to index only the first N.
set -u
cd "$(dirname "$0")"
[ -f ../.env ] && set -a && . ../.env && set +a  # load token if present
BUCKET="nccn-pdfs"
DB="nccn-search"
LIMIT="${LIMIT:-0}"
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
        body = re.sub(r'\s+', ' ', body).strip()
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
echo "reset table + load $n chunks" | tee -a "$LOG"
wrangler d1 execute "$DB" --file=sql/schema.sql --remote >/dev/null 2>&1 && echo "schema reset" | tee -a "$LOG"
i=0
for f in "$WORK"/chunk_*.sql; do
  i=$((i+1))
  if wrangler d1 execute "$DB" --file="$f" --remote >/dev/null 2>&1; then
    echo "chunk $i/$n ok" | tee -a "$LOG"
  else
    echo "chunk $i/$n FAIL" | tee -a "$LOG"
  fi
done
echo "DONE loaded $n chunks" | tee -a "$LOG"
del "$WORK" 2>/dev/null
