(window.webpackJsonp=window.webpackJsonp||[]).push([[6,42,44,45],{10:function(e,t,n){var content=n(19);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(8).default)("4f2019d2",content,!0,{sourceMap:!1})},12:function(e,t,n){"use strict";var o={inject:{parentLevel:{from:"parentLevel",default:1}},inheritAttrs:!1,props:{font:{type:[Object,Array],default:()=>[]}},data:()=>({debug:!1}),computed:{contextLevel(){return e=(this.parentLevel-this.parentLevel%2)/2,Math.max(1,Math.min(e,6));var e}},mounted(){this.debug="debug-headline"in this.$route.query}},r=(n(18),n(6)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h"+e.contextLevel,e._g(e._b({directives:[{name:"font",rawName:"v-font",value:e.font,expression:"font"}],tag:"component",attrs:{"data-debug":e.debug}},"component",e.$attrs,!1),e.$listeners),[e._t("default"),e._v(" "),e.debug?n("pre",{attrs:{"data-debug-context-level":e.contextLevel}}):e._e()],2)}),[],!1,null,"3796ed0e",null);t.a=component.exports},121:function(e,t,n){"use strict";var o={components:{BaseHeadline:n(12).a},inheritAttrs:!1},r=(n(92),n(6)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("base-headline",e._g(e._b({staticClass:"design-default"},"base-headline",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,"6b04878c",null);t.a=component.exports},122:function(e,t,n){"use strict";var o={components:{BaseRichText:n(25).a}},r=(n(94),n(6)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("base-rich-text",e._g(e._b({staticClass:"design-default"},"base-rich-text",e.$attrs,!1),e.$listeners),[e.$slots.default?e._t("default"):e._e()],2)}),[],!1,null,"f039faec",null);t.a=component.exports},13:function(e,t,n){"use strict";n.r(t);var o={components:{BaseHeadline:n(12).a},props:{overline:{type:String,default:"Atom Headline (Overline)"},text:{type:String,default:"Atom Headline (Text)"}}},r=(n(14),n(6)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("base-headline",e._g(e._b({staticClass:"atom-headline debug",attrs:{font:[e.$getFont("Raleway",700),e.$getFont("Poppins",500,"normal",{selector:".overline"})]}},"base-headline",e.$attrs,!1),e.$listeners),[e._t("default",(function(){return[e.overline?n("span",{staticClass:"overline"},[e._v(e._s(e.overline))]):e._e(),e._v(" "),n("span",[e._v(e._s(e.text))])]}))],2)}),[],!1,null,"6f6a1109",null);t.default=component.exports},14:function(e,t,n){"use strict";n(9)},15:function(e,t,n){var o=n(7)((function(i){return i[1]}));o.push([e.i,".atom-headline[data-v-6f6a1109]{position:relative;font-size:1em}.atom-headline span[data-v-6f6a1109]{display:block;font-size:calc(var(--font-size-text) / 16 * 1em)}.atom-headline span.overline[data-v-6f6a1109]{font-size:calc(var(--font-size-overline) / 16 * 1em)}h1[data-v-6f6a1109]{--font-size-overline:16;--font-size-text:48}h2[data-v-6f6a1109]{--font-size-overline:12;--font-size-text:32}h3[data-v-6f6a1109]{--font-size-overline:10;--font-size-text:28}h4[data-v-6f6a1109]{--font-size-text:24}h4[data-v-6f6a1109],h5[data-v-6f6a1109]{--font-size-overline:8}h5[data-v-6f6a1109]{--font-size-text:20}h6[data-v-6f6a1109]{--font-size-overline:8;--font-size-text:16}",""]),o.locals={},e.exports=o},16:function(e,t,n){var content=n(27);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(8).default)("3bfc04a2",content,!0,{sourceMap:!1})},179:function(e,t,n){var content=n(295);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(8).default)("2d0b8ff8",content,!0,{sourceMap:!1})},18:function(e,t,n){"use strict";n(10)},19:function(e,t,n){var o=n(7)((function(i){return i[1]}));o.push([e.i,'[data-debug][data-v-3796ed0e]{position:relative}[data-debug] pre[data-v-3796ed0e]{z-index:10000;margin:0;font-family:monospace;font-weight:400}[data-debug] pre[data-v-3796ed0e],[data-debug] pre[data-v-3796ed0e]:before{position:absolute;top:0;right:0;bottom:0;left:0}[data-debug] pre[data-v-3796ed0e]:before{box-sizing:border-box;pointer-events:none;content:"";border:2px dotted #333}[data-debug] pre[data-v-3796ed0e]:after{position:absolute;right:0;bottom:0;z-index:10000;padding:5px;font-size:13px;color:#fff;letter-spacing:.1em;content:"H" attr(data-debug-context-level);background:#333}',""]),o.locals={},e.exports=o},25:function(e,t,n){"use strict";var o={props:{value:{type:String,default:null},font:{type:[Object,Array],default:()=>[]}}},r=n(6),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.$slots.default?n("div",{directives:[{name:"font",rawName:"v-font",value:e.font,expression:"font"}]},[e._t("default",null,{value:e.value})],2):n("div",{directives:[{name:"font",rawName:"v-font",value:e.font,expression:"font"}],domProps:{innerHTML:e._s(e.value)}})}),[],!1,null,null,null);t.a=component.exports},26:function(e,t,n){"use strict";n(16)},27:function(e,t,n){var o=n(7)((function(i){return i[1]}));o.push([e.i,".atom-rich-text[data-v-3b9cbec2]{font-size:1em}.atom-rich-text[data-v-3b9cbec2] ol,.atom-rich-text[data-v-3b9cbec2] p,.atom-rich-text[data-v-3b9cbec2] ul{margin:0}.atom-rich-text[data-v-3b9cbec2] *+ol,.atom-rich-text[data-v-3b9cbec2] *+p,.atom-rich-text[data-v-3b9cbec2] *+ul{margin-top:calc(10 / 16 * 1em)}",""]),o.locals={},e.exports=o},294:function(e,t,n){"use strict";n(179)},295:function(e,t,n){var o=n(7)((function(i){return i[1]}));o.push([e.i,".molecule-article span[data-v-0c65f74a]{display:block}.molecule-article[data-v-0c65f74a] .atom-headline{margin:0 0 calc(20 / 16 * 1em)}",""]),o.locals={},e.exports=o},32:function(e,t,n){"use strict";n.r(t);var o={components:{BaseRichText:n(25).a},inheritAttrs:!1},r=(n(26),n(6)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("base-rich-text",e._g(e._b({staticClass:"atom-rich-text",attrs:{font:[e.$getFont("Poppins"),e.$getFont("Poppins",700,"normal",{selector:"strong"}),e.$getFont("Poppins",400,"italic",{selector:"em"}),e.$getFont("Poppins",700,"italic",{selector:"strong em, em strong"})]}},"base-rich-text",e.$attrs,!1),e.$listeners))}),[],!1,null,"3b9cbec2",null);t.default=component.exports},387:function(e,t,n){"use strict";n.r(t);var o=n(81),r=n(121),l=n(122),c={components:{BaseArticle:o.a,DefaultHeadline:r.a,DefaultRichText:l.a},inheritAttrs:!1,props:{level:{type:Number,default:2},content:{type:String,default:null}}},d=n(6),f=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("base-article",e._g(e._b({staticClass:"design-default",scopedSlots:e._u([{key:"header",fn:function(){return[e._t("header",(function(){return[n("default-headline",[e._t("headline")],2)]}))]},proxy:!0},{key:"default",fn:function(){return[n("default-rich-text",{attrs:{value:e.content}},[e._t("default")],2)]},proxy:!0}],null,!0)},"base-article",e.$attrs,!1),e.$listeners))}),[],!1,null,null,null).exports,v=n(13),m=n(32),_={components:{BaseArticle:o.a,AtomHeadline:v.default,AtomRichText:m.default},inheritAttrs:!1,props:{overline:{type:String,default:null},headline:{type:String,default:null},content:{type:String,default:null}}},h=(n(294),Object(d.a)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("base-article",e._g(e._b({staticClass:"molecule-article",scopedSlots:e._u([{key:"header",fn:function(){return[e._t("header",(function(){return[n("atom-headline",{attrs:{text:e.headline,overline:e.overline}})]}))]},proxy:!0},{key:"default",fn:function(){return[n("atom-rich-text",{attrs:{value:e.content}},[e._t("default")],2),e._v(" "),e._t("after")]},proxy:!0}],null,!0)},"base-article",e.$attrs,!1),e.$listeners))}),[],!1,null,"0c65f74a",null).exports),x={components:{BaseArticle:o.a,DefaultArticle:f,SampleArticle:h,AtomHeadline:v.default}},y=Object(d.a)(x,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("atom-headline",[e._v("\n    Article\n  ")]),e._v(" "),n("fieldset",[n("legend",[e._v("Base")]),e._v(" "),n("base-article",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n        Header Slot\n      ")]},proxy:!0},{key:"default",fn:function(){return[e._v("\n        Content Slot\n      ")]},proxy:!0}])})],1),e._v(" "),n("fieldset",[n("legend",[e._v("Default")]),e._v(" "),n("default-article",{scopedSlots:e._u([{key:"headline",fn:function(){return[e._v("\n        Headline\n      ")]},proxy:!0},{key:"default",fn:function(){return[n("p",[e._v("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam")]),e._v(" "),n("p",[e._v("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt")]),e._v(" "),n("ul",[n("li",[e._v("List Item 1")]),e._v(" "),n("li",[e._v("List Item 2")]),e._v(" "),n("li",[e._v("List Item 3")])]),e._v(" "),n("ol",[n("li",[e._v("List Item 1")]),e._v(" "),n("li",[e._v("List Item 2")]),e._v(" "),n("li",[e._v("List Item 3")])])]},proxy:!0}])})],1),e._v(" "),n("fieldset",[n("legend",[e._v("Sample")]),e._v(" "),n("sample-article",e._b({scopedSlots:e._u([{key:"default",fn:function(){return[n("p",[e._v("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam")]),e._v(" "),n("p",[e._v("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt")]),e._v(" "),n("ul",[n("li",[e._v("List Item 1")]),e._v(" "),n("li",[e._v("List Item 2")]),e._v(" "),n("li",[e._v("List Item 3")])]),e._v(" "),n("ol",[n("li",[e._v("List Item 1")]),e._v(" "),n("li",[e._v("List Item 2")]),e._v(" "),n("li",[e._v("List Item 3")])])]},proxy:!0}])},"sample-article",{overline:"Overline",headline:"Headline"},!1))],1)],1)}),[],!1,null,null,null);t.default=y.exports},65:function(e,t,n){var content=n(93);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(8).default)("e941fee0",content,!0,{sourceMap:!1})},66:function(e,t,n){var content=n(95);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(8).default)("5ad85b54",content,!0,{sourceMap:!1})},81:function(e,t,n){"use strict";var o={components:{ContentContainer:n(24).a},inheritAttrs:!1},r=n(6),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("content-container",e._g(e._b({staticClass:"article"},"content-container",e.$attrs,!1),e.$listeners),[e.$slots.header?n("header",[e._t("header")],2):e._e(),e._v(" "),e._t("default")],2)}),[],!1,null,null,null);t.a=component.exports},9:function(e,t,n){var content=n(15);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(8).default)("2491ef0a",content,!0,{sourceMap:!1})},92:function(e,t,n){"use strict";n(65)},93:function(e,t,n){var o=n(7)((function(i){return i[1]}));o.push([e.i,".design-default[data-v-6b04878c]{font-family:monospace}h1[data-v-6b04878c]{font-size:48px}h1[data-v-6b04878c],h2[data-v-6b04878c]{margin:10px 10px 20px}h2[data-v-6b04878c]{font-size:32px}h3[data-v-6b04878c]{font-size:24px}h3[data-v-6b04878c],h4[data-v-6b04878c]{margin:10px 10px 20px}h4[data-v-6b04878c]{font-size:20px}h5[data-v-6b04878c]{font-size:16px}h5[data-v-6b04878c],h6[data-v-6b04878c]{margin:10px}h6[data-v-6b04878c]{font-size:12px}",""]),o.locals={},e.exports=o},94:function(e,t,n){"use strict";n(66)},95:function(e,t,n){var o=n(7)((function(i){return i[1]}));o.push([e.i,"[data-v-f039faec] {font-family:monospace}[data-v-f039faec] ol,[data-v-f039faec] p,[data-v-f039faec] ul{margin:10px 0}",""]),o.locals={},e.exports=o}}]);