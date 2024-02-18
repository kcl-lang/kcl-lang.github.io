"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[45563],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(t),d=i,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return t?a.createElement(k,o(o({ref:n},c),{},{components:t})):a.createElement(k,o({ref:n},c))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[m]="string"==typeof e?e:i,o[1]=p;for(var s=2;s<r;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},21600:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var a=t(87462),i=(t(67294),t(3905));const r={id:"guide",sidebar_label:"Quick Start"},o="Introduction",p={unversionedId:"user_docs/guides/working-with-konfig/guide",id:"version-0.7.0/user_docs/guides/working-with-konfig/guide",title:"Introduction",description:"This guide shows you how to use the KCL language and CLIs to complete the deployment of an application running in Kubernetes. We call the abstraction of application operation and maintenance configuration as Server, and its instance as Application. It is essentially an operation and maintenance model defined by KCL.",source:"@site/versioned_docs/version-0.7.0/user_docs/guides/working-with-konfig/3-quick-start.md",sourceDirName:"user_docs/guides/working-with-konfig",slug:"/user_docs/guides/working-with-konfig/guide",permalink:"/docs/user_docs/guides/working-with-konfig/guide",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.7.0/user_docs/guides/working-with-konfig/3-quick-start.md",tags:[],version:"0.7.0",lastUpdatedBy:"Peefy",lastUpdatedAt:1708241829,formattedLastUpdatedAt:"Feb 18, 2024",sidebarPosition:3,frontMatter:{id:"guide",sidebar_label:"Quick Start"},sidebar:"user_docs",previous:{title:"Structure",permalink:"/docs/user_docs/guides/working-with-konfig/structure"},next:{title:"Best Practice",permalink:"/docs/user_docs/guides/working-with-konfig/practice"}},l={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"1. Compiling",id:"1-compiling",level:3},{value:"2. Modification",id:"2-modification",level:3},{value:"Summary",id:"summary",level:2}],c={toc:s},m="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(m,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"This guide shows you how to use the KCL language and CLIs to complete the deployment of an application running in Kubernetes. We call the abstraction of application operation and maintenance configuration as ",(0,i.kt)("inlineCode",{parentName:"p"},"Server"),", and its instance as ",(0,i.kt)("inlineCode",{parentName:"p"},"Application"),". It is essentially an operation and maintenance model defined by KCL."),(0,i.kt)("p",null,"In actual production, the application online generally needs to update several k8s resources:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Namespace"),(0,i.kt)("li",{parentName:"ul"},"Deployment"),(0,i.kt)("li",{parentName:"ul"},"Service")),(0,i.kt)("p",null,"This guide requires you to have a basic understanding of Kubernetes. If you are not familiar with the relevant concepts, please refer to the links below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tutorials/kubernetes-basics/"},"Learn Kubernetes Basics")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/"},"Namespace")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"},"Deployment")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/services-networking/service/"},"Service"))),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Before we start, we need to complete the following steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install ",(0,i.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/user_docs/getting-started/install/"},"kcl"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Clone the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/konfig.git"},"Konfig repo")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/kcl-lang/konfig.git && cd konfig\n")),(0,i.kt)("h2",{id:"quick-start"},"Quick Start"),(0,i.kt)("h3",{id:"1-compiling"},"1. Compiling"),(0,i.kt)("p",null,"The programming language of the project is KCL, not JSON/YAML which Kubernetes recognizes, so it needs to be compiled to get the final output."),(0,i.kt)("p",null,"Enter stack dir ",(0,i.kt)("inlineCode",{parentName:"p"},"examples/appops/nginx-example/dev")," and compile:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd examples/appops/nginx-example/dev && kcl run\n")),(0,i.kt)("p",null,"The output YAML is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: sampleappprod\n  namespace: sampleapp\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app.kubernetes.io/name: sampleapp\n      app.kubernetes.io/env: prod\n      app.kubernetes.io/instance: sampleapp-prod\n      app.k8s.io/component: sampleappprod\n  template:\n    metadata:\n      labels:\n        app.kubernetes.io/name: sampleapp\n        app.kubernetes.io/env: prod\n        app.kubernetes.io/instance: sampleapp-prod\n        app.k8s.io/component: sampleappprod\n    spec:\n      containers:\n        - image: nginx:1.7.8\n          name: main\n          ports:\n            - containerPort: 80\n              protocol: TCP\n          resources:\n            limits:\n              cpu: 100m\n              memory: 100Mi\n              ephemeral-storage: 1Gi\n            requests:\n              cpu: 100m\n              memory: 100Mi\n              ephemeral-storage: 1Gi\n---\napiVersion: v1\nkind: Namespace\nmetadata:\n  name: sampleapp\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: nginx\n  namespace: sampleapp\nspec:\n  ports:\n    - nodePort: 30201\n      port: 80\n      targetPort: 80\n  selector:\n    app.kubernetes.io/name: sampleapp\n    app.kubernetes.io/env: prod\n    app.kubernetes.io/instance: sampleapp-prod\n    app.k8s.io/component: sampleappprod\n  type: NodePort\n")),(0,i.kt)("p",null,"After compiling, we can see three resources:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"Deployment")," with the name ",(0,i.kt)("inlineCode",{parentName:"li"},"nginx-exampledev")),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"Namespace")," with the name ",(0,i.kt)("inlineCode",{parentName:"li"},"nginx-example")),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"Service")," with the name ",(0,i.kt)("inlineCode",{parentName:"li"},"nginx-example"))),(0,i.kt)("h3",{id:"2-modification"},"2. Modification"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"image")," attribute in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Server")," model is used to declare the application's container image. We can modify the ",(0,i.kt)("inlineCode",{parentName:"p"},"image")," value in ",(0,i.kt)("inlineCode",{parentName:"p"},"base/main.k")," to modify or upgrade the image:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},'14c14\n<     image = "nginx:1.7.8"\n---\n>     image = "nginx:latest"\n')),(0,i.kt)("p",null,"Recompile the configuration code to obtain the modified YAML output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kcl run\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-exampledev\n  namespace: nginx-example\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app.kubernetes.io/name: nginx-example\n      app.kubernetes.io/env: dev\n      app.kubernetes.io/instance: nginx-example-dev\n      app.kubernetes.io/component: nginx-exampledev\n  template:\n    metadata:\n      labels:\n        app.kubernetes.io/name: nginx-example\n        app.kubernetes.io/env: dev\n        app.kubernetes.io/instance: nginx-example-dev\n        app.kubernetes.io/component: nginx-exampledev\n    spec:\n      containers:\n        - image: nginx:latest\n          name: main\n          ports:\n            - containerPort: 80\n              protocol: TCP\n          resources:\n            limits:\n              cpu: 100m\n              memory: 100Mi\n              ephemeral-storage: 1Gi\n            requests:\n              cpu: 100m\n              memory: 100Mi\n              ephemeral-storage: 1Gi\n---\napiVersion: v1\nkind: Namespace\nmetadata:\n  name: nginx-example\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: nginx-example\n  namespace: nginx-example\nspec:\n  ports:\n    - nodePort: 30201\n      port: 80\n      targetPort: 80\n  selector:\n    app.kubernetes.io/name: nginx-example\n    app.kubernetes.io/env: dev\n    app.kubernetes.io/instance: nginx-example-dev\n    app.kubernetes.io/component: nginx-exampledev\n  type: NodePort\n")),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"This document mainly introduces how to use the KCL and Konfig library to deploy a Long Running application running in Kubernetes."))}u.isMDXComponent=!0}}]);