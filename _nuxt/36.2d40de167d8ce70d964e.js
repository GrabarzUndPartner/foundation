(window.webpackJsonp=window.webpackJsonp||[]).push([[36,45],{19:function(t,e,n){var content=n(30);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("7318a615",content,!0,{sourceMap:!1})},20:function(t,e,n){var content=n(35);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("2904bf74",content,!0,{sourceMap:!1})},224:function(t,e,n){var content=n(371);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("7c674a65",content,!0,{sourceMap:!1})},26:function(t,e,n){"use strict";var l={inheritAttrs:!1,props:{to:{type:[Object,String],required:!0},disabled:{type:Boolean,default:!1},external:{type:Boolean,default:!1}},methods:{isExternal:t=>"string"==typeof t&&/^https?:\/\//.test(t),getHref(t){return this.external||this.isExternal(this.to)?this.to:t},listeners(t,e){return t=this.disabled||e?()=>{}:t,Object.assign({},this.$listeners,{click:t,"keypress.enter":t})}}},r=n(6),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nuxt-link",{attrs:{custom:"",to:t.to},scopedSlots:t._u([{key:"default",fn:function(e){var l=e.href,r=e.navigate,o=e.isActive,c=e.isExactActive;return[n("a",t._g(t._b({class:{"nuxt-link-active":o,"nuxt-link-exact-active":c},attrs:{href:!t.disabled&&t.getHref(l),disabled:t.disabled}},"a",Object.assign({},t.$attrs,{to:void 0}),!1),t.listeners(r,t.isExternal(l))),[t._t("default",(function(){return[t._v(t._s(t.$attrs.title))]}))],2)]}}],null,!0)})}),[],!1,null,null,null);e.a=component.exports},29:function(t,e,n){"use strict";n(19)},30:function(t,e,n){var l=n(7)((function(i){return i[1]}));l.push([t.i,".svg[data-v-0f8a39f4]{display:inline-block;vertical-align:middle}.svg svg[data-v-0f8a39f4]{display:block;width:100%}",""]),l.locals={},t.exports=l},31:function(t,e,n){"use strict";var l={inheritAttrs:!1},r=(n(29),n(6)),o={components:{BaseSvg:Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i",t._g(t._b({staticClass:"svg"},"i",t.$attrs,!1),t.$listeners),[t._t("default",(function(){return[n("svg",{attrs:{viewBox:"0 0 72 72",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M64.664 6.504a3 3 0 0 0-4.16.832l-33.97 50.955L11.121 42.88a2.998 2.998 0 0 0-4.242 0 2.998 2.998 0 0 0 0 4.242l18 18a2.996 2.996 0 0 0 2.416.864 2.998 2.998 0 0 0 2.201-1.32l36-54a3 3 0 0 0-.832-4.16",fill:"#00358E","fill-rule":"evenodd"}})])]}))],2)}),[],!1,null,"0f8a39f4",null).exports},inheritAttrs:!1,props:{size:{type:String,default:null}}},c=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("base-svg",t._b({staticClass:"icon",class:t.size},"base-svg",t.$attrs,!1),[t._t("default")],2)}),[],!1,null,null,null);e.a=c.exports},32:function(t,e,n){"use strict";var l=n(31);const r={loading:()=>n.e(47).then(n.bind(null,414)),upload:()=>n.e(52).then(n.t.bind(null,386,7)),chevronLeft:()=>n.e(50).then(n.t.bind(null,387,7)),chevronRight:()=>n.e(51).then(n.t.bind(null,388,7))};var o={components:{BaseIcon:l.a},props:{icon:{type:String,required:!0}},computed:{mappedIcon(){return r[String(this.icon)]}}},c=(n(34),n(6)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("base-icon",[n(t.mappedIcon,{tag:"component"})],1)}),[],!1,null,"c5fa45bc",null);e.a=component.exports},34:function(t,e,n){"use strict";n(20)},35:function(t,e,n){var l=n(7)((function(i){return i[1]}));l.push([t.i,"[data-v-c5fa45bc] svg{display:block}",""]),l.locals={},t.exports=l},37:function(t,e,n){var content=n(44);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("4a7f956b",content,!0,{sourceMap:!1})},370:function(t,e,n){"use strict";n(224)},371:function(t,e,n){var l=n(7)((function(i){return i[1]}));l.push([t.i,".page-header-links ul[data-v-44ead726]{display:flex;flex-wrap:wrap;padding:0;margin:0;list-style:none}.page-header-links li[data-v-44ead726]{width:100%;padding:calc(8 / 16 * 1em)}@media (min-width:768px){.page-header-links li[data-v-44ead726]{width:16.66667%}}@media (--sm){.page-header-links li[data-v-44ead726]{width:16.66667%}}.page-header-links a.nuxt-link-exact-active[data-v-44ead726]{font-weight:700}",""]),l.locals={},t.exports=l},415:function(t,e,n){"use strict";n.r(e);var l={components:{AtomLink:n(46).default},props:{links:{type:Array,default:()=>[{title:"Link 1",to:"#1"},{title:"Link 2",to:"#2"},{title:"Link 3",to:"#3"}]}}},r=(n(370),n(6)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"font",rawName:"v-font",value:[t.$getFont("Poppins",400,"normal"),t.$getFont("Poppins",700,"normal",{selector:".nuxt-link-exact-active"})],expression:"[\n    $getFont('Poppins',400, 'normal'),\n    $getFont('Poppins',700, 'normal', {selector: '.nuxt-link-exact-active'})\n  ]"}],staticClass:"page-header-links"},[n("ul",t._l(t.links,(function(link){return n("li",{key:link.title},[n("atom-link",t._b({},"atom-link",link,!1))],1)})),0)])}),[],!1,null,"44ead726",null);e.default=component.exports},43:function(t,e,n){"use strict";n(37)},44:function(t,e,n){var l=n(7)((function(i){return i[1]}));l.push([t.i,".atom-link[data-v-5879765e]{position:relative;display:flex;align-items:center;color:#000}.atom-link.loading[data-v-5879765e]{pointer-events:none}.atom-link[disabled][data-v-5879765e]{cursor:not-allowed;opacity:.5}.atom-link[data-v-5879765e] .icon{width:1em;margin:0 .3em}@keyframes spin-data-v-5879765e{0%{transform:translate(-50%,-50%) rotate(0deg)}to{transform:translate(-50%,-50%) rotate(1turn)}}",""]),l.locals={},t.exports=l},46:function(t,e,n){"use strict";n.r(e);var l=n(26),r=n(32),o={components:{BaseLink:l.a,Icon:r.a},props:{icon:{type:String,default:null},loading:{type:Boolean,default:null},title:{type:String,default:"Sample Link"}},computed:{classes(){return{loading:this.loading}}}},c=(n(43),n(6)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("base-link",t._g(t._b({staticClass:"atom-link",class:t.classes,attrs:{title:t.title}},"base-link",t.$attrs,!1),t.$listeners),[t.icon||t.loading?n("icon",{attrs:{icon:t.loading?"loading":t.icon}}):t._e(),t._v(" "),t._t("default",(function(){return[t._v("\n    "+t._s(t.title)+"\n  ")]})),t._v(" "),t._t("after")],2)}),[],!1,null,"5879765e",null);e.default=component.exports}}]);