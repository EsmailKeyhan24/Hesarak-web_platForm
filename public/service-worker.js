const staticCacheName = "site-static-v1";
const cacheAssets = [
    "/",
  "/index.html",
  "/manifest.json",
  "/logo192.png",
  "/logo512.png",

];
// INSTALL
self.addEventListener("install", evt => {
    evt.waitUntil(
      caches.open(staticCacheName).then(cache => {
        console.log("caching assets…");
        return cache.addAll(cacheAssets);
      })
    );
    self.skipWaiting(); // اختیاری
  });
  
  // ACTIVATE
  self.addEventListener("activate", evt => {
    evt.waitUntil(
      caches.keys().then(keys =>
        Promise.all(keys.filter(k => k !== staticCacheName).map(k => caches.delete(k)))
      )
    );
  });
  
  // FETCH
  self.addEventListener("fetch", evt => {
    evt.respondWith(
      caches.match(evt.request).then(res => {
        return (
          res ||
          fetch(evt.request).catch(() => {
            if (evt.request.mode === "navigate") {
              return caches.match("/index.html");
            }
          })
        );
      })
    );
  });
  





