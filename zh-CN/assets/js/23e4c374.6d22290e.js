"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[19399],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(r),m=l,d=u["".concat(i,".").concat(m)]||u[m]||g[m]||a;return r?n.createElement(d,c(c({ref:t},p),{},{components:r})):n.createElement(d,c({ref:t},p))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,c=new Array(a);c[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:l,c[1]=o;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},83797:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>g,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var n=r(87462),l=(r(67294),r(3905));const a={},c="kcl registry login",o={unversionedId:"tools/cli/package-management/command-reference/login",id:"tools/cli/package-management/command-reference/login",title:"kcl registry login",description:"\u767b\u9646 kcl registry.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tools/cli/package-management/command-reference/6.login.md",sourceDirName:"tools/cli/package-management/command-reference",slug:"/tools/cli/package-management/command-reference/login",permalink:"/zh-CN/docs/next/tools/cli/package-management/command-reference/login",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/tools/cli/package-management/command-reference/6.login.md",tags:[],version:"current",lastUpdatedBy:"peefy",lastUpdatedAt:1709797004,formattedLastUpdatedAt:"2024\u5e743\u67087\u65e5",sidebarPosition:6,frontMatter:{},sidebar:"tools",previous:{title:"kcl mod metadata",permalink:"/zh-CN/docs/next/tools/cli/package-management/command-reference/metadata"},next:{title:"kcl registry logout",permalink:"/zh-CN/docs/next/tools/cli/package-management/command-reference/logout"}},i={},s=[{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u9009\u9879",id:"\u9009\u9879",level:2},{value:"--username, -u",id:"--username--u",level:3},{value:"--password, -p",id:"--password--p",level:3},{value:"--help, -h",id:"--help--h",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u767b\u9646\u5230 kcl registry, \u901a\u8fc7\u53c2\u6570\u8f93\u5165\u7528\u6237\u540d\u548c\u5bc6\u7801",id:"\u767b\u9646\u5230-kcl-registry-\u901a\u8fc7\u53c2\u6570\u8f93\u5165\u7528\u6237\u540d\u548c\u5bc6\u7801",level:3},{value:"\u767b\u9646\u5230 kcl registry, \u901a\u8fc7\u53c2\u6570\u8f93\u5165\u7528\u6237\u540d\uff0c\u5bc6\u7801\u901a\u8fc7\u4ea4\u4e92\u5f0f\u8f93\u5165",id:"\u767b\u9646\u5230-kcl-registry-\u901a\u8fc7\u53c2\u6570\u8f93\u5165\u7528\u6237\u540d\u5bc6\u7801\u901a\u8fc7\u4ea4\u4e92\u5f0f\u8f93\u5165",level:3},{value:"\u767b\u9646\u5230 kcl registry, \u7528\u6237\u540d\u548c\u5bc6\u7801\u901a\u8fc7\u4ea4\u4e92\u5f0f\u8f93\u5165",id:"\u767b\u9646\u5230-kcl-registry-\u7528\u6237\u540d\u548c\u5bc6\u7801\u901a\u8fc7\u4ea4\u4e92\u5f0f\u8f93\u5165",level:3}],p={toc:s},u="wrapper";function g(e){let{components:t,...r}=e;return(0,l.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"kcl-registry-login"},"kcl registry login"),(0,l.kt)("p",null,"\u767b\u9646 kcl registry."),(0,l.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kcl registry login [options][kpm_registry]\n")),(0,l.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"kcl registry login")," \u5c06\u4f1a\u767b\u9646 kcl registry\u3002"),(0,l.kt)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),(0,l.kt)("h3",{id:"--username--u"},"--username, -u"),(0,l.kt)("p",null,"\u6307\u5b9a kcl registry \u7684\u7528\u6237\u540d\u3002"),(0,l.kt)("h3",{id:"--password--p"},"--password, -p"),(0,l.kt)("p",null,"\u6307\u5b9a kcl registry \u7684\u5bc6\u7801\u3002"),(0,l.kt)("h3",{id:"--help--h"},"--help, -h"),(0,l.kt)("p",null,"\u5c55\u793a ",(0,l.kt)("inlineCode",{parentName:"p"},"kcl registry login")," \u547d\u4ee4\u7684\u5e2e\u52a9\u4fe1\u606f\u3002"),(0,l.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("h3",{id:"\u767b\u9646\u5230-kcl-registry-\u901a\u8fc7\u53c2\u6570\u8f93\u5165\u7528\u6237\u540d\u548c\u5bc6\u7801"},"\u767b\u9646\u5230 kcl registry, \u901a\u8fc7\u53c2\u6570\u8f93\u5165\u7528\u6237\u540d\u548c\u5bc6\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kcl registry login -u <account_name> -p <password> <oci_registry>\n")),(0,l.kt)("p",null,"\u671f\u671b\u8f93\u51fa\u4e3a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"Login succeeded\n")),(0,l.kt)("h3",{id:"\u767b\u9646\u5230-kcl-registry-\u901a\u8fc7\u53c2\u6570\u8f93\u5165\u7528\u6237\u540d\u5bc6\u7801\u901a\u8fc7\u4ea4\u4e92\u5f0f\u8f93\u5165"},"\u767b\u9646\u5230 kcl registry, \u901a\u8fc7\u53c2\u6570\u8f93\u5165\u7528\u6237\u540d\uff0c\u5bc6\u7801\u901a\u8fc7\u4ea4\u4e92\u5f0f\u8f93\u5165"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kcl registry login -u <account_name> <oci_registry>\n")),(0,l.kt)("p",null,"\u671f\u671b\u8f93\u51fa\u4e3a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"Password:\nLogin succeeded\n")),(0,l.kt)("h3",{id:"\u767b\u9646\u5230-kcl-registry-\u7528\u6237\u540d\u548c\u5bc6\u7801\u901a\u8fc7\u4ea4\u4e92\u5f0f\u8f93\u5165"},"\u767b\u9646\u5230 kcl registry, \u7528\u6237\u540d\u548c\u5bc6\u7801\u901a\u8fc7\u4ea4\u4e92\u5f0f\u8f93\u5165"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kcl registry login <oci_registry>\n")),(0,l.kt)("p",null,"\u671f\u671b\u8f93\u51fa\u4e3a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"Username: <account_name>\nPassword:\nLogin succeeded\n")))}g.isMDXComponent=!0}}]);