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
    "revision": "838253da49fc5206fe386693fc7e8c7d"
  },
  {
    "url": "ime/index.html",
    "revision": "4590085ea3461ee8bf366b22db30f7ef"
  },
  {
    "url": "ime/js/index.js",
    "revision": "ec534caff28e4d0ba07c7f33f5edbe2e"
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
    "revision": "2c1cdb2dfcb2c6b15783e07b45cebac2"
  },
  {
    "url": "js/index.js",
    "revision": "a7de1e61eb1d40159bd9e219ee9f626f"
  },
  {
    "url": "manifest.json",
    "revision": "f18bc8a4facb5688889ba5c8af6b1754"
  },
  {
    "url": "table/index.html",
    "revision": "4beaf5ceaf47a7a2f9bd827584248cd0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
