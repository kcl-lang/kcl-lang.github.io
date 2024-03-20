"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[91891],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),m=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=m(a),s=r,k=d["".concat(i,".").concat(s)]||d[s]||u[s]||l;return a?n.createElement(k,o(o({ref:t},p),{},{components:a})):n.createElement(k,o({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:r,o[1]=c;for(var m=2;m<l;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},24969:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const l={},o="kcl mod metadata",c={unversionedId:"tools/cli/package-management/command-reference/metadata",id:"tools/cli/package-management/command-reference/metadata",title:"kcl mod metadata",description:"\u6253\u5370 kcl \u5305\u7684\u5143\u6570\u636e\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tools/cli/package-management/command-reference/4.metadata.md",sourceDirName:"tools/cli/package-management/command-reference",slug:"/tools/cli/package-management/command-reference/metadata",permalink:"/zh-CN/docs/next/tools/cli/package-management/command-reference/metadata",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/tools/cli/package-management/command-reference/4.metadata.md",tags:[],version:"current",lastUpdatedBy:"peefy",lastUpdatedAt:1710906677,formattedLastUpdatedAt:"2024\u5e743\u670820\u65e5",sidebarPosition:4,frontMatter:{},sidebar:"tools",previous:{title:"kcl mod pkg",permalink:"/zh-CN/docs/next/tools/cli/package-management/command-reference/pkg"},next:{title:"kcl registry login",permalink:"/zh-CN/docs/next/tools/cli/package-management/command-reference/login"}},i={},m=[{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u9009\u9879",id:"\u9009\u9879",level:2},{value:"--update",id:"--update",level:3},{value:"--help, -h",id:"--help--h",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u6253\u5370 kcl \u5305\u7684\u5143\u6570\u636e",id:"\u6253\u5370-kcl-\u5305\u7684\u5143\u6570\u636e",level:3}],p={toc:m},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kcl-mod-metadata"},"kcl mod metadata"),(0,r.kt)("p",null,"\u6253\u5370 kcl \u5305\u7684\u5143\u6570\u636e\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kcl mod metadata [options]\n")),(0,r.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"kcl mod metadata")," \u4f1a\u6253\u5370 kcl \u5305\u7684\u5143\u6570\u636e\u3002\u5143\u6570\u636e\u5305\u62ec\u5305\u7684\u4f9d\u8d56\u4fe1\u606f\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--update")," \u9009\u9879\u7528\u4e8e\u81ea\u52a8\u4e0b\u8f7d\u7f3a\u5931\u7684\u4f9d\u8d56\u5305\u3002"),(0,r.kt)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),(0,r.kt)("h3",{id:"--update"},"--update"),(0,r.kt)("p",null,"\u81ea\u52a8\u4e0b\u8f7d\u7f3a\u5931\u7684\u4f9d\u8d56\u5305\u3002"),(0,r.kt)("h3",{id:"--help--h"},"--help, -h"),(0,r.kt)("p",null,"\u5c55\u793a ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl mod metadata")," \u547d\u4ee4\u7684\u5e2e\u52a9\u4fe1\u606f\u3002"),(0,r.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("h3",{id:"\u6253\u5370-kcl-\u5305\u7684\u5143\u6570\u636e"},"\u6253\u5370 kcl \u5305\u7684\u5143\u6570\u636e"),(0,r.kt)("p",null,"\u6253\u5370 kcl \u5305\u7684\u5143\u6570\u636e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kcl mod metadata\n")),(0,r.kt)("p",null,"\u6253\u5370 kcl \u5305\u7684\u5143\u6570\u636e\uff0c\u5e76\u81ea\u52a8\u4e0b\u8f7d\u7f3a\u5931\u7684\u4f9d\u8d56\u5305\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kcl mod metadata --update\n")))}u.isMDXComponent=!0}}]);