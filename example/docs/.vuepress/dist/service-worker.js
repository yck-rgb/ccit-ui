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
    "revision": "3a66f831fe00d68af8d5895b7a442713"
  },
  {
    "url": "assets/css/0.styles.cf4518d6.css",
    "revision": "98675717f3368afd0a434d97cd8b771e"
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
    "url": "assets/js/28.ad517937.js",
    "revision": "d579242ba018a51d23c54206e7d4643e"
  },
  {
    "url": "assets/js/29.ef42b5e0.js",
    "revision": "54ad9e7e6080d352cdd1bd7fa09a4b6d"
  },
  {
    "url": "assets/js/3.61510013.js",
    "revision": "973d792f302bd3d007d586ebb0312e93"
  },
  {
    "url": "assets/js/30.7af32f7c.js",
    "revision": "0d51a76a1b0901a528b3f9869e11b0fe"
  },
  {
    "url": "assets/js/31.6db51eb8.js",
    "revision": "f51eec88d02a7ee52351236ebc930fb0"
  },
  {
    "url": "assets/js/32.c9fcdc5e.js",
    "revision": "6092bb8c17b83e89dba0c5e1e2788759"
  },
  {
    "url": "assets/js/33.33ca0264.js",
    "revision": "7371dc52a62598dd7cd299c0f94c449a"
  },
  {
    "url": "assets/js/34.176a38d0.js",
    "revision": "c4cb621b69ddff0b70e258be5492980a"
  },
  {
    "url": "assets/js/35.3c69ffd2.js",
    "revision": "6eea837462c54eb3eaa2fbf5a832cbc3"
  },
  {
    "url": "assets/js/36.78228cba.js",
    "revision": "737235eb917e05bfe3722936011fbfe5"
  },
  {
    "url": "assets/js/37.306fb874.js",
    "revision": "899a0bb2ecefb1a9829b9dcf84bf80e0"
  },
  {
    "url": "assets/js/38.ddc4643d.js",
    "revision": "6b1d0e2e6560b7e3f5f3c7f8ab659d80"
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
    "url": "assets/js/40.647cef34.js",
    "revision": "8319e32b3feff577cadbf0a639cf88dc"
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
    "url": "assets/js/43.7f09cebb.js",
    "revision": "e1548fe0f2bd71febf5eb922885880fc"
  },
  {
    "url": "assets/js/44.f2176ad4.js",
    "revision": "572c555a490ee7ef758296b9e4be4d3f"
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
    "url": "assets/js/app.020cc4e2.js",
    "revision": "235ddea1dbcf3cc2eba8d1850a3e582a"
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
    "revision": "f7ae48456c4272bd7f00f362b14fb205"
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
    "revision": "658c809a30657978b33e246121af237d"
  },
  {
    "url": "network/107-out.html",
    "revision": "6324c613f2f59a297f36ee146efb98a2"
  },
  {
    "url": "network/fuzhou-default.html",
    "revision": "4c17ecc679eeb1683515bf3698c7e858"
  },
  {
    "url": "network/fuzhou-test.html",
    "revision": "752d359d5c4d8828497ffbedcd15f1b2"
  },
  {
    "url": "network/index.html",
    "revision": "b8e79b126f3c3b14f9e61e2c6fb1a881"
  },
  {
    "url": "network/shanghai_out.html",
    "revision": "c738bd7d3225b1cf9740ff2c7b5d97fd"
  },
  {
    "url": "network/shanghai_try_two.html",
    "revision": "f8fe858141d1fd0eb68f88dc5620bcd2"
  },
  {
    "url": "network/shanghai_try.html",
    "revision": "596260255d4b26b74421af8d35f2750c"
  },
  {
    "url": "network/shangniuda.html",
    "revision": "fd2d9ac363decafbeac4476decaf1d64"
  },
  {
    "url": "network/vue.html",
    "revision": "8efea883b4678415b24861c521a51d20"
  },
  {
    "url": "network/zidong.html",
    "revision": "067bb9af84de6520d56a9a9b6f090ce3"
  },
  {
    "url": "network/zidong/shanghai_try_two.html",
    "revision": "fd652dbbcfe6e9fd754ba1e02646f5a5"
  },
  {
    "url": "network/zidong/shanghai_try.html",
    "revision": "21e2fecbb40a8ce3eb2ffac5fe015723"
  },
  {
    "url": "web-components/alert.html",
    "revision": "e0acce64f42b68914e9ed7d60377b899"
  },
  {
    "url": "web-components/button.html",
    "revision": "254f224a91d0da13b64420db84c15de7"
  },
  {
    "url": "web-components/components/main/index.html",
    "revision": "d034d3ed8137027e10d88ba1cf2023c9"
  },
  {
    "url": "web-components/flowChart.html",
    "revision": "d1f2e98efe920ea2c28c4f642f46fd9e"
  },
  {
    "url": "web-components/home.html",
    "revision": "84b26d5b452f8c87af9fc15f70591659"
  },
  {
    "url": "web-components/table.html",
    "revision": "6b529aeaec2d94df63055f8bab185e99"
  },
  {
    "url": "web-components/upload.html",
    "revision": "2345f2cc052b49ab4644d2c55939a5a9"
  },
  {
    "url": "web/default.html",
    "revision": "1258b14255f08459bdf29f0fbc4365b0"
  },
  {
    "url": "web/specs.html",
    "revision": "d36bdb898201e027bf421ca0baa73cf7"
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
