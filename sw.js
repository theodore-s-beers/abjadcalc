if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,d)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let f={};const c=e=>i(e,n),o={module:{uri:n},exports:f,require:c};s[n]=Promise.all(r.map((e=>o[e]||c(e)))).then((e=>(d(...e),f)))}}define(["./workbox-bf03ddf0"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"838253da49fc5206fe386693fc7e8c7d"},{url:"css/bootstrap.min.css",revision:"e451b87914db6243b6afa3c5e484ec16"},{url:"css/styles-ime.css",revision:"7280759332d05196fd0ad5ba554ebb11"},{url:"css/styles-main.css",revision:"a660b85e738edf6d1321937837b138c6"},{url:"css/styles-shared.css",revision:"943aae4a88c5dabc8f00e7ec840bdacf"},{url:"css/styles-table.css",revision:"f34cfa53eb4066448cf944d5a907cd0d"},{url:"ime/index.html",revision:"81cd26e4e39ad56310f6346c212d2136"},{url:"ime/index.min.js",revision:"080277b502d895cd35b2e8758dab1547"},{url:"ime/registerSW.js",revision:"014e730f93650d140e7c8b0d568d6a87"},{url:"img/apple-touch-icon.png",revision:"bd041186b20fe2f084dc15b255097dda"},{url:"img/icon-192.png",revision:"e395941e4114071adaa6b1a5ad1a2a08"},{url:"img/icon-512.png",revision:"13150e41d1f52f224a046f1d4b444099"},{url:"img/icon.svg",revision:"2f2e3f12531bf600c7b1a8a507dbcef1"},{url:"index.html",revision:"6027f0a47a22e48f3117dc55f3d37138"},{url:"js/bootstrap.bundle.min.js",revision:"715756e65b9ff107f4cf927e3e8bbf76"},{url:"js/index.min.js",revision:"54ab52e42b7f1b07a39fa9434ad9b58e"},{url:"js/registerSW.js",revision:"403035ad56ee65583062726f12f55a08"},{url:"table/index.html",revision:"fe730f0f745cdb470503ba6ff1da82f0"},{url:"table/registerSW.js",revision:"014e730f93650d140e7c8b0d568d6a87"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
