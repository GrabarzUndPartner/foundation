(window.webpackJsonp=window.webpackJsonp||[]).push([[6,9,10,38,46],{10:function(t,e,n){var content=n(17);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("7448f315",content,!0,{sourceMap:!1})},11:function(t,e,n){var content=n(22);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("8c27c136",content,!0,{sourceMap:!1})},113:function(t,e,n){"use strict";n(82)},114:function(t,e,n){var o=n(7)((function(i){return i[1]}));o.push([t.i,".organism-text[data-v-cda8a058]{margin:calc(32 / 16 * 1em) 0}@media (min-width:768px){.organism-text[data-v-cda8a058]{margin:calc(48 / 16 * 1em) 0}}@media (--sm){.organism-text[data-v-cda8a058]{margin:calc(48 / 16 * 1em) 0}}.organism-text .content[data-v-cda8a058],.organism-text .headline[data-v-cda8a058]{margin-left:calc(8.325% + 1.25px) !important;flex-grow:0;flex-shrink:0;flex-basis:calc(83.25% - 2.5px);max-width:calc(83.25% - 2.5px);width:calc(83.25% - 2.5px)}.organism-text .content[data-v-cda8a058]:nth-child(1n),.organism-text .headline[data-v-cda8a058]:nth-child(1n){margin-right:15px;margin-left:0}.organism-text .content[data-v-cda8a058]:last-child,.organism-text .headline[data-v-cda8a058]:last-child{margin-right:0}.organism-text .content[data-v-cda8a058]:nth-child(12n),.organism-text .headline[data-v-cda8a058]:nth-child(12n){margin-right:0;margin-left:auto}@media (min-width:992px){.organism-text .content[data-v-cda8a058],.organism-text .headline[data-v-cda8a058]{margin-left:calc(16.65% + 2.5px) !important;flex-grow:0;flex-shrink:0;flex-basis:calc(66.6% - 5px);max-width:calc(66.6% - 5px);width:calc(66.6% - 5px)}.organism-text .content[data-v-cda8a058]:nth-child(1n),.organism-text .headline[data-v-cda8a058]:nth-child(1n){margin-right:15px;margin-left:0}.organism-text .content[data-v-cda8a058]:last-child,.organism-text .headline[data-v-cda8a058]:last-child{margin-right:0}.organism-text .content[data-v-cda8a058]:nth-child(12n),.organism-text .headline[data-v-cda8a058]:nth-child(12n){margin-right:0;margin-left:auto}}@media (--md){.organism-text .content[data-v-cda8a058],.organism-text .headline[data-v-cda8a058]{margin-left:calc(16.65% + 2.5px) !important;flex-grow:0;flex-shrink:0;flex-basis:calc(66.6% - 5px);max-width:calc(66.6% - 5px);width:calc(66.6% - 5px)}.organism-text .content[data-v-cda8a058]:nth-child(1n),.organism-text .headline[data-v-cda8a058]:nth-child(1n){margin-right:15px;margin-left:0}.organism-text .content[data-v-cda8a058]:last-child,.organism-text .headline[data-v-cda8a058]:last-child{margin-right:0}.organism-text .content[data-v-cda8a058]:nth-child(12n),.organism-text .headline[data-v-cda8a058]:nth-child(12n){margin-right:0;margin-left:auto}}",""]),o.locals={},t.exports=o},12:function(t,e,n){"use strict";var o={inject:{parentLevel:{from:"parentLevel",default:1}},inheritAttrs:!1,props:{font:{type:[Object,Array],default:()=>[]}},computed:{debug(){return"debug-headline"in this.$route.query},contextLevel(){return t=(this.parentLevel-this.parentLevel%2)/2,Math.max(1,Math.min(t,6));var t}},created(){const t=component=>component.tags?component:component&&t(component.$parent)||null,e=t(this);e&&(e.headline=!0)}};var l=o,r=(n(16),n(6)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h"+t.contextLevel,t._g(t._b({directives:[{name:"font",rawName:"v-font",value:t.font,expression:"font"}],tag:"component",attrs:{"data-debug":t.debug}},"component",t.$attrs,!1),t.$listeners),[t._t("default"),t._v(" "),t.debug?n("pre",{attrs:{"data-debug-context-level":t.contextLevel}}):t._e()],2)}),[],!1,null,"5576d804",null);e.a=component.exports},13:function(t,e,n){"use strict";n.r(e);var o={components:{BaseHeadline:n(12).a},props:{overline:{type:String,default:"Atom Headline (Overline)"},text:{type:String,default:"Atom Headline (Text)"}}},l=(n(14),n(6)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("base-headline",t._g(t._b({staticClass:"atom-headline debug",attrs:{font:[t.$getFont("Raleway",700),t.$getFont("Poppins",500,"normal",{selector:".overline"})]}},"base-headline",t.$attrs,!1),t.$listeners),[t._t("default",(function(){return[t.overline?n("span",{staticClass:"overline"},[t._v(t._s(t.overline))]):t._e(),t._v(" "),n("span",[t._v(t._s(t.text))])]}))],2)}),[],!1,null,"6f6a1109",null);e.default=component.exports},14:function(t,e,n){"use strict";n(9)},15:function(t,e,n){var o=n(7)((function(i){return i[1]}));o.push([t.i,".atom-headline[data-v-6f6a1109]{position:relative;font-size:1em}.atom-headline span[data-v-6f6a1109]{display:block;font-size:calc(var(--font-size-text) / 16 * 1em)}.atom-headline span.overline[data-v-6f6a1109]{font-size:calc(var(--font-size-overline) / 16 * 1em)}h1[data-v-6f6a1109]{--font-size-overline:16;--font-size-text:48}h2[data-v-6f6a1109]{--font-size-overline:12;--font-size-text:32}h3[data-v-6f6a1109]{--font-size-overline:10;--font-size-text:28}h4[data-v-6f6a1109]{--font-size-text:24}h4[data-v-6f6a1109],h5[data-v-6f6a1109]{--font-size-overline:8}h5[data-v-6f6a1109]{--font-size-text:20}h6[data-v-6f6a1109]{--font-size-overline:8;--font-size-text:16}",""]),o.locals={},t.exports=o},16:function(t,e,n){"use strict";n(10)},17:function(t,e,n){var o=n(7)((function(i){return i[1]}));o.push([t.i,'[data-debug][data-v-5576d804]{position:relative}[data-debug] pre[data-v-5576d804]{z-index:10000;margin:0}[data-debug] pre[data-v-5576d804],[data-debug] pre[data-v-5576d804]:before{position:absolute;top:0;right:0;bottom:0;left:0}[data-debug] pre[data-v-5576d804]:before{box-sizing:border-box;pointer-events:none;content:"";border:2px dotted #333}[data-debug] pre[data-v-5576d804]:after{position:absolute;top:0;right:0;z-index:10000;padding:10px 5px;font-size:12px;color:#fff;content:"H" attr(data-debug-context-level);background:#333}',""]),o.locals={},t.exports=o},18:function(t,e,n){var content=n(28);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("3bfc04a2",content,!0,{sourceMap:!1})},21:function(t,e,n){"use strict";n(11)},22:function(t,e,n){var o=n(7)((function(i){return i[1]}));o.push([t.i,".lost-container .lost-flex-container{display:flex}@media (max-width:575px){.lost-container .lost-flex-container{padding:0 15px}}@media (--default-max){.lost-container .lost-flex-container{padding:0 15px}}@media (min-width:576px){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(540 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (--xs){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(540 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (min-width:768px){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(720 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (--sm){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(720 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (min-width:992px){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(960 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (--md){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(960 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (min-width:1200px){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(1140 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (--lg){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(1140 / 16 * 1em);margin-left:auto;margin-right:auto}}",""]),o.locals={},t.exports=o},23:function(t,e,n){"use strict";var o={inheritAttrs:!1,props:{tag:{type:String,required:!1,default:()=>"div"},container:{type:Boolean,default:!0}}},l=(n(21),n(6)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.tag,{tag:"div",staticClass:"lost-container"},[t._t("background"),t._v(" "),n("div",{class:{"lost-flex-container":t.container}},[t._t("default")],2)],2)}),[],!1,null,null,null);e.a=component.exports},25:function(t,e,n){"use strict";var o={props:{value:{type:String,default:null},font:{type:[Object,Array],default:()=>[]}}},l=n(6),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$slots.default?n("div",{directives:[{name:"font",rawName:"v-font",value:t.font,expression:"font"}]},[t._t("default",null,{value:t.value})],2):n("div",{directives:[{name:"font",rawName:"v-font",value:t.font,expression:"font"}],domProps:{innerHTML:t._s(t.value)}})}),[],!1,null,null,null);e.a=component.exports},27:function(t,e,n){"use strict";n(18)},28:function(t,e,n){var o=n(7)((function(i){return i[1]}));o.push([t.i,".atom-rich-text[data-v-3b9cbec2]{font-size:1em}.atom-rich-text[data-v-3b9cbec2] ol,.atom-rich-text[data-v-3b9cbec2] p,.atom-rich-text[data-v-3b9cbec2] ul{margin:0}.atom-rich-text[data-v-3b9cbec2] *+ol,.atom-rich-text[data-v-3b9cbec2] *+p,.atom-rich-text[data-v-3b9cbec2] *+ul{margin-top:calc(10 / 16 * 1em)}",""]),o.locals={},t.exports=o},33:function(t,e,n){"use strict";n.r(e);var o={components:{BaseRichText:n(25).a},inheritAttrs:!1},l=(n(27),n(6)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("base-rich-text",t._g(t._b({staticClass:"atom-rich-text",attrs:{font:[t.$getFont("Poppins"),t.$getFont("Poppins",700,"normal",{selector:"strong"}),t.$getFont("Poppins",400,"italic",{selector:"em"}),t.$getFont("Poppins",700,"italic",{selector:"strong em, em strong"})]}},"base-rich-text",t.$attrs,!1),t.$listeners))}),[],!1,null,"3b9cbec2",null);e.default=component.exports},377:function(t,e,n){"use strict";n.r(e);var o=n(24),l=n(23),r=n(13),c=n(33),d={components:{CoreStructure:o.a,LayoutLostContainer:l.a,AtomHeadline:r.default,AtomRichText:c.default},props:{headline:{type:Object,default:()=>({overline:"Overline",content:"Headline"})},content:{type:String,default:"<p>Text</p>"}}},f=(n(113),n(6)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("core-structure",{staticClass:"organism-text",scopedSlots:t._u([{key:"header",fn:function(){return[n("layout-lost-container",[n("atom-headline",t._b({staticClass:"headline"},"atom-headline",t.headline,!1))],1)]},proxy:!0},{key:"default",fn:function(){return[n("layout-lost-container",[n("atom-rich-text",{staticClass:"content",attrs:{value:t.content}})],1)]},proxy:!0}])})}),[],!1,null,"cda8a058",null);e.default=component.exports},82:function(t,e,n){var content=n(114);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("4ebf267c",content,!0,{sourceMap:!1})},9:function(t,e,n){var content=n(15);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("2491ef0a",content,!0,{sourceMap:!1})}}]);