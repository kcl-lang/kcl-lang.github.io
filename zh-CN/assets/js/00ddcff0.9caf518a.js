"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[93490],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},k="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),k=p(n),s=r,u=k["".concat(o,".").concat(s)]||k[s]||d[s]||l;return n?a.createElement(u,c(c({ref:t},m),{},{components:n})):a.createElement(u,c({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[k]="string"==typeof e?e:r,c[1]=i;for(var p=2;p<l;p++)c[p]=n[p];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},70638:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={},c="kpm init",i={unversionedId:"tools/cli/package-management/command-reference/init",id:"version-0.6.0/tools/cli/package-management/command-reference/init",title:"kpm init",description:"\u521d\u59cb\u5316\u4e00\u4e2a kcl \u5305\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.6.0/tools/cli/package-management/command-reference/1.init.md",sourceDirName:"tools/cli/package-management/command-reference",slug:"/tools/cli/package-management/command-reference/init",permalink:"/zh-CN/docs/0.6.0/tools/cli/package-management/command-reference/init",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.6.0/tools/cli/package-management/command-reference/1.init.md",tags:[],version:"0.6.0",lastUpdatedBy:"peefy",lastUpdatedAt:1701659761,formattedLastUpdatedAt:"2023\u5e7412\u67084\u65e5",sidebarPosition:1,frontMatter:{},sidebar:"tools",previous:{title:"kpm",permalink:"/zh-CN/docs/0.6.0/tools/cli/package-management/command-reference/"},next:{title:"kpm add",permalink:"/zh-CN/docs/0.6.0/tools/cli/package-management/command-reference/add"}},o={},p=[{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u9009\u7ebf",id:"\u9009\u7ebf",level:2},{value:"--help, -h",id:"--help--h",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u521d\u59cb\u5316\u5f53\u524d\u76ee\u5f55\u4e3a kcl \u5305",id:"\u521d\u59cb\u5316\u5f53\u524d\u76ee\u5f55\u4e3a-kcl-\u5305",level:3},{value:"\u521d\u59cb\u5316\u4e00\u4e2a\u540d\u4e3a my_package \u7684 kcl \u5305",id:"\u521d\u59cb\u5316\u4e00\u4e2a\u540d\u4e3a-my_package-\u7684-kcl-\u5305",level:3}],m={toc:p},k="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(k,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kpm-init"},"kpm init"),(0,r.kt)("p",null,"\u521d\u59cb\u5316\u4e00\u4e2a kcl \u5305\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kpm init [options][package_name]\n")),(0,r.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"kpm init")," \u4f1a\u5728\u5f53\u524d\u76ee\u5f55\u521d\u59cb\u5316\u4e00\u4e2a kcl \u5305\u3002\u5982\u679c\u6ca1\u6709\u63d0\u4f9b\u5305\u540d\uff0c\u4f1a\u4f7f\u7528\u5f53\u524d\u76ee\u5f55\u7684\u540d\u5b57\u4f5c\u4e3a\u5305\u540d\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u63d0\u4f9b\u4e86\u5305\u540d\uff0c\u4f1a\u5728\u5f53\u524d\u76ee\u5f55\u4e0b\u521b\u5efa\u4e00\u4e2a\u4ee5\u5305\u540d\u547d\u540d\u7684\u5b50\u76ee\u5f55\uff0c\u5e76\u5728\u8be5\u76ee\u5f55\u4e0b\u521d\u59cb\u5316 kcl \u5305\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"kpm init")," \u4f1a\u5728\u5305\u76ee\u5f55\u4e0b\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl.mod"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"kcl.mod.lock")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"main.k"),"\u3002"),(0,r.kt)("h2",{id:"\u9009\u7ebf"},"\u9009\u7ebf"),(0,r.kt)("h3",{id:"--help--h"},"--help, -h"),(0,r.kt)("p",null,"\u663e\u793a\u5e2e\u52a9\u4fe1\u606f\u3002"),(0,r.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("h3",{id:"\u521d\u59cb\u5316\u5f53\u524d\u76ee\u5f55\u4e3a-kcl-\u5305"},"\u521d\u59cb\u5316\u5f53\u524d\u76ee\u5f55\u4e3a kcl \u5305"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u521b\u5efa\u4e00\u4e2a\u76ee\u5f55\n$ mkdir my_package\n\n# \u8fdb\u5165\u76ee\u5f55\n$ cd my_package\n\n# \u521d\u59cb\u5316\u5f53\u524d\u76ee\u5f55\u4e3a kcl \u5305\n$ kpm init\n")),(0,r.kt)("h3",{id:"\u521d\u59cb\u5316\u4e00\u4e2a\u540d\u4e3a-my_package-\u7684-kcl-\u5305"},"\u521d\u59cb\u5316\u4e00\u4e2a\u540d\u4e3a my_package \u7684 kcl \u5305"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u521d\u59cb\u5316\u4e00\u4e2a\u540d\u4e3a my_package \u7684 kcl \u5305\nkpm init my_package\n")))}d.isMDXComponent=!0}}]);