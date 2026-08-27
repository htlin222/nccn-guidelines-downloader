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
UNITS = r"mg|mcg|g|cm|mm|%|Gy|weeks?|months?|years?|cycles?|doses?"
QUANTITY = re.compile(r"\b(\d+(?:[.\u2013-]\d+)?)\s*(?:%s)\b" % UNITS, re.I)

# 拼成英文的數字也要驗，否則「寫成 three 就不會被檢查」會變成繞過這一關的方法——
# 而那正是第一批 20 個裡真的發生過的事。
WORDNUM = {
    "one": "1", "two": "2", "three": "3", "four": "4", "five": "5", "six": "6",
    "seven": "7", "eight": "8", "nine": "9", "ten": "10", "eleven": "11", "twelve": "12",
}
WORDQTY = re.compile(r"\b(%s)(?:\s+to\s+(%s))?\s+(?:%s)\b"
                     % ("|".join(WORDNUM), "|".join(WORDNUM), UNITS), re.I)
CATEGORY = re.compile(r"\bcategory\s+[123][AB]?\b", re.I)
# ref 的尾碼只有兩種形狀：數字（BINV-12、COL-2A）或一到兩個字母（BINV-A、ST-1）。
# 不限制的話 HER2-NEGATIVE、ER-POSITIVE 這種全大寫詞會被當成頁碼引用。
XREF = re.compile(r"\b([A-Z]{2,}[A-Z0-9]*-(?:\d+[A-Z]?|[A-Z]{1,2}))\b")
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
    # 用 <gid>/<ref> 當標籤，不是檔名：ST-1.md 在三十幾份指引裡都存在，只印檔名
    # 的話「32 failed」看得到，卻無從知道是哪三十二個。
    parts = os.path.normpath(path).split(os.sep)
    name = "/".join(parts[-2:]) if len(parts) >= 2 else os.path.basename(path)
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
    base = os.path.basename(path)[:-3]
    ref = meta.get("ref") or base
    gid = meta.get("gid") or ""

    if meta.get("id") and meta["id"] != "%s/%s" % (gid, ref):
        fail(errs, name, "id 應為 %s/%s，實為 %s" % (gid, ref, meta["id"]))
    if base != ref:
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
        # 底線被跳脫或被 markdown 吃掉，是實際發生過的一種壞法：模型寫 \_\_\_ 以免
        # 三個底線被解析成強調，結果 verify 一個合法變數槽都找不到，錯誤訊息卻只說
        # 「宣告了 X 但 body 沒用到」，離真正的原因隔了一層。
        if "\\_" in line:
            fail(errs, name, "第 %d 行的底線被反斜線跳脫了，變數槽要寫成字面的 `___ (name)`" % i)
        if "**_" in line or "_**" in line:
            fail(errs, name, "第 %d 行的 ___ 被 markdown 吃成強調符號，要寫成字面的三個底線" % i)

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

    for pat, label in ((DRUG_SUFFIX, "藥名"), (CATEGORY, "category 標註")):
        for hit in {h.group(0) for h in pat.finditer(body)}:
            if norm(hit) not in src:
                fail(errs, name, "%s『%s』在素材裡找不到" % (label, hit.strip()))

    # 數量只驗數字，不要求單位緊貼著它。素材是 pdftotext 的產物，雙欄排版會把
    # 「3–5 years」切成「3–5」和跑到另一欄的「years」——連在一起驗的話，一句完全
    # 正確的話會過不了關，而模型面對過不了的關卡會選擇刪掉它。第一批 20 個裡
    # BINV-6 的 bisphosphonate 療程就是這樣先被刪掉、再被改寫成英文拼字繞過去的。
    nums = {h.group(1) for h in QUANTITY.finditer(body)}
    for h in WORDQTY.finditer(body):
        nums.add(WORDNUM[h.group(1).lower()]
                 + ("-" + WORDNUM[h.group(2).lower()] if h.group(2) else ""))
    for n in nums:
        parts = [p for p in re.split(r"[.\u2013-]", n) if p]
        if not all(norm(p) in src for p in parts):
            fail(errs, name, "數量『%s』的數字在素材裡找不到" % n)

    # 交叉引用必須出現在**這一頁的素材裡**。
    #
    # 原本還放行「同一份指引裡存在這個 ref」，那是個洞：ST-16 寫了「本表的 cN 定義
    # 在 ST-15」，外部為真、ST-15 也確實存在，於是通過——但那一頁只有一行
    # 「Table 7 — Continued」，從未指向 ST-15。這一類最難抓，正因為它是真的；
    # 而 snippet 的價值在於「它就是那一頁」，一句那一頁沒說的導引不屬於它。
    #
    # 誤殺的情況是素材抽取壞了（pdftotext 把 ref 切碎，像 mastocytosis 的 SM-G），
    # 那時候該修的是素材或那一行，不是放寬這道檢查。
    for x in {h.group(1) for h in XREF.finditer(body)}:
        if x == ref or norm(x) in src:
            continue
        fail(errs, name, "交叉引用 %s 沒有出現在這一頁的素材裡（外部為真也不算）" % x)

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
            print("OK   %s" % "/".join(os.path.normpath(p).split(os.sep)[-2:]))
    print("\n%d passed, %d failed / %d" % (len(paths) - bad, bad, len(paths)))
    return 1 if bad else 0


if __name__ == "__main__":
    sys.exit(main())
