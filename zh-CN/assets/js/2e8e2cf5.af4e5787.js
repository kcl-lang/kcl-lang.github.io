"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[63448],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),g=o,d=u["".concat(i,".").concat(g)]||u[g]||m[g]||l;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=g;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<l;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},76273:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const l={},a="kcl registry logout",c={unversionedId:"tools/cli/package-management/command-reference/logout",id:"version-0.7/tools/cli/package-management/command-reference/logout",title:"kcl registry logout",description:"\u4ece kcl registry \u767b\u51fa\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.7/tools/cli/package-management/command-reference/7.logout.md",sourceDirName:"tools/cli/package-management/command-reference",slug:"/tools/cli/package-management/command-reference/logout",permalink:"/zh-CN/docs/0.7/tools/cli/package-management/command-reference/logout",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.7/tools/cli/package-management/command-reference/7.logout.md",tags:[],version:"0.7",lastUpdatedBy:"Peefy",lastUpdatedAt:1714663025,formattedLastUpdatedAt:"2024\u5e745\u67082\u65e5",sidebarPosition:7,frontMatter:{},sidebar:"tools",previous:{title:"kcl registry login",permalink:"/zh-CN/docs/0.7/tools/cli/package-management/command-reference/login"},next:{title:"kcl mod push",permalink:"/zh-CN/docs/0.7/tools/cli/package-management/command-reference/push"}},i={},s=[{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u9009\u9879",id:"\u9009\u9879",level:2},{value:"--help, -h",id:"--help--h",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u4ece kcl registry \u767b\u51fa",id:"\u4ece-kcl-registry-\u767b\u51fa",level:3}],p={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kcl-registry-logout"},"kcl registry logout"),(0,o.kt)("p",null,"\u4ece kcl registry \u767b\u51fa\u3002"),(0,o.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kcl registry logout [options][kpm_registry]\n")),(0,o.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"kcl registry logout")," \u4f1a\u4ece registry \u767b\u51fa\u3002"),(0,o.kt)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),(0,o.kt)("h3",{id:"--help--h"},"--help, -h"),(0,o.kt)("p",null,"\u5c55\u793a ",(0,o.kt)("inlineCode",{parentName:"p"},"kcl registry logout")," \u547d\u4ee4\u7684\u5e2e\u52a9\u4fe1\u606f\u3002"),(0,o.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("h3",{id:"\u4ece-kcl-registry-\u767b\u51fa"},"\u4ece kcl registry \u767b\u51fa"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kcl registry logout <registry>\n")))}m.isMDXComponent=!0}}]);