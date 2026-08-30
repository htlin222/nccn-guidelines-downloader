// /api/v1 的 KV 快取層。
//
// 兩個決定：
//
// 1. 世代號失效。每個 key 都帶一個世代前綴（api:<gen>:toc:aml），gen 存在 KV
//    api:gen，由每週 CI 最後一步改寫一次。一次寫入就讓整批舊快取孤兒化——KV 沒有
//    「刪掉某個前綴」這種操作，逐鍵 list+delete 又慢又貴，而所有東西都設了 TTL，
//    孤兒自己會消失。
//
// 2. 熱門項目滑動 TTL。每次命中都重寫的話，寫入量會等於讀取量。改成把到期時間
//    存進 KV metadata，只在壽命已用掉三成時才續期：反覆看的頁永遠不過期，冷掉的
//    30 天後自動消失，而單一項目最多每 9 天寫一次。

export const GEN_KEY = "api:gen";
// 臨床筆記自己的世代號。跟 api:gen 分開是因為改寫它們的是兩個不同的事件：
// api:gen 由每週 CI 在重建索引後改寫，notes:gen 由 load_snippets.sh 在把
// snippets/ 推進 D1 之後改寫。共用一個的話，跑完 load_snippets.sh 的筆記
// 搜尋會繼續回舊結果直到下個星期一——而 index.js 原本每次現讀別名表，正是
// 為了不讓「改了字典卻沒反應」變成一種可能。
export const NOTES_GEN_KEY = "notes:gen";
export const TTL = 2_592_000; // 30 天
const GEN_MEM_MS = 60_000;

const genMem = { [GEN_KEY]: { at: 0, v: "0" }, [NOTES_GEN_KEY]: { at: 0, v: "0" } };

export function cacheKey(gen, kind, id, ns) {
	return (ns || "api") + ":" + gen + ":" + kind + (id ? ":" + id : "");
}

// 續期門檻：剩餘壽命低於七成就續。exp / now 都是 epoch 秒。
export function shouldRenew(exp, nowSec, ttl) {
	if (!(exp > 0)) return true; // 沒有 metadata（舊格式）就順手補一次
	return exp - nowSec < ttl * 0.7;
}

export async function generation(env, key) {
	const k = key || GEN_KEY;
	const now = Date.now();
	const mem = genMem[k] || (genMem[k] = { at: 0, v: "0" });
	if (now - mem.at < GEN_MEM_MS) return mem.v;
	const v = await env.NCCN_KV.get(k, { cacheTtl: 3600 }).catch(() => null);
	mem.at = now;
	mem.v = v || "0";
	return mem.v;
}

// 取一份 JSON 字串：先 KV，miss 就跑 loader 並寫回。
// loader 回 null 代表「這東西不存在」——不快取，免得一次 R2 抖動就把 404 釘住
// 30 天。回傳字串而不是物件，是為了讓端點能把它原樣塞進 Response，不必解析再
// 序列化一次。
export async function remember(env, ctx, kind, id, loader, ns) {
	const gen = await generation(env, ns === "notes" ? NOTES_GEN_KEY : GEN_KEY);
	const key = cacheKey(gen, kind, id, ns);
	const nowSec = Math.floor(Date.now() / 1000);

	const got = await env.NCCN_KV.getWithMetadata(key, { cacheTtl: 3600 }).catch(
		() => ({ value: null, metadata: null }),
	);
	if (got.value != null) {
		if (ctx?.waitUntil && shouldRenew(got.metadata?.exp, nowSec, TTL))
			ctx.waitUntil(put(env, key, got.value, nowSec));
		return got.value;
	}

	const fresh = await loader();
	if (fresh == null) return null;
	const body = typeof fresh === "string" ? fresh : JSON.stringify(fresh);
	if (ctx?.waitUntil) ctx.waitUntil(put(env, key, body, nowSec));
	return body;
}

function put(env, key, body, nowSec) {
	return env.NCCN_KV.put(key, body, {
		expirationTtl: TTL,
		metadata: { exp: nowSec + TTL },
	}).catch(() => {});
}
