"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[12440],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(t),d=r,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||p;return t?a.createElement(k,i(i({ref:n},c),{},{components:t})):a.createElement(k,i({ref:n},c))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=t.length,i=new Array(p);i[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<p;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},39792:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>p,metadata:()=>o,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const p={id:"guide",sidebar_label:"\u5feb\u901f\u5f00\u59cb"},i="\u7b80\u4ecb",o={unversionedId:"user_docs/guides/working-with-konfig/guide",id:"version-0.7.0/user_docs/guides/working-with-konfig/guide",title:"\u7b80\u4ecb",description:"\u672c\u7bc7\u6307\u5357\u5411\u4f60\u5c55\u793a\uff0c\u5982\u4f55\u4f7f\u7528 KCL \u8bed\u8a00\u4e0e\u5176\u76f8\u5bf9\u5e94\u7684 CLI \u5de5\u5177\uff0c\u5b8c\u6210\u4e00\u4e2a\u8fd0\u884c\u5728 Kubernetes \u4e2d\u7684 Long-Running \u5e94\u7528\u7684\u90e8\u7f72\uff0c\u6211\u4eec\u5c06\u7ec4\u7ec7\u914d\u7f6e\u7684\u5355\u4f4d\u53eb\u505a\u5e94\u7528\uff08Application\uff09\uff0c\u63cf\u8ff0\u5e94\u7528\u90e8\u7f72\u548c\u8fd0\u7ef4\u7ec6\u8282\u7684\u914d\u7f6e\u96c6\u5408\u53eb\u505a\u5e94\u7528\u670d\u52a1\uff08Server\uff09\uff0c\u5b83\u672c\u8d28\u4e0a\u662f\u901a\u8fc7 KCL \u5b9a\u4e49\u7684\u8fd0\u7ef4\u6a21\u578b\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.7.0/user_docs/guides/working-with-konfig/3-quick-start.md",sourceDirName:"user_docs/guides/working-with-konfig",slug:"/user_docs/guides/working-with-konfig/guide",permalink:"/zh-CN/docs/user_docs/guides/working-with-konfig/guide",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.7.0/user_docs/guides/working-with-konfig/3-quick-start.md",tags:[],version:"0.7.0",lastUpdatedBy:"Peefy",lastUpdatedAt:1705584615,formattedLastUpdatedAt:"2024\u5e741\u670818\u65e5",sidebarPosition:3,frontMatter:{id:"guide",sidebar_label:"\u5feb\u901f\u5f00\u59cb"},sidebar:"user_docs",previous:{title:"\u5de5\u7a0b\u7ed3\u6784",permalink:"/zh-CN/docs/user_docs/guides/working-with-konfig/structure"},next:{title:"\u6700\u4f73\u5b9e\u8df5",permalink:"/zh-CN/docs/user_docs/guides/working-with-konfig/practice"}},l={},s=[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb",level:2},{value:"1. \u914d\u7f6e\u7f16\u8bd1",id:"1-\u914d\u7f6e\u7f16\u8bd1",level:3},{value:"2. \u914d\u7f6e\u4fee\u6539",id:"2-\u914d\u7f6e\u4fee\u6539",level:3},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:2}],c={toc:s},m="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,r.kt)("p",null,"\u672c\u7bc7\u6307\u5357\u5411\u4f60\u5c55\u793a\uff0c\u5982\u4f55\u4f7f\u7528 KCL \u8bed\u8a00\u4e0e\u5176\u76f8\u5bf9\u5e94\u7684 CLI \u5de5\u5177\uff0c\u5b8c\u6210\u4e00\u4e2a\u8fd0\u884c\u5728 Kubernetes \u4e2d\u7684 Long-Running \u5e94\u7528\u7684\u90e8\u7f72\uff0c\u6211\u4eec\u5c06\u7ec4\u7ec7\u914d\u7f6e\u7684\u5355\u4f4d\u53eb\u505a\u5e94\u7528\uff08Application\uff09\uff0c\u63cf\u8ff0\u5e94\u7528\u90e8\u7f72\u548c\u8fd0\u7ef4\u7ec6\u8282\u7684\u914d\u7f6e\u96c6\u5408\u53eb\u505a\u5e94\u7528\u670d\u52a1\uff08Server\uff09\uff0c\u5b83\u672c\u8d28\u4e0a\u662f\u901a\u8fc7 KCL \u5b9a\u4e49\u7684\u8fd0\u7ef4\u6a21\u578b\u3002"),(0,r.kt)("p",null,"\u8981\u5c06\u4e00\u4e2a\u8fd0\u884c\u5728 Kubernetes \u4e2d\u7684\u5e94\u7528\u5b8c\u5168\u90e8\u7f72\u8d77\u6765\uff0c\u4e00\u822c\u9700\u8981\u4e0b\u53d1\u591a\u4e2a Kubernetes \u8d44\u6e90\uff0c\u672c\u6b21\u6f14\u793a\u7684\u6837\u4f8b\u6d89\u53ca\u4ee5\u4e0b Kubernetes \u8d44\u6e90\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u547d\u540d\u7a7a\u95f4\uff08Namespace\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u65e0\u72b6\u6001\u5de5\u4f5c\u8d1f\u8f7d\uff08Deployment\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u670d\u52a1\uff08Service\uff09")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4e0d\u6e05\u695a\u76f8\u5173\u6982\u5ff5\u7684\uff0c\u53ef\u4ee5\u524d\u5f80 Kubernetes \u5b98\u65b9\u7f51\u7ad9\uff0c\u67e5\u770b\u76f8\u5173\u8bf4\u660e\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tutorials/kubernetes-basics/"},"Learn Kubernetes Basics")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/"},"Namespace")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"},"Deployment")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/services-networking/service/"},"Service"))),(0,r.kt)("h2",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,r.kt)("p",null,"\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u6211\u4eec\u9700\u8981\u505a\u4ee5\u4e0b\u51c6\u5907\u5de5\u4f5c\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5b89\u88c5 ",(0,r.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/user_docs/getting-started/install/"},"kcl"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4e0b\u8f7d\u5f00\u6e90 Konfig \u5e93\uff0c\u4ed3\u5e93\u5730\u5740: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/konfig.git"},"https://github.com/kcl-lang/konfig.git")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/kcl-lang/konfig.git && cd konfig\n")),(0,r.kt)("h2",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,r.kt)("h3",{id:"1-\u914d\u7f6e\u7f16\u8bd1"},"1. \u914d\u7f6e\u7f16\u8bd1"),(0,r.kt)("p",null,"Konfig \u7684\u7f16\u7a0b\u8bed\u8a00\u662f KCL\uff0c\u4e0d\u662f Kubernetes \u8ba4\u8bc6\u7684 JSON/YAML\uff0c\u56e0\u6b64\u8fd8\u9700\u8981\u7f16\u8bd1\u5f97\u5230\u6700\u7ec8\u8f93\u51fa\u3002"),(0,r.kt)("p",null,"\u8fdb\u5165\u5230\u9879\u76ee\u7684 Stack \u76ee\u5f55\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"examples/appops/nginx-example/dev"),"\uff09\u5e76\u6267\u884c\u7f16\u8bd1\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd examples/appops/nginx-example/dev && kcl run\n")),(0,r.kt)("p",null,"\u53ef\u4ee5\u83b7\u5f97\u5982\u4e0b YAML \u8f93\u51fa:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: sampleappprod\n  namespace: sampleapp\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app.kubernetes.io/name: sampleapp\n      app.kubernetes.io/env: prod\n      app.kubernetes.io/instance: sampleapp-prod\n      app.k8s.io/component: sampleappprod\n  template:\n    metadata:\n      labels:\n        app.kubernetes.io/name: sampleapp\n        app.kubernetes.io/env: prod\n        app.kubernetes.io/instance: sampleapp-prod\n        app.k8s.io/component: sampleappprod\n    spec:\n      containers:\n        - image: nginx:1.7.8\n          name: main\n          ports:\n            - containerPort: 80\n              protocol: TCP\n          resources:\n            limits:\n              cpu: 100m\n              memory: 100Mi\n              ephemeral-storage: 1Gi\n            requests:\n              cpu: 100m\n              memory: 100Mi\n              ephemeral-storage: 1Gi\n---\napiVersion: v1\nkind: Namespace\nmetadata:\n  name: sampleapp\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: nginx\n  namespace: sampleapp\nspec:\n  ports:\n    - nodePort: 30201\n      port: 80\n      targetPort: 80\n  selector:\n    app.kubernetes.io/name: sampleapp\n    app.kubernetes.io/env: prod\n    app.kubernetes.io/instance: sampleapp-prod\n    app.k8s.io/component: sampleappprod\n  type: NodePort\n")),(0,r.kt)("p",null,"\u5b8c\u6210\u7f16\u8bd1\uff0c\u53ef\u4ee5\u770b\u5230 3 \u4e2a\u8d44\u6e90\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e00\u4e2a name \u4e3a nginx-exampledev \u7684 Deployment"),(0,r.kt)("li",{parentName:"ul"},"\u4e00\u4e2a name \u4e3a nginx-example \u7684 Namespace"),(0,r.kt)("li",{parentName:"ul"},"\u4e00\u4e2a name \u4e3a nginx-example \u7684 Service")),(0,r.kt)("h3",{id:"2-\u914d\u7f6e\u4fee\u6539"},"2. \u914d\u7f6e\u4fee\u6539"),(0,r.kt)("p",null,"Server \u6a21\u578b\u4e2d\u7684 image \u5c5e\u6027\u7528\u4e8e\u58f0\u660e\u5e94\u7528\u7684\u4e1a\u52a1\u5bb9\u5668\u955c\u50cf\uff0c\u6211\u4eec\u53ef\u4ee5\u4fee\u6539 base/main.k \u4e2d\u7684 image \u7684\u503c\u8fdb\u884c\u955c\u50cf\u4fee\u6539\u6216\u5347\u7ea7:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'14c14\n<     image = "nginx:1.7.8"\n---\n>     image = "nginx:latest"\n')),(0,r.kt)("p",null,"\u91cd\u65b0\u7f16\u8bd1\u914d\u7f6e\u4ee3\u7801\u53ef\u4ee5\u83b7\u5f97\u4fee\u6539\u540e\u7684 YAML \u8f93\u51fa\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kpm run\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-exampledev\n  namespace: nginx-example\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app.kubernetes.io/name: nginx-example\n      app.kubernetes.io/env: dev\n      app.kubernetes.io/instance: nginx-example-dev\n      app.kubernetes.io/component: nginx-exampledev\n  template:\n    metadata:\n      labels:\n        app.kubernetes.io/name: nginx-example\n        app.kubernetes.io/env: dev\n        app.kubernetes.io/instance: nginx-example-dev\n        app.kubernetes.io/component: nginx-exampledev\n    spec:\n      containers:\n        - image: nginx:latest\n          name: main\n          ports:\n            - containerPort: 80\n              protocol: TCP\n          resources:\n            limits:\n              cpu: 100m\n              memory: 100Mi\n              ephemeral-storage: 1Gi\n            requests:\n              cpu: 100m\n              memory: 100Mi\n              ephemeral-storage: 1Gi\n---\napiVersion: v1\nkind: Namespace\nmetadata:\n  name: nginx-example\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: nginx-example\n  namespace: nginx-example\nspec:\n  ports:\n    - nodePort: 30201\n      port: 80\n      targetPort: 80\n  selector:\n    app.kubernetes.io/name: nginx-example\n    app.kubernetes.io/env: dev\n    app.kubernetes.io/instance: nginx-example-dev\n    app.kubernetes.io/component: nginx-exampledev\n  type: NodePort\n")),(0,r.kt)("h2",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),(0,r.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u4e86\u5982\u4f55\u4f7f\u7528 KCL \u8bed\u8a00\u4e0e\u5176\u76f8\u5bf9\u5e94\u7684 Konfig \u5e93\uff0c\u5b8c\u6210\u4e00\u4e2a\u8fd0\u884c\u5728 Kubernetes \u4e2d\u7684 Long-Running \u670d\u52a1\u5e94\u7528\u7684\u90e8\u7f72\u3002"))}u.isMDXComponent=!0}}]);