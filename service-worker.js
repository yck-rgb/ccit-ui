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
    "url": "404.html",
    "revision": "9f2594cfa3a2393210198cb699b56c8b"
  },
  {
    "url": "assets/css/0.styles.e765e1b1.css",
    "revision": "f9a20582cf35ce887f93b6cfd9b82f52"
  },
  {
    "url": "assets/cxl.jpg",
    "revision": "17c06f257cfdc46c9ff8e370c9498804"
  },
  {
    "url": "assets/cxlgld.jpg",
    "revision": "aa23a13e97f04c631807969339a032d1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/jc.jpg",
    "revision": "c557f637f50c68e9b4a66454c54feea8"
  },
  {
    "url": "assets/js/1.ebbb4ed5.js",
    "revision": "d1510274c59687289206e53cfdbbc110"
  },
  {
    "url": "assets/js/10.67d04ab8.js",
    "revision": "cc13b326a16112bd29ba154755fc6cdc"
  },
  {
    "url": "assets/js/11.41ec3d21.js",
    "revision": "815bf62f754aa9cacaa037c870546cb2"
  },
  {
    "url": "assets/js/12.38fd786d.js",
    "revision": "b0e3e59f4f8848c4457081a4885c41cb"
  },
  {
    "url": "assets/js/13.30c0f965.js",
    "revision": "43137b8cc8347ed3849b13868eedf02e"
  },
  {
    "url": "assets/js/14.601046b8.js",
    "revision": "f76c8d50c9f006b9588c74a6e660d515"
  },
  {
    "url": "assets/js/15.32e4539f.js",
    "revision": "c5ae7938fd3c68351a5bd9eb69f7efc3"
  },
  {
    "url": "assets/js/16.4b5fed2e.js",
    "revision": "ab583a418bb04241b786d2e1aab682e0"
  },
  {
    "url": "assets/js/17.540748e6.js",
    "revision": "dcc5e8da09991a67d4fea25a20917217"
  },
  {
    "url": "assets/js/18.f29d46d0.js",
    "revision": "4b7779c176c077f9f9834ae0316c489d"
  },
  {
    "url": "assets/js/19.d239eb5b.js",
    "revision": "7ff526c3f9606bd4d696ca51246689fd"
  },
  {
    "url": "assets/js/2.71499b07.js",
    "revision": "1a2396a347318934ddefba8f8cfc298c"
  },
  {
    "url": "assets/js/20.7178c70f.js",
    "revision": "a3c7ba261de79e0a7df1dd9c56785c43"
  },
  {
    "url": "assets/js/21.17c20180.js",
    "revision": "ec8ce50100b55f22a1f7bde27bd8baa6"
  },
  {
    "url": "assets/js/22.190ce628.js",
    "revision": "f5524c816ce09bdccc89960740ec80a1"
  },
  {
    "url": "assets/js/23.bd76745c.js",
    "revision": "07f62de131810f6441554879ad3aba42"
  },
  {
    "url": "assets/js/24.79208d17.js",
    "revision": "ea51e7fc7e76cd40d5d132222c1c70a5"
  },
  {
    "url": "assets/js/25.8af96c48.js",
    "revision": "db9fc6aa6c032705c143bd5ce84742fc"
  },
  {
    "url": "assets/js/26.d1071034.js",
    "revision": "4f1f527d2881cd7a325838a73e64503e"
  },
  {
    "url": "assets/js/27.04940db4.js",
    "revision": "45f517943dcc53deb3ce7433596b301b"
  },
  {
    "url": "assets/js/28.f2ad4675.js",
    "revision": "ae3b5e992a43785f9d12826bbe5d0f2b"
  },
  {
    "url": "assets/js/29.47b2dcc8.js",
    "revision": "4b4fc8d4d590af769dfa76e518c54656"
  },
  {
    "url": "assets/js/3.61510013.js",
    "revision": "973d792f302bd3d007d586ebb0312e93"
  },
  {
    "url": "assets/js/30.764fe620.js",
    "revision": "a77682783e2bf26e9ad9bd9453ca4c9c"
  },
  {
    "url": "assets/js/31.7595d60c.js",
    "revision": "1af90218dd164d6cd0f5bbeb5899e85b"
  },
  {
    "url": "assets/js/32.faf5d72b.js",
    "revision": "ce63b5fb26db28e60b0204ed5616bb3f"
  },
  {
    "url": "assets/js/33.ce7b0c34.js",
    "revision": "2dfe2d75311328e70e5bef84a9b8547f"
  },
  {
    "url": "assets/js/34.4978c2a9.js",
    "revision": "d88898f77f711ec52ae87bc4ff77dd24"
  },
  {
    "url": "assets/js/35.3c69ffd2.js",
    "revision": "6eea837462c54eb3eaa2fbf5a832cbc3"
  },
  {
    "url": "assets/js/36.0468e2a7.js",
    "revision": "1c8accc1e6744aa296be49064a4c8763"
  },
  {
    "url": "assets/js/37.4098c4e9.js",
    "revision": "7eabe583f6a177a808d65d8acb51000f"
  },
  {
    "url": "assets/js/38.f8b959bf.js",
    "revision": "cee3e431b96f57328d5f3143d23c4897"
  },
  {
    "url": "assets/js/39.5f1b4378.js",
    "revision": "a7b7b2bd18c873bac121cecdc0255825"
  },
  {
    "url": "assets/js/4.2bc6771e.js",
    "revision": "4a03c1920d227d48aa122a96498bb82f"
  },
  {
    "url": "assets/js/40.a4eb6844.js",
    "revision": "539291992d8ffd0c8aa49c1387cb999d"
  },
  {
    "url": "assets/js/41.d4bec4ed.js",
    "revision": "9919c2488ed6c7702f1cb219805e67ee"
  },
  {
    "url": "assets/js/42.25959b5a.js",
    "revision": "bdc50858747e837c21ce141ffb5dab45"
  },
  {
    "url": "assets/js/43.69a607aa.js",
    "revision": "608dd5c975d9a42bdfd0a85e6c18fead"
  },
  {
    "url": "assets/js/44.f764e979.js",
    "revision": "4c12c55e98e452b2708fd8293589335c"
  },
  {
    "url": "assets/js/45.4aac166f.js",
    "revision": "b31d973b9594a7a80fd5ee53e4d8831a"
  },
  {
    "url": "assets/js/5.28dd996d.js",
    "revision": "aa55dcddddd62bb03084072e9ba29e77"
  },
  {
    "url": "assets/js/6.5c19b403.js",
    "revision": "7624fe914bd60045a22db9e81b74aa4f"
  },
  {
    "url": "assets/js/7.950dcb24.js",
    "revision": "c8b3d57e7c0f53239f5bbc2311a39503"
  },
  {
    "url": "assets/js/app.14a09073.js",
    "revision": "8e94434b7c6b5ebae2cd6ae988223add"
  },
  {
    "url": "assets/js/vendors~docsearch.1b782076.js",
    "revision": "43ba7dd333899afdf3998c9a4a7618d8"
  },
  {
    "url": "assets/logo.png",
    "revision": "f8fffe3c7d72a1f25b302e4a85906c4e"
  },
  {
    "url": "assets/logo.svg",
    "revision": "791e63f2b90107b2fe9df7bd82e8cfd2"
  },
  {
    "url": "assets/zcxck.jpg",
    "revision": "40b8c4683aa4d19f85f0324e2ad2ab0a"
  },
  {
    "url": "index.html",
    "revision": "4147de39d9994d41646b80c7ab73c482"
  },
  {
    "url": "nas/1.png",
    "revision": "8480507b467f53577a8a9d71bf77f441"
  },
  {
    "url": "nas/2.png",
    "revision": "7e171307e17ac454e46b55d68bc68d0d"
  },
  {
    "url": "nas/3.png",
    "revision": "b19db6e6c1044da8e06bbf57eb8fda54"
  },
  {
    "url": "network/107-in.html",
    "revision": "95b78147d9e8e064ab3294ac4180fb82"
  },
  {
    "url": "network/107-out.html",
    "revision": "573673fd7983423b315ccf6b52b43b36"
  },
  {
    "url": "network/fuzhou-default.html",
    "revision": "a7e6d4c15e027791e673b8aa958cff19"
  },
  {
    "url": "network/fuzhou-test.html",
    "revision": "515c34f2c1a9a4c55417b51c429c5ac5"
  },
  {
    "url": "network/index.html",
    "revision": "53ef7bd75a6ed8699a783ee01a0de08e"
  },
  {
    "url": "network/shanghai_out.html",
    "revision": "64ba96a43913aefdc9da6152d45e7428"
  },
  {
    "url": "network/shanghai_try_two.html",
    "revision": "5af5a587f33dd93f057d56e9f616b59f"
  },
  {
    "url": "network/shanghai_try.html",
    "revision": "077729941e5ad24338f1cee728c41ae7"
  },
  {
    "url": "network/shangniuda.html",
    "revision": "f92d186dbb557cad64414fdefe4e5218"
  },
  {
    "url": "network/vue.html",
    "revision": "eea63a70f751d19d58d4d6db7ee8ca19"
  },
  {
    "url": "network/zidong.html",
    "revision": "f572ff349e9de590766bee49ac438dd9"
  },
  {
    "url": "network/zidong/shanghai_try_two.html",
    "revision": "5f858120c8e3708557d3eec1d2fb05b7"
  },
  {
    "url": "network/zidong/shanghai_try.html",
    "revision": "451c7bd31392b85f23e6c723e79d4a6f"
  },
  {
    "url": "web-components/alert.html",
    "revision": "3c0474ead51fdfa35f6c9da62cf513b4"
  },
  {
    "url": "web-components/button.html",
    "revision": "4ce1a8067be91edf7f39086af2f85cd4"
  },
  {
    "url": "web-components/components/main/index.html",
    "revision": "9d977a2bd947cf434eee6541db71c4dc"
  },
  {
    "url": "web-components/flowChart.html",
    "revision": "d3b34d206dc908d37d259650b0c09fb1"
  },
  {
    "url": "web-components/home.html",
    "revision": "90a0f9776ddab360fb47ef3faf2051dd"
  },
  {
    "url": "web-components/table.html",
    "revision": "95c0861d5153d182f4959498a601cb27"
  },
  {
    "url": "web-components/upload.html",
    "revision": "9099eeee3d0da57fe9761d1af3cdf756"
  },
  {
    "url": "web/default.html",
    "revision": "df08575f308083c5112f825d10fe9717"
  },
  {
    "url": "web/specs.html",
    "revision": "09e981a122ec15f449ef9b1f39385ca6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
