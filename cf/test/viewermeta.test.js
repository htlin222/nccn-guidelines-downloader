import { describe, expect, it } from "vitest";
import { viewerMeta } from "../src/lib/viewermeta.js";

// 最小的 R2 替身。keys 對到字串內容；不在裡面的 key 一律 null。
function fakeEnv(keys, opts = {}) {
	return {
		PDFS: {
			async get(k) {
				if (opts.throwOn === k) throw new Error("R2 down");
				if (!(k in keys)) return null;
				return { async text() { return keys[k]; } };
			},
			async head(k) {
				if (opts.throwOn === k) throw new Error("R2 down");
				return k in keys ? { size: keys[k].length } : null;
			},
		},
	};
}

const VERSIONS = JSON.stringify({ aml: { v: "5.2026", d: "July 15, 2026" } });
const CLEAN = JSON.stringify({ aml: { pages: 213, src_sha: "x" } });

describe("viewerMeta", () => {
	it("把版本、日期、頁數、有沒有 TOC 一次拿齊", async () => {
		const env = fakeEnv({
			"meta/versions.json": VERSIONS,
			"meta/clean.json": CLEAN,
			"meta/toc/aml.json": "[]",
		});
		expect(await viewerMeta(env, "aml")).toEqual({
			version: "5.2026",
			date: "July 15, 2026",
			pages: 213,
			hasToc: true,
		});
	});

	it("沒有 TOC 物件就是 false，不是 undefined", async () => {
		const env = fakeEnv({
			"meta/versions.json": VERSIONS,
			"meta/clean.json": CLEAN,
		});
		expect((await viewerMeta(env, "aml")).hasToc).toBe(false);
	});

	// 以下四條是同一個約定：metadata 是加分項，不是新的失敗點。缺任何一塊，
	// 該欄位是 null，viewer 退回今天的行為（徽章 hidden、頁數 –、不建骨架），
	// 而不是整頁 500。
	it("目錄裡還沒有這一份時，每一欄都是 null", async () => {
		const env = fakeEnv({
			"meta/versions.json": VERSIONS,
			"meta/clean.json": CLEAN,
		});
		expect(await viewerMeta(env, "brand_new")).toEqual({
			version: null,
			date: null,
			pages: null,
			hasToc: false,
		});
	});

	it("manifest 完全不存在時不會炸", async () => {
		expect(await viewerMeta(fakeEnv({}), "aml")).toEqual({
			version: null,
			date: null,
			pages: null,
			hasToc: false,
		});
	});

	it("manifest 是壞掉的 JSON 時不會炸", async () => {
		const env = fakeEnv({
			"meta/versions.json": "{ not json",
			"meta/clean.json": CLEAN,
		});
		const m = await viewerMeta(env, "aml");
		expect(m.version).toBeNull();
		expect(m.pages).toBe(213); // 另一份仍然可用
	});

	it("R2 直接丟例外時不會炸", async () => {
		const env = fakeEnv(
			{ "meta/versions.json": VERSIONS, "meta/clean.json": CLEAN },
			{ throwOn: "meta/versions.json" },
		);
		const m = await viewerMeta(env, "aml");
		expect(m.version).toBeNull();
		expect(m.pages).toBe(213);
	});

	it("pages 不是正整數就當作沒有——骨架寧可不建，也不能建錯格數", async () => {
		const env = fakeEnv({
			"meta/versions.json": VERSIONS,
			"meta/clean.json": JSON.stringify({ aml: { pages: 0 }, b: { pages: -3 } }),
		});
		expect((await viewerMeta(env, "aml")).pages).toBeNull();
		expect((await viewerMeta(env, "b")).pages).toBeNull();
	});
});
