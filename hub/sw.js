const CACHE = 'lumindra-hub-v1';
const SHELL = ['./', './index.html', './manifest.json', './images/icon-192.png', './images/icon-512.png'];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith('lumindra-hub-') && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Pages: network first so price changes show up; fall back to cache offline.
// Images and fonts: cache first, filled as they are used.
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const isPage = req.mode === 'navigate' && url.origin === location.origin && url.pathname.startsWith('/hub');
  if (isPage) {
    e.respondWith(
      fetch(req).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put('./index.html', copy));
        return res;
      }).catch(() => caches.match('./index.html'))
    );
    return;
  }
  const cacheable = /\.(png|jpe?g|webp|svg|woff2?)$/.test(url.pathname) || url.hostname === 'fonts.gstatic.com' || url.hostname === 'fonts.googleapis.com';
  if (cacheable) {
    e.respondWith(
      caches.match(req).then(hit => hit || fetch(req).then(res => {
        if (res.ok || res.type === 'opaque') { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
        return res;
      }).catch(() => hit))
    );
  }
});
