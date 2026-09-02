import { describe, expect, it } from "vitest";
import {
	GROQ_MODEL,
	GROQ_REASONING_EFFORT,
	buildGroqBody,
	classifyGroqError,
	parseGroqJSON,
} from "../src/lib/groq.js";

describe("classifyGroqError", () => {
	it("maps auth, retired models and server faults", () => {
		expect(classifyGroqError(401, {})).toBe("auth");
		expect(classifyGroqError(403, {})).toBe("auth");
		expect(classifyGroqError(404, {})).toBe("gone");
		expect(classifyGroqError(503, {})).toBe("server");
		expect(classifyGroqError(400, {})).toBe("bad");
	});
	it("separates a daily-cap message from an unlabelled 429", () => {
		expect(
			classifyGroqError(429, {
				error: { message: "Rate limit reached for tokens per day (TPD)" },
			}),
		).toBe("day");
		expect(classifyGroqError(429, {})).toBe("minute");
	});
});

describe("buildGroqBody", () => {
	it("asks for a JSON object back so the four kinds parse reliably", () => {
		const b = buildGroqBody("sys", "user");
		expect(b.model).toBe(GROQ_MODEL);
		expect(b.response_format).toEqual({ type: "json_object" });
		expect(b.messages).toEqual([
			{ role: "system", content: "sys" },
			{ role: "user", content: "user" },
		]);
	});
	// medium 是實測出來唯一真的可用的一階：low 會四種格式全部照抄同一份內容
	// 交差，high 在合理的 max_tokens 內會把 token 燒光在 reasoning 上生不出
	// 合法 JSON。這個斷言是防呆——之後有人手滑改成 low/high 測試會立刻紅燈。
	it("uses medium reasoning effort — low silently collapses all four formats into one", () => {
		expect(buildGroqBody("sys", "user").reasoning_effort).toBe("medium");
		expect(GROQ_REASONING_EFFORT).toBe("medium");
	});
	it("gives reasoning enough room that a full raw transcription doesn't starve the JSON output", () => {
		expect(buildGroqBody("sys", "user").max_tokens).toBeGreaterThanOrEqual(4000);
	});
});

describe("parseGroqJSON", () => {
	it("parses a clean JSON object", () => {
		expect(parseGroqJSON('{"key":["a","b"]}')).toEqual({ key: ["a", "b"] });
	});
	it("recovers JSON wrapped in a markdown code fence", () => {
		const text = '```json\n{"key":["a"]}\n```';
		expect(parseGroqJSON(text)).toEqual({ key: ["a"] });
	});
	it("recovers JSON with leading/trailing prose", () => {
		const text = 'Here you go:\n{"hy":["x"]}\nHope that helps!';
		expect(parseGroqJSON(text)).toEqual({ hy: ["x"] });
	});
	it("returns null when nothing parses", () => {
		expect(parseGroqJSON("not json at all")).toBeNull();
		expect(parseGroqJSON("")).toBeNull();
	});
});
