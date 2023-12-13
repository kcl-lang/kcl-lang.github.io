"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[88998],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),i=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=i(e.components);return a.createElement(m.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=i(n),d=r,u=s["".concat(m,".").concat(d)]||s[d]||k[d]||l;return n?a.createElement(u,o(o({ref:t},p),{},{components:n})):a.createElement(u,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c[s]="string"==typeof e?e:r,o[1]=c;for(var i=2;i<l;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18930:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var a=n(87462),r=(n(67294),n(3905));const l={},o="kpm",c={unversionedId:"tools/cli/package-management/command-reference/index",id:"version-0.6.0/tools/cli/package-management/command-reference/index",title:"kpm",description:"kpm \u547d\u4ee4\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.6.0/tools/cli/package-management/command-reference/index.md",sourceDirName:"tools/cli/package-management/command-reference",slug:"/tools/cli/package-management/command-reference/",permalink:"/zh-CN/docs/0.6.0/tools/cli/package-management/command-reference/",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.6.0/tools/cli/package-management/command-reference/index.md",tags:[],version:"0.6.0",lastUpdatedBy:"peefy",lastUpdatedAt:1702459904,formattedLastUpdatedAt:"2023\u5e7412\u670813\u65e5",frontMatter:{},sidebar:"tools",previous:{title:"KCL OpenAPI \u89c4\u8303",permalink:"/zh-CN/docs/0.6.0/tools/cli/openapi/spec"},next:{title:"kpm init",permalink:"/zh-CN/docs/0.6.0/tools/cli/package-management/command-reference/init"}},m={},i=[{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u9009\u9879",id:"\u9009\u9879",level:2},{value:"--help, -h",id:"--help--h",level:3},{value:"--version, -v",id:"--version--v",level:3},{value:"\u5b50\u547d\u4ee4",id:"\u5b50\u547d\u4ee4",level:2}],p={toc:i},s="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kpm"},"kpm"),(0,r.kt)("p",null,"kpm \u547d\u4ee4\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kpm  <command> [arguments]...\n")),(0,r.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"kpm")," \u662f kcl \u5305\u7ba1\u7406\u5de5\u5177\u3002\u5b83\u7528\u4e8e\u5206\u53d1\u548c\u7ba1\u7406 kcl \u5305\u3002"),(0,r.kt)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),(0,r.kt)("h3",{id:"--help--h"},"--help, -h"),(0,r.kt)("p",null,"\u5c55\u793a ",(0,r.kt)("inlineCode",{parentName:"p"},"kpm")," \u547d\u4ee4\u7684\u5e2e\u52a9\u4fe1\u606f\u3002"),(0,r.kt)("h3",{id:"--version--v"},"--version, -v"),(0,r.kt)("p",null,"\u5c55\u793a ",(0,r.kt)("inlineCode",{parentName:"p"},"kpm")," \u547d\u4ee4\u7684\u7248\u672c\u4fe1\u606f\u3002"),(0,r.kt)("h2",{id:"\u5b50\u547d\u4ee4"},"\u5b50\u547d\u4ee4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/0.6.0/tools/cli/package-management/command-reference/init"},"kpm init")," - \u521d\u59cb\u5316\u4e00\u4e2a kcl \u5305"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/0.6.0/tools/cli/package-management/command-reference/add"},"kpm add")," - \u6dfb\u52a0\u4e00\u4e2a\u4f9d\u8d56\u5230 kcl \u5305"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/0.6.0/tools/cli/package-management/command-reference/pkg"},"kpm pkg")," - \u6253\u5305\u4e00\u4e2a kcl \u5305\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"*.tar")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/0.6.0/tools/cli/package-management/command-reference/metadata"},"kpm metadata")," - \u6253\u5370\u4e00\u4e2a kcl \u5305\u7684\u5143\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/0.6.0/tools/cli/package-management/command-reference/run"},"kpm run")," - \u7f16\u8bd1\u4e00\u4e2a kcl \u5305\u4e3a yaml \u5e76\u8fd0\u884c"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/0.6.0/tools/cli/package-management/command-reference/login"},"kpm login")," - \u767b\u5f55\u5230\u4e00\u4e2a kcl registry"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/0.6.0/tools/cli/package-management/command-reference/logout"},"kpm logout")," - \u767b\u51fa\u4e00\u4e2a kcl registry"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/0.6.0/tools/cli/package-management/command-reference/push"},"kpm push")," - \u4e0a\u4f20\u4e00\u4e2a kcl \u5305\u5230\u4e00\u4e2a registry"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/0.6.0/tools/cli/package-management/command-reference/pull"},"kpm pull")," - \u4e0b\u8f7d\u4e00\u4e2a kcl \u5305\u4ece\u4e00\u4e2a registry"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/0.6.0/tools/cli/package-management/command-reference/help"},"kpm help")," - \u6253\u5370 kpm \u547d\u4ee4\u7684\u5e2e\u52a9\u4fe1\u606f")))}k.isMDXComponent=!0}}]);