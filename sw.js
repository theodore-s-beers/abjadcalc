if(!self.define){let e,i={};const s=(s,c)=>(s=new URL(s+".js",c).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let a={};const f=e=>s(e,n),o={module:{uri:n},exports:a,require:f};i[n]=Promise.all(c.map((e=>o[e]||f(e)))).then((e=>(r(...e),a)))}}define(["./workbox-80c94c8d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"838253da49fc5206fe386693fc7e8c7d"},{url:"css/bootstrap.min.css",revision:"e451b87914db6243b6afa3c5e484ec16"},{url:"css/styles-ime.css",revision:"1bb8686138dfeb2b739b56748940d10e"},{url:"css/styles-main.css",revision:"bfff08927207bd864b54f97701cd953b"},{url:"css/styles-table.css",revision:"26d25a2342e47982e63f3a3e2c7f21b7"},{url:"ime/index.html",revision:"675c094fb5019815f76da0adc590ed75"},{url:"ime/js/index.min.js",revision:"a028a86a3b8880a5666df371b8fa7630"},{url:"ime/js/registerSW.js",revision:"014e730f93650d140e7c8b0d568d6a87"},{url:"img/app-icon-144.png",revision:"d6665d6631c138e294b0d95dfaeb28d3"},{url:"img/app-icon-168.png",revision:"daa345dc3874f714480844940085fb96"},{url:"img/app-icon-192.png",revision:"33408fac6c6a2dcad0a09aee7659d08b"},{url:"img/app-icon-48.png",revision:"effa442a735727f2c38951a3cd97c0c7"},{url:"img/app-icon-512.png",revision:"62991216ee00dcd64d574fbcea15ceb4"},{url:"img/app-icon-72.png",revision:"6caeef59c5e426f3f217329ace0074d7"},{url:"img/app-icon-96.png",revision:"585cbb881f53bcf2f81fb479b65273b9"},{url:"img/icon-192.png",revision:"efbcda7eef1a5cbd542ed59b432332fe"},{url:"img/icon.png",revision:"f8601950f47572166a5eb040403da07b"},{url:"img/maskable-icon.png",revision:"b87d537355091b04646c18b658bfc965"},{url:"index.html",revision:"e0276f4aa59ded9a928d664bcfcbfbf3"},{url:"js/bootstrap.bundle.min.js",revision:"715756e65b9ff107f4cf927e3e8bbf76"},{url:"js/index.min.js",revision:"bd15c74bb0eaf37039195b95a657c251"},{url:"js/registerSW.js",revision:"403035ad56ee65583062726f12f55a08"},{url:"manifest.json",revision:"fc4562aac326d2814bf30b0b02038901"},{url:"package-lock.json",revision:"c7ec5288bfd04a4e025578363c1aa537"},{url:"package.json",revision:"623352334bf4aa01a9d789e68c19ac4d"},{url:"table/index.html",revision:"08a57e38e502ec852b457e6c082acf23"},{url:"table/js/registerSW.js",revision:"014e730f93650d140e7c8b0d568d6a87"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
