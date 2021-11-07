var N=Object.defineProperty,E=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var b=(e,a,n)=>a in e?N(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,u=(e,a)=>{for(var n in a||(a={}))V.call(a,n)&&b(e,n,a[n]);if(F)for(var n of F(a))j.call(a,n)&&b(e,n,a[n]);return e},v=(e,a)=>E(e,I(a));import{A as z}from"./AppType.eb8ea594.js";import{t as _}from"./elements.524bf92a.js";import{l as k,t as A}from"./shared.cba5a5a3.js";import{_ as C}from"./elevation.7f6c0241.js";import{q as $,p as L,b as S,x as M,a1 as q,Z as H,o as B,c as D,B as R,m as W,n as Z,t as l,f as G,d as w,a as o,h as t,w as c,F as J,l as d}from"./vendor.ea41cd30.js";import{I as K}from"./index.89b2169f.js";import{u as O,a as T,_ as P,b as Q,c as X,w as Y}from"./en-US.64d12132.js";const ee={inset:{type:[Boolean,Number,String],default:!1},vertical:{type:Boolean,default:!1},description:{type:String},margin:{type:String},dashed:{type:Boolean,default:!1}};const ae=$({name:"VarDivider",props:ee,setup(e,{slots:a}){const n=L({withText:!1}),i=S(()=>k(e.inset)?e.inset:!0),f=S(()=>{const{inset:s,vertical:r,margin:h}=e,x={margin:h};if(k(s)||s===0)return u({},x);const y=A(s),g=Math.abs(y)+(s+"").replace(y+"","");return r?v(u({},x),{height:`calc(80% - ${_(g)})`}):v(u({},x),{width:`calc(100% - ${_(g)})`,left:y>0?_(g):_(0)})}),p=()=>{var s;n.withText=Boolean((s=a.default)==null?void 0:s.call(a).length)||Boolean(e.description)};return M(()=>{p()}),q(()=>{p()}),v(u({},H(n)),{style:f,isInset:i})}}),te={key:0,class:"var-divider__text"};function ne(e,a,n,i,f,p){return B(),D("div",{class:W(["var-divider var--box",[e.vertical?"var-divider--vertical":null,e.withText?"var-divider--with-text":null,e.isInset?"var-divider--inset":null,e.dashed?"var-divider--dashed":null]]),style:Z(e.style)},[R(e.$slots,"default",{},()=>[e.description?(B(),D("span",te,l(e.description),1)):G("v-if",!0)])],6)}var m=C(ae,[["render",ne]]);m.install=function(e){e.component(m.name,m)};var se={basicUsage:"\u57FA\u672C\u4F7F\u7528",dashed:"\u865A\u7EBF",inset:"\u7F29\u8FDB",vertical:"\u5782\u76F4\u5206\u5272\u7EBF",text:"\u6587\u5B57",withDesc:"\u5E26\u6709\u6587\u5B57\u63CF\u8FF0\u7684\u5206\u5272\u7EBF",withDescText:"\u6587\u5B57\u63CF\u8FF0",custom:"\u81EA\u5B9A\u4E49"},ie={basicUsage:"Basic Usage",dashed:"Dashed Divider",inset:"Inset Divider",vertical:"Vertical Divider",text:"Text",withDesc:"The Divider with description",withDescText:"Description",custom:"Custom"};const{add:U,use:re,pack:le,packs:ge,merge:Be}=O(),oe=e=>{X(e),re(e)};T("zh-CN",P);T("en-US",Q);U("zh-CN",se);U("en-US",ie);const ce={name:"DividerExample",components:{VarIcon:K,VarDivider:m,AppType:z},setup(){return Y(oe),{pack:le}}},de={class:"vertical-divider-wrapper"};function ue(e,a,n,i,f,p){const s=w("app-type"),r=w("var-divider"),h=w("var-icon");return B(),D(J,null,[o("div",null,[t(s,null,{default:c(()=>[d(l(i.pack.basicUsage),1)]),_:1}),t(r)]),o("div",null,[t(s,null,{default:c(()=>[d(l(i.pack.dashed),1)]),_:1}),t(r,{dashed:""})]),o("div",null,[t(s,null,{default:c(()=>[d(l(i.pack.inset),1)]),_:1}),t(r,{inset:""}),t(r,{inset:36,margin:"36px 0"}),t(r,{inset:"-36px"})]),o("div",null,[t(s,null,{default:c(()=>[d(l(i.pack.vertical),1)]),_:1}),o("div",de,[o("span",null,l(i.pack.text),1),t(r,{vertical:""}),o("span",null,l(i.pack.text),1),t(r,{vertical:""}),o("span",null,l(i.pack.text),1)])]),o("div",null,[t(s,null,{default:c(()=>[d(l(i.pack.withDesc),1)]),_:1}),t(r,{description:i.pack.withDescText},null,8,["description"])]),o("div",null,[t(s,null,{default:c(()=>[d(l(i.pack.custom),1)]),_:1}),t(r,null,{default:c(()=>[t(h,{name:"heart-outline",style:{margin:"0 16px",color:"rgb(41, 121, 255)"}})]),_:1})])],64)}var De=C(ce,[["render",ue],["__scopeId","data-v-2055987c"]]);export{De as default};
