"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[8948],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>k});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),s=p(r),u=l,k=s["".concat(i,".").concat(u)]||s[u]||d[u]||a;return r?n.createElement(k,o(o({ref:t},m),{},{components:r})):n.createElement(k,o({ref:t},m))}));function k(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[s]="string"==typeof e?e:l,o[1]=c;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},31884:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(87462),l=(r(67294),r(3905));const a={},o="kcl mod push",c={unversionedId:"tools/cli/package-management/command-reference/push",id:"version-0.7/tools/cli/package-management/command-reference/push",title:"kcl mod push",description:"\u4e0a\u4f20\u4e00\u4e2a kcl \u5305\u5230 kcl mod registry\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.7/tools/cli/package-management/command-reference/8.push.md",sourceDirName:"tools/cli/package-management/command-reference",slug:"/tools/cli/package-management/command-reference/push",permalink:"/zh-CN/docs/0.7/tools/cli/package-management/command-reference/push",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.7/tools/cli/package-management/command-reference/8.push.md",tags:[],version:"0.7",lastUpdatedBy:"Peefy",lastUpdatedAt:1714663025,formattedLastUpdatedAt:"2024\u5e745\u67082\u65e5",sidebarPosition:8,frontMatter:{},sidebar:"tools",previous:{title:"kcl registry logout",permalink:"/zh-CN/docs/0.7/tools/cli/package-management/command-reference/logout"},next:{title:"kcl mod pull",permalink:"/zh-CN/docs/0.7/tools/cli/package-management/command-reference/pull"}},i={},p=[{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u9009\u9879",id:"\u9009\u9879",level:2},{value:"--tar_path",id:"--tar_path",level:3},{value:"--help, -h",id:"--help--h",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u4e0a\u4f20\u5f53\u524d kcl \u5305\u5230 kcl mod registry",id:"\u4e0a\u4f20\u5f53\u524d-kcl-\u5305\u5230-kcl-mod-registry",level:3},{value:"\u4e0a\u4f20\u4e00\u4e2a <code>*.tar</code> \u6587\u4ef6\u5230 kcl mod registry",id:"\u4e0a\u4f20\u4e00\u4e2a-tar-\u6587\u4ef6\u5230-kcl-mod-registry",level:3}],m={toc:p},s="wrapper";function d(e){let{components:t,...r}=e;return(0,l.kt)(s,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"kcl-mod-push"},"kcl mod push"),(0,l.kt)("p",null,"\u4e0a\u4f20\u4e00\u4e2a kcl \u5305\u5230 kcl mod registry\u3002"),(0,l.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kcl mod push [options][kpm_registry]\n")),(0,l.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"kcl mod push")," \u5c06\u4f1a\u4e0a\u4f20\u4e00\u4e2a kcl \u5305\u5230 kcl mod registry\u3002"),(0,l.kt)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),(0,l.kt)("h3",{id:"--tar_path"},"--tar_path"),(0,l.kt)("p",null,"\u6307\u5b9a\u4e0a\u4f20\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"*.tar")," \u6587\u4ef6\u8def\u5f84\u3002"),(0,l.kt)("h3",{id:"--help--h"},"--help, -h"),(0,l.kt)("p",null,"\u5c55\u793a ",(0,l.kt)("inlineCode",{parentName:"p"},"kcl mod push")," \u547d\u4ee4\u7684\u5e2e\u52a9\u4fe1\u606f\u3002"),(0,l.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("h3",{id:"\u4e0a\u4f20\u5f53\u524d-kcl-\u5305\u5230-kcl-mod-registry"},"\u4e0a\u4f20\u5f53\u524d kcl \u5305\u5230 kcl mod registry"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728 kcl \u5305\u7684\u6839\u76ee\u5f55\u4e0b\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"kcl mod push")," \u547d\u4ee4\u4e0a\u4f20\u4e00\u4e2a kcl \u5305\u5230 kcl mod registry\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u521b\u5efa\u4e00\u4e2a kcl \u5305\n$ kcl mod init <package_name>\n# \u8fdb\u5165 kcl \u5305\u76ee\u5f55\n$ cd <package_name>\n# \u4e0a\u4f20 kcl \u5305\u5230 kcl mod registry\n$ kcl mod push <oci_url>\n")),(0,l.kt)("h3",{id:"\u4e0a\u4f20\u4e00\u4e2a-tar-\u6587\u4ef6\u5230-kcl-mod-registry"},"\u4e0a\u4f20\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"h3"},"*.tar")," \u6587\u4ef6\u5230 kcl mod registry"),(0,l.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"kcl mod push")," \u547d\u4ee4\u4e0a\u4f20\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"*.tar")," \u6587\u4ef6\u5230 kcl mod registry\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kcl mod push --tar_path <tar_path> <oci_url>\n")))}d.isMDXComponent=!0}}]);