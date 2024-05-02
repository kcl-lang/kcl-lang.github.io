"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[77936],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),s=c(r),f=l,m=s["".concat(p,".").concat(f)]||s[f]||u[f]||i;return r?n.createElement(m,o(o({ref:t},d),{},{components:r})):n.createElement(m,o({ref:t},d))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=r.length,o=new Array(i);o[0]=f;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[s]="string"==typeof e?e:l,o[1]=a;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},13783:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=r(87462),l=(r(67294),r(3905));const i={title:"file",linkTitle:"file",type:"docs",description:"\u6587\u4ef6\u7cfb\u7edf\u64cd\u4f5c",weight:100},o=void 0,a={unversionedId:"reference/model/file",id:"version-0.8/reference/model/file",title:"file",description:"\u6587\u4ef6\u7cfb\u7edf\u64cd\u4f5c",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.8/reference/model/file.md",sourceDirName:"reference/model",slug:"/reference/model/file",permalink:"/zh-CN/docs/reference/model/file",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.8/reference/model/file.md",tags:[],version:"0.8",lastUpdatedBy:"Peefy",lastUpdatedAt:1714663025,formattedLastUpdatedAt:"2024\u5e745\u67082\u65e5",frontMatter:{title:"file",linkTitle:"file",type:"docs",description:"\u6587\u4ef6\u7cfb\u7edf\u64cd\u4f5c",weight:100},sidebar:"reference",previous:{title:"datetime",permalink:"/zh-CN/docs/reference/model/datetime"},next:{title:"json",permalink:"/zh-CN/docs/reference/model/json"}},p={},c=[{value:"read",id:"read",level:2},{value:"glob",id:"glob",level:2},{value:"modpath",id:"modpath",level:2},{value:"workdir",id:"workdir",level:2},{value:"exists",id:"exists",level:2},{value:"abs",id:"abs",level:2}],d={toc:c},s="wrapper";function u(e){let{components:t,...r}=e;return(0,l.kt)(s,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"read"},"read"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"read(filepath: str) -> str")),(0,l.kt)("p",null,"\u8bfb\u53d6\u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},"filepath")," \u4e2d\u7684\u5185\u5bb9\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u5b57\u7b26\u4e32\u5b9e\u4f8b\u3002"),(0,l.kt)("h2",{id:"glob"},"glob"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"glob(pattern: str) -> str")),(0,l.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u5305\u542b\u6240\u6709\u5339\u914d ",(0,l.kt)("inlineCode",{parentName:"p"},"pattern")," \u7684\u6587\u4ef6\u540d\u7684\u5217\u8868\u3002"),(0,l.kt)("h2",{id:"modpath"},"modpath"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"modpath() -> str")),(0,l.kt)("p",null,"\u8fd4\u56de\u5f53\u524d\u6a21\u5757\u7684\u6839\u8def\u5f84\uff08kcl.mod \u6587\u4ef6\u8def\u5f84\u6216\u5355\u4e2a ","*",".k \u6587\u4ef6\u8def\u5f84\uff09\u3002"),(0,l.kt)("h2",{id:"workdir"},"workdir"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"workdir() -> str")),(0,l.kt)("p",null,"\u8fd4\u56de\u5f53\u524d\u5de5\u4f5c\u76ee\u5f55\u7684\u8def\u5f84\u3002"),(0,l.kt)("h2",{id:"exists"},"exists"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"exists(filepath: str) -> bool")),(0,l.kt)("p",null,"\u5224\u65ad\u6587\u4ef6\u8def\u5f84\u662f\u5426\u5b58\u5728\u3002\u5982\u679c\u8def\u5f84\u6307\u5411\u4e00\u4e2a\u5b58\u5728\u7684\u5b9e\u4f53\uff0c\u5219\u8fd4\u56de True\u3002\u6b64\u51fd\u6570\u4f1a\u904d\u5386\u7b26\u53f7\u94fe\u63a5\u4ee5\u67e5\u8be2\u76ee\u6807\u6587\u4ef6\u7684\u4fe1\u606f\u3002"),(0,l.kt)("h2",{id:"abs"},"abs"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"abs(filepath: str) -> str")),(0,l.kt)("p",null,"\u8fd4\u56de\u8def\u5f84\u7684\u89c4\u8303\u5316\u7edd\u5bf9\u5f62\u5f0f\uff0c\u5176\u4e2d\u6240\u6709\u4e2d\u95f4\u8def\u5f84\u5747\u5df2\u89c4\u8303\u5316\u5e76\u89e3\u6790\u4e3a\u7b26\u53f7\u94fe\u63a5\u3002"))}u.isMDXComponent=!0}}]);