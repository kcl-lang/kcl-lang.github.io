"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[80970],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,k=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},36070:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={title:"Kubectl KCL Plugin",sidebar_position:1},i=void 0,o={unversionedId:"user_docs/guides/working-with-k8s/mutate-manifests/kubectl-kcl-plugin",id:"user_docs/guides/working-with-k8s/mutate-manifests/kubectl-kcl-plugin",title:"Kubectl KCL Plugin",description:"Introduction",source:"@site/docs/user_docs/guides/working-with-k8s/3-mutate-manifests/1-kubectl-kcl-plugin.md",sourceDirName:"user_docs/guides/working-with-k8s/3-mutate-manifests",slug:"/user_docs/guides/working-with-k8s/mutate-manifests/kubectl-kcl-plugin",permalink:"/docs/next/user_docs/guides/working-with-k8s/mutate-manifests/kubectl-kcl-plugin",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/user_docs/guides/working-with-k8s/3-mutate-manifests/1-kubectl-kcl-plugin.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1703569910,formattedLastUpdatedAt:"Dec 26, 2023",sidebarPosition:1,frontMatter:{title:"Kubectl KCL Plugin",sidebar_position:1},sidebar:"user_docs",previous:{title:"Generate Kubernetes Manifests",permalink:"/docs/next/user_docs/guides/working-with-k8s/generate-k8s-manifests"},next:{title:"Helm KCL Plugin",permalink:"/docs/next/user_docs/guides/working-with-k8s/mutate-manifests/helm-kcl-plugin"}},s={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Mutation",id:"mutation",level:3},{value:"1. Get the Example",id:"1-get-the-example",level:4},{value:"2. Test and Run",id:"2-test-and-run",level:4},{value:"Validation",id:"validation",level:3},{value:"1. Get the Example",id:"1-get-the-example-1",level:4},{value:"2. Test and Run",id:"2-test-and-run-1",level:4},{value:"Guides for Developing KCL",id:"guides-for-developing-kcl",level:2},{value:"More Resources",id:"more-resources",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/kubectl/"},"Kubectl")," is a command line tool for communicating with a Kubernetes cluster's control plane, using the Kubernetes API. You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Kubectl-KCL-Plugin")," to"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Edit the YAML configuration in a hook way to separate data and logic for the Kubernetes manifests management."),(0,r.kt)("li",{parentName:"ul"},"For multi-environment and multi-tenant scenarios, you can maintain these configurations gracefully rather than simply copy and paste."),(0,r.kt)("li",{parentName:"ul"},"Validate all KRM resources using the KCL schema.")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/kubectl"},"Kubectl")),(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kcl-lang/kubectl-kcl"},"Kubectl KCL Plugin"))),(0,r.kt)("h2",{id:"quick-start"},"Quick Start"),(0,r.kt)("h3",{id:"mutation"},"Mutation"),(0,r.kt)("p",null,"Let\u2019s write a KCL function which add annotation ",(0,r.kt)("inlineCode",{parentName:"p"},"managed-by=krm-kcl")," only to ",(0,r.kt)("inlineCode",{parentName:"p"},"Deployment")," resources in the Kubernetes manifests."),(0,r.kt)("h4",{id:"1-get-the-example"},"1. Get the Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/kcl-lang/kubectl-kcl.git/\ncd ./kubectl-kcl/examples/\n")),(0,r.kt)("p",null,"Show the config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cat ./kcl-run-oci.yaml\n")),(0,r.kt)("p",null,"The output is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\n  labels:\n    app: nginx\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n        - name: nginx\n          image: nginx:1.14.2\n          ports:\n            - containerPort: 80\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: test\nspec:\n  selector:\n    app: MyApp\n  ports:\n    - protocol: TCP\n      port: 80\n      targetPort: 9376\n---\napiVersion: krm.kcl.dev/v1alpha1\nkind: KCLRun\nmetadata:\n  name: set-annotation\nspec:\n  params:\n    annotations:\n      managed-by: kubectl-kcl\n  source: oci://ghcr.io/kcl-lang/set-annotation\n")),(0,r.kt)("h4",{id:"2-test-and-run"},"2. Test and Run"),(0,r.kt)("p",null,"Run the KCL code via the ",(0,r.kt)("inlineCode",{parentName:"p"},"Kubectl KCL Plugin"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl kcl run -f ./kcl-run-oci.yaml\n")),(0,r.kt)("p",null,"The output yaml is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  annotations:\n    managed-by: kubectl-kcl\n  labels:\n    app: nginx\n  name: nginx-deployment\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n        - image: nginx:1.14.2\n          name: nginx\n          ports:\n            - containerPort: 80\n---\napiVersion: v1\nkind: Service\nmetadata:\n  annotations:\n    managed-by: kubectl-kcl\n  name: test\nspec:\n  ports:\n    - port: 80\n      protocol: TCP\n      targetPort: 9376\n  selector:\n    app: MyApp\n")),(0,r.kt)("h3",{id:"validation"},"Validation"),(0,r.kt)("p",null,"Let\u2019s do a ",(0,r.kt)("inlineCode",{parentName:"p"},"https-only")," validation for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Ingress")," resources in the Kubernetes manifests."),(0,r.kt)("h4",{id:"1-get-the-example-1"},"1. Get the Example"),(0,r.kt)("p",null,"Show the config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cat ./kcl-vet-oci-err.yaml\n")),(0,r.kt)("p",null,"The output is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: krm.kcl.dev/v1alpha1\nkind: KCLRun\nmetadata:\n  name: https-only\nspec:\n  source: oci://ghcr.io/kcl-lang/https-only\n---\napiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: tls-example-ingress\nspec:\n  tls:\n    - hosts:\n        - https-example.foo.com\n      secretName: testsecret-tls\n  rules:\n    - host: https-example.foo.com\n      http:\n        paths:\n          - path: /\n            pathType: Prefix\n            backend:\n              service:\n                name: service1\n                port:\n                  number: 80\n")),(0,r.kt)("h4",{id:"2-test-and-run-1"},"2. Test and Run"),(0,r.kt)("p",null,"Run the KCL code via the ",(0,r.kt)("inlineCode",{parentName:"p"},"Kubectl KCL Plugin"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl kcl run -f ./kcl-vet-oci-err.yaml\n")),(0,r.kt)("p",null,"The expected error message is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'Ingress should be https. The `kubernetes.io/ingress.allow-http: "false"` annotation is required for Ingress: tls-example-ingress\n')),(0,r.kt)("h2",{id:"guides-for-developing-kcl"},"Guides for Developing KCL"),(0,r.kt)("p",null,"Here's what you can do in the KCL code:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Read resources from ",(0,r.kt)("inlineCode",{parentName:"li"},'option("resource_list")'),". The ",(0,r.kt)("inlineCode",{parentName:"li"},'option("resource_list")')," complies with the ",(0,r.kt)("a",{parentName:"li",href:"https://kpt.dev/book/05-developing-functions/01-functions-specification"},"KRM Functions Specification"),". You can read the input resources from ",(0,r.kt)("inlineCode",{parentName:"li"},'option("resource_list")["items"]')," and the ",(0,r.kt)("inlineCode",{parentName:"li"},"functionConfig")," from ",(0,r.kt)("inlineCode",{parentName:"li"},'option("resource_list")["functionConfig"]'),"."),(0,r.kt)("li",{parentName:"ul"},"Return a KRM list for output resources."),(0,r.kt)("li",{parentName:"ul"},"Return an error using ",(0,r.kt)("inlineCode",{parentName:"li"},"assert {condition}, {error_message}"),".")),(0,r.kt)("h2",{id:"more-resources"},"More Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/kcl-lang/kubectl-kcl"},"Kubectl KCL Plugin")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://artifacthub.io/packages/search?org=kcl&sort=relevance&page=1"},"Artifact Hub KCL Modules"))))}m.isMDXComponent=!0}}]);