/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{586:function(n,o,t){"use strict";t.r(o),t.d(o,"Intersection",(function(){return l}));t(9),t(41),t(55),t(21),t(89),t(87);function e(n){return o=n,Array.isArray(o)?n:[n];var o}function r(n){var o=n.event,t={},r=[];function c(n,o,t){f(n,o,(function(n,o){r=r.filter((function(e){return!!(e[0]!==n||e[1]!==o||t&&e[2]!==t)||(n.removeEventListener(o,e[2],e[3]),!1)}))}))}function f(n,o,t){!function(n,o){e(n).forEach(o)}(n,(function(n){n&&o.split(" ").forEach(t.bind(null,n))}))}function l(){r=r.filter((function(data){return c(data[0],data[1])})),o.offBy(t)}return o.on("destroy",l,t),{on:function(n,e,r){o.on(n,e,t,r)},off:function(n){o.off(n,t)},emit:o.emit,bind:function(n,o,t,e){f(n,o,(function(n,o){r.push([n,o,t,e]),n.addEventListener(o,t,e)}))},unbind:c,destroy:l}}var c="intersection:in",f="intersection:out";function l(n,o,t){var e,l=r(n).emit,d=t.intersection||{},v=function(n){var o=n.Components;return{keyboard:{enable:function(){o.Keyboard.disable(!1)},disable:function(){o.Keyboard.disable(!0)}},autoplay:{enable:function(){n.options.autoplay&&o.Autoplay.play()},disable:function(){o.Autoplay.pause()}},autoScroll:{enable:function(){var n=o.AutoScroll;n&&n.play()},disable:function(){var n=o.AutoScroll;n&&n.pause()}},video:{enable:function(){var n=o.Video;n&&n.play()},disable:function(){var n=o.Video;n&&n.pause()}}}}(n);function y(){e&&(e.disconnect(),e=null)}function w(n){var o=n[0];o&&(o.isIntersecting?function(n){h(d.inView||{}),l(c,n),d.once&&y()}(o):function(n){h(d.outView||{}),l(f,n)}(o),l("intersection",o))}function h(n){!function(object,n,o){if(object){var t=Object.keys(object);t=o?t.reverse():t;for(var i=0;i<t.length;i++){var e=t[i];if("__proto__"!==e&&!1===n(object[e],e))break}}}(n,(function(n,o){if(void 0!==n){var t=v[o];n?t.enable():t.disable()}}))}return{mount:function(){window.IntersectionObserver&&(e=new IntersectionObserver(w,{root:d.root,rootMargin:d.rootMargin,threshold:d.threshold})).observe(n.root)},destroy:y}}}}]);