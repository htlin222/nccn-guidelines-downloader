#!/bin/bash
# Extract each cached PDF's version stamp and publish a versions map to R2 as
# meta/versions.json (served by the Worker, shown on the cards). Pulls PDFs from
# R2 — does NOT hit NCCN.
#
# Two upstreams, two stamps, one map:
#   NCCN  first page, "Version 3.2026 — May 1, 2026"
#   MDA   every page footer, "Department of Clinical Effectiveness V14 Rev" plus
#         "Approved by [Tt]he Executive Committee of the Medical Staff on
#         07/15/2025" — note the inconsistent capitalisation of "the", which is
#         why the grep below is case-insensitive.
# Both land as the same {v, d} shape, so the cards and lib/notify.js's
# versionEvents need no idea which side a guideline came from.
set -u
cd "$(dirname "$0")"
[ -f ../.env ] && set -a && . ../.env && set +a  # load token if present
del(){ command rip "$@" 2>/dev/null || find "$@" -delete 2>/dev/null; }
BUCKET="nccn-pdfs"
IDS=$(python3 -c "import json;print('\n'.join(g['id'] for f in ('guidelines.json','algorithms.json') for g in json.load(open(f))))")
WORK=$(mktemp -d)
OUT="$WORK/versions.json"
OLD="$WORK/old.json"
# 舊的版本表要在覆蓋前先留一份，否則「哪一份改版了」就無從比起。抓不到（第一次跑、
# 或 R2 上還沒有這個檔）就留空——lib/notify.js 的 versionEvents 看到空的舊表會保持
# 沉默，不會把整份目錄當成 60 則「更新」發出來。
wrangler r2 object get "$BUCKET/meta/versions.json" --file="$OLD" --remote >/dev/null 2>&1 \
  || echo '{}' > "$OLD"
LOG="gen_versions.log"; : > "$LOG"
: > "$WORK/pairs.txt"
ok=0; miss=0; i=0; total=$(echo "$IDS" | wc -l | tr -d ' ')
for id in $IDS; do
  i=$((i+1))
  pdf="$WORK/x.pdf"
  if ! wrangler r2 object get "$BUCKET/$id.pdf" --file="$pdf" --remote >/dev/null 2>&1; then
    miss=$((miss+1)); echo "[$i/$total] GET-FAIL $id" | tee -a "$LOG"; continue
  fi
  case "$id" in
    mda-*)
      # MDA 的版本印在每一頁的頁尾，不是首頁，所以整份都要看。取最後一次出現的：
      # 前幾頁偶有引用到別份 algorithm 的頁尾片段，末頁那個才是這一份自己的。
      txt=$(pdftotext -enc UTF-8 "$pdf" - 2>/dev/null)
      ver=$(echo "$txt" | grep -oiE 'Department of Clinical Effectiveness V[0-9]+' | tail -1 | grep -oiE 'V[0-9]+$' | tr -d 'Vv')
      date=$(echo "$txt" | grep -oiE 'Approved by [Tt]he Executive Committee of the Medical Staff on [0-9]{1,2}/[0-9]{1,2}/[0-9]{4}' | tail -1 | grep -oE '[0-9]{1,2}/[0-9]{1,2}/[0-9]{4}')
      ;;
    *)
      line=$(pdftotext -f 1 -l 3 "$pdf" - 2>/dev/null | grep -oiE 'version [0-9]+\.[0-9]{4}( . [A-Za-z]+ [0-9]{1,2}, [0-9]{4})?' | head -1)
      ver=$(echo "$line" | grep -oiE '[0-9]+\.[0-9]{4}' | head -1)
      date=$(echo "$line" | grep -oE '[A-Za-z]+ [0-9]{1,2}, [0-9]{4}' | head -1)
      ;;
  esac
  if [ -n "$ver" ]; then
    ok=$((ok+1)); printf '%s\t%s\t%s\n' "$id" "$ver" "$date" >> "$WORK/pairs.txt"
    echo "[$i/$total] OK $id → $ver ${date:+($date)}" | tee -a "$LOG"
  else
    miss=$((miss+1)); echo "[$i/$total] NO-VERSION $id" | tee -a "$LOG"
  fi
  del "$pdf" 2>/dev/null
done
python3 - "$WORK/pairs.txt" "$OUT" <<'PY'
import sys, json
pairs, out = sys.argv[1], sys.argv[2]
m = {}
for ln in open(pairs, encoding='utf-8'):
    parts = ln.rstrip('\n').split('\t')
    if len(parts) >= 2 and parts[1]:
        m[parts[0]] = {'v': parts[1], 'd': parts[2] if len(parts) > 2 else ''}
json.dump(m, open(out, 'w', encoding='utf-8'), ensure_ascii=False)
print('versions:', len(m))
PY
if wrangler r2 object put "$BUCKET/meta/versions.json" --file="$OUT" \
  --content-type="application/json" --remote >/dev/null 2>&1; then
  echo "uploaded meta/versions.json" | tee -a "$LOG"
  # 改版通知。判斷規則（只報真的變動、舊表空就閉嘴）留在 lib/notify.js 的
  # versionEvents，這裡直接 import 它，免得同一套規則在 shell 裡再寫一份。
  node --input-type=module -e "
    import { readFileSync } from 'node:fs';
    const { versionEvents } = await import('./src/lib/notify.js');
    const j = (p) => { try { return JSON.parse(readFileSync(p, 'utf8')); } catch { return {}; } };
    const names = Object.fromEntries(
      [...j('./guidelines.json'), ...j('./algorithms.json')].map((g) => [g.id, g.name]));
    for (const e of versionEvents(j('$OLD'), j('$OUT'), names, new Date().toISOString()))
      console.log([e.title, JSON.stringify(e.body)].join('\t'));
  " 2>/dev/null > "$WORK/news.tsv" || : > "$WORK/news.tsv"
  n=0
  while IFS=$'\t' read -r title body; do
    [ -n "$title" ] || continue
    bash notify.sh version info "$title" "$body" | tee -a "$LOG"
    n=$((n+1))
  done < "$WORK/news.tsv"
  echo "version notifications: $n" | tee -a "$LOG"
else
  echo "UPLOAD-FAIL" | tee -a "$LOG"
fi
echo "DONE ok=$ok miss=$miss / $total" | tee -a "$LOG"
del "$WORK" 2>/dev/null
# Guard against a wholly-failed run reporting success: individual misses are
# normal, but ok=0 means auth/network is broken and CI must go red. (An unset
# CLOUDFLARE_API_TOKEN silently no-op'd this workflow for weeks.)
[ "$ok" -gt 0 ]
