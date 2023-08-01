"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3241],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},30045:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={},o="Helm KCL Plugin",i={unversionedId:"user_docs/guides/working-with-k8s/helm_kcl_plugin",id:"version-0.4.6/user_docs/guides/working-with-k8s/helm_kcl_plugin",title:"Helm KCL Plugin",description:"Helm is a tool for managing Charts. Charts are packages of pre-configured Kubernetes resources. You can use the Helm-KCL-Plugin to",source:"@site/versioned_docs/version-0.4.6/user_docs/guides/working-with-k8s/helm_kcl_plugin.md",sourceDirName:"user_docs/guides/working-with-k8s",slug:"/user_docs/guides/working-with-k8s/helm_kcl_plugin",permalink:"/docs/0.4.6/user_docs/guides/working-with-k8s/helm_kcl_plugin",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.4.6/user_docs/guides/working-with-k8s/helm_kcl_plugin.md",tags:[],version:"0.4.6",lastUpdatedBy:"peefy",lastUpdatedAt:1690883666,formattedLastUpdatedAt:"Aug 1, 2023",frontMatter:{},sidebar:"user_docs",previous:{title:"Use KCL to Generate and Manage Kubernetes Resources",permalink:"/docs/0.4.6/user_docs/guides/working-with-k8s/generate_k8s_manifests"},next:{title:"KPT KCL SDK",permalink:"/docs/0.4.6/user_docs/guides/working-with-k8s/kpt_kcl_sdk"}},s={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Get the Example",id:"get-the-example",level:3},{value:"Test and Run",id:"test-and-run",level:3},{value:"Guides for Developing KCL",id:"guides-for-developing-kcl",level:3},{value:"More Documents and Examples",id:"more-documents-and-examples",level:2}],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"helm-kcl-plugin"},"Helm KCL Plugin"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/helm/helm"},"Helm")," is a tool for managing Charts. Charts are packages of pre-configured Kubernetes resources. You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Helm-KCL-Plugin")," to"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Edit the helm charts in a hook way to separate data and logic for the Kubernetes manifests management."),(0,a.kt)("li",{parentName:"ul"},"For multi-environment and multi-tenant scenarios, you can maintain these configurations gracefully rather than simply copy and paste."),(0,a.kt)("li",{parentName:"ul"},"Validate all KRM resources using the KCL schema.")),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/helm/helm"},"Helm")),(0,a.kt)("li",{parentName:"ul"},"Install ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/kcl-lang/helm-kcl"},"Helm KCL Plugin"))),(0,a.kt)("h2",{id:"quick-start"},"Quick Start"),(0,a.kt)("p",null,"Let\u2019s write a KCL function which add annotation ",(0,a.kt)("inlineCode",{parentName:"p"},"managed-by=helm-kcl-plugin")," only to ",(0,a.kt)("inlineCode",{parentName:"p"},"Deployment")," resources in the helm chart."),(0,a.kt)("h3",{id:"get-the-example"},"Get the Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/kcl-lang/helm-kcl.git/\ncd ./helm-kcl/examples/workload-charts-with-kcl\n")),(0,a.kt)("h3",{id:"test-and-run"},"Test and Run"),(0,a.kt)("p",null,"Run the KCL code via the ",(0,a.kt)("inlineCode",{parentName:"p"},"Helm KCL Plugin"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"helm kcl template --file ./kcl-run.yaml\n")),(0,a.kt)("p",null,"The output yaml is"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  labels:\n    app.kubernetes.io/instance: workload\n    app.kubernetes.io/managed-by: Helm\n    app.kubernetes.io/name: workload\n    app.kubernetes.io/version: 0.1.0\n    helm.sh/chart: workload-0.1.0\n  name: workload\nspec:\n  ports:\n  - name: www\n    port: 80\n    protocol: TCP\n    targetPort: 80\n  selector:\n    app.kubernetes.io/instance: workload\n    app.kubernetes.io/name: workload\n  type: ClusterIP\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  labels:\n    app.kubernetes.io/instance: workload\n    app.kubernetes.io/managed-by: Helm\n    app.kubernetes.io/name: workload\n    app.kubernetes.io/version: 0.1.0\n    helm.sh/chart: workload-0.1.0\n  name: workload\n  annotations:\n    managed-by: helm-kcl-plugin\nspec:\n  selector:\n    matchLabels:\n      app.kubernetes.io/instance: workload\n      app.kubernetes.io/name: workload\n  template:\n    metadata:\n      labels:\n        app.kubernetes.io/instance: workload\n        app.kubernetes.io/name: workload\n    spec:\n      containers:\n      - image: nginx:alpine\n        name: frontend\n")),(0,a.kt)("h3",{id:"guides-for-developing-kcl"},"Guides for Developing KCL"),(0,a.kt)("p",null,"Here's what you can do in the KCL code:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Read resources from ",(0,a.kt)("inlineCode",{parentName:"li"},'option("resource_list")'),". The ",(0,a.kt)("inlineCode",{parentName:"li"},'option("resource_list")')," complies with the ",(0,a.kt)("a",{parentName:"li",href:"https://kpt.dev/book/05-developing-functions/01-functions-specification"},"KRM Functions Specification"),". You can read the input resources from ",(0,a.kt)("inlineCode",{parentName:"li"},'option("resource_list")["items"]')," and the ",(0,a.kt)("inlineCode",{parentName:"li"},"functionConfig")," from ",(0,a.kt)("inlineCode",{parentName:"li"},'option("resource_list")["functionConfig"]'),"."),(0,a.kt)("li",{parentName:"ul"},"Return a KPM list for output resources."),(0,a.kt)("li",{parentName:"ul"},"Return an error using ",(0,a.kt)("inlineCode",{parentName:"li"},"assert {condition}, {error_message}"),".")),(0,a.kt)("h2",{id:"more-documents-and-examples"},"More Documents and Examples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/kcl-lang/helm-kcl"},"Helm KCL Plugin"))))}m.isMDXComponent=!0}}]);