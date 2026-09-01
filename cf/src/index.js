// NCCN guideline downloader — Cloudflare Worker (entry / router).
// Modules: data/* (guideline + drug tables), lib/* (http, search, pdf, toc,
// constants), views/* (home, viewer, static). wrangler/esbuild bundles these
// into one Worker. See test/* for unit tests of the pure lib helpers.
// Routes: / (grid), /preview/:id (pdf.js), /pdf/:id (inline), /dl/:id (download),
//         /thumb/:id, /manifest.webmanifest, /sw.js, /icons/*, /apple-touch-icon.png,
//         /api/{cookie,cookie-status,r2-status,search,refresh,toc,insight},
//         /api/{bookmark,bookmarks,star,stars},
//         /api/notifications(/read).
import { CATALOG, NAME_BY_ID, VALID_IDS } from "./data/catalog.js";
import {
	COOKIE_KEY,
	META_KEY,
	CRON_HEALTH_KEY,
	PER_DAY,
} from "./lib/constants.js";
import { json, html } from "./lib/http.js";
import { buildMatch, queryTerms } from "./lib/search.js";
import {
	fetchLive,
	refreshOne,
	refreshBatch,
	servePdf,
	serveR2Asset,
} from "./lib/pdf.js";
import {
	KINDS,
	PROVIDERS,
	generateAndCache,
	SEL_KINDS,
	generateSelection,
	hasAntigravity,
	listInsights,
	needsVision,
	pageText,
	readCache,
	readGeminiUsage,
	readUsage,
	visionMap,
} from "./lib/insight.js";
import { listBookmarks, listStars, putBookmark, setStar } from "./lib/marks.js";
import {
	countNotifications,
	lastCronAt,
	listNotifications,
	markRead,
} from "./lib/notify.js";
import { API_PREFIX, handleApi } from "./lib/api.js";
import { listKeys, mintKey, revokeKey } from "./lib/apikey.js";
import { SKILL_FILENAME, buildSkillZip } from "./lib/skillpack.js";
import { renderPage } from "./views/home.js";
import { renderNotes } from "./views/notes.js";
import { buildSearch, parseQuery, rankRows } from "./lib/notes.js";
import { remember } from "./lib/cache.js";
// hashKey 就是 sha256 十六進位，名字是金鑰用途留下的。這裡借它算生成內容的
// 指紋，不值得為了名字再抄一份同樣的 crypto.subtle.digest。
import { hashKey as sha256 } from "./lib/apikey.js";
import { renderViewer } from "./views/viewer.js";
import { faviconResponse, manifestResponse, SW_JS } from "./views/static.js";

