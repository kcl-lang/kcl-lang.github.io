"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[58163],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,k=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?i.createElement(k,a(a({ref:t},c),{},{components:n})):i.createElement(k,a({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29687:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var i=n(87462),r=(n(67294),n(3905));const o={title:"Kustomize KCL Plugin",sidebar_position:3},a=void 0,s={unversionedId:"user_docs/guides/working-with-k8s/mutate-manifests/kustomize-kcl-plugin",id:"user_docs/guides/working-with-k8s/mutate-manifests/kustomize-kcl-plugin",title:"Kustomize KCL Plugin",description:"Introduction",source:"@site/docs/user_docs/guides/working-with-k8s/3-mutate-manifests/3-kustomize-kcl-plugin.md",sourceDirName:"user_docs/guides/working-with-k8s/3-mutate-manifests",slug:"/user_docs/guides/working-with-k8s/mutate-manifests/kustomize-kcl-plugin",permalink:"/docs/next/user_docs/guides/working-with-k8s/mutate-manifests/kustomize-kcl-plugin",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/user_docs/guides/working-with-k8s/3-mutate-manifests/3-kustomize-kcl-plugin.md",tags:[],version:"current",lastUpdatedBy:"peefy",lastUpdatedAt:1710906677,formattedLastUpdatedAt:"Mar 20, 2024",sidebarPosition:3,frontMatter:{title:"Kustomize KCL Plugin",sidebar_position:3},sidebar:"user_docs",previous:{title:"Helm KCL Plugin",permalink:"/docs/next/user_docs/guides/working-with-k8s/mutate-manifests/helm-kcl-plugin"},next:{title:"KPT KCL SDK",permalink:"/docs/next/user_docs/guides/working-with-k8s/mutate-manifests/kpt-kcl-sdk"}},l={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"1. Get the Example",id:"1-get-the-example",level:3},{value:"2. Test and Run",id:"2-test-and-run",level:3},{value:"Guides for Developing KCL",id:"guides-for-developing-kcl",level:2},{value:"More Documents and Examples",id:"more-documents-and-examples",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/kustomize"},"Kustomize")," lets you customize raw, template-free YAML files for multiple purposes, leaving the original YAML untouched and usable as is."),(0,r.kt)("p",null,"KCL can be used to create functions to mutate and/or validate the YAML Kubernetes Resource Model (KRM) input/output format, and we provide Kustomize KCL functions to simplify the function authoring process."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/kustomize"},"kustomize")),(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://www.docker.com/"},"Docker"))),(0,r.kt)("h2",{id:"quick-start"},"Quick Start"),(0,r.kt)("p",null,"Let\u2019s write a KCL function which add annotation ",(0,r.kt)("inlineCode",{parentName:"p"},"managed-by=kustomize-kcl")," only to Deployment resources."),(0,r.kt)("h3",{id:"1-get-the-example"},"1. Get the Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/kcl-lang/kustomize-kcl.git\ncd ./kustomize-kcl/examples/set-annotation/\n")),(0,r.kt)("h3",{id:"2-test-and-run"},"2. Test and Run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kustomize fn run ./local-resource/ --dry-run\n")),(0,r.kt)("p",null,"The output YAML is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: krm.kcl.dev/v1alpha1\nkind: KCLRun\nmetadata:\n  name: set-annotation\n  annotations:\n    config.kubernetes.io/function: |\n      container:\n        image: docker.io/kcllang/kustomize-kcl:v0.2.0\n    config.kubernetes.io/path: example-use.yaml\n    internal.config.kubernetes.io/path: example-use.yaml\n# EDIT THE SOURCE!\n# This should be your KCL code which preloads the `ResourceList` to `option("resource_list")\nspec:\n  source: |\n    [resource | {if resource.kind == "Deployment": metadata.annotations: {"managed-by" = "kustomize-kcl"}} for resource in option("resource_list").items]\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: test\n  annotations:\n    config.kubernetes.io/path: example-use.yaml\n    internal.config.kubernetes.io/path: example-use.yaml\nspec:\n  selector:\n    app: MyApp\n  ports:\n    - protocol: TCP\n      port: 80\n      targetPort: 9376\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\n  labels:\n    app: nginx\n  annotations:\n    config.kubernetes.io/path: example-use.yaml\n    internal.config.kubernetes.io/path: example-use.yaml\n    managed-by: kustomize-kcl\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n        - name: nginx\n          image: nginx:1.14.2\n          ports:\n            - containerPort: 80\n')),(0,r.kt)("h2",{id:"guides-for-developing-kcl"},"Guides for Developing KCL"),(0,r.kt)("p",null,"Here's what you can do in the KCL code:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Read resources from ",(0,r.kt)("inlineCode",{parentName:"li"},'option("resource_list")'),". The ",(0,r.kt)("inlineCode",{parentName:"li"},'option("resource_list")')," complies with the ",(0,r.kt)("a",{parentName:"li",href:"https://kpt.dev/book/05-developing-functions/01-functions-specification"},"KRM Functions Specification"),". You can read the input resources from ",(0,r.kt)("inlineCode",{parentName:"li"},'option("resource_list")["items"]')," and the ",(0,r.kt)("inlineCode",{parentName:"li"},"functionConfig")," from ",(0,r.kt)("inlineCode",{parentName:"li"},'option("resource_list")["functionConfig"]'),"."),(0,r.kt)("li",{parentName:"ul"},"Return a KRM list for output resources."),(0,r.kt)("li",{parentName:"ul"},"Return an error using ",(0,r.kt)("inlineCode",{parentName:"li"},"assert {condition}, {error_message}"),".")),(0,r.kt)("h2",{id:"more-documents-and-examples"},"More Documents and Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/kcl-lang/kustomize-kcl"},"Kustomize KCL Plugin"))))}m.isMDXComponent=!0}}]);