(window.webpackJsonp=window.webpackJsonp||[]).push([[45,46],{181:function(t,e,n){var content=n(191);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(179).default)("990e4088",content,!0,{sourceMap:!1})},184:function(t,e,n){"use strict";var o={inject:{parentLevel:{from:"parentLevel",default:1}},inheritAttrs:!1,props:{font:{type:[Object,Array],default:function(){return[]}}},data:function(){return{debug:!1}},computed:{contextLevel:function(){return t=(this.parentLevel-this.parentLevel%2)/2,Math.max(1,Math.min(t,6));var t}},mounted:function(){this.debug="debug-headline"in this.$route.query}},r=(n(190),n(177)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("h"+t.contextLevel,t._g(t._b({directives:[{name:"font",rawName:"v-font",value:t.font,expression:"font"}],tag:"component",attrs:{"data-debug":t.debug}},"component",t.$attrs,!1),t.$listeners),[t._t("default"),t._v(" "),t.debug?e("pre",{attrs:{"data-debug-context-level":t.contextLevel}}):t._e()],2)}),[],!1,null,"3796ed0e",null);e.a=component.exports},190:function(t,e,n){"use strict";n(181)},191:function(t,e,n){var o=n(178)((function(i){return i[1]}));o.push([t.i,'[data-debug][data-v-3796ed0e]{position:relative}[data-debug] pre[data-v-3796ed0e]{position:absolute;top:0;right:0;bottom:0;left:0;z-index:10000;margin:0;font-family:monospace;font-weight:400}[data-debug] pre[data-v-3796ed0e]:before{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box;pointer-events:none;content:"";border:2px dotted #333}[data-debug] pre[data-v-3796ed0e]:after{position:absolute;right:0;bottom:0;z-index:10000;padding:5px;font-size:13px;color:#fff;letter-spacing:.1em;content:"H" attr(data-debug-context-level);background:#333}',""]),o.locals={},t.exports=o}}]);