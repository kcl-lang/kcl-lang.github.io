"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[81894],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(n),s=a,u=d["".concat(i,".").concat(s)]||d[s]||k[s]||l;return n?r.createElement(u,c(c({ref:t},m),{},{components:n})):r.createElement(u,c({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=s;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[d]="string"==typeof e?e:a,c[1]=o;for(var p=2;p<l;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},44700:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={},c="kcl mod init",o={unversionedId:"tools/cli/package-management/command-reference/init",id:"tools/cli/package-management/command-reference/init",title:"kcl mod init",description:"\u521d\u59cb\u5316\u4e00\u4e2a kcl \u5305\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tools/cli/package-management/command-reference/1.init.md",sourceDirName:"tools/cli/package-management/command-reference",slug:"/tools/cli/package-management/command-reference/init",permalink:"/zh-CN/docs/next/tools/cli/package-management/command-reference/init",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/tools/cli/package-management/command-reference/1.init.md",tags:[],version:"current",lastUpdatedBy:"peefy",lastUpdatedAt:1707103391,formattedLastUpdatedAt:"2024\u5e742\u67085\u65e5",sidebarPosition:1,frontMatter:{},sidebar:"tools",previous:{title:"\u6821\u9a8c\u5de5\u5177",permalink:"/zh-CN/docs/next/tools/cli/kcl/vet"},next:{title:"kcl mod add",permalink:"/zh-CN/docs/next/tools/cli/package-management/command-reference/add"}},i={},p=[{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u9009\u7ebf",id:"\u9009\u7ebf",level:2},{value:"--help, -h",id:"--help--h",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u521d\u59cb\u5316\u5f53\u524d\u76ee\u5f55\u4e3a kcl \u5305",id:"\u521d\u59cb\u5316\u5f53\u524d\u76ee\u5f55\u4e3a-kcl-\u5305",level:3},{value:"\u521d\u59cb\u5316\u4e00\u4e2a\u540d\u4e3a my_package \u7684 kcl \u5305",id:"\u521d\u59cb\u5316\u4e00\u4e2a\u540d\u4e3a-my_package-\u7684-kcl-\u5305",level:3}],m={toc:p},d="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kcl-mod-init"},"kcl mod init"),(0,a.kt)("p",null,"\u521d\u59cb\u5316\u4e00\u4e2a kcl \u5305\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kcl mod init [options][package_name]\n")),(0,a.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kcl mod init")," \u4f1a\u5728\u5f53\u524d\u76ee\u5f55\u521d\u59cb\u5316\u4e00\u4e2a kcl \u5305\u3002\u5982\u679c\u6ca1\u6709\u63d0\u4f9b\u5305\u540d\uff0c\u4f1a\u4f7f\u7528\u5f53\u524d\u76ee\u5f55\u7684\u540d\u5b57\u4f5c\u4e3a\u5305\u540d\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u63d0\u4f9b\u4e86\u5305\u540d\uff0c\u4f1a\u5728\u5f53\u524d\u76ee\u5f55\u4e0b\u521b\u5efa\u4e00\u4e2a\u4ee5\u5305\u540d\u547d\u540d\u7684\u5b50\u76ee\u5f55\uff0c\u5e76\u5728\u8be5\u76ee\u5f55\u4e0b\u521d\u59cb\u5316 kcl \u5305\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kcl mod init")," \u4f1a\u5728\u5305\u76ee\u5f55\u4e0b\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl.mod"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"kcl.mod.lock")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"main.k"),"\u3002"),(0,a.kt)("h2",{id:"\u9009\u7ebf"},"\u9009\u7ebf"),(0,a.kt)("h3",{id:"--help--h"},"--help, -h"),(0,a.kt)("p",null,"\u663e\u793a\u5e2e\u52a9\u4fe1\u606f\u3002"),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("h3",{id:"\u521d\u59cb\u5316\u5f53\u524d\u76ee\u5f55\u4e3a-kcl-\u5305"},"\u521d\u59cb\u5316\u5f53\u524d\u76ee\u5f55\u4e3a kcl \u5305"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# \u521b\u5efa\u4e00\u4e2a\u76ee\u5f55\n$ mkdir my_package\n\n# \u8fdb\u5165\u76ee\u5f55\n$ cd my_package\n\n# \u521d\u59cb\u5316\u5f53\u524d\u76ee\u5f55\u4e3a kcl \u5305\n$ kcl mod init\n")),(0,a.kt)("h3",{id:"\u521d\u59cb\u5316\u4e00\u4e2a\u540d\u4e3a-my_package-\u7684-kcl-\u5305"},"\u521d\u59cb\u5316\u4e00\u4e2a\u540d\u4e3a my_package \u7684 kcl \u5305"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# \u521d\u59cb\u5316\u4e00\u4e2a\u540d\u4e3a my_package \u7684 kcl \u5305\nkcl mod init my_package\n")))}k.isMDXComponent=!0}}]);