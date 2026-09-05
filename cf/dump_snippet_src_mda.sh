#!/bin/bash
# 把 MD Anderson 演算法的素材 dump 到 snippets/_src/<gid>/ALGO-1.txt。
#
# 跟 dump_snippet_src.sh（NCCN）不是同一支腳本，因為 MD Anderson 的 PDF 是
# 根本不同的資料形狀：
#
#   NCCN 每一頁自帶編號（BINV-12、AML-4），頁尾印著自己的 ref，一頁就是一個
#   決策節點，決策節點與決策節點之間用那個編號互相指來指去。
#
#   MD Anderson 完全沒有這種編號。頁尾只有「Page N of M」加上核准日期，掃過
#   全部 892 頁找不到一個節點編號——出現的 hyphen 字串全是藥名/標記
#   （SGLT-2、IL-6、PD-1），不是頁碼。一份演算法就是一條連續的流程圖，
#   分頁只是印刷分頁，不是語意分頁。
#
# 所以這裡不找 TOC、不找頁尾 ref、不切成多個檔案——一個 gid 的全部頁面
# 照頁碼順序串成一份，ref 固定叫 ALGO-1（跟 CAT-1 一樣是刻意重複使用的
# 字面 ref，在多個 gid 之間共用；ALGO-1 的數字尾碼讓 verify_snippets.py
# 既有的「數字結尾 = decision」規則不必為 MDA 開特例）。
#
#   bash dump_snippet_src_mda.sh mda-anemia
#   bash dump_snippet_src_mda.sh mda-atrial-fibrillation

set -u
cd "$(dirname "$0")" || exit 1
[ -f ../.env ] && set -a && . ../.env && set +a
GID="${1:?usage: dump_snippet_src_mda.sh <mda-gid>}"
case "$GID" in
  mda-*) ;;
  *) echo "這支只認 mda- 開頭的 gid；NCCN 用 dump_snippet_src.sh" >&2; exit 1 ;;
esac
OUT="snippets/_src/$GID"
mkdir -p "$OUT"
WORK=$(mktemp -d)
del(){ command rip "$@" 2>/dev/null || find "$@" -delete 2>/dev/null; }

pages_ok=0
for try in 1 2 3; do
  if wrangler d1 execute nccn-search --remote --json \
      --command "SELECT page, body FROM page_text WHERE gid='$GID' ORDER BY page" \
      > "$WORK/pages.json" 2>"$WORK/pages.err"; then
    pages_ok=1; break
  fi
  echo "  page_text 查詢失敗（第 $try 次），重試中" >&2
  sleep $((try * 2))
done
if [ "$pages_ok" != "1" ]; then
  echo "FAIL $GID — 查不到 page_text（已重試 3 次）" >&2
  head -3 "$WORK/pages.err" >&2
  del "$WORK"
  exit 1
fi

n=$(python3 -c "
import json
d = json.load(open('$WORK/pages.json'))[0]['results']
print(len(d))
")
if [ "$n" = "0" ]; then
  echo "FAIL $GID — page_text 是空的（索引還沒建到它，或這個 gid 不存在）" >&2
  del "$WORK"
  exit 1
fi

# 版本字串跟 gen_versions.sh 用同一條 regex（見該檔 mda-* 分支），兩邊必須讀出
# 同一個值——不然這裡的 frontmatter 說 V8，首頁徽章卻顯示別的版本，沒人知道
# 該信哪個。
python3 - "$WORK/pages.json" "$GID" > "$OUT/ALGO-1.txt" <<'PY'
import json, re, sys

path, gid = sys.argv[1], sys.argv[2]
rows = json.load(open(path, encoding="utf-8"))[0]["results"]

full = "\n".join(r["body"] for r in rows)
m = re.findall(r"Department of Clinical Effectiveness V(\d+)", full, re.I)
ver = m[-1] if m else ""
d = re.findall(
    r"Approved by [Tt]he Executive Committee of the Medical Staff on (\d{1,2}/\d{1,2}/\d{4})",
    full,
)
date = d[-1] if d else ""

print("gid: %s" % gid)
print("ref: ALGO-1")
print("page: 1")
print("kind: decision")
print("title: ")
print("mda_version: V%s" % ver if ver else "mda_version: ")
print("mda_date: %s" % date)
print("pages: %d" % len(rows))
print("---")
for r in rows:
    print("=== PAGE %d ===" % r["page"])
    print(r["body"])
    print()
PY

bytes=$(wc -c < "$OUT/ALGO-1.txt" | tr -d ' ')
echo "OK $GID (ALGO-1, $n pages, $bytes bytes) -> $OUT/ALGO-1.txt"
del "$WORK"
