"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[12005],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=l.createContext({}),m=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=m(e.components);return l.createElement(p.Provider,{value:t},e.children)},k="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),k=m(n),u=r,g=k["".concat(p,".").concat(u)]||k[u]||c[u]||a;return n?l.createElement(g,o(o({ref:t},s),{},{components:n})):l.createElement(g,o({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[k]="string"==typeof e?e:r,o[1]=i;for(var m=2;m<a;m++)o[m]=n[m];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}u.displayName="MDXCreateElement"},17117:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>m});var l=n(87462),r=(n(67294),n(3905));const a={slug:"2024-01-18-biweekly-newsletter",title:"KCL \u793e\u533a\u5f00\u6e90\u53cc\u5468\u62a5 (2024 01.04 - 2024.01.18) | KCL v0.7.4 \u7248\u672c\u53d1\u5e03\uff01",authors:{name:"KCL \u56e2\u961f",title:"KCL \u56e2\u961f"},tags:["KCL","Biweekly-Newsletter"]},o=void 0,i={permalink:"/zh-CN/blog/2024-01-18-biweekly-newsletter",editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/blog/2024-01-18-biweekly-newsletter/index.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2024-01-18-biweekly-newsletter/index.md",title:"KCL \u793e\u533a\u5f00\u6e90\u53cc\u5468\u62a5 (2024 01.04 - 2024.01.18) | KCL v0.7.4 \u7248\u672c\u53d1\u5e03\uff01",description:"KCL \u662f\u4e00\u4e2a CNCF \u57fa\u91d1\u4f1a\u6258\u7ba1\u7684\u57fa\u4e8e\u7ea6\u675f\u7684\u8bb0\u5f55\u53ca\u51fd\u6570\u8bed\u8a00\uff0c\u671f\u671b\u901a\u8fc7\u6210\u719f\u7684\u7f16\u7a0b\u8bed\u8a00\u6280\u672f\u548c\u5b9e\u8df5\u6765\u6539\u8fdb\u5bf9\u5927\u91cf\u7e41\u6742\u914d\u7f6e\u6bd4\u5982\u4e91\u539f\u751f Kubernetes \u914d\u7f6e\u573a\u666f\u7684\u7f16\u5199\uff0c\u81f4\u529b\u4e8e\u6784\u5efa\u56f4\u7ed5\u914d\u7f6e\u7684\u66f4\u597d\u7684\u6a21\u5757\u5316\u3001\u6269\u5c55\u6027\u548c\u7a33\u5b9a\u6027\uff0c\u66f4\u7b80\u5355\u7684\u903b\u8f91\u7f16\u5199\uff0c\u4ee5\u53ca\u66f4\u7b80\u5355\u7684\u81ea\u52a8\u5316\u548c\u751f\u6001\u5de5\u5177\u96c6\u6210\u3002",date:"2024-01-18T00:00:00.000Z",formattedDate:"2024\u5e741\u670818\u65e5",tags:[{label:"KCL",permalink:"/zh-CN/blog/tags/kcl"},{label:"Biweekly-Newsletter",permalink:"/zh-CN/blog/tags/biweekly-newsletter"}],readingTime:4.98,hasTruncateMarker:!1,authors:[{name:"KCL \u56e2\u961f",title:"KCL \u56e2\u961f"}],frontMatter:{slug:"2024-01-18-biweekly-newsletter",title:"KCL \u793e\u533a\u5f00\u6e90\u53cc\u5468\u62a5 (2024 01.04 - 2024.01.18) | KCL v0.7.4 \u7248\u672c\u53d1\u5e03\uff01",authors:{name:"KCL \u56e2\u961f",title:"KCL \u56e2\u961f"},tags:["KCL","Biweekly-Newsletter"]},prevItem:{title:"KCL \u793e\u533a\u5f00\u6e90\u53cc\u5468\u62a5 (2024 01.19 - 2024.02.21) | KCL v0.7.5 \u7248\u672c\u548c Flux KCL \u96c6\u6210\u66f4\u65b0\u901f\u9012",permalink:"/zh-CN/blog/2024-02-21-biweekly-newsletter"},nextItem:{title:"KCL \u793e\u533a\u5f00\u6e90\u53cc\u5468\u62a5 (2023 12.22 - 2024.01.04) | Crossplane KCL \u96c6\u6210\u7b80\u5316\u4e91\u8d44\u6e90\u914d\u7f6e\u4e0e\u62bd\u8c61",permalink:"/zh-CN/blog/2024-01-04-biweekly-newsletter"}},p={authorsImageUrls:[void 0]},m=[{value:"\u5185\u5bb9\u6982\u8ff0",id:"\u5185\u5bb9\u6982\u8ff0",level:2},{value:"\u7279\u522b\u9e23\u8c22",id:"\u7279\u522b\u9e23\u8c22",level:2},{value:"\u7cbe\u9009\u66f4\u65b0",id:"\u7cbe\u9009\u66f4\u65b0",level:2},{value:"KCL IDE \u8bed\u4e49\u7ea7\u522b\u7684\u9ad8\u4eae\u589e\u5f3a",id:"kcl-ide-\u8bed\u4e49\u7ea7\u522b\u7684\u9ad8\u4eae\u589e\u5f3a",level:3},{value:"KCL \u5305\u7ba1\u7406\u652f\u6301\u901a\u8fc7 commit \u6dfb\u52a0 git \u4f9d\u8d56",id:"kcl-\u5305\u7ba1\u7406\u652f\u6301\u901a\u8fc7-commit-\u6dfb\u52a0-git-\u4f9d\u8d56",level:3},{value:"KCL Import \u5de5\u5177\u589e\u5f3a",id:"kcl-import-\u5de5\u5177\u589e\u5f3a",level:3},{value:"\u5176\u4ed6\u8d44\u6e90",id:"\u5176\u4ed6\u8d44\u6e90",level:2}],s={toc:m},k="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(k,(0,l.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(37339).Z,width:"1127",height:"435"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang"},"KCL")," \u662f\u4e00\u4e2a CNCF \u57fa\u91d1\u4f1a\u6258\u7ba1\u7684\u57fa\u4e8e\u7ea6\u675f\u7684\u8bb0\u5f55\u53ca\u51fd\u6570\u8bed\u8a00\uff0c\u671f\u671b\u901a\u8fc7\u6210\u719f\u7684\u7f16\u7a0b\u8bed\u8a00\u6280\u672f\u548c\u5b9e\u8df5\u6765\u6539\u8fdb\u5bf9\u5927\u91cf\u7e41\u6742\u914d\u7f6e\u6bd4\u5982\u4e91\u539f\u751f Kubernetes \u914d\u7f6e\u573a\u666f\u7684\u7f16\u5199\uff0c\u81f4\u529b\u4e8e\u6784\u5efa\u56f4\u7ed5\u914d\u7f6e\u7684\u66f4\u597d\u7684\u6a21\u5757\u5316\u3001\u6269\u5c55\u6027\u548c\u7a33\u5b9a\u6027\uff0c\u66f4\u7b80\u5355\u7684\u903b\u8f91\u7f16\u5199\uff0c\u4ee5\u53ca\u66f4\u7b80\u5355\u7684\u81ea\u52a8\u5316\u548c\u751f\u6001\u5de5\u5177\u96c6\u6210\u3002"),(0,r.kt)("p",null,"\u672c\u680f\u76ee\u5c06\u4f1a\u53cc\u5468\u66f4\u65b0 KCL \u8bed\u8a00\u793e\u533a\u6700\u65b0\u52a8\u6001\uff0c\u5305\u62ec\u529f\u80fd\u3001\u5b98\u7f51\u66f4\u65b0\u548c\u6700\u65b0\u7684\u793e\u533a\u52a8\u6001\u7b49\uff0c\u5e2e\u52a9\u5927\u5bb6\u66f4\u597d\u5730\u4e86\u89e3 KCL \u793e\u533a\uff01"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"KCL \u5b98\u7f51\uff1a",(0,r.kt)("a",{parentName:"em",href:"https://kcl-lang.io"},"https://kcl-lang.io")))),(0,r.kt)("h2",{id:"\u5185\u5bb9\u6982\u8ff0"},"\u5185\u5bb9\u6982\u8ff0"),(0,r.kt)("p",null,"\u611f\u8c22\u6240\u6709\u8d21\u732e\u8005\u8fc7\u53bb\u4e24\u5468 (2024 01.04 - 2024.01.18) \u7684\u6770\u51fa\u5de5\u4f5c\uff0c\u4ee5\u4e0b\u662f\u91cd\u70b9\u5185\u5bb9\u6982\u8ff0"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\ud83c\udf1e KCL \u66f4\u65b0")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"v0.7.4 \u53d1\u5e03\uff0c\u65b0\u589e Linux arm64 \u5e73\u53f0\u652f\u6301\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\ud83c\udf81 API \u66f4\u65b0")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"KCL \u65b0\u589e\u8bed\u6cd5\u548c\u8bed\u4e49\u5206\u6790 API\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\ud83d\udd27 \u5de5\u5177\u94fe\u66f4\u65b0")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"kcl-go sdk \u66f4\u65b0")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"KCL Doc \u5de5\u5177\u652f\u6301\u8f93\u51fa\u4e3a OpenAPI \u683c\u5f0f\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u589e\u52a0 Parse \u8fc7\u7a0b\u76f8\u5173 API\u3002"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Import \u5de5\u5177\u66f4\u65b0")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f18\u5316\u4e86 import \u5de5\u5177\u751f\u6210 KCL \u914d\u7f6e\u7528\u6237\u4f53\u9a8c\uff0c\u589e\u52a0\u4e86\u5bf9\u5173\u952e\u5b57 oneOf, allOf \u7684\u652f\u6301\u3002"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"KCL \u5305\u7ba1\u7406\u5de5\u5177")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u53d1\u5e03\u4e86 v0.6.0 \u7248\u672c\uff0c\u652f\u6301\u901a\u8fc7 git commit \u6dfb\u52a0\u4e09\u65b9\u5e93\u4f9d\u8d56\u3002")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\ud83d\udcbb IDE \u66f4\u65b0")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u8bed\u4e49\u9ad8\u4eae"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"KCL IDE \u4f18\u5316\u4e86\u8bed\u4e49\u9ad8\u4eae\u3002"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u8865\u5168\u529f\u80fd\u589e\u5f3a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4fee\u590d\u4e86\u5d4c\u5957 schema \u5b9a\u4e49\u4e2d\u8865\u5168\u9519\u8bef\u7684\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"\u4fee\u590d\u4e86\u90e8\u5206\u60ac\u505c\u4fe1\u606f\u7f3a\u5931\u7684\u95ee\u9898")))),(0,r.kt)("h2",{id:"\u7279\u522b\u9e23\u8c22"},"\u7279\u522b\u9e23\u8c22"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u6392\u540d\u4e0d\u5206\u5148\u540e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u611f\u8c22 @jakezhu9 \u540c\u5b66\u5bf9 kcl import \u5de5\u5177\u7684\u6301\u7eed\u8d21\u732e \ud83e\udd1d"),(0,r.kt)("li",{parentName:"ul"},"\u611f\u8c22 @AdmiralNemo\uff0c@Phillip Neumann\uff0c@Naxe\uff0c@steeling \u7b49\u5728\u4f7f\u7528 KCL \u8fc7\u7a0b\u4e2d\u63d0\u4f9b\u7684\u5b9d\u8d35\u5efa\u8bae\u4e0e\u53cd\u9988 \ud83d\ude4c")),(0,r.kt)("h2",{id:"\u7cbe\u9009\u66f4\u65b0"},"\u7cbe\u9009\u66f4\u65b0"),(0,r.kt)("h3",{id:"kcl-ide-\u8bed\u4e49\u7ea7\u522b\u7684\u9ad8\u4eae\u589e\u5f3a"},"KCL IDE \u8bed\u4e49\u7ea7\u522b\u7684\u9ad8\u4eae\u589e\u5f3a"),(0,r.kt)("p",null,"KCL IDE \u9ad8\u4eae\u4e4b\u524d\u4ec5\u652f\u6301 KCL \u8bed\u6cd5\u9ad8\u4eae\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(70202).Z,width:"435",height:"151"})),(0,r.kt)("p",null,"\u6211\u4eec\u4eca\u5e74\u9010\u6b65\u542f\u7528\u4e86\u65b0\u7684 KCL \u8bed\u4e49\u67b6\u6784\u6a21\u578b\uff0c\u5728\u65b0\u8bed\u4e49\u67b6\u6784\u7684\u652f\u6491\u4e0b\uff0cKCL IDE \u652f\u6301\u8bed\u4e49\u7ea7\u522b\u7684\u9ad8\u4eae\uff0c\u5728\u8bed\u4e49\u4e0a\u6709\u5173\u8054\u7684\u4ee3\u7801\u4f1a\u663e\u793a\u76f8\u540c\u7684\u9ad8\u4eae\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(50297).Z,width:"287",height:"145"})),(0,r.kt)("p",null,"\u66f4\u591a\u5173\u4e8e KCL \u8bed\u4e49\u67b6\u6784\u6a21\u578b\u7684\u5185\u5bb9\uff0c\u53c2\u8003\uff1a\n",(0,r.kt)("a",{parentName:"p",href:"https://kcl-lang.io/zh-CN/blog/2023-12-09-kcl-new-semantic-model"},"KCL \u9ad8\u6548\u8bed\u4e49\u6a21\u578b\u6280\u672f\u63ed\u79d8\uff1a\u5b9e\u73b0\u5feb\u901f\u7f16\u8bd1\u4e0e\u589e\u5f3a IDE \u652f\u6301")),(0,r.kt)("h3",{id:"kcl-\u5305\u7ba1\u7406\u652f\u6301\u901a\u8fc7-commit-\u6dfb\u52a0-git-\u4f9d\u8d56"},"KCL \u5305\u7ba1\u7406\u652f\u6301\u901a\u8fc7 commit \u6dfb\u52a0 git \u4f9d\u8d56"),(0,r.kt)("p",null,"KCL \u5305\u7ba1\u7406\u5de5\u5177\u589e\u52a0\u4e86\u901a\u8fc7 commit \u6765\u6dfb\u52a0 git \u4e09\u65b9\u5e93\u4f9d\u8d56\u7684\u529f\u80fd\u3002\u4ee5    ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/catalog"},"https://github.com/KusionStack/catalog")," \u4e3a\u4f8b\uff0c\u6dfb\u52a0 commit \u4e3a a29e3db \u7684\u7248\u672c\u4f5c\u4e3a\u4f9d\u8d56\u3002\u53ef\u4ee5\u901a\u8fc7\u7f16\u8f91 kcl.mod \u6587\u4ef6\u4e2d\u7684\u4f9d\u8d56\u6216\u8005\u547d\u4ee4\u884c\u76f4\u63a5\u6dfb\u52a0\u3002"),(0,r.kt)("p",null,"\u7f16\u8f91 kcl.mod \u6587\u4ef6\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'[dependencies]\ncatalog = { git = "https://github.com/KusionStack/catalog.git", commit = "a29e3db" }\n')),(0,r.kt)("p",null,"\u6216\u8005\u901a\u8fc7\u547d\u4ee4\u884c\u6dfb\u52a0\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kcl mod add -git https://github.com/KusionStack/catalog.git -commit a29e3db\n")),(0,r.kt)("h3",{id:"kcl-import-\u5de5\u5177\u589e\u5f3a"},"KCL Import \u5de5\u5177\u589e\u5f3a"),(0,r.kt)("p",null,"\u652f\u6301 oneOf \u5173\u952e\u5b57\u7684\u751f\u6210\uff0c\u4ee5 oneOf \u5173\u952e\u5b57\u4e3a\u4f8b\uff0c\u5c06\u4ee5\u4e0b\u5185\u5bb9\u4fdd\u5b58\u5728\u6587\u4ef6 oneof.json \u4e2d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "$id": "https://example.com/schemas/book.json",\n  "type": "object",\n  "properties": {\n    "title": {\n      "type": "string"\n    },\n    "author": {\n      "$comment": "oneOf for types",\n      "oneOf": [\n        {\n          "type": "string"\n        },\n        {\n          "type": "array",\n          "items": {\n            "type": "string"\n          }\n        },\n        {\n          "type": "integer"\n        }\n      ]\n    },\n    "category": {\n      "$comment": "oneOf for objects",\n      "oneOf": [\n        {\n          "type": "object",\n          "properties": {\n            "name": {\n              "type": "string"\n            }\n          }\n        },\n        {\n          "type": "object",\n          "properties": {\n            "title": {\n              "type": "string"\n            }\n          }\n        }\n      ]\n    }\n  }\n}\n')),(0,r.kt)("p",null,"\u901a\u8fc7 import \u547d\u4ee4\u751f\u6210\u5bf9\u5e94\u7684 KCL \u6587\u4ef6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kcl import oneof.json\n")),(0,r.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u751f\u6210\u7684 oneof.k \u6587\u4ef6\u5185\u5bb9\u5982\u4e0b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kcl"},'"""\nThis file was generated by the KCL auto-gen tool. DO NOT EDIT.\nEditing this file might prove futile when you re-run the KCL auto-gen generate command.\n"""\n\nschema Book:\n    r"""\n    Book\n\n    Attributes\n    ----------\n    title : str, optional\n    author : str | [str] | int, optional\n    category : BookCategoryOneOf0 | BookCategoryOneOf1, optional\n    """\n\n    title?: str\n    author?: str | [str] | int\n    category?: BookCategoryOneOf0 | BookCategoryOneOf1\n\nschema BookCategoryOneOf0:\n    r"""\n    BookCategoryOneOf0\n\n    Attributes\n    ----------\n    name : str, optional\n    """\n\n    name?: str\n\nschema BookCategoryOneOf1:\n    r"""\n    BookCategoryOneOf1\n\n    Attributes\n    ----------\n    title : str, optional\n    """\n\n    title?: str\n')),(0,r.kt)("h2",{id:"\u5176\u4ed6\u8d44\u6e90"},"\u5176\u4ed6\u8d44\u6e90"),(0,r.kt)("p",null,"\u2764\ufe0f \u611f\u8c22\u6240\u6709 KCL \u7528\u6237\u548c\u793e\u533a\u5c0f\u4f19\u4f34\u5728\u793e\u533a\u4e2d\u63d0\u51fa\u7684\u5b9d\u8d35\u53cd\u9988\u4e0e\u5efa\u8bae\u3002\u540e\u7eed\u6211\u4eec\u4f1a\u53d1\u5e03\u66f4\u591a KCL \u4e91\u539f\u751f\u6a21\u578b\u548c\u5de5\u5177\u96c6\u6210\u6587\u7ae0\uff0c\u656c\u8bf7\u671f\u5f85! \u67e5\u770b ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"https://github.com/kcl-lang/community"},"KCL \u793e\u533a"))," \u52a0\u5165\u6211\u4eec\u3002"),(0,r.kt)("p",null,"\u66f4\u591a\u5176\u4ed6\u8d44\u6e90\u8bf7\u53c2\u8003\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kcl-lang.io/"},"KCL \u7f51\u7ad9")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kusionstack.io/"},"KusionStack \u7f51\u7ad9")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/kcl-lang/kcl/milestone/8"},"KCL v0.8.0 Milestone"))))}c.isMDXComponent=!0},37339:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/biweekly-newsletter-zh-bd4cf8c2bcc913a580e7b0e5d6691a08.png"},50297:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/new-ide-a62fcf4ef6b9d078f77a7e15af161e17.png"},70202:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/old-ide-835ff47b36b5e23f304f8092c3afd989.png"}}]);