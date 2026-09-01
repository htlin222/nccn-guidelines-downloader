// Groq（非推理模型，oneshot）：把 gen_insights.sh／Worker 已經讀好圖存進 page_raw
// 的那份「完整轉寫」，一次呼叫轉成四種格式（key/hy/phrase/sdm）的 JSON。不碰圖，
// 純文字進、純文字出，所以比讀圖便宜很多——這正是 issue #9 要解的問題：讀圖只做
// 一次（Gemini），格式化才是四次，而格式化本來就不需要多模態模型。
//
// 免費層是 RPD／TPD（次數／token 每日上限），不是 Gemini 那種逐模型計量，一顆
// 模型就夠：llama-3.1-8b-instant，非推理、oneshot、response_format 用
// json_object 讓四種格式一次回來，不必分開問四次。

export const GROQ_BASE = "https://api.groq.com/openai/v1/chat/completions";
export const GROQ_MODEL = "llama-3.1-8b-instant";

/**
 * 把 Groq 的錯誤分類，跟 gemini.js classifyError 同一套詞彙（day/minute/auth/
 * gone/server/bad），gen_insights.sh 與 Worker 端可以用同一種方式決定要不要
 * 停手續跑。Groq 的 429 主體不像 Gemini 帶結構化 quotaId，只能從錯誤訊息猜，
 * 猜不出來就當 minute 處理——寧可稍後重試，也不要把一整天的額度平白判死。
 */
export function classifyGroqError(status, body) {
	if (status === 401 || status === 403) return "auth";
	if (status === 404) return "gone";
	if (status === 429) {
		const msg = String(body?.error?.message || "").toLowerCase();
		if (/\bday\b|per day|tokens per day|requests per day/.test(msg))
			return "day";
		return "minute";
	}
	if (status >= 500) return "server";
	return "bad";
}

/** 組 chat completion 的 request body。 */
export function buildGroqBody(system, userText) {
	return {
		model: GROQ_MODEL,
		messages: [
			{ role: "system", content: system },
			{ role: "user", content: userText },
		],
		temperature: 0.2,
		max_tokens: 1600,
		response_format: { type: "json_object" },
	};
}

/**
 * 把回應內容解析成物件。json_object 模式下 Groq 幾乎都會回乾淨的 JSON，但仍防
 * 一手模型偶爾包 ```json 圍籬或前後贅字的情況——抓第一個 {...} 區塊再試一次。
 * 兩次都失敗回 null，呼叫端要自己決定要不要當失敗處理。
 */
export function parseGroqJSON(text) {
	try {
		return JSON.parse(text);
	} catch (e) {
		// fall through
	}
	const m = String(text || "").match(/\{[\s\S]*\}/);
	if (m) {
		try {
			return JSON.parse(m[0]);
		} catch (e2) {
			// fall through
		}
	}
	return null;
}

/** 打一次 Groq。回傳 { ok, text, ... } 或 { ok:false, kind, status, message }。 */
export async function callGroq(key, system, userText) {
	let res;
	try {
		res = await fetch(GROQ_BASE, {
			method: "POST",
			headers: {
				Authorization: "Bearer " + key,
				"content-type": "application/json",
			},
			body: JSON.stringify(buildGroqBody(system, userText)),
			signal: AbortSignal.timeout(60000),
		});
	} catch (e) {
		return { ok: false, kind: "server", status: 0, message: String(e?.message || e) };
	}
	const body = await res.json().catch(() => ({}));
	if (!res.ok) {
		return {
			ok: false,
			kind: classifyGroqError(res.status, body),
			status: res.status,
			message: String(body?.error?.message || res.statusText || res.status),
		};
	}
	const msg = body?.choices?.[0]?.message || {};
	return {
		ok: true,
		text: msg.content || "",
		finish: body?.choices?.[0]?.finish_reason || "",
		tokens: body?.usage?.total_tokens || 0,
	};
}

/** 今日已用（Worker 端量小，不做逐分鐘冷卻，撞到 429 直接讓呼叫端 fallback）。 */
export async function readGroqUsage(env) {
	const day = new Date().toISOString().slice(0, 10);
	try {
		const row = await env.DB.prepare(
			"SELECT requests, tokens FROM groq_usage WHERE day = ?",
		)
			.bind(day)
			.first();
		return { day, requests: row?.requests || 0, tokens: row?.tokens || 0 };
	} catch (e) {
		return { day, requests: 0, tokens: 0 };
	}
}

export async function bumpGroq(env, day, tokens) {
	try {
		await env.DB.prepare(
			"INSERT INTO groq_usage(day, requests, tokens) VALUES(?, 1, ?) " +
				"ON CONFLICT(day) DO UPDATE SET requests = requests + 1, tokens = tokens + excluded.tokens",
		)
			.bind(day, tokens || 0)
			.run();
	} catch (e) {
		// 記帳失敗不該讓已經產好的內容消失。
	}
}
