(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{211:function(e,t,n){var content=n(236);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(170).default)("43e982ea",content,!0,{sourceMap:!1})},212:function(e,t,n){var content=n(238);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(170).default)("0e83f0af",content,!0,{sourceMap:!1})},225:function(e,t,n){"use strict";n(178),n(103);var o={functional:!0,props:{option:{type:String,default:null},value:{type:String,default:null},hideNativeInput:{type:Boolean,default:!1},unselectable:{type:Boolean,default:!1}},render:function(e,t){return[e("input",l(t)),e("label",r(t),[t.scopedSlots.label()]),t.scopedSlots.extend()]}},l=function(e){return{class:{hidden:e.props.hideNativeInput},attrs:Object.assign(e.data.attrs,{type:"radio",checked:c(e)}),domProps:{value:e.props.option,checked:c(e),id:e.data.attrs.id},on:{input:function(t){e.listeners.input(t.target.value)},click:function(t){c(e)&&e.props.unselectable?e.data.on.input(null):e.data.on.input(e.props.option)}}}},r=function(e){return{attrs:{for:e.data.attrs.id},domProps:{for:e.data.attrs.id}}},c=function(e){return e.props.value===e.props.option&&null!==e.props.value},d=o,f=(n(235),n(168)),v={components:{BaseSelect:Object(f.a)(d,undefined,undefined,!1,null,"e2f55444",null).exports},inheritAttrs:!1,props:{dataset:{type:n(205).a,required:!0},collapsible:{type:Boolean,required:!0}},data:function(){return{name:this.dataset.name,model:this.dataset.model,options:this.dataset.options}},methods:{show:function(option,e){return option.value===e.value||!1}}},h=(n(237),Object(f.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"collapsible-container"},e._l(e.options,(function(option){return n("base-select",e._b({key:e.model.name+"-"+option.key,attrs:{id:e.model.name+"-"+option.key,name:e.model.name,option:option.value,unselectable:e.collapsible},scopedSlots:e._u([{key:"label",fn:function(){return[e._t("label",(function(){return[e._v("\n        "+e._s(option.label)+"\n      ")]}),{option:option})]},proxy:!0},{key:"extend",fn:function(){return[e._t("content",(function(){return[e.show(option,e.model)?n("div",[e._v("\n          "+e._s(option.content)+"\n        ")]):e._e()]}),{option:option,show:e.show(option,e.model)})]},proxy:!0}],null,!0),model:{value:e.model.value,callback:function(t){e.$set(e.model,"value",t)},expression:"model.value"}},"base-select",e.$attrs,!1))})),1)}),[],!1,null,"41dc1302",null));t.a=h.exports},235:function(e,t,n){"use strict";n(211)},236:function(e,t,n){var o=n(169)((function(i){return i[1]}));o.push([e.i,"input.hidden[data-v-e2f55444]{position:absolute;width:0;height:0;opacity:0}",""]),o.locals={},e.exports=o},237:function(e,t,n){"use strict";n(212)},238:function(e,t,n){var o=n(169)((function(i){return i[1]}));o.push([e.i,".collapsible-container[data-v-41dc1302] input+label+section{height:0;overflow:hidden}.collapsible-container[data-v-41dc1302] input:checked+label+section{height:auto}",""]),o.locals={},e.exports=o},667:function(e,t,n){"use strict";n.r(t);var o=n(225),l=n(205),r=n(234),c={components:{CollapsibleContainer:o.a},layout:"test",props:{dataset:{type:l.a,default:function(){return new l.a([{label:"Label A",value:"a",content:"Content A"},{label:"Label B",value:"b",content:"Content B"},{label:"Label C",value:"c",content:"Content C"}],new r.a("collapsible--container-test","a"))}}}},d=n(168),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("collapsible-container",{attrs:{dataset:e.dataset,collapsible:""}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);