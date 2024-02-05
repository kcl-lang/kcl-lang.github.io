"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[9216],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),m=s(r),p=a,f=m["".concat(c,".").concat(p)]||m[p]||u[p]||i;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[m]="string"==typeof e?e:a,o[1]=d;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},72295:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(67294),a=r(86010),i=r(39960),o=r(44996);const d={disabled:"disabled_OCxU",card:"card_HCHm","Card-with-image":"Card-with-image_DUm4","Card-without-image":"Card-without-image_thTk","Card-container":"Card-container_Hxgs","Card-image":"Card-image_ud45","Card-icon":"Card-icon_KjUn","Card-iconset__container":"Card-iconset__container_Ig5G","Card-icon-default":"Card-icon-default_vE0K","Card-icon-hover":"Card-icon-hover_Rl7T","Card-icon-row":"Card-icon-row_Y7dQ","Card-icon--active":"Card-icon--active_anFW","Card-ionicon":"Card-ionicon_rF57","Card-content":"Card-content_j__g","Card-header":"Card-header_Gs72","Card-size-lg":"Card-size-lg_wdTb","markdown-content":"markdown-content_CXsk"};const c=function(e){const t=void 0===e.href,r=void 0!==e.href&&/^http/.test(e.href),c="undefined"===e.header?null:n.createElement("header",{className:d["Card-header"]},e.header),s=e.hoverIcon||e.icon,l=n.createElement(n.Fragment,null,e.img&&n.createElement("img",{src:(0,o.Z)(e.img),className:"Card-image"}),n.createElement("div",{className:d["Card-container"]},(e.icon||s)&&n.createElement("div",{className:d["Card-icon-row"]},e.icon&&n.createElement("img",{src:(0,o.Z)(e.icon),className:d["Card-icon"]+" "+d["Card-icon-default"]}),s&&n.createElement("img",{src:(0,o.Z)(s),className:d["Card-icon"]+" "+d["Card-icon-hover"]})),e.ionicon&&n.createElement("ion-icon",{name:e.ionicon,className:d["Card-ionicon"]}),e.iconset&&n.createElement("div",{className:d["Card-iconset__container"]},e.iconset.split(",").map(((t,r)=>n.createElement("img",{src:(0,o.Z)(t),className:`${d["Card-icon"]} ${r===e.activeIndex?d["Card-icon-active"]:""}`,"data-index":r,key:r})))),e.header&&c,n.createElement("div",{className:d["Card-content"]},e.children))),m=(0,a.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return t?n.createElement("docs-card",{class:d[m]},n.createElement("div",{className:(0,a.Z)(d.card,d["docs-card"])},l)):r?n.createElement("docs-card",{class:d[m]},n.createElement("a",{className:(0,a.Z)(d.card,d["docs-card"]),href:e.href,target:"_blank"},l)):n.createElement("docs-card",{class:d[m]},n.createElement(i.Z,{to:e.href,className:(0,a.Z)(d.card,d["docs-card"])},l))}},4434:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294);const a=function(e){return n.createElement("docs-cards",{class:e.className},e.children)}},86648:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>d,metadata:()=>s,toc:()=>m});var n=r(87462),a=(r(67294),r(3905)),i=r(72295),o=r(4434);const d={sidebar_position:0},c="Overview",s={unversionedId:"reference/model/overview",id:"version-0.7.0/reference/model/overview",title:"Overview",description:"KCL provides engineering extensibility through built-in modules, system modules and plug-in modules.",source:"@site/versioned_docs/version-0.7.0/reference/model/overview.md",sourceDirName:"reference/model",slug:"/reference/model/overview",permalink:"/docs/reference/model/overview",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.7.0/reference/model/overview.md",tags:[],version:"0.7.0",lastUpdatedBy:"peefy",lastUpdatedAt:1707103391,formattedLastUpdatedAt:"Feb 5, 2024",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"reference",previous:{title:"Type System",permalink:"/docs/reference/lang/types/"},next:{title:"builtin",permalink:"/docs/reference/model/builtin"}},l={},m=[{value:"Standard Library Modules",id:"standard-library-modules",level:2}],u={toc:m},p="wrapper";function f(e){let{components:t,...d}=e;return(0,a.kt)(p,(0,n.Z)({},u,d,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"KCL provides engineering extensibility through built-in modules, system modules and plug-in modules."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(86288).Z,width:"1544",height:"884"})),(0,a.kt)("p",null,"The user code does not need to import functions that directly use builtin functions (such as calculating the length of a list with ",(0,a.kt)("inlineCode",{parentName:"p"},"len"),", obtaining the type of value through ",(0,a.kt)("inlineCode",{parentName:"p"},"typeof"),", etc.), and for basic types such as strings, it also provides some built-in methods (such as converting the case of strings, etc.)."),(0,a.kt)("p",null,"For relatively complex general logic, it is provided through the system modules. For example, by importing the ",(0,a.kt)("inlineCode",{parentName:"p"},"math")," module, we can use related mathematical functions, and we can use the regular expression by importing the ",(0,a.kt)("inlineCode",{parentName:"p"},"regex")," module. For KCL code, it can also be organized into different user modules."),(0,a.kt)("h2",{id:"standard-library-modules"},"Standard Library Modules"),(0,a.kt)(o.Z,{mdxType:"DocsCards"},(0,a.kt)(i.Z,{header:"builtin functions",href:"builtin",mdxType:"DocsCard"},(0,a.kt)("p",null,"Provides a list of built-in functions that are automatically loaded that can be used directly.")),(0,a.kt)(i.Z,{header:"base64",href:"base64",mdxType:"DocsCard"},(0,a.kt)("p",null,"Provides Base64 (RFC 3548) data encoding functions.")),(0,a.kt)(i.Z,{header:"crypto",href:"crypto",mdxType:"DocsCard"},(0,a.kt)("p",null,"Provides implementations of common encryption algorithms and protocols.")),(0,a.kt)(i.Z,{header:"datetime",href:"datetime",mdxType:"DocsCard"},(0,a.kt)("p",null,"Concrete date/time and related types and functions.")),(0,a.kt)(i.Z,{header:"json",href:"json",mdxType:"DocsCard"},(0,a.kt)("p",null,"Provides JSON related encoding/decoding functions.")),(0,a.kt)(i.Z,{header:"manifests",href:"manifests",mdxType:"DocsCard"},(0,a.kt)("p",null,"Provides the ability for structure serialization output.")),(0,a.kt)(i.Z,{header:"math",href:"math",mdxType:"DocsCard"},(0,a.kt)("p",null,"Provides commonly used mathematical calculation functions.")),(0,a.kt)(i.Z,{header:"net",href:"net",mdxType:"DocsCard"},(0,a.kt)("p",null,"A lightweight IPv4/IPv6 manipulation library.")),(0,a.kt)(i.Z,{header:"regex",href:"regex",mdxType:"DocsCard"},(0,a.kt)("p",null,"Provides commonly used regular expression functions.")),(0,a.kt)(i.Z,{header:"units",href:"units",mdxType:"DocsCard"},(0,a.kt)("p",null,"Provides some conversion functions between numbers and international standard units.")),(0,a.kt)(i.Z,{header:"yaml",href:"yaml",mdxType:"DocsCard"},(0,a.kt)("p",null,"Provides YAML related encoding/decoding functions."))))}f.isMDXComponent=!0},86288:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/kcl-module-932adc11509c27525525ea8b2bd715f5.png"}}]);