// AI 逐頁重點：把 guideline 的每一頁轉成四種繁體中文條列（重點整理 / High Yield /
// 病歷片語 / SDM）。
//
// 兩個 provider，前端可以切換：
//   cf — Cloudflare Workers AI（llama-4-scout），免費額度 10,000 neurons/day
//   ag — Antigravity（Google Gemini API），走 lib/gemini.js 的模型階梯，
//        撞到某一階的每日上限就自動往下掉，整條階梯用完再交回 cf
//
// 兩種輸入來源：
//   text   — D1 `pages` 表裡 build_index.sh 用 pdftotext 抽好的該頁文字（散文頁夠用、最省）
//   vision — 演算法流程圖頁抽字會散成碎片，改由前端把該頁 rasterize 成 JPEG 讀圖
//
// vision 頁走兩階段（issue #9），不是四種格式各自讀一次圖：
//   1. 讀圖只做一次，用 Gemini／CF 把整頁忠實轉寫成文字，存進 D1 `page_raw`
//      （getOrCreateRaw）——這份轉寫是下游全部格式唯一的資料來源，不是摘要。
//   2. 四種格式改成純文字 prompt，從 raw 轉出來，一次 Groq 呼叫拿回全部 4 份
//      JSON（generateNotesFromRaw），比四次個別讀圖便宜很多。
//   任一階段失敗（Groq 沒設金鑰、額度用完、回應解析不出來）就退回原本「直接讀
//   圖產這一種格式」的舊路徑（generateDirectAndCache）——新路徑是優化，不是唯一
//   活路，壞掉時使用者還是拿得到結果，只是貴一點。
//
// 結果寫進 D1 `insights` 永久快取，同一頁同一種格式只會生成一次。
// neuron 用量逐次累加進 `ai_usage`，超過當日預算就擋下來（免費額度 UTC 00:00 重置）。

import {
	LADDER,
	LADDER_CAP,
	callGemini,
	ladderModel,
	pickModels,
	toParts,
} from "./gemini.js";
import { GROQ_MODEL, callGroq, parseGroqJSON } from "./groq.js";

export const MODEL = "@cf/meta/llama-4-scout-17b-16e-instruct";

export const PROVIDERS = ["ag", "cf"];
export const PROVIDER_LABEL = { ag: "Antigravity", cf: "Workers AI" };

export const KINDS = ["key", "hy", "phrase", "sdm"];
export const KIND_LABEL = {
	key: "重點整理",
	hy: "High Yield",
	phrase: "病歷片語",
	sdm: "SDM",
};

// 免費額度 10,000 neurons/day，留 20% 餘裕給別的用途。可用 wrangler vars 覆寫。
export const DEFAULT_BUDGET = 8000;

// 封面／目錄／參考文獻頁的固定標記。raw 轉寫踩到這句就代表這一頁沒有臨床
// 內容可轉——generateNotesFromRaw 會直接短路，不叫 Groq（見那裡的註解）。
export const NO_CONTENT_MARKER = "（本頁無臨床內容）";

const SYSTEM = [
	"你是台灣的血液腫瘤科主治醫師，正在讀 NCCN 治療指引的其中一頁。",
	"輸出規則（務必遵守）：",
	"1. 一律使用繁體中文、台灣醫界慣用語。",
	"2. 只輸出條列，每一點自成一行、以「- 」開頭。不要前言、不要結語、不要標題、不要表格。",
	"3. 藥名、基因、生物標記、分期、檢驗名稱、NCCN category 等級一律保留英文原文",
	"   （例如 trastuzumab、HER2、pT1a、pN0、category 1），不要翻譯成中文。",
	"4. 只根據我提供的這一頁內容作答。這一頁沒寫的，不要自己補充或臆測。",
	`5. 若這一頁只是封面、目錄、專家名單、版權聲明或參考文獻，就只輸出一行「- ${NO_CONTENT_MARKER}」。`,
].join("\n");

const ASK = {
	key: [
		"請整理這一頁的臨床重點。",
		"聚焦：治療決策路徑、分層條件、適應症與排除條件、建議的 category 等級、關鍵劑量或療程。",
		"依原文的決策順序排列，最多 8 點。",
	].join("\n"),
	hy: [
		"請以「專科醫師考試（Board Exam）」的角度，挑出這一頁最可能入題的高頻考點。",
		"優先挑：具體數字與切點（腫瘤大小、分數、週數、劑量）、category 1 的建議、",
		"藥物的適應症與禁忌、分期與危險分層的判準、以及容易混淆而常被拿來對比的兩個選項。",
		"每一點都要帶上可以背起來的具體事實，不要寫空泛的原則。最多 8 點。",
	].join("\n"),
	phrase: [
		"請把這一頁轉成可以直接貼進病歷的片語（Assessment / Plan 用語）。",
		"每一點寫一句英文病歷片語，句末用全形括號附上簡短中文說明。",
		"用臨床病歷的簡潔語氣（可用 s/p、w/u、c/w 等慣用縮寫），不要寫成完整敘述文。",
		"最多 8 點。",
	].join("\n"),
	sdm: [
		"請以醫病共享決策（SDM）的角度，列出跟病人／家屬解釋這一頁內容時要強調的重點。",
		"涵蓋：有哪些治療選項、各自的預期好處、主要風險與副作用、需要病人一起權衡的取捨、",
		"以及可以拿來問病人偏好的問題。",
		"用病人聽得懂的白話中文，避免艱深術語；必要的藥名保留英文但要加一句白話說明。最多 7 點。",
	].join("\n"),
};

