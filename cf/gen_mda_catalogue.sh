#!/bin/bash
# Regenerate the MD Anderson catalogue from the upstream index page.
#
# Writes two files that must stay in lockstep:
#   algorithms.json        — what the shell scripts iterate
#   src/data/algorithms.js — what the Worker bundles
#
# Unlike every other gen_*.sh here this one touches neither R2 nor D1: the
# catalogue is source, not a derived artifact. That is the whole reason
# update-mda.yml commits the result back to main — a changed catalogue only
# reaches readers through a redeploy.
#
#   bash gen_mda_catalogue.sh            # rewrite both files
#   bash gen_mda_catalogue.sh --dry-run  # parse and diff, write nothing
#
# Exit 0 with CHANGED=0/1 on stdout. A parse that comes back with fewer than 50
# algorithms is treated as "the page is not the page we know" and fails without
# overwriting anything — a truncated catalogue would quietly retire 40 PDFs.
set -u
cd "$(dirname "$0")" || exit 1
LOG="gen_mda_catalogue.log"; : > "$LOG"
python3 gen_mda_catalogue.py "$@" 2>&1 | tee -a "$LOG"
exit "${PIPESTATUS[0]}"
