// Service worker: guarda la parte visual de la web para que abra al instante (y sin conexión).
// Los datos (Back4App) nunca se guardan aquí: siempre se piden al servidor.
// Estrategia "red primero": si hay internet se usa siempre la última versión publicada.

const CACHE = 'stockcasa-v3';
const SHELL = [
  './', 'index.html', 'app.js', 'styles.css', 'manifest.webmanifest',
  'icons/icon-192.png', 'icons/apple-touch-icon.png',
  'sounds/sfx_tap.wav', 'sounds/sfx_pop.wav', 'sounds/sfx_up.wav', 'sounds/sfx_down.wav',
  'sounds/sfx_check.wav', 'sounds/sfx_swipe.wav', 'sounds/sfx_success.wav', 'sounds/sfx_error.wav',
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== location.origin) return;
  // El instalador de Android y el mensaje de compartir siempre se piden al servidor
  if (url.pathname.endsWith('.apk') || url.pathname.endsWith('compartir.txt')) return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE).then((cache) => cache.put(event.request, copy));
        }
        return response;
      })
      .catch(() => caches.match(event.request).then((cached) => cached || caches.match('index.html'))),
  );
});
