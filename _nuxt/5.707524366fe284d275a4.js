(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{171:function(t,e,n){var content=n(177);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(170).default)("65c21114",content,!0,{sourceMap:!1})},172:function(t,e,n){var content=n(183);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(170).default)("2491ef0a",content,!0,{sourceMap:!1})},173:function(t,e,n){"use strict";var r={inject:{parentLevel:{from:"parentLevel",default:1}},inheritAttrs:!1,props:{font:{type:[Object,Array],default:function(){return[]}}},computed:{debug:function(){return"debug-headline"in this.$route.query},contextLevel:function(){return t=(this.parentLevel-this.parentLevel%2)/2,Math.max(1,Math.min(t,6));var t}}},l=(n(176),n(168)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h"+t.contextLevel,t._g(t._b({directives:[{name:"font",rawName:"v-font",value:t.font,expression:"font"}],tag:"component",attrs:{"data-debug":t.debug}},"component",t.$attrs,!1),t.$listeners),[t._t("default"),t._v(" "),t.debug?n("pre",{attrs:{"data-debug-context-level":t.contextLevel}}):t._e()],2)}),[],!1,null,"3032ca40",null);e.a=component.exports},176:function(t,e,n){"use strict";n(171)},177:function(t,e,n){var r=n(169)((function(i){return i[1]}));r.push([t.i,'[data-debug][data-v-3032ca40]{position:relative}[data-debug] pre[data-v-3032ca40]{z-index:10000;margin:0}[data-debug] pre[data-v-3032ca40],[data-debug] pre[data-v-3032ca40]:before{position:absolute;top:0;right:0;bottom:0;left:0}[data-debug] pre[data-v-3032ca40]:before{box-sizing:border-box;pointer-events:none;content:"";border:2px dotted #333}[data-debug] pre[data-v-3032ca40]:after{position:absolute;top:0;right:0;z-index:10000;padding:10px 5px;font-size:12px;color:#fff;content:"H" attr(data-debug-context-level);background:#333}',""]),r.locals={},t.exports=r},179:function(t,e,n){var content=n(198);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(170).default)("8c27c136",content,!0,{sourceMap:!1})},181:function(t,e,n){"use strict";n.r(e);var r={components:{BaseHeadline:n(173).a},props:{overline:{type:String,default:"Atom Headline (Overline)"},text:{type:String,default:"Atom Headline (Text)"}}},l=(n(182),n(168)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("base-headline",t._g(t._b({staticClass:"atom-headline debug",attrs:{font:[t.$getFont("Raleway",700),t.$getFont("Poppins",500,"normal",{selector:".overline"})]}},"base-headline",t.$attrs,!1),t.$listeners),[t._t("default",(function(){return[t.overline?n("span",{staticClass:"overline"},[t._v(t._s(t.overline))]):t._e(),t._v(" "),n("span",[t._v(t._s(t.text))])]}))],2)}),[],!1,null,"6f6a1109",null);e.default=component.exports},182:function(t,e,n){"use strict";n(172)},183:function(t,e,n){var r=n(169)((function(i){return i[1]}));r.push([t.i,".atom-headline[data-v-6f6a1109]{position:relative;font-size:1em}.atom-headline span[data-v-6f6a1109]{display:block;font-size:calc(var(--font-size-text) / 16 * 1em)}.atom-headline span.overline[data-v-6f6a1109]{font-size:calc(var(--font-size-overline) / 16 * 1em)}h1[data-v-6f6a1109]{--font-size-overline:16;--font-size-text:48}h2[data-v-6f6a1109]{--font-size-overline:12;--font-size-text:32}h3[data-v-6f6a1109]{--font-size-overline:10;--font-size-text:28}h4[data-v-6f6a1109]{--font-size-text:24}h4[data-v-6f6a1109],h5[data-v-6f6a1109]{--font-size-overline:8}h5[data-v-6f6a1109]{--font-size-text:20}h6[data-v-6f6a1109]{--font-size-overline:8;--font-size-text:16}",""]),r.locals={},t.exports=r},191:function(t,e,n){"use strict";n(68),n(103);var r={inheritAttrs:!1,props:{to:{type:[Object,String],required:!0},disabled:{type:Boolean,default:!1},external:{type:Boolean,default:!1}},methods:{isExternal:function(t){return"string"==typeof t&&/^https?:\/\//.test(t)},getHref:function(t){return this.external||this.isExternal(this.to)?this.to:t},listeners:function(t,e){return t=this.disabled||e?function(){}:t,Object.assign({},this.$listeners,{click:t,"keypress.enter":t})}}},l=n(168),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nuxt-link",{attrs:{custom:"",to:t.to},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.href,l=e.navigate,o=e.isActive,c=e.isExactActive;return[n("a",t._g(t._b({class:{"nuxt-link-active":o,"nuxt-link-exact-active":c},attrs:{href:!t.disabled&&t.getHref(r),disabled:t.disabled}},"a",Object.assign({},t.$attrs,{to:void 0}),!1),t.listeners(l,t.isExternal(r))),[t._t("default",(function(){return[t._v(t._s(t.$attrs.title))]}))],2)]}}],null,!0)})}),[],!1,null,null,null);e.a=component.exports},197:function(t,e,n){"use strict";n(179)},198:function(t,e,n){var r=n(169)((function(i){return i[1]}));r.push([t.i,".lost-container .lost-flex-container{display:flex}@media (max-width:575px){.lost-container .lost-flex-container{padding:0 15px}}@media (--default-max){.lost-container .lost-flex-container{padding:0 15px}}@media (min-width:576px){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(540 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (--xs){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(540 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (min-width:768px){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(720 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (--sm){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(720 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (min-width:992px){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(960 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (--md){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(960 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (min-width:1200px){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(1140 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (--lg){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(1140 / 16 * 1em);margin-left:auto;margin-right:auto}}",""]),r.locals={},t.exports=r},199:function(t,e,n){"use strict";var r={inheritAttrs:!1,props:{tag:{type:String,required:!1,default:function(){return"div"}},container:{type:Boolean,default:!0}}},l=(n(197),n(168)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.tag,{tag:"div",staticClass:"lost-container"},[t._t("background"),t._v(" "),n("div",{class:{"lost-flex-container":t.container}},[t._t("default")],2)],2)}),[],!1,null,null,null);e.a=component.exports},232:function(t,e,n){var r=n(7),l=n(233),o=n(110);r({target:"Array",proto:!0},{fill:l}),o("fill")},233:function(t,e,n){"use strict";var r=n(24),l=n(71),o=n(35);t.exports=function(t){for(var e=r(this),n=o(e),c=arguments.length,d=l(c>1?arguments[1]:void 0,n),f=c>2?arguments[2]:void 0,m=void 0===f?n:l(f,n);m>d;)e[d++]=t;return e}},235:function(t,e,n){"use strict";var r={inheritAttrs:!1},l=n(168),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",t._g(t._b({staticClass:"article"},"article",t.$attrs,!1),t.$listeners),[t.$slots.header?n("header",[t._t("header")],2):t._e(),t._v(" "),t._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},277:function(t,e,n){var content=n(316);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(170).default)("3af46754",content,!0,{sourceMap:!1})},278:function(t,e,n){"use strict";var r=n(191),l=n(235),o={components:{BaseLink:r.a,BaseArticle:l.a},inheritAttrs:!1},c=n(168),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("base-link",t._g(t._b({},"base-link",t.$attrs,!1),t.$listeners),[n("base-article",[t._t("default")],2)],1)}),[],!1,null,null,null);e.a=component.exports},315:function(t,e,n){"use strict";n(277)},316:function(t,e,n){var r=n(169)((function(i){return i[1]}));r.push([t.i,".molecule-teaser[data-v-17d96bde]{text-decoration:none}.molecule-teaser span[data-v-17d96bde]{display:block;margin:calc(10 / 16 * 1em);font-size:calc(16 / 16 * 1em);text-align:center;letter-spacing:calc(.2 / 16 * 1em)}",""]),r.locals={},t.exports=r},323:function(t,e,n){"use strict";var r=n(241),l=n(278),o={components:{SpeedkitPicture:r.a,BaseTeaser:l.a},inheritAttrs:!1,props:{image:{type:Object,required:!0},caption:{type:String,default:"Teaser Caption"}}},c=(n(315),n(168)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("base-teaser",t._g(t._b({staticClass:"molecule-teaser",scopedSlots:t._u([{key:"default",fn:function(){return[n("speedkit-picture",t._b({},"speedkit-picture",t.image,!1)),t._v(" "),n("span",{directives:[{name:"font",rawName:"v-font",value:t.$getFont("Poppins",500),expression:"$getFont('Poppins', 500)"}]},[t._v(t._s(t.caption))])]},proxy:!0}])},"base-teaser",t.$attrs,!1),t.$listeners))}),[],!1,null,"17d96bde",null);e.a=component.exports},434:function(t,e,n){var content=n(617);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(170).default)("1386ffb2",content,!0,{sourceMap:!1})},616:function(t,e,n){"use strict";n(434)},617:function(t,e,n){var r=n(169)((function(i){return i[1]}));r.push([t.i,".organism-teaser-wall[data-v-54712542]{margin:calc(32 / 16 * 1em) 0}@media (min-width:768px){.organism-teaser-wall[data-v-54712542]{margin:calc(48 / 16 * 1em) 0}}@media (--sm){.organism-teaser-wall[data-v-54712542]{margin:calc(48 / 16 * 1em) 0}}@media (min-width:768px){.organism-teaser-wall .headline[data-v-54712542]{flex-grow:0;flex-shrink:0;flex-basis:calc(83.25% - 2.5px);max-width:calc(83.25% - 2.5px);width:calc(83.25% - 2.5px);margin-left:calc(8.325% + 1.25px) !important}.organism-teaser-wall .headline[data-v-54712542]:nth-child(1n){margin-right:15px;margin-left:0}.organism-teaser-wall .headline[data-v-54712542]:last-child{margin-right:0}.organism-teaser-wall .headline[data-v-54712542]:nth-child(12n){margin-right:0;margin-left:auto}}@media (--sm){.organism-teaser-wall .headline[data-v-54712542]{flex-grow:0;flex-shrink:0;flex-basis:calc(83.25% - 2.5px);max-width:calc(83.25% - 2.5px);width:calc(83.25% - 2.5px);margin-left:calc(8.325% + 1.25px) !important}.organism-teaser-wall .headline[data-v-54712542]:nth-child(1n){margin-right:15px;margin-left:0}.organism-teaser-wall .headline[data-v-54712542]:last-child{margin-right:0}.organism-teaser-wall .headline[data-v-54712542]:nth-child(12n){margin-right:0;margin-left:auto}}@media (min-width:1200px){.organism-teaser-wall .headline[data-v-54712542]{flex-grow:0;flex-shrink:0;flex-basis:calc(83.25% - 2.5px);max-width:calc(83.25% - 2.5px);width:calc(83.25% - 2.5px);margin-left:calc(8.325% + 1.25px) !important}.organism-teaser-wall .headline[data-v-54712542]:nth-child(1n){margin-right:15px;margin-left:0}.organism-teaser-wall .headline[data-v-54712542]:last-child{margin-right:0}.organism-teaser-wall .headline[data-v-54712542]:nth-child(12n){margin-right:0;margin-left:auto}}@media (--lg){.organism-teaser-wall .headline[data-v-54712542]{flex-grow:0;flex-shrink:0;flex-basis:calc(83.25% - 2.5px);max-width:calc(83.25% - 2.5px);width:calc(83.25% - 2.5px);margin-left:calc(8.325% + 1.25px) !important}.organism-teaser-wall .headline[data-v-54712542]:nth-child(1n){margin-right:15px;margin-left:0}.organism-teaser-wall .headline[data-v-54712542]:last-child{margin-right:0}.organism-teaser-wall .headline[data-v-54712542]:nth-child(12n){margin-right:0;margin-left:auto}}.organism-teaser-wall .teasers[data-v-54712542]{--columns:1;display:flex;flex-wrap:wrap}@media (min-width:768px){.organism-teaser-wall .teasers[data-v-54712542]{--columns:2;flex-grow:0;flex-shrink:0;flex-basis:calc(83.25% - 2.5px);max-width:calc(83.25% - 2.5px);width:calc(83.25% - 2.5px);margin-left:calc(8.325% + 1.25px) !important}.organism-teaser-wall .teasers[data-v-54712542]:nth-child(1n){margin-right:15px;margin-left:0}.organism-teaser-wall .teasers[data-v-54712542]:last-child{margin-right:0}.organism-teaser-wall .teasers[data-v-54712542]:nth-child(12n){margin-right:0;margin-left:auto}}@media (--sm){.organism-teaser-wall .teasers[data-v-54712542]{--columns:2;flex-grow:0;flex-shrink:0;flex-basis:calc(83.25% - 2.5px);max-width:calc(83.25% - 2.5px);width:calc(83.25% - 2.5px);margin-left:calc(8.325% + 1.25px) !important}.organism-teaser-wall .teasers[data-v-54712542]:nth-child(1n){margin-right:15px;margin-left:0}.organism-teaser-wall .teasers[data-v-54712542]:last-child{margin-right:0}.organism-teaser-wall .teasers[data-v-54712542]:nth-child(12n){margin-right:0;margin-left:auto}}@media (min-width:1200px){.organism-teaser-wall .teasers[data-v-54712542]{--columns:3;flex-grow:0;flex-shrink:0;flex-basis:calc(83.25% - 2.5px);max-width:calc(83.25% - 2.5px);width:calc(83.25% - 2.5px);margin-left:calc(8.325% + 1.25px) !important}.organism-teaser-wall .teasers[data-v-54712542]:nth-child(1n){margin-right:15px;margin-left:0}.organism-teaser-wall .teasers[data-v-54712542]:last-child{margin-right:0}.organism-teaser-wall .teasers[data-v-54712542]:nth-child(12n){margin-right:0;margin-left:auto}}@media (--lg){.organism-teaser-wall .teasers[data-v-54712542]{--columns:3;flex-grow:0;flex-shrink:0;flex-basis:calc(83.25% - 2.5px);max-width:calc(83.25% - 2.5px);width:calc(83.25% - 2.5px);margin-left:calc(8.325% + 1.25px) !important}.organism-teaser-wall .teasers[data-v-54712542]:nth-child(1n){margin-right:15px;margin-left:0}.organism-teaser-wall .teasers[data-v-54712542]:last-child{margin-right:0}.organism-teaser-wall .teasers[data-v-54712542]:nth-child(12n){margin-right:0;margin-left:auto}}.organism-teaser-wall .teasers>*[data-v-54712542]{box-sizing:border-box;display:block;width:calc(100%/var(--columns));padding:calc(20 / 16 * 1em)}",""]),r.locals={},t.exports=r},677:function(t,e,n){"use strict";n.r(e);n(180),n(232),n(103);var r=n(189),l=n(199),o=n(181),c=n(323),d={components:{LayoutLostContainer:l.a,CoreStructure:r.a,MoleculeTeaser:c.a,AtomHeadline:o.default},props:{headline:{type:Object,default:function(){return null}},teasers:{type:Array,default:function(){return Array(8).fill({}).map((function(t,e){return Object.assign({},f(),{caption:"Teaser "+e})}))}}}},f=function(){return{to:"/",image:{title:"Teaser",sources:[{src:"/img/1080x1080.jpg",sizes:{default:"100vw",xxs:"100vw",xs:"100vw",sm:"100vw",md:"100vw",lg:"100vw",xl:"100vw",xxl:"100vw"}}]}}},m=d,h=(n(616),n(168)),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("core-structure",{staticClass:"organism-teaser-wall",scopedSlots:t._u([t.headline?{key:"header",fn:function(){return[n("layout-lost-container",[n("div",{staticClass:"headline"},[n("atom-headline",t._b({},"atom-headline",t.headline,!1))],1)])]},proxy:!0}:null,{key:"default",fn:function(){return[n("layout-lost-container",[n("div",{staticClass:"teasers"},t._l(t.teasers,(function(e,r){return n("molecule-teaser",t._b({key:r},"molecule-teaser",e,!1))})),1)])]},proxy:!0}],null,!0)})}),[],!1,null,"54712542",null);e.default=component.exports}}]);