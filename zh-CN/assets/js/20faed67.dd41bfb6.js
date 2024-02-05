"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[24270],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>u});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=s(t),d=r,u=c["".concat(o,".").concat(d)]||c[d]||k[d]||p;return t?a.createElement(u,l(l({ref:n},m),{},{components:t})):a.createElement(u,l({ref:n},m))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=t.length,l=new Array(p);l[0]=d;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<p;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},55830:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>k,frontMatter:()=>p,metadata:()=>i,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const p={title:"\u4f7f\u7528\u914d\u7f6e\u64cd\u4f5c\u5206\u5757\u7f16\u5199\u914d\u7f6e",linkTitle:"\u4f7f\u7528\u914d\u7f6e\u64cd\u4f5c\u5206\u5757\u7f16\u5199\u914d\u7f6e",type:"docs",weight:2,description:"\u4f7f\u7528\u914d\u7f6e\u64cd\u4f5c\u5206\u5757\u7f16\u5199\u914d\u7f6e",sidebar_position:3},l=void 0,i={unversionedId:"reference/lang/codelab/collaborative",id:"version-0.5.0/reference/lang/codelab/collaborative",title:"\u4f7f\u7528\u914d\u7f6e\u64cd\u4f5c\u5206\u5757\u7f16\u5199\u914d\u7f6e",description:"\u4f7f\u7528\u914d\u7f6e\u64cd\u4f5c\u5206\u5757\u7f16\u5199\u914d\u7f6e",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.5.0/reference/lang/codelab/collaborative.md",sourceDirName:"reference/lang/codelab",slug:"/reference/lang/codelab/collaborative",permalink:"/zh-CN/docs/0.5.0/reference/lang/codelab/collaborative",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.0/reference/lang/codelab/collaborative.md",tags:[],version:"0.5.0",lastUpdatedBy:"peefy",lastUpdatedAt:1707103391,formattedLastUpdatedAt:"2024\u5e742\u67085\u65e5",sidebarPosition:3,frontMatter:{title:"\u4f7f\u7528\u914d\u7f6e\u64cd\u4f5c\u5206\u5757\u7f16\u5199\u914d\u7f6e",linkTitle:"\u4f7f\u7528\u914d\u7f6e\u64cd\u4f5c\u5206\u5757\u7f16\u5199\u914d\u7f6e",type:"docs",weight:2,description:"\u4f7f\u7528\u914d\u7f6e\u64cd\u4f5c\u5206\u5757\u7f16\u5199\u914d\u7f6e",sidebar_position:3},sidebar:"reference",previous:{title:"\u4f7f\u7528 KCL Schema \u7f16\u5199\u590d\u6742\u914d\u7f6e",permalink:"/zh-CN/docs/0.5.0/reference/lang/codelab/schema"},next:{title:"KCL \u8bed\u8a00\u89c4\u8303",permalink:"/zh-CN/docs/0.5.0/reference/lang/spec/"}},o={},s=[{value:"1. Introduction",id:"1-introduction",level:2},{value:"\u672c\u8282\u5c06\u4f1a\u5b66\u4e60",id:"\u672c\u8282\u5c06\u4f1a\u5b66\u4e60",level:3},{value:"2. \u5b9a\u4e49 Schema \u548c \u7ec4\u7ec7\u9879\u76ee\u76ee\u5f55",id:"2-\u5b9a\u4e49-schema-\u548c-\u7ec4\u7ec7\u9879\u76ee\u76ee\u5f55",level:2},{value:"Schema \u5b9a\u4e49",id:"schema-\u5b9a\u4e49",level:3},{value:"\u9879\u76ee\u76ee\u5f55",id:"\u9879\u76ee\u76ee\u5f55",level:3},{value:"3. \u901a\u8fc7 KCL \u914d\u7f6e\u64cd\u4f5c\u529f\u80fd\u521b\u5efa\u591a\u4e2a\u73af\u5883\u914d\u7f6e",id:"3-\u901a\u8fc7-kcl-\u914d\u7f6e\u64cd\u4f5c\u529f\u80fd\u521b\u5efa\u591a\u4e2a\u73af\u5883\u914d\u7f6e",level:2},{value:"\u521b\u5efa\u57fa\u7ebf\u914d\u7f6e",id:"\u521b\u5efa\u57fa\u7ebf\u914d\u7f6e",level:3},{value:"\u521b\u5efa\u591a\u91cd\u73af\u5883\u914d\u7f6e",id:"\u521b\u5efa\u591a\u91cd\u73af\u5883\u914d\u7f6e",level:3},{value:"4. \u914d\u7f6e\u7f16\u8bd1\u53c2\u6570\u548c\u6d4b\u8bd5",id:"4-\u914d\u7f6e\u7f16\u8bd1\u53c2\u6570\u548c\u6d4b\u8bd5",level:2},{value:"5. \u6700\u540e",id:"5-\u6700\u540e",level:2}],m={toc:s},c="wrapper";function k(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-introduction"},"1. Introduction"),(0,r.kt)("p",null,"KCL \u662f\u4e00\u79cd\u7b80\u5355\u6613\u7528\u7684\u914d\u7f6e\u8bed\u8a00\uff0c\u7528\u6237\u53ef\u4ee5\u7b80\u5355\u5730\u7f16\u5199\u53ef\u91cd\u590d\u4f7f\u7528\u7684\u914d\u7f6e\u4ee3\u7801\u3002"),(0,r.kt)("p",null,"\u5728\u8fd9\u4e2a\u6559\u7a0b\u4e2d\uff0c\u6211\u4eec\u5c06\u5b66\u4e60\u5982\u4f55\u4f7f\u7528 KCL \u914d\u7f6e\u64cd\u4f5c\uff08config operation\uff09\u529f\u80fd\u4ee5\u534f\u540c\u7684\u65b9\u5f0f\u7f16\u5199\u914d\u7f6e\u3002"),(0,r.kt)("h3",{id:"\u672c\u8282\u5c06\u4f1a\u5b66\u4e60"},"\u672c\u8282\u5c06\u4f1a\u5b66\u4e60"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5b9a\u4e49 schema \u5e76\u7ec4\u7ec7\u9879\u76ee\u76ee\u5f55\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u901a\u8fc7KCL\u7684\u914d\u7f6e\u64cd\u4f5c\u529f\u80fd\u521b\u5efa\u591a\u4e2a\u73af\u5883\u914d\u7f6e\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u7f16\u8bd1\u53c2\u6570\u548c\u6d4b\u8bd5\u3002")),(0,r.kt)("h2",{id:"2-\u5b9a\u4e49-schema-\u548c-\u7ec4\u7ec7\u9879\u76ee\u76ee\u5f55"},"2. \u5b9a\u4e49 Schema \u548c \u7ec4\u7ec7\u9879\u76ee\u76ee\u5f55"),(0,r.kt)("h3",{id:"schema-\u5b9a\u4e49"},"Schema \u5b9a\u4e49"),(0,r.kt)("p",null,"\u5047\u8bbe\u6211\u4eec\u60f3\u5b9a\u4e49\u5177\u6709\u67d0\u4e9b\u5c5e\u6027\u7684\u670d\u52a1\u5668\u914d\u7f6e\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u521b\u5efa\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"server.k")," \u6587\u4ef6\u6765\u521b\u5efa\u4e00\u4e2a\u7b80\u5355\u7684\u914d\u7f6e\uff0c\u6211\u4eec\u53ef\u4ee5\u586b\u5199\u4ee5\u4e0b\u4ee3\u7801\u6765\u5b9a\u4e49\u670d\u52a1\u5668\u914d\u7f6e\u7684\u53ef\u91cd\u7528\u6a21\u5f0f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import units\n\ntype Unit = units.NumberMultiplier\n\nschema Server:\n    replicas: int = 1\n    image: str\n    resource: Resource = {}\n    mainContainer: Main = {}\n    labels?: {str:str}\n    annotations?: {str:str}\n\nschema Main:\n    name: str = "main"\n    command?: [str]\n    args?: [str]\n    ports?: [Port]\n\nschema Resource:\n    cpu?: int = 1\n    memory?: Unit = 1024Mi\n    disk?: Unit = 10Gi\n\nschema Port:\n    name?: str\n    protocol: "HTTP" | "TCP"\n    port: 80 | 443\n    targetPort: int\n\n    check:\n        targetPort > 1024, "targetPort must be larger than 1024"\n')),(0,r.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d\uff0c\u6211\u4eec\u5b9a\u4e49\u4e86\u4e00\u4e2a\u540d\u4e3a Server \u7684 schema\uff0c\u8be5 schema \u8868\u793a\u7528\u6237\u5c06\u8981\u7f16\u5199\u7684\u914d\u7f6e\u7c7b\u578b\uff0c\u5176\u4e2d\u5305\u542b\u4e00\u4e9b\u57fa\u672c\u7c7b\u578b\u5c5e\u6027\uff08\u4f8b\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"replicas"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"image")," \u7b49\uff09\u548c\u4e00\u4e9b\u590d\u5408\u7c7b\u578b\u5c5e\u6027\uff08\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"resource"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"main")," \u7b49\uff09\u3002\u9664\u4e86\u4e00\u4e9b\u5728 ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/0.5.0/reference/lang/codelab/schema"},"schema codelab"),"\u4e2d\u63d0\u5230\u7684\u57fa\u672c\u7c7b\u578b\u4e4b\u5916\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d\u6709\u4e24\u79cd\u7c7b\u578b ",(0,r.kt)("inlineCode",{parentName:"p"},"Unit")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"units.NumberMultiplier"),"\u3002\u5176\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"units.NumberMultiplier")," \u8868\u793a KCL \u6570\u5b57\u5355\u4f4d\u7c7b\u578b\uff0c\u610f\u5473\u7740\u53ef\u4ee5\u5728 KCL \u6570\u5b57\u540e\u6dfb\u52a0\u81ea\u7136\u5355\u4f4d\u6216\u4e8c\u8fdb\u5236\u5355\u4f4d\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"1K")," \u8868\u793a ",(0,r.kt)("inlineCode",{parentName:"p"},"1000"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"1Ki")," \u8868\u793a ",(0,r.kt)("inlineCode",{parentName:"p"},"1024"),"\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},"Unit")," \u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"units.NumberMultiplier")," \u7684\u7c7b\u578b\u522b\u540d\uff0c\u7528\u4e8e\u7b80\u5316\u7c7b\u578b\u6ce8\u91ca\u7684\u7f16\u5199\u3002"),(0,r.kt)("h3",{id:"\u9879\u76ee\u76ee\u5f55"},"\u9879\u76ee\u76ee\u5f55"),(0,r.kt)("p",null,"\u4e3a\u4e86\u5b8c\u6210\u534f\u540c\u7684\u914d\u7f6e\u7684\u5f00\u53d1\uff0c\u6211\u4eec\u9996\u5148\u9700\u8981\u4e00\u4e2a\u914d\u7f6e\u9879\u76ee\uff0c\u5176\u4e2d\u5305\u542b\u6d4b\u8bd5\u5e94\u7528\u7a0b\u5e8f\u7684\u914d\u7f6e\u4ee5\u53ca\u4e0d\u540c\u73af\u5883\u7684\u5dee\u5f02\u5316\u914d\u7f6e\uff0c\u56e0\u6b64\u6211\u4eec\u6b63\u5728\u521b\u5efa\u4ee5\u4e0b\u9879\u76ee\u76ee\u5f55\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 appops\n\u2502   \u2514\u2500\u2500 test_app\n\u2502       \u251c\u2500\u2500 base\n\u2502       \u2502   \u2514\u2500\u2500 base.k\n\u2502       \u251c\u2500\u2500 dev\n\u2502       \u2502   \u251c\u2500\u2500 ci-test\n\u2502       \u2502   \u2502   \u2514\u2500\u2500 stdout.golden.yaml\n\u2502       \u2502   \u251c\u2500\u2500 kcl.yaml\n\u2502       \u2502   \u2514\u2500\u2500 main.k\n\u2502       \u2514\u2500\u2500 prod\n\u2502           \u251c\u2500\u2500 ci-test\n\u2502           \u2502   \u2514\u2500\u2500 stdout.golden.yaml\n\u2502           \u251c\u2500\u2500 kcl.yaml\n\u2502           \u2514\u2500\u2500 main.k\n\u251c\u2500\u2500 kcl.mod\n\u2514\u2500\u2500 pkg\n    \u2514\u2500\u2500 sever.k\n")),(0,r.kt)("p",null,"\u8be5\u9879\u76ee\u76ee\u5f55\u4e3b\u8981\u5305\u542b\u4e09\u4e2a\u90e8\u5206\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kcl.mod"),"\uff1a\u7528\u4e8e\u6807\u8bc6KCL\u9879\u76ee\u7684\u6839\u76ee\u5f55\u7684\u6587\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pkg"),"\uff1a\u4e0d\u540c\u5e94\u7528\u7a0b\u5e8f\u914d\u7f6e\u6240\u5171\u7528\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"Server Schema")," \u7ed3\u6784\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"appops"),"\uff1a\u4e0d\u540c\u5e94\u7528\u7a0b\u5e8f\u7684 Server \u914d\u7f6e\uff0c\u76ee\u524d\u4ec5\u5305\u542b\u4e00\u4e2a\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"test_app")," \u7684\u5e94\u7528\u7a0b\u5e8f\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"base"),"\uff1a\u4f9b\u6240\u6709\u73af\u5883\u4f7f\u7528\u7684\u5e94\u7528\u7a0b\u5e8f\u901a\u7528\u914d\u7f6e\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dev"),"\uff1a\u4f9b\u5f00\u53d1\u73af\u5883\u4f7f\u7528\u7684\u5e94\u7528\u7a0b\u5e8f\u914d\u7f6e\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"prod"),"\uff1a\u4f9b\u751f\u4ea7\u73af\u5883\u4f7f\u7528\u7684\u5e94\u7528\u7a0b\u5e8f\u914d\u7f6e\u3002")))),(0,r.kt)("p",null,"\u540e\u7eed\u7ae0\u8282\u5c06\u4f1a\u4ecb\u7ecd",(0,r.kt)("inlineCode",{parentName:"p"},"base.k"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"main.k"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"kcl.yaml")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"ci-test/stdout.golden.yaml")," \u7684\u542b\u4e49\u3002"),(0,r.kt)("h2",{id:"3-\u901a\u8fc7-kcl-\u914d\u7f6e\u64cd\u4f5c\u529f\u80fd\u521b\u5efa\u591a\u4e2a\u73af\u5883\u914d\u7f6e"},"3. \u901a\u8fc7 KCL \u914d\u7f6e\u64cd\u4f5c\u529f\u80fd\u521b\u5efa\u591a\u4e2a\u73af\u5883\u914d\u7f6e"),(0,r.kt)("h3",{id:"\u521b\u5efa\u57fa\u7ebf\u914d\u7f6e"},"\u521b\u5efa\u57fa\u7ebf\u914d\u7f6e"),(0,r.kt)("p",null,"\u5728\u7ec4\u7ec7\u597d\u9879\u76ee\u76ee\u5f55\u548c\u57fa\u672c\u7684\u670d\u52a1\u5668\u914d\u7f6e\u6a21\u578b\u4e4b\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u7f16\u5199\u7528\u6237\u5e94\u7528\u7a0b\u5e8f\u7684\u914d\u7f6e\u3002\u6211\u4eec\u53ef\u4ee5\u521b\u5efa\u81ea\u5df1\u7684\u6d4b\u8bd5\u5e94\u7528\u7a0b\u5e8f\u6587\u4ef6\u5939 ",(0,r.kt)("inlineCode",{parentName:"p"},"test_app"),"\uff0c\u5e76\u5c06\u5176\u653e\u7f6e\u5728\u5e94\u7528\u7a0b\u5e8f\u914d\u7f6e\u6587\u4ef6\u5939 ",(0,r.kt)("inlineCode",{parentName:"p"},"appops")," \u4e2d\u3002"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u5e94\u7528\u7a0b\u5e8f\u7684\u914d\u7f6e\uff0c\u6211\u4eec\u901a\u5e38\u5c06\u5176\u5206\u4e3a\u57fa\u672c\u914d\u7f6e\u548c\u591a\u4e2a\u73af\u5883\u7684\u5dee\u5f02\u5316\u914d\u7f6e\u5e76\u8fdb\u884c\u5408\u5e76\u3002\u901a\u8fc7 KCL \u7684\u914d\u7f6e\u5408\u5e76\u529f\u80fd\uff0c\u6211\u4eec\u53ef\u4ee5\u8f7b\u677e\u5b9e\u73b0\u8fd9\u4e00\u70b9\u3002\u5047\u8bbe\u6211\u4eec\u6709\u5f00\u53d1\u73af\u5883\u548c\u751f\u4ea7\u73af\u5883\u7684\u4e24\u4e2a\u914d\u7f6e\uff0c\u6211\u4eec\u53ef\u4ee5\u521b\u5efa\u4e09\u4e2a\u6587\u4ef6\u5939\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"base"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"prod")," \u5206\u522b\u5b58\u50a8\u57fa\u7ebf\u3001\u5f00\u53d1\u73af\u5883\u548c\u751f\u4ea7\u73af\u5883\u7684\u914d\u7f6e\u3002\u9996\u5148\uff0c\u6211\u4eec\u7f16\u5199 ",(0,r.kt)("inlineCode",{parentName:"p"},"base/base.k")," \u7684\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import pkg\n\nserver: pkg.Server {\n    # \u8bbe\u7f6e\u955c\u50cf\u7684\u503c\u4e3a "nginx:1.14.2"\n    image = "nginx:1.14.2"\n    # \u6dfb\u52a0 app label\n    labels.app = "test_app"\n    # \u6dfb\u52a0\u4e00\u4e2amainContainer\u914d\u7f6e\uff0c\u5b83\u7684\u7aef\u53e3\u662f [{protocol = "HTTP", port = 80, targetPort = 1100}]\n    mainContainer.ports = [{\n        protocol = "HTTP"\n        port = 80\n        targetPort = 1100\n    }]\n}\n')),(0,r.kt)("p",null,"\u6b63\u5982\u4e0a\u8ff0\u4ee3\u7801\u4e2d\u6240\u793a\uff0c\u6211\u4eec\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," \u5173\u952e\u5b57\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"base.k")," \u4e2d\u5bfc\u5165\u653e\u7f6e\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"pkg")," \u4e0b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Server")," schema\uff0c\u5e76\u4f7f\u7528\u5b83\u5b9e\u4f8b\u5316\u4e00\u4e2a\u540d\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"server")," \u7684\u914d\u7f6e\uff0c\u5728\u5176\u4e2d\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"image")," \u5c5e\u6027\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},'"nginx:1.14.2"'),"\uff0c\u5e76\u6dfb\u52a0\u4e00\u4e2a\u5e26\u6709\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"test_app")," \u7684\u6807\u7b7e ",(0,r.kt)("inlineCode",{parentName:"p"},"app"),"\u3002\u6b64\u5916\uff0c\u6211\u4eec\u8fd8\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"ports")," \u5c5e\u6027\u4e2d\u6dfb\u52a0\u4e86\u4e3b\u5bb9\u5668 ",(0,r.kt)("inlineCode",{parentName:"p"},"mainContainer")," \u7684\u914d\u7f6e\uff0c\u5176\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},'[{protocol = "HTTP", port = 80, targetPort = 1100}]'),"\u3002"),(0,r.kt)("p",null,"KCL \u547d\u4ee4:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kcl appops/test_app/base/base.k\n")),(0,r.kt)("p",null,"\u8f93\u51fa:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"server:\n  replicas: 1\n  image: nginx:1.14.2\n  resource:\n    cpu: 1\n    memory: 1073741824\n    disk: 10737418240\n  mainContainer:\n    name: main\n    ports:\n      - protocol: HTTP\n        port: 80\n        targetPort: 1100\n  labels:\n    app: test_app\n")),(0,r.kt)("p",null,"\u5f53\u524d\uff0c\u6211\u4eec\u5df2\u7ecf\u6709\u4e86\u4e00\u4e2a\u57fa\u7ebf\u914d\u7f6e\u3002"),(0,r.kt)("h3",{id:"\u521b\u5efa\u591a\u91cd\u73af\u5883\u914d\u7f6e"},"\u521b\u5efa\u591a\u91cd\u73af\u5883\u914d\u7f6e"),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u5c06\u914d\u7f6e\u4e00\u4e2a\u5dee\u5f02\u5316\u7684\u591a\u73af\u5883\u914d\u7f6e\u3002\u9996\u5148\u5047\u8bbe\u6211\u4eec\u60f3\u5728\u5f00\u53d1\u73af\u5883\u4e2d\u4f7f\u7528\u81ea\u5df1\u7684\u4e34\u65f6\u955c\u50cf ",(0,r.kt)("inlineCode",{parentName:"p"},"nginx:1.14.2-dev"),"\uff0c\u7136\u540e\u4f7f\u7528\u5b83\u6765\u8986\u76d6\u57fa\u51c6\u4e2d\u7684\u670d\u52a1\u5668\u914d\u7f6e\uff0c\u6211\u4eec\u53ef\u4ee5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"dev/main.k")," \u4e2d\u7f16\u5199\u4ee5\u4e0b\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import pkg\n\nserver: pkg.Server {\n    # \u8986\u76d6 base \u914d\u7f6e\u4e2d\u7684\u58f0\u660e\u7684\u955c\u50cf\n    image = "nginx:1.14.2-dev"\n}\n')),(0,r.kt)("p",null,"KCL \u547d\u4ee4:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kcl appops/test_app/base/base.k appops/test_app/dev/main.k\n")),(0,r.kt)("p",null,"\u8f93\u51fa:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"server:\n  replicas: 1\n  image: nginx:1.14.2-dev\n  resource:\n    cpu: 1\n    memory: 1073741824\n    disk: 10737418240\n  mainContainer:\n    name: main\n    ports:\n      - protocol: HTTP\n        port: 80\n        targetPort: 1100\n  labels:\n    app: test_app\n")),(0,r.kt)("p",null,"\u53ef\u4ee5\u770b\u51fa\u8f93\u51fa\u7684 YAML \u6587\u4ef6\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"image")," \u5b57\u6bb5\u88ab\u8986\u76d6\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"nginx:1.14.2-dev"),"\u3002\u5047\u8bbe\u6211\u4eec\u8fd8\u60f3\u5c06\u4e00\u4e2a\u5177\u6709\u952e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"env"),"\uff0c\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," \u7684\u6807\u7b7e\u6dfb\u52a0\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," \u73af\u5883\u4e2d\uff0c\u6211\u4eec\u5c06\u4ee5\u4e0b\u4ee3\u7801\u6dfb\u52a0\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"dev/main.k")," \u4e2d\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import pkg\n\nserver: pkg.Server {\n    # \u8986\u76d6 base \u914d\u7f6e\u4e2d\u7684\u58f0\u660e\u7684\u955c\u50cf\n    image = "nginx:1.14.2-dev"\n    # \u5c06\u65b0\u6807\u7b7e env \u5408\u5e76\u5230 base \u6807\u7b7e\u4e2d\n    labels.env = "dev"\n}\n')),(0,r.kt)("p",null,"KCL \u547d\u4ee4:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kcl appops/test_app/base/base.k appops/test_app/dev/main.k\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"server:\n  replicas: 1\n  image: nginx:1.14.2-dev\n  resource:\n    cpu: 1\n    memory: 1073741824\n    disk: 10737418240\n  mainContainer:\n    name: main\n    ports:\n      - protocol: HTTP\n        port: 80\n        targetPort: 1100\n  labels:\n    app: test_app\n    env: dev\n")),(0,r.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u8f93\u51fa\u7684 YAML \u6587\u4ef6\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"labels")," \u5b57\u6bb5\u4e2d\u6709\u4e24\u4e2a\u6807\u7b7e\u3002"),(0,r.kt)("p",null,"\u6b64\u5916\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"+=")," \u8fd0\u7b97\u7b26\u5c06\u65b0\u503c\u6dfb\u52a0\u5230\u5217\u8868\u7c7b\u578b\u5c5e\u6027\u4e2d\uff0c\u4f8b\u5982\u5728\u57fa\u51c6\u73af\u5883\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"mainContainer.ports")," \u914d\u7f6e\uff0c\u7ee7\u7eed\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"dev/main.k")," \u4e2d\u7684\u4ee3\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import pkg\n\nserver: pkg.Server {\n    # \u8986\u76d6 base \u914d\u7f6e\u4e2d\u7684\u58f0\u660e\u7684\u955c\u50cf\n    image = "nginx:1.14.2-dev"\n    # \u5c06\u65b0\u6807\u7b7e env \u5408\u5e76\u5230 base \u6807\u7b7e\u4e2d\n    labels.env = "dev"\n    # \u5728 base ports\u914d\u7f6e\u4e2d\u6dfb\u52a0\u4e00\u4e2a port\n    mainContainer.ports += [{\n        protocol = "TCP"\n        port = 443\n        targetPort = 1100\n    }]\n}\n')),(0,r.kt)("p",null,"KCL \u547d\u4ee4:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kcl appops/test_app/base/base.k appops/test_app/dev/main.k\n")),(0,r.kt)("p",null,"\u8f93\u51fa:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"server:\n  replicas: 1\n  image: nginx:1.14.2-dev\n  resource:\n    cpu: 1\n    memory: 1073741824\n    disk: 10737418240\n  mainContainer:\n    name: main\n    ports:\n      - protocol: HTTP\n        port: 80\n        targetPort: 1100\n      - protocol: TCP\n        port: 443\n        targetPort: 1100\n  labels:\n    app: test_app\n    env: dev\n")),(0,r.kt)("p",null,"\u4f7f\u7528\u76f8\u540c\u7684\u65b9\u6cd5\uff0c\u6211\u4eec\u53ef\u4ee5\u6784\u5efa\u751f\u4ea7\u914d\u7f6e\uff0c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"dev/main.k")," \u6587\u4ef6\u4e2d\u7f16\u5199\u4ee3\u7801\uff0c\u5e76\u4e3a\u5176\u6dfb\u52a0\u6807\u7b7e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import pkg\n\nserver: pkg.Server {\n    # \u5c06\u65b0\u6807\u7b7e env \u5408\u5e76\u5230 base \u6807\u7b7e\u4e2d\n    labels.env = "prod"\n}\n')),(0,r.kt)("p",null,"KCL \u547d\u4ee4:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kcl appops/test_app/base/base.k appops/test_app/prod/main.k\n")),(0,r.kt)("p",null,"\u8f93\u51fa:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"server:\n  replicas: 1\n  image: nginx:1.14.2\n  resource:\n    cpu: 1\n    memory: 1073741824\n    disk: 10737418240\n  mainContainer:\n    name: main\n    ports:\n      - protocol: HTTP\n        port: 80\n        targetPort: 1100\n  labels:\n    app: test_app\n    env: prod\n")),(0,r.kt)("h2",{id:"4-\u914d\u7f6e\u7f16\u8bd1\u53c2\u6570\u548c\u6d4b\u8bd5"},"4. \u914d\u7f6e\u7f16\u8bd1\u53c2\u6570\u548c\u6d4b\u8bd5"),(0,r.kt)("p",null,"\u5728\u524d\u9762\u7684\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u901a\u8fc7\u4ee3\u7801\u6784\u5efa\u4e86\u4e00\u4e2a\u591a\u73af\u5883\u914d\u7f6e\u3002\u53ef\u4ee5\u770b\u51fa\u4e0d\u540c\u73af\u5883\u7684 KCL \u547d\u4ee4\u884c\u7f16\u8bd1\u53c2\u6570\u76f8\u4f3c\uff0c\u56e0\u6b64\u6211\u4eec\u53ef\u4ee5\u5c06\u8fd9\u4e9b\u7f16\u8bd1\u53c2\u6570\u914d\u7f6e\u5230\u4e00\u4e2a\u6587\u4ef6\u4e2d\uff0c\u5e76\u5c06\u5176\u8f93\u5165\u5230 KCL \u547d\u4ee4\u884c\u4e2d\u8fdb\u884c\u8c03\u7528\u3002\u8bf7\u5c06\u4ee5\u4e0b\u4ee3\u7801\u914d\u7f6e\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"dev/kcl.yaml"),"\u4e2d\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"kcl_cli_configs:\n  files:\n    - ../base/base.k\n    - main.k\n  output: ./ci-test/stdout.golden.yaml\n")),(0,r.kt)("p",null,"\u7136\u540e\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5728\u5f00\u53d1\u73af\u5883\u4e2d\u7f16\u8bd1\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd appops/test_app/dev && kcl -Y ./kcl.yaml\n")),(0,r.kt)("p",null,"\u6b64\u5916\uff0c\u6211\u4eec\u5df2\u7ecf\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"dev/kcl.yaml")," \u4e2d\u914d\u7f6e\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"output")," \u5b57\u6bb5\uff0c\u4ee5\u5c06 YAML \u8f93\u51fa\u5230\u6587\u4ef6\uff0c\u4ee5\u4fbf\u8fdb\u884c\u540e\u7eed\u914d\u7f6e\u5206\u53d1\u6216\u6d4b\u8bd5\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u904d\u5386\u6bcf\u4e2a\u73af\u5883\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl.yaml")," \u6784\u5efa\uff0c\u5e76\u5c06\u5176\u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"./ci-test/stdout.golden.yaml")," \u8fdb\u884c\u6bd4\u8f83\uff0c\u53ef\u4ee5\u9a8c\u8bc1\u5e94\u7528\u7a0b\u5e8f\u7684\u914d\u7f6e\u662f\u5426\u7b26\u5408\u9884\u671f\u3002"),(0,r.kt)("h2",{id:"5-\u6700\u540e"},"5. \u6700\u540e"),(0,r.kt)("p",null,"\u606d\u559c\uff01"),(0,r.kt)("p",null,"\u6211\u4eec\u5df2\u7ecf\u5b8c\u6210\u4e86\u5173\u4e8e KCL \u7684\u7b2c\u4e09\u8bfe\u3002"))}k.isMDXComponent=!0}}]);