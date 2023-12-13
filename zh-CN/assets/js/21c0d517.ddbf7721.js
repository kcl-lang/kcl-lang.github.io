"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[43979],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),k=o,m=p["".concat(l,".").concat(k)]||p[k]||d[k]||a;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=k;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},16701:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={},s="KPT KCL SDK",i={unversionedId:"user_docs/guides/working-with-k8s/kpt_kcl_sdk",id:"version-0.4.5/user_docs/guides/working-with-k8s/kpt_kcl_sdk",title:"KPT KCL SDK",description:"kpt \u662f\u4e00\u4e2a\u4ee5\u5305\u4e3a\u4e2d\u5fc3\u7684\u5de5\u5177\u94fe\uff0c\u53ef\u5b9e\u73b0\u914d\u7f6e\u539f\u5730\u7f16\u8f91\u3001\u81ea\u52a8\u5316\u548c\u4ea4\u4ed8\uff0c\u901a\u8fc7\u5c06\u58f0\u660e\u6027\u914d\u7f6e\u4f5c\u4e3a\u6570\u636e\u8fdb\u884c\u64cd\u4f5c\uff0c\u4ece\u800c\u7b80\u5316 Kubernetes \u5e73\u53f0\u548c KRM \u9a71\u52a8\u7684\u57fa\u7840\u8bbe\u65bd\uff08\u4f8b\u5982\uff0cConfig Connector\u3001Crossplane\uff09\u7684\u5927\u89c4\u6a21\u7ba1\u7406\uff0c\u4ee5\u5b9e\u73b0 Kubernetes \u914d\u7f6e\u7f16\u8f91\u7684\u81ea\u52a8\u5316\u5305\u62ec\u8f6c\u6362\u548c\u9a8c\u8bc1\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.4.5/user_docs/guides/working-with-k8s/kpt_kcl_sdk.md",sourceDirName:"user_docs/guides/working-with-k8s",slug:"/user_docs/guides/working-with-k8s/kpt_kcl_sdk",permalink:"/zh-CN/docs/0.4.5/user_docs/guides/working-with-k8s/kpt_kcl_sdk",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.4.5/user_docs/guides/working-with-k8s/kpt_kcl_sdk.md",tags:[],version:"0.4.5",lastUpdatedBy:"peefy",lastUpdatedAt:1702459904,formattedLastUpdatedAt:"2023\u5e7412\u670813\u65e5",frontMatter:{},sidebar:"user_docs",previous:{title:"\u4f7f\u7528 KCL \u751f\u6210\u5e76\u7ba1\u7406 Kubernetes \u8d44\u6e90\u914d\u7f6e",permalink:"/zh-CN/docs/0.4.5/user_docs/guides/working-with-k8s/generate_k8s_manifests"},next:{title:"KCL \u4e0e\u5176\u4ed6 Kubernetes \u914d\u7f6e\u7ba1\u7406\u5de5\u5177\u7684\u5f02\u540c - Helm \u7bc7",permalink:"/zh-CN/docs/0.4.5/user_docs/guides/working-with-k8s/vs_helm"}},l={},c=[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:2},{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb",level:2},{value:"\u83b7\u53d6\u793a\u4f8b",id:"\u83b7\u53d6\u793a\u4f8b",level:2},{value:"\u663e\u793a KRM",id:"\u663e\u793a-krm",level:2},{value:"\u66f4\u65b0 <code>FunctionConfig</code>",id:"\u66f4\u65b0-functionconfig",level:2},{value:"\u6d4b\u8bd5\u548c\u8fd0\u884c",id:"\u6d4b\u8bd5\u548c\u8fd0\u884c",level:2},{value:"\u66f4\u591a\u6587\u6863\u548c\u793a\u4f8b",id:"\u66f4\u591a\u6587\u6863\u548c\u793a\u4f8b",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kpt-kcl-sdk"},"KPT KCL SDK"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/GoogleContainerTools/kpt"},"kpt")," \u662f\u4e00\u4e2a\u4ee5\u5305\u4e3a\u4e2d\u5fc3\u7684\u5de5\u5177\u94fe\uff0c\u53ef\u5b9e\u73b0\u914d\u7f6e\u539f\u5730\u7f16\u8f91\u3001\u81ea\u52a8\u5316\u548c\u4ea4\u4ed8\uff0c\u901a\u8fc7\u5c06\u58f0\u660e\u6027\u914d\u7f6e\u4f5c\u4e3a\u6570\u636e\u8fdb\u884c\u64cd\u4f5c\uff0c\u4ece\u800c\u7b80\u5316 Kubernetes \u5e73\u53f0\u548c KRM \u9a71\u52a8\u7684\u57fa\u7840\u8bbe\u65bd\uff08\u4f8b\u5982\uff0cConfig Connector\u3001Crossplane\uff09\u7684\u5927\u89c4\u6a21\u7ba1\u7406\uff0c\u4ee5\u5b9e\u73b0 Kubernetes \u914d\u7f6e\u7f16\u8f91\u7684\u81ea\u52a8\u5316\u5305\u62ec\u8f6c\u6362\u548c\u9a8c\u8bc1\u3002"),(0,o.kt)("p",null,"KCL \u53ef\u7528\u4e8e\u521b\u5efa\u51fd\u6570\u6765\u8f6c\u6362\u548c/\u6216\u9a8c\u8bc1 YAML Kubernetes \u8d44\u6e90\u6a21\u578b (KRM) \u8f93\u5165/\u8f93\u51fa\u683c\u5f0f\uff0c\u4f46\u6211\u4eec\u63d0\u4f9b KPT KCL SDK \u6765\u7b80\u5316\u51fd\u6570\u7f16\u5199\u8fc7\u7a0b\u3002"),(0,o.kt)("h2",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5b89\u88c5 ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/GoogleContainerTools/kpt"},"kpt")),(0,o.kt)("li",{parentName:"ul"},"\u5b89\u88c5 Docker")),(0,o.kt)("h2",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,o.kt)("p",null,"Let\u2019s write a KCL function which add annotation ",(0,o.kt)("inlineCode",{parentName:"p"},"managed-by=kpt")," only to Deployment resources."),(0,o.kt)("p",null,"\u8ba9\u6211\u4eec\u7f16\u5199\u4e00\u4e2a\u4ec5\u5411 Deployment \u8d44\u6e90\u6dfb\u52a0\u6ce8\u91ca ",(0,o.kt)("inlineCode",{parentName:"p"},"managed-by=kpt")," \u7684 KCL \u51fd\u6570"),(0,o.kt)("h2",{id:"\u83b7\u53d6\u793a\u4f8b"},"\u83b7\u53d6\u793a\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/kcl-lang/kpt-kcl-sdk.git/\ncd ./kpt-kcl-sdk/get-started/set-annotation\n")),(0,o.kt)("h2",{id:"\u663e\u793a-krm"},"\u663e\u793a KRM"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kpt pkg tree\n")),(0,o.kt)("p",null,"\u8f93\u51fa\u4e3a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"set-annotation\n\u251c\u2500\u2500 [kcl-fn-config.yaml]  KCLRun set-annotation\n\u2514\u2500\u2500 data\n    \u251c\u2500\u2500 [resources.yaml]  Deployment nginx-deployment\n    \u2514\u2500\u2500 [resources.yaml]  Service test\n")),(0,o.kt)("h2",{id:"\u66f4\u65b0-functionconfig"},"\u66f4\u65b0 ",(0,o.kt)("inlineCode",{parentName:"h2"},"FunctionConfig")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# kcl-fn-config.yaml\napiVersion: krm.kcl.dev/v1alpha1\nkind: KCLRun\nmetadata: # kpt-merge: /set-annotation\n  name: set-annotation\nspec:\n  # EDIT THE SOURCE!\n  # This should be your KCL code which preloads the `ResourceList` to `option("resource_list")\n  source: |\n    [resource | {if resource.kind == "Deployment": metadata.annotations: {"managed-by" = "kpt"}} for resource in option("resource_list").items]\n')),(0,o.kt)("h2",{id:"\u6d4b\u8bd5\u548c\u8fd0\u884c"},"\u6d4b\u8bd5\u548c\u8fd0\u884c"),(0,o.kt)("p",null,"\u901a\u8fc7 kpt \u8fd0\u884c KCL \u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Note: you need add sudo and --as-current-user flags to ensure KCL has permission to write temp files in the container filesystem.\nsudo kpt fn eval ./data -i docker.io/kcllang/kpt-kcl:v0.2.0 --as-current-user --fn-config kcl-fn-config.yaml\n\n# Verify that the annotation is added to the `Deployment` resource and the other resource `Service`\n# does not have this annotation.\ncat ./data/resources.yaml | grep annotations -A1 -B5\n")),(0,o.kt)("h2",{id:"\u66f4\u591a\u6587\u6863\u548c\u793a\u4f8b"},"\u66f4\u591a\u6587\u6863\u548c\u793a\u4f8b"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/kcl-lang/kpt-kcl-sdk"},"KPT KCL SDK"))))}d.isMDXComponent=!0}}]);