"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[88893],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=i(n),u=r,k=d["".concat(s,".").concat(u)]||d[u]||m[u]||l;return n?a.createElement(k,c(c({ref:t},p),{},{components:n})):a.createElement(k,c({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,c[1]=o;for(var i=2;i<l;i++)c[i]=n[i];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},70857:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var a=n(87462),r=(n(67294),n(3905));const l={sidebar_position:7},c="\u6821\u9a8c\u5de5\u5177",o={unversionedId:"tools/cli/kcl/vet",id:"tools/cli/kcl/vet",title:"\u6821\u9a8c\u5de5\u5177",description:"\u7b80\u4ecb",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tools/cli/kcl/vet.md",sourceDirName:"tools/cli/kcl",slug:"/tools/cli/kcl/vet",permalink:"/zh-CN/docs/next/tools/cli/kcl/vet",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/tools/cli/kcl/vet.md",tags:[],version:"current",lastUpdatedBy:"peefy",lastUpdatedAt:1702459904,formattedLastUpdatedAt:"2023\u5e7412\u670813\u65e5",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tools",previous:{title:"\u6d4b\u8bd5\u5de5\u5177",permalink:"/zh-CN/docs/next/tools/cli/kcl/test"},next:{title:"kcl mod init",permalink:"/zh-CN/docs/next/tools/cli/package-management/command-reference/init"}},s={},i=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"\u6307\u5b9a\u6821\u9a8c\u7684 schema",id:"\u6307\u5b9a\u6821\u9a8c\u7684-schema",level:2},{value:"\u547d\u4ee4\u884c\u53c2\u6570",id:"\u547d\u4ee4\u884c\u53c2\u6570",level:2}],p={toc:i},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u6821\u9a8c\u5de5\u5177"},"\u6821\u9a8c\u5de5\u5177"),(0,r.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,r.kt)("p",null,"KCL \u652f\u6301\u901a\u8fc7\u5185\u7f6e\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl vet")," \u547d\u4ee4\u884c\u5de5\u5177\u63d0\u4f9b\u4e86\u57fa\u672c\u7684\u914d\u7f6e\u6570\u636e\u6821\u9a8c\u80fd\u529b\uff0c\u53ef\u4ee5\u7f16\u5199 KCL schema \u5bf9\u8f93\u5165\u7684 JSON/YAML \u683c\u5f0f\u6587\u4ef6\u8fdb\u884c\u7c7b\u578b\u4ee5\u53ca\u6570\u503c\u7684\u6821\u9a8c\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,r.kt)("p",null,"\u5047\u8bbe\u6709 data.json \u6587\u4ef6\uff0c\u4ee3\u7801\u5982\u4e0b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Alice",\n  "age": 18,\n  "message": "This is Alice",\n  "data": {\n    "id": 1,\n    "value": "value1"\n  },\n  "labels": {\n    "key": "value"\n  },\n  "hc": [1, 2, 3]\n}\n')),(0,r.kt)("p",null,"\u6784\u9020 schema.k \u6821\u9a8c\u6587\u4ef6\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"schema User:\n    name: str\n    age: int\n    message?: str\n    data: Data\n    labels: {str:}\n    hc: [int]\n\n    check:\n        age > 10\n\nschema Data:\n    id: int\n    value: str\n")),(0,r.kt)("p",null,"\u5728\u76ee\u5f55\u4e0b\u6267\u884c\u5982\u4e0b\u547d\u4ee4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kcl vet data.json schema.k\n")),(0,r.kt)("h2",{id:"\u6307\u5b9a\u6821\u9a8c\u7684-schema"},"\u6307\u5b9a\u6821\u9a8c\u7684 schema"),(0,r.kt)("p",null,"\u5f53\u6821\u9a8c\u7684 KCL \u6587\u4ef6\u4e2d\u5b58\u5728\u591a\u4e2a schema \u5b9a\u4e49\u65f6\uff0ckcl vet \u5de5\u5177\u4f1a\u9ed8\u8ba4\u53d6\u7b2c\u4e00\u4e2a schema \u5b9a\u4e49\u8fdb\u884c\u6821\u9a8c\uff0c\u5982\u679c\u9700\u8981\u6307\u5b9a\u6821\u9a8c\u7684 schema\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"-s|--schema")," \u53c2\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kcl vet data.json schema.k -s User\n")),(0,r.kt)("h2",{id:"\u547d\u4ee4\u884c\u53c2\u6570"},"\u547d\u4ee4\u884c\u53c2\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"This command validates the data file using the kcl code.\n\nUsage:\n  kcl vet [flags]\n\nExamples:\n  # Validate the JSON data using the kcl code\n  kcl vet data.json code.k\n\n  # Validate the YAML data using the kcl code\n  kcl vet data.yaml code.k --format yaml\n\n  # Validate the JSON data using the kcl code with the schema name\n  kcl vet data.json code.k -s Schema\n\n\nFlags:\n  -a, --attribute_name string   Specify the validate config attribute name.\n      --format string           Specify the validate data format. e.g., yaml, json. Default is json\n  -h, --help                    help for vet\n  -s, --schema string           Specify the validate schema.\n")))}m.isMDXComponent=!0}}]);