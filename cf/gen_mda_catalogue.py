#!/usr/bin/env python3
"""Parse MD Anderson's Clinical Management Algorithms index page into a catalogue.

Writes two files that must stay in lockstep:
  algorithms.json      — what the shell scripts iterate (mirrors guidelines.json)
  src/data/algorithms.js — what the Worker bundles (mirrors src/data/guidelines.js)

The page's shape is stable and simple: a `<span class="title">Category</span>`
followed by a `<ul>` of `<a href="…/clinical-management/<file>.pdf">Title</a>`.
Each link belongs to the nearest preceding title, so one pass over both in
document order is enough — no HTML parser needed, and nothing to break when
MD Anderson reshuffles the surrounding page furniture.

Called by gen_mda_catalogue.sh. Run it directly for a dry run:
    python3 gen_mda_catalogue.py --dry-run
"""

import json
import os
import re
import sys
import urllib.request

INDEX_URL = (
    "https://www.mdanderson.org/for-physicians/clinical-tools-resources/"
    "clinical-practice-algorithms/clinical-management-algorithms.html"
)
# Everything hangs off …/for-physicians/algorithms/. `file` is stored relative to
# this root — i.e. "clinical-management/clin-management-sepsis-…pdf" — because the
# page is not as tidy as its title suggests: 89 of the 90 entries sit under
# clinical-management/, and "Ovarian Toxicity" sits under survivorship/. Matching
# only the one directory would have silently dropped it.
#
# Scoping to *this page's links* is what keeps the sibling …/cancer-treatment/
# family out; links into that set stay external (see the design doc).
ALGO_ROOT = "/content/dam/mdanderson/documents/for-physicians/algorithms/"

HERE = os.path.dirname(os.path.abspath(__file__))

# The four headings the page actually uses, in page order. Anything outside this
# set is page furniture ("Related Links" and friends) and must not become a
# category — an unrecognised heading would otherwise silently invent one.
KNOWN_CATS = [
    "Emergent/Urgent",
    "Pediatrics",
    "Non-Emergent/Urgent",
    "Nursing/Ancillary Services",
]

# Icons come from the ICONS map already in views/home.js; colors are picked to
# not collide with the NCCN palette in data/categories.js.
CAT_STYLE = {
    "Emergent/Urgent": ("zap", "#dc2626"),
    "Pediatrics": ("baby", "#0d9488"),
    "Non-Emergent/Urgent": ("activity", "#2563eb"),
    "Nursing/Ancillary Services": ("buoy", "#7c3aed"),
}

TITLE_RE = re.compile(r'<span class="title">(.*?)</span>', re.S)
LINK_RE = re.compile(
    r'<a\s[^>]*href="' + re.escape(ALGO_ROOT) + r'([^"]+\.pdf)"[^>]*>(.*?)</a>',
    re.S | re.I,
)
TAG_RE = re.compile(r"<[^>]+>")


def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=60) as r:
        return r.read().decode("utf-8", "replace")


def untag(s):
    """Link text → plain title. Titles carry <em>/<i> (species names) and &nbsp;."""
    s = TAG_RE.sub("", s)
    s = (
        s.replace("&amp;", "&")
        .replace("&nbsp;", " ")
        .replace("&#39;", "'")
        .replace("&rsquo;", "’")
        .replace("&ndash;", "–")
        .replace("&lt;", "<")
        .replace("&gt;", ">")
    )
    return re.sub(r"\s+", " ", s).strip()


def slug(file):
    """Upstream path (relative to ALGO_ROOT) → our id. Derived from the FILE, never
    from the title.

    The filenames are irregular enough that nothing else survives contact:
      clinical-management/clin-management-sepsis-management-adult-web-algorithm.pdf
      clinical-management/clin-management-pedi-delirium-algorithm.pdf   (no -web)
      clinical-management/clin-management-nephrostomy-algorithm.pdf     (no -web)
      survivorship/survivorship-ovarian-toxicity-web-algorithm.pdf      (other folder)
      clinical-management/clin-management-oral%20bleeding-web-algorithm.pdf  (%20)

    The `mda-` namespace is load-bearing twice over: it keeps these ids from
    colliding with NCCN's (`vte`, `pain`, `distress` all exist on both sides) and
    keeps the R2 root objects (`<id>.pdf`) from colliding with them too.
    """
    filename = file.rsplit("/", 1)[-1]
    s = filename[:-4] if filename.lower().endswith(".pdf") else filename
    s = s.replace("%20", "-").replace(" ", "-")
    for prefix in ("clin-management-", "survivorship-"):
        if s.startswith(prefix):
            s = s[len(prefix) :]
            break
    for suffix in ("-web-algorithm", "-algorithm"):
        if s.endswith(suffix):
            s = s[: -len(suffix)]
            break
    s = re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")
    return "mda-" + s


