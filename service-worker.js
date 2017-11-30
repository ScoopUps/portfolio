"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","8213373a52c038e93c31e2746e0542db"],["/static/css/main.c02d4f36.css","4247a5df766d1cb89daf4209df78a305"],["/static/js/main.9b49cb46.js","2a99192a162f2428920d702d9b5a0de2"],["/static/media/BR.734553a6.png","734553a655296b5e7e93a2b5f60d5f12"],["/static/media/Knobler1.8b89e8d1.PNG","8b89e8d1fbf544297c00997c535333bd"],["/static/media/Knobler2.89926a19.PNG","89926a19955c1ac3fa01926369a5bcc4"],["/static/media/Knobler3.6421ee02.PNG","6421ee023c0bacbcc62121ac9daaea1b"],["/static/media/MLB1.5bc273f3.PNG","5bc273f3f94d8f24bb7f9ae7c828b3ef"],["/static/media/MLB10.5c0ddd32.PNG","5c0ddd32573486459b8045b44c2934f1"],["/static/media/MLB2.76d58b99.PNG","76d58b991c5f32200736ff8b61a03d2a"],["/static/media/MLB3.cee4b466.PNG","cee4b466c85fa51aaca8f2cb033cfe43"],["/static/media/MLB4.e59e9ca5.PNG","e59e9ca5ee998c080b92dd9e650f37b3"],["/static/media/MLB5.9e1baa7e.PNG","9e1baa7eb9b87a2b135cac2a2a506b93"],["/static/media/MLB6.6edff5ef.PNG","6edff5efbb8bffaea2d0cf736ffe35c3"],["/static/media/MLB7.4a813fa5.PNG","4a813fa58d818c63282c6470a27a3139"],["/static/media/MLB8.4500d89f.PNG","4500d89f3a6f89ca0b22b7f45b023c75"],["/static/media/MLB9.f0b70a57.PNG","f0b70a57a1d2ca11819e8d656ec21145"],["/static/media/Miller1.e050978b.PNG","e050978b252f0140408d0564b63e8f92"],["/static/media/Miller2.a5823fc5.PNG","a5823fc54e0e11ae7e3110ad84db1d9f"],["/static/media/Miller3.bfc8d9b6.PNG","bfc8d9b61fe1a082ab5f5198f430528a"],["/static/media/Miller4.32c7bfba.PNG","32c7bfba377ab0768c1a23bc24bc930a"],["/static/media/Miller5.9c906c1e.PNG","9c906c1e8f657811fd5de585ba4aa66b"],["/static/media/NFL.c6805633.jpg","c6805633fd70a35bbcb6afbca3580cc1"],["/static/media/SV.9ef13d92.jpg","9ef13d92b94e643dee6620497744049b"],["/static/media/cle.068c4708.jpg","068c4708a7e2270d2d2afeec59ac98fe"],["/static/media/col.220f9ba6.jpg","220f9ba692f0e67d7d653392a3a5ad3b"],["/static/media/main-photo.ffbb6d39.jpg","ffbb6d39926954c6e67d9d96cbe54124"],["/static/media/mlbam.042cffb4.jpg","042cffb45401df5df7cd1d011513f0e9"],["/static/media/nyc.94c06631.jpg","94c0663162d4ac75359ed8ec3bb8b937"],["/static/media/poker.c9b690a3.PNG","c9b690a376d75b402284aa0010237d1f"],["/static/media/portfolio.d16af0b0.PNG","d16af0b092c94ec6384f1dc0d576a636"],["/static/media/vinyl.8e6cf00d.png","8e6cf00db26e4315ab242c4ac1564fa7"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});