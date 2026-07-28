import { describe, expect, it } from "vitest";
import {
	LADDER,
	LADDER_CAP,
	buildBody,
	classifyError,
	ladderModel,
	parseResponse,
	pickModels,
	toParts,
} from "../src/lib/gemini.js";

describe("LADDER", () => {
	it("orders newest-first and puts the high-quota Lite tiers underneath", () => {
		expect(LADDER[0].id).toBe("gemini-3.6-flash");
		const lite = LADDER.findIndex((m) => m.id === "gemini-3.5-flash-lite");
		const flash = LADDER.findIndex((m) => m.id === "gemini-3.5-flash");
		expect(flash).toBeLessThan(lite);
		expect(LADDER[lite].rpd).toBeGreaterThan(LADDER[flash].rpd);
	});
	it("sums the daily cap across every rung", () => {
		expect(LADDER_CAP).toBe(LADDER.reduce((n, m) => n + m.rpd, 0));
	});
	it("never lists gemini-2.5-flash-lite, which now 404s for new keys", () => {
		expect(ladderModel("gemini-2.5-flash-lite")).toBeNull();
	});
});

describe("pickModels", () => {
	const T = Date.parse("2026-07-28T10:00:00Z");
	it("returns the whole ladder when nothing has been used", () => {
		expect(pickModels({}, T)).toHaveLength(LADDER.length);
	});
	it("drops a rung once its per-day quota is spent", () => {
		const out = pickModels({ "gemini-3.6-flash": { calls: 20 } }, T);
		expect(out[0].id).toBe("gemini-3.5-flash");
	});
	it("skips a rung that is still cooling down after a per-minute 429", () => {
		const cool = new Date(T + 30000).toISOString();
		const out = pickModels({ "gemini-3.6-flash": { calls: 1, cool } }, T);
		expect(out.map((m) => m.id)).not.toContain("gemini-3.6-flash");
		// 冷卻過了就回來
		expect(
			pickModels({ "gemini-3.6-flash": { calls: 1, cool } }, T + 60000)[0].id,
		).toBe("gemini-3.6-flash");
	});
	it("returns nothing when every rung is spent", () => {
		const state = {};
		for (const m of LADDER) state[m.id] = { calls: m.rpd };
		expect(pickModels(state, T)).toEqual([]);
	});
});

describe("classifyError", () => {
	const quota = (id) => ({
		error: {
			details: [
				{
					"@type": "type.googleapis.com/google.rpc.QuotaFailure",
					violations: [{ quotaId: id, quotaMetric: "generativelanguage/x" }],
				},
			],
		},
	});
	it("separates the per-day wall from a per-minute burst", () => {
		expect(
			classifyError(429, quota("GenerateRequestsPerDayPerProjectPerModel-FreeTier")),
		).toBe("day");
		expect(
			classifyError(429, quota("GenerateRequestsPerMinutePerProjectPerModel")),
		).toBe("minute");
	});
	it("treats an unlabelled 429 as per-minute rather than burning the whole day", () => {
		expect(classifyError(429, {})).toBe("minute");
	});
	it("maps auth, retired models and server faults", () => {
		expect(classifyError(403, {})).toBe("auth");
		expect(classifyError(404, {})).toBe("gone");
		expect(classifyError(503, {})).toBe("server");
		expect(classifyError(400, {})).toBe("bad");
	});
});

describe("buildBody", () => {
	it("uses thinkingLevel on 3.x, where thinkingBudget:0 is rejected", () => {
		const cfg = buildBody("gemini-3.6-flash", {
			system: "s",
			parts: [{ text: "q" }],
		}).generationConfig;
		expect(cfg.thinkingConfig).toEqual({ thinkingLevel: "low" });
		// thinking 的 token 也算進上限，開太小會被截在半句話
		expect(cfg.maxOutputTokens).toBeGreaterThanOrEqual(2000);
	});
	it("uses thinkingBudget on 2.5, where thinkingLevel is rejected", () => {
		const cfg = buildBody("gemini-2.5-flash", {
			system: "s",
			parts: [{ text: "q" }],
		}).generationConfig;
		expect(cfg.thinkingConfig).toEqual({ thinkingBudget: 0 });
	});
	it("carries the system instruction and parts through", () => {
		const b = buildBody("gemini-3.6-flash", {
			system: "sys",
			parts: [{ text: "hi" }],
		});
		expect(b.system_instruction.parts[0].text).toBe("sys");
		expect(b.contents[0].parts).toEqual([{ text: "hi" }]);
	});
});

describe("toParts", () => {
	it("folds head and body into one text part when there is no image", () => {
		expect(toParts("head", "body", null)).toEqual([{ text: "head\n\nbody" }]);
		expect(toParts("head", "", null)).toEqual([{ text: "head" }]);
	});
	it("puts the JPEG between the prompt and the extracted text", () => {
		const out = toParts("head", "body", "AAAA");
		expect(out[0]).toEqual({ text: "head" });
		expect(out[1].inline_data).toEqual({
			mime_type: "image/jpeg",
			data: "AAAA",
		});
		expect(out[2]).toEqual({ text: "body" });
	});
});

describe("parseResponse", () => {
	it("keeps visible text and drops thought parts", () => {
		const out = parseResponse({
			candidates: [
				{
					content: { parts: [{ text: "думка", thought: true }, { text: "- a" }] },
					finishReason: "STOP",
				},
			],
			usageMetadata: { totalTokenCount: 90, thoughtsTokenCount: 40 },
		});
		expect(out.text).toBe("- a");
		expect(out.finish).toBe("STOP");
		expect(out.tokens).toBe(90);
		expect(out.thoughts).toBe(40);
	});
	it("survives an empty candidate list", () => {
		expect(parseResponse({}).text).toBe("");
	});
});
