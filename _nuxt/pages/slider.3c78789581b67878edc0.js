(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{179:function(t,e,n){var content=n(204);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("10de800f",content,!0,{sourceMap:!1})},203:function(t,e,n){"use strict";n(179)},204:function(t,e,n){var r=n(8)((function(i){return i[1]}));r.push([t.i,'.design-default[data-v-5eca446a]{position:relative;font-family:monospace}.design-default.loading[data-v-5eca446a]{pointer-events:none}.design-default.loading[data-v-5eca446a] *{opacity:0}.design-default.loading[data-v-5eca446a]:after{position:absolute;top:50%;left:50%;box-sizing:border-box;width:1em;height:1em;content:"";border:.2em solid #000;border-top-color:rgba(0,0,0,.3);border-radius:50%;transform:translate(-50%,-50%);transform-origin:50% 50%;animation:spin-data-v-5eca446a .5s linear infinite}@keyframes spin-data-v-5eca446a{0%{transform:translate(-50%,-50%) rotate(0deg)}to{transform:translate(-50%,-50%) rotate(1turn)}}',""]),r.locals={},t.exports=r},226:function(t,e,n){"use strict";var r={components:{ButtonBase:n(166).a},inheritAttrs:!1},l=(n(203),n(4)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button-base",t._g(t._b({staticClass:"design-default",scopedSlots:t._u([{key:"default",fn:function(e){var label=e.label;return[t._t("default",(function(){return[t._v(t._s(label))]}))]}}],null,!0)},"button-base",t.$attrs,!1),t.$listeners))}),[],!1,null,"5eca446a",null);e.a=component.exports},255:function(t,e,n){var content=n(303);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("1b78b552",content,!0,{sourceMap:!1})},256:function(t,e,n){var content=n(305);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("025504d6",content,!0,{sourceMap:!1})},302:function(t,e,n){"use strict";n(255)},303:function(t,e,n){var r=n(8)((function(i){return i[1]}));r.push([t.i,".content[data-v-5ac75797],.content>div[data-v-5ac75797]{display:flex;align-items:center;justify-content:center}.content>div[data-v-5ac75797]{flex:1;aspect-ratio:1/1;background:#ccc}@media (min-width:768px){.content>div[data-v-5ac75797]{aspect-ratio:16/9}}",""]),r.locals={},t.exports=r},304:function(t,e,n){"use strict";n(256)},305:function(t,e,n){var r=n(8)((function(i){return i[1]}));r.push([t.i,".design-default[data-v-510cb445]{position:relative;font-family:monospace}.design-default .navigation[data-v-510cb445]{position:absolute;top:50%;left:0;transform:translateY(-50%)}.design-default .navigation.prev[data-v-510cb445]{right:0;left:auto}.design-default .pagination[data-v-510cb445]{display:flex;justify-content:center}.design-default .pagination ul[data-v-510cb445]{display:none;padding:0;margin:0;list-style:none}.design-default .pagination ul li+li[data-v-510cb445]{margin-left:8px}.design-default .pagination span[data-v-510cb445],.design-default .pagination ul[data-v-510cb445]{margin:0 8px}@media (min-width:768px){.design-default .pagination ul[data-v-510cb445]{display:flex}.design-default .pagination span[data-v-510cb445]{display:none}}",""]),r.locals={},t.exports=r},362:function(t,e,n){"use strict";n.r(e);var r=n(222),l=n(226),o={components:{BaseSlide:n(196).a},inheritAttrs:!1},d=(n(302),n(4)),c=Object(d.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("base-slide",t._g(t._b({},"base-slide",t.$attrs,!1),t.$listeners),[n("div",{staticClass:"content"},[n("div",[t._t("default")],2)])])}),[],!1,null,"5ac75797",null).exports,f={components:{BaseSlider:r.a,BaseButton:l.a,DefaultSlide:c},inheritAttrs:!1,data:()=>({splideId:null,ariaLabel:{prev:"Go to prev slide",next:"Go to next slide",slide:"Go to slide "},arialControls:{prev:"Go to prev slide",next:"Go to next slide",slide:"Go to slide "}})},v=(n(304),Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("base-slider",t._g(t._b({staticClass:"design-default",scopedSlots:t._u([{key:"default",fn:function(e){var r=e.splideId;return[t._t("default",(function(){return[n("default-slide",{attrs:{index:0,"splide-id":r}},[t._v("\n        Default Slide 1\n      ")]),t._v(" "),n("default-slide",{attrs:{index:1,"splide-id":r}},[t._v("\n        Default Slide 2\n      ")]),t._v(" "),n("default-slide",{attrs:{index:2,"splide-id":r}},[t._v("\n        Default Slide 3\n      ")])]}))]}},{key:"afterList",fn:function(e){var r=e.splideId,l=e.go,o=e.hasNext,d=e.hasPrev;return[n("base-button",{staticClass:"navigation",attrs:{disabled:!d,"aria-label":t.ariaLabel.prev,"aria-controls":r+"-track"},on:{click:function(t){return l("<")}}},[t._v("\n      Prev\n    ")]),t._v(" "),n("base-button",{staticClass:"navigation prev",attrs:{disabled:!o,"aria-label":t.ariaLabel.next,"aria-controls":r+"-track"},on:{click:function(t){return l(">")}}},[t._v("\n      Next\n    ")])]}},{key:"afterTrack",fn:function(e){var r=e.splideId,l=e.length,o=e.index,d=e.go,c=e.hasNext,f=e.hasPrev;return[n("div",{staticClass:"pagination"},[n("base-button",{attrs:{disabled:!f,"aria-label":t.ariaLabel.prev,"aria-controls":r+"-track"},on:{click:function(t){return d("<")}}},[t._v("\n        Prev\n      ")]),t._v(" "),n("ul",t._l(l,(function(e){return n("li",{key:e},[n("base-button",{attrs:{disabled:e-1===o,"aria-label":""+t.ariaLabel.slide+(e-1),"aria-controls":r+"-slide"+(e-1)},on:{click:function(t){d(e-1)}}},[t._v("\n            "+t._s(e)+"\n          ")])],1)})),0),t._v(" "),n("span",[t._v(t._s(o+1)+" / "+t._s(l))]),t._v(" "),n("base-button",{attrs:{disabled:!c,"aria-label":t.ariaLabel.next,"aria-controls":r+"-track"},on:{click:function(t){return d(">")}}},[t._v("\n        Next\n      ")])],1)]}}],null,!0)},"base-slider",t.$attrs,!1),t.$listeners))}),[],!1,null,"510cb445",null).exports),_=n(275),x={components:{BaseSlider:r.a,DefaultSlider:v,SampleSlider:_.a},data:()=>({})},m=Object(d.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("fieldset",[n("legend",[t._v("Base")]),t._v(" "),n("base-slider")],1),t._v(" "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),t._v(" "),n("fieldset",[n("legend",[t._v("Default")]),t._v(" "),n("default-slider")],1),t._v(" "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),t._v(" "),n("fieldset",[n("legend",[t._v("Default (Loop)")]),t._v(" "),n("default-slider",{attrs:{options:{type:"loop"}}})],1),t._v(" "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),t._v(" "),n("fieldset",[n("legend",[t._v("Sample")]),t._v(" "),n("sample-slider")],1),t._v(" "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")])}),[],!1,null,null,null);e.default=m.exports}}]);