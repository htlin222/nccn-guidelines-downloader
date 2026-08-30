#!/usr/bin/env bash
# D1 的門診修改 → snippets/<gid>/<ref>.md
#
# 這是整套流程裡唯一方向相反的一步，所以它刻意是手動的。
#
# 平常的方向是「檔案 → D1」：git 是單一真相，load_snippets.sh 把它推進 D1。
# 但門診當下改東西的地方是網頁，改完存在 snippet_edits 這張表裡（load_snippets.sh
# 從不碰它，所以不會被下一次載入蓋掉）。那些修改要回到 git 才算數——留在 D1 裡
# 的話，它們沒有版本紀錄、沒有 diff、也不會被 verify_snippets.py 驗到。
#
# 所以這支把修改寫回檔案，讓你 review diff 之後自己決定要不要 commit。它不會
# 自動 commit，也不會碰 D1——把修改從 D1 刪掉是網頁上「還原成生成版本」的事。
#
#   bash pull_edits.sh              # 寫回檔案
#   DRY=1 bash pull_edits.sh        # 只列出有哪些修改，不寫檔
#
# 寫回之後照常跑：
#   python3 verify_snippets.py && bash load_snippets.sh
# 這一步不能省——手改的內容一樣要過四關，尤其是來源關（藥名、劑量、閾值都得在
# 素材裡找得到）。門診改的多半是措辭，但四關擋的正是「不小心寫進一個素材沒有的
# 東西」，而那件事人手改的時候比模型還容易發生。

set -euo pipefail
cd "$(dirname "$0")"
[ -f ../.env ] && { set -a; . ../.env; set +a; }

DB="${DB:-nccn-search}"
DRY="${DRY:-0}"

del(){ command rip "$@" 2>/dev/null || find "$@" -delete 2>/dev/null; }
WORK=$(mktemp -d)
trap 'del "$WORK" >/dev/null 2>&1 || true' EXIT

# 查詢結果落成檔案再交給 python，而不是接管線：`python3 - <<'PY'` 的 stdin 已經
# 被 heredoc 佔走，管線根本進不去（shellcheck SC2259）。
wrangler d1 execute "$DB" --remote --json --command \
  "SELECT gid, ref, body, editor, updated FROM snippet_edits ORDER BY gid, ref" \
  > "$WORK/edits.json"

python3 - "$DRY" "$WORK/edits.json" <<'PY'
import json, os, sys

dry = sys.argv[1] == "1"
rows = json.load(open(sys.argv[2], encoding="utf-8"))[0]["results"]
if not rows:
    print("D1 裡沒有任何門診修改")
    raise SystemExit(0)

wrote = skipped = missing = 0
for r in rows:
    path = os.path.join("snippets", r["gid"], r["ref"] + ".md")
    who = "%s @ %s" % (r.get("editor") or "?", (r.get("updated") or "")[:16])
    if not os.path.exists(path):
        # 檔案不在，代表這個 ref 在 git 裡被刪掉或改名了。這裡不新建——寫回一個
        # 沒有對應素材的檔案，verify 下一步就會擋下來，而錯誤訊息會離真正的原因
        # 隔一層。先讓人知道發生了什麼。
        print("MISSING %s/%s（%s）——git 裡沒有這個檔，跳過" % (r["gid"], r["ref"], who))
        missing += 1
        continue
    cur = open(path, encoding="utf-8").read()
    if cur == r["body"]:
        skipped += 1
        continue
    print("%s %s/%s（%s）" % ("WOULD-WRITE" if dry else "WRITE", r["gid"], r["ref"], who))
    if not dry:
        open(path, "w", encoding="utf-8").write(r["body"])
        wrote += 1

print("\n%d 筆修改：%s%d 筆與檔案已相同，%d 筆找不到檔案"
      % (len(rows),
         ("%d 筆待寫入，" % (len(rows) - skipped - missing)) if dry else ("%d 筆寫回，" % wrote),
         skipped, missing))
if missing:
    raise SystemExit(1)
PY
