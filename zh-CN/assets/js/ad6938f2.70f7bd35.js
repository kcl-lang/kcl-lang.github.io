"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[60975],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(n),k=a,u=m["".concat(o,".").concat(k)]||m[k]||s[k]||l;return n?r.createElement(u,c(c({ref:t},d),{},{components:n})):r.createElement(u,c({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=k;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:a,c[1]=i;for(var p=2;p<l;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},66707:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={},c="kpm add",i={unversionedId:"reference/package-management/command-reference/add",id:"version-0.5.2/reference/package-management/command-reference/add",title:"kpm add",description:"\u6dfb\u52a0\u4e00\u4e2a\u4f9d\u8d56\u5230 kcl \u5305\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.5.2/reference/package-management/command-reference/2.add.md",sourceDirName:"reference/package-management/command-reference",slug:"/reference/package-management/command-reference/add",permalink:"/zh-CN/docs/0.5.2/reference/package-management/command-reference/add",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.2/reference/package-management/command-reference/2.add.md",tags:[],version:"0.5.2",lastUpdatedBy:"Peefy",lastUpdatedAt:1706869561,formattedLastUpdatedAt:"2024\u5e742\u67082\u65e5",sidebarPosition:2,frontMatter:{},sidebar:"reference",previous:{title:"kpm init",permalink:"/zh-CN/docs/0.5.2/reference/package-management/command-reference/init"},next:{title:"kpm pkg",permalink:"/zh-CN/docs/0.5.2/reference/package-management/command-reference/pkg"}},o={},p=[{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u9009\u9879",id:"\u9009\u9879",level:2},{value:"--git",id:"--git",level:3},{value:"--tag",id:"--tag",level:3},{value:"--help, -h",id:"--help--h",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u6dfb\u52a0\u4e00\u4e2a\u6765\u81ea kcl registry \u7684\u4f9d\u8d56",id:"\u6dfb\u52a0\u4e00\u4e2a\u6765\u81ea-kcl-registry-\u7684\u4f9d\u8d56",level:3},{value:"\u6dfb\u52a0\u4e00\u4e2a\u6765\u81ea git \u4ed3\u5e93\u7684\u4f9d\u8d56",id:"\u6dfb\u52a0\u4e00\u4e2a\u6765\u81ea-git-\u4ed3\u5e93\u7684\u4f9d\u8d56",level:3}],d={toc:p},m="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kpm-add"},"kpm add"),(0,a.kt)("p",null,"\u6dfb\u52a0\u4e00\u4e2a\u4f9d\u8d56\u5230 kcl \u5305\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kpm add [options][package_reference]\n")),(0,a.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kpm add")," \u4f1a\u6dfb\u52a0\u4e00\u4e2a\u4f9d\u8d56\u5230 kcl \u5305\u3002\u4f9d\u8d56\u53ef\u4ee5\u6765\u81ea git \u4ed3\u5e93\uff0c\u6216\u8005 kcl registry\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"package_reference")," \u662f\u4e00\u4e2a kcl \u5305\u5f15\u7528\uff0c\u683c\u5f0f\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"package_name:version"),"\u3002"),(0,a.kt)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),(0,a.kt)("h3",{id:"--git"},"--git"),(0,a.kt)("p",null,"\u6307\u5b9a\u4f9d\u8d56\u6765\u81ea git \u4ed3\u5e93\u7684 git url\u3002"),(0,a.kt)("h3",{id:"--tag"},"--tag"),(0,a.kt)("p",null,"\u6307\u5b9a\u4f9d\u8d56\u6765\u81ea git \u4ed3\u5e93\u7684 tag\u3002"),(0,a.kt)("h3",{id:"--help--h"},"--help, -h"),(0,a.kt)("p",null,"\u663e\u793a\u5e2e\u52a9\u4fe1\u606f\u3002"),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("h3",{id:"\u6dfb\u52a0\u4e00\u4e2a\u6765\u81ea-kcl-registry-\u7684\u4f9d\u8d56"},"\u6dfb\u52a0\u4e00\u4e2a\u6765\u81ea kcl registry \u7684\u4f9d\u8d56"),(0,a.kt)("p",null,"\u6dfb\u52a0\u4e00\u4e2a\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"k8s")," \u7684\u4f9d\u8d56\uff0c\u7248\u672c\u4e3a\u6700\u65b0\u7248\u672c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kpm add k8s\n")),(0,a.kt)("p",null,"\u6dfb\u52a0\u4e00\u4e2a\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"k8s")," \u7684\u4f9d\u8d56\uff0c\u7248\u672c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"v1.27.2"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kpm add k8s:v1.27.2\n")),(0,a.kt)("h3",{id:"\u6dfb\u52a0\u4e00\u4e2a\u6765\u81ea-git-\u4ed3\u5e93\u7684\u4f9d\u8d56"},"\u6dfb\u52a0\u4e00\u4e2a\u6765\u81ea git \u4ed3\u5e93\u7684\u4f9d\u8d56"),(0,a.kt)("p",null,"\u6dfb\u52a0\u4e00\u4e2a\u6765\u81ea git \u4ed3\u5e93\u7684 kcl \u5305\u4f9d\u8d56\uff0ctag \u4e3a v0.1.0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kpm add --git https://github.com/awesome-kusion/konfig.git --tag v0.1.0\n")))}s.isMDXComponent=!0}}]);