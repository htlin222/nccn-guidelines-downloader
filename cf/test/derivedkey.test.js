import { beforeEach, describe, expect, it } from "vitest";
import {
	deriveKey,
	looksLikeDerived,
	looksLikeKey,
	normEmail,
	resetKeyCache,
	rotateUserKey,
	safeEqual,
	userKey,
	verifyKey,
} from "../src/lib/apikey.js";

// mem 是 module 層的 isolate 快取，不倒掉的話前一個測試驗過的金鑰會在這個測試裡
// 繼續有效 10 秒——「這把應該要失效」就會測成綠的。
beforeEach(() => resetKeyCache());

// 綁 email 的 HMAC 衍生金鑰（issue #11）。
//
// 這裡釘的是三件會安靜壞掉的事：
// 1. 衍生函式的定值——它算錯的話沒有任何錯誤訊息，只有「金鑰驗不過」。
// 2. 未知 email 與錯金鑰的回應必須一模一樣。/api/v1 走 Access Bypass，任何差別
//    都等於讓外面的人可以列舉成員。
// 3. 舊的隨機金鑰仍然驗得過——它們已經裝在別人的機器上。

const SECRET = "test-secret-do-not-use";

function fakeEnv(users = []) {
	const rows = users.map((u) => ({ calls: 0, ...u }));
	const run = (sql, binds) => {
		if (/INSERT INTO api_users/.test(sql)) {
			const em = binds[0];
			const found = rows.find((r) => r.email === em);
			if (!found)
				rows.push({
					email: em,
					key_version: /DO UPDATE/.test(sql) ? 2 : 1,
					created: binds[1],
					updated: binds[2],
					calls: 0,
				});
			else if (/DO UPDATE/.test(sql)) {
				found.key_version += 1;
				found.updated = binds[2];
			}
			return { results: [] };
		}
		if (/FROM api_users WHERE email/.test(sql)) {
			const row = rows.find((r) => r.email === binds[0]);
			return { first: row || null };
		}
		if (/UPDATE api_users SET last_used/.test(sql)) {
			const row = rows.find((r) => r.email === binds[1]);
			if (row) {
				row.last_used = binds[0];
				row.calls += 1;
			}
			return { results: [] };
		}
		if (/FROM api_keys/.test(sql)) return { first: null, results: [] };
		throw new Error("假 D1 沒有處理這句 SQL：" + sql);
	};
	return {
		_rows: rows,
		API_KEY_SECRET: SECRET,
		DB: {
			prepare: (sql) => ({
				bind: (...b) => ({
					all: async () => run(sql, b),
					first: async () => run(sql, b).first ?? null,
					run: async () => run(sql, b),
				}),
				all: async () => run(sql, []),
				first: async () => run(sql, []).first ?? null,
				run: async () => run(sql, []),
			}),
		},
	};
}

describe("deriveKey", () => {
	// 定值。這個期望值不是把實作跑一遍抄下來的——它是照規格
	// HMAC-SHA256(SECRET, "a@b.com:1") 用 node:crypto 這個獨立實作算出來的，
	// 所以兩邊算法真的分開之後才有意義。
	it("對已知輸入產出已知的金鑰", async () => {
		const { createHmac } = await import("node:crypto");
		const expected =
			"nccn_" +
			createHmac("sha256", SECRET)
				.update("a@b.com:1")
				.digest("base64url");
		expect(await deriveKey(SECRET, "a@b.com", 1)).toBe(expected);
	});

	it("是純函式：同輸入永遠同輸出", async () => {
		const a = await deriveKey(SECRET, "a@b.com", 3);
		const b = await deriveKey(SECRET, "a@b.com", 3);
		expect(a).toBe(b);
	});

	it("email、版本、secret 任一不同就是不同的金鑰", async () => {
		const base = await deriveKey(SECRET, "a@b.com", 1);
		expect(await deriveKey(SECRET, "c@d.com", 1)).not.toBe(base);
		expect(await deriveKey(SECRET, "a@b.com", 2)).not.toBe(base);
		expect(await deriveKey("other", "a@b.com", 1)).not.toBe(base);
	});

	it("email 大小寫與前後空白不影響結果", async () => {
		expect(await deriveKey(SECRET, "  A@B.com ", 1)).toBe(
			await deriveKey(SECRET, "a@b.com", 1),
		);
		expect(normEmail("  A@B.com ")).toBe("a@b.com");
	});

	it("產出的一定通過衍生格式檢查，而且不會被誤認成舊格式", async () => {
		for (const em of ["a@b.com", "someone.long+tag@example.org", "x@y.tw"]) {
			const k = await deriveKey(SECRET, em, 1);
			expect(looksLikeDerived(k)).toBe(true);
			expect(looksLikeKey(k)).toBe(false);
		}
	});

	it("舊格式不會被誤認成衍生金鑰", () => {
		expect(looksLikeDerived("nccn_" + "0".repeat(32))).toBe(false);
	});
});

