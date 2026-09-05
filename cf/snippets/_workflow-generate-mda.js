export const meta = {
  name: 'mda-snippets',
  description: 'Generate MD Anderson clinic checklists (one per algorithm), then audit each against its source',
  phases: [
    { title: 'Generate', detail: 'one agent per MD Anderson algorithm' },
    { title: 'Audit', detail: 'adversarial check: every line must trace to the source pages' },
  ],
}

const CF = '/Users/htlin/oncologist-snippets/NCCN/cf'

// 這支跟 _workflow-generate.js（NCCN）分開，不是共用一支加 if/else，因為兩邊
// 的素材形狀本質不同：
//
//   NCCN 每一頁自帶編號（BINV-12），一頁一個決策節點，節點之間互相指來指去，
//   dump_snippet_src.sh 把「決策節點」跟「PDF 的頁」畫上等號。
//
//   MD Anderson 完全沒有頁內編號（掃過全部 892 頁確認：唯一像 ref 的字串是
//   SGLT-2、IL-6 這類藥名/標記，不是節點碼）。一份演算法是一條連續的多頁流程，
//   所以這裡的單位是「一個 gid = 一份 snippet」，ref 固定叫 ALGO-1
//   （dump_snippet_src_mda.sh 產生），不是「一個 gid 底下很多個 ref」。
//
// 沒有黃金範例可以參照——這是第一批。SPEC.md 的格式硬規則照樣適用（純文字、
// 只用 #、4 空格縮排、___ (name) 變數槽），內容規則的「只寫來源有的」也照樣
// 適用，但章節怎麼切、frontmatter 怎麼填，這裡直接寫清楚而不是指去讀某個範例檔。

const RESULT = {
  type: 'object',
  properties: {
    gid: { type: 'string' },
    ok: { type: 'boolean' },
    lines: { type: 'integer' },
    note: { type: 'string', description: 'one short sentence: what was tricky, or why it failed' },
  },
  required: ['gid', 'ok', 'note'],
  additionalProperties: false,
}

const AUDIT = {
  type: 'object',
  properties: {
    gid: { type: 'string' },
    removed: { type: 'integer', description: 'lines deleted because the source did not support them' },
    fixed: { type: 'integer', description: 'lines corrected against the source' },
    verified: { type: 'boolean', description: 'verify_snippets.py passes after the edits' },
    findings: { type: 'array', items: { type: 'string' }, description: 'each unsupported claim found, quoted' },
  },
  required: ['gid', 'removed', 'fixed', 'verified', 'findings'],
  additionalProperties: false,
}

const gen = (gid) => `You are writing ONE outpatient clinic checklist file for the MD Anderson
algorithm "${gid}". This guideline family works differently from NCCN — read
this whole prompt, there is no golden example file to copy for MDA yet (this is
one of the first ones).

Working directory: ${CF}

Read these first:
1. snippets/SPEC.md — the FORMAT rules are hard rules and apply unchanged
   (English only, only "#" headings, 4-space nesting, no ** or *, blanks are
   ___ (name), values must come from snippets/_vocab.json). Ignore SPEC's
   NCCN-specific parts (nccn_version meaning, see_also, kind-by-ref-suffix) —
   the differences for MDA are spelled out below.
2. snippets/_src/${gid}/ALGO-1.txt — YOUR ONLY SOURCE. The frontmatter-style
   header gives you mda_version and mda_date (MD Anderson's own version/approval
   date, not NCCN's). The body is the ENTIRE algorithm, every PDF page in order,
   marked "=== PAGE N ===".

Then write snippets/${gid}/ALGO-1.md.

WHAT MAKES MDA DIFFERENT FROM NCCN:

- One file covers the WHOLE algorithm (every page), not one page. Break it into
  "#" sections that mirror the algorithm's OWN structure — assessment, risk
  stratification, each treatment branch, appendices with their own scoring
  systems — not a fixed template. Look at how the source itself is organized
  (many MDA algorithms have their own table of contents on page 1 — use it as
  a guide to what the real sections are, but do not transcribe the table of
  contents itself as content).

- SKIP pages that carry no clinical content: a leading table-of-contents page,
  "Suggested Readings" / bibliography pages, and "Development Credits" pages
  (lists of physician names and departments who wrote the algorithm). None of
  that belongs in a clinic checklist. Appendices with actual scoring systems or
  criteria (e.g. a bleeding-risk score, a Child-Pugh table) DO belong — those are
  clinical content, just fold them in as their own section near the branch that
  uses them.

- No footnote-letter convention like NCCN's a/b/tt/uu. MD Anderson's PDFs mark
  footnotes with plain numbers (1, 2, 3...) that reset per page — treat each one
  the same way you would an NCCN footnote: find the number in the body, find its
  definition (usually right after, on the same extracted page block), and fold
  the qualifying detail into the checklist item it belongs to, not into a
  separate section.

- No see_also. There is no cross-reference system between MD Anderson algorithms
  yet (unlike NCCN, nothing here points MDA algorithms at each other), so leave
  see_also out of the frontmatter entirely rather than inventing one.

- kind is always "decision" — do not write "kind:" in frontmatter, it is
  inferred from the ref suffix same as NCCN (ALGO-1 ends in a digit).

- Frontmatter version fields: MD Anderson has no "NCCN Guidelines Version"
  string, but the D1 column that tracks staleness is still named after it.
  Copy the source header's mda_version into nccn_version verbatim (e.g.
  mda_version: V8  ->  nccn_version = "V8") and mda_date into nccn_date. If
  mda_date is empty in the source header (some MD Anderson pages phrase the
  approval line slightly differently and the extractor misses it — this is a
  known, pre-existing gap, not something to fix here), leave nccn_date out of
  the frontmatter rather than inventing a date.

- facets: disease = "${gid}" always (same convention as NCCN — the axis auto-
  covers any gid, no dictionary change needed). Only add other axes
  (biomarker/timepoint/stage/etc, values from snippets/_vocab.json) if the
  algorithm genuinely turns on one — most MDA algorithms are triage/management
  protocols with no cancer-stage or biomarker branching, so leave those out
  rather than force a fit.

- title: one sentence describing what this algorithm decides, same as NCCN.

WHAT STAYS THE SAME AS NCCN — still the single most important rule:

WRITE ONLY WHAT IS IN YOUR SOURCE FILE. Not what you know to be standard
practice. Not what a careful clinician would also do. A missing item costs far
less than an invented one, because the whole value of this file is that it IS
this algorithm.

Break prose into atoms — the same PDF-column-interleaving problems that affect
NCCN's extracted text affect MD Anderson's too (multi-column flowcharts extract
as run-on text); reconstruct the actual branching logic from the words, don't
just re-flow the raw text into bullets.

When the file is written, run:
  cd ${CF} && python3 verify_snippets.py snippets/${gid}/ALGO-1.md
Fix whatever it reports and run it again. Keep going until it prints OK.
If a check keeps failing because the source genuinely lacks something, delete the
offending line rather than inventing support for it.

Return the gid, whether verify passes, the line count of the file, and one short
sentence about anything tricky in this algorithm (especially: did the source
have a page-1 table of contents you used as a structure guide, and how many
"# " sections did you end up with).`