// raw 轉寫（issue #9）：讀圖只做這一次，輸出是接下來 ASK[key]/ASK[hy]/ASK[phrase]/
// ASK[sdm] 四種格式唯一的資料來源，所以規則比任何一個 ASK[] 都嚴——這裡漏掉的東
// 西，下游四種格式會一起漏。這不是摘要，是忠實轉寫：寧可寫得囉唆也不要省略。
const RAW_SYSTEM = [
	"你是台灣的血液腫瘤科主治醫師，正在把 NCCN 治療指引某一頁的完整內容轉寫成文字。",
	"這不是摘要，是逐項的忠實轉寫——你的輸出會是接下來四種不同格式（重點整理、",
	"考試高頻考點、病歷片語、醫病共享決策）唯一的資料來源，你這裡漏掉的東西，",
	"下游四種格式會一起漏掉，所以寧可寫得囉唆也不要省略。",
	"輸出規則（務必遵守）：",
	"1. 一律使用繁體中文轉寫敘述性文字，但表格／流程圖裡的每一個方框、選項、",
	"   分支條件，逐一列出、不要合併、不要省略任何一條。",
	"2. 決策流程圖的每個節點都要寫：節點內容是什麼、在什麼條件下走到這個節點、",
	"   走完這個節點之後的下一步（或多個分支）是什麼。用「若…則…」清楚寫出條件。",
	"3. 每一個數字都要保留：腫瘤大小、分期、週數、劑量、頻率、切點、category 等級。",
	"4. 藥名、基因、生物標記、分期、檢驗名稱、NCCN category 等級一律保留英文原文",
	"   （例如 trastuzumab、HER2、pT1a、pN0、category 1），不要翻譯成中文。",
	"5. 頁面上如果有註腳標號（如上標的 a、b、1、2），連同註腳本身的文字一起列出，",
	"   不要只列標號。",
	"6. 只根據這一頁實際看到的內容作答，不要用你自己的醫學知識補充或修正頁面上沒有的東西。",
	"7. 若這一頁只是封面、目錄、專家名單、版權聲明或參考文獻，就只回一行",
	`   「${NO_CONTENT_MARKER}」。`,
].join("\n");

const RAW_ASK = "請完整轉寫這一頁的全部內容，包含每一個決策節點、分支條件、數字與註腳。";

// NCCN 每頁頁首／頁尾都會重複的樣板字，不清掉的話模型會拿去總結授權條款。
const BOILER = [
	/PLEASE NOTE that use of this NCCN Content[\s\S]{0,300}?artificial intelligence model or tool\./gi,
	/Printed by [\s\S]{0,60}?\d{1,2}\/\d{1,2}\/\d{4}[\s\S]{0,40}?\./gi,
	/Copyright\s*©\s*\d{4} National Comprehensive Cancer Network[\s\S]{0,120}?All Rights Reserved\./gi,
	/NCCN Guidelines Index Table of Contents Discussion/gi,
	/Note: All recommendations are category 2A unless otherwise indicated\./gi,
];

/** 去掉每頁重複的授權／版權樣板，並把空白正規化成單一空格。 */
export function cleanPageText(raw) {
	let t = String(raw || "").replace(/\s+/g, " ");
	for (const re of BOILER) t = t.replace(re, " ");
	return t.replace(/\s+/g, " ").trim();
}

/**
 * 判斷這一頁該不該改走「rasterize + 讀圖」。
 *
 * NCCN 的演算法頁是一堆方框和箭頭，pdftotext 抽出來會散成沒有句子結構的碎片；
 * Discussion 的散文頁則有正常的句號密度。實測 breast（279 頁）：演算法頁
 * 句號/字數 落在 0.007–0.057，Discussion 頁 0.12–0.20，取 0.08 分界兩邊都有餘裕。
 */
export function needsVision(raw) {
	const t = cleanPageText(raw);
	if (t.length < 200) return true;
	const words = t.split(/\s+/).filter(Boolean).length;
	if (words < 60) return true;
	const periods = (t.match(/[.;]\s/g) || []).length;
	return periods / words < 0.08;
}

