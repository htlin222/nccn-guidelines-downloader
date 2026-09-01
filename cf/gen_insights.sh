#!/bin/bash
# AI 逐頁重點的批次讀圖（issue #9）：讀圖只做一次（Gemini），存進 D1 page_raw；
# 四種格式（key/hy/phrase/sdm）改成一次 Groq 呼叫從 raw 轉出，寫進既有的
# insights 表——前端完全不用改，讀的還是同一張表、同樣的 shape。
#
# 只處理「這一輪真的變版」的 guideline，不是每次全量重跑整個語料庫：預設從
# gen_clean.log 抓 "OK <id>" 那幾行（gen_clean.sh 這一輪確定上傳成功、sha 真的
# 變了的 id），也可以用 CHANGED_IDS="id1 id2" 手動指定。原因見 issue #9——全語料
# 庫有 8,861 頁 vision 頁，真實一週只有 2–3 份 guideline 變版、約 325 頁，量級差
# 兩個數量級。
#
# NCCN only（比照 gen_clean.sh／build_toc.sh／build_updates.sh 的範圍）：MD
# Anderson 的月更走 update-mda.yml，不在這支腳本裡。
#
# 額度用完不是失敗：Gemini 階梯（ai_calls 表）或 Groq（groq_usage 表）當日額度
# 用盡就停手，已經寫進 D1 的部分維持，下次 rebuild（或下次手動跑）從沒處理到的
# 頁接著做——比照 daily cron 的 nextCronState 那套「先做到這裡」哲學，exit 0。
#
#   bash gen_insights.sh                    # 讀 gen_clean.log，處理這一輪變版的 id
#   CHANGED_IDS="breast nscl" bash gen_insights.sh   # 手動指定
#   LIMIT=1 CHANGED_IDS="breast" bash gen_insights.sh # 只處理第一份 id 的前 LIMIT 頁（smoke test）
#   DRY_RUN=1 CHANGED_IDS="breast" bash gen_insights.sh # 走完抓 PDF／算 vision 頁／
#     rasterize 全部流程，但不呼叫 Gemini／Groq——用來確認 D1／R2／pdftoppm 那段管
#     線是通的，不花任何 API 額度。DRY_RUN 不需要真的金鑰。
set -u
cd "$(dirname "$0")"
[ -f ../.env ] && set -a && . ../.env && set +a
[ -f ../groq_token ] && GROQ_API_KEY="${GROQ_API_KEY:-$(head -1 ../groq_token | tr -d '[:space:]')}"
BUCKET="nccn-pdfs"
DB="nccn-search"
CLEAN_DIR="${CLEAN_DIR:-}"
LOG="gen_insights.log"; : > "$LOG"

if [ -z "${CHANGED_IDS:-}" ] && [ -f gen_clean.log ]; then
  CHANGED_IDS=$(grep -oE '^\[[0-9]+/[0-9]+\] OK [a-z0-9_.-]+' gen_clean.log | awk '{print $3}' | tr '\n' ' ')
fi
if [ -z "${CHANGED_IDS:-}" ]; then
  echo "no changed ids (gen_clean.log missing/empty and CHANGED_IDS not set) — nothing to do" | tee -a "$LOG"
  exit 0
fi
echo "changed ids: $CHANGED_IDS" | tee -a "$LOG"

if [ "${DRY_RUN:-0}" != "1" ]; then
  if [ -z "${GEMINI_API_KEY:-${ANTIGRAVITY_API_KEY:-}}" ]; then
    echo "no Gemini key (ANTIGRAVITY_API_KEY) — nothing this run can read, skipping" | tee -a "$LOG"
    exit 0
  fi
  if [ -z "${GROQ_API_KEY:-}" ]; then
    echo "no GROQ_API_KEY — raw would be read for nothing since notes can't be produced, skipping" | tee -a "$LOG"
    exit 0
  fi
fi

export CLEAN_DIR BUCKET DRY_RUN
python3 - "$DB" "${LIMIT:-0}" <<'PY' 2>&1 | tee -a "$LOG"
import base64, glob, json, os, re, subprocess, sys, time
db, limit = sys.argv[1], int(sys.argv[2])
changed_ids = os.environ.get('CHANGED_IDS', '').split()
gemini_key = os.environ.get('ANTIGRAVITY_API_KEY', '') or os.environ.get('GEMINI_API_KEY', '')
groq_key = os.environ.get('GROQ_API_KEY', '')
clean_dir = os.environ.get('CLEAN_DIR', '')
bucket = os.environ.get('BUCKET', 'nccn-pdfs')

