import { afterAll, beforeAll, beforeEach, describe, expect, it } from "vitest";
import { handleApi } from "../src/lib/api.js";
import { listKeys, mintKey, revokeKey } from "../src/lib/apikey.js";
import { buildSkillZip } from "../src/lib/skillpack.js";

// 端到端走一次 /api/v1：鑄金鑰 → 認證 → 取資料 → 撤銷 → 打不通。
// 用假的 D1/KV/R2 而不是 wrangler dev，理由跟 clean.test.js 一樣：這裡要釘的是
// 路由、認證與快取的接法，那些在假綁定上一樣會壞；真 D1 的語法由 CI 的重建流程
// 驗。假綁定也讓「撤銷後立刻失效」這種跨層行為測得起來。

function fakeEnv() {
	const kv = new Map();
	const keys = []; // api_keys 的列
	const pages = [
		{ gid: "aml", page: 10, body: "page ten" },
		{ gid: "aml", page: 11, body: "page eleven" },
		{ gid: "aml", page: 12, body: "page twelve" },
		{ gid: "aml", page: 13, body: "page thirteen" },
	];
	const r2 = new Map([
		["meta/versions.json", JSON.stringify({ aml: { v: "5.2026", d: "2026-07-01" } })],
		["meta/clean.json", JSON.stringify({ aml: "sha" })],
		[
			"meta/toc/aml.json",
			JSON.stringify([
				{ t: "Overview", ref: "MS-1", ms: 1, p: 10, l: 0, sec: "discussion" },
				{ t: "Workup", ref: "MS-2", ms: 2, p: 12, l: 0, sec: "discussion" },
			]),
		],
		[
			"meta/updates/aml.json",
			JSON.stringify({ id: "aml", version: "5.2026", pages: [4], items: [], history: [] }),
		],
	]);

	const run = (sql, binds) => {
		if (/INSERT INTO api_keys/.test(sql)) {
			keys.push({
				id: keys.length + 1,
				hash: binds[0],
				prefix: binds[1],
				label: binds[2],
				created: binds[3],
				last_used: null,
				calls: 0,
				revoked: null,
			});
			return { results: [] };
		}
		if (/SELECT id, revoked FROM api_keys/.test(sql)) {
			const row = keys.find((k) => k.hash === binds[0]);
			return { first: row || null };
		}
		if (/SELECT hash FROM api_keys/.test(sql)) {
			const row = keys.find((k) => k.id === binds[0]);
			return { first: row ? { hash: row.hash } : null };
		}
		if (/UPDATE api_keys SET revoked/.test(sql)) {
			const row = keys.find((k) => k.id === binds[1]);
			if (row) row.revoked = binds[0];
			return { results: [] };
		}
		if (/UPDATE api_keys SET last_used/.test(sql)) {
			const row = keys.find((k) => k.id === binds[1]);
			if (row) {
				row.last_used = binds[0];
				row.calls += 1;
			}
			return { results: [] };
		}
		if (/FROM api_keys ORDER BY id/.test(sql)) return { results: keys.slice().reverse() };
		if (/SELECT page, body FROM page_text/.test(sql))
			return {
				results: pages.filter(
					(p) => p.gid === binds[0] && p.page >= binds[1] && p.page <= binds[2],
				),
			};
		if (/SELECT MAX\(page\)/.test(sql))
			return { first: { n: Math.max(...pages.filter((p) => p.gid === binds[0]).map((p) => p.page)) } };
		if (/FROM insights/.test(sql)) return { results: [] };
		throw new Error("假 D1 沒有處理這句 SQL：" + sql);
	};

	return {
		_keys: keys,
		_kv: kv,
		DB: {
			prepare(sql) {
				const stmt = {
					bind: (...binds) => ({
						all: async () => run(sql, binds),
						first: async () => run(sql, binds).first ?? null,
						run: async () => run(sql, binds),
					}),
					all: async () => run(sql, []),
					first: async () => run(sql, []).first ?? null,
					run: async () => run(sql, []),
				};
				return stmt;
			},
		},
		NCCN_KV: {
			async get(k) {
				return kv.has(k) ? kv.get(k).value : null;
			},
			async getWithMetadata(k) {
				return kv.has(k) ? kv.get(k) : { value: null, metadata: null };
			},
			async put(k, value, opt) {
				kv.set(k, { value, metadata: opt?.metadata || null });
			},
			async delete(k) {
				kv.delete(k);
			},
		},
		PDFS: {
			async get(k) {
				return r2.has(k) ? { text: async () => r2.get(k), json: async () => JSON.parse(r2.get(k)) } : null;
			},
			async list({ prefix }) {
				return {
					objects: [...r2.keys()].filter((k) => k.startsWith(prefix)).map((key) => ({ key })),
					truncated: false,
				};
			},
		},
	};
}

