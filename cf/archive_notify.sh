#!/bin/bash
# 把超過 KEEP_DAYS 天的通知從 D1 卸到 R2 的 meta/notify/YYYY-MM.jsonl，然後從 D1 刪掉。
#
# D1 那張表只負責「最近的、還可能要處理的」；R2 是不會再被查詢、但也不想弄丟的
# 歷史。一天最多四五則、一年不到兩千列，其實還撐得住——這支存在的理由是別讓
# 「查未讀數」這種每次開首頁都要跑的 query 隨年份愈掃愈慢。
#
#   KEEP_DAYS=90 bash archive_notify.sh
set -u
cd "$(dirname "$0")"
[ -f ../.env ] && set -a && . ../.env && set +a
del(){ command rip "$@" 2>/dev/null || find "$@" -delete 2>/dev/null; }

DB="nccn-search"
BUCKET="nccn-pdfs"
KEEP_DAYS="${KEEP_DAYS:-90}"
WORK=$(mktemp -d)
LOG="archive_notify.log"; : > "$LOG"

# GNU date 與 BSD date 的相對日期語法不同，用 python 算最省事。
CUTOFF=$(python3 -c "
import datetime, sys
print((datetime.datetime.now(datetime.timezone.utc) - datetime.timedelta(days=int(sys.argv[1]))).strftime('%Y-%m-%dT%H:%M:%S.000Z'))
" "$KEEP_DAYS")
echo "cutoff: $CUTOFF (keep $KEEP_DAYS days)" | tee -a "$LOG"

wrangler d1 execute "$DB" --remote --json \
  --command "SELECT id, kind, level, title, body, created, read_at FROM notifications WHERE created < '$CUTOFF' ORDER BY created LIMIT 5000" \
  > "$WORK/rows.raw" 2>/dev/null || { echo "QUERY-FAIL" | tee -a "$LOG"; del "$WORK"; exit 1; }

# wrangler 有時會在 JSON 前後夾雜提示行，所以從第一個 '[' 起用 raw_decode 取。
python3 - "$WORK/rows.raw" "$WORK" <<'PY'
import json, sys, os, collections
raw = open(sys.argv[1], encoding='utf-8', errors='replace').read()
work = sys.argv[2]
i = raw.find('[')
data = []
if i >= 0:
    try:
        data, _ = json.JSONDecoder().raw_decode(raw[i:])
    except ValueError:
        data = []
rows = []
for blk in (data if isinstance(data, list) else [data]):
    if isinstance(blk, dict):
        rows.extend(blk.get('results') or [])
by = collections.defaultdict(list)
for r in rows:
    by[str(r.get('created', ''))[:7] or 'unknown'].append(r)
for month, rs in by.items():
    with open(os.path.join(work, month + '.new'), 'w', encoding='utf-8') as f:
        for r in rs:
            f.write(json.dumps(r, ensure_ascii=False) + '\n')
open(os.path.join(work, 'months.txt'), 'w').write('\n'.join(sorted(by)))
print(len(rows), 'rows in', len(by), 'month(s)')
PY

MONTHS=$(cat "$WORK/months.txt" 2>/dev/null)
if [ -z "$MONTHS" ]; then
  echo "nothing to archive" | tee -a "$LOG"; del "$WORK"; exit 0
fi

# R2 沒有 append：把既有的月檔拉下來、接在後面、整份寫回去。一個月幾十列，
# 這個代價比為了省事而弄丟歷史划算。
arch=0
: > "$WORK/done.txt"
for m in $MONTHS; do
  key="meta/notify/$m.jsonl"
  : > "$WORK/$m.merged"
  wrangler r2 object get "$BUCKET/$key" --file="$WORK/$m.old" --remote >/dev/null 2>&1 \
    && cat "$WORK/$m.old" >> "$WORK/$m.merged"
  cat "$WORK/$m.new" >> "$WORK/$m.merged"
  if wrangler r2 object put "$BUCKET/$key" --file="$WORK/$m.merged" \
      --content-type="application/x-ndjson" --remote >/dev/null 2>&1; then
    n=$(wc -l < "$WORK/$m.merged" | tr -d ' ')
    echo "archived $key ($n lines total)" | tee -a "$LOG"
    echo "$m" >> "$WORK/done.txt"
    arch=$((arch+1))
  else
    echo "PUT-FAIL $key — 這個月的資料留在 D1，下次再試" | tee -a "$LOG"
  fi
done

# 只刪「這一輪真的寫進 R2 的那幾個月」。寫檔失敗的月份留在 D1，不然歷史就沒了。
# 條件同樣用 created < cutoff，所以跑這支的當下新寫進來的通知不會被掃到。
if [ "$arch" -gt 0 ]; then
  while read -r m; do
    [ -n "$m" ] || continue
    wrangler d1 execute "$DB" --remote \
      --command "DELETE FROM notifications WHERE created < '$CUTOFF' AND created LIKE '$m%'" \
      >/dev/null 2>&1 && echo "pruned $m from D1" | tee -a "$LOG"
  done < "$WORK/done.txt"
fi
del "$WORK" 2>/dev/null
# 走到這裡代表查詢成功；沒東西可存也是正常結果，所以不比照其他腳本的 ok>0 守門。
exit 0
