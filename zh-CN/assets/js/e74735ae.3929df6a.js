"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[82128],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>d});var n=t(67294);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,l=function(e,r){if(null==e)return{};var t,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=n.createContext({}),i=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},m=function(e){var r=i(e.components);return n.createElement(o.Provider,{value:r},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=i(t),s=l,d=u["".concat(o,".").concat(s)]||u[s]||k[s]||a;return t?n.createElement(d,c(c({ref:r},m),{},{components:t})):n.createElement(d,c({ref:r},m))}));function d(e,r){var t=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var a=t.length,c=new Array(a);c[0]=s;var p={};for(var o in r)hasOwnProperty.call(r,o)&&(p[o]=r[o]);p.originalType=e,p[u]="string"==typeof e?e:l,c[1]=p;for(var i=2;i<a;i++)c[i]=t[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},66851:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>c,default:()=>k,frontMatter:()=>a,metadata:()=>p,toc:()=>i});var n=t(87462),l=(t(67294),t(3905));const a={},c="kpm pull",p={unversionedId:"reference/package-management/command-reference/pull",id:"version-0.5.2/reference/package-management/command-reference/pull",title:"kpm pull",description:"\u4e0b\u8f7d kcl \u5305\u4ece kpm registry\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.5.2/reference/package-management/command-reference/9.pull.md",sourceDirName:"reference/package-management/command-reference",slug:"/reference/package-management/command-reference/pull",permalink:"/zh-CN/docs/0.5.2/reference/package-management/command-reference/pull",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.2/reference/package-management/command-reference/9.pull.md",tags:[],version:"0.5.2",lastUpdatedBy:"peefy",lastUpdatedAt:1709797004,formattedLastUpdatedAt:"2024\u5e743\u67087\u65e5",sidebarPosition:9,frontMatter:{},sidebar:"reference",previous:{title:"kpm push",permalink:"/zh-CN/docs/0.5.2/reference/package-management/command-reference/push"},next:{title:"kpm help",permalink:"/zh-CN/docs/0.5.2/reference/package-management/command-reference/help"}},o={},i=[{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u9009\u9879",id:"\u9009\u9879",level:2},{value:"--tag",id:"--tag",level:3},{value:"--help, -h",id:"--help--h",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u4ece kpm registry \u4e0b\u8f7d kcl \u5305",id:"\u4ece-kpm-registry-\u4e0b\u8f7d-kcl-\u5305",level:3},{value:"\u4e0b\u8f7d kcl \u5305\u901a\u8fc7 oci url",id:"\u4e0b\u8f7d-kcl-\u5305\u901a\u8fc7-oci-url",level:3}],m={toc:i},u="wrapper";function k(e){let{components:r,...t}=e;return(0,l.kt)(u,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"kpm-pull"},"kpm pull"),(0,l.kt)("p",null,"\u4e0b\u8f7d kcl \u5305\u4ece kpm registry\u3002"),(0,l.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kpm pull [options][package_source]\n")),(0,l.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"kpm pull")," \u4f1a\u4ece kpm registry \u4e0b\u8f7d kcl \u5305\u3002"),(0,l.kt)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),(0,l.kt)("h3",{id:"--tag"},"--tag"),(0,l.kt)("p",null,"\u4f7f\u7528 oci url \u4e0b\u8f7d\u5305\u65f6, \u6307\u5b9a\u8981\u4e0b\u8f7d\u7684 kcl \u5305\u7684 tag\u3002"),(0,l.kt)("h3",{id:"--help--h"},"--help, -h"),(0,l.kt)("p",null,"\u5c55\u793a ",(0,l.kt)("inlineCode",{parentName:"p"},"kpm pull")," \u547d\u4ee4\u7684\u5e2e\u52a9\u4fe1\u606f\u3002"),(0,l.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("h3",{id:"\u4ece-kpm-registry-\u4e0b\u8f7d-kcl-\u5305"},"\u4ece kpm registry \u4e0b\u8f7d kcl \u5305"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"kpm pull")," \u547d\u4ee4\u4ece \u9ed8\u8ba4\u7684 kpm registry \u4e0b\u8f7d kcl \u5305\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kpm pull <package_name>:<package_version>\n")),(0,l.kt)("h3",{id:"\u4e0b\u8f7d-kcl-\u5305\u901a\u8fc7-oci-url"},"\u4e0b\u8f7d kcl \u5305\u901a\u8fc7 oci url"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"kpm pull")," \u547d\u4ee4\u4ece\u4e00\u4e2a oci url \u4e0b\u8f7d kcl \u5305\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kpm pull --tag <kcl_package_version> <oci_url>\n")))}k.isMDXComponent=!0}}]);