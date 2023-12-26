"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[15491],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return t?r.createElement(g,s(s({ref:n},c),{},{components:t})):r.createElement(g,s({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},36196:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const o={title:"Adopt From Kubernetes",sidebar_position:1},s=void 0,i={unversionedId:"user_docs/guides/working-with-k8s/adopt-from-kubernetes",id:"version-0.7.0/user_docs/guides/working-with-k8s/adopt-from-kubernetes",title:"Adopt From Kubernetes",description:"Introduction",source:"@site/versioned_docs/version-0.7.0/user_docs/guides/working-with-k8s/1-adopt-from-kubernetes.md",sourceDirName:"user_docs/guides/working-with-k8s",slug:"/user_docs/guides/working-with-k8s/adopt-from-kubernetes",permalink:"/docs/user_docs/guides/working-with-k8s/adopt-from-kubernetes",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.7.0/user_docs/guides/working-with-k8s/1-adopt-from-kubernetes.md",tags:[],version:"0.7.0",lastUpdatedBy:"Peefy",lastUpdatedAt:1703569910,formattedLastUpdatedAt:"Dec 26, 2023",sidebarPosition:1,frontMatter:{title:"Adopt From Kubernetes",sidebar_position:1},sidebar:"user_docs",previous:{title:"Overview",permalink:"/docs/user_docs/guides/working-with-k8s/overview"},next:{title:"Generate Kubernetes Manifests",permalink:"/docs/user_docs/guides/working-with-k8s/generate-k8s-manifests"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisite",id:"prerequisite",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Convert Kubernetes Manifests to KCL",id:"convert-kubernetes-manifests-to-kcl",level:3},{value:"1. Get the Example",id:"1-get-the-example",level:4},{value:"Generate Types in KCL for Custom Resource",id:"generate-types-in-kcl-for-custom-resource",level:3},{value:"Summary",id:"summary",level:2}],c={toc:p},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"KCL provides many out of the box support for Kubernetes configuration. Through KCL tools, we can integrate Kubernetes manifests and types into KCL. This section will introduce how to adopt from Kubernetes."),(0,a.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install ",(0,a.kt)("a",{parentName:"li",href:"https://kcl-lang.io/docs/user_docs/getting-started/install/"},"kcl"))),(0,a.kt)("h2",{id:"quick-start"},"Quick Start"),(0,a.kt)("h3",{id:"convert-kubernetes-manifests-to-kcl"},"Convert Kubernetes Manifests to KCL"),(0,a.kt)("h4",{id:"1-get-the-example"},"1. Get the Example"),(0,a.kt)("p",null,"Firstly, let's get the example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/kcl-lang/kcl-lang.io.git/\ncd ./kcl-lang.io/examples/kubernetes/from-kubernetes\n")),(0,a.kt)("p",null,"We can run the following command to show the config."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cat deployment.yaml\n")),(0,a.kt)("p",null,"The output is"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\n  labels:\n    app: nginx\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n        - name: nginx\n          image: nginx:1.14.2\n          ports:\n            - containerPort: 80\n")),(0,a.kt)("p",null,"Transform the Kubernetes YAML code to KCL"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kcl import -f deployment.yaml\n")),(0,a.kt)("p",null,"The file ",(0,a.kt)("inlineCode",{parentName:"p"},"deployment.k")," will be generated."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'"""\nThis file was generated by the KCL auto-gen tool. DO NOT EDIT.\nEditing this file might prove futile when you re-run the KCL auto-gen generate command.\n"""\n\napiVersion = "apps/v1"\nkind = "Deployment"\nmetadata = {\n    name = "nginx-deployment"\n    labels = {\n        app = "nginx"\n    }\n}\nspec = {\n    replicas = 3\n    selector = {\n        matchLabels = {\n            app = "nginx"\n        }\n    }\n    template = {\n        metadata = {\n            labels = {\n                app = "nginx"\n            }\n        }\n        spec = {\n            containers = [\n                {\n                    name = "nginx"\n                    image = "nginx:1.14.2"\n                    ports = [\n                        {\n                            containerPort = 80\n                        }\n                    ]\n                }\n            ]\n        }\n    }\n}\n')),(0,a.kt)("p",null,"We can run the following command to show YAML using KCL."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kcl deployment.k\n")),(0,a.kt)("p",null,"The output is"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\n  labels:\n    app: nginx\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n        - name: nginx\n          image: nginx:1.14.2\n          ports:\n            - containerPort: 80\n")),(0,a.kt)("h3",{id:"generate-types-in-kcl-for-custom-resource"},"Generate Types in KCL for Custom Resource"),(0,a.kt)("p",null,"KCL supports extracting and generating KCL schemas from Kubernetes OpenAPI/Custom Resource Definition (CRD). the ",(0,a.kt)("a",{parentName:"p",href:"/docs/tools/cli/openapi/spec"},"KCL OpenAPI Spec")," defines the mapping between the OpenAPI specification and the KCL language features."),(0,a.kt)("p",null,"If you developed CRDs, you can generate the KCL version of the CRD schemas and declare CRs based on that. Here we take the example ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/#create-a-customresourcedefinition"},"CronTab CRD")," specified in the Kubernetes documentation."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Generate KCL Schema from CRD")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# Add the Kubernetes dependency\nkcl mod add k8s\n# Convert the CRD YAML to KCL Schema\nkcl import -m crd -s -f crd.yaml\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Define CR (cr.k) based on CRDs in KCL")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import models\n\nmodels.CronTab {\n    metadata.name = "my-new-cron-object",\n    spec: {\n        cronSpec = "* * * * */5",\n        image = "my-awesome-cron-image",\n        replicas = 3,\n    }\n}\n')),(0,a.kt)("p",null,"We can run the following command to show the CR YAML"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kcl cr.k\n")),(0,a.kt)("p",null,"The output is"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: stable.example.com/v1\nkind: CronTab\nmetadata:\n  name: my-new-cron-object\nspec:\n  cronSpec: "* * * * */5"\n  image: my-awesome-cron-image\n  replicas: 3\n')),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"This section explains how to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl import")," tool to migrate JSON, YAML, Kubernetes CRDs, and more to KCL. The quick start guide helps with the migration or integration from Kubernetes."))}m.isMDXComponent=!0}}]);