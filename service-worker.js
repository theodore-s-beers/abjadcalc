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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js");

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
    "url": "ime/index.html",
    "revision": "72a697e236907134ccafebf3b4dafe3d"
  },
  {
    "url": "ime/js/index.js",
    "revision": "30661b9833ffd2004482b58a0335bbc5"
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
    "revision": "3bc2c3ea5cad3dea4f519d958518d227"
  },
  {
    "url": "js/index.js",
    "revision": "bfbe320d9ce847a33c3d781a325f6ab3"
  },
  {
    "url": "manifest.json",
    "revision": "795d732d0d11f8c6e32a09c9207d6de4"
  },
  {
    "url": "table/index.html",
    "revision": "1e5d9ed8890d5fa6387a02c20dd63b6f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
