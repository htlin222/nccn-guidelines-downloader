#!/usr/bin/env python3
"""核心課程的四關檢查。照 verify_snippets.py 的精神：機械關擋得住的都擋掉，擋不住的
說清楚它擋不住。

    python3 verify_courses.py            # 四關
    python3 verify_courses.py --no-fig   # 跳過需要瀏覽器的第 4 關

四關：
 1 結構關  八段齊全、段名一字不差、frontmatter 欄位完整、order 與 id 不重複、id 對得上檔名
 2 來源關  refs 都存在於 snippets/_src/<gid>/；figures 的檔案存在；圖的 metadata 完整
 3 同步關  src/data/courses.js 與來源一致（呼叫 gen_courses.sh --check）
 4 圖關    只用白／黑／#3d6869 三個色族；圖在 1600x800 內放得下（需要 chromium）

**四關全過不代表內容是對的。** cf/snippets/RESUME.md 記著三類實際發生過而且全部通過
機械檢查的錯誤：把 positive margins 寫成 margins、把 ± pertuzumab 寫成 Add pertuzumab、
憑空生一句總結規則。那三類只有拿素材逐條對才抓得到。
"""

import json
import re
import subprocess
import sys
import tempfile
from pathlib import Path

CF = Path(__file__).resolve().parent
SECTIONS = [
    "這一課回答什麼",
    "治療地景",
    "決策路徑",
    "關鍵試驗",
    "必背數字",
    "記憶法",
    "門診核對",
    "常見陷阱",
]
REQUIRED = ["id", "track", "order", "group", "title", "oneline", "refs", "nccn"]

# 圖只有兩個顏色加白。灰階（線、次要文字）也放行——它們是同一個中性軸，不是第三個色相。
ALLOWED_HEX = re.compile(
    r"#(?:fff|ffffff|000|000000|111|111111|3d6869|2c4c4d|d8d8d8|ececec|4a4a4a|8a8a8a)\b",
    re.I,
)
ANY_HEX = re.compile(r"#[0-9a-f]{3,8}\b", re.I)
# rgba(61,104,105,…) 是主色的透明版，允許；其他 rgb() 一律報出來。
ALLOWED_RGBA = re.compile(
    r"rgba?\(\s*(?:61\s*,\s*104\s*,\s*105|255\s*,\s*255\s*,\s*255|0\s*,\s*0\s*,\s*0)\b",
    re.I,
)
ANY_RGB = re.compile(r"rgba?\([^)]*\)", re.I)

errors: list[str] = []
warns: list[str] = []


def err(where: str, msg: str) -> None:
    errors.append(f"{where}: {msg}")


def warn(where: str, msg: str) -> None:
    warns.append(f"{where}: {msg}")


# ---------------------------------------------------------------- 讀 frontmatter


def read_module(path: Path):
    text = path.read_text(encoding="utf-8").replace("\r\n", "\n")
    if not text.startswith("+++\n"):
        err(path.name, "開頭不是 +++")
        return None
    end = text.find("\n+++\n", 3)
    if end < 0:
        err(path.name, "frontmatter 沒有收尾的 +++")
        return None
    meta = {}
    for line in text[4:end].split("\n"):
        line = line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        k, v = line.split("=", 1)
        meta[k.strip()] = v.strip()
    body = text[end + 5 :]
    return meta, body


def toml_list(v: str) -> list[str]:
    return re.findall(r'"([^"]+)"', v or "")


# ---------------------------------------------------------------- 1 結構關

