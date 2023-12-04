"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[97899],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,f=p["".concat(d,".").concat(u)]||p[u]||s[u]||o;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},23969:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"datetime",linkTitle:"datetime",type:"docs",description:"datetime system module",weight:100},i=void 0,l={unversionedId:"reference/model/datetime",id:"version-0.4.5/reference/model/datetime",title:"datetime",description:"datetime system module",source:"@site/versioned_docs/version-0.4.5/reference/model/datetime.md",sourceDirName:"reference/model",slug:"/reference/model/datetime",permalink:"/docs/0.4.5/reference/model/datetime",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.4.5/reference/model/datetime.md",tags:[],version:"0.4.5",lastUpdatedBy:"peefy",lastUpdatedAt:1701659761,formattedLastUpdatedAt:"Dec 4, 2023",frontMatter:{title:"datetime",linkTitle:"datetime",type:"docs",description:"datetime system module",weight:100},sidebar:"reference",previous:{title:"crypto",permalink:"/docs/0.4.5/reference/model/crypto"},next:{title:"json",permalink:"/docs/0.4.5/reference/model/json"}},d={},c=[{value:"time",id:"time",level:2},{value:"date",id:"date",level:2},{value:"now",id:"now",level:2},{value:"today",id:"today",level:2}],m={toc:c},p="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"datetime",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"ticks() -> float\nReturn the current time in seconds since the Epoch. Fractions of a second may be present if the system clock provides them."),(0,a.kt)("li",{parentName:"ul"},"date() -> str\nReturn the ",(0,a.kt)("inlineCode",{parentName:"li"},"%Y-%m-%d %H:%M:%S")," format date."),(0,a.kt)("li",{parentName:"ul"},"now() -> str\nReturn the local time. e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"'Sat Jun 06 16:26:11 1998'")),(0,a.kt)("li",{parentName:"ul"},"today() -> str\nReturn the ",(0,a.kt)("inlineCode",{parentName:"li"},"%Y-%m-%d %H:%M:%S.%{ticks}")," format date.")))),(0,a.kt)("h2",{id:"time"},"time"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ticks() -> float")),(0,a.kt)("p",null,"Return the current time in seconds since the Epoch. Fractions of a second may be present if the system clock provides them."),(0,a.kt)("h2",{id:"date"},"date"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"date() -> str")),(0,a.kt)("p",null,"Return the ",(0,a.kt)("inlineCode",{parentName:"p"},"%Y-%m-%d %H:%M:%S")," format date."),(0,a.kt)("h2",{id:"now"},"now"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"now() -> str")),(0,a.kt)("p",null,"Return the local time. e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"'Sat Jun 06 16:26:11 1998'")),(0,a.kt)("h2",{id:"today"},"today"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"today() -> str")),(0,a.kt)("p",null,"Return the ",(0,a.kt)("inlineCode",{parentName:"p"},"%Y-%m-%d %H:%M:%S.%{ticks}")," format date."))}s.isMDXComponent=!0}}]);