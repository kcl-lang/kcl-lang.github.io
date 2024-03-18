"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[32844],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},m=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=i(r),k=a,d=s["".concat(c,".").concat(k)]||s[k]||u[k]||l;return r?n.createElement(d,p(p({ref:t},m),{},{components:r})):n.createElement(d,p({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,p=new Array(l);p[0]=k;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[s]="string"==typeof e?e:a,p[1]=o;for(var i=2;i<l;i++)p[i]=r[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},39932:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const l={},p="kpm push",o={unversionedId:"tools/cli/package-management/command-reference/push",id:"version-0.6/tools/cli/package-management/command-reference/push",title:"kpm push",description:"\u4e0a\u4f20\u4e00\u4e2a kcl \u5305\u5230 kpm registry\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.6/tools/cli/package-management/command-reference/8.push.md",sourceDirName:"tools/cli/package-management/command-reference",slug:"/tools/cli/package-management/command-reference/push",permalink:"/zh-CN/docs/0.6/tools/cli/package-management/command-reference/push",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.6/tools/cli/package-management/command-reference/8.push.md",tags:[],version:"0.6",lastUpdatedBy:"peefy",lastUpdatedAt:1710771316,formattedLastUpdatedAt:"2024\u5e743\u670818\u65e5",sidebarPosition:8,frontMatter:{},sidebar:"tools",previous:{title:"kpm logout",permalink:"/zh-CN/docs/0.6/tools/cli/package-management/command-reference/logout"},next:{title:"kpm pull",permalink:"/zh-CN/docs/0.6/tools/cli/package-management/command-reference/pull"}},c={},i=[{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u9009\u9879",id:"\u9009\u9879",level:2},{value:"--tar_path",id:"--tar_path",level:3},{value:"--help, -h",id:"--help--h",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u4e0a\u4f20\u5f53\u524d kcl \u5305\u5230 kpm registry",id:"\u4e0a\u4f20\u5f53\u524d-kcl-\u5305\u5230-kpm-registry",level:3},{value:"\u4e0a\u4f20\u4e00\u4e2a <code>*.tar</code> \u6587\u4ef6\u5230 kpm registry",id:"\u4e0a\u4f20\u4e00\u4e2a-tar-\u6587\u4ef6\u5230-kpm-registry",level:3}],m={toc:i},s="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kpm-push"},"kpm push"),(0,a.kt)("p",null,"\u4e0a\u4f20\u4e00\u4e2a kcl \u5305\u5230 kpm registry\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kpm push [options][kpm_registry]\n")),(0,a.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kpm push")," \u5c06\u4f1a\u4e0a\u4f20\u4e00\u4e2a kcl \u5305\u5230 kpm registry\u3002"),(0,a.kt)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),(0,a.kt)("h3",{id:"--tar_path"},"--tar_path"),(0,a.kt)("p",null,"\u6307\u5b9a\u4e0a\u4f20\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"*.tar")," \u6587\u4ef6\u8def\u5f84\u3002"),(0,a.kt)("h3",{id:"--help--h"},"--help, -h"),(0,a.kt)("p",null,"\u5c55\u793a ",(0,a.kt)("inlineCode",{parentName:"p"},"kpm push")," \u547d\u4ee4\u7684\u5e2e\u52a9\u4fe1\u606f\u3002"),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("h3",{id:"\u4e0a\u4f20\u5f53\u524d-kcl-\u5305\u5230-kpm-registry"},"\u4e0a\u4f20\u5f53\u524d kcl \u5305\u5230 kpm registry"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728 kcl \u5305\u7684\u6839\u76ee\u5f55\u4e0b\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"kpm push")," \u547d\u4ee4\u4e0a\u4f20\u4e00\u4e2a kcl \u5305\u5230 kpm registry\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# \u521b\u5efa\u4e00\u4e2a kcl \u5305\n$ kpm init <package_name>\n# \u8fdb\u5165 kcl \u5305\u76ee\u5f55\n$ cd <package_name>\n# \u4e0a\u4f20 kcl \u5305\u5230 kpm registry\n$ kpm push <oci_url>\n")),(0,a.kt)("h3",{id:"\u4e0a\u4f20\u4e00\u4e2a-tar-\u6587\u4ef6\u5230-kpm-registry"},"\u4e0a\u4f20\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"h3"},"*.tar")," \u6587\u4ef6\u5230 kpm registry"),(0,a.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"kpm push")," \u547d\u4ee4\u4e0a\u4f20\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"*.tar")," \u6587\u4ef6\u5230 kpm registry\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kpm push --tar_path <tar_path> <oci_url>\n")))}u.isMDXComponent=!0}}]);