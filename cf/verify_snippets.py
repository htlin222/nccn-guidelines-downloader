#!/usr/bin/env python3
"""門診核對清單的四關驗證。不過就不准進 D1。

  python3 verify_snippets.py                       # 驗全部
  python3 verify_snippets.py snippets/breast/*.md  # 驗指定檔

四關由弱到強：格式、結構、字典、來源。前三關是機械規則，最後一關是這整套東西
唯一擋得住幻覺的地方——清單裡的藥名、劑量、閾值、category 標註，全部必須在該 ref
的素材檔裡找得到。找不到就是模型自己加的，不管它多正確。

這一關刻意不需要任何醫學知識，只是字串比對。需要醫學判斷的部分留給人工審閱。
"""

import json
import os
import re
import sys
import glob

try:
    import tomllib
except ModuleNotFoundError:  # 3.10 以下
    tomllib = None

CF = os.path.dirname(os.path.abspath(__file__))
SNIP = os.path.join(CF, "snippets")
VOCAB = json.load(open(os.path.join(SNIP, "_vocab.json"), encoding="utf-8"))

REQUIRED_META = ("id", "gid", "ref", "page", "title", "nccn_version", "generated")

# 藥名的尾巴。用後綴而不是字典，是因為字典永遠缺最新的那顆藥，而後綴幾乎不會漏抓
# 也幾乎不會誤抓——這一關寧可多問幾個字，不能放過一個編出來的藥。
DRUG_SUFFIX = re.compile(
    r"\b[a-z][a-z-]{3,}("
    r"mab|nib|ciclib|parib|taxel|platin|rubicin|tecan|mustine|zomib|sertib|"
    r"tinib|degib|lisib|rafenib|fulvestrant|tamoxifen|anastrozole|letrozole|"
    r"exemestane|capecitabine|gemcitabine|eribulin|vinorelbine|methotrexate|"
    r"fluorouracil|cyclophosphamide|carboplatin|olaparib|talazoparib"
    r")\b",
    re.I,
)

# 帶單位的數字，以及 NCCN 的 category 標註。兩者都是「寫錯就危險」的東西。
QUANTITY = re.compile(
    r"\b\d+(?:\.\d+)?\s*(?:mg|mcg|g|cm|mm|%|Gy|weeks?|months?|years?|cycles?|doses?)\b",
    re.I,
)
CATEGORY = re.compile(r"\bcategory\s+[123][AB]?\b", re.I)
XREF = re.compile(r"\b([A-Z]{2,}[A-Z0-9]*-[0-9A-Z]+)\b")
VARSLOT = re.compile(r"___ \(([a-z0-9_]+)\)")


def norm(s):
    """比對用的正規化：小寫、砍掉所有非英數字元。

    素材是 pdftotext 的產物，上標註腳會黏在單字上（WORKUPa、nodesuu），連字號與
    空白也不可靠。比對前把這些差異全部抹平，才不會把「來源明明有」誤判成沒有。
    """
    return re.sub(r"[^a-z0-9]", "", s.lower())


def fail(errs, ref, msg):
    errs.append("%s: %s" % (ref, msg))


