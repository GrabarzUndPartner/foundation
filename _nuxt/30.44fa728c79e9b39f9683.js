(window.webpackJsonp=window.webpackJsonp||[]).push([[30,34,43,45,46],{180:function(t,e,n){var content=n(187);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(179).default)("050cc474",content,!0,{sourceMap:!1})},181:function(t,e,n){var content=n(191);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(179).default)("990e4088",content,!0,{sourceMap:!1})},183:function(t,e,n){var content=n(195);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(179).default)("a3627b04",content,!0,{sourceMap:!1})},184:function(t,e,n){"use strict";var o={inject:{parentLevel:{from:"parentLevel",default:1}},inheritAttrs:!1,props:{font:{type:[Object,Array],default:function(){return[]}}},data:function(){return{debug:!1}},computed:{contextLevel:function(){return t=(this.parentLevel-this.parentLevel%2)/2,Math.max(1,Math.min(t,6));var t}},mounted:function(){this.debug="debug-headline"in this.$route.query}},l=(n(190),n(177)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("h"+t.contextLevel,t._g(t._b({directives:[{name:"font",rawName:"v-font",value:t.font,expression:"font"}],tag:"component",attrs:{"data-debug":t.debug}},"component",t.$attrs,!1),t.$listeners),[t._t("default"),t._v(" "),t.debug?e("pre",{attrs:{"data-debug-context-level":t.contextLevel}}):t._e()],2)}),[],!1,null,"3796ed0e",null);e.a=component.exports},185:function(t,e,n){"use strict";n.r(e);var o={components:{BaseHeadline:n(184).a},props:{overline:{type:String,default:"Atom Headline (Overline)"},text:{type:String,default:"Atom Headline (Text)"}}},l=(n(186),n(177)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("base-headline",t._g(t._b({staticClass:"atom-headline debug",attrs:{font:[t.$getFont("Raleway",700),t.$getFont("Poppins",500,"normal",{selector:".overline"})]}},"base-headline",t.$attrs,!1),t.$listeners),[t._t("default",(function(){return[t.overline?e("span",{staticClass:"overline"},[t._v(t._s(t.overline))]):t._e(),t._v(" "),e("span",[t._v(t._s(t.text))])]}))],2)}),[],!1,null,"6f6a1109",null);e.default=component.exports},186:function(t,e,n){"use strict";n(180)},187:function(t,e,n){var o=n(178)((function(i){return i[1]}));o.push([t.i,".atom-headline[data-v-6f6a1109]{position:relative;font-size:1em;}.atom-headline span[data-v-6f6a1109]{display:block;font-size:calc(var(--font-size-text) / 16 * 1em)}.atom-headline span.overline[data-v-6f6a1109]{font-size:calc(var(--font-size-overline) / 16 * 1em)}h1[data-v-6f6a1109]{--font-size-overline:16;--font-size-text:48}h2[data-v-6f6a1109]{--font-size-overline:12;--font-size-text:32}h3[data-v-6f6a1109]{--font-size-overline:10;--font-size-text:28}h4[data-v-6f6a1109]{--font-size-overline:8;--font-size-text:24}h5[data-v-6f6a1109]{--font-size-overline:8;--font-size-text:20}h6[data-v-6f6a1109]{--font-size-overline:8;--font-size-text:16}",""]),o.locals={},t.exports=o},188:function(t,e,n){var content=n(200);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(179).default)("16235337",content,!0,{sourceMap:!1})},190:function(t,e,n){"use strict";n(181)},191:function(t,e,n){var o=n(178)((function(i){return i[1]}));o.push([t.i,'[data-debug][data-v-3796ed0e]{position:relative;}[data-debug] pre[data-v-3796ed0e]{position:absolute;top:0;right:0;bottom:0;left:0;z-index:10000;margin:0;font-family:monospace;font-weight:400;}[data-debug] pre[data-v-3796ed0e]:before{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box;pointer-events:none;content:"";border:2px dotted #333}[data-debug] pre[data-v-3796ed0e]:after{position:absolute;right:0;bottom:0;z-index:10000;padding:5px;font-size:13px;color:#fff;letter-spacing:.1em;content:"H" attr(data-debug-context-level);background:#333}',""]),o.locals={},t.exports=o},194:function(t,e,n){"use strict";n(183)},195:function(t,e,n){var o=n(178)((function(i){return i[1]}));o.push([t.i,".layouts-lost-container .lost-flex-container[data-v-e7759bac]{display:flex;}@media (max-width: 575px){.layouts-lost-container .lost-flex-container[data-v-e7759bac]{padding-left:15px;padding-bottom:0;padding-right:15px;padding-top:0;}}@media (--default-max){.layouts-lost-container .lost-flex-container[data-v-e7759bac]{padding-left:15px;padding-bottom:0;padding-right:15px;padding-top:0;}}@media (min-width: 576px){.layouts-lost-container .lost-flex-container[data-v-e7759bac]{display:flex;flex-flow:row wrap;max-width:540px;margin-left:auto;margin-right:auto;}}@media (--xs){.layouts-lost-container .lost-flex-container[data-v-e7759bac]{display:flex;flex-flow:row wrap;max-width:540px;margin-left:auto;margin-right:auto;}}@media (min-width: 768px){.layouts-lost-container .lost-flex-container[data-v-e7759bac]{display:flex;flex-flow:row wrap;max-width:720px;margin-left:auto;margin-right:auto;}}@media (--sm){.layouts-lost-container .lost-flex-container[data-v-e7759bac]{display:flex;flex-flow:row wrap;max-width:720px;margin-left:auto;margin-right:auto;}}@media (min-width: 992px){.layouts-lost-container .lost-flex-container[data-v-e7759bac]{display:flex;flex-flow:row wrap;max-width:960px;margin-left:auto;margin-right:auto;}}@media (--md){.layouts-lost-container .lost-flex-container[data-v-e7759bac]{display:flex;flex-flow:row wrap;max-width:960px;margin-left:auto;margin-right:auto;}}@media (min-width: 1200px){.layouts-lost-container .lost-flex-container[data-v-e7759bac]{display:flex;flex-flow:row wrap;max-width:1140px;margin-left:auto;margin-right:auto;}}@media (--lg){.layouts-lost-container .lost-flex-container[data-v-e7759bac]{display:flex;flex-flow:row wrap;max-width:1140px;margin-left:auto;margin-right:auto;}}",""]),o.locals={},t.exports=o},196:function(t,e,n){"use strict";var o={inheritAttrs:!1,props:{tag:{type:String,required:!1,default:function(){return"div"}}}},l=(n(194),n(177)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e(t.tag,{tag:"div",staticClass:"layouts-lost-container"},[t._t("background"),t._v(" "),t._t("container",(function(){return[t.$slots.default?e("div",{staticClass:"lost-flex-container"},[t._t("default")],2):t._e()]}))],2)}),[],!1,null,"e7759bac",null);e.a=component.exports},198:function(t,e,n){"use strict";var o={props:{value:{type:String,default:null},font:{type:[Object,Array],default:function(){return[]}}}},l=n(177),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return t.$slots.default?e("div",{directives:[{name:"font",rawName:"v-font",value:t.font,expression:"font"}]},[t._t("default",null,{value:t.value})],2):e("div",{directives:[{name:"font",rawName:"v-font",value:t.font,expression:"font"}],domProps:{innerHTML:t._s(t.value)}})}),[],!1,null,null,null);e.a=component.exports},199:function(t,e,n){"use strict";n(188)},200:function(t,e,n){var o=n(178)((function(i){return i[1]}));o.push([t.i,".atom-rich-text[data-v-3b9cbec2]{font-size:1em;}.atom-rich-text[data-v-3b9cbec2] ol,.atom-rich-text[data-v-3b9cbec2] p,.atom-rich-text[data-v-3b9cbec2] ul{margin:0}.atom-rich-text[data-v-3b9cbec2] *+ol,.atom-rich-text[data-v-3b9cbec2] *+p,.atom-rich-text[data-v-3b9cbec2] *+ul{margin-top:calc(10 / 16 * 1em)}",""]),o.locals={},t.exports=o},205:function(t,e,n){"use strict";n.r(e);var o={components:{BaseRichText:n(198).a},inheritAttrs:!1},l=(n(199),n(177)),component=Object(l.a)(o,(function(){var t=this;return(0,t._self._c)("base-rich-text",t._g(t._b({staticClass:"atom-rich-text",attrs:{font:[t.$getFont("Poppins"),t.$getFont("Poppins",700,"normal",{selector:"strong"}),t.$getFont("Poppins",400,"italic",{selector:"em"}),t.$getFont("Poppins",700,"italic",{selector:"strong em, em strong"})]}},"base-rich-text",t.$attrs,!1),t.$listeners))}),[],!1,null,"3b9cbec2",null);e.default=component.exports},283:function(t,e,n){var content=n(331);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(179).default)("6e603c76",content,!0,{sourceMap:!1})},330:function(t,e,n){"use strict";n(283)},331:function(t,e,n){var o=n(178)((function(i){return i[1]}));o.push([t.i,".organism-text[data-v-2ec35e35]{margin:calc(32 / 16 * 1em) 0;}@media (min-width: 768px){.organism-text[data-v-2ec35e35]{margin-left:0;margin-bottom:calc(48 / 16 * 1em);margin-right:0;margin-top:calc(48 / 16 * 1em);}}@media (min-width: 768px){.organism-text[data-v-2ec35e35]{margin-left:0;margin-bottom:calc(48 / 16 * 1em);margin-right:0;margin-top:calc(48 / 16 * 1em);}}@media (--sm){.organism-text[data-v-2ec35e35]{margin-left:0;margin-bottom:calc(48 / 16 * 1em);margin-right:0;margin-top:calc(48 / 16 * 1em);}}.organism-text .content[data-v-2ec35e35],.organism-text .headline[data-v-2ec35e35]{margin-left:calc(99.9% * (-1/12 * -1) - (15px - 15px * (-1/12 * -1)) + 15px) !important;flex-grow:0;flex-shrink:0;flex-basis:calc(99.9% * 10/12 - (15px - 15px * 10/12));max-width:calc(99.9% * 10/12 - (15px - 15px * 10/12));width:calc(99.9% * 10/12 - (15px - 15px * 10/12));}.organism-text .content[data-v-2ec35e35]:nth-child(1n),.organism-text .headline[data-v-2ec35e35]:nth-child(1n){margin-right:15px;margin-left:0;}.organism-text .content[data-v-2ec35e35]:last-child,.organism-text .headline[data-v-2ec35e35]:last-child{margin-right:0;}.organism-text .content[data-v-2ec35e35]:nth-child(12n),.organism-text .headline[data-v-2ec35e35]:nth-child(12n){margin-right:0;margin-left:auto;}@media (min-width: 992px){.organism-text .content[data-v-2ec35e35],.organism-text .headline[data-v-2ec35e35]{margin-left:calc(99.9% * (-2/12 * -1) - (15px - 15px * (-2/12 * -1)) + 15px) !important;flex-grow:0;flex-shrink:0;flex-basis:calc(99.9% * 8/12 - (15px - 15px * 8/12));max-width:calc(99.9% * 8/12 - (15px - 15px * 8/12));width:calc(99.9% * 8/12 - (15px - 15px * 8/12));}.organism-text .content[data-v-2ec35e35]:nth-child(1n),.organism-text .headline[data-v-2ec35e35]:nth-child(1n){margin-right:15px;margin-left:0;}.organism-text .content[data-v-2ec35e35]:last-child,.organism-text .headline[data-v-2ec35e35]:last-child{margin-right:0;}.organism-text .content[data-v-2ec35e35]:nth-child(12n),.organism-text .headline[data-v-2ec35e35]:nth-child(12n){margin-right:0;margin-left:auto;}}@media (--md){.organism-text .content[data-v-2ec35e35],.organism-text .headline[data-v-2ec35e35]{margin-left:calc(99.9% * (-2/12 * -1) - (15px - 15px * (-2/12 * -1)) + 15px) !important;flex-grow:0;flex-shrink:0;flex-basis:calc(99.9% * 8/12 - (15px - 15px * 8/12));max-width:calc(99.9% * 8/12 - (15px - 15px * 8/12));width:calc(99.9% * 8/12 - (15px - 15px * 8/12));}.organism-text .content[data-v-2ec35e35]:nth-child(1n),.organism-text .headline[data-v-2ec35e35]:nth-child(1n){margin-right:15px;margin-left:0;}.organism-text .content[data-v-2ec35e35]:last-child,.organism-text .headline[data-v-2ec35e35]:last-child{margin-right:0;}.organism-text .content[data-v-2ec35e35]:nth-child(12n),.organism-text .headline[data-v-2ec35e35]:nth-child(12n){margin-right:0;margin-left:auto;}}",""]),o.locals={},t.exports=o},648:function(t,e,n){"use strict";n.r(e);var o=n(197),l=n(196),r=n(185),c=n(205),d={components:{CoreStructure:o.a,LayoutLostContainer:l.a,AtomHeadline:r.default,AtomRichText:c.default},props:{headline:{type:Object,default:function(){return{overline:"Overline",content:"Headline"}}},hideHeadline:{type:Boolean,default:!1},content:{type:String,default:"<p>Text</p>"}}},f=(n(330),n(177)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("core-structure",{staticClass:"organism-text",scopedSlots:t._u([t.headline?{key:"header",fn:function(){return[e("layout-lost-container",{directives:[{name:"show",rawName:"v-show",value:!t.hideHeadline,expression:"!hideHeadline"}]},[e("atom-headline",t._b({staticClass:"headline"},"atom-headline",t.headline,!1))],1)]},proxy:!0}:null,{key:"default",fn:function(){return[e("layout-lost-container",[e("atom-rich-text",{staticClass:"content",attrs:{value:t.content}})],1)]},proxy:!0}],null,!0)})}),[],!1,null,"2ec35e35",null);e.default=component.exports}}]);