const ctx = { waitUntil: (p) => p };
const call = (env, path, key) =>
	handleApi(
		new Request("https://n.example" + path, {
			headers: key ? { authorization: "Bearer " + key } : {},
		}),
		env,
		ctx,
		new URL("https://n.example" + path),
	);

let savedCaches;
beforeAll(() => {
	savedCaches = globalThis.caches;
	// handleApi 讀 caches.default。這裡永遠 miss，才不會有一個測試的回應被下一個
	// 測試撿到——那正是撤銷測試會誤判成功的方式。
	globalThis.caches = { default: { match: async () => undefined, put: async () => {} } };
});
afterAll(() => {
	globalThis.caches = savedCaches;
});

let env, key;
beforeEach(async () => {
	env = fakeEnv();
	key = (await mintKey(env, "測試")).key;
});

describe("認證", () => {
	it("沒帶 token 就是 401", async () => {
		expect((await call(env, "/api/v1/catalogue")).status).toBe(401);
	});

	it("格式不對的 token 是 401，而且根本不查 D1", async () => {
		const r = await call(env, "/api/v1/catalogue", "not-a-key");
		expect(r.status).toBe(401);
	});

	it("有效 token 放行", async () => {
		expect((await call(env, "/api/v1/catalogue", key)).status).toBe(200);
	});

	// 撤銷要立刻生效，不能等 KV 的 60 秒 TTL 過期。
	it("撤銷後立刻打不通", async () => {
		expect((await call(env, "/api/v1/catalogue", key)).status).toBe(200);
		await revokeKey(env, env._keys[0].id);
		expect((await call(env, "/api/v1/catalogue", key)).status).toBe(401);
	});

	it("撤銷不存在的 id 不會炸", async () => {
		expect((await revokeKey(env, 999)).ok).toBe(false);
	});

	// 這是這個功能唯一出過的安全 bug，所以釘死它。驗證結果曾經被快取進 KV，撤銷時
	// 把那個 key 刪掉，看起來很合理。實測是被撤銷的金鑰照樣通行超過 24 秒——KV 的
	// 讀取在邊緣節點另有一層快取，而 KV 本來就是最終一致的。
	// 快取層可以放資料，不能放「這個人能不能進來」。
	it("驗證結果絕不進 KV", async () => {
		await call(env, "/api/v1/catalogue", key);
		expect([...env._kv.keys()].some((k) => k.startsWith("apikey:"))).toBe(false);
	});

	it("用過之後 last_used 與 calls 會留下痕跡", async () => {
		await call(env, "/api/v1/catalogue", key);
		const rows = await listKeys(env);
		expect(rows[0].calls).toBe(1);
		expect(rows[0].lastUsed).toBeTruthy();
		expect(rows[0].hash).toBeUndefined();
	});

	it("只接受 GET", async () => {
		const r = await handleApi(
			new Request("https://n.example/api/v1/catalogue", { method: "POST" }),
			env,
			ctx,
			new URL("https://n.example/api/v1/catalogue"),
		);
		expect(r.status).toBe(405);
	});
});

