(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{181:function(t,e,n){var content=n(194);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(178).default)("8c27c136",content,!0,{sourceMap:!1})},193:function(t,e,n){"use strict";n(181)},194:function(t,e,n){var o=n(177)((function(i){return i[1]}));o.push([t.i,".lost-container .lost-flex-container{display:flex}@media (max-width:575px){.lost-container .lost-flex-container{padding:0 15px}}@media (--default-max){.lost-container .lost-flex-container{padding:0 15px}}@media (min-width:576px){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(540 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (--xs){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(540 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (min-width:768px){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(720 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (--sm){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(720 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (min-width:992px){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(960 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (--md){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(960 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (min-width:1200px){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(1140 / 16 * 1em);margin-left:auto;margin-right:auto}}@media (--lg){.lost-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:calc(1140 / 16 * 1em);margin-left:auto;margin-right:auto}}",""]),o.locals={},t.exports=o},195:function(t,e,n){"use strict";var o={inheritAttrs:!1,props:{tag:{type:String,required:!1,default:function(){return"div"}},container:{type:Boolean,default:!0}}},r=(n(193),n(176)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.tag,{tag:"div",staticClass:"lost-container"},[t._t("background"),t._v(" "),n("div",{class:{"lost-flex-container":t.container}},[t._t("default")],2)],2)}),[],!1,null,null,null);e.a=component.exports},219:function(t,e,n){var content=n(240);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(178).default)("43e982ea",content,!0,{sourceMap:!1})},220:function(t,e,n){var content=n(242);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(178).default)("0e83f0af",content,!0,{sourceMap:!1})},230:function(t,e,n){"use strict";n(188),n(112);var o={functional:!0,props:{option:{type:String,default:null},value:{type:String,default:null},hideNativeInput:{type:Boolean,default:!1},unselectable:{type:Boolean,default:!1}},render:function(t,e){return[t("input",r(e)),t("label",l(e),[e.scopedSlots.label()]),e.scopedSlots.extend()]}},r=function(t){return{class:{hidden:t.props.hideNativeInput},attrs:Object.assign(t.data.attrs,{type:"radio",checked:c(t)}),domProps:{value:t.props.option,checked:c(t),id:t.data.attrs.id},on:{input:function(e){t.listeners.input(e.target.value)},click:function(e){c(t)&&t.props.unselectable?t.data.on.input(null):t.data.on.input(t.props.option)}}}},l=function(t){return{attrs:{for:t.data.attrs.id},domProps:{for:t.data.attrs.id}}},c=function(t){return t.props.value===t.props.option&&null!==t.props.value},f=o,d=(n(239),n(176)),v={components:{BaseSelect:Object(d.a)(f,undefined,undefined,!1,null,"e2f55444",null).exports},inheritAttrs:!1,props:{dataset:{type:n(212).a,required:!0},collapsible:{type:Boolean,required:!0}},data:function(){return{name:this.dataset.name,model:this.dataset.model,options:this.dataset.options}},methods:{show:function(option,t){return option.value===t.value||!1}}},h=(n(241),Object(d.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"collapsible-container"},t._l(t.options,(function(option){return n("base-select",t._b({key:t.model.name+"-"+option.key,attrs:{id:t.model.name+"-"+option.key,name:t.model.name,option:option.value,unselectable:t.collapsible},scopedSlots:t._u([{key:"label",fn:function(){return[t._t("label",(function(){return[t._v("\n        "+t._s(option.label)+"\n      ")]}),{option:option})]},proxy:!0},{key:"extend",fn:function(){return[t._t("content",(function(){return[t.show(option,t.model)?n("div",[t._v("\n          "+t._s(option.content)+"\n        ")]):t._e()]}),{option:option,show:t.show(option,t.model)})]},proxy:!0}],null,!0),model:{value:t.model.value,callback:function(e){t.$set(t.model,"value",e)},expression:"model.value"}},"base-select",t.$attrs,!1))})),1)}),[],!1,null,"41dc1302",null));e.a=h.exports},235:function(t,e,n){var content=n(279);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(178).default)("4e1c4755",content,!0,{sourceMap:!1})},239:function(t,e,n){"use strict";n(219)},240:function(t,e,n){var o=n(177)((function(i){return i[1]}));o.push([t.i,"input.hidden[data-v-e2f55444]{position:absolute;width:0;height:0;opacity:0}",""]),o.locals={},t.exports=o},241:function(t,e,n){"use strict";n(220)},242:function(t,e,n){var o=n(177)((function(i){return i[1]}));o.push([t.i,".collapsible-container[data-v-41dc1302] input+label+section{height:0;overflow:hidden}.collapsible-container[data-v-41dc1302] input:checked+label+section{height:auto}",""]),o.locals={},t.exports=o},253:function(t,e,n){"use strict";var o={methods:{enter:function(element){element.style.height="auto";var t=getComputedStyle(element).height;element.style.height=0,element.style.opacity=0,requestAnimationFrame((function(){element.style.height=t}))},afterEnter:function(element){element.style.height="auto",element.style.opacity=1},beforeLeave:function(element){element.style.height="auto",element.style.opacity=0},leave:function(element){element.style.height=getComputedStyle(element).height,requestAnimationFrame((function(){element.style.height=0}))}}},r=(n(278),n(176)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("transition",{attrs:{name:"expand"},on:{enter:t.enter,"after-enter":t.afterEnter,"before-leave":t.beforeLeave,leave:t.leave}},[t._t("default")],2)}),[],!1,null,"790772ec",null);e.a=component.exports},278:function(t,e,n){"use strict";n(235)},279:function(t,e,n){var o=n(177)((function(i){return i[1]}));o.push([t.i,"*[data-v-790772ec]{will-change:height opacity;transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden;perspective:1000px}[data-v-790772ec]:not(.expand-enter-active){transition-timing-function:ease-in-out;transition-duration:.35s;transition-property:opacity}.expand-enter-active[data-v-790772ec],.expand-leave-active[data-v-790772ec]{overflow:hidden;transition-timing-function:ease-in-out;transition-duration:.35s;transition-property:height}.expand-enter[data-v-790772ec],.expand-leave-to[data-v-790772ec]{height:0}",""]),o.locals={},t.exports=o},280:function(t,e,n){var content=n(321);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(178).default)("7eaefb62",content,!0,{sourceMap:!1})},298:function(t,e,n){"use strict";var o=n(345),r=n(685),filter=n(653),l=n(212),c={components:{CollapsibleContainer:n(230).a},inheritAttrs:!1,props:{dataset:{type:l.a,required:!0}},data:function(){return{subscriptions:new o.b}},mounted:function(){var t=this,e=this.dataset.model;this.subscriptions.add(Object(r.a)(document,"pointermove",{passive:!0}).pipe(Object(filter.a)((function(n){return!t.$el.contains(n.target)&&null!=e.value}))).subscribe((function(){e.value=null})))},destroyed:function(){this.subscriptions.unsubscribe()}},f=(n(320),n(176)),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("collapsible-container",t._g(t._b({staticClass:"flyout-navi",attrs:{"hide-native-input":!0,dataset:t.dataset,collapsible:!0},scopedSlots:t._u([{key:"label",fn:function(e){var option=e.option;return[t._t("label",(function(){return[t._v("\n      "+t._s(option.label)+"\n    ")]}),{option:option})]}},{key:"content",fn:function(content){return[t._t("content",null,null,content)]}}],null,!0)},"collapsible-container",t.$attrs,!1),t.$listeners))}),[],!1,null,"5e006c7c",null);e.a=component.exports},320:function(t,e,n){"use strict";n(280)},321:function(t,e,n){var o=n(177)((function(i){return i[1]}));o.push([t.i,".flyout-navi[data-v-5e006c7c] {display:flex;flex-wrap:wrap;width:100%}.flyout-navi[data-v-5e006c7c] label{flex-grow:0;order:0;width:auto}.flyout-navi[data-v-5e006c7c] section{order:1;width:100%}",""]),o.locals={},t.exports=o},324:function(t,e,n){"use strict";(function(t){n(191),n(68),n(118);var o=n(212),r=n(238),l=n(360),c=n(685),f=n(664),d=n(684),v=n(195),h=n(649);e.a={components:{LayoutLostContainer:v.a,PageHeaderFlyoutNavi:h.a},props:{dataset:{type:o.a,default:function(){var t=[{label:"Links",value:"a",content:{type:"links",props:{links:[{title:"Link 1",to:"#1"},{title:"Link 2",to:"#2"},{title:"Link 3",to:"#3"}]}}}].map((function(t){var label=t.label,e=t.value,content=t.content;return new l.a(label,e,content)}));return new o.a(t,new r.a("default-a","b"))}}},data:function(){return{visible:0,subscriptions:[]}},mounted:function(){var e=this;this.subscriptions=[Object(c.a)(t,"scroll").pipe(Object(f.a)(0),Object(d.a)()).subscribe((function(n){e.visible=Math.min(t.scrollY/e.$el.offsetHeight,1)}))]},destroyed:function(){this.subscriptions.forEach((function(t){return t.unsubscribe()}))}}}).call(this,n(34))},446:function(t,e,n){var content=n(613);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(178).default)("30d5bca1",content,!0,{sourceMap:!1})},447:function(t,e,n){var content=n(615);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(178).default)("3e6782a0",content,!0,{sourceMap:!1})},612:function(t,e,n){"use strict";n(446)},613:function(t,e,n){var o=n(177)((function(i){return i[1]}));o.push([t.i,".page-header-flyout-navi[data-v-183c0b8f]{position:absolute;top:0;left:0;width:100%}.page-header-flyout-navi[data-v-183c0b8f] label{align-items:center;padding:calc(8 / 16 * 1em);line-height:1;cursor:pointer;background:#eee}.page-header-flyout-navi[data-v-183c0b8f] label>span{font-size:calc(14 / 16 * 1em)}.page-header-flyout-navi[data-v-183c0b8f] input:focus+label{color:#fff;background:#aaa}.page-header-flyout-navi[data-v-183c0b8f] input:checked+label,.page-header-flyout-navi[data-v-183c0b8f] label:hover{color:#fff;background:#333}.page-header-flyout-navi[data-v-183c0b8f] section{background:#fff}.page-header-flyout-navi[data-v-183c0b8f] section>div{max-height:70vh;padding:calc(8 / 16 * 1em);overflow:auto;border:solid calc(1 / 16 * 1em);border-top-width:0}",""]),o.locals={},t.exports=o},614:function(t,e,n){"use strict";n(447)},615:function(t,e,n){var o=n(177)((function(i){return i[1]}));o.push([t.i,".page-header[data-v-7ef95455]{--visible:0;position:sticky;top:0;z-index:100}.page-header .inner[data-v-7ef95455]{position:relative;background:#fff}.page-header .inner .logo-container[data-v-7ef95455]{position:relative;transition:height .1s}.page-header[data-v-7ef95455] .lost-container+.lost-container{background:#eee}.page-header .navigation[data-v-7ef95455]{position:relative;flex-grow:0;flex-shrink:0;flex-basis:99.9%;max-width:99.9%;width:99.9%;height:calc(32 / 16 * 1em)}.page-header .navigation[data-v-7ef95455]:nth-child(1n){margin-right:15px;margin-left:0}.page-header .navigation[data-v-7ef95455]:last-child{margin-right:0}.page-header .navigation[data-v-7ef95455]:nth-child(12n){margin-right:0;margin-left:auto}.page-header .logo[data-v-7ef95455]{display:block;padding:calc(calc(24 / 16 * 1em)*(1 - var(--visible)/3)) calc(8 / 16 * 1em);padding-right:0;text-decoration:none}.page-header .logo>span[data-v-7ef95455]{font-size:calc(calc(32 / 16 * 1em)*(1 - var(--visible)/3))}",""]),o.locals={},t.exports=o},649:function(t,e,n){"use strict";n(69),n(68),n(113),n(114);var o=n(212),r=n(298),l=n(253),c={links:function(){return n.e(33).then(n.bind(null,681))},text:function(){return n.e(39).then(n.bind(null,682))}},f={components:{BaseFlyoutNavi:r.a,TransitionExpand:l.a},inheritAttrs:!1,props:{dataset:{type:o.a,required:!0}},data:function(){return{unsubscribe:null}},mounted:function(){var t=this;this.unsubscribe=this.$router.afterEach((function(){t.dataset.model.value=null}))},destroyed:function(){this.unsubscribe()},methods:{getContentComponent:function(t){return c[String(t)]}}},d=(n(612),n(176)),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("base-flyout-navi",t._g(t._b({staticClass:"page-header-flyout-navi",attrs:{dataset:t.dataset},scopedSlots:t._u([{key:"label",fn:function(e){var option=e.option;return[n("span",{directives:[{name:"font",rawName:"v-font",value:t.$getFont("Poppins",400),expression:"$getFont('Poppins', 400)"}]},[t._v("\n      "+t._s(option.label)+"\n    ")])]}},{key:"content",fn:function(e){var o=e.show,option=e.option;return[n("transition-expand",[n("section",{directives:[{name:"show",rawName:"v-show",value:o,expression:"show"}]},[n("div",[t._t("content",(function(){return[n(t.getContentComponent(option.content.type),t._b({tag:"component"},"component",option.content.props,!1))]}),null,{show:o,option:option})],2)])])]}}],null,!0)},"base-flyout-navi",t.$attrs,!1),t.$listeners))}),[],!1,null,"183c0b8f",null);e.a=component.exports},664:function(t,e,n){"use strict";n.d(e,"a",(function(){return N}));var o=n(457),r=n(423);function l(){return void 0===(t=1)&&(t=1/0),Object(o.a)(r.a,t);var t}var c=n(209);function f(t){return t[t.length-1]}function d(t){return(e=f(t))&&Object(c.a)(e.schedule)?t.pop():void 0;var e}var v=n(244),h=n(296),m=n(243),y=n(294);function x(t,e){return void 0===e&&(e=0),Object(m.a)((function(source,n){source.subscribe(Object(y.a)(n,(function(o){return Object(h.a)(n,t,(function(){return n.next(o)}),e)}),(function(){return Object(h.a)(n,t,(function(){return n.complete()}),e)}),(function(o){return Object(h.a)(n,t,(function(){return n.error(o)}),e)})))}))}function w(t,e){return void 0===e&&(e=0),Object(m.a)((function(source,n){n.add(t.schedule((function(){return source.subscribe(n)}),e))}))}var _=n(254);var O=n(428);function j(input,t){if(!input)throw new Error("Iterable cannot be null");return new _.a((function(e){Object(h.a)(e,t,(function(){var n=input[Symbol.asyncIterator]();Object(h.a)(e,t,(function(){n.next().then((function(t){t.done?e.complete():e.next(t.value)}))}),0,!0)}))}))}var k=n(424),S=n(425),C=n(317),E=n(427),$=n(426),M=n(429),F=n(319);function I(input,t){if(null!=input){if(Object(k.a)(input))return function(input,t){return Object(v.a)(input).pipe(w(t),x(t))}(input,t);if(Object(C.a)(input))return function(input,t){return new _.a((function(e){var i=0;return t.schedule((function(){i===input.length?e.complete():(e.next(input[i++]),e.closed||this.schedule())}))}))}(input,t);if(Object(S.a)(input))return function(input,t){return Object(v.a)(input).pipe(w(t),x(t))}(input,t);if(Object($.a)(input))return j(input,t);if(Object(E.a)(input))return function(input,t){return new _.a((function(e){var n;return Object(h.a)(e,t,(function(){n=input[O.a](),Object(h.a)(e,t,(function(){var t,o,r;try{o=(t=n.next()).value,r=t.done}catch(t){return void e.error(t)}r?e.complete():e.next(o)}),0,!0)})),function(){return Object(c.a)(null==n?void 0:n.return)&&n.return()}}))}(input,t);if(Object(F.a)(input))return function(input,t){return j(Object(F.b)(input),t)}(input,t)}throw Object(M.a)(input)}function L(input,t){return t?I(input,t):Object(v.a)(input)}function A(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return l()(L(t,d(t)))}function N(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=d(t);return Object(m.a)((function(source,e){(n?A(t,source,n):A(t,source)).subscribe(e)}))}},683:function(t,e,n){"use strict";n.r(e);var o=n(324).a,r=(n(614),n(176)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-header",style:{"--visible":t.visible}},[n("div",{staticClass:"inner"},[n("layout-lost-container",[n("div",{staticClass:"logo-container"},[n("nuxt-link",{staticClass:"logo",attrs:{to:"/"}},[n("span",{directives:[{name:"font",rawName:"v-font",value:t.$getFont("Raleway",700),expression:"$getFont('Raleway',700)"}]},[t._v("Foundation Sample")])])],1)]),t._v(" "),n("layout-lost-container",[n("div",{staticClass:"navigation"},[n("page-header-flyout-navi",{staticClass:"flyout-navi",attrs:{dataset:t.dataset}})],1)])],1)])}),[],!1,null,"7ef95455",null);e.default=component.exports},684:function(t,e,n){"use strict";n.d(e,"a",(function(){return _}));var o=n(224),r=n(244),l=n(254),c=n(345),f=n(418),d=Object(f.a)((function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}})),v=n(419),h=n(316),m=function(t){function e(){var e=t.call(this)||this;return e.closed=!1,e.currentObservers=null,e.observers=[],e.isStopped=!1,e.hasError=!1,e.thrownError=null,e}return Object(o.e)(e,t),e.prototype.lift=function(t){var e=new y(this,this);return e.operator=t,e},e.prototype._throwIfClosed=function(){if(this.closed)throw new d},e.prototype.next=function(t){var e=this;Object(h.b)((function(){var n,r;if(e._throwIfClosed(),!e.isStopped){e.currentObservers||(e.currentObservers=Array.from(e.observers));try{for(var l=Object(o.i)(e.currentObservers),c=l.next();!c.done;c=l.next()){c.value.next(t)}}catch(t){n={error:t}}finally{try{c&&!c.done&&(r=l.return)&&r.call(l)}finally{if(n)throw n.error}}}}))},e.prototype.error=function(t){var e=this;Object(h.b)((function(){if(e._throwIfClosed(),!e.isStopped){e.hasError=e.isStopped=!0,e.thrownError=t;for(var n=e.observers;n.length;)n.shift().error(t)}}))},e.prototype.complete=function(){var t=this;Object(h.b)((function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var e=t.observers;e.length;)e.shift().complete()}}))},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var t;return(null===(t=this.observers)||void 0===t?void 0:t.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(e){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,e)},e.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},e.prototype._innerSubscribe=function(t){var e=this,n=this,o=n.hasError,r=n.isStopped,l=n.observers;return o||r?c.a:(this.currentObservers=null,l.push(t),new c.b((function(){e.currentObservers=null,Object(v.a)(l,t)})))},e.prototype._checkFinalizedStatuses=function(t){var e=this,n=e.hasError,o=e.thrownError,r=e.isStopped;n?t.error(o):r&&t.complete()},e.prototype.asObservable=function(){var t=new l.a;return t.source=this,t},e.create=function(t,source){return new y(t,source)},e}(l.a),y=function(t){function e(e,source){var n=t.call(this)||this;return n.destination=e,n.source=source,n}return Object(o.e)(e,t),e.prototype.next=function(t){var e,n;null===(n=null===(e=this.destination)||void 0===e?void 0:e.next)||void 0===n||n.call(e,t)},e.prototype.error=function(t){var e,n;null===(n=null===(e=this.destination)||void 0===e?void 0:e.error)||void 0===n||n.call(e,t)},e.prototype.complete=function(){var t,e;null===(e=null===(t=this.destination)||void 0===t?void 0:t.complete)||void 0===e||e.call(t)},e.prototype._subscribe=function(t){var e,n;return null!==(n=null===(e=this.source)||void 0===e?void 0:e.subscribe(t))&&void 0!==n?n:c.a},e}(m),x=n(344),w=n(243);function _(t){void 0===t&&(t={});var e=t.connector,n=void 0===e?function(){return new m}:e,o=t.resetOnError,l=void 0===o||o,c=t.resetOnComplete,f=void 0===c||c,d=t.resetOnRefCountZero,v=void 0===d||d;return function(t){var e,o,c,d=0,h=!1,m=!1,y=function(){null==o||o.unsubscribe(),o=void 0},_=function(){y(),e=c=void 0,h=m=!1},j=function(){var t=e;_(),null==t||t.unsubscribe()};return Object(w.a)((function(source,t){d++,m||h||y();var w=c=null!=c?c:n();t.add((function(){0!==--d||m||h||(o=O(j,v))})),w.subscribe(t),!e&&d>0&&(e=new x.a({next:function(t){return w.next(t)},error:function(t){m=!0,y(),o=O(_,l,t),w.error(t)},complete:function(){h=!0,y(),o=O(_,f),w.complete()}}),Object(r.a)(source).subscribe(e))}))(t)}}function O(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!0!==e){if(!1!==e){var l=new x.a({next:function(){l.unsubscribe(),t()}});return e.apply(void 0,Object(o.h)([],Object(o.g)(n))).subscribe(l)}}else t()}}}]);