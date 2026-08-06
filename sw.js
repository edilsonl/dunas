self.addEventListener('install', (e) => {
  console.log('[Service Worker] Instalado');
});

self.addEventListener('fetch', (e) => {
  // Necessário apenas para o navegador reconhecer o site como instalável
});
