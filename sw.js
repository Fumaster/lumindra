// Self-destroying service worker.
//
// An earlier service worker cached pages with a "cache-first" strategy under a
// fixed cache name, which left visitors stuck on a stale copy of the site even
// after new deploys. This worker replaces it: on activation it deletes every
// cache, unregisters itself, and reloads any open pages so the site is always
// served fresh from the network. Once it has run, no service worker controls the
// site anymore.
self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map(key => caches.delete(key)));
    await self.registration.unregister();
    const clients = await self.clients.matchAll({ type: 'window' });
    clients.forEach(client => client.navigate(client.url));
  })());
});