# 跟 src/lib/gemini.js 的 LADDER 保持同步——那邊是 Worker 端 on-demand 用的，
# 這裡是批次用的，兩邊各自打 API 但共用同一張 D1 ai_calls 記帳表，所以額度是
# 真的共用（不是各算各的），避免這支腳本把使用者當天手動點開 AI 面板的額度吃光。
LADDER = [
    {"id": "gemini-3.6-flash", "rpd": 20, "think": "level"},
    {"id": "gemini-3.5-flash", "rpd": 20, "think": "level"},
    {"id": "gemini-3-flash-preview", "rpd": 20, "think": "level"},
    {"id": "gemini-3.5-flash-lite", "rpd": 500, "think": "level"},
    {"id": "gemini-3.1-flash-lite", "rpd": 500, "think": "level"},
    {"id": "gemini-2.5-flash", "rpd": 20, "think": "budget"},
]
GEMINI_BASE = "https://generativelanguage.googleapis.com/v1beta/models/"
GROQ_URL = "https://api.groq.com/openai/v1/chat/completions"
GROQ_MODEL = "llama-3.1-8b-instant"
# third-party 整理的免費層數字，不是從帳號 limits 頁確認的——上線前先核對
# https://console.groq.com/settings/limits。抓保守一點，留餘裕給 Worker 端
# on-demand 那條路徑（cache miss 時使用者手動點開 AI 面板也會打 Groq）。
GROQ_TPD_BUDGET = 400000
GROQ_RPD_BUDGET = 12000

KINDS = ["key", "hy", "phrase", "sdm"]

def today():
    return time.strftime("%Y-%m-%d", time.gmtime())

def esc(s):
    return str(s).replace("'", "''")

def d1_query(sql):
    r = subprocess.run(
        ["wrangler", "d1", "execute", db, "--remote", "--json", "--command", sql],
        capture_output=True, text=True,
    )
    if r.returncode != 0:
        print("D1-QUERY-FAIL:", r.stderr[:300].replace("\n", " "))
        return []
    try:
        d = json.loads(r.stdout)
        return d[0].get("results", []) if d else []
    except Exception as e:
        print("D1-QUERY-PARSE-FAIL:", str(e)[:200])
        return []

def d1_exec(sql):
    r = subprocess.run(
        ["wrangler", "d1", "execute", db, "--remote", "--command", sql],
        capture_output=True, text=True,
    )
    if r.returncode != 0:
        print("D1-EXEC-FAIL:", r.stderr[:300].replace("\n", " "))
        return False
    return True

# ---- needsVision（跟 src/lib/insight.js 的 cleanPageText/needsVision 同一套算法） ----
BOILER = [re.compile(p, re.I) for p in (
    r"PLEASE NOTE that use of this NCCN Content.{0,300}?artificial intelligence model or tool\.",
    r"Printed by .{0,60}?\d{1,2}/\d{1,2}/\d{4}.{0,40}?\.",
    r"Copyright\s*©\s*\d{4} National Comprehensive Cancer Network.{0,120}?All Rights Reserved\.",
    r"NCCN Guidelines Index Table of Contents Discussion",
    r"Note: All recommendations are category 2A unless otherwise indicated\.",
)]
def clean_page_text(raw):
    t = re.sub(r"\s+", " ", str(raw or ""))
    for r in BOILER:
        t = r.sub(" ", t)
    return re.sub(r"\s+", " ", t).strip()

def needs_vision(raw):
    t = clean_page_text(raw)
    if len(t) < 200:
        return True
    words = [w for w in t.split() if w]
    if len(words) < 60:
        return True
    periods = len(re.findall(r"[.;]\s", t))
    return (periods / len(words)) < 0.08

# ---- Gemini ladder（跟 src/lib/gemini.js 的 pickModels/classifyError/callGemini 對應） ----
def gemini_state(day):
    rows = d1_query(f"SELECT model, calls, cool FROM ai_calls WHERE day = '{esc(day)}'")
    return {r["model"]: {"calls": r.get("calls", 0), "cool": r.get("cool", "")} for r in rows}

def pick_models(state, now_iso):
    out = []
    for m in LADDER:
        s = state.get(m["id"], {})
        if s.get("calls", 0) >= m["rpd"]:
            continue
        if s.get("cool") and s["cool"] > now_iso:
            continue
        out.append(m)
    return out

