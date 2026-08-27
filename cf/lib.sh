#!/bin/bash
# 週更流程共用的小工具。用 `. ./lib.sh` 引入（每支腳本都已經 cd 到 cf/）。

# 把某個 id 的「去橫幅版」PDF 取到 $2。成功回 0。
#
# 優先用 gen_clean.sh 這一輪留在 $CLEAN_DIR 的那份，拿不到才回頭問 R2。兩個理由：
#
#   1. gen_clean.sh 現在跑在整個流程的最前面，也就是它剛覆寫過根物件；而 R2 的
#      讀取要穿過約 4 小時的快取，緊接著重讀很可能拿回改寫前的 bytes
#      （CLAUDE.md §6）。下游若直接讀 R2，等於又回到「用舊 PDF 產生新資料」。
#   2. 順帶省掉整整四輪重新下載——整份目錄約 200 MB，下游有五支腳本要用。
#
# gen_clean.sh 跳過的 id（來源 sha 沒變）和上傳失敗的 id 都不會留在 CLEAN_DIR，
# 那些走 R2 是安全的：那個物件本來就不是這一輪寫的，跟線上服務的那份一致。
#
# mda- 開頭的 id 同理，而且是永遠：gen_clean.sh 只 iterate guidelines.json，MDA 的
# PDF 沒有橫幅可剝、也沒有 raw/ 副本，refresh_mda.sh 直接寫根物件。它們每次都走
# 下面那條 R2 的路，這是對的——根物件就是它們的唯一版本。
fetch_clean() {
  # local 是必要的：呼叫端幾乎都在 `for id in $IDS` 迴圈裡，不宣告就會蓋掉它們的變數。
  local id="$1" out="$2"
  if [ -n "${CLEAN_DIR:-}" ] && [ -s "$CLEAN_DIR/$id.pdf" ]; then
    command cp "$CLEAN_DIR/$id.pdf" "$out" 2>/dev/null && return 0
  fi
  wrangler r2 object get "${BUCKET:-nccn-pdfs}/$id.pdf" --file="$out" --remote >/dev/null 2>&1
}
