/* Kudlife · offline režim. Nejdřív síť (změny hned vidět), při výpadku cache.
   Řídí jen /kudla/ – vložené appky (Škola, Finance) mají vlastní service workery. */
const CACHE = 'kudlife-2026-11-10a';
const SHELL = ['./', 'index.html', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png', 'icons/favicon.svg'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE && k.startsWith('kudlife-')).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const r = e.request; if (r.method !== 'GET') return;
  const u = new URL(r.url); if (u.origin !== location.origin || !u.pathname.startsWith('/kudla/')) return;
  e.respondWith(fetch(r).then(res => {
    if (res && res.ok) { const c = res.clone(); caches.open(CACHE).then(x => x.put(r, c)); }
    return res;
  }).catch(() => caches.match(r, { ignoreSearch: true }).then(hit => hit || caches.match('index.html'))));
});
