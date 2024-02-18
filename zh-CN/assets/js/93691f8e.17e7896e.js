"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[30748],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),k=r,d=p["".concat(l,".").concat(k)]||p[k]||m[k]||a;return n?i.createElement(d,o(o({ref:t},c),{},{components:n})):i.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}k.displayName="MDXCreateElement"},82300:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var i=n(87462),r=(n(67294),n(3905));const a={title:"Kustomize KCL \u63d2\u4ef6",sidebar_position:3},o=void 0,s={unversionedId:"user_docs/guides/working-with-k8s/mutate-manifests/kustomize-kcl-plugin",id:"version-0.5.4/user_docs/guides/working-with-k8s/mutate-manifests/kustomize-kcl-plugin",title:"Kustomize KCL \u63d2\u4ef6",description:"\u7b80\u4ecb",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.5.4/user_docs/guides/working-with-k8s/3-mutate-manifests/3-kustomize-kcl-plugin.md",sourceDirName:"user_docs/guides/working-with-k8s/3-mutate-manifests",slug:"/user_docs/guides/working-with-k8s/mutate-manifests/kustomize-kcl-plugin",permalink:"/zh-CN/docs/0.5.4/user_docs/guides/working-with-k8s/mutate-manifests/kustomize-kcl-plugin",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.4/user_docs/guides/working-with-k8s/3-mutate-manifests/3-kustomize-kcl-plugin.md",tags:[],version:"0.5.4",lastUpdatedBy:"Peefy",lastUpdatedAt:1708241829,formattedLastUpdatedAt:"2024\u5e742\u670818\u65e5",sidebarPosition:3,frontMatter:{title:"Kustomize KCL \u63d2\u4ef6",sidebar_position:3},sidebar:"user_docs",previous:{title:"Helm KCL \u63d2\u4ef6",permalink:"/zh-CN/docs/0.5.4/user_docs/guides/working-with-k8s/mutate-manifests/helm-kcl-plugin"},next:{title:"KPT KCL SDK",permalink:"/zh-CN/docs/0.5.4/user_docs/guides/working-with-k8s/mutate-manifests/kpt-kcl-sdk"}},l={},u=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:2},{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb",level:2},{value:"1. \u83b7\u53d6\u793a\u4f8b",id:"1-\u83b7\u53d6\u793a\u4f8b",level:3},{value:"2. \u6d4b\u8bd5\u548c\u8fd0\u884c",id:"2-\u6d4b\u8bd5\u548c\u8fd0\u884c",level:3},{value:"KCL \u5f00\u53d1\u6307\u5357",id:"kcl-\u5f00\u53d1\u6307\u5357",level:2},{value:"\u66f4\u591a\u6587\u6863\u548c\u793a\u4f8b",id:"\u66f4\u591a\u6587\u6863\u548c\u793a\u4f8b",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/kustomize"},"Kustomize")," \u5141\u8bb8\u81ea\u5b9a\u4e49\u7528\u4e8e\u591a\u79cd\u76ee\u7684\u539f\u59cb\u7684\u3001\u65e0\u6a21\u677f\u7684 YAML \u6587\u4ef6\uff0c\u540c\u65f6\u4fdd\u7559\u539f\u59cb YAML \u4e0d\u53d8\u548c\u53ef\u7528\u3002"),(0,r.kt)("p",null,"KCL \u53ef\u7528\u4e8e\u521b\u5efa\u51fd\u6570\uff0c\u4ee5\u6539\u53d8\u548c/\u6216\u9a8c\u8bc1 Kubernetes \u8d44\u6e90\u6a21\u578b\uff08KRM\uff09\u7684 YAML \u8f93\u5165/\u8f93\u51fa\u683c\u5f0f\uff0c\u5e76\u4e14\u6211\u4eec\u63d0\u4f9b Kustomize KCL \u51fd\u6570\u6765\u7b80\u5316\u51fd\u6570\u7f16\u5199\u8fc7\u7a0b\u3002"),(0,r.kt)("h2",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5b89\u88c5 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/kustomize"},"kustomize"))),(0,r.kt)("h2",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,r.kt)("p",null,"\u8ba9\u6211\u4eec\u7f16\u5199\u4e00\u4e2a\u4ec5\u5411 Deployment \u8d44\u6e90\u6dfb\u52a0 annotation ",(0,r.kt)("inlineCode",{parentName:"p"},"managed-by=kustomize-kcl")," \u7684 KCL \u51fd\u6570"),(0,r.kt)("h3",{id:"1-\u83b7\u53d6\u793a\u4f8b"},"1. \u83b7\u53d6\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/kcl-lang/kustomize-kcl.git\ncd ./kustomize-kcl/examples/set-annotation/\n")),(0,r.kt)("h3",{id:"2-\u6d4b\u8bd5\u548c\u8fd0\u884c"},"2. \u6d4b\u8bd5\u548c\u8fd0\u884c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kustomize fn run ./local-resource/ --dry-run\n")),(0,r.kt)("p",null,"\u8f93\u51fa\u7684YAML\u4e3a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: krm.kcl.dev/v1alpha1\nkind: KCLRun\nmetadata:\n  name: set-annotation\n  annotations:\n    config.kubernetes.io/function: |\n      container:\n        image: docker.io/kcllang/kustomize-kcl:v0.2.0\n    config.kubernetes.io/path: example-use.yaml\n    internal.config.kubernetes.io/path: example-use.yaml\n# EDIT THE SOURCE!\n# This should be your KCL code which preloads the `ResourceList` to `option("resource_list")\nspec:\n  source: |\n    [resource | {if resource.kind == "Deployment": metadata.annotations: {"managed-by" = "kustomize-kcl"}} for resource in option("resource_list").items]\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: test\n  annotations:\n    config.kubernetes.io/path: example-use.yaml\n    internal.config.kubernetes.io/path: example-use.yaml\nspec:\n  selector:\n    app: MyApp\n  ports:\n    - protocol: TCP\n      port: 80\n      targetPort: 9376\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\n  labels:\n    app: nginx\n  annotations:\n    config.kubernetes.io/path: example-use.yaml\n    internal.config.kubernetes.io/path: example-use.yaml\n    managed-by: kustomize-kcl\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n        - name: nginx\n          image: nginx:1.14.2\n          ports:\n            - containerPort: 80\n')),(0,r.kt)("h2",{id:"kcl-\u5f00\u53d1\u6307\u5357"},"KCL \u5f00\u53d1\u6307\u5357"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u53ef\u4ee5\u4f7f\u7528 KCL \u6267\u884c\u7684\u64cd\u4f5c\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4ece ",(0,r.kt)("inlineCode",{parentName:"li"},'option("resource_list")')," \u8bfb\u53d6\u8d44\u6e90\u3002",(0,r.kt)("inlineCode",{parentName:"li"},'option("resource_list")')," \u7b26\u5408 ",(0,r.kt)("a",{parentName:"li",href:"https://kpt.dev/book/05-developing-functions/01-functions-specification"},"KRM \u51fd\u6570\u89c4\u8303"),"\u3002 \u4f60\u53ef\u4ee5\u4ece ",(0,r.kt)("inlineCode",{parentName:"li"},'option("resource_list")["items"]')," \u8bfb\u53d6\u8f93\u5165\u8d44\u6e90\uff0c\u5e76\u4ece ",(0,r.kt)("inlineCode",{parentName:"li"},'option("resource_list")["functionConfig"]')," \u8bfb\u53d6 ",(0,r.kt)("inlineCode",{parentName:"li"},"functionConfig"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u8f93\u51fa\u8d44\u6e90\u7684 KPM \u5217\u8868\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"assert {condition}\uff0c{error_message}")," \u8fd4\u56de\u9519\u8bef\u6d88\u606f\u3002")),(0,r.kt)("h2",{id:"\u66f4\u591a\u6587\u6863\u548c\u793a\u4f8b"},"\u66f4\u591a\u6587\u6863\u548c\u793a\u4f8b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/kcl-lang/kustomize-kcl"},"Kustomize KCL \u63d2\u4ef6"))))}m.isMDXComponent=!0}}]);