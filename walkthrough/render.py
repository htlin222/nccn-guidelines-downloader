"""Render one complete guideline per shard, retaining each physical PDF page."""
import argparse
import asyncio
from collections import Counter
from functools import lru_cache
import json
import math
from pathlib import Path
import re
import subprocess
import tempfile
import wave

import edge_tts
import fitz
import numpy as np
from PIL import Image, ImageDraw, ImageFont

W, H, FPS, RATE = 1600, 900, 25, 48000
STAGE = (38, 126, 1132, 846)
PAPER = "#f1f6f8"
INK = "#172328"
BLUE = "#07557c"
FONT = Path("/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc")
IDS = {
    "breast": "乳癌", "nscl": "非小細胞肺癌", "sclc": "小細胞肺癌",
    "colon": "結腸癌", "rectal": "直腸癌", "cutaneous_melanoma": "皮膚黑色素瘤",
    "uveal": "葡萄膜黑色素瘤", "cervical": "子宮頸癌", "ovarian": "卵巢癌、輸卵管癌及原發性腹膜癌",
    "uterine": "子宮體腫瘤", "vulvar": "外陰癌", "vaginal": "陰道癌",
    "gtn": "妊娠滋養細胞腫瘤",
}
LABEL = {
    "overview": ("版本與閱讀入口", "先確認癌別、版號與發行日期，再進入臨床流程。"),
    "contents": ("指引目錄", "先找到主流程，再找治療原則、附表與正文。頁碼和流程代碼可用來回查。"),
    "changes": ("版本更新", "逐項辨認新增、修訂與刪除。以旁邊的流程代碼回到受影響的頁面。"),
    "algorithm": ("臨床決策流程", "先看適用情境，再沿箭頭對照條件與處置。頁尾註腳會限制部分路徑。"),
    "principles": ("原則與附表", "先確認適用情境，再核對各列的條件、例外、劑量或註腳。"),
    "staging": ("分期與分類", "比對分期欄位與範圍。若有註腳或定義，和分期條件一起看。"),
    "discussion": ("證據與正文", "先抓住本段討論的臨床問題，再比對研究族群、結果與證據限制。"),
    "references": ("參考文獻", "可依原文引註編號回查作者、研究主題與發表年份。"),
}
TOPICS = [
    (r"biomarker|molecular|genomic|genetic testing", "生物標記與分子檢測", "對照檢測時機、標本與檢測結果，再找對應的處置分支。"),
    (r"surveillance|follow.up|monitoring", "追蹤與監測", "先確認追蹤的起點，再核對檢查項目、頻率與觸發重新評估的條件。"),
    (r"workup|evaluation|diagnos|assessment", "診斷與評估", "依左側的臨床情境核對檢查項目，留意有附帶條件的檢查。"),
    (r"staging|stage grouping", "分期判讀", "從分期定義來定位病人，再對照不同分期所對應的下一步。"),
    (r"systemic|chemotherap|immunotherap|regimen", "全身治療", "先核對治療線別與適用族群，再看方案、例外與證據等級。"),
    (r"radiation|radiotherap", "放射治療", "對照照射情境與部位，再核對頁上標明的劑量、分次及例外。"),
    (r"surgery|surgical|resect", "手術與局部處置", "先確認手術適用條件，再沿不同結果看後續處置。"),
    (r"recurr|metastatic", "復發或轉移", "以復發或轉移的範圍定位路徑，再看是否需追加評估或更換治療。"),
]


def text_lines(page):
    for block in page.get_text("blocks", flags=fitz.TEXTFLAGS_BLOCKS & ~fitz.TEXT_PRESERVE_IMAGES):
        yield fitz.Rect(block[:4]), " ".join(block[4].split())


def source_page(page, number, override, previous):
    lines = list(text_lines(page))
    header = [s for box, s in lines if 0.10 < box.y0 / page.rect.height < 0.24 and s]
    refs = [m.group(0) for box, line in lines if box.y0 > page.rect.height * .86
            for m in [re.fullmatch(r"[A-Z][A-Z0-9]{1,12}-[A-Z0-9]+(?:\s+\d+ of \d+)?", line)]
            if m]
    code = refs[-1] if refs else ""
    if number == 1:
        kind = "overview"
    elif "UPDATES" in code or any(re.search(r"Updates in Version", s, re.I) for s in header):
        kind = "changes"
    elif "References" == override or previous == "references":
        kind = "references"
    elif code.startswith("MS-") or previous == "discussion":
        kind = "discussion"
    elif code.startswith(("ST-", "ABBR-")):
        kind = "staging"
    elif override and re.match(r"^(principles|systemic therapy regimens)", override, re.I):
        kind = "principles"
    elif code or override:
        kind = "algorithm"
    elif previous in ("algorithm", "principles", "staging"):
        kind = previous
    else:
        kind = "contents"
    heading = override or next((s for s in header if 8 <= len(s) <= 93 and "NCCN" not in s), "")
    if kind in {"algorithm", "principles", "staging", "discussion"}:
        for expr, title, helptext in TOPICS:
            if re.search(expr, heading, re.I):
                return kind, code, heading, title, helptext
    return kind, code, heading, *LABEL[kind]


