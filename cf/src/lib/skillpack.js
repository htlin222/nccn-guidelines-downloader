// 即時鑄造 .skill（zip 改副檔名）。
//
// 這是「金鑰內嵌」與「可以公開下載」互斥問題的解法：不走 GitHub Release，改由
// Worker 在 Access 保護的路徑上當場產生——使用者先 SSO 登入才拿得到檔案，而每次
// 下載都是一把獨立、可單獨撤銷的新金鑰。明文金鑰只在這裡出現一次。
//
// SKILL.md 與 nccn.py 是 skill/ 底下真正的檔案，用 wrangler 的 Text module 規則
// （見 wrangler.jsonc 的 rules）讀成字串，不是塞在 JS 裡的字串常數。

import SKILL_MD from "../skill/SKILL.md";
import NCCN_PY from "../skill/nccn.py";
import { mintKey } from "./apikey.js";
import { zip } from "./zip.js";

export const SKILL_FILENAME = "nccn.skill";

export function envFile(key, base) {
	return [
		"# 這把金鑰只屬於這一份 skill，可以在站上單獨撤銷，不影響其他份。",
		"# 外流等同把 NCCN 全文與 PDF 對外開放——撤銷後重新產生一份即可。",
		"NCCN_API_KEY=" + key,
		"NCCN_API_BASE=" + base,
		"",
	].join("\n");
}

// origin 例如 https://nccn.hsiehting.com。zip 內是扁平結構（SKILL.md 在根），
// 跟 `cd skill && zip -r ../x.zip .` 的產物一致。
export async function buildSkillZip(env, { label, origin }) {
	const { key, prefix } = await mintKey(env, label);
	const bytes = zip(
		[
			{ name: "SKILL.md", data: SKILL_MD },
			{ name: ".env", data: envFile(key, origin + "/api/v1"), mode: 0o600 },
			{ name: "nccn.py", data: NCCN_PY, mode: 0o755 },
		],
		{ date: new Date() },
	);
	return { bytes, prefix };
}
