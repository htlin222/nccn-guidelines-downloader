import { readFileSync } from "node:fs";
import { defineConfig } from "vitest/config";

// wrangler 把 skill/*.md 與 skill/*.py 當成 Text module（見 wrangler.jsonc 的
// rules），所以 Worker 那邊 `import SKILL_MD from "../../skill/SKILL.md"` 拿到的是
// 字串。vitest 底下是 vite，不知道這條規則，會拿去當 JS 解析然後炸在 YAML
// frontmatter 的第一行。這個外掛只是把同一條規則補上，讓測試載到的東西跟部署後
// 一模一樣。
const textModules = {
	name: "wrangler-text-module",
	enforce: "pre",
	load(id) {
		if (!/\/skill\/[^/]+\.(md|py)$/.test(id)) return null;
		return `export default ${JSON.stringify(readFileSync(id, "utf8"))};`;
	},
};

export default defineConfig({ plugins: [textModules] });
