if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise(async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()})),i.then(()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]})},i=(i,r)=>{Promise.all(i.map(e)).then(e=>r(1===e.length?e[0]:e))},r={require:Promise.resolve(i)};self.define=(i,n,c)=>{r[i]||(r[i]=Promise.resolve().then(()=>{let r={};const s={uri:location.origin+i.slice(1)};return Promise.all(n.map(i=>{switch(i){case"exports":return r;case"module":return s;default:return e(i)}})).then(e=>{const i=c(...e);return r.default||(r.default=i),r})}))}}define("./service-worker.js",["./workbox-87f0caec"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"838253da49fc5206fe386693fc7e8c7d"},{url:"css/bootstrap.min.css",revision:"816af0eddd3b4822c2756227c7e7b7ee"},{url:"ime/index.html",revision:"5951086b48af28a0270c2551ec3701c9"},{url:"ime/js/index.js",revision:"c149b617e6e51d611d8da5233ca04227"},{url:"img/abjad-og.png",revision:"5d2f8e2cf757fae3d1e8110ae03d06ad"},{url:"img/app-icon-144.png",revision:"d6665d6631c138e294b0d95dfaeb28d3"},{url:"img/app-icon-168.png",revision:"daa345dc3874f714480844940085fb96"},{url:"img/app-icon-192.png",revision:"33408fac6c6a2dcad0a09aee7659d08b"},{url:"img/app-icon-48.png",revision:"effa442a735727f2c38951a3cd97c0c7"},{url:"img/app-icon-512.png",revision:"62991216ee00dcd64d574fbcea15ceb4"},{url:"img/app-icon-72.png",revision:"6caeef59c5e426f3f217329ace0074d7"},{url:"img/app-icon-96.png",revision:"585cbb881f53bcf2f81fb479b65273b9"},{url:"img/icon-192.png",revision:"efbcda7eef1a5cbd542ed59b432332fe"},{url:"img/icon.png",revision:"f8601950f47572166a5eb040403da07b"},{url:"index.html",revision:"a9aaea9213d1301d1992f7dbe1a56ae1"},{url:"js/bootstrap.min.js",revision:"02d223393e00c273efdcb1ade8f4f8b1"},{url:"js/index.js",revision:"7bd12139014afdb10ce30ec771b99a20"},{url:"js/jquery-3.5.1.slim.min.js",revision:"fb8409a092adc6e8be17e87d59e0595e"},{url:"js/popper.min.js",revision:"1022eaf388cc780bcfeb6456157adb7d"},{url:"manifest.json",revision:"f18bc8a4facb5688889ba5c8af6b1754"},{url:"table/index.html",revision:"6eb57427a2a4f88524eac2bc50e265ad"}],{})}));
//# sourceMappingURL=service-worker.js.map
