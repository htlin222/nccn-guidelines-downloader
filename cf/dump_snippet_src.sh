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

# NCCN 常把註腳放在自己的一頁（AML-4A、GAST-2A、REC-3A…），而那些頁在 TOC 裡
# 沒有條目——它們不是決策節點，是決策節點的一部分。少了它們，清單會漏掉整頁的
# 限定條件，而且漏得很安靜：主頁只寫「Footnotes on AML-4A」。
#
# 每一頁的頁尾都印著自己的 ref，所以掃一次 page_text 就能建出完整的 ref → page 表。
wrangler d1 execute nccn-search --remote --json \
  --command "SELECT page, substr(body, -260) AS tail FROM page_text WHERE gid='$GID'" \
  2>/dev/null > "$WORK/tails.json" || echo '[]' > "$WORK/tails.json"
python3 - "$WORK/tails.json" > "$WORK/refpage.tsv" <<'PY2'
import json, re, sys
try:
    rows = json.load(open(sys.argv[1]))[0]["results"]
except Exception:
    rows = []
for r in rows:
    # 頁尾最後一個像 ref 的字串就是這一頁的編號
    hits = re.findall(r"\b([A-Z]{2,}[A-Z0-9]*-[0-9]+[A-Z]?)\b", r.get("tail") or "")
    if hits:
        print("%s\t%s" % (hits[-1], r["page"]))
PY2

python3 - "$WORK/toc.json" "$KIND" > "$WORK/refs.tsv" <<'PY'
import json, re, sys
toc, kind = sys.argv[1], sys.argv[2]
for x in json.load(open(toc, encoding="utf-8")):
    if x.get("sec") != "algorithm":
        continue
    ref = x.get("ref") or ""
    # ABBR 是縮寫對照表，做成核對清單沒有意義：它沒有決策、沒有條件、也沒有出口，
    # 只是一頁 term = definition。它的 ref 尾碼是數字，所以不排除的話會被當成決策節點。
    if ref.startswith("ABBR"):
        continue
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
    # 這一頁引用到的註腳頁，整頁附在後面。它們是這一頁的一部分，不是另一份文件。
    for fref in $(grep -oE "\b[A-Z]{2,}[A-Z0-9]*-[0-9]+[A-Z]\b" "$WORK/body.txt" | sort -u); do
      [ "$fref" = "$ref" ] && continue
      fpage=$(awk -F'\t' -v r="$fref" '$1==r{print $2; exit}' "$WORK/refpage.tsv")
      [ -n "$fpage" ] || continue
      wrangler d1 execute nccn-search --remote --json \
        --command "SELECT body FROM page_text WHERE gid='$GID' AND page=$fpage" 2>/dev/null \
        | python3 -c "
import sys, json
try:
    r = json.load(sys.stdin)[0]['results']
    sys.stdout.write(r[0]['body'] if r else '')
except Exception:
    pass
" > "$WORK/f.txt"
      if [ -s "$WORK/f.txt" ]; then
        echo ""
        echo "=== FOOTNOTES CONTINUED: $fref (page $fpage) ==="
        cat "$WORK/f.txt"
      fi
    done
  } > "$OUT/$ref.txt"
  n=$((n+1))
  echo "OK $ref (p$page, $(wc -c < "$OUT/$ref.txt" | tr -d ' ') bytes)"
done < "$WORK/refs.tsv"

del "$WORK"
echo "DONE $n refs → $OUT"
[ "$n" -gt 0 ]
