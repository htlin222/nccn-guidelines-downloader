#!/bin/bash
# Strip the NCCN disclaimer banner off every cached PDF, in place at the R2 root.
#
# NCCN stamps two 6pt lines onto the top of every page as *separate content
# stream objects* appended to the page's /Contents array:
#   1. "PLEASE NOTE that use of this NCCN Content is governed by the End-User
#       License Agreement, and you MAY NOT distribute this Content …"
#   2. "Printed by <name> on <date> <time>. Copyright © <year> NCCN, Inc. …"
# ../strip_nccn_disclaimer.py drops exactly those streams — the page's own
# content stream is untouched, so nothing under the banner gets clipped.
#
# Reads raw/<id>.pdf (the untouched original the cron pulls from NCCN) and writes
# the stripped result to the ROOT <id>.pdf, which is what the viewer, downloads,
# thumbnails and the D1 search index all read. Never hits NCCN itself.
# 跳過「這一版已經處理過」的 id，依據記在 meta/clean.json。
#
# 判準是 PDF 首頁的 `Version X.YYYY`，不是來源檔的 sha256——那是 2026-09 改的，
# 因為 sha 這條路實測是死的：NCCN 每次下載都即時重產 PDF，新的 /CreationDate 加上
# 隨機的字型 subset 標籤（`/FontName/ZNQMIA+Arial` 那六個字母每次都不同），所以
# 同一份指引連抓三次會得到三個不同的 sha256。量過：整檔 8.2% 的位元組每次都變，
# 而且 NCCN 既不給 ETag 也不給 Last-Modified，HTTP 層同樣無從判斷。
#
# 於是每日 cron 碰過的那些 id（一天三份，一週二十一份）每週都會被當成「變了」而
# 整套重做一遍，而它們絕大多數根本沒改版。版本字串是 NCCN 唯一可靠的改版訊號。
#
# 代價要講清楚：NCCN 若在不動版本號的情況下重新發佈一份修正檔，這裡會跳過它。
# 所以另外比對頁數當作第二道（有 pdfinfo 才比，沒有就略過）——頁數變了一定不跳。
# sha256 仍然記在 manifest 裡，它現在的用途是稽核（看得出上游到底有沒有換檔案），
# 不再是跳過的依據。
#
# 讀不到版本字串的（退役指引那種一頁公告、或抽字失敗）一律不跳，照常重做——
# 寧可白做一輪，不要漏掉一次改版。
#
# the strip is byte-deterministic (no_new_id=True) so an unchanged input really
# does mean an unchanged output.
#
# NCCN only — deliberately reads guidelines.json and not algorithms.json. MD
# Anderson's PDFs carry no such banner, so there is nothing to strip and no raw/
# copy to strip it from: refresh_mda.sh writes those straight to the R2 root
# (see lib/pdf.js refreshKey). Adding them here would look for raw/mda-*.pdf
# objects that by design do not exist.
#
# CLEAN_DIR=<dir> 會把剝好的 PDF 也留一份在那個目錄，給同一輪的下游腳本直接取用
# （見 lib.sh 的 fetch_clean）。只有「這一輪確定上傳成功」的才留——跳過的（版本
# 沒變）和上傳失敗的都不留，那些 id 線上服務的仍是舊物件，下游跟著讀 R2 才
# 不會產生跟實際發出去的 PDF 對不上的縮圖與索引。
#
#   bash gen_clean.sh          # incremental
#   FORCE=1 bash gen_clean.sh  # rebuild every id
#   LIMIT=5 bash gen_clean.sh  # only the first 5 ids (smoke test)
set -u
cd "$(dirname "$0")"
[ -f ../.env ] && set -a && . ../.env && set +a  # load token if present
BUCKET="nccn-pdfs"
STRIP="../strip_nccn_disclaimer.py"
FORCE="${FORCE:-0}"
LIMIT="${LIMIT:-0}"
WORK=$(mktemp -d)
[ -n "${CLEAN_DIR:-}" ] && mkdir -p "$CLEAN_DIR"
LOG="gen_clean.log"; : > "$LOG"
del(){ command rip "$@" 2>/dev/null || rm -rf "$@" 2>/dev/null; }
sha(){ if command -v sha256sum >/dev/null 2>&1; then sha256sum "$1" | awk '{print $1}';
       else shasum -a 256 "$1" | awk '{print $1}'; fi; }

