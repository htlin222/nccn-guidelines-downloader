// AMA-style citation + the copy/toast glue, shared by the home grid and the
// viewer. Both views inject these functions verbatim via `.toString()`, so they
// MUST stay self-contained: only their params + JS/DOM built-ins, no closures.

// e.g. citeText({ name: "Breast Cancer", id: "breast", version: "5.2026" })
// → "1. National Comprehensive Cancer Network. NCCN Clinical Practice Guidelines
//    in Oncology: Breast Cancer. Version 5.2026. Accessed July 28, 2026.
//    https://www.nccn.org/professionals/physician_gls/pdf/breast.pdf"
// `version` may be missing (PDF not cached yet) — then the Version sentence is
// simply dropped rather than printed empty. `accessed` defaults to today.
export function citeText(g) {
	var M = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	var d = g.accessed || new Date();
	var when = M[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
	var out = [
		"1. National Comprehensive Cancer Network.",
		"NCCN Clinical Practice Guidelines in Oncology: " + g.name + ".",
	];
	if (g.version) out.push("Version " + g.version + ".");
	out.push("Accessed " + when + ".");
	out.push(
		"https://www.nccn.org/professionals/physician_gls/pdf/" + g.id + ".pdf",
	);
	return out.join(" ");
}

// Resolves true when the text made it to the clipboard. The execCommand
// fallback keeps this working where navigator.clipboard is missing (http://,
// older WebKit), so the toast can tell the truth either way.
export function copyText(text) {
	if (navigator.clipboard && navigator.clipboard.writeText)
		return navigator.clipboard.writeText(text).then(
			function () {
				return true;
			},
			function () {
				return false;
			},
		);
	try {
		var ta = document.createElement("textarea");
		ta.value = text;
		ta.setAttribute("readonly", "");
		ta.style.cssText = "position:fixed;top:-1000px;opacity:0;";
		document.body.appendChild(ta);
		ta.select();
		var ok = document.execCommand("copy");
		ta.remove();
		return Promise.resolve(ok);
	} catch (e) {
		return Promise.resolve(false);
	}
}

// Bottom-centred toast. Reuses one node so mashing titles doesn't stack toasts.
export function showToast(msg, sub) {
	var el = document.getElementById("toast");
	if (!el) {
		el = document.createElement("div");
		el.id = "toast";
		el.className = "toast";
		document.body.appendChild(el);
	}
	el.innerHTML = "";
	var m = document.createElement("div");
	m.textContent = msg;
	el.appendChild(m);
	if (sub) {
		var s = document.createElement("div");
		s.className = "tsub";
		s.textContent = sub;
		el.appendChild(s);
	}
	// Restart the enter transition even if a toast is already showing.
	el.classList.remove("on");
	void el.offsetWidth;
	el.classList.add("on");
	clearTimeout(el._t);
	el._t = setTimeout(function () {
		el.classList.remove("on");
	}, 2800);
}

// Theme-neutral on purpose: home and viewer name their CSS vars differently,
// and a dark slate toast reads fine against both palettes.
export const TOAST_CSS = `
  .toast{position:fixed;left:50%;bottom:24px;z-index:90;transform:translate(-50%,16px);
    opacity:0;pointer-events:none;transition:opacity .18s ease,transform .18s ease;
    max-width:min(620px,92vw);padding:10px 14px;border-radius:11px;
    background:rgba(17,24,39,.95);color:#f9fafb;font-size:.82rem;font-weight:600;line-height:1.45;
    box-shadow:0 14px 36px -10px rgba(0,0,0,.6);backdrop-filter:blur(8px);}
  .toast.on{opacity:1;transform:translate(-50%,0);}
  .toast .tsub{margin-top:4px;font-size:.72rem;font-weight:400;color:#9ca3af;
    display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;}
`;
