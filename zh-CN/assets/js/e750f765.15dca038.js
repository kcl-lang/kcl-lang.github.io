"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[39357],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),s=p(r),g=o,d=s["".concat(i,".").concat(g)]||s[g]||u[g]||a;return r?n.createElement(d,l(l({ref:t},m),{},{components:r})):n.createElement(d,l({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=g;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[s]="string"==typeof e?e:o,l[1]=c;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},38990:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={},l="kpm logout",c={unversionedId:"tools/cli/package-management/command-reference/logout",id:"version-0.6.0/tools/cli/package-management/command-reference/logout",title:"kpm logout",description:"\u4ece kpm registry \u767b\u51fa\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.6.0/tools/cli/package-management/command-reference/7.logout.md",sourceDirName:"tools/cli/package-management/command-reference",slug:"/tools/cli/package-management/command-reference/logout",permalink:"/zh-CN/docs/0.6.0/tools/cli/package-management/command-reference/logout",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.6.0/tools/cli/package-management/command-reference/7.logout.md",tags:[],version:"0.6.0",lastUpdatedBy:"Peefy",lastUpdatedAt:1708241829,formattedLastUpdatedAt:"2024\u5e742\u670818\u65e5",sidebarPosition:7,frontMatter:{},sidebar:"tools",previous:{title:"kpm login",permalink:"/zh-CN/docs/0.6.0/tools/cli/package-management/command-reference/login"},next:{title:"kpm push",permalink:"/zh-CN/docs/0.6.0/tools/cli/package-management/command-reference/push"}},i={},p=[{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u9009\u9879",id:"\u9009\u9879",level:2},{value:"--help, -h",id:"--help--h",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u4ece kpm registry \u767b\u51fa",id:"\u4ece-kpm-registry-\u767b\u51fa",level:3}],m={toc:p},s="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kpm-logout"},"kpm logout"),(0,o.kt)("p",null,"\u4ece kpm registry \u767b\u51fa\u3002"),(0,o.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kpm logout [options][kpm_registry]\n")),(0,o.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"kpm logout")," \u4f1a\u4ece kpm registry \u767b\u51fa\u3002"),(0,o.kt)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),(0,o.kt)("h3",{id:"--help--h"},"--help, -h"),(0,o.kt)("p",null,"\u5c55\u793a ",(0,o.kt)("inlineCode",{parentName:"p"},"kpm logout")," \u547d\u4ee4\u7684\u5e2e\u52a9\u4fe1\u606f\u3002"),(0,o.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("h3",{id:"\u4ece-kpm-registry-\u767b\u51fa"},"\u4ece kpm registry \u767b\u51fa"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kpm logout <registry>\n")))}u.isMDXComponent=!0}}]);