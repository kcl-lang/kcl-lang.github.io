"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[76859],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>k});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return t?a.createElement(k,s(s({ref:n},p),{},{components:t})):a.createElement(k,s({ref:n},p))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},44360:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const o={title:"Crossplane KCL Function",sidebar_position:6},s=void 0,i={unversionedId:"user_docs/guides/working-with-k8s/mutate-manifests/crossplane-kcl-function",id:"user_docs/guides/working-with-k8s/mutate-manifests/crossplane-kcl-function",title:"Crossplane KCL Function",description:"Introduction",source:"@site/docs/user_docs/guides/working-with-k8s/3-mutate-manifests/7-crossplane-kcl-function.md",sourceDirName:"user_docs/guides/working-with-k8s/3-mutate-manifests",slug:"/user_docs/guides/working-with-k8s/mutate-manifests/crossplane-kcl-function",permalink:"/docs/next/user_docs/guides/working-with-k8s/mutate-manifests/crossplane-kcl-function",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/user_docs/guides/working-with-k8s/3-mutate-manifests/7-crossplane-kcl-function.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1706869561,formattedLastUpdatedAt:"Feb 2, 2024",sidebarPosition:6,frontMatter:{title:"Crossplane KCL Function",sidebar_position:6},sidebar:"user_docs",previous:{title:"KCL Operator",permalink:"/docs/next/user_docs/guides/working-with-k8s/mutate-manifests/kcl-operator"},next:{title:"Overview",permalink:"/docs/next/user_docs/guides/working-with-konfig/overview"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"1. Install the Crossplane KCL Function",id:"1-install-the-crossplane-kcl-function",level:3},{value:"2. Apply the Composition Resource",id:"2-apply-the-composition-resource",level:3},{value:"3. Create Crossplane XRD",id:"3-create-crossplane-xrd",level:3},{value:"4. Apply the Crossplane XR",id:"4-apply-the-crossplane-xr",level:3},{value:"5. Verify the Generated Managed Resources",id:"5-verify-the-generated-managed-resources",level:3},{value:"6. Debugging KCL Functions Locally",id:"6-debugging-kcl-functions-locally",level:3},{value:"Client Enhancements",id:"client-enhancements",level:2},{value:"Guides for Developing KCL",id:"guides-for-developing-kcl",level:2},{value:"Library",id:"library",level:2},{value:"More Documents and Examples",id:"more-documents-and-examples",level:2}],p={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Crossplane and Crossplane Composite Functions are used to decouple XR and Composite resource definitions. XRs allow developers to create higher-level abstractions that can encapsulate and compose multiple types of cloud resources across different providers and services. Using Crossplane Composite Functions to render these abstractions can effectively enhance template capabilities for various provider resources while reducing the amount of YAML code needed."),(0,r.kt)("p",null,"Combining KCL with Crossplane composite functions offers several benefits:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Simplification of Complex Configurations"),": KCL provides a more concise syntax and structure as a DSL, reducing the complexity of configurations. When combined with Crossplane\u2019s composite resources, you can create more intuitive and easy-to-understand configuration templates with loop and condition features, simplifying the definition and maintenance of resources instead of duplicate YAML and Go code snippets."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Reusability and Modularity"),": KCL supports modularity and code reuse through OCI Registry, which means you can create reusable configuration components. Combined with Crossplane, this promotes the modularity of composite resources, increases the reuse of configurations, and reduces errors."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Automation and Policy-Driven"),": You can use KCL\u2019s powerful features to write policies and constraints that, combined with Crossplane\u2019s declarative resource management, can be automatically enforced, ensuring compliance within the cloud environment.")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Prepare a Kubernetes cluster"),(0,r.kt)("li",{parentName:"ul"},"Install Kubectl"),(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://docs.crossplane.io/"},"Crossplane and Crossplane CLI 1.14+")),(0,r.kt)("li",{parentName:"ul"},"Install Go 1.21+")),(0,r.kt)("h2",{id:"quick-start"},"Quick Start"),(0,r.kt)("p",null,"Let\u2019s write a KCL function abstraction which generates managed resources ",(0,r.kt)("inlineCode",{parentName:"p"},"VPC")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"InternetGateway")," with an input resource ",(0,r.kt)("inlineCode",{parentName:"p"},"Network"),"."),(0,r.kt)("h3",{id:"1-install-the-crossplane-kcl-function"},"1. Install the Crossplane KCL Function"),(0,r.kt)("p",null,"Installing a Function creates a function pod. Crossplane sends requests to this pod to ask it what resources to create when you create a composite resource."),(0,r.kt)("p",null,"Install a Function with a Crossplane Function object setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.package")," value to the location of the function package."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f- << EOF\napiVersion: pkg.crossplane.io/v1beta1\nkind: Function\nmetadata:\n  name: kcl-function\nspec:\n  package: docker.io/kcllang/crossplane-kcl\nEOF\n")),(0,r.kt)("h3",{id:"2-apply-the-composition-resource"},"2. Apply the Composition Resource"),(0,r.kt)("p",null,"Just like a render function, you can apply the composition resource using KCL into cluster."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'kubectl apply -f- << EOF\napiVersion: apiextensions.crossplane.io/v1\nkind: Composition\nmetadata:\n  name: xlabels.fn-demo.crossplane.io\n  labels:\n    provider: aws\nspec:\n  writeConnectionSecretsToNamespace: crossplane-system\n  compositeTypeRef:\n    apiVersion: fn-demo.crossplane.io/v1alpha1\n    kind: XNetwork\n  mode: Pipeline\n  pipeline:\n  - step: normal\n    functionRef:\n      name: kcl-function\n    input:\n      apiVersion: krm.kcl.dev/v1alpha1\n      kind: KCLRun\n      metadata:\n        name: basic\n      spec:\n        # Generate new resources\n        target: Resources\n        # OCI, Git or inline source\n        # source: oci://ghcr.io/kcl-lang/crossplane-xnetwork-kcl-function\n        # source: github.com/kcl-lang/modules/crossplane-xnetwork-kcl-function\n        source: |\n          # Get the XR spec fields\n          id = option("params")?.oxr?.spec.id or ""\n          # Render XR to crossplane managed resources\n          network_id_labels = {"networks.meta.fn.crossplane.io/network-id" = id} if id else {}\n          vpc = {\n              apiVersion = "ec2.aws.upbound.io/v1beta1"\n              kind = "VPC"\n              metadata.name = "vpc"\n              metadata.labels = network_id_labels\n              spec.forProvider = {\n                  region = "eu-west-1"\n                  cidrBlock = "192.168.0.0/16"\n                  enableDnsSupport = True\n                  enableDnsHostnames = True\n              }\n          }\n          gateway = {\n              apiVersion = "ec2.aws.upbound.io/v1beta1"\n              kind = "InternetGateway"\n              metadata.name = "gateway"\n              metadata.labels = network_id_labels\n              spec.forProvider = {\n                  region = "eu-west-1"\n                  vpcIdSelector.matchControllerRef = True\n              }\n          }\n          items = [vpc, gateway]\nEOF\n')),(0,r.kt)("h3",{id:"3-create-crossplane-xrd"},"3. Create Crossplane XRD"),(0,r.kt)("p",null,"We define a schema using the crossplane XRD for the input resource ",(0,r.kt)("inlineCode",{parentName:"p"},"Network"),", it has a field named ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," which denotes the network id."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f- << EOF\napiVersion: apiextensions.crossplane.io/v1\nkind: CompositeResourceDefinition\nmetadata:\n  name: xnetworks.fn-demo.crossplane.io\nspec:\n  group: fn-demo.crossplane.io\n  names:\n    kind: XNetwork\n    plural: xnetworks\n  claimNames:\n    kind: Network\n    plural: networks\n  versions:\n    - name: v1alpha1\n      served: true\n      referenceable: true\n      schema:\n        openAPIV3Schema:\n          type: object\n          properties:\n            spec:\n              type: object\n              properties:\n                id:\n                  type: string\n                  description: ID of this Network that other objects will use to refer to it.\n              required:\n                - id\nEOF\n")),(0,r.kt)("h3",{id:"4-apply-the-crossplane-xr"},"4. Apply the Crossplane XR"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f- << EOF\napiVersion: fn-demo.crossplane.io/v1alpha1\nkind: Network\nmetadata:\n  name: network-test-functions\n  namespace: default\nspec:\n  id: network-test-functions\nEOF\n")),(0,r.kt)("h3",{id:"5-verify-the-generated-managed-resources"},"5. Verify the Generated Managed Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"VPC")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get VPC -o yaml | grep network-id\n      networks.meta.fn.crossplane.io/network-id: network-test-functions\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"InternetGateway")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get InternetGateway -o yaml | grep network-id\n      networks.meta.fn.crossplane.io/network-id: network-test-functions\n")),(0,r.kt)("p",null,"It can be seen that we have indeed successfully generated ",(0,r.kt)("inlineCode",{parentName:"p"},"VPC")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"InternetGateway")," resources, and their fields meet expectations."),(0,r.kt)("h3",{id:"6-debugging-kcl-functions-locally"},"6. Debugging KCL Functions Locally"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/crossplane-contrib/function-kcl"},"here")," for more information."),(0,r.kt)("h2",{id:"client-enhancements"},"Client Enhancements"),(0,r.kt)("p",null,"It can be seen that the above abstract code often requires a crossplane as a control plane intermediary, and you can still complete the abstraction in a fully client-side manner and directly generate crossplane managed resources to reduce the burden on the cluster."),(0,r.kt)("p",null,"For example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'kcl run oci://ghcr.io/kcl-lang/crossplane-xnetwork-kcl-function -S items -D params=\'{"oxr": {"spec": {"id": "network-test-functions"}}}\'\n')),(0,r.kt)("p",null,"The output is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: ec2.aws.upbound.io/v1beta1\nkind: VPC\nmetadata:\n  name: vpc\n  labels:\n    networks.meta.fn.crossplane.io/network-id: network-test-functions\nspec:\n  forProvider:\n    region: eu-west-1\n    cidrBlock: 192.168.0.0/16\n    enableDnsSupport: true\n    enableDnsHostnames: true\n---\napiVersion: ec2.aws.upbound.io/v1beta1\nkind: InternetGateway\nmetadata:\n  name: gateway\n  labels:\n    networks.meta.fn.crossplane.io/network-id: network-test-functions\nspec:\n  forProvider:\n    region: eu-west-1\n    vpcIdSelector:\n      matchControllerRef: true\n")),(0,r.kt)("h2",{id:"guides-for-developing-kcl"},"Guides for Developing KCL"),(0,r.kt)("p",null,"Here's what you can do in the KCL script:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Return an error using ",(0,r.kt)("inlineCode",{parentName:"li"},"assert {condition}, {error_message}"),"."),(0,r.kt)("li",{parentName:"ul"},"Read the ",(0,r.kt)("inlineCode",{parentName:"li"},"ObservedCompositeResource")," from ",(0,r.kt)("inlineCode",{parentName:"li"},'option("params").oxr'),"."),(0,r.kt)("li",{parentName:"ul"},"Read the ",(0,r.kt)("inlineCode",{parentName:"li"},"ObservedComposedResources")," from ",(0,r.kt)("inlineCode",{parentName:"li"},'option("params").ocds'),"."),(0,r.kt)("li",{parentName:"ul"},"Read the ",(0,r.kt)("inlineCode",{parentName:"li"},"DesiredCompositeResource")," from ",(0,r.kt)("inlineCode",{parentName:"li"},'option("params").dxr'),"."),(0,r.kt)("li",{parentName:"ul"},"Read the ",(0,r.kt)("inlineCode",{parentName:"li"},"DesiredComposedResources")," from ",(0,r.kt)("inlineCode",{parentName:"li"},'option("params").dcds'),"."),(0,r.kt)("li",{parentName:"ul"},"Read the environment variables. e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},'option("PATH")')," (",(0,r.kt)("strong",{parentName:"li"},"Not yet implemented"),").")),(0,r.kt)("h2",{id:"library"},"Library"),(0,r.kt)("p",null,"You can directly use ",(0,r.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/reference/model/overview"},"KCL standard libraries")," such as ",(0,r.kt)("inlineCode",{parentName:"p"},"regex.match"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"math.log"),"."),(0,r.kt)("h2",{id:"more-documents-and-examples"},"More Documents and Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/kcl-lang/krm-kcl"},"KRM KCL Spec")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/crossplane-contrib/function-kcl/examples"},"Crossplane KCL"))))}d.isMDXComponent=!0}}]);