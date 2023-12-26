"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[20724],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(t),p=o,f=d["".concat(s,".").concat(p)]||d[p]||m[p]||i;return t?n.createElement(f,a(a({ref:r},l),{},{components:t})):n.createElement(f,a({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[d]="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},65196:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=t(87462),o=(t(67294),t(3905));const i={id:"structure",sidebar_label:"Structure"},a="Konfig Structure",c={unversionedId:"user_docs/guides/working-with-konfig/structure",id:"user_docs/guides/working-with-konfig/structure",title:"Konfig Structure",description:"This article mainly explains the directory and code structure of the Konfig repository.",source:"@site/docs/user_docs/guides/working-with-konfig/2-structure.md",sourceDirName:"user_docs/guides/working-with-konfig",slug:"/user_docs/guides/working-with-konfig/structure",permalink:"/docs/next/user_docs/guides/working-with-konfig/structure",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/user_docs/guides/working-with-konfig/2-structure.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1703569910,formattedLastUpdatedAt:"Dec 26, 2023",sidebarPosition:2,frontMatter:{id:"structure",sidebar_label:"Structure"},sidebar:"user_docs",previous:{title:"Overview",permalink:"/docs/next/user_docs/guides/working-with-konfig/overview"},next:{title:"Quick Start",permalink:"/docs/next/user_docs/guides/working-with-konfig/guide"}},s={},u=[{value:"Core Model",id:"core-model",level:2}],l={toc:u},d="wrapper";function m(e){let{components:r,...t}=e;return(0,o.kt)(d,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"konfig-structure"},"Konfig Structure"),(0,o.kt)("p",null,"This article mainly explains the directory and code structure of the Konfig repository."),(0,o.kt)("h2",{id:"core-model"},"Core Model"),(0,o.kt)("p",null,"The core model library is generally named ",(0,o.kt)("inlineCode",{parentName:"p"},"models"),", mainly including front-end model, back-end model, renderer, etc. The directory structure is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"models\n\u251c\u2500\u2500 commons         # Common models\n\u251c\u2500\u2500 kube            # Cloud-native resource core models\n\u2502   \u251c\u2500\u2500 backend         # Back-end models\n\u2502   \u251c\u2500\u2500 frontend        # Front-end models\n\u2502   \u2502   \u251c\u2500\u2500 common          # Common front-end models\n\u2502   \u2502   \u251c\u2500\u2500 configmap       # ConfigMap\n\u2502   \u2502   \u251c\u2500\u2500 container       # Container\n\u2502   \u2502   \u251c\u2500\u2500 ingress         # Ingress\n\u2502   \u2502   \u251c\u2500\u2500 resource        # Resource\n\u2502   \u2502   \u251c\u2500\u2500 secret          # Secret\n\u2502   \u2502   \u251c\u2500\u2500 service         # Service\n\u2502   \u2502   \u251c\u2500\u2500 sidecar         # Sidecar\n\u2502   \u2502   \u251c\u2500\u2500 strategy        # strategy\n\u2502   \u2502   \u251c\u2500\u2500 volume          # Volume\n\u2502   \u2502   \u2514\u2500\u2500 server.k        # The `Server` model\n\u2502   \u251c\u2500\u2500 metadata        # Kubernetes metadata\n\u2502   \u251c\u2500\u2500 mixins          # Mixin\n\u2502   \u251c\u2500\u2500 render          # Front-to-back-end renderers.\n\u2502   \u251c\u2500\u2500 templates       # Data template\n\u2502   \u2514\u2500\u2500 utils\n\u2514\u2500\u2500 metadata        # Common metadata\n")))}m.isMDXComponent=!0}}]);