// generateAndCache 的 provider 選擇與掉階邏輯：撞到當日上限往下一階走，
// 整條階梯用完才交回 Workers AI，兩邊都沒額度才丟 429。
import { afterEach, describe, expect, it, vi } from "vitest";
import { LADDER } from "../src/lib/gemini.js";
import { generateAndCache } from "../src/lib/insight.js";

// 只認得這幾張表的 D1 stub：SELECT 回預先塞好的列，其餘語句記下來就好。
function fakeDB(calls) {
	const writes = [];
	return {
		writes,
		prepare(sql) {
			const stmt = {
				sql,
				args: [],
				bind(...a) {
					stmt.args = a;
					return stmt;
				},
				async all() {
					if (/FROM ai_calls/.test(sql)) {
						return {
							results: Object.entries(calls).map(([model, v]) => ({
								model,
								calls: v.calls,
								cool: v.cool || null,
							})),
						};
					}
					return { results: [] };
				},
				async first() {
					if (/FROM ai_usage/.test(sql)) return { neurons: 0, calls: 0 };
					return null;
				},
				async run() {
					writes.push({ sql, args: stmt.args });
					return { success: true };
				},
			};
			return stmt;
		},
	};
}

const OPTS = {
	gid: "breast",
	page: 20,
	kind: "key",
	name: "Breast Cancer",
	text: "Adjuvant endocrine therapy is recommended. The panel reviewed the data. Consensus was reached. Toxicity was increased. See Smith et al. Tamoxifen remains an option.",
	provider: "ag",
};

const OK = (text) => ({
	ok: true,
	status: 200,
	json: async () => ({
		candidates: [{ content: { parts: [{ text }] }, finishReason: "STOP" }],
		usageMetadata: { totalTokenCount: 100 },
	}),
});

const QUOTA = (id) => ({
	ok: false,
	status: 429,
	statusText: "Too Many Requests",
	json: async () => ({
		error: {
			message: "quota",
			details: [
				{
					"@type": "type.googleapis.com/google.rpc.QuotaFailure",
					violations: [{ quotaId: id }],
				},
			],
		},
	}),
});

afterEach(() => vi.unstubAllGlobals());

describe("Antigravity ladder", () => {
	it("uses the top rung when it is free", async () => {
		vi.stubGlobal(
			"fetch",
			vi.fn(async () => OK("- alpha\n- beta")),
		);
		const out = await generateAndCache(
			{ DB: fakeDB({}), ANTIGRAVITY_API_KEY: "k" },
			OPTS,
		);
		expect(out.provider).toBe("ag");
		expect(out.model).toBe(LADDER[0].id);
		expect(out.bullets).toEqual(["alpha", "beta"]);
		expect(out.fell).toBe(false);
	});

	it("drops to the next rung on a per-day 429 and records the wall", async () => {
		const fetchMock = vi
			.fn()
			.mockResolvedValueOnce(QUOTA("GenerateRequestsPerDayPerProjectPerModel"))
			.mockResolvedValue(OK("- gamma"));
		vi.stubGlobal("fetch", fetchMock);
		const db = fakeDB({});
		const out = await generateAndCache(
			{ DB: db, ANTIGRAVITY_API_KEY: "k" },
			OPTS,
		);
		expect(out.model).toBe(LADDER[1].id);
		expect(out.notes.join()).toContain(LADDER[0].id);
		// 第一階被記到滿，下一次就不會再打它
		const mark = db.writes.find(
			(w) => w.args[1] === LADDER[0].id && w.args[2] === LADDER[0].rpd,
		);
		expect(mark).toBeTruthy();
	});

	it("skips rungs already known to be spent, without a wasted round trip", async () => {
		const fetchMock = vi.fn(async () => OK("- delta"));
		vi.stubGlobal("fetch", fetchMock);
		const spent = {};
		for (const m of LADDER.slice(0, 3)) spent[m.id] = { calls: m.rpd };
		const out = await generateAndCache(
			{ DB: fakeDB(spent), ANTIGRAVITY_API_KEY: "k" },
			OPTS,
		);
		expect(out.model).toBe(LADDER[3].id);
		expect(fetchMock).toHaveBeenCalledTimes(1);
		expect(fetchMock.mock.calls[0][0]).toContain(LADDER[3].id);
	});

	it("falls back to Workers AI once the whole ladder is spent", async () => {
		vi.stubGlobal(
			"fetch",
			vi.fn(async () => OK("- never")),
		);
		const spent = {};
		for (const m of LADDER) spent[m.id] = { calls: m.rpd };
		const out = await generateAndCache(
			{
				DB: fakeDB(spent),
				ANTIGRAVITY_API_KEY: "k",
				AI: { run: async () => ({ response: "- cf bullet", usage: { neurons: 5 } }) },
			},
			OPTS,
		);
		expect(out.provider).toBe("cf");
		expect(out.fell).toBe(true);
		expect(out.bullets).toEqual(["cf bullet"]);
	});

	it("throws 429 only when Workers AI is out of neurons too", async () => {
		const spent = {};
		for (const m of LADDER) spent[m.id] = { calls: m.rpd };
		const db = fakeDB(spent);
		// ai_usage 回滿額
		const prep = db.prepare.bind(db);
		db.prepare = (sql) => {
			const s = prep(sql);
			if (/FROM ai_usage/.test(sql)) s.first = async () => ({ neurons: 9999, calls: 1 });
			return s;
		};
		await expect(
			generateAndCache({ DB: db, ANTIGRAVITY_API_KEY: "k" }, OPTS),
		).rejects.toMatchObject({ status: 429 });
	});

	it("stays on Workers AI when the reader picked it", async () => {
		const fetchMock = vi.fn(async () => OK("- never"));
		vi.stubGlobal("fetch", fetchMock);
		const out = await generateAndCache(
			{
				DB: fakeDB({}),
				ANTIGRAVITY_API_KEY: "k",
				AI: { run: async () => ({ response: "- cf only", usage: { neurons: 3 } }) },
			},
			{ ...OPTS, provider: "cf" },
		);
		expect(out.provider).toBe("cf");
		expect(out.fell).toBe(false);
		expect(fetchMock).not.toHaveBeenCalled();
	});
});
