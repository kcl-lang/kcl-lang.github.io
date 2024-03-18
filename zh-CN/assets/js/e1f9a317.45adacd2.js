"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[56685],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,k=u["".concat(i,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},240:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={title:"\u6570\u636e\u96c6\u6210",sidebar_position:4},o=void 0,s={unversionedId:"user_docs/guides/data-integration",id:"user_docs/guides/data-integration",title:"\u6570\u636e\u96c6\u6210",description:"\u7b80\u4ecb",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user_docs/guides/data-integration.md",sourceDirName:"user_docs/guides",slug:"/user_docs/guides/data-integration",permalink:"/zh-CN/docs/next/user_docs/guides/data-integration",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/user_docs/guides/data-integration.md",tags:[],version:"current",lastUpdatedBy:"peefy",lastUpdatedAt:1710771316,formattedLastUpdatedAt:"2024\u5e743\u670818\u65e5",sidebarPosition:4,frontMatter:{title:"\u6570\u636e\u96c6\u6210",sidebar_position:4},sidebar:"user_docs",previous:{title:"\u6a21\u578b\u5b9a\u4e49",permalink:"/zh-CN/docs/next/user_docs/guides/schema-definition"},next:{title:"\u81ea\u52a8\u5316",permalink:"/zh-CN/docs/next/user_docs/guides/automation"}},i={},c=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u4f7f\u7528 KCL \u8fdb\u884c\u6570\u636e\u96c6\u6210",id:"\u4f7f\u7528-kcl-\u8fdb\u884c\u6570\u636e\u96c6\u6210",level:2},{value:"0. \u5148\u51b3\u6761\u4ef6",id:"0-\u5148\u51b3\u6761\u4ef6",level:3},{value:"1. \u83b7\u5f97\u793a\u4f8b",id:"1-\u83b7\u5f97\u793a\u4f8b",level:3},{value:"2. YAML \u96c6\u6210",id:"2-yaml-\u96c6\u6210",level:3},{value:"3. JSON \u96c6\u6210",id:"3-json-\u96c6\u6210",level:3},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,a.kt)("p",null,"\u5728 KCL \u4e2d\uff0c\u4e0d\u4ec5\u53ef\u4ee5\u5c06 KCL \u7f16\u5199\u7684\u914d\u7f6e\u4ee3\u7801\u7f16\u8bd1\u8f93\u51fa\u4e3a YAML \u683c\u5f0f\u7684\u6570\u636e\uff0c\u8fd8\u53ef\u4ee5\u5c06 JSON/YAML \u7b49\u6570\u636e\u76f4\u63a5\u5d4c\u5165\u5230 KCL \u8bed\u8a00\u5f53\u4e2d\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528-kcl-\u8fdb\u884c\u6570\u636e\u96c6\u6210"},"\u4f7f\u7528 KCL \u8fdb\u884c\u6570\u636e\u96c6\u6210"),(0,a.kt)("h3",{id:"0-\u5148\u51b3\u6761\u4ef6"},"0. \u5148\u51b3\u6761\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b89\u88c5 ",(0,a.kt)("a",{parentName:"li",href:"https://kcl-lang.io/docs/user_docs/getting-started/install"},"KCL"))),(0,a.kt)("h3",{id:"1-\u83b7\u5f97\u793a\u4f8b"},"1. \u83b7\u5f97\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/kcl-lang/kcl-lang.io.git/\ncd ./kcl-lang.io/examples/data-integration\n")),(0,a.kt)("h3",{id:"2-yaml-\u96c6\u6210"},"2. YAML \u96c6\u6210"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u663e\u793a KCL YAML \u96c6\u6210\u914d\u7f6e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cat yaml.k\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import yaml\n\nschema Server:\n    ports: [int]\n\nserver: Server = yaml.decode("""\\\nports:\n- 80\n- 8080\n""")\nserver_yaml = yaml.encode({\n    ports = [80, 8080]\n})\n')),(0,a.kt)("p",null,"\u5728\u4e0a\u8ff0\u4ee3\u7801\u4e2d\uff0c\u6211\u4eec\u901a\u8fc7 KCL \u5185\u7f6e\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"yaml")," \u6a21\u5757\u4ee5\u53ca\u5176\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"yaml.decode")," \u76f4\u63a5\u5b8c\u6210 YAML \u6570\u636e\u7684\u96c6\u6210\uff0c\u5e76\u4e14\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Server")," schema \u5bf9\u96c6\u6210\u7684 YAML \u6570\u636e\u76f4\u63a5\u8fdb\u884c\u6821\u9a8c\u3002\u6b64\u5916\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"yaml.encode")," \u5b8c\u6210 YAML \u6570\u636e\u7684\u5e8f\u5217\u5316\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u53ef\u4ee5\u83b7\u5f97\u914d\u7f6e\u8f93\u51fa:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kcl yaml.k\n")),(0,a.kt)("p",null,"\u8f93\u51fa\u4e3a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"server:\n  ports:\n    - 80\n    - 8080\nserver_yaml: |\n  ports:\n    - 80\n    - 8080\n")),(0,a.kt)("h3",{id:"3-json-\u96c6\u6210"},"3. JSON \u96c6\u6210"),(0,a.kt)("p",null,"\u540c\u6837\u7684\uff0c\u5bf9\u4e8e JSON \u6570\u636e\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"json.encode")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"json.decode")," \u51fd\u6570\u4ee5\u540c\u6837\u7684\u65b9\u5f0f\u8fdb\u884c\u6570\u636e\u96c6\u6210\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u663e\u793a KCL JSON \u96c6\u6210\u914d\u7f6e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cat json.k\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import json\n\nschema Server:\n    ports: [int]\n\nserver: Server = json.decode('{\"ports\": [80, 8080]}')\nserver_json = json.encode({\n    ports = [80, 8080]\n})\n")),(0,a.kt)("p",null,"\u6267\u884c\u547d\u4ee4\u8f93\u51fa\u4e3a:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kcl json.k\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"server:\n  ports:\n    - 80\n    - 8080\nserver_json: '{\"ports\": [80, 8080]}'\n")),(0,a.kt)("h2",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),(0,a.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u5728 KCL \u4e2d\u8fdb\u884c\u6570\u636e\u96c6\u6210\uff0c\u4f7f\u7528 KCL \u5185\u7f6e\u7684 yaml \u548c json \u5305\u5c06 YAML \u548c JSON \u6570\u636e\u76f4\u63a5\u96c6\u6210\u5230 KCL \u8bed\u8a00\u4e2d\uff0c\u5e76\u4f7f\u7528\u76f8\u5e94\u7684\u89e3\u7801\u548c\u7f16\u7801\u529f\u80fd\u5bf9\u5176\u8fdb\u884c\u9a8c\u8bc1\u548c\u5e8f\u5217\u5316\u3002"))}d.isMDXComponent=!0}}]);