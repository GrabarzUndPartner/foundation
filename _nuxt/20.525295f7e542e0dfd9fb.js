(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{365:function(t,e,r){var content=r(380);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(71).default)("8c27c136",content,!0,{sourceMap:!1})},372:function(t,e,r){"use strict";r(21),r(61),r(15);var l={inheritAttrs:!1,props:{to:{type:[Object,String],required:!0},disabled:{type:Boolean,default:!1},external:{type:Boolean,default:!1}},methods:{isExternal:function(t){return/https:\/\//.test(t)},getHref:function(t){return this.external||this.isExternal(t)?t.replace(/^\//,""):t},listeners:function(t,e){return t=this.disabled||e?function(){}:t,Object.assign({},this.$listeners,{click:t,"keypress.enter":t})}}},n=r(36),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nuxt-link",{staticClass:"link",attrs:{custom:"",to:t.to},scopedSlots:t._u([{key:"default",fn:function(e){var l=e.href,n=e.navigate,o=e.isActive,c=e.isExactActive;return[r("a",t._g(t._b({class:{"nuxt-link-active":o,"nuxt-link-exact-active":c},attrs:{href:!t.disabled&&t.getHref(l),disabled:t.disabled}},"a",Object.assign({},t.$attrs,{to:void 0}),!1),t.listeners(n,t.isExternal(l))),[t._t("default",(function(){return[t._v(t._s(t.$attrs.title))]}))],2)]}}],null,!0)})}),[],!1,null,null,null);e.a=component.exports},379:function(t,e,r){"use strict";r(365)},380:function(t,e,r){var l=r(70)((function(i){return i[1]}));l.push([t.i,".lost-container .lost-flex-container{display:flex}@media (max-width:575px){.lost-container .lost-flex-container{padding:0 15px}}@media (--default-max){.lost-container .lost-flex-container{padding:0 15px}}@media (min-width:576px){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(540 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (--xs){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(540 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (min-width:768px){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(720 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (--sm){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(720 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (min-width:992px){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(960 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (--md){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(960 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (min-width:1200px){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(1140 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (--lg){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(1140 / 16 * 1em);margin-left:auto;margin-right:auto}}",""]),l.locals={},t.exports=l},381:function(t,e,r){"use strict";var l={props:{tag:{type:String,required:!1,default:function(){return"div"}},container:{type:Boolean,default:!0}}},n=(r(379),r(36)),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r(t.tag,{tag:"component",staticClass:"lost-container"},[t._t("background"),t._v(" "),r("div",{class:{"lost-flex-container":t.container}},[t._t("default")],2)],2)}),[],!1,null,null,null);e.a=component.exports},383:function(t,e,r){"use strict";var l={inheritAttrs:!1},n=r(36),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",t._g(t._b({staticClass:"article"},"article",t.$attrs,!1),t.$listeners),[t.$slots.header?r("header",[t._t("header")],2):t._e(),t._v(" "),t._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},401:function(t,e,r){var l=r(4),n=r(402),o=r(113);l({target:"Array",proto:!0},{fill:n}),o("fill")},402:function(t,e,r){"use strict";var l=r(35),n=r(86),o=r(40);t.exports=function(t){for(var e=l(this),r=o(e),c=arguments.length,d=n(c>1?arguments[1]:void 0,r),f=c>2?arguments[2]:void 0,m=void 0===f?r:n(f,r);m>d;)e[d++]=t;return e}},407:function(t,e,r){var content=r(431);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(71).default)("3af46754",content,!0,{sourceMap:!1})},417:function(t,e,r){"use strict";var l=r(372),n=r(383),o={components:{BaseLink:l.a,BaseArticle:n.a},inheritAttrs:!1},c=r(36),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("base-link",t._g(t._b({},"base-link",t.$attrs,!1),t.$listeners),[r("base-article",[t._t("default")],2)],1)}),[],!1,null,null,null);e.a=component.exports},430:function(t,e,r){"use strict";r(407)},431:function(t,e,r){var l=r(70)((function(i){return i[1]}));l.push([t.i,".molecule-teaser[data-v-17d96bde]{text-decoration:none}.molecule-teaser span[data-v-17d96bde]{display:block;margin:calc(10 / 16 * 1em);font-size:calc(16 / 16 * 1em);text-align:center;letter-spacing:calc(.2 / 16 * 1em)}",""]),l.locals={},t.exports=l},454:function(t,e,r){"use strict";var l=r(399),n=r(417),o={components:{SpeedkitPicture:l.a,BaseTeaser:n.a},inheritAttrs:!1,props:{image:{type:Object,required:!0},caption:{type:String,default:"Teaser Caption"}}},c=(r(430),r(36)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("base-teaser",t._g(t._b({staticClass:"molecule-teaser",scopedSlots:t._u([{key:"default",fn:function(){return[r("speedkit-picture",t._b({},"speedkit-picture",t.image,!1)),t._v(" "),r("span",{directives:[{name:"font",rawName:"v-font",value:t.$getFont("Poppins",500),expression:"$getFont('Poppins', 500)"}]},[t._v(t._s(t.caption))])]},proxy:!0}])},"base-teaser",t.$attrs,!1),t.$listeners))}),[],!1,null,"17d96bde",null);e.a=component.exports},501:function(t,e,r){var content=r(574);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(71).default)("39fca0e1",content,!0,{sourceMap:!1})},573:function(t,e,r){"use strict";r(501)},574:function(t,e,r){var l=r(70)((function(i){return i[1]}));l.push([t.i,".organism-teaser-wall .teasers[data-v-340f9d07]{--columns:1;display:flex;flex-wrap:wrap}@media (min-width:768px){.organism-teaser-wall .teasers[data-v-340f9d07]{--columns:2;flex-grow:0;flex-shrink:0;flex-basis:calc(83.25% - 2.5px);max-width:calc(83.25% - 2.5px);width:calc(83.25% - 2.5px);margin-left:calc(8.325% + 1.25px) !important}.organism-teaser-wall .teasers[data-v-340f9d07]:nth-child(1n){margin-right:15px;margin-left:0}.organism-teaser-wall .teasers[data-v-340f9d07]:last-child{margin-right:0}.organism-teaser-wall .teasers[data-v-340f9d07]:nth-child(12n){margin-right:0;margin-left:auto}}@media (--sm){.organism-teaser-wall .teasers[data-v-340f9d07]{--columns:2;flex-grow:0;flex-shrink:0;flex-basis:calc(83.25% - 2.5px);max-width:calc(83.25% - 2.5px);width:calc(83.25% - 2.5px);margin-left:calc(8.325% + 1.25px) !important}.organism-teaser-wall .teasers[data-v-340f9d07]:nth-child(1n){margin-right:15px;margin-left:0}.organism-teaser-wall .teasers[data-v-340f9d07]:last-child{margin-right:0}.organism-teaser-wall .teasers[data-v-340f9d07]:nth-child(12n){margin-right:0;margin-left:auto}}@media (min-width:1200px){.organism-teaser-wall .teasers[data-v-340f9d07]{--columns:3;flex-grow:0;flex-shrink:0;flex-basis:calc(83.25% - 2.5px);max-width:calc(83.25% - 2.5px);width:calc(83.25% - 2.5px);margin-left:calc(8.325% + 1.25px) !important}.organism-teaser-wall .teasers[data-v-340f9d07]:nth-child(1n){margin-right:15px;margin-left:0}.organism-teaser-wall .teasers[data-v-340f9d07]:last-child{margin-right:0}.organism-teaser-wall .teasers[data-v-340f9d07]:nth-child(12n){margin-right:0;margin-left:auto}}@media (--lg){.organism-teaser-wall .teasers[data-v-340f9d07]{--columns:3;flex-grow:0;flex-shrink:0;flex-basis:calc(83.25% - 2.5px);max-width:calc(83.25% - 2.5px);width:calc(83.25% - 2.5px);margin-left:calc(8.325% + 1.25px) !important}.organism-teaser-wall .teasers[data-v-340f9d07]:nth-child(1n){margin-right:15px;margin-left:0}.organism-teaser-wall .teasers[data-v-340f9d07]:last-child{margin-right:0}.organism-teaser-wall .teasers[data-v-340f9d07]:nth-child(12n){margin-right:0;margin-left:auto}}.organism-teaser-wall .teasers>*[data-v-340f9d07]{box-sizing:border-box;display:block;width:calc(100%/var(--columns));padding:calc(20 / 16 * 1em)}",""]),l.locals={},t.exports=l},604:function(t,e,r){"use strict";r.r(e);r(26),r(401),r(15);var l=r(381),n=r(454),o={components:{LayoutLostContainer:l.a,Teaser:n.a},props:{teasers:{type:Array,default:function(){return Array(8).fill({}).map((function(t,e){return Object.assign({},c(),{caption:"Teaser "+e})}))}}}},c=function(){return{to:"/",image:{title:"Teaser",sources:[{src:"/img/1080x1080.jpg",sizes:{default:"100vw",xxs:"100vw",xs:"100vw",sm:"100vw",md:"100vw",lg:"100vw",xl:"100vw",xxl:"100vw"}}]}}},d=o,f=(r(573),r(36)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("layout-lost-container",{staticClass:"organism-teaser-wall"},[r("div",{staticClass:"teasers"},t._l(t.teasers,(function(e,l){return r("teaser",t._b({key:l},"teaser",e,!1))})),1)])}),[],!1,null,"340f9d07",null);e.default=component.exports}}]);