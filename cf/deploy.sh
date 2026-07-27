#!/bin/bash
# Stamp the build time into the Worker, then deploy.
set -e
cd "$(dirname "$0")"
STAMP=$(TZ=Asia/Taipei date '+%Y-%m-%d %H:%M %Z')
# Done in python, not `sed -i`: BSD sed wants `-i ''` and GNU sed rejects it, so
# a sed one-liner here works locally on macOS but breaks on the Linux CI runner.
python3 - "$STAMP" <<'PY'
import re, sys
path = "src/lib/constants.js"
src = open(path, encoding="utf-8").read()
new, n = re.subn(
    r'^export const BUILD_TIME = .*$',
    'export const BUILD_TIME = "%s"; // stamped by deploy.sh' % sys.argv[1],
    src, count=1, flags=re.M)
if not n:
    sys.exit("BUILD_TIME line not found in " + path)
open(path, "w", encoding="utf-8").write(new)
PY
echo "BUILD_TIME → $STAMP"
# .env lives at the repo root. wrangler only auto-loads a .env sitting next to
# wrangler.jsonc, so source it into the environment ourselves (same as every
# helper script does). CLOUDFLARE_API_TOKEN must carry Workers Scripts:Edit on
# top of the R2/D1/KV permissions the helper scripts use — the dashboard's
# "Edit Cloudflare Workers" template covers it. We used to hide .env here so
# wrangler fell back to OAuth, but OAuth credentials get revoked and then
# deploys fail with a bare "Invalid access token"; a scoped API token does not.
if [ -f ../.env ]; then set -a; . ../.env; set +a; fi
if [ -z "${CLOUDFLARE_API_TOKEN:-}" ]; then
	echo "! 找不到 CLOUDFLARE_API_TOKEN（預期在 NCCN/.env）— 會退回 wrangler OAuth 登入" >&2
fi
wrangler deploy
