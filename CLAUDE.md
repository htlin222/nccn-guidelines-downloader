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

Four SQL files, deliberately separate. Run each **once**:

```bash
cd cf && set -a && . ../.env && set +a
wrangler d1 execute nccn-search --remote --file=sql/schema.sql    # FTS5 `pages`
wrangler d1 execute nccn-search --remote --file=sql/insights.sql  # AI cache + quota
wrangler d1 execute nccn-search --remote --file=sql/marks.sql     # bookmarks + stars
wrangler d1 execute nccn-search --remote --file=sql/notify.sql    # notification centre
```

`schema.sql` starts with `DROP TABLE IF EXISTS pages` — it is the search index's
own schema and gets re-derived on every rebuild. The other three are
`CREATE TABLE IF NOT EXISTS` on purpose: **an index rebuild must never wipe the
AI cache, anything the user saved, or an unread alert.** Never merge them into
`schema.sql`.

---

## 3. Access (the login gate)

The Worker itself has no auth — Cloudflare Access in front of the custom domain is
the whole security model. Manage it from the CLI with the `cf-gate` skill, or in
Zero Trust → Access → Applications:

- Application domain: `nccn.hsiehting.com`
- Policy: Allow → Emails → your address (email OTP, no password)

The Worker reads `cf-access-authenticated-user-email` and shows it in the footer.
If that header is absent the site is unprotected — check before pointing anyone at it.

---

## 4. Deploy

```bash
cd cf && pnpm install
pnpm test            # 112 unit tests, all pure helpers — must pass
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

## 5. The two schedules

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
2. `gen_versions.sh` → `meta/versions.json` (the version badges)
3. `gen_thumbs.sh` → `thumb/<id>.webp`
4. `build_index.sh` → the D1 FTS5 index
5. `build_toc.sh` → `meta/toc/<id>.json`
6. `gen_clean.sh` → banner-free `<id>.pdf` at the bucket root + `meta/clean.json`
7. **Verify the result** — index row count, and that both manifests cover the
   catalogue. A step can pass on its own terms and still leave the site wrong.

Steps 8 and 9 feed the notification centre: `archive_notify.sh` rolls anything
older than 90 days off to R2, and a final `if: always()` step posts the run's own
outcome — green *or* red — so a silently-broken weekly rebuild is visible on the
home page.

Run it by hand: `gh workflow run update-versions.yml`, then
`gh run watch $(gh run list --workflow=update-versions.yml --limit 1 --json databaseId -q '.[0].databaseId')`.

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

`build_index.sh` builds into a **staging table** and only promotes it after the
row count clears `MIN_ROWS` (default 1000), so a failed or partial rebuild leaves
the live index serving. Set `LIMIT=N MIN_ROWS=…` for a dry run — with a low LIMIT
the guard will correctly refuse to promote.

---

## 6. R2 layout

```
<id>.pdf            banner-free copy — what /pdf/:id and /dl/:id serve
raw/<id>.pdf        untouched original from NCCN — what the daily cron writes
thumb/<id>.webp     first-page thumbnail
meta/versions.json  {id: {v, d}}
meta/clean.json     sha256 of each source, so gen_clean.sh can skip unchanged ids
meta/toc/<id>.json  Discussion table of contents
meta/notify/*.jsonl notifications older than 90 days, one month per object
asset/*.png         PWA icons
```

The cron writes **only** to `raw/`. The root object is produced by `gen_clean.sh`,
so a cron refresh can never put the banner back on a cleaned PDF — and it also
means a freshly-pulled PDF is not visible to readers until the next weekly run
(≤ 6 days).

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
| Action green but nothing changed | A script exiting 0 on total failure | All five now end with `[ "$ok" -gt 0 ]` — if you add a sixth, do the same |
| Every R2/D1 read is empty in CI | Token missing or under-scoped | §1; the "Check the token" step catches this now |
| `Invalid access token` on deploy | OAuth creds revoked | Use the API token, not `wrangler login` |
| A guideline never refreshes | Parked after 3 consecutive failures | `wrangler kv key get cron_state --binding NCCN_KV --remote`; delete its entry to retry now |
| Bell says "已 N 天沒有紀錄" | The Worker cron did not fire, or D1 writes are failing | `wrangler tail nccn-download` over a run; compare KV `cron_health` against the newest `cron` row in D1 |
| Bell is empty on a working site | `sql/notify.sql` was never run | §2 — every read in `lib/notify.js` swallows the missing-table error by design |

---

## 8. Conventions for changes here

- Pure helpers go in `cf/src/lib/*` with unit tests in `cf/test/*`. Functions the
  browser also needs are injected verbatim via `.toString()` — those **must** stay
  self-contained (params + JS builtins only, no closures, no module-scope refs).
  See `lib/cite.js`, `lib/toc.js`, `lib/marks.js`.
- Views are single template literals in `cf/src/views/*`. There is no build step
  for the front end; `node --check` the extracted `<script>` block if you change
  much of it.
- New D1 tables get their own `sql/*.sql` with `CREATE TABLE IF NOT EXISTS`, never
  an addition to `schema.sql`.
- `pnpm test` must pass before `pnpm run deploy`. CI enforces it on push.
