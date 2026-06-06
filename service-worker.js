/* service-worker.js
   Caché local de la aplicación PWA. No altera la lógica del HTML original.
*/
const CACHE_NAME = 'notebooklm-quiz-pwa-v12';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './pwa-safe-area.css',
  './offline.html',
  './favicon.ico',
  './icons/apple-touch-icon-120.png',
  './icons/apple-touch-icon-152.png',
  './icons/apple-touch-icon-167.png',
  './icons/apple-touch-icon-180.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/maskable-icon-512.png',
  './icons/icon.svg'
];

function toScopeUrl(path) {
  return new URL(path, self.registration.scope).toString();
}

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        return cache.addAll(APP_SHELL.map(toScopeUrl));
      })
      .then(function () {
        return self.skipWaiting();
      })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys()
      .then(function (keys) {
        return Promise.all(
          keys
            .filter(function (key) { return key !== CACHE_NAME; })
            .map(function (key) { return caches.delete(key); })
        );
      })
      .then(function () {
        return self.clients.claim();
      })
  );
});

self.addEventListener('fetch', function (event) {
  const request = event.request;

  if (request.method !== 'GET') {
    return;
  }

  const requestUrl = new URL(request.url);

  if (requestUrl.origin !== self.location.origin) {
    return;
  }

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(function (response) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(function (cache) {
            cache.put(toScopeUrl('./index.html'), copy);
          });
          return response;
        })
        .catch(function () {
          return caches.match(request)
            .then(function (cached) {
              return cached || caches.match(toScopeUrl('./index.html')) || caches.match(toScopeUrl('./offline.html'));
            });
        })
    );
    return;
  }

  event.respondWith(
    caches.match(request)
      .then(function (cached) {
        if (cached) {
          return cached;
        }

        return fetch(request)
          .then(function (response) {
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            const copy = response.clone();
            caches.open(CACHE_NAME).then(function (cache) {
              cache.put(request, copy);
            });

            return response;
          })
          .catch(function () {
            return caches.match(toScopeUrl('./offline.html'));
          });
      })
  );
});
