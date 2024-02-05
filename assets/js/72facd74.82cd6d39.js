"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[83227],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[p]="string"==typeof e?e:i,l[1]=r;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},90320:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const o={},l="KubeVela",r={unversionedId:"user_docs/guides/working-with-kubevela/index",id:"version-0.7.0/user_docs/guides/working-with-kubevela/index",title:"KubeVela",description:"KubeVela is a modern application delivery system hosted by the CNCF Foundation. It is built on the Open Application Model (OAM) specification and aims to abstract the complexity of Kubernetes, providing a set of simple and easy-to-use command-line tools and APIs for developers to deploy and operate cloud-native applications without worrying about the underlying details.",source:"@site/versioned_docs/version-0.7.0/user_docs/guides/working-with-kubevela/index.md",sourceDirName:"user_docs/guides/working-with-kubevela",slug:"/user_docs/guides/working-with-kubevela/",permalink:"/docs/user_docs/guides/working-with-kubevela/",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.7.0/user_docs/guides/working-with-kubevela/index.md",tags:[],version:"0.7.0",lastUpdatedBy:"peefy",lastUpdatedAt:1707103391,formattedLastUpdatedAt:"Feb 5, 2024",frontMatter:{},sidebar:"user_docs",previous:{title:"KusionStack",permalink:"/docs/user_docs/guides/working-with-kusion/"},next:{title:"Concepts",permalink:"/docs/user_docs/concepts/"}},s={},c=[{value:"How to",id:"how-to",level:2},{value:"1. Configure the Kubernetes Cluster",id:"1-configure-the-kubernetes-cluster",level:3},{value:"2. Install KubeVela",id:"2-install-kubevela",level:3},{value:"3. Write OAM Configurations",id:"3-write-oam-configurations",level:3},{value:"4. Deploy the application and verify.",id:"4-deploy-the-application-and-verify",level:3},{value:"Conclusion",id:"conclusion",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...o}=e;return(0,i.kt)(p,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"kubevela"},"KubeVela"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://kubevela.net/"},"KubeVela")," is a modern application delivery system hosted by the CNCF Foundation. It is built on the Open Application Model (OAM) specification and aims to abstract the complexity of Kubernetes, providing a set of simple and easy-to-use command-line tools and APIs for developers to deploy and operate cloud-native applications without worrying about the underlying details."),(0,i.kt)("p",null,"Using KCL with KubeVela has the following benefits:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Simpler configuration"),": KCL provides stronger templating capabilities, such as conditions and loops, for KubeVela OAM configurations at the client level, reducing the need for repetitive YAML writing. At the same time, the reuse of KCL model libraries and toolchains enhances the experience and management efficiency of configuration and policy writing."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Better maintainability"),": KCL provides a configuration file structure that is more conducive to version control and team collaboration, instead of relying solely on YAML. When combined with OAM application models written in KCL, application configurations become easier to maintain and iterate."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Simplified operations"),": By combining the simplicity of KCL configurations with the ease of use of KubeVela, daily operational tasks such as deploying, updating, scaling, or rolling back applications can be simplified. Developers can focus more on the applications themselves rather than the tedious details of the deployment process."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Improved cross-team collaboration"),": By using KCL's configuration chunk writing and package management capabilities in conjunction with KubeVela, clearer boundaries can be defined, allowing different teams (such as development, testing, and operations teams) to collaborate systematically. Each team can focus on tasks within their scope of responsibility, delivering, sharing, and reusing their own configurations without worrying about other aspects.")),(0,i.kt)("h2",{id:"how-to"},"How to"),(0,i.kt)("h3",{id:"1-configure-the-kubernetes-cluster"},"1. Configure the Kubernetes Cluster"),(0,i.kt)("p",null,"Install ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/k3d-io/k3d"},"K3d")," and create a cluster."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"k3d cluster create\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: You can use other methods to create your own Kubernetes cluster, such as kind, minikube, etc., in this scenario.")),(0,i.kt)("h3",{id:"2-install-kubevela"},"2. Install KubeVela"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install the KubeVela CLI.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl -fsSl https://kubevela.net/script/install.sh | bash\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install KubeVela Core.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"vela install\n")),(0,i.kt)("h3",{id:"3-write-oam-configurations"},"3. Write OAM Configurations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install KCL.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl -fsSL https://kcl-lang.io/script/install-cli.sh | /bin/bash\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a new project and add OAM dependencies.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kcl mod init kcl-play-svc && cd kcl-play-svc && kcl mod add oam\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Write the following code in main.k.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import oam\n\noam.Application {\n    metadata.name = "kcl-play-svc"\n    spec.components = [{\n        name = metadata.name\n        type = "webservice"\n        properties = {\n            image = "kcllang/kcl"\n            ports = [{port = 80, expose = True}]\n            cmd = ["kcl", "play"]\n        }\n    }]\n}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: You can see documents here: ",(0,i.kt)("a",{parentName:"p",href:"https://artifacthub.io/packages/kcl/kcl-module/oam"},"https://artifacthub.io/packages/kcl/kcl-module/oam")," or in the IDE extension.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"oam-definition-hover",src:n(82463).Z,width:"1048",height:"630"})),(0,i.kt)("h3",{id:"4-deploy-the-application-and-verify"},"4. Deploy the application and verify."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Apply the configuration.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kcl run | vela up -f -\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Port forward the service.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"vela port-forward kcl-play-svc\n")),(0,i.kt)("p",null,"Then we can see the KCL Playground application running successfully in the browser."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"kcl-play-svc",src:n(79190).Z,width:"2326",height:"858"})),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"Through this guide, we have learned how to deploy cloud-native applications using KubeVela and KCL. In future documents, we will explain how to further extend the capabilities of KubeVela by using KCL on the client side such as"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Using the inheritance, composition, and validation capabilities of KCL to extend the OAM model and define application abstractions that are better suited to your infrastructure or organization."),(0,i.kt)("li",{parentName:"ul"},"Using the modularized configuration capabilities of KCL to organize OAM multi-environment configurations with conditions, logic, loops, and modularity. For example, distribute longer App Definitions into different files to reduce boilerplate configurations."),(0,i.kt)("li",{parentName:"ul"},"Further integration with projects like KusionStack and ArgoCD to achieve better GitOps.")))}d.isMDXComponent=!0},79190:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kcl-play-svc-17cdd017ee58347075be64904d62e73f.png"},82463:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/oam-definition-hover-bf557b943b8e7abe7c4d13e91d1c48d9.png"}}]);