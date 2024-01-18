"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[94051],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72828:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={sidebar_position:4},o="Validation \u6821\u9a8c\u4ee3\u7801",i={unversionedId:"tools/cli/kcl/vet",id:"version-0.5.0/tools/cli/kcl/vet",title:"Validation \u6821\u9a8c\u4ee3\u7801",description:"\u7b80\u4ecb",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.5.0/tools/cli/kcl/vet.md",sourceDirName:"tools/cli/kcl",slug:"/tools/cli/kcl/vet",permalink:"/zh-CN/docs/0.5.0/tools/cli/kcl/vet",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.0/tools/cli/kcl/vet.md",tags:[],version:"0.5.0",lastUpdatedBy:"Peefy",lastUpdatedAt:1705584615,formattedLastUpdatedAt:"2024\u5e741\u670818\u65e5",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tools",previous:{title:"Lint \u68c0\u67e5\u4ee3\u7801\u98ce\u683c",permalink:"/zh-CN/docs/0.5.0/tools/cli/kcl/lint"},next:{title:"\u6587\u6863\u751f\u6210\u5de5\u5177",permalink:"/zh-CN/docs/0.5.0/tools/cli/kcl/docgen"}},c={},s=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"\u6307\u5b9a\u6821\u9a8c\u7684 schema",id:"\u6307\u5b9a\u6821\u9a8c\u7684-schema",level:2},{value:"\u547d\u4ee4\u884c\u53c2\u6570",id:"\u547d\u4ee4\u884c\u53c2\u6570",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"validation-\u6821\u9a8c\u4ee3\u7801"},"Validation \u6821\u9a8c\u4ee3\u7801"),(0,r.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,r.kt)("p",null,"KCL \u652f\u6301\u901a\u8fc7\u5185\u7f6e\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl-vet")," \u547d\u4ee4\u884c\u5de5\u5177\u63d0\u4f9b\u4e86\u57fa\u672c\u7684\u914d\u7f6e\u6570\u636e\u6821\u9a8c\u80fd\u529b\uff0c\u53ef\u4ee5\u7f16\u5199 KCL schema \u5bf9\u8f93\u5165\u7684 JSON/YAML \u683c\u5f0f\u6587\u4ef6\u8fdb\u884c\u7c7b\u578b\u4ee5\u53ca\u6570\u503c\u7684\u6821\u9a8c\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,r.kt)("p",null,"\u5047\u8bbe\u6709 data.json \u6587\u4ef6\uff0c\u4ee3\u7801\u5982\u4e0b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Alice",\n  "age": 18,\n  "message": "This is Alice",\n  "data": {\n    "id": 1,\n    "value": "value1"\n  },\n  "labels": {\n    "key": "value"\n  },\n  "hc": [1, 2, 3]\n}\n')),(0,r.kt)("p",null,"\u6784\u9020 schema.k \u6821\u9a8c\u6587\u4ef6\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"schema User:\n    name: str\n    age: int\n    message?: str\n    data: Data\n    labels: {str:}\n    hc: [int]\n\n    check:\n        age > 10\n\nschema Data:\n    id: int\n    value: str\n")),(0,r.kt)("p",null,"\u5728\u76ee\u5f55\u4e0b\u6267\u884c\u5982\u4e0b\u547d\u4ee4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kcl-vet data.json schema.k\n")),(0,r.kt)("h2",{id:"\u6307\u5b9a\u6821\u9a8c\u7684-schema"},"\u6307\u5b9a\u6821\u9a8c\u7684 schema"),(0,r.kt)("p",null,"\u5f53\u6821\u9a8c\u7684 KCL \u6587\u4ef6\u4e2d\u5b58\u5728\u591a\u4e2a schema \u5b9a\u4e49\u65f6\uff0ckcl-vet \u5de5\u5177\u4f1a\u9ed8\u8ba4\u53d6\u7b2c\u4e00\u4e2a schema \u5b9a\u4e49\u8fdb\u884c\u6821\u9a8c\uff0c\u5982\u679c\u9700\u8981\u6307\u5b9a\u6821\u9a8c\u7684 schema\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"-d|--schema")," \u53c2\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kcl-vet data.json schema.k -d User\n")),(0,r.kt)("h2",{id:"\u547d\u4ee4\u884c\u53c2\u6570"},"\u547d\u4ee4\u884c\u53c2\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kcl-vet -h\nUSAGE:\n    kcl-vet [OPTIONS] [ARGS]\n\nARGS:\n    <data_file>    Validation data file\n    <kcl_file>     KCL file\n\nOPTIONS:\n    -d, --schema <schema>\n            Iterate through subdirectories recursively\n\n        --format <format>\n            Validation data file format, support YAML and JSON, default is JSON\n\n    -h, --help\n            Print help information\n\n    -n, --attribute_name <attribute_name>\n            The attribute name for the data loading\n")))}d.isMDXComponent=!0}}]);