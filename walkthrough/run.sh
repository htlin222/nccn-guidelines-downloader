#!/usr/bin/env bash
set -euo pipefail
python walkthrough/render.py "$@" --inputs "$RUNNER_TEMP/nccn-inputs"
