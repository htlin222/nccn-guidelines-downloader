# CLAUDE.md — deploying this repo

Operational runbook for the Cloudflare environment and the two GitHub Actions.
Prose docs live in [`README.md`](README.md) (what it is) and
[`cf/README.md`](cf/README.md) (how each piece works). This file is the checklist
you follow to stand it up, and the first place to look when something breaks.

Everything runs from `cf/`. `wrangler.jsonc` is the source of truth for bindings.

---

## 0. What has to exist

| Thing | Name | Where it is declared |
|---|---|---|
| Worker | `nccn-download` | `cf/wrangler.jsonc` |
| KV namespace | `NCCN_KV` → binding `NCCN_KV` | `wrangler.jsonc` `kv_namespaces` |
| R2 bucket | `nccn-pdfs` → binding `PDFS` | `wrangler.jsonc` `r2_buckets` |
| D1 database | `nccn-search` → binding `DB` | `wrangler.jsonc` `d1_databases` |
| Workers AI | binding `AI` | `wrangler.jsonc` `ai` |
| Custom domain | `nccn.hsiehting.com` | `wrangler.jsonc` `routes` |
| Cron trigger | `0 3 * * *` (daily 03:00 UTC) | `wrangler.jsonc` `triggers.crons` |
| Worker secret | `ANTIGRAVITY_API_KEY` (optional) | `wrangler secret put` |
| Repo secret | `CLOUDFLARE_API_TOKEN` | GitHub → Settings → Secrets |
| Access application | gates the custom domain | Cloudflare Zero Trust |
| Access application (bypass) | opens **only** `/api/v1` for the skill's token | Cloudflare Zero Trust |

The ids in `wrangler.jsonc` are already filled in for the existing account. On a
fresh account, create the resources first and replace them:

```bash
cd cf
wrangler kv namespace create NCCN_KV     # → paste the id into wrangler.jsonc
wrangler r2 bucket create nccn-pdfs
wrangler d1 create nccn-search           # → paste database_id into wrangler.jsonc
```

---

## 1. The API token (the single most common cause of breakage)

One token does everything: local scripts, `deploy.sh`, and both Actions. It needs
**four** permissions — a token missing any one of them fails in a way that is easy
to misread as "the script did nothing".

| Permission | Needed by |
|---|---|
| Account → Workers Scripts → **Edit** | `wrangler deploy` |
| Account → Workers R2 Storage → **Edit** | every `wrangler r2 object` call |
| Account → D1 → **Edit** | `build_index.sh`, all `wrangler d1 execute` |
| Account → Workers KV Storage → **Edit** | reading `cron_health` / the cookie by hand |

Create it at **dash.cloudflare.com → My Profile → API Tokens → Create Token →
Custom token**. The "Edit Cloudflare Workers" template covers Scripts + R2 + KV
but **not D1** — add D1 by hand or the search index rebuild silently reads nothing.

Store it in two places:

```bash
# 1. locally — .env at the REPO ROOT (not cf/.env); every script sources ../.env
cat >> .env <<'EOF'
CLOUDFLARE_API_TOKEN=...
CLOUDFLARE_ACCOUNT_ID=3a77813251d473c40d8873a59f6c0e80
EOF

# 2. on GitHub — the Actions read it from here
gh secret set CLOUDFLARE_API_TOKEN
```

Verify it reaches all three bindings before trusting it:

```bash
cd cf && set -a && . ../.env && set +a
wrangler r2 object get nccn-pdfs/meta/versions.json --remote --file=/dev/null
wrangler d1 execute nccn-search --remote --command "SELECT 1"
wrangler kv key get cookie_meta --binding NCCN_KV --remote
```

> Do not fall back to `wrangler login` OAuth for deploys. OAuth credentials get
> revoked and then deploys fail with a bare `Invalid access token`; a scoped API
> token does not. `deploy.sh` warns if the token is missing.

---

## 2. One-time D1 migrations

Five SQL files, deliberately separate. Run each **once**:

```bash
cd cf && set -a && . ../.env && set +a
wrangler d1 execute nccn-search --remote --file=sql/schema.sql    # FTS5 `pages`
wrangler d1 execute nccn-search --remote --file=sql/insights.sql  # AI cache + quota
wrangler d1 execute nccn-search --remote --file=sql/marks.sql     # bookmarks + stars
wrangler d1 execute nccn-search --remote --file=sql/notify.sql    # notification centre
wrangler d1 execute nccn-search --remote --file=sql/api.sql       # API keys + page_text
```

`schema.sql` starts with `DROP TABLE IF EXISTS pages` — it is the search index's
own schema and gets re-derived on every rebuild. The other four are
`CREATE TABLE IF NOT EXISTS` on purpose: **an index rebuild must never wipe the
AI cache, anything the user saved, an unread alert, or an issued API key.** Never
merge them into `schema.sql`.

