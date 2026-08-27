#!/bin/bash
# 把生成核對清單需要的素材 dump 到 snippets/_src/<gid>/<ref>.txt。
#
# 一個 ref 一個檔，內容是該頁的完整 page_text——包含頁尾註腳。註腳很重要：NCCN 的
# 關鍵條件常常只寫在 a/b/tt/uu/vv 裡，不在主圖上，而那正是最容易被摘要吃掉的部分。
#
# 決策節點與參考附錄靠 ref 尾碼分：數字結尾是 decision（門診情境），字母結尾是
# principles（查閱資料）。COL-2A 這種數字加字母的續頁算 decision。四份指引驗證過。
#
#   bash dump_snippet_src.sh breast          # 只 dump 決策節點
#   KIND=all bash dump_snippet_src.sh breast # 連參考附錄一起
set -u
cd "$(dirname "$0")" || exit 1
[ -f ../.env ] && set -a && . ../.env && set +a
GID="${1:?usage: dump_snippet_src.sh <gid>}"
KIND="${KIND:-decision}"
OUT="snippets/_src/$GID"
mkdir -p "$OUT"
WORK=$(mktemp -d)
del(){ command rip "$@" 2>/dev/null || find "$@" -delete 2>/dev/null; }

wrangler r2 object get "nccn-pdfs/meta/toc/$GID.json" --file="$WORK/toc.json" --remote >/dev/null 2>&1 \
  || { echo "no TOC for $GID"; exit 1; }

python3 - "$WORK/toc.json" "$KIND" > "$WORK/refs.tsv" <<'PY'
import json, re, sys
toc, kind = sys.argv[1], sys.argv[2]
for x in json.load(open(toc, encoding="utf-8")):
    if x.get("sec") != "algorithm":
        continue
    ref = x.get("ref") or ""
    # 數字結尾（含 2A 這種續頁）= 決策節點；純字母結尾 = principles 附錄
    k = "decision" if re.search(r"-\d+[A-Z]?$", ref) else "principles"
    if kind != "all" and k != kind:
        continue
    print("%s\t%s\t%s\t%s" % (ref, x.get("p"), k, (x.get("t") or "").replace("\t", " ")))
PY

n=0
while IFS=$'\t' read -r ref page kind title; do
  [ -n "$ref" ] || continue
  wrangler d1 execute nccn-search --remote --json \
    --command "SELECT body FROM page_text WHERE gid='$GID' AND page=$page" 2>/dev/null \
    | python3 -c "
import sys, json
try:
    r = json.load(sys.stdin)[0]['results']
    sys.stdout.write(r[0]['body'] if r else '')
except Exception:
    pass
" > "$WORK/body.txt"
  if [ ! -s "$WORK/body.txt" ]; then
    echo "MISS $ref (p$page) — page_text 沒有這一頁"
    continue
  fi
  {
    echo "gid: $GID"
    echo "ref: $ref"
    echo "page: $page"
    echo "kind: $kind"
    echo "title: $title"
    echo "---"
    cat "$WORK/body.txt"
  } > "$OUT/$ref.txt"
  n=$((n+1))
  echo "OK $ref (p$page, $(wc -c < "$OUT/$ref.txt" | tr -d ' ') bytes)"
done < "$WORK/refs.tsv"

del "$WORK"
echo "DONE $n refs → $OUT"
[ "$n" -gt 0 ]
