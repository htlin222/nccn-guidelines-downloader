#!/usr/bin/env python3
"""
strip_nccn_disclaimer.py — Deterministically remove NCCN per-page disclaimer
text from every page of every NCCN PDF in a directory.

The disclaimer consists of two small (Arial 6pt) lines stamped at the top
of every page (except the title page):

  Line 1 (static):
    "PLEASE NOTE that use of this NCCN Content is governed by the
     End-User License Agreement, and you MAY NOT distribute this Content
     or use it with any artificial intelligence model or tool."

  Line 2 (variable date/time):
    "Printed by <NAME> on <DATE> <TIME>. Copyright © <YEAR> National
     Comprehensive Cancer Network, Inc. All Rights Reserved."

HOW IT WORKS
------------
NCCN's website stamps these two lines as *separate content stream objects*
appended to each page's /Contents array.  This script inspects every content
stream on every page, identifies the ones that contain disclaimer marker text,
and removes just those streams — leaving the original page content (including
any header text that sits beneath the disclaimer) completely untouched.

This is superior to redaction because:
  • No risk of clipping overlapping text (the disclaimer overlaps the page
    header in the y-axis).
  • The text is physically removed from the content stream, not just hidden.
  • Deterministic and lossless for all non-disclaimer content.

Usage
-----
  # Process all NCCN-*.pdf in a directory, write cleaned copies to ./cleaned/
  python3 strip_nccn_disclaimer.py /path/to/pdf_dir

  # Specify output directory
  python3 strip_nccn_disclaimer.py /path/to/pdf_dir -o /path/to/output

  # In-place (overwrites originals, keeps .bak backup)
  python3 strip_nccn_disclaimer.py /path/to/pdf_dir --in-place

  # Process a single file
  python3 strip_nccn_disclaimer.py /path/to/NCCN-colon-2026-03-27.pdf

  # All PDFs (not just NCCN-*)
  python3 strip_nccn_disclaimer.py /path/to/pdf_dir --pattern '*.pdf'

Requirements: pip install pymupdf
"""

from __future__ import annotations

import argparse
import re
import shutil
import sys
from pathlib import Path

try:
    import pymupdf
except ImportError:
    try:
        import fitz as pymupdf
    except ImportError:
        sys.exit("ERROR: PyMuPDF is not installed.  Run:  pip install pymupdf")


# ---------------------------------------------------------------------------
# Marker substrings — if any of these appear in a content stream, that stream
# is identified as a disclaimer stream and removed from the page.
# ---------------------------------------------------------------------------
MARKERS = [
    "PLEASE NOTE that use of this NCCN Content",
    "Printed by ",
    "you MAY NOT distribute this Content",
    "End-User License Agreement",
]


def is_disclaimer_stream(stream_bytes: bytes) -> bool:
    """Return True if the content stream contains any disclaimer marker."""
    try:
        text = stream_bytes.decode("latin-1")
    except Exception:
        text = stream_bytes.decode("utf-8", errors="replace")
    return any(marker in text for marker in MARKERS)


def strip_pdf(input_path: Path, output_path: Path) -> dict:
    """
    Remove disclaimer content streams from every page of *input_path* and
    save the result to *output_path*.

    Returns a dict with processing statistics.
    """
    doc = pymupdf.open(input_path)
    total_pages = len(doc)
    pages_modified = 0
    streams_removed = 0

    for page_num in range(total_pages):
        page = doc[page_num]
        content_xrefs = page.get_contents()
        if not content_xrefs:
            continue

        # Classify each content stream
        keep_xrefs = []
        removed_count = 0
        for xref in content_xrefs:
            stream_bytes = doc.xref_stream(xref)
            if stream_bytes is not None and is_disclaimer_stream(stream_bytes):
                removed_count += 1
            else:
                keep_xrefs.append(xref)

        if removed_count == 0:
            continue

        # Replace the page's /Contents array with only the non-disclaimer
        # streams.  We use xref_set_key on the page object dictionary to
        # build a new /Contents array referencing only the kept xrefs.
        page_xref = page.xref
        if keep_xrefs:
            new_contents = "[" + " ".join(f"{x} 0 R" for x in keep_xrefs) + "]"
        else:
            # All streams were disclaimer — set Contents to null (empty page)
            new_contents = "null"
        doc.xref_set_key(page_xref, "Contents", new_contents)
        pages_modified += 1
        streams_removed += removed_count

    output_path.parent.mkdir(parents=True, exist_ok=True)
    # no_new_id=True keeps the source /ID instead of minting a fresh one, so the
    # same input produces byte-identical output on every run. Without it the CI
    # job would re-upload all 86 PDFs every week even when nothing changed.
    doc.save(
        str(output_path),
        garbage=4,
        deflate=True,
        clean=True,
        no_new_id=True,
    )
    doc.close()

    return {
        "input": str(input_path),
        "output": str(output_path),
        "total_pages": total_pages,
        "pages_modified": pages_modified,
        "streams_removed": streams_removed,
    }


