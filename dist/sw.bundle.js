if(!self.define){let e,n={};const i=(i,s)=>(i=new URL(i+".js",s).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(n[c])return;let a={};const o=e=>i(e,c),d={module:{uri:c},exports:a,require:o};n[c]=Promise.all(s.map((e=>d[e]||o(e)))).then((e=>(r(...e),a)))}}define(["./workbox-7bc5fbd6"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"192.bundle.js",revision:"811144c216c63891fbb94963759fb062"},{url:"2.bundle.js",revision:"6e9e963412257d85ab620a0cd2731cd4"},{url:"3316023292f6be4878b0.jpg",revision:null},{url:"474.bundle.js",revision:"04c64286d08dfb6fd9fc0b8b6e404a08"},{url:"6b73c10d2718886c338c.jpg",revision:null},{url:"app.webmanifest",revision:"1cbff9fac22ceff171bafc24172fc766"},{url:"app~7bd12dde.bundle.js",revision:"d0247298d4bb8d6ba2de7b94b22f9597"},{url:"app~7bd12dde.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~ca0940c6.bundle.js",revision:"3b7bcfeefe64707071335a9f00c2fc45"},{url:"app~ca0940c6.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~d1658f4b.bundle.js",revision:"be622825681fc00d97e2ce5b1602e549"},{url:"app~e4317507.bundle.js",revision:"510145214a9ee485834e8e1c54193c42"},{url:"app~e4317507.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"favicon.ico",revision:"3e632b8db0716536339848f25ac01933"},{url:"heros/hero-image_4.jpg",revision:"4ea98fe648a0b853ab379c928b5fd0bf"},{url:"icon.png",revision:"bf795332846a674affb987b5bc873058"},{url:"icons/android-launchericon-144-144.png",revision:"083d8b3f3f5300ea6f5ac00dc1b96555"},{url:"icons/android-launchericon-192-192.png",revision:"3c483643862ccecd860ad1ab3bacabb2"},{url:"icons/android-launchericon-48-48.png",revision:"bf795332846a674affb987b5bc873058"},{url:"icons/android-launchericon-512-512.png",revision:"b978b41246a74cf9e21320556f670d73"},{url:"icons/android-launchericon-72-72.png",revision:"2189f5490e4fb1e2a12fd2f31c8e0311"},{url:"icons/android-launchericon-96-96.png",revision:"4c8855fc600756dbcc95d6c90c8c6854"},{url:"icons/icon-600x600.png",revision:"7cfe82738dc5be0cee1b41e6209cfab4"},{url:"index.html",revision:"43ebb38f4e7d691040a72938cc0ff094"},{url:"sharpHeros/hero-image_4-large.jpg",revision:"6241b882870f6ed8f27e0a26e554b7be"},{url:"sharpHeros/hero-image_4-small.jpg",revision:"19fe841c9f096d9e79b538aeb1859bc0"}],{}),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/")),new e.StaleWhileRevalidate({cacheName:"restaurant-api",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/images/medium/")),new e.StaleWhileRevalidate({cacheName:"restaurant-image-api",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap")),new e.StaleWhileRevalidate({cacheName:"restaurant-font",plugins:[new e.ExpirationPlugin({maxEntries:50}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css")),new e.StaleWhileRevalidate({cacheName:"restaurant-assets",plugins:[new e.ExpirationPlugin({maxEntries:50}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map