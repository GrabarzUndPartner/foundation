(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{10:function(e,t,l){var content=l(19);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(8).default)("22235843",content,!0,{sourceMap:!1})},11:function(e,t,l){"use strict";var n={inject:{contextLevel:{from:"contextLevel",default:1}},inheritAttrs:!1,props:{font:{type:[Object,Array],default:()=>[]}},computed:{debug(){return"debug-headline"in this.$route.query},currentHeadlineLevel(){return e=this.contextLevel,Math.max(1,Math.min(e,6));var e}}},r=(l(13),l(6)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("h"+e.currentHeadlineLevel,e._g(e._b({directives:[{name:"font",rawName:"v-font",value:e.font,expression:"font"}],tag:"component",attrs:{"data-debug":e.debug}},"component",e.$attrs,!1),e.$listeners),[e._t("default"),e._v(" "),e.debug?l("pre",{attrs:{"data-debug-level":e.currentHeadlineLevel}}):e._e()],2)}),[],!1,null,"0d768736",null);t.a=component.exports},13:function(e,t,l){"use strict";l(9)},14:function(e,t,l){var n=l(7)((function(i){return i[1]}));n.push([e.i,'[data-debug][data-v-0d768736]{position:relative}[data-debug] pre[data-v-0d768736]{z-index:10000;margin:0}[data-debug] pre[data-v-0d768736],[data-debug] pre[data-v-0d768736]:before{position:absolute;top:0;right:0;bottom:0;left:0}[data-debug] pre[data-v-0d768736]:before{box-sizing:border-box;pointer-events:none;content:"";border:2px dotted #333}[data-debug] pre[data-v-0d768736]:after{position:absolute;top:0;right:0;z-index:10000;padding:10px 5px;font-size:12px;color:#fff;content:"H" attr(data-debug-level);background:#333}',""]),n.locals={},e.exports=n},16:function(e,t,l){var content=l(32);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(8).default)("8c27c136",content,!0,{sourceMap:!1})},17:function(e,t,l){"use strict";l.r(t);var n={components:{BaseHeadline:l(11).a},props:{overline:{type:String,default:"Atom Headline (Overline)"},text:{type:String,default:"Atom Headline (Text)"}}},r=(l(18),l(6)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("base-headline",e._g(e._b({staticClass:"atom-headline debug",attrs:{font:[e.$getFont("Raleway",700),e.$getFont("Poppins",500,"normal",{selector:"span:first-child"})]}},"base-headline",e.$attrs,!1),e.$listeners),[e._t("default",(function(){return[e.overline?l("span",[e._v(e._s(e.overline))]):e._e(),e._v(" "),l("span",[e._v(e._s(e.text))])]}))],2)}),[],!1,null,"08d76fde",null);t.default=component.exports},18:function(e,t,l){"use strict";l(10)},19:function(e,t,l){var n=l(7)((function(i){return i[1]}));n.push([e.i,".atom-headline[data-v-08d76fde]{position:relative;font-size:1em}.atom-headline span[data-v-08d76fde]{display:block}.atom-headline span[data-v-08d76fde]:first-child{font-size:calc(var(--font-size-overline) / 16 * 1em)}.atom-headline span[data-v-08d76fde]:last-child{font-size:calc(var(--font-size-text) / 16 * 1em)}h1[data-v-08d76fde]{--font-size-overline:16;--font-size-text:48}h2[data-v-08d76fde]{--font-size-overline:12;--font-size-text:32}h3[data-v-08d76fde]{--font-size-overline:10;--font-size-text:28}h4[data-v-08d76fde]{--font-size-text:24}h4[data-v-08d76fde],h5[data-v-08d76fde]{--font-size-overline:8}h5[data-v-08d76fde]{--font-size-text:20}h6[data-v-08d76fde]{--font-size-overline:8;--font-size-text:16}",""]),n.locals={},e.exports=n},204:function(e,t,l){var content=l(344);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(8).default)("63d5871c",content,!0,{sourceMap:!1})},31:function(e,t,l){"use strict";l(16)},32:function(e,t,l){var n=l(7)((function(i){return i[1]}));n.push([e.i,".lost-container .lost-flex-container{display:flex}@media (max-width:575px){.lost-container .lost-flex-container{padding:0 15px}}@media (--default-max){.lost-container .lost-flex-container{padding:0 15px}}@media (min-width:576px){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(540 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (--xs){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(540 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (min-width:768px){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(720 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (--sm){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(720 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (min-width:992px){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(960 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (--md){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(960 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (min-width:1200px){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(1140 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (--lg){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(1140 / 16 * 1em);margin-left:auto;margin-right:auto}}",""]),n.locals={},e.exports=n},33:function(e,t,l){"use strict";var n={inheritAttrs:!1,props:{tag:{type:String,required:!1,default:()=>"div"},container:{type:Boolean,default:!0}}},r=(l(31),l(6)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l(e.tag,{tag:"div",staticClass:"lost-container"},[e._t("background"),e._v(" "),l("div",{class:{"lost-flex-container":e.container}},[e._t("default")],2)],2)}),[],!1,null,null,null);t.a=component.exports},343:function(e,t,l){"use strict";l(204)},344:function(e,t,l){var n=l(7)((function(i){return i[1]}));n.push([e.i,".organism-gallery[data-v-56e3f63b]{margin:calc(32 / 16 * 1em) 0}@media (min-width:768px){.organism-gallery[data-v-56e3f63b]{margin:calc(48 / 16 * 1em) 0}}@media (--sm){.organism-gallery[data-v-56e3f63b]{margin:calc(48 / 16 * 1em) 0}}.organism-gallery .headline[data-v-56e3f63b],.organism-gallery .slider[data-v-56e3f63b]{flex-grow:0;flex-shrink:0;flex-basis:99.9%;max-width:99.9%;width:99.9%}.organism-gallery .headline[data-v-56e3f63b]:nth-child(1n),.organism-gallery .slider[data-v-56e3f63b]:nth-child(1n){margin-right:15px;margin-left:0}.organism-gallery .headline[data-v-56e3f63b]:last-child,.organism-gallery .slider[data-v-56e3f63b]:last-child{margin-right:0}.organism-gallery .headline[data-v-56e3f63b]:nth-child(12n),.organism-gallery .slider[data-v-56e3f63b]:nth-child(12n){margin-right:0;margin-left:auto}@media (min-width:768px){.organism-gallery .headline[data-v-56e3f63b],.organism-gallery .slider[data-v-56e3f63b]{margin-left:calc(8.325% + 1.25px) !important;flex-grow:0;flex-shrink:0;flex-basis:calc(83.25% - 2.5px);max-width:calc(83.25% - 2.5px);width:calc(83.25% - 2.5px)}.organism-gallery .headline[data-v-56e3f63b]:nth-child(1n),.organism-gallery .slider[data-v-56e3f63b]:nth-child(1n){margin-right:15px;margin-left:0}.organism-gallery .headline[data-v-56e3f63b]:last-child,.organism-gallery .slider[data-v-56e3f63b]:last-child{margin-right:0}.organism-gallery .headline[data-v-56e3f63b]:nth-child(12n),.organism-gallery .slider[data-v-56e3f63b]:nth-child(12n){margin-right:0;margin-left:auto}}@media (--sm){.organism-gallery .headline[data-v-56e3f63b],.organism-gallery .slider[data-v-56e3f63b]{margin-left:calc(8.325% + 1.25px) !important;flex-grow:0;flex-shrink:0;flex-basis:calc(83.25% - 2.5px);max-width:calc(83.25% - 2.5px);width:calc(83.25% - 2.5px)}.organism-gallery .headline[data-v-56e3f63b]:nth-child(1n),.organism-gallery .slider[data-v-56e3f63b]:nth-child(1n){margin-right:15px;margin-left:0}.organism-gallery .headline[data-v-56e3f63b]:last-child,.organism-gallery .slider[data-v-56e3f63b]:last-child{margin-right:0}.organism-gallery .headline[data-v-56e3f63b]:nth-child(12n),.organism-gallery .slider[data-v-56e3f63b]:nth-child(12n){margin-right:0;margin-left:auto}}@media (min-width:992px){.organism-gallery .headline[data-v-56e3f63b],.organism-gallery .slider[data-v-56e3f63b]{margin-left:calc(16.65% + 2.5px) !important;flex-grow:0;flex-shrink:0;flex-basis:calc(66.6% - 5px);max-width:calc(66.6% - 5px);width:calc(66.6% - 5px)}.organism-gallery .headline[data-v-56e3f63b]:nth-child(1n),.organism-gallery .slider[data-v-56e3f63b]:nth-child(1n){margin-right:15px;margin-left:0}.organism-gallery .headline[data-v-56e3f63b]:last-child,.organism-gallery .slider[data-v-56e3f63b]:last-child{margin-right:0}.organism-gallery .headline[data-v-56e3f63b]:nth-child(12n),.organism-gallery .slider[data-v-56e3f63b]:nth-child(12n){margin-right:0;margin-left:auto}}@media (--md){.organism-gallery .headline[data-v-56e3f63b],.organism-gallery .slider[data-v-56e3f63b]{margin-left:calc(16.65% + 2.5px) !important;flex-grow:0;flex-shrink:0;flex-basis:calc(66.6% - 5px);max-width:calc(66.6% - 5px);width:calc(66.6% - 5px)}.organism-gallery .headline[data-v-56e3f63b]:nth-child(1n),.organism-gallery .slider[data-v-56e3f63b]:nth-child(1n){margin-right:15px;margin-left:0}.organism-gallery .headline[data-v-56e3f63b]:last-child,.organism-gallery .slider[data-v-56e3f63b]:last-child{margin-right:0}.organism-gallery .headline[data-v-56e3f63b]:nth-child(12n),.organism-gallery .slider[data-v-56e3f63b]:nth-child(12n){margin-right:0;margin-left:auto}}",""]),n.locals={},e.exports=n},405:function(e,t,l){"use strict";l.r(t);var n=l(25),r=l(17),o=l(214),d=l(33),f={components:{AtomHeadline:r.default,MoleculeSlider:o.a,LayoutLostContainer:d.a,CoreStructure:n.a},inheritAttrs:!1,props:{headline:{type:Object,default:()=>null}}},c=(l(343),l(6)),component=Object(c.a)(f,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("core-structure",e._g(e._b({staticClass:"organism-gallery",scopedSlots:e._u([e.headline?{key:"header",fn:function(){return[l("layout-lost-container",[l("atom-headline",e._b({staticClass:"headline"},"atom-headline",e.headline,!1))],1)]},proxy:!0}:null,{key:"default",fn:function(){return[l("layout-lost-container",[l("molecule-slider",{staticClass:"slider"})],1)]},proxy:!0}],null,!0)},"core-structure",e.$attrs,!1),e.$listeners))}),[],!1,null,"56e3f63b",null);t.default=component.exports},9:function(e,t,l){var content=l(14);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(8).default)("6414fc12",content,!0,{sourceMap:!1})}}]);