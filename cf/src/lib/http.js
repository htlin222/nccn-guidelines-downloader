export const json = (obj, status = 200) =>
	new Response(JSON.stringify(obj), {
		status,
		headers: { "content-type": "application/json; charset=utf-8" },
	});

export const html = (body) =>
	new Response(body, {
		headers: { "content-type": "text/html; charset=utf-8" },
	});

export function escapeHtml(s) {
	return String(s).replace(
		/[&<>"']/g,
		(c) =>
			({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
				c
			],
	);
}