`api.sql` is the one exception that is half-derived: `page_text` *is* rebuilt by
`build_index.sh` (into `page_text_new`, promoted alongside `pages`), while
`api_keys` in the same file must never be touched. `build_index.sh` pulls out only
the `page_text` CREATE block by `awk` and refuses to run if `api_keys` shows up in
what it extracted.

---

## 3. Access (the login gate)

The Worker itself has no auth — Cloudflare Access in front of the custom domain is
the whole security model. Manage it from the CLI with the `cf-gate` skill, or in
Zero Trust → Access → Applications:

- Application domain: `nccn.hsiehting.com`
- Policy: Allow → Emails → your address (email OTP, no password)

The Worker reads `cf-access-authenticated-user-email` and shows it in the footer.
If that header is absent the site is unprotected — check before pointing anyone at it.

**Except `/api/v1`.** The Claude Code skill authenticates with a bearer token, so
it needs a path Access lets through. A *second* application, with a **Bypass
(Everyone)** policy, covers exactly that prefix:

- Application domain: `nccn.hsiehting.com`, path `api/v1`
- Policy: **Bypass** → Everyone

Access matches the most specific path, so `/api/v1/*` reaches the Worker while
everything else still demands a login. Two things to keep straight:

- The **path must stay `api/v1`**. Widening it to `api` would expose
  `/api/cookie` (writes the NCCN session cookie) and `/api/keys` (issues and
  revokes credentials) to the open internet.
- **`/api/v1` is the only unauthenticated surface this site has.** Everything
  behind it is guarded by the token alone — see §5.6.

---

## 4. Deploy

```bash
cd cf && pnpm install
pnpm test            # 289 tests — pure helpers, plus an end-to-end pass over /api/v1
pnpm run deploy      # = bash deploy.sh
```

Use `pnpm run deploy`, not `pnpm deploy` — pnpm has a built-in `deploy` for
workspaces that shadows the script and fails with `ERR_PNPM_CANNOT_DEPLOY`.

`deploy.sh` stamps `BUILD_TIME` into `src/lib/constants.js` (shown in the footer,
so you can tell at a glance which build is live), sources `../.env`, and runs
`wrangler deploy`.

Pushing to `main` does the same thing via **`.github/workflows/deploy.yml`** —
it installs deps, runs the tests, refuses to continue if `CLOUDFLARE_API_TOKEN` is
empty, then deploys. Because `deploy.sh` rewrites `constants.js`, the CI checkout
is dirty afterwards; that is expected and not committed back.

---

## 5. The three schedules

### Daily — the Worker's own cron (`0 3 * * *`)

Re-pulls the **3 stalest** PDFs from NCCN into `raw/`. Not a round-robin cursor:
it ranks by the `uploaded` time of what is actually in R2, so a fetch that fails
is still the stalest tomorrow and gets retried until it lands, and a missing
object is picked first. An id that fails 3 runs in a row is parked for a cycle so
it cannot starve the queue (`nextCronState`).

Check it:

```bash
cd cf && set -a && . ../.env && set +a
wrangler kv key get cron_health --binding NCCN_KV --remote   # {at, ok, fail, ids, errors}
wrangler tail nccn-download                                  # watch live
```

The home page shows the same record as a status chip in the settings sheet, and
puts a warning dot on the gear when the last run failed, partly failed, or has not
run in 2 days. **A totally failed run logs via `console.error`** so it shows up as
error-level in Workers Observability — that is the thing to alert on.

KV only ever holds the *last* run, so it cannot answer "was it also broken last
week?". The same record is therefore written a second time, as a row in the
notification centre (§5.5), which keeps history and read/unread state.

Nearly every real failure is an expired NCCN cookie. Fix it in the settings sheet
on the home page (paste the `Http Header value` from the cookie-cook extension),
or:

```bash
wrangler kv key put cookie "ASP.NET_SessionId=…" --binding NCCN_KV --remote
```

Test the cookie without waiting for the cron:

```bash
curl -sI -H "cookie: $(wrangler kv key get cookie --binding NCCN_KV --remote)" \
  https://www.nccn.org/professionals/physician_gls/pdf/aml.pdf | head -3
# want: HTTP/2 200 + content-type: application/pdf
# a login HTML page back = the cookie is dead
```

### Weekly — `.github/workflows/update-versions.yml` (Mondays 04:17 UTC)

Rebuilds everything derived from the PDFs sitting in R2. It never touches NCCN.
Order matters; each step is a script in `cf/`:

1. **Check the token** — proves it can reach both R2 and D1, and fails the run on
   step 1 rather than doing five useless passes.
