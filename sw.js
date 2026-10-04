'use strict';
const CACHE='science-quiz-v1-20261004-r5';
const ASSETS=['./','./index.html','./styles.css','./install.js','./questions.js','./diagrams.js','./core.js','./countdown.js','./app.js','./manifest.webmanifest','./icon.svg','./icon-192.png','./icon-512.png','./apple-touch-icon.png'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS.map(url=>new Request(url,{cache:'reload'})))).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('science-quiz-')&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const scope=new URL(self.registration.scope),url=new URL(event.request.url);
  if(url.origin!==scope.origin||!url.pathname.startsWith(scope.pathname))return;
  event.respondWith(caches.open(CACHE).then(async cache=>{
    const cached=await cache.match(event.request,{ignoreSearch:false});if(cached)return cached;
    try{return await fetch(event.request);}catch{if(event.request.mode==='navigate')return await cache.match(new URL('./index.html',scope));throw Error('Offline resource not cached');}
  }));
});