def verify_pdf(pdf_path: Path) -> bool:
    """
    Post-verification: confirm no disclaimer markers remain in either the
    extracted text or the raw content streams.

    Returns True if clean, False if any marker found.
    """
    doc = pymupdf.open(pdf_path)
    clean = True

    for page in doc:
        # Check extracted text
        text = page.get_text()
        if "PLEASE NOTE that use of this NCCN Content" in text:
            clean = False
            break
        if re.search(r"Printed by .+ on .+ Copyright", text):
            clean = False
            break

        # Also check raw content streams (belt + suspenders)
        for xref in page.get_contents():
            stream = doc.xref_stream(xref)
            if stream and is_disclaimer_stream(stream):
                clean = False
                break
        if not clean:
            break

    doc.close()
    return clean


def main():
    ap = argparse.ArgumentParser(
        description="Batch-remove NCCN per-page disclaimer text from PDFs."
    )
    ap.add_argument(
        "input",
        help="Directory containing NCCN PDFs, or a single PDF file.",
    )
    ap.add_argument(
        "-o", "--output",
        default=None,
        help="Output directory for cleaned PDFs (default: <input_dir>/cleaned/). "
             "Ignored when --in-place is used.",
    )
    ap.add_argument(
        "--in-place",
        action="store_true",
        help="Overwrite originals. A .bak backup is created first.",
    )
    ap.add_argument(
        "--pattern",
        default="NCCN-*.pdf",
        help="Glob pattern for PDF filenames (default: 'NCCN-*.pdf'). "
             "Use '*.pdf' for all PDFs.",
    )
    ap.add_argument(
        "--no-verify",
        action="store_true",
        help="Skip post-processing verification step.",
    )
    args = ap.parse_args()

    input_path = Path(args.input).expanduser().resolve()

    # --- Determine file list ------------------------------------------------
    if input_path.is_file():
        pdf_files = [input_path]
        base_dir = input_path.parent
    elif input_path.is_dir():
        pdf_files = sorted(input_path.glob(args.pattern))
        base_dir = input_path
    else:
        ap.error(f"Input path does not exist: {input_path}")

    if not pdf_files:
        print(f"No PDF files matching '{args.pattern}' in {input_path}")
        sys.exit(1)

    # --- Determine output directory -----------------------------------------
    if args.in_place:
        output_dir = None
    else:
        output_dir = (
            Path(args.output).expanduser().resolve()
            if args.output
            else base_dir / "cleaned"
        )

    # --- Process ------------------------------------------------------------
    print(f"Processing {len(pdf_files)} PDF file(s)…")
    print(f"  Input  : {base_dir}")
    print(f"  Output : {'(in-place, .bak backup)' if args.in_place else output_dir}")
    print()

    all_stats = []
    failed = []
    for pdf_path in pdf_files:
        if args.in_place:
            backup_path = pdf_path.with_suffix(".pdf.bak")
            if not backup_path.exists():
                shutil.copy2(pdf_path, backup_path)
            output_path = pdf_path
        else:
            output_path = output_dir / pdf_path.name

        print(f"  ▸ {pdf_path.name}")
        stats = strip_pdf(pdf_path, output_path)
        print(f"    pages: {stats['total_pages']}, "
              f"modified: {stats['pages_modified']}, "
              f"streams removed: {stats['streams_removed']}")

        if not args.no_verify:
            ok = verify_pdf(output_path)
            status = "✓ clean" if ok else "✗ MARKERS REMAIN"
            print(f"    verify: {status}")
            if not ok:
                failed.append(pdf_path.name)

        all_stats.append(stats)

    # --- Summary ------------------------------------------------------------
    print()
    print("=" * 60)
    total_pages = sum(s["total_pages"] for s in all_stats)
    total_mods = sum(s["pages_modified"] for s in all_stats)
    total_streams = sum(s["streams_removed"] for s in all_stats)
    print(f"Done. {len(all_stats)} file(s), "
          f"{total_pages} pages, "
          f"{total_mods} modified, "
          f"{total_streams} disclaimer streams removed.")

    # Non-zero exit on any verification failure so CI stops instead of shipping
    # a PDF that still carries the banner.
    if failed:
        print(f"FAILED verification: {', '.join(failed)}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
