(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{171:function(e,t,n){var content=n(177);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(170).default)("65c21114",content,!0,{sourceMap:!1})},173:function(e,t,n){"use strict";var r={inject:{parentLevel:{from:"parentLevel",default:1}},inheritAttrs:!1,props:{font:{type:[Object,Array],default:function(){return[]}}},computed:{debug:function(){return"debug-headline"in this.$route.query},contextLevel:function(){return e=(this.parentLevel-this.parentLevel%2)/2,Math.max(1,Math.min(e,6));var e}}},o=(n(176),n(168)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h"+e.contextLevel,e._g(e._b({directives:[{name:"font",rawName:"v-font",value:e.font,expression:"font"}],tag:"component",attrs:{"data-debug":e.debug}},"component",e.$attrs,!1),e.$listeners),[e._t("default"),e._v(" "),e.debug?n("pre",{attrs:{"data-debug-context-level":e.contextLevel}}):e._e()],2)}),[],!1,null,"3032ca40",null);t.a=component.exports},176:function(e,t,n){"use strict";n(171)},177:function(e,t,n){var r=n(169)((function(i){return i[1]}));r.push([e.i,'[data-debug][data-v-3032ca40]{position:relative}[data-debug] pre[data-v-3032ca40]{z-index:10000;margin:0}[data-debug] pre[data-v-3032ca40],[data-debug] pre[data-v-3032ca40]:before{position:absolute;top:0;right:0;bottom:0;left:0}[data-debug] pre[data-v-3032ca40]:before{box-sizing:border-box;pointer-events:none;content:"";border:2px dotted #333}[data-debug] pre[data-v-3032ca40]:after{position:absolute;top:0;right:0;z-index:10000;padding:10px 5px;font-size:12px;color:#fff;content:"H" attr(data-debug-context-level);background:#333}',""]),r.locals={},e.exports=r},670:function(e,t,n){"use strict";n.r(t);var r=n(173),o={components:{CoreStructure:n(189).a,CoreHeadline:r.a},layout:"test"},c=n(168),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("core-structure",{attrs:{id:"layout"},scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n    Header\n  ")]},proxy:!0},{key:"default",fn:function(){return[n("core-structure",{attrs:{id:"page"}},[n("core-structure",{attrs:{id:"pageDescribeComponent"},scopedSlots:e._u([{key:"header",fn:function(){return[n("core-headline",[e._v("Page Headline")])]},proxy:!0}])}),e._v(" "),n("core-structure",{attrs:{id:"pageComponents"}},[n("core-structure",{attrs:{id:"firstContentComponent"},scopedSlots:e._u([{key:"header",fn:function(){return[n("core-headline",[e._v("Content Component Basic")])]},proxy:!0}])},[e._v(" "),n("p",[e._v("Lorem ipsum…")])]),e._v(" "),n("core-structure",{attrs:{id:"secondaryContentComponent"}},[n("core-structure",{scopedSlots:e._u([{key:"header",fn:function(){return[n("core-headline",[e._v("Content Component With Content Section")])]},proxy:!0}])},[e._v(" "),n("p",[e._v("Lorem ipsum…")])])],1),e._v(" "),n("core-structure",{attrs:{id:"tertiaryContentComponent"},scopedSlots:e._u([{key:"header",fn:function(){return[n("core-headline",[e._v("Content Component with inner Articles")])]},proxy:!0}])},[e._v(" "),n("p",[e._v("Lorem ipsum…")]),e._v(" "),n("core-structure",[n("core-structure",{scopedSlots:e._u([{key:"header",fn:function(){return[n("core-headline",[e._v("Inner Content Component 1")])]},proxy:!0}])},[e._v(" "),n("p",[e._v("Lorem ipsum…")])]),e._v(" "),n("core-structure",{scopedSlots:e._u([{key:"header",fn:function(){return[n("core-headline",[e._v("Inner Content Component 2")])]},proxy:!0}])},[e._v(" "),n("p",[e._v("Lorem ipsum…")])])],1)],1)],1)],1)]},proxy:!0},{key:"footer",fn:function(){return[e._v("\n    Footer\n  ")]},proxy:!0}])})}),[],!1,null,null,null);t.default=component.exports}}]);