describe("safeEqual", () => {
	it("同字串為真、異字串為假", async () => {
		expect(await safeEqual("abc", "abc")).toBe(true);
		expect(await safeEqual("abc", "abd")).toBe(false);
		expect(await safeEqual("abc", "abcd")).toBe(false);
	});
});

describe("userKey / rotateUserKey", () => {
	it("第一次拿就建一列，版本從 1 起跳", async () => {
		const env = fakeEnv();
		const k = await userKey(env, "A@b.com");
		expect(k.email).toBe("a@b.com");
		expect(k.version).toBe(1);
		expect(k.key).toBe(await deriveKey(SECRET, "a@b.com", 1));
		expect(env._rows.length).toBe(1);
	});

	// 舊行為是每按一次下載就多一把活的金鑰，而那些多出來的沒有人會回去撤銷。
	it("同一個人重複拿到的是同一把，不會愈積愈多", async () => {
		const env = fakeEnv();
		const a = await userKey(env, "a@b.com");
		const b = await userKey(env, "a@b.com");
		expect(b.key).toBe(a.key);
		expect(env._rows.length).toBe(1);
	});

	it("輪替換掉自己的金鑰，不動別人的", async () => {
		const env = fakeEnv();
		const mine = await userKey(env, "a@b.com");
		const theirs = await userKey(env, "c@d.com");
		const after = await rotateUserKey(env, "a@b.com");
		expect(after.version).toBe(2);
		expect(after.key).not.toBe(mine.key);
		expect((await userKey(env, "c@d.com")).key).toBe(theirs.key);
	});

	it("沒設 API_KEY_SECRET 就拿不到金鑰，而不是拿到一把假的", async () => {
		const env = fakeEnv();
		env.API_KEY_SECRET = "";
		expect(await userKey(env, "a@b.com")).toBe(null);
	});
});

describe("verifyKey：衍生金鑰", () => {
	const ctx = { waitUntil: (p) => p };

	it("金鑰配上自己的 email 就過", async () => {
		const env = fakeEnv();
		const k = await userKey(env, "a@b.com");
		expect((await verifyKey(env, k.key, ctx, "a@b.com")).ok).toBe(true);
	});

	// 冒用別人的 email：那個 email 被綁進 HMAC，所以算出來的期望值對不上。
	it("拿自己的金鑰報別人的 email 過不了", async () => {
		const env = fakeEnv();
		await userKey(env, "c@d.com");
		const k = await userKey(env, "a@b.com");
		expect((await verifyKey(env, k.key, ctx, "c@d.com")).ok).toBe(false);
	});

	it("少了 email 就過不了", async () => {
		const env = fakeEnv();
		const k = await userKey(env, "a@b.com");
		expect((await verifyKey(env, k.key, ctx, "")).ok).toBe(false);
		expect((await verifyKey(env, k.key, ctx, undefined)).ok).toBe(false);
	});

	it("輪替之後舊金鑰立刻失效", async () => {
		const env = fakeEnv();
		const old = await userKey(env, "a@b.com");
		const fresh = await rotateUserKey(env, "a@b.com");
		expect((await verifyKey(env, old.key, ctx, "a@b.com")).ok).toBe(false);
		expect((await verifyKey(env, fresh.key, ctx, "a@b.com")).ok).toBe(true);
	});

	// 這是這個模式最容易做錯的地方：查無此人時提早 return，就等於告訴外面的人
	// 「這個 email 在名單上」。
	it("未知 email 與錯金鑰回的東西完全一樣", async () => {
		const env = fakeEnv();
		await userKey(env, "a@b.com");
		const bogus = await deriveKey("wrong-secret", "a@b.com", 1);
		const wrongKey = await verifyKey(env, bogus, ctx, "a@b.com");
		const unknown = await verifyKey(env, bogus, ctx, "nobody@example.com");
		expect(unknown).toEqual(wrongKey);
		expect(unknown.ok).toBe(false);
	});

	it("apiuser.sql 沒跑過時當成驗不過，而不是放行", async () => {
		const env = fakeEnv();
		const k = await userKey(env, "a@b.com");
		env.DB.prepare = () => ({
			bind: () => ({
				first: async () => {
					throw new Error("no such table: api_users");
				},
			}),
		});
		expect((await verifyKey(env, k.key, ctx, "a@b.com")).ok).toBe(false);
	});
});
