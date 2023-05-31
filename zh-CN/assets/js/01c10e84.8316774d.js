"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3609],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},69649:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"crypto",linkTitle:"crypto",type:"docs",description:"crypto \u5305 - \u63d0\u4f9b SHA \u76f8\u5173\u7684\u54c8\u5e0c\u51fd\u6570",weight:100},l=void 0,i={unversionedId:"reference/model/crypto",id:"version-0.4.6/reference/model/crypto",title:"crypto",description:"crypto \u5305 - \u63d0\u4f9b SHA \u76f8\u5173\u7684\u54c8\u5e0c\u51fd\u6570",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.4.6/reference/model/crypto.md",sourceDirName:"reference/model",slug:"/reference/model/crypto",permalink:"/zh-CN/docs/0.4.6/reference/model/crypto",draft:!1,editUrl:"https://github.com/KusionStack/kcl-lang.io/tree/main/versioned_docs/version-0.4.6/reference/model/crypto.md",tags:[],version:"0.4.6",lastUpdatedBy:"peefy",lastUpdatedAt:1685538105,formattedLastUpdatedAt:"2023\u5e745\u670831\u65e5",frontMatter:{title:"crypto",linkTitle:"crypto",type:"docs",description:"crypto \u5305 - \u63d0\u4f9b SHA \u76f8\u5173\u7684\u54c8\u5e0c\u51fd\u6570",weight:100},sidebar:"reference",previous:{title:"base64",permalink:"/zh-CN/docs/0.4.6/reference/model/base64"},next:{title:"datetime",permalink:"/zh-CN/docs/0.4.6/reference/model/datetime"}},p={},c=[{value:"md5",id:"md5",level:2},{value:"sha1",id:"sha1",level:2},{value:"sha224",id:"sha224",level:2},{value:"sha256",id:"sha256",level:2},{value:"sha384",id:"sha384",level:2},{value:"sha512",id:"sha512",level:2}],s={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"md5"},"md5"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'md5(value: str, encoding: str = "utf-8") -> str')),(0,a.kt)("p",null,"\u4f7f\u7528\u6ce8\u518c\u7f16\u7801\u5668\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"MD5")," \u7b97\u6cd5\u5bf9\u5b57\u7b26\u4e32 ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," \u8fdb\u884c\u52a0\u5bc6\u3002"),(0,a.kt)("h2",{id:"sha1"},"sha1"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'sha1(value: str, encoding: str = "utf-8") -> str')),(0,a.kt)("p",null,"\u4f7f\u7528\u6ce8\u518c\u7f16\u7801\u5668\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"SHA1")," \u7b97\u6cd5\u5bf9\u5b57\u7b26\u4e32 ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," \u8fdb\u884c\u52a0\u5bc6\u3002"),(0,a.kt)("h2",{id:"sha224"},"sha224"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'sha224(value: str, encoding: str = "utf-8") -> str')),(0,a.kt)("p",null,"\u4f7f\u7528\u6ce8\u518c\u7f16\u7801\u5668\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"SHA224")," \u7b97\u6cd5\u5bf9\u5b57\u7b26\u4e32 ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," \u8fdb\u884c\u52a0\u5bc6\u3002"),(0,a.kt)("h2",{id:"sha256"},"sha256"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'sha256(value: str, encoding: str = "utf-8") -> str')),(0,a.kt)("p",null,"\u4f7f\u7528\u6ce8\u518c\u7f16\u7801\u5668\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"SHA256")," \u7b97\u6cd5\u5bf9\u5b57\u7b26\u4e32 ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," \u8fdb\u884c\u52a0\u5bc6\u3002"),(0,a.kt)("h2",{id:"sha384"},"sha384"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'sha384(value: str, encoding: str = "utf-8") -> str')),(0,a.kt)("p",null,"\u4f7f\u7528\u6ce8\u518c\u7f16\u7801\u5668\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"SHA384")," \u7b97\u6cd5\u5bf9\u5b57\u7b26\u4e32 ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," \u8fdb\u884c\u52a0\u5bc6\u3002"),(0,a.kt)("h2",{id:"sha512"},"sha512"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'sha512(value: str, encoding: str = "utf-8") -> str')),(0,a.kt)("p",null,"\u4f7f\u7528\u6ce8\u518c\u7f16\u7801\u5668\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"SHA512")," \u7b97\u6cd5\u5bf9\u5b57\u7b26\u4e32 ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," \u8fdb\u884c\u52a0\u5bc6\u3002"))}d.isMDXComponent=!0}}]);