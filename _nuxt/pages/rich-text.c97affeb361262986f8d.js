(window.webpackJsonp=window.webpackJsonp||[]).push([[13,42],{122:function(t,e,o){"use strict";var r={components:{BaseRichText:o(25).a}},l=(o(94),o(6)),component=Object(l.a)(r,(function(){var t=this;return(0,t._self._c)("base-rich-text",t._g(t._b({staticClass:"design-default"},"base-rich-text",t.$attrs,!1),t.$listeners),[t.$slots.default?t._t("default"):t._e()],2)}),[],!1,null,"f039faec",null);e.a=component.exports},16:function(t,e,o){var content=o(27);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(8).default)("16235337",content,!0,{sourceMap:!1})},25:function(t,e,o){"use strict";var r={props:{value:{type:String,default:null},font:{type:[Object,Array],default:()=>[]}}},l=o(6),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return t.$slots.default?e("div",{directives:[{name:"font",rawName:"v-font",value:t.font,expression:"font"}]},[t._t("default",null,{value:t.value})],2):e("div",{directives:[{name:"font",rawName:"v-font",value:t.font,expression:"font"}],domProps:{innerHTML:t._s(t.value)}})}),[],!1,null,null,null);e.a=component.exports},26:function(t,e,o){"use strict";o(16)},27:function(t,e,o){var r=o(7)((function(i){return i[1]}));r.push([t.i,".atom-rich-text[data-v-3b9cbec2]{font-size:1em;}.atom-rich-text[data-v-3b9cbec2] ol,.atom-rich-text[data-v-3b9cbec2] p,.atom-rich-text[data-v-3b9cbec2] ul{margin:0}.atom-rich-text[data-v-3b9cbec2] *+ol,.atom-rich-text[data-v-3b9cbec2] *+p,.atom-rich-text[data-v-3b9cbec2] *+ul{margin-top:calc(10 / 16 * 1em)}",""]),r.locals={},t.exports=r},32:function(t,e,o){"use strict";o.r(e);var r={components:{BaseRichText:o(25).a},inheritAttrs:!1},l=(o(26),o(6)),component=Object(l.a)(r,(function(){var t=this;return(0,t._self._c)("base-rich-text",t._g(t._b({staticClass:"atom-rich-text",attrs:{font:[t.$getFont("Poppins"),t.$getFont("Poppins",700,"normal",{selector:"strong"}),t.$getFont("Poppins",400,"italic",{selector:"em"}),t.$getFont("Poppins",700,"italic",{selector:"strong em, em strong"})]}},"base-rich-text",t.$attrs,!1),t.$listeners))}),[],!1,null,"3b9cbec2",null);e.default=component.exports},395:function(t,e,o){"use strict";o.r(e);var r=o(25),l=o(122),n=o(32),m={components:{BaseRichText:r.a,DefaultRichText:l.a,SampleRichText:n.default},data:()=>({content:"<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt</p><ul>  <li>List Item 1</li>  <li>List Item 2</li></ul><ol>  <li>List Item 1</li>  <li>List Item 2</li></ol>"})},c=o(6),component=Object(c.a)(m,(function(){var t=this,e=t._self._c;return e("div",[e("fieldset",[e("legend",[t._v("Base")]),t._v(" "),e("base-rich-text",[e("p",[t._v("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam")]),t._v(" "),e("p",[t._v("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt")]),t._v(" "),e("ul",[e("li",[t._v("List Item 1")]),t._v(" "),e("li",[t._v("List Item 2")])]),t._v(" "),e("ol",[e("li",[t._v("List Item 1")]),t._v(" "),e("li",[t._v("List Item 2")])])])],1),t._v(" "),e("fieldset",[e("legend",[t._v("Base (prop. value)")]),t._v(" "),e("base-rich-text",{attrs:{value:t.content}})],1),t._v(" "),e("fieldset",[e("legend",[t._v("Default")]),t._v(" "),e("default-rich-text",[e("p",[t._v("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam")]),t._v(" "),e("p",[t._v("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt")]),t._v(" "),e("ul",[e("li",[t._v("List Item 1")]),t._v(" "),e("li",[t._v("List Item 2")])]),t._v(" "),e("ol",[e("li",[t._v("List Item 1")]),t._v(" "),e("li",[t._v("List Item 2")])])])],1),t._v(" "),e("fieldset",[e("legend",[t._v("Default (prop. value)")]),t._v(" "),e("default-rich-text",{attrs:{value:t.content}})],1),t._v(" "),e("fieldset",[e("legend",[t._v("Sample")]),t._v(" "),e("sample-rich-text",[e("p",[t._v("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam")]),t._v(" "),e("p",[t._v("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt")]),t._v(" "),e("ul",[e("li",[t._v("List Item 1")]),t._v(" "),e("li",[t._v("List Item 2")])]),t._v(" "),e("ol",[e("li",[t._v("List Item 1")]),t._v(" "),e("li",[t._v("List Item 2")])])])],1),t._v(" "),e("fieldset",[e("legend",[t._v("Sample (prop. value)")]),t._v(" "),e("sample-rich-text",{attrs:{value:t.content}})],1)])}),[],!1,null,null,null);e.default=component.exports},66:function(t,e,o){var content=o(95);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(8).default)("37b5f325",content,!0,{sourceMap:!1})},94:function(t,e,o){"use strict";o(66)},95:function(t,e,o){var r=o(7)((function(i){return i[1]}));r.push([t.i,"[data-v-f039faec] {font-family:monospace;}[data-v-f039faec] p{margin:10px 0}[data-v-f039faec] ol,[data-v-f039faec] ul{margin:10px 0}",""]),r.locals={},t.exports=r}}]);