/** 把模型輸出正規化成乾淨的條列陣列（去掉項目符號、編號、標題與收尾贅句）。 */
export function toBullets(raw, max) {
	const out = [];
	const lines = String(raw || "").split(/\r?\n/);
	for (const line of lines) {
		let s = line
			.replace(/^\s*(?:[-*•·–—]|\d+[.)]|\(\d+\)|[（(]\d+[）)])\s*/, "")
			.replace(/^#{1,6}\s*/, "")
			.trim();
		if (!s) continue;
		// 「以下是…：」這類開場白／小標，本身不帶內容，丟掉。
		if (/[:：]\s*$/.test(s)) continue;
		if (out.indexOf(s) < 0) out.push(s);
		if (out.length >= (max || 10)) break;
	}
	return out;
}

/** 免費額度以 UTC 日為單位重置，用 ISO 日期當 key。 */
export function todayKey(ts) {
	return new Date(ts).toISOString().slice(0, 10);
}

export function budgetCap(env) {
	const n = parseInt(env.AI_DAILY_NEURONS || "", 10);
	return Number.isFinite(n) && n > 0 ? n : DEFAULT_BUDGET;
}

export async function readUsage(env) {
	const day = todayKey(Date.now());
	const cap = budgetCap(env);
	let row = null;
	try {
		row = await env.DB.prepare(
			"SELECT neurons, calls FROM ai_usage WHERE day = ?",
		)
			.bind(day)
			.first();
	} catch (e) {
		// insights.sql 還沒跑過就當作零用量，別讓整個 viewer 掛掉。
	}
	return { day, cap, used: Math.round(row?.neurons || 0), calls: row?.calls || 0 };
}

export function hasAntigravity(env) {
	return !!(env && env.ANTIGRAVITY_API_KEY);
}

export function hasGroq(env) {
	return !!(env && env.GROQ_API_KEY);
}

/**
 * Antigravity 的每日計量。免費層是「每模型每天 N 次」，所以逐模型記帳：撞到 429
 * 就把該模型記到滿（PerDay）或壓一分鐘冷卻（PerMinute），下次直接跳過那一階，
 * 不用再白花一趟往返去確認它還是滿的。
 */
export async function readGeminiUsage(env) {
	const day = todayKey(Date.now());
	const state = {};
	try {
		const { results } = await env.DB.prepare(
			"SELECT model, calls, cool FROM ai_calls WHERE day = ?",
		)
			.bind(day)
			.all();
		for (const r of results || [])
			state[r.model] = { calls: r.calls || 0, cool: r.cool || "" };
	} catch (e) {
		// ai_calls 還沒建表就當作零用量，別讓整個 viewer 掛掉。
	}
	const used = LADDER.reduce(
		(n, m) => n + Math.min(m.rpd, state[m.id]?.calls || 0),
		0,
	);
	const avail = pickModels(state, Date.now());
	return {
		day,
		state,
		used,
		cap: LADDER_CAP,
		next: avail.length ? avail[0].id : "",
		models: avail.length,
	};
}

/** mode: 'used' = 這次用掉一次；'exhaust' = 直接記到滿（撞到 PerDay 或模型下架）。 */
async function bumpGemini(env, day, model, mode, cool) {
	const rpd = ladderModel(model)?.rpd || 0;
	const sql =
		mode === "exhaust"
			? "INSERT INTO ai_calls(day, model, calls, cool) VALUES(?,?,?,?) " +
				"ON CONFLICT(day, model) DO UPDATE SET calls = MAX(ai_calls.calls, excluded.calls), " +
				"cool = COALESCE(excluded.cool, ai_calls.cool)"
			: "INSERT INTO ai_calls(day, model, calls, cool) VALUES(?,?,1,?) " +
				"ON CONFLICT(day, model) DO UPDATE SET calls = ai_calls.calls + 1, " +
				"cool = COALESCE(excluded.cool, ai_calls.cool)";
	try {
		const stmt = env.DB.prepare(sql);
		await (mode === "exhaust"
			? stmt.bind(day, model, rpd, cool || null)
			: stmt.bind(day, model, cool || null)
		).run();
	} catch (e) {
		// 記帳失敗不該讓已經產好的內容消失；下一次 429 會再把狀態補回來。
	}
}

async function addUsage(env, day, neurons) {
	await env.DB.prepare(
		"INSERT INTO ai_usage(day, neurons, calls) VALUES(?, ?, 1) " +
			"ON CONFLICT(day) DO UPDATE SET neurons = neurons + excluded.neurons, calls = calls + 1",
	)
		.bind(day, neurons || 0)
		.run();
}

/** 取該頁 pdftotext 抽好的文字；沒建索引或該頁沒字會回空字串。 */
export async function pageText(env, gid, page) {
	try {
		const row = await env.DB.prepare(
			"SELECT body FROM pages WHERE gid = ? AND page = ? LIMIT 1",
		)
			.bind(gid, page)
			.first();
		return row?.body || "";
	} catch (e) {
		return "";
	}
}

/**
 * 這一份每一頁要不要走讀圖，一次算完。
 *
 * needsVision 要讀該頁的全文，逐頁問 D1 等於每翻一頁就打一次網路——這是「讀取中…」
 * 閃個不停的來源。改成整份一次算好放進 KV，之後翻頁純查記憶體。
 * 先用 COUNT(*) 對帳，只有 build_index.sh 重建過（頁數變了）才重算。
 */