modules = []
course_dir = CF / "courses"
for track_dir in sorted(
    p for p in course_dir.iterdir() if p.is_dir() and p.name != "figures"
):
    for md in sorted(track_dir.glob("*.md")):
        got = read_module(md)
        if not got:
            continue
        meta, body = got
        where = f"courses/{track_dir.name}/{md.name}"

        for k in REQUIRED:
            if k not in meta:
                err(where, f"frontmatter 缺 {k}")

        found = re.findall(r"^##\s+(.+?)\s*$", body, re.M)
        missing = [s for s in SECTIONS if s not in found]
        extra = [s for s in found if s not in SECTIONS]
        if missing:
            err(where, "缺這幾段：" + "、".join(missing))
        if extra:
            # 打錯段名比缺一段更危險：缺的會被抓到，多的若放行就是一段永遠不顯示的內容。
            err(where, "多了不認得的段（打錯字？）：" + "、".join(extra))
        if found and [s for s in found if s in SECTIONS] != [
            s for s in SECTIONS if s in found
        ]:
            err(where, "段落順序跟骨架不一致")

        mid = (meta.get("id") or "").strip('"')
        slug = md.stem.split("-", 1)[1] if "-" in md.stem else md.stem
        if mid and not mid.endswith("/" + slug):
            err(where, f"id ({mid}) 跟檔名的 slug ({slug}) 對不上")

        modules.append((where, meta, body))

orders, ids = {}, {}
for where, meta, _ in modules:
    o = (meta.get("order") or "").strip()
    i = (meta.get("id") or "").strip('"')
    if o in orders:
        err(where, f"order {o} 跟 {orders[o]} 撞號")
    orders[o] = where
    if i in ids:
        err(where, f"id {i} 跟 {ids[i]} 重複")
    ids[i] = where

# ---------------------------------------------------------------- 2 來源關

fig_dir = CF / "courses" / "figures"
fig_meta: dict[str, dict] = {}
for f in sorted(fig_dir.rglob("*.html")):
    src = f.read_text(encoding="utf-8")
    where = f"courses/figures/{f.relative_to(fig_dir)}"
    m = re.search(r"<!--\s*fig\n(.*?)\n-->", src, re.S)
    if not m:
        err(where, "缺 <!-- fig --> metadata 區塊")
        continue
    block = m.group(1)

    def field(k: str) -> str:
        mm = re.search(rf"^{k}:\s*(.+)$", block, re.M)
        return mm.group(1).strip() if mm else ""

    fid = field("id")
    if not fid:
        err(where, "metadata 缺 id")
        continue
    if not field("title"):
        err(where, "metadata 缺 title")
    if not field("cite"):
        # 每張圖都要說得出它出自哪一頁——這些圖會被單獨拿去做投影片，脫離課程之後
        # 引用是它唯一剩下的出處。
        err(where, "metadata 缺 cite")
    # class 要用 regex 比對，不能寫死 "fig"：dense / tight 是密度修飾子，圖上會寫成
    # class="fig dense tight"。寫死的話那些圖會被誤報成「壞掉」。
    if not re.search(r'<section class="fig[^"]*">', src):
        err(where, '找不到 <section class="fig…">')
    if 'lang="en"' not in src:
        # 圖裡的文字一律英文（要貼進學會演講的投影片）。lang 標錯多半代表整張圖是中文的。
        warn(where, "html lang 不是 en — 圖裡的文字應該是英文")
    fig_meta[fid] = {"file": f, "where": where, "src": src}

src_root = CF / "snippets" / "_src"
for where, meta, _ in modules:
    gid = (re.search(r'gid\s*=\s*"([^"]+)"', meta.get("nccn", "")) or [None, None])[1]
    if not gid:
        err(where, "nccn 裡沒有 gid")
        continue
    have = (
        {p.stem for p in (src_root / gid).glob("*.txt")}
        if (src_root / gid).is_dir()
        else set()
    )
    if not have:
        warn(
            where,
            f"snippets/_src/{gid}/ 是空的 — 先跑 bash .devcontainer/dump-src.sh {gid}",
        )
    for ref in toml_list(meta.get("refs", "")):
        if have and ref not in have:
            err(where, f"refs 裡的 {ref} 在 snippets/_src/{gid}/ 找不到")
    for fid in toml_list(meta.get("figures", "")):
        if fid not in fig_meta:
            err(where, f"figures 裡的 {fid} 找不到對應的 html")

