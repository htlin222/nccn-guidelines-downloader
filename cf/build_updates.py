#!/usr/bin/env python3
"""Parse the "Summary of the Guidelines Updates" pages out of a guideline.

Reads `pdftotext -layout` output, writes meta/updates/<id>.json. Driven by
build_updates.sh; run directly for debugging:

    pdftotext -layout aml.pdf t.txt && python3 build_updates.py t.txt out.json aml

Shape of the output:

    {"id": "aml", "version": "5.2026", "pages": [4],
     "items": [{"sec": "BPDCN-1", "page": 4, "lv": 0, "text": "Diagnosis"}, ...],
     "history": [{"version": "4.2026", "pages": [5]}, ...]}

Two things about the source worth knowing, because they shape the whole parser:

1. A PDF carries the update pages for SEVERAL past versions, newest first. Only
   the newest describes the copy you are holding, so it becomes `items`; the rest
   are listed in `history` as version + page numbers only. Anyone who wants those
   can pull the pages with /api/v1/page — inlining them would triple the file for
   something nobody asks for.

2. Nesting is expressed by indentation AND by bullet glyphs, but the glyphs are
   Wingdings mapped into the Unicode private-use area, so they vary by font and
   are unsafe to key on. Indentation is derived per page instead: collect the
   distinct bullet indents on the page, sort them, and the rank IS the level.
"""

import json
import re
import sys

# "Updates in Version 5.2026 of the NCCN Guidelines for Acute Myeloid Leukemia include:"
HEAD = re.compile(r"Updates in Version\s+(\S+)\s+of the NCCN Guidelines", re.I)
# indent + a single bullet glyph + text.
# The space after the glyph is OPTIONAL: level-2 bullets come out of pdftotext as
# a bare \x17 butted straight against the text ("\x17BPDCN confirmed revised:"),
# so requiring a space silently demoted every one of them to a wrapped line and
# glued it onto the bullet above.
# Brackets and quotes are excluded because a wrapped line legitimately starts
# with one, and treating that as a bullet splits a sentence in half.
BULLET = re.compile(r"^(\s*)([^\w\s\(\)\[\]\{\}\"'“”‘’])\s*(\S.*)$")
# A section label: flush left, short, starts uppercase, not a sentence.
# Real examples: BPDCN-1, AML-4, EVAL-1, AML-E 4 of 14, General.
LABEL = re.compile(r"^[A-Z][A-Za-z0-9][A-Za-z0-9 \-/()]{0,38}$")

# Running heads, footers and boilerplate. Dropped before anything else so they
# can never be mistaken for a section label (several of them are flush left).
NOISE = [
    re.compile(p, re.I)
    for p in (
        r"^NCCN Guidelines Version",
        r"^NCCN Guidelines Index",
        r"^Table of Contents$",
        r"^Discussion$",
        r"^Printed by ",
        r"Copyright\s*©\s*\d{4} National Comprehensive Cancer Network",
        r"^Version \d+\.\d{4},",
        r"^Note: All recommendations are category",
        r"^Clinical Trials: NCCN believes",
        r"^UPDATES(-\d+)?$",
        # Flush left, capitalised, no trailing period — it matches LABEL exactly,
        # so without this every item after it gets filed under section "Continued".
        r"^Continued$",
        r"^MS-\d+$",
        r"^\d+ of \d+$",
    )
]


def clean(page):
    """Drop running heads/footers, keep indentation of everything else."""
    out = []
    for line in page.split("\n"):
        if not line.strip():
            continue
        if any(r.search(line.strip()) for r in NOISE):
            continue
        out.append(line.rstrip())
    return out


def is_update_page(lines):
    """A continuation page has no heading, so fall back to 'looks like a list'."""
    return sum(1 for ln in lines if BULLET.match(ln)) >= 3


def levels(lines):
    """Map each distinct bullet indent on this page to a level, 0 = outermost."""
    indents = sorted({len(BULLET.match(ln).group(1)) for ln in lines if BULLET.match(ln)})
    return {n: i for i, n in enumerate(indents)}


def parse(text, gid):
    pages = text.split("\f")
    blocks = []  # [{version, pages: [n], lines: [(page, line)]}]
    cur = None

    for pno, page in enumerate(pages, 1):
        lines = clean(page)
        if not lines:
            cur = None
            continue
        head = None
        for ln in lines:
            m = HEAD.search(ln)
            if m:
                head = m.group(1)
                break
        if head:
            # One version's updates can run over several pages, and EVERY one of
            # them repeats the heading. Same version as the block we are already
            # in means "still the same block", not a new one — otherwise a
            # 7-page section shows up as seven entries in `history`.
            if cur is not None and cur["version"] == head:
                cur["pages"].append(pno)
            else:
                cur = {"version": head, "pages": [pno], "lines": []}
                blocks.append(cur)
        elif cur is None or not is_update_page(lines):
            # Anything that is neither a heading nor a continuation ends the run.
            # Without this the parser walks straight into the algorithm pages.
            cur = None
            continue
        else:
            cur["pages"].append(pno)
        for ln in lines:
            if HEAD.search(ln):
                continue
            cur["lines"].append((pno, ln))

    if not blocks:
        return None

    newest, rest = blocks[0], blocks[1:]
    items = []
    sec = ""
    by_page = {}
    for pno, ln in newest["lines"]:
        by_page.setdefault(pno, []).append(ln)
    lv_of = {p: levels(ls) for p, ls in by_page.items()}

    for pno, ln in newest["lines"]:
        m = BULLET.match(ln)
        if m:
            items.append(
                {
                    "sec": sec,
                    "page": pno,
                    "lv": lv_of[pno].get(len(m.group(1)), 0),
                    "text": m.group(3).strip(),
                }
            )
            continue
        stripped = ln.strip()
        if not ln.startswith(" ") and LABEL.match(stripped) and not stripped.endswith("."):
            sec = stripped
            continue
        # Indented, not a bullet: a wrapped line belonging to the previous item.
        if items:
            items[-1]["text"] = (items[-1]["text"] + " " + stripped).strip()

    return {
        "id": gid,
        "version": newest["version"],
        "pages": newest["pages"],
        "items": items,
        "history": [{"version": b["version"], "pages": b["pages"]} for b in rest],
    }


def main():
    src, dst, gid = sys.argv[1], sys.argv[2], sys.argv[3]
    with open(src, encoding="utf-8", errors="ignore") as fh:
        out = parse(fh.read(), gid)
    # Print the item count so the shell wrapper can tell "parsed nothing" from
    # "parsed fine" without reading the JSON back.
    if not out or not out["items"]:
        print(0)
        return
    with open(dst, "w", encoding="utf-8") as fh:
        json.dump(out, fh, ensure_ascii=False)
    print(len(out["items"]))


if __name__ == "__main__":
    main()