export async function visionMap(env, gid) {
	const key = "vmap:" + gid;
	let n = 0;
	try {
		const c = await env.DB.prepare(
			"SELECT COUNT(*) AS n FROM pages WHERE gid = ?",
		)
			.bind(gid)
			.first();
		n = c?.n || 0;
	} catch (e) {
		return [];
	}
	if (!n) return [];
	try {
		const hit = await env.NCCN_KV.get(key, "json");
		if (hit && hit.n === n) return hit.v || [];
	} catch (e) {
		// KV 讀不到就照算，只是慢一點。
	}
	const v = [];
	try {
		const { results } = await env.DB.prepare(
			"SELECT page, body FROM pages WHERE gid = ?",
		)
			.bind(gid)
			.all();
		for (const r of results || []) if (needsVision(r.body)) v.push(r.page);
	} catch (e) {
		return [];
	}
	v.sort((a, b) => a - b);
	try {
		await env.NCCN_KV.put(key, JSON.stringify({ n, v }));
	} catch (e) {
		// 寫不進去就下次再算。
	}
	return v;
}

export async function readCache(env, gid, page, kind) {
	try {
		const row = await env.DB.prepare(
			"SELECT md, model, src, created FROM insights WHERE gid = ? AND page = ? AND kind = ?",
		)
			.bind(gid, page, kind)
			.first();
		if (!row) return null;
		return {
			bullets: String(row.md || "").split("\n").filter(Boolean),
			model: row.model,
			src: row.src,
			created: row.created,
		};
	} catch (e) {
		return null;
	}
}

/** 這一頁的 raw 轉寫（issue #9）。gen_insights.sh 跟這裡的 getOrCreateRaw 共用同一張表。 */
export async function readRaw(env, gid, page) {
	try {
		const row = await env.DB.prepare(
			"SELECT body, model, created FROM page_raw WHERE gid = ? AND page = ?",
		)
			.bind(gid, page)
			.first();
		return row ? { body: row.body, model: row.model, created: row.created } : null;
	} catch (e) {
		return null;
	}
}

async function writeRaw(env, gid, page, body, model) {
	await env.DB.prepare(
		"INSERT INTO page_raw(gid, page, body, model, created) VALUES(?,?,?,?,?) " +
			"ON CONFLICT(gid, page) DO UPDATE SET body = excluded.body, model = excluded.model, " +
			"created = excluded.created",
	)
		.bind(gid, page, body, model, new Date().toISOString())
		.run();
}

/**
 * 列出已存的重點。gid 有值就只列該份 guideline，否則列全部（給「所有已存」用）。
 * 帶回完整內容，讓前端不用逐筆再打一次就能直接匯出 Markdown。
 */
export async function listInsights(env, gid) {
	const cols = "gid, page, kind, src, model, created, md";
	try {
		const stmt = gid
			? env.DB.prepare(
					`SELECT ${cols} FROM insights WHERE gid = ? ORDER BY page, kind LIMIT 2000`,
				).bind(gid)
			: env.DB.prepare(
					`SELECT ${cols} FROM insights ORDER BY gid, page, kind LIMIT 2000`,
				);
		const { results } = await stmt.all();
		return (results || []).map((r) => ({
			gid: r.gid,
			page: r.page,
			kind: r.kind,
			src: r.src,
			model: r.model,
			created: r.created,
			bullets: String(r.md || "").split("\n").filter(Boolean),
		}));
	} catch (e) {
		return [];
	}
}

async function writeCache(env, gid, page, kind, bullets, model, src) {
	await env.DB.prepare(
		"INSERT INTO insights(gid, page, kind, md, model, src, created) VALUES(?,?,?,?,?,?,?) " +
			"ON CONFLICT(gid, page, kind) DO UPDATE SET md = excluded.md, model = excluded.model, " +
			"src = excluded.src, created = excluded.created",
	)
		.bind(
			gid,
			page,
			kind,
			bullets.join("\n"),
			model,
			src,
			new Date().toISOString(),
		)
		.run();
}

/** 兩個 provider 共用的提問文字：抬頭 + 該格式的指令 + 讀圖時的補充說明。 */
export function buildPrompt({ gid, page, kind, name, text, image }) {
	const body = cleanPageText(text).slice(0, 4000);
	const head =
		`資料來源：NCCN Guidelines《${name || gid}》第 ${page} 頁。\n\n` + ASK[kind];
	if (image) {
		return {
			src: "vision",
			body,
			head:
				head +
				"\n\n以下附上這一頁的完整版面截圖，請以圖為準讀出方框與箭頭代表的決策流程" +
				(body ? "；另附文字抽取結果供藥名與拼字對照。" : "。"),
			label: body ? "文字抽取結果：\n" + body : "",
		};
	}
	if (!body) throw new Error("這一頁沒有可用的文字，請改用讀圖模式");
	return { src: "text", body, head, label: "這一頁的內容：\n" + body };
}

