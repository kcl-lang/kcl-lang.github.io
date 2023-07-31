"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[64385],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),g=a,m=u["".concat(i,".").concat(g)]||u[g]||d[g]||o;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=g;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},88379:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"\u914d\u7f6e",sidebar_position:1},l=void 0,s={unversionedId:"user_docs/guides/configuration",id:"version-0.5.0/user_docs/guides/configuration",title:"\u914d\u7f6e",description:"\u7b80\u4ecb",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.5.0/user_docs/guides/configuration.md",sourceDirName:"user_docs/guides",slug:"/user_docs/guides/configuration",permalink:"/zh-CN/docs/user_docs/guides/configuration",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.0/user_docs/guides/configuration.md",tags:[],version:"0.5.0",lastUpdatedBy:"Peefy",lastUpdatedAt:1690813595,formattedLastUpdatedAt:"2023\u5e747\u670831\u65e5",sidebarPosition:1,frontMatter:{title:"\u914d\u7f6e",sidebar_position:1},sidebar:"user_docs",previous:{title:"\u7528\u6237\u624b\u518c",permalink:"/zh-CN/docs/user_docs/guides/"},next:{title:"\u6821\u9a8c",permalink:"/zh-CN/docs/user_docs/guides/validation"}},i={},p=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u4f7f\u7528 KCL \u7f16\u5199\u914d\u7f6e\u4ee3\u7801",id:"\u4f7f\u7528-kcl-\u7f16\u5199\u914d\u7f6e\u4ee3\u7801",level:2},{value:"1. \u83b7\u53d6\u793a\u4f8b",id:"1-\u83b7\u53d6\u793a\u4f8b",level:3},{value:"2. \u4f7f\u7528 KCL \u751f\u6210 YAML",id:"2-\u4f7f\u7528-kcl-\u751f\u6210-yaml",level:3},{value:"3. \u4e3a\u914d\u7f6e\u6dfb\u52a0\u52a8\u6001\u53c2\u6570",id:"3-\u4e3a\u914d\u7f6e\u6dfb\u52a0\u52a8\u6001\u53c2\u6570",level:3},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,a.kt)("p",null,"\u914d\u7f6e\u662f\u8f6f\u4ef6\u7cfb\u7edf\u7684\u4e00\u4e2a\u91cd\u8981\u65b9\u9762\uff0c\u7531\u4e8e\u4e0d\u65ad\u53d1\u5c55\u7684\u4e1a\u52a1\u9700\u6c42\u3001\u57fa\u7840\u8bbe\u65bd\u9700\u6c42\u548c\u5176\u4ed6\u56e0\u7d20\uff0c\u8fd9\u4e9b\u7cfb\u7edf\u4f1a\u4e0d\u65ad\u53d1\u751f\u53d8\u5316\u3002\u901a\u5e38\uff0c\u5feb\u901f\u6539\u53d8\u8fd9\u4e9b\u7cfb\u7edf\u7684\u884c\u4e3a\u53ef\u80fd\u5177\u6709\u6311\u6218\u6027\uff0c\u5c24\u5176\u662f\u5f53\u8fd9\u6837\u505a\u9700\u8981\u6602\u8d35\u4e14\u8017\u65f6\u7684\u91cd\u5efa\u548c\u91cd\u65b0\u90e8\u7f72\u8fc7\u7a0b\u65f6\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4ec5\u4ec5\u5bf9\u4e1a\u52a1\u4ee3\u7801\u8fdb\u884c\u66f4\u6539\u53ef\u80fd\u662f\u4e0d\u591f\u7684\u3002\u5e78\u8fd0\u7684\u662f\uff0c\u914d\u7f6e\u63d0\u4f9b\u4e86\u4e00\u79cd\u4f4e\u5f00\u9500\u7684\u65b9\u5f0f\u6765\u4fee\u6539\u7cfb\u7edf\u529f\u80fd\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u6839\u636e\u9700\u8981\u5c06\u9759\u6001\u914d\u7f6e\u5b58\u50a8\u5728 JSON \u6216 YAML \u7b49\u6587\u4ef6\u4e2d\u3002\u6b64\u5916\uff0c\u914d\u7f6e\u4e5f\u53ef\u4ee5\u5b58\u50a8\u5728\u9ad8\u7ea7\u8bed\u8a00\u4e2d\uff0c\u4ece\u800c\u5b9e\u73b0\u66f4\u7075\u6d3b\u7684\u914d\u7f6e\u3002\u8fd9\u79cd\u8bed\u8a00\u53ef\u4ee5\u8fdb\u884c\u7f16\u7801\u3001\u5448\u73b0\u548c\u9759\u6001\u914d\u7f6e\u3002KCL \u662f\u4e00\u79cd\u63d0\u4f9b\u6b64\u7c7b\u529f\u80fd\u7684\u914d\u7f6e\u8bed\u8a00\u3002\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u7f16\u5199 KCL \u4ee3\u7801\u6765\u751f\u6210JSON/YAML \u548c\u5176\u4ed6\u914d\u7f6e\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528-kcl-\u7f16\u5199\u914d\u7f6e\u4ee3\u7801"},"\u4f7f\u7528 KCL \u7f16\u5199\u914d\u7f6e\u4ee3\u7801"),(0,a.kt)("p",null,"KCL \u7684\u6838\u5fc3\u7279\u6027\u662f\u5176",(0,a.kt)("strong",{parentName:"p"},"\u5efa\u6a21"),"\u548c",(0,a.kt)("strong",{parentName:"p"},"\u7ea6\u675f"),"\u80fd\u529b\uff0cKCL \u6838\u5fc3\u529f\u80fd\u57fa\u672c\u56f4\u7ed5 KCL \u8fd9\u4e2a\u4e24\u4e2a\u6838\u5fc3\u7279\u6027\u5c55\u5f00\uff0c\u5bf9\u4e8e\u4ee3\u7801\u800c\u8a00\uff08\u5305\u62ec\u914d\u7f6e\u4ee3\u7801\uff09\u90fd\u5b58\u5728\u5bf9\u914d\u7f6e\u6570\u636e\u7ea6\u675f\u7684\u9700\u6c42\uff0c\u6bd4\u5982\u7c7b\u578b\u7ea6\u675f\u3001\u914d\u7f6e\u5b57\u6bb5\u5fc5\u9009/\u53ef\u9009\u7ea6\u675f\u3001\u8303\u56f4\u7ea6\u675f\u3001\u4e0d\u53ef\u53d8\u6027\u7ea6\u675f\u7b49\uff0c\u8fd9\u4e5f\u662f KCL \u81f4\u529b\u4e8e\u89e3\u51b3\u7684\u6838\u5fc3\u95ee\u9898\u4e4b\u4e00\u3002"),(0,a.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u5df2\u7ecf\u4e86\u89e3\u4e86 KCL \u7684\u57fa\u672c\u529f\u80fd\uff0c\u8ba9\u6211\u4eec\u63a2\u7d22\u5982\u4f55\u4f7f\u7528\u5b83\u6765\u751f\u6210\u914d\u7f6e\u3002"),(0,a.kt)("h3",{id:"1-\u83b7\u53d6\u793a\u4f8b"},"1. \u83b7\u53d6\u793a\u4f8b"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u83b7\u53d6\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/kcl-lang/kcl-lang.io.git/\ncd ./kcl-lang.io/examples/configuration\n")),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u663e\u793a\u914d\u7f6e\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cat nginx.k\n")),(0,a.kt)("p",null,"\u8f93\u51fa\u4e3a:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'schema Nginx:\n    """Schema for Nginx configuration files"""\n    http: Http\n\nschema Http:\n    server: Server\n\nschema Server:\n    listen: int | str    # The attribute `listen` can be int type or a string type.\n    location?: Location  # Optional, but must be non-empty when specified\n\nschema Location:\n    root: str\n    index: str\n\nnginx = Nginx {\n    http.server = {\n        listen = 80\n        location = {\n            root = "/var/www/html"\n            index = "index.html"\n        }\n    }\n}\n')),(0,a.kt)("h3",{id:"2-\u4f7f\u7528-kcl-\u751f\u6210-yaml"},"2. \u4f7f\u7528 KCL \u751f\u6210 YAML"),(0,a.kt)("p",null,"\u6267\u884c\u5982\u4e0b\u547d\u4ee4:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kcl nginx.k\n")),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u83b7\u5f97\u5982\u4e0b YAML \u8f93\u51fa"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"nginx:\n  http:\n    server:\n      listen: 80\n      location:\n        root: /var/www/html\n        index: index.html\n")),(0,a.kt)("h3",{id:"3-\u4e3a\u914d\u7f6e\u6dfb\u52a0\u52a8\u6001\u53c2\u6570"},"3. \u4e3a\u914d\u7f6e\u6dfb\u52a0\u52a8\u6001\u53c2\u6570"),(0,a.kt)("p",null,"\u6b64\u5916\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 KCL \u5185\u7f6e\u51fd\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"option")," \u52a8\u6001\u63a5\u6536\u5916\u90e8\u53c2\u6570\u3002\u4f8b\u5982\uff0c\u5bf9\u4e8e\u4e0b\u9762\u7684 KCL \u6587\u4ef6\uff08db.k\uff09\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u547d\u4ee4\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"-D")," \u6807\u5fd7\u6765\u63a5\u6536\u5916\u90e8\u52a8\u6001\u53c2\u6570\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'env: str = option("env") or "dev"  # The attribute `env` has a default value "den"\ndatabase: str = option("database")\nhosts = {\n    dev = "postgres.dev"\n    stage = "postgres.stage"\n    prod = "postgres.prod"\n}\ndbConfig = {\n    host = hosts[env]\n    database = database\n    port = "2023"\n    conn = "postgres://${host}:${port}/${database}"\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# Use the `-D` flag to input external parameters.\nkcl db.k -D database="foo"\n')),(0,a.kt)("p",null,"\u8f93\u51fa\u4e3a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'env: dev\ndatabase: foo\nhosts:\n  dev: postgres.dev\n  stage: postgres.stage\n  prod: postgres.prod\ndbConfig:\n  host: postgres.dev\n  database: foo\n  port: "2023"\n  conn: "postgres://postgres.dev:2023/foo"\n')),(0,a.kt)("h2",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),(0,a.kt)("p",null,"\u901a\u8fc7\u4f7f\u7528KCL\uff0c\u6211\u4eec\u53ef\u4ee5\u751f\u6210\u66f4\u4f4e\u4f4e\u7ea7\u522b\u7684\u6570\u636e\u914d\u7f6e\u3002\u6b64\u5916\u554a\uff0c\u6211\u4eec\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"-D")," \u6807\u5fd7\u8bbe\u7f6e\u52a8\u6001\u53c2\u6570\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7684\u573a\u666f\u9700\u6c42\u3002\u6709\u5173\u66f4\u591a KCL \u7684\u529f\u80fd\u548c\u6559\u7a0b\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/lang/tour"},"\u6b64\u5904"),"\u3002"))}d.isMDXComponent=!0}}]);