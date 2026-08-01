import { describe, it, expect } from "vitest";
import {
	badgeCount,
	cronEvents,
	fmtEvent,
	relTime,
	staleEvent,
	versionEvents,
} from "../src/lib/notify.js";

const AT = "2026-07-31T03:00:12.000Z";

describe("cronEvents", () => {
	it("reports a clean run as a single info line", () => {
		const evs = cronEvents({ at: AT, ok: 3, fail: 0, ids: ["aml", "cll", "nscl"] });
		expect(evs).toHaveLength(1);
		expect(evs[0]).toMatchObject({
			kind: "cron",
			level: "info",
			title: "每日更新 3/3 完成",
			created: AT,
		});
		expect(evs[0].body.ids).toEqual(["aml", "cll", "nscl"]);
	});

	it("warns on a partial failure without crying cookie", () => {
		const evs = cronEvents({
			at: AT,
			ok: 2,
			fail: 1,
			ids: ["aml", "cll", "nscl"],
			errors: ["nscl: 403 text/html"],
		});
		expect(evs).toHaveLength(1);
		expect(evs[0].level).toBe("warn");
		expect(evs[0].title).toBe("每日更新部分失敗 2/3");
	});

	// 整輪全掛在這個站幾乎必然是 cookie 過期，所以另外發一則需要人處理的。
	it("adds a cookie alert when nothing at all got through", () => {
		const evs = cronEvents({
			at: AT,
			ok: 0,
			fail: 3,
			ids: ["aml", "cll", "nscl"],
			errors: ["aml: 302 text/html", "cll: 302 text/html", "nscl: 302 text/html"],
		});
		expect(evs.map((e) => [e.kind, e.level])).toEqual([
			["cron", "error"],
			["cookie", "error"],
		]);
		expect(evs[1].title).toBe("NCCN cookie 可能已過期，請重新貼上");
	});

	it("distinguishes a never-set cookie from an expired one", () => {
		const evs = cronEvents({
			at: AT,
			ok: 0,
			fail: 2,
			ids: ["aml", "cll"],
			errors: ["aml: no-cookie", "cll: no-cookie"],
		});
		expect(evs[1].title).toBe("尚未設定 NCCN cookie，抓取全部停擺");
	});

	it("says nothing when the batch touched nothing", () => {
		expect(cronEvents({ at: AT, ok: 0, fail: 0, ids: [] })).toEqual([]);
		expect(cronEvents(null)).toEqual([]);
	});
});

describe("versionEvents", () => {
	const NAMES = { aml: "Acute Myeloid Leukemia", cll: "CLL/SLL" };

	it("reports only the ids whose version actually moved", () => {
		const evs = versionEvents(
			{ aml: { v: "2.2026" }, cll: { v: "1.2026" } },
			{ aml: { v: "3.2026", d: "July 30, 2026" }, cll: { v: "1.2026" } },
			NAMES,
			AT,
		);
		expect(evs).toHaveLength(1);
		expect(evs[0]).toMatchObject({
			kind: "version",
			level: "info",
			title: "Acute Myeloid Leukemia 版本更新 v2.2026 → v3.2026",
			created: AT,
		});
		expect(evs[0].body).toEqual({
			id: "aml",
			from: "2.2026",
			to: "3.2026",
			date: "July 30, 2026",
		});
	});

	it("phrases a newly-appearing id differently", () => {
		const evs = versionEvents({ aml: { v: "2.2026" } }, { aml: { v: "2.2026" }, cll: { v: "1.2026" } }, NAMES, AT);
		expect(evs.map((e) => e.title)).toEqual(["CLL/SLL 首次取得版本 v1.2026"]);
	});

	// 第一次跑（或 R2 上還沒有舊檔）不該把整份目錄當成「更新」發出來。
	it("stays silent when there is no previous manifest", () => {
		expect(versionEvents({}, { aml: { v: "2.2026" } }, NAMES, AT)).toEqual([]);
		expect(versionEvents(null, { aml: { v: "2.2026" } }, NAMES, AT)).toEqual([]);
	});

	it("falls back to the id when the name is unknown", () => {
		const evs = versionEvents({ zz: { v: "1.2025" } }, { zz: { v: "2.2026" } }, NAMES, AT);
		expect(evs[0].title).toBe("zz 版本更新 v1.2025 → v2.2026");
	});

	it("ignores entries that lost their version string", () => {
		expect(versionEvents({ aml: { v: "2.2026" } }, { aml: { v: "" } }, NAMES, AT)).toEqual([]);
	});
});

