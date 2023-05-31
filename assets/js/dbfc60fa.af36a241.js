"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[17255],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79078:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={title:"Helm KCL Plugin",sidebar_position:4},o=void 0,l={unversionedId:"user_docs/guides/working-with-k8s/helm_kcl_plugin",id:"user_docs/guides/working-with-k8s/helm_kcl_plugin",title:"Helm KCL Plugin",description:"Introduction",source:"@site/docs/user_docs/guides/working-with-k8s/helm_kcl_plugin.md",sourceDirName:"user_docs/guides/working-with-k8s",slug:"/user_docs/guides/working-with-k8s/helm_kcl_plugin",permalink:"/docs/next/user_docs/guides/working-with-k8s/helm_kcl_plugin",draft:!1,editUrl:"https://github.com/KusionStack/kcl-lang.io/tree/main/docs/user_docs/guides/working-with-k8s/helm_kcl_plugin.md",tags:[],version:"current",lastUpdatedBy:"peefy",lastUpdatedAt:1685538105,formattedLastUpdatedAt:"May 31, 2023",sidebarPosition:4,frontMatter:{title:"Helm KCL Plugin",sidebar_position:4},sidebar:"user_docs",previous:{title:"Kustomize KCL Plugin",permalink:"/docs/next/user_docs/guides/working-with-k8s/kustomize_kcl_plugin"},next:{title:"KPT KCL SDK",permalink:"/docs/next/user_docs/guides/working-with-k8s/kpt_kcl_sdk"}},s={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"1. Get the Example",id:"1-get-the-example",level:3},{value:"2. Test and Run",id:"2-test-and-run",level:3},{value:"Guides for Developing KCL",id:"guides-for-developing-kcl",level:2},{value:"More Documents and Examples",id:"more-documents-and-examples",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/helm/helm"},"Helm")," is a tool for managing Charts. Charts are packages of pre-configured Kubernetes resources. You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Helm-KCL-Plugin")," to"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Edit the helm charts in a hook way to separate data and logic for the Kubernetes manifests management."),(0,a.kt)("li",{parentName:"ul"},"For multi-environment and multi-tenant scenarios, you can maintain these configurations gracefully rather than simply copy and paste."),(0,a.kt)("li",{parentName:"ul"},"Validate all KRM resources using the KCL schema.")),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/helm/helm"},"Helm")),(0,a.kt)("li",{parentName:"ul"},"Install ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/helm-kcl"},"Helm KCL Plugin"))),(0,a.kt)("h2",{id:"quick-start"},"Quick Start"),(0,a.kt)("p",null,"Let\u2019s write a KCL function which add annotation ",(0,a.kt)("inlineCode",{parentName:"p"},"managed-by=helm-kcl-plugin")," only to ",(0,a.kt)("inlineCode",{parentName:"p"},"Deployment")," resources in the helm chart."),(0,a.kt)("h3",{id:"1-get-the-example"},"1. Get the Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/KusionStack/helm-kcl.git/\ncd ./helm-kcl/examples/workload-charts-with-kcl\n")),(0,a.kt)("h3",{id:"2-test-and-run"},"2. Test and Run"),(0,a.kt)("p",null,"Run the KCL code via the ",(0,a.kt)("inlineCode",{parentName:"p"},"Helm KCL Plugin"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"helm kcl template --file ./kcl-run.yaml\n")),(0,a.kt)("p",null,"The output yaml is"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  labels:\n    app.kubernetes.io/instance: workload\n    app.kubernetes.io/managed-by: Helm\n    app.kubernetes.io/name: workload\n    app.kubernetes.io/version: 0.1.0\n    helm.sh/chart: workload-0.1.0\n  name: workload\nspec:\n  ports:\n  - name: www\n    port: 80\n    protocol: TCP\n    targetPort: 80\n  selector:\n    app.kubernetes.io/instance: workload\n    app.kubernetes.io/name: workload\n  type: ClusterIP\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  labels:\n    app.kubernetes.io/instance: workload\n    app.kubernetes.io/managed-by: Helm\n    app.kubernetes.io/name: workload\n    app.kubernetes.io/version: 0.1.0\n    helm.sh/chart: workload-0.1.0\n  name: workload\n  annotations:\n    managed-by: helm-kcl-plugin\nspec:\n  selector:\n    matchLabels:\n      app.kubernetes.io/instance: workload\n      app.kubernetes.io/name: workload\n  template:\n    metadata:\n      labels:\n        app.kubernetes.io/instance: workload\n        app.kubernetes.io/name: workload\n    spec:\n      containers:\n      - image: nginx:alpine\n        name: frontend\n")),(0,a.kt)("h2",{id:"guides-for-developing-kcl"},"Guides for Developing KCL"),(0,a.kt)("p",null,"Here's what you can do in the KCL code:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Read resources from ",(0,a.kt)("inlineCode",{parentName:"li"},'option("resource_list")'),". The ",(0,a.kt)("inlineCode",{parentName:"li"},'option("resource_list")')," complies with the ",(0,a.kt)("a",{parentName:"li",href:"https://kpt.dev/book/05-developing-functions/01-functions-specification"},"KRM Functions Specification"),". You can read the input resources from ",(0,a.kt)("inlineCode",{parentName:"li"},'option("resource_list")["items"]')," and the ",(0,a.kt)("inlineCode",{parentName:"li"},"functionConfig")," from ",(0,a.kt)("inlineCode",{parentName:"li"},'option("resource_list")["functionConfig"]'),"."),(0,a.kt)("li",{parentName:"ul"},"Return a KPM list for output resources."),(0,a.kt)("li",{parentName:"ul"},"Return an error using ",(0,a.kt)("inlineCode",{parentName:"li"},"assert {condition}, {error_message}"),".")),(0,a.kt)("h2",{id:"more-documents-and-examples"},"More Documents and Examples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/helm-kcl"},"Helm KCL Plugin"))))}c.isMDXComponent=!0}}]);