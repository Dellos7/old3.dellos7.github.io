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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

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
    "url": "index-org.html",
    "revision": "6df4c431f88e10021ac95e5c368b3ac7"
  },
  {
    "url": "index.html",
    "revision": "6df4c431f88e10021ac95e5c368b3ac7"
  },
  {
    "url": "build/p-0xz0rwso.entry.js"
  },
  {
    "url": "build/p-229ebf7a.js"
  },
  {
    "url": "build/p-4orpccr3.entry.js"
  },
  {
    "url": "build/p-549b16dd.js"
  },
  {
    "url": "build/p-5rd6dne9.css"
  },
  {
    "url": "build/p-7bf95aa7.js"
  },
  {
    "url": "build/p-7ibfshpu.entry.js"
  },
  {
    "url": "build/p-7zsfxq9a.entry.js"
  },
  {
    "url": "build/p-9ldesl56.entry.js"
  },
  {
    "url": "build/p-a0c82e31.js"
  },
  {
    "url": "build/p-d2gug66v.entry.js"
  },
  {
    "url": "build/p-ddbvt1at.entry.js"
  },
  {
    "url": "build/p-e74c9e26.js"
  },
  {
    "url": "build/p-facb6cf1.js"
  },
  {
    "url": "build/p-i9vgcqe5.entry.js"
  },
  {
    "url": "build/p-je6qax7m.entry.js"
  },
  {
    "url": "build/p-lqcjuu7w.entry.js"
  },
  {
    "url": "build/p-nkqm4h2h.entry.js"
  },
  {
    "url": "build/p-sxpeiasr.entry.js"
  },
  {
    "url": "build/p-tmmcezdc.entry.js"
  },
  {
    "url": "build/p-wjxttlkh.entry.js"
  },
  {
    "url": "build/svg/index.esm.js",
    "revision": "2bdea9e6190aa6a40e24eb01a1e4fb97"
  },
  {
    "url": "build/svg/index.js",
    "revision": "35b1701e9c9c1dacb8be33a8bace509b"
  },
  {
    "url": "manifest.json",
    "revision": "23ede5c391f4fbe2b55905cdf85c382a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("index-org.html"), {
  
  blacklist: [/\.[a-z]{2,4}$/i],
});
