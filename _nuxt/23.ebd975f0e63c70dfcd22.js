(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{158:function(t,e,r){var content=r(181);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(153).default)("8c27c136",content,!0,{sourceMap:!1})},167:function(t,e,r){"use strict";r(64),r(96);var n={inheritAttrs:!1,props:{to:{type:[Object,String],required:!0},disabled:{type:Boolean,default:!1},external:{type:Boolean,default:!1}},methods:{isExternal:function(t){return"string"==typeof t&&/^https?:\/\//.test(t)},getHref:function(t){return this.external||this.isExternal(this.to)?this.to:t},listeners:function(t,e){return t=this.disabled||e?function(){}:t,Object.assign({},this.$listeners,{click:t,"keypress.enter":t})}}},l=r(151),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nuxt-link",{attrs:{custom:"",to:t.to},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.href,l=e.navigate,o=e.isActive,c=e.isExactActive;return[r("a",t._g(t._b({class:{"nuxt-link-active":o,"nuxt-link-exact-active":c},attrs:{href:!t.disabled&&t.getHref(n),disabled:t.disabled}},"a",Object.assign({},t.$attrs,{to:void 0}),!1),t.listeners(l,t.isExternal(n))),[t._t("default",(function(){return[t._v(t._s(t.$attrs.title))]}))],2)]}}],null,!0)})}),[],!1,null,null,null);e.a=component.exports},180:function(t,e,r){"use strict";r(158)},181:function(t,e,r){var n=r(152)((function(i){return i[1]}));n.push([t.i,".lost-container .lost-flex-container{display:flex}@media (max-width:575px){.lost-container .lost-flex-container{padding:0 15px}}@media (--default-max){.lost-container .lost-flex-container{padding:0 15px}}@media (min-width:576px){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(540 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (--xs){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(540 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (min-width:768px){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(720 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (--sm){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(720 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (min-width:992px){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(960 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (--md){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(960 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (min-width:1200px){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(1140 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (--lg){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(1140 / 16 * 1em);margin-left:auto;margin-right:auto}}",""]),n.locals={},t.exports=n},182:function(t,e,r){"use strict";var n={props:{tag:{type:String,required:!1,default:function(){return"div"}},container:{type:Boolean,default:!0}}},l=(r(180),r(151)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r(t.tag,{tag:"component",staticClass:"lost-container"},[t._t("background"),t._v(" "),r("div",{class:{"lost-flex-container":t.container}},[t._t("default")],2)],2)}),[],!1,null,null,null);e.a=component.exports},186:function(t,e,r){"use strict";var n={inheritAttrs:!1},l=r(151),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",t._g(t._b({staticClass:"article"},"article",t.$attrs,!1),t.$listeners),[t.$slots.header?r("header",[t._t("header")],2):t._e(),t._v(" "),t._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},235:function(t,e,r){var n=r(20),l=r(236),o=r(104);n({target:"Array",proto:!0},{fill:l}),o("fill")},236:function(t,e,r){"use strict";var n=r(22),l=r(67),o=r(29);t.exports=function(t){for(var e=n(this),r=o(e),c=arguments.length,f=l(c>1?arguments[1]:void 0,r),d=c>2?arguments[2]:void 0,m=void 0===d?r:l(d,r);m>f;)e[f++]=t;return e}},241:function(t,e,r){var content=r(278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(153).default)("3af46754",content,!0,{sourceMap:!1})},251:function(t,e,r){"use strict";var n=r(167),l=r(186),o={components:{BaseLink:n.a,BaseArticle:l.a},inheritAttrs:!1},c=r(151),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("base-link",t._g(t._b({},"base-link",t.$attrs,!1),t.$listeners),[r("base-article",[t._t("default")],2)],1)}),[],!1,null,null,null);e.a=component.exports},277:function(t,e,r){"use strict";r(241)},278:function(t,e,r){var n=r(152)((function(i){return i[1]}));n.push([t.i,".molecule-teaser[data-v-17d96bde]{text-decoration:none}.molecule-teaser span[data-v-17d96bde]{display:block;margin:calc(10 / 16 * 1em);font-size:calc(16 / 16 * 1em);text-align:center;letter-spacing:calc(.2 / 16 * 1em)}",""]),n.locals={},t.exports=n},301:function(t,e,r){"use strict";var n=r(214),l=r(251),o={components:{SpeedkitPicture:n.a,BaseTeaser:l.a},inheritAttrs:!1,props:{image:{type:Object,required:!0},caption:{type:String,default:"Teaser Caption"}}},c=(r(277),r(151)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("base-teaser",t._g(t._b({staticClass:"molecule-teaser",scopedSlots:t._u([{key:"default",fn:function(){return[r("speedkit-picture",t._b({},"speedkit-picture",t.image,!1)),t._v(" "),r("span",{directives:[{name:"font",rawName:"v-font",value:t.$getFont("Poppins",500),expression:"$getFont('Poppins', 500)"}]},[t._v(t._s(t.caption))])]},proxy:!0}])},"base-teaser",t.$attrs,!1),t.$listeners))}),[],!1,null,"17d96bde",null);e.a=component.exports},410:function(t,e,r){var content=r(591);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(153).default)("39fca0e1",content,!0,{sourceMap:!1})},590:function(t,e,r){"use strict";r(410)},591:function(t,e,r){var n=r(152)((function(i){return i[1]}));n.push([t.i,".organism-teaser-wall .teasers[data-v-340f9d07]{--columns:1;display:flex;flex-wrap:wrap}@media (min-width:768px){.organism-teaser-wall .teasers[data-v-340f9d07]{--columns:2;flex-grow:0;flex-shrink:0;flex-basis:calc(83.25% - 2.5px);max-width:calc(83.25% - 2.5px);width:calc(83.25% - 2.5px);margin-left:calc(8.325% + 1.25px) !important}.organism-teaser-wall .teasers[data-v-340f9d07]:nth-child(1n){margin-right:15px;margin-left:0}.organism-teaser-wall .teasers[data-v-340f9d07]:last-child{margin-right:0}.organism-teaser-wall .teasers[data-v-340f9d07]:nth-child(12n){margin-right:0;margin-left:auto}}@media (--sm){.organism-teaser-wall .teasers[data-v-340f9d07]{--columns:2;flex-grow:0;flex-shrink:0;flex-basis:calc(83.25% - 2.5px);max-width:calc(83.25% - 2.5px);width:calc(83.25% - 2.5px);margin-left:calc(8.325% + 1.25px) !important}.organism-teaser-wall .teasers[data-v-340f9d07]:nth-child(1n){margin-right:15px;margin-left:0}.organism-teaser-wall .teasers[data-v-340f9d07]:last-child{margin-right:0}.organism-teaser-wall .teasers[data-v-340f9d07]:nth-child(12n){margin-right:0;margin-left:auto}}@media (min-width:1200px){.organism-teaser-wall .teasers[data-v-340f9d07]{--columns:3;flex-grow:0;flex-shrink:0;flex-basis:calc(83.25% - 2.5px);max-width:calc(83.25% - 2.5px);width:calc(83.25% - 2.5px);margin-left:calc(8.325% + 1.25px) !important}.organism-teaser-wall .teasers[data-v-340f9d07]:nth-child(1n){margin-right:15px;margin-left:0}.organism-teaser-wall .teasers[data-v-340f9d07]:last-child{margin-right:0}.organism-teaser-wall .teasers[data-v-340f9d07]:nth-child(12n){margin-right:0;margin-left:auto}}@media (--lg){.organism-teaser-wall .teasers[data-v-340f9d07]{--columns:3;flex-grow:0;flex-shrink:0;flex-basis:calc(83.25% - 2.5px);max-width:calc(83.25% - 2.5px);width:calc(83.25% - 2.5px);margin-left:calc(8.325% + 1.25px) !important}.organism-teaser-wall .teasers[data-v-340f9d07]:nth-child(1n){margin-right:15px;margin-left:0}.organism-teaser-wall .teasers[data-v-340f9d07]:last-child{margin-right:0}.organism-teaser-wall .teasers[data-v-340f9d07]:nth-child(12n){margin-right:0;margin-left:auto}}.organism-teaser-wall .teasers>*[data-v-340f9d07]{box-sizing:border-box;display:block;width:calc(100%/var(--columns));padding:calc(20 / 16 * 1em)}",""]),n.locals={},t.exports=n},625:function(t,e,r){"use strict";r.r(e);r(156),r(235),r(96);var n=r(182),l=r(301),o={components:{LayoutLostContainer:n.a,Teaser:l.a},props:{teasers:{type:Array,default:function(){return Array(8).fill({}).map((function(t,e){return Object.assign({},c(),{caption:"Teaser "+e})}))}}}},c=function(){return{to:"/",image:{title:"Teaser",sources:[{src:"/img/1080x1080.jpg",sizes:{default:"100vw",xxs:"100vw",xs:"100vw",sm:"100vw",md:"100vw",lg:"100vw",xl:"100vw",xxl:"100vw"}}]}}},f=o,d=(r(590),r(151)),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("layout-lost-container",{staticClass:"organism-teaser-wall"},[r("div",{staticClass:"teasers"},t._l(t.teasers,(function(e,n){return r("teaser",t._b({key:n},"teaser",e,!1))})),1)])}),[],!1,null,"340f9d07",null);e.default=component.exports}}]);