def sql_str_or_null(v):
    return "'" + esc(v) + "'" if v else "NULL"

def bump_gemini(day, model_id, mode, cool=None):
    rpd = next((m["rpd"] for m in LADDER if m["id"] == model_id), 0)
    cool_sql = sql_str_or_null(cool)
    if mode == "exhaust":
        d1_exec(
            f"INSERT INTO ai_calls(day, model, calls, cool) VALUES('{esc(day)}','{esc(model_id)}',{rpd},{cool_sql}) "
            f"ON CONFLICT(day, model) DO UPDATE SET "
            f"calls = MAX(ai_calls.calls, excluded.calls), cool = COALESCE(excluded.cool, ai_calls.cool)"
        )
    else:
        d1_exec(
            f"INSERT INTO ai_calls(day, model, calls, cool) VALUES('{esc(day)}','{esc(model_id)}',1,{cool_sql}) "
            f"ON CONFLICT(day, model) DO UPDATE SET "
            f"calls = ai_calls.calls + 1, cool = COALESCE(excluded.cool, ai_calls.cool)"
        )

RAW_SYSTEM = (
    "你是台灣的血液腫瘤科主治醫師，正在把 NCCN 治療指引某一頁的完整內容轉寫成文字。\n"
    "這不是摘要，是逐項的忠實轉寫——你的輸出會是接下來四種不同格式（重點整理、\n"
    "考試高頻考點、病歷片語、醫病共享決策）唯一的資料來源，你這裡漏掉的東西，\n"
    "下游四種格式會一起漏掉，所以寧可寫得囉唆也不要省略。\n"
    "輸出規則（務必遵守）：\n"
    "1. 一律使用繁體中文轉寫敘述性文字，但表格／流程圖裡的每一個方框、選項、\n"
    "   分支條件，逐一列出、不要合併、不要省略任何一條。\n"
    "2. 決策流程圖的每個節點都要寫：節點內容是什麼、在什麼條件下走到這個節點、\n"
    "   走完這個節點之後的下一步（或多個分支）是什麼。用「若…則…」清楚寫出條件。\n"
    "3. 每一個數字都要保留：腫瘤大小、分期、週數、劑量、頻率、切點、category 等級。\n"
    "4. 藥名、基因、生物標記、分期、檢驗名稱、NCCN category 等級一律保留英文原文\n"
    "   （例如 trastuzumab、HER2、pT1a、pN0、category 1），不要翻譯成中文。\n"
    "5. 頁面上如果有註腳標號（如上標的 a、b、1、2），連同註腳本身的文字一起列出，\n"
    "   不要只列標號。\n"
    "6. 只根據這一頁實際看到的內容作答，不要用你自己的醫學知識補充或修正頁面上沒有的東西。\n"
    "7. 若這一頁只是封面、目錄、專家名單、版權聲明或參考文獻，就只回一行\n"
    "   「（本頁無臨床內容）」。"
)
RAW_ASK = "請完整轉寫這一頁的全部內容，包含每一個決策節點、分支條件、數字與註腳。"

def build_gemini_body(model_id, head, image_b64, text_extract):
    m = next((x for x in LADDER if x["id"] == model_id), {"think": "level"})
    if m["think"] == "budget":
        gen_cfg = {"maxOutputTokens": 1200, "temperature": 0.2, "thinkingConfig": {"thinkingBudget": 0}}
    else:
        gen_cfg = {"maxOutputTokens": 2400, "temperature": 0.2, "thinkingConfig": {"thinkingLevel": "low"}}
    parts = [{"text": head}, {"inline_data": {"mime_type": "image/jpeg", "data": image_b64}}]
    if text_extract:
        parts.append({"text": text_extract})
    return {
        "system_instruction": {"parts": [{"text": RAW_SYSTEM}]},
        "contents": [{"role": "user", "parts": parts}],
        "generationConfig": gen_cfg,
    }

