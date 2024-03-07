"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[13118],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>k});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(t),u=r,k=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return t?a.createElement(k,l(l({ref:n},s),{},{components:t})):a.createElement(k,l({ref:n},s))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},44819:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const i={title:"\u6a21\u578b\u5b9a\u4e49",sidebar_position:3},l=void 0,o={unversionedId:"user_docs/guides/schema-definition",id:"version-0.7.0/user_docs/guides/schema-definition",title:"\u6a21\u578b\u5b9a\u4e49",description:"\u7b80\u4ecb",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.7.0/user_docs/guides/schema-definition.md",sourceDirName:"user_docs/guides",slug:"/user_docs/guides/schema-definition",permalink:"/zh-CN/docs/0.7.0/user_docs/guides/schema-definition",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.7.0/user_docs/guides/schema-definition.md",tags:[],version:"0.7.0",lastUpdatedBy:"peefy",lastUpdatedAt:1709797004,formattedLastUpdatedAt:"2024\u5e743\u67087\u65e5",sidebarPosition:3,frontMatter:{title:"\u6a21\u578b\u5b9a\u4e49",sidebar_position:3},sidebar:"user_docs",previous:{title:"\u62bd\u8c61",permalink:"/zh-CN/docs/0.7.0/user_docs/guides/abstraction"},next:{title:"\u6570\u636e\u96c6\u6210",permalink:"/zh-CN/docs/0.7.0/user_docs/guides/data-integration"}},p={},c=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u4f7f\u7528 KCL \u5b9a\u4e49\u7ed3\u6784\u548c\u7ea6\u675f",id:"\u4f7f\u7528-kcl-\u5b9a\u4e49\u7ed3\u6784\u548c\u7ea6\u675f",level:2},{value:"0. \u5148\u51b3\u6761\u4ef6",id:"0-\u5148\u51b3\u6761\u4ef6",level:3},{value:"1. \u83b7\u5f97\u793a\u4f8b",id:"1-\u83b7\u5f97\u793a\u4f8b",level:3},{value:"2. \u8f93\u51fa\u914d\u7f6e",id:"2-\u8f93\u51fa\u914d\u7f6e",level:3},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:2}],s={toc:c},d="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,r.kt)("p",null,"KCL \u7684\u6838\u5fc3\u573a\u666f\u662f\u5199\u914d\u7f6e\u548c\u6821\u9a8c\uff0c\u56e0\u6b64 KCL \u88ab\u8bbe\u8ba1\u4e4b\u521d\u7684\u4e00\u4e2a\u6838\u5fc3\u7279\u6027\u5c31\u662f",(0,r.kt)("strong",{parentName:"p"},"\u5efa\u6a21"),"\uff0c\u5bf9\u5e94\u5230 KCL \u7684\u5173\u952e\u5b57 ",(0,r.kt)("inlineCode",{parentName:"p"},"schema"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"schema")," \u53ef\u4ee5\u88ab\u7528\u4e8e\u5b9a\u4e49\u7ed3\u6784\u548c\u7ea6\u675f\uff0c\u6bd4\u5982\u5b57\u6bb5\u7684\u7c7b\u578b\uff0c\u9ed8\u8ba4\u503c\uff0c\u5b57\u6bb5\u7684\u8303\u56f4\u548c\u5404\u79cd\u5176\u4ed6\u7ea6\u675f\u7b49\u5185\u5bb9\u3002\u6b64\u5916\uff0c\u4f7f\u7528 KCL schema \u5b9a\u4e49\u7684\u7ed3\u6784\u53ef\u4ee5\u53cd\u8fc7\u6765\u7528\u4e8e\u9a8c\u8bc1\u5b9e\u73b0\u3001\u9a8c\u8bc1\u8f93\u5165\uff08JSON\u3001YAML \u7b49\u7ed3\u6784\u5316\u6570\u636e\uff09\u6216\u751f\u6210\u4ee3\u7801\uff08\u751f\u6210\u591a\u8bed\u8a00\u7ed3\u6784\u4f53\u3001OpenAPI \u7b49\uff09\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528-kcl-\u5b9a\u4e49\u7ed3\u6784\u548c\u7ea6\u675f"},"\u4f7f\u7528 KCL \u5b9a\u4e49\u7ed3\u6784\u548c\u7ea6\u675f"),(0,r.kt)("h3",{id:"0-\u5148\u51b3\u6761\u4ef6"},"0. \u5148\u51b3\u6761\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5b89\u88c5 ",(0,r.kt)("a",{parentName:"li",href:"https://kcl-lang.io/docs/user_docs/getting-started/install"},"KCL"))),(0,r.kt)("h3",{id:"1-\u83b7\u5f97\u793a\u4f8b"},"1. \u83b7\u5f97\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/kcl-lang/kcl-lang.io.git/\ncd ./kcl-lang.io/examples/definition\n")),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u663e\u793a\u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat main.k\n")),(0,r.kt)("p",null,"\u8f93\u51fa\u4e3a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import .app_module  # A relative path import\n\napp: app_module.App {\n    domainType = "Standard"\n    containerPort = 80\n    volumes = [\n        {\n            mountPath = "/tmp"\n        }\n    ]\n    services = [\n        {\n            clusterIP = "None"\n            $type = "ClusterIP"\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"\u6211\u4eec\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"App")," \u6a21\u578b\u653e\u5165\u5355\u72ec\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"app_module.k")," \u4e2d\uff0c\u5728\u9700\u8981\u65f6\u6211\u4eec\u53ef\u4ee5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"main.k")," \u4e2d\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," \u5173\u952e\u5b57\u8fdb\u884c\u6a21\u5757\u5316\u7ba1\u7406\uff0c\u6bd4\u5982\u4e0b\u9762\u7684\u6587\u4ef6\u7ed3\u6784"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 app_module.k\n\u2514\u2500\u2500 main.k\n")),(0,r.kt)("p",null,"\u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"app_module.k")," \u7684\u5185\u5bb9\u4e3a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'schema App:\n    domainType: "Standard" | "Customized" | "Global"\n    containerPort: int\n    volumes: [Volume]\n    services: [Service]\n\n    check:\n        1 <= containerPort <= 65535\n\nschema Service:\n    clusterIP: str\n    $type: str\n\n    check:\n        clusterIP == "None" if $type == "ClusterIP"\n\nschema Volume:\n    container: str = "*"  # `container` \u7684\u9ed8\u8ba4\u503c\u4e3a "*"\n    mountPath: str\n\n    check:\n        mountPath not in ["/", "/boot", "/home", "dev", "/etc", "/root"]\n')),(0,r.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u6587\u4ef6\u4e2d\u3002\u5728\u5176\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"schema")," \u5173\u952e\u5b57\u5b9a\u4e49\u4e86\u4e09\u4e2a\u6a21\u578b ",(0,r.kt)("inlineCode",{parentName:"p"},"App"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Service")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"Volume"),"\u3002\u5e76\u4e14 ",(0,r.kt)("inlineCode",{parentName:"p"},"App")," \u6a21\u578b\u5177\u6709\u56db\u4e2a\u5c5e\u6027 ",(0,r.kt)("inlineCode",{parentName:"p"},"domainType"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"containerPort"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"volumes")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"services"),"\uff0c\u5176\u4e2d"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"domainType")," \u7684\u7c7b\u578b\u4e3a\u5b57\u7b26\u4e32\u5b57\u9762\u503c\u8054\u5408\u7c7b\u578b\uff0c\u4e0e\u201c\u679a\u4e3e\u201d\u7c7b\u4f3c\uff0c\u8fd9\u8868\u660e ",(0,r.kt)("inlineCode",{parentName:"li"},"domainType")," \u7684\u503c\u53ea\u80fd\u53d6 ",(0,r.kt)("inlineCode",{parentName:"li"},'"Standard"'),", ",(0,r.kt)("inlineCode",{parentName:"li"},'"Customized"')," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},'"Global"')," \u4e2d\u7684\u4e00\u4e2a"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"containerPort")," \u7684\u7c7b\u578b\u4e3a\u6574\u6570 ",(0,r.kt)("inlineCode",{parentName:"li"},"int"),", \u6b64\u5916\u6211\u4eec\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"check")," \u5173\u952e\u5b57\u5b9a\u4e49\u4e86\u5176\u53d6\u503c\u8303\u56f4 1 ~ 65535"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"services")," \u7684\u7c7b\u578b\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"Service")," \u5217\u8868\u7c7b\u578b\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"Service"),"\uff0c\u5e76\u4e14\u6211\u4eec\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"?")," \u6807\u8bb0\u4e86\u5b83\u662f\u4e00\u4e2a\u53ef\u9009\u5c5e\u6027\uff0c\u8fd9\u610f\u5473\u7740\u6211\u4eec\u53ef\u4ee5\u4e0d\u4e3a\u5176\u8d4b\u503c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"volumes")," \u7684\u7c7b\u578b\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"Volume")," \u5217\u8868\u7c7b\u578b\uff0c\u5e76\u4e14\u6211\u4eec\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"?")," \u6807\u8bb0\u4e86\u5b83\u662f\u4e00\u4e2a\u53ef\u9009\u5c5e\u6027\uff0c\u8fd9\u610f\u5473\u7740\u6211\u4eec\u53ef\u4ee5\u4e0d\u4e3a\u5176\u8d4b\u503c\u3002")),(0,r.kt)("h3",{id:"2-\u8f93\u51fa\u914d\u7f6e"},"2. \u8f93\u51fa\u914d\u7f6e"),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u884c\u53ef\u4ee5\u83b7\u5f97 ",(0,r.kt)("inlineCode",{parentName:"p"},"app")," \u5b9e\u4f8b\u7684 YAML \u8f93\u51fa"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kcl main.k\n")),(0,r.kt)("p",null,"\u8f93\u51fa\u4e3a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'app:\n  domainType: Standard\n  containerPort: 80\n  volumes:\n    - container: "*"\n      mountPath: /tmp\n  services:\n    - clusterIP: None\n      type: ClusterIP\n')),(0,r.kt)("h2",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),(0,r.kt)("p",null,"KCL \u662f\u4e00\u79cd\u7528\u4e8e\u5b9a\u4e49\u914d\u7f6e\u548c\u7ea6\u675f\u7684\u8bed\u8a00\uff0c\u5176\u6838\u5fc3\u529f\u80fd\u662f\u4f7f\u7528 schema \u5173\u952e\u5b57\u8fdb\u884c\u5efa\u6a21\uff0cschema \u5141\u8bb8\u5b9a\u4e49\u5177\u6709\u5c5e\u6027\u3001\u9ed8\u8ba4\u503c\u3001\u8303\u56f4\u68c0\u67e5\u548c\u5176\u4ed6\u7ea6\u675f\u7684\u7ed3\u6784\u3002\u4f7f\u7528 KCL schema \u5b9a\u4e49\u7684\u7ed3\u6784\u53ef\u4ee5\u7528\u4e8e\u9a8c\u6570\u636e\u6216\u751f\u6210\u4ee3\u7801\u3002\u8be5\u6587\u6863\u6f14\u793a\u4e86\u5982\u4f55\u4f7f\u7528 schema \u5b9a\u4e49\u6a21\u578b\uff0c\u4f7f\u7528 import \u5bfc\u5165\u6a21\u578b\u8fdb\u884c\u6a21\u5757\u5316\u7ba1\u7406\uff0c\u5e76\u4f7f\u7528 kcl \u547d\u4ee4\u8f93\u51fa\u5df2\u5b9a\u4e49\u7ed3\u6784\u5b9e\u4f8b\u7684 YAML \u914d\u7f6e\u3002"))}m.isMDXComponent=!0}}]);