"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[48260],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>c});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),o=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},s=function(t){var e=o(t.components);return a.createElement(m.Provider,{value:e},t.children)},d="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),d=o(n),u=r,c=d["".concat(m,".").concat(u)]||d[u]||k[u]||l;return n?a.createElement(c,p(p({ref:e},s),{},{components:n})):a.createElement(c,p({ref:e},s))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,p=new Array(l);p[0]=u;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i[d]="string"==typeof t?t:r,p[1]=i;for(var o=2;o<l;o++)p[o]=n[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},15436:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const l={},p="KCL OpenAPI \u89c4\u8303",i={unversionedId:"tools/cli/openapi/spec",id:"version-0.6.0/tools/cli/openapi/spec",title:"KCL OpenAPI \u89c4\u8303",description:"OpenAPI \u5141\u8bb8 API \u63d0\u4f9b\u65b9\u89c4\u8303\u5730\u63cf\u8ff0 API \u64cd\u4f5c\u548c\u6a21\u578b\uff0c\u5e76\u57fa\u4e8e\u5b83\u751f\u6210\u81ea\u52a8\u5316\u5de5\u5177\u548c\u7279\u5b9a\u8bed\u8a00\u7684\u5ba2\u6237\u7aef\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.6.0/tools/cli/openapi/spec.md",sourceDirName:"tools/cli/openapi",slug:"/tools/cli/openapi/spec",permalink:"/zh-CN/docs/0.6.0/tools/cli/openapi/spec",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.6.0/tools/cli/openapi/spec.md",tags:[],version:"0.6.0",lastUpdatedBy:"peefy",lastUpdatedAt:1701659761,formattedLastUpdatedAt:"2023\u5e7412\u67084\u65e5",frontMatter:{},sidebar:"tools",previous:{title:"OpenAPI to KCL",permalink:"/zh-CN/docs/0.6.0/tools/cli/openapi/openapi-to-kcl"},next:{title:"kpm",permalink:"/zh-CN/docs/0.6.0/tools/cli/package-management/command-reference/"}},m={},o=[{value:"KCL OpenAPI \u6587\u4ef6\u7ed3\u6784",id:"kcl-openapi-\u6587\u4ef6\u7ed3\u6784",level:2},{value:"KCL schema",id:"kcl-schema",level:2},{value:"schema \u540d\u79f0",id:"schema-\u540d\u79f0",level:3},{value:"schema \u7c7b\u578b",id:"schema-\u7c7b\u578b",level:3},{value:"schema \u5c5e\u6027",id:"schema-\u5c5e\u6027",level:3},{value:"schema \u7d22\u5f15\u7b7e\u540d",id:"schema-\u7d22\u5f15\u7b7e\u540d",level:3},{value:"schema \u7ee7\u627f\u5173\u7cfb",id:"schema-\u7ee7\u627f\u5173\u7cfb",level:3},{value:"\u5185\u8054 schema",id:"\u5185\u8054-schema",level:3},{value:"KCL \u6587\u6863",id:"kcl-\u6587\u6863",level:2},{value:"\u57fa\u672c\u6570\u636e\u7c7b\u578b",id:"\u57fa\u672c\u6570\u636e\u7c7b\u578b",level:2},{value:"Reference",id:"reference",level:2}],s={toc:o},d="wrapper";function k(t){let{components:e,...n}=t;return(0,r.kt)(d,(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kcl-openapi-\u89c4\u8303"},"KCL OpenAPI \u89c4\u8303"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.openapis.org/"},"OpenAPI")," \u5141\u8bb8 API \u63d0\u4f9b\u65b9\u89c4\u8303\u5730\u63cf\u8ff0 API \u64cd\u4f5c\u548c\u6a21\u578b\uff0c\u5e76\u57fa\u4e8e\u5b83\u751f\u6210\u81ea\u52a8\u5316\u5de5\u5177\u548c\u7279\u5b9a\u8bed\u8a00\u7684\u5ba2\u6237\u7aef\u3002"),(0,r.kt)("h2",{id:"kcl-openapi-\u6587\u4ef6\u7ed3\u6784"},"KCL OpenAPI \u6587\u4ef6\u7ed3\u6784"),(0,r.kt)("p",null,"\u4f9d\u636e OpenAPI 3.0 \u89c4\u8303\uff0cOpenAPI \u6587\u4ef6\u4e2d\u5e94\u81f3\u5c11\u5305\u542b openapi\u3001components\u3001 info\u3001paths \u56db\u79cd\u6839\u8282\u70b9\u5bf9\u8c61\uff0cKCL OpenAPI \u805a\u7126\u4e8e\u5176\u4e2d\u6a21\u578b\u5b9a\u4e49\u7684\u90e8\u5206\uff0c\u5373 OpenAPI \u6587\u4ef6\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"definitions"),"\uff0c\u800c\u63cf\u8ff0\u64cd\u4f5c\u7684 Restful API \u90e8\u5206\uff08\u5373 OpenAPI \u6587\u4ef6\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"paths"),"\uff09\u5219\u4e0d\u5c5e\u4e8e KCL OpenAPI \u5b9a\u4e49\u7684\u8303\u7574\u3002\n\u200b"),(0,r.kt)("p",null,"\u6ce8\uff1a\u9664\u4ee5\u4e0a\u5217\u51fa\u7684\u8282\u70b9\u5916\uff0cOpenAPI \u5b98\u65b9\u89c4\u8303\u8fd8\u652f\u6301 servers\u3001security\u3001tags\u3001externalDocs \u56db\u79cd\u53ef\u9009\u7684\u6839\u8282\u70b9\uff0c\u4f46\u90fd\u4e0d\u662f KCL OpenAPI \u6240\u5173\u5fc3\u7684\uff0c\u56e0\u6b64\u7528\u6237\u65e0\u9700\u586b\u5199\u8fd9\u90e8\u5206\u5185\u5bb9\uff0c\u5373\u4f7f\u586b\u5199\u4e86\u4e5f\u4e0d\u4f1a\u4ea7\u751f\u4efb\u4f55\u5f71\u54cd\u3002\n\u200b"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"OpenAPI \u9876\u5c42\u5bf9\u8c61"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"),(0,r.kt)("th",{parentName:"tr",align:null},"KCL\xa0OpenAPI \u5de5\u5177\u652f\u6301\u60c5\u51b5"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"swagger"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"openapi \u7248\u672c\u4fe1\u606f"),(0,r.kt)("td",{parentName:"tr",align:null},'\u5fc5\u586b\u9879\uff0c\u76ee\u524d\u652f\u6301 openapi 2.0\uff0c\u5373\u5408\u6cd5\u53d6\u503c\u4e3a "2.0"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"definitions"),(0,r.kt)("td",{parentName:"tr",align:null},"Definition Object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6a21\u578b\u5b9a\u4e49"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5fc5\u586b\u9879")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"info"),(0,r.kt)("td",{parentName:"tr",align:null},"Info Object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d API \u6587\u4ef6\u7684\u5143\u6570\u636e\u4fe1\u606f\uff0c\u4f8b\u5982\u6807\u9898\u3001\u63cf\u8ff0\u4fe1\u606f\u3001\u7248\u672c\u3001\u5f00\u6e90\u534f\u8bae\u7b49"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5fc5\u586b\u9879\uff0c\u5b9a\u4e49\u5f53\u524d OpenAPI \u6587\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\uff0c\u4e0d\u4f1a\u8f93\u51fa\u5230 KCL \u4ee3\u7801\uff0c\u4f46\u53ef\u7528\u4e8e Swagger-UI \u5de5\u5177\u53ef\u89c6\u5316\u5c55\u793a")))),(0,r.kt)("p",null,"\u4e3a\u65b9\u4fbf\u521d\u5b66\u8005\u5feb\u901f\u7406\u89e3\uff0c\u4e0b\u9762\u7ed9\u51fa\u4e00\u4e2a\u5178\u578b\u7684 KCL OpenAPI \u6587\u4ef6\uff08\u622a\u53d6\u81ea swagger example ",(0,r.kt)("a",{parentName:"p",href:"https://petstore.swagger.io/"},"Petstore"),"\uff09\u5e94\u5305\u542b\u7684\u8282\u70b9\u56fe\u793a\u3002KCL OpenAPI \u5de5\u5177\u91cd\u70b9\u5173\u6ce8\u5176\u4e2d\u7684 definitions \u8282\u70b9\uff0c\u53ef\u4ee5\u770b\u5230\u6587\u4ef6\u4e2d\u5b9a\u4e49\u4e86\u4e24\u4e2a\u6a21\u578b\uff08Pet \u548c Category\uff09\uff0c\u5e76\u4e14 Pet \u6a21\u578b\u4e2d\u5305\u542b\u4e09\u4e2a\u5c5e\u6027\uff08name\u3001id\u3001category\uff09"),(0,r.kt)("h2",{id:"kcl-schema"},"KCL schema"),(0,r.kt)("p",null,"KCL \u4e2d\u4f7f\u7528 schema \u7ed3\u6784\u6765\u5b9a\u4e49\u914d\u7f6e\u6570\u636e\u7684\u201c\u7c7b\u578b\u201d\uff0c\u5173\u4e8e KCL schema\uff0c\u53ef\u53c2\u8003\u6587\u6863\uff1a\u4f20\u9001\u95e8\n\u5728 definitions \u8282\u70b9\u4e0b\u65b0\u589e definition \u5143\u7d20\uff0c\u5373\u53ef\u5b9a\u4e49 KCL schema.\n\u793a\u4f8b\uff1a\n\u4e0b\u4f8b\u5728 KCL \u4ee3\u7801\u4e2d\u5b9a\u4e49\u4e86 Pet\u3001Category \u4e24\u4e2a schema\uff0c\u540c\u6837\u5730\uff0c\u5176\u5bf9\u5e94\u7684 OpenAPI \u4e5f\u5728 definitions \u8282\u70b9\u4e0b\u5305\u542b\u8fd9\u4e24\u4e2a\u6a21\u578b\u7684\u63cf\u8ff0\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# KCL schema\uff1a\nschema Pet:\n    name:      str\n    id?:       int\n    category?: Category\n\nschema Category:\n    name?: str\n\n# \u5bf9\u5e94\u7684 OpenAPI \u63cf\u8ff0\n{\n    "definitions": {\n        "Pet": {\n            "type": "object",\n            "properties": {\n                "name": {\n                    "type": "string"\n                },\n                "id": {\n                    "type": "integer",\n                    "format": "int64"\n                },\n                "category": {\n                    "$ref": "#/definitions/Category"\n                }\n            },\n            "required": [\n                "name"\n            ]\n        },\n        "Category": {\n            "type": "object",\n            "properties": {\n                "name": {\n                    "type": "string"\n                }\n            }\n        }\n    },\n    "swagger": "2.0",\n    "info": {\n        "title": "demo",\n        "version": "v1"\n    }\n}\n\n')),(0,r.kt)("h3",{id:"schema-\u540d\u79f0"},"schema \u540d\u79f0"),(0,r.kt)("p",null,"\u5728 KCL \u4e2d\uff0cschema \u540d\u79f0\u7d27\u8ddf\u5728 schema \u5173\u952e\u5b57\u540e\u58f0\u660e\uff0c\u5728 OpenAPI \u4e2d\uff0c\u6a21\u578b\u7684\u540d\u79f0\u901a\u8fc7 definition \u5143\u7d20\u7684 key \u6765\u5b9a\u4e49\u3002"),(0,r.kt)("h3",{id:"schema-\u7c7b\u578b"},"schema \u7c7b\u578b"),(0,r.kt)("p",null,'KCL schema \u5728 OpenAPI \u4e2d\u7684\u7c7b\u578b\u4e3a "object". \u4f8b\u5982\u4e0a\u4f8b\u4e2d "Pet" \u7684 "type" \u503c\u5e94\u4e3a "object".'),(0,r.kt)("h3",{id:"schema-\u5c5e\u6027"},"schema \u5c5e\u6027"),(0,r.kt)("p",null,"KCL schema \u4e2d\u53ef\u4ee5\u5b9a\u4e49\u82e5\u5e72\u5c5e\u6027\uff0c\u5c5e\u6027\u7684\u58f0\u660e\u4e00\u822c\u5305\u542b\u5982\u4e0b\u51e0\u90e8\u5206\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5c5e\u6027\u6ce8\u89e3\uff1a\u53ef\u9009\uff0c\u4ee5 @ \u5f00\u5934\uff0c\u4f8b\u5982 @deprecated \u6ce8\u89e3\u8868\u793a\u5c5e\u6027\u88ab\u5e9f\u5f03"),(0,r.kt)("li",{parentName:"ul"},"\u5c5e\u6027\u540d\u79f0\uff1a\u5fc5\u987b"),(0,r.kt)("li",{parentName:"ul"},"\u5c5e\u6027 optional \u4fee\u9970\u7b26\uff08?\uff09\uff1a\u53ef\u9009\uff0c\u5e26\u95ee\u53f7\u8868\u793a\u5f53\u524d\u5c5e\u6027\u4e3a\u53ef\u9009\u5c5e\u6027\uff0c\u53ef\u4ee5\u4e0d\u88ab\u8d4b\u503c\u3002\u53cd\u4e4b\uff0c\u4e0d\u5e26\u95ee\u53f7\u8868\u793a\u5fc5\u586b\u5c5e\u6027"),(0,r.kt)("li",{parentName:"ul"},"\u5c5e\u6027\u7c7b\u578b\uff1a\u5fc5\u987b\uff0c\u53ef\u4ee5\u662f\u57fa\u672c\u6570\u636e\u7c7b\u578b\uff0c\u4e5f\u53ef\u4ee5\u662f schema \u7c7b\u578b\uff0c \u6216\u8005\u662f\u524d\u8ff0\u4e24\u79cd\u7c7b\u578b\u7684\u5e76\u96c6"),(0,r.kt)("li",{parentName:"ul"},"\u5c5e\u6027\u9ed8\u8ba4\u503c\uff1a\u975e\u5fc5\u987b")),(0,r.kt)("p",null,"\u5b83\u4eec\u4e0e OpenAPI \u89c4\u8303\u7684\u5bf9\u5e94\u5173\u7cfb\u5982\u4e0b\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"KCL schema \u5c5e\u6027\u5143\u7d20"),(0,r.kt)("th",{parentName:"tr",align:null},"OpenAPI \u5143\u7d20"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5c5e\u6027\u6ce8\u89e3"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6682\u4e0d\u652f\u6301\uff0c\u8ba1\u5212\u6269\u5c55\u4e00\u4e2a deprecate \u5b57\u6bb5\u7528\u4e8e\u63cf\u8ff0 deprecated \u6ce8\u89e3"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5c5e\u6027\u540d\u79f0"),(0,r.kt)("td",{parentName:"tr",align:null},"properties \u8282\u70b9\u4e0b\uff0c\u6bcf\u4e2a\u5c5e\u6027\u7684 key \u5373\u4e3a\u5c5e\u6027\u540d\u79f0"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5c5e\u6027 optional \u4fee\u9970\u7b26\uff08\uff1f\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6a21\u578b\u8282\u70b9\u4e0b\uff0c\u901a\u8fc7 required \u5b57\u6bb5\u5217\u51fa\u8be5\u6a21\u578b\u7684\u6240\u6709\u5fc5\u586b\u5c5e\u6027\u7684\u540d\u79f0\uff0c\u672a\u88ab\u5217\u51fa\u7684\u5c5e\u6027\u5373\u4e3a optional"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5c5e\u6027\u7c7b\u578b"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c5e\u6027\u8282\u70b9\u4e0b\uff0c\u8bbe\u7f6e type + format \u53ef\u4ee5\u6807\u8bc6\u5c5e\u6027\u7684\u57fa\u672c\u7c7b\u578b\uff0c\u5982\u679c\u662f schema \u7c7b\u578b\u5219\u7528 $ref \u5b57\u6bb5\u8868\u793a\uff0c\u7c7b\u578b union \u5219\u7531\u6269\u5c55\u5b57\u6bb5 x-kcl-types \u6765\u6807\u8bc6\uff0c\u6b64\u5916\uff0c\u5c5e\u6027\u8282\u70b9\u7684 enum\u3001pattern \u4e5f\u53ef\u4ee5\u7528\u4e8e\u8868\u793a KCL \u7c7b\u578b\u3002"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KCL-OpenAPI \u5173\u4e8e\u7c7b\u578b\u7684\u5bf9\u7167\u5173\u7cfb\uff0c\u8be6\u89c1\u201c\u57fa\u672c\u6570\u636e\u7c7b\u578b\u201d\u5c0f\u8282"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5c5e\u6027\u9ed8\u8ba4\u503c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c5e\u6027\u8282\u70b9\u4e0b\uff0c\u8bbe\u7f6e default \u5b57\u6bb5\u5373\u53ef\u4e3a\u5c5e\u6027\u8bbe\u7f6e\u9ed8\u8ba4\u503c"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"\u793a\u4f8b\uff1a\n\u4e0b\u4f8b\u4e2d Pet \u6a21\u578b\u5305\u542b\u4e86 2 \u4e2a\u5c5e\u6027\uff1aname\uff08string \u7c7b\u578b\uff0c\u5fc5\u586b\u5c5e\u6027\uff0c\u65e0\u6ce8\u89e3\uff0c\u65e0\u9ed8\u8ba4\u503c\uff09\u3001id\uff08int64 \u7c7b\u578b\uff0c\u65e0\u6ce8\u89e3\uff0c\u975e\u5fc5\u586b\uff0c\u9ed8\u8ba4\u503c\u4e3a -1\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# KCL schema Pet\uff0c\u5305\u542b\u4e24\u4e2a\u5c5e\u6027 name \u548c id\nschema Pet:\n    name: str\n    id?:  int = -1\n\n# \u5bf9\u5e94\u7684 OpenAPI \u6587\u6863\n{\n    "definitions": {\n        "Pet": {\n            "type": "object",\n            "properties": {\n                "name": {\n                    "type": "string",\n                },\n                "id": {\n                    "type": "integer",\n                    "format": "int64",\n                    "default": -1\n                }\n            },\n            "required": [\n                "name"\n            ],\n        }\n    },\n    "swagger": "2.0",\n    "info": {\n        "title": "demo",\n        "version": "v1"\n    }\n}\n')),(0,r.kt)("h3",{id:"schema-\u7d22\u5f15\u7b7e\u540d"},"schema \u7d22\u5f15\u7b7e\u540d"),(0,r.kt)("p",null,"KCL schema \u5141\u8bb8\u5b9a\u4e49\u7d22\u5f15\u7b7e\u540d\uff0c\u7528\u4e8e\u5b9a\u4e49\u5c5e\u6027\u540d\u4e0d\u56fa\u5b9a\u7684 dict\uff0c\u8d77\u5230\u9759\u6001\u6a21\u677f\u7684\u4f5c\u7528\u3002\u5177\u4f53\u6765\u8bf4\uff0cKCL schema \u7d22\u5f15\u7b7e\u540d\u5305\u542b\u5982\u4e0b\u51e0\u4e2a\u5143\u7d20\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7d22\u5f15\u7b7e\u540d\u4e2d key \u7684\u7c7b\u578b\uff1a\u5728\u65b9\u62ec\u53f7\u4e2d\u58f0\u660e\uff0c\u5fc5\u987b\u662f\u57fa\u7840\u7c7b\u578b"),(0,r.kt)("li",{parentName:"ul"},"\u7d22\u5f15\u7b7e\u540d\u4e2d value \u7684\u7c7b\u578b\uff1a\u5728\u5192\u53f7\u540e\u58f0\u660e\uff0c\u53ef\u4ee5\u662f\u4efb\u610f\u5408\u6cd5\u7684 KCL \u7c7b\u578b"),(0,r.kt)("li",{parentName:"ul"},'\u7d22\u5f15\u7b7e\u540d\u4e2d\u7684\u7701\u7565\u7b26\uff1a\u5728\u65b9\u62ec\u53f7\u4e2d\uff0ckey \u7c7b\u578b\u4e4b\u524d\u58f0\u660e\uff0c\u4f7f\u7528"..."\u8868\u793a\u3002\u5982\u679c\u5e26\u6709\u8be5\u7b26\u53f7\uff0c\u8868\u793a\u8be5\u7d22\u5f15\u7b7e\u540d\u53ea\u7528\u4e8e\u7ea6\u675f\u672a\u5728 schema \u4e2d\u5b9a\u4e49\u7684\u5c5e\u6027\uff1b\u5426\u5219\uff0c\u8868\u793a schema \u4e2d\u6240\u6709\u5df2\u5b9a\u4e49\u548c\u672a\u5b9a\u4e49\u5c5e\u6027\u90fd\u6536\u5230\u8be5\u7d22\u5f15\u7b7e\u540d\u7684\u7ea6\u675f\u3002'),(0,r.kt)("li",{parentName:"ul"},"\u7d22\u5f15\u7b7e\u540d\u4e2d key \u7684\u522b\u540d\uff1a\u5728\u65b9\u62ec\u53f7\u4e2d\uff0c\u7d27\u968f\u5de6\u65b9\u62ec\u53f7\u4e4b\u540e\u58f0\u660e\uff0c\u4f7f\u7528\u540d\u79f0 + \u5192\u53f7\u8868\u793a\uff0c\u8be5\u522b\u540d\u53ef\u7528\u4e8e\u6309\u540d\u79f0\u5f15\u7528\u7d22\u5f15\u7b7e\u540d"),(0,r.kt)("li",{parentName:"ul"},"\u7d22\u5f15\u7b7e\u540d\u7684\u9ed8\u8ba4\u503c\uff1a\u53ef\u4ee5\u4e3a\u7d22\u5f15\u7b7e\u540d\u8bbe\u7f6e\u9ed8\u8ba4\u503c")),(0,r.kt)("p",null,"\u5728 OpenAPI \u4e2d\uff0c\u53ef\u4ee5\u501f\u52a9\u5728\u6a21\u578b\u8282\u70b9\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"additionalProperties")," \u5b57\u6bb5\u63cf\u8ff0\u67d0\u4e9b key \u4e3a string \u7684\u7d22\u5f15\u7b7e\u540d\u3002\u4f46\u5bf9\u4e8e KCL \u7d22\u5f15\u7b7e\u540d\u4e2d\u975e string \u7c7b\u578b\u7684 dict key\u3001\u7d22\u5f15\u7b7e\u540d key \u7684 check \u6821\u9a8c\uff0c\u5728 OpenAPI \u89c4\u8303\u6ca1\u6709\u5bf9\u7b49\u7684\u63cf\u8ff0\u3002\u5b83\u4eec\u4e0e OpenAPI \u89c4\u8303\u7684\u5bf9\u5e94\u5173\u7cfb\u5982\u4e0b\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"KCL \u7d22\u5f15\u7b7e\u540d\u5143\u7d20"),(0,r.kt)("th",{parentName:"tr",align:null},"OpenAPI \u5143\u7d20"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7d22\u5f15\u7b7e\u540d\u4e2d key \u7684\u7c7b\u578b"),(0,r.kt)("td",{parentName:"tr",align:null},"OpenAPI \u4ec5\u652f\u6301 key \u4e3a string \u7c7b\u578b\uff0c\u65e0\u6cd5\u81ea\u5b9a\u4e49")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7d22\u5f15\u7b7e\u540d\u4e2d value \u7684\u7c7b\u578b"),(0,r.kt)("td",{parentName:"tr",align:null},'\u6a21\u578b\u8282\u70b9\u7684\u4e0b additionalProperties \u4e0b\u7684 "type" \u5b57\u6bb5')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7d22\u5f15\u7b7e\u540d\u4e2d\u7684\u7701\u7565\u7b26"),(0,r.kt)("td",{parentName:"tr",align:null},"OpenAPI \u4e2d\u8868\u793a\u7d22\u5f15\u7b7e\u540d\u65f6\uff0c\u53ea\u80fd\u8868\u793a KCL \u4e2d\u5e26\u6709\u7701\u7565\u7b26\u7684\u60c5\u51b5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7d22\u5f15\u7b7e\u540d\u4e2d key \u7684\u522b\u540d"),(0,r.kt)("td",{parentName:"tr",align:null},"OpenAPI \u4e2d\u4e0d\u652f\u6301\u4e3a\u7d22\u5f15\u7b7e\u540d\u5b9a\u4e49 key \u522b\u540d\uff0c\uff08\u9884\u8ba1\u901a\u8fc7\u6269\u5c55\u652f\u6301\uff1ax-alias\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7d22\u5f15\u7b7e\u540d\u7684\u9ed8\u8ba4\u503c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u76ee\u524d\u4e0d\u652f\u6301")))),(0,r.kt)("p",null,"\u793a\u4f8b\uff1a\u4e0b\u4f8b\u4e2d\u7684 KCL schema Pet\uff0c\u5305\u542b\u4e24\u4e2a\u9884\u5b9a\u4e49\u7684\u5c5e\u6027 name \u548c id\uff0c\u9664\u6b64\u4e4b\u5916\uff0c\u8fd8\u5141\u8bb8\u4f7f\u7528\u8be5 schema \u7684\u914d\u7f6e\u989d\u5916\u5730\u8d4b\u503c\u5176\u4ed6 key \u4e3a string \u7c7b\u578b\uff0cvalue \u4e3a bool \u7c7b\u578b\u7684\u5c5e\u6027\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# KCL schema Pet\uff0c\u5305\u542b\u4e24\u4e2a\u9884\u5b9a\u4e49\u7684\u5c5e\u6027 name \u548c id\uff0c\u5141\u8bb8\u989d\u5916\u7ed9 key \u4e3a string\u3001value \u4e3a bool \u7684\u5c5e\u6027\u8d4b\u503c\nschema Pet:\n    name:     str\n    id?:      int\n    [...str]: bool\n\n# \u5bf9\u5e94\u7684 OpenAPI \u63cf\u8ff0\n{\n    "definitions": {\n        "Pet": {\n            "type": "object",\n            "properties": {\n                "name": {\n                    "type": "string",\n                },\n                "id": {\n                    "type": "integer",\n                    "format": "int64",\n                }\n            },\n            "additionalProperties": {\n                "type": "bool"\n            },\n            "required": [\n                "name"\n            ],\n        }\n    },\n    "swagger": "2.0",\n    "info": {\n        "title": "demo",\n        "version": "v1"\n    }\n}\n')),(0,r.kt)("h3",{id:"schema-\u7ee7\u627f\u5173\u7cfb"},"schema \u7ee7\u627f\u5173\u7cfb"),(0,r.kt)("h3",{id:"\u5185\u8054-schema"},"\u5185\u8054 schema"),(0,r.kt)("p",null,"OpenAPI \u652f\u6301\u5d4c\u5957\u5730\u5b9a\u4e49 schema\uff0c\u4f46 KCL \u76ee\u524d\u6682\u4e0d\u652f\u6301 schema \u7684\u5185\u8054\u3002OpenAPI \u4e2d\u5185\u8054\u5b9a\u4e49\u7684 schema \u5c06\u88ab\u8f6c\u6362\u4e3a KCL \u4e2d\u5e26\u540d\u79f0\u7684 schema\uff0c\u5176\u540d\u79f0\u7684\u547d\u540d\u89c4\u5219\u4e3a\uff1a\u5728\u8be5\u5185\u8054 schema \u7684\u4e0a\u5c42 schema \u540d\u79f0\u7684\u57fa\u7840\u4e0a\uff0c\u589e\u52a0\u76f8\u5e94\u7684\u540e\u7f00\u3002\u5728\u62fc\u63a5\u540e\u7f00\u65f6\uff0c\u6839\u636e\u5b9a\u4e49\u4e86\u8be5\u5185\u8054 schema \u7684\u5916\u5c42 OpenAPI \u5143\u7d20\u7c7b\u578b\uff0c\u540e\u7f00\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"OpenAPI \u6587\u6863\u4e2d\u5b9a\u4e49\u5185\u8054 schema \u7684\u5143\u7d20"),(0,r.kt)("th",{parentName:"tr",align:null},"KCL schema \u540d\u79f0\u62fc\u63a5\u89c4\u5219"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u67d0\u5c5e\u6027\u8282\u70b9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u589e\u52a0\u8be5\u5c5e\u6027\u8282\u70b9\u7684\u540d\u79f0\u4e3a\u540e\u7f00")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AdditionalProperties \u8282\u70b9"),(0,r.kt)("td",{parentName:"tr",align:null},'\u589e\u52a0"AdditionalProperties"\u540e\u7f00')))),(0,r.kt)("p",null,"\u6ce8\uff1aKCL \u672a\u6765\u4e5f\u53ef\u80fd\u4f1a\u652f\u6301\u5185\u8054 schema\uff0c\u5c4a\u65f6\u518d\u66f4\u65b0\u8fd9\u90e8\u5206\u8f6c\u6362\u89c4\u5219\n\u793a\u4f8b 1\uff1a\u4e0b\u4f8b\u4e2d\u7684\u6a21\u578b Deployment \u5305\u542b\u6709 kind\u3001spec \u4e24\u4e2a\u5c5e\u6027\uff0c\u5176\u4e2d deploymentSpec \u5c5e\u6027\u7684 schema \u901a\u8fc7\u5185\u8054\u7684\u65b9\u5f0f\u5b9a\u4e49\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# OpenAPI \u6587\u6863\n{\n    "definitions": {\n        "Deployment": {\n            "type": "object",\n            "properties": {\n                "kind": {\n                    "type": "string",\n                },\n                "spec": {\n                    "type": "object",\n                    "properties": {\n                        "replicas": {\n                            "type": "integer",\n                            "format": "int64"\n                        }\n                    }\n                }\n            },\n            "required": [\n                "kind",\n                "spec"\n            ],\n        }\n    },\n    "swagger": "2.0",\n    "info": {\n        "title": "demo",\n        "version": "v1"\n    }\n}\n\n# \u8f6c\u6362\u4e3a KCL Schema \u5982\u4e0b\uff1a\nschema Deployment:\n    kind: str\n    spec: DeploymentSpec\n\nschema DeploymentSpec:\n    replicas?: int\n')),(0,r.kt)("p",null,"\u793a\u4f8b 2\uff1a\u4e0b\u4f8b\u4e2d\u7684\u6a21\u578b Person \u4e2d\u9664\u56fa\u5b9a\u5c5e\u6027 name \u5916\uff0c\u8fd8\u5141\u8bb8\u5305\u542b\u989d\u5916\u7684\u5c5e\u6027\uff08additionalProperties\uff09\uff0c\u5e76\u4e14\u8fd9\u90e8\u5206\u989d\u5916\u5c5e\u6027\u7684\u5c5e\u6027\u503c\u7684 schema \u901a\u8fc7\u5185\u8054\u7684\u65b9\u5f0f\u5b9a\u4e49\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# OpenAPI \u6587\u6863\n{\n    "definitions": {\n        "Person": {\n            "type": "object",\n            "properties": {\n                "name": {\n                    "type": "string",\n                },\n            },\n            "required": [\n                "name",\n                "spec"\n            ],\n            "additionalProperties": {\n                "type": "object",\n                "properties": {\n                    "name": {\n                        "type": "string"\n                    },\n                    "description": {\n                        "type": "string"\n                    }\n                },\n                "required": [\n                    "name"\n                ]\n            },\n        }\n    },\n    "swagger": "2.0",\n    "info": {\n        "title": "demo",\n        "version": "v1"\n    }\n}\n\n# \u8f6c\u6362\u4e3a KCL Schema \u5982\u4e0b\uff1a\nschema Person:\n    name: str\n    [...str]: [PersonAdditionalProperties]\n\nschema PersonAdditionalProperties:\n    name:         str\n    description?: str\n')),(0,r.kt)("h2",{id:"kcl-\u6587\u6863"},"KCL \u6587\u6863"),(0,r.kt)("p",null,"KCL doc \u89c4\u8303\u8bf7\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/0.6.0/tools/cli/kcl/docgen"},"\u4f20\u9001\u95e8"),"\nKCL \u6587\u6863\u5305\u542b module \u6587\u6863\u3001schema \u6587\u6863\u4e24\u7c7b\uff0c\u5176\u4e2d schema \u6587\u6863\u53ef\u4ee5\u7531 OpenAPI \u8f6c\u6362\u5f97\u5230\u3002KCL schema \u6587\u6863\u5305\u542b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"schema \u63cf\u8ff0\u4fe1\u606f\uff1a\u4f4d\u4e8e schema \u58f0\u660e\u4e4b\u540e\u3001schema \u5c5e\u6027\u58f0\u660e\u4e4b\u524d\uff0c\u662f\u5bf9 schema \u7684\u603b\u4f53\u4ecb\u7ecd"),(0,r.kt)("li",{parentName:"ul"},"schema \u5c5e\u6027\u4fe1\u606f\uff1a\u4f4d\u4e8e shcema \u63cf\u8ff0\u4fe1\u606f\u4e4b\u540e\uff0c\u4ee5 Attributes + \u5206\u5272\u7ebf\u5206\u9694"),(0,r.kt)("li",{parentName:"ul"},"schema \u9644\u52a0\u4fe1\u606f\uff1a\u4f4d\u4e8e schema \u5c5e\u6027\u4fe1\u606f\u4e4b\u540e\uff0c\u4ee5 See Also + \u5206\u5272\u7ebf\u5206\u9694"),(0,r.kt)("li",{parentName:"ul"},"schema \u793a\u4f8b\u4fe1\u606f\uff1a\u4f4d\u4e8e schema \u9644\u52a0\u4fe1\u606f\u4e4b\u540e\uff0c\u4ee5 Examples + \u5206\u5272\u7ebf\u5206\u9694")),(0,r.kt)("p",null,"\u5b83\u4eec\u4e0e OpenAPI \u89c4\u8303\u7684\u5bf9\u5e94\u5173\u7cfb\u5982\u4e0b\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"KCL \u6587\u6863\u5143\u7d20"),(0,r.kt)("th",{parentName:"tr",align:null},"OpenAPI \u5143\u7d20"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"schema \u63cf\u8ff0\u4fe1\u606f"),(0,r.kt)("td",{parentName:"tr",align:null},"definitions \u8282\u70b9\u4e0b\uff0c\u6bcf\u4e2a\u6a21\u578b\u8282\u70b9\u7684 description \u5b57\u6bb5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"schema \u5c5e\u6027\u4fe1\u606f"),(0,r.kt)("td",{parentName:"tr",align:null},"properties \u8282\u70b9\u4e0b\uff0c\u6bcf\u4e2a\u5c5e\u6027\u8282\u70b9\u7684 description \u5b57\u6bb5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"schema \u9644\u52a0\u4fe1\u606f"),(0,r.kt)("td",{parentName:"tr",align:null},"definitions \u8282\u70b9\u4e0b\uff0c\u6bcf\u4e2a\u6a21\u578b\u8282\u70b9\u7684 externalDocs \u5b57\u6bb5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"schema \u793a\u4f8b\u4fe1\u606f"),(0,r.kt)("td",{parentName:"tr",align:null},"definitions \u8282\u70b9\u4e0b\uff0c\u6bcf\u4e2a\u6a21\u578b\u8282\u70b9\u7684 example \u5b57\u6bb5")))),(0,r.kt)("p",null,'\u793a\u4f8b\uff1a\n\u4e0b\u4f8b\u4e2d\u4e3a Pet \u6a21\u578b\u5b9a\u4e49\u4e86\u5176 schema \u63cf\u8ff0\u6587\u6863 "The schema Pet definition"\uff1bPet \u7684\u4e24\u4e2a\u5c5e\u6027 "name" \u548c "id" \u4e5f\u5206\u522b\u5b9a\u4e49\u4e86\u5176\u5c5e\u6027\u6587\u6863 "The name of the pet" \u53ca "The id of the pet"\uff1bPet \u7684\u9644\u52a0\u4fe1\u606f\u4e3a "Find more info here. ',(0,r.kt)("a",{parentName:"p",href:"https://petstore.swagger.io/"},"https://petstore.swagger.io/"),'"\uff1b\u6b64\u5916\uff0cPet \u6a21\u578b\u8fd8\u63d0\u4f9b\u4e86\u6a21\u578b\u5b9e\u4f8b\u7684\u793a\u4f8b\u5199\u6cd5\u3002'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# KCL schema Pet\uff0c\u91c7\u7528\u89c4\u8303\u7684 KCL \u6587\u6863\u683c\u5f0f\nschema Pet:\n    """The schema Pet definition\n\n    Attributes\n    ----------\n    name : str, default is Undefined, required\n        The name of the pet\n    id : int, default is -1, optional\n        The age of the pet\n\n    See Also\n    --------\n    Find more info here. https://petstore.swagger.io/\n\n    Examples\n    --------\n    pet = Pet {\n        name = "doggie"\n        id   = 123\n    }\n    """\n    name: str\n    id?:  int = -1\n\n# \u5bf9\u5e94\u7684 OpenAPI \u6587\u6863\n{\n    "definitions": {\n        "Pet": {\n            "description": "The schema Pet definition",\n            "type": "object",\n            "properties": {\n                "name": {\n                    "type": "string",\n                    "description": "The name of the pet"\n                },\n                "id": {\n                    "type": "integer",\n                    "format": "int64",\n                    "default": -1,\n                    "description": "The age of the pet"\n                }\n            },\n            "required": [\n                "name"\n            ],\n            "externalDocs": {\n                "description": "Find more info here",\n                "url": "https://petstore.swagger.io/"\n            },\n            "example": {\n                "name": "doggie",\n                "id": 123\n            }\n        }\n    },\n    "swagger": "2.0",\n    "info": {\n        "title": "demo",\n        "version": "v1"\n    }\n}\n')),(0,r.kt)("p",null,"\u200b"),(0,r.kt)("h2",{id:"\u57fa\u672c\u6570\u636e\u7c7b\u578b"},"\u57fa\u672c\u6570\u636e\u7c7b\u578b"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"JSON Schema type"),(0,r.kt)("th",{parentName:"tr",align:null},"swagger type"),(0,r.kt)("th",{parentName:"tr",align:null},"KCL type"),(0,r.kt)("th",{parentName:"tr",align:null},"comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"number format double"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"unsupported")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"number format float"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"int (32)"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"integer format int64"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"unsupported")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"integer format int32"),(0,r.kt)("td",{parentName:"tr",align:null},"int (32)"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string format byte"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string format int-or-string"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"str")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string format binay"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string format date"),(0,r.kt)("td",{parentName:"tr",align:null},"unsupported"),(0,r.kt)("td",{parentName:"tr",align:null},"As defined by\xa0full-date\xa0-\xa0",(0,r.kt)("a",{parentName:"td",href:"https://www.rfc-editor.org/rfc/rfc3339"},"RFC3339"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string format date-time"),(0,r.kt)("td",{parentName:"tr",align:null},"unsupported"),(0,r.kt)("td",{parentName:"tr",align:null},"As defined by\xa0date-time\xa0-\xa0",(0,r.kt)("a",{parentName:"td",href:"https://www.rfc-editor.org/rfc/rfc3339"},"RFC3339"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string format\xa0password"),(0,r.kt)("td",{parentName:"tr",align:null},"unsupported"),(0,r.kt)("td",{parentName:"tr",align:null},"for swagger:\xa0A hint to UIs to obscure input.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"datetime"),(0,r.kt)("td",{parentName:"tr",align:null},"datetime"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"openapi spec 2.0\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://swagger.io/specification/v2/"},"https://swagger.io/specification/v2/")),(0,r.kt)("li",{parentName:"ul"},"openapi spec 3.0\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://spec.openapis.org/oas/v3.1.0"},"https://spec.openapis.org/oas/v3.1.0")),(0,r.kt)("li",{parentName:"ul"},"openapi spec 3.0\uff08swagger \u7248\u672c\uff09\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://swagger.io/specification/"},"https://swagger.io/specification/")),(0,r.kt)("li",{parentName:"ul"},"openapi spec 2.0 #SchemaObject\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://swagger.io/specification/v2/#schemaObject"},"https://swagger.io/specification/v2/#schemaObject")),(0,r.kt)("li",{parentName:"ul"},"go swagger\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://goswagger.io/use/models/schemas.html"},"https://goswagger.io/use/models/schemas.html")),(0,r.kt)("li",{parentName:"ul"},"swagger data models\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://swagger.io/docs/specification/data-models/"},"https://swagger.io/docs/specification/data-models/"))))}k.isMDXComponent=!0}}]);