"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[69371],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=o,f=m["".concat(c,".").concat(u)]||m[u]||s[u]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},51724:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(87462),o=(n(67294),n(3905));const i={title:"datetime",linkTitle:"datetime",type:"docs",description:"datetime \u5305 - \u65f6\u95f4\u5904\u7406",weight:100},a=void 0,l={unversionedId:"reference/model/datetime",id:"version-0.5.1/reference/model/datetime",title:"datetime",description:"datetime \u5305 - \u65f6\u95f4\u5904\u7406",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.5.1/reference/model/datetime.md",sourceDirName:"reference/model",slug:"/reference/model/datetime",permalink:"/zh-CN/docs/0.5.1/reference/model/datetime",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.1/reference/model/datetime.md",tags:[],version:"0.5.1",lastUpdatedBy:"peefy",lastUpdatedAt:1702459904,formattedLastUpdatedAt:"2023\u5e7412\u670813\u65e5",frontMatter:{title:"datetime",linkTitle:"datetime",type:"docs",description:"datetime \u5305 - \u65f6\u95f4\u5904\u7406",weight:100},sidebar:"reference",previous:{title:"crypto",permalink:"/zh-CN/docs/0.5.1/reference/model/crypto"},next:{title:"json",permalink:"/zh-CN/docs/0.5.1/reference/model/json"}},c={},d=[{value:"time",id:"time",level:2},{value:"date",id:"date",level:2},{value:"now",id:"now",level:2},{value:"today",id:"today",level:2}],p={toc:d},m="wrapper";function s(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"time"},"time"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ticks() -> float")),(0,o.kt)("p",null,"\u8fd4\u56de\u4ece 1970 \u5e74 1 \u6708 1 \u65e5 0 \u65f6 0 \u5206 0 \u79d2\uff08Epoch\uff09\u5f00\u59cb\u5230\u5f53\u524d\u65f6\u95f4\u7ecf\u8fc7\u7684\u79d2\u6570\u3002\u5982\u679c\u7cfb\u7edf\u65f6\u949f\u80fd\u63d0\u4f9b\u66f4\u7cbe\u786e\u7684\u65f6\u95f4\uff0c\u5219\u79d2\u6570\u540e\u53ef\u80fd\u4f1a\u6709\u5c0f\u6570\u90e8\u5206\u3002"),(0,o.kt)("h2",{id:"date"},"date"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"date() -> str")),(0,o.kt)("p",null,"\u8fd4\u56de\u4ee5 ",(0,o.kt)("inlineCode",{parentName:"p"},"%Y-%m-%d %H:%M:%S")," \u683c\u5f0f\u8868\u793a\u7684\u65f6\u95f4\u3002"),(0,o.kt)("h2",{id:"now"},"now"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"now() -> str")),(0,o.kt)("p",null,"\u8fd4\u56de\u5f53\u5730\u65f6\u95f4\uff0c\u4f8b\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"'Sat Jun 06 16:26:11 1998'"),"\u3002"),(0,o.kt)("h2",{id:"today"},"today"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"today() -> str")),(0,o.kt)("p",null,"\u8fd4\u56de\u4ee5 ",(0,o.kt)("inlineCode",{parentName:"p"},"%Y-%m-%d %H:%M:%S.%{ticks}")," \u683c\u5f0f\u8868\u793a\u7684\u65f6\u95f4\u3002"))}s.isMDXComponent=!0}}]);