IDS=$(python3 -c "import json;print('\n'.join(g['id'] for g in json.load(open('guidelines.json'))))")
[ "$LIMIT" -gt 0 ] && IDS=$(echo "$IDS" | head -n "$LIMIT")

# Previous run's manifest: { "<id>": {"src_sha": "…", "pages": N, "updated": "…"} }
if ! wrangler r2 object get "$BUCKET/meta/clean.json" --file="$WORK/prev.json" --remote >/dev/null 2>&1; then
  echo '{}' > "$WORK/prev.json"
fi
python3 -c "import json,sys;json.load(open('$WORK/prev.json'))" 2>/dev/null || echo '{}' > "$WORK/prev.json"
: > "$WORK/rows.tsv"   # id \t src_sha \t pages

ok=0; skip=0; fail=0; i=0; total=$(echo "$IDS" | wc -l | tr -d ' ')
for id in $IDS; do
  i=$((i+1))
  pdf="$WORK/$id.pdf"
  if ! wrangler r2 object get "$BUCKET/raw/$id.pdf" --file="$pdf" --remote >/dev/null 2>&1; then
    fail=$((fail+1)); echo "[$i/$total] GET-FAIL $id" | tee -a "$LOG"; continue
  fi
  # A failed/expired-cookie fetch lands as an HTML login page, not a PDF.
  if [ "$(head -c 4 "$pdf")" != "%PDF" ]; then
    fail=$((fail+1)); echo "[$i/$total] NOT-PDF $id" | tee -a "$LOG"; del "$pdf"; continue
  fi

  src_sha=$(sha "$pdf")
  # 首頁的 Version X.YYYY。跟 gen_versions.sh 用同一條 regex，兩邊讀出來的必須
  # 是同一個字串，否則這裡說「沒變」而那裡卻換了徽章，只會讓人不知道信哪個。
  src_ver=$(pdftotext -f 1 -l 3 "$pdf" - 2>/dev/null \
    | grep -oiE 'version [0-9]+\.[0-9]{4}' | head -1 | tr 'A-Z' 'a-z')
  # 第二道：頁數。擋的是「不動版本號的重新發佈」。沒有 pdfinfo 就留空，不比。
  src_pages=$(pdfinfo "$pdf" 2>/dev/null | awk '/^Pages:/{print $2}')

  prev_ver=$(python3 -c "
import json;d=json.load(open('$WORK/prev.json'));print(d.get('$id',{}).get('src_ver',''))" 2>/dev/null)
  prev_pages=$(python3 -c "
import json;d=json.load(open('$WORK/prev.json'));print(d.get('$id',{}).get('pages',0))" 2>/dev/null)

  # 三個條件都成立才跳：讀得到版本、版本跟上次一樣、頁數沒變（頁數讀不到就不擋）。
  # 讀不到版本一律重做——寧可白做一輪，不要漏掉一次改版。
  if [ "$FORCE" != "1" ] && [ -n "$src_ver" ] && [ "$src_ver" = "$prev_ver" ] \
     && { [ -z "$src_pages" ] || [ "$src_pages" = "$prev_pages" ]; }; then
    printf '%s\t%s\t%s\t%s\n' "$id" "$src_sha" "${src_pages:-$prev_pages}" "$src_ver" >> "$WORK/rows.tsv"
    skip=$((skip+1)); echo "[$i/$total] SKIP $id ($src_ver, unchanged)" | tee -a "$LOG"; del "$pdf"; continue
  fi
  [ -z "$src_ver" ] && echo "[$i/$total] NO-VERSION $id (讀不到版本字串，照常重做)" | tee -a "$LOG"

  # strip + verify; the script exits non-zero if any marker survives
  out="$WORK/out/$id.pdf"
  if ! python3 "$STRIP" "$pdf" -o "$WORK/out" > "$WORK/strip.log" 2>&1; then
    fail=$((fail+1)); echo "[$i/$total] STRIP-FAIL $id" | tee -a "$LOG"
    sed -n '1,12p' "$WORK/strip.log" | tee -a "$LOG"; del "$pdf"; continue
  fi
  pages=$(grep -oE 'pages: [0-9]+' "$WORK/strip.log" | head -1 | grep -oE '[0-9]+')

  if wrangler r2 object put "$BUCKET/$id.pdf" --file="$out" \
       --content-type="application/pdf" --remote >/dev/null 2>&1; then
    printf '%s\t%s\t%s\t%s\n' "$id" "$src_sha" "${pages:-0}" "$src_ver" >> "$WORK/rows.tsv"
    ok=$((ok+1))
    echo "[$i/$total] OK $id (${pages:-?} pages, $(wc -c < "$out") bytes)" | tee -a "$LOG"
    [ -n "${CLEAN_DIR:-}" ] && command cp "$out" "$CLEAN_DIR/$id.pdf" 2>/dev/null
  else
    fail=$((fail+1)); echo "[$i/$total] PUT-FAIL $id" | tee -a "$LOG"
  fi
  del "$pdf" "$out"
done

# Republish the manifest so the next run can skip unchanged ids, and so the
# Worker can tell which guidelines have a clean copy available.
# MERGE onto the previous manifest rather than rebuilding it: a LIMIT=N run (or
# one that died partway) only has rows for the ids it touched, and rewriting
# from those alone would drop the other 80-odd entries and force a full re-strip
# next time.
# 舊 manifest 當底，是為了保留這一輪抓不到的 id（GET-FAIL / NOT-PDF / STRIP-FAIL）
# 的舊值——那些 id 線上服務的仍是舊物件，manifest 要跟著它，而不是憑空消失。
# 但只 upsert 不修剪的話，從目錄退役的 id 會永遠留在裡面：實測 2026-08-27 那輪
# 是 93 entries / 91 個 id，多出來的正是 NCCN 拆掉的 hepatobiliary 與 immunotherapy。
# 所以最後按目錄過濾一次。
python3 - "$WORK/prev.json" "$WORK/rows.tsv" "$WORK/clean.json" guidelines.json <<'PY'
import sys, json, datetime
prev, rows, out, cat = sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4]
now = datetime.datetime.now(datetime.timezone.utc).isoformat(timespec="seconds")
try:
    m = json.load(open(prev, encoding="utf-8"))
    if not isinstance(m, dict):
        m = {}
except Exception:
    m = {}
fresh = 0
for line in open(rows, encoding="utf-8"):
    parts = line.rstrip("\n").split("\t")
    # src_ver 是 2026-09 加的第四欄。舊的三欄格式讀得進來，那一輪 src_ver 就留空，
    # 下一輪自然補上——不需要為了換欄位而強制全量重做一次。
    if len(parts) == 3:
        parts = parts + [""]
    if len(parts) != 4 or not parts[0]:
        continue
    gid, src_sha, pages, src_ver = parts
    m[gid] = {
        "src_sha": src_sha,          # 稽核用：看得出上游檔案到底有沒有換
        "src_ver": src_ver,          # 跳過的依據
        "pages": int(pages or 0),    # 第二道：擋不動版本號的重新發佈
        "updated": now,
    }
    fresh += 1
live = {g["id"] for g in json.load(open(cat, encoding="utf-8"))}
dropped = sorted(set(m) - live)
for gid in dropped:
    del m[gid]
json.dump(m, open(out, "w"), ensure_ascii=False, separators=(",", ":"), sort_keys=True)
print(f"manifest entries {len(m)} (this run touched {fresh})")
if dropped:
    print("dropped from manifest, no longer in the catalogue: " + ", ".join(dropped))
PY

if wrangler r2 object put "$BUCKET/meta/clean.json" --file="$WORK/clean.json" \
     --content-type="application/json" --remote >/dev/null 2>&1; then
  echo "manifest uploaded" | tee -a "$LOG"
else
  echo "MANIFEST-PUT-FAIL" | tee -a "$LOG"; fail=$((fail+1))
fi

del "$WORK"
echo "DONE ok=$ok skip=$skip fail=$fail / $total" | tee -a "$LOG"
[ "$fail" -eq 0 ]
