"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[19950],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),l=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,f=p["".concat(s,".").concat(d)]||p[d]||u[d]||a;return r?o.createElement(f,i(i({ref:t},m),{},{components:r})):o.createElement(f,i({ref:t},m))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},10129:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=r(87462),n=(r(67294),r(3905));const a={sidebar_position:4},i="Import",c={unversionedId:"tools/cli/kcl/import",id:"version-0.8/tools/cli/kcl/import",title:"Import",description:"Introduction",source:"@site/versioned_docs/version-0.8/tools/cli/kcl/import.md",sourceDirName:"tools/cli/kcl",slug:"/tools/cli/kcl/import",permalink:"/docs/tools/cli/kcl/import",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.8/tools/cli/kcl/import.md",tags:[],version:"0.8",lastUpdatedBy:"peefy",lastUpdatedAt:1710771316,formattedLastUpdatedAt:"Mar 18, 2024",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tools",previous:{title:"Format",permalink:"/docs/tools/cli/kcl/fmt"},next:{title:"Lint",permalink:"/docs/tools/cli/kcl/lint"}},s={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Args",id:"args",level:2}],m={toc:l},p="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"import"},"Import"),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"KCL supports the built-in ",(0,n.kt)("inlineCode",{parentName:"p"},"kcl import")," tool to import data or structure definitions from other formats into KCL. Currently, KCL supports importing JSON, YAML, Go Structure, JsonSchema, Terraform Provider Schema, OpenAPI, and Kubernetes CRD as KCL configurations or schema definitions."),(0,n.kt)("h2",{id:"args"},"Args"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'This command converts other formats to KCL file.\n\nSupported conversion modes:\n- json:            convert JSON data to KCL data\n- yaml:            convert YAML data to KCL data\n- gostruct:        convert Go struct to KCL schema\n- jsonschema:      convert JSON schema to KCL schema\n- terraformschema: convert Terraform schema to KCL schema\n- openapi:         convert OpenAPI spec to KCL schema\n- crd:             convert Kubernetes CRD to KCL schema\n- auto:            automatically detect the input format\n\nUsage:\n  kcl import [flags]\n\nExamples:\n  # Generate KCL models from OpenAPI spec\n  kcl import -m openapi swagger.json\n\n  # Generate KCL models from Kubernetes CRD\n  kcl import -m crd crd.yaml\n\n  # Generate KCL models from JSON\n  kcl import data.json\n\n  # Generate KCL models from YAML\n  kcl import data.yaml\n\n  # Generate KCL models from JSON Schema\n  kcl import -m jsonschema schema.json\n\n  # Generate KCL models from Terraform provider schema\n  kcl import -m terraformschema schema.json\n\n  # Generate KCL models from Go structs\n  kcl import -m gostruct schema.go\n\n\nFlags:\n  -f, --force             Force overwrite output file\n  -h, --help              help for import\n  -m, --mode string       Specify the import mode. Default is mode (default "auto")\n  -o, --output string     Specify the output file path\n  -p, --package string    The package to save the models. Default is models (default "models")\n  -s, --skip-validation   Skips validation of spec prior to generation\n')))}u.isMDXComponent=!0}}]);