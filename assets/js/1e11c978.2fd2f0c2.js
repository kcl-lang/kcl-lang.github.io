"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[67663],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,f=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},55657:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={title:"crypto",linkTitle:"crypto",type:"docs",description:"crypto system module",weight:100},l=void 0,o={unversionedId:"reference/model/crypto",id:"version-0.8/reference/model/crypto",title:"crypto",description:"crypto system module",source:"@site/versioned_docs/version-0.8/reference/model/crypto.md",sourceDirName:"reference/model",slug:"/reference/model/crypto",permalink:"/docs/reference/model/crypto",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.8/reference/model/crypto.md",tags:[],version:"0.8",lastUpdatedBy:"peefy",lastUpdatedAt:1710906677,formattedLastUpdatedAt:"Mar 20, 2024",frontMatter:{title:"crypto",linkTitle:"crypto",type:"docs",description:"crypto system module",weight:100},sidebar:"reference",previous:{title:"base64",permalink:"/docs/reference/model/base64"},next:{title:"datetime",permalink:"/docs/reference/model/datetime"}},p={},s=[{value:"md5",id:"md5",level:2},{value:"sha1",id:"sha1",level:2},{value:"sha224",id:"sha224",level:2},{value:"sha256",id:"sha256",level:2},{value:"sha384",id:"sha384",level:2},{value:"sha512",id:"sha512",level:2},{value:"uuid",id:"uuid",level:2},{value:"filesha256",id:"filesha256",level:2}],d={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"md5"},"md5"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'md5(value: str, encoding: str = "utf-8") -> str')),(0,a.kt)("p",null,"Encrypt the string ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," using ",(0,a.kt)("inlineCode",{parentName:"p"},"MD5")," and the codec registered for encoding."),(0,a.kt)("h2",{id:"sha1"},"sha1"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'sha1(value: str, encoding: str = "utf-8") -> str')),(0,a.kt)("p",null,"Encrypt the string ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," using ",(0,a.kt)("inlineCode",{parentName:"p"},"SHA1")," and the codec registered for encoding."),(0,a.kt)("h2",{id:"sha224"},"sha224"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'sha224(value: str, encoding: str = "utf-8") -> str')),(0,a.kt)("p",null,"Encrypt the string ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," using ",(0,a.kt)("inlineCode",{parentName:"p"},"SHA224")," and the codec registered for encoding."),(0,a.kt)("h2",{id:"sha256"},"sha256"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'sha256(value: str, encoding: str = "utf-8") -> str')),(0,a.kt)("p",null,"Encrypt the string ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," using ",(0,a.kt)("inlineCode",{parentName:"p"},"SHA256")," and the codec registered for encoding."),(0,a.kt)("h2",{id:"sha384"},"sha384"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'sha384(value: str, encoding: str = "utf-8") -> str')),(0,a.kt)("p",null,"Encrypt the string ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," using ",(0,a.kt)("inlineCode",{parentName:"p"},"SHA384")," and the codec registered for encoding."),(0,a.kt)("h2",{id:"sha512"},"sha512"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'sha512(value: str, encoding: str = "utf-8") -> str')),(0,a.kt)("p",null,"Encrypt the string ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," using ",(0,a.kt)("inlineCode",{parentName:"p"},"SHA512")," and the codec registered for encoding."),(0,a.kt)("h2",{id:"uuid"},"uuid"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"uuid() -> str")),(0,a.kt)("p",null,"Generate a random UUID string."),(0,a.kt)("h2",{id:"filesha256"},"filesha256"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"filesha256(filepath: str) -> str")),(0,a.kt)("p",null,"Calculate the SHA256 hash of the file ",(0,a.kt)("inlineCode",{parentName:"p"},"filepath"),"."))}u.isMDXComponent=!0}}]);