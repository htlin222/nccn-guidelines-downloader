// 兩個來源的合流點：NCCN guidelines 與 MD Anderson clinical management algorithms。
//
// VALID_IDS / NAME_BY_ID 本來住在 data/guidelines.js。搬過來是因為它們現在涵蓋兩
// 個來源——留在那支就會變成一個名字說 NCCN、內容含 MDA 的 export，第一個讀到的人
// 就會誤判。guidelines.js 與 algorithms.js 各自只描述自己那一份目錄，這裡負責合。
//
// id 命名空間是這整件事的地基：MDA 那邊每個 id 都以 `mda-` 開頭。兩邊都有 vte、
// pain、distress，R2 也是所有來源共用同一個根目錄放 <id>.pdf——少了前綴，撞的不只
// 是查表，是實際的物件。
import { GUIDELINES } from "./guidelines.js";
import { ALGORITHMS } from "./algorithms.js";

// 命名空間前綴。搜尋索引的 pages 表沒有 src 欄位（加一欄要整張重建），但 gid 本
// 身就帶著來源資訊，所以按來源篩選就是一個 LIKE 'mda-%'。
export const MDA_PREFIX = "mda-";

export const SOURCES = [
	{ key: "nccn", label: "NCCN", name: "NCCN Guidelines" },
	{ key: "mda", label: "MD Anderson", name: "Clinical Management Algorithms" },
];

export const CATALOG = [
	...GUIDELINES.map((g) => ({ ...g, src: "nccn" })),
	...ALGORITHMS.map((a) => ({ ...a, src: "mda" })),
];

export const VALID_IDS = new Set(CATALOG.map((x) => x.id));
export const NAME_BY_ID = Object.fromEntries(CATALOG.map((x) => [x.id, x.name]));
export const SOURCE_BY_ID = Object.fromEntries(CATALOG.map((x) => [x.id, x.src]));

// MDA 的抓取網址只能從 file 組出來，組不出來就抓不到——所以這張表就是抓取真相。
// 反過來的 ID_BY_FILE 給 viewer 用：PDF 內的跨檔連結帶的是上游路徑，要靠它換成
// 站內 id（見 views/viewer.js 的連結改寫）。
export const FILE_BY_ID = Object.fromEntries(
	ALGORITHMS.map((a) => [a.id, a.file]),
);
export const ID_BY_FILE = Object.fromEntries(
	ALGORITHMS.map((a) => [a.file, a.id]),
);

export function sourceOf(id) {
	return SOURCE_BY_ID[id] || (String(id).startsWith("mda-") ? "mda" : "nccn");
}
