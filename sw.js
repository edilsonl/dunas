self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
    // Garante o carregamento online dos dados do iframe
    e.respondWith(fetch(e.request));
});