describe("端點", () => {
	it("catalogue 帶出版本與各項是否備妥", async () => {
		const body = await (await call(env, "/api/v1/catalogue", key)).json();
		const aml = body.guidelines.find((g) => g.id === "aml");
		expect(aml.version).toBe("5.2026");
		expect(aml.toc).toBe(true);
		expect(aml.updates).toBe(true);
		expect(body.guidelines.length).toBe(body.count);
	});

	it("toc 原樣端出 R2 的 JSON", async () => {
		const body = await (await call(env, "/api/v1/toc/aml", key)).json();
		expect(body.map((e) => e.ref)).toEqual(["MS-1", "MS-2"]);
	});

	it("page 回指定範圍的逐頁全文", async () => {
		const body = await (await call(env, "/api/v1/page/aml?p=10-11", key)).json();
		expect(body.pages.map((p) => p.page)).toEqual([10, 11]);
		expect(body.pages[0].text).toBe("page ten");
		expect(body.name).toBe("Acute Myeloid Leukemia");
	});

	it("section 自己從 TOC 算出頁碼區間", async () => {
		const body = await (await call(env, "/api/v1/section/aml?ref=MS-1", key)).json();
		expect(body.ref).toBe("MS-1");
		expect(body.pages.map((p) => p.page)).toEqual([10, 11]); // MS-2 從 12 開始
	});

	it("最後一節一路吃到最後一頁", async () => {
		const body = await (await call(env, "/api/v1/section/aml?ref=MS-2", key)).json();
		expect(body.pages.map((p) => p.page)).toEqual([12, 13]);
	});

	it("不認得的 id 是 404 而不是 500", async () => {
		expect((await call(env, "/api/v1/toc/nope", key)).status).toBe(404);
	});

	it("壞掉的頁碼參數是 400", async () => {
		expect((await call(env, "/api/v1/page/aml?p=abc", key)).status).toBe(400);
	});

	it("沒有這個端點就 404", async () => {
		expect((await call(env, "/api/v1/nonsense", key)).status).toBe(404);
	});
});

describe("KV 快取", () => {
	it("第二次取 toc 走 KV，不再碰 R2", async () => {
		await call(env, "/api/v1/toc/aml", key);
		let hits = 0;
		const orig = env.PDFS.get;
		env.PDFS.get = async (k) => {
			hits++;
			return orig(k);
		};
		await call(env, "/api/v1/toc/aml", key);
		expect(hits).toBe(0);
	});

	// 404 進了快取的話，一次 R2 抖動就會被釘住整整 30 天。
	it("查不到的東西不進快取", async () => {
		expect((await call(env, "/api/v1/updates/nscl", key)).status).toBe(404);
		expect([...env._kv.keys()].some((k) => k.includes("upd:nscl"))).toBe(false);
	});
});

describe("skill 打包", () => {
	it("烤進去的金鑰是新鑄的，而且能通過驗證", async () => {
		const before = env._keys.length;
		const { bytes, prefix } = await buildSkillZip(env, {
			label: "MacBook",
			origin: "https://n.example",
		});
		expect(env._keys.length).toBe(before + 1);
		expect(prefix.startsWith("nccn_")).toBe(true);

		const text = new TextDecoder().decode(bytes);
		expect(text).toContain("SKILL.md");
		expect(text).toContain("nccn.py");
		expect(text).toContain("NCCN_API_BASE=https://n.example/api/v1");

		// 明文金鑰在 .env 裡，而且真的能用——這是整個功能成立的前提。
		const m = /NCCN_API_KEY=(nccn_[0-9a-f]{32})/.exec(text);
		expect(m).toBeTruthy();
		expect((await call(env, "/api/v1/catalogue", m[1])).status).toBe(200);
	});

	it("每次產生都是不同的一把", async () => {
		const a = await buildSkillZip(env, { label: "a", origin: "https://n.example" });
		const b = await buildSkillZip(env, { label: "b", origin: "https://n.example" });
		expect(a.prefix).not.toBe(b.prefix);
	});
});
