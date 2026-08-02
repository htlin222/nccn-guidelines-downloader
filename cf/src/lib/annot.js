// 頁面截圖筆記的標註層：框選、編號、圖章。
//
// 這四支都會被 views/viewer.js 用 `.toString()` 原樣注入頁面，所以跟 lib/cite.js
// 那幾支一樣 MUST 保持自足：只能用自己的參數、JS 內建與瀏覽器全域（2D context、
// Path2D），不能參照模組層的任何東西——包括這個檔案裡的其他 export。圖示的路徑
// 資料因此寫在 annotDraw 內部而不是提到模組層。
//
// 座標一律存 0..1 的正規化值（相對於底圖），畫面上那張縮到 1100px 的預覽，跟匯出
// 時用同一份 anns 重畫的原尺寸 PNG，才會長得一模一樣；改變顯示寬度也不用重算。
//
// 尺寸基準：k = W/1000。所有線寬、字級、圖章大小都乘上 k，換句話說標註在「1000px
// 寬」這個假想畫布上是固定大小的，放到 2400px 的匯出圖上會等比放大。

// 拖曳出來的兩個角 → 正規化後的矩形。允許反向拖（右下拉到左上），並夾在畫面內。
// 太小的當成誤觸回傳 null，不然單純的一下點擊會留下一個看不見的 0×0 框。
export function annotRect(x0, y0, x1, y1) {
	var x = Math.min(x0, x1),
		y = Math.min(y0, y1);
	var w = Math.abs(x1 - x0),
		h = Math.abs(y1 - y0);
	if (x < 0) {
		w += x;
		x = 0;
	}
	if (y < 0) {
		h += y;
		y = 0;
	}
	if (x + w > 1) w = 1 - x;
	if (y + h > 1) h = 1 - y;
	if (w < 0.012 || h < 0.012) return null;
	return { t: "sel", x: x, y: y, w: w, h: h };
}

// 編號接續目前最大的號碼，而不是數有幾個 num：刪掉中間的 ② 之後再放一個，會拿到
// ④ 而不是重複的 ③。順序看得懂比號碼連續重要。
export function annotNextNum(anns) {
	var mx = 0;
	for (var i = 0; i < (anns || []).length; i++) {
		var a = anns[i];
		if (a && a.t === "num" && a.n > mx) mx = a.n;
	}
	return mx + 1;
}

// 點到哪一個標註（由上往下找，後加的蓋在前面的上頭），沒點到回 -1。
// 編號／圖章判定的是中心點附近的圓形範圍；框選只認邊框附近 —— 不然一個蓋住大半頁
// 的變暗框會把整張圖變成刪除熱區，隨便點一下就消失。
export function annotHit(anns, px, py, W, H) {
	var k = W / 1000;
	if (k < 0.4) k = 0.4;
	var rx = (26 * k) / W,
		ry = (26 * k) / H;
	var ex = (10 * k) / W,
		ey = (10 * k) / H;
	for (var i = (anns || []).length - 1; i >= 0; i--) {
		var a = anns[i];
		if (!a) continue;
		if (a.t === "num" || a.t === "stamp") {
			var dx = (px - a.x) / rx,
				dy = (py - a.y) / ry;
			if (dx * dx + dy * dy <= 1) return i;
		} else if (a.t === "sel") {
			var inOuter =
				px >= a.x - ex && px <= a.x + a.w + ex && py >= a.y - ey && py <= a.y + a.h + ey;
			var inInner =
				px >= a.x + ex && px <= a.x + a.w - ex && py >= a.y + ey && py <= a.y + a.h - ey;
			if (inOuter && !inInner) return i;
		}
	}
	return -1;
}

