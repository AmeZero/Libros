const CACHE_NAME = 'libreria-cache-v1';
const urlsToCache = [
  '/',
  '/home.html',
  '/splash.html',
  '/Musica.html',
  '/biblioteca.html',
  '/stylesDG.css',
  '/scriptN.js',
  '/Logo1.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
