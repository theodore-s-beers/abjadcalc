const PRECACHE = "precache-v6",
  RUNTIME = "runtime",
  PRECACHE_URLS = ["index.html", "./", "css/style.css", "css/bootstrap.min.css", "img/icon.png", "img/icon-192.png", "https://fonts.googleapis.com/css?family=Scheherazade&amp;subset=arabic", "img/abjad-og.png", "js/index.js", "js/popper.min.js", "js/bootstrap.min.js", "js/jquery-3.2.1.slim.min.js", "ime/index.html", "ime/css/style.css", "ime/js/index.js", "table/index.html", "table/css/style.css"];
self.addEventListener("install", a => {
  a.waitUntil(caches.open(PRECACHE).then(b => b.addAll(PRECACHE_URLS)).then(self.skipWaiting()))
}), self.addEventListener("activate", a => {
  const b = [PRECACHE, RUNTIME];
  a.waitUntil(caches.keys().then(c => {
    return c.filter(d => !b.includes(d))
  }).then(c => {
    return Promise.all(c.map(d => {
      return caches.delete(d)
    }))
  }).then(() => self.clients.claim()))
}), self.addEventListener("fetch", a => {
  a.request.url.startsWith(self.location.origin) && a.respondWith(caches.match(a.request).then(b => {
    return b ? b : caches.open(RUNTIME).then(c => {
      return fetch(a.request).then(d => {
        return c.put(a.request, d.clone()).then(() => {
          return d
        })
      })
    })
  }))
});