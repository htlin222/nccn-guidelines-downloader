#!/bin/bash
# title: download NCCN guideline
# date created: "2023-08-09"

green_color="\033[32m"
reset_color="\033[0m"
today_date=$(date +"%Y-%m-%d")
# input_file="/home/user/documents/nccnlist.txt"
input_file="$HOME/Documents/guidelines/NCCN/nccnlist.txt"

# Check if the input file exists
if [ -f nccnlist.txt ] && [ -f cookie.txt ]; then
	echo "Both files exist"

	while IFS= read -r line; do
		echo "Line: $line"
	done <nccnlist.txt
	while IFS= read -r line; do
		echo "Start to Download: ${green_color}$line${reset_color}"
		curl "https://www.nccn.org/professionals/physician_gls/pdf/$line.pdf" \
			-H 'authority: www.nccn.org' \
			-H 'accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7' \
			-H 'accept-language: zh-TW,zh;q=0.9' \
			-H 'cache-control: max-age=0' \
			-H "Cookie: $(cat cookie.txt)" \
			--compressed --output "NCCN-$line-$today_date.pdf"
		sleep 3
	done <"$input_file"
else
	if [ ! -f nccnlist.txt ]; then
		touch file1.txt
		echo "Created nccnlist.txt"
	fi
	if [ ! -f cookie.txt ]; then
		touch cookie.txt
		echo "Created cookie.txt"
	fi
fi

exit 0
