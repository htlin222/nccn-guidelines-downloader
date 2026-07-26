#!/usr/bin/env python3
# Build a navigable Table of Contents from -layout pdftotext output, merging TWO
# sections into one ordered list written to meta/toc/<id>.json:
#   sec="algorithm" — the front "Table of Contents" page (Title (LABEL) entries,
#                     e.g. "Diagnosis (ALL-1)"), label -> page via footer labels.
#   sec="discussion" — the Discussion TOC (Title .... MS-N entries), MS-N -> page.
# Each entry: {t: title, ref: display label, p: physical page, l: indent, sec}.
# Discussion entries also carry ms (int) for back-compat.
import sys, re, json

txt_path, out_path, gid = sys.argv[1], sys.argv[2], sys.argv[3]
pages = open(txt_path, encoding="utf-8", errors="ignore").read().split("\f")
npages = len(pages)

LAB = r"[A-Z]{2,6}-[A-Z]?\d*[A-Z]?"
label_paren = re.compile(r"\((" + LAB + r")\)")
footer_re = re.compile(r"^(" + LAB + r")(?:\s+\d+\s+of\s+\d+)?$")
BULLETS = " \t•·◦-–—*"
# TOC lines that are navigational headers / notes / sidebar — never title heads.
STOP = re.compile(
    r"Panel Members|Summary of (the )?Guidelines|Find an NCCN|Member Institution|"
    r"NCCN Categories|Categories of (Evidence|Preference)|Table of Contents|"
    r"^Discussion$|MS-\d|^Continued$|recommendations are|independent medical|"
    r"Institution:|https?://|www\.nccn|nccn\.org|Guidelines Index|were removed|"
    r"See NCCN|reproduced in any form|©|copyright",
    re.I,
)


def norm(s):
    s = re.sub(r"[\x00-\x1f\x7f]", "", s)  # drop stray control chars from pdftotext
    return re.sub(r"\s+", " ", s).strip(BULLETS + " ")


# ---------------------------------------------------------------- footer map
def footer_label(pg):
    """Bottom-right footer label of a page (right-aligned bare label)."""
    for line in reversed(pg.split("\n")):
        s = line.strip()
        if not s:
            continue
        pos = len(line) - len(line.lstrip())
        if pos > 150:
            m = footer_re.match(s)
            if m:
                return m.group(1)
    return None


# label -> first physical page it appears as a footer on.
label2page = {}
for pno, pg in enumerate(pages, 1):
    f = footer_label(pg)
    if f and f not in label2page:
        label2page[f] = pno


# ------------------------------------------------------------ algorithm TOC
def segments(line):
    out = []
    for m in re.finditer(r"\S.*?(?=\s{3,}|$)", line):
        t = m.group().strip()
        if t:
            out.append((m.start(), t))
    return out


def cluster_columns(page_segs):
    starts = sorted({s for s, _ in page_segs})
    if not starts:
        return []
    cols = [[starts[0]]]
    for s in starts[1:]:
        if s - cols[-1][-1] > 30:
            cols.append([s])
        else:
            cols[-1].append(s)
    return [(min(c), max(c)) for c in cols]


def assign_col(pos, cols):
    for i, (lo, hi) in enumerate(cols):
        if lo - 5 <= pos <= hi + 5:
            return i
    return min(range(len(cols)), key=lambda i: abs(pos - cols[i][0]))


