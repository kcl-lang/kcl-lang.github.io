"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[78439],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=d(r),p=a,g=m["".concat(c,".").concat(p)]||m[p]||u[p]||o;return r?n.createElement(g,i(i({ref:t},l),{},{components:r})):n.createElement(g,i({ref:t},l))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},72295:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(67294),a=r(86010),o=r(39960),i=r(44996);const s={disabled:"disabled_OCxU",card:"card_HCHm","Card-with-image":"Card-with-image_DUm4","Card-without-image":"Card-without-image_thTk","Card-container":"Card-container_Hxgs","Card-image":"Card-image_ud45","Card-icon":"Card-icon_KjUn","Card-iconset__container":"Card-iconset__container_Ig5G","Card-icon-default":"Card-icon-default_vE0K","Card-icon-hover":"Card-icon-hover_Rl7T","Card-icon-row":"Card-icon-row_Y7dQ","Card-icon--active":"Card-icon--active_anFW","Card-ionicon":"Card-ionicon_rF57","Card-content":"Card-content_j__g","Card-header":"Card-header_Gs72","Card-size-lg":"Card-size-lg_wdTb","markdown-content":"markdown-content_CXsk"};const c=function(e){const t=void 0===e.href,r=void 0!==e.href&&/^http/.test(e.href),c="undefined"===e.header?null:n.createElement("header",{className:s["Card-header"]},e.header),d=e.hoverIcon||e.icon,l=n.createElement(n.Fragment,null,e.img&&n.createElement("img",{src:(0,i.Z)(e.img),className:"Card-image"}),n.createElement("div",{className:s["Card-container"]},(e.icon||d)&&n.createElement("div",{className:s["Card-icon-row"]},e.icon&&n.createElement("img",{src:(0,i.Z)(e.icon),className:s["Card-icon"]+" "+s["Card-icon-default"]}),d&&n.createElement("img",{src:(0,i.Z)(d),className:s["Card-icon"]+" "+s["Card-icon-hover"]})),e.ionicon&&n.createElement("ion-icon",{name:e.ionicon,className:s["Card-ionicon"]}),e.iconset&&n.createElement("div",{className:s["Card-iconset__container"]},e.iconset.split(",").map(((t,r)=>n.createElement("img",{src:(0,i.Z)(t),className:`${s["Card-icon"]} ${r===e.activeIndex?s["Card-icon-active"]:""}`,"data-index":r,key:r})))),e.header&&c,n.createElement("div",{className:s["Card-content"]},e.children))),m=(0,a.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return t?n.createElement("docs-card",{class:s[m]},n.createElement("div",{className:(0,a.Z)(s.card,s["docs-card"])},l)):r?n.createElement("docs-card",{class:s[m]},n.createElement("a",{className:(0,a.Z)(s.card,s["docs-card"]),href:e.href,target:"_blank"},l)):n.createElement("docs-card",{class:s[m]},n.createElement(o.Z,{to:e.href,className:(0,a.Z)(s.card,s["docs-card"])},l))}},4434:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294);const a=function(e){return n.createElement("docs-cards",{class:e.className},e.children)}},71637:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>d,toc:()=>m});var n=r(87462),a=(r(67294),r(3905)),o=r(72295),i=r(4434);const s={title:"Overview",sidebar_position:0},c=void 0,d={unversionedId:"user_docs/guides/working-with-k8s/overview",id:"version-0.8/user_docs/guides/working-with-k8s/overview",title:"Overview",description:"Kubernetes",source:"@site/versioned_docs/version-0.8/user_docs/guides/working-with-k8s/0-overview.md",sourceDirName:"user_docs/guides/working-with-k8s",slug:"/user_docs/guides/working-with-k8s/overview",permalink:"/docs/user_docs/guides/working-with-k8s/overview",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.8/user_docs/guides/working-with-k8s/0-overview.md",tags:[],version:"0.8",lastUpdatedBy:"peefy",lastUpdatedAt:1710906677,formattedLastUpdatedAt:"Mar 20, 2024",sidebarPosition:0,frontMatter:{title:"Overview",sidebar_position:0},sidebar:"user_docs",previous:{title:"Support for OCI Registries",permalink:"/docs/user_docs/guides/package-management/how-to/kpm_oci"},next:{title:"Adopt From Kubernetes",permalink:"/docs/user_docs/guides/working-with-k8s/adopt-from-kubernetes"}},l={},m=[{value:"Kubernetes",id:"kubernetes",level:2},{value:"Use Cases",id:"use-cases",level:2},{value:"Docs",id:"docs",level:2}],u={toc:m},p="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"kubernetes"},"Kubernetes"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/"},"Kubernetes")," is an open source project for running and managing containerized applications on a cluster of machines."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang"},"KCL")," exposes the Kubernetes resource APIs as KCL modules which span common cloud native utilities and applications. In addition, KCL can be used to program, configure, and manage policies around these API modules."),(0,a.kt)("h2",{id:"use-cases"},"Use Cases"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Dynamic configuration policy management"),": ",(0,a.kt)("strong",{parentName:"li"},"Create"),", ",(0,a.kt)("strong",{parentName:"li"},"orchestrate"),", ",(0,a.kt)("strong",{parentName:"li"},"mutate")," or ",(0,a.kt)("strong",{parentName:"li"},"validate")," Kubernetes API resources for application workloads using the modern language including the use of ",(0,a.kt)("strong",{parentName:"li"},"functions"),", ",(0,a.kt)("strong",{parentName:"li"},"schemas"),", ",(0,a.kt)("strong",{parentName:"li"},"conditionals")," and ",(0,a.kt)("strong",{parentName:"li"},"rich IDE features")," (auto-completion, type & error checking, linting, refactoring, etc.) instead of YAML, JSON, scripts and templates."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Import from existing Kubernetes ecosystem"),": Convert ",(0,a.kt)("strong",{parentName:"li"},"Kubernetes manifests")," and ",(0,a.kt)("strong",{parentName:"li"},"custom resource types")," to KCL."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Kubernetes package management"),": ",(0,a.kt)("strong",{parentName:"li"},"Install")," or ",(0,a.kt)("strong",{parentName:"li"},"publish")," KCL modules from the ",(0,a.kt)("a",{parentName:"li",href:"https://artifacthub.io/packages/search?org=kcl&sort=relevance&page=1"},"registry")," for application workload, container and service modules.")),(0,a.kt)("h2",{id:"docs"},"Docs"),(0,a.kt)(i.Z,{mdxType:"DocsCards"},(0,a.kt)(o.Z,{header:"Adopt from Kubernetes",href:"adopt-from-kubernetes",mdxType:"DocsCard"},(0,a.kt)("p",null,"Provides the guide to import Kubernetes manifests and CRDs to KCL.")),(0,a.kt)(o.Z,{header:"Generate Kubernetes",href:"generate-k8s-manifests",mdxType:"DocsCard"},(0,a.kt)("p",null,"Provides the guide to generate Kubernetes manifests using KCL.")),(0,a.kt)(o.Z,{header:"Kubernetes Tool Integrations",href:"mutate-manifests/kubectl-kcl-plugin",mdxType:"DocsCard"},(0,a.kt)("p",null,"Provides some Kubernetes tool integrations to mutate or validate Kubernetes manifests using KCL modules."))))}g.isMDXComponent=!0}}]);