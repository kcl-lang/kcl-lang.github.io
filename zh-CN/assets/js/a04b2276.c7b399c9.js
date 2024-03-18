"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[5746],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||c;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var s=2;s<c;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},99097:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const c={title:"base64",linkTitle:"base64",type:"docs",description:"base64 \u7f16\u7801\u89e3\u7801",weight:100},i=void 0,a={unversionedId:"reference/model/base64",id:"version-0.4.3/reference/model/base64",title:"base64",description:"base64 \u7f16\u7801\u89e3\u7801",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.4.3/reference/model/base64.md",sourceDirName:"reference/model",slug:"/reference/model/base64",permalink:"/zh-CN/docs/0.4.3/reference/model/base64",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.4.3/reference/model/base64.md",tags:[],version:"0.4.3",lastUpdatedBy:"peefy",lastUpdatedAt:1710771316,formattedLastUpdatedAt:"2024\u5e743\u670818\u65e5",frontMatter:{title:"base64",linkTitle:"base64",type:"docs",description:"base64 \u7f16\u7801\u89e3\u7801",weight:100},sidebar:"reference",previous:{title:"builtin",permalink:"/zh-CN/docs/0.4.3/reference/model/builtin"},next:{title:"crypto",permalink:"/zh-CN/docs/0.4.3/reference/model/crypto"}},l={},s=[{value:"encode",id:"encode",level:2},{value:"decode",id:"decode",level:2}],d={toc:s},p="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"encode"},"encode"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'encode(value: str, encoding: str = "utf-8") -> str')),(0,o.kt)("p",null,"Encode the string ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," using the codec registered for encoding."),(0,o.kt)("h2",{id:"decode"},"decode"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'decode(value: str, encoding: str = "utf-8") -> str')),(0,o.kt)("p",null,"Decode the string ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," using the codec registered for encoding."))}u.isMDXComponent=!0}}]);