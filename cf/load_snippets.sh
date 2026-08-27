#!/bin/bash
# 把 snippets/<gid>/<ref>.md 載進 D1。方向永遠是檔案 → D1，不會反過來：
# 單一真相在 git，D1 只是它的可查詢副本。所以這支可以隨時重跑，也可以只跑一半
# 再重跑——每一筆都是 INSERT OR REPLACE，沒有需要收拾的中間狀態。
#
# 唯一不覆寫的是 review 欄位：那是人審過的結論，重載不該把它抹掉。
#
#   bash load_snippets.sh              # 全部
#   bash load_snippets.sh breast       # 單一指引
#   DRY=1 bash load_snippets.sh breast # 只產生 SQL，不寫 D1
set -u
cd "$(dirname "$0")" || exit 1
[ -f ../.env ] && set -a && . ../.env && set +a
GID="${1:-}"
DRY="${DRY:-0}"
DB="nccn-search"
WORK=$(mktemp -d)
del(){ command rip "$@" 2>/dev/null || find "$@" -delete 2>/dev/null; }

# 先驗過再載。沒過的檔案不准進 D1——這是四關唯一的強制點。
if ! python3 verify_snippets.py ${GID:+snippets/$GID/*.md} > "$WORK/verify.log" 2>&1; then
  echo "verify 沒過，不載入："
  grep '^FAIL' "$WORK/verify.log" | head -20
  del "$WORK"
  exit 1
fi
tail -1 "$WORK/verify.log"

python3 - "$GID" "$WORK" <<'PY'
import glob, json, os, re, sys, tomllib, datetime

gid_filter, work = sys.argv[1], sys.argv[2]
now = datetime.datetime.now(datetime.timezone.utc).isoformat(timespec="seconds")
q = lambda s: "'" + str(s).replace("'", "''") + "'"

paths = sorted(glob.glob(os.path.join("snippets", gid_filter or "*", "*.md")))
paths = [p for p in paths if "/_src/" not in p]
stmts, nfacet = [], 0

for p in paths:
    raw = open(p, encoding="utf-8").read()
    m = re.match(r"^\+\+\+\n(.*?)\n\+\+\+\n(.*)$", raw, re.S)
    if not m:
        continue
    meta, body = tomllib.loads(m.group(1)), m.group(2).strip()
    gid, ref = meta["gid"], meta["ref"]
    # decision / principles 由 ref 尾碼決定，不是模型填的欄位，所以不會填錯
    kind = "decision" if re.search(r"-\d+[A-Z]?$", ref) else "principles"

    # review 用 COALESCE 保留舊值：人審過的結論不該被一次重載抹掉
    stmts.append(
        "INSERT INTO snippets (gid,ref,page,title,kind,body,meta,version,review,updated) "
        "VALUES (%s,%s,%d,%s,%s,%s,%s,%s,"
        "(SELECT review FROM snippets WHERE gid=%s AND ref=%s),%s) "
        "ON CONFLICT(gid,ref) DO UPDATE SET page=excluded.page,title=excluded.title,"
        "kind=excluded.kind,body=excluded.body,meta=excluded.meta,version=excluded.version,"
        "updated=excluded.updated;"
        % (q(gid), q(ref), int(meta["page"]), q(meta["title"]), q(kind), q(body),
           q(json.dumps(meta, ensure_ascii=False, default=str)), q(meta["nccn_version"]),
           q(gid), q(ref), q(now))
    )
    stmts.append("DELETE FROM snippet_facets WHERE gid=%s AND ref=%s;" % (q(gid), q(ref)))
    for axis, val in (meta.get("facets") or {}).items():
        for v in (val if isinstance(val, list) else [val]):
            stmts.append(
                "INSERT OR REPLACE INTO snippet_facets (gid,ref,axis,value) VALUES (%s,%s,%s,%s);"
                % (q(gid), q(ref), q(axis), q(v))
            )
            nfacet += 1

# 沒跑過對抗性審查的清單，review 標成 'unaudited'。四關是機械規則，擋不住
# 「把 positive margins 寫成 margins」這一類——所以未審與已審不是同一個東西，
# 即使它們長得一模一樣。把狀態放進 D1，而不是放在某個人的記憶裡。
pending = set()
try:
    for line in open(os.path.join("snippets", "_pending-audit.txt"), encoding="utf-8"):
        line = line.strip()
        if line and not line.startswith("#"):
            pending.add(line)
except FileNotFoundError:
    pass
for item in sorted(pending):
    gid, _, ref = item.partition("/")
    stmts.append("UPDATE snippets SET review='unaudited' WHERE gid=%s AND ref=%s;"
                 % (q(gid), q(ref)))
# 反過來也要：從清單移除之後，重載要把 'unaudited' 清掉，否則它會永遠黏著
stmts.append("UPDATE snippets SET review=NULL WHERE review='unaudited' AND (gid||'/'||ref) NOT IN (%s);"
             % (", ".join(q(x) for x in sorted(pending)) or "''"))

# 別名字典每次重建：它是手寫檔，改了就該直接生效
vocab = json.load(open(os.path.join("snippets", "_vocab.json"), encoding="utf-8"))
stmts.append("DELETE FROM facet_alias;")
nalias = 0
for axis, m in vocab["alias"].items():
    for alias, value in m.items():
        stmts.append("INSERT OR REPLACE INTO facet_alias (axis,alias,value) VALUES (%s,%s,%s);"
                     % (q(axis), q(alias.lower()), q(value)))
        nalias += 1

# 分批：D1 對單次 execute 的大小有上限，一次全塞會在幾百個 snippet 之後才炸
BATCH = 200
files = []
for i in range(0, len(stmts), BATCH):
    fp = os.path.join(work, "load-%03d.sql" % (i // BATCH))
    open(fp, "w", encoding="utf-8").write("\n".join(stmts[i:i + BATCH]) + "\n")
    files.append(fp)
open(os.path.join(work, "files.txt"), "w").write("\n".join(files) + "\n")
print("%d snippets, %d facets, %d aliases → %d 個 SQL 批次" % (len(paths), nfacet, nalias, len(files)))
PY

if [ "$DRY" = "1" ]; then
  echo "DRY=1, SQL kept at: $WORK"
  exit 0
fi

ok=0; fail=0
while read -r f; do
  [ -n "$f" ] || continue
  if wrangler d1 execute "$DB" --remote --file="$f" >/dev/null 2>&1; then
    ok=$((ok+1))
  else
    fail=$((fail+1)); echo "BATCH-FAIL $(basename "$f")"
  fi
done < "$WORK/files.txt"

echo "DONE batches ok=$ok fail=$fail"
del "$WORK"
[ "$fail" -eq 0 ]