def parse(html):
    """→ list of {id, name, cat, cats, file}, deduped by file, in page order."""
    marks = [(m.start(), "cat", untag(m.group(1))) for m in TITLE_RE.finditer(html)]
    marks += [
        (m.start(), "link", (m.group(1), untag(m.group(2))))
        for m in LINK_RE.finditer(html)
    ]
    marks.sort(key=lambda x: x[0])

    items, by_file = [], {}
    cat = None
    for _, kind, payload in marks:
        if kind == "cat":
            cat = payload if payload in KNOWN_CATS else None
            continue
        if cat is None:
            continue  # a PDF link outside the four sections — page furniture
        file, name = payload
        # The page lists a handful of algorithms under two headings (C. difficile
        # and Hypoglycemia). One file is one PDF and one /preview/ URL, so it gets
        # one entry; `cats` keeps every heading it appeared under so both category
        # chips still find it.
        if file in by_file:
            if cat not in by_file[file]["cats"]:
                by_file[file]["cats"].append(cat)
            continue
        entry = {"id": slug(file), "name": name, "cat": cat, "cats": [cat], "file": file}
        by_file[file] = entry
        items.append(entry)

    dupes = {}
    for it in items:
        dupes.setdefault(it["id"], []).append(it["file"])
    clashes = {k: v for k, v in dupes.items() if len(v) > 1}
    if clashes:
        raise SystemExit("id collision, two files slug to the same id: %r" % clashes)
    return items


def as_js(items):
    lines = [
        "// MD Anderson Clinical Management Algorithms — GENERATED, do not hand-edit.",
        "// Regenerate with `bash gen_mda_catalogue.sh` (which also rewrites",
        "// algorithms.json, the copy the shell scripts iterate).",
        "//",
        "// `file` is the upstream path under …/for-physicians/algorithms/, verbatim:",
        "// it is the only fetch truth, and the names are irregular enough (-web",
        "// missing, one entry in survivorship/ rather than clinical-management/, a",
        "// %20) that it cannot be reconstructed from `id`.",
        "export const ALGORITHMS = [",
    ]
    for it in items:
        cats = "" if it["cats"] == [it["cat"]] else ", cats: %s" % json.dumps(it["cats"])
        lines.append(
            "\t{ id: %s, name: %s, cat: %s%s, file: %s },"
            % (
                json.dumps(it["id"]),
                json.dumps(it["name"]),
                json.dumps(it["cat"]),
                cats,
                json.dumps(it["file"]),
            )
        )
    lines.append("];")
    lines.append("")
    lines.append(
        "// Kept apart from data/categories.js: these four only ever render inside the"
    )
    lines.append("// MD Anderson tab, and folding them in would put them on NCCN's chips.")
    lines.append("export const ALGO_CATS = [")
    seen = []
    for it in items:
        for c in it["cats"]:
            if c not in seen:
                seen.append(c)
    for c in KNOWN_CATS:
        if c not in seen:
            continue
        icon, color = CAT_STYLE[c]
        lines.append(
            '\t{ name: %s, icon: "%s", color: "%s" },' % (json.dumps(c), icon, color)
        )
    lines.append("];")
    lines.append("")
    return "\n".join(lines)


def main():
    dry = "--dry-run" in sys.argv
    html = fetch(INDEX_URL)
    items = parse(html)
    if len(items) < 50:
        # The page returned something, but not the page we know. Overwriting a
        # good catalogue with a truncated one is worse than failing the run.
        raise SystemExit("only %d algorithms parsed — refusing to overwrite" % len(items))

    json_path = os.path.join(HERE, "algorithms.json")
    js_path = os.path.join(HERE, "src", "data", "algorithms.js")

    try:
        old = json.load(open(json_path, encoding="utf-8"))
    except Exception:
        old = []
    old_ids = {x["id"] for x in old}
    new_ids = {x["id"] for x in items}
    added = sorted(new_ids - old_ids)
    gone = sorted(old_ids - new_ids)

    print("parsed %d algorithms in %d categories" % (len(items), len(set(i["cat"] for i in items))))
    for i in added:
        print("  + %s" % i)
    for i in gone:
        print("  - %s" % i)
    changed = bool(added or gone) or old != items

    if dry:
        print("dry run, nothing written")
        return 0

    # One object per line: compact enough to skim, and a re-generated catalogue
    # produces a diff you can actually read (guidelines.json is a single line and
    # every change to it shows up as "the whole file").
    with open(json_path, "w", encoding="utf-8") as f:
        body = ",\n ".join(json.dumps(i, ensure_ascii=False) for i in items)
        f.write("[\n " + body + "\n]\n")
    with open(js_path, "w", encoding="utf-8") as f:
        f.write(as_js(items))
    print("wrote algorithms.json + src/data/algorithms.js")
    print("CHANGED=%d" % (1 if changed else 0))
    return 0


if __name__ == "__main__":
    sys.exit(main())
