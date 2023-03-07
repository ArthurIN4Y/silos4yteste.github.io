const CACHE_NAME = "my-site-cache-v1";
const urlsToCache = ["index.html", "offline.html"];

addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match("offline.html");
    })
  );
});

addEventListener("activate", (event) => {
  const cacheWhitelist = ["pages-cache-v1", "blog-posts-cache-v1"];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