used = {fid for _, meta, _ in modules for fid in toml_list(meta.get("figures", ""))}
for fid in fig_meta:
    if fid not in used:
        # 圖庫本來就可以有沒被課引用的圖（簡報素材），但多半是課程改名時漏掉的引用，
        # 而漏掉的話那張圖就從文章裡消失了，畫面上看不出來。
        warn(fig_meta[fid]["where"], f"沒有任何一課引用 {fid}")

# ---------------------------------------------------------------- 3 同步關

r = subprocess.run(
    ["bash", "gen_courses.sh", "--check"], cwd=CF, capture_output=True, text=True
)
if r.returncode != 0:
    err(
        "src/data/courses.js",
        (r.stderr or r.stdout).strip().splitlines()[-1]
        if (r.stderr or r.stdout).strip()
        else "與來源不同步",
    )

# ------------------------------------------------------- 4 圖關（顏色與字級）

# 字級是簡報可讀性的底線（22px 的節點正文貼進 16:9 投影片約 13pt，已經是密集參考圖
# 的邊界）。單張圖覆寫字級能讓任何內容塞得下，代價是那張圖在演講裡失去作用——而它在
# 網頁上看起來仍然很好，所以不會有人發現。放不下的正解是 dense → tight → 減內容 →
# 拆圖，全部寫在 AUTHORING.md §4。
# 空白要收進 lookahead 自己處理，不能寫成 `:\s*(?!var\()`。後者會被回溯繞過：引擎先讓
# \s* 吃掉空格、lookahead 失敗，接著回溯成吃 0 個字元，這時 lookahead 看到的是
# " var(…)"（開頭是空格），不匹配 "var(" 於是 negative lookahead 反而成立。
# 症狀是 11 個合法的 var(--fig-fs-…) 被誤報成覆寫。
FONT_SIZE = re.compile(r"font-size\s*:(?!\s*var\(--fig-fs-)\s*([^;}\n]+)", re.I)

# ---------------------------------------------------------------- 4 圖關（顏色）

for fid, info in fig_meta.items():
    body = re.sub(r"<!--.*?-->", "", info["src"], flags=re.S)
    for size in set(FONT_SIZE.findall(body)):
        err(
            info["where"],
            f"覆寫了字級（font-size: {size.strip()}）— 字級是簡報可讀性的"
            f"底線，放不下請走 dense → tight → 減內容 → 拆圖",
        )
    for hexv in set(ANY_HEX.findall(body)):
        if not ALLOWED_HEX.fullmatch(hexv):
            err(info["where"], f"用了不在雙色系統裡的顏色 {hexv}")
    for rgb in set(ANY_RGB.findall(body)):
        if not ALLOWED_RGBA.match(rgb):
            err(info["where"], f"用了不在雙色系統裡的顏色 {rgb}")

# ---------------------------------------------------------------- 4 圖關（溢出）


