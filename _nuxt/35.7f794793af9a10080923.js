(window.webpackJsonp=window.webpackJsonp||[]).push([[35,38,45,46],{171:function(e,t,l){var content=l(177);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(170).default)("2491ef0a",content,!0,{sourceMap:!1})},172:function(e,t,l){var content=l(182);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(170).default)("4f2019d2",content,!0,{sourceMap:!1})},173:function(e,t,l){var content=l(186);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(170).default)("8c27c136",content,!0,{sourceMap:!1})},174:function(e,t,l){"use strict";var n={inject:{parentLevel:{from:"parentLevel",default:1}},inheritAttrs:!1,props:{font:{type:[Object,Array],default:function(){return[]}}},data:function(){return{debug:!1}},computed:{contextLevel:function(){return e=(this.parentLevel-this.parentLevel%2)/2,Math.max(1,Math.min(e,6));var e}},mounted:function(){this.debug="debug-headline"in this.$route.query}},r=(l(181),l(168)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("h"+e.contextLevel,e._g(e._b({directives:[{name:"font",rawName:"v-font",value:e.font,expression:"font"}],tag:"component",attrs:{"data-debug":e.debug}},"component",e.$attrs,!1),e.$listeners),[e._t("default"),e._v(" "),e.debug?l("pre",{attrs:{"data-debug-context-level":e.contextLevel}}):e._e()],2)}),[],!1,null,"3796ed0e",null);t.a=component.exports},175:function(e,t,l){"use strict";l.r(t);var n={components:{BaseHeadline:l(174).a},props:{overline:{type:String,default:"Atom Headline (Overline)"},text:{type:String,default:"Atom Headline (Text)"}}},r=(l(176),l(168)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("base-headline",e._g(e._b({staticClass:"atom-headline debug",attrs:{font:[e.$getFont("Raleway",700),e.$getFont("Poppins",500,"normal",{selector:".overline"})]}},"base-headline",e.$attrs,!1),e.$listeners),[e._t("default",(function(){return[e.overline?l("span",{staticClass:"overline"},[e._v(e._s(e.overline))]):e._e(),e._v(" "),l("span",[e._v(e._s(e.text))])]}))],2)}),[],!1,null,"6f6a1109",null);t.default=component.exports},176:function(e,t,l){"use strict";l(171)},177:function(e,t,l){var n=l(169)((function(i){return i[1]}));n.push([e.i,".atom-headline[data-v-6f6a1109]{position:relative;font-size:1em}.atom-headline span[data-v-6f6a1109]{display:block;font-size:calc(var(--font-size-text) / 16 * 1em)}.atom-headline span.overline[data-v-6f6a1109]{font-size:calc(var(--font-size-overline) / 16 * 1em)}h1[data-v-6f6a1109]{--font-size-overline:16;--font-size-text:48}h2[data-v-6f6a1109]{--font-size-overline:12;--font-size-text:32}h3[data-v-6f6a1109]{--font-size-overline:10;--font-size-text:28}h4[data-v-6f6a1109]{--font-size-text:24}h4[data-v-6f6a1109],h5[data-v-6f6a1109]{--font-size-overline:8}h5[data-v-6f6a1109]{--font-size-text:20}h6[data-v-6f6a1109]{--font-size-overline:8;--font-size-text:16}",""]),n.locals={},e.exports=n},181:function(e,t,l){"use strict";l(172)},182:function(e,t,l){var n=l(169)((function(i){return i[1]}));n.push([e.i,'[data-debug][data-v-3796ed0e]{position:relative}[data-debug] pre[data-v-3796ed0e]{z-index:10000;margin:0;font-family:monospace;font-weight:400}[data-debug] pre[data-v-3796ed0e],[data-debug] pre[data-v-3796ed0e]:before{position:absolute;top:0;right:0;bottom:0;left:0}[data-debug] pre[data-v-3796ed0e]:before{box-sizing:border-box;pointer-events:none;content:"";border:2px dotted #333}[data-debug] pre[data-v-3796ed0e]:after{position:absolute;right:0;bottom:0;z-index:10000;padding:5px;font-size:13px;color:#fff;letter-spacing:.1em;content:"H" attr(data-debug-context-level);background:#333}',""]),n.locals={},e.exports=n},185:function(e,t,l){"use strict";l(173)},186:function(e,t,l){var n=l(169)((function(i){return i[1]}));n.push([e.i,".lost-container .lost-flex-container{display:flex}@media (max-width:575px){.lost-container .lost-flex-container{padding:0 15px}}@media (--default-max){.lost-container .lost-flex-container{padding:0 15px}}@media (min-width:576px){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(540 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (--xs){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(540 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (min-width:768px){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(720 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (--sm){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(720 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (min-width:992px){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(960 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (--md){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(960 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (min-width:1200px){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(1140 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (--lg){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(1140 / 16 * 1em);margin-left:auto;margin-right:auto}}",""]),n.locals={},e.exports=n},187:function(e,t,l){"use strict";var n={inheritAttrs:!1,props:{tag:{type:String,required:!1,default:function(){return"div"}},container:{type:Boolean,default:!0}}},r=(l(185),l(168)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l(e.tag,{tag:"div",staticClass:"lost-container"},[e._t("background"),e._v(" "),l("div",{class:{"lost-flex-container":e.container}},[e._t("default")],2)],2)}),[],!1,null,null,null);t.a=component.exports},278:function(e,t,l){var content=l(325);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(170).default)("9a43cc12",content,!0,{sourceMap:!1})},324:function(e,t,l){"use strict";l(278)},325:function(e,t,l){var n=l(169)((function(i){return i[1]}));n.push([e.i,".organism-gallery[data-v-52db4a01]{margin:calc(32 / 16 * 1em) 0}@media (min-width:768px){.organism-gallery[data-v-52db4a01]{margin:calc(48 / 16 * 1em) 0}}@media (--sm){.organism-gallery[data-v-52db4a01]{margin:calc(48 / 16 * 1em) 0}}.organism-gallery .headline[data-v-52db4a01],.organism-gallery .slider[data-v-52db4a01]{flex-grow:0;flex-shrink:0;flex-basis:99.9%;max-width:99.9%;width:99.9%}.organism-gallery .headline[data-v-52db4a01]:nth-child(1n),.organism-gallery .slider[data-v-52db4a01]:nth-child(1n){margin-right:15px;margin-left:0}.organism-gallery .headline[data-v-52db4a01]:last-child,.organism-gallery .slider[data-v-52db4a01]:last-child{margin-right:0}.organism-gallery .headline[data-v-52db4a01]:nth-child(12n),.organism-gallery .slider[data-v-52db4a01]:nth-child(12n){margin-right:0;margin-left:auto}@media (min-width:768px){.organism-gallery .headline[data-v-52db4a01],.organism-gallery .slider[data-v-52db4a01]{margin-left:calc(8.325% + 1.25px) !important;flex-grow:0;flex-shrink:0;flex-basis:calc(83.25% - 2.5px);max-width:calc(83.25% - 2.5px);width:calc(83.25% - 2.5px)}.organism-gallery .headline[data-v-52db4a01]:nth-child(1n),.organism-gallery .slider[data-v-52db4a01]:nth-child(1n){margin-right:15px;margin-left:0}.organism-gallery .headline[data-v-52db4a01]:last-child,.organism-gallery .slider[data-v-52db4a01]:last-child{margin-right:0}.organism-gallery .headline[data-v-52db4a01]:nth-child(12n),.organism-gallery .slider[data-v-52db4a01]:nth-child(12n){margin-right:0;margin-left:auto}}@media (--sm){.organism-gallery .headline[data-v-52db4a01],.organism-gallery .slider[data-v-52db4a01]{margin-left:calc(8.325% + 1.25px) !important;flex-grow:0;flex-shrink:0;flex-basis:calc(83.25% - 2.5px);max-width:calc(83.25% - 2.5px);width:calc(83.25% - 2.5px)}.organism-gallery .headline[data-v-52db4a01]:nth-child(1n),.organism-gallery .slider[data-v-52db4a01]:nth-child(1n){margin-right:15px;margin-left:0}.organism-gallery .headline[data-v-52db4a01]:last-child,.organism-gallery .slider[data-v-52db4a01]:last-child{margin-right:0}.organism-gallery .headline[data-v-52db4a01]:nth-child(12n),.organism-gallery .slider[data-v-52db4a01]:nth-child(12n){margin-right:0;margin-left:auto}}@media (min-width:992px){.organism-gallery .headline[data-v-52db4a01],.organism-gallery .slider[data-v-52db4a01]{margin-left:calc(16.65% + 2.5px) !important;flex-grow:0;flex-shrink:0;flex-basis:calc(66.6% - 5px);max-width:calc(66.6% - 5px);width:calc(66.6% - 5px)}.organism-gallery .headline[data-v-52db4a01]:nth-child(1n),.organism-gallery .slider[data-v-52db4a01]:nth-child(1n){margin-right:15px;margin-left:0}.organism-gallery .headline[data-v-52db4a01]:last-child,.organism-gallery .slider[data-v-52db4a01]:last-child{margin-right:0}.organism-gallery .headline[data-v-52db4a01]:nth-child(12n),.organism-gallery .slider[data-v-52db4a01]:nth-child(12n){margin-right:0;margin-left:auto}}@media (--md){.organism-gallery .headline[data-v-52db4a01],.organism-gallery .slider[data-v-52db4a01]{margin-left:calc(16.65% + 2.5px) !important;flex-grow:0;flex-shrink:0;flex-basis:calc(66.6% - 5px);max-width:calc(66.6% - 5px);width:calc(66.6% - 5px)}.organism-gallery .headline[data-v-52db4a01]:nth-child(1n),.organism-gallery .slider[data-v-52db4a01]:nth-child(1n){margin-right:15px;margin-left:0}.organism-gallery .headline[data-v-52db4a01]:last-child,.organism-gallery .slider[data-v-52db4a01]:last-child{margin-right:0}.organism-gallery .headline[data-v-52db4a01]:nth-child(12n),.organism-gallery .slider[data-v-52db4a01]:nth-child(12n){margin-right:0;margin-left:auto}}",""]),n.locals={},e.exports=n},640:function(e,t,l){"use strict";l.r(t);var n=l(188),r=l(175),o=l(332),d=l(187),c={components:{AtomHeadline:r.default,MoleculeSlider:o.a,LayoutLostContainer:d.a,CoreStructure:n.a},inheritAttrs:!1,props:{headline:{type:Object,required:!0,default:function(){return null}},hideHeadline:{type:Boolean,default:!1}}},f=(l(324),l(168)),component=Object(f.a)(c,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("core-structure",e._g(e._b({staticClass:"organism-gallery",scopedSlots:e._u([e.headline?{key:"header",fn:function(){return[l("layout-lost-container",{directives:[{name:"show",rawName:"v-show",value:!e.hideHeadline,expression:"!hideHeadline"}]},[l("atom-headline",e._b({staticClass:"headline"},"atom-headline",e.headline,!1))],1)]},proxy:!0}:null,{key:"default",fn:function(){return[l("layout-lost-container",[l("molecule-slider",{staticClass:"slider"})],1)]},proxy:!0}],null,!0)},"core-structure",e.$attrs,!1),e.$listeners))}),[],!1,null,"52db4a01",null);t.default=component.exports}}]);