"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[70308],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),s=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(a.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,m=u["".concat(a,".").concat(d)]||u[d]||f[d]||c;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<c;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},93540:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const c={},i="\u547d\u4ee4\u884c\u5de5\u5177",l={unversionedId:"tools/cli/index",id:"version-0.5.5/tools/cli/index",title:"\u547d\u4ee4\u884c\u5de5\u5177",description:"KCL \u63d0\u4f9b\u4e86 IDE \u63d2\u4ef6\u3001\u4e30\u5bcc\u7684\u8bed\u8a00\u5de5\u5177\u548c OpenAPI \u5de5\u5177\u3002\u901a\u8fc7\u8fd9\u4e9b\u5de5\u5177\uff0c\u53ef\u4ee5\u63d0\u4f9b\u4e00\u6574\u5957\u89e3\u51b3\u65b9\u6848\uff0c\u5305\u62ec\u914d\u7f6e\u8bed\u8a00\u3001\u6a21\u578b\u754c\u9762\u3001\u81ea\u52a8\u5316\u5de5\u5177\u548c\u6700\u4f73\u5b9e\u8df5\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.5.5/tools/cli/index.md",sourceDirName:"tools/cli",slug:"/tools/cli/",permalink:"/zh-CN/docs/0.5.5/tools/cli/",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.5/tools/cli/index.md",tags:[],version:"0.5.5",lastUpdatedBy:"Peefy",lastUpdatedAt:1706869561,formattedLastUpdatedAt:"2024\u5e742\u67082\u65e5",frontMatter:{},sidebar:"tools",next:{title:"KCL \u8bed\u8a00\u5de5\u5177",permalink:"/zh-CN/docs/0.5.5/tools/cli/kcl/"}},a={},s=[],p={toc:s},u="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u547d\u4ee4\u884c\u5de5\u5177"},"\u547d\u4ee4\u884c\u5de5\u5177"),(0,o.kt)("p",null,"KCL \u63d0\u4f9b\u4e86 IDE \u63d2\u4ef6\u3001\u4e30\u5bcc\u7684\u8bed\u8a00\u5de5\u5177\u548c OpenAPI \u5de5\u5177\u3002\u901a\u8fc7\u8fd9\u4e9b\u5de5\u5177\uff0c\u53ef\u4ee5\u63d0\u4f9b\u4e00\u6574\u5957\u89e3\u51b3\u65b9\u6848\uff0c\u5305\u62ec\u914d\u7f6e\u8bed\u8a00\u3001\u6a21\u578b\u754c\u9762\u3001\u81ea\u52a8\u5316\u5de5\u5177\u548c\u6700\u4f73\u5b9e\u8df5\u3002"))}f.isMDXComponent=!0}}]);