/** raw 轉寫的 prompt（issue #9）：跟 buildPrompt 同一套抬頭／文字抽取對照，指令換成 RAW_ASK。 */
export function buildRawPrompt({ gid, page, name, text, image }) {
	const body = cleanPageText(text).slice(0, 4000);
	const head = `資料來源：NCCN Guidelines《${name || gid}》第 ${page} 頁。\n\n` + RAW_ASK;
	if (!image) throw new Error("raw 轉寫只在讀圖模式下需要");
	return {
		head:
			head +
			"\n\n以下附上這一頁的完整版面截圖，請以圖為準完整轉寫" +
			(body ? "；另附文字抽取結果供藥名與拼字對照。" : "。"),
		label: body ? "文字抽取結果：\n" + body : "",
	};
}

/** Workers AI（llama-4-scout）。回傳 { bullets, src, neurons, model, provider }。 */
export async function generateCF(env, p, max) {
	const content = p.image
		? [
				{ type: "text", text: p.head },
				{
					type: "image_url",
					image_url: { url: "data:image/jpeg;base64," + p.image },
				},
				...(p.label ? [{ type: "text", text: p.label }] : []),
			]
		: p.head + "\n\n" + p.label;

	const res = await env.AI.run(MODEL, {
		messages: [
			{ role: "system", content: SYSTEM },
			{ role: "user", content },
		],
		max_tokens: 800,
		temperature: 0.2,
	});

	const bullets = toBullets(res?.response, max);
	if (!bullets.length) throw new Error("模型沒有回傳可用的內容");
	return {
		bullets,
		src: p.src,
		neurons: res?.usage?.neurons || 0,
		model: MODEL,
		provider: "cf",
	};
}

/**
 * Antigravity：沿著 LADDER 由上往下試，撞到當日上限就換下一階。
 * 全部用不成回傳 null，讓上層交回 Workers AI。notes 會帶回發生了什麼事。
 */
export async function generateAG(env, p, max, notes) {
	const key = env.ANTIGRAVITY_API_KEY;
	if (!key) return null;
	const usage = await readGeminiUsage(env);
	const models = pickModels(usage.state, Date.now());
	if (!models.length) {
		notes.push("Antigravity 今日額度已用完");
		return null;
	}
	const parts = toParts(p.head, p.label, p.image);
	for (const m of models) {
		const r = await callGemini(key, m.id, { system: SYSTEM, parts });
		if (r.ok) {
			await bumpGemini(env, usage.day, m.id, "used");
			const bullets = toBullets(r.text, max);
			if (bullets.length)
				return {
					bullets,
					src: p.src,
					neurons: 0,
					tokens: r.tokens,
					model: m.id,
					provider: "ag",
				};
			notes.push(`${m.id} 沒有回傳可用內容（${r.finish || "?"}）`);
			continue;
		}
		if (r.kind === "auth") {
			notes.push(`Antigravity 金鑰被拒：${r.message}`);
			return null;
		}
		if (r.kind === "day" || r.kind === "gone") {
			await bumpGemini(env, usage.day, m.id, "exhaust");
			notes.push(
				r.kind === "day" ? `${m.id} 今日額度已滿` : `${m.id} 已下架`,
			);
			continue;
		}
		if (r.kind === "minute") {
			await bumpGemini(
				env,
				usage.day,
				m.id,
				"used",
				new Date(Date.now() + 60000).toISOString(),
			);
			notes.push(`${m.id} 每分鐘上限，冷卻 60 秒`);
			continue;
		}
		notes.push(`${m.id} 失敗（${r.status}）：${r.message}`);
	}
	return null;
}

// ---------------------------------------------------------------- raw 轉寫（issue #9）
//
// 跟 generateAG／generateCF 的差異只有兩點：system 換成 RAW_SYSTEM、成功判準
// 從「toBullets 有東西」換成「有回傳文字就算數」——raw 轉寫是一段連續敘述加條
// 列，不是固定 8 點的 bullets，用 toBullets 的收斂規則反而會把它砍壞。階梯／
// 額度記帳（bumpGemini）完全共用同一套，跟平常的讀圖呼叫用同一份每日預算。

/** 走 Antigravity 階梯做 raw 轉寫。回傳 { body, model, tokens } 或 null。 */
export async function generateRawAG(env, p, notes) {
	const key = env.ANTIGRAVITY_API_KEY;
	if (!key) return null;
	const usage = await readGeminiUsage(env);
	const models = pickModels(usage.state, Date.now());
	if (!models.length) {
		notes.push("Antigravity 今日額度已用完");
		return null;
	}
	const parts = toParts(p.head, p.label, p.image);
	for (const m of models) {
		const r = await callGemini(key, m.id, { system: RAW_SYSTEM, parts });
		if (r.ok) {
			await bumpGemini(env, usage.day, m.id, "used");
			const body = String(r.text || "").trim();
			if (body) return { body, tokens: r.tokens, model: m.id, provider: "ag" };
			notes.push(`${m.id} 沒有回傳可用內容（${r.finish || "?"}）`);
			continue;
		}
		if (r.kind === "auth") {
			notes.push(`Antigravity 金鑰被拒：${r.message}`);
			return null;
		}
		if (r.kind === "day" || r.kind === "gone") {
			await bumpGemini(env, usage.day, m.id, "exhaust");
			notes.push(r.kind === "day" ? `${m.id} 今日額度已滿` : `${m.id} 已下架`);
			continue;
		}
		if (r.kind === "minute") {
			await bumpGemini(
				env,
				usage.day,
				m.id,
				"used",
				new Date(Date.now() + 60000).toISOString(),
			);
			notes.push(`${m.id} 每分鐘上限，冷卻 60 秒`);
			continue;
		}
		notes.push(`${m.id} 失敗（${r.status}）：${r.message}`);
	}
	return null;
}