2. `gen_clean.sh` → banner-free `<id>.pdf` at the bucket root + `meta/clean.json`
3. `gen_versions.sh` → `meta/versions.json` (the version badges)
4. `gen_thumbs.sh` → `thumb/<id>.webp`
5. `build_index.sh` → the D1 FTS5 index
6. `build_toc.sh` → `meta/toc/<id>.json`
7. `build_updates.sh` → `meta/updates/<id>.json` (what changed in this version)
8. **Verify the result** — index row count, `page_text` row count matching it, and
   that both manifests cover the catalogue. A step can pass on its own terms and
   still leave the site wrong.
9. **Bump `api:gen`** — one KV write that invalidates every `/api/v1` cache entry
   at once. It runs *after* verification on purpose: dropping the cache first and
   only then discovering the rebuild was broken trades a good cache for bad data.

The last two steps feed the notification centre: `archive_notify.sh` rolls
anything older than 90 days off to R2, and a final `if: always()` step posts the
run's own outcome — green *or* red — so a silently-broken weekly rebuild is
visible on the home page.

Run it by hand: `gh workflow run update-versions.yml`, then
`gh run watch $(gh run list --workflow=update-versions.yml --limit 1 --json databaseId -q '.[0].databaseId')`.

Steps 3–5 (`gen_versions.sh`, `gen_thumbs.sh`, `build_index.sh`) cover **both**
catalogues. Steps 2, 6 and 7 (`gen_clean.sh`, `build_toc.sh`, `build_updates.sh`)
are NCCN-only by design — see §5.7.

**`gen_clean.sh` runs first, and that ordering is load-bearing.** It is the step
that writes the root object `<id>.pdf`; every step after it derives from that
object. It used to run *last*, which meant each week's badges, thumbnails, search
index, TOC and updates all described the **previous** week's PDF — measured:
breast shipped v6.2026 in the 2026-08-03 run and `versions.json` still said
v5.2026 until a manual dispatch on 08-06 happened to catch up.

