#!/usr/bin/env python3
"""NCCN skill 的 helper —— 只做有狀態的事：PDF 下載與本地快取。

純查詢請直接用 curl（見 SKILL.md），少一層轉手。這支存在的理由只有一個：PDF 有
好幾 MB，反覆問同一份指引時不該反覆下載，而「這份是不是已經是最新版」需要比對
/catalogue 的版本字串——那是有狀態的判斷，不適合每次臨場叫 Claude 自己記。

快取放 ~/.cache/nccn-skill/ 而不是專案目錄：多個專案共用一份，也不會被誤 commit。

用法:
    python3 nccn.py pdf <id>     下載（或沿用快取）並印出本地路徑
    python3 nccn.py ls           列出目前快取了哪些
    python3 nccn.py clean [id]   清掉快取（不給 id 就全清）
"""

import json
import os
import sys
import urllib.error
import urllib.request

HERE = os.path.dirname(os.path.abspath(__file__))
CACHE = os.path.expanduser("~/.cache/nccn-skill")


def env():
    """讀同目錄的 .env。已存在的環境變數優先，方便臨時覆寫。"""
    conf = {}
    path = os.path.join(HERE, ".env")
    if os.path.exists(path):
        with open(path, encoding="utf-8") as fh:
            for line in fh:
                line = line.strip()
                if not line or line.startswith("#") or "=" not in line:
                    continue
                k, v = line.split("=", 1)
                conf[k.strip()] = v.strip().strip("'\"")
    key = os.environ.get("NCCN_API_KEY") or conf.get("NCCN_API_KEY")
    base = os.environ.get("NCCN_API_BASE") or conf.get("NCCN_API_BASE")
    if not key or not base:
        die("找不到 NCCN_API_KEY / NCCN_API_BASE，請確認 skill 目錄下有 .env")
    return key, base.rstrip("/")


def die(msg, code=1):
    print(msg, file=sys.stderr)
    sys.exit(code)


# urllib 預設會送 "Python-urllib/3.x"，而 Cloudflare 的 bot 防護擋掉那個字串——
# 回的是 403 error code 1010，看起來完全像認證失敗，實際上跟金鑰無關。所以一定要
# 覆蓋掉。不必偽裝成瀏覽器，任何不是 Python-urllib 的字串都放行，這裡就老實說自己
# 是誰。改動這一行前先確認 403 沒有回來。
UA = "nccn-skill/1.0 (+https://nccn.hsiehting.com)"


def fetch(url, key, binary=False):
    req = urllib.request.Request(
        url, headers={"Authorization": "Bearer " + key, "User-Agent": UA}
    )
    try:
        with urllib.request.urlopen(req, timeout=120) as res:
            return res.read() if binary else json.load(res)
    except urllib.error.HTTPError as e:
        if e.code == 401:
            die("金鑰無效或已撤銷——請到站上重新產生這個 skill。")
        if e.code == 403:
            die("HTTP 403：被 Cloudflare 的 bot 防護擋下，不是金鑰的問題。"
                "檢查上面的 UA 常數還在不在。")
        die("HTTP %d %s：%s" % (e.code, e.reason, url))
    except urllib.error.URLError as e:
        die("連不上 %s：%s" % (url, e.reason))


def version_of(gid, key, base):
    """回傳這份指引目前的版本字串；查不到就回空字串（當成 always-stale）。"""
    for g in fetch(base + "/catalogue", key).get("guidelines", []):
        if g.get("id") == gid:
            return g.get("version") or ""
    die("不認得的 guideline id：%s（先打 /catalogue 看有哪些）" % gid)


def cmd_pdf(gid):
    key, base = env()
    os.makedirs(CACHE, exist_ok=True)
    pdf = os.path.join(CACHE, gid + ".pdf")
    stamp = os.path.join(CACHE, gid + ".version")

    want = version_of(gid, key, base)
    have = ""
    if os.path.exists(stamp):
        with open(stamp, encoding="utf-8") as fh:
            have = fh.read().strip()

    if not (os.path.exists(pdf) and have == want and want):
        data = fetch(base + "/pdf/" + gid, key, binary=True)
        # 先寫暫存再改名：中途斷線不會留下半份 PDF 被下次當成有效快取。
        with open(pdf + ".part", "wb") as fh:
            fh.write(data)
        os.replace(pdf + ".part", pdf)
        with open(stamp, "w", encoding="utf-8") as fh:
            fh.write(want)

    print(pdf)


def cmd_ls():
    if not os.path.isdir(CACHE):
        return
    for name in sorted(os.listdir(CACHE)):
        if not name.endswith(".pdf"):
            continue
        gid = name[:-4]
        stamp = os.path.join(CACHE, gid + ".version")
        ver = ""
        if os.path.exists(stamp):
            with open(stamp, encoding="utf-8") as fh:
                ver = fh.read().strip()
        size = os.path.getsize(os.path.join(CACHE, name)) / 1048576.0
        print("%-24s %-10s %6.1f MB" % (gid, ver, size))


def cmd_clean(gid=None):
    if not os.path.isdir(CACHE):
        return
    for name in os.listdir(CACHE):
        if gid and not (name == gid + ".pdf" or name == gid + ".version"):
            continue
        os.remove(os.path.join(CACHE, name))
    print("已清除 " + (gid or "全部快取"))


def main():
    argv = sys.argv[1:]
    if not argv:
        die(__doc__)
    cmd, rest = argv[0], argv[1:]
    if cmd == "pdf" and rest:
        cmd_pdf(rest[0])
    elif cmd == "ls":
        cmd_ls()
    elif cmd == "clean":
        cmd_clean(rest[0] if rest else None)
    else:
        die(__doc__)


if __name__ == "__main__":
    main()
