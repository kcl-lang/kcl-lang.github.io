"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[88345],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),f=o,g=u["".concat(s,".").concat(f)]||u[f]||m[f]||r;return n?i.createElement(g,a(a({ref:t},l),{},{components:n})):i.createElement(g,a({ref:t},l))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var d=2;d<r;d++)a[d]=n[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},72295:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(67294),o=n(86010),r=n(39960),a=n(44996);const c={disabled:"disabled_OCxU",card:"card_HCHm","Card-with-image":"Card-with-image_DUm4","Card-without-image":"Card-without-image_thTk","Card-container":"Card-container_Hxgs","Card-image":"Card-image_ud45","Card-icon":"Card-icon_KjUn","Card-iconset__container":"Card-iconset__container_Ig5G","Card-icon-default":"Card-icon-default_vE0K","Card-icon-hover":"Card-icon-hover_Rl7T","Card-icon-row":"Card-icon-row_Y7dQ","Card-icon--active":"Card-icon--active_anFW","Card-ionicon":"Card-ionicon_rF57","Card-content":"Card-content_j__g","Card-header":"Card-header_Gs72","Card-size-lg":"Card-size-lg_wdTb","markdown-content":"markdown-content_CXsk"};const s=function(e){const t=void 0===e.href,n=void 0!==e.href&&/^http/.test(e.href),s="undefined"===e.header?null:i.createElement("header",{className:c["Card-header"]},e.header),d=e.hoverIcon||e.icon,l=i.createElement(i.Fragment,null,e.img&&i.createElement("img",{src:(0,a.Z)(e.img),className:"Card-image"}),i.createElement("div",{className:c["Card-container"]},(e.icon||d)&&i.createElement("div",{className:c["Card-icon-row"]},e.icon&&i.createElement("img",{src:(0,a.Z)(e.icon),className:c["Card-icon"]+" "+c["Card-icon-default"]}),d&&i.createElement("img",{src:(0,a.Z)(d),className:c["Card-icon"]+" "+c["Card-icon-hover"]})),e.ionicon&&i.createElement("ion-icon",{name:e.ionicon,className:c["Card-ionicon"]}),e.iconset&&i.createElement("div",{className:c["Card-iconset__container"]},e.iconset.split(",").map(((t,n)=>i.createElement("img",{src:(0,a.Z)(t),className:`${c["Card-icon"]} ${n===e.activeIndex?c["Card-icon-active"]:""}`,"data-index":n,key:n})))),e.header&&s,i.createElement("div",{className:c["Card-content"]},e.children))),u=(0,o.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return t?i.createElement("docs-card",{class:c[u]},i.createElement("div",{className:(0,o.Z)(c.card,c["docs-card"])},l)):n?i.createElement("docs-card",{class:c[u]},i.createElement("a",{className:(0,o.Z)(c.card,c["docs-card"]),href:e.href,target:"_blank"},l)):i.createElement("docs-card",{class:c[u]},i.createElement(r.Z,{to:e.href,className:(0,o.Z)(c.card,c["docs-card"])},l))}},4434:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(67294);const o=function(e){return i.createElement("docs-cards",{class:e.className},e.children)}},62322:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>c,metadata:()=>d,toc:()=>u});var i=n(87462),o=(n(67294),n(3905)),r=n(72295),a=n(4434);const c={id:"overview",sidebar_label:"Overview"},s="Konfig Overview",d={unversionedId:"user_docs/guides/working-with-konfig/overview",id:"user_docs/guides/working-with-konfig/overview",title:"Konfig Overview",description:"In KCL, it is recommended to uniformly manage all configurations and model libraries in the way of configuration library, that is, to store not only KCL definitions of the abstract model itself, but also various types of configurations, such as application operation and maintenance configuration, policy, etc. The configuration is recommended to be hosted in various VCS systems to facilitate configuration rollback and drift check. The best practice code of the configuration repository is Konfig, and the repository is hosted in Github\u3002",source:"@site/docs/user_docs/guides/working-with-konfig/1-overview.md",sourceDirName:"user_docs/guides/working-with-konfig",slug:"/user_docs/guides/working-with-konfig/overview",permalink:"/docs/next/user_docs/guides/working-with-konfig/overview",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/user_docs/guides/working-with-konfig/1-overview.md",tags:[],version:"current",lastUpdatedBy:"peefy",lastUpdatedAt:1707103391,formattedLastUpdatedAt:"Feb 5, 2024",sidebarPosition:1,frontMatter:{id:"overview",sidebar_label:"Overview"},sidebar:"user_docs",previous:{title:"Crossplane KCL Function",permalink:"/docs/next/user_docs/guides/working-with-k8s/mutate-manifests/crossplane-kcl-function"},next:{title:"Structure",permalink:"/docs/next/user_docs/guides/working-with-konfig/structure"}},l={},u=[{value:"Docs",id:"docs",level:2}],m={toc:u},f="wrapper";function g(e){let{components:t,...c}=e;return(0,o.kt)(f,(0,i.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"konfig-overview"},"Konfig Overview"),(0,o.kt)("p",null,"In KCL, it is recommended to uniformly manage all configurations and model libraries in the way of ",(0,o.kt)("strong",{parentName:"p"},"configuration library"),", that is, to store not only KCL definitions of the abstract model itself, but also various types of configurations, such as application operation and maintenance configuration, policy, etc. The configuration is recommended to be hosted in various VCS systems to facilitate configuration rollback and drift check. The best practice code of the configuration repository is Konfig, and the repository is hosted in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/konfig"},"Github"),"\u3002"),(0,o.kt)("p",null,"\u26a1 The Konfig repository mainly includes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"KCL module declaration file (kcl.mod)"),(0,o.kt)("li",{parentName:"ul"},"KCL domain model libraries (Kubernetes, Prometheus, etc.)"),(0,o.kt)("li",{parentName:"ul"},"Directories of various configurations (application operation and maintenance configuration, etc)"),(0,o.kt)("li",{parentName:"ul"},"Configuration build and test scripts (Makefile, Github CI file, etc.)")),(0,o.kt)("p",null,"The reason for using a unified warehouse to manage all KCL configuration codes is that different code packages have different R&D entities, which will lead to package management and version management problems. When the business configuration code and basic configuration code are stored in a unified warehouse, the version dependency management between codes will be relatively simple. By locating the directory and file of the unique code base, the configuration code can be managed uniformly for easy search, modification and maintenance."),(0,o.kt)("p",null,"The following is the architecture of Konfig:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(15883).Z,width:"363",height:"356"})),(0,o.kt)("p",null,"Konfig provides users with an out-of-the-box and highly abstract configuration interface. The original simple starting point of the model library is to improve the efficiency and experience of Kubernetes YAML users. We hope to simplify the writing of user-side configuration code by abstracting and encapsulating the model with more complex code into a unified model. Konfig consists of the following parts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Core model"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Front-end model"),': The front-end model is the "user interface", which contains all configurable attributes exposed to users on the platform side. Some repetitive and deducible configurations are omitted, and essential attributes are abstracted and exposed to users. It has user-friendly features, such as ',(0,o.kt)("inlineCode",{parentName:"li"},"server.k"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Back-end model"),': The back-end model is "model implementation", which is the model that makes the properties of the front-end model effective. It mainly contains the rendering logic of the front-end model instance. The back-end model can use KCL to write validation, logic judgment, code fragment reuse and other code to improve the reusability and robustness of the configuration code, and is not sensitive to users, such as ',(0,o.kt)("inlineCode",{parentName:"li"},"server_backend.k"),"."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Domain model"),": It is a model that does not contain any implementation logic and abstraction. It is often generated by tool transformation and does not need to be modified. It corresponds to the real effective YAML attribute one by one. The domain model needs to be further abstracted and is generally not directly used by users. For example, ",(0,o.kt)("inlineCode",{parentName:"li"},"k8s")," is the domain model library of Kubernetes scenarios.")),(0,o.kt)("p",null,"In addition, the core model simplifies the configuration code of front-end users through two layers of abstraction: the front-end model and the back-end model. The domain model is automatically generated through the KCL import tool."),(0,o.kt)("h2",{id:"docs"},"Docs"),(0,o.kt)(a.Z,{mdxType:"DocsCards"},(0,o.kt)(r.Z,{header:"Structure",href:"structure",mdxType:"DocsCard"},(0,o.kt)("p",null,"Provides the explanation of the Konfig directory and code structure.")),(0,o.kt)(r.Z,{header:"Quick Start",href:"guide",mdxType:"DocsCard"},(0,o.kt)("p",null,"Provides the quick guide to use Konfig.")),(0,o.kt)(r.Z,{header:"Best Practice",href:"practice",mdxType:"DocsCard"},(0,o.kt)("p",null,"Provides the guide of the best practices for integrating new models into the Konfig library and designing, building and writing KCL codes."))))}g.isMDXComponent=!0},15883:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/konfig-arch-d449927f5a1b7e08eaec85ac24ad4bc1.png"}}]);