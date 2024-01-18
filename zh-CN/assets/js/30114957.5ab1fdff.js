"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[86571],{3905:(e,n,t)=>{t.d(n,{Zo:()=>k,kt:()=>u});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},k=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),s=p(t),m=r,u=s["".concat(c,".").concat(m)]||s[m]||d[m]||l;return t?a.createElement(u,o(o({ref:n},k),{},{components:t})):a.createElement(u,o({ref:n},k))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[s]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},35362:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const l={},o="\u5feb\u901f\u5f00\u59cb",i={unversionedId:"user_docs/guides/package-management/quick-start",id:"version-0.7.0/user_docs/guides/package-management/quick-start",title:"\u5feb\u901f\u5f00\u59cb",description:"0. \u524d\u7f6e\u6761\u4ef6",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.7.0/user_docs/guides/package-management/3-quick-start.md",sourceDirName:"user_docs/guides/package-management",slug:"/user_docs/guides/package-management/quick-start",permalink:"/zh-CN/docs/user_docs/guides/package-management/quick-start",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.7.0/user_docs/guides/package-management/3-quick-start.md",tags:[],version:"0.7.0",lastUpdatedBy:"Peefy",lastUpdatedAt:1705584615,formattedLastUpdatedAt:"2024\u5e741\u670818\u65e5",sidebarPosition:3,frontMatter:{},sidebar:"user_docs",previous:{title:"\u81ea\u52a8\u5316",permalink:"/zh-CN/docs/user_docs/guides/automation"},next:{title:"\u53d1\u5e03 KCL \u5305\u5230 ghcr.io",permalink:"/zh-CN/docs/user_docs/guides/package-management/how-to/share_your_pkg"}},c={},p=[{value:"0. \u524d\u7f6e\u6761\u4ef6",id:"0-\u524d\u7f6e\u6761\u4ef6",level:2},{value:"1. \u521d\u59cb\u5316\u4e00\u4e2a\u7a7a\u7684 KCL \u5305",id:"1-\u521d\u59cb\u5316\u4e00\u4e2a\u7a7a\u7684-kcl-\u5305",level:2},{value:"2. \u4e3a KCL \u5305\u6dfb\u52a0\u4f9d\u8d56",id:"2-\u4e3a-kcl-\u5305\u6dfb\u52a0\u4f9d\u8d56",level:2},{value:"\u7f16\u5199\u4e00\u4e2a\u7a0b\u5e8f\u4f7f\u7528\u5305 <code>konfig</code> \u4e2d\u7684\u5185\u5bb9",id:"\u7f16\u5199\u4e00\u4e2a\u7a0b\u5e8f\u4f7f\u7528\u5305-konfig-\u4e2d\u7684\u5185\u5bb9",level:2},{value:"3. \u8fd0\u884c KCL \u4ee3\u7801",id:"3-\u8fd0\u884c-kcl-\u4ee3\u7801",level:2}],k={toc:p},s="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(s,(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,r.kt)("h2",{id:"0-\u524d\u7f6e\u6761\u4ef6"},"0. \u524d\u7f6e\u6761\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5b89\u88c5 ",(0,r.kt)("a",{parentName:"li",href:"https://kcl-lang.io/docs/user_docs/getting-started/install/"},"kcl"))),(0,r.kt)("h2",{id:"1-\u521d\u59cb\u5316\u4e00\u4e2a\u7a7a\u7684-kcl-\u5305"},"1. \u521d\u59cb\u5316\u4e00\u4e2a\u7a7a\u7684 KCL \u5305"),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl mod init")," \u547d\u4ee4\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"my_package")," \u7684 kcl \u7a0b\u5e8f\u5305, \u5e76\u4e14\u5728\u6211\u4eec\u521b\u5efa\u5b8c\u6210\u4e00\u4e2a\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"my_package")," \u7684\u5305\u540e\uff0c\u6211\u4eec\u9700\u8981\u901a\u8fc7\u547d\u4ee4 ",(0,r.kt)("inlineCode",{parentName:"p"},"cd my_package")," \u8fdb\u5165\u8fd9\u4e2a\u5305\u6765\u8fdb\u884c\u540e\u7eed\u7684\u64cd\u4f5c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kcl mod init my_package && cd my_package\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"kcl")," \u5c06\u4f1a\u5728\u6267\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"kcl mod init my_package"),"\u547d\u4ee4\u7684\u76ee\u5f55\u4e0b\u521b\u5efa\u4e24\u4e2a\u9ed8\u8ba4\u7684\u914d\u7f6e\u6587\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl.mod")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl.mod.lock"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"- my_package\n        |- kcl.mod\n        |- kcl.mod.lock\n        |- # \u4f60\u53ef\u4ee5\u76f4\u63a5\u5728\u8fd9\u4e2a\u76ee\u5f55\u4e0b\u5199\u4f60\u7684kcl\u7a0b\u5e8f\u3002\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"kcl.mod.lock")," \u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl")," \u7528\u6765\u56fa\u5b9a\u4f9d\u8d56\u7248\u672c\u7684\u6587\u4ef6\uff0c\u662f\u81ea\u52a8\u751f\u6210\u7684\uff0c\u8bf7\u4e0d\u8981\u4eba\u5de5\u4fee\u6539\u8fd9\u4e2a\u6587\u4ef6\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"kcl")," \u5c06\u4f1a\u4e3a\u8fd9\u4e2a\u65b0\u5305\u521b\u5efa\u4e00\u4e2a\u9ed8\u8ba4\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl.mod"),"\u3002\u5982\u4e0b\u6240\u793a:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'[package]\nname = "my_package"\nedition = "0.0.1"\nversion = "0.0.1"\n')),(0,r.kt)("h2",{id:"2-\u4e3a-kcl-\u5305\u6dfb\u52a0\u4f9d\u8d56"},"2. \u4e3a KCL \u5305\u6dfb\u52a0\u4f9d\u8d56"),(0,r.kt)("p",null,"\u7136\u540e\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl mod add")," \u547d\u4ee4\u6765\u4e3a\u60a8\u5f53\u524d\u7684\u5e93\u6dfb\u52a0\u4e00\u4e2a\u5916\u90e8\u4f9d\u8d56\u3002"),(0,r.kt)("p",null,"\u5982\u4e0b\u9762\u7684\u547d\u4ee4\u6240\u793a\uff0c\u4e3a\u5f53\u524d\u5305\u6dfb\u52a0\u4e00\u4e2a\u7248\u672c\u53f7\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"1.28")," \u5e76\u4e14\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"k8s")," \u7684\u4f9d\u8d56\u5305\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kcl mod add k8s:1.28\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"kcl")," \u4f1a\u4e3a\u60a8\u5c06\u4f9d\u8d56\u6dfb\u52a0\u5230 kcl.mod \u6587\u4ef6\u4e2d."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'[package]\nname = "my_package"\nedition = "0.0.1"\nversion = "0.0.1"\n\n[dependencies]\nk8s = "1.28" # The dependency \'k8s\' with version \'1.28\'\n')),(0,r.kt)("h2",{id:"\u7f16\u5199\u4e00\u4e2a\u7a0b\u5e8f\u4f7f\u7528\u5305-konfig-\u4e2d\u7684\u5185\u5bb9"},"\u7f16\u5199\u4e00\u4e2a\u7a0b\u5e8f\u4f7f\u7528\u5305 ",(0,r.kt)("inlineCode",{parentName:"h2"},"konfig")," \u4e2d\u7684\u5185\u5bb9"),(0,r.kt)("p",null,"\u5728\u5f53\u524d\u5305\u4e2d\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},"main.k"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"- my_package\n        |- kcl.mod\n        |- kcl.mod.lock\n        |- main.k # Your KCL program.\n")),(0,r.kt)("p",null,"\u5e76\u4e14\u5c06\u4e0b\u9762\u7684\u5185\u5bb9\u5199\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"main.k")," \u6587\u4ef6\u4e2d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kcl"},'# \u5bfc\u5165\u5e76\u4f7f\u7528\u5916\u90e8\u4f9d\u8d56 `k8s` \u5305\u4e2d\u7684\u5185\u5bb9\u3002\nimport k8s.api.core.v1 as k8core\n\nk8core.Pod {\n    metadata.name = "web-app"\n    spec.containers = [{\n        name = "main-container"\n        image = "nginx"\n        ports = [{containerPort = 80}]\n    }]\n}\n\n')),(0,r.kt)("h2",{id:"3-\u8fd0\u884c-kcl-\u4ee3\u7801"},"3. \u8fd0\u884c KCL \u4ee3\u7801"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 kcl \u7f16\u8bd1\u521a\u624d\u7f16\u5199\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"main.k")," \u6587\u4ef6, \u5f97\u5230\u7f16\u8bd1\u540e\u7684\u7ed3\u679c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kcl run\n")),(0,r.kt)("p",null,"\u8f93\u51fa\u4e3a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: web-app\nspec:\n  containers:\n    - image: nginx\n      name: main-container\n      ports:\n        - containerPort: 80\n")))}d.isMDXComponent=!0}}]);