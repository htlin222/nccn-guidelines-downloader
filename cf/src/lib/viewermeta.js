// /preview 這一頁在伺服器端就該知道的事：版本、頁數、有沒有目錄。
//
// 這些以前全都是開頁之後才用 fetch 補上的，所以版本徽章、TOC 按鈕、頁數各自
// 「長出來」一次，header 跟著跳；頁面骨架也只能等整份 PDF 解析完才畫得出來。
// 先在 Worker 端讀齊，首屏就是最終版面。
//
// 契約：**這裡永遠不丟例外**。metadata 是加分項，不是新的失敗點——manifest 掉了、
// 壞了、R2 炸了，對應欄位就是 null，viewer 退回原本的行為，頁面照樣打得開。

async function readJson(env, key) {
	try {
		const obj = await env.PDFS.get(key);
		if (!obj) return null;
		return JSON.parse(await obj.text());
	} catch {
		return null;
	}
}

export async function viewerMeta(env, id) {
	const [versions, clean, toc] = await Promise.all([
		readJson(env, "meta/versions.json"),
		readJson(env, "meta/clean.json"),
		env.PDFS.head(`meta/toc/${id}.json`).catch(() => null),
	]);
	const v = (versions && versions[id]) || null;
	const c = (clean && clean[id]) || null;
	// 頁數要嘛是正整數，要嘛當作沒有。骨架寧可不建，也不能建出錯的格數——
	// 那會比現在的空白更糟：使用者會以為捲到底了。
	const pages = c && Number.isInteger(c.pages) && c.pages > 0 ? c.pages : null;
	return {
		version: (v && v.v) || null,
		date: (v && v.d) || null,
		pages,
		hasToc: !!toc,
	};
}