/** Workers AI 做 raw 轉寫（Gemini 全掛時的 fallback）。 */
export async function generateRawCF(env, p) {
	const content = p.image
		? [
				{ type: "text", text: p.head },
				{
					type: "image_url",
					image_url: { url: "data:image/jpeg;base64," + p.image },
				},
				...(p.label ? [{ type: "text", text: p.label }] : []),
			]
		: p.head + "\n\n" + p.label;

	const res = await env.AI.run(MODEL, {
		messages: [
			{ role: "system", content: RAW_SYSTEM },
			{ role: "user", content },
		],
		max_tokens: 2000,
		temperature: 0.2,
	});
	const body = String(res?.response || "").trim();
	if (!body) throw new Error("模型沒有回傳可用的內容");
	return { body, neurons: res?.usage?.neurons || 0, model: MODEL, provider: "cf" };
}

/**
 * 這一頁的 raw 轉寫：快取命中就直接回傳，沒有就讀圖產一份存起來。
 * Gemini 階梯用完（或沒設金鑰）就掉回 Workers AI；兩邊都不成就丟出去，
 * 讓呼叫端（generateAndCache 的 vision 分支）接住並退回舊的直接讀圖路徑。
 */
export async function getOrCreateRaw(env, { gid, page, name, text, image }, notes) {
	const hit = await readRaw(env, gid, page);
	if (hit) return hit;

	const p = buildRawPrompt({ gid, page, name, text, image });
	let out = await generateRawAG(env, p, notes);
	if (!out) {
		const usage = await readUsage(env);
		if (usage.used >= usage.cap) {
			const err = new Error(
				(notes.length ? notes.join("；") + "；" : "") +
					`今日 Workers AI 額度也用完了（${usage.used}/${usage.cap} neurons），UTC 00:00 重置`,
			);
			err.quota = usage;
			err.status = 429;
			throw err;
		}
		const cf = await generateRawCF(env, p);
		await addUsage(env, usage.day, cf.neurons);
		out = cf;
	}
	await writeRaw(env, gid, page, out.body, out.model);
	return { body: out.body, model: out.model, created: new Date().toISOString() };
}

// ---------------------------------------------------------------- Groq：raw → 四種格式（issue #9）
//
// system 沿用跟四個 ASK[] 一樣的 SYSTEM（語氣、用字規則不變），user 內容把 raw
// 轉寫塞進去，再把 ASK[key]/ASK[hy]/ASK[phrase]/ASK[sdm] 四段指令合併成一份，
// 要求一次回傳 {key:[...], hy:[...], phrase:[...], sdm:[...]}。Groq 只有一顆
// 模型，沒有像 Gemini 那種多階梯可以往下掉——失敗就直接丟出去，讓呼叫端接住並
// 退回舊的直接讀圖路徑（每種格式各自重新讀一次圖，比較貴但穩）。
//
// 「四種格式必須明顯不同」這句提醒是實測出來的，不是預防性寫作：一開始沒有這
// 句，reasoning_effort=low 會四種格式全部照抄 raw 內容交差（key/hy/phrase/sdm
// 逐字相同），完全沒照 ASK[] 的規則做轉換。加了這句 + 換成 medium effort 之後
// phrase 才會真的變成英文病歷縮寫、sdm 才會真的變白話中文。
export function buildGroqNotesPrompt(rawBody, name, page) {
	const parts = KINDS.map((k) => `[${k}] ${ASK[k]}`).join("\n\n");
	return (
		`資料來源：NCCN Guidelines《${name}》第 ${page} 頁的完整轉寫內容：\n\n` +
		rawBody +
		"\n\n請根據上面這份轉寫內容（不要用你自己的醫學知識補充），同時輸出以下四種格式，" +
		'回傳一個 JSON 物件，鍵是 "key"／"hy"／"phrase"／"sdm"，每個鍵的值是字串陣列' +
		"（陣列裡每個字串是一點，不要自己加項目符號）。四種格式各自的呈現方式必須明顯" +
		"不同，不可以四種都寫成同一種樣子。四種格式各自的規則：\n\n" +
		parts
	);
}

