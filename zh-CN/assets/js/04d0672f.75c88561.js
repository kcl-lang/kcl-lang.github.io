"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[84045],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=l(r),m=c,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var i=r.length,o=new Array(i);o[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[d]="string"==typeof e?e:c,o[1]=a;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},52991:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(67294),c=r(86010),i=r(52802),o=r(39960),a=r(13919),s=r(95999);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:r}=e;return n.createElement(o.Z,{href:t,className:(0,c.Z)("card padding--lg",l.cardContainer)},r)}function d(e){let{href:t,icon:r,title:i,description:o}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,c.Z)("text--truncate",l.cardTitle),title:i},r," ",i),o&&n.createElement("p",{className:(0,c.Z)("text--truncate",l.cardDescription),title:o},o))}function p(e){let{item:t}=e;const r=(0,i.Wl)(t);return r?n.createElement(d,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const r=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,i.xz)(t.docId??void 0);return n.createElement(d,{href:t.href,icon:r,title:t.label,description:t.description??c?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(m,{item:t});case"category":return n.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const r=(0,i.jA)();return n.createElement(y,{items:r.items,className:t})}function y(e){const{items:t,className:r}=e;if(!t)return n.createElement(g,e);const o=(0,i.MN)(t);return n.createElement("section",{className:(0,c.Z)("row",r)},o.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},34464:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(87462),c=(r(67294),r(3905)),i=r(52991);const o={},a="\u7528\u6237\u624b\u518c",s={unversionedId:"user_docs/guides/index",id:"user_docs/guides/index",title:"\u7528\u6237\u624b\u518c",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user_docs/guides/index.md",sourceDirName:"user_docs/guides",slug:"/user_docs/guides/",permalink:"/zh-CN/docs/next/user_docs/guides/",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/user_docs/guides/index.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1708241829,formattedLastUpdatedAt:"2024\u5e742\u670818\u65e5",frontMatter:{},sidebar:"user_docs",previous:{title:"KCL \u8bed\u8a00\u901f\u89c8",permalink:"/zh-CN/docs/next/user_docs/getting-started/kcl-quick-start"},next:{title:"\u914d\u7f6e",permalink:"/zh-CN/docs/next/user_docs/guides/configuration"}},l={},u=[],d={toc:u},p="wrapper";function m(e){let{components:t,...r}=e;return(0,c.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"\u7528\u6237\u624b\u518c"},"\u7528\u6237\u624b\u518c"),(0,c.kt)(i.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);