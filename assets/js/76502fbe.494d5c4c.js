"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[95049],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return n?i.createElement(f,o(o({ref:t},c),{},{components:n})):i.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37557:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var i=n(87462),r=(n(67294),n(3905));const a={title:"Helmfile KCL Plugin",sidebar_position:5},o=void 0,l={unversionedId:"user_docs/guides/working-with-k8s/mutate-manifests/helmfile-kcl-plugin",id:"user_docs/guides/working-with-k8s/mutate-manifests/helmfile-kcl-plugin",title:"Helmfile KCL Plugin",description:"Introduction",source:"@site/docs/user_docs/guides/working-with-k8s/3-mutate-manifests/5-helmfile-kcl-plugin.md",sourceDirName:"user_docs/guides/working-with-k8s/3-mutate-manifests",slug:"/user_docs/guides/working-with-k8s/mutate-manifests/helmfile-kcl-plugin",permalink:"/docs/next/user_docs/guides/working-with-k8s/mutate-manifests/helmfile-kcl-plugin",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/user_docs/guides/working-with-k8s/3-mutate-manifests/5-helmfile-kcl-plugin.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1690813595,formattedLastUpdatedAt:"Jul 31, 2023",sidebarPosition:5,frontMatter:{title:"Helmfile KCL Plugin",sidebar_position:5},sidebar:"user_docs",previous:{title:"KPT KCL SDK",permalink:"/docs/next/user_docs/guides/working-with-k8s/mutate-manifests/kpt-kcl-sdk"},next:{title:"Overview",permalink:"/docs/next/user_docs/guides/working-with-konfig/overview"}},s={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"1. Get the Example",id:"1-get-the-example",level:3},{value:"2. Test and Run",id:"2-test-and-run",level:3},{value:"Guides for Developing KCL",id:"guides-for-developing-kcl",level:2},{value:"More Documents and Examples",id:"more-documents-and-examples",level:2}],c={toc:u},m="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/helmfile/helmfile"},"Helmfile")," is a declarative spec for deploying helm charts. It lets you..."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Keep a directory of chart value files and maintain changes in version control."),(0,r.kt)("li",{parentName:"ul"},"Apply CI/CD to configuration changes."),(0,r.kt)("li",{parentName:"ul"},"Periodically sync to avoid skew in environments.")),(0,r.kt)("p",null,"KCL can be used to create functions to mutate and/or validate the YAML Kubernetes Resource Model (KRM) input/output format, and we provide Kustomize KCL functions to simplify the function authoring process."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/helmfile/helmfile"},"helmfile")),(0,r.kt)("li",{parentName:"ul"},"Prepare a Kubernetes cluster")),(0,r.kt)("h2",{id:"quick-start"},"Quick Start"),(0,r.kt)("p",null,"Let\u2019s write a KCL function which add annotation ",(0,r.kt)("inlineCode",{parentName:"p"},"managed-by=helmfile-kcl")," only to Deployment resources."),(0,r.kt)("h3",{id:"1-get-the-example"},"1. Get the Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/kcl-lang/helmfile-kcl.git\ncd ./helmfile-kcl/examples/hello-world/\n")),(0,r.kt)("p",null,"We can execute the command to show config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat helmfile.yaml\n")),(0,r.kt)("p",null,"The output is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'repositories:\n- name: prometheus-community\n  url: https://prometheus-community.github.io/helm-charts\n\nreleases:\n- name: prom-norbac-ubuntu\n  namespace: prometheus\n  chart: prometheus-community/prometheus\n  set:\n  - name: rbac.create\n    value: false\n  transformers:\n  # Use KCL Plugin to mutate or validate Kubernetes manifests.\n  - apiVersion: krm.kcl.dev/v1alpha1\n    kind: KCLRun\n    metadata:\n      name: "set-annotation"\n      annotations:\n        config.kubernetes.io/function: |\n          container:\n            image: docker.io/kcllang/kustomize-kcl:v0.2.0\n    spec:\n      source: |\n        [resource | {if resource.kind == "Deployment": metadata.annotations: {"managed-by" = "helmfile-kcl"}} for resource in option("resource_list").items]\n')),(0,r.kt)("p",null,"In the above config, we use a ",(0,r.kt)("inlineCode",{parentName:"p"},"KCLRun")," plugin to assign the ",(0,r.kt)("inlineCode",{parentName:"p"},"transfomer")," field. This means that we will add annotations to all deployment resources in the prometheus helm chart."),(0,r.kt)("h3",{id:"2-test-and-run"},"2. Test and Run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helmfile apply\n")),(0,r.kt)("p",null,"The output is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Adding repo prometheus-community https://prometheus-community.github.io/helm-charts\n"prometheus-community" has been added to your repositories\n\n...\n')),(0,r.kt)("h2",{id:"guides-for-developing-kcl"},"Guides for Developing KCL"),(0,r.kt)("p",null,"Here's what you can do in the KCL code:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Read resources from ",(0,r.kt)("inlineCode",{parentName:"li"},'option("resource_list")'),". The ",(0,r.kt)("inlineCode",{parentName:"li"},'option("resource_list")')," complies with the ",(0,r.kt)("a",{parentName:"li",href:"https://kpt.dev/book/05-developing-functions/01-functions-specification"},"KRM Functions Specification"),". You can read the input resources from ",(0,r.kt)("inlineCode",{parentName:"li"},'option("resource_list")["items"]')," and the ",(0,r.kt)("inlineCode",{parentName:"li"},"functionConfig")," from ",(0,r.kt)("inlineCode",{parentName:"li"},'option("resource_list")["functionConfig"]'),"."),(0,r.kt)("li",{parentName:"ul"},"Return a KPM list for output resources."),(0,r.kt)("li",{parentName:"ul"},"Return an error using ",(0,r.kt)("inlineCode",{parentName:"li"},"assert {condition}, {error_message}"),".")),(0,r.kt)("h2",{id:"more-documents-and-examples"},"More Documents and Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/kcl-lang/kustomize-kcl"},"Kustomize KCL Plugin"))))}p.isMDXComponent=!0}}]);