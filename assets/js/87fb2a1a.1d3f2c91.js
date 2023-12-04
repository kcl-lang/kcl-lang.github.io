"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[99288],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),g=r,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||o;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},46174:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={id:"gitops-quick-start",sidebar_label:"Quick Start"},i="Quick Start",l={unversionedId:"user_docs/guides/gitops/gitops-quick-start",id:"version-0.5.2/user_docs/guides/gitops/gitops-quick-start",title:"Quick Start",description:"Introduction",source:"@site/versioned_docs/version-0.5.2/user_docs/guides/gitops/1-quick-start.md",sourceDirName:"user_docs/guides/gitops",slug:"/user_docs/guides/gitops/gitops-quick-start",permalink:"/docs/0.5.2/user_docs/guides/gitops/gitops-quick-start",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.2/user_docs/guides/gitops/1-quick-start.md",tags:[],version:"0.5.2",lastUpdatedBy:"peefy",lastUpdatedAt:1701659761,formattedLastUpdatedAt:"Dec 4, 2023",sidebarPosition:1,frontMatter:{id:"gitops-quick-start",sidebar_label:"Quick Start"},sidebar:"user_docs",previous:{title:"Best Practice",permalink:"/docs/0.5.2/user_docs/guides/working-with-konfig/practice"},next:{title:"Github Actions",permalink:"/docs/0.5.2/user_docs/guides/ci-integration/github-actions"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"What is GitOps",id:"what-is-gitops",level:3},{value:"GitOps with KCL",id:"gitops-with-kcl",level:3},{value:"Prerequisite",id:"prerequisite",level:2},{value:"How to",id:"how-to",level:2},{value:"1. Get the Example",id:"1-get-the-example",level:3},{value:"2. Install Kubernetes and GitOps Tool",id:"2-install-kubernetes-and-gitops-tool",level:3},{value:"Setup Kubernetes Cluster and ArgoCD Controllers",id:"setup-kubernetes-cluster-and-argocd-controllers",level:4},{value:"Setup ArgoCD CLI",id:"setup-argocd-cli",level:4},{value:"Summary",id:"summary",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quick-start"},"Quick Start"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("h3",{id:"what-is-gitops"},"What is GitOps"),(0,r.kt)("p",null,"GitOps is a modern way to do continuous delivery. Its core idea is to have a Git repository which contains environmental and application configurations. An automated process is also needed for sync the config to cluster."),(0,r.kt)("p",null,"By changing the files in repository, developers can apply the applications automatically. The benefits of applying GitOps include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Increased productivity. Continuous delivery can speed up the time of deployment."),(0,r.kt)("li",{parentName:"ul"},"Lower the barrier for developer to deploy. By pushing code instead of container configuration, developers can easily deploy Kubernetes without knowing its internal implementation."),(0,r.kt)("li",{parentName:"ul"},"Trace the change records. Managing the cluster with Git makes every change traceable, enhancing the audit trail."),(0,r.kt)("li",{parentName:"ul"},"Recover the cluster with Git's rollback and branch.")),(0,r.kt)("h3",{id:"gitops-with-kcl"},"GitOps with KCL"),(0,r.kt)("p",null,"Benefits of Using KCL and ArgoCD Together:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"KCL can help us ",(0,r.kt)("strong",{parentName:"li"},"simplify complex Kubernetes deployment configuration files"),", reduce the error rate of manually writing YAML files, and improve code readability and maintainability."),(0,r.kt)("li",{parentName:"ul"},"ArgoCD can ",(0,r.kt)("strong",{parentName:"li"},"automate")," the deployment of Kubernetes applications, achieve continuous deployment, and provide comprehensive monitoring and control functions."),(0,r.kt)("li",{parentName:"ul"},"By combining KCL and ArgoCD, deployment efficiency can be improved, errors reduced, and management and monitoring of Kubernetes applications strengthened."),(0,r.kt)("li",{parentName:"ul"},"The combination of KCL and ArgoCD can also help us achieve ",(0,r.kt)("strong",{parentName:"li"},"Infrastructure as Code (IaC)"),", simplify application deployment and management, and better implement DevOps principles.")),(0,r.kt)("p",null,"With GitOps, developer and operation teams can manage application deployment and configuration by modifying KCL code and generating YAML files. The GitOps toolchain will automatically synchronize the changes to the Kubernetes cluster, enabling continuous deployment and ensuring consistency. If there are issues, the GitOps toolchain can be used to quickly rollback."),(0,r.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://kcl-lang.io/docs/user_docs/getting-started/install"},"KCL"))),(0,r.kt)("h2",{id:"how-to"},"How to"),(0,r.kt)("h3",{id:"1-get-the-example"},"1. Get the Example"),(0,r.kt)("p",null,"Firstly, let's get the example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/kcl-lang/kcl-lang.io.git/\ncd ./kcl-lang.io/examples/gitops\n")),(0,r.kt)("p",null,"We can run the following command to show the config."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat config/main.k\n")),(0,r.kt)("p",null,"The output is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import .app\n\nconfig = app.App {\n    name = "kcl-guestbook-ui"\n    containers.guestbook = {\n        image = "gcr.io/heptio-images/ks-guestbook-demo:0.2"\n        ports = [{containerPort = 80}]\n    }\n    service.ports = [{ port = 80 }]\n    service.type = "LoadBalancer"\n}\n')),(0,r.kt)("p",null,"In the above code, we defined a configuration using the ",(0,r.kt)("inlineCode",{parentName:"p"},"App")," schema, where we configured an ",(0,r.kt)("inlineCode",{parentName:"p"},"gcr.io/heptio-images/ks-guestbook-demo:0.2")," container and configured it with an ",(0,r.kt)("inlineCode",{parentName:"p"},"80")," service port."),(0,r.kt)("h3",{id:"2-install-kubernetes-and-gitops-tool"},"2. Install Kubernetes and GitOps Tool"),(0,r.kt)("h4",{id:"setup-kubernetes-cluster-and-argocd-controllers"},"Setup Kubernetes Cluster and ArgoCD Controllers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/k3d-io/k3d"},"K3d")," to create a default cluster.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"k3d cluster create mycluster\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/argoproj/argo-cd/releases/"},"ArgoCD"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create namespace argocd\nkubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Enable ArgoCD KCL Plugin")),(0,r.kt)("p",null,"Write the patch YAML configuration file and update the ArgoCD configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f ./install/kcl-cmp.yaml\n")),(0,r.kt)("p",null,"After completing the first step, ArgoCD will recognize the KCL plugin, but the KCL plugin has not been loaded into the ArgoCD image. To implement configuration drift detection, we have to tune the Deployment of argocd-repo-server."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl -n argocd patch deploy/argocd-repo-server -p "$(cat ./install/patch-argocd-repo-server.yaml)"\n')),(0,r.kt)("p",null,"Wait for the init container to complete execution (Running)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod -n argocd -l app.kubernetes.io/name=argocd-repo-server\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To access the ArgoCD web UI")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward svc/argocd-server -n argocd 8080:443\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Open a browser and go to: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://localhost:8080"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'The username is "admin" and password get be obtained from the following command:'))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d\n')),(0,r.kt)("h4",{id:"setup-argocd-cli"},"Setup ArgoCD CLI"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/argoproj/argo-cd/releases"},"ArgoCD CLI"))),(0,r.kt)("p",null,'Use "admin" and password to login to ArgoCD'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"argocd login localhost:8080\n")),(0,r.kt)("p",null,"Create ArgoCD Application"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"argocd app create guestbook \\\n--repo https://github.com/kcl-lang/kcl-lang.io \\\n--path examples/gitops/config \\\n--dest-namespace default \\\n--dest-server https://kubernetes.default.svc \\\n--config-management-plugin kcl-v1.0\n")),(0,r.kt)("p",null,"If you are using a private repository, you need to configure the private repository access with private key credentials before executing the create command."),(0,r.kt)("p",null,"Please refer ",(0,r.kt)("a",{parentName:"p",href:"https://argo-cd.readthedocs.io/en/stable/user-guide/private-repositories/#ssh-private-key-credential"},"Private Repositories")," for more details."),(0,r.kt)("p",null,"After successfully creating, you can see the following output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"application 'guestbook' created\n")),(0,r.kt)("p",null,"Through the ArgoCD UI, you can see that the created applications have not been synchronized yet. Here, you can manually synchronize or set automatic synchronization."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(77863).Z,width:"2128",height:"1008"})),(0,r.kt)("p",null,"For more information on synchronization strategies, see ",(0,r.kt)("a",{parentName:"p",href:"https://argo-cd.readthedocs.io/en/stable/user-guide/sync-options/"},"Sync Options")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(44029).Z,width:"3328",height:"1132"})),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"With GitOps, you can easily manage your applications and configuration in your Kubernetes cluster with KCL, ensuring that your applications are always in the desired state."))}d.isMDXComponent=!0},44029:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/argocd-kcl-app-dashboard-82ae80d5dbb9da2eeb3e8f3efe867c01.jpg"},77863:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/argocd-kcl-app-3eda0ee903240a2371c45cd384c14653.jpg"}}]);