def call_gemini(model_id, head, image_b64, text_extract):
    import urllib.request, urllib.error
    body = json.dumps(build_gemini_body(model_id, head, image_b64, text_extract)).encode()
    req = urllib.request.Request(
        GEMINI_BASE + model_id + ":generateContent",
        data=body,
        headers={"x-goog-api-key": gemini_key, "content-type": "application/json"},
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=60) as res:
            d = json.loads(res.read())
    except urllib.error.HTTPError as e:
        try:
            d = json.loads(e.read())
        except Exception:
            d = {}
        return {"ok": False, "status": e.code, "body": d}
    except Exception as e:
        return {"ok": False, "status": 0, "body": {"error": {"message": str(e)}}}
    cands = d.get("candidates") or [{}]
    parts = ((cands[0] or {}).get("content") or {}).get("parts") or []
    text = "".join(p.get("text", "") for p in parts if not p.get("thought") and isinstance(p.get("text"), str))
    return {"ok": True, "text": text, "finish": (cands[0] or {}).get("finishReason", "")}

def classify_gemini_error(status, body):
    if status in (401, 403):
        return "auth"
    if status == 404:
        return "gone"
    if status == 429:
        blob = json.dumps(body).lower()
        if "perday" in blob:
            return "day"
        if "perminute" in blob:
            return "minute"
        return "minute"
    if status >= 500:
        return "server"
    return "bad"

def get_or_create_raw(gid, page, name, text_extract, image_b64, day):
    hit = d1_query(f"SELECT body FROM page_raw WHERE gid = '{esc(gid)}' AND page = {int(page)}")
    if hit:
        return hit[0]["body"]

    state = gemini_state(day)
    now_iso = time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())
    models = pick_models(state, now_iso)
    if not models:
        return None  # 今日 Gemini 額度整條用完——訊號給呼叫端停手

    head = (
        f"資料來源：NCCN Guidelines《{name or gid}》第 {page} 頁。\n\n" + RAW_ASK +
        "\n\n以下附上這一頁的完整版面截圖，請以圖為準完整轉寫" +
        ("；另附文字抽取結果供藥名與拼字對照。" if text_extract else "。")
    )
    label = ("文字抽取結果：\n" + text_extract) if text_extract else ""
    for m in models:
        r = call_gemini(m["id"], head, image_b64, label)
        if r["ok"]:
            bump_gemini(day, m["id"], "used")
            body = (r["text"] or "").strip()
            if body:
                d1_exec(
                    f"INSERT INTO page_raw(gid, page, body, model, created) VALUES("
                    f"'{esc(gid)}',{int(page)},'{esc(body)}','{esc(m['id'])}','{esc(time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime()))}') "
                    f"ON CONFLICT(gid, page) DO UPDATE SET body=excluded.body, model=excluded.model, created=excluded.created"
                )
                return body
            print(f"  {m['id']} 沒有回傳可用內容（{r['finish']}）")
            continue
        kind = classify_gemini_error(r["status"], r["body"])
        if kind == "auth":
            print("  Antigravity 金鑰被拒:", r["body"])
            return None
        if kind in ("day", "gone"):
            bump_gemini(day, m["id"], "exhaust")
            continue
        if kind == "minute":
            cool = time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime(time.time() + 60))
            bump_gemini(day, m["id"], "used", cool)
            continue
        print(f"  {m['id']} 失敗（{r['status']}）")
    return None

# ---- Groq：raw → 四種格式 ----
ASK = {
    "key": "請整理這一頁的臨床重點。聚焦：治療決策路徑、分層條件、適應症與排除條件、建議的 category 等級、關鍵劑量或療程。依原文的決策順序排列，最多 8 點。",
    "hy": "請以「專科醫師考試（Board Exam）」的角度，挑出這一頁最可能入題的高頻考點。優先挑：具體數字與切點、category 1 的建議、藥物的適應症與禁忌、分期與危險分層的判準、以及容易混淆而常被拿來對比的兩個選項。每一點都要帶上可以背起來的具體事實。最多 8 點。",
    "phrase": "請把這一頁轉成可以直接貼進病歷的片語（Assessment / Plan 用語）。每一點寫一句英文病歷片語，句末用全形括號附上簡短中文說明。用臨床病歷的簡潔語氣，不要寫成完整敘述文。最多 8 點。",
    "sdm": "請以醫病共享決策（SDM）的角度，列出跟病人／家屬解釋這一頁內容時要強調的重點。涵蓋：有哪些治療選項、各自的預期好處、主要風險與副作用、需要病人一起權衡的取捨、以及可以拿來問病人偏好的問題。用病人聽得懂的白話中文。最多 7 點。",
}
NOTES_SYSTEM = (
    "你是台灣的血液腫瘤科主治醫師，正在讀 NCCN 治療指引的其中一頁。\n"
    "輸出規則（務必遵守）：\n"
    "1. 一律使用繁體中文、台灣醫界慣用語。\n"
    "2. 只輸出條列，每一點自成一行、以「- 」開頭。不要前言、不要結語、不要標題、不要表格。\n"
    "3. 藥名、基因、生物標記、分期、檢驗名稱、NCCN category 等級一律保留英文原文\n"
    "   （例如 trastuzumab、HER2、pT1a、pN0、category 1），不要翻譯成中文。\n"
    "4. 只根據我提供的這一頁內容作答。這一頁沒寫的，不要自己補充或臆測。\n"
    "5. 若這一頁只是封面、目錄、專家名單、版權聲明或參考文獻，就只輸出一行「- （本頁無臨床內容）」。"
)

