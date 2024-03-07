"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[5700],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99758:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"crypto",linkTitle:"crypto",type:"docs",description:"crypto system module",weight:100},l=void 0,o={unversionedId:"reference/model/crypto",id:"reference/model/crypto",title:"crypto",description:"crypto system module",source:"@site/docs/reference/model/crypto.md",sourceDirName:"reference/model",slug:"/reference/model/crypto",permalink:"/docs/next/reference/model/crypto",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/reference/model/crypto.md",tags:[],version:"current",lastUpdatedBy:"peefy",lastUpdatedAt:1709797004,formattedLastUpdatedAt:"Mar 7, 2024",frontMatter:{title:"crypto",linkTitle:"crypto",type:"docs",description:"crypto system module",weight:100},sidebar:"reference",previous:{title:"base64",permalink:"/docs/next/reference/model/base64"},next:{title:"datetime",permalink:"/docs/next/reference/model/datetime"}},p={},c=[{value:"md5",id:"md5",level:2},{value:"sha1",id:"sha1",level:2},{value:"sha224",id:"sha224",level:2},{value:"sha256",id:"sha256",level:2},{value:"sha384",id:"sha384",level:2},{value:"sha512",id:"sha512",level:2},{value:"uuid",id:"uuid",level:2},{value:"filesha256",id:"filesha256",level:2}],s={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"md5"},"md5"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'md5(value: str, encoding: str = "utf-8") -> str')),(0,a.kt)("p",null,"Encrypt the string ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," using ",(0,a.kt)("inlineCode",{parentName:"p"},"MD5")," and the codec registered for encoding."),(0,a.kt)("h2",{id:"sha1"},"sha1"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'sha1(value: str, encoding: str = "utf-8") -> str')),(0,a.kt)("p",null,"Encrypt the string ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," using ",(0,a.kt)("inlineCode",{parentName:"p"},"SHA1")," and the codec registered for encoding."),(0,a.kt)("h2",{id:"sha224"},"sha224"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'sha224(value: str, encoding: str = "utf-8") -> str')),(0,a.kt)("p",null,"Encrypt the string ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," using ",(0,a.kt)("inlineCode",{parentName:"p"},"SHA224")," and the codec registered for encoding."),(0,a.kt)("h2",{id:"sha256"},"sha256"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'sha256(value: str, encoding: str = "utf-8") -> str')),(0,a.kt)("p",null,"Encrypt the string ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," using ",(0,a.kt)("inlineCode",{parentName:"p"},"SHA256")," and the codec registered for encoding."),(0,a.kt)("h2",{id:"sha384"},"sha384"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'sha384(value: str, encoding: str = "utf-8") -> str')),(0,a.kt)("p",null,"Encrypt the string ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," using ",(0,a.kt)("inlineCode",{parentName:"p"},"SHA384")," and the codec registered for encoding."),(0,a.kt)("h2",{id:"sha512"},"sha512"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'sha512(value: str, encoding: str = "utf-8") -> str')),(0,a.kt)("p",null,"Encrypt the string ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," using ",(0,a.kt)("inlineCode",{parentName:"p"},"SHA512")," and the codec registered for encoding."),(0,a.kt)("h2",{id:"uuid"},"uuid"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"uuid() -> str")),(0,a.kt)("p",null,"Generate a random UUID string."),(0,a.kt)("h2",{id:"filesha256"},"filesha256"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"filesha256(filepath: str) -> str")),(0,a.kt)("p",null,"Calculate the SHA256 hash of the file ",(0,a.kt)("inlineCode",{parentName:"p"},"filepath"),"."))}u.isMDXComponent=!0}}]);