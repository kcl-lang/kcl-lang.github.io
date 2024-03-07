"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[71152],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(r),d=o,f=p["".concat(i,".").concat(d)]||p[d]||u[d]||a;return r?n.createElement(f,c(c({ref:t},m),{},{components:r})):n.createElement(f,c({ref:t},m))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:o,c[1]=l;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},99483:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:4},c="\u6570\u636e\u548c\u7ed3\u6784\u5bfc\u5165\u5de5\u5177",l={unversionedId:"tools/cli/kcl/import",id:"tools/cli/kcl/import",title:"\u6570\u636e\u548c\u7ed3\u6784\u5bfc\u5165\u5de5\u5177",description:"\u7b80\u4ecb",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tools/cli/kcl/import.md",sourceDirName:"tools/cli/kcl",slug:"/tools/cli/kcl/import",permalink:"/zh-CN/docs/next/tools/cli/kcl/import",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/tools/cli/kcl/import.md",tags:[],version:"current",lastUpdatedBy:"peefy",lastUpdatedAt:1709797004,formattedLastUpdatedAt:"2024\u5e743\u67087\u65e5",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tools",previous:{title:"\u4ee3\u7801\u683c\u5f0f\u5316\u5de5\u5177",permalink:"/zh-CN/docs/next/tools/cli/kcl/fmt"},next:{title:"\u4ee3\u7801\u98ce\u683c\u68c0\u67e5\u5de5\u5177",permalink:"/zh-CN/docs/next/tools/cli/kcl/lint"}},i={},s=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2}],m={toc:s},p="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6570\u636e\u548c\u7ed3\u6784\u5bfc\u5165\u5de5\u5177"},"\u6570\u636e\u548c\u7ed3\u6784\u5bfc\u5165\u5de5\u5177"),(0,o.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,o.kt)("p",null,"KCL \u652f\u6301\u5185\u7f6e\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"kcl import")," \u5de5\u5177\u5c06\u5176\u4ed6\u683c\u5f0f\u7684\u6570\u636e\u6216\u8005\u7ed3\u6784\u5b9a\u4e49\u5bfc\u5165\u5230 KCL \u4e2d\uff0c\u76ee\u524d KCL \u652f\u6301 JSON, YAML, Go Structure, JsonSchema, Terraform Provider Schema, OpenAPI, Kubernetes CRD \u5bfc\u5165\u4e3a KCL \u914d\u7f6e\u6216 Schema \u5b9a\u4e49\u3002"),(0,o.kt)("h2",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'This command converts other formats to KCL file.\n\nSupported conversion modes:\n- json:            convert JSON data to KCL data\n- yaml:            convert YAML data to KCL data\n- gostruct:        convert Go struct to KCL schema\n- jsonschema:      convert JSON schema to KCL schema\n- terraformschema: convert Terraform schema to KCL schema\n- openapi:         convert OpenAPI spec to KCL schema\n- crd:             convert Kubernetes CRD to KCL schema\n- auto:            automatically detect the input format\n\nUsage:\n  kcl import [flags]\n\nExamples:\n  # Generate KCL models from OpenAPI spec\n  kcl import -m openapi swagger.json\n\n  # Generate KCL models from Kubernetes CRD\n  kcl import -m crd crd.yaml\n\n  # Generate KCL models from JSON\n  kcl import data.json\n\n  # Generate KCL models from YAML\n  kcl import data.yaml\n\n  # Generate KCL models from JSON Schema\n  kcl import -m jsonschema schema.json\n\n  # Generate KCL models from Terraform provider schema\n  kcl import -m terraformschema schema.json\n\n  # Generate KCL models from Go structs\n  kcl import -m gostruct schema.go\n\n\nFlags:\n  -f, --force             Force overwrite output file\n  -h, --help              help for import\n  -m, --mode string       Specify the import mode. Default is mode (default "auto")\n  -o, --output string     Specify the output file path\n  -p, --package string    The package to save the models. Default is models (default "models")\n  -s, --skip-validation   Skips validation of spec prior to generation\n')))}u.isMDXComponent=!0}}]);