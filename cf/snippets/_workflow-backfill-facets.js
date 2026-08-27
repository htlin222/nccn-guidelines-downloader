export const meta = {
  name: 'backfill-facets',
  description: 'Fill in facet axes that were left empty because the vocabulary lacked the values',
  phases: [{ title: 'Backfill', detail: 'one agent per guideline' }],
}

const CF = '/Users/htlin/oncologist-snippets/NCCN/cf'

const OUT = {
  type: 'object',
  properties: {
    gid: { type: 'string' },
    files: { type: 'integer', description: 'files whose facets changed' },
    added: { type: 'integer', description: 'facet values added in total' },
    verified: { type: 'boolean' },
    skipped: { type: 'array', items: { type: 'string' },
               description: 'values the page clearly needed but the vocabulary still lacks' },
  },
  required: ['gid', 'files', 'added', 'verified', 'skipped'],
  additionalProperties: false,
}

const prompt = (gid) => `Backfill the facet axes in every checklist for the NCCN ${gid} guideline.

Working directory: ${CF}

Background: these files were written when snippets/_vocab.json only carried breast
cancer values, so biomarker and histology were left empty on almost every page —
which means those checklists cannot be found by a search like "colon MSI-H" or
"lung EGFR", and nothing reports an error. The vocabulary has since been widened.

For each file in snippets/${gid}/*.md:

1. Read the source: snippets/_src/${gid}/<REF>.txt
2. Read the current [facets] table in the file's frontmatter
3. Add the axes that the page genuinely concerns, using ONLY values that exist in
   snippets/_vocab.json

Change nothing except the [facets] table. Do not touch the body, the variables, or
any other frontmatter field.

The judgement to make on each axis:

- biomarker — add it only when the page's decisions actually branch on that marker.
  A page that merely mentions testing for KRAS in passing does not get a kras facet;
  a page whose treatment arms differ by dMMR vs pMMR does.
- histology — add it when the page is specific to a histology (adenocarcinoma,
  squamous, small-cell, GIST ...). A page that applies to the disease generally
  should have no histology axis at all, or "any" if it explicitly says so.
- stage — the stages the page's entry criteria cover.
- timepoint — the step in the pathway this page decides. prevention, screening and
  diagnosis now exist as values.

Leaving an axis out is correct and common. Filling it with a value the page does not
actually turn on is worse than leaving it empty, because it puts the page into search
results where it does not belong — and a clinician who opens a checklist that turns
out not to apply to their patient stops trusting the whole set.

If a page clearly needs a value that snippets/_vocab.json still lacks, leave the axis
out and report that value in "skipped". Do not invent a value.

When done, run:
  cd ${CF} && python3 verify_snippets.py snippets/${gid}/*.md
It must print all OK. The dictionary gate will reject any value not in the vocabulary.

Return the guideline id, how many files you changed, how many facet values you added
in total, whether verify passes, and any values you had to skip.`

const gids = args || []
log(`backfilling ${gids.join(', ')}`)

const out = await parallel(
  gids.map((g) => () => agent(prompt(g), { label: `facets:${g}`, phase: 'Backfill', schema: OUT })),
)

const done = out.filter(Boolean)
return {
  results: done,
  totalAdded: done.reduce((n, x) => n + (x.added || 0), 0),
  allVerified: done.every((x) => x.verified),
  vocabularyStillMissing: [...new Set(done.flatMap((x) => x.skipped || []))],
}