/**
 * 呼叫 Groq，把 raw 轉寫轉成四種格式的 bullets。回傳 { bullets:{key,hy,phrase,sdm}, model, tokens }。
 *
 * 撞到 per-minute 的 429 會重試（等 8 秒，最多 2 次）：實測帳號的免費層是 TPM
 * 制（每分鐘 8000 tokens 左右一個窗口），不是 Gemini 那種每日固定額度，短暫的
 * 429 十之八九是這一分鐘的窗口還沒轉開，等一下通常就過了——不值得直接放棄整個
 * 這一頁、更不該把它當成「今天額度用完」的訊號。
 */
export async function generateNotesFromRaw(env, rawBody, { gid, page, name }) {
	// raw 轉寫本身就說「這頁沒有臨床內容」（封面／目錄／參考文獻），直接用同一句
	// 話填四個格式，不叫 Groq。實測發現的邊界：這種頁面塞進 buildGroqNotesPrompt
	// 送出去，Groq 會照 SYSTEM 的規則老實吐出純文字的「- （本頁無臨床內容）」，
	// 但 response_format:json_object 要求輸出必須是合法 JSON，兩者互斥，回
	// 400 json_validate_failed——不是叫它「不要這樣」能解的，這頁根本沒有四種
	// 格式可以分別轉寫，繞開這個呼叫本身才是對的。
	if (String(rawBody || "").includes(NO_CONTENT_MARKER)) {
		const bullets = {};
		for (const k of KINDS) bullets[k] = [NO_CONTENT_MARKER];
		return { bullets, model: "n/a", tokens: 0 };
	}

	const key = env.GROQ_API_KEY;
	if (!key) throw new Error("GROQ_API_KEY 未設定");
	const user = buildGroqNotesPrompt(rawBody, name || gid, page);
	let r = await callGroq(key, SYSTEM, user);
	for (let attempt = 0; !r.ok && r.kind === "minute" && attempt < 2; attempt++) {
		await new Promise((res) => setTimeout(res, 8000));
		r = await callGroq(key, SYSTEM, user);
	}
	if (!r.ok) {
		const err = new Error(`Groq 失敗（${r.status}）：${r.message}`);
		err.groqKind = r.kind;
		throw err;
	}
	const obj = parseGroqJSON(r.text);
	if (!obj) throw new Error("Groq 沒有回傳可解析的 JSON");
	const bullets = {};
	for (const k of KINDS) {
		const v = obj[k];
		const joined = Array.isArray(v) ? v.join("\n") : String(v || "");
		bullets[k] = toBullets(joined, k === "sdm" ? 7 : 8);
	}
	if (!KINDS.some((k) => bullets[k].length))
		throw new Error("Groq 回傳的四種格式都是空的");
	return { bullets, model: GROQ_MODEL, tokens: r.tokens };
}

/**
 * 生成 + 記帳 + 寫快取。provider='ag' 會先走 Antigravity 的模型階梯，
 * 整條用完（或沒設金鑰）才掉回 Workers AI；Workers AI 也沒額度才丟 429。
 */
// ---------------------------------------------------------------- 選取的文字
//
// 跟上面那一整套 page insight 不同：輸入是使用者當下框起來的一段字，不是整頁。
// 所以它不進 insights 快取——快取的鍵是 (gid, page, kind)，而同一頁可以框出無數
// 種選取，用那個鍵存等於互相覆蓋。它仍然計入同一份每日 neurons 預算，因為真正
// 的限制是那個，不是快取。

export const SEL_KINDS = ["bullets", "zh"];
export const SEL_LABEL = { bullets: "條列", zh: "中文解釋" };

const SEL_SYSTEM = {
	// 這一支刻意不翻譯也不總結：它做的是排版，不是理解。多做一步就會開始丟東西，
	// 而丟掉的通常是限定條件——那是這整個專案付過最多次代價的一種錯。
	bullets: [
		"你是排版工具。把使用者給的一段指引原文改寫成 markdown 條列。",
		"規則（務必遵守）：",
		"1. 保留原文語言與原本的用字，不要翻譯、不要改寫、不要摘要。",
		"2. 每一點自成一行、以「- 」開頭；原文的從屬關係用四個空格縮排表達。",
		"3. 不得新增原文沒有的內容，也不得省略任何限定條件",
		"   （if / unless / except / consider / ± / category 等級 / 劑量 / 閾值）。",
		"4. 只輸出條列本身。不要前言、不要結語、不要標題。",
	].join("\n"),
	zh: [
		"你是台灣的血液腫瘤科主治醫師，正在向同事解釋 NCCN 指引裡的一段文字。",
		"規則（務必遵守）：",
		"1. 一律使用繁體中文、台灣醫界慣用語。",
		"2. 只輸出條列，每一點自成一行、以「- 」開頭。不要前言、不要結語、不要標題。",
		"3. 藥名、基因、生物標記、分期、檢驗名稱、NCCN category 等級一律保留英文原文",
		"   （例如 trastuzumab、HER2、pT1a、pN0、category 1），不要翻譯成中文。",
		"4. 只解釋我給的這段文字。這段沒寫的，不要自己補充或臆測。",
	].join("\n"),
};

