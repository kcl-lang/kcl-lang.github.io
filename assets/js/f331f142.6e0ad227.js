"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[37394],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91374:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const l={sidebar_position:2},a="Format",i={unversionedId:"tools/cli/kcl/fmt",id:"version-0.4.4/tools/cli/kcl/fmt",title:"Format",description:"The KCL Format tool supports reformatting KCL files to the standard code style. This article demonstrates the KCL code style and how to use the KCL Format tool.",source:"@site/versioned_docs/version-0.4.4/tools/cli/kcl/fmt.md",sourceDirName:"tools/cli/kcl",slug:"/tools/cli/kcl/fmt",permalink:"/docs/0.4.4/tools/cli/kcl/fmt",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.4.4/tools/cli/kcl/fmt.md",tags:[],version:"0.4.4",lastUpdatedBy:"Peefy",lastUpdatedAt:1703569910,formattedLastUpdatedAt:"Dec 26, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tools",previous:{title:"Overview",permalink:"/docs/0.4.4/tools/cli/kcl/overview"},next:{title:"Lint",permalink:"/docs/0.4.4/tools/cli/kcl/lint"}},s={},c=[{value:"Code Style",id:"code-style",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"Display of formatting files",id:"display-of-formatting-files",level:2}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"format"},"Format"),(0,o.kt)("p",null,"The KCL Format tool supports reformatting KCL files to the standard code style. This article demonstrates the KCL code style and how to use the KCL Format tool."),(0,o.kt)("h2",{id:"code-style"},"Code Style"),(0,o.kt)("p",null,"The KCL Format tool modifies the files according to the KCL code style: ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/lang/spec/codestyle"},"Style Guide for KCL Code")),(0,o.kt)("h2",{id:"how-to-use"},"How to use"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Formatting Single File")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"kcl-fmt your_config.k\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Formatting multiple files")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"kcl-fmt your_config_path -R\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Args",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-R|--recursive")," Whether to recursively traverse subfolders"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-w|--fmt-output")," Whether to output to STDOUT, without ",(0,o.kt)("inlineCode",{parentName:"li"},"-w")," indicates in-place modification.")))),(0,o.kt)("h2",{id:"display-of-formatting-files"},"Display of formatting files"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Before formatting")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'import     math\nmixin DeploymentMixin:\n    service:str ="my-service"\nschema DeploymentBase:\n    name: str\n    image  : str\nschema Deployment[replicas] ( DeploymentBase )   :\n    mixin[DeploymentMixin]\n    replicas   : int   = replicas\n    command: [str  ]\n    labels: {str:  str}\ndeploy = Deployment(replicas = 3){}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"After formatting")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'import math\n\nmixin DeploymentMixin:\n    service: str = "my-service"\n\nschema DeploymentBase:\n    name: str\n    image: str\n\nschema Deployment[replicas](DeploymentBase):\n    mixin [DeploymentMixin]\n    replicas: int = replicas\n    command: [str]\n    labels: {str:str}\n\ndeploy = Deployment(replicas=3) {}\n\n')))}u.isMDXComponent=!0}}]);