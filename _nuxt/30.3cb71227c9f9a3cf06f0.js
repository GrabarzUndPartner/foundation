(window.webpackJsonp=window.webpackJsonp||[]).push([[30,34,43,45,46],{171:function(t,e,n){var content=n(177);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(170).default)("2491ef0a",content,!0,{sourceMap:!1})},172:function(t,e,n){var content=n(182);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(170).default)("4f2019d2",content,!0,{sourceMap:!1})},173:function(t,e,n){var content=n(186);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(170).default)("8c27c136",content,!0,{sourceMap:!1})},174:function(t,e,n){"use strict";var o={inject:{parentLevel:{from:"parentLevel",default:1}},inheritAttrs:!1,props:{font:{type:[Object,Array],default:function(){return[]}}},data:function(){return{debug:!1}},computed:{contextLevel:function(){return t=(this.parentLevel-this.parentLevel%2)/2,Math.max(1,Math.min(t,6));var t}},mounted:function(){this.debug="debug-headline"in this.$route.query}},l=(n(181),n(168)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h"+t.contextLevel,t._g(t._b({directives:[{name:"font",rawName:"v-font",value:t.font,expression:"font"}],tag:"component",attrs:{"data-debug":t.debug}},"component",t.$attrs,!1),t.$listeners),[t._t("default"),t._v(" "),t.debug?n("pre",{attrs:{"data-debug-context-level":t.contextLevel}}):t._e()],2)}),[],!1,null,"3796ed0e",null);e.a=component.exports},175:function(t,e,n){"use strict";n.r(e);var o={components:{BaseHeadline:n(174).a},props:{overline:{type:String,default:"Atom Headline (Overline)"},text:{type:String,default:"Atom Headline (Text)"}}},l=(n(176),n(168)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("base-headline",t._g(t._b({staticClass:"atom-headline debug",attrs:{font:[t.$getFont("Raleway",700),t.$getFont("Poppins",500,"normal",{selector:".overline"})]}},"base-headline",t.$attrs,!1),t.$listeners),[t._t("default",(function(){return[t.overline?n("span",{staticClass:"overline"},[t._v(t._s(t.overline))]):t._e(),t._v(" "),n("span",[t._v(t._s(t.text))])]}))],2)}),[],!1,null,"6f6a1109",null);e.default=component.exports},176:function(t,e,n){"use strict";n(171)},177:function(t,e,n){var o=n(169)((function(i){return i[1]}));o.push([t.i,".atom-headline[data-v-6f6a1109]{position:relative;font-size:1em}.atom-headline span[data-v-6f6a1109]{display:block;font-size:calc(var(--font-size-text) / 16 * 1em)}.atom-headline span.overline[data-v-6f6a1109]{font-size:calc(var(--font-size-overline) / 16 * 1em)}h1[data-v-6f6a1109]{--font-size-overline:16;--font-size-text:48}h2[data-v-6f6a1109]{--font-size-overline:12;--font-size-text:32}h3[data-v-6f6a1109]{--font-size-overline:10;--font-size-text:28}h4[data-v-6f6a1109]{--font-size-text:24}h4[data-v-6f6a1109],h5[data-v-6f6a1109]{--font-size-overline:8}h5[data-v-6f6a1109]{--font-size-text:20}h6[data-v-6f6a1109]{--font-size-overline:8;--font-size-text:16}",""]),o.locals={},t.exports=o},179:function(t,e,n){var content=n(191);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(170).default)("3bfc04a2",content,!0,{sourceMap:!1})},181:function(t,e,n){"use strict";n(172)},182:function(t,e,n){var o=n(169)((function(i){return i[1]}));o.push([t.i,'[data-debug][data-v-3796ed0e]{position:relative}[data-debug] pre[data-v-3796ed0e]{z-index:10000;margin:0;font-family:monospace;font-weight:400}[data-debug] pre[data-v-3796ed0e],[data-debug] pre[data-v-3796ed0e]:before{position:absolute;top:0;right:0;bottom:0;left:0}[data-debug] pre[data-v-3796ed0e]:before{box-sizing:border-box;pointer-events:none;content:"";border:2px dotted #333}[data-debug] pre[data-v-3796ed0e]:after{position:absolute;right:0;bottom:0;z-index:10000;padding:5px;font-size:13px;color:#fff;letter-spacing:.1em;content:"H" attr(data-debug-context-level);background:#333}',""]),o.locals={},t.exports=o},185:function(t,e,n){"use strict";n(173)},186:function(t,e,n){var o=n(169)((function(i){return i[1]}));o.push([t.i,".lost-container .lost-flex-container{display:flex}@media (max-width:575px){.lost-container .lost-flex-container{padding:0 15px}}@media (--default-max){.lost-container .lost-flex-container{padding:0 15px}}@media (min-width:576px){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(540 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (--xs){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(540 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (min-width:768px){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(720 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (--sm){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(720 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (min-width:992px){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(960 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (--md){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(960 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (min-width:1200px){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(1140 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (--lg){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(1140 / 16 * 1em);margin-left:auto;margin-right:auto}}",""]),o.locals={},t.exports=o},187:function(t,e,n){"use strict";var o={inheritAttrs:!1,props:{tag:{type:String,required:!1,default:function(){return"div"}},container:{type:Boolean,default:!0}}},l=(n(185),n(168)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.tag,{tag:"div",staticClass:"lost-container"},[t._t("background"),t._v(" "),n("div",{class:{"lost-flex-container":t.container}},[t._t("default")],2)],2)}),[],!1,null,null,null);e.a=component.exports},189:function(t,e,n){"use strict";var o={props:{value:{type:String,default:null},font:{type:[Object,Array],default:function(){return[]}}}},l=n(168),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$slots.default?n("div",{directives:[{name:"font",rawName:"v-font",value:t.font,expression:"font"}]},[t._t("default",null,{value:t.value})],2):n("div",{directives:[{name:"font",rawName:"v-font",value:t.font,expression:"font"}],domProps:{innerHTML:t._s(t.value)}})}),[],!1,null,null,null);e.a=component.exports},190:function(t,e,n){"use strict";n(179)},191:function(t,e,n){var o=n(169)((function(i){return i[1]}));o.push([t.i,".atom-rich-text[data-v-3b9cbec2]{font-size:1em}.atom-rich-text[data-v-3b9cbec2] ol,.atom-rich-text[data-v-3b9cbec2] p,.atom-rich-text[data-v-3b9cbec2] ul{margin:0}.atom-rich-text[data-v-3b9cbec2] *+ol,.atom-rich-text[data-v-3b9cbec2] *+p,.atom-rich-text[data-v-3b9cbec2] *+ul{margin-top:calc(10 / 16 * 1em)}",""]),o.locals={},t.exports=o},196:function(t,e,n){"use strict";n.r(e);var o={components:{BaseRichText:n(189).a},inheritAttrs:!1},l=(n(190),n(168)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("base-rich-text",t._g(t._b({staticClass:"atom-rich-text",attrs:{font:[t.$getFont("Poppins"),t.$getFont("Poppins",700,"normal",{selector:"strong"}),t.$getFont("Poppins",400,"italic",{selector:"em"}),t.$getFont("Poppins",700,"italic",{selector:"strong em, em strong"})]}},"base-rich-text",t.$attrs,!1),t.$listeners))}),[],!1,null,"3b9cbec2",null);e.default=component.exports},277:function(t,e,n){var content=n(323);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(170).default)("3e6a06ad",content,!0,{sourceMap:!1})},322:function(t,e,n){"use strict";n(277)},323:function(t,e,n){var o=n(169)((function(i){return i[1]}));o.push([t.i,".organism-text[data-v-2ec35e35]{margin:calc(32 / 16 * 1em) 0}@media (min-width:768px){.organism-text[data-v-2ec35e35]{margin:calc(48 / 16 * 1em) 0}}@media (--sm){.organism-text[data-v-2ec35e35]{margin:calc(48 / 16 * 1em) 0}}.organism-text .content[data-v-2ec35e35],.organism-text .headline[data-v-2ec35e35]{margin-left:calc(8.325% + 1.25px) !important;flex-grow:0;flex-shrink:0;flex-basis:calc(83.25% - 2.5px);max-width:calc(83.25% - 2.5px);width:calc(83.25% - 2.5px)}.organism-text .content[data-v-2ec35e35]:nth-child(1n),.organism-text .headline[data-v-2ec35e35]:nth-child(1n){margin-right:15px;margin-left:0}.organism-text .content[data-v-2ec35e35]:last-child,.organism-text .headline[data-v-2ec35e35]:last-child{margin-right:0}.organism-text .content[data-v-2ec35e35]:nth-child(12n),.organism-text .headline[data-v-2ec35e35]:nth-child(12n){margin-right:0;margin-left:auto}@media (min-width:992px){.organism-text .content[data-v-2ec35e35],.organism-text .headline[data-v-2ec35e35]{margin-left:calc(16.65% + 2.5px) !important;flex-grow:0;flex-shrink:0;flex-basis:calc(66.6% - 5px);max-width:calc(66.6% - 5px);width:calc(66.6% - 5px)}.organism-text .content[data-v-2ec35e35]:nth-child(1n),.organism-text .headline[data-v-2ec35e35]:nth-child(1n){margin-right:15px;margin-left:0}.organism-text .content[data-v-2ec35e35]:last-child,.organism-text .headline[data-v-2ec35e35]:last-child{margin-right:0}.organism-text .content[data-v-2ec35e35]:nth-child(12n),.organism-text .headline[data-v-2ec35e35]:nth-child(12n){margin-right:0;margin-left:auto}}@media (--md){.organism-text .content[data-v-2ec35e35],.organism-text .headline[data-v-2ec35e35]{margin-left:calc(16.65% + 2.5px) !important;flex-grow:0;flex-shrink:0;flex-basis:calc(66.6% - 5px);max-width:calc(66.6% - 5px);width:calc(66.6% - 5px)}.organism-text .content[data-v-2ec35e35]:nth-child(1n),.organism-text .headline[data-v-2ec35e35]:nth-child(1n){margin-right:15px;margin-left:0}.organism-text .content[data-v-2ec35e35]:last-child,.organism-text .headline[data-v-2ec35e35]:last-child{margin-right:0}.organism-text .content[data-v-2ec35e35]:nth-child(12n),.organism-text .headline[data-v-2ec35e35]:nth-child(12n){margin-right:0;margin-left:auto}}",""]),o.locals={},t.exports=o},639:function(t,e,n){"use strict";n.r(e);var o=n(188),l=n(187),r=n(175),c=n(196),d={components:{CoreStructure:o.a,LayoutLostContainer:l.a,AtomHeadline:r.default,AtomRichText:c.default},props:{headline:{type:Object,default:function(){return{overline:"Overline",content:"Headline"}}},hideHeadline:{type:Boolean,default:!1},content:{type:String,default:"<p>Text</p>"}}},f=(n(322),n(168)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("core-structure",{staticClass:"organism-text",scopedSlots:t._u([t.headline?{key:"header",fn:function(){return[n("layout-lost-container",{directives:[{name:"show",rawName:"v-show",value:!t.hideHeadline,expression:"!hideHeadline"}]},[n("atom-headline",t._b({staticClass:"headline"},"atom-headline",t.headline,!1))],1)]},proxy:!0}:null,{key:"default",fn:function(){return[n("layout-lost-container",[n("atom-rich-text",{staticClass:"content",attrs:{value:t.content}})],1)]},proxy:!0}],null,!0)})}),[],!1,null,"2ec35e35",null);e.default=component.exports}}]);