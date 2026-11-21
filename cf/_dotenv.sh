# shellcheck shell=bash
# Sourced by the cf/*.sh helpers right after `cd "$(dirname "$0")"`.
#
# ../.env stores secrets as 1Password `op://` references. Sourcing it as-is
# would export the literal reference (and clobber anything `op run` injected),
# so: if the refs are not resolved yet, re-exec the calling script under
# `op run`, which injects the real values; once injected, don't source again.
# A plain .env (no op:// refs, e.g. the Codespace one) is sourced as before.
# No ../.env (CI) → nothing happens; the workflow's env is used.
if [ -f ../.env ]; then
  if grep -qE '^[^#]*=op://' ../.env; then
    case "${CLOUDFLARE_API_TOKEN:-op://}" in
      op://*)
        if [ -z "${NCCN_OP_RUN:-}" ] && command -v op >/dev/null 2>&1; then
          NCCN_OP_RUN=1 exec op run --env-file=../.env -- bash "./$(basename "$0")" ${1+"$@"}
        fi
        echo "! ../.env has op:// refs but they could not be resolved (is \`op\` signed in?)" >&2
        ;;
    esac
  else
    set -a
    # shellcheck disable=SC1091
    . ../.env
    set +a
  fi
fi
