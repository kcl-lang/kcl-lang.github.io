"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[80862],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>s});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),o=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=o(e.components);return r.createElement(p.Provider,{value:n},e.children)},k="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),k=o(t),u=a,s=k["".concat(p,".").concat(u)]||k[u]||d[u]||c;return t?r.createElement(s,l(l({ref:n},m),{},{components:t})):r.createElement(s,l({ref:n},m))}));function s(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,l=new Array(c);l[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[k]="string"==typeof e?e:a,l[1]=i;for(var o=2;o<c;o++)l[o]=t[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},93100:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>o});var r=t(87462),a=(t(67294),t(3905));const c={},l="kpm init",i={unversionedId:"reference/package-management/command-reference/init",id:"reference/package-management/command-reference/init",title:"kpm init",description:"\u521d\u59cb\u5316\u4e00\u4e2a kcl \u5305\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/reference/package-management/command-reference/1.init.md",sourceDirName:"reference/package-management/command-reference",slug:"/reference/package-management/command-reference/init",permalink:"/zh-CN/docs/next/reference/package-management/command-reference/init",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/reference/package-management/command-reference/1.init.md",tags:[],version:"current",lastUpdatedBy:"peefy",lastUpdatedAt:1689687201,formattedLastUpdatedAt:"2023\u5e747\u670818\u65e5",sidebarPosition:1,frontMatter:{},sidebar:"reference",previous:{title:"kpm",permalink:"/zh-CN/docs/next/reference/package-management/command-reference/"},next:{title:"kpm add",permalink:"/zh-CN/docs/next/reference/package-management/command-reference/add"}},p={},o=[{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u9009\u7ebf",id:"\u9009\u7ebf",level:2},{value:"--help, -h",id:"--help--h",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u521d\u59cb\u5316\u5f53\u524d\u76ee\u5f55\u4e3a kcl \u5305",id:"\u521d\u59cb\u5316\u5f53\u524d\u76ee\u5f55\u4e3a-kcl-\u5305",level:3},{value:"\u521d\u59cb\u5316\u4e00\u4e2a\u540d\u4e3a my_package \u7684 kcl \u5305",id:"\u521d\u59cb\u5316\u4e00\u4e2a\u540d\u4e3a-my_package-\u7684-kcl-\u5305",level:3}],m={toc:o},k="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(k,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kpm-init"},"kpm init"),(0,a.kt)("p",null,"\u521d\u59cb\u5316\u4e00\u4e2a kcl \u5305\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kpm init [options][package_name]\n")),(0,a.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kpm init")," \u4f1a\u5728\u5f53\u524d\u76ee\u5f55\u521d\u59cb\u5316\u4e00\u4e2a kcl \u5305\u3002\u5982\u679c\u6ca1\u6709\u63d0\u4f9b\u5305\u540d\uff0c\u4f1a\u4f7f\u7528\u5f53\u524d\u76ee\u5f55\u7684\u540d\u5b57\u4f5c\u4e3a\u5305\u540d\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u63d0\u4f9b\u4e86\u5305\u540d\uff0c\u4f1a\u5728\u5f53\u524d\u76ee\u5f55\u4e0b\u521b\u5efa\u4e00\u4e2a\u4ee5\u5305\u540d\u547d\u540d\u7684\u5b50\u76ee\u5f55\uff0c\u5e76\u5728\u8be5\u76ee\u5f55\u4e0b\u521d\u59cb\u5316 kcl \u5305\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kpm init")," \u4f1a\u5728\u5305\u76ee\u5f55\u4e0b\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl.mod"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"kcl.mod.lock")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"main.k"),"\u3002"),(0,a.kt)("h2",{id:"\u9009\u7ebf"},"\u9009\u7ebf"),(0,a.kt)("h3",{id:"--help--h"},"--help, -h"),(0,a.kt)("p",null,"\u663e\u793a\u5e2e\u52a9\u4fe1\u606f\u3002"),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("h3",{id:"\u521d\u59cb\u5316\u5f53\u524d\u76ee\u5f55\u4e3a-kcl-\u5305"},"\u521d\u59cb\u5316\u5f53\u524d\u76ee\u5f55\u4e3a kcl \u5305"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# \u521b\u5efa\u4e00\u4e2a\u76ee\u5f55\n$ mkdir my_package \n\n# \u8fdb\u5165\u76ee\u5f55\n$ cd my_package\n\n# \u521d\u59cb\u5316\u5f53\u524d\u76ee\u5f55\u4e3a kcl \u5305\n$ kpm init\n")),(0,a.kt)("h3",{id:"\u521d\u59cb\u5316\u4e00\u4e2a\u540d\u4e3a-my_package-\u7684-kcl-\u5305"},"\u521d\u59cb\u5316\u4e00\u4e2a\u540d\u4e3a my_package \u7684 kcl \u5305"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# \u521d\u59cb\u5316\u4e00\u4e2a\u540d\u4e3a my_package \u7684 kcl \u5305\nkpm init my_package\n")))}d.isMDXComponent=!0}}]);