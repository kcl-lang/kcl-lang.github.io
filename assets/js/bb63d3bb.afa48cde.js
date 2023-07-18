"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[86382],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return n?o.createElement(m,l(l({ref:t},s),{},{components:n})):o.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},75391:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={sidebar_position:1},l="Quick Start",i={unversionedId:"tools/cli/openapi/quick-start",id:"version-0.4.5/tools/cli/openapi/quick-start",title:"Quick Start",description:"1. Install KCLOpenAPI Tool",source:"@site/versioned_docs/version-0.4.5/tools/cli/openapi/quick-start.md",sourceDirName:"tools/cli/openapi",slug:"/tools/cli/openapi/quick-start",permalink:"/docs/0.4.5/tools/cli/openapi/quick-start",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.4.5/tools/cli/openapi/quick-start.md",tags:[],version:"0.4.5",lastUpdatedBy:"peefy",lastUpdatedAt:1689687201,formattedLastUpdatedAt:"Jul 18, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tools",previous:{title:"OpenAPI Tools",permalink:"/docs/0.4.5/tools/cli/openapi/"},next:{title:"CRD to KCL",permalink:"/docs/0.4.5/tools/cli/openapi/crd-to-kcl"}},c={},p=[{value:"1. Install KCLOpenAPI Tool",id:"1-install-kclopenapi-tool",level:2},{value:"2. Generate KCL Files",id:"2-generate-kcl-files",level:2}],s={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quick-start"},"Quick Start"),(0,r.kt)("h2",{id:"1-install-kclopenapi-tool"},"1. Install KCLOpenAPI Tool"),(0,r.kt)("p",null,"You can install the kcl-openapi tool with go install:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"go install kcl-lang.io/kcl-openapi@latest\n")),(0,r.kt)("p",null,"To verify the installation, you can run the command: ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl-openapi generate model -h")," and the following information indicates your successful installation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kcl-openapi command helps you to generate KCL schema structure from K8s CRD YAML/JSON file.\n  1. Translate Swagger Openapi Spec to KCL code\n  2. Translate Kubernetes CRD to KCL code\n\nExamples:\n\n  # convert a K8s CRD file into KCL files\n  kcl-openapi generate model -f FILENAME --crd --skip-validation\n\nOptions:\n      --crd=false: Set the spec file is a kube crd\n  -f, --filename='': The filename to convert\n      --skip-validation=false: Skips validation of spec prior to generation\n  -t, --target='': The location to write output kcl files\n      --version=false: Show the KCLOpenAPI version\n\nUsage:\n  kcl-openapi generate model -f FILENAME [options]\n")),(0,r.kt)("h2",{id:"2-generate-kcl-files"},"2. Generate KCL Files"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/0.4.5/tools/cli/openapi/openapi-to-kcl"},"OpenAPI to KCL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/0.4.5/tools/cli/openapi/crd-to-kcl"},"CRD to KCL"))))}d.isMDXComponent=!0}}]);