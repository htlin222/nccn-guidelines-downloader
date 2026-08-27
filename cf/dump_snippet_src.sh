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
# 這是一次全表掃描，而 CI 一輪要對六十幾份指引各做一次。撞到暫時性失敗時原本會
# 靜靜地變成空表，接著 fallback 產出 0 個 ref，最後由結尾的 `[ "$n" -gt 0 ]` 讓
# 整輪 CI 紅掉——而 log 上只看得到「DONE 0 refs」，看不出是查詢掛了。所以重試，
# 而且真的拿不到時要說出來。
tails_ok=0
for try in 1 2 3; do
  if wrangler d1 execute nccn-search --remote --json \
      --command "SELECT page, substr(body, -260) AS tail FROM page_text WHERE gid='$GID'" \
      > "$WORK/tails.json" 2>"$WORK/tails.err"; then
    tails_ok=1; break
  fi
  echo "  page_text 頁尾查詢失敗（第 $try 次），重試中" >&2
  sleep $((try * 3))
done
if [ "$tails_ok" != "1" ]; then
  echo "  WARN 取不到 $GID 的頁尾 ref 表，TOC fallback 將無法運作：" >&2
  head -3 "$WORK/tails.err" >&2
  echo '[]' > "$WORK/tails.json"
fi
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

# build_toc.sh 對某些 PDF 認不出任何演算法頁——`waldenstroms` 的 TOC 有 20 個條目
# 但全部是 discussion，而它的 PDF 裡確實有 LPL-1/LPL-2/AL-1/BNS-1 等九頁。
# 這種時候退回用頁尾 ref 表：那張表是掃 page_text 建的，不依賴 TOC。
# TOC 與頁尾 ref 表是互補的，不是二選一：TOC 給得出標題，頁尾表給得出完整性。
#
# build_toc.sh 對某些 PDF 只認出一部分演算法頁——`thyroid` 的 TOC 只列 THYR-C/D/E，
# 而那份 PDF 實際有 PAP-5 到 PAP-9、ONC-2A、CAT-1。先前的寫法是「TOC 完全沒有
# algorithm 才改用頁尾表」，於是 KIND=decision 時 refs.tsv 為空、fallback 生效、
# 抓到 8 個；KIND=all 時 refs.tsv 有那 3 個 principles、fallback 不生效、只抓 3 個。
# 同一份指引在兩種模式下抓到不同的東西，而 CI 用的正是抓得比較少的那種。
#
# 所以改成合併：TOC 有的照用（保留標題），頁尾表有而 TOC 沒有的補進來。
if [ -s "$WORK/refpage.tsv" ] && [ "$KIND" != "principles" ]; then
  before=$(wc -l < "$WORK/refs.tsv" | tr -d ' ')
  # 用 getline 讀既有的 ref，不用 NR==FNR：TOC 一個 algorithm 都沒有時 refs.tsv
  # 是空的，而 NR==FNR 在第一個檔案為空時會把第二個檔案的第一行誤判成第一個檔案的
  # ——那正是 thyroid 在 KIND=decision 下的情況。
  cut -f1 "$WORK/refs.tsv" > "$WORK/have.txt" 2>/dev/null || : > "$WORK/have.txt"
  awk -F'\t' -v kind="$KIND" -v have="$WORK/have.txt" '
    BEGIN { while ((getline l < have) > 0) seen[l] = 1 }
    $1 ~ /^MS-/ || $1 ~ /^ABBR/ { next }
    !($1 in seen) {
      k = ($1 ~ /-[0-9]+[A-Z]?$/) ? "decision" : "principles"
      if (kind == "all" || k == kind) print $1 "\t" $2 "\t" k "\t"
    }
  ' "$WORK/refpage.tsv" >> "$WORK/refs.tsv"
  after=$(wc -l < "$WORK/refs.tsv" | tr -d ' ')
  [ "$after" -gt "$before" ] \
    && echo "  TOC 有 $before 個，頁尾 ref 表補了 $((after - before)) 個" >&2
  sort -t$'\t' -k2 -n -o "$WORK/refs.tsv" "$WORK/refs.tsv"
fi

n=0; miss=0
while IFS=$'\t' read -r ref page kind title; do
  [ -n "$ref" ] || continue
  # 重試三次。這一頁真的不在 page_text 裡（索引還沒重建到它）跟「D1 這次剛好沒回」
  # 在輸出上長得一樣，而後者是暫時的——不重試的話，一次抖動就會讓這份清單的素材
  # 永久缺席，接著 verify 報「找不到素材檔」，看起來像清單有問題而不像查詢有問題。
  : > "$WORK/body.txt"
  for try in 1 2 3; do
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
    [ -s "$WORK/body.txt" ] && break
    [ "$try" -lt 3 ] && sleep $((try * 2))
  done
  if [ ! -s "$WORK/body.txt" ]; then
    miss=$((miss+1))
    echo "MISS $ref (p$page) — page_text 讀不到這一頁（已重試 3 次）"
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
echo "DONE $n refs, $miss miss → $OUT"
# `n > 0` 擋得住「token 壞掉所以什麼都沒抓到」，擋不住「大半的頁讀不到」——後者
# 會讓一份指引只留下零星幾個素材，而 verify 要到很後面才以「找不到素材檔」的形式
# 冒出來，看起來像清單壞了。所以 miss 過半就直接在這裡紅。
[ "$n" -gt 0 ] || { echo "  ERROR $GID 一個素材都沒產出" >&2; exit 1; }
if [ "$miss" -gt "$n" ]; then
  echo "  ERROR $GID 有 $miss 頁讀不到、只成功 $n 頁——page_text 或 D1 有問題" >&2
  exit 1
fi