def blocks_for_region(page):
    height = page.rect.height
    return [box for box, s in text_lines(page)
            if s and box.y1 > height * .12 and box.y0 < height * .97
            and not s.startswith(("Version ", "Note: All recommendations", "NCCN Guidelines Index",
                                  "PLEASE NOTE", "Printed by ", "Table of Contents"))]


def division(area, boxes, depth=0):
    """Partition the original page geometrically. Margins around each partition preserve context."""
    if depth == 2 or len(boxes) < 4:
        return [area]
    best = None
    for axis in range(2):
        start, end = area[axis], area[axis + 2]
        candidates = [start + (end - start) * frac for frac in (.34, .42, .50, .58, .66)]
        for cut in candidates:
            first = [r for r in boxes if (r[axis] + r[axis + 2]) / 2 < cut]
            if not first or len(first) == len(boxes):
                continue
            crossings = sum(r[axis] + 2 < cut < r[axis + 2] - 2 for r in boxes)
            score = crossings * 3 + abs(2 * len(first) - len(boxes)) / len(boxes)
            score += .2 * abs((cut - start) / (end - start) - .5)
            if best is None or score < best[0]:
                best = (score, axis, cut, first)
    if best is None:
        return [area]
    _, axis, cut, first = best
    low, high = list(area), list(area)
    low[axis + 2] = high[axis] = cut
    other = [r for r in boxes if (r[axis] + r[axis + 2]) / 2 >= cut]
    return division(fitz.Rect(low), first, depth + 1) + division(fitz.Rect(high), other, depth + 1)


@lru_cache(maxsize=16)
def font(size):
    return ImageFont.truetype(str(FONT), size, index=3)


def wrapped(draw, value, left, top, width, size, lines, color=INK):
    face = font(size)
    remaining = value
    for index in range(lines):
        if not remaining:
            return
        stop = 1
        while stop < len(remaining) and draw.textlength(remaining[:stop + 1], font=face) <= width:
            stop += 1
        if stop < len(remaining) and value.isascii():
            space = remaining.rfind(" ", 0, stop)
            if space > 0:
                stop = space
        line, remaining = remaining[:stop], remaining[stop:].lstrip()
        if index == lines - 1 and remaining:
            line = line[:-1] + "…"
        draw.text((left, top + index * (size + 11)), line, font=face, fill=color)


def footer_help(page, region, kind):
    located = [s for box, s in text_lines(page) if region.contains((box.tl + box.br) / 2)]
    joined = " ".join(located).lower()
    if re.search(r"category\s*[12]", joined):
        return "比對選項旁的 NCCN 證據／共識等級，並核對該選項適用的分支。"
    if len(located) >= 2 and region.y0 / page.rect.height > .51 and re.search(r"\bsee\b|\bconsider\b", joined):
        return "留意下方的例外、註腳與跨頁指引，回頭核對它們各自修飾哪一條路徑。"
    if re.search(r"\b(mg/m|mg/kg|gy|cycles|fractions|daily)\b", joined):
        return "若此區列出療程數字，請把單位、頻率與適用情境一起讀。"
    if re.search(r"\b(or|versus|and/or|if)\b", joined) and kind == "algorithm":
        return "沿著原圖箭頭讀這一區。先定位分流條件，再逐條看對應選項。"
    return LABEL[kind][1]