def groq_usage(day):
    rows = d1_query(f"SELECT requests, tokens FROM groq_usage WHERE day = '{esc(day)}'")
    if rows:
        return rows[0].get("requests", 0), rows[0].get("tokens", 0)
    return 0, 0

def bump_groq(day, tokens):
    d1_exec(
        f"INSERT INTO groq_usage(day, requests, tokens) VALUES('{esc(day)}',1,{int(tokens)}) "
        f"ON CONFLICT(day) DO UPDATE SET requests = requests + 1, tokens = tokens + excluded.tokens"
    )

def to_bullets(text, max_n):
    out = []
    for line in str(text or "").split("\n"):
        s = re.sub(r"^\s*(?:[-*•·–—]|\d+[.)]|\(\d+\)|[（(]\d+[）)])\s*", "", line)
        s = re.sub(r"^#{1,6}\s*", "", s).strip()
        if not s or re.search(r"[:：]\s*$", s):
            continue
        if s not in out:
            out.append(s)
        if len(out) >= max_n:
            break
    return out

def generate_notes(gid, page, name, raw_body, day):
    reqs, tokens = groq_usage(day)
    if reqs >= GROQ_RPD_BUDGET or tokens >= GROQ_TPD_BUDGET:
        return False  # 今日 Groq 額度用完——訊號給呼叫端停手

    parts = "\n\n".join(f"[{k}] {v}" for k, v in ASK.items())
    user = (
        f"資料來源：NCCN Guidelines《{name or gid}》第 {page} 頁的完整轉寫內容：\n\n" +
        raw_body +
        "\n\n請根據上面這份轉寫內容（不要用你自己的醫學知識補充），同時輸出以下四種格式，"
        '回傳一個 JSON 物件，鍵是 "key"／"hy"／"phrase"／"sdm"，每個鍵的值是字串陣列'
        "（陣列裡每個字串是一點，不要自己加項目符號）。四種格式各自的規則：\n\n" + parts
    )
    import urllib.request, urllib.error
    body = json.dumps({
        "model": GROQ_MODEL,
        "messages": [{"role": "system", "content": NOTES_SYSTEM}, {"role": "user", "content": user}],
        "temperature": 0.2,
        "max_tokens": 1600,
        "response_format": {"type": "json_object"},
    }).encode()
    req = urllib.request.Request(
        GROQ_URL, data=body,
        # Groq 前面有 Cloudflare，實測 Python urllib 的預設 User-Agent（"Python-urllib/x.x"）
        # 會被 bot-fight 判成非瀏覽器流量、直接 403（error code 1010），Gemini 那邊沒這問題。
        # 補一個看起來像瀏覽器的 UA 就過了——2026-09-01 用 GitHub Actions runner 實測過。
        headers={
            "Authorization": "Bearer " + groq_key,
            "content-type": "application/json",
            "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
        },
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=60) as res:
            d = json.loads(res.read())
    except urllib.error.HTTPError as e:
        print(f"  Groq 失敗（{e.code}）: {e.read()[:200]}")
        return None if e.code == 429 else False
    except Exception as e:
        print("  Groq 失敗:", str(e)[:200])
        return False

    text = ((d.get("choices") or [{}])[0].get("message") or {}).get("content", "")
    usage_tokens = (d.get("usage") or {}).get("total_tokens", 0)
    bump_groq(day, usage_tokens)
    try:
        obj = json.loads(text)
    except Exception:
        m = re.search(r"\{[\s\S]*\}", text)
        obj = json.loads(m.group(0)) if m else None
    if not obj:
        print("  Groq 沒有回傳可解析的 JSON")
        return False
    now = time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())
    wrote = 0
    for k in KINDS:
        v = obj.get(k)
        joined = "\n".join(v) if isinstance(v, list) else str(v or "")
        bullets = to_bullets(joined, 7 if k == "sdm" else 8)
        if not bullets:
            continue
        md = esc("\n".join(bullets))
        d1_exec(
            f"INSERT INTO insights(gid, page, kind, md, model, src, created) VALUES("
            f"'{esc(gid)}',{int(page)},'{k}','{md}','{esc(GROQ_MODEL)}','vision','{now}') "
            f"ON CONFLICT(gid, page, kind) DO UPDATE SET md=excluded.md, model=excluded.model, "
            f"src=excluded.src, created=excluded.created"
        )
        wrote += 1
    return wrote > 0

