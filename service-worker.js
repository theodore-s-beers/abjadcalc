const PRECACHE = "precache-v8",
  RUNTIME = "runtime",
  PRECACHE_URLS = ["index.html", "./", "img/icon.png", "img/icon-192.png", "https://fonts.googleapis.com/css?family=Scheherazade&amp;subset=arabic", "js/index.js", "ime/index.html", "ime/js/index.js", "table/index.html", "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css", "https://code.jquery.com/jquery-3.3.1.slim.min.js", "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js", "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"];
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