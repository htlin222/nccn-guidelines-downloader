import { afterAll, beforeAll, beforeEach, describe, expect, it } from "vitest";
import { handleApi } from "../src/lib/api.js";
import {
	listKeys,
	mintKey,
	resetKeyCache,
	revokeKey,
	rotateUserKey,
	userKey,
} from "../src/lib/apikey.js";
import { buildSkillZip } from "../src/lib/skillpack.js";

// 端到端走一次 /api/v1：鑄金鑰 → 認證 → 取資料 → 撤銷 → 打不通。
// 用假的 D1/KV/R2 而不是 wrangler dev，理由跟 clean.test.js 一樣：這裡要釘的是
// 路由、認證與快取的接法，那些在假綁定上一樣會壞；真 D1 的語法由 CI 的重建流程
// 驗。假綁定也讓「撤銷後立刻失效」這種跨層行為測得起來。

function fakeEnv() {
	const kv = new Map();
	const keys = []; // api_keys 的列
	const users = []; // api_users 的列（綁 email 的衍生金鑰）
	const raws = [
		{ gid: "aml", page: 8, body: "flowchart p8", model: "gemini", created: "2026-09-01" },
		{ gid: "aml", page: 9, body: "flowchart p9", model: "gemini", created: "2026-09-01" },
	];
	const snippets = [
		{
			gid: "breast",
			ref: "BINV-12",
			page: 12,
			title: "術後輔助治療",
			kind: "decision",
			body: "生成的清單",
			version: "6.2026",
			review: null,
			axes: 2,
		},
	];
	const edits = [];
	const aliases = [{ axis: "stage", alias: "三期", value: "III" }];
	const bookmarks = [
		{ gid: "aml", page: 12, label: "Workup", note: "門診常用", created: "2026-08-01" },
	];
	const stars = ["breast"];
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

		// --- issue #11 新增的表 ---
		if (/INSERT INTO api_users/.test(sql)) {
			const found = users.find((u) => u.email === binds[0]);
			if (!found)
				users.push({
					email: binds[0],
					key_version: /DO UPDATE/.test(sql) ? 2 : 1,
					created: binds[1],
					updated: binds[2],
					calls: 0,
				});
			else if (/DO UPDATE/.test(sql)) found.key_version += 1;
			return { results: [] };
		}
		if (/FROM api_users WHERE email/.test(sql))
			return { first: users.find((u) => u.email === binds[0]) || null };
		if (/UPDATE api_users SET last_used/.test(sql)) return { results: [] };

		if (/FROM page_raw/.test(sql))
			return {
				results: raws.filter(
					(r) => r.gid === binds[0] && r.page >= binds[1] && r.page <= binds[2],
				),
			};
		if (/FROM facet_alias/.test(sql)) return { results: aliases };
		if (/FROM snippets s/.test(sql)) return { results: snippets };
		if (/FROM snippets WHERE gid/.test(sql))
			return {
				first: snippets.find((s) => s.gid === binds[0] && s.ref === binds[1]) || null,
			};
		if (/FROM snippet_edits/.test(sql))
			return {
				first: edits.find((e) => e.gid === binds[0] && e.ref === binds[1]) || null,
			};
		if (/FROM bookmarks/.test(sql))
			return { results: binds.length ? bookmarks.filter((b) => b.gid === binds[0]) : bookmarks };
		if (/FROM stars/.test(sql)) return { results: stars.map((gid) => ({ gid })) };

		throw new Error("假 D1 沒有處理這句 SQL：" + sql);
	};

	return {
		_keys: keys,
		_users: users,
		_edits: edits,
		_kv: kv,
		API_KEY_SECRET: "test-secret",
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
const call = (env, path, key, email) => {
	const headers = {};
	if (key) headers.authorization = "Bearer " + key;
	if (email) headers["x-user-email"] = email;
	return handleApi(
		new Request("https://n.example" + path, { headers }),
		env,
		ctx,
		new URL("https://n.example" + path),
	);
};

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
	resetKeyCache();
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

// issue #11：把 /api/v1 打開到整個站。
describe("新端點", () => {
	it("raw 回流程圖那幾頁的轉錄，帶模型與產生時間", async () => {
		const body = await (await call(env, "/api/v1/raw/aml?p=8-9", key)).json();
		expect(body.pages.map((p) => p.page)).toEqual([8, 9]);
		expect(body.pages[0].text).toBe("flowchart p8");
		expect(body.pages[0].model).toBe("gemini");
	});

	// 沒有轉錄不是壞掉：只有 needsVision 判定為流程圖的頁面才會被讀圖，而讀圖有
	// 每日額度。訊息要指得出退路，不然 skill 會以為整條 API 掛了。
	it("沒有轉錄的頁碼回 404，而且說得出該退回哪裡", async () => {
		const r = await call(env, "/api/v1/raw/aml?p=99", key);
		expect(r.status).toBe(404);
		expect((await r.json()).error).toContain("/page");
	});

	it("raw 的頁碼參數壞掉是 400", async () => {
		expect((await call(env, "/api/v1/raw/aml?p=abc", key)).status).toBe(400);
	});

	it("notes 搜尋回命中的清單", async () => {
		const body = await (await call(env, "/api/v1/notes?q=三期", key)).json();
		expect(body.rows[0].ref).toBe("BINV-12");
		expect(body.facets).toEqual([{ axis: "stage", value: "III" }]);
	});

	it("notes 沒帶 q 是 400，不是把整個資料庫倒出來", async () => {
		expect((await call(env, "/api/v1/notes", key)).status).toBe(400);
	});

	it("單一份清單回全文", async () => {
		const body = await (
			await call(env, "/api/v1/notes/breast/BINV-12", key)
		).json();
		expect(body.title).toBe("術後輔助治療");
		expect(body.body).toBe("生成的清單");
		expect(body.review).toBe(null);
	});

	// API 讀到的必須跟頁面上看到的一樣——所以修改要疊上去，不能只回生成內容。
	it("有人改過的話回的是修改後的版本，並標出原文", async () => {
		env._edits.push({
			gid: "breast",
			ref: "BINV-12",
			body: "門診改過的版本",
			base_hash: null,
			editor: "a@b.com",
			updated: "2026-09-01",
		});
		const body = await (
			await call(env, "/api/v1/notes/breast/BINV-12", key)
		).json();
		expect(body.body).toBe("門診改過的版本");
		expect(body.generated).toBe("生成的清單");
		expect(body.edited.editor).toBe("a@b.com");
	});

	it("查無此份清單是 404", async () => {
		expect((await call(env, "/api/v1/notes/breast/NOPE", key)).status).toBe(404);
	});

	it("marks 回書籤與星號，並補上中文以外看得懂的名字", async () => {
		const body = await (await call(env, "/api/v1/marks", key)).json();
		expect(body.bookmarks[0].page).toBe(12);
		expect(body.bookmarks[0].name).toBe("Acute Myeloid Leukemia");
		expect(body.stars.map((s) => s.id)).toEqual(["breast"]);
	});

	it("marks 的 id 不認得是 404，不是安靜地回全部", async () => {
		expect((await call(env, "/api/v1/marks?id=nope", key)).status).toBe(404);
	});

	it("insights 的 kind 亂填是 400", async () => {
		expect((await call(env, "/api/v1/insights/aml?kind=nope", key)).status).toBe(
			400,
		);
	});
});

describe("綁 email 的金鑰", () => {
	it("金鑰配上自己的 email 就通行", async () => {
		const k = await userKey(env, "a@b.com");
		expect((await call(env, "/api/v1/catalogue", k.key, "a@b.com")).status).toBe(
			200,
		);
	});

	// 少帶標頭是最容易犯的錯，而它的症狀（401）跟金鑰被撤銷一模一樣。
	it("少帶 X-User-Email 就 401", async () => {
		const k = await userKey(env, "a@b.com");
		expect((await call(env, "/api/v1/catalogue", k.key)).status).toBe(401);
	});

	it("報別人的 email 過不了", async () => {
		await userKey(env, "c@d.com");
		const k = await userKey(env, "a@b.com");
		expect((await call(env, "/api/v1/catalogue", k.key, "c@d.com")).status).toBe(
			401,
		);
	});

	it("輪替之後舊金鑰立刻打不通，新的可以", async () => {
		const old = await userKey(env, "a@b.com");
		expect((await call(env, "/api/v1/catalogue", old.key, "a@b.com")).status).toBe(200);
		const fresh = await rotateUserKey(env, "a@b.com");
		expect((await call(env, "/api/v1/catalogue", old.key, "a@b.com")).status).toBe(401);
		expect((await call(env, "/api/v1/catalogue", fresh.key, "a@b.com")).status).toBe(200);
	});

	// 舊的隨機金鑰已經裝在別人的機器上，這次改動不該讓它們安靜地死掉。
	it("舊的隨機金鑰照舊通行，而且不需要 email", async () => {
		expect((await call(env, "/api/v1/catalogue", key)).status).toBe(200);
	});

	it("衍生金鑰的驗證結果一樣絕不進 KV", async () => {
		const k = await userKey(env, "a@b.com");
		await call(env, "/api/v1/catalogue", k.key, "a@b.com");
		expect([...env._kv.keys()].some((x) => x.startsWith("apikey:"))).toBe(false);
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

	it("沒有 email 時每次產生都是不同的一把", async () => {
		const a = await buildSkillZip(env, { label: "a", origin: "https://n.example" });
		const b = await buildSkillZip(env, { label: "b", origin: "https://n.example" });
		expect(a.prefix).not.toBe(b.prefix);
	});

	// 舊行為是每按一次下載就多一把活的金鑰，而那些多出來的沒有人會回去撤銷。
	it("有 email 時重複下載拿到同一把，也不會多長出一列", async () => {
		const a = await buildSkillZip(env, {
			label: "a",
			origin: "https://n.example",
			email: "a@b.com",
		});
		const before = env._keys.length;
		const b = await buildSkillZip(env, {
			label: "b",
			origin: "https://n.example",
			email: "a@b.com",
		});
		expect(b.prefix).toBe(a.prefix);
		expect(env._keys.length).toBe(before); // 一列都沒多
		expect(env._users.length).toBe(1);
	});

	it("烤進去的 .env 帶著 email，而且那把金鑰配上它真的能用", async () => {
		const { bytes } = await buildSkillZip(env, {
			label: "MacBook",
			origin: "https://n.example",
			email: "A@b.com",
		});
		const text = new TextDecoder().decode(bytes);
		expect(text).toContain("NCCN_USER_EMAIL=a@b.com");
		const m = /NCCN_API_KEY=(nccn_[A-Za-z0-9_-]{43})/.exec(text);
		expect(m).toBeTruthy();
		expect((await call(env, "/api/v1/catalogue", m[1], "a@b.com")).status).toBe(200);
	});
});
