(window.webpackJsonp=window.webpackJsonp||[]).push([[32,39],{171:function(t,e,n){var content=n(177);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(170).default)("65c21114",content,!0,{sourceMap:!1})},172:function(t,e,n){var content=n(183);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(170).default)("2491ef0a",content,!0,{sourceMap:!1})},173:function(t,e,n){"use strict";var o={inject:{parentLevel:{from:"parentLevel",default:1}},inheritAttrs:!1,props:{font:{type:[Object,Array],default:function(){return[]}}},computed:{debug:function(){return"debug-headline"in this.$route.query},contextLevel:function(){return t=(this.parentLevel-this.parentLevel%2)/2,Math.max(1,Math.min(t,6));var t}}},r=(n(176),n(168)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h"+t.contextLevel,t._g(t._b({directives:[{name:"font",rawName:"v-font",value:t.font,expression:"font"}],tag:"component",attrs:{"data-debug":t.debug}},"component",t.$attrs,!1),t.$listeners),[t._t("default"),t._v(" "),t.debug?n("pre",{attrs:{"data-debug-context-level":t.contextLevel}}):t._e()],2)}),[],!1,null,"3032ca40",null);e.a=component.exports},176:function(t,e,n){"use strict";n(171)},177:function(t,e,n){var o=n(169)((function(i){return i[1]}));o.push([t.i,'[data-debug][data-v-3032ca40]{position:relative}[data-debug] pre[data-v-3032ca40]{z-index:10000;margin:0}[data-debug] pre[data-v-3032ca40],[data-debug] pre[data-v-3032ca40]:before{position:absolute;top:0;right:0;bottom:0;left:0}[data-debug] pre[data-v-3032ca40]:before{box-sizing:border-box;pointer-events:none;content:"";border:2px dotted #333}[data-debug] pre[data-v-3032ca40]:after{position:absolute;top:0;right:0;z-index:10000;padding:10px 5px;font-size:12px;color:#fff;content:"H" attr(data-debug-context-level);background:#333}',""]),o.locals={},t.exports=o},179:function(t,e,n){var content=n(198);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(170).default)("8c27c136",content,!0,{sourceMap:!1})},181:function(t,e,n){"use strict";n.r(e);var o={components:{BaseHeadline:n(173).a},props:{overline:{type:String,default:"Atom Headline (Overline)"},text:{type:String,default:"Atom Headline (Text)"}}},r=(n(182),n(168)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("base-headline",t._g(t._b({staticClass:"atom-headline debug",attrs:{font:[t.$getFont("Raleway",700),t.$getFont("Poppins",500,"normal",{selector:".overline"})]}},"base-headline",t.$attrs,!1),t.$listeners),[t._t("default",(function(){return[t.overline?n("span",{staticClass:"overline"},[t._v(t._s(t.overline))]):t._e(),t._v(" "),n("span",[t._v(t._s(t.text))])]}))],2)}),[],!1,null,"6f6a1109",null);e.default=component.exports},182:function(t,e,n){"use strict";n(172)},183:function(t,e,n){var o=n(169)((function(i){return i[1]}));o.push([t.i,".atom-headline[data-v-6f6a1109]{position:relative;font-size:1em}.atom-headline span[data-v-6f6a1109]{display:block;font-size:calc(var(--font-size-text) / 16 * 1em)}.atom-headline span.overline[data-v-6f6a1109]{font-size:calc(var(--font-size-overline) / 16 * 1em)}h1[data-v-6f6a1109]{--font-size-overline:16;--font-size-text:48}h2[data-v-6f6a1109]{--font-size-overline:12;--font-size-text:32}h3[data-v-6f6a1109]{--font-size-overline:10;--font-size-text:28}h4[data-v-6f6a1109]{--font-size-text:24}h4[data-v-6f6a1109],h5[data-v-6f6a1109]{--font-size-overline:8}h5[data-v-6f6a1109]{--font-size-text:20}h6[data-v-6f6a1109]{--font-size-overline:8;--font-size-text:16}",""]),o.locals={},t.exports=o},184:function(t,e,n){var content=n(203);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(170).default)("3bfc04a2",content,!0,{sourceMap:!1})},190:function(t,e,n){"use strict";var o={props:{value:{type:String,default:null},font:{type:[Object,Array],default:function(){return[]}}}},r=n(168),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$slots.default?n("div",{directives:[{name:"font",rawName:"v-font",value:t.font,expression:"font"}]},[t._t("default",null,{value:t.value})],2):n("div",{directives:[{name:"font",rawName:"v-font",value:t.font,expression:"font"}],domProps:{innerHTML:t._s(t.value)}})}),[],!1,null,null,null);e.a=component.exports},197:function(t,e,n){"use strict";n(179)},198:function(t,e,n){var o=n(169)((function(i){return i[1]}));o.push([t.i,".lost-container .lost-flex-container{display:flex}@media (max-width:575px){.lost-container .lost-flex-container{padding:0 15px}}@media (--default-max){.lost-container .lost-flex-container{padding:0 15px}}@media (min-width:576px){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(540 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (--xs){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(540 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (min-width:768px){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(720 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (--sm){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(720 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (min-width:992px){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(960 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (--md){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(960 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (min-width:1200px){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(1140 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (--lg){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(1140 / 16 * 1em);margin-left:auto;margin-right:auto}}",""]),o.locals={},t.exports=o},199:function(t,e,n){"use strict";var o={inheritAttrs:!1,props:{tag:{type:String,required:!1,default:function(){return"div"}},container:{type:Boolean,default:!0}}},r=(n(197),n(168)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.tag,{tag:"div",staticClass:"lost-container"},[t._t("background"),t._v(" "),n("div",{class:{"lost-flex-container":t.container}},[t._t("default")],2)],2)}),[],!1,null,null,null);e.a=component.exports},202:function(t,e,n){"use strict";n(184)},203:function(t,e,n){var o=n(169)((function(i){return i[1]}));o.push([t.i,".atom-rich-text[data-v-3b9cbec2]{font-size:1em}.atom-rich-text[data-v-3b9cbec2] ol,.atom-rich-text[data-v-3b9cbec2] p,.atom-rich-text[data-v-3b9cbec2] ul{margin:0}.atom-rich-text[data-v-3b9cbec2] *+ol,.atom-rich-text[data-v-3b9cbec2] *+p,.atom-rich-text[data-v-3b9cbec2] *+ul{margin-top:calc(10 / 16 * 1em)}",""]),o.locals={},t.exports=o},207:function(t,e,n){"use strict";n.r(e);var o={components:{BaseRichText:n(190).a},inheritAttrs:!1},r=(n(202),n(168)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("base-rich-text",t._g(t._b({staticClass:"atom-rich-text",attrs:{font:[t.$getFont("Poppins"),t.$getFont("Poppins",700,"normal",{selector:"strong"}),t.$getFont("Poppins",400,"italic",{selector:"em"}),t.$getFont("Poppins",700,"italic",{selector:"strong em, em strong"})]}},"base-rich-text",t.$attrs,!1),t.$listeners))}),[],!1,null,"3b9cbec2",null);e.default=component.exports},232:function(t,e,n){var o=n(7),r=n(233),l=n(110);o({target:"Array",proto:!0},{fill:r}),l("fill")},233:function(t,e,n){"use strict";var o=n(24),r=n(71),l=n(35);t.exports=function(t){for(var e=o(this),n=l(e),c=arguments.length,d=r(c>1?arguments[1]:void 0,n),f=c>2?arguments[2]:void 0,m=void 0===f?n:r(f,n);m>d;)e[d++]=t;return e}},439:function(t,e,n){var content=n(635);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(170).default)("31c3abc1",content,!0,{sourceMap:!1})},634:function(t,e,n){"use strict";n(439)},635:function(t,e,n){var o=n(169)((function(i){return i[1]}));o.push([t.i,".organism-infos[data-v-5b15472c]{margin:calc(32 / 16 * 1em) 0}@media (min-width:768px){.organism-infos[data-v-5b15472c]{margin:calc(48 / 16 * 1em) 0}}@media (--sm){.organism-infos[data-v-5b15472c]{margin:calc(48 / 16 * 1em) 0}}.organism-infos .content[data-v-5b15472c],.organism-infos .headline[data-v-5b15472c]{margin-left:calc(8.325% + 1.25px) !important;flex-grow:0;flex-shrink:0;flex-basis:calc(83.25% - 2.5px);max-width:calc(83.25% - 2.5px);width:calc(83.25% - 2.5px)}.organism-infos .content[data-v-5b15472c]:nth-child(1n),.organism-infos .headline[data-v-5b15472c]:nth-child(1n){margin-right:15px;margin-left:0}.organism-infos .content[data-v-5b15472c]:last-child,.organism-infos .headline[data-v-5b15472c]:last-child{margin-right:0}.organism-infos .content[data-v-5b15472c]:nth-child(12n),.organism-infos .headline[data-v-5b15472c]:nth-child(12n){margin-right:0;margin-left:auto}@media (min-width:992px){.organism-infos .content[data-v-5b15472c],.organism-infos .headline[data-v-5b15472c]{margin-left:calc(16.65% + 2.5px) !important;flex-grow:0;flex-shrink:0;flex-basis:calc(66.6% - 5px);max-width:calc(66.6% - 5px);width:calc(66.6% - 5px)}.organism-infos .content[data-v-5b15472c]:nth-child(1n),.organism-infos .headline[data-v-5b15472c]:nth-child(1n){margin-right:15px;margin-left:0}.organism-infos .content[data-v-5b15472c]:last-child,.organism-infos .headline[data-v-5b15472c]:last-child{margin-right:0}.organism-infos .content[data-v-5b15472c]:nth-child(12n),.organism-infos .headline[data-v-5b15472c]:nth-child(12n){margin-right:0;margin-left:auto}}@media (--md){.organism-infos .content[data-v-5b15472c],.organism-infos .headline[data-v-5b15472c]{margin-left:calc(16.65% + 2.5px) !important;flex-grow:0;flex-shrink:0;flex-basis:calc(66.6% - 5px);max-width:calc(66.6% - 5px);width:calc(66.6% - 5px)}.organism-infos .content[data-v-5b15472c]:nth-child(1n),.organism-infos .headline[data-v-5b15472c]:nth-child(1n){margin-right:15px;margin-left:0}.organism-infos .content[data-v-5b15472c]:last-child,.organism-infos .headline[data-v-5b15472c]:last-child{margin-right:0}.organism-infos .content[data-v-5b15472c]:nth-child(12n),.organism-infos .headline[data-v-5b15472c]:nth-child(12n){margin-right:0;margin-left:auto}}.organism-infos .sub-content[data-v-5b15472c]{margin-left:calc(8.325% + 1.25px) !important;flex-grow:0;flex-shrink:0;flex-basis:calc(83.25% - 2.5px);max-width:calc(83.25% - 2.5px);width:calc(83.25% - 2.5px)}.organism-infos .sub-content[data-v-5b15472c]:nth-child(1n){margin-right:15px;margin-left:0}.organism-infos .sub-content[data-v-5b15472c]:last-child{margin-right:0}.organism-infos .sub-content[data-v-5b15472c]:nth-child(12n){margin-right:0;margin-left:auto}@media (min-width:992px){.organism-infos .sub-content[data-v-5b15472c]{margin-left:calc(24.975% + 3.75px) !important;flex-grow:0;flex-shrink:0;flex-basis:calc(49.95% - 7.5px);max-width:calc(49.95% - 7.5px);width:calc(49.95% - 7.5px)}.organism-infos .sub-content[data-v-5b15472c]:nth-child(1n){margin-right:15px;margin-left:0}.organism-infos .sub-content[data-v-5b15472c]:last-child{margin-right:0}.organism-infos .sub-content[data-v-5b15472c]:nth-child(12n){margin-right:0;margin-left:auto}}@media (--md){.organism-infos .sub-content[data-v-5b15472c]{margin-left:calc(24.975% + 3.75px) !important;flex-grow:0;flex-shrink:0;flex-basis:calc(49.95% - 7.5px);max-width:calc(49.95% - 7.5px);width:calc(49.95% - 7.5px)}.organism-infos .sub-content[data-v-5b15472c]:nth-child(1n){margin-right:15px;margin-left:0}.organism-infos .sub-content[data-v-5b15472c]:last-child{margin-right:0}.organism-infos .sub-content[data-v-5b15472c]:nth-child(12n){margin-right:0;margin-left:auto}}",""]),o.locals={},t.exports=o},678:function(t,e,n){"use strict";n.r(e);n(180),n(232);var o=n(189),r=n(199),l=n(181),c=n(207),d={components:{LayoutLostContainer:r.a,CoreStructure:o.a,AtomHeadline:l.default,AtomRichText:c.default},props:{headline:{type:Object,default:function(){return{overline:"Overline",content:"Headline"}}},content:{type:String,default:"<p>Text</p>"},infos:{type:Array,default:function(){return Array(3).fill({}).map((function(t,e){return{overline:null,headline:"Sub Article "+(e+1),content:"<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>"}}))}}}},f=(n(634),n(168)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("core-structure",{staticClass:"organism-infos",scopedSlots:t._u([{key:"header",fn:function(){return[n("layout-lost-container",[n("atom-headline",t._b({staticClass:"headline"},"atom-headline",t.headline,!1))],1)]},proxy:!0},{key:"default",fn:function(){return[n("layout-lost-container",[n("atom-rich-text",{staticClass:"content",attrs:{value:t.content}}),t._v(" "),n("core-structure",t._l(t.infos,(function(e,o){var r=e.overline,l=e.headline,content=e.content;return n("core-structure",{key:o,scopedSlots:t._u([{key:"header",fn:function(){return[n("atom-headline",{staticClass:"sub-content",attrs:{text:l,overline:r}})]},proxy:!0},{key:"default",fn:function(){return[n("atom-rich-text",{staticClass:"sub-content",attrs:{value:content}})]},proxy:!0}],null,!0)})})),1)],1)]},proxy:!0}])})}),[],!1,null,"5b15472c",null);e.default=component.exports}}]);