def parse_algorithm():
    # locate the algorithm TOC page: most (LABEL) occurrences in the first ~12
    # pages, excluding the "Updates in Version" summary pages.
    best_pno, best_cnt = None, 0
    for pno in range(1, min(13, npages) + 1):
        pg = pages[pno - 1]
        if "Updates in Version" in pg:
            continue
        cnt = len(label_paren.findall(pg))
        if cnt > best_cnt:
            best_cnt, best_pno = cnt, pno
    if not best_pno or best_cnt < 5:
        return []
    toc_pnos = [best_pno]
    if best_pno < npages and len(label_paren.findall(pages[best_pno])) >= 5:
        toc_pnos.append(best_pno + 1)

    entries, seen = [], set()
    for pno in toc_pnos:
        rows = [segments(l) for l in pages[pno - 1].split("\n")]
        flat = [seg for row in rows for seg in row]
        cols = cluster_columns(flat)
        if not cols:
            continue
        buckets = [[] for _ in cols]
        for row in rows:
            for pos, txt in row:
                buckets[assign_col(pos, cols)].append(txt)
        keep = [i for i in range(len(cols)) if any(label_paren.search(t) for t in buckets[i])]
        for i in keep:  # reading order: left-to-right columns
            buf = []
            for seg in buckets[i]:
                ms = list(label_paren.finditer(seg))
                if not ms:
                    # only the immediately-preceding line can be a wrapped-title
                    # head; drop navigational headers / notes / sidebar text.
                    buf = [] if STOP.search(seg) else [seg]
                    continue
                start = 0
                for k, m in enumerate(ms):
                    ref = m.group(1)
                    title = norm((" ".join(buf) + " " + seg[start:m.start()]) if k == 0
                                 else seg[start:m.start()])
                    start = m.end()
                    page = label2page.get(ref)
                    if not page or ref in seen:
                        continue
                    if len(title) < 2 or not re.search(r"[A-Za-z]", title):
                        continue
                    if len(title) > 90:
                        title = title[:88].rstrip() + "…"
                    seen.add(ref)
                    entries.append({"t": title, "ref": ref, "p": page, "l": 0, "sec": "algorithm"})
                tail = norm(seg[start:])
                buf = [tail] if tail else []
    return entries


# ------------------------------------------------------------ discussion TOC
def parse_discussion():
    ms2page, disc_start = {}, None
    for pno, pg in enumerate(pages, 1):
        labels = re.findall(r"MS-(\d+)", pg)
        if labels:
            ms2page[int(labels[-1])] = pno  # footer label = last occurrence
            if disc_start is None:
                disc_start = pno

    toc_pages = []
    for pno, pg in enumerate(pages, 1):
        if "This discussion corresponds" in pg or (
            "Table of Contents" in pg and len(re.findall(r"\.{2,}\s*MS-\d+", pg)) >= 4
        ):
            toc_pages.append(pno)
            if pno < npages and len(re.findall(r"\.{2,}\s*MS-\d+", pages[pno])) >= 4:
                toc_pages.append(pno + 1)
            break

    entry_re = re.compile(r"([^\s.][^.]*?)\s*\.{2,}\s*MS-(\d+)")
    raw = []
    for pno in toc_pages:
        for line in pages[pno - 1].split("\n"):
            line = line.replace("Table of Contents", " " * 17).replace("Discussion", " " * 10)
            for m in entry_re.finditer(line):
                title = re.sub(r"\s+", " ", m.group(1)).strip()
                title = re.sub(r"^(Table of Contents|Discussion)\s+", "", title).strip()
                if len(title) < 2:
                    continue
                (raw).append((title, int(m.group(2)), m.start()))
    if not raw:
        return []

    lstarts = [s for _, _, s in raw if s < 90]
    rstarts = [s for _, _, s in raw if s >= 90]
    ledge = min(lstarts) if lstarts else 0
    redge = min(rstarts) if rstarts else 0
    # reading order: whole left column, then whole right column
    raw.sort(key=lambda e: (e[2] >= 90, 0))

    seen, entries = set(), []
    for title, ms, start in raw:
        edge = ledge if start < 90 else redge
        level = 1 if (start - edge) >= 2 else 0
        page = ms2page.get(ms) or ((disc_start or 1) + ms - 1)
        if page > npages:
            page = npages
        if (title, ms) in seen:
            continue
        seen.add((title, ms))
        entries.append({"t": title, "ref": "MS-%d" % ms, "ms": ms, "p": page, "l": level, "sec": "discussion"})
    return entries


merged = parse_algorithm() + parse_discussion()
json.dump(merged, open(out_path, "w", encoding="utf-8"), ensure_ascii=False)
print(len(merged))
