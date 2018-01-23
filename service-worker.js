const PRECACHE = "precache-v4",
  RUNTIME = "runtime",
  PRECACHE_URLS = ["index.html", "./", "css/style.css", "css/bootstrap.min.css", "img/icon.png", "img/icon-192.png", "https://fonts.googleapis.com/css?family=Scheherazade&amp;subset=arabic", "img/abjad-og.png", "js/index.js", "js/popper.min.js", "js/bootstrap.min.js", "js/jquery-3.2.1.slim.min.js", "ime/index.html", "ime/css/style.css", "ime/js/index.js", "table/index.html", "table/css/style.css"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(PRECACHE).then(f => f.addAll(PRECACHE_URLS)).then(self.skipWaiting()))
}), self.addEventListener("activate", e => {
  const f = [PRECACHE, RUNTIME];
  e.waitUntil(caches.keys().then(g => {
    return g.filter(h => !f.includes(h))
  }).then(g => {
    return Promise.all(g.map(h => {
      return caches.delete(h)
    }))
  }).then(() => self.clients.claim()))
}), self.addEventListener("fetch", e => {
  e.request.url.startsWith(self.location.origin) && e.respondWith(caches.match(e.request).then(f => {
    return f ? f : caches.open(RUNTIME).then(g => {
      return fetch(e.request).then(h => {
        return g.put(e.request, h.clone()).then(() => {
          return h
        })
      })
    })
  }))
});