// 在 Worker 裡即時打包 .skill（就是一個 zip 改副檔名）。
//
// 為什麼自己寫：Workers 沒有內建 zip 寫入器，而唯一的替代方案是把一個壓縮函式庫
// 塞進 bundle。skill 只有幾十 KB 的純文字，壓不壓縮無所謂，所以這裡只做 store
// 模式（compression method 0）——換來零依賴，而且整支都是可測的純函式。
//
// 規格：APPNOTE.TXT 4.3.6～4.3.16。只用到 local file header、central directory
// header、EOCD 三種結構，不做 zip64（skill 不可能超過 4GB）。

const enc = new TextEncoder();

// CRC-32（IEEE 802.3，多項式反轉後是 0xEDB88320）。表在模組載入時算一次。
const CRC_TABLE = (() => {
	const t = new Uint32Array(256);
	for (let i = 0; i < 256; i++) {
		let c = i;
		for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
		t[i] = c >>> 0;
	}
	return t;
})();

export function crc32(bytes) {
	let c = 0xffffffff;
	for (let i = 0; i < bytes.length; i++)
		c = CRC_TABLE[(c ^ bytes[i]) & 0xff] ^ (c >>> 8);
	return (c ^ 0xffffffff) >>> 0;
}

// MS-DOS 時間戳：日期的 epoch 是 1980，秒數只有 5 bits（所以除以 2）。
// 1980 以前的時間沒有表示法，夾到下限而不是產生負數欄位。
export function dosStamp(date) {
	const d = date instanceof Date && !Number.isNaN(+date) ? date : new Date(0);
	const year = Math.max(1980, d.getUTCFullYear());
	return {
		time:
			(d.getUTCHours() << 11) |
			(d.getUTCMinutes() << 5) |
			(d.getUTCSeconds() >> 1),
		date:
			((year - 1980) << 9) | ((d.getUTCMonth() + 1) << 5) | d.getUTCDate(),
	};
}

function bytesOf(data) {
	if (data instanceof Uint8Array) return data;
	if (data instanceof ArrayBuffer) return new Uint8Array(data);
	return enc.encode(String(data));
}

// files: [{ name, data, mode? }]，data 收字串或 Uint8Array。
// 回傳 Uint8Array，直接餵給 new Response() 即可。
// 路徑一律用正斜線；zip 規格不接受反斜線，Windows 上解出來會變成怪檔名。
export function zip(files, opt) {
	const o = opt || {};
	const { time, date } = dosStamp(o.date);
	const locals = [];
	const centrals = [];
	let offset = 0;

	for (const f of files) {
		const name = enc.encode(String(f.name).replace(/\\/g, "/"));
		const body = bytesOf(f.data);
		const sum = crc32(body);

		const lh = new Uint8Array(30 + name.length);
		const lv = new DataView(lh.buffer);
		lv.setUint32(0, 0x04034b50, true); // local file header signature
		lv.setUint16(4, 20, true); // version needed
		lv.setUint16(6, 0x0800, true); // flags：檔名是 UTF-8
		lv.setUint16(8, 0, true); // method 0 = stored
		lv.setUint16(10, time, true);
		lv.setUint16(12, date, true);
		lv.setUint32(14, sum, true);
		lv.setUint32(18, body.length, true); // 未壓縮，兩個 size 相同
		lv.setUint32(22, body.length, true);
		lv.setUint16(26, name.length, true);
		lv.setUint16(28, 0, true); // extra field length
		lh.set(name, 30);
		locals.push(lh, body);

		const ch = new Uint8Array(46 + name.length);
		const cv = new DataView(ch.buffer);
		cv.setUint32(0, 0x02014b50, true); // central directory signature
		cv.setUint16(4, 0x0314, true); // version made by：3 = Unix，才吃得到 mode
		cv.setUint16(6, 20, true);
		cv.setUint16(8, 0x0800, true);
		cv.setUint16(10, 0, true);
		cv.setUint16(12, time, true);
		cv.setUint16(14, date, true);
		cv.setUint32(16, sum, true);
		cv.setUint32(20, body.length, true);
		cv.setUint32(24, body.length, true);
		cv.setUint16(28, name.length, true);
		// extra / comment / disk / internal attrs 全部 0，維持預設。
		cv.setUint32(38, ((f.mode || 0o644) | 0o100000) << 16, true); // external attrs
		cv.setUint32(42, offset, true); // 這個項目的 local header 在哪
		ch.set(name, 46);
		centrals.push(ch);

		offset += lh.length + body.length;
	}

	const cdSize = centrals.reduce((n, c) => n + c.length, 0);
	const eocd = new Uint8Array(22);
	const ev = new DataView(eocd.buffer);
	ev.setUint32(0, 0x06054b50, true);
	ev.setUint16(8, files.length, true); // 這片磁碟的項目數
	ev.setUint16(10, files.length, true); // 總項目數
	ev.setUint32(12, cdSize, true);
	ev.setUint32(16, offset, true); // central directory 起點
	// 其餘欄位（磁碟編號、註解長度）留 0。

	const parts = [...locals, ...centrals, eocd];
	const total = parts.reduce((n, p) => n + p.length, 0);
	const out = new Uint8Array(total);
	let at = 0;
	for (const p of parts) {
		out.set(p, at);
		at += p.length;
	}
	return out;
}