const SEL_ASK = {
	bullets: "把下面這段改寫成 markdown 條列：",
	zh: "請解釋下面這段的臨床意思，最多 6 點：",
};

export async function generateSelection(env, { text, kind, name, page }) {
	const body = String(text || "").trim();
	if (!body) throw new Error("沒有選取到文字");
	if (SEL_KINDS.indexOf(kind) < 0) throw new Error("bad kind");

	const usage = await readUsage(env);
	if (usage.used >= usage.cap) {
		const err = new Error(
			`今日 Workers AI 額度用完了（${usage.used}/${usage.cap} neurons），UTC 00:00 重置`,
		);
		err.quota = usage;
		err.status = 429;
		throw err;
	}

	const res = await env.AI.run(MODEL, {
		messages: [
			{ role: "system", content: SEL_SYSTEM[kind] },
			{
				role: "user",
				content:
					`${SEL_ASK[kind]}\n\n` +
					`（出處：${name || ""} 第 ${page || "?"} 頁）\n\n` +
					body,
			},
		],
		max_tokens: 800,
		temperature: 0.2,
	});

	// 條列模式的上限放寬：原文可能本來就有十幾個分支，砍到 8 點就是在丟東西。
	const bullets = toBullets(res?.response, kind === "bullets" ? 30 : 6);
	if (!bullets.length) throw new Error("模型沒有回傳可用的內容");

	const neurons = res?.usage?.neurons || 0;
	await addUsage(env, usage.day, neurons);
	return {
		bullets,
		model: MODEL,
		provider: "cf",
		quota: {
			...usage,
			used: Math.round(usage.used + neurons),
			calls: usage.calls + 1,
		},
	};
}

/**
 * vision 頁的新路徑（issue #9）：raw 轉寫只讀一次圖，四種格式一次 Groq 呼叫拿
 * 齊，四筆一起寫進 insights 快取（使用者點開任何一個分頁，其他三個分頁也順便
 * 快取好了）。GROQ_API_KEY 沒設，或任一階段失敗，都直接丟出去讓呼叫端接住、
 * 退回 generateDirectAndCache——新路徑是省錢的優化，不是唯一活路。
 */
async function generateVisionViaRaw(env, opts) {
	const notes = [];
	const raw = await getOrCreateRaw(env, opts, notes);
	const groq = await generateNotesFromRaw(env, raw.body, opts);
	for (const k of KINDS) {
		await writeCache(env, opts.gid, opts.page, k, groq.bullets[k], groq.model, "vision");
	}
	return {
		bullets: groq.bullets[opts.kind],
		src: "vision",
		model: groq.model,
		provider: "groq",
		notes,
		fell: false,
		quota: await readUsage(env),
		agquota: hasAntigravity(env) ? await readGeminiUsage(env) : null,
	};
}

/** 舊路徑：這一種格式直接讀圖（或讀文字）產生，不經過 page_raw／Groq。 */
async function generateDirectAndCache(env, opts) {
	const max = opts.kind === "sdm" ? 7 : 8;
	const p = { ...buildPrompt(opts), image: opts.image || null };
	const notes = [];

	let out = null;
	if (opts.provider === "ag") out = await generateAG(env, p, max, notes);

	let usage = await readUsage(env);
	if (!out) {
		if (usage.used >= usage.cap) {
			const err = new Error(
				(notes.length ? notes.join("；") + "；" : "") +
					`今日 Workers AI 額度也用完了（${usage.used}/${usage.cap} neurons），UTC 00:00 重置`,
			);
			err.quota = usage;
			err.status = 429;
			throw err;
		}
		out = await generateCF(env, p, max);
		await addUsage(env, usage.day, out.neurons);
		usage = {
			...usage,
			used: Math.round(usage.used + out.neurons),
			calls: usage.calls + 1,
		};
	}

	await writeCache(
		env,
		opts.gid,
		opts.page,
		opts.kind,
		out.bullets,
		out.model,
		out.src,
	);
	return {
		...out,
		notes,
		// 掉回 cf 的時候要讓使用者知道，不然會以為 Antigravity 沒生效。
		fell: opts.provider === "ag" && out.provider === "cf",
		quota: usage,
		agquota: hasAntigravity(env) ? await readGeminiUsage(env) : null,
	};
}

export async function generateAndCache(env, opts) {
	if (opts.image && hasGroq(env)) {
		try {
			return await generateVisionViaRaw(env, opts);
		} catch (e) {
			// raw 轉寫本身就是走 AG 再掉 CF，429 代表兩邊都已經試過、額度真的沒了——
			// 舊路徑重試同一組 provider 只會拿到一樣的結果，直接把這個錯誤丟出去。
			if (e.status === 429) throw e;
			// 其他失敗（Groq 沒設好、回應解析不出來、網路問題）才退回舊路徑，
			// 不要讓使用者兩頭空手。
		}
	}
	return generateDirectAndCache(env, opts);
}
