(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{10:function(e,t,n){var content=n(19);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(8).default)("22235843",content,!0,{sourceMap:!1})},11:function(e,t,n){"use strict";var o={inject:{contextLevel:{from:"contextLevel",default:1}},inheritAttrs:!1,props:{font:{type:[Object,Array],default:()=>[]}},computed:{debug(){return"debug-headline"in this.$route.query},currentHeadlineLevel(){return e=this.contextLevel,Math.max(1,Math.min(e,6));var e}}},d=(n(13),n(6)),component=Object(d.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h"+e.currentHeadlineLevel,e._g(e._b({directives:[{name:"font",rawName:"v-font",value:e.font,expression:"font"}],tag:"component",attrs:{"data-debug":e.debug}},"component",e.$attrs,!1),e.$listeners),[e._t("default"),e._v(" "),e.debug?n("pre",{attrs:{"data-debug-level":e.currentHeadlineLevel}}):e._e()],2)}),[],!1,null,"0d768736",null);t.a=component.exports},13:function(e,t,n){"use strict";n(9)},14:function(e,t,n){var o=n(7)((function(i){return i[1]}));o.push([e.i,'[data-debug][data-v-0d768736]{position:relative}[data-debug] pre[data-v-0d768736]{z-index:10000;margin:0}[data-debug] pre[data-v-0d768736],[data-debug] pre[data-v-0d768736]:before{position:absolute;top:0;right:0;bottom:0;left:0}[data-debug] pre[data-v-0d768736]:before{box-sizing:border-box;pointer-events:none;content:"";border:2px dotted #333}[data-debug] pre[data-v-0d768736]:after{position:absolute;top:0;right:0;z-index:10000;padding:10px 5px;font-size:12px;color:#fff;content:"H" attr(data-debug-level);background:#333}',""]),o.locals={},e.exports=o},17:function(e,t,n){"use strict";n.r(t);var o={components:{BaseHeadline:n(11).a},props:{overline:{type:String,default:"Atom Headline (Overline)"},text:{type:String,default:"Atom Headline (Text)"}}},d=(n(18),n(6)),component=Object(d.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("base-headline",e._g(e._b({staticClass:"atom-headline debug",attrs:{font:[e.$getFont("Raleway",700),e.$getFont("Poppins",500,"normal",{selector:"span:first-child"})]}},"base-headline",e.$attrs,!1),e.$listeners),[e._t("default",(function(){return[e.overline?n("span",[e._v(e._s(e.overline))]):e._e(),e._v(" "),n("span",[e._v(e._s(e.text))])]}))],2)}),[],!1,null,"08d76fde",null);t.default=component.exports},18:function(e,t,n){"use strict";n(10)},19:function(e,t,n){var o=n(7)((function(i){return i[1]}));o.push([e.i,".atom-headline[data-v-08d76fde]{position:relative;font-size:1em}.atom-headline span[data-v-08d76fde]{display:block}.atom-headline span[data-v-08d76fde]:first-child{font-size:calc(var(--font-size-overline) / 16 * 1em)}.atom-headline span[data-v-08d76fde]:last-child{font-size:calc(var(--font-size-text) / 16 * 1em)}h1[data-v-08d76fde]{--font-size-overline:16;--font-size-text:48}h2[data-v-08d76fde]{--font-size-overline:12;--font-size-text:32}h3[data-v-08d76fde]{--font-size-overline:10;--font-size-text:28}h4[data-v-08d76fde]{--font-size-text:24}h4[data-v-08d76fde],h5[data-v-08d76fde]{--font-size-overline:8}h5[data-v-08d76fde]{--font-size-text:20}h6[data-v-08d76fde]{--font-size-overline:8;--font-size-text:16}",""]),o.locals={},e.exports=o},202:function(e,t,n){var content=n(340);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(8).default)("0ce270ac",content,!0,{sourceMap:!1})},339:function(e,t,n){"use strict";n(202)},340:function(e,t,n){var o=n(7)((function(i){return i[1]}));o.push([e.i,".organism-stage[data-v-61a077df]{position:relative}.organism-stage .text[data-v-61a077df]{position:absolute;bottom:0;left:0;box-sizing:border-box;width:100%;padding:calc(32 / 32 * 1em) 0;margin:0;font-size:calc(32 / 16 * 1em);text-align:center}@media (min-width:768px){.organism-stage .text[data-v-61a077df]{padding:calc(32 / 64 * 1em);font-size:calc(64 / 16 * 1em)}}@media (--sm){.organism-stage .text[data-v-61a077df]{padding:calc(32 / 64 * 1em);font-size:calc(64 / 16 * 1em)}}@media (min-width:992px){.organism-stage .text[data-v-61a077df]{top:0;right:0;left:auto;width:auto;padding:calc(64 / 64 * 1em);font-size:calc(64 / 16 * 1em)}}@media (--md){.organism-stage .text[data-v-61a077df]{top:0;right:0;left:auto;width:auto;padding:calc(64 / 64 * 1em);font-size:calc(64 / 16 * 1em)}}@media (min-width:1200px){.organism-stage .text[data-v-61a077df]{padding:calc(96 / 96 * 1em);font-size:calc(96 / 16 * 1em)}}@media (--lg){.organism-stage .text[data-v-61a077df]{padding:calc(96 / 96 * 1em);font-size:calc(96 / 16 * 1em)}}",""]),o.locals={},e.exports=o},403:function(e,t,n){"use strict";n.r(t);var o=n(57),d=n(25),r=n(17),l={components:{CoreStructure:d.a,SpeedkitPicture:o.a,Headline:r.default},inheritAttrs:!1,props:{image:{type:Object,required:!0},text:{type:String,default:"Text undefined…"}}},c=(n(339),n(6)),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("core-structure",e._g(e._b({staticClass:"organism-stage",scopedSlots:e._u([{key:"header",fn:function(){return[n("speedkit-picture",e._b({},"speedkit-picture",e.image,!1)),e._v(" "),n("headline",{staticClass:"text"},[e._v("\n      "+e._s(e.text)+"\n    ")])]},proxy:!0}])},"core-structure",e.$attrs,!1),e.$listeners))}),[],!1,null,"61a077df",null);t.default=component.exports},9:function(e,t,n){var content=n(14);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(8).default)("6414fc12",content,!0,{sourceMap:!1})}}]);