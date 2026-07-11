const CACHE = 'lumindra-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/case-study-sunshooters.html',
  '/about-mark-tulloch.html'
];
self.addEventListener('install', e => e.waitUntil(
  caches.open(CACHE).then(c => c.addAll(ASSETS))
));
self.addEventListener('fetch', e => e.respondWith(
  caches.match(e.request).then(r => r || fetch(e.request))
));
