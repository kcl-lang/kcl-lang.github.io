"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[82336],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},21761:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={sidebar_position:0},a="Overview",l={unversionedId:"reference/model/overview",id:"version-0.5/reference/model/overview",title:"Overview",description:"KCL provides engineering extensibility through built-in modules, system modules and plug-in modules.",source:"@site/versioned_docs/version-0.5/reference/model/overview.md",sourceDirName:"reference/model",slug:"/reference/model/overview",permalink:"/docs/0.5/reference/model/overview",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5/reference/model/overview.md",tags:[],version:"0.5",lastUpdatedBy:"peefy",lastUpdatedAt:1710771316,formattedLastUpdatedAt:"Mar 18, 2024",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"reference",previous:{title:"System Package",permalink:"/docs/0.5/reference/model/"},next:{title:"builtin",permalink:"/docs/0.5/reference/model/builtin"}},s={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"KCL provides engineering extensibility through built-in modules, system modules and plug-in modules."),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(86288).Z,width:"1544",height:"884"})),(0,o.kt)("p",null,"The user code does not need to import functions that directly use builtin functions (such as calculating the length of a list with ",(0,o.kt)("inlineCode",{parentName:"p"},"len"),", obtaining the type of value through ",(0,o.kt)("inlineCode",{parentName:"p"},"typeof"),", etc.), and for basic types such as strings, it also provides some built-in methods (such as converting the case of strings, etc.)."),(0,o.kt)("p",null,"For relatively complex general logic, it is provided through the system modules. For example, by importing the ",(0,o.kt)("inlineCode",{parentName:"p"},"math")," module, we can use related mathematical functions, and we can use the regular expression by importing the ",(0,o.kt)("inlineCode",{parentName:"p"},"regex")," module. For KCL code, it can also be organized into different user modules."),(0,o.kt)("p",null,"In addition, Python and Go can be used to develop plug-ins for KCL through the plugin mechanism. For example, there are the app-context plug-in can be used to obtain the context information of the current application to simplify code writing."))}d.isMDXComponent=!0},86288:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/kcl-module-932adc11509c27525525ea8b2bd715f5.png"}}]);