def check(path):
    errs = []
    name = os.path.basename(path)
    raw = open(path, encoding="utf-8").read()

    # --- 結構關：frontmatter 切得出來嗎 ---
    m = re.match(r"^\+\+\+\n(.*?)\n\+\+\+\n(.*)$", raw, re.S)
    if not m:
        fail(errs, name, "沒有 +++ frontmatter +++ 區塊")
        return errs
    fm_text, body = m.group(1), m.group(2)

    if tomllib is None:
        fail(errs, name, "需要 Python 3.11+ 的 tomllib 才能驗 frontmatter")
        return errs
    try:
        meta = tomllib.loads(fm_text)
    except Exception as e:
        fail(errs, name, "frontmatter 不是合法 TOML: %s" % e)
        return errs

    for k in REQUIRED_META:
        if not meta.get(k):
            fail(errs, name, "frontmatter 缺 %s" % k)
    ref = meta.get("ref") or name[:-3]
    gid = meta.get("gid") or ""

    if meta.get("id") and meta["id"] != "%s/%s" % (gid, ref):
        fail(errs, name, "id 應為 %s/%s，實為 %s" % (gid, ref, meta["id"]))
    if name[:-3] != ref:
        fail(errs, name, "檔名與 ref 不一致（ref=%s）" % ref)

    if "# Source" not in body:
        fail(errs, name, "缺 # Source 區塊")
    if "# Assessment" not in body:
        fail(errs, name, "缺 # Assessment 區塊")

    # --- 格式關 ---
    for i, line in enumerate(body.split("\n"), 1):
        if re.match(r"^#{2,}\s", line):
            fail(errs, name, "第 %d 行用了 ## 或更深的標題，只准 #" % i)
        if "**" in line:
            fail(errs, name, "第 %d 行有粗體 **" % i)
        if re.search(r"(?<![\w*])\*[^*\s][^*]*\*(?![\w*])", line):
            fail(errs, name, "第 %d 行有斜體 *" % i)
        if "___" in line and not VARSLOT.search(line):
            fail(errs, name, "第 %d 行的 ___ 不是 `___ (name)` 格式" % i)

    declared = {v.get("name") for v in meta.get("variables", []) or []}
    used = set(VARSLOT.findall(body))
    for v in sorted(used - declared):
        fail(errs, name, "body 用了 ___ (%s) 但 frontmatter 沒宣告" % v)
    for v in sorted(declared - used):
        fail(errs, name, "frontmatter 宣告了 %s 但 body 沒用到" % v)

    # --- 字典關 ---
    for axis, val in (meta.get("facets") or {}).items():
        spec = VOCAB["axes"].get(axis)
        if spec is None:
            fail(errs, name, "facet 軸 '%s' 不在 _vocab.json" % axis)
            continue
        allowed = spec.get("values") or []
        if not allowed:  # disease 那種開放軸
            continue
        for v in (val if isinstance(val, list) else [val]):
            if v not in allowed:
                fail(errs, name, "facet %s='%s' 不在受控清單 %s" % (axis, v, allowed))

    # --- 來源關 ---
    src_path = os.path.join(SNIP, "_src", gid, ref + ".txt")
    if not os.path.exists(src_path):
        fail(errs, name, "找不到素材檔 %s" % src_path)
        return errs
    src = norm(open(src_path, encoding="utf-8").read())

    for pat, label in ((DRUG_SUFFIX, "藥名"), (QUANTITY, "數量"), (CATEGORY, "category 標註")):
        for hit in {h.group(0) for h in pat.finditer(body)}:
            if norm(hit) not in src:
                fail(errs, name, "%s『%s』在素材裡找不到" % (label, hit.strip()))

    # 交叉引用要嘛出現在素材裡，要嘛是同一份指引裡真實存在的另一個 ref
    known = {os.path.basename(p)[:-4] for p in glob.glob(os.path.join(SNIP, "_src", gid, "*.txt"))}
    for x in {h.group(1) for h in XREF.finditer(body)}:
        if x == ref or x in known or norm(x) in src:
            continue
        fail(errs, name, "交叉引用 %s 既不在素材裡，也不是這份指引的 ref" % x)

    return errs


def main():
    paths = sys.argv[1:] or sorted(
        p for p in glob.glob(os.path.join(SNIP, "*", "*.md")) if "/_src/" not in p
    )
    if not paths:
        print("沒有可驗的檔案")
        return 0
    bad = 0
    for p in paths:
        errs = check(p)
        if errs:
            bad += 1
            for e in errs:
                print("FAIL %s" % e)
        else:
            print("OK   %s" % os.path.basename(p))
    print("\n%d passed, %d failed / %d" % (len(paths) - bad, bad, len(paths)))
    return 1 if bad else 0


if __name__ == "__main__":
    sys.exit(main())