export default {
	async scheduled(event, env, ctx) {
		const out = await refreshBatch(env, PER_DAY);
		console.log("cron refresh", JSON.stringify(out));
	},

	async fetch(request, env, ctx) {
		const url = new URL(request.url);
		const { pathname } = url;

		// 給 Claude Code skill 用的 token API。這是整個站唯一在 Cloudflare Access
		// 開了 Bypass 的路徑（Zero Trust 裡有一個 application 指向
		// nccn.hsiehting.com/api/v1，政策 Bypass Everyone），所以擋在前面的只有
		// bearer token。底下的 /api/keys 與 /api/skill.zip 刻意不在這個前綴內——
		// 它們發放與撤銷金鑰，必須留在 Access 後面。
		if (pathname.startsWith(API_PREFIX))
			return handleApi(request, env, ctx, url);

		if (pathname === "/" || pathname === "/index.html")
			return html(renderPage(request));

		// 臨床筆記：門診核對清單的瀏覽與檢索（issue #4）。跟 /api/v1 不同，這條
		// 路徑留在 Cloudflare Access 後面——它是給人用的頁面，不是給 token 用的。
		if (pathname === "/notes") return html(renderNotes(request));

		// 首頁那一列分頁要顯示份數。另外兩顆的數字是編譯進去的常數，這顆是 D1 的
		// 動態狀態，所以獨立成一個端點在載入後補——不讓首頁的 render 依賴 D1。
		// 路徑刻意不是 /api/notes/count：那會被下面的 /api/notes/:gid/:ref 吃掉。
		if (pathname === "/api/notes-count") {
			try {
				const body = await remember(
					env,
					ctx,
					"count",
					"",
					async () => {
						const r = await env.DB.prepare(
							"SELECT COUNT(*) AS n FROM snippets",
						).first();
						return { n: (r && r.n) || 0 };
					},
					"notes",
				);
				return new Response(body, {
					headers: { "content-type": "application/json; charset=utf-8" },
				});
			} catch (e) {
				return json({ n: 0, error: String(e && e.message) }, 500);
			}
		}

		if (pathname === "/api/notes") {
			const q = url.searchParams.get("q") || "";
			try {
				// 別名表原本每次現讀 D1，理由是「改了字典卻沒反應」比省一次查詢重要。
				// 現在改成走 KV，而那個理由沒有被犧牲：key 帶 notes:gen 世代號，
				// load_snippets.sh 每次載完就改寫它，所以改字典仍然一跑就生效。
				// 省下來的是每一次搜尋都要付的一趟 D1 往返。
				const alias = JSON.parse(
					await remember(
						env,
						ctx,
						"alias",
						"",
						async () => {
							const al = await env.DB.prepare(
								"SELECT axis, alias, value FROM facet_alias",
							).all();
							const m = {};
							for (const r of al.results || []) {
								(m[r.axis] = m[r.axis] || {})[r.alias] = r.value;
							}
							return m;
						},
						"notes",
					),
				);
				const parsed = parseQuery(q, alias);
				// 查詢結果也進 KV，key 用解析後的 facet + 文字而不是原始字串：
				// 「乳癌 三期」與「三期 乳癌」是同一個查詢，不該各佔一份。
				const ckey =
					parsed.facets
						.map((f) => f.axis + "=" + f.value)
						.sort()
						.join("&") +
					"|" +
					[...parsed.text].sort().join(" ");
				const body = await remember(
					env,
					ctx,
					"q",
					ckey,
					async () => {
						const { sql, binds } = buildSearch(parsed, 80);
						const res = await env.DB.prepare(sql)
							.bind(...binds)
							.all();
						// 空結果照樣快取——那是個正當答案。只有下面 catch 到的錯誤不快取。
						return { rows: rankRows(res.results || []) };
					},
					"notes",
				);
				const out = JSON.parse(body);
				return json({
					rows: out.rows,
					facets: parsed.facets,
					text: parsed.text,
				});
			} catch (e) {
				return json({ rows: [], error: String(e && e.message) }, 500);
			}
		}

		// 單一份清單的讀與寫。
		//
		// 這條路徑刻意留在 Cloudflare Access 後面（不是 /api/v1 那個 Bypass 前綴），
		// 所以 PUT 的授權就是 Access 本身——能登入的人才寫得了，而 Access 同時告訴
		// 我們是誰寫的。任何時候把它搬進 /api/v1，等於把寫入能力送給整個網際網路。
		if (pathname.startsWith("/api/notes/")) {
			const [, , , gid, ref] = pathname.split("/");
			if (!gid || !ref) return json({ error: "bad path" }, 400);
			const g = decodeURIComponent(gid);
			const r = decodeURIComponent(ref);

			if (request.method === "PUT" || request.method === "DELETE") {
				const who =
					request.headers.get("cf-access-authenticated-user-email") || "";
				try {
					const row = await env.DB.prepare(
						"SELECT body FROM snippets WHERE gid=? AND ref=?",
					)
						.bind(g, r)
						.first();
					if (!row) return json({ error: "not found" }, 404);

					if (request.method === "DELETE") {
						await env.DB.prepare(
							"DELETE FROM snippet_edits WHERE gid=? AND ref=?",
						)
							.bind(g, r)
							.run();
					} else {
						const in_ = await request.json().catch(() => null);
						const text = in_ && typeof in_.body === "string" ? in_.body : null;
						if (text == null) return json({ error: "body required" }, 400);
						// 改回跟生成內容一模一樣，就當成撤銷。留著一筆內容相同的
						// 「已編輯」只會讓那個徽章失去意義。
						if (text === row.body) {
							await env.DB.prepare(
								"DELETE FROM snippet_edits WHERE gid=? AND ref=?",
							)
								.bind(g, r)
								.run();
						} else {
							await env.DB.prepare(
								"INSERT OR REPLACE INTO snippet_edits" +
									" (gid,ref,body,base_hash,editor,updated) VALUES (?,?,?,?,?,?)",
							)
								.bind(
									g,
									r,
									text,
									await sha256(row.body),
									who,
									new Date().toISOString(),
								)
								.run();
						}
					}
					// 這裡刻意不去動 KV。修改本來就不經過 KV——見下面讀取路徑的說明。
					return json({ ok: true });
				} catch (e) {
					return json({ error: String(e && e.message) }, 500);
				}
			}

			try {
				// 只有生成內容進 KV，使用者的修改每次從 D1 讀。
				//
				// 這是踩過才改的：原本整包（含修改）一起快取，PUT 之後再刪那個 KV
				// key。看起來嚴密，實際上存完馬上重讀還是拿到舊的——remember() 用
				// cacheTtl 3600 讀 KV，而 KV 有自己的邊緣快取又是最終一致，
				// 「這個 key 刪掉了」是照 KV 的時程生效，不是照我的。
				// §5.6 的撤銷金鑰是同一個坑的另一個版本。
				//
				// 所以分法是：生成內容一週才變一次，快取它；修改是使用者剛剛按下
				// 儲存的東西，必須讀得到自己寫的。多的那一趟 D1 是主鍵查詢
				// （rows_read=1），而且一次點擊才一趟，不像搜尋是每次打字都跑。
				const base = await remember(
					env,
					ctx,
					"s",
					g + "/" + r,
					async () => {
						// loader 回 null 代表這份不存在，remember 就不會把 404 釘住 30 天。
						const row = await env.DB.prepare(
							"SELECT gid, ref, title, body, page, version, review FROM snippets WHERE gid=? AND ref=?",
						)
							.bind(g, r)
							.first();
						return row || null;
					},
					"notes",
				);
				if (!base) return json({ error: "not found" }, 404);

				const row = JSON.parse(base);
				const ed = await env.DB.prepare(
					"SELECT body, base_hash, editor, updated FROM snippet_edits WHERE gid=? AND ref=?",
				)
					.bind(g, r)
					.first();
				if (ed) {
					row.generated = row.body;
					row.body = ed.body;
					row.edited = { editor: ed.editor, updated: ed.updated };
					// base 對不上代表這份修改是針對舊版寫的——之後重新生成過了。
					// 讀的人該知道，不然一份舊修改會安靜地擋住新版內容。
					row.stale = ed.base_hash
						? ed.base_hash !== (await sha256(row.generated))
						: false;
				}
				return json(row);
			} catch (e) {
				return json({ error: String(e && e.message) }, 500);
			}
		}
		if (pathname === "/manifest.webmanifest") return manifestResponse();
		if (pathname === "/favicon.svg" || pathname === "/favicon.ico")
			return faviconResponse();
		if (pathname === "/sw.js")
			return new Response(SW_JS, {
				headers: {
					"content-type": "text/javascript; charset=utf-8",
					"cache-control": "no-cache",
				},
			});

		if (pathname === "/icons/icon-192.png")
			return serveR2Asset(
				env,
				"asset/icon-192.png",
				"image/png",
				"public, max-age=604800",
			);
		if (pathname === "/icons/icon-512.png")
			return serveR2Asset(
				env,
				"asset/icon-512.png",
				"image/png",
				"public, max-age=604800",
			);
		if (pathname === "/apple-touch-icon.png")
			return serveR2Asset(
				env,
				"asset/apple-touch.png",
				"image/png",
				"public, max-age=604800",
			);

		if (pathname.startsWith("/thumb/")) {
			const id = decodeURIComponent(pathname.slice("/thumb/".length));
			if (!VALID_IDS.has(id))
				return new Response("Unknown id", { status: 404 });
			return serveR2Asset(
				env,
				`thumb/${id}.webp`,
				"image/webp",
				"public, max-age=86400",
			);
		}

		// 金鑰管理。留在 Access 保護內（不在 /api/v1 前綴），所以打得到這裡就代表
		// 已經 SSO 登入過了，不需要再檢查一次身分。
		if (pathname === "/api/keys" && request.method === "GET")
			return json({ ok: true, rows: await listKeys(env) });

		// 只鑄金鑰、不打包 skill。回傳的明文之後再也拿不到。
		if (pathname === "/api/keys" && request.method === "POST") {
			const b = await request.json().catch(() => ({}));
			try {
				return json({ ok: true, ...(await mintKey(env, b.label)) });
			} catch (e) {
				return json({ ok: false, error: String(e.message || e) }, 500);
			}
		}

		if (pathname === "/api/keys/revoke" && request.method === "POST") {
			const b = await request.json().catch(() => ({}));
			const id = parseInt(b.id, 10);
			if (!(id > 0)) return json({ ok: false, error: "bad id" }, 400);
			const out = await revokeKey(env, id);
			return json(out, out.ok ? 200 : 404);
		}

		// 鑄一把新金鑰、當場烤進 zip 回傳。瀏覽器會直接存成 nccn.skill。
		if (pathname === "/api/skill.zip" && request.method === "GET") {
			const label =
				(url.searchParams.get("label") || "").trim() || "Claude Code";
			try {
				const { bytes, prefix } = await buildSkillZip(env, {
					label,
					origin: url.origin,
				});
				return new Response(bytes, {
					headers: {
						"content-type": "application/zip",
						"content-disposition": `attachment; filename="${SKILL_FILENAME}"`,
						"cache-control": "no-store",
						// 面板要顯示「這次發的是哪一把」，但 body 是二進位拿不到。
						"x-key-prefix": prefix,
					},
				});
			} catch (e) {
				return json({ ok: false, error: String(e.message || e) }, 500);
			}
		}

		if (pathname === "/api/cookie-status" && request.method === "GET") {
			const cookie = await env.NCCN_KV.get(COOKIE_KEY);
			const meta = await env.NCCN_KV.get(META_KEY, "json");
			return json({
				set: !!cookie,
				length: cookie ? cookie.length : 0,
				updated: meta?.updated || null,
			});
		}

		if (pathname === "/api/cookie" && request.method === "POST") {
			let value = "";
			const ct = request.headers.get("content-type") || "";
			if (ct.includes("application/json")) {
				const body = await request.json().catch(() => ({}));
				value = (body.cookie || "").trim();
			} else {
				const form = await request.formData();
				value = String(form.get("cookie") || "").trim();
			}
			if (!value) return json({ ok: false, error: "cookie 內容為空" }, 400);
			await env.NCCN_KV.put(COOKIE_KEY, value);
			await env.NCCN_KV.put(
				META_KEY,
				JSON.stringify({ updated: new Date().toISOString() }),
			);
			return json({ ok: true, length: value.length });
		}

		if (pathname === "/api/r2-status" && request.method === "GET") {
			// 分頁到底，不是只拿第一批 1000 個。R2 的 1000 是單次上限，而這個桶裡
			// 除了 PDF 還有縮圖、toc/updates 的 JSON——加進 MD Anderson 那 91 份之後
			// 總物件數逼近 700，離截斷不遠了。被截掉的那幾份會在首頁顯示成「未快取」，
			// 而檔案其實好端端在 R2 裡，是最難查的那種錯。
			const map = {};
			let cursor;
			do {
				const listed = await env.PDFS.list({ limit: 1000, cursor });
				for (const o of listed.objects) {
					if (!o.key.endsWith(".pdf")) continue;
					const id = o.key.replace(/\.pdf$/, "");
					map[id] = {
						size: o.size,
						uploaded: o.uploaded ? o.uploaded.toISOString() : null,
					};
				}
				cursor = listed.truncated ? listed.cursor : null;
			} while (cursor);
			const health = await env.NCCN_KV.get(CRON_HEALTH_KEY, "json").catch(
				() => null,
			);
			// 未讀數順路搭這班車。首頁本來就會打 /api/r2-status，鈴鐺的徽章不值得
			// 多一次往返；完整清單等使用者真的點開鈴鐺才拉。
			const notify = await countNotifications(env);
			const vobj = await env.PDFS.get("meta/versions.json");
			const versions = vobj ? await vobj.json().catch(() => ({})) : {};
			// Which ids have a banner-free copy (built by gen_clean.sh in CI).
			const cobj = await env.PDFS.get("meta/clean.json");
			const clean = cobj ? await cobj.json().catch(() => ({})) : {};
			return json({
				cached: map,
				versions,
				clean,
				count: Object.keys(map).length,
				total: CATALOG.length,
				// 最近一次 cron 的結果。前端據此顯示警示，不用等到一輪跑完才發現壞掉。
				health: health || null,
				perDay: PER_DAY,
				notify,
			});
		}

		// 通知中心。清單只在使用者點開鈴鐺時才拉（徽章數字走 /api/r2-status）。
		// lastCron 是「最新一筆 cron 紀錄的時間」——cron 沒跑這件事沒有人會來寫，
		// 只能由前端拿它推算靜默幾天（lib/notify.js 的 staleEvent）。
		if (pathname === "/api/notifications" && request.method === "GET") {
			const [rows, counts, lastCron] = await Promise.all([
				listNotifications(env, url.searchParams.get("limit")),
				countNotifications(env),
				lastCronAt(env),
			]);
			return json({ ok: true, rows, lastCron, ...counts });
		}

		// {all:true} 全部已讀，{id:N} 單筆。
		if (pathname === "/api/notifications/read" && request.method === "POST") {
			const b = await request.json().catch(() => ({}));
			const out = await markRead(env, { id: b.id, all: b.all === true });
			return json(out, out.ok ? 200 : 400);
		}

		if (pathname === "/api/search" && request.method === "GET") {
			const q = (url.searchParams.get("q") || "").trim();
			const gid = url.searchParams.get("id");
			const cat = url.searchParams.get("cat");
			const src = url.searchParams.get("src");
			if (q.length < 2) return json({ q, results: [] });
			const match = buildMatch(q);
			if (!match) return json({ q, results: [] });
			let sql =
				"SELECT gid, page, name, cat, snippet(pages, 4, '<mark>', '</mark>', '…', 12) AS snip FROM pages WHERE pages MATCH ?";
			const binds = [match];
			if (gid && VALID_IDS.has(gid)) {
				sql += " AND gid = ?";
				binds.push(gid);
			}
			// 首頁一次只顯示一個來源的卡片，下拉的內文命中也就該跟著收斂——不然在
			// MD Anderson 分頁搜尋，回來的一半是點下去會切走分頁的 NCCN 結果。
			// pages 表沒有 src 欄位，但 gid 的命名空間前綴就是來源。
			if (src === "mda") sql += " AND gid LIKE 'mda-%'";
			else if (src === "nccn") sql += " AND gid NOT LIKE 'mda-%'";
			if (cat) {
				sql += " AND cat = ?";
				binds.push(cat);
			}
			sql += " ORDER BY rank LIMIT " + (gid ? 300 : 80);
			try {
				const { results } = await env.DB.prepare(sql)
					.bind(...binds)
					.all();
				return json({
					q,
					terms: queryTerms(q),
					count: results.length,
					results,
				});
			} catch (e) {
				return json({ q, error: String(e), results: [] });
			}
		}

		if (pathname === "/api/refresh" && request.method === "POST") {
			const single = url.searchParams.get("id");
			if (single) {
				if (!VALID_IDS.has(single))
					return json({ ok: false, error: "unknown id" }, 404);
				return json(await refreshOne(env, single));
			}
			let n = parseInt(url.searchParams.get("n") || "3", 10);
			if (!Number.isFinite(n) || n < 1) n = 3;
			n = Math.min(n, 25);
			return json(await refreshBatch(env, n));
		}

		if (pathname === "/api/toc" && request.method === "GET") {
			const gid = url.searchParams.get("id");
			if (!gid || !VALID_IDS.has(gid)) return json([]);
			const obj = await env.PDFS.get("meta/toc/" + gid + ".json");
			if (!obj) return json([]);
			return new Response(obj.body, {
				headers: {
					"content-type": "application/json; charset=utf-8",
					"cache-control": "public, max-age=3600",
				},
			});
		}

		// 書籤：?id= 只列該份，?all=1 列全部（跨份時附上書名，清單才看得懂是哪一份）。
		if (pathname === "/api/bookmarks" && request.method === "GET") {
			const gid = url.searchParams.get("id");
			const all = url.searchParams.get("all") === "1";
			const one = !all && VALID_IDS.has(gid) ? gid : null;
			const rows = await listBookmarks(env, one);
			return json({
				ok: true,
				count: rows.length,
				rows: one
					? rows
					: rows.map((r) => ({ ...r, name: NAME_BY_ID[r.gid] || r.gid })),
			});
		}

		// 單頁書籤的加／減／改備註。on:false 是移除，其餘是 upsert。
		if (pathname === "/api/bookmark" && request.method === "POST") {
			const b = await request.json().catch(() => ({}));
			const gid = String(b.id || "");
			const page = parseInt(b.page, 10);
			if (!VALID_IDS.has(gid))
				return json({ ok: false, error: "unknown id" }, 404);
			if (!(page >= 1)) return json({ ok: false, error: "bad page" }, 400);
			try {
				const out = await putBookmark(env, {
					gid,
					page,
					label: b.label,
					note: b.note,
					on: b.on !== false,
				});
				return json({ ok: true, ...out });
			} catch (e) {
				return json({ ok: false, error: String(e.message || e) }, 500);
			}
		}

		if (pathname === "/api/stars" && request.method === "GET") {
			const ids = await listStars(env);
			return json({ ok: true, count: ids.length, ids });
		}

		if (pathname === "/api/star" && request.method === "POST") {
			const b = await request.json().catch(() => ({}));
			const gid = String(b.id || "");
			if (!VALID_IDS.has(gid))
				return json({ ok: false, error: "unknown id" }, 404);
			try {
				return json({ ok: true, ...(await setStar(env, gid, b.on !== false)) });
			} catch (e) {
				return json({ ok: false, error: String(e.message || e) }, 500);
			}
		}

		// 已存重點清單（哪一份、第幾頁、什麼內容）。?id= 只列該份，?all=1 列全部。
		if (pathname === "/api/insights" && request.method === "GET") {
			const gid = url.searchParams.get("id");
			const all = url.searchParams.get("all") === "1";
			const rows = await listInsights(
				env,
				all || !VALID_IDS.has(gid) ? null : gid,
			);
			return json({ ok: true, count: rows.length, rows });
		}

		// 開啟 AI 面板時一次把整份的「已存內容 + 哪些頁要讀圖」拿走，之後翻頁完全
		// 不用再打網路——否則每翻一頁都要等一次 D1 往返，畫面就一直閃「讀取中…」。
		if (pathname === "/api/insight-map" && request.method === "GET") {
			const gid = String(url.searchParams.get("id") || "");
			if (!VALID_IDS.has(gid))
				return json({ ok: false, error: "unknown id" }, 404);
			const ag = hasAntigravity(env);
			const [rows, vision, quota, agquota] = await Promise.all([
				listInsights(env, gid),
				visionMap(env, gid),
				readUsage(env),
				ag ? readGeminiUsage(env) : null,
			]);
			return json({ ok: true, gid, ag, vision, rows, quota, agquota });
		}

		// AI 逐頁重點。GET 只讀快取（免費、可隨翻頁自動打），真正花額度的生成一律走 POST。
		// 選取一段文字之後的兩個 AI 動作（條列 / 中文解釋）。跟 /api/insight 分開，
		// 因為輸入不是「哪一頁」而是「框起來的哪一段」——同一頁可以框出無數種選取，
		// 用 (gid,page,kind) 那個鍵存會互相覆蓋。所以這條不進快取，但一樣計入
		// 每日 neurons 預算，因為真正的限制是那個。
		if (pathname === "/api/selection" && request.method === "POST") {
			const p = await request.json().catch(() => ({}));
			const gid = String(p.id || "");
			const kind = String(p.kind || "");
			const page = parseInt(p.page, 10) || 0;
			if (!VALID_IDS.has(gid))
				return json({ ok: false, error: "unknown id" }, 404);
			if (SEL_KINDS.indexOf(kind) < 0)
				return json({ ok: false, error: "bad kind" }, 400);
			// 上限擋的是「整頁 select-all 再送出」——那不是這個功能要解的問題，
			// 而且一次就能把當日額度吃掉一大塊。
			const text = String(p.text || "").slice(0, 6000);
			try {
				const out = await generateSelection(env, {
					text,
					kind,
					page,
					name: NAME_BY_ID[gid] || gid,
				});
				return json({ ok: true, kind, ...out });
			} catch (e) {
				return json(
					{ ok: false, error: String(e.message || e), quota: e.quota },
					e.status || 500,
				);
			}
		}

		if (pathname === "/api/insight") {
			const params =
				request.method === "POST"
					? await request.json().catch(() => ({}))
					: Object.fromEntries(url.searchParams);
			const gid = String(params.id || "");
			const page = parseInt(params.page, 10);
			const kind = String(params.kind || "key");
			if (!VALID_IDS.has(gid))
				return json({ ok: false, error: "unknown id" }, 404);
			if (!(page >= 1)) return json({ ok: false, error: "bad page" }, 400);
			if (KINDS.indexOf(kind) < 0)
				return json({ ok: false, error: "bad kind" }, 400);

			// AI 來源：ag = Antigravity（Gemini 階梯），cf = Workers AI。沒設金鑰就只有 cf。
			const ag = hasAntigravity(env);
			const provider =
				PROVIDERS.indexOf(String(params.provider || "")) >= 0 && ag
					? String(params.provider)
					: "cf";

			if (request.method === "GET") {
				const hit = await readCache(env, gid, page, kind);
				if (hit)
					return json({ ok: true, cached: true, kind, page, ag, ...hit });
				const text = await pageText(env, gid, page);
				return json({
					ok: true,
					cached: false,
					kind,
					page,
					// 演算法流程圖頁抽字會散掉，請前端把該頁 rasterize 成 JPEG 一起送上來。
					vision: needsVision(text),
					hasText: !!text,
					ag,
					quota: await readUsage(env),
					agquota: ag ? await readGeminiUsage(env) : null,
				});
			}

			if (request.method === "POST") {
				if (!params.force) {
					const hit = await readCache(env, gid, page, kind);
					if (hit)
						return json({ ok: true, cached: true, kind, page, ag, ...hit });
				}
				const text = await pageText(env, gid, page);
				const image =
					typeof params.image === "string" && params.image.length > 64
						? params.image
						: null;
				try {
					const out = await generateAndCache(env, {
						gid,
						page,
						kind,
						name: NAME_BY_ID[gid] || gid,
						text,
						image,
						provider,
					});
					return json({ ok: true, cached: false, kind, page, ag, ...out });
				} catch (e) {
					return json(
						{ ok: false, error: String(e.message || e), quota: e.quota },
						e.status || 500,
					);
				}
			}
			return new Response("Method not allowed", { status: 405 });
		}

		// The root <id>.pdf is the banner-free copy, so /pdf and /dl are clean by
		// default; ?raw=1 asks for the untouched original under raw/.
		const wantRaw = url.searchParams.get("raw") === "1";
		if (pathname.startsWith("/pdf/")) {
			const id = decodeURIComponent(pathname.slice("/pdf/".length));
			if (!VALID_IDS.has(id))
				return new Response("Unknown id", { status: 404 });
			return servePdf(env, id, { download: false, request, raw: wantRaw });
		}
		if (pathname.startsWith("/dl/")) {
			const id = decodeURIComponent(pathname.slice("/dl/".length));
			if (!VALID_IDS.has(id))
				return new Response("Unknown id", { status: 404 });
			return servePdf(env, id, { download: true, request, raw: wantRaw });
		}
		if (pathname.startsWith("/preview/")) {
			// 結尾多打一個斜線（/preview/aml/）以前會 404，貼網址時很容易踩到。
			const id = decodeURIComponent(
				pathname.slice("/preview/".length).replace(/\/+$/, ""),
			);
			if (!VALID_IDS.has(id))
				return new Response("Unknown id", { status: 404 });
			return html(renderViewer(id));
		}

		return new Response("Not found", { status: 404 });
	},
};
