"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[67096],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>d});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=c(o),m=a,d=p["".concat(s,".").concat(m)]||p[m]||g[m]||i;return o?n.createElement(d,l(l({ref:t},u),{},{components:o})):n.createElement(d,l({ref:t},u))}));function d(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,l=new Array(i);l[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[p]="string"==typeof e?e:a,l[1]=r;for(var c=2;c<i;c++)l[c]=o[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},9668:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var n=o(87462),a=(o(67294),o(3905));const i={slug:"2023-12-19-how-to-apply-kcl-config-to-cluster",title:"How to Apply KCL Configuration to Cluster",authors:{name:"KCL Team Member",title:"KCL Team Member"},tags:["KCL","KubeVela"]},l="How to Apply KCL Configuration to Cluster",r={permalink:"/blog/2023-12-19-how-to-apply-kcl-config-to-cluster",editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/blog/2023-12-19-how-to-apply-kcl-config-to-cluster/index.md",source:"@site/blog/2023-12-19-how-to-apply-kcl-config-to-cluster/index.md",title:"How to Apply KCL Configuration to Cluster",description:"What is KCL",date:"2023-12-19T00:00:00.000Z",formattedDate:"December 19, 2023",tags:[{label:"KCL",permalink:"/blog/tags/kcl"},{label:"KubeVela",permalink:"/blog/tags/kube-vela"}],readingTime:3.085,hasTruncateMarker:!1,authors:[{name:"KCL Team Member",title:"KCL Team Member"}],frontMatter:{slug:"2023-12-19-how-to-apply-kcl-config-to-cluster",title:"How to Apply KCL Configuration to Cluster",authors:{name:"KCL Team Member",title:"KCL Team Member"},tags:["KCL","KubeVela"]},prevItem:{title:"KCL Biweekly Newsletter (2023 12.07 - 12.21) | KCL v0.7.2 is released and KubeVela/OAM integration is available now!",permalink:"/blog/2023-12-21-biweekly-newsletter"},nextItem:{title:"Cloud Native Configuration and Policy Language - KCL",permalink:"/blog/2023-12-18-cloud-native-configuration-language-kcl"}},s={authorsImageUrls:[void 0]},c=[{value:"What is KCL",id:"what-is-kcl",level:2},{value:"Several Ways to Deploy KCL Configuration to a cluster",id:"several-ways-to-deploy-kcl-configuration-to-a-cluster",level:2},{value:"Using Kubectl",id:"using-kubectl",level:3},{value:"Using CI/CD Tools",id:"using-cicd-tools",level:3},{value:"Using KRM Function",id:"using-krm-function",level:3},{value:"Using Custom Abstract Configuration Tools",id:"using-custom-abstract-configuration-tools",level:3},{value:"Using KCL Operator",id:"using-kcl-operator",level:3},{value:"Using Configuration Management Tools",id:"using-configuration-management-tools",level:3}],u={toc:c},p="wrapper";function g(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-kcl"},"What is KCL"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl"},"KCL")," is an open-source, constraint-based record and functional language that enhances the writing of complex configurations, including those for cloud-native scenarios. It is hosted by the Cloud Native Computing Foundation (CNCF) as a Sandbox Project. With advanced programming language technology and practices, KCL is dedicated to promoting better modularity, scalability, and stability for configurations. It enables simpler logic writing and offers ease of automation APIs and integration with homegrown systems."),(0,a.kt)("h2",{id:"several-ways-to-deploy-kcl-configuration-to-a-cluster"},"Several Ways to Deploy KCL Configuration to a cluster"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"cloud-native-tool-integration",src:o(92218).Z,width:"1386",height:"608"})),(0,a.kt)("p",null,"Since KCL can output YAML/JSON files, theoretically, any method that supports deploying YAML/JSON configurations to a cluster can be used to deploy KCL configurations. Usually, KCL files are stored in Git or Module Registry for easy sharing among different roles and teams. However, KCL can do much more than that, and the main ways to deploy KCL configurations to a cluster are as follows."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Using kubectl"),": The most basic way to access a Kubernetes cluster is using Kubectl. We can directly deploy the Kubernetes YAML configuration files generated by KCL to the cluster using the kubectl apply command. This method is simple and suitable for deploying a small number of resources."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Using CI/CD tools"),": CI/CD tools (such as Jenkins, GitLab CI, CircleCI, ArgoCD, FluxCD, etc.) can be used to achieve GitOps automation deployment of Kubernetes YAML configuration files to the cluster. By defining CI/CD processes and configuration files, automated building and deployment to the cluster can be achieved."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Using tools that support KRM Function specification"),": Kubernetes Resource Model (KRM) Function allows users to use other languages, including KCL, to enhance YAML template and logic writing capabilities, such as writing conditions, loops, etc. These tools mainly include Kustomize, KPT, Crossplane, etc. Although Helm does not natively support KRM Function, we can combine Helm and Kustomize to achieve it."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Using client/runtime custom abstract configuration tools for deployment"),": KusionStack, KubeVela, etc. Of course, KCL allows you to customize your preferred application configuration model."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Using KCL Operator")," with Kubernetes Mutation Webhook and Validation Webhook support for runtime configuration or policy writing."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Using configuration management tools"),": Combine configuration management tools (such as Puppet, Chef, Ansible, etc.) to automate the deployment of Kubernetes YAML configurations to the cluster. These tools can achieve dynamic configuration deployment by defining KCL templates and variables.")),(0,a.kt)("p",null,"The reasons for KCL supporting multiple deployment methods and cloud-native tool integration are as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Flexibility"),": Different deployment methods are suitable for different scenarios and needs, so providing multiple choices allows users to choose the most suitable way to deploy applications or configurations according to their specific situations."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Cloud-native tool ecosystem"),": Kubernetes is a widely used platform with a large ecosystem of tools and technologies. Supporting multiple deployment methods can provide users with more choices to meet their usage habits and technological preferences."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Specifications and standards"),": The Kubernetes community is working to promote standards and specifications, such as OAM, KRM Function specifications, and Helm Charts. By providing multiple support methods through a unified KRM KCL specification and KCL Module, different specification and standard requirements can be met."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Automation and integration"),": Some deployment methods can be integrated through automation tools and CI/CD pipelines to achieve automated deployment processes. Therefore, providing multiple ways can meet different automation and integration needs.")),(0,a.kt)("p",null,"In conclusion, supporting multiple deployment methods can provide users with greater flexibility and choice, allowing them to deploy applications or configurations according to their needs and preferences. The specific usage of each deployment method is as follows:"),(0,a.kt)("h3",{id:"using-kubectl"},"Using Kubectl"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://kcl-lang.io/blog/2023-11-20-search-k8s-module-on-artifacthub"},"https://kcl-lang.io/blog/2023-11-20-search-k8s-module-on-artifacthub")),(0,a.kt)("h3",{id:"using-cicd-tools"},"Using CI/CD Tools"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://kcl-lang.io/blog/2023-07-31-kcl-github-argocd-gitops"},"https://kcl-lang.io/blog/2023-07-31-kcl-github-argocd-gitops")),(0,a.kt)("h3",{id:"using-krm-function"},"Using KRM Function"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://kcl-lang.io/blog/2023-10-23-cloud-native-supply-chain-krm-kcl-spec"},"https://kcl-lang.io/blog/2023-10-23-cloud-native-supply-chain-krm-kcl-spec")),(0,a.kt)("h3",{id:"using-custom-abstract-configuration-tools"},"Using Custom Abstract Configuration Tools"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://kcl-lang.io/blog/2023-12-15-kubevela-integration"},"https://kcl-lang.io/blog/2023-12-15-kubevela-integration")),(0,a.kt)("h3",{id:"using-kcl-operator"},"Using KCL Operator"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/user_docs/guides/working-with-k8s/mutate-manifests/kcl-operator"},"https://kcl-lang.io/docs/user_docs/guides/working-with-k8s/mutate-manifests/kcl-operator")),(0,a.kt)("h3",{id:"using-configuration-management-tools"},"Using Configuration Management Tools"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl/issues/952"},"https://github.com/kcl-lang/kcl/issues/952")))}g.isMDXComponent=!0},92218:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/cloud-native-tool-integration-b2157c3d2b3210c16f145176928e2cfc.png"}}]);