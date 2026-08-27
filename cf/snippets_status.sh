#!/bin/bash
# 核對清單的進度與待辦。這支是「斷了還能繼續」的地基：狀態不存在任何地方，
# 每次從檔案系統重算——已經有 <ref>.md 就是做完了，沒有就是待辦。
#
# 沒有游標、沒有鎖、沒有進度檔，所以任何一次中斷（session 掛掉、CI 逾時、
# 機器重開）都不會留下要收拾的狀態。重跑一次就從斷點接下去。
#
#   bash snippets_status.sh                # 全部指引的統計
#   bash snippets_status.sh breast         # 單一指引的統計
#   bash snippets_status.sh breast --todo  # 只印待辦的 ref，一行一個
#   bash snippets_status.sh breast --todo -n 20   # 只印前 20 個
#
# --todo 的輸出就是餵給生成批次的清單。
set -u
cd "$(dirname "$0")" || exit 1
GID="${1:-}"
case "${GID}" in --*) GID=""; esac
MODE="todo"; LIMIT=0
for a in "$@"; do
  case "$a" in
    --todo) MODE="todo-only" ;;
    -n) MODE="$MODE" ;;
  esac
done
# -n <N>
prev=""
for a in "$@"; do
  [ "$prev" = "-n" ] && LIMIT="$a"
  prev="$a"
done

python3 - "$GID" "$MODE" "$LIMIT" <<'PY'
import os, sys, glob, re

gid_filter, mode, limit = sys.argv[1], sys.argv[2], int(sys.argv[3] or 0)
root = "snippets"

def page_of(path):
    """素材檔第 3 行是 'page: N'，用它排序，讓待辦按指引裡的順序出現。"""
    try:
        for line in open(path, encoding="utf-8"):
            if line.startswith("page: "):
                return int(line.split(": ", 1)[1])
    except Exception:
        pass
    return 10**6

gids = sorted(
    os.path.basename(d) for d in glob.glob(os.path.join(root, "_src", "*"))
    if os.path.isdir(d) and (not gid_filter or os.path.basename(d) == gid_filter)
)
if not gids:
    print("沒有素材。先跑 dump_snippet_src.sh <gid>", file=sys.stderr)
    sys.exit(1)

todo_all, tot_src, tot_done = [], 0, 0
rows = []
for gid in gids:
    srcs = {os.path.basename(p)[:-4]: p for p in glob.glob(os.path.join(root, "_src", gid, "*.txt"))}
    done = {os.path.basename(p)[:-3] for p in glob.glob(os.path.join(root, gid, "*.md"))}
    todo = sorted(set(srcs) - done, key=lambda r: page_of(srcs[r]))
    todo_all += [(gid, r) for r in todo]
    tot_src += len(srcs); tot_done += len(srcs) - len(todo)
    rows.append((gid, len(srcs), len(srcs) - len(todo), len(todo)))

if mode == "todo-only":
    out = todo_all[:limit] if limit > 0 else todo_all
    for gid, ref in out:
        print(ref if gid_filter else "%s/%s" % (gid, ref))
    sys.exit(0)

w = max((len(r[0]) for r in rows), default=6)
for gid, n, d, t in rows:
    bar = "#" * int(20 * d / n) if n else ""
    print("  %-*s  %3d/%-3d  %-20s  todo %d" % (w, gid, d, n, bar, t))
print("  %-*s  %3d/%-3d  (%.0f%%)" % (w, "TOTAL", tot_done, tot_src,
                                      100.0 * tot_done / tot_src if tot_src else 0))
if todo_all:
    nxt = ", ".join(r for _, r in todo_all[:8])
    print("\n  next: %s%s" % (nxt, " ..." if len(todo_all) > 8 else ""))
PY