describe("staleEvent", () => {
	const NOW = "2026-07-31T12:00:00.000Z";

	it("says nothing while the cron is keeping up", () => {
		expect(staleEvent("2026-07-31T03:00:00.000Z", NOW, 2)).toBeNull();
		expect(staleEvent("2026-07-30T03:00:00.000Z", NOW, 2)).toBeNull();
	});

	it("escalates to an error once the silence passes the limit", () => {
		const ev = staleEvent("2026-07-25T03:00:00.000Z", NOW, 2);
		expect(ev.level).toBe("error");
		expect(ev.title).toBe("每日更新已 6 天沒有紀錄 — cron 可能沒在跑");
		expect(ev.synthetic).toBe(true);
	});

	it("treats no record at all as a warning, not silence", () => {
		expect(staleEvent(null, NOW, 2)).toMatchObject({
			level: "warn",
			title: "尚無任何每日更新紀錄",
		});
	});
});

describe("badgeCount", () => {
	const ROWS = [
		{ level: "error", read_at: null },
		{ level: "info", read_at: null },
		{ level: "warn", read_at: null },
		{ level: "error", read_at: "2026-07-30T00:00:00.000Z" },
	];

	// 每天一則「3/3 完成」若也算進徽章，鈴鐺就永遠亮著，等於沒有徽章。
	it("counts every unread row but only alerts on warn/error", () => {
		expect(badgeCount(ROWS)).toEqual({ unread: 3, alert: 2 });
	});

	it("survives an empty or missing list", () => {
		expect(badgeCount([])).toEqual({ unread: 0, alert: 0 });
		expect(badgeCount(null)).toEqual({ unread: 0, alert: 0 });
	});
});

describe("relTime", () => {
	const NOW = "2026-07-31T12:00:00.000Z";
	const cases = [
		["2026-07-31T11:59:30.000Z", "剛剛"],
		["2026-07-31T11:30:00.000Z", "30 分鐘前"],
		["2026-07-31T09:00:00.000Z", "3 小時前"],
		["2026-07-30T09:00:00.000Z", "昨天"],
		["2026-07-26T12:00:00.000Z", "5 天前"],
		["2026-05-31T12:00:00.000Z", "2 個月前"],
		["2024-07-31T12:00:00.000Z", "2 年前"],
	];
	for (const [iso, want] of cases)
		it(`renders ${iso} as ${want}`, () => expect(relTime(iso, NOW)).toBe(want));

	it("returns nothing for an unparseable stamp", () => {
		expect(relTime("", NOW)).toBe("");
		expect(relTime("not a date", NOW)).toBe("");
	});

	// 伺服器與瀏覽器的時鐘差幾秒，不該渲染成「-1 分鐘前」。
	it("clamps a future stamp to 剛剛", () => {
		expect(relTime("2026-07-31T12:00:30.000Z", NOW)).toBe("剛剛");
	});
});

describe("fmtEvent", () => {
	it("prefers errors over ids in the subtitle", () => {
		expect(
			fmtEvent({
				level: "error",
				kind: "cron",
				body: JSON.stringify({ ids: ["aml"], errors: ["aml: 302 text/html"] }),
			}),
		).toEqual({ icon: "⛔", sub: "aml: 302 text/html" });
	});

	it("lists the ids of a clean run", () => {
		expect(fmtEvent({ level: "info", kind: "cron", body: { ids: ["aml", "cll"] } })).toEqual({
			icon: "✓",
			sub: "aml、cll",
		});
	});

	it("marks version news with its own icon", () => {
		expect(fmtEvent({ level: "info", kind: "version", body: { date: "July 30, 2026" } })).toEqual({
			icon: "✨",
			sub: "July 30, 2026",
		});
	});

	it("does not blow up on a malformed body", () => {
		expect(fmtEvent({ level: "warn", kind: "ci", body: "{not json" })).toEqual({
			icon: "⚠️",
			sub: "",
		});
		expect(fmtEvent(null)).toEqual({ icon: "✓", sub: "" });
	});
});
