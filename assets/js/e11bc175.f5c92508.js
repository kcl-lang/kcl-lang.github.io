"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[95856],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81931:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={sidebar_position:1},i="Quick Start",l={unversionedId:"tools/cli/openapi/quick-start",id:"version-0.5.0/tools/cli/openapi/quick-start",title:"Quick Start",description:"1. Install KCLOpenAPI Tool",source:"@site/versioned_docs/version-0.5.0/tools/cli/openapi/quick-start.md",sourceDirName:"tools/cli/openapi",slug:"/tools/cli/openapi/quick-start",permalink:"/docs/tools/cli/openapi/quick-start",draft:!1,editUrl:"https://github.com/KusionStack/kcl-lang.io/tree/main/versioned_docs/version-0.5.0/tools/cli/openapi/quick-start.md",tags:[],version:"0.5.0",lastUpdatedBy:"peefy",lastUpdatedAt:1685538105,formattedLastUpdatedAt:"May 31, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tools",previous:{title:"OpenAPI Tools",permalink:"/docs/tools/cli/openapi/"},next:{title:"CRD to KCL",permalink:"/docs/tools/cli/openapi/crd-to-kcl"}},s={},c=[{value:"1. Install KCLOpenAPI Tool",id:"1-install-kclopenapi-tool",level:2},{value:"2. Generate KCL Files",id:"2-generate-kcl-files",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quick-start"},"Quick Start"),(0,r.kt)("h2",{id:"1-install-kclopenapi-tool"},"1. Install KCLOpenAPI Tool"),(0,r.kt)("p",null,"You can install the kcl-openapi tool with go install:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"go install kusionstack.io/kcl-openapi@latest\n")),(0,r.kt)("p",null,"To verify the installation, you can run the command: ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl-openapi generate model -h")," and the following information indicates your successful installation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kcl-openapi command helps you to generate KCL schema structure from K8s CRD YAML/JSON file.\n  1. Translate Swagger Openapi Spec to KCL code\n  2. Translate Kubernetes CRD to KCL code\n\nExamples:\n\n  # convert a K8s CRD file into KCL files\n  kcl-openapi generate model -f FILENAME --crd --skip-validation\n\nOptions:\n      --crd=false: Set the spec file is a kube crd\n  -f, --filename='': The filename to convert\n      --skip-validation=false: Skips validation of spec prior to generation\n  -t, --target='': The location to write output kcl files\n      --version=false: Show the KCLOpenAPI version\n\nUsage:\n  kcl-openapi generate model -f FILENAME [options]\n")),(0,r.kt)("h2",{id:"2-generate-kcl-files"},"2. Generate KCL Files"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/tools/cli/openapi/openapi-to-kcl"},"OpenAPI to KCL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/tools/cli/openapi/crd-to-kcl"},"CRD to KCL"))))}u.isMDXComponent=!0}}]);