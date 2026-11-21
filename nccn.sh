green_color="\033[32m"
reset_color="\033[0m"
today_date=$(date +"%Y-%m-%d")
DIR="$(cd "$(dirname "$0")" && pwd)"

# NCCN login cookie: $NCCN_COOKIE, else the Cloudflare KV copy (the one the
# settings page updates; read with the CLOUDFLARE_API_TOKEN from .env via op run),
# else a legacy plaintext cookie.txt. Passed to curl on stdin, not argv.
COOKIE="${NCCN_COOKIE:-}"
[ -n "$COOKIE" ] || COOKIE="$(cd "$DIR/cf" && op run --env-file=../.env -- \
	wrangler kv key get cookie --binding NCCN_KV --remote 2>/dev/null | tail -1)"
[ -n "$COOKIE" ] || COOKIE="$(cat "$DIR/cookie.txt" 2>/dev/null)"
[ -n "$COOKIE" ] || { echo "no NCCN cookie (NCCN_COOKIE / KV / cookie.txt)"; exit 1; }
COOKIE="${COOKIE//\\/\\\\}"; COOKIE="${COOKIE//\"/\\\"}"

if [ $# -eq 0 ]; then
	echo "未提供 NCCN 識別碼作為參數，啟動 fzf 選擇..."
	nccn_identifier=$(cat nccn_dict.txt | fzf --prompt='選擇 NCCN 識別碼: ')
	if [ -z "$nccn_identifier" ]; then
		echo "未選擇識別碼，退出。"
		exit 1
	fi
else
	nccn_identifier="$1"
fi

# 從識別碼中移除注釋
nccn_identifier_cleaned=$(echo "$nccn_identifier" | cut -d '#' -f 1 | tr -d '[:space:]')

echo "開始下載: ${green_color}$nccn_identifier_cleaned${reset_color}"
printf 'header = "Cookie: %s"\n' "$COOKIE" |
	curl -K - "https://www.nccn.org/professionals/physician_gls/pdf/$nccn_identifier_cleaned.pdf" \
	-H 'authority: www.nccn.org' \
	-H 'accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7' \
	-H 'accept-language: zh-TW,zh;q=0.9' \
	-H 'cache-control: max-age=0' \
	--compressed --output "NCCN-$nccn_identifier_cleaned-$today_date.pdf"
sleep 3

exit 0
