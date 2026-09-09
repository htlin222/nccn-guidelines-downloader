#!/usr/bin/env bash
# courses/figures/**/*.html → 3200x1600 PNG（2:1 @2x），簡報用素材。
#
#   bash gen_figures.sh                       # 全部
#   bash gen_figures.sh breast/mbc-her2-landscape   # 指定幾張
#   OUT=/tmp/figs bash gen_figures.sh         # 換輸出目錄
#
# 為什麼是 headless Chromium 而不是 SVG 或畫圖程式庫：這些圖是手刻 HTML/CSS，
# 瀏覽器是唯一能保證「網頁上看到的」與「匯出的 PNG」逐像素相同的渲染器。換成任何
# 別的東西就有兩套排版引擎，而只有其中一套會出現在演講裡。
#
# 輸出不進版控（衍生檔）。要上 R2 的話另外跑 upload（見 §8 的後續步驟）。
set -u
cd "$(dirname "$0")" || exit 1

OUT=${OUT:-figures-out}
SCALE=${SCALE:-2}          # 2 → 3200x1600
W=1600; H=800

# macOS 的 homebrew chromium 與 Linux CI 的 chromium 都吃同一組旗標；
# 找不到就退回 Google Chrome 的完整路徑（開發機常見）。
# 偵測要實際跑一次 --version，不能只看 command -v：homebrew 的 chromium 是一個
# 指向 /Applications/Chromium.app 的 wrapper script，app 被刪掉之後 wrapper 還在
# PATH 上，command -v 找得到、執行卻是 "cannot execute"——而那個錯誤會被
# >/dev/null 吞掉，變成每一張圖都 FAIL 而沒有原因。
BROWSER=${BROWSER:-}
if [ -z "$BROWSER" ]; then
  for c in chromium chromium-browser google-chrome-stable google-chrome \
           "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
           "/Applications/Chromium.app/Contents/MacOS/Chromium"; do
    p=$(command -v "$c" 2>/dev/null) || p="$c"
    [ -x "$p" ] || continue
    if "$p" --version >/dev/null 2>&1; then BROWSER="$p"; break; fi
  done
fi
if [ -z "$BROWSER" ]; then
  echo "找不到 chromium／chrome — brew install chromium" >&2
  exit 1
fi

if [ "$#" -gt 0 ]; then
  files=""
  for id in "$@"; do files="$files courses/figures/$id.html"; done
else
  files=$(find courses/figures -name '*.html' | sort)
fi

mkdir -p "$OUT"
ok=0; fail=0
for f in $files; do
  [ -f "$f" ] || { echo "MISSING $f" >&2; fail=$((fail+1)); continue; }
  id=${f#courses/figures/}; id=${id%.html}
  png="$OUT/$(echo "$id" | tr '/' '-').png"
  mkdir -p "$(dirname "$png")"

  # --hide-scrollbars 是必要的：預設會在 1600px 裡佔掉約 15px，整張圖橫向被壓縮，
  # 而且只有跟網頁版並排比對才看得出來。
  if "$BROWSER" --headless --disable-gpu --hide-scrollbars \
       --force-device-scale-factor="$SCALE" \
       --window-size="$W,$H" \
       --screenshot="$png" \
       --virtual-time-budget=3000 \
       "file://$PWD/$f" >/dev/null 2>&1 && [ -s "$png" ]; then
    echo "OK   $id  →  $png"
    ok=$((ok+1))
  else
    echo "FAIL $id" >&2
    fail=$((fail+1))
  fi
done

echo "figures: $ok ok, $fail failed"
# 照這個 repo 的慣例：一張都沒成功就是紅燈，不然一個空的 token 或壞掉的瀏覽器
# 會安靜地跑完並回報成功（CLAUDE.md §5.5）。
[ "$ok" -gt 0 ]
