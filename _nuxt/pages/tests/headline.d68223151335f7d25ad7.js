(window.webpackJsonp=window.webpackJsonp||[]).push([[20,45,46],{181:function(e,t,n){var content=n(191);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(179).default)("990e4088",content,!0,{sourceMap:!1})},184:function(e,t,n){"use strict";var r={inject:{parentLevel:{from:"parentLevel",default:1}},inheritAttrs:!1,props:{font:{type:[Object,Array],default:function(){return[]}}},data:function(){return{debug:!1}},computed:{contextLevel:function(){return e=(this.parentLevel-this.parentLevel%2)/2,Math.max(1,Math.min(e,6));var e}},mounted:function(){this.debug="debug-headline"in this.$route.query}},o=(n(190),n(177)),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("h"+e.contextLevel,e._g(e._b({directives:[{name:"font",rawName:"v-font",value:e.font,expression:"font"}],tag:"component",attrs:{"data-debug":e.debug}},"component",e.$attrs,!1),e.$listeners),[e._t("default"),e._v(" "),e.debug?t("pre",{attrs:{"data-debug-context-level":e.contextLevel}}):e._e()],2)}),[],!1,null,"3796ed0e",null);t.a=component.exports},190:function(e,t,n){"use strict";n(181)},191:function(e,t,n){var r=n(178)((function(i){return i[1]}));r.push([e.i,'[data-debug][data-v-3796ed0e]{position:relative}[data-debug] pre[data-v-3796ed0e]{position:absolute;top:0;right:0;bottom:0;left:0;z-index:10000;margin:0;font-family:monospace;font-weight:400}[data-debug] pre[data-v-3796ed0e]:before{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box;pointer-events:none;content:"";border:2px dotted #333}[data-debug] pre[data-v-3796ed0e]:after{position:absolute;right:0;bottom:0;z-index:10000;padding:5px;font-size:13px;color:#fff;letter-spacing:.1em;content:"H" attr(data-debug-context-level);background:#333}',""]),r.locals={},e.exports=r},678:function(e,t,n){"use strict";n.r(t);var r=n(184),o={components:{CoreStructure:n(197).a,CoreHeadline:r.a},layout:"test"},d=n(177),component=Object(d.a)(o,(function(){var e=this,t=e._self._c;return t("core-structure",{attrs:{id:"layout"}},[t("core-structure",{attrs:{id:"page"}},[t("core-structure",{scopedSlots:e._u([{key:"header",fn:function(){return[t("core-headline",{attrs:{id:"headline1"}},[e._v("\n          Headline (H1)\n        ")])]},proxy:!0}])},[e._v(" "),t("p",[e._v("…")]),e._v(" "),t("core-structure",{scopedSlots:e._u([{key:"header",fn:function(){return[t("core-headline",{attrs:{id:"headline2_1"}},[e._v("\n            Headline (H2)\n          ")])]},proxy:!0}])},[e._v(" "),t("p",[e._v("…")]),e._v(" "),t("core-structure",{scopedSlots:e._u([{key:"header",fn:function(){return[t("core-headline",{attrs:{id:"headline2_2"}},[e._v("\n              Headline (H2)\n            ")])]},proxy:!0}])},[e._v(" "),t("p",[e._v("…")]),e._v(" "),t("core-structure",{scopedSlots:e._u([{key:"header",fn:function(){return[t("core-headline",{attrs:{id:"headline3_1"}},[e._v("\n                Headline (H3)\n              ")])]},proxy:!0}])},[e._v(" "),t("p",[e._v("…")]),e._v(" "),t("core-structure",{scopedSlots:e._u([{key:"header",fn:function(){return[t("core-headline",{attrs:{id:"headline3_2"}},[e._v("\n                  Headline (H3)\n                ")])]},proxy:!0}])},[e._v(" "),t("p",[e._v("…")]),e._v(" "),t("core-structure",{scopedSlots:e._u([{key:"header",fn:function(){return[t("core-headline",{attrs:{id:"headline4_1"}},[e._v("\n                    Headline (H4)\n                  ")])]},proxy:!0}])},[e._v(" "),t("p",[e._v("…")]),e._v(" "),t("core-structure",{scopedSlots:e._u([{key:"header",fn:function(){return[t("core-headline",{attrs:{id:"headline4_2"}},[e._v("\n                      Headline (H4)\n                    ")])]},proxy:!0}])},[e._v(" "),t("p",[e._v("…")]),e._v(" "),t("core-structure",{scopedSlots:e._u([{key:"header",fn:function(){return[t("core-headline",{attrs:{id:"headline5_1"}},[e._v("\n                        Headline (H5)\n                      ")])]},proxy:!0}])},[e._v(" "),t("p",[e._v("…")]),e._v(" "),t("core-structure",{scopedSlots:e._u([{key:"header",fn:function(){return[t("core-headline",{attrs:{id:"headline5_2"}},[e._v("\n                          Headline (H5)\n                        ")])]},proxy:!0}])},[e._v(" "),t("p",[e._v("…")]),e._v(" "),t("core-structure",{scopedSlots:e._u([{key:"header",fn:function(){return[t("core-headline",{attrs:{id:"headline6_1"}},[e._v("\n                            Headline (H6)\n                          ")])]},proxy:!0}])},[e._v(" "),t("p",[e._v("…")]),e._v(" "),t("core-structure",{scopedSlots:e._u([{key:"header",fn:function(){return[t("core-headline",{attrs:{id:"headline6_2"}},[e._v("\n                              Headline (H6)\n                            ")])]},proxy:!0}])},[e._v(" "),t("p",[e._v("…")]),e._v(" "),t("core-structure",{scopedSlots:e._u([{key:"header",fn:function(){return[t("core-headline",{attrs:{id:"headline7_1"}},[e._v("\n                                Headline (H6)\n                              ")])]},proxy:!0}])},[e._v(" "),t("p",[e._v("…")]),e._v(" "),t("core-structure",{scopedSlots:e._u([{key:"header",fn:function(){return[t("core-headline",{attrs:{id:"headline7_2"}},[e._v("\n                                  Headline (H6)\n                                ")])]},proxy:!0}])},[e._v(" "),t("p",[e._v("…")])])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);