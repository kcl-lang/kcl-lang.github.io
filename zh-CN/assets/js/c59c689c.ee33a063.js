"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[769],{3905:(e,t,l)=>{l.d(t,{Zo:()=>m,kt:()=>k});var r=l(67294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function c(e,t){if(null==e)return{};var l,r,n=function(e,t){if(null==e)return{};var l,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},m=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var l=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=p(l),s=n,k=u["".concat(i,".").concat(s)]||u[s]||d[s]||a;return l?r.createElement(k,o(o({ref:t},m),{},{components:l})):r.createElement(k,o({ref:t},m))}));function k(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=l.length,o=new Array(a);o[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:n,o[1]=c;for(var p=2;p<a;p++)o[p]=l[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,l)}s.displayName="MDXCreateElement"},70820:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=l(87462),n=(l(67294),l(3905));const a={},o="kcl mod pull",c={unversionedId:"tools/cli/package-management/command-reference/pull",id:"version-0.7.0/tools/cli/package-management/command-reference/pull",title:"kcl mod pull",description:"\u4e0b\u8f7d kcl \u5305\u4ece kcl mod registry\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.7.0/tools/cli/package-management/command-reference/9.pull.md",sourceDirName:"tools/cli/package-management/command-reference",slug:"/tools/cli/package-management/command-reference/pull",permalink:"/zh-CN/docs/tools/cli/package-management/command-reference/pull",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.7.0/tools/cli/package-management/command-reference/9.pull.md",tags:[],version:"0.7.0",lastUpdatedBy:"Peefy",lastUpdatedAt:1706869561,formattedLastUpdatedAt:"2024\u5e742\u67082\u65e5",sidebarPosition:9,frontMatter:{},sidebar:"tools",previous:{title:"kcl mod push",permalink:"/zh-CN/docs/tools/cli/package-management/command-reference/push"},next:{title:"kcl mod help",permalink:"/zh-CN/docs/tools/cli/package-management/command-reference/help"}},i={},p=[{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u9009\u9879",id:"\u9009\u9879",level:2},{value:"--tag",id:"--tag",level:3},{value:"--help, -h",id:"--help--h",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u4ece kcl mod registry \u4e0b\u8f7d kcl \u5305",id:"\u4ece-kcl-mod-registry-\u4e0b\u8f7d-kcl-\u5305",level:3},{value:"\u4e0b\u8f7d kcl \u5305\u901a\u8fc7 oci url",id:"\u4e0b\u8f7d-kcl-\u5305\u901a\u8fc7-oci-url",level:3}],m={toc:p},u="wrapper";function d(e){let{components:t,...l}=e;return(0,n.kt)(u,(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"kcl-mod-pull"},"kcl mod pull"),(0,n.kt)("p",null,"\u4e0b\u8f7d kcl \u5305\u4ece kcl mod registry\u3002"),(0,n.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kcl mod pull [options][package_source]\n")),(0,n.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"kcl mod pull")," \u4f1a\u4ece kcl mod registry \u4e0b\u8f7d kcl \u5305\u3002"),(0,n.kt)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),(0,n.kt)("h3",{id:"--tag"},"--tag"),(0,n.kt)("p",null,"\u4f7f\u7528 oci url \u4e0b\u8f7d\u5305\u65f6, \u6307\u5b9a\u8981\u4e0b\u8f7d\u7684 kcl \u5305\u7684 tag\u3002"),(0,n.kt)("h3",{id:"--help--h"},"--help, -h"),(0,n.kt)("p",null,"\u5c55\u793a ",(0,n.kt)("inlineCode",{parentName:"p"},"kcl mod pull")," \u547d\u4ee4\u7684\u5e2e\u52a9\u4fe1\u606f\u3002"),(0,n.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,n.kt)("h3",{id:"\u4ece-kcl-mod-registry-\u4e0b\u8f7d-kcl-\u5305"},"\u4ece kcl mod registry \u4e0b\u8f7d kcl \u5305"),(0,n.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"kcl mod pull")," \u547d\u4ee4\u4ece \u9ed8\u8ba4\u7684 kcl mod registry \u4e0b\u8f7d kcl \u5305\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kcl mod pull <package_name>:<package_version>\n")),(0,n.kt)("h3",{id:"\u4e0b\u8f7d-kcl-\u5305\u901a\u8fc7-oci-url"},"\u4e0b\u8f7d kcl \u5305\u901a\u8fc7 oci url"),(0,n.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"kcl mod pull")," \u547d\u4ee4\u4ece\u4e00\u4e2a oci url \u4e0b\u8f7d kcl \u5305\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kcl mod pull --tag <kcl_package_version> <oci_url>\n")))}d.isMDXComponent=!0}}]);