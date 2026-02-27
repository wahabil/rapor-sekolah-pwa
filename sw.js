self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Wajib ada fetch event agar dianggap PWA sah
  event.respondWith(fetch(event.request));
});
