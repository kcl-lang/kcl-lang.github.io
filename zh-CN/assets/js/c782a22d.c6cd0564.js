"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[33826],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||c;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:o,i[1]=a;for(var l=2;l<c;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},52991:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(67294),o=r(86010),c=r(52802),i=r(39960),a=r(13919),s=r(95999);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p(e){let{href:t,children:r}=e;return n.createElement(i.Z,{href:t,className:(0,o.Z)("card padding--lg",l.cardContainer)},r)}function u(e){let{href:t,icon:r,title:c,description:i}=e;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",l.cardTitle),title:c},r," ",c),i&&n.createElement("p",{className:(0,o.Z)("text--truncate",l.cardDescription),title:i},i))}function d(e){let{item:t}=e;const r=(0,c.Wl)(t);return r?n.createElement(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const r=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,c.xz)(t.docId??void 0);return n.createElement(u,{href:t.href,icon:r,title:t.label,description:t.description??o?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(m,{item:t});case"category":return n.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,c.jA)();return n.createElement(h,{items:r.items,className:t})}function h(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,e);const i=(0,c.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},99199:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(87462),o=(r(67294),r(3905)),c=r(52991);const i={},a="\u5e38\u89c1\u95ee\u7b54",s={unversionedId:"user_docs/support/support",id:"version-0.8/user_docs/support/support",title:"\u5e38\u89c1\u95ee\u7b54",description:"KCL \u5b89\u88c5\u3001\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u5e38\u89c1\u95ee\u9898\uff0c\u5305\u62ec\u57fa\u672c\u6982\u5ff5\u89e3\u91ca\u3001KCL \u8bed\u6cd5\u3001KCL \u8bed\u8a00\u8bbe\u8ba1\u3001\u547d\u4ee4\u884c\u5de5\u5177\u548c YAML \u7b49\u5e38\u89c1\u95ee\u9898\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.8/user_docs/support/support.md",sourceDirName:"user_docs/support",slug:"/user_docs/support/",permalink:"/zh-CN/docs/user_docs/support/",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.8/user_docs/support/support.md",tags:[],version:"0.8",lastUpdatedBy:"Peefy",lastUpdatedAt:1714663025,formattedLastUpdatedAt:"2024\u5e745\u67082\u65e5",frontMatter:{},sidebar:"user_docs",previous:{title:"\u7c7b\u578b\u548c\u5b9a\u4e49",permalink:"/zh-CN/docs/user_docs/concepts/type-and-definition"},next:{title:"KCL \u8bed\u6cd5",permalink:"/zh-CN/docs/user_docs/support/faq-kcl"}},l={},p=[],u={toc:p},d="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5e38\u89c1\u95ee\u7b54"},"\u5e38\u89c1\u95ee\u7b54"),(0,o.kt)("p",null,"KCL \u5b89\u88c5\u3001\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u5e38\u89c1\u95ee\u9898\uff0c\u5305\u62ec\u57fa\u672c\u6982\u5ff5\u89e3\u91ca\u3001KCL \u8bed\u6cd5\u3001KCL \u8bed\u8a00\u8bbe\u8ba1\u3001\u547d\u4ee4\u884c\u5de5\u5177\u548c YAML \u7b49\u5e38\u89c1\u95ee\u9898\u3002"),(0,o.kt)(c.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);