const audit = (gid) => `Adversarial audit of ONE MD Anderson checklist file. Assume it
contains something that is not in its source, and find it.

Working directory: ${CF}

Compare, section by section:
  snippets/${gid}/ALGO-1.md          — the checklist (the WHOLE algorithm)
  snippets/_src/${gid}/ALGO-1.txt    — the ONLY thing that may justify a line
                                        (every page of the algorithm, marked
                                        === PAGE N ===)

For every clinical statement in the checklist, locate the words in the source
page(s) that support it. Watch specifically for:

- Steps that are standard practice but absent from this algorithm (consent,
  baseline labs not actually listed, "consider referral to ...", monitoring
  intervals not stated). These read as obviously correct, which is exactly why
  they are the easiest additions to miss.
- Conditions dropped: an item the source qualifies with "if", "unless", a
  numeric threshold, or a named exception, but the checklist states
  unconditionally.
- Numbered footnotes (MD Anderson uses plain 1/2/3, resetting per page — not
  NCCN's a/b/tt) that never made it into the checklist, or got attached to the
  wrong item.
- Numbers, thresholds, and drug names that differ from the source.
- Content from a page that should have been skipped: table-of-contents lines,
  "Suggested Readings" citations, or "Development Credits" names/departments
  showing up as if they were clinical steps. These do not belong in the file at
  all — delete them, do not just reword them.
- A scoring system or appendix (e.g. a bleeding-risk table) that got summarized
  away instead of transcribed as its own section, if the main pathway actually
  depends on it.
- Frontmatter: nccn_version/nccn_date should match the source header's
  mda_version/mda_date exactly. see_also should not be present. kind should not
  be present (inferred from ref suffix).

Be strict about additions and strict about dropped conditions. Do not flag pure
rewording — the checklist is allowed to restructure prose into nested items and
choose its own section breakdown, as long as every section maps to something the
source actually contains.

Edit the file directly:
- delete any line the source does not support, including any leftover TOC /
  readings / credits content
- restore any condition that was dropped
- add any footnote condition that is missing, attached to the item it qualifies

Preserve the format rules (no ##, no bold, 4-space nesting, ___ (name) blanks).

Then run:
  cd ${CF} && python3 verify_snippets.py snippets/${gid}/ALGO-1.md
and make sure it still prints OK.

Return counts of what you removed and fixed, whether verify passes, and quote each
unsupported claim you found. If you found nothing, say so with an empty findings
list — do not invent problems to look thorough.`

// args 是 ["mda-anemia", "mda-atrial-fibrillation", ...]，一個 gid 就是一份 snippet
const gids = (args || [])

log(`${gids.length} MD Anderson algorithms`)

const MODEL = 'sonnet'

const out = await pipeline(
  gids,
  (gid) => agent(gen(gid), { label: `gen:${gid}`, phase: 'Generate', schema: RESULT, model: MODEL }),
  (res, gid) => agent(audit(gid), { label: `audit:${gid}`, phase: 'Audit', schema: AUDIT, model: MODEL })
      .then((a) => ({ gid, gen: res, audit: a })),
)

const done = out.filter(Boolean)
const clean = done.filter((x) => x.audit && x.audit.verified)
const withFindings = done.filter((x) => x.audit && x.audit.findings && x.audit.findings.length)

log(`verified: ${clean.length}/${gids.length}`)
log(`files the audit had to correct: ${withFindings.length}`)

return {
  verified: clean.map((x) => x.gid),
  failed: done.filter((x) => !(x.audit && x.audit.verified)).map((x) => x.gid),
  missing: gids.filter((gid) => !done.some((x) => x.gid === gid)),
  findings: withFindings.map((x) => ({ gid: x.gid, removed: x.audit.removed, fixed: x.audit.fixed, findings: x.audit.findings })),
  notes: done.map((x) => ({ gid: x.gid, note: x.gen && x.gen.note })),
}
