(window.webpackJsonp=window.webpackJsonp||[]).push([[18,44,45],{10:function(e,t,n){var content=n(19);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(8).default)("4f2019d2",content,!0,{sourceMap:!1})},12:function(e,t,n){"use strict";var o={inject:{parentLevel:{from:"parentLevel",default:1}},inheritAttrs:!1,props:{font:{type:[Object,Array],default:()=>[]}},data:()=>({debug:!1}),computed:{contextLevel(){return e=(this.parentLevel-this.parentLevel%2)/2,Math.max(1,Math.min(e,6));var e}},mounted(){this.debug="debug-headline"in this.$route.query}},r=(n(18),n(6)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h"+e.contextLevel,e._g(e._b({directives:[{name:"font",rawName:"v-font",value:e.font,expression:"font"}],tag:"component",attrs:{"data-debug":e.debug}},"component",e.$attrs,!1),e.$listeners),[e._t("default"),e._v(" "),e.debug?n("pre",{attrs:{"data-debug-context-level":e.contextLevel}}):e._e()],2)}),[],!1,null,"3796ed0e",null);t.a=component.exports},18:function(e,t,n){"use strict";n(10)},19:function(e,t,n){var o=n(7)((function(i){return i[1]}));o.push([e.i,'[data-debug][data-v-3796ed0e]{position:relative}[data-debug] pre[data-v-3796ed0e]{z-index:10000;margin:0;font-family:monospace;font-weight:400}[data-debug] pre[data-v-3796ed0e],[data-debug] pre[data-v-3796ed0e]:before{position:absolute;top:0;right:0;bottom:0;left:0}[data-debug] pre[data-v-3796ed0e]:before{box-sizing:border-box;pointer-events:none;content:"";border:2px dotted #333}[data-debug] pre[data-v-3796ed0e]:after{position:absolute;right:0;bottom:0;z-index:10000;padding:5px;font-size:13px;color:#fff;letter-spacing:.1em;content:"H" attr(data-debug-context-level);background:#333}',""]),o.locals={},e.exports=o},398:function(e,t,n){"use strict";n.r(t);var o=n(12),r={components:{CoreStructure:n(24).a,CoreHeadline:o.a},layout:"test"},c=n(6),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("core-structure",{attrs:{id:"layout"},scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n    Header\n  ")]},proxy:!0},{key:"default",fn:function(){return[n("core-structure",{attrs:{id:"page"}},[n("core-structure",{attrs:{id:"pageDescribeComponent"},scopedSlots:e._u([{key:"header",fn:function(){return[n("core-headline",[e._v("Page Headline")])]},proxy:!0}])}),e._v(" "),n("core-structure",{attrs:{id:"pageComponents"}},[n("core-structure",{attrs:{id:"firstContentComponent"},scopedSlots:e._u([{key:"header",fn:function(){return[n("core-headline",[e._v("Content Component Basic")])]},proxy:!0}])},[e._v(" "),n("p",[e._v("Lorem ipsum…")])]),e._v(" "),n("core-structure",{attrs:{id:"secondaryContentComponent"},scopedSlots:e._u([{key:"header",fn:function(){return[n("core-headline",[e._v("Content Component With Content Section")])]},proxy:!0}])},[e._v(" "),n("core-structure",{scopedSlots:e._u([{key:"header",fn:function(){return[n("core-headline",[e._v("Content Section")])]},proxy:!0}])},[e._v(" "),n("p",[e._v("Lorem ipsum…")])])],1),e._v(" "),n("core-structure",{attrs:{id:"tertiaryContentComponent"},scopedSlots:e._u([{key:"header",fn:function(){return[n("core-headline",[e._v("Content Component with inner Articles")])]},proxy:!0}])},[e._v(" "),n("p",[e._v("Lorem ipsum…")]),e._v(" "),n("core-structure",{scopedSlots:e._u([{key:"header",fn:function(){return[n("core-headline",[e._v("Inner Articles")])]},proxy:!0}])},[e._v(" "),n("core-structure",{scopedSlots:e._u([{key:"header",fn:function(){return[n("core-headline",[e._v("Inner Content Component 1")])]},proxy:!0}])},[e._v(" "),n("p",[e._v("Lorem ipsum…")])]),e._v(" "),n("core-structure",{scopedSlots:e._u([{key:"header",fn:function(){return[n("core-headline",[e._v("Inner Content Component 2")])]},proxy:!0}])},[e._v(" "),n("p",[e._v("Lorem ipsum…")])])],1)],1)],1)],1)]},proxy:!0},{key:"footer",fn:function(){return[e._v("\n    Footer\n  ")]},proxy:!0}])})}),[],!1,null,null,null);t.default=component.exports}}]);