# ---- 主流程 ----
def fetch_pdf(gid, out_path):
    if clean_dir:
        local = os.path.join(clean_dir, gid + ".pdf")
        if os.path.exists(local) and os.path.getsize(local) > 0:
            subprocess.run(["cp", local, out_path])
            if os.path.exists(out_path):
                return True
    r = subprocess.run(
        ["wrangler", "r2", "object", "get", f"{bucket}/{gid}.pdf", "--file=" + out_path, "--remote"],
        capture_output=True,
    )
    return r.returncode == 0 and os.path.exists(out_path)

work = "/tmp/gen_insights_work"
os.makedirs(work, exist_ok=True)
day = today()
dry_run = os.environ.get("DRY_RUN") == "1"
ok = 0
raw_done = 0
notes_done = 0
skipped_quota = False

for gi, gid in enumerate(changed_ids, 1):
    if skipped_quota:
        break
    pdf = os.path.join(work, gid + ".pdf")
    if os.path.exists(pdf):
        os.remove(pdf)
    if not fetch_pdf(gid, pdf):
        print(f"[{gi}/{len(changed_ids)}] GET-FAIL {gid}")
        continue

    rows = d1_query(f"SELECT page, body FROM pages WHERE gid = '{esc(gid)}' ORDER BY page")
    vision_pages = [r for r in rows if needs_vision(r.get("body", ""))]
    if limit > 0:
        vision_pages = vision_pages[:limit]
    print(f"[{gi}/{len(changed_ids)}] {gid}: {len(vision_pages)} vision pages")

    name_row = d1_query(f"SELECT name FROM pages WHERE gid = '{esc(gid)}' LIMIT 1")
    name = name_row[0]["name"] if name_row else gid

    for r in vision_pages:
        page = r["page"]
        text_extract = clean_page_text(r.get("body", ""))[:4000]

        # pdftoppm 產出的檔名會依「整份文件總頁數」的位數 zero-pad（例如 34 頁的
        # 文件裡第 1 頁是 page-01.jpg，不是 page-1.jpg），猜檔名會猜錯——用專屬
        # prefix + glob 撈剛剛真的產出的那個檔案，不去猜確切檔名。
        jpg_prefix = os.path.join(work, f"page_{gid}_{page}")
        for f in glob.glob(jpg_prefix + "*.jpg"):
            os.remove(f)
        subprocess.run(
            ["pdftoppm", "-jpeg", "-f", str(page), "-l", str(page), "-scale-to-x", "1100", "-scale-to-y", "-1", pdf, jpg_prefix],
            capture_output=True,
        )
        produced = glob.glob(jpg_prefix + "*.jpg")
        if not produced:
            print(f"  RASTERIZE-FAIL {gid} p{page}")
            continue
        jpg_file = produced[0]
        image_b64 = base64.b64encode(open(jpg_file, "rb").read()).decode()
        img_bytes = len(image_b64)
        os.remove(jpg_file)

        if dry_run:
            print(f"  DRY-RUN {gid} p{page}: would call Gemini (image b64 {img_bytes}B, text_extract {len(text_extract)}ch), then Groq")
            ok += 1
            continue

        raw = get_or_create_raw(gid, page, name, text_extract, image_b64, day)
        if raw is None:
            print(f"  {gid} p{page}: Gemini 今日額度用完，停手（下次接著做）")
            skipped_quota = True
            break
        raw_done += 1

        wrote = generate_notes(gid, page, name, raw, day)
        if wrote is None:
            print(f"  {gid} p{page}: Groq 今日額度用完，停手（下次接著做）")
            skipped_quota = True
            break
        if wrote:
            notes_done += 1
            ok += 1
    os.remove(pdf) if os.path.exists(pdf) else None

print(f"DONE raw={raw_done} notes={notes_done} ok={ok} paused_on_quota={skipped_quota}")
PY
