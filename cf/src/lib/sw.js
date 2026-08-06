// Service worker 的資產快取策略。透過 .toString() 原封不動注入 /sw.js，所以
// **必須自給自足**——只能用參數和 JS 內建物件，不能有 closure 或模組層的引用。
// 見 CLAUDE.md §8。

/**
 * stale-while-revalidate：命中就先把舊的回出去，同時去拿新的寫回快取。
 *
 * 原本是純 cache-first（命中直接 return），而 Cache Storage 完全不看
 * Cache-Control——Worker 給的 max-age=86400 在這一層沒有任何作用。結果是
 * 縮圖只要被瀏覽器快取過一次就再也不會重抓：R2 那邊換了新版封面，使用者的
 * 畫面永遠停在舊的，而且不會自己好。
 */
export async function assetResponse(cache, request, fetchFn, waitUntil) {
	const hit = await cache.match(request);
	const fresh = fetchFn(request).then((res) => {
		if (res && res.ok) cache.put(request, res.clone());
		return res;
	});
	if (!hit) return fresh;
	// 背景那份要交給 waitUntil，否則 SW 可能在回應送出後就被結束掉，快取來不及更新。
	waitUntil(fresh.catch(() => null));
	return hit;
}
