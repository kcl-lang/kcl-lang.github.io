"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[8457],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},49139:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:1},l="\u5feb\u901f\u5f00\u59cb",i={unversionedId:"tools/cli/openapi/quick-start",id:"version-0.4.4/tools/cli/openapi/quick-start",title:"\u5feb\u901f\u5f00\u59cb",description:"1. \u5b89\u88c5 KCLOpenAPI \u5de5\u5177",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.4.4/tools/cli/openapi/quick-start.md",sourceDirName:"tools/cli/openapi",slug:"/tools/cli/openapi/quick-start",permalink:"/zh-CN/docs/0.4.4/tools/cli/openapi/quick-start",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.4.4/tools/cli/openapi/quick-start.md",tags:[],version:"0.4.4",lastUpdatedBy:"peefy",lastUpdatedAt:1701659761,formattedLastUpdatedAt:"2023\u5e7412\u67084\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tools",previous:{title:"OpenAPI \u5de5\u5177",permalink:"/zh-CN/docs/0.4.4/tools/cli/openapi/"},next:{title:"CRD to KCL",permalink:"/zh-CN/docs/0.4.4/tools/cli/openapi/crd-to-kcl"}},p={},c=[{value:"1. \u5b89\u88c5 KCLOpenAPI \u5de5\u5177",id:"1-\u5b89\u88c5-kclopenapi-\u5de5\u5177",level:2},{value:"1.2 \u9a8c\u8bc1\u5b89\u88c5\u7ed3\u679c",id:"12-\u9a8c\u8bc1\u5b89\u88c5\u7ed3\u679c",level:2},{value:"2. \u751f\u6210 KCL \u6587\u4ef6",id:"2-\u751f\u6210-kcl-\u6587\u4ef6",level:2}],s={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,o.kt)("h2",{id:"1-\u5b89\u88c5-kclopenapi-\u5de5\u5177"},"1. \u5b89\u88c5 KCLOpenAPI \u5de5\u5177"),(0,o.kt)("p",null,"\u60a8\u53ef\u901a\u8fc7 go install \u5feb\u901f\u5b89\u88c5 kcl-openapi\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"go install kcl-lang.io/kcl-openapi@latest\n")),(0,o.kt)("h2",{id:"12-\u9a8c\u8bc1\u5b89\u88c5\u7ed3\u679c"},"1.2 \u9a8c\u8bc1\u5b89\u88c5\u7ed3\u679c"),(0,o.kt)("p",null,"\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u60a8\u53ef\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"kcl-openapi generate model -h"),"\uff0c\u5982\u679c\u770b\u5230\u5982\u4e0b\u4fe1\u606f\u5219\u8bf4\u660e\u5b89\u88c5\u6210\u529f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kcl-openapi command helps you to generate KCL schema structure from K8s CRD YAML/JSON file.\n  1. Translate Swagger Openapi Spec to KCL code\n  2. Translate Kubernetes CRD to KCL code\n\nExamples:\n\n  # convert a K8s CRD file into KCL files\n  kcl-openapi generate model -f FILENAME --crd --skip-validation\n\nOptions:\n      --crd=false: Set the spec file is a kube crd\n  -f, --filename='': The filename to convert\n      --skip-validation=false: Skips validation of spec prior to generation\n  -t, --target='': The location to write output kcl files\n      --version=false: Show the KCLOpenAPI version\n\nUsage:\n  kcl-openapi generate model -f FILENAME [options]\n")),(0,o.kt)("h2",{id:"2-\u751f\u6210-kcl-\u6587\u4ef6"},"2. \u751f\u6210 KCL \u6587\u4ef6"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-CN/docs/0.4.4/tools/cli/openapi/openapi-to-kcl"},"\u5c06 OpenAPI \u63cf\u8ff0\u6587\u4ef6\u8f6c\u6362\u4e3a KCL")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-CN/docs/0.4.4/tools/cli/openapi/crd-to-kcl"},"\u5c06 Kubernetes CRD \u8f6c\u6362\u4e3a KCL"))))}d.isMDXComponent=!0}}]);