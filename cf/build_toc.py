#!/usr/bin/env python3
# Parse the Discussion TOC from -layout pdftotext output. Robust to the 2-column
# NCCN layout: entries are matched by "<title> .... MS-N" per line; column and
# level are inferred from the title's character start position.
import sys, re, json

txt_path, out_path, gid = sys.argv[1], sys.argv[2], sys.argv[3]
pages = open(txt_path, encoding="utf-8", errors="ignore").read().split("\f")

# 1) MS-N -> physical page, from each page's footer label (last MS-\d+ on the page).
ms2page = {}
disc_start = None
for pno, pg in enumerate(pages, 1):
    labels = re.findall(r"MS-(\d+)", pg)
    if labels:
        ms2page[int(labels[-1])] = pno  # footer label = last occurrence
        if disc_start is None:
            disc_start = pno

# 2) Locate the Discussion TOC page(s): the one with the "This discussion
#    corresponds" banner, plus a following page if it keeps listing entries.
toc_pages = []
for pno, pg in enumerate(pages, 1):
    if "This discussion corresponds" in pg or ("Table of Contents" in pg and len(re.findall(r"\.{2,}\s*MS-\d+", pg)) >= 4):
        toc_pages.append(pno)
        # include the next page if it is a TOC continuation
        if pno < len(pages) and len(re.findall(r"\.{2,}\s*MS-\d+", pages[pno])) >= 4:
            toc_pages.append(pno + 1)
        break

entry_re = re.compile(r"([^\s.][^.]*?)\s*\.{2,}\s*MS-(\d+)")
left, right = [], []
for pno in toc_pages:
    for line in pages[pno - 1].split("\n"):
        line = line.replace("Table of Contents", " " * 17).replace("Discussion", " " * 10)
        for m in entry_re.finditer(line):
            title = re.sub(r"\s+", " ", m.group(1)).strip()
            title = re.sub(r"^(Table of Contents|Discussion)\s+", "", title).strip()
            if len(title) < 2:
                continue
            (left if m.start() < 90 else right).append((title, int(m.group(2)), m.start()))

raw = left + right  # reading order: whole left column, then whole right column
if not raw:
    open(out_path, "w").write("[]")
    print(0)
    sys.exit(0)

lstarts = [s for _, _, s in raw if s < 90]
rstarts = [s for _, _, s in raw if s >= 90]
ledge = min(lstarts) if lstarts else 0
redge = min(rstarts) if rstarts else 0
npages = len(pages)

seen = set()
entries = []
for title, ms, start in raw:
    edge = ledge if start < 90 else redge
    level = 1 if (start - edge) >= 2 else 0
    page = ms2page.get(ms) or ((disc_start or 1) + ms - 1)
    if page > npages:
        page = npages
    key = (title, ms)
    if key in seen:
        continue
    seen.add(key)
    entries.append({"t": title, "ms": ms, "p": page, "l": level})

json.dump(entries, open(out_path, "w", encoding="utf-8"), ensure_ascii=False)
print(len(entries))