Reordering alone is not enough. R2 reads sit behind a ~4 hour cache (§6), so a
downstream step that re-reads the object `gen_clean.sh` just overwrote can get
the pre-write bytes back — the same bug wearing a different hat. So `gen_clean.sh`
also leaves each stripped PDF in `CLEAN_DIR`, and every downstream step prefers
that local file (`fetch_clean` in `cf/lib.sh`; the same rule is reimplemented in
`build_index.sh`'s Python half). It saves four full-catalogue downloads as well.

Ids that `gen_clean.sh` **skipped** (source sha unchanged) or **failed** to upload
deliberately do not land in `CLEAN_DIR`, so those fall back to R2. That is
correct, not a gap: what is live for those ids *is* the older object, and derived
data must describe what readers actually get.

That is also why this step alone carries `continue-on-error: true`. Its guard is
`fail -eq 0` — **any** single bad id makes the whole script non-zero. That was
harmless when it ran last; running first, an expired NCCN cookie (which writes a
login page into `raw/`, and `gen_clean` correctly rejects as `NOT-PDF`) would
otherwise halt the entire week's rebuild. The run still goes red: `Verify` checks
`steps.clean.outcome` before anything else.

### Monthly — `.github/workflows/update-mda.yml` (1st of the month, 05:23 UTC)

Re-pulls **every** MD Anderson algorithm into R2, and refreshes the catalogue
from the upstream index page. Not a stalest-N queue like the daily cron, because
the reason that queue exists does not apply here: no cookie can expire, and a
full pull of 91 public PDFs is cheap.

It does **not** rebuild thumbnails, versions or the search index. Those belong to
the weekly run, so a freshly-pulled algorithm becomes visible to readers on the
following Monday — the same contract NCCN already has.

The one step worth understanding is the second: `gen_mda_catalogue.sh` rewrites
`cf/algorithms.json` and `cf/src/data/algorithms.js`, and if either moved, the
workflow **commits them back to `main`**. The catalogue is compiled into the
Worker, so a new algorithm only reaches readers through a redeploy — that push
is what triggers `deploy.yml`. It is a deliberate chain, not a side effect, and
it is why this workflow (alone among the three) needs `permissions: contents:
write`.

```bash
gh workflow run update-mda.yml
cd cf && bash gen_mda_catalogue.sh --dry-run   # 目錄變了沒有，不寫檔
LIMIT=3 bash refresh_mda.sh                    # 抓三份試試（需要 R2 token）
```

---

## 5.5 The notification centre

The bell in the header. Answers one question: **is the cron still alive?**

Four kinds of event land in the D1 `notifications` table:

| kind | written by | when |
|---|---|---|
| `cron` | Worker, `refreshBatch` → `notifyCron` | every daily run, info / warn / error |
| `cookie` | Worker, same call | only when a run gets **nothing** through |
| `version` | `gen_versions.sh` | a guideline's `Version X.YYYY` changed |
| `ci` | `update-versions.yml`, final step | the weekly rebuild, green or red |

Three decisions worth not undoing:

- **CI writes to D1 directly, not through an HTTP endpoint.** The site is behind
  Cloudflare Access, so a webhook from a GitHub Action gets the login page. CI
  already holds a D1-Edit token, so `cf/notify.sh` just runs an INSERT.
- **The badge counts only `warn`/`error`.** A daily "3/3 完成" is an `info` row —
  it is the evidence the cron ran, but if it lit the badge the bell would glow
  every day and you would stop looking at it.
- **A repeated unread alert bumps its timestamp instead of inserting again**
  (`notify()` in `lib/notify.js`, mirrored in `notify.sh`). A cookie dead for five
  days is one problem, not five rows.

The one thing a cron cannot report is **not having run** — nothing writes that
row. So the sheet derives it client-side from the newest `cron` row
(`staleEvent`) and shows a synthetic error at the top after 2 days of silence.
That line, not any stored row, is the actual liveness check.

Look at it without the browser:

```bash
cd cf && set -a && . ../.env && set +a
wrangler d1 execute nccn-search --remote \
  --command "SELECT created, level, kind, title FROM notifications ORDER BY created DESC LIMIT 10"
bash notify.sh ci info "手動測試" '{"rows":0}'   # write one by hand
KEEP_DAYS=90 bash archive_notify.sh              # roll old rows to R2, then prune
```

Archived history is at `meta/notify/YYYY-MM.jsonl` in R2. `archive_notify.sh`
prunes a month from D1 **only** after that month's object writes successfully, so
a failed upload costs a retry, never the history.

Every script ends with `[ "$ok" -gt 0 ]` — a run where *nothing* succeeded goes
red. That guard exists because these scripts once reported success for weeks while
an empty `CLOUDFLARE_API_TOKEN` made every read a no-op.

`build_index.sh` builds into **staging tables** and only promotes them after the
row count clears `MIN_ROWS` (default 1000), so a failed or partial rebuild leaves
the live index serving. Set `LIMIT=N MIN_ROWS=…` for a dry run — with a low LIMIT
the guard will correctly refuse to promote. It now builds `pages` **and**
`page_text` from the same loop and promotes both in one batch; if their row counts
ever disagree it discards the whole thing, because search and `/api/v1/page`
reading different versions of a guideline is worse than not rebuilding.

---

## 5.6 The Claude Code skill (`/api/v1`)

A read-only, token-authenticated API, plus a `.skill` package that the settings
sheet mints on demand. Install it in Claude Code and Claude can read the
catalogue, a TOC, what changed in this version, page or section text, search the
whole corpus, and pull a PDF — **without logging in**.

### The three decisions that shape it

- **The token API is the only path Access lets through** (§3). Everything else,
  including the endpoints that issue and revoke tokens, stays behind SSO. The
  split is exactly the `/api/v1` prefix — see the warning in §3 before touching it.
- **The `.skill` is minted, not published.** It is a zip with the key baked into
  its `.env`, so it can never go to a GitHub release. `/api/skill.zip` builds one
  on the fly (`lib/zip.js` writes store-mode zip by hand — Workers has no zip
  writer, and a compression library is not worth 40 KB of text). Every download is
  a fresh, separately revocable key.
- **Plaintext keys never land anywhere.** D1 holds `sha256(key)` plus a 12-char
  prefix for identification. The plaintext exists once, in the response body.

### Endpoints

`GET /api/v1/{catalogue, toc/:id, updates/:id, page/:id?p=N|A-B, section/:id?ref=,
search?q=, pdf/:id, insights/:id}`, all with `Authorization: Bearer nccn_…`.

`page` reads `page_text` (primary key, `rows_read=1`) rather than the FTS5 `pages`
table — `gid`/`page` are UNINDEXED there, so a single-page lookup would scan all
10,670 rows and burn the daily D1 quota in ~500 calls.

### Caching

Four layers: isolate memory → `caches.default` (keyed on the URL *without* the
token, so all keys share one entry) → KV → D1/R2. Every KV key carries a
generation prefix (`api:<gen>:toc:aml`); CI bumps `api:gen` once per rebuild and
the whole cache goes stale at once, with 30-day TTLs clearing the orphans.

Hot entries slide: `getWithMetadata` carries the expiry, and an entry is only
rewritten once it has burned 30% of its life. A page you keep reading never
expires; one you stop reading is gone in 30 days; nothing is rewritten more than
once every nine days.

### Operating it

```bash
cd cf && set -a && . ../.env && set +a
wrangler d1 execute nccn-search --remote \
  --command "SELECT id, prefix, label, last_used, calls, revoked FROM api_keys ORDER BY id DESC"
wrangler kv key get api:gen --binding NCCN_KV --remote     # current cache generation
```

Revoking marks D1 and takes effect within ~10 seconds (measured: 8). D1 is the
only source of truth for whether a key is live — **key validation deliberately
does not use KV**, unlike everything else here.

That is not a style choice, it is a bug that shipped. The first version cached
the validation result in KV and deleted that entry on revoke, which looks
airtight. In production a revoked key kept working for over 24 seconds with D1
already marked and the KV entry already gone: KV reads have their own edge cache
and KV is eventually consistent, so "this key is dead" propagates on KV's
schedule, not yours. A cache layer can hold data; it must not hold *may this
caller in*. `test/apiflow.test.js` asserts nothing under `apikey:` is ever
written to KV.

| Symptom | Cause | Fix |
|---|---|---|
| Skill gets the Access login page as HTML | The bypass application is missing or its path is wrong | §3 — path must be `api/v1` |
| Every call 401s right after issuing a key | `sql/api.sql` was never run | §2 |
| `/page` and `/section` 404 on everything | `page_text` is empty — the index has not been rebuilt since this feature landed | run `build_index.sh`, or wait for Monday |
| Stale data after a rebuild | `api:gen` was not bumped (that CI step failed) | `wrangler kv key put api:gen "$(date +%s)" --binding NCCN_KV --remote` |
| `/updates/:id` 404s for one guideline | It ships no update pages, or uses an older heading | normal; `build_updates.log` says `no-updates` |

---

## 5.7 The MD Anderson module

The second source: **Clinical Management Algorithms** — 91 PDFs from
[mdanderson.org](https://www.mdanderson.org/for-physicians/clinical-tools-resources/clinical-practice-algorithms/clinical-management-algorithms.html),
in four categories, behind their own tab on the home page. Same R2, same D1
index, same pdf.js viewer.

### The four decisions that shape it

- **`mda-` namespaces every id.** Both catalogues contain `vte`, `pain` and
  `distress`, and every source shares one R2 root for `<id>.pdf`. Without the
  prefix the collision is not a lookup bug, it is one PDF overwriting another.
- **The id comes from the *filename*, never the title.** The upstream names are
  irregular in four different ways — some lack `-web`, one lives under
  `survivorship/` rather than `clinical-management/`, one contains `%20`. So the
  catalogue stores `file` verbatim (the path under `…/for-physicians/algorithms/`)
  and that string is the single fetch truth. Anything that reconstructs a URL
  from an id will 404 on exactly those few.
- **No cookie, and no `raw/` copy.** These PDFs are public and carry no
  disclaimer banner, so there is nothing for `gen_clean.sh` to strip and no
  reason to store the same bytes twice. `refresh_mda.sh` writes straight to the
  R2 root (`lib/pdf.js` `refreshKey`).
- **The catalogue is source, not a derived artifact.** It is bundled into the
  Worker, so the monthly workflow commits changes back to `main` (§5).

### In-document link navigation

The algorithms cross-reference each other, and the viewer turns those into local
navigation. `lib/view.js` `internalLinkId` is the whole rule:

| link in the PDF | becomes |
|---|---|
| `…/physician_gls/pdf/breast.pdf` | `/preview/breast` |
| `…/for-physicians/algorithms/clinical-management/clin-management-pert-web-algorithm.pdf` | `/preview/mda-pert` |
| `mdandersonorg.sharepoint.com/…` (hospital intranet) | left external |
| `…/algorithms/cancer-treatment/…` (the sibling family, not ingested) | left external |

The NCCN rule can slice the id out of the URL because the filename *is* the id.
The MDA rule **cannot**, and looks the path up in `ID_BY_FILE` instead — keyed on
the same `file` string used to fetch, so link resolution and fetching cannot
drift apart. Within-document jumps (`see Appendix A` → page 4) need no rule at
all: they are pdf.js `dest` annotations and the viewer already followed those.

### Operating it

```bash
cd cf
bash gen_mda_catalogue.sh --dry-run    # 索引頁動了沒有（列出新增／消失的 id）
python3 -c "import json;d=json.load(open('algorithms.json'));print(len(d))"
LIMIT=3 SLEEP=0 bash refresh_mda.sh    # 抓三份（需要 R2 token）
```

| Symptom | Cause | Fix |
|---|---|---|
| An algorithm's card says 未快取 forever | Its `file` no longer exists upstream | `bash gen_mda_catalogue.sh` — a renamed file shows up as one `-` and one `+` |
| A cross-reference inside a PDF opens mdanderson.org instead of staying on-site | That target is not in the catalogue (a `cancer-treatment` algorithm, or the catalogue is stale) | expected for `cancer-treatment`; otherwise regenerate the catalogue and redeploy |
| The MD Anderson tab is empty after a deploy | `src/data/algorithms.js` was not regenerated/committed | `bash gen_mda_catalogue.sh && pnpm run deploy` |
| `gen_mda_catalogue.sh` exits non-zero with "refusing to overwrite" | The index page returned something that parses to <50 entries (redesign, or an error page) | Look at it by hand before touching the guard — the guard is what stops a truncated catalogue retiring 40 PDFs |
| Cards show no version badge | `gen_versions.sh` has not run since these landed | wait for Monday, or run it |
| `versions.json` covers 90/91, never 91 | `mda-adult-blood` is a one-page placeholder upstream ("currently undergoing updates"), with no `Department of Clinical Effectiveness V<N>` footer to read | expected — leave it; it comes back on its own when MD Anderson republishes the algorithm |

---

## 5.8 Reconciling the NCCN catalogue with upstream

MD Anderson's catalogue regenerates itself every month (§5.7). **The NCCN one does
not** — `cf/guidelines.json` and its three copies are hand-written, so NCCN adding,
splitting or renaming a guideline is silent until somebody looks. In August 2026
that drift had reached seven missing guidelines, two that upstream had retired, and
three stale names. Nothing was red; `gen_versions.sh` just logged `NO-VERSION` twice
a week for a year.

There is no API. The listing lives in five category pages, and the PDF slug only
appears on each guideline's own detail page:

```bash
cd cf && set -a && . ../.env && set +a
CK=$(wrangler kv key get cookie --binding NCCN_KV --remote | tail -1)
UA='Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36'

# 1. every guideline NCCN currently ships (category_1..5 → 91 entries)
for c in 1 2 3 4 5; do curl -s -H "cookie: $CK" -A "$UA" "https://www.nccn.org/guidelines/category_$c"; done \
  | grep -oE 'guidelines-detail\?category=[0-9]+&(amp;)?id=[0-9]+"[^>]*>[^<]+'

# 2. the PDF slug for one of them — this is the only place it is written down
curl -s -H "cookie: $CK" -A "$UA" "https://www.nccn.org/guidelines/guidelines-detail?category=3&id=1548" \
  | grep -oE 'physician_gls/pdf/[a-z0-9_.-]+\.pdf' | sort -u
```

Four things worth knowing before doing this again:

- **Do not guess slugs.** Unauthenticated, NCCN answers **200 with a login page**
  for every path under `physician_gls/pdf/`, so a wrong guess is indistinguishable
  from a right one — eleven plausible names for `ici_tox` all came back 200. With
  the cookie, `content-type` separates them: `application/pdf` vs `text/html`.
- **Every guideline also exists as `<id>_blocks.pdf`** (`aml_blocks.pdf` too). The
  detail page points at the un-suffixed one, which is what the catalogue uses.
- **A retired guideline is not a 404.** It becomes a one-page notice PDF ("has been
  separated into…", 45–80 KB) with no `Version X.YYYY` stamp — which is exactly what
  `NO-VERSION` in `gen_versions.log` means. Two of those sat in the catalogue for
  months. `test/catalog.test.js` now fails if either id comes back.
- **An id can outlive its name.** `genetics_bopp` and `genetics_ceg` are acronyms of
  guideline scopes that NCCN widened; the ids were updated at the time, the display
  names were not, and nothing notices because a wrong name breaks nothing.

Once `guidelines.json` changes, all four copies must move together —
`src/data/guidelines.js`, `embed.json`, `nccn_dict.txt` — and `test/catalog.test.js`
is what enforces that. Then pull the new PDFs into **`raw/`** (never the root; §6)
and run `gen_clean.sh` so readers get them before the next Monday.

---

## 5.9 Clinic checklists (issue #4)

逐頁把 NCCN 的決策節點寫成門診核對清單：一個 ref 一個檔，`cf/snippets/<gid>/<ref>.md`。
單一真相在 git，D1（`snippets` / `snippet_facets` / `facet_alias`）是可查詢副本，
方向永遠是檔案 → D1。

**跨 session 的長工，接手看 [`cf/snippets/RESUME.md`](cf/snippets/RESUME.md)** ——
讀完那一頁就能接著做，不需要對話紀錄。狀態不落地：`snippets/<gid>/<ref>.md` 存在
就是做完，所以中斷不留待收拾的東西。

```bash
cd cf && bash snippets_status.sh          # 進度與待辦
python3 verify_snippets.py                # 四關
bash load_snippets.sh                     # 檔案 → D1（冪等，不覆寫 review）
```

三個決定值得知道：

- **facet 是受控詞彙，不是自由填的。** 放任的話同一個概念會生出 `stage III` /
  `III` / `cT3` 幾種寫法，檢索開始漏而且**靜默**——使用者只覺得「有時候找不到」。
  代價已經付過一次：頭兩批做完才發現 `_vocab.json` 只有乳癌的值，大腸癌與肺癌的
  biomarker 軸幾乎全空。開新癌別前先看字典夠不夠。
- **生成之後一定要跑對抗性審查。** 機械四關擋得住編出來的藥名與數字，擋不住
  「把 positive margins 寫成 margins」「把 ± pertuzumab 寫成 Add pertuzumab」
  「憑空生成一句總結規則」。這三類都實際發生過，全部四關通過。
- **`review` 欄位是人審的結論，重載不覆寫它。** 目前全是 NULL——機械關與對抗性
  審查都是模型，臨床把關還沒發生。

---

## 6. R2 layout

```
<id>.pdf            NCCN: banner-free copy — what /pdf/:id and /dl/:id serve
mda-<id>.pdf        MD Anderson: the untouched original (there is no banner to strip)
raw/<id>.pdf        untouched original from NCCN — what the daily cron writes
thumb/<id>.webp     first-page thumbnail (both sources)
meta/versions.json  {id: {v, d}} (both sources)
meta/clean.json     sha256 of each source, so gen_clean.sh can skip unchanged ids (NCCN only)
meta/toc/<id>.json  Discussion table of contents (NCCN only)
meta/updates/<id>.json  "Summary of the Guidelines Updates", parsed into items (NCCN only)
meta/notify/*.jsonl notifications older than 90 days, one month per object
asset/*.png         PWA icons
```

There is deliberately **no `raw/mda-*.pdf`**: `raw/` exists so `gen_clean.sh` has
an untouched source to strip NCCN's per-page disclaimer from, and MD Anderson's
PDFs carry no such banner. A second copy would be ~90 MB of R2 holding identical
bytes. `/pdf/mda-x?raw=1` therefore collapses to the root object rather than
404ing — the file it returns really is the original.

The cron writes **only** to `raw/`. The root object is produced by `gen_clean.sh`,
so a cron refresh can never put the banner back on a cleaned PDF — and it also
means a freshly-pulled PDF is not visible to readers until the next weekly run
(≤ 6 days).

**`/pdf/:id` is browser-cached for 24 h** (`private, max-age=86400,
stale-while-revalidate=604800`, plus R2's ETag and a 304 on `If-None-Match`).
These files are 5–80 MB and change once a week, and the old
`private, max-age=0, must-revalidate` re-downloaded the whole thing on every
single visit. Two consequences worth knowing before you go debugging:

- After a rebuild, a reader who already has a copy keeps seeing the old one for
  up to a day. That is intended. A hard reload (or the ETag revalidation, once
  `max-age` lapses) picks up the new bytes immediately.
- It is deliberately `private`, so the Cloudflare edge does **not** hold these
  PDFs. Flipping it to `public` would add a geographic win, but caching NCCN's
  copyrighted PDFs at the edge is a policy decision, not a performance one.

`/dl/:id` stays uncached on purpose — its filename carries the current date, and
a cached attachment would hand back a stale one.

Inspect an object's age without downloading it:

```bash
curl -sI -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
  "https://api.cloudflare.com/client/v4/accounts/$CLOUDFLARE_ACCOUNT_ID/r2/buckets/nccn-pdfs/objects/raw/aml.pdf" \
  | grep -i last-modified
```

> **Reads of a just-written object are cached for ~4 hours.** Both this API and
> `wrangler r2 object get` sit behind it, so right after a rewrite you can get
> the old bytes and the old `last-modified` back. Do not conclude a write failed
> from a stale timestamp — check the job log for the `OK <id>` line instead.
> (This is also why `build_index.sh` strips the NCCN banner from the extracted
> *text* rather than trusting the object to already be banner-free.)

---

## 7. Troubleshooting, by symptom

| Symptom | Cause | Fix |
|---|---|---|
| Preview returns 502 | Cookie expired | Re-paste the cookie (§5) |
| Gear has a warning dot | Cookie missing, or the last cron failed / is stale | Open settings — the chip says which |
| Search returns nothing | Index rebuild wiped it | Re-run `build_index.sh`; the staging swap should now prevent this |
| Action green but nothing changed | A script exiting 0 on total failure | Every `gen_*.sh` / `refresh_*.sh` ends with `[ "$ok" -gt 0 ]` — if you add another, do the same |
| Every R2/D1 read is empty in CI | Token missing or under-scoped | §1; the "Check the token" step catches this now |
| `Invalid access token` on deploy | OAuth creds revoked | Use the API token, not `wrangler login` |
| A rebuilt PDF still looks old in the browser | `/pdf/:id` is browser-cached for a day | §6 — hard-reload, or wait out `max-age` |
| A guideline never refreshes | Parked after 3 consecutive failures | `wrangler kv key get cron_state --binding NCCN_KV --remote`; delete its entry to retry now |
| Bell says "已 N 天沒有紀錄" | The Worker cron did not fire, or D1 writes are failing | `wrangler tail nccn-download` over a run; compare KV `cron_health` against the newest `cron` row in D1 |
| Bell is empty on a working site | `sql/notify.sql` was never run | §2 — every read in `lib/notify.js` swallows the missing-table error by design |
| The Claude Code skill stopped working | Key revoked, `sql/api.sql` missing, or the Access bypass changed | §5.6 has its own symptom table |
| Anything about the MD Anderson tab | — | §5.7 has its own symptom table |
| Search in one tab returns the other source's PDFs | `/api/search` was called without `src=` | the home page always sends it; a hand-rolled call has to as well |
| Some cards say 未快取 although R2 has the file | `R2.list` truncated at 1000 objects | fixed by the cursor loop in `/api/r2-status`; if it comes back, the bucket has grown past what one page can hold *plus* the loop is broken |

---

## 8. Conventions for changes here

- Pure helpers go in `cf/src/lib/*` with unit tests in `cf/test/*`. Functions the
  browser also needs are injected verbatim via `.toString()` — those **must** stay
  self-contained (params + JS builtins only, no closures, no module-scope refs).
  See `lib/cite.js`, `lib/toc.js`, `lib/marks.js`, `lib/view.js`, `lib/sw.js`.
- **Cache Storage ignores `Cache-Control` entirely.** The service worker's own
  strategy is the only thing that decides when a cached asset is re-fetched — a
  `max-age` from the Worker is decoration at that layer. `/thumb/` was
  cache-first, so a browser that had loaded a cover once never asked for it
  again: R2 could be perfectly correct and the reader would still see last
  season's thumbnail, forever. It is stale-while-revalidate now
  (`lib/sw.js` `assetResponse`), the `<img>` url carries `?v=<version>` so a
  new version is a url the browser has never seen, and bumping the cache name
  (`nccn-assets-v1` → `v2`) is what clears the entries already stuck under the
  old strategy. Changing the strategy without renaming the cache fixes nobody
  who already has the bad entries.
- `lib/view.js` holds the viewer's render scheduling: which page you are on
  (`pageAtOffset`), what to rasterise next (`prefetchPlan`), whether you are
  scrolling too fast to bother (`scrollIntent`), and what to drop when canvases
  exceed the pixel budget (`evictPlan`). They live outside the view template
  because the inline versions they replaced were the viewer's main sources of
  scroll jank and there was no way to prove a rewrite behaved the same.
- Anything that changes what the reader sees mid-render is a **timing** change,
  and `pnpm test` cannot see it. Measure it in a real browser before believing
  it. Deferring a page's canvas until its render finished — so it could crossfade
  instead of flashing white — measured 463 ms → 1305 ms to first pixels, because
  the browser can no longer paint pdf.js's progress. A page's *first* canvas now
  goes straight into the DOM; only replacements get the crossfade.
- Views are single template literals in `cf/src/views/*`. There is no build step
  for the front end; `node --check` the extracted `<script>` block if you change
  much of it.
- New D1 tables get their own `sql/*.sql` with `CREATE TABLE IF NOT EXISTS`, never
  an addition to `schema.sql`.
- There are two catalogues and one merge point. `data/guidelines.js` describes
  NCCN, `data/algorithms.js` describes MD Anderson (**generated** — regenerate it,
  do not hand-edit), and `data/catalog.js` is the only place that combines them:
  `VALID_IDS`, `NAME_BY_ID`, `SOURCE_BY_ID`, `FILE_BY_ID`, `ID_BY_FILE`. Import
  from `catalog.js` unless you specifically mean one source — `lib/pdf.js` still
  imports `GUIDELINES` directly, because the daily cron is NCCN's alone.
- Adding a **third** source means: a `data/<x>.js` + its `<x>.json`, an entry in
  `SOURCES` and in the home page's `SRCS`, a `refreshKey`/`upstreamUrl` branch, a
  rule in `internalLinkId`, a `gen_versions.sh` case, and a decision about each of
  `build_toc` / `build_updates` / `gen_clean`. Everything else follows from the id
  namespace.
- `src/skill/*` is the *content* of the `.skill` package, pulled into the bundle as
  Text modules. It lives under `src/` because that is where wrangler's module rules
  can reach it — read the two warnings above `rules` in `wrangler.jsonc` before
  changing anything there, both were found the hard way. `vitest.config.js` mirrors
  the same rule so tests load exactly what ships.
- Anything new under `/api/v1` is **unauthenticated except for the bearer token**.
  Adding a route there is a decision about what the open internet may read; adding
  one that writes is almost certainly a mistake (`handleApi` rejects non-GET).
- `pnpm test` must pass before `pnpm run deploy`. CI enforces it on push.
