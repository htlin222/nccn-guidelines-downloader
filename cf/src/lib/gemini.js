// Antigravity（Google Gemini API）作為 AI 逐頁重點的第二個來源，跟 Workers AI 並存。
//
// 為什麼要階梯而不是固定一個模型：免費層的瓶頸是 RPD（每模型每天的請求數），
// 最好的 Flash 一天只有 20 次，Flash Lite 則有 500 次。所以照「新世代優先、
// 額度大的墊底」排一條階梯，撞到當日上限就自動往下一階走，全部用完再交回
// Workers AI。實測（2026-07）的關鍵行為：
//
//   * Gemini 3.x 預設會 thinking，且 thinking 的 token 也算進 maxOutputTokens。
//     用 800 上限跑 3.6-flash 會 finishReason=MAX_TOKENS、只吐出半句話。
//     → 3.x 一律送 thinkingConfig.thinkingLevel="low" 並把上限開到 2400。
//   * thinkingBudget:0 在 3.6-flash 會回 400 INVALID_ARGUMENT（其他 3.x 可以），
//     反過來 thinkingLevel 在 2.5-flash 是 400 "not supported"。兩種寫法都要留。
//   * gemini-2.5-flash-lite 已經 404「no longer available to new users」，別放進來。

export const GEMINI_BASE =
	"https://generativelanguage.googleapis.com/v1beta/models/";

// rpd = 免費層每日請求上限（AI Studio 配額表）。順序就是優先序。
export const LADDER = [
	{ id: "gemini-3.6-flash", rpd: 20, think: "level" },
	{ id: "gemini-3.5-flash", rpd: 20, think: "level" },
	{ id: "gemini-3-flash-preview", rpd: 20, think: "level" },
	{ id: "gemini-3.5-flash-lite", rpd: 500, think: "level" },
	{ id: "gemini-3.1-flash-lite", rpd: 500, think: "level" },
	{ id: "gemini-2.5-flash", rpd: 20, think: "budget" },
];

export const LADDER_CAP = LADDER.reduce((n, m) => n + m.rpd, 0);

export function ladderModel(id) {
	return LADDER.find((m) => m.id === id) || null;
}

/**
 * 挑出現在還能用的模型，依階梯順序。
 * state：{ [model]: { calls, cool } }，calls = 今天已用次數，cool = ISO 冷卻到期。
 */
export function pickModels(state, now) {
	const t = now || Date.now();
	return LADDER.filter((m) => {
		const s = (state || {})[m.id] || {};
		if ((s.calls || 0) >= m.rpd) return false;
		if (s.cool && Date.parse(s.cool) > t) return false;
		return true;
	});
}

/**
 * 把 API 錯誤分類，決定要不要把這個模型記成「今天不用了」。
 *   day    — 撞到 RPD，當天不再嘗試
 *   minute — 撞到 RPM，冷一分鐘就好，別浪費整天額度
 *   gone   — 模型下架（404），當天不再嘗試
 *   auth   — 金鑰有問題，整個 provider 沒救，直接往外丟
 *   bad    — 請求本身有問題（400），換下一階可能可以
 *   server — 5xx / 網路，換下一階
 */
export function classifyError(status, body) {
	if (status === 401 || status === 403) return "auth";
	if (status === 404) return "gone";
	if (status === 429) {
		const details = body?.error?.details || [];
		const ids = [];
		for (const d of details) {
			for (const v of d.violations || []) {
				ids.push(String(v.quotaId || "") + " " + String(v.quotaMetric || ""));
			}
		}
		const blob = ids.join(" ");
		if (/PerDay/i.test(blob)) return "day";
		if (/PerMinute/i.test(blob)) return "minute";
		// 分不出來就當 per-minute：寧可稍後重試，也不要平白燒掉一天的額度。
		return "minute";
	}
	if (status >= 500) return "server";
	return "bad";
}

/** 組 generateContent 的 request body。parts 已經是 Gemini 的格式。 */
export function buildBody(model, { system, parts }) {
	const m = ladderModel(model) || { think: "level" };
	const generationConfig =
		m.think === "budget"
			? {
					maxOutputTokens: 1200,
					temperature: 0.2,
					thinkingConfig: { thinkingBudget: 0 },
				}
			: {
					// thinking 的 token 也算在這個上限裡，開太小會被截在半句話。
					maxOutputTokens: 2400,
					temperature: 0.2,
					thinkingConfig: { thinkingLevel: "low" },
				};
	return {
		system_instruction: { parts: [{ text: system }] },
		contents: [{ role: "user", parts }],
		generationConfig,
	};
}

/** 把純文字 + 選擇性的 JPEG base64 轉成 Gemini 的 parts。 */
export function toParts(head, body, imageB64) {
	if (!imageB64) return [{ text: head + (body ? "\n\n" + body : "") }];
	const parts = [{ text: head }];
	parts.push({ inline_data: { mime_type: "image/jpeg", data: imageB64 } });
	if (body) parts.push({ text: body });
	return parts;
}

/** 取出可見文字（thought part 不算）與 token 用量。 */
export function parseResponse(d) {
	const c = d?.candidates?.[0];
	const parts = c?.content?.parts || [];
	const text = parts
		.filter((p) => !p.thought && typeof p.text === "string")
		.map((p) => p.text)
		.join("");
	const u = d?.usageMetadata || {};
	return {
		text,
		finish: c?.finishReason || "",
		tokens: u.totalTokenCount || 0,
		thoughts: u.thoughtsTokenCount || 0,
	};
}

/** 打一次 Gemini。回傳 { ok, text, ... } 或 { ok:false, kind, status, message }。 */
export async function callGemini(key, model, payload) {
	let res;
	try {
		res = await fetch(GEMINI_BASE + model + ":generateContent", {
			method: "POST",
			headers: { "x-goog-api-key": key, "content-type": "application/json" },
			body: JSON.stringify(buildBody(model, payload)),
			signal: AbortSignal.timeout(60000),
		});
	} catch (e) {
		return { ok: false, kind: "server", status: 0, message: String(e?.message || e) };
	}
	const body = await res.json().catch(() => ({}));
	if (!res.ok) {
		return {
			ok: false,
			kind: classifyError(res.status, body),
			status: res.status,
			message: String(body?.error?.message || res.statusText || res.status),
		};
	}
	return { ok: true, ...parseResponse(body) };
}
