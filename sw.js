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
importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js");
/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [{
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
  "revision": "24825a730f9cadd7b7eabe9c4599a3fb"
}, {
  "url": "js/index.js",
  "revision": "eb8becd9fa362ed74c74ec45c6908d90"
}, {
  "url": "table/index.html",
  "revision": "1ba6a1a271a2c1e6660fa3d860fee3c0"
}].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});