// AI 逐頁重點：把 guideline 的每一頁轉成四種繁體中文條列（重點整理 / High Yield /
// 病歷片語 / SDM），跑在 Cloudflare Workers AI 上（免費額度 10,000 neurons/day）。
//
// 兩種輸入來源：
//   text   — D1 `pages` 表裡 build_index.sh 用 pdftotext 抽好的該頁文字（散文頁夠用、最省）
//   vision — 演算法流程圖頁抽字會散成碎片，改由前端把該頁 rasterize 成 JPEG，
//            用同一個多模態模型直接讀圖（順便附上抽到的文字當藥名拼字的參考），比較穩
//
// 結果寫進 D1 `insights` 永久快取，同一頁同一種格式只會生成一次。
// neuron 用量逐次累加進 `ai_usage`，超過當日預算就擋下來（免費額度 UTC 00:00 重置）。

export const MODEL = "@cf/meta/llama-4-scout-17b-16e-instruct";

export const KINDS = ["key", "hy", "phrase", "sdm"];
export const KIND_LABEL = {
	key: "重點整理",
	hy: "High Yield",
	phrase: "病歷片語",
	sdm: "SDM",
};

// 免費額度 10,000 neurons/day，留 20% 餘裕給別的用途。可用 wrangler vars 覆寫。
export const DEFAULT_BUDGET = 8000;

const SYSTEM = [
	"你是台灣的血液腫瘤科主治醫師，正在讀 NCCN 治療指引的其中一頁。",
	"輸出規則（務必遵守）：",
	"1. 一律使用繁體中文、台灣醫界慣用語。",
	"2. 只輸出條列，每一點自成一行、以「- 」開頭。不要前言、不要結語、不要標題、不要表格。",
	"3. 藥名、基因、生物標記、分期、檢驗名稱、NCCN category 等級一律保留英文原文",
	"   （例如 trastuzumab、HER2、pT1a、pN0、category 1），不要翻譯成中文。",
	"4. 只根據我提供的這一頁內容作答。這一頁沒寫的，不要自己補充或臆測。",
	"5. 若這一頁只是封面、目錄、專家名單、版權聲明或參考文獻，就只輸出一行「- （本頁無臨床內容）」。",
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

/**
 * 列出已存的重點。gid 有值就只列該份 guideline，否則列全部（給「所有已存」用）。
 * 帶回完整內容，讓前端不用逐筆再打一次就能直接匯出 Markdown。
 */
export async function listInsights(env, gid) {
	const cols = "gid, page, kind, src, created, md";
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

/**
 * 生成單一頁、單一種格式。image 有值就走多模態（讀 rasterize 的 JPEG），
 * 沒有就只餵抽出來的文字。回傳 { bullets, src, neurons }。
 */
export async function generate(env, { gid, page, kind, name, text, image }) {
	const body = cleanPageText(text).slice(0, 4000);
	const head =
		`資料來源：NCCN Guidelines《${name || gid}》第 ${page} 頁。\n\n` + ASK[kind];

	let content;
	let src;
	if (image) {
		src = "vision";
		const parts = [
			{
				type: "text",
				text:
					head +
					"\n\n以下附上這一頁的完整版面截圖，請以圖為準讀出方框與箭頭代表的決策流程" +
					(body ? "；另附文字抽取結果供藥名與拼字對照。" : "。"),
			},
			{
				type: "image_url",
				image_url: { url: "data:image/jpeg;base64," + image },
			},
		];
		if (body) parts.push({ type: "text", text: "文字抽取結果：\n" + body });
		content = parts;
	} else {
		src = "text";
		if (!body) throw new Error("這一頁沒有可用的文字，請改用讀圖模式");
		content = head + "\n\n這一頁的內容：\n" + body;
	}

	const res = await env.AI.run(MODEL, {
		messages: [
			{ role: "system", content: SYSTEM },
			{ role: "user", content },
		],
		max_tokens: 800,
		temperature: 0.2,
	});

	const bullets = toBullets(res?.response, kind === "sdm" ? 7 : 8);
	if (!bullets.length) throw new Error("模型沒有回傳可用的內容");
	return { bullets, src, neurons: res?.usage?.neurons || 0 };
}

/** 生成 + 記帳 + 寫快取。額度用完會丟出帶 quota 的錯誤。 */
export async function generateAndCache(env, opts) {
	const usage = await readUsage(env);
	if (usage.used >= usage.cap) {
		const err = new Error(
			`今日 Workers AI 額度已用完（${usage.used}/${usage.cap} neurons），UTC 00:00 重置`,
		);
		err.quota = usage;
		err.status = 429;
		throw err;
	}
	const out = await generate(env, opts);
	await addUsage(env, usage.day, out.neurons);
	await writeCache(
		env,
		opts.gid,
		opts.page,
		opts.kind,
		out.bullets,
		MODEL,
		out.src,
	);
	return {
		...out,
		model: MODEL,
		quota: {
			...usage,
			used: Math.round(usage.used + out.neurons),
			calls: usage.calls + 1,
		},
	};
}
