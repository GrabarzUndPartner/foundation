(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{384:function(t,e,n){"use strict";n(18);var r=n(197),c=n(12),o=(n(69),n(10),n(77),n(105),n(145),n(47),n(59),n(201)),l=n(40),h=n(0),f=n(13),d=(n(68),n(56)),m=n(452),y=Object(f.a)("src"),j=Object(f.a)("sizes"),O=Object(f.a)("media"),v=Object(f.a)("width"),x=Object(f.a)("height"),w=Object(f.a)("format"),k=Object(f.a)("quality"),S=Object(f.a)("preload"),N=function(){function t(t){var e=t.src,n=t.sizes,r=t.width,c=t.height,o=t.media,l=void 0===o?"all":o,f=t.quality,d=void 0===f?70:f,m=t.format,N=void 0===m?null:m,z=t.preload,$=void 0!==z&&z;Object.defineProperty(this,y,{writable:!0,value:null}),Object.defineProperty(this,j,{writable:!0,value:null}),Object.defineProperty(this,O,{writable:!0,value:null}),Object.defineProperty(this,v,{writable:!0,value:null}),Object.defineProperty(this,x,{writable:!0,value:null}),Object.defineProperty(this,w,{writable:!0,value:null}),Object.defineProperty(this,k,{writable:!0,value:null}),Object.defineProperty(this,S,{writable:!0,value:!1}),Object(h.a)(this,y)[y]=e,Object(h.a)(this,j)[j]=n,Object(h.a)(this,O)[O]=l,Object(h.a)(this,v)[v]=r,Object(h.a)(this,x)[x]=c,Object(h.a)(this,w)[w]=N,Object(h.a)(this,k)[k]=d,Object(h.a)(this,S)[S]=$}var e=t.prototype;return e.getModifiers=function(){return{format:this.format,quality:this.quality}},e.getMeta=function(e,n){return Object(m.b)(new t(Object.assign({},this.toJSON())),e,n)},e.getPreload=function(t,e,n){return{rel:"preload",as:"image",imagesrcset:t,imagesizes:e,media:this.media,crossorigin:n}},e.modify=function(e){return new t(Object.assign({},this.toJSON(),e))},e.toJSON=function(){return{src:Object(h.a)(this,y)[y],sizes:Object(h.a)(this,j)[j],media:Object(h.a)(this,O)[O],width:Object(h.a)(this,v)[v],height:Object(h.a)(this,x)[x],format:Object(h.a)(this,w)[w],quality:Object(h.a)(this,k)[k],preload:Object(h.a)(this,S)[S]}},t.create=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return Object(o.a)(this,e)},Object(l.a)(t,[{key:"key",get:function(){return Object(d.a)(JSON.stringify(this.toJSON()))}},{key:"src",get:function(){return Object(h.a)(this,y)[y]}},{key:"sizes",get:function(){return Object(h.a)(this,j)[j]}},{key:"media",get:function(){return Object(h.a)(this,O)[O]}},{key:"width",get:function(){return Object(h.a)(this,v)[v]}},{key:"height",get:function(){return Object(h.a)(this,x)[x]}},{key:"ratio",get:function(){return Object(h.a)(this,v)[v]/Object(h.a)(this,x)[x]}},{key:"format",get:function(){return Object(h.a)(this,w)[w]||Object(m.a)(Object(h.a)(this,y)[y])}},{key:"quality",get:function(){return Object(h.a)(this,k)[k]}},{key:"preload",get:function(){return Object(h.a)(this,S)[S]}},{key:"className",get:function(){return"image-"+Object(d.a)(this.src)}},{key:"style",get:function(){return"\n      @supports (aspect-ratio: 1) {\n        @media "+this.media+" { ."+this.className+" { aspect-ratio: "+this.width+" / "+this.height+"; } }\n      }\n    "}}]),t}(),z=n(270),$={inheritAttrs:!1,props:{source:{type:N,default:null},title:{type:String,required:!0},alt:{type:String,default:null},loadingSpinner:{type:z.a,default:function(){return this.$speedkit.loader()}}},data:function(){return{className:null,loading:!0,config:null,meta:null}},fetchKey:function(){return"image-"+(this.source&&this.source.key)},fetch:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.source){e.next=7;break}return t.config=t.$img.getSizes(t.source.src,{sizes:t.source.sizes,modifiers:t.source.getModifiers()}),r=t.$nuxt.context.ssrContext,e.next=5,t.source.getMeta(t.config.src,(null==r||null==(n=r.nuxt)?void 0:n._img)||{});case 5:t.meta=e.sent,t.className=t.meta.className;case 7:case"end":return e.stop()}}),e)})))()},head:function(){return{style:this.style,link:this.preload,noscript:[{hid:"img-nojs",innerHTML:"<style>img { content-visibility: unset !important; }</style>"}],__dangerouslyDisableSanitizers:["noscript"]}},computed:{classNames:function(){var t=[{loading:this.loading}].concat(this.className);return this.loadingSpinner&&t.push(this.loadingSpinner.className),t},srcset:function(){return this.config&&(this.config.srcset||this.config.src)},sizes:function(){return this.config&&this.config.sizes},width:function(){return this.meta&&this.meta.width},height:function(){return this.meta&&this.meta.height},loadingMode:function(){return this.isCritical?"eager":"lazy"},decodingMode:function(){return this.source&&"svg"===this.source.format?"sync":"async"},style:function(){return this.meta?[this.loadingSpinner&&{hid:this.loadingSpinner.className,type:"text/css",cssText:this.loadingSpinner.style},{hid:this.className,type:"text/css",cssText:new N(this.meta).style}]:[]},preload:function(){return this.config&&this.isCritical?[new N(this.source).getPreload(this.config.srcset,this.config.sizes)]:[]}},mounted:function(){this.loading=!this.$el.complete},methods:{onLoad:function(t){this.loading=!1,this.$emit("load",t.target.currentSrc)}}},_=(n(453),n(8)),M=Object(_.a)($,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",t._g(t._b({staticClass:"nuxt-speedkit-image",class:t.classNames,attrs:{srcset:t.srcset,sizes:t.sizes,width:t.width,height:t.height,title:t.title,alt:t.alt||t.title,loading:t.loadingMode,decoding:t.decodingMode,crossorigin:t.$speedkit.crossorigin},on:{load:t.onLoad}},"img",t.$attrs,!1),t.$listeners))}),[],!1,null,"b69c9aac",null).exports,C={inheritAttrs:!1,props:{hydrate:{type:Boolean,default:!0}},render:function(t){return this.hydrate?t(M,{props:Object.assign({},this.$attrs,{critical:this.isCritical,on:this.$listeners})}):t(r.a,{props:{never:!0}},[t("noscript",{},[t(M,{props:Object.assign({},this.$attrs,{critical:this.hydrate,on:this.$listeners})})])])}},P=Object(_.a)(C,undefined,undefined,!1,null,null,null).exports,A=(n(30),n(60),n(29),n(22),n(33),n(78),n(272),n(70),n(61),n(455)),L=n.n(A)()(),R=Object(f.a)("list"),F=function(t){function e(t){Object.defineProperty(this,R,{writable:!0,value:[]}),Object(h.a)(this,R)[R]=Object(h.a)(this,R)[R].concat(Array.from(t||Object(h.a)(this,R)[R]).map((function(t){return new N(t)})))}var n=e.prototype;return n[t]=function(){return Object(h.a)(this,R)[R].values()},n.getFormats=function(t,e,n){return this.sorted.reduce((function(r,source){return r.concat(t.map((function(t){return source.modify({format:t,preload:t===e&&n})})))}),[])},n.getMeta=function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(n,r){var c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all(this.sorted.map((function(source){var t,e=n.getSizes(source.src,{sizes:source.sizes,modifiers:source.getModifiers()});return source.getMeta(e.src,null==r||null==(t=r.nuxt)?void 0:t._img)})));case 2:return c=t.sent,t.abrupt("return",new e(c));case 4:case"end":return t.stop()}}),t,this)})));return function(e,n){return t.apply(this,arguments)}}(),n.toJSON=function(){return Object(h.a)(this,R)[R]},e.create=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return Object(o.a)(this,e)},Object(l.a)(e,[{key:"key",get:function(){return Object(h.a)(this,R)[R].map((function(source){return source.key})).join("-")}},{key:"list",get:function(){return Object(h.a)(this,R)[R]}},{key:"sorted",get:function(){return Object(h.a)(this,R)[R].sort((function(a,b){return L(a.media,b.media)}))}},{key:"style",get:function(){var t=this;return Object(h.a)(this,R)[R].map((function(e){var n=e.media,r=e.width,c=e.height,o=e.style;return"\n      @media "+n+" { ."+t.className+"::before { padding-top: calc((1 / ("+r+" / "+c+")) * 100%); } }\n      @supports (aspect-ratio: 1) {\n        @media "+n+" { ."+t.className+" { aspect-ratio: "+r+" / "+c+"; } }\n      }\n      "+o+"\n    "})).reverse().join(" ")}},{key:"className",get:function(){return"picture-"+Object(d.a)(this.sorted.map((function(t){return t.src})).join(","))}},{key:"classNames",get:function(){return{picture:this.className,image:Object(h.a)(this,R)[R].map((function(source){return source.className}))}}}]),e}(Symbol.iterator),J=(n(147),n(148),n(149),n(150),n(151),n(152),n(153),n(154),n(155),n(156),n(157),n(158),n(159),n(160),new Map([["jpg","jpeg"]])),E={props:{source:{type:N,required:!0}},data:function(){return{config:null}},fetchKey:function(){return"source-"+this.source.key},fetch:function(){this.config=this.$img.getSizes(this.source.src,{sizes:this.source.sizes,modifiers:this.source.getModifiers()})},head:function(){var t=new N(this.source);return this.config&&t.preload?{link:[t.getPreload(this.config.srcset,this.config.sizes,this.$speedkit.crossorigin)]}:{}},computed:{srcset:function(){return this.config.srcset||this.config.src},type:function(){return"image/"+(J.get(this.source.format)||this.source.format)}}},T=Object(_.a)(E,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("source",{attrs:{srcset:t.srcset,sizes:t.config.sizes,media:t.source.media,type:t.type}})}),[],!1,null,null,null).exports,I=["avif","webp","png","jpg"],K={components:{PictureSource:T,BaseImage:P},props:{sources:{type:[Array,F],required:!0},formats:{type:Array,default:function(){return["webp","avif","jpg"]}},loadingSpinner:{type:z.a,default:void 0},title:{type:String,default:null},alt:{type:String,default:null}},data:function(){return{metaSources:{},classNames:{}}},fetch:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$nuxt.context.ssrContext,e.next=3,t.sourceList.getMeta(t.$img,n);case 3:t.metaSources=e.sent,t.classNames=t.metaSources.classNames;case 5:case"end":return e.stop()}}),e)})))()},head:function(){return{style:this.style}},fetchKey:function(){return"picture-"+this.sourceList.key},computed:{sourceList:function(){return F.create(this.sources)},formatSources:function(){var t=this,e=I.filter((function(e){return t.formats.includes(e)})),n=I.find((function(e){return t.formats.includes(e)}));return this.sourceList.getFormats(e,n,this.isCritical)},style:function(){if(!this.metaSources)return[];var t=this.metaSources.length&&new F(this.metaSources)||this.metaSources;return[{hid:this.classNames.picture,type:"text/css",cssText:t.style}]}},methods:{onLoad:function(t){this.$emit("load",t)}}},B=(n(456),Object(_.a)(K,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("picture",{staticClass:"nuxt-speedkit-picture",class:t.classNames.picture},[t._l(t.formatSources,(function(source){return n("picture-source",{key:source.key,attrs:{source:source}})})),t._v(" "),n("base-image",{class:t.classNames.image,attrs:{title:t.title,alt:t.alt,"loading-spinner":t.loadingSpinner},on:{load:t.onLoad}})],2)}),[],!1,null,"41170240",null).exports),U={inheritAttrs:!1,props:{hydrate:{type:Boolean,default:!0}},render:function(t){return this.hydrate?t(B,{props:Object.assign({},this.$attrs,{critical:this.isCritical,on:this.$listeners})}):t(r.a,{props:{never:!0}},[t("noscript",{},[t(B,{props:Object.assign({},this.$attrs,{critical:this.hydrate,on:this.$listeners})})])])}},D=Object(_.a)(U,undefined,undefined,!1,null,null,null);e.a=D.exports},427:function(t,e,n){var content=n(454);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("01b9e964",content,!0,{sourceMap:!1})},428:function(t,e,n){var content=n(457);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("47041728",content,!0,{sourceMap:!1})},452:function(t,e,n){"use strict";(function(t,r){n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return h}));var c=n(12),o=(n(47),n(23),n(146),n(145),n(10),n(104),n(195),n(196),n(22),n(29),n(33),n(15)),l=function(t){if(/[.]/.exec(t))return/[^.]+$/.exec(t)[0]},h=function(){var e=Object(c.a)(regeneratorRuntime.mark((function e(source,c,l){var h,f,d,m,y,j,O;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.Image){e.next=8;break}return source=source.modify({src:c}),e.next=4,new Promise((function(e){var img=new t.Image;img.onload=function(){return e(img)},img.src=source.src}));case 4:return h=e.sent,e.abrupt("return",source.modify({width:h.naturalWidth,height:h.naturalHeight}));case 8:return f=c,Object.entries(l||{}).length&&(f=Object.entries(l||{}).find((function(t){return t[1].endsWith(f)}))[0]),source=source.modify({src:Object(o.f)(r.env.NUXT_SPEEDKIT_INTERAL_URL,f)}),e.next=13,fetch(source.src);case 13:return d=e.sent,e.next=16,n.e(17).then(n.t.bind(null,490,7));case 16:return m=e.sent.default,e.t0=m,e.next=20,d.buffer();case 20:return e.t1=e.sent,y=(0,e.t0)(e.t1),j=y.width,O=y.height,e.abrupt("return",source.modify({width:j,height:O}));case 25:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()}).call(this,n(24),n(271))},453:function(t,e,n){"use strict";n(427)},454:function(t,e,n){var r=n(27)((function(i){return i[1]}));r.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*! purgecss start ignore */.nuxt-speedkit-image[data-v-b69c9aac]{content-visibility:auto;display:block;width:100%;height:auto;object-fit:cover}\n\n/*! purgecss end ignore */",""]),r.locals={},t.exports=r},455:function(t,e){const n=/(!?\(\s*min(-device-)?-width)(.|\n)+\(\s*max(-device)?-width/i,r=/(!?\(\s*max(-device)?-width)(.|\n)+\(\s*min(-device)?-width/i,c=v(n,r,/\(\s*min(-device)?-width/i),o=v(r,n,/\(\s*max(-device)?-width/i),l=/(!?\(\s*min(-device)?-height)(.|\n)+\(\s*max(-device)?-height/i,h=/(!?\(\s*max(-device)?-height)(.|\n)+\(\s*min(-device)?-height/i,f=v(l,h,/\(\s*min(-device)?-height/i),d=v(h,l,/\(\s*max(-device)?-height/i),m=/print/i,y=/^print$/i,j=Number.MAX_VALUE;function O(t){if(null===(t=/(-?\d*\.?\d+)(ch|em|ex|px|rem)/.exec(t)))return j;let e=t[1];switch(t[2]){case"ch":e=8.8984375*parseFloat(e);break;case"em":case"rem":e=16*parseFloat(e);break;case"ex":e=8.296875*parseFloat(e);break;case"px":e=parseFloat(e)}return+e}function v(t,e,n){return function(r){return!!t.test(r)||!e.test(r)&&n.test(r)}}function x(a,b){const t=m.test(a),e=y.test(a),n=m.test(b),r=y.test(b);return t&&n?!e&&r?1:e&&!r?-1:a.localeCompare(b):t?1:n?-1:null}t.exports=function(t){const e=(t||{}).unitlessMqAlwaysFirst;function n(a,b){const t=x(a,b);if(null!==t)return t;const n=c(a)||f(a),r=o(a)||d(a),l=c(b)||f(b),h=o(b)||d(b);if(!e||(n||r)&&(l||h)){if(n&&h)return-1;if(r&&l)return 1;const t=O(a),e=O(b);return t===j&&e===j?a.localeCompare(b):t===j?1:e===j?-1:t>e?r?-1:1:t<e?r?1:-1:a.localeCompare(b)}return n||r||l||h?l||h?-1:1:a.localeCompare(b)}return n.desktopFirst=function(a,b){const t=x(a,b);if(null!==t)return t;const n=c(a)||f(a),r=o(a)||d(a),l=c(b)||f(b),h=o(b)||d(b);if(!e||(n||r)&&(l||h)){if(n&&h)return 1;if(r&&l)return-1;const t=O(a),e=O(b);return t===j&&e===j?a.localeCompare(b):t===j?1:e===j?-1:t>e?r?-1:1:t<e?r?1:-1:-a.localeCompare(b)}return n||r||l||h?l||h?-1:1:a.localeCompare(b)},n}},456:function(t,e,n){"use strict";n(428)},457:function(t,e,n){var r=n(27)((function(i){return i[1]}));r.push([t.i,'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*! purgecss start ignore */.nuxt-speedkit-picture[data-v-41170240]{position:relative;box-sizing:border-box;display:block;width:100%}.nuxt-speedkit-picture img[data-v-41170240]{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box}.nuxt-speedkit-picture[data-v-41170240]:before{position:relative;box-sizing:border-box;display:block;content:""}@supports (aspect-ratio:1){.nuxt-speedkit-picture[data-v-41170240]{position:unset}.nuxt-speedkit-picture img[data-v-41170240]{position:unset;top:unset;right:unset;bottom:unset;left:unset}.nuxt-speedkit-picture[data-v-41170240]:before{display:none}}\n\n/*! purgecss end ignore */',""]),r.locals={},t.exports=r}}]);