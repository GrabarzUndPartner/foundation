/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{287:function(n,o,e){"use strict";function t(n){return o=n,Array.isArray(o)?n:[n];var o}e.r(o),e.d(o,"Intersection",(function(){return f}));function r(n){const{event:o}=n,e={};let r=[];function c(n,o,e){l(n,o,((n,o)=>{r=r.filter((t=>!!(t[0]!==n||t[1]!==o||e&&t[2]!==e)||(n.removeEventListener(o,t[2],t[3]),!1)))}))}function l(n,o,e){!function(n,o){t(n).forEach(o)}(n,(n=>{n&&o.split(" ").forEach(e.bind(null,n))}))}function f(){r=r.filter((data=>c(data[0],data[1]))),o.offBy(e)}return o.on("destroy",f,e),{on:function(n,t,r){o.on(n,t,e,r)},off:function(n){o.off(n,e)},emit:o.emit,bind:function(n,o,e,t){l(n,o,((n,o)=>{r.push([n,o,e,t]),n.addEventListener(o,e,t)}))},unbind:c,destroy:f}}var c="intersection:in",l="intersection:out";function f(n,o,e){const{emit:t}=r(n),f=e.intersection||{},d=function(n){const{Components:o}=n;return{keyboard:{enable(){o.Keyboard.disable(!1)},disable(){o.Keyboard.disable(!0)}},autoplay:{enable(){n.options.autoplay&&o.Autoplay.play()},disable(){o.Autoplay.pause()}},autoScroll:{enable(){const n=o.AutoScroll;n&&n.play()},disable(){const n=o.AutoScroll;n&&n.pause()}},video:{enable(){const n=o.Video;n&&n.play()},disable(){const n=o.Video;n&&n.pause()}}}}(n);let y;function v(){y&&(y.disconnect(),y=null)}function w([n]){n&&(n.isIntersecting?function(n){h(f.inView||{}),t(c,n),f.once&&v()}(n):function(n){h(f.outView||{}),t(l,n)}(n),t("intersection",n))}function h(n){!function(object,n,o){if(object){let e=Object.keys(object);e=o?e.reverse():e;for(let i=0;i<e.length;i++){const o=e[i];if("__proto__"!==o&&!1===n(object[o],o))break}}}(n,((n,o)=>{if(void 0!==n){const e=d[o];n?e.enable():e.disable()}}))}return{mount:function(){window.IntersectionObserver&&(y=new IntersectionObserver(w,{root:f.root,rootMargin:f.rootMargin,threshold:f.threshold}),y.observe(n.root))},destroy:v}}}}]);