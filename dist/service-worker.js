"use strict";
// File: service-worker.ts
const urlsToCache = [
    "/",
    "./index.html",
    "./lernblatt.html",
    "./assets/angry birds_red bird_icon_512.png",
    "./assets/angry birds_black bird_icon_512.png",
    "./assets/angry birds_yellow bird_icon_512.png",
    "./assets/angry birds_green bird_icon_512.png",
    "./manifest.json",
    "./dist/script.js",
    "./dist/i-data.js",
    "./dist/service-worker.js",
];
self.addEventListener("install", (event) => {
    const swEvent = event;
    swEvent.waitUntil(caches.open("pwa-assets").then((cache) => {
        return cache.addAll(urlsToCache);
    }));
});
self.addEventListener("fetch", (event) => {
    event.respondWith(caches.match(event.request).then((response) => {
        return response || fetch(event.request);
    }));
});