def check_overflow(paths: list[Path]) -> None:
    """量每張圖的 scrollWidth/Height 有沒有超過 1600x800。

    這一關需要瀏覽器，因為溢出只在排版之後才存在：PNG 的尺寸永遠是 3200x1600（畫布
    固定），超出的內容是被裁掉而不是把圖撐大，所以看檔案大小或尺寸都驗不出來。
    """
    browser = None
    for cand in [
        "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        "/Applications/Chromium.app/Contents/MacOS/Chromium",
        "chromium",
        "chromium-browser",
        "google-chrome-stable",
        "google-chrome",
    ]:
        try:
            if (
                subprocess.run(
                    [cand, "--version"], capture_output=True, timeout=20
                ).returncode
                == 0
            ):
                browser = cand
                break
        except Exception:
            continue
    if not browser:
        warn("圖關", "找不到 chromium／chrome，跳過溢出檢查")
        return

    # 用一頁 iframe 一次量完所有圖：開三十次瀏覽器要好幾分鐘，開一次是幾秒。
    frames = "".join(
        f'<iframe src="{p.as_uri()}" style="width:1600px;height:800px;border:0"></iframe>'
        for p in paths
    )
    names = json.dumps([str(p.relative_to(CF)) for p in paths])
    html = f"""<!doctype html><meta charset="utf-8"><body style="margin:0">{frames}
<pre id="out"></pre><script>
window.addEventListener('load', function(){{
  var names = {names}, bad = [], all = [], bare = [];
  document.querySelectorAll('iframe').forEach(function(f, i){{
    try {{
      var d = f.contentDocument.querySelector('.fig');
      if (!d) {{ bad.push([names[i], 'no .fig']); return; }}
      var w = d.scrollWidth, h = d.scrollHeight;
      all.push([names[i], w + 'x' + h]);
      if (w > 1601 || h > 801) bad.push([names[i], w + 'x' + h]);
      // .fig-node 裡的裸文字混 inline 標籤：flex 會把它們拆成多個 anonymous item，
      // item 之間的空白被丟棄，渲染出來像漏字。只有在真的排版之後才看得出來。
      d.querySelectorAll('.fig-node').forEach(function(n){{
        var hasText = false, hasEl = false;
        for (var k = 0; k < n.childNodes.length; k++) {{
          var c = n.childNodes[k];
          if (c.nodeType === 3 && c.textContent.trim()) hasText = true;
          if (c.nodeType === 1) hasEl = true;
        }}
        if (hasText && hasEl)
          bare.push([names[i], n.textContent.trim().slice(0, 46)]);
      }});
    }} catch (e) {{ bad.push([names[i], 'unreadable: ' + e.message]); }}
  }});
  document.getElementById('out').textContent =
    'MEASURED=' + JSON.stringify(all) + '\\nBARE=' + JSON.stringify(bare) +
    '\\nOVERFLOW=' + JSON.stringify(bad);
}});
</script></body>"""
    with tempfile.TemporaryDirectory() as td:
        page = Path(td) / "check.html"
        page.write_text(html, encoding="utf-8")
        try:
            out = subprocess.run(
                [
                    browser,
                    "--headless",
                    "--disable-gpu",
                    "--hide-scrollbars",
                    "--allow-file-access-from-files",
                    "--virtual-time-budget=6000",
                    "--dump-dom",
                    page.as_uri(),
                ],
                capture_output=True,
                text=True,
                timeout=180,
            ).stdout
        except Exception as e:
            warn("圖關", f"溢出檢查跑不起來（{e}），跳過")
            return
    seen = re.search(r"MEASURED=(\[.*?\])\n", out, re.S)
    m = re.search(r"OVERFLOW=(\[.*?\])</pre>", out, re.S)
    if not m or not seen:
        warn("圖關", "溢出檢查沒有回報結果，跳過")
        return
    measured = json.loads(seen.group(1))
    # 一關永遠通過等於沒有這一關。量到的張數對不上就是這一關壞了（iframe 讀不到、
    # 瀏覽器沒渲染完），而不是「圖都沒問題」。
    if len(measured) != len(paths):
        warn("圖關", f"只量到 {len(measured)}/{len(paths)} 張，溢出檢查不完整")
    if "--debug" in sys.argv:
        for name, size in measured:
            print(f"  量到 {name}: {size}")
    for name, size in json.loads(m.group(1)):
        err(name, f"內容超出 1600x800 畫布（{size}）— 會被裁掉，而 PNG 的尺寸看不出來")

    barem = re.search(r"BARE=(\[.*?\])\n", out, re.S)
    if barem:
        for name, text in json.loads(barem.group(1)):
            err(
                name,
                f"節點裡有裸文字混 inline 標籤，字間空白會被吃掉（「{text}」）— 內容包一層 <div>",
            )


if "--no-fig" not in sys.argv:
    check_overflow([info["file"] for info in fig_meta.values()])

# ---------------------------------------------------------------- 結果

print(f"課程 {len(modules)} 堂，圖 {len(fig_meta)} 張")
for w in warns:
    print("  WARN " + w)
for e in errors:
    print("  FAIL " + e)
if errors:
    print(f"\n{len(errors)} 個問題")
    sys.exit(1)
print(
    "四關通過。注意：機械檢查擋不住編出來的藥名、掉了的限定詞與憑空生成的規則，"
    "那些要拿 snippets/_src 的素材逐條對。"
)
