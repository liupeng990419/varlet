(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[706],{2690:(e,n,t)=>{"use strict";t.d(n,{Z:()=>i});var o=t(2609),a=t.n(o)()((function(e){return e[1]}));a.push([e.id,".image-preview-demo .var-button[data-v-6a35daf4] {\n  margin-top: 10px;\n}\n",""]);const i=a},6506:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>z});var o=t(7875),a=t(349),i=(0,o.HX)("data-v-6a35daf4");(0,o.dD)("data-v-6a35daf4");var r={class:"image-preview-demo"},l={class:"image-preview-demo"};(0,o.Cn)();var c=i((function(e,n,t,c,u,s){var p=(0,o.up)("app-type"),v=(0,o.up)("var-button"),m=(0,o.up)("var-image-preview");return(0,o.wg)(),(0,o.j4)(o.HY,null,[(0,o.Wm)("div",r,[(0,o.Wm)(p,null,{default:i((function(){return[(0,o.Uk)((0,a.zw)(e.pack.functionCall),1)]})),_:1}),(0,o.Wm)(v,{type:"primary",block:"",onClick:e.preview},{default:i((function(){return[(0,o.Uk)((0,a.zw)(e.pack.preview),1)]})),_:1},8,["onClick"]),(0,o.Wm)(v,{type:"primary",block:"",onClick:e.previewCallback},{default:i((function(){return[(0,o.Uk)((0,a.zw)(e.pack.callBack),1)]})),_:1},8,["onClick"])]),(0,o.Wm)("div",l,[(0,o.Wm)(p,null,{default:i((function(){return[(0,o.Uk)((0,a.zw)(e.pack.componentCall),1)]})),_:1}),(0,o.Wm)(v,{type:"warning",block:"",onClick:n[1]||(n[1]=function(n){return e.show=!0})},{default:i((function(){return[(0,o.Uk)((0,a.zw)(e.pack.basicUse),1)]})),_:1}),(0,o.Wm)(m,{images:e.image,show:e.show,"onUpdate:show":n[2]||(n[2]=function(n){return e.show=n})},null,8,["images","show"]),(0,o.Wm)(v,{type:"warning",block:"",onClick:n[3]||(n[3]=function(n){return e.currentShow=!0})},{default:i((function(){return[(0,o.Uk)((0,a.zw)(e.pack.specifyInitialPosition),1)]})),_:1}),(0,o.Wm)(m,{images:e.images,show:e.currentShow,"onUpdate:show":n[4]||(n[4]=function(n){return e.currentShow=n}),current:"https://varlet.gitee.io/varlet-ui/cat2.jpg"},null,8,["images","show"]),(0,o.Wm)(v,{type:"warning",block:"",onClick:n[5]||(n[5]=function(n){return e.closeShow=!0})},{default:i((function(){return[(0,o.Uk)((0,a.zw)(e.pack.displayCloseButton),1)]})),_:1}),(0,o.Wm)(m,{images:e.images,show:e.closeShow,"onUpdate:show":n[6]||(n[6]=function(n){return e.closeShow=n}),closeable:!0},null,8,["images","show"]),(0,o.Wm)(v,{type:"warning",block:"",onClick:n[7]||(n[7]=function(n){return e.closeEventShow=!0})},{default:i((function(){return[(0,o.Uk)((0,a.zw)(e.pack.listenCloseEvents),1)]})),_:1}),(0,o.Wm)(m,{images:e.images,show:e.closeEventShow,"onUpdate:show":n[8]||(n[8]=function(n){return e.closeEventShow=n}),onClose:e.handleCloseEvent},null,8,["images","show","onClose"])])],64)})),u=t(6156),s=t(4740),p=t(5602),v=t(9433),m=t(9435),w=t(641),f=t(7532),d=t(6208),h=t(926),k=(0,h.bU)(),g=k.add,C=k.use,b=k.pack,y=(k.packs,k.merge,function(e){(0,h.D$)(e),C(e)});(0,h.IH)("zh-CN",f.Z),(0,h.IH)("en-US",d.Z),g("zh-CN",{functionCall:"函数调用",componentCall:"组件调用",preview:"基本使用",callBack:"处理回调函数",basicUse:"基本使用",specifyInitialPosition:"指定初始位置",displayCloseButton:"展示关闭按钮",listenCloseEvents:"监听关闭事件",shutdownEvent:"触发了关闭事件。"}),g("en-US",{functionCall:"Function Call",componentCall:"Component Call",preview:"Basic use",callBack:"Handle callback function",basicUse:"Basic use",specifyInitialPosition:"Specify initial position",displayCloseButton:"Display the close button",listenCloseEvents:"Listen for close event",shutdownEvent:"The shutdown event was triggered."});var Z,S=t(3638),U=t(629);const E=(0,o.aZ)({name:"ImagePreviewExample",components:(Z={},(0,u.Z)(Z,s.Z.Component.name,s.Z.Component),(0,u.Z)(Z,p.Z.name,p.Z),(0,u.Z)(Z,v.Z.name,v.Z),Z),setup:function(){var e=["https://varlet.gitee.io/varlet-ui/cat.jpg","https://varlet.gitee.io/varlet-ui/cat2.jpg"],n=["https://varlet.gitee.io/varlet-ui/cat.jpg"];(0,S.jS)(y);var t=U.Z.touchmoveForbid;return(0,S.Id)((function(e){"pc"===e&&(U.Z.touchmoveForbid=!1)})),(0,o.Ah)((function(){U.Z.touchmoveForbid=t})),{preview:function(){(0,s.Z)(n)},previewCallback:function(){(0,s.Z)({images:e,onChange:function(e){console.log("index",e)}})},pack:b,show:(0,w.iH)(!1),currentShow:(0,w.iH)(!1),closeShow:(0,w.iH)(!1),closeEventShow:(0,w.iH)(!1),images:(0,w.iH)(e),image:(0,w.iH)(n),handleCloseEvent:function(){(0,m.ZP)({content:b.value.shutdownEvent,duration:1e3})}}}});var W=t(6062),_=t.n(W),H=t(2690);_()(H.Z,{insert:"head",singleton:!1}),H.Z.locals,E.render=c,E.__scopeId="data-v-6a35daf4";const z=E},4699:(e,n,t)=>{"use strict";t.d(n,{Z:()=>a});var o=t(2961);function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],o=!0,a=!1,i=void 0;try{for(var r,l=e[Symbol.iterator]();!(o=(r=l.next()).done)&&(t.push(r.value),!n||t.length!==n);o=!0);}catch(e){a=!0,i=e}finally{try{o||null==l.return||l.return()}finally{if(a)throw i}}return t}}(e,n)||(0,o.Z)(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);