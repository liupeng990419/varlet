(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[7441],{2103:(n,e,a)=>{"use strict";a.d(e,{Z:()=>b});var i=a(7875),t=a(4825),o={class:"var-swipe",ref:"swipeEl"},r=a(641),l=a(8715),u=a(7276),s=a(8004),c=a(8322);const v=(0,i.aZ)({name:"VarSwipe",props:s.N,setup:function(n){var e,a,t,o,s,v=(0,r.iH)(null),d=(0,r.iH)(0),f=(0,i.Fl)((function(){return n.vertical})),p=(0,r.iH)(0),h=(0,r.iH)(0),b=(0,r.iH)(!1),w=(0,r.iH)(0),m=(0,l.bB)(),x=m.swipeItems,g=m.bindSwipeItems,y=m.length,_=!1,k=-1,T=function(n){return x.find((function(e){return e.index.value===n}))},z=function(e){var a=(0,c.hj)(e)?e:Math.floor((h.value-d.value/2)/-d.value),i=n.loop;return a<=-1?i?-1:0:a>=y.value?i?y.value:y.value-1:a},I=function(e){var a=n.loop;return e<0?a?y.value-1:0:e>y.value-1?a?0:y.value-1:e},S=function(n){var e=h.value>=d.value,a=h.value<=-p.value,i=-(p.value-d.value);b.value=!0,(e||a)&&(b.value=!0,h.value=a?0:i,T(0).setTranslate(0),T(y.value-1).setTranslate(0)),(0,u.xX)((function(){b.value=!1,null==n||n()}))},C=function e(){var a=n.autoplay;!a||y.value<=1||(E(),k=window.setTimeout((function(){N(),e()}),(0,c.He)(a)))},E=function(){k&&clearInterval(k)},B=function(){d.value=n.vertical?v.value.offsetHeight:v.value.offsetWidth,p.value=d.value*y.value,b.value=!0,w.value=I((0,c.He)(n.initialIndex)),h.value=w.value*-d.value,(0,u.xX)((function(){b.value=!1})),C()},N=function(){if(!(y.value<=1)){var e=n.loop,a=n.onChange,i=w.value;w.value=I(i+1),null==a||a(w.value),S((function(){if(i===y.value-1&&e)return T(0).setTranslate(p.value),void(h.value=y.value*-d.value);i!==y.value-1&&(h.value=w.value*-d.value)}))}},Y=function(){if(!(y.value<=1)){var e=n.loop,a=n.onChange,i=w.value;w.value=I(i-1),null==a||a(w.value),S((function(){if(0===i&&e)return T(y.value-1).setTranslate(-p.value),void(h.value=d.value);0!==i&&(h.value=w.value*-d.value)}))}};return g({size:d,vertical:f}),(0,i.YP)((function(){return y.value}),B),(0,i.Ah)(E),{length:y,index:w,swipeEl:v,trackSize:p,translate:h,lockDuration:b,handleTouchstart:function(i){if(!(y.value<=1)&&n.touchable){var o=i.touches[0],r=o.clientX,l=o.clientY;e=r,a=l,t=performance.now(),_=!0,E(),S((function(){b.value=!0}))}},handleTouchmove:function(e){if(_&&n.touchable){var a=e.touches[0],i=a.clientX,t=a.clientY,r=void 0!==o?i-o:0,l=void 0!==s?t-s:0;o=i,s=t,h.value+=n.vertical?l:r,n.loop&&(h.value>=0&&T(y.value-1).setTranslate(-p.value),h.value<=-(p.value-d.value)&&T(0).setTranslate(p.value),h.value>-(p.value-d.value)&&h.value<0&&(T(y.value-1).setTranslate(0),T(0).setTranslate(0)))}},handleTouchend:function(){if(_){var i=n.vertical,r=n.onChange,l=i?s<a:o<e,u=i?Math.abs(a-s):Math.abs(e-o),c=performance.now()-t<=250&&u>=20?z(l?w.value+1:w.value-1):z();_=!1,b.value=!1,o=void 0,s=void 0,h.value=c*-d.value;var v=w.value;w.value=function(e){var a=n.loop;return-1===e?a?y.value-1:0:e===y.value?a?0:y.value-1:e}(c),C(),v!==w.value&&(null==r||r(w.value))}},next:N,prev:Y,to:function(n){if(!(y.value<=1||n===w.value)){var e=(n=(n=n<0?0:n)>=y.value?y.value:n)>w.value?N:Y;Array.from({length:Math.abs(n-w.value)}).forEach(e)}},resize:B,toNumber:c.He}}});var d=a(6062),f=a.n(d),p=a(4249);f()(p.Z,{insert:"head",singleton:!1}),p.Z.locals,v.render=function(n,e,a,r,l,u){return(0,i.wg)(),(0,i.j4)("div",o,[(0,i.Wm)("div",{class:["var-swipe__track",[n.vertical?"var-swipe--vertical":null]],style:{width:n.vertical?null:"".concat(n.trackSize,"px"),height:n.vertical?"".concat(n.trackSize,"px"):null,transform:"translate".concat(n.vertical?"Y":"X","(").concat(n.translate,"px)"),transitionDuration:n.lockDuration?"0ms":"".concat(n.toNumber(n.duration),"ms")},onTouchstart:e[1]||(e[1]=function(){return n.handleTouchstart&&n.handleTouchstart.apply(n,arguments)}),onTouchmove:e[2]||(e[2]=(0,t.iM)((function(){return n.handleTouchmove&&n.handleTouchmove.apply(n,arguments)}),["prevent"])),onTouchend:e[3]||(e[3]=function(){return n.handleTouchend&&n.handleTouchend.apply(n,arguments)})},[(0,i.WI)(n.$slots,"default")],38),(0,i.WI)(n.$slots,"indicator",{index:n.index,length:n.length},(function(){return[n.indicator&&n.length?((0,i.wg)(),(0,i.j4)("div",{key:0,class:["var-swipe__indicators",[n.vertical?"var-swipe--indicators-vertical":null]]},[((0,i.wg)(!0),(0,i.j4)(i.HY,null,(0,i.Ko)(n.length,(function(e,a){return(0,i.wg)(),(0,i.j4)("div",{class:["var-swipe__indicator",[n.index===a?"var-swipe--indicator-active":null,n.vertical?"var-swipe--indicator-vertical":null]],style:{background:n.indicatorColor},key:e,onClick:function(e){return n.to(a)}},null,14,["onClick"])})),128))],2)):(0,i.kq)("v-if",!0)]}))],512)};const h=v;h.install=function(n){n.component(h.name,h)};const b=h},8004:(n,e,a)=>{"use strict";a.d(e,{N:()=>i});var i={loop:{type:Boolean,default:!0},autoplay:{type:[String,Number]},duration:{type:[String,Number],default:300},initialIndex:{type:[String,Number],default:0},indicator:{type:Boolean,default:!0},indicatorColor:{type:String},vertical:{type:Boolean,default:!1},touchable:{type:Boolean,default:!0},onChange:{type:Function}}},8715:(n,e,a)=>{"use strict";a.d(e,{AV:()=>t,IC:()=>o,bB:()=>r});var i=a(3638),t=Symbol("SWIPE_BIND_SWIPE_ITEM_KEY"),o=Symbol("SWIPE_COUNT_SWIPE_ITEM_KEY");function r(){var n=(0,i.$E)(t),e=n.childProviders,a=n.bindChildren;return{length:(0,i.nN)(o).length,swipeItems:e,bindSwipeItems:a}}},7441:(n,e,a)=>{"use strict";a.d(e,{Z:()=>p});var i=a(7875),t=a(6156),o=a(2103),r=a(641),l=a(7561),u={active:{type:[String,Number],default:0},canSwipe:{type:Boolean,default:!0},loop:{type:Boolean,default:!1},"onUpdate:active":{type:Function}};const s=(0,i.aZ)({name:"VarTabsItems",components:(0,t.Z)({},o.Z.name,o.Z),props:u,setup:function(n){var e=(0,r.iH)(null),a=(0,l.iu)(),t=a.tabItemList,o=a.bindTabItem,u=a.length,s=function(n){var a,i,o=function(n){return t.find((function(e){var a=e.name;return n===a.value}))}(i=n)||function(n){return t.find((function(e){var a=e.index;return n===a.value}))}(i);o&&(t.forEach((function(n){return(0,n.setCurrent)(!1)})),o.setCurrent(!0),null===(a=e.value)||void 0===a||a.to(o.index.value))};return o({}),(0,i.YP)((function(){return n.active}),s),(0,i.YP)((function(){return u.value}),(function(){return s(n.active)})),{swipe:e,handleSwipeChange:function(e){var a,i,o=t.find((function(n){return n.index.value===e})),r=null!==(a=o.name.value)&&void 0!==a?a:o.index.value;null===(i=n["onUpdate:active"])||void 0===i||i.call(n,r)}}}});var c=a(6062),v=a.n(c),d=a(2979);v()(d.Z,{insert:"head",singleton:!1}),d.Z.locals,s.render=function(n,e,a,t,o,r){var l=(0,i.up)("var-swipe");return(0,i.wg)(),(0,i.j4)(l,{class:"var-tabs-items",ref:"swipe",loop:n.loop,touchable:n.canSwipe,indicator:!1,onChange:n.handleSwipeChange},{default:(0,i.w5)((function(){return[(0,i.WI)(n.$slots,"default")]})),_:3},8,["loop","touchable","onChange"])};const f=s;f.install=function(n){n.component(f.name,f)};const p=f},7561:(n,e,a)=>{"use strict";a.d(e,{e9:()=>t,yW:()=>o,iu:()=>r});var i=a(3638),t=Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY"),o=Symbol("TABS_ITEMS_COUNT_TAB_ITEM_KEY");function r(){var n=(0,i.$E)(t),e=n.bindChildren,a=n.childProviders;return{length:(0,i.nN)(o).length,tabItemList:a,bindTabItem:e}}},4249:(n,e,a)=>{"use strict";a.d(e,{Z:()=>o});var i=a(2609),t=a.n(i)()((function(n){return n[1]}));t.push([n.id,".var--box {\n  box-sizing: border-box;\n}\n.var--box * {\n  box-sizing: border-box;\n}\n.var--relative {\n  position: relative;\n}\n.var--absolute {\n  position: absolute;\n}\n.var--hidden {\n  overflow: hidden;\n}\n.var--lock {\n  overflow: hidden;\n}\n.var--block {\n  display: block;\n}\n.var--inline-block {\n  display: inline-block;\n}\n.var--flex {\n  display: flex;\n}\n.var--inline-flex {\n  display: inline-flex;\n}\n:root {\n  --font-size-xs: 10px;\n  --font-size-sm: 12px;\n  --font-size-md: 14px;\n  --font-size-lg: 16px;\n  --icon-size-xs: 16px;\n  --icon-size-sm: 18px;\n  --icon-size-md: 20px;\n  --icon-size-lg: 22px;\n  --color-primary: #3a7afe;\n  --color-info: #00afef;\n  --color-success: #00c48f;\n  --color-warning: #ff9f00;\n  --color-danger: #f44336;\n  --color-disabled: #e0e0e0;\n  --cubic-bezier: cubic-bezier(0.25, 0.8, 0.5, 1);\n  --shadow-key-umbra-opacity: rgba(0, 0, 0, 0.2);\n  --shadow-key-penumbra-opacity: rgba(0, 0, 0, 0.14);\n  --shadow-key-ambient-opacity: rgba(0, 0, 0, 0.12);\n}\n:root {\n  --swipe-indicator-color: #fff;\n  --swipe-indicators-offset: 10px;\n  --swipe-indicator-offset: 4px;\n}\n.var-swipe {\n  position: relative;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.var-swipe__track {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  transition-property: transform;\n}\n.var-swipe__indicators {\n  position: absolute;\n  display: flex;\n  bottom: var(--swipe-indicators-offset);\n  left: 50%;\n  transform: translateX(-50%);\n}\n.var-swipe__indicator {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--swipe-indicator-color);\n  opacity: 0.3;\n  margin: 0 var(--swipe-indicator-offset);\n  transition: opacity 0.3s;\n}\n.var-swipe--vertical {\n  flex-direction: column;\n}\n.var-swipe--indicators-vertical {\n  flex-direction: column;\n  left: var(--swipe-indicators-offset);\n  bottom: 50%;\n  transform: translateY(50%);\n}\n.var-swipe--indicator-active {\n  opacity: 1;\n}\n.var-swipe--indicator-vertical {\n  margin: var(--swipe-indicator-offset) 0;\n}\n",""]);const o=t},2979:(n,e,a)=>{"use strict";a.d(e,{Z:()=>o});var i=a(2609),t=a.n(i)()((function(n){return n[1]}));t.push([n.id,".var--box {\n  box-sizing: border-box;\n}\n.var--box * {\n  box-sizing: border-box;\n}\n.var--relative {\n  position: relative;\n}\n.var--absolute {\n  position: absolute;\n}\n.var--hidden {\n  overflow: hidden;\n}\n.var--lock {\n  overflow: hidden;\n}\n.var--block {\n  display: block;\n}\n.var--inline-block {\n  display: inline-block;\n}\n.var--flex {\n  display: flex;\n}\n.var--inline-flex {\n  display: inline-flex;\n}\n:root {\n  --font-size-xs: 10px;\n  --font-size-sm: 12px;\n  --font-size-md: 14px;\n  --font-size-lg: 16px;\n  --icon-size-xs: 16px;\n  --icon-size-sm: 18px;\n  --icon-size-md: 20px;\n  --icon-size-lg: 22px;\n  --color-primary: #3a7afe;\n  --color-info: #00afef;\n  --color-success: #00c48f;\n  --color-warning: #ff9f00;\n  --color-danger: #f44336;\n  --color-disabled: #e0e0e0;\n  --cubic-bezier: cubic-bezier(0.25, 0.8, 0.5, 1);\n  --shadow-key-umbra-opacity: rgba(0, 0, 0, 0.2);\n  --shadow-key-penumbra-opacity: rgba(0, 0, 0, 0.14);\n  --shadow-key-ambient-opacity: rgba(0, 0, 0, 0.12);\n}\n:root {\n  --swipe-indicator-color: #fff;\n  --swipe-indicators-offset: 10px;\n  --swipe-indicator-offset: 4px;\n}\n.var-swipe {\n  position: relative;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.var-swipe__track {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  transition-property: transform;\n}\n.var-swipe__indicators {\n  position: absolute;\n  display: flex;\n  bottom: var(--swipe-indicators-offset);\n  left: 50%;\n  transform: translateX(-50%);\n}\n.var-swipe__indicator {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--swipe-indicator-color);\n  opacity: 0.3;\n  margin: 0 var(--swipe-indicator-offset);\n  transition: opacity 0.3s;\n}\n.var-swipe--vertical {\n  flex-direction: column;\n}\n.var-swipe--indicators-vertical {\n  flex-direction: column;\n  left: var(--swipe-indicators-offset);\n  bottom: 50%;\n  transform: translateY(50%);\n}\n.var-swipe--indicator-active {\n  opacity: 1;\n}\n.var-swipe--indicator-vertical {\n  margin: var(--swipe-indicator-offset) 0;\n}\n",""]);const o=t}}]);