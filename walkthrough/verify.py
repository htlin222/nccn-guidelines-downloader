"""Verify one versioned MP4, audio stream, and gap-free timeline per guideline."""
import json
from pathlib import Path
import subprocess
import sys

EXPECTED = set("breast cervical colon cutaneous_melanoma gtn nscl ovarian rectal sclc uterine uveal vaginal vulvar".split())


def require(condition, message):
    if not condition:
        raise SystemExit(message)


def verify(root):
    ids = set()
    for path in sorted(root.glob("*.json")):
        manifest = json.loads(path.read_text())
        gid, pages = manifest["id"], manifest["pages"]
        ids.add(gid)
        rows = manifest["timeline"]
        require(len(rows) == pages == manifest["rendered"], f"{gid}: page count")
        end = 0
        for number, row in enumerate(rows, 1):
            require(row["page"] == number and row["focuses"] >= 1, f"{gid}: page {number}")
            require(row["start"] == end and row["end"] > end, f"{gid}: timing on page {number}")
            end = row["end"]
        require(rows[0]["narrated"], f"{gid}: missing title narration")
        movie = root / manifest["movie"]
        meta = json.loads(subprocess.check_output(
            ["ffprobe", "-v", "error", "-show_streams", "-show_format", "-of", "json", str(movie)]))
        require({s["codec_type"] for s in meta["streams"]} == {"audio", "video"}, f"{gid}: streams")
        require(abs(float(meta["format"]["duration"]) - end) < .16, f"{gid}: encoded duration")
        print(gid, pages, f"{end:.2f}s", movie.stat().st_size)
    require(ids == EXPECTED, f"Missing books: {EXPECTED - ids}")


if __name__ == "__main__":
    verify(Path(sys.argv[1]))
