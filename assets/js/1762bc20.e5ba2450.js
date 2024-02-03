"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[12417],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=c(n),u=l,d=p["".concat(s,".").concat(u)]||p[u]||f[u]||o;return n?r.createElement(d,a(a({ref:t},m),{},{components:n})):r.createElement(d,a({ref:t},m))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:l,a[1]=i;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2509:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),l=(n(67294),n(3905));const o={sidebar_position:3},a="Format",i={unversionedId:"tools/cli/kcl/fmt",id:"version-0.7.0/tools/cli/kcl/fmt",title:"Format",description:"The KCL Format tool supports reformatting KCL files to the standard code style. This article demonstrates the KCL code style and how to use the KCL Format tool.",source:"@site/versioned_docs/version-0.7.0/tools/cli/kcl/fmt.md",sourceDirName:"tools/cli/kcl",slug:"/tools/cli/kcl/fmt",permalink:"/docs/tools/cli/kcl/fmt",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.7.0/tools/cli/kcl/fmt.md",tags:[],version:"0.7.0",lastUpdatedBy:"Peefy",lastUpdatedAt:1706869561,formattedLastUpdatedAt:"Feb 2, 2024",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tools",previous:{title:"Doc",permalink:"/docs/tools/cli/kcl/docgen"},next:{title:"Import",permalink:"/docs/tools/cli/kcl/import"}},s={},c=[{value:"Code Style",id:"code-style",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"Display of formatting files",id:"display-of-formatting-files",level:2},{value:"Args",id:"args",level:2}],m={toc:c},p="wrapper";function f(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"format"},"Format"),(0,l.kt)("p",null,"The KCL Format tool supports reformatting KCL files to the standard code style. This article demonstrates the KCL code style and how to use the KCL Format tool."),(0,l.kt)("h2",{id:"code-style"},"Code Style"),(0,l.kt)("p",null,"The KCL Format tool modifies the files according to the KCL code style: ",(0,l.kt)("a",{parentName:"p",href:"/docs/reference/lang/spec/codestyle"},"Style Guide for KCL Code")),(0,l.kt)("h2",{id:"how-to-use"},"How to use"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Formatting Single File")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kcl fmt your_config.k\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Formatting multiple files")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kcl fmt your_config_path\n")),(0,l.kt)("h2",{id:"display-of-formatting-files"},"Display of formatting files"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Before formatting")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'import     math\nmixin DeploymentMixin:\n    service:str ="my-service"\nschema DeploymentBase:\n    name: str\n    image  : str\nschema Deployment[replicas] ( DeploymentBase )   :\n    mixin[DeploymentMixin]\n    replicas   : int   = replicas\n    command: [str  ]\n    labels: {str:  str}\ndeploy = Deployment(replicas = 3){}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"After formatting")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'import math\n\nmixin DeploymentMixin:\n    service: str = "my-service"\n\nschema DeploymentBase:\n    name: str\n    image: str\n\nschema Deployment[replicas](DeploymentBase):\n    mixin [DeploymentMixin]\n    replicas: int = replicas\n    command: [str]\n    labels: {str:str}\n\ndeploy = Deployment(replicas=3) {}\n\n')),(0,l.kt)("h2",{id:"args"},"Args"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"This command formats all kcl files of the current crate.\n\nUsage:\n  kcl fmt [flags]\n\nExamples:\n  # Format the single file\n  kcl fmt /path/to/file.k\n\n  # Format all files in this folder recursively\n  kcl fmt ./...\n\nFlags:\n  -h, --help   help for fmt\n")))}f.isMDXComponent=!0}}]);