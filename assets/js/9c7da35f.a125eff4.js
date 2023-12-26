"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[96874],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(r),u=o,f=s["".concat(c,".").concat(u)]||s[u]||m[u]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},30317:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(87462),o=(r(67294),r(3905));const i={title:"datetime",linkTitle:"datetime",type:"docs",description:"datetime system module",weight:100},a=void 0,l={unversionedId:"reference/model/datetime",id:"version-0.6.0/reference/model/datetime",title:"datetime",description:"datetime system module",source:"@site/versioned_docs/version-0.6.0/reference/model/datetime.md",sourceDirName:"reference/model",slug:"/reference/model/datetime",permalink:"/docs/0.6.0/reference/model/datetime",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.6.0/reference/model/datetime.md",tags:[],version:"0.6.0",lastUpdatedBy:"Peefy",lastUpdatedAt:1703569910,formattedLastUpdatedAt:"Dec 26, 2023",frontMatter:{title:"datetime",linkTitle:"datetime",type:"docs",description:"datetime system module",weight:100},sidebar:"reference",previous:{title:"crypto",permalink:"/docs/0.6.0/reference/model/crypto"},next:{title:"json",permalink:"/docs/0.6.0/reference/model/json"}},c={},d=[{value:"ticks",id:"ticks",level:2},{value:"date",id:"date",level:2},{value:"now",id:"now",level:2},{value:"today",id:"today",level:2}],p={toc:d},s="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"ticks"},"ticks"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ticks() -> float")),(0,o.kt)("p",null,"Return the current time in seconds since the Epoch. Fractions of a second may be present if the system clock provides them."),(0,o.kt)("h2",{id:"date"},"date"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"date() -> str")),(0,o.kt)("p",null,"Return the ",(0,o.kt)("inlineCode",{parentName:"p"},"%Y-%m-%d %H:%M:%S")," format date."),(0,o.kt)("h2",{id:"now"},"now"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"now() -> str")),(0,o.kt)("p",null,"Return the local time. e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"'Sat Jun 06 16:26:11 1998'")),(0,o.kt)("h2",{id:"today"},"today"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"today() -> str")),(0,o.kt)("p",null,"Return the ",(0,o.kt)("inlineCode",{parentName:"p"},"%Y-%m-%d %H:%M:%S.%{ticks}")," format date."))}m.isMDXComponent=!0}}]);