!function(e){function t(data){for(var t,n,r=data[0],c=data[1],i=0,o=[];i<r.length;i++)n=r[i],Object.prototype.hasOwnProperty.call(d,n)&&d[n]&&o.push(d[n][0]),d[n]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(e[t]=c[t]);for(f&&f(data);o.length;)o.shift()()}var n={},d={5:0};function r(t){if(n[t])return n[t].exports;var d=n[t]={i:t,l:!1,exports:{}};return e[t].call(d.exports,d,d.exports,r),d.l=!0,d.exports}r.e=function(e){var t=[],n=d[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,r){n=d[e]=[t,r]}));t.push(n[2]=c);var o,script=document.createElement("script");script.charset="utf-8",script.timeout=120,r.nc&&script.setAttribute("nonce",r.nc),script.src=function(e){return r.p+""+({6:"pages/article",7:"pages/button",8:"pages/collapsible-container",9:"pages/dialog",10:"pages/headline",11:"pages/index",12:"pages/link",13:"pages/rich-text",14:"pages/slider",15:"pages/teaser",16:"pages/test",17:"pages/tests/collapsible-container",18:"pages/tests/content-container",19:"pages/tests/headline",20:"pages/toggle",21:"vendor"}[e]||e)+"."+{0:"a72030987be4df7604f2",1:"e15f8544415c76a7156b",2:"913f48312ae6d5d15223",3:"2ffe6ffe200a6e9a7f47",4:"b2f940c9e5b4ac01cbde",6:"f208c25195c18ce9f4f0",7:"f8e41b1fcd7e44e05d5c",8:"073fdc1a31421b9d1518",9:"d2369601d79edf76cffa",10:"9e7a903d9ec82ee85280",11:"fb37f640cc74e16236dd",12:"80c665cdcede4b076030",13:"750587dde6b6c88b75cb",14:"4e413a81809fb427f9d5",15:"3c68a2fb5f3ce704aac9",16:"434696e8b2c7584504d2",17:"de5365645106258fd930",18:"4ef24334eeda925b563a",19:"b5474e5240b649fb9f1d",20:"272375e45440c32b1313",21:"e19e0e1782cc3f815213",22:"8993980007681e35bc5e",23:"6f6666fe9cd885128f14",24:"0cd8854f903d36805983",25:"c4eee848d16f73019a12",26:"63dfd4bb9ec26fb06517",27:"39039f80d4372f8b004b",28:"e861cf14e8f46a51aa63",29:"b12bc7fe4f42f475da2b",30:"60c83973a1b4df5e3c3e",31:"9526dadcae1596ccbb77",32:"546ab0248dea075415e0",33:"672f9eab55678eb16430",34:"8530184f4e51f4f45aa8",35:"181654a3840a9cc1b7fd",36:"5e6f85fd1d432da62217",37:"ec9952c0887a26fde8e4",38:"99c6d91fe4714826b165",39:"6f2c762f670c4c742369",40:"8aee7d2996642977bb66",41:"a901a67ec87673e6539d",42:"11c0d9134202cefd506b",43:"0e177ac1921ff2b92910",44:"0a067a1b6748acf6a6aa",45:"ca11c2fe1ab95dfdd268",46:"c7e8192d56123280fc7d",47:"ec99e627ecd26283c8f0",48:"958e8caa9c7b6744ad54",49:"c34dfafbfec2c0fece30",50:"2757f5eb9bb6c0e8c456",51:"eb8737a3e474e0912d19"}[e]+".js"}(e);var f=new Error;o=function(t){script.onerror=script.onload=null,clearTimeout(l);var n=d[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",f.name="ChunkLoadError",f.type=r,f.request=c,n[1](f)}d[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:script})}),12e4);script.onerror=script.onload=o,document.head.appendChild(script)}return Promise.all(t)},r.m=e,r.c=n,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var d in e)r.d(n,d,function(t){return e[t]}.bind(null,d));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(object,e){return Object.prototype.hasOwnProperty.call(object,e)},r.p="/foundation/_nuxt/",r.oe=function(e){throw console.error(e),e};var c=window.webpackJsonp=window.webpackJsonp||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var f=o;r(r.s=3)}([function(e,t,n){"use strict";(function(e){n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return f}));const d={timing:{fcp:500,dcl:800}};let r=d;function c(e={}){r={timing:Object.assign({},d.timing,e.timing||{})},r=Object.assign({},d,e)}function o(){return f()&&!0}function f(){if(e.performance){const e=performance.getEntriesByName("first-contentful-paint"),t=performance.getEntriesByType("resource");if(e.length)return e[0].startTime<r.timing.fcp;if(t.length)return t.reduce(((e,t)=>((!e||e<t.responseEnd)&&(e=t.responseEnd),e)),null)<r.timing.dcl}return!1}}).call(this,n(1))},function(e,t){var g;g=function(){return this}();try{g=g||new Function("return this")()}catch(e){"object"==typeof window&&(g=window)}e.exports=g},function(e,t,n){"use strict";(function(e){function d(t){return new RegExp(t.regex).test(e.navigator.userAgent)}n.d(t,"a",(function(){return d}))}).call(this,n(1))},function(e,t,n){e.exports=n(4)},function(e,t,n){"use strict";n.r(t),function(e){var t=n(0),d=n(2);e.__NUXT_SPEEDKIT_HYDRATE_MAX_IDLE_DURATION__=8;const r=function(){let t=16;return void 0!==e.__NUXT_SPEEDKIT_MAX_IDLE_DURATION__&&(t=e.__NUXT_SPEEDKIT_MAX_IDLE_DURATION__),60*t}();let c,o=!1;const f=e.document.getElementById("nuxt-speedkit-layer");async function l(e){if(!o)return document.documentElement.classList.remove("nuxt-speedkit-reduced-view"),o=e||await new Promise((e=>{c=window.performance.now(),_(e)})),o?Promise.all([n.e(37),n.e(21),n.e(23),n.e(22)]).then(n.bind(null,5)):null}let m=0;function _(t){f&&m>=r?(w("nuxt-speedkit-message-weak-hardware"),t(!1)):"requestIdleCallback"in e&&r>m?(m++,e.requestIdleCallback((e=>{window.dispatchEvent(new CustomEvent("nuxtSpeedkitWaitingIdleCallback",{detail:{duration:window.performance.now()-c}}));e.timeRemaining()>10||e.didTimeout?t(!0):_(t)}),{timeout:2e3})):t(!0)}function h(e,t){Array.from(document.querySelectorAll(`#${e}`)).forEach((e=>{e.addEventListener("click",t,{capture:!0,once:!0,passive:!0})}))}function w(t){const n=e.document.getElementById(t);if(!n)throw new Error(`Can't update speedkit-layer, message ${t} missing.`);n.style.display="block",f.className+=" nuxt-speedkit-layer-visible"}const y=Object(d.a)({regex:new RegExp("((CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS)[ +]+(14[_.]5|14[_.]([6-9]|\\d{2,})|14[_.]8|14[_.](9|\\d{2,})|(1[5-9]|[2-9]\\d|\\d{3,})[_.]\\d+|15[_.]5|15[_.]([6-9]|\\d{2,})|(1[6-9]|[2-9]\\d|\\d{3,})[_.]\\d+|16[_.]0|16[_.]([1-9]|\\d{2,})|(1[7-9]|[2-9]\\d|\\d{3,})[_.]\\d+)(?:[_.]\\d+)?)|((?:Chrome).*OPR\\/(90|(9[1-9]|\\d{3,}))\\.\\d+\\.\\d+)|(SamsungBrowser\\/(15|(1[6-9]|[2-9]\\d|\\d{3,})|18|(19|[2-9]\\d|\\d{3,}))\\.\\d+)|(Edge\\/(105|(10[6-9]|1[1-9]\\d|[2-9]\\d\\d|\\d{4,}))(?:\\.\\d+)?)|((Chromium|Chrome)\\/(104|(10[5-9]|1[1-9]\\d|[2-9]\\d\\d|\\d{4,}))\\.\\d+(?:\\.\\d+)?)|(Version\\/(15\\.6|15\\.([7-9]|\\d{2,})|(1[6-9]|[2-9]\\d|\\d{3,})\\.\\d+)(?:\\.\\d+)? Safari\\/)|(Trident\\/7\\.0)|(Firefox\\/(102|(10[3-9]|1[1-9]\\d|[2-9]\\d\\d|\\d{4,})|104|(10[5-9]|1[1-9]\\d|[2-9]\\d\\d|\\d{4,}))\\.\\d+\\.\\d+)|(Firefox\\/(102|(10[3-9]|1[1-9]\\d|[2-9]\\d\\d|\\d{4,})|104|(10[5-9]|1[1-9]\\d|[2-9]\\d\\d|\\d{4,}))\\.\\d+(pre|[ab]\\d+[a-z]*)?)|(([MS]?IE) (11|(1[2-9]|[2-9]\\d|\\d{3,}))\\.\\d+)","")});document.getElementById("nuxt-speedkit-layer")?(h("nuxt-speedkit-button-init-reduced-view",(function(){document.documentElement.classList.add("nuxt-speedkit-reduced-view"),e.document.querySelectorAll("[data-font]").forEach((e=>{e.classList.add("font-active")})),Array.from(document.querySelectorAll("noscript.nuxt-speedkit-picture-noscript")).forEach((e=>{const t=document.createElement("div");t.innerHTML=e.innerHTML,e.parentNode.replaceChild(t.children[0],e),t.remove()}))})),h("nuxt-speedkit-button-init-app",(()=>l(!0))),Object(t.c)({timing:{fcp:800,dcl:1200}}),"__NUXT_SPEEDKIT_AUTO_INIT__"in e&&e.__NUXT_SPEEDKIT_AUTO_INIT__||Object(t.b)()&&y?l():function(e){e||w("nuxt-speedkit-message-unsupported-browser"),Object(t.a)()||w("nuxt-speedkit-message-reduced-bandwidth")}(y)):l()}.call(this,n(1))}]);