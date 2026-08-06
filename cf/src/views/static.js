import { assetResponse } from "../lib/sw.js";

export function faviconResponse() {
	// lucide "cross" glyph on a rounded shadcn-dark tile.
	const svg =
		'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">' +
		'<rect width="24" height="24" rx="5" fill="#0b0f19"/>' +
		'<g transform="translate(4.6 4.6) scale(0.617)" fill="none" stroke="#60a5fa" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">' +
		'<path d="M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2z"/>' +
		"</g></svg>";
	return new Response(svg, {
		headers: {
			"content-type": "image/svg+xml; charset=utf-8",
			"cache-control": "public, max-age=604800",
		},
	});
}

export function manifestResponse() {
	const manifest = {
		name: "NCCN Guidelines",
		short_name: "NCCN",
		description:
			"NCCN clinical practice guidelines — cached, previewable, downloadable.",
		start_url: "/",
		scope: "/",
		display: "standalone",
		background_color: "#0b0f19",
		theme_color: "#0b0f19",
		categories: ["medical", "health", "education"],
		icons: [
			{
				src: "/icons/icon-192.png",
				sizes: "192x192",
				type: "image/png",
				purpose: "any",
			},
			{
				src: "/icons/icon-512.png",
				sizes: "512x512",
				type: "image/png",
				purpose: "any",
			},
			{
				src: "/icons/icon-512.png",
				sizes: "512x512",
				type: "image/png",
				purpose: "maskable",
			},
		],
	};
	return new Response(JSON.stringify(manifest), {
		headers: { "content-type": "application/manifest+json; charset=utf-8" },
	});
}

export const SW_JS = `
${assetResponse.toString()}
const SHELL = 'nccn-shell-v2';
// v1 → v2 是一次性的清場。舊的 assetResponse 是純 cache-first，命中就永不回源，
// 所以既有使用者手上那份縮圖是「永久」過期的——換個 cache 名字，activate 的清理
// 就會把整包 v1 刪掉，這些瀏覽器下一次進站直接拿到新封面，不必等 revalidate。
const ASSETS = 'nccn-assets-v2';
const SHELL_URLS = ['/', '/manifest.webmanifest', '/icons/icon-192.png', '/icons/icon-512.png'];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(SHELL).then((c) => c.addAll(SHELL_URLS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(
    keys.filter((k) => k !== SHELL && k !== ASSETS).map((k) => caches.delete(k))
  )).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== self.location.origin) return;
  if (url.pathname.startsWith('/thumb/') || url.pathname.startsWith('/icons/')) {
    e.respondWith(caches.open(ASSETS).then((c) =>
      assetResponse(c, e.request, (r) => fetch(r), (p) => e.waitUntil(p))
    ));
    return;
  }
  if (url.pathname === '/') {
    e.respondWith(caches.open(SHELL).then(async (c) => {
      const cached = await c.match('/');
      const network = fetch(e.request).then((res) => { if (res && res.ok) c.put('/', res.clone()); return res; }).catch(() => cached);
      return cached || network;
    }));
  }
});
`;
