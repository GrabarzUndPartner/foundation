(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{184:function(e,t,n){var content=n(197);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(174).default)("7318a615",content,!0,{sourceMap:!1})},196:function(e,t,n){"use strict";n(184)},197:function(e,t,n){var o=n(173)((function(i){return i[1]}));o.push([e.i,".svg[data-v-0f8a39f4]{display:inline-block;vertical-align:middle}.svg svg[data-v-0f8a39f4]{display:block;width:100%}",""]),o.locals={},e.exports=o},198:function(e,t,n){"use strict";var o={inheritAttrs:!1},l=(n(196),n(172)),r={components:{BaseSvg:Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("i",e._g(e._b({staticClass:"svg"},"i",e.$attrs,!1),e.$listeners),[e._t("default",(function(){return[n("svg",{attrs:{viewBox:"0 0 72 72",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M64.664 6.504a3 3 0 0 0-4.16.832l-33.97 50.955L11.121 42.88a2.998 2.998 0 0 0-4.242 0 2.998 2.998 0 0 0 0 4.242l18 18a2.996 2.996 0 0 0 2.416.864 2.998 2.998 0 0 0 2.201-1.32l36-54a3 3 0 0 0-.832-4.16",fill:"#00358E","fill-rule":"evenodd"}})])]}))],2)}),[],!1,null,"0f8a39f4",null).exports},inheritAttrs:!1,props:{size:{type:String,default:null}}},c=Object(l.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("base-svg",e._b({staticClass:"icon",class:e.size},"base-svg",e.$attrs,!1),[e._t("default")],2)}),[],!1,null,null,null);t.a=c.exports},214:function(e,t,n){var content=n(239);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(174).default)("43e982ea",content,!0,{sourceMap:!1})},215:function(e,t,n){var content=n(241);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(174).default)("0e83f0af",content,!0,{sourceMap:!1})},228:function(e,t,n){"use strict";n(182),n(108);var o={functional:!0,props:{option:{type:String,default:null},value:{type:String,default:null},hideNativeInput:{type:Boolean,default:!1},unselectable:{type:Boolean,default:!1}},render:function(e,t){return[e("input",l(t)),e("label",r(t),[t.scopedSlots.label()]),t.scopedSlots.extend()]}},l=function(e){return{class:{hidden:e.props.hideNativeInput},attrs:Object.assign(e.data.attrs,{type:"radio",checked:c(e)}),domProps:{value:e.props.option,checked:c(e),id:e.data.attrs.id},on:{input:function(t){e.listeners.input(t.target.value)},click:function(t){c(e)&&e.props.unselectable?e.data.on.input(null):e.data.on.input(e.props.option)}}}},r=function(e){return{attrs:{for:e.data.attrs.id},domProps:{for:e.data.attrs.id}}},c=function(e){return e.props.value===e.props.option&&null!==e.props.value},d=o,f=(n(238),n(172)),N={components:{BaseSelect:Object(f.a)(d,undefined,undefined,!1,null,"e2f55444",null).exports},inheritAttrs:!1,props:{dataset:{type:n(209).a,required:!0},collapsible:{type:Boolean,required:!0}},data:function(){return{name:this.dataset.name,model:this.dataset.model,options:this.dataset.options}},methods:{show:function(option,e){return option.value===e.value||!1}}},T=(n(240),Object(f.a)(N,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"collapsible-container"},e._l(e.options,(function(option){return n("base-select",e._b({key:e.model.name+"-"+option.key,attrs:{id:e.model.name+"-"+option.key,name:e.model.name,option:option.value,unselectable:e.collapsible},scopedSlots:e._u([{key:"label",fn:function(){return[e._t("label",(function(){return[e._v("\n        "+e._s(option.label)+"\n      ")]}),{option:option})]},proxy:!0},{key:"extend",fn:function(){return[e._t("content",(function(){return[e.show(option,e.model)?n("div",[e._v("\n          "+e._s(option.content)+"\n        ")]):e._e()]}),{option:option,show:e.show(option,e.model)})]},proxy:!0}],null,!0),model:{value:e.model.value,callback:function(t){e.$set(e.model,"value",t)},expression:"model.value"}},"base-select",e.$attrs,!1))})),1)}),[],!1,null,"41dc1302",null));t.a=T.exports},232:function(e,t,n){var content=n(275);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(174).default)("4e1c4755",content,!0,{sourceMap:!1})},238:function(e,t,n){"use strict";n(214)},239:function(e,t,n){var o=n(173)((function(i){return i[1]}));o.push([e.i,"input.hidden[data-v-e2f55444]{position:absolute;width:0;height:0;opacity:0}",""]),o.locals={},e.exports=o},240:function(e,t,n){"use strict";n(215)},241:function(e,t,n){var o=n(173)((function(i){return i[1]}));o.push([e.i,".collapsible-container[data-v-41dc1302] input+label+section{height:0;overflow:hidden}.collapsible-container[data-v-41dc1302] input:checked+label+section{height:auto}",""]),o.locals={},e.exports=o},250:function(e,t,n){"use strict";var o={methods:{enter:function(element){element.style.height="auto";var e=getComputedStyle(element).height;element.style.height=0,element.style.opacity=0,requestAnimationFrame((function(){element.style.height=e}))},afterEnter:function(element){element.style.height="auto",element.style.opacity=1},beforeLeave:function(element){element.style.height="auto",element.style.opacity=0},leave:function(element){element.style.height=getComputedStyle(element).height,requestAnimationFrame((function(){element.style.height=0}))}}},l=(n(274),n(172)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("transition",{attrs:{name:"expand"},on:{enter:e.enter,"after-enter":e.afterEnter,"before-leave":e.beforeLeave,leave:e.leave}},[e._t("default")],2)}),[],!1,null,"790772ec",null);t.a=component.exports},274:function(e,t,n){"use strict";n(232)},275:function(e,t,n){var o=n(173)((function(i){return i[1]}));o.push([e.i,"*[data-v-790772ec]{will-change:height opacity;transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden;perspective:1000px}[data-v-790772ec]:not(.expand-enter-active){transition-timing-function:ease-in-out;transition-duration:.35s;transition-property:opacity}.expand-enter-active[data-v-790772ec],.expand-leave-active[data-v-790772ec]{overflow:hidden;transition-timing-function:ease-in-out;transition-duration:.35s;transition-property:height}.expand-enter[data-v-790772ec],.expand-leave-to[data-v-790772ec]{height:0}",""]),o.locals={},e.exports=o},277:function(e,t,n){var content=n(319);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(174).default)("7eaefb62",content,!0,{sourceMap:!1})},293:function(e,t,n){"use strict";var o={components:{CollapsibleContainer:n(228).a},inheritAttrs:!1,props:{collapsible:{type:Boolean,default:!1}}},l=n(172),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("collapsible-container",e._g(e._b({staticClass:"accordeon",attrs:{"hide-native-input":!0,collapsible:e.collapsible},scopedSlots:e._u([{key:"label",fn:function(t){var option=t.option;return[e._t("label",(function(){return[e._v("\n      "+e._s(option.label)+"\n    ")]}),{option:option})]}},{key:"content",fn:function(t){var option=t.option,o=t.show;return[e._t("content",(function(){return[option.show?n("div",[e._v("\n        "+e._s(option.content)+"\n      ")]):e._e()]}),{option:option,show:o})]}}],null,!0)},"collapsible-container",e.$attrs,!1),e.$listeners))}),[],!1,null,null,null);t.a=component.exports},294:function(e,t,n){"use strict";var o=n(343),l=n(681),filter=n(649),r=n(209),c={components:{CollapsibleContainer:n(228).a},inheritAttrs:!1,props:{dataset:{type:r.a,required:!0}},data:function(){return{subscriptions:new o.b}},mounted:function(){var e=this,t=this.dataset.model;this.subscriptions.add(Object(l.a)(document,"pointermove",{passive:!0}).pipe(Object(filter.a)((function(n){return!e.$el.contains(n.target)&&null!=t.value}))).subscribe((function(){t.value=null})))},destroyed:function(){this.subscriptions.unsubscribe()}},d=(n(318),n(172)),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("collapsible-container",e._g(e._b({staticClass:"flyout-navi",attrs:{"hide-native-input":!0,dataset:e.dataset,collapsible:!0},scopedSlots:e._u([{key:"label",fn:function(t){var option=t.option;return[e._t("label",(function(){return[e._v("\n      "+e._s(option.label)+"\n    ")]}),{option:option})]}},{key:"content",fn:function(content){return[e._t("content",null,null,content)]}}],null,!0)},"collapsible-container",e.$attrs,!1),e.$listeners))}),[],!1,null,"5e006c7c",null);t.a=component.exports},318:function(e,t,n){"use strict";n(277)},319:function(e,t,n){var o=n(173)((function(i){return i[1]}));o.push([e.i,".flyout-navi[data-v-5e006c7c] {display:flex;flex-wrap:wrap;width:100%}.flyout-navi[data-v-5e006c7c] label{flex-grow:0;order:0;width:auto}.flyout-navi[data-v-5e006c7c] section{order:1;width:100%}",""]),o.locals={},e.exports=o},415:function(e,t,n){var content=n(554);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(174).default)("4678637a",content,!0,{sourceMap:!1})},416:function(e,t,n){var content=n(556);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(174).default)("631c01d6",content,!0,{sourceMap:!1})},429:function(e,t,n){var content=n(558);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(174).default)("7f6f1fd4",content,!0,{sourceMap:!1})},430:function(e,t,n){var content=n(560);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(174).default)("02e8ffaf",content,!0,{sourceMap:!1})},431:function(e,t,n){var content=n(562);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(174).default)("18fc76a6",content,!0,{sourceMap:!1})},553:function(e,t,n){"use strict";n(415)},554:function(e,t,n){var o=n(173)((function(i){return i[1]}));o.push([e.i,".design-default.icon.small[data-v-91abcea2]{width:16px}.design-default.icon.medium[data-v-91abcea2]{width:24px}.design-default.icon.large[data-v-91abcea2]{width:32px}",""]),o.locals={},e.exports=o},555:function(e,t,n){"use strict";n(416)},556:function(e,t,n){var o=n(173)((function(i){return i[1]}));o.push([e.i,".accordeon.design-default[data-v-4f638268]{display:flex;flex-wrap:wrap;font-family:monospace}.accordeon.design-default[data-v-4f638268] input:checked+label>.icon{transform:rotate(180deg)}.accordeon.design-default[data-v-4f638268] input:checked+label,.accordeon.design-default[data-v-4f638268] input:focus+label,.accordeon.design-default[data-v-4f638268] label:hover{color:#fff;background:#333}.accordeon.design-default[data-v-4f638268] label{display:flex;align-items:center;width:100%;padding:8px;background:#eee}.accordeon.design-default[data-v-4f638268] label .icon{order:0;margin-right:8px;transition:transform .2s}.accordeon.design-default[data-v-4f638268] label>span{flex:1;order:1;font-size:14px;line-height:1}.accordeon.design-default>section[data-v-4f638268]{width:100%}.accordeon.design-default>section>div[data-v-4f638268]{padding:8px;border:1px solid #eee;border-top:0 solid #eee}",""]),o.locals={},e.exports=o},557:function(e,t,n){"use strict";n(429)},558:function(e,t,n){var o=n(173)((function(i){return i[1]}));o.push([e.i,".design-default[data-v-0776a844]{font-family:monospace;background:#eee}.design-default[data-v-0776a844] label{align-items:center;padding:8px;line-height:1;cursor:pointer;background:#eee}.design-default[data-v-0776a844] label>span{font-size:14px}.design-default[data-v-0776a844] input:focus+label{color:#fff;background:#aaa}.design-default[data-v-0776a844] input:checked+label,.design-default[data-v-0776a844] label:hover{color:#fff;background:#333}.design-default[data-v-0776a844] section{background:#fff}.design-default[data-v-0776a844] section>div{padding:8px;border:1px solid #eee;border-top:0 solid #eee}",""]),o.locals={},e.exports=o},559:function(e,t,n){"use strict";n(430)},560:function(e,t,n){var o=n(173)((function(i){return i[1]}));o.push([e.i,"@media (min-width:576px){.collapsible-container.transformable[data-v-0efad96f] label{flex-grow:1;order:0;width:auto}.collapsible-container.transformable[data-v-0efad96f] section{order:1}}@media (--xs){.collapsible-container.transformable[data-v-0efad96f] label{flex-grow:1;order:0;width:auto}.collapsible-container.transformable[data-v-0efad96f] section{order:1}}",""]),o.locals={},e.exports=o},561:function(e,t,n){"use strict";n(431)},562:function(e,t,n){var o=n(173)((function(i){return i[1]}));o.push([e.i,".flyout-container[data-v-406442e6]{position:relative;height:300px}",""]),o.locals={},e.exports=o},658:function(e,t,n){"use strict";n.r(t);var o=n(228),l=n(293),r={components:{BaseIcon:n(198).a},inheritAttrs:!1},c=(n(553),n(172)),d=Object(c.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("base-icon",e._b({staticClass:"design-default"},"base-icon",e.$attrs,!1),[e._t("default")],2)}),[],!1,null,"91abcea2",null).exports,f=n(250),N=n(209),T=n(237),C={components:{Accordeon:l.a,TransitionExpand:f.a,IconDefault:d},inheritAttrs:!1,props:{dataset:{type:N.a,default:function(){return new N.a([{label:"LABEL A",value:"a",content:"CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A "},{label:"LABEL B",value:"b",content:"CONTENT B"},{label:"LABEL C",value:"c",content:"CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C "}],new T.a("default-"+Math.random(),"b"))}}}},v=(n(555),Object(c.a)(C,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("accordeon",e._g(e._b({staticClass:"design-default",attrs:{dataset:e.dataset},scopedSlots:e._u([{key:"label",fn:function(t){var option=t.option;return[n("span",[e._v("\n      "+e._s(option.label)+"\n    ")]),e._v(" "),n("icon-default",{attrs:{size:"medium"}},[n("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"}})])])]}},{key:"content",fn:function(t){var o=t.show,option=t.option;return[n("transition-expand",[n("section",{directives:[{name:"show",rawName:"v-show",value:o,expression:"show"}]},[n("div",[e._t("content",(function(){return[e._v("\n            "+e._s(option.content)+"\n          ")]}),{option:option})],2)])])]}}],null,!0)},"accordeon",e.$attrs,!1),e.$listeners))}),[],!1,null,"4f638268",null).exports),E=n(294),O={components:{FlyoutNavi:E.a,TransitionExpand:f.a},inheritAttrs:!1,props:{dataset:{type:N.a,default:function(){return new N.a([{label:"LABEL A",value:"a",content:"CONTENT A"},{label:"LABEL B",value:"b",content:"CONTENT B"},{label:"LABEL C",value:"c",content:"CONTENT C"}],new T.a("default-"+Math.random(),null))}}}},h=(n(557),Object(c.a)(O,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("flyout-navi",{staticClass:"design-default",attrs:{dataset:e.dataset},scopedSlots:e._u([{key:"label",fn:function(t){var option=t.option;return[n("span",[e._v("\n      "+e._s(option.label)+"\n    ")])]}},{key:"content",fn:function(t){var o=t.show,option=t.option;return[n("transition-expand",[n("section",{directives:[{name:"show",rawName:"v-show",value:o,expression:"show"}]},[n("div",[e._t("content",(function(){return[e._v("\n            "+e._s(option.content)+"\n          ")]}),null,{show:o,option:option})],2)])])]}}],null,!0)})}),[],!1,null,"0776a844",null).exports),_={inheritAttrs:!1},m=(n(559),Object(c.a)(_,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("collapsible-container",e._g(e._b({staticClass:"transformable",attrs:{"hide-native-input":!0},scopedSlots:e._u([{key:"content",fn:function(t){var option=t.option;return[e._v("\n    "+e._s(option.content)+"\n  ")]}}])},"collapsible-container",e.$attrs,!1),e.$listeners))}),[],!1,null,"0efad96f",null).exports),x={components:{CollapsibleContainer:o.a,AccordeonIndex:l.a,AccordeonDefault:v,FlyoutNaviIndex:E.a,FlyoutNaviDefault:h,Transformable:m},data:function(){return{datasetA:y("Label A"),datasetB:y("Label B"),datasetC:y("Label C")}}},y=function(label){return new N.a([{label:label+"1",value:"a",content:"CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A "},{label:label+"2",value:"b",content:"CONTENT B"},{label:label+"3",value:"c",content:"CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C "}],new T.a("default","b"))},A=x,w=(n(561),Object(c.a)(A,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("fieldset",[n("legend",[e._v("CollapsibleContainer")]),e._v(" "),n("collapsible-container",{attrs:{dataset:e.datasetA,collapsible:""}})],1),e._v(" "),n("fieldset",[n("legend",[e._v("Accordeon (Index)")]),e._v(" "),n("accordeon-index",{attrs:{dataset:e.datasetB}})],1),e._v(" "),n("fieldset",[n("legend",[e._v("Accordeon (Default)")]),e._v(" "),n("accordeon-default")],1),e._v(" "),n("hr"),e._v(" "),n("fieldset",[n("legend",[e._v("FlyoutNavi (Index)")]),e._v(" "),n("flyout-navi-index",{attrs:{dataset:e.datasetC}})],1),e._v(" "),n("fieldset",[n("legend",[e._v("FlyoutNavi (Default)")]),e._v(" "),n("div",{staticClass:"flyout-container"},[n("flyout-navi-default")],1)])])}),[],!1,null,"406442e6",null));t.default=w.exports}}]);