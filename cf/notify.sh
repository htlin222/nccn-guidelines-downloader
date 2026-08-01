#!/bin/bash
# 從 shell（CI 或本機）寫一則通知進 D1 的 notifications 表。
#
# 為什麼不打 Worker 的 API：站台在 Cloudflare Access 後面，GitHub Action 送過去的
# POST 會被登入頁擋下來，要嘛另辦一組 Access service token，要嘛在 Worker 上開一個
# 不受保護的端點。兩個都不划算——CI 本來就有一把 D1: Edit 的 token，直接寫表就好。
#
# 用法:
#   bash notify.sh <kind> <level> <title> [body-json]
#   bash notify.sh ci info "每週重建完成" '{"rows":1842}'
#
# kind : cron | cookie | version | ci      level: info | warn | error
#
# 跟 lib/notify.js 的 notify() 同一套去重規則：非 info 的通知若已有一則同 kind ＋
# 同 title 且還沒讀，就只把時間往前推，不再插一筆——否則連壞五天會洗出五列一樣的話。
set -u
cd "$(dirname "$0")"
[ -f ../.env ] && set -a && . ../.env && set +a

KIND="${1:-ci}"
LEVEL="${2:-info}"
TITLE="${3:-}"
BODY="${4:-}"
DB="nccn-search"

[ -n "$TITLE" ] || { echo "notify.sh: title 不可為空" >&2; exit 2; }

# SQL 字面值的單引號要成對加倍；順手把換行壓成空白，標題本來就該是一行。
esc(){ printf '%s' "$1" | tr '\n\r' '  ' | sed "s/'/''/g"; }
T=$(esc "$TITLE")
K=$(esc "$KIND")
L=$(esc "$LEVEL")
NOW=$(date -u +%Y-%m-%dT%H:%M:%S.000Z)
if [ -n "$BODY" ]; then B="'$(esc "$BODY")'"; else B="NULL"; fi

if [ "$LEVEL" = "info" ]; then
  SQL="INSERT INTO notifications (kind, level, title, body, created)
       VALUES ('$K', '$L', '$T', $B, '$NOW');"
else
  SQL="UPDATE notifications SET created = '$NOW', body = $B
         WHERE kind = '$K' AND title = '$T' AND read_at IS NULL;
       INSERT INTO notifications (kind, level, title, body, created)
       SELECT '$K', '$L', '$T', $B, '$NOW'
        WHERE NOT EXISTS (SELECT 1 FROM notifications
                           WHERE kind = '$K' AND title = '$T' AND created = '$NOW');"
fi

if wrangler d1 execute "$DB" --remote --command "$SQL" >/dev/null 2>&1; then
  echo "notify: [$LEVEL/$KIND] $TITLE"
else
  # 通知寫不進去不該讓叫用它的那一步跟著紅——那一步做的事（重建索引、產縮圖）
  # 本身可能是成功的。只留一行 log。
  echo "notify: WRITE-FAIL [$LEVEL/$KIND] $TITLE" >&2
fi
exit 0