class Timeline:
    def __init__(self, directory, sfx):
        self.directory = directory
        self.listing = (directory / "frames.txt").open("w")
        self.audio = wave.open(str(directory / "audio.wav"), "wb")
        self.audio.setparams((1, 2, RATE, 0, "NONE", "not compressed"))
        self.sfx = {}
        for name in ("page", "focus", "section"):
            with wave.open(str(sfx / f"{name}.wav"), "rb") as cue:
                assert cue.getframerate() == RATE and cue.getnchannels() == 1
                self.sfx[name] = np.frombuffer(cue.readframes(cue.getnframes()), dtype="<i2")
        self.frames = 0
        self.sequence = 0

    def frame(self, image, frames):
        name = f"f{self.sequence:07}.jpg"
        image.save(self.directory / name, quality=88, subsampling=0)
        self.listing.write(f"file '{name}'\nduration {frames / FPS:.2f}\n")
        self.last = name
        self.sequence += 1
        self.frames += frames

    def write_audio(self, start, events):
        pcm = np.zeros((self.frames - start) * RATE // FPS, dtype=np.int32)
        for frame, sound in events:
            offset = frame * RATE // FPS
            count = min(len(sound), len(pcm) - offset)
            if count > 0:
                pcm[offset:offset + count] += sound[:count]
        self.audio.writeframes(np.clip(pcm, -32768, 32767).astype("<i2").tobytes())

    def finish(self):
        self.listing.write(f"file '{self.last}'\n")
        self.listing.close()
        self.audio.close()


async def voice(title, work):
    path = work / "title.mp3"
    for attempt in range(4):
        try:
            await asyncio.wait_for(edge_tts.Communicate(title, "zh-TW-HsiaoChenNeural", rate="-8%").save(path), 35)
            audio = subprocess.check_output(
                ["ffmpeg", "-v", "error", "-i", str(path), "-af", "volume=0.84", "-ar", str(RATE),
                 "-ac", "1", "-f", "s16le", "-"])
            if audio:
                return np.frombuffer(audio, dtype="<i2")
        except (subprocess.CalledProcessError, RuntimeError, TimeoutError, OSError, edge_tts.exceptions.EdgeTTSException):
            if attempt == 3:
                raise
            await asyncio.sleep(2 ** attempt)
    raise RuntimeError(f"Empty Edge TTS output for {title}")


def padded(rect, page):
    margin = min(page.width, page.height) * .035
    return fitz.Rect(rect.x0 - margin, rect.y0 - margin, rect.x1 + margin, rect.y1 + margin) & page


def movement(a, b, fraction):
    s = fraction * fraction * (3 - 2 * fraction)
    return fitz.Rect([x + s * (y - x) for x, y in zip(a, b)])


def render_page(timeline, page, page_number, total, title, stamp, detail, narration):
    kind, code, heading, topic, summary = detail
    image = page.get_pixmap(matrix=fitz.Matrix(2.35, 2.35), alpha=False, annots=True)
    source = Image.frombytes("RGB", (image.width, image.height), image.samples)
    entire = page.rect
    content = blocks_for_region(page)
    regions = division(entire, content)
    if len(regions) == 1 and content:
        regions = [fitz.Rect().include_rect(content[0])]
        for box in content[1:]:
            regions[0].include_rect(box)
        regions[0] &= entire
    start = timeline.frames
    cue = "section" if narration is not None else "page"
    events = [(0, timeline.sfx[cue])]
    if narration is not None:
        events.append((10, narration))

    def frame(view, highlight, intensity, label, helptext, hold):
        base = Image.new("RGB", (W, H), "white")
        draw = ImageDraw.Draw(base)
        draw.rectangle(STAGE, fill=PAPER)
        left, top, right, bottom = STAGE
        scale = min((right - left - 22) / view.width, (bottom - top - 22) / view.height)
        source_scale_x, source_scale_y = source.width / entire.width, source.height / entire.height
        w, h = round(view.width * scale), round(view.height * scale)
        tile = source.resize((w, h), Image.Resampling.BILINEAR, (
            view.x0 * source_scale_x, view.y0 * source_scale_y,
            min(source.width, view.x1 * source_scale_x), min(source.height, view.y1 * source_scale_y)))
        x, y = left + (right - left - w) // 2, top + (bottom - top - h) // 2
        box = highlight & view
        if intensity > 0 and not box.is_empty:
            clip = tuple(round(v) for v in ((box.x0 - view.x0) * scale, (box.y0 - view.y0) * scale,
                                             (box.x1 - view.x0) * scale, (box.y1 - view.y0) * scale))
            bright = tile.crop(clip)
            tile = Image.blend(tile, Image.new("RGB", tile.size, "white"), intensity)
            tile.paste(bright, clip[:2])
        base.paste(tile, (x, y))
        draw.rectangle((0, 0, W, 7), fill=BLUE)
        wrapped(draw, title, 38, 23, 1070, 37, 1)
        wrapped(draw, f"NCCN  ·  {stamp}", 39, 82, 1050, 18, 1, BLUE)
        wrapped(draw, f"PDF {page_number:03} / {total:03}" + (f"  ·  {code}" if code else ""),
                1167, 73, 405, 19, 1, BLUE)
        draw.line((1167, 126, 1565, 126), fill="#c4d6df", width=2)
        wrapped(draw, label, 1167, 159, 398, 20, 1, BLUE)
        wrapped(draw, topic, 1167, 208, 398, 34, 2)
        if heading and kind not in ("overview", "contents", "references"):
            wrapped(draw, heading, 1167, 309, 398, 20, 3, BLUE)
        wrapped(draw, helptext, 1167, 448, 398, 24, 6)
        draw.rectangle((38, 870, 1565, 874), fill="#edf3f6")
        draw.rectangle((38, 870, 38 + round(1527 * page_number / total), 874), fill=BLUE)
        timeline.frame(base, hold)

    overview = max(24, 16 + math.ceil(len(narration) / RATE * FPS)) if narration is not None else 24
    frame(entire, entire, 0, "全頁總覽", summary, overview)
    last_view = entire
    for index, region in enumerate(regions, 1):
        target = padded(region, entire)
        hint = footer_help(page, region, kind)
        label = f"原頁焦點  {index} / {len(regions)}"
        for step in range(1, 10):
            frame(movement(last_view, target, step / 10), region, .48 * step / 10, label, hint, 1)
        events.append((timeline.frames - start, timeline.sfx["focus"]))
        frame(target, region, .48, label, hint, 67)
        last_view = target
    for step in range(1, 11):
        frame(movement(last_view, entire, step / 10), regions[-1], .48 * (1 - step / 10),
              "拉回全頁", summary, 1)
    frame(entire, entire, 0, "拉回全頁", summary, 17)
    timeline.write_audio(start, events)
    return {"page": page_number, "ref": code, "kind": kind, "title": topic,
            "focuses": len(regions), "start": round(start / FPS, 2),
            "end": round(timeline.frames / FPS, 2), "narrated": narration is not None}


def render(gid, inputs, out, limit):
    doc = fitz.open(inputs / "pdfs" / f"{gid}.pdf")
    total = len(doc)
    cover = doc[0].get_text()
    stamp = re.search(r"Version \d+\.\d+\s+[—–-]\s+[^\n]+", cover)
    if not stamp:
        raise ValueError(f"{gid}: missing version on PDF cover")
    stamp = stamp.group(0)
    saved_toc = json.loads((inputs / "toc" / f"{gid}.toc.json").read_text())
    headings = {r["p"]: r["t"].replace("…", "") for r in saved_toc
                if isinstance(r.get("p"), int) and 1 < r["p"] <= total}
    # PDF bookmarks can supply discussion pages missing from the mirror’s TOC.
    for _, text, page in doc.get_toc():
        if 1 < page <= total and len(text) <= 145 and not text.lower().endswith(".pdf"):
            headings.setdefault(page, text)
    count = min(limit or total, total)
    rows, previous, heard = [], "", set()
    version = re.search(r"\d+\.\d+", stamp).group(0)
    name = f"nccn-{gid}-v{version}"
    with tempfile.TemporaryDirectory(prefix=f"{gid}-") as folder:
        folder = Path(folder)
        timeline = Timeline(folder, inputs / "sfx")
        for number in range(1, count + 1):
            page = doc[number - 1]
            detail = source_page(page, number, headings.get(number, ""), previous)
            kind = detail[0]
            speech = None
            if kind not in heard:
                speech = asyncio.run(voice(IDS[gid] if number == 1 else LABEL[kind][0], folder))
                heard.add(kind)
            rows.append(render_page(timeline, page, number, total, IDS[gid], stamp, detail, speech))
            previous = kind
            if number == 1 or number % 25 == 0:
                print(f"{gid}: {number}/{count} pages", flush=True)
        timeline.finish()
        output = out / f"{name}.mp4"
        subprocess.run(["ffmpeg", "-hide_banner", "-v", "error", "-y", "-f", "concat", "-safe", "1",
                        "-i", str(folder / "frames.txt"), "-i", str(folder / "audio.wav"),
                        "-vf", f"fps={FPS},format=yuv420p", "-c:v", "libx264", "-preset", "veryfast",
                        "-crf", "22", "-threads", "3", "-c:a", "aac", "-b:a", "112k", "-shortest",
                        "-movflags", "+faststart", str(output)], check=True)
    print(f"{gid}: {output.stat().st_size:,} bytes", flush=True)
    return {"id": gid, "title": IDS[gid], "version": version, "cover": stamp, "movie": output.name,
            "pages": total, "rendered": count, "seconds": rows[-1]["end"],
            "sections": dict(Counter(r["kind"] for r in rows)), "timeline": rows}


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("shard", type=int)
    parser.add_argument("shards", type=int)
    parser.add_argument("out", type=Path)
    parser.add_argument("--inputs", type=Path, required=True)
    parser.add_argument("--limit", type=int)
    args = parser.parse_args()
    args.out.mkdir(parents=True, exist_ok=True)
    for index, gid in enumerate(IDS):
        if index % args.shards == args.shard:
            manifest = render(gid, args.inputs, args.out, args.limit)
            (args.out / f"{gid}.json").write_text(json.dumps(manifest, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