// 把 anns 畫到已經有底圖的 ctx 上。style 只作用在框選圖層，因為「框外」是相對於
// 全部框才有定義的：三個框都畫外框沒問題，但「外面變暗」只能是「所有框的補集」。
export function annotDraw(ctx, anns, W, H, style) {
	var list = anns || [];
	var k = W / 1000;
	if (k < 0.4) k = 0.4;
	var RED = "#ef4444";
	var st = style || "stroke";
	var i;

	var rects = [];
	for (i = 0; i < list.length; i++) if (list[i] && list[i].t === "sel") rects.push(list[i]);

	if (rects.length) {
		if (st === "dim" || st === "shadow") {
			ctx.save();
			// evenodd：外圈整頁 + 內圈各框 → clip 出「框以外」那塊。
			ctx.beginPath();
			ctx.rect(0, 0, W, H);
			for (i = 0; i < rects.length; i++)
				ctx.rect(rects[i].x * W, rects[i].y * H, rects[i].w * W, rects[i].h * H);
			ctx.clip("evenodd");
			if (st === "dim") {
				ctx.fillStyle = "rgba(0,0,0,0.55)";
				ctx.fillRect(0, 0, W, H);
			} else {
				// 陰影：填色本身整塊被 clip 掉，只剩溢出到框外的那圈陰影留在畫面上，
				// 看起來就像選取區被抬起來浮在頁面上方。
				ctx.shadowColor = "rgba(0,0,0,0.55)";
				ctx.shadowBlur = 26 * k;
				ctx.shadowOffsetY = 8 * k;
				ctx.fillStyle = "#000";
				for (i = 0; i < rects.length; i++)
					ctx.fillRect(rects[i].x * W, rects[i].y * H, rects[i].w * W, rects[i].h * H);
			}
			ctx.restore();
		}
		ctx.save();
		// 變暗／陰影時框線改白色：紅線壓在暗掉的底上幾乎看不見邊界在哪。
		ctx.strokeStyle = st === "stroke" ? RED : "rgba(255,255,255,0.92)";
		ctx.lineWidth = (st === "stroke" ? 4 : 3) * k;
		ctx.lineJoin = "round";
		for (i = 0; i < rects.length; i++)
			ctx.strokeRect(rects[i].x * W, rects[i].y * H, rects[i].w * W, rects[i].h * H);
		ctx.restore();
	}

	// lucide 圖示，24×24 viewBox、stroke-width 2。pointer 是實心的（原圖就填滿），
	// 其餘三個只描邊。
	var ICONS = {
		pointer: { d: ["m4 4 7.07 17 2.51-7.39L21 11.07z"], fill: true },
		arrow: { d: ["M8 15V8h7", "M21 21 8 8"] },
		check: { d: ["M20 6 9 17l-5-5"] },
		ok: { d: ["M21.801 10A10 10 0 1 1 17 3.335", "m9 11 3 3L22 4"] },
	};

	for (i = 0; i < list.length; i++) {
		var a = list[i];
		if (!a) continue;
		var cx = a.x * W,
			cy = a.y * H;
		if (a.t === "num") {
			var r = 17 * k;
			ctx.save();
			ctx.beginPath();
			ctx.arc(cx, cy, r, 0, Math.PI * 2);
			ctx.fillStyle = RED;
			ctx.fill();
			// 白邊：紅圓落在深色圖表上時才不會糊成一團。
			ctx.lineWidth = 3 * k;
			ctx.strokeStyle = "#fff";
			ctx.stroke();
			ctx.fillStyle = "#fff";
			ctx.font =
				"bold " +
				Math.round(20 * k) +
				'px -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif';
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			ctx.fillText(String(a.n), cx, cy);
			ctx.restore();
		} else if (a.t === "stamp") {
			var ic = ICONS[a.k];
			if (!ic || typeof Path2D === "undefined") continue;
			var s = 44 * k;
			ctx.save();
			ctx.translate(cx - s / 2, cy - s / 2);
			ctx.scale(s / 24, s / 24);
			ctx.lineCap = "round";
			ctx.lineJoin = "round";
			for (var j = 0; j < ic.d.length; j++) {
				var p = new Path2D(ic.d[j]);
				// 先描一圈粗白邊當底，圖章放在密密麻麻的流程圖上才讀得出來。
				ctx.strokeStyle = "#fff";
				ctx.lineWidth = 5;
				ctx.stroke(p);
				ctx.strokeStyle = RED;
				ctx.lineWidth = 2;
				ctx.stroke(p);
				if (ic.fill) {
					ctx.fillStyle = RED;
					ctx.fill(p);
				}
			}
			ctx.restore();
		}
	}
	return list.length;
}
