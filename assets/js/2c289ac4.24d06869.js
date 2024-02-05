"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[96777],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>g});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},m="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,c=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),m=p(n),u=a,g=m["".concat(c,".").concat(u)]||m[u]||s[u]||l;return n?r.createElement(g,o(o({ref:e},d),{},{components:n})):r.createElement(g,o({ref:e},d))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[m]="string"==typeof t?t:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},67885:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={sidebar_position:0},o="Overview",i={unversionedId:"tools/cli/kcl/overview",id:"tools/cli/kcl/overview",title:"Overview",description:"KCL toolchain is a toolset of KCL language, which aims to improve the efficiency of batch migration, writing, compiling and running of KCL.",source:"@site/docs/tools/cli/kcl/overview.md",sourceDirName:"tools/cli/kcl",slug:"/tools/cli/kcl/overview",permalink:"/docs/next/tools/cli/kcl/overview",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/tools/cli/kcl/overview.md",tags:[],version:"current",lastUpdatedBy:"peefy",lastUpdatedAt:1707103391,formattedLastUpdatedAt:"Feb 5, 2024",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tools",previous:{title:"KCL Language Tools",permalink:"/docs/next/tools/cli/kcl/"},next:{title:"Run",permalink:"/docs/next/tools/cli/kcl/run"}},c={},p=[{value:"Args",id:"args",level:2}],d={toc:p},m="wrapper";function s(t){let{components:e,...n}=t;return(0,a.kt)(m,(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"KCL toolchain is a toolset of KCL language, which aims to improve the efficiency of batch migration, writing, compiling and running of KCL."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Main Tools"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"kcl")," (alias of ",(0,a.kt)("inlineCode",{parentName:"td"},"kcl run"),")"),(0,a.kt)("td",{parentName:"tr",align:null},"Provide support for KCL in coding, compiling and running")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"kcl run"),(0,a.kt)("td",{parentName:"tr",align:null},"Provide support for KCL in coding, compiling and running")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"kcl doc"),(0,a.kt)("td",{parentName:"tr",align:null},"Parses the KCL code and generate documents")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"kcl fmt"),(0,a.kt)("td",{parentName:"tr",align:null},"Format the kcl code")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"kcl import"),(0,a.kt)("td",{parentName:"tr",align:null},"Import other data and schema to KCL")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"kcl lint"),(0,a.kt)("td",{parentName:"tr",align:null},"Check code style for KCL")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"kcl mod"),(0,a.kt)("td",{parentName:"tr",align:null},"KCL module related features and package management")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"kcl play"),(0,a.kt)("td",{parentName:"tr",align:null},"Run the KCL playground in localhost")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"kcl registry"),(0,a.kt)("td",{parentName:"tr",align:null},"KCL registry related features")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"kcl server"),(0,a.kt)("td",{parentName:"tr",align:null},"Run the KCL REST server in localhost")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"kcl test"),(0,a.kt)("td",{parentName:"tr",align:null},"Run unit tests in KCL")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"kcl vet"),(0,a.kt)("td",{parentName:"tr",align:null},"Validate data files such as JSON and YAML using KCL")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"IDE Plugin"),(0,a.kt)("td",{parentName:"tr",align:null},"IntelliJ IDEA KCL extension"),(0,a.kt)("td",{parentName:"tr",align:null},"Provide assistance for KCL in coding and compiling on IntelliJ IDEA")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"NeoVim KCL extension"),(0,a.kt)("td",{parentName:"tr",align:null},"Provide assistance for KCL in coding and compiling on NeoVim")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"VS Code KCL extension"),(0,a.kt)("td",{parentName:"tr",align:null},"Provide assistance for KCL in coding and compiling on VS Code")))),(0,a.kt)("h2",{id:"args"},"Args"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'Usage:\n  kcl [command]\n\nAvailable Commands:\n  clean       KCL clean tool\n  completion  Generate the autocompletion script for the specified shell\n  doc         KCL document tool\n  fmt         KCL format tool\n  import      KCL import tool\n  lint        Run KCL codes.\n  mod         KCL module management\n  play        Open the kcl playground in the browser.\n  registry    KCL registry management\n  run         Run KCL codes.\n  server      Run a KCL server\n  test        KCL test tool\n  version     Show version of the KCL CLI\n  vet         KCL validation tool\n\nFlags:\n  -h, --help      help for kcl\n  -v, --version   version for kcl\n\nAdditional help topics:\n  kcl\n\nUse "kcl [command] --help" for more information about a command.\n')))}s.isMDXComponent=!0}}]);