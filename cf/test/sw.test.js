import { describe, expect, it } from "vitest";
import { assetResponse } from "../src/lib/sw.js";

// 最小的 Cache Storage 替身。真的 Cache Storage 完全不看 Cache-Control——命中就
// 直接回——所以這裡也刻意不做任何新鮮度判斷，行為才對得上。
function fakeCache(seed = {}) {
	const store = { ...seed };
	return {
		store,
		async match(req) {
			return store[String(req)];
		},
		async put(req, res) {
			store[String(req)] = res;
		},
	};
}

// Response 替身：body 就是字串，clone() 給一份新的。
function res(body, ok = true) {
	return {
		body,
		ok,
		clone() {
			return res(body, ok);
		},
	};
}

describe("assetResponse", () => {
	it("沒有快取時，回網路那份並寫進快取", async () => {
		const cache = fakeCache();
		const got = await assetResponse(
			cache,
			"/thumb/aml",
			async () => res("new"),
			() => {},
		);
		expect(got.body).toBe("new");
		expect(cache.store["/thumb/aml"].body).toBe("new");
	});

	it("命中快取時，回的是快取那份", async () => {
		const cache = fakeCache({ "/thumb/aml": res("old") });
		const got = await assetResponse(
			cache,
			"/thumb/aml",
			async () => res("new"),
			() => {},
		);
		expect(got.body).toBe("old");
	});

	// 這一條就是 bug 本身：舊版命中快取後直接 return，永遠不再回源，換版後的縮圖
	// 在使用者的瀏覽器裡再也不會更新。
	it("命中快取後仍要背景重抓並覆寫，下次進站才看得到新縮圖", async () => {
		const cache = fakeCache({ "/thumb/aml": res("old") });
		const pending = [];
		await assetResponse(
			cache,
			"/thumb/aml",
			async () => res("new"),
			(p) => pending.push(p),
		);
		expect(pending).toHaveLength(1);
		await Promise.all(pending);
		expect(cache.store["/thumb/aml"].body).toBe("new");
	});

	it("背景重抓失敗時，已經回出去的舊快取不受影響", async () => {
		const cache = fakeCache({ "/thumb/aml": res("old") });
		const pending = [];
		const got = await assetResponse(
			cache,
			"/thumb/aml",
			async () => {
				throw new Error("offline");
			},
			(p) => pending.push(p),
		);
		expect(got.body).toBe("old");
		await expect(Promise.all(pending)).resolves.toBeDefined();
		expect(cache.store["/thumb/aml"].body).toBe("old");
	});

	it("非 2xx 不寫進快取，免得把 404 頁面當縮圖留著", async () => {
		const cache = fakeCache();
		const got = await assetResponse(
			cache,
			"/thumb/nope",
			async () => res("Not found", false),
			() => {},
		);
		expect(got.ok).toBe(false);
		expect(cache.store["/thumb/nope"]).toBeUndefined();
	});
});
