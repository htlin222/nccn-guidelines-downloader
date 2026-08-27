export const meta = {
  name: 'nccn-snippets',
  description: 'Generate NCCN clinic checklists, then audit each against its source',
  phases: [
    { title: 'Generate', detail: 'one agent per NCCN decision node' },
    { title: 'Audit', detail: 'adversarial check: every line must trace to the source page' },
  ],
}

const CF = '/Users/htlin/oncologist-snippets/NCCN/cf'

const RESULT = {
  type: 'object',
  properties: {
    ref: { type: 'string' },
    ok: { type: 'boolean' },
    lines: { type: 'integer' },
    note: { type: 'string', description: 'one short sentence: what was tricky, or why it failed' },
  },
  required: ['ref', 'ok', 'note'],
  additionalProperties: false,
}

const AUDIT = {
  type: 'object',
  properties: {
    ref: { type: 'string' },
    removed: { type: 'integer', description: 'lines deleted because the source did not support them' },
    fixed: { type: 'integer', description: 'lines corrected against the source' },
    verified: { type: 'boolean', description: 'verify_snippets.py passes after the edits' },
    findings: { type: 'array', items: { type: 'string' }, description: 'each unsupported claim found, quoted' },
  },
  required: ['ref', 'removed', 'fixed', 'verified', 'findings'],
  additionalProperties: false,
}

const gen = (gid, ref) => `You are writing ONE outpatient checklist file for the NCCN ${gid} guideline.

Working directory: ${CF}

Read these first, in this order:
1. snippets/SPEC.md — the format and content rules. They are hard rules, not suggestions.
2. snippets/breast/BINV-12.md — the golden example (from the breast guideline;
   copy its shape, not its content). Match its shape exactly.
3. snippets/_src/${gid}/${ref}.txt — YOUR SOURCE. The full page text including the
   footnotes at the bottom. The header lines give you gid, ref, page, title.

Then write snippets/${gid}/${ref}.md.

The single most important rule: WRITE ONLY WHAT IS IN YOUR SOURCE FILE.
Not what you know to be standard oncology practice. Not what a careful clinician
would also do. If the page does not say it, it does not go in the file. A missing
item costs far less than an invented one, because the whole value of this file is
that it IS that NCCN page.

The footnotes matter more than they look. NCCN routinely puts the decisive
condition in a footnote (marked a, b, tt, uu, vv ...) rather than in the diagram.
Those footnotes are in your source file. Read them and fold each one into the
checklist item it qualifies — do not leave them as a separate section, and do not
drop them.

Break prose into atoms. A sentence like "axillary assessment with exam, axillary
ultrasound unless prior MRI demonstrated negative nodes, percutaneous biopsy of
suspicious nodes" must become nested items, because a clinician scanning a list
sees a missing box but does not see a missing clause.

Formatting, from SPEC.md — all mandatory:
- English only
- Only "#" headings, never "##"
- Nested lists, 4 spaces per level
- No ** bold, no * italics
- Blanks are always: ___ (variable_name), declared in [[variables]]
- see_also goes BEFORE the [facets] table (TOML would swallow it otherwise)
- facet values must come from snippets/_vocab.json — omit an axis rather than guess

When the file is written, run:
  cd ${CF} && python3 verify_snippets.py snippets/${gid}/${ref}.md
Fix whatever it reports and run it again. Keep going until it prints OK.
If a check keeps failing because the source genuinely lacks something, delete the
offending line rather than inventing support for it.

Return the ref, whether verify passes, the line count of the file, and one short
sentence about anything tricky on this page.`

const audit = (gid, ref) => `Adversarial audit of ONE checklist file. Assume it contains
something that is not in its source, and find it.

Working directory: ${CF}

Compare, line by line:
  snippets/${gid}/${ref}.md          — the checklist
  snippets/_src/${gid}/${ref}.txt    — the ONLY thing that may justify a line

For every clinical statement in the checklist, locate the words in the source that
support it. Watch specifically for:
- Steps that are standard practice but absent from this page (port placement,
  baseline cardiac echo, distress screening, "consider referral to ...", consent).
  These are the most likely additions and the hardest to notice, because they read
  as obviously correct.
- Conditions that were dropped: an item that the source qualifies with "unless",
  "if", "only for", or a category label, but the checklist states unconditionally.
- Footnote content that never made it in. Scan the footnotes at the end of the
  source and confirm each one appears somewhere in the checklist.
- Numbers, thresholds, drug names and category labels that differ from the source.
- Cross references (e.g. BINV-A, COL-B) pointing somewhere the source does not point.

Be strict about additions and strict about dropped conditions. Do not flag pure
rewording — the checklist is allowed to restructure prose into nested items, and it
is allowed to use plain wording for the same fact.

Edit the file directly:
- delete any line the source does not support
- restore any condition that was dropped
- add any footnote condition that is missing, attached to the item it qualifies

Preserve the format rules (no ##, no bold, 4-space nesting, ___ (name) blanks).

Then run:
  cd ${CF} && python3 verify_snippets.py snippets/${gid}/${ref}.md
and make sure it still prints OK.

Return counts of what you removed and fixed, whether verify passes, and quote each
unsupported claim you found. If you found nothing, say so with an empty findings
list — do not invent problems to look thorough.`

// args 是 ["colon/COL-1", "nscl/NSCL-2", ...]，一次可以跨多份指引
const items = (args || []).map((s) => {
  const i = s.indexOf('/')
  return i < 0 ? { gid: 'breast', ref: s } : { gid: s.slice(0, i), ref: s.slice(i + 1) }
})
log(`${items.length} refs across ${new Set(items.map((x) => x.gid)).size} guidelines`)

const out = await pipeline(
  items,
  (it) => agent(gen(it.gid, it.ref), { label: `gen:${it.gid}/${it.ref}`, phase: 'Generate', schema: RESULT }),
  (res, it) => agent(audit(it.gid, it.ref), { label: `audit:${it.gid}/${it.ref}`, phase: 'Audit', schema: AUDIT })
      .then((a) => ({ gid: it.gid, ref: it.ref, gen: res, audit: a })),
)

const done = out.filter(Boolean)
const id = (x) => `${x.gid}/${x.ref}`
const clean = done.filter((x) => x.audit && x.audit.verified)
const withFindings = done.filter((x) => x.audit && x.audit.findings && x.audit.findings.length)

log(`verified: ${clean.length}/${items.length}`)
log(`files the audit had to correct: ${withFindings.length}`)

return {
  verified: clean.map(id),
  failed: done.filter((x) => !(x.audit && x.audit.verified)).map(id),
  missing: items.filter((it) => !done.some((x) => x.gid === it.gid && x.ref === it.ref)).map((it) => `${it.gid}/${it.ref}`),
  findings: withFindings.map((x) => ({ ref: id(x), removed: x.audit.removed, fixed: x.audit.fixed, findings: x.audit.findings })),
  notes: done.map((x) => ({ ref: id(x), note: x.gen && x.gen.note })),
}
