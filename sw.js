importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

workbox.precaching.precacheAndRoute([{
  "url": "ime/index.html",
  "revision": "f95237a508da807760a30461f46913a4"
}, {
  "url": "ime/js/index.js",
  "revision": "0728b99aeace30555a56c4c9b083fe07"
}, {
  "url": "img/abjad-og.png",
  "revision": "5d2f8e2cf757fae3d1e8110ae03d06ad"
}, {
  "url": "img/app-icon-144.png",
  "revision": "d6665d6631c138e294b0d95dfaeb28d3"
}, {
  "url": "img/app-icon-168.png",
  "revision": "daa345dc3874f714480844940085fb96"
}, {
  "url": "img/app-icon-192.png",
  "revision": "33408fac6c6a2dcad0a09aee7659d08b"
}, {
  "url": "img/app-icon-48.png",
  "revision": "effa442a735727f2c38951a3cd97c0c7"
}, {
  "url": "img/app-icon-512.png",
  "revision": "62991216ee00dcd64d574fbcea15ceb4"
}, {
  "url": "img/app-icon-72.png",
  "revision": "6caeef59c5e426f3f217329ace0074d7"
}, {
  "url": "img/app-icon-96.png",
  "revision": "585cbb881f53bcf2f81fb479b65273b9"
}, {
  "url": "img/icon-192.png",
  "revision": "efbcda7eef1a5cbd542ed59b432332fe"
}, {
  "url": "img/icon.png",
  "revision": "f8601950f47572166a5eb040403da07b"
}, {
  "url": "index.html",
  "revision": "46965cb0ba101a57588be20f366c12f2"
}, {
  "url": "js/index.js",
  "revision": "eb8becd9fa362ed74c74ec45c6908d90"
}, {
  "url": "sw-old.js",
  "revision": "3f0edad6a60537b1b12574e2ba9338ab"
}, {
  "url": "table/index.html",
  "revision": "1ba6a1a271a2c1e6660fa3d860fee3c0"
}]);

// Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.
workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/, workbox.strategies.staleWhileRevalidate({
  cacheName: 'google-fonts-stylesheets',
}), );

// Cache the Google Fonts webfont files with a cache-first strategy for one year.
workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/, workbox.strategies.cacheFirst({
  cacheName: 'google-fonts-webfonts',
  plugins: [
    new workbox.cacheableResponse.Plugin({
      statuses: [0, 200],
    }),
    new workbox.expiration.Plugin({
      maxAgeSeconds: 60 * 60 * 24 * 365,
      maxEntries: 30,
    }),
  ],
}), );

workbox.routing.registerRoute(/\.(?:png|gif|jpg|jpeg|svg)$/, workbox.strategies.cacheFirst({
  cacheName: 'images',
  plugins: [
    new workbox.expiration.Plugin({
      maxEntries: 60,
      maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
    }),
  ],
}), );

workbox.routing.registerRoute(/\.(?:js|css)$/, workbox.strategies.staleWhileRevalidate({
  cacheName: 'static-resources',
}), );