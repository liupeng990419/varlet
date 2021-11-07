import{_ as P,c as l,r as Z,g as D,M as R,s as x,i as ee,a as e,t as L,m as te,C as oe,R as ne,I as re}from"./elevation.7f6c0241.js";import{o as _,c as s,a as g,r as h,g as u,u as _e,b as j,d as T,e as B,f,t as b,h as C,w as U,i as A,v as W,n as z,F as q,j as H,k as G,l as y,m as S,T as ae,p as F,q as J,s as ie,x as se,y as pe,z as ce,A as k,B as K,C as de,D as le,E as me}from"./vendor.ea41cd30.js";const ue={name:"AppMobile",props:{componentName:{type:String},language:{type:String},replace:{type:String}}},he={class:"varlet-site-mobile"},ve={class:"varlet-site-mobile-content"},Ee=["src"];function ge(t,r,n,o,p,a){return _(),s("div",he,[g("div",ve,[g("iframe",{src:`./mobile.html#/${n.componentName}?language=${n.language}&platform=pc&replace=${n.replace}`},null,8,Ee)])])}var fe=P(ue,[["render",ge],["__scopeId","data-v-1b0a8ee0"]]);const Ne={name:"AppHeader",props:{language:{type:String}},setup(){const t=h(u(l,"title")),r=h(u(l,"logo")),n=h(u(l,"pc.header.i18n")),o=h(u(l,"pc.header.github")),p=h(!1),a=_e(),c=j(()=>Z(n.value));return{logo:r,title:t,languages:n,nonEmptyLanguages:c,github:o,isOpenMenu:p,handleLanguageChange:i=>{const{menuName:d}=D();a.replace(`/${i}/${d}`),p.value=!1}}}},Ce={class:"varlet-site-header"},Te={class:"varlet-site-header__lead"},ze=["src"],be={key:1,class:"varlet-site-header__title"},Pe={class:"varlet-site-header__tail"},Ae=["href"];function Ie(t,r,n,o,p,a){const c=T("var-site-icon"),m=T("var-site-cell"),i=B("ripple");return _(),s("div",Ce,[g("div",Te,[o.logo?(_(),s("img",{key:0,class:"varlet-site-header__logo",src:o.logo,alt:"logo"},null,8,ze)):f("v-if",!0),o.title?(_(),s("div",be,b(o.title),1)):f("v-if",!0)]),g("div",Pe,[o.languages?(_(),s("div",{key:0,class:"varlet-site-header__language",onMouseenter:r[0]||(r[0]=d=>o.isOpenMenu=!0),onMouseleave:r[1]||(r[1]=d=>o.isOpenMenu=!1)},[C(c,{name:"translate",size:"26px",color:"#666"}),C(c,{name:"chevron-down",color:"#666"}),C(ae,{name:"fade"},{default:U(()=>[A(g("div",{class:"varlet-site-header__language-list var-elevation--5",style:z({pointerEvents:o.isOpenMenu?"auto":"none"})},[(_(!0),s(q,null,H(o.nonEmptyLanguages,(d,N)=>A((_(),G(m,{key:N,class:S({"varlet-site-header__language-list--active":n.language===N}),onClick:$=>o.handleLanguageChange(N)},{default:U(()=>[y(b(d),1)]),_:2},1032,["class","onClick"])),[[i]])),128))],4),[[W,o.isOpenMenu]])]),_:1})],32)):f("v-if",!0),o.github?A((_(),s("a",{key:1,class:"varlet-site-header__link",target:"_blank",href:o.github},[C(c,{name:"github",color:"#666",size:28})],8,Ae)),[[i]]):f("v-if",!0)])])}var Le=P(Ne,[["render",Ie],["__scopeId","data-v-3428eb3c"]]);const Se={name:"AppSidebar",props:{menu:{type:Array},menuName:{type:String},language:{type:String}},emits:["change"],setup(t,{emit:r}){const n=F(R),o=h(u(l,"themes"));return{menuTypes:n,themes:o,changeRoute:a=>{a.type===R.TITLE||t.menuName===a.doc||r("change",a)}}}},Ve={class:"varlet-site-sidebar var-elevation--3"},Oe={key:0,class:"varlet-site-sidebar__item--title"},De={key:1};function Re(t,r,n,o,p,a){const c=T("var-site-cell"),m=B("ripple");return _(),s("div",Ve,[(_(!0),s(q,null,H(n.menu,(i,d)=>A((_(),G(c,{class:S(["varlet-site-sidebar__item",{"varlet-site-sidebar__item--active":i.doc===n.menuName,"varlet-site-sidebar__link":i.type!==o.menuTypes.TITLE,"varlet-site-sidebar__title":i.type===o.menuTypes.TITLE}]),id:i.doc,key:d,onClick:N=>o.changeRoute(i)},{default:U(()=>[i.type===o.menuTypes.TITLE?(_(),s("span",Oe,b(i.text[n.language]),1)):(_(),s("span",De,b(i.text[n.language]),1))]),_:2},1032,["id","class","onClick"])),[[m,{touchmoveForbid:!1,disabled:i.type===o.menuTypes.TITLE,color:o.themes["color-side-bar"]}]])),128))])}var je=P(Se,[["render",Re],["__scopeId","data-v-3d25df6e"]]);const Ue=J({components:{AppMobile:fe,AppHeader:Le,AppSidebar:je},setup(){const t=u(l,"defaultLanguage"),r=h(u(l,"pc.menu",[])),n=h(u(l,"useMobile")),o=u(l,"mobile.redirect"),p=h(""),a=h(null),c=h(""),m=h(null),i=ie(),d=v=>{const E=r.value.find(O=>O.doc===v);return(E==null?void 0:E.type)===R.COMPONENT?v:o.slice(1)},N=()=>{const{language:v,menuName:E}=D();if(ee()&&n.value){window.location.href=`./mobile.html#/${E}?language=${v||t}&platform=mobile`;return}ce(()=>{const O=document.querySelector(".varlet-site-sidebar").getElementsByClassName("var-site-cell"),M=r.value.findIndex(Y=>Y.doc===E);M!==-1&&O[M].scrollIntoView({block:"center",inline:"start"})})},$=v=>{m.value.scrollTop=0,a.value=d(v.doc),c.value=v.doc};return se(()=>N()),pe(()=>i.path,()=>{const{language:v,menuName:E}=D();!v||!E||(a.value=d(E),c.value=E,p.value=v,document.title=u(l,"pc.title")[v])},{immediate:!0}),x(l),{menu:r,language:p,componentName:a,menuName:c,doc:m,useMobile:n,handleSidebarChange:$}}}),ye={class:"varlet-site"},ke={class:"varlet-site-content"};function we(t,r,n,o,p,a){const c=T("app-header"),m=T("app-sidebar"),i=T("router-view"),d=T("app-mobile");return _(),s("div",ye,[C(c,{language:t.language},null,8,["language"]),g("div",ke,[C(m,{language:t.language,menu:t.menu,"menu-name":t.menuName,onChange:t.handleSidebarChange},null,8,["language","menu","menu-name","onChange"]),g("div",{class:S(["varlet-site-doc-container",[!t.useMobile&&"varlet-site-doc-container--pc-only"]]),ref:"doc"},[C(i)],2),A(C(d,{"component-name":t.componentName,language:t.language,replace:t.menuName},null,8,["component-name","language","replace"]),[[W,t.useMobile]])])])}var $e=P(Ue,[["render",we]]),Q=[{path:"/en-US/action-sheet",component:()=>e(()=>import("./en-US.be4f1105.js"),["assets/en-US.be4f1105.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/action-sheet",component:()=>e(()=>import("./zh-CN.0fc52bc7.js"),["assets/zh-CN.0fc52bc7.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/en-US/app-bar",component:()=>e(()=>import("./en-US.223b58bf.js"),["assets/en-US.223b58bf.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/app-bar",component:()=>e(()=>import("./zh-CN.8b119738.js"),["assets/zh-CN.8b119738.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/en-US/back-top",component:()=>e(()=>import("./en-US.341e121b.js"),["assets/en-US.341e121b.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/back-top",component:()=>e(()=>import("./zh-CN.877855f0.js"),["assets/zh-CN.877855f0.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/en-US/badge",component:()=>e(()=>import("./en-US.1fcde393.js"),["assets/en-US.1fcde393.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/badge",component:()=>e(()=>import("./zh-CN.f5704031.js"),["assets/zh-CN.f5704031.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/en-US/button",component:()=>e(()=>import("./en-US.909109f9.js"),["assets/en-US.909109f9.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/button",component:()=>e(()=>import("./zh-CN.87706945.js"),["assets/zh-CN.87706945.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/en-US/card",component:()=>e(()=>import("./en-US.8377cc8e.js"),["assets/en-US.8377cc8e.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/card",component:()=>e(()=>import("./zh-CN.b8d06c13.js"),["assets/zh-CN.b8d06c13.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/en-US/cell",component:()=>e(()=>import("./en-US.6ed993f2.js"),["assets/en-US.6ed993f2.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/cell",component:()=>e(()=>import("./zh-CN.32bb5ef7.js"),["assets/zh-CN.32bb5ef7.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/checkbox",component:()=>e(()=>import("./zh-CN.e9cc74d4.js"),["assets/zh-CN.e9cc74d4.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/en-US/checkbox-group",component:()=>e(()=>import("./en-US.2fd8cc1e.js"),["assets/en-US.2fd8cc1e.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/checkbox-group",component:()=>e(()=>import("./zh-CN.0606068c.js"),["assets/zh-CN.0606068c.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/en-US/chip",component:()=>e(()=>import("./en-US.ca7b626f.js"),["assets/en-US.ca7b626f.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/chip",component:()=>e(()=>import("./zh-CN.853e27ad.js"),["assets/zh-CN.853e27ad.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/col",component:()=>e(()=>import("./zh-CN.bd1f0596.js"),["assets/zh-CN.bd1f0596.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/en-US/collapse",component:()=>e(()=>import("./en-US.bf539601.js"),["assets/en-US.bf539601.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/collapse",component:()=>e(()=>import("./zh-CN.1a037de7.js"),["assets/zh-CN.1a037de7.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/collapse-item",component:()=>e(()=>import("./zh-CN.4e26aa2f.js"),["assets/zh-CN.4e26aa2f.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/en-US/countdown",component:()=>e(()=>import("./en-US.86416b4e.js"),["assets/en-US.86416b4e.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/countdown",component:()=>e(()=>import("./zh-CN.320f07c5.js"),["assets/zh-CN.320f07c5.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/en-US/counter",component:()=>e(()=>import("./en-US.7e713079.js"),["assets/en-US.7e713079.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/counter",component:()=>e(()=>import("./zh-CN.85e47d7e.js"),["assets/zh-CN.85e47d7e.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/en-US/date-picker",component:()=>e(()=>import("./en-US.f673b957.js"),["assets/en-US.f673b957.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/date-picker",component:()=>e(()=>import("./zh-CN.aa4d07a3.js"),["assets/zh-CN.aa4d07a3.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/en-US/dialog",component:()=>e(()=>import("./en-US.20f1a4c2.js"),["assets/en-US.20f1a4c2.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/dialog",component:()=>e(()=>import("./zh-CN.fdbf99a0.js"),["assets/zh-CN.fdbf99a0.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/en-US/divider",component:()=>e(()=>import("./en-US.481a2180.js"),["assets/en-US.481a2180.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/divider",component:()=>e(()=>import("./zh-CN.3a6c9105.js"),["assets/zh-CN.3a6c9105.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/en-US/form",component:()=>e(()=>import("./en-US.424b2bd8.js"),["assets/en-US.424b2bd8.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/form",component:()=>e(()=>import("./zh-CN.241e593f.js"),["assets/zh-CN.241e593f.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/en-US/form-details",component:()=>e(()=>import("./en-US.6a2380c9.js"),["assets/en-US.6a2380c9.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/form-details",component:()=>e(()=>import("./zh-CN.ec0cce59.js"),["assets/zh-CN.ec0cce59.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/en-US/icon",component:()=>e(()=>import("./en-US.c7169c53.js"),["assets/en-US.c7169c53.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/icon",component:()=>e(()=>import("./zh-CN.61961dc9.js"),["assets/zh-CN.61961dc9.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/en-US/image",component:()=>e(()=>import("./en-US.f1298378.js"),["assets/en-US.f1298378.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/image",component:()=>e(()=>import("./zh-CN.336c1393.js"),["assets/zh-CN.336c1393.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/en-US/image-preview",component:()=>e(()=>import("./en-US.e967a498.js"),["assets/en-US.e967a498.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/image-preview",component:()=>e(()=>import("./zh-CN.0e272996.js"),["assets/zh-CN.0e272996.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/index-anchor",component:()=>e(()=>import("./zh-CN.ff1b0382.js"),["assets/zh-CN.ff1b0382.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/en-US/index-bar",component:()=>e(()=>import("./en-US.45424a49.js"),["assets/en-US.45424a49.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/index-bar",component:()=>e(()=>import("./zh-CN.822ecadb.js"),["assets/zh-CN.822ecadb.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/en-US/input",component:()=>e(()=>import("./en-US.7dee2b28.js"),["assets/en-US.7dee2b28.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/input",component:()=>e(()=>import("./zh-CN.dc8a72ad.js"),["assets/zh-CN.dc8a72ad.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/en-US/lazy",component:()=>e(()=>import("./en-US.a1e22825.js"),["assets/en-US.a1e22825.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/lazy",component:()=>e(()=>import("./zh-CN.8457144e.js"),["assets/zh-CN.8457144e.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/en-US/list",component:()=>e(()=>import("./en-US.938078e7.js"),["assets/en-US.938078e7.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/list",component:()=>e(()=>import("./zh-CN.1f7a7c44.js"),["assets/zh-CN.1f7a7c44.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/en-US/loading",component:()=>e(()=>import("./en-US.ac792bc5.js"),["assets/en-US.ac792bc5.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/loading",component:()=>e(()=>import("./zh-CN.7bb20ad4.js"),["assets/zh-CN.7bb20ad4.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/en-US/locale",component:()=>e(()=>import("./en-US.17553b58.js"),["assets/en-US.17553b58.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/locale",component:()=>e(()=>import("./zh-CN.9a05b79d.js"),["assets/zh-CN.9a05b79d.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/en-US/menu",component:()=>e(()=>import("./en-US.d1d6eda3.js"),["assets/en-US.d1d6eda3.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/menu",component:()=>e(()=>import("./zh-CN.c1988d67.js"),["assets/zh-CN.c1988d67.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/option",component:()=>e(()=>import("./zh-CN.063e5c2f.js"),["assets/zh-CN.063e5c2f.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/en-US/pagination",component:()=>e(()=>import("./en-US.d41cbd5e.js"),["assets/en-US.d41cbd5e.js","assets/Disabled.ca39988b.js","assets/Disabled.ffe0866f.css","assets/Pagination.5ea543f2.js","assets/Pagination.17f25dad.css","assets/index.21973b32.js","assets/index.20f4c62b.css","assets/vendor.ea41cd30.js","assets/elements.524bf92a.js","assets/shared.cba5a5a3.js","assets/zIndex.c624737f.js","assets/index.510439cf.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/index.931337ba.js","assets/index.5c0890fd.css","assets/index.89b2169f.js","assets/index.e6d22dbc.css","assets/index.c51f8b4f.js","assets/index.0dfac9ab.css","assets/index.e3c6bf2c.js","assets/index.8c43bc7e.css","assets/provide.16c2d8dc.js","assets/provide.6ff252db.css","assets/components.b90d3f87.js","assets/en-US.64d12132.js","assets/index.ca342559.js"])},{path:"/zh-CN/pagination",component:()=>e(()=>import("./zh-CN.59ff0962.js"),["assets/zh-CN.59ff0962.js","assets/Disabled.ca39988b.js","assets/Disabled.ffe0866f.css","assets/Pagination.5ea543f2.js","assets/Pagination.17f25dad.css","assets/index.21973b32.js","assets/index.20f4c62b.css","assets/vendor.ea41cd30.js","assets/elements.524bf92a.js","assets/shared.cba5a5a3.js","assets/zIndex.c624737f.js","assets/index.510439cf.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/index.931337ba.js","assets/index.5c0890fd.css","assets/index.89b2169f.js","assets/index.e6d22dbc.css","assets/index.c51f8b4f.js","assets/index.0dfac9ab.css","assets/index.e3c6bf2c.js","assets/index.8c43bc7e.css","assets/provide.16c2d8dc.js","assets/provide.6ff252db.css","assets/components.b90d3f87.js","assets/en-US.64d12132.js","assets/index.ca342559.js"])},{path:"/en-US/picker",component:()=>e(()=>import("./en-US.2b59b793.js"),["assets/en-US.2b59b793.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/picker",component:()=>e(()=>import("./zh-CN.7c66841e.js"),["assets/zh-CN.7c66841e.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/en-US/popup",component:()=>e(()=>import("./en-US.f068e560.js"),["assets/en-US.f068e560.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/popup",component:()=>e(()=>import("./zh-CN.4976d7a0.js"),["assets/zh-CN.4976d7a0.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/en-US/progress",component:()=>e(()=>import("./en-US.08165bd8.js"),["assets/en-US.08165bd8.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/progress",component:()=>e(()=>import("./zh-CN.9947d570.js"),["assets/zh-CN.9947d570.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/en-US/pull-refresh",component:()=>e(()=>import("./en-US.f7de42bd.js"),["assets/en-US.f7de42bd.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/pull-refresh",component:()=>e(()=>import("./zh-CN.e652bceb.js"),["assets/zh-CN.e652bceb.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/radio",component:()=>e(()=>import("./zh-CN.6d5e8743.js"),["assets/zh-CN.6d5e8743.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/en-US/radio-group",component:()=>e(()=>import("./en-US.9979059f.js"),["assets/en-US.9979059f.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/radio-group",component:()=>e(()=>import("./zh-CN.ab8c68a4.js"),["assets/zh-CN.ab8c68a4.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/en-US/rate",component:()=>e(()=>import("./en-US.6625a16b.js"),["assets/en-US.6625a16b.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/rate",component:()=>e(()=>import("./zh-CN.e1e4fe54.js"),["assets/zh-CN.e1e4fe54.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/en-US/ripple",component:()=>e(()=>import("./en-US.5b4dc6a1.js"),["assets/en-US.5b4dc6a1.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/ripple",component:()=>e(()=>import("./zh-CN.965a45f6.js"),["assets/zh-CN.965a45f6.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/en-US/row",component:()=>e(()=>import("./en-US.91fbc96e.js"),["assets/en-US.91fbc96e.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/row",component:()=>e(()=>import("./zh-CN.367263f6.js"),["assets/zh-CN.367263f6.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/en-US/select",component:()=>e(()=>import("./en-US.a23c0f0c.js"),["assets/en-US.a23c0f0c.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/select",component:()=>e(()=>import("./zh-CN.5be0633c.js"),["assets/zh-CN.5be0633c.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/en-US/skeleton",component:()=>e(()=>import("./en-US.d61cd127.js"),["assets/en-US.d61cd127.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/skeleton",component:()=>e(()=>import("./zh-CN.2247337d.js"),["assets/zh-CN.2247337d.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/en-US/slider",component:()=>e(()=>import("./en-US.e8a5bab3.js"),["assets/en-US.e8a5bab3.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/slider",component:()=>e(()=>import("./zh-CN.d1449cf3.js"),["assets/zh-CN.d1449cf3.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/en-US/snackbar",component:()=>e(()=>import("./en-US.5f4be1ed.js"),["assets/en-US.5f4be1ed.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/snackbar",component:()=>e(()=>import("./zh-CN.717b6e6b.js"),["assets/zh-CN.717b6e6b.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/step",component:()=>e(()=>import("./zh-CN.6c5fe4c0.js"),["assets/zh-CN.6c5fe4c0.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/en-US/steps",component:()=>e(()=>import("./en-US.7ffd082d.js"),["assets/en-US.7ffd082d.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/steps",component:()=>e(()=>import("./zh-CN.28e18df6.js"),["assets/zh-CN.28e18df6.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/en-US/sticky",component:()=>e(()=>import("./en-US.96f5a95a.js"),["assets/en-US.96f5a95a.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/sticky",component:()=>e(()=>import("./zh-CN.8023ba51.js"),["assets/zh-CN.8023ba51.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/en-US/style-provider",component:()=>e(()=>import("./en-US.47afe383.js"),["assets/en-US.47afe383.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/style-provider",component:()=>e(()=>import("./zh-CN.5efbc98e.js"),["assets/zh-CN.5efbc98e.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/en-US/styles",component:()=>e(()=>import("./en-US.88f69652.js"),["assets/en-US.88f69652.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/styles",component:()=>e(()=>import("./zh-CN.b8b95938.js"),["assets/zh-CN.b8b95938.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/en-US/swipe",component:()=>e(()=>import("./en-US.1dadf078.js"),["assets/en-US.1dadf078.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/swipe",component:()=>e(()=>import("./zh-CN.28a61bbb.js"),["assets/zh-CN.28a61bbb.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/swipe-item",component:()=>e(()=>import("./zh-CN.5a7d3dc4.js"),["assets/zh-CN.5a7d3dc4.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/en-US/switch",component:()=>e(()=>import("./en-US.c4c396c4.js"),["assets/en-US.c4c396c4.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/switch",component:()=>e(()=>import("./zh-CN.478a3a51.js"),["assets/zh-CN.478a3a51.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/tab",component:()=>e(()=>import("./zh-CN.971ae30d.js"),["assets/zh-CN.971ae30d.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/tab-item",component:()=>e(()=>import("./zh-CN.7e08fb9a.js"),["assets/zh-CN.7e08fb9a.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/en-US/table",component:()=>e(()=>import("./en-US.0a3ac662.js"),["assets/en-US.0a3ac662.js","assets/FooterSlots.39142f43.js","assets/FooterSlots.5dbeb969.css","assets/index.57c36540.js","assets/index.a69c1ff7.css","assets/elements.524bf92a.js","assets/shared.cba5a5a3.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js","assets/index.533e5db9.js","assets/Pagination.5ea543f2.js","assets/Pagination.17f25dad.css","assets/index.21973b32.js","assets/index.20f4c62b.css","assets/zIndex.c624737f.js","assets/index.510439cf.js","assets/index.931337ba.js","assets/index.5c0890fd.css","assets/index.89b2169f.js","assets/index.e6d22dbc.css","assets/index.c51f8b4f.js","assets/index.0dfac9ab.css","assets/index.e3c6bf2c.js","assets/index.8c43bc7e.css","assets/provide.16c2d8dc.js","assets/provide.6ff252db.css","assets/components.b90d3f87.js","assets/en-US.64d12132.js","assets/AppType.eb8ea594.js","assets/AppType.1d0f11d5.css"])},{path:"/zh-CN/table",component:()=>e(()=>import("./zh-CN.9c1faca3.js"),["assets/zh-CN.9c1faca3.js","assets/FooterSlots.39142f43.js","assets/FooterSlots.5dbeb969.css","assets/index.57c36540.js","assets/index.a69c1ff7.css","assets/elements.524bf92a.js","assets/shared.cba5a5a3.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js","assets/index.533e5db9.js","assets/Pagination.5ea543f2.js","assets/Pagination.17f25dad.css","assets/index.21973b32.js","assets/index.20f4c62b.css","assets/zIndex.c624737f.js","assets/index.510439cf.js","assets/index.931337ba.js","assets/index.5c0890fd.css","assets/index.89b2169f.js","assets/index.e6d22dbc.css","assets/index.c51f8b4f.js","assets/index.0dfac9ab.css","assets/index.e3c6bf2c.js","assets/index.8c43bc7e.css","assets/provide.16c2d8dc.js","assets/provide.6ff252db.css","assets/components.b90d3f87.js","assets/en-US.64d12132.js","assets/AppType.eb8ea594.js","assets/AppType.1d0f11d5.css"])},{path:"/en-US/tabs",component:()=>e(()=>import("./en-US.3804149a.js"),["assets/en-US.3804149a.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/tabs",component:()=>e(()=>import("./zh-CN.5e7ec9b1.js"),["assets/zh-CN.5e7ec9b1.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/tabs-items",component:()=>e(()=>import("./zh-CN.670f490a.js"),["assets/zh-CN.670f490a.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/en-US/time-picker",component:()=>e(()=>import("./en-US.c5c5c88a.js"),["assets/en-US.c5c5c88a.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/time-picker",component:()=>e(()=>import("./zh-CN.be6076b5.js"),["assets/zh-CN.be6076b5.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/en-US/uploader",component:()=>e(()=>import("./en-US.3df5b2d6.js"),["assets/en-US.3df5b2d6.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/uploader",component:()=>e(()=>import("./zh-CN.1cf267b7.js"),["assets/zh-CN.1cf267b7.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/en-US/browserAdaptation",component:()=>e(()=>import("./browserAdaptation.en-US.fdb5eaf5.js"),["assets/browserAdaptation.en-US.fdb5eaf5.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/browserAdaptation",component:()=>e(()=>import("./browserAdaptation.zh-CN.01af3d7a.js"),["assets/browserAdaptation.zh-CN.01af3d7a.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/en-US/cli",component:()=>e(()=>import("./cli.en-US.8755df2d.js"),["assets/cli.en-US.8755df2d.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/cli",component:()=>e(()=>import("./cli.zh-CN.c6e7089a.js"),["assets/cli.zh-CN.c6e7089a.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/en-US/customTheme",component:()=>e(()=>import("./customTheme.en-US.8263946e.js"),["assets/customTheme.en-US.8263946e.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/customTheme",component:()=>e(()=>import("./customTheme.zh-CN.fe1955b2.js"),["assets/customTheme.zh-CN.fe1955b2.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/en-US/home",component:()=>e(()=>import("./home.en-US.6f73e06c.js"),["assets/home.en-US.6f73e06c.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/home",component:()=>e(()=>import("./home.zh-CN.2306daad.js"),["assets/home.zh-CN.2306daad.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/en-US/ide",component:()=>e(()=>import("./ide.en-US.14fd35ec.js"),["assets/ide.en-US.14fd35ec.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/ide",component:()=>e(()=>import("./ide.zh-CN.42402152.js"),["assets/ide.zh-CN.42402152.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/en-US/importOnDemand",component:()=>e(()=>import("./importOnDemand.en-US.1bf67206.js"),["assets/importOnDemand.en-US.1bf67206.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/importOnDemand",component:()=>e(()=>import("./importOnDemand.zh-CN.958c847f.js"),["assets/importOnDemand.zh-CN.958c847f.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/en-US/openSourceGuide",component:()=>e(()=>import("./openSourceGuide.en-US.5465900f.js"),["assets/openSourceGuide.en-US.5465900f.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/openSourceGuide",component:()=>e(()=>import("./openSourceGuide.zh-CN.dfa51a74.js"),["assets/openSourceGuide.zh-CN.dfa51a74.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/en-US/quickstart",component:()=>e(()=>import("./quickstart.en-US.5b49c307.js"),["assets/quickstart.en-US.5b49c307.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])},{path:"/zh-CN/quickstart",component:()=>e(()=>import("./quickstart.zh-CN.19c0f8b0.js"),["assets/quickstart.zh-CN.19c0f8b0.js","assets/elevation.7f6c0241.js","assets/elevation.5b9a1d5b.css","assets/vendor.ea41cd30.js"])}];function Me(t){return["linear","circle"].includes(t)}const Be={mode:{type:String,default:"linear",validator:Me},lineWidth:{type:[Number,String],default:4},color:{type:String},trackColor:{type:String},ripple:{type:Boolean,default:!1},value:{type:[Number,String],default:0},label:{type:Boolean,default:!1},size:{type:Number,default:40},rotate:{type:Number,default:0},track:{type:Boolean,default:!0}};const We=J({name:"VarSiteProgress",inheritAttrs:!1,props:Be,setup(t){const r=j(()=>{const o=L(t.value),p=o>100?100:o,a=o>100?100:Math.round(o);return{width:`${p}%`,roundValue:`${a}%`}}),n=j(()=>{const{size:o,lineWidth:p,value:a}=t,c=`0 0 ${o} ${o}`,m=L(a)>100?100:Math.round(L(a)),i=(o-L(p))/2,d=2*Math.PI*i,N=`${m/100*d}, ${d}`;return{viewBox:c,radius:i,strokeDasharray:N,perimeter:d,roundValue:`${m}%`}});return{linearProps:r,circleProps:n}}}),qe={class:"var-site-progress"},He={key:0,class:"var-site-progress-linear"},Ge=["viewBox"],Fe=["cx","cy","r","stroke-width"],Je=["cx","cy","r","stroke-width"];function Ke(t,r,n,o,p,a){return _(),s("div",qe,[t.mode==="linear"?(_(),s("div",He,[g("div",k({class:"var-site-progress-linear__block",style:{height:`${t.lineWidth}px`}},t.$attrs),[t.track?(_(),s("div",{key:0,class:"var-site-progress-linear__background",style:z({background:t.trackColor})},null,4)):f("v-if",!0),g("div",{class:S(`var-site-progress-linear__certain${t.ripple?" var-site-progress-linear__ripple":""}`),style:z({background:t.color,width:t.linearProps.width})},null,6)],16),t.label?(_(),s("div",k({key:0,class:"var-site-progress-linear__label"},t.$attrs),[K(t.$slots,"default",{},()=>[y(b(t.linearProps.roundValue),1)])],16)):f("v-if",!0)])):f("v-if",!0),t.mode==="circle"?(_(),s("div",{key:1,class:"var-site-progress-circle",style:z({width:`${t.size}px`,height:`${t.size}px`})},[(_(),s("svg",{class:"var-site-progress-circle__svg",style:z({transform:`rotate(${t.rotate-90}deg)`}),viewBox:t.circleProps.viewBox},[t.track?(_(),s("circle",{key:0,class:"var-site-progress-circle__background",cx:t.size/2,cy:t.size/2,r:t.circleProps.radius,fill:"transparent","stroke-width":t.lineWidth,style:z({strokeDasharray:t.circleProps.perimeter,stroke:t.trackColor})},null,12,Fe)):f("v-if",!0),g("circle",{class:"var-site-progress-circle__certain",cx:t.size/2,cy:t.size/2,r:t.circleProps.radius,fill:"transparent","stroke-width":t.lineWidth,style:z({strokeDasharray:t.circleProps.strokeDasharray,stroke:t.color})},null,12,Je)],12,Ge)),t.label?(_(),s("div",k({key:0,class:"var-site-progress-circle__label"},t.$attrs),[K(t.$slots,"default",{},()=>[y(b(t.circleProps.roundValue),1)])],16)):f("v-if",!0)],4)):f("v-if",!0)])}var V=P(We,[["render",Ke]]);V.install=function(t){t.component(V.name,V)};function Qe(){let t;const r=u(l,"themes.color-progress-track"),n=u(l,"themes.color-progress"),o=F({style:{position:"fixed",width:"100%",left:0,top:0,zIndex:10086},trackColor:r,color:n,lineWidth:3,value:0}),p=()=>{t=window.setTimeout(()=>{if(o.value>=95)return;let m=Math.random();o.value<70&&(m=Math.round(5*Math.random())),o.value+=m,p()},200)},a=()=>{o.value=0,setTimeout(()=>o.color=n,200),p()},c=()=>{o.value=100,setTimeout(()=>o.color=r,300),window.clearTimeout(t)};return te(V,o),{start:a,end:c}}const Xe=u(l,"defaultLanguage"),X=u(l,"pc.redirect"),Ye=u(l,"mobile.redirect");X&&Q.push({path:"/:pathMatch(.*)*",redirect:`/${Xe}${X}`});const I=de({history:le(),scrollBehavior:()=>({top:0}),routes:Q});let w=!0;const{start:Ze,end:xe}=Qe();I.beforeEach((t,r)=>{if(t.path===r.path)return!1;w=!1,setTimeout(()=>!w&&Ze(),200),window._hmt&&t.path&&window._hmt.push(["_trackPageview",`/#${t.fullPath}`])});I.afterEach(()=>{w=!0,xe()});Object.defineProperty(window,"onMobileRouteChange",{value:(t,r,n)=>{if(t===Ye){I.replace(`/${r}/${n}`);return}I.replace(`/${r}${t}`)}});Object.defineProperty(window,"scrollToMenu",{value:t=>{setTimeout(()=>{const r=document.getElementById(t),n=r.parentNode;n.scrollTo({top:r.offsetTop-n.offsetHeight/2})})}});me($e).use(I).use(oe).use(ne).use(re).mount("#app");
