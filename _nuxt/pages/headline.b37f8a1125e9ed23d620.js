(window.webpackJsonp=window.webpackJsonp||[]).push([[20,9,10],{171:function(e,t,n){var content=n(177);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(170).default)("2491ef0a",content,!0,{sourceMap:!1})},172:function(e,t,n){var content=n(179);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(170).default)("7448f315",content,!0,{sourceMap:!1})},174:function(e,t,n){"use strict";var o={inject:{parentLevel:{from:"parentLevel",default:1}},inheritAttrs:!1,props:{font:{type:[Object,Array],default:function(){return[]}}},computed:{debug:function(){return"debug-headline"in this.$route.query},contextLevel:function(){return e=(this.parentLevel-this.parentLevel%2)/2,Math.max(1,Math.min(e,6));var e}},created:function(){var e=function e(component){return component.tags?component:component&&e(component.$parent)||null}(this);e&&(e.headline=!0)}};var r=o,l=(n(178),n(168)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h"+e.contextLevel,e._g(e._b({directives:[{name:"font",rawName:"v-font",value:e.font,expression:"font"}],tag:"component",attrs:{"data-debug":e.debug}},"component",e.$attrs,!1),e.$listeners),[e._t("default"),e._v(" "),e.debug?n("pre",{attrs:{"data-debug-context-level":e.contextLevel}}):e._e()],2)}),[],!1,null,"5576d804",null);t.a=component.exports},175:function(e,t,n){"use strict";n.r(t);var o={components:{BaseHeadline:n(174).a},props:{overline:{type:String,default:"Atom Headline (Overline)"},text:{type:String,default:"Atom Headline (Text)"}}},r=(n(176),n(168)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("base-headline",e._g(e._b({staticClass:"atom-headline debug",attrs:{font:[e.$getFont("Raleway",700),e.$getFont("Poppins",500,"normal",{selector:".overline"})]}},"base-headline",e.$attrs,!1),e.$listeners),[e._t("default",(function(){return[e.overline?n("span",{staticClass:"overline"},[e._v(e._s(e.overline))]):e._e(),e._v(" "),n("span",[e._v(e._s(e.text))])]}))],2)}),[],!1,null,"6f6a1109",null);t.default=component.exports},176:function(e,t,n){"use strict";n(171)},177:function(e,t,n){var o=n(169)((function(i){return i[1]}));o.push([e.i,".atom-headline[data-v-6f6a1109]{position:relative;font-size:1em}.atom-headline span[data-v-6f6a1109]{display:block;font-size:calc(var(--font-size-text) / 16 * 1em)}.atom-headline span.overline[data-v-6f6a1109]{font-size:calc(var(--font-size-overline) / 16 * 1em)}h1[data-v-6f6a1109]{--font-size-overline:16;--font-size-text:48}h2[data-v-6f6a1109]{--font-size-overline:12;--font-size-text:32}h3[data-v-6f6a1109]{--font-size-overline:10;--font-size-text:28}h4[data-v-6f6a1109]{--font-size-text:24}h4[data-v-6f6a1109],h5[data-v-6f6a1109]{--font-size-overline:8}h5[data-v-6f6a1109]{--font-size-text:20}h6[data-v-6f6a1109]{--font-size-overline:8;--font-size-text:16}",""]),o.locals={},e.exports=o},178:function(e,t,n){"use strict";n(172)},179:function(e,t,n){var o=n(169)((function(i){return i[1]}));o.push([e.i,'[data-debug][data-v-5576d804]{position:relative}[data-debug] pre[data-v-5576d804]{z-index:10000;margin:0}[data-debug] pre[data-v-5576d804],[data-debug] pre[data-v-5576d804]:before{position:absolute;top:0;right:0;bottom:0;left:0}[data-debug] pre[data-v-5576d804]:before{box-sizing:border-box;pointer-events:none;content:"";border:2px dotted #333}[data-debug] pre[data-v-5576d804]:after{position:absolute;top:0;right:0;z-index:10000;padding:10px 5px;font-size:12px;color:#fff;content:"H" attr(data-debug-context-level);background:#333}',""]),o.locals={},e.exports=o},266:function(e,t,n){var content=n(310);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(170).default)("e941fee0",content,!0,{sourceMap:!1})},309:function(e,t,n){"use strict";n(266)},310:function(e,t,n){var o=n(169)((function(i){return i[1]}));o.push([e.i,".design-default[data-v-6b04878c]{font-family:monospace}h1[data-v-6b04878c]{font-size:48px}h1[data-v-6b04878c],h2[data-v-6b04878c]{margin:10px 10px 20px}h2[data-v-6b04878c]{font-size:32px}h3[data-v-6b04878c]{font-size:24px}h3[data-v-6b04878c],h4[data-v-6b04878c]{margin:10px 10px 20px}h4[data-v-6b04878c]{font-size:20px}h5[data-v-6b04878c]{font-size:16px}h5[data-v-6b04878c],h6[data-v-6b04878c]{margin:10px}h6[data-v-6b04878c]{font-size:12px}",""]),o.locals={},e.exports=o},336:function(e,t,n){"use strict";var o={components:{BaseHeadline:n(174).a},inheritAttrs:!1},r=(n(309),n(168)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("base-headline",e._g(e._b({staticClass:"design-default"},"base-headline",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,"6b04878c",null);t.a=component.exports},675:function(e,t,n){"use strict";n.r(t);var o=n(188),r=n(174),l=n(336),d=n(175),c={components:{CoreStructure:o.a,BaseHeadline:r.a,DefaultHeadline:l.a,AtomHeadline:d.default},data:function(){return{}}},v=n(168),component=Object(v.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("core-structure",[n("fieldset",[n("legend",[e._v("Base")]),e._v(" "),n("base-headline",[e._v("Document Heading Level 1")]),e._v(" "),n("core-structure",[n("base-headline",[e._v("Document Heading Level 2")]),e._v(" "),n("core-structure",[n("base-headline",[e._v("Document Heading Level 3")]),e._v(" "),n("core-structure",[n("base-headline",[e._v("Document Heading Level 4")]),e._v(" "),n("core-structure",[n("base-headline",[e._v("Document Heading Level 5")]),e._v(" "),n("core-structure",[n("base-headline",[e._v("Document Heading Level 6")])],1)],1)],1)],1)],1)],1),e._v(" "),n("fieldset",[n("legend",[e._v("Default")]),e._v(" "),n("default-headline",[e._v("Document Heading Level 1")]),e._v(" "),n("core-structure",[n("default-headline",[e._v("Document Heading Level 2")]),e._v(" "),n("core-structure",[n("default-headline",[e._v("Document Heading Level 3")]),e._v(" "),n("core-structure",[n("default-headline",[e._v("Document Heading Level 4")]),e._v(" "),n("core-structure",[n("default-headline",[e._v("Document Heading Level 5")]),e._v(" "),n("core-structure",[n("default-headline",[e._v("Document Heading Level 6")])],1)],1)],1)],1)],1)],1),e._v(" "),n("fieldset",[n("legend",[e._v("Sample")]),e._v(" "),n("atom-headline",e._b({},"atom-headline",{text:"Headline H1",overline:"Overline H1"},!1)),e._v(" "),n("core-structure",[n("atom-headline",e._b({},"atom-headline",{text:"Headline H2",overline:"Overline H2"},!1)),e._v(" "),n("core-structure",[n("atom-headline",e._b({},"atom-headline",{text:"Headline H3",overline:"Overline H3"},!1)),e._v(" "),n("core-structure",[n("atom-headline",e._b({},"atom-headline",{text:"Headline H4",overline:"Overline H4"},!1)),e._v(" "),n("core-structure",[n("atom-headline",e._b({},"atom-headline",{text:"Headline H5",overline:"Overline H5"},!1)),e._v(" "),n("core-structure",[n("atom-headline",e._b({},"atom-headline",{text:"Headline H6",overline:"Overline H6"},!1))],1)],1)],1)],1)],1)],1)])}),[],!1,null,null,null);t.default=component.exports}}]);