#!/bin/bash
# Stamp the build time into the Worker, then deploy.
set -e
cd "$(dirname "$0")"
STAMP=$(TZ=Asia/Taipei date '+%Y-%m-%d %H:%M %Z')
sed -i '' 's|^const BUILD_TIME = .*|const BUILD_TIME = "'"$STAMP"'"; // stamped by deploy.sh|' src/index.js
echo "BUILD_TIME → $STAMP"
wrangler deploy
