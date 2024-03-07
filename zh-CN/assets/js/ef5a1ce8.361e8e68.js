"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[65367],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,k=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},34757:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={title:"Kubectl KCL \u63d2\u4ef6",sidebar_position:1},l=void 0,o={unversionedId:"user_docs/guides/working-with-k8s/mutate-manifests/kubectl-kcl-plugin",id:"version-0.5.0/user_docs/guides/working-with-k8s/mutate-manifests/kubectl-kcl-plugin",title:"Kubectl KCL \u63d2\u4ef6",description:"\u7b80\u4ecb",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.5.0/user_docs/guides/working-with-k8s/3-mutate-manifests/1-kubectl-kcl-plugin.md",sourceDirName:"user_docs/guides/working-with-k8s/3-mutate-manifests",slug:"/user_docs/guides/working-with-k8s/mutate-manifests/kubectl-kcl-plugin",permalink:"/zh-CN/docs/0.5.0/user_docs/guides/working-with-k8s/mutate-manifests/kubectl-kcl-plugin",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.0/user_docs/guides/working-with-k8s/3-mutate-manifests/1-kubectl-kcl-plugin.md",tags:[],version:"0.5.0",lastUpdatedBy:"peefy",lastUpdatedAt:1709797004,formattedLastUpdatedAt:"2024\u5e743\u67087\u65e5",sidebarPosition:1,frontMatter:{title:"Kubectl KCL \u63d2\u4ef6",sidebar_position:1},sidebar:"user_docs",previous:{title:"\u4f7f\u7528 KCL \u751f\u6210\u5e76\u7ba1\u7406 Kubernetes \u8d44\u6e90\u914d\u7f6e",permalink:"/zh-CN/docs/0.5.0/user_docs/guides/working-with-k8s/generate-k8s-manifests"},next:{title:"Helm KCL \u63d2\u4ef6",permalink:"/zh-CN/docs/0.5.0/user_docs/guides/working-with-k8s/mutate-manifests/helm-kcl-plugin"}},s={},u=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u524d\u7f6e\u6761\u4ef6",id:"\u524d\u7f6e\u6761\u4ef6",level:2},{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb",level:2},{value:"1. Get the Example",id:"1-get-the-example",level:3},{value:"2. Test and Run",id:"2-test-and-run",level:3},{value:"Guides for Developing KCL",id:"guides-for-developing-kcl",level:2},{value:"More Documents and Examples",id:"more-documents-and-examples",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/kubectl/"},"Kubectl")," is a command line tool for communicating with a Kubernetes cluster's control plane, using the Kubernetes API. You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Kubectl-KCL-Plugin")," to"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Edit the YAML configuration in a hook way to separate data and logic for the Kubernetes manifests management."),(0,a.kt)("li",{parentName:"ul"},"For multi-environment and multi-tenant scenarios, you can maintain these configurations gracefully rather than simply copy and paste."),(0,a.kt)("li",{parentName:"ul"},"Validate all KRM resources using the KCL schema.")),(0,a.kt)("h2",{id:"\u524d\u7f6e\u6761\u4ef6"},"\u524d\u7f6e\u6761\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/kubectl"},"Kubectl")),(0,a.kt)("li",{parentName:"ul"},"Install ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/kcl-lang/kubectl-kcl"},"Kubectl KCL Plugin"))),(0,a.kt)("h2",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,a.kt)("p",null,"Let\u2019s write a KCL function which add annotation ",(0,a.kt)("inlineCode",{parentName:"p"},"managed-by=krm-kcl")," only to ",(0,a.kt)("inlineCode",{parentName:"p"},"Deployment")," resources in the helm chart."),(0,a.kt)("h3",{id:"1-get-the-example"},"1. Get the Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/kcl-lang/kubectl-kcl.git/\ncd ./kubectl-kcl/examples/\n")),(0,a.kt)("h3",{id:"2-test-and-run"},"2. Test and Run"),(0,a.kt)("p",null,"Run the KCL code via the ",(0,a.kt)("inlineCode",{parentName:"p"},"Kubectl KCL Plugin"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl kcl run -f ./kcl-run.yaml\n")),(0,a.kt)("p",null,"The output yaml is"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: config.kubernetes.io/v1\nkind: ResourceList\nitems:\n  - apiVersion: apps/v1\n    kind: Deployment\n    metadata:\n      annotations:\n        managed-by: krm-kcl\n      labels:\n        app: nginx\n      name: nginx-deployment\n    spec:\n      replicas: 3\n      selector:\n        matchLabels:\n          app: nginx\n      template:\n        metadata:\n          labels:\n            app: nginx\n        spec:\n          containers:\n            - image: "nginx:1.14.2"\n              name: nginx\n              ports:\n                - containerPort: 80\n  - apiVersion: v1\n    kind: Service\n    metadata:\n      name: test\n    spec:\n      ports:\n        - port: 80\n          protocol: TCP\n          targetPort: 9376\n      selector:\n        app: MyApp\nfunctionConfig:\n  # kcl-fn-config.yaml\n  apiVersion: krm.kcl.dev/v1alpha1\n  kind: KCLRun\n  metadata:\n  # EDIT THE SOURCE!\n  # This should be your KCL code which preloads the `ResourceList` to `option("resource_list")\n  spec:\n    source: |\n      [resource | {if resource.kind == "Deployment": metadata.annotations: {"managed-by" = "krm-kcl"}} for resource in option("resource_list").items]\n')),(0,a.kt)("h2",{id:"guides-for-developing-kcl"},"Guides for Developing KCL"),(0,a.kt)("p",null,"Here's what you can do in the KCL code:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Read resources from ",(0,a.kt)("inlineCode",{parentName:"li"},'option("resource_list")'),". The ",(0,a.kt)("inlineCode",{parentName:"li"},'option("resource_list")')," complies with the ",(0,a.kt)("a",{parentName:"li",href:"https://kpt.dev/book/05-developing-functions/01-functions-specification"},"KRM Functions Specification"),". You can read the input resources from ",(0,a.kt)("inlineCode",{parentName:"li"},'option("resource_list")["items"]')," and the ",(0,a.kt)("inlineCode",{parentName:"li"},"functionConfig")," from ",(0,a.kt)("inlineCode",{parentName:"li"},'option("resource_list")["functionConfig"]'),"."),(0,a.kt)("li",{parentName:"ul"},"Return a KPM list for output resources."),(0,a.kt)("li",{parentName:"ul"},"Return an error using ",(0,a.kt)("inlineCode",{parentName:"li"},"assert {condition}, {error_message}"),".")),(0,a.kt)("h2",{id:"more-documents-and-examples"},"More Documents and Examples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/kcl-lang/kubectl-kcl"},"Kubectl KCL Plugin"))))}m.isMDXComponent=!0}}]);