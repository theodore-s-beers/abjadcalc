/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6562c9b28313ba2f2685fc50db1127a6"
  },
  {
    "url": "ime/index.html",
    "revision": "cf70e119e0ddac1598ed882f9d97266c"
  },
  {
    "url": "ime/js/index.js",
    "revision": "5e37c73ca0c799de6653370aac012cf1"
  },
  {
    "url": "img/abjad-og.png",
    "revision": "5d2f8e2cf757fae3d1e8110ae03d06ad"
  },
  {
    "url": "img/app-icon-144.png",
    "revision": "d6665d6631c138e294b0d95dfaeb28d3"
  },
  {
    "url": "img/app-icon-168.png",
    "revision": "daa345dc3874f714480844940085fb96"
  },
  {
    "url": "img/app-icon-192.png",
    "revision": "33408fac6c6a2dcad0a09aee7659d08b"
  },
  {
    "url": "img/app-icon-48.png",
    "revision": "effa442a735727f2c38951a3cd97c0c7"
  },
  {
    "url": "img/app-icon-512.png",
    "revision": "62991216ee00dcd64d574fbcea15ceb4"
  },
  {
    "url": "img/app-icon-72.png",
    "revision": "6caeef59c5e426f3f217329ace0074d7"
  },
  {
    "url": "img/app-icon-96.png",
    "revision": "585cbb881f53bcf2f81fb479b65273b9"
  },
  {
    "url": "img/icon-192.png",
    "revision": "efbcda7eef1a5cbd542ed59b432332fe"
  },
  {
    "url": "img/icon.png",
    "revision": "f8601950f47572166a5eb040403da07b"
  },
  {
    "url": "index.html",
    "revision": "658aed77eaec72e0134be91fb8a84eb3"
  },
  {
    "url": "js/index.js",
    "revision": "184b5c56ce7a24a99ec747a55c5a3ed4"
  },
  {
    "url": "manifest.json",
    "revision": "792142f4c72a88e015d83c0a3ec80848"
  },
  {
    "url": "table/index.html",
    "revision": "ff60974cfe819bea41f63c54cc5662c6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});