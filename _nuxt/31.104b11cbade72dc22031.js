(window.webpackJsonp=window.webpackJsonp||[]).push([[31,43],{180:function(t,n,e){var content=e(187);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(179).default)("050cc474",content,!0,{sourceMap:!1})},183:function(t,n,e){var content=e(195);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(179).default)("a3627b04",content,!0,{sourceMap:!1})},185:function(t,n,e){"use strict";e.r(n);var o={components:{BaseHeadline:e(184).a},props:{overline:{type:String,default:"Atom Headline (Overline)"},text:{type:String,default:"Atom Headline (Text)"}}},l=(e(186),e(177)),component=Object(l.a)(o,(function(){var t=this,n=t._self._c;return n("base-headline",t._g(t._b({staticClass:"atom-headline debug",attrs:{font:[t.$getFont("Raleway",700),t.$getFont("Poppins",500,"normal",{selector:".overline"})]}},"base-headline",t.$attrs,!1),t.$listeners),[t._t("default",(function(){return[t.overline?n("span",{staticClass:"overline"},[t._v(t._s(t.overline))]):t._e(),t._v(" "),n("span",[t._v(t._s(t.text))])]}))],2)}),[],!1,null,"6f6a1109",null);n.default=component.exports},186:function(t,n,e){"use strict";e(180)},187:function(t,n,e){var o=e(178)((function(i){return i[1]}));o.push([t.i,".atom-headline[data-v-6f6a1109]{position:relative;font-size:1em;}.atom-headline span[data-v-6f6a1109]{display:block;font-size:calc(var(--font-size-text) / 16 * 1em)}.atom-headline span.overline[data-v-6f6a1109]{font-size:calc(var(--font-size-overline) / 16 * 1em)}h1[data-v-6f6a1109]{--font-size-overline:16;--font-size-text:48}h2[data-v-6f6a1109]{--font-size-overline:12;--font-size-text:32}h3[data-v-6f6a1109]{--font-size-overline:10;--font-size-text:28}h4[data-v-6f6a1109]{--font-size-overline:8;--font-size-text:24}h5[data-v-6f6a1109]{--font-size-overline:8;--font-size-text:20}h6[data-v-6f6a1109]{--font-size-overline:8;--font-size-text:16}",""]),o.locals={},t.exports=o},188:function(t,n,e){var content=e(200);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(179).default)("16235337",content,!0,{sourceMap:!1})},194:function(t,n,e){"use strict";e(183)},195:function(t,n,e){var o=e(178)((function(i){return i[1]}));o.push([t.i,".layouts-lost-container .lost-flex-container[data-v-e7759bac]{display:flex;}@media (max-width: 575px){.layouts-lost-container .lost-flex-container[data-v-e7759bac]{padding-left:15px;padding-bottom:0;padding-right:15px;padding-top:0;}}@media (--default-max){.layouts-lost-container .lost-flex-container[data-v-e7759bac]{padding-left:15px;padding-bottom:0;padding-right:15px;padding-top:0;}}@media (min-width: 576px){.layouts-lost-container .lost-flex-container[data-v-e7759bac]{display:flex;flex-flow:row wrap;max-width:540px;margin-left:auto;margin-right:auto;}}@media (--xs){.layouts-lost-container .lost-flex-container[data-v-e7759bac]{display:flex;flex-flow:row wrap;max-width:540px;margin-left:auto;margin-right:auto;}}@media (min-width: 768px){.layouts-lost-container .lost-flex-container[data-v-e7759bac]{display:flex;flex-flow:row wrap;max-width:720px;margin-left:auto;margin-right:auto;}}@media (--sm){.layouts-lost-container .lost-flex-container[data-v-e7759bac]{display:flex;flex-flow:row wrap;max-width:720px;margin-left:auto;margin-right:auto;}}@media (min-width: 992px){.layouts-lost-container .lost-flex-container[data-v-e7759bac]{display:flex;flex-flow:row wrap;max-width:960px;margin-left:auto;margin-right:auto;}}@media (--md){.layouts-lost-container .lost-flex-container[data-v-e7759bac]{display:flex;flex-flow:row wrap;max-width:960px;margin-left:auto;margin-right:auto;}}@media (min-width: 1200px){.layouts-lost-container .lost-flex-container[data-v-e7759bac]{display:flex;flex-flow:row wrap;max-width:1140px;margin-left:auto;margin-right:auto;}}@media (--lg){.layouts-lost-container .lost-flex-container[data-v-e7759bac]{display:flex;flex-flow:row wrap;max-width:1140px;margin-left:auto;margin-right:auto;}}",""]),o.locals={},t.exports=o},196:function(t,n,e){"use strict";var o={inheritAttrs:!1,props:{tag:{type:String,required:!1,default:function(){return"div"}}}},l=(e(194),e(177)),component=Object(l.a)(o,(function(){var t=this,n=t._self._c;return n(t.tag,{tag:"div",staticClass:"layouts-lost-container"},[t._t("background"),t._v(" "),t._t("container",(function(){return[t.$slots.default?n("div",{staticClass:"lost-flex-container"},[t._t("default")],2):t._e()]}))],2)}),[],!1,null,"e7759bac",null);n.a=component.exports},198:function(t,n,e){"use strict";var o={props:{value:{type:String,default:null},font:{type:[Object,Array],default:function(){return[]}}}},l=e(177),component=Object(l.a)(o,(function(){var t=this,n=t._self._c;return t.$slots.default?n("div",{directives:[{name:"font",rawName:"v-font",value:t.font,expression:"font"}]},[t._t("default",null,{value:t.value})],2):n("div",{directives:[{name:"font",rawName:"v-font",value:t.font,expression:"font"}],domProps:{innerHTML:t._s(t.value)}})}),[],!1,null,null,null);n.a=component.exports},199:function(t,n,e){"use strict";e(188)},200:function(t,n,e){var o=e(178)((function(i){return i[1]}));o.push([t.i,".atom-rich-text[data-v-3b9cbec2]{font-size:1em;}.atom-rich-text[data-v-3b9cbec2] ol,.atom-rich-text[data-v-3b9cbec2] p,.atom-rich-text[data-v-3b9cbec2] ul{margin:0}.atom-rich-text[data-v-3b9cbec2] *+ol,.atom-rich-text[data-v-3b9cbec2] *+p,.atom-rich-text[data-v-3b9cbec2] *+ul{margin-top:calc(10 / 16 * 1em)}",""]),o.locals={},t.exports=o},205:function(t,n,e){"use strict";e.r(n);var o={components:{BaseRichText:e(198).a},inheritAttrs:!1},l=(e(199),e(177)),component=Object(l.a)(o,(function(){var t=this;return(0,t._self._c)("base-rich-text",t._g(t._b({staticClass:"atom-rich-text",attrs:{font:[t.$getFont("Poppins"),t.$getFont("Poppins",700,"normal",{selector:"strong"}),t.$getFont("Poppins",400,"italic",{selector:"em"}),t.$getFont("Poppins",700,"italic",{selector:"strong em, em strong"})]}},"base-rich-text",t.$attrs,!1),t.$listeners))}),[],!1,null,"3b9cbec2",null);n.default=component.exports},222:function(t,n,e){var o=e(7),l=e(223),r=e(120);o({target:"Array",proto:!0},{fill:l}),r("fill")},223:function(t,n,e){"use strict";var o=e(20),l=e(73),r=e(26);t.exports=function(t){for(var n=o(this),e=r(n),d=arguments.length,c=l(d>1?arguments[1]:void 0,e),f=d>2?arguments[2]:void 0,m=void 0===f?e:l(f,e);m>c;)n[c++]=t;return n}},287:function(t,n,e){var content=e(339);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(179).default)("03ef7e41",content,!0,{sourceMap:!1})},338:function(t,n,e){"use strict";e(287)},339:function(t,n,e){var o=e(178)((function(i){return i[1]}));o.push([t.i,".organism-infos[data-v-755d25a7]{margin:calc(32 / 16 * 1em) 0;}@media (min-width: 768px){.organism-infos[data-v-755d25a7]{margin-left:0;margin-bottom:calc(48 / 16 * 1em);margin-right:0;margin-top:calc(48 / 16 * 1em);}}@media (min-width: 768px){.organism-infos[data-v-755d25a7]{margin-left:0;margin-bottom:calc(48 / 16 * 1em);margin-right:0;margin-top:calc(48 / 16 * 1em);}}@media (--sm){.organism-infos[data-v-755d25a7]{margin-left:0;margin-bottom:calc(48 / 16 * 1em);margin-right:0;margin-top:calc(48 / 16 * 1em);}}.organism-infos .content[data-v-755d25a7],.organism-infos .headline[data-v-755d25a7]{margin-left:calc(99.9% * (-1/12 * -1) - (15px - 15px * (-1/12 * -1)) + 15px) !important;flex-grow:0;flex-shrink:0;flex-basis:calc(99.9% * 10/12 - (15px - 15px * 10/12));max-width:calc(99.9% * 10/12 - (15px - 15px * 10/12));width:calc(99.9% * 10/12 - (15px - 15px * 10/12));}.organism-infos .content[data-v-755d25a7]:nth-child(1n),.organism-infos .headline[data-v-755d25a7]:nth-child(1n){margin-right:15px;margin-left:0;}.organism-infos .content[data-v-755d25a7]:last-child,.organism-infos .headline[data-v-755d25a7]:last-child{margin-right:0;}.organism-infos .content[data-v-755d25a7]:nth-child(12n),.organism-infos .headline[data-v-755d25a7]:nth-child(12n){margin-right:0;margin-left:auto;}@media (min-width: 992px){.organism-infos .content[data-v-755d25a7],.organism-infos .headline[data-v-755d25a7]{margin-left:calc(99.9% * (-2/12 * -1) - (15px - 15px * (-2/12 * -1)) + 15px) !important;flex-grow:0;flex-shrink:0;flex-basis:calc(99.9% * 8/12 - (15px - 15px * 8/12));max-width:calc(99.9% * 8/12 - (15px - 15px * 8/12));width:calc(99.9% * 8/12 - (15px - 15px * 8/12));}.organism-infos .content[data-v-755d25a7]:nth-child(1n),.organism-infos .headline[data-v-755d25a7]:nth-child(1n){margin-right:15px;margin-left:0;}.organism-infos .content[data-v-755d25a7]:last-child,.organism-infos .headline[data-v-755d25a7]:last-child{margin-right:0;}.organism-infos .content[data-v-755d25a7]:nth-child(12n),.organism-infos .headline[data-v-755d25a7]:nth-child(12n){margin-right:0;margin-left:auto;}}@media (--md){.organism-infos .content[data-v-755d25a7],.organism-infos .headline[data-v-755d25a7]{margin-left:calc(99.9% * (-2/12 * -1) - (15px - 15px * (-2/12 * -1)) + 15px) !important;flex-grow:0;flex-shrink:0;flex-basis:calc(99.9% * 8/12 - (15px - 15px * 8/12));max-width:calc(99.9% * 8/12 - (15px - 15px * 8/12));width:calc(99.9% * 8/12 - (15px - 15px * 8/12));}.organism-infos .content[data-v-755d25a7]:nth-child(1n),.organism-infos .headline[data-v-755d25a7]:nth-child(1n){margin-right:15px;margin-left:0;}.organism-infos .content[data-v-755d25a7]:last-child,.organism-infos .headline[data-v-755d25a7]:last-child{margin-right:0;}.organism-infos .content[data-v-755d25a7]:nth-child(12n),.organism-infos .headline[data-v-755d25a7]:nth-child(12n){margin-right:0;margin-left:auto;}}.organism-infos .sub-content[data-v-755d25a7],.organism-infos .sub-headline[data-v-755d25a7]{margin-left:calc(99.9% * (-1/12 * -1) - (15px - 15px * (-1/12 * -1)) + 15px) !important;flex-grow:0;flex-shrink:0;flex-basis:calc(99.9% * 10/12 - (15px - 15px * 10/12));max-width:calc(99.9% * 10/12 - (15px - 15px * 10/12));width:calc(99.9% * 10/12 - (15px - 15px * 10/12));}.organism-infos .sub-content[data-v-755d25a7]:nth-child(1n),.organism-infos .sub-headline[data-v-755d25a7]:nth-child(1n){margin-right:15px;margin-left:0;}.organism-infos .sub-content[data-v-755d25a7]:last-child,.organism-infos .sub-headline[data-v-755d25a7]:last-child{margin-right:0;}.organism-infos .sub-content[data-v-755d25a7]:nth-child(12n),.organism-infos .sub-headline[data-v-755d25a7]:nth-child(12n){margin-right:0;margin-left:auto;}@media (min-width: 992px){.organism-infos .sub-content[data-v-755d25a7],.organism-infos .sub-headline[data-v-755d25a7]{margin-left:calc(99.9% * (-3/12 * -1) - (15px - 15px * (-3/12 * -1)) + 15px) !important;flex-grow:0;flex-shrink:0;flex-basis:calc(99.9% * 6/12 - (15px - 15px * 6/12));max-width:calc(99.9% * 6/12 - (15px - 15px * 6/12));width:calc(99.9% * 6/12 - (15px - 15px * 6/12));}.organism-infos .sub-content[data-v-755d25a7]:nth-child(1n),.organism-infos .sub-headline[data-v-755d25a7]:nth-child(1n){margin-right:15px;margin-left:0;}.organism-infos .sub-content[data-v-755d25a7]:last-child,.organism-infos .sub-headline[data-v-755d25a7]:last-child{margin-right:0;}.organism-infos .sub-content[data-v-755d25a7]:nth-child(12n),.organism-infos .sub-headline[data-v-755d25a7]:nth-child(12n){margin-right:0;margin-left:auto;}}@media (--md){.organism-infos .sub-content[data-v-755d25a7],.organism-infos .sub-headline[data-v-755d25a7]{margin-left:calc(99.9% * (-3/12 * -1) - (15px - 15px * (-3/12 * -1)) + 15px) !important;flex-grow:0;flex-shrink:0;flex-basis:calc(99.9% * 6/12 - (15px - 15px * 6/12));max-width:calc(99.9% * 6/12 - (15px - 15px * 6/12));width:calc(99.9% * 6/12 - (15px - 15px * 6/12));}.organism-infos .sub-content[data-v-755d25a7]:nth-child(1n),.organism-infos .sub-headline[data-v-755d25a7]:nth-child(1n){margin-right:15px;margin-left:0;}.organism-infos .sub-content[data-v-755d25a7]:last-child,.organism-infos .sub-headline[data-v-755d25a7]:last-child{margin-right:0;}.organism-infos .sub-content[data-v-755d25a7]:nth-child(12n),.organism-infos .sub-headline[data-v-755d25a7]:nth-child(12n){margin-right:0;margin-left:auto;}}",""]),o.locals={},t.exports=o},650:function(t,n,e){"use strict";e.r(n);e(192),e(222);var o=e(197),l=e(196),r=e(185),d=e(205),c={components:{LayoutLostContainer:l.a,CoreStructure:o.a,AtomHeadline:r.default,AtomRichText:d.default},props:{headline:{type:Object,default:function(){return{overline:"Overline",content:"Headline"}}},hideHeadline:{type:Boolean,default:!1},subHeadline:{type:Object,default:function(){return{overline:"Overline",content:"SubHeadline"}}},content:{type:String,default:"<p>Text</p>"},infos:{type:Array,default:function(){return Array(3).fill({}).map((function(t,n){return{overline:null,headline:"Sub Article "+(n+1),content:"<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>"}}))}}}},f=(e(338),e(177)),component=Object(f.a)(c,(function(){var t=this,n=t._self._c;return n("core-structure",{staticClass:"organism-infos",scopedSlots:t._u([t.headline?{key:"header",fn:function(){return[n("layout-lost-container",{directives:[{name:"show",rawName:"v-show",value:!t.hideHeadline,expression:"!hideHeadline"}]},[n("atom-headline",t._b({staticClass:"headline"},"atom-headline",t.headline,!1))],1)]},proxy:!0}:null,{key:"default",fn:function(){return[n("layout-lost-container",[n("atom-rich-text",{staticClass:"content",attrs:{value:t.content}}),t._v(" "),n("core-structure",{scopedSlots:t._u([{key:"header",fn:function(){return[n("atom-headline",t._b({staticClass:"sub-headline"},"atom-headline",t.subHeadline,!1))]},proxy:!0}])},[t._v(" "),t._l(t.infos,(function(e,o){var l=e.overline,r=e.headline,content=e.content;return n("core-structure",{key:o,scopedSlots:t._u([{key:"header",fn:function(){return[n("atom-headline",{staticClass:"sub-content",attrs:{text:r,overline:l}})]},proxy:!0},{key:"default",fn:function(){return[n("atom-rich-text",{staticClass:"sub-content",attrs:{value:content}})]},proxy:!0}],null,!0)})}))],2)],1)]},proxy:!0}],null,!0)})}),[],!1,null,"755d25a7",null);n.default=component.exports}}]);