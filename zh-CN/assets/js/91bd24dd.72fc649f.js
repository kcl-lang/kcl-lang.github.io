"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[98687],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),d=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=d(n),k=r,u=m["".concat(i,".").concat(k)]||m[k]||s[k]||l;return n?a.createElement(u,o(o({ref:t},p),{},{components:n})):a.createElement(u,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=k;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[m]="string"==typeof e?e:r,o[1]=c;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},77472:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={},o="kcl mod add",c={unversionedId:"tools/cli/package-management/command-reference/add",id:"version-0.7.0/tools/cli/package-management/command-reference/add",title:"kcl mod add",description:"\u6dfb\u52a0\u4e00\u4e2a\u4f9d\u8d56\u5230 kcl \u5305\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.7.0/tools/cli/package-management/command-reference/2.add.md",sourceDirName:"tools/cli/package-management/command-reference",slug:"/tools/cli/package-management/command-reference/add",permalink:"/zh-CN/docs/tools/cli/package-management/command-reference/add",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.7.0/tools/cli/package-management/command-reference/2.add.md",tags:[],version:"0.7.0",lastUpdatedBy:"Peefy",lastUpdatedAt:1706869561,formattedLastUpdatedAt:"2024\u5e742\u67082\u65e5",sidebarPosition:2,frontMatter:{},sidebar:"tools",previous:{title:"kcl mod init",permalink:"/zh-CN/docs/tools/cli/package-management/command-reference/init"},next:{title:"kcl mod pkg",permalink:"/zh-CN/docs/tools/cli/package-management/command-reference/pkg"}},i={},d=[{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u9009\u9879",id:"\u9009\u9879",level:2},{value:"--git",id:"--git",level:3},{value:"--tag",id:"--tag",level:3},{value:"--help, -h",id:"--help--h",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u6dfb\u52a0\u4e00\u4e2a\u6765\u81ea kcl registry \u7684\u4f9d\u8d56",id:"\u6dfb\u52a0\u4e00\u4e2a\u6765\u81ea-kcl-registry-\u7684\u4f9d\u8d56",level:3},{value:"\u6dfb\u52a0\u4e00\u4e2a\u6765\u81ea git \u4ed3\u5e93\u7684\u4f9d\u8d56",id:"\u6dfb\u52a0\u4e00\u4e2a\u6765\u81ea-git-\u4ed3\u5e93\u7684\u4f9d\u8d56",level:3}],p={toc:d},m="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kcl-mod-add"},"kcl mod add"),(0,r.kt)("p",null,"\u6dfb\u52a0\u4e00\u4e2a\u4f9d\u8d56\u5230 kcl \u5305\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kcl mod add [options][package_reference]\n")),(0,r.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"kcl mod add")," \u4f1a\u6dfb\u52a0\u4e00\u4e2a\u4f9d\u8d56\u5230 kcl \u5305\u3002\u4f9d\u8d56\u53ef\u4ee5\u6765\u81ea git \u4ed3\u5e93\uff0c\u6216\u8005 kcl registry\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"package_reference")," \u662f\u4e00\u4e2a kcl \u5305\u5f15\u7528\uff0c\u683c\u5f0f\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"package_name:version"),"\u3002"),(0,r.kt)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),(0,r.kt)("h3",{id:"--git"},"--git"),(0,r.kt)("p",null,"\u6307\u5b9a\u4f9d\u8d56\u6765\u81ea git \u4ed3\u5e93\u7684 git url\u3002"),(0,r.kt)("h3",{id:"--tag"},"--tag"),(0,r.kt)("p",null,"\u6307\u5b9a\u4f9d\u8d56\u6765\u81ea git \u4ed3\u5e93\u7684 tag\u3002"),(0,r.kt)("h3",{id:"--help--h"},"--help, -h"),(0,r.kt)("p",null,"\u663e\u793a\u5e2e\u52a9\u4fe1\u606f\u3002"),(0,r.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("h3",{id:"\u6dfb\u52a0\u4e00\u4e2a\u6765\u81ea-kcl-registry-\u7684\u4f9d\u8d56"},"\u6dfb\u52a0\u4e00\u4e2a\u6765\u81ea kcl registry \u7684\u4f9d\u8d56"),(0,r.kt)("p",null,"\u6dfb\u52a0\u4e00\u4e2a\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"k8s")," \u7684\u4f9d\u8d56\uff0c\u7248\u672c\u4e3a\u6700\u65b0\u7248\u672c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kcl mod add k8s\n")),(0,r.kt)("p",null,"\u6dfb\u52a0\u4e00\u4e2a\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"k8s")," \u7684\u4f9d\u8d56\uff0c\u7248\u672c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.27.2"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kcl mod add k8s:v1.27.2\n")),(0,r.kt)("h3",{id:"\u6dfb\u52a0\u4e00\u4e2a\u6765\u81ea-git-\u4ed3\u5e93\u7684\u4f9d\u8d56"},"\u6dfb\u52a0\u4e00\u4e2a\u6765\u81ea git \u4ed3\u5e93\u7684\u4f9d\u8d56"),(0,r.kt)("p",null,"\u6dfb\u52a0\u4e00\u4e2a\u6765\u81ea git \u4ed3\u5e93\u7684 kcl \u5305\u4f9d\u8d56\uff0ctag \u4e3a v0.1.0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kcl mod add --git https://github.com/awesome-kusion/konfig.git --tag v0.1.0\n")))}s.isMDXComponent=!0}}]);