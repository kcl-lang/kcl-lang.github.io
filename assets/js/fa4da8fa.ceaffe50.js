"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[11666],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97842:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={slug:"2024-01-04-biweekly-newsletter",title:"KCL Biweekly Newsletter (2023 12.22 - 2024.01.04) | Crossplane KCL Integration",authors:{name:"KCL Team",title:"KCL Team"},tags:["KCL","Biweekly-Newsletter"],image:"/img/biweekly-newsletter.png"},i=void 0,s={permalink:"/blog/2024-01-04-biweekly-newsletter",editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/blog/2024-01-04-biweekly-newsletter/index.md",source:"@site/blog/2024-01-04-biweekly-newsletter/index.md",title:"KCL Biweekly Newsletter (2023 12.22 - 2024.01.04) | Crossplane KCL Integration",description:"KCL is a constraint-based record and functional language hosted by Cloud Native Computing Foundation (CNCF) that enhances the writing of complex configurations, including those for cloud-native scenarios. With its advanced programming language technology and practices, KCL is dedicated to promoting better modularity, scalability, and stability for configurations. It enables simpler logic writing and offers ease of automation APIs and integration with homegrown systems.",date:"2024-01-04T00:00:00.000Z",formattedDate:"January 4, 2024",tags:[{label:"KCL",permalink:"/blog/tags/kcl"},{label:"Biweekly-Newsletter",permalink:"/blog/tags/biweekly-newsletter"}],readingTime:6.09,hasTruncateMarker:!1,authors:[{name:"KCL Team",title:"KCL Team"}],frontMatter:{slug:"2024-01-04-biweekly-newsletter",title:"KCL Biweekly Newsletter (2023 12.22 - 2024.01.04) | Crossplane KCL Integration",authors:{name:"KCL Team",title:"KCL Team"},tags:["KCL","Biweekly-Newsletter"],image:"/img/biweekly-newsletter.png"},prevItem:{title:"KCL Biweekly Newsletter (2024 01.04 - 2024.01.18) | KCL v0.7.4 Released!",permalink:"/blog/2024-01-18-biweekly-newsletter"},nextItem:{title:"10 Ways for Kubernetes Declarative Configuration Management",permalink:"/blog/2023-12-25-ten-ways-for-kubernetes-config-management"}},l={authorsImageUrls:[void 0]},c=[{value:"Overview",id:"overview",level:2},{value:"Special Thanks",id:"special-thanks",level:2},{value:"Featured Updates",id:"featured-updates",level:2},{value:"Using KCL to Write Crossplane Composition Functions",id:"using-kcl-to-write-crossplane-composition-functions",level:3},{value:"Prerequisites",id:"prerequisites",level:4},{value:"Quick Start",id:"quick-start",level:4},{value:"1. Install the Crossplane KCL Function",id:"1-install-the-crossplane-kcl-function",level:5},{value:"2. Apply the Composition Resource",id:"2-apply-the-composition-resource",level:5},{value:"3. Create Crossplane XRD",id:"3-create-crossplane-xrd",level:5},{value:"4. Apply the Crossplane XR",id:"4-apply-the-crossplane-xr",level:5},{value:"5. Verify the Generated Managed Resources",id:"5-verify-the-generated-managed-resources",level:5},{value:"6. Debugging KCL Functions Locally",id:"6-debugging-kcl-functions-locally",level:5},{value:"Client Enhancements",id:"client-enhancements",level:4},{value:"Resources",id:"resources",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(57702).Z,width:"1141",height:"435"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang"},"KCL")," is a constraint-based record and functional language hosted by Cloud Native Computing Foundation (CNCF) that enhances the writing of complex configurations, including those for cloud-native scenarios. With its advanced programming language technology and practices, KCL is dedicated to promoting better modularity, scalability, and stability for configurations. It enables simpler logic writing and offers ease of automation APIs and integration with homegrown systems."),(0,o.kt)("p",null,"This section will update the KCL language community's latest developments every two weeks, including features, website updates, and the latest community news, helping everyone better understand the KCL community!"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"KCL Website: ",(0,o.kt)("a",{parentName:"em",href:"https://kcl-lang.io"},"https://kcl-lang.io")))),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Thank you to all contributors for their outstanding work over the past two weeks (12.22 2023 - 01.04 2024). Here is an overview of the key content:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\ud83d\udd27 Toolchain Update")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Package Management Tool Update")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Adds support for automatic translation of external package names containing the - symbol to an underscore _ that KCL recognizes, such as set-annotation -> set_annotation"),(0,o.kt)("li",{parentName:"ul"},"Fixes a null pointer error caused when kcl mod add encounters a mismatch between the Registry package version and the version of the package already present locally")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\ud83d\udcbb IDE Update")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Semantic Highlighting")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"KCL IDE now supports semantic-level highlighting, avoiding differences in highlighting across various IDE plugins")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Enhancement for Completion Features")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Differentiates between Schema type and instance completion symbols"),(0,o.kt)("li",{parentName:"ul"},"Unifies the format for Schema comment documentation completion"),(0,o.kt)("li",{parentName:"ul"},"Fixes inconsistencies in completion symbol types across different syntaxes")),(0,o.kt)("h2",{id:"special-thanks"},"Special Thanks"),(0,o.kt)("p",null,"The following are listed in no particular order:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Thanks to @FLAGLORD, @YiuTerran, @flyinox, @steeling, @Anoop, @Phillip Neumann, and @Even Solberg for their valuable feedback and discussions during the promotion and usage of KCL \ud83d\ude4c")),(0,o.kt)("h2",{id:"featured-updates"},"Featured Updates"),(0,o.kt)("h3",{id:"using-kcl-to-write-crossplane-composition-functions"},"Using KCL to Write Crossplane Composition Functions"),(0,o.kt)("p",null,"Crossplane and its XRs allow developers to create higher-level abstractions that can encapsulate and compose multiple types of cloud resources across different providers and services. Using Composition Functions to render these abstractions can effectively enhance template capabilities for various provider resources while reducing the amount of YAML code needed."),(0,o.kt)("p",null,"Combining KCL with Composition Functions offers several benefits:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Simplification of Complex Configurations"),": KCL provides a more concise syntax and structure as a DSL, reducing the complexity of configurations. When combined with Crossplane\u2019s composite resources, you can create more intuitive and easy-to-understand configuration templates with loop and condition features, simplifying the definition and maintenance of resources instead of duplicate YAML and Go code snippets."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Reusability and Modularity"),": KCL supports modularity and code reuse through OCI Registry, which means you can create reusable configuration components. Combined with Crossplane, this promotes the modularity of composite resources, increases the reuse of configurations, and reduces errors."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Automation and Policy-Driven"),": You can use KCL\u2019s powerful features to write policies and constraints that, combined with Crossplane\u2019s declarative resource management, can be automatically enforced, ensuring compliance within the cloud environment.")),(0,o.kt)("p",null,"Additionally, you can refer to ",(0,o.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/user_docs/getting-started/intro#how-to-choose"},"here")," to learn about the differences between KCL and other configuration formats or DSLs."),(0,o.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Prepare a Kubernetes cluster"),(0,o.kt)("li",{parentName:"ul"},"Install Kubectl"),(0,o.kt)("li",{parentName:"ul"},"Install ",(0,o.kt)("a",{parentName:"li",href:"https://docs.crossplane.io/"},"Crossplane and Crossplane CLI 1.14+")),(0,o.kt)("li",{parentName:"ul"},"Install Go 1.21+")),(0,o.kt)("h4",{id:"quick-start"},"Quick Start"),(0,o.kt)("p",null,"Let\u2019s write a KCL function abstraction which generates managed resources ",(0,o.kt)("inlineCode",{parentName:"p"},"VPC")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"InternetGateway")," with an input resource ",(0,o.kt)("inlineCode",{parentName:"p"},"Network"),"."),(0,o.kt)("h5",{id:"1-install-the-crossplane-kcl-function"},"1. Install the Crossplane KCL Function"),(0,o.kt)("p",null,"Installing a function creates a function pod. The function logic is processed as a pipeline step in a composition that may create managed resources when triggered through specified parameters."),(0,o.kt)("p",null,"Install a Function with a Crossplane Function object setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.package")," value to the location of the function package."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f- << EOF\napiVersion: pkg.crossplane.io/v1beta1\nkind: Function\nmetadata:\n  name: kcl-function\nspec:\n  package: docker.io/kcllang/crossplane-kcl\nEOF\n")),(0,o.kt)("h5",{id:"2-apply-the-composition-resource"},"2. Apply the Composition Resource"),(0,o.kt)("p",null,"You can apply the composition resource with the inline KCL code into the cluster."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'kubectl apply -f- << EOF\napiVersion: apiextensions.crossplane.io/v1\nkind: Composition\nmetadata:\n  name: xlabels.fn-demo.crossplane.io\n  labels:\n    provider: aws\nspec:\n  writeConnectionSecretsToNamespace: crossplane-system\n  compositeTypeRef:\n    apiVersion: fn-demo.crossplane.io/v1alpha1\n    kind: XNetwork\n  mode: Pipeline\n  pipeline:\n  - step: normal\n    functionRef:\n      name: kcl-function\n    input:\n      apiVersion: krm.kcl.dev/v1alpha1\n      kind: KCLRun\n      metadata:\n        name: basic\n      spec:\n        # Generate new resources\n        target: Resources\n        # OCI, Git or inline source\n        # source: oci://ghcr.io/kcl-lang/crossplane-xnetwork-kcl-function\n        # source: github.com/kcl-lang/modules/crossplane-xnetwork-kcl-function\n        source: |\n          # Get the XR spec fields\n          id = option("params")?.oxr?.spec.id or ""\n          # Render XR to crossplane managed resources\n          network_id_labels = {"networks.meta.fn.crossplane.io/network-id" = id} if id else {}\n          vpc = {\n              apiVersion = "ec2.aws.upbound.io/v1beta1"\n              kind = "VPC"\n              metadata.name = "vpc"\n              metadata.labels = network_id_labels\n              spec.forProvider = {\n                  region = "eu-west-1"\n                  cidrBlock = "192.168.0.0/16"\n                  enableDnsSupport = True\n                  enableDnsHostnames = True\n              }\n          }\n          gateway = {\n              apiVersion = "ec2.aws.upbound.io/v1beta1"\n              kind = "InternetGateway"\n              metadata.name = "gateway"\n              metadata.labels = network_id_labels\n              spec.forProvider = {\n                  region = "eu-west-1"\n                  vpcIdSelector.matchControllerRef = True\n              }\n          }\n          items = [vpc, gateway]\nEOF\n')),(0,o.kt)("h5",{id:"3-create-crossplane-xrd"},"3. Create Crossplane XRD"),(0,o.kt)("p",null,"We define a schema using the crossplane XRD for the input resource ",(0,o.kt)("inlineCode",{parentName:"p"},"Network"),", it has a field named ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," which denotes the network id."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f- << EOF\napiVersion: apiextensions.crossplane.io/v1\nkind: CompositeResourceDefinition\nmetadata:\n  name: xnetworks.fn-demo.crossplane.io\nspec:\n  group: fn-demo.crossplane.io\n  names:\n    kind: XNetwork\n    plural: xnetworks\n  claimNames:\n    kind: Network\n    plural: networks\n  versions:\n    - name: v1alpha1\n      served: true\n      referenceable: true\n      schema:\n        openAPIV3Schema:\n          type: object\n          properties:\n            spec:\n              type: object\n              properties:\n                id:\n                  type: string\n                  description: ID of this Network that other objects will use to refer to it.\n              required:\n                - id\nEOF\n")),(0,o.kt)("h5",{id:"4-apply-the-crossplane-xr"},"4. Apply the Crossplane XR"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f- << EOF\napiVersion: fn-demo.crossplane.io/v1alpha1\nkind: Network\nmetadata:\n  name: network-test-functions\n  namespace: default\nspec:\n  id: network-test-functions\nEOF\n")),(0,o.kt)("h5",{id:"5-verify-the-generated-managed-resources"},"5. Verify the Generated Managed Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"VPC")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get VPC -o yaml | grep network-id\n      networks.meta.fn.crossplane.io/network-id: network-test-functions\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"InternetGateway")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get InternetGateway -o yaml | grep network-id\n      networks.meta.fn.crossplane.io/network-id: network-test-functions\n")),(0,o.kt)("p",null,"It can be seen that we have indeed successfully generated ",(0,o.kt)("inlineCode",{parentName:"p"},"VPC")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"InternetGateway")," resources, and their fields meet expectations."),(0,o.kt)("h5",{id:"6-debugging-kcl-functions-locally"},"6. Debugging KCL Functions Locally"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/crossplane-contrib/function-kcl"},"here")," for more information and examples."),(0,o.kt)("h4",{id:"client-enhancements"},"Client Enhancements"),(0,o.kt)("p",null,"It can be seen that the above abstract code often requires a crossplane as a control plane intermediary, and you can still complete the abstraction in a fully client-side manner and directly generate crossplane managed resources to reduce the burden on the cluster."),(0,o.kt)("p",null,"On the client side, there are two methods to render managed resources. One method is to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"crossplane beta render")," command, and the other is to render directly using the ",(0,o.kt)("inlineCode",{parentName:"p"},"kcl run")," command. The usage for the former can be found here. For the latter, the usage is as follows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'kcl run oci://ghcr.io/kcl-lang/crossplane-xnetwork-kcl-function -S items -D params=\'{"oxr": {"spec": {"id": "network-test-functions"}}}\'\n')),(0,o.kt)("p",null,"The output is"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: ec2.aws.upbound.io/v1beta1\nkind: VPC\nmetadata:\n  name: vpc\n  labels:\n    networks.meta.fn.crossplane.io/network-id: network-test-functions\nspec:\n  forProvider:\n    region: eu-west-1\n    cidrBlock: 192.168.0.0/16\n    enableDnsSupport: true\n    enableDnsHostnames: true\n---\napiVersion: ec2.aws.upbound.io/v1beta1\nkind: InternetGateway\nmetadata:\n  name: gateway\n  labels:\n    networks.meta.fn.crossplane.io/network-id: network-test-functions\nspec:\n  forProvider:\n    region: eu-west-1\n    vpcIdSelector:\n      matchControllerRef: true\n")),(0,o.kt)("p",null,"Both methods require a registry (usually docker.io) to assist in completing the work. The ultimate choice between them may depend on your operational habits and environmental costs. Regardless of the method chosen, we recommend maintaining your KCL code in Git to better implement GitOps and obtain a better IDE experience and reusable modules such as the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/modules/tree/main/crossplane-provider-aws"},"Crossplane AWS Provider Modules"),"."),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("p",null,"\u2764\ufe0f Thanks to all KCL users and community members for their valuable feedback and suggestions in the community. See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/community"},"here")," to join us!"),(0,o.kt)("p",null,"For more resources, please refer to"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kcl-lang.io/"},"KCL Website")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kusionstack.io/"},"KusionStack Website")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/kcl-lang/kcl/milestone/8"},"KCL v0.8.0 Milestone"))))}d.isMDXComponent=!0},57702:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/biweekly-newsletter-fbbce78fb9c12bfc7ceee05a0a5f8870.png"}}]);