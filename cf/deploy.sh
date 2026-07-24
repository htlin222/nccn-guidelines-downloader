#!/bin/bash
# Stamp the build time into the Worker, then deploy.
set -e
cd "$(dirname "$0")"
STAMP=$(TZ=Asia/Taipei date '+%Y-%m-%d %H:%M %Z')
sed -i '' 's|^const BUILD_TIME = .*|const BUILD_TIME = "'"$STAMP"'"; // stamped by deploy.sh|' src/index.js
echo "BUILD_TIME → $STAMP"
# wrangler auto-loads .env; the R2/D1 token there usually lacks Workers Scripts
# edit, so hide .env during deploy to fall back to OAuth (restored on exit).
if [ -f .env ]; then command mv .env .env.deployhidden; trap 'command mv .env.deployhidden .env 2>/dev/null' EXIT; fi
wrangler deploy
