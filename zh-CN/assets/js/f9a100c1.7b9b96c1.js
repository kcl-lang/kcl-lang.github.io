"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[16772],{3905:(e,n,t)=>{t.d(n,{Zo:()=>i,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):m(m({},n),e)),t},i=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),c=s(t),h=r,d=c["".concat(o,".").concat(h)]||c[h]||u[h]||l;return t?a.createElement(d,m(m({ref:n},i),{},{components:t})):a.createElement(d,m({ref:n},i))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,m=new Array(l);m[0]=h;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[c]="string"==typeof e?e:r,m[1]=p;for(var s=2;s<l;s++)m[s]=t[s];return a.createElement.apply(null,m)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},9485:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>m,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const l={title:"\u4f7f\u7528 KCL Schema \u7f16\u5199\u590d\u6742\u914d\u7f6e",linkTitle:"\u4f7f\u7528 KCL Schema \u7f16\u5199\u590d\u6742\u914d\u7f6e",type:"docs",weight:2,description:"\u4f7f\u7528 KCL Schema \u7f16\u5199\u590d\u6742\u914d\u7f6e",sidebar_position:2},m=void 0,p={unversionedId:"reference/lang/codelab/schema",id:"reference/lang/codelab/schema",title:"\u4f7f\u7528 KCL Schema \u7f16\u5199\u590d\u6742\u914d\u7f6e",description:"\u4f7f\u7528 KCL Schema \u7f16\u5199\u590d\u6742\u914d\u7f6e",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/reference/lang/codelab/schema.md",sourceDirName:"reference/lang/codelab",slug:"/reference/lang/codelab/schema",permalink:"/zh-CN/docs/next/reference/lang/codelab/schema",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/reference/lang/codelab/schema.md",tags:[],version:"current",lastUpdatedBy:"peefy",lastUpdatedAt:1689687201,formattedLastUpdatedAt:"2023\u5e747\u670818\u65e5",sidebarPosition:2,frontMatter:{title:"\u4f7f\u7528 KCL Schema \u7f16\u5199\u590d\u6742\u914d\u7f6e",linkTitle:"\u4f7f\u7528 KCL Schema \u7f16\u5199\u590d\u6742\u914d\u7f6e",type:"docs",weight:2,description:"\u4f7f\u7528 KCL Schema \u7f16\u5199\u590d\u6742\u914d\u7f6e",sidebar_position:2},sidebar:"reference",previous:{title:"\u4f7f\u7528 KCL \u7f16\u5199\u7b80\u5355\u914d\u7f6e",permalink:"/zh-CN/docs/next/reference/lang/codelab/simple"},next:{title:"\u4f7f\u7528\u914d\u7f6e\u64cd\u4f5c\u5206\u5757\u7f16\u5199\u914d\u7f6e",permalink:"/zh-CN/docs/next/reference/lang/codelab/collaborative"}},o={},s=[{value:"1. \u4ecb\u7ecd",id:"1-\u4ecb\u7ecd",level:2},{value:"\u672c\u8282\u5c06\u4f1a\u5b66\u4e60",id:"\u672c\u8282\u5c06\u4f1a\u5b66\u4e60",level:3},{value:"2. \u7f16\u5199\u7b80\u5355\u7684 Schema",id:"2-\u7f16\u5199\u7b80\u5355\u7684-schema",level:2},{value:"3. Enhance Schema as Needed",id:"3-enhance-schema-as-needed",level:2},{value:"4. \u57fa\u4e8e\u7b80\u5355 Schema \u521b\u5efa\u914d\u7f6e",id:"4-\u57fa\u4e8e\u7b80\u5355-schema-\u521b\u5efa\u914d\u7f6e",level:2},{value:"5. \u5728 Schema \u4e2d\u7f16\u5199\u66f4\u4e3a\u590d\u6742\u7684\u903b\u8f91",id:"5-\u5728-schema-\u4e2d\u7f16\u5199\u66f4\u4e3a\u590d\u6742\u7684\u903b\u8f91",level:2},{value:"6. \u901a\u8fc7 Schema \u7ec4\u5408\u521b\u5efa\u65b0 Schema",id:"6-\u901a\u8fc7-schema-\u7ec4\u5408\u521b\u5efa\u65b0-schema",level:2},{value:"7. \u4f7f\u7528 dict/map \u521b\u5efa\u5177\u6709\u6df1\u5ea6\u5d4c\u5957 schema \u7684\u914d\u7f6e",id:"7-\u4f7f\u7528-dictmap-\u521b\u5efa\u5177\u6709\u6df1\u5ea6\u5d4c\u5957-schema-\u7684\u914d\u7f6e",level:2},{value:"8. \u58f0\u660e Schema \u9a8c\u8bc1\u89c4\u5219",id:"8-\u58f0\u660e-schema-\u9a8c\u8bc1\u89c4\u5219",level:2},{value:"9. \u901a\u8fc7 Schema \u7ee7\u627f\u521b\u5efa\u65b0 Schema",id:"9-\u901a\u8fc7-schema-\u7ee7\u627f\u521b\u5efa\u65b0-schema",level:2},{value:"10. Create New Schema by Multiple Protocol and Mixin Schemas Inheritance",id:"10-create-new-schema-by-multiple-protocol-and-mixin-schemas-inheritance",level:2},{value:"11. \u5171\u4eab\u548c\u91cd\u7528 Schema",id:"11-\u5171\u4eab\u548c\u91cd\u7528-schema",level:2},{value:"12. \u6700\u540e",id:"12-\u6700\u540e",level:2}],i={toc:s},c="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,a.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-\u4ecb\u7ecd"},"1. \u4ecb\u7ecd"),(0,r.kt)("p",null,"KCL \u662f\u4e00\u79cd\u7b80\u5355\u6613\u7528\u7684\u914d\u7f6e\u8bed\u8a00\uff0c\u7528\u6237\u53ef\u4ee5\u7b80\u5355\u5730\u7f16\u5199\u53ef\u91cd\u7528\u7684\u914d\u7f6e\u4ee3\u7801\u3002"),(0,r.kt)("p",null,"\u5728\u672c\u8282\u6559\u7a0b\u4e2d\uff0c\u6211\u4eec\u5c06\u5b66\u4e60\u5982\u4f55\u4f7f\u7528 KCL \u7f16\u5199\u5b9a\u5236\u914d\u7f6e\uff0c\u8fd9\u6837\u6211\u4eec\u5c31\u53ef\u4ee5\u5b9a\u4e49\u4e00\u4e2a\u67b6\u6784\u5e76\u4ee5\u534f\u4f5c\u65b9\u5f0f\u7f16\u5199\u914d\u7f6e\u3002"),(0,r.kt)("h3",{id:"\u672c\u8282\u5c06\u4f1a\u5b66\u4e60"},"\u672c\u8282\u5c06\u4f1a\u5b66\u4e60"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5b9a\u4e49\u4e00\u4e2a\u7b80\u5355\u7684 schema"),(0,r.kt)("li",{parentName:"ol"},"\u4e3a schema \u5b57\u6bb5\u8bbe\u7f6e\u9ed8\u8ba4\u7684\u4e0d\u53ef\u53d8\u503c"),(0,r.kt)("li",{parentName:"ol"},"\u57fa\u4e8e\u7b80\u5355\u7684 schema \u521b\u5efa\u914d\u7f6e"),(0,r.kt)("li",{parentName:"ol"},"\u5728 schema \u4e2d\u7f16\u5199\u590d\u6742\u7684\u903b\u8f91"),(0,r.kt)("li",{parentName:"ol"},"\u901a\u8fc7 schema \u7684\u7ec4\u5408\u521b\u5efa\u65b0\u7684 schema"),(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528 dict/map \u521b\u5efa\u5177\u6709\u6df1\u5ea6\u5d4c\u5957 schema \u7684\u914d\u7f6e"),(0,r.kt)("li",{parentName:"ol"},"\u901a\u8fc7 schema \u7ee7\u627f\u521b\u5efa\u65b0\u7684 schema"),(0,r.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u591a\u4e2a mixin schema \u521b\u5efa\u65b0\u7684 schema"),(0,r.kt)("li",{parentName:"ol"},"\u58f0\u660e schema \u9a8c\u8bc1\u89c4\u5219"),(0,r.kt)("li",{parentName:"ol"},"\u914d\u7f6e schema \u7684\u8f93\u51fa\u5e03\u5c40"),(0,r.kt)("li",{parentName:"ol"},"\u5171\u4eab\u548c\u91cd\u7528 schema")),(0,r.kt)("h2",{id:"2-\u7f16\u5199\u7b80\u5355\u7684-schema"},"2. \u7f16\u5199\u7b80\u5355\u7684 Schema"),(0,r.kt)("p",null,"\u5047\u8bbe\u6211\u4eec\u5e0c\u671b\u5b9a\u4e49\u4e00\u4e2a\u5177\u6709\u7279\u5b9a\u5c5e\u6027\u7684\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u521b\u5efa\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"my_config.k")," \u6587\u4ef6\u6765\u521b\u5efa\u4e00\u4e2a\u7b80\u5355\u7684\u914d\u7f6e\u3002\u6211\u4eec\u53ef\u4ee5\u6309\u4ee5\u4e0b\u65b9\u5f0f\u586b\u5199\u4e0b\u9762\u7684\u4ee3\u7801\uff0c\u5b9a\u4e49\u4e00\u4e2a\u53ef\u91cd\u590d\u4f7f\u7528\u7684\u90e8\u7f72\u914d\u7f6e\u7684 schema\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"schema Deployment:\n    name: str\n    cpu: int\n    memory: int\n    image: str\n    service: str\n    replica: int\n    command: [str]\n    labels: {str:str}\n")),(0,r.kt)("p",null,"\u5728\u4e0a\u8ff0\u4ee3\u7801\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"cpu")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"memory")," \u88ab\u5b9a\u4e49\u4e3a int \u503c\uff1b",(0,r.kt)("inlineCode",{parentName:"p"},"name"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"image")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"service")," \u662f\u5b57\u7b26\u4e32\uff1b",(0,r.kt)("inlineCode",{parentName:"p"},"command")," \u662f\u7531\u5b57\u7b26\u4e32\u6784\u6210\u7684\u5217\u8868\uff1b",(0,r.kt)("inlineCode",{parentName:"p"},"labels")," \u662f\u5b57\u5178\u7c7b\u578b\uff0c\u5176\u952e\u548c\u503c\u7684\u7c7b\u578b\u5747\u4e3a\u5b57\u7b26\u4e32\u3002"),(0,r.kt)("p",null,"\u53e6\u5916\uff0c\u6bcf\u4e2a\u5c5e\u6027\u90fd",(0,r.kt)("strong",{parentName:"p"},"\u5fc5\u987b"),"\u88ab\u8d4b\u4e88\u975e None \u503c\u4f5c\u4e3a schema \u5b9e\u4f8b\uff0c\u9664\u975e\u5b83\u88ab\u6807\u8bb0\u95ee\u53f7 ",(0,r.kt)("strong",{parentName:"p"},"?")," \u800c\u4f5c\u4e3a\u53ef\u9009\u53c2\u6570\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"schema Deployment:\n    name: str\n    cpu: int\n    memory: int\n    image: str\n    service: str\n    replica: int\n    command: [str]\n    labels?: {str:str}  # labels \u662f\u4e00\u4e2a\u53ef\u9009\u7684\u53c2\u6570\n")),(0,r.kt)("p",null,"\u5f53\u5b58\u5728\u7ee7\u627f\u5173\u7cfb\u65f6\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u5728\u57fa schema \u4e2d\u8be5\u5c5e\u6027\u4e3a\u53ef\u9009\uff08optional\uff09\u53c2\u6570\uff0c\u5219\u5728\u5b50 schema \u4e2d\u5b83\u5e94\u8be5\u662f\u53ef\u9009\u7684\uff08optional\uff09\u6216\u5fc5\u9700\u7684\uff08required\uff09\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u5728\u57fa schema \u4e2d\u8be5\u5c5e\u6027\u4e3a\u5fc5\u9700\uff08required\uff09\u5c5e\u6027\uff0c\u5219\u5728\u5b50 schema \u4e2d\u5b83\u9700\u8981\u662f\u5fc5\u9700\u7684\uff08required\uff09\u3002")),(0,r.kt)("h2",{id:"3-enhance-schema-as-needed"},"3. Enhance Schema as Needed"),(0,r.kt)("p",null,"Suppose we need to set default values to service and replica, we can make them as below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'schema Deployment:\n    name: str\n    cpu: int\n    memory: int\n    image: str\n    service: str = "my-service"  # defaulting\n    replica: int = 1  # defaulting\n    command: [str]\n    labels?: {str:str}  # labels is an optional attribute \n')),(0,r.kt)("p",null,"And then we can set the service type annotation as the string literal type to make it immutable:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'schema Deployment:\n    name: str\n    cpu: int\n    memory: int\n    image: str\n    service: "my-service" = "my-service"\n    replica: int = 1\n    command: [str]\n    labels?: {str:str}\n')),(0,r.kt)("p",null,"In the schema, type hint is a ",(0,r.kt)("inlineCode",{parentName:"p"},"must"),", for example we can define cpu as ",(0,r.kt)("inlineCode",{parentName:"p"},"cpu: int"),"."),(0,r.kt)("p",null,"Specially, we can define a string-interface dict as ",(0,r.kt)("inlineCode",{parentName:"p"},"{str:}"),", and in case we want to define an object or interface, just define as ",(0,r.kt)("inlineCode",{parentName:"p"},"{:}"),"."),(0,r.kt)("h2",{id:"4-\u57fa\u4e8e\u7b80\u5355-schema-\u521b\u5efa\u914d\u7f6e"},"4. \u57fa\u4e8e\u7b80\u5355 Schema \u521b\u5efa\u914d\u7f6e"),(0,r.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u6709\u4e86\u4e00\u4e2a\u7b80\u5355\u7684 schema \u5b9a\u4e49\uff0c\u6211\u4eec\u53ef\u4ee5\u7528\u5b83\u6765\u5b9a\u4e49\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'nginx = Deployment {\n    name = "my-nginx"\n    cpu = 256\n    memory = 512\n    image = "nginx:1.14.2"\n    command = ["nginx"]\n    labels = {\n        run = "my-nginx"\n        env = "pre-prod"\n    }\n}\n')),(0,r.kt)("p",null,"\u4f7f\u7528\u4ee5\u4e0b KCL \u547d\u4ee4\u8fd0\u884c\uff0c\u6211\u4eec\u5e94\u8be5\u80fd\u591f\u770b\u5230\u751f\u6210\u7684 yaml \u6587\u4ef6\u4f5c\u4e3a\u8f93\u51fa\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("p",null,"KCL \u547d\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"    kcl my_config.k\n")),(0,r.kt)("p",null,"\u6807\u51c6\u8f93\u51fa:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"nginx:\n  name: my-nginx\n  cpu: 256\n  memory: 512\n  image: nginx:1.14.2\n  service: my-service\n  replica: 1\n  command:\n  - nginx\n  labels:\n    run: my-nginx\n    env: pre-prod\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6709\u5173\u96c6\u5408\u6570\u636e\u7c7b\u578b\u548c\u5757\u7684\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u67e5\u770b\u624b\u518c\u548c\u89c4\u8303\u3002")),(0,r.kt)("p",null,"\u6b64\u5916\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u914d\u7f6e\u9009\u62e9\u5668\u8868\u8fbe\u5f0f"),"\uff08config selector expressions\uff09\u53ef\u4ee5\u7528\u4e8e\u521d\u59cb\u5316 schema \u5b9e\u4f8b\uff0c\u6211\u4eec\u53ef\u4ee5\u5ffd\u7565\u914d\u7f6e\u8868\u8fbe\u5f0f\u4e2d\u884c\u672b\u7684\u9017\u53f7\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'nginx = Deployment {\n    name = "my-nginx"\n    cpu = 256\n    memory = 512\n    image = "nginx:1.14.2"\n    command = ["nginx"]  # \u5ffd\u7565\u884c\u5c3e\u7684\u9017\u53f7 \n    labels.run = "my-nginx" # schema \u4e2d\u7684\u5b57\u5178\u53d8\u91cf\u53ef\u4ee5\u4f7f\u7528\u9009\u62e9\u5668\u8868\u8fbe\u5f0f \n    labels.env = "pre-prod" # schema \u4e2d\u7684\u5b57\u5178\u53d8\u91cf\u53ef\u4ee5\u4f7f\u7528\u9009\u62e9\u5668\u8868\u8fbe\u5f0f \n}\n')),(0,r.kt)("h2",{id:"5-\u5728-schema-\u4e2d\u7f16\u5199\u66f4\u4e3a\u590d\u6742\u7684\u903b\u8f91"},"5. \u5728 Schema \u4e2d\u7f16\u5199\u66f4\u4e3a\u590d\u6742\u7684\u903b\u8f91"),(0,r.kt)("p",null,"\u5047\u8bbe\u6211\u4eec\u6709\u4e00\u4e9bschema\u903b\u8f91\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u5b83\u5305\u88c5\u8fdb schema \u4e2d\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'schema Deployment[priority]:\n    name: str\n    cpu: int = _cpu\n    memory: int = _cpu * 2\n    image: str\n    service: "my-service" = "my-service"\n    replica: int = 1\n    command: [str]\n    labels?: {str:str}\n\n    _cpu = 2048\n    if priority == 1:\n        _cpu = 256\n    elif priority == 2:\n        _cpu = 512\n    elif priority == 3:\n        _cpu = 1024\n    else:\n        _cpu = 2048\n')),(0,r.kt)("p",null,"\u73b0\u5728\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u521b\u5efa schema \u5b9e\u4f8b\u6765\u5b9a\u4e49\u914d\u7f6e\uff0c\u5e76\u5c06\u4f18\u5148\u7ea7\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u7ed9\u6a21\u5f0f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'nginx = Deployment(priority=2) {\n    name = "my-nginx"\n    image = "nginx:1.14.2"\n    command = ["nginx"]\n    labels.run = "my-nginx"\n    labels.env = "pre-prod"\n}\n')),(0,r.kt)("p",null,"\u4f7f\u7528\u4ee5\u4e0b KCL \u547d\u4ee4\u8fd0\u884c\uff0c\u6211\u4eec\u5e94\u8be5\u80fd\u591f\u770b\u5230\u751f\u6210\u7684 yaml \u6587\u4ef6\u4f5c\u4e3a\u8f93\u51fa\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("p",null,"KCL \u547d\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"kcl my_config.k\n")),(0,r.kt)("p",null,"\u6807\u51c6\u8f93\u51fa:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"nginx:\n  name: my-nginx\n  cpu: 512\n  memory: 1024\n  image: nginx:1.14.2\n  service: my-service\n  replica: 1\n  command:\n  - nginx\n  labels:\n    run: my-nginx\n    env: pre-prod\n")),(0,r.kt)("h2",{id:"6-\u901a\u8fc7-schema-\u7ec4\u5408\u521b\u5efa\u65b0-schema"},"6. \u901a\u8fc7 Schema \u7ec4\u5408\u521b\u5efa\u65b0 Schema"),(0,r.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u60f3\u8981\u5b9a\u4e49\u4e00\u4e2a\u8be6\u7ec6\u7684 schema\uff0c\u5305\u62ec\u670d\u52a1\uff08service\uff09\u548c\u5377\uff08volumes\uff09\uff0c\u6211\u4eec\u53ef\u4ee5\u6309\u4ee5\u4e0b\u65b9\u5f0f\u8fdb\u884c\u64cd\u4f5c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'schema Deployment[priority]:\n    name: str\n    cpu: int = _cpu\n    memory: int = _cpu * 2\n    volumes?: [Volume]\n    image: str\n    service?: Service\n    replica: int = 1\n    command: [str]\n    labels?: {str:str}\n\n    if priority == 1:\n        _cpu = 256\n    elif priority == 2:\n        _cpu = 512\n    elif priority == 3:\n        _cpu = 1024\n    else:\n        _cpu = 2048\n\nschema Port:\n    name: str\n    protocol: str\n    port: int\n    targetPort: int\n\nschema Service:\n    name: "my-service" = "my-service"\n    ports: [Port]\n\nschema Volume:\n    name: str\n    mountPath: str\n    hostPath: str\n')),(0,r.kt)("p",null,"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0cDeployment \u7531 Service \u548c\u4e00\u7cfb\u5217 Volume \u7ec4\u6210\uff0c\u800c Service \u53c8\u7531\u4e00\u7cfb\u5217 Port \u7ec4\u6210\u3002"),(0,r.kt)("h2",{id:"7-\u4f7f\u7528-dictmap-\u521b\u5efa\u5177\u6709\u6df1\u5ea6\u5d4c\u5957-schema-\u7684\u914d\u7f6e"},"7. \u4f7f\u7528 dict/map \u521b\u5efa\u5177\u6709\u6df1\u5ea6\u5d4c\u5957 schema \u7684\u914d\u7f6e"),(0,r.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u6709\u4e00\u4e2a\u65b0\u7684 Deployment schema\uff0c\u4f46\u6211\u4eec\u53ef\u80fd\u4f1a\u6ce8\u610f\u5230\uff0c\u5b83\u5305\u542b\u591a\u5c42\u5d4c\u5957\u7684\u7ed3\u6784\uff0c\u5728\u590d\u6742\u7684\u7ed3\u6784\u5b9a\u4e49\u4e2d\uff0c\u8fd9\u662f\u975e\u5e38\u5e38\u89c1\u7684\uff0c\u6211\u4eec\u901a\u5e38\u5fc5\u987b\u7f16\u5199\u547d\u4ee4\u5f0f\u7ec4\u88c5\u4ee3\u7801\u6765\u751f\u6210\u6700\u7ec8\u7ed3\u6784\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528 KCL\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u7b80\u5355\u7684\u5b57\u5178\u58f0\u660e\u521b\u5efa\u914d\u7f6e\uff0c\u5e76\u5177\u6709\u5b8c\u6574\u7684 schema \u521d\u59cb\u5316\u548c\u9a8c\u8bc1\u529f\u80fd\u3002\u4f8b\u5982\uff0c\u6211\u4eec\u53ef\u4ee5\u6309\u7167\u4ee5\u4e0b\u65b9\u5f0f\u4f7f\u7528\u65b0\u7684 Deployment schema\u7b80\u5355\u5730\u914d\u7f6e nginx\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'nginx = Deployment(priority=2) {\n    name = "my-nginx"\n    image = "nginx:1.14.2"\n    volumes = [Volume {\n        name = "mydir"\n        mountPath = "/test-pd"\n        hostPath = "/data"\n    }]\n    command = ["nginx"]\n    labels.run = "my-nginx"\n    labels.env = "pre-prod"\n    service.ports = [Port {\n        name = "http"\n        protocol = "TCP"\n        port = 80\n        targetPort = 9376\n    }]\n}\n')),(0,r.kt)("p",null,"\u4f7f\u7528\u4ee5\u4e0b KCL \u547d\u4ee4\u8fd0\u884c\uff0c\u6211\u4eec\u5e94\u8be5\u80fd\u591f\u770b\u5230\u751f\u6210\u7684 yaml \u6587\u4ef6\u4f5c\u4e3a\u8f93\u51fa\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("p",null,"KCL \u547d\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"kcl my_config.k\n")),(0,r.kt)("p",null,"\u6807\u51c6\u8f93\u51fa:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"nginx:\n  name: my-nginx\n  cpu: 512\n  memory: 1024\n  volumes:\n  - name: mydir\n    mountPath: /test-pd\n    hostPath: /data\n  image: nginx:1.14.2\n  service:\n    name: my-service\n    ports:\n    - name: http\n      protocol: TCP\n      port: 80\n      targetPort: 9376\n  replica: 1\n  command:\n  - nginx\n  labels:\n    run: my-nginx\n    env: pre-prod\n")),(0,r.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u6211\u4eec\u7528\u4e8e\u5b9a\u4e49 Deployment \u914d\u7f6e\u7684\u5b57\u5178\u5fc5\u987b\u4e0e schema \u5b9a\u4e49\u5bf9\u9f50\uff0c\u5426\u5219\u6211\u4eec\u5c06\u4f1a\u5f97\u5230\u4e00\u4e2a\u9519\u8bef\u3002\u4f8b\u5982\uff0c\u5047\u8bbe\u6211\u4eec\u5c06\u670d\u52a1\u7aef\u53e3\u7684\u7c7b\u578b\u5b9a\u4e49\u9519\u8bef\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'nginx = Deployment(priority=2) {\n    name = "my-nginx"\n    image = "nginx:1.14.2"\n    volumes = [Volume {\n        name = "mydir"\n        mountPath = "/test-pd"\n        hostPath = "/data"\n    }]\n    command = ["nginx"]\n    labels.run = "my-nginx"\n    labels.env = "pre-prod"\n    service.ports = [Port {\n        name = "http"\n        protocol = "TCP"\n        port = [80]  # \u9519\u8bef\u7684\u6570\u636e\u7c7b\u578b\uff0c\u8bd5\u56fe\u5c06 List \u5206\u914d\u7ed9 int\n        targetPort = 9376\n    }]\n}\n')),(0,r.kt)("p",null,"\u4f7f\u7528\u4ee5\u4e0b KCL \u547d\u4ee4\u8fd0\u884c\uff0c\u6211\u4eec\u5e94\u8be5\u80fd\u591f\u770b\u5230\u751f\u6210\u7684 yaml \u6587\u4ef6\u4f5c\u4e3a\u8f93\u51fa\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("p",null,"KCL \u547d\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"kcl my_config.k\n")),(0,r.kt)("p",null,"\u6807\u51c6\u9519\u8bef\u8f93\u51fa:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"The type got is inconsistent with the type expected: expect int, got [int(80)]\n")),(0,r.kt)("h2",{id:"8-\u58f0\u660e-schema-\u9a8c\u8bc1\u89c4\u5219"},"8. \u58f0\u660e Schema \u9a8c\u8bc1\u89c4\u5219"),(0,r.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u5df2\u7ecf\u770b\u5230\u4e86\u4e00\u4e2a\u590d\u6742\u7684 schema\uff0c\u5728\u5176\u4e2d\u6bcf\u4e2a\u5b57\u6bb5\u90fd\u6709\u4e00\u4e2a\u7c7b\u578b\u63d0\u793a\uff0c\u4ee5\u4f7f\u5176\u66f4\u52a0\u4e0d\u5bb9\u9519\uff08error-prone\uff09\u3002"),(0,r.kt)("p",null,"\u4f46\u662f\u8fd9\u8fd8\u4e0d\u591f\u597d\uff0c\u6211\u4eec\u5e0c\u671b\u4e3a\u6211\u4eec\u7684 schema \u652f\u6301\u66f4\u591a\u7684\u589e\u5f3a\u9a8c\u8bc1\uff0c\u4ee5\u4fbf\u5c3d\u5feb\u53d1\u73b0 schema \u548c\u914d\u7f6e\u4e2d\u7684\u4ee3\u7801\u9519\u8bef\u3002\u8bb8\u591a\u9a8c\u8bc1\u89c4\u5219\uff0c\u5982 None \u7c7b\u578b\u68c0\u67e5\u3001\u8303\u56f4\u68c0\u67e5\u3001\u503c\u68c0\u67e5\u3001\u957f\u5ea6\u68c0\u67e5\u3001\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\u3001\u679a\u4e3e\u68c0\u67e5\u5df2\u7ecf\u88ab\u6dfb\u52a0\u6216\u9646\u7eed\u6dfb\u52a0\u8fdb\u6765\u3002\u4ee5\u4e0b\u662f\u4e00\u6bb5\u4ee3\u7801\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import regex\n\nschema Deployment[priority]:\n    name: str\n    cpu: int = _cpu\n    memory: int = _cpu * 2\n    volumes?: [Volume]\n    image: str\n    service?: Service\n    replica: int = 1\n    command: [str]\n    labels?: {str:str}\n\n    if priority == 1:\n        _cpu = 256\n    elif priority == 2:\n        _cpu = 512\n    elif priority == 3:\n        _cpu = 1024\n    else:\n        _cpu = 2048\n\n    check:\n        multiplyof(cpu, 256), "cpu must be a multiplier of 256"\n        regex.match(image, "^[a-zA-Z]+:\\d+\\.\\d+\\.\\d+$"), "image name should be like \'nginx:1.14.2\'"\n        1 <= replica < 100, "replica should be in range (1, 100)"\n        len(labels) >= 2 if labels, "the length of labels should be large or equal to 2"\n        "env" in labels, "\'env\' must be in labels"\n        len(command) > 0, "the command list should be non-empty"\n\nschema Port:\n    name: str\n    protocol: str\n    port: int\n    targetPort: int\n\n    check:\n        port in [80, 443], "we can only expose 80 and 443 port"\n        protocol in ["HTTP", "TCP"], "protocol must be either HTTP or TCP"\n        1024 < targetPort, "targetPort must be larger than 1024"\n\nschema Service:\n    name: "my-service" = "my-service"\n    ports: [Port]\n\n    check:\n        len(ports) > 0, "ports list must be non-empty"\n\nschema Volume:\n    name: str\n    mountPath: str\n    hostPath: str\n')),(0,r.kt)("p",null,"\u7531\u4e8eschema\u5b9a\u4e49\u7684\u5c5e\u6027\u9ed8\u8ba4\u662f",(0,r.kt)("strong",{parentName:"p"},"\u5fc5\u9700\u7684"),"\uff08required\uff09\uff0c\u56e0\u6b64\u53ef\u4ee5\u7701\u7565\u5224\u65ad\u53d8\u91cf\u4e0d\u80fd\u4e3a None/Undefined \u7684\u9a8c\u8bc1\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"schema Volume:\n    name: str\n    mountPath: str\n    hostPath: str\n")),(0,r.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u53ef\u4ee5\u57fa\u4e8e\u65b0\u7684 schema \u7f16\u5199\u914d\u7f6e\uff0c\u5e76\u53ca\u65f6\u66b4\u9732\u914d\u7f6e\u9519\u8bef\u3002\u4f8b\u5982\uff0c\u4f7f\u7528\u4ee5\u4e0b\u65e0\u6548\u7684\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'nginx = Deployment(priority=2) {\n    name = "my-nginx"\n    image = "nginx:1142"  # \u955c\u50cf\u503c\u4e0d\u5339\u914d\u6b63\u5219\u8868\u8fbe\u5f0f\n    volumes = [Volume {\n        name = "mydir"\n        mountPath = "/test-pd"\n        hostPath = "/data"\n    }]\n    command = ["nginx"]\n    labels.run = "my-nginx"\n    labels.env = "pre-prod"\n    service.ports = [Port {\n        name = "http"\n        protocol = "TCP"\n        port = 80\n        targetPort = 9376\n    }]\n}\n')),(0,r.kt)("p",null,"\u6bcf\u4e2a\u5b57\u6bb5\u90fd\u662f\u7c7b\u578b\u6709\u6548\u7684\uff0c\u4f46\u955c\u50cf\u540d\u65e0\u6548\u3002"),(0,r.kt)("p",null,"\u8fd0\u884c KCL\uff0c\u6211\u4eec\u5c06\u770b\u5230\u5982\u4e0b\u9519\u8bef\u4fe1\u606f\uff1a"),(0,r.kt)("p",null,"KCL \u547d\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"kcl my_config.k\n")),(0,r.kt)("p",null,"\u6807\u51c6\u9519\u8bef\u8f93\u51fa:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Schema check is failed to check condition: regex.match(image, "^[a-zA-Z]+:\\d+\\.\\d+\\.\\d+$"), "image name should be like \'nginx:1.14.2\'"\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"KCL \u7684\u9a8c\u8bc1\u529f\u80fd\u6db5\u76d6\u4e86 Openapi \u5b9a\u4e49\u7684\u9a8c\u8bc1\uff0c\u56e0\u6b64\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 KCL \u7f16\u5199\u4efb\u4f55 API \u9a8c\u8bc1\u3002")),(0,r.kt)("h2",{id:"9-\u901a\u8fc7-schema-\u7ee7\u627f\u521b\u5efa\u65b0-schema"},"9. \u901a\u8fc7 Schema \u7ee7\u627f\u521b\u5efa\u65b0 Schema"),(0,r.kt)("p",null,"\u73b0\u5728\uff0c\u6211\u4eec\u62e5\u6709\u4e86\u4e00\u4e2a\u7a33\u5b9a\u7684\u90e8\u7f72 schema \u5b9a\u4e49\uff0c\u53ef\u4ee5\u7528\u5b83\u6765\u58f0\u660e\u914d\u7f6e\u3002"),(0,r.kt)("p",null,"\u901a\u5e38\uff0c\u90e8\u7f72 schema \u5c06\u88ab\u7528\u4e8e\u591a\u4e2a\u573a\u666f\u4e2d\u3002\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 schema \u5728\u4e0d\u540c\u7684\u7528\u4f8b\u4e2d\u58f0\u660e\u914d\u7f6e\uff08\u89c1\u4e0a\u6587\u7684\u90e8\u5206\uff09\uff0c\u6216\u8005\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u7ee7\u627f\u751f\u6210\u4e00\u4e2a\u66f4\u5177\u4f53\u7684 schema \u5b9a\u4e49\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u90e8\u7f72 schema \u4f5c\u4e3a\u57fa\u7840\uff0c\u6765\u5b9a\u4e49 nginx \u7684\u57fa\u672c schema\uff0c\u5e76\u5728\u6bcf\u4e2a\u573a\u666f\u4e2d\u6269\u5c55\u5b9a\u4e49\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u5b9a\u4e49\u4e86\u4e00\u4e9b\u5e38\u7528\u7684\u5c5e\u6027\u3002\u8bf7\u6ce8\u610f\uff0c\u6211\u4eec\u4f7f\u7528\u201cfinal\u201d\u5173\u952e\u5b57\u5c06\u540d\u79f0\u6807\u8bb0\u4e3a\u4e0d\u53ef\u53d8\uff0c\u4ee5\u9632\u6b62\u88ab\u8986\u76d6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'schema Nginx(Deployment):\n    """ A base nginx schema """\n    name: "my-nginx" = "my-nginx"\n    image: str = "nginx:1.14.2"\n    replica: int = 3\n    command: [str] = ["nginx"]\n\nschema NginxProd(Nginx):\n    """ A prod nginx schema with stable configurations """\n    volumes: [Volume] = [{\n        name = "mydir"\n        mountPath = "/test-pd"\n        hostPath = "/data"\n    }]\n    """ A volume mapped to host path """\n    service: Service = {\n        ports = [{\n            name = "http"\n            protocol = "TCP"\n            port = 80\n            targetPort = 9376\n        }]\n    }\n    """ An 80 port to target backend server """\n')),(0,r.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u6709\u4e86\u4e00\u4e9b nginx \u7684\u9759\u6001\u914d\u7f6e\u3002\u5efa\u8bae\u5c06\u6211\u4eec\u8ba4\u4e3a\u662f\u9759\u6001\u7684\u914d\u7f6e\u58f0\u660e\u5728\u90a3\u91cc\uff0c\u5e76\u5c06\u66f4\u591a\u7684\u52a8\u6001\u914d\u7f6e\u653e\u5728\u4e0b\u9762\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'nginx = Nginx {\n    labels.run = "my-nginx"\n    labels.env = "pre-prod"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'nginx = NginxProd {\n    labels.run = "my-nginx"\n    labels.env = "pre-prod"\n}\n')),(0,r.kt)("p",null,"\u73b0\u5728\uff0c\u6211\u4eec\u53ea\u9700\u8981\u901a\u8fc7\u8fd0\u884c\u65f6\u6807\u7b7e\u503c \u201cprod\u201d \u6765\u7b80\u5355\u5b9a\u4e49 \u4e0d\u90a3\u4e48\u9759\u6001\u7684 nginx \u751f\u4ea7\u73af\u5883\u914d\u7f6e\u3002"),(0,r.kt)("p",null,"\u5b9e\u9645\u4e0a\uff0c\u5728\u67d0\u4e9b\u590d\u6742\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u6240\u6709\u914d\u7f6e\u5206\u4e3a\u57fa\u672c\u914d\u7f6e\u3001\u4e1a\u52a1\u914d\u7f6e\u548c\u73af\u5883\u914d\u7f6e\u5b9a\u4e49\uff0c\u5e76\u57fa\u4e8e\u6b64\u5b9e\u73b0\u56e2\u961f\u6210\u5458\u4e4b\u95f4\u7684\u534f\u4f5c\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528\u4ee5\u4e0b KCL \u547d\u4ee4\u8fd0\u884c\uff0c\u6211\u4eec\u5e94\u8be5\u80fd\u591f\u770b\u5230\u751f\u6210\u7684 yaml \u6587\u4ef6\u4f5c\u4e3a\u8f93\u51fa\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("p",null,"KCL \u547d\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"kcl prod_config.k\n")),(0,r.kt)("p",null,"\u6807\u51c6\u8f93\u51fa:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"nginx:\n  name: my-nginx\n  cpu: 512\n  memory: 1024\n  volumes:\n  - name: mydir\n    mountPath: /test-pd\n    hostPath: /data\n  image: nginx:1.14.2\n  service:\n    name: my-service\n    ports:\n    - name: http\n      protocol: TCP\n      port: 80\n      targetPort: 9376\n  replica: 3\n  command:\n  - nginx\n  labels:\n    run: my-nginx\n    env: pre-prod\n")),(0,r.kt)("h2",{id:"10-create-new-schema-by-multiple-protocol-and-mixin-schemas-inheritance"},"10. Create New Schema by Multiple Protocol and Mixin Schemas Inheritance"),(0,r.kt)("p",null,"\u73b0\u5728\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 Deployment schema \u5b8c\u6210\u670d\u52a1\u5668\u914d\u7f6e\u7684\u58f0\u660e\u3002"),(0,r.kt)("p",null,"\u7136\u800c\uff0c\u901a\u5e38\u5b9e\u9645\u60c5\u51b5\u66f4\u4e3a\u590d\u6742\uff0c\u90e8\u7f72\u53ef\u80fd\u6709\u5404\u79cd\u53ef\u9009\u53d8\u91cf\u9644\u4ef6\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\uff0c\u6211\u4eec\u60f3\u8981\u5728\u73b0\u6709 schema \u4e2d\u652f\u6301\u58f0\u660e\u6301\u4e45\u5377\uff0c\u4f5c\u4e3a\u53ef\u91cd\u7528\u7684 Kubernetes schema\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b ",(0,r.kt)("inlineCode",{parentName:"p"},"mixin")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"protocal")," \u8fdb\u884c\u5305\u88c5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import k8spkg.api.core.v1\n\nprotocol PVCProtocol:\n    pvc?: {str:}\n\nmixin PersistentVolumeClaimMixin for PVCProtocol:\n    """\n    PersistentVolumeClaim (PVC) sample:\n    Link: https://kubernetes.io/docs/concepts/storage/persistent-volumes/#persistentvolumeclaims\n    """\n    \n    # Mix in a new attribute `kubernetesPVC`\n    kubernetesPVC?: v1.PersistentVolumeClaim\n\n    if pvc:\n        kubernetesPVC = v1.PersistentVolumeClaim {\n            metadata.name = pvc.name\n            metadata.labels = pvc.labels\n            spec = {\n                accessModes = pvc.accessModes\n                resources = pvc.resources\n                storageClassName = pvc.storageClassName\n            }\n        }\n')),(0,r.kt)("p",null,"\u6709\u4e86 PersistentVolumeClaimMixin\uff0c\u6211\u4eec\u4f7f\u7528\u6e05\u6670\u7684\u7528\u6237\u754c\u9762\uff08user interface\uff09\u5b9a\u4e49\u4e86\u4e00\u4e2a PVC schema\uff0c\u5e76\u4f7f\u7528 Kubernetes PVC \u4f5c\u4e3a\u5b9e\u73b0\u3002\u7136\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 Deployment schema \u548c PVC mixin schema \u5b9a\u4e49\u4e00\u4e2a server schema\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'schema Server(Deployment):\n    mixin [PersistentVolumeClaimMixin]\n    pvc?: {str:}\n    """ pvc user interface data defined by PersistentVolumeClaimMixin """\n')),(0,r.kt)("p",null,"\u5728 Server schema \u4e2d\uff0cDeployment schema \u662f\u57fa\u7840 schema\uff0c\u800c PersistentVolumeClaimMixin \u662f\u4e00\u4e2a\u53ef\u9009\u9644\u52a0\u9879\uff0c\u5176\u7528\u6237\u754c\u9762\u6570\u636e\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"pvc\uff1f\uff1a{str\uff1a}"),"\u3002"),(0,r.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0cmixin \u901a\u5e38\u7528\u4e8e\u5411\u5bbf\u4e3b schema \u6dfb\u52a0\u65b0\u5c5e\u6027\uff0c\u6216\u4fee\u6539\u5bbf\u4e3b schema \u7684\u73b0\u6709\u5c5e\u6027\u3002\u56e0\u6b64\uff0cmixin \u53ef\u4ee5\u4f7f\u7528\u5bbf\u4e3b schema \u4e2d\u7684\u5c5e\u6027\u3002\u7531\u4e8e\u5176\u88ab\u8bbe\u8ba1\u4e3a\u53ef\u91cd\u7528\uff0c\u56e0\u6b64\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u989d\u5916\u7684\u534f\u8bae\u6765\u9650\u5236 mixin \u4e2d\u5bbf\u4e3b schema \u4e2d\u5c5e\u6027\u7684\u540d\u79f0\u548c\u7c7b\u578b\u3002"),(0,r.kt)("p",null,"\u73b0\u5728\uff0c\u5982\u679c\u6211\u4eec\u60f3\u8981\u4f7f\u7528 PVC \u8fdb\u884c\u90e8\u7f72\uff0c\u53ea\u9700\u58f0\u660e\u7528\u6237\u754c\u9762\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'server = Server {\n    name = "my-nginx"\n    image = "nginx:1.14.2"\n    volumes = [Volume {\n        name = "mydir"\n        mountPath = "/test-pd"\n        hostPath = "/data"\n    }]\n    command = ["nginx"]\n    labels = {\n        run = "my-nginx"\n        env = "pre-prod"\n    }\n    service.ports = [Port {\n        name = "http"\n        protocol = "TCP"\n        port = 80\n        targetPort = 9376\n    }]\n    pvc = {\n        name = "my_pvc"\n        accessModes = ["ReadWriteOnce"]\n        resources.requests.storage = "8Gi"\n        storageClassName = "slow"\n    }\n}\n')),(0,r.kt)("p",null,"\u4f7f\u7528\u4ee5\u4e0b KCL \u547d\u4ee4\u8fd0\u884c\uff0c\u6211\u4eec\u5e94\u8be5\u80fd\u591f\u770b\u5230\u751f\u6210\u7684 yaml \u6587\u4ef6\u4f5c\u4e3a\u8f93\u51fa\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("p",null,"KCL \u547d\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"kcl server.k\n")),(0,r.kt)("p",null,"\u6807\u51c6\u8f93\u51fa:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"server:\n  name: my-nginx\n  cpu: 512\n  memory: 1024\n  volumes:\n  - name: mydir\n    mountPath: /test-pd\n    hostPath: /data\n  image: nginx:1.14.2\n  service:\n    name: my-service\n    ports:\n    - name: http\n      protocol: TCP\n      port: 80\n      targetPort: 9376\n  replica: 1\n  command:\n  - nginx\n  labels:\n    run: my-nginx\n    env: pre-prod\n  pvc:\n    name: my_pvc\n    accessModes:\n    - ReadWriteOnce\n    resources:\n      requests:\n        storage: 8Gi\n    storageClassName: slow\n---\napiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: my_pvc\nspec:\n  accessModes:\n  - ReadWriteOnce\n  storageClassName: slow\n  resources:\n    requests:\n      storage: 8Gi\n")),(0,r.kt)("p",null,"\u5982\u679c\u6211\u4eec\u4e0d\u9700\u8981\u6301\u4e45\u5377\uff0c\u53ea\u9700\u5220\u9664 pvc \u914d\u7f6e\u5757\u3002"),(0,r.kt)("h2",{id:"11-\u5171\u4eab\u548c\u91cd\u7528-schema"},"11. \u5171\u4eab\u548c\u91cd\u7528 Schema"),(0,r.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u5bfc\u5165\u6765\u5171\u4eab Server schema\uff0c\u6211\u4eec\u53ea\u9700\u8981\u5c06\u4ee3\u7801\u4e0e KCL \u4e00\u8d77\u6253\u5305\u5373\u53ef\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import pkg\n\nserver = pkg.Server {\n    name = "my-nginx"\n    image = "nginx:1.14.2"\n    volumes = [Volume {\n        name = "mydir"\n        mountPath = "/test-pd"\n        hostPath = "/data"\n    }]\n    command = ["nginx"]\n    labels.run = "my-nginx"\n    labels.env = "pre-prod"\n    service.ports = [Port {\n        name = "http"\n        protocol = "TCP"\n        port = 80\n        targetPort = 9376\n    }]\n}\n')),(0,r.kt)("p",null,"\u53e6\u4e00\u4e2a\u5173\u4e8e\u5171\u4eab\u4ee3\u7801\u7684\u6280\u5de7\u662f\uff1a\u5728\u540c\u4e00\u5305\u4e0b\u7684\u6a21\u5757\u4e0d\u9700\u8981\u76f8\u4e92\u5bfc\u5165\u3002"),(0,r.kt)("p",null,"\u5047\u8bbe\u6211\u4eec\u5728 pkg \u4e2d\u6709\u5982\u4e0b models\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pkg/\n    - deploy.k\n    - server.k\n    - pvc.k\n")),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"server.k")," \u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u53ea\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"deploy.k")," \u4e2d\u7684 Deployment schema \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"pvc.k")," \u4e2d\u7684 pvc schema \u800c\u65e0\u9700\u5bfc\u5165\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# \u65e0\u9700 import \nschema Server(Deployment):\n    mixin [PersistentVolumeClaimMixin]\n    pvc?: {str:}\n    """ pvc user interface data defined by PersistentVolumeClaimMixin """\n')),(0,r.kt)("p",null,"\u7136\u540e\u7528\u6237\u5fc5\u987b\u5bfc\u5165 pkg \u624d\u80fd\u4f5c\u4e3a\u4e00\u4e2a\u6574\u4f53\u4f7f\u7528\u5b83\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import pkg\n\nserver = pkg.Server {\n    name = "my-nginx"\n    image = "nginx:1.14.2"\n    volumes = [pkg.Volume {\n        name = "mydir"\n        mountPath = "/test-pd"\n        hostPath = "/data"\n    }]\n    command = ["nginx"]\n    labels = {\n        run = "my-nginx"\n        env = "pre-prod"\n    }\n    service.ports = [pkg.Port {\n        name = "http"\n        protocol = "TCP"\n        port = 80\n        targetPort = 9376\n    }]\n}\n')),(0,r.kt)("p",null,"\u8fd0\u884c KCL \u547d\u4ee4:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"kcl pkg_server.k\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"server:\n  name: my-nginx\n  cpu: 512\n  memory: 1024\n  volumes:\n  - name: mydir\n    mountPath: /test-pd\n    hostPath: /data\n  image: nginx:1.14.2\n  service:\n    name: my-service\n    ports:\n    - name: http\n      protocol: TCP\n      port: 80\n      targetPort: 9376\n  replica: 1\n  command:\n  - nginx\n  labels:\n    run: my-nginx\n    env: pre-prod\n")),(0,r.kt)("h2",{id:"12-\u6700\u540e"},"12. \u6700\u540e"),(0,r.kt)("p",null,"\u606d\u559c\uff01"),(0,r.kt)("p",null,"\u6211\u4eec\u5df2\u7ecf\u5b8c\u6210\u4e86 KCL \u7684\u7b2c\u4e8c\u8282\u8bfe\u3002\u6211\u4eec\u4f7f\u7528 KCL \u6765\u66ff\u6362\u6211\u4eec\u7684 key-value \u6587\u672c\u6587\u4ef6\uff0c\u4ee5\u4fbf\u83b7\u5f97\u66f4\u597d\u7684\u53ef\u7f16\u7a0b\u6027\u3002"))}u.isMDXComponent=!0}}]);