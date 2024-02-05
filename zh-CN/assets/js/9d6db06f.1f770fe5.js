"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[35780],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),i=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=i(n),s=r,h=u["".concat(p,".").concat(s)]||u[s]||m[s]||l;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:r,o[1]=c;for(var i=2;i<l;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},33356:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var a=n(87462),r=(n(67294),n(3905));const l={},o="kcl mod update",c={unversionedId:"tools/cli/package-management/command-reference/update",id:"tools/cli/package-management/command-reference/update",title:"kcl mod update",description:"Update kcl module dependencies.",source:"@site/docs/tools/cli/package-management/command-reference/11.update.md",sourceDirName:"tools/cli/package-management/command-reference",slug:"/tools/cli/package-management/command-reference/update",permalink:"/zh-CN/docs/next/tools/cli/package-management/command-reference/update",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/tools/cli/package-management/command-reference/11.update.md",tags:[],version:"current",lastUpdatedBy:"peefy",lastUpdatedAt:1707103391,formattedLastUpdatedAt:"2024\u5e742\u67085\u65e5",sidebarPosition:11,frontMatter:{},sidebar:"tools",previous:{title:"kcl mod help",permalink:"/zh-CN/docs/next/tools/cli/package-management/command-reference/help"},next:{title:"CRD to KCL",permalink:"/zh-CN/docs/next/tools/cli/openapi/crd-to-kcl"}},p={},i=[{value:"Usage",id:"usage",level:2},{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"--help, -h",id:"--help--h",level:3},{value:"Examples",id:"examples",level:2},{value:"Update the current module",id:"update-the-current-module",level:3},{value:"Update the module with the specified path",id:"update-the-module-with-the-specified-path",level:3}],d={toc:i},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kcl-mod-update"},"kcl mod update"),(0,r.kt)("p",null,"Update kcl module dependencies."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kcl mod update [options][module_name]\n")),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"kcl mod update")," will update the dependencies listed in kcl.mod.lock based on kcl.mod."),(0,r.kt)("p",null,"You can also update a package by specifying the path of that package."),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("h3",{id:"--help--h"},"--help, -h"),(0,r.kt)("p",null,"Show help for ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl mod update")," command."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"update-the-current-module"},"Update the current module"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kcl mod update\n")),(0,r.kt)("h3",{id:"update-the-module-with-the-specified-path"},"Update the module with the specified path"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kcl mod update path/to/package\n")))}m.isMDXComponent=!0}}]);