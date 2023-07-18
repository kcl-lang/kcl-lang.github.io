"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[72740],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),g=a,m=u["".concat(l,".").concat(g)]||u[g]||d[g]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},738:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"ArgoCD",sidebar_position:12},i=void 0,s={unversionedId:"user_docs/guides/argocd",id:"version-0.4.6/user_docs/guides/argocd",title:"ArgoCD",description:"Prerequisite",source:"@site/versioned_docs/version-0.4.6/user_docs/guides/argocd.md",sourceDirName:"user_docs/guides",slug:"/user_docs/guides/argocd",permalink:"/docs/0.4.6/user_docs/guides/argocd",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.4.6/user_docs/guides/argocd.md",tags:[],version:"0.4.6",lastUpdatedBy:"peefy",lastUpdatedAt:1689687201,formattedLastUpdatedAt:"Jul 18, 2023",sidebarPosition:12,frontMatter:{title:"ArgoCD",sidebar_position:12},sidebar:"user_docs",previous:{title:"KusionStack",permalink:"/docs/0.4.6/user_docs/guides/working-with-kusion/"},next:{title:"Concepts",permalink:"/docs/0.4.6/user_docs/concepts/"}},l={},c=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Config ArgoCD Plugin with KCL",id:"config-argocd-plugin-with-kcl",level:2},{value:"Update ArgoCD Deployment",id:"update-argocd-deployment",level:2},{value:"Create KCL Project",id:"create-kcl-project",level:2},{value:"Configure Drift Detection",id:"configure-drift-detection",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,a.kt)("p",null,"Install ArgoCD:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create namespace argocd\nkubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml\n")),(0,a.kt)("h2",{id:"config-argocd-plugin-with-kcl"},"Config ArgoCD Plugin with KCL"),(0,a.kt)("p",null,"ArgoCD has already some common built-in plugins, including helm, jsonnet, and kustomize. For KCL, as a brand-new configuration language, if you want to integrate ArgoCD to complete drift detection, you need to follow its plugin mechanism and configure KCL as a third-party plugin. The specific operations are as follows:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Write the patch YAML configuration file and update the ArgoCD configuration:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'cat <<EOF > patch-argocd-cm.yaml\ndata:\n  configManagementPlugins: |\n    - name: kusion\n      generate:\n        command: ["sh", "-c"]\n        args: ["kcl -Y kcl.yaml ci-test/settings.yaml -o ci-test/stdout.golden.yaml"]\n      lockRepo: true\nEOF\nkubectl -n argocd patch cm/argocd-cm -p "$(cat patch-argocd-cm.yaml)"\n')),(0,a.kt)("h2",{id:"update-argocd-deployment"},"Update ArgoCD Deployment"),(0,a.kt)("p",null,"After completing the first step, ArgoCD will recognize the KCL plugin, but the KCL plugin has not been loaded into the ArgoCD image. To implement configuration drift detection, we have to tune the Deployment of argocd-repo-server."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/examples/blob/main/kusion/argo-cd/patch-argocd-repo-server.yaml"},"patch")," file")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wget -q https://raw.githubusercontent.com/KusionStack/examples/main/kusion/argo-cd/patch-argocd-repo-server.yaml\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Update configuration")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl -n argocd patch deploy/argocd-repo-server -p "$(cat patch-argocd-repo-server.yaml)"\n')),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Update complete")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod -n argocd -l app.kubernetes.io/name=argocd-repo-server\n")),(0,a.kt)("h2",{id:"create-kcl-project"},"Create KCL Project"),(0,a.kt)("p",null,"At this point, the preparation work has been completed, and now the verification process is started. Here we use example projects from the open-source ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig"},"Konfig")," library."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Enable local port forwarding")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward svc/argocd-server -n argocd 8080:443\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Login to ArgoCD")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"argocd login localhost:8080\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Create ArgoCD Application")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"argocd app create guestbook-test \\\n--repo https://github.com/KusionStack/konfig.git \\\n--path appops/guestbook/prod  \\\n--dest-namespace default \\\n--dest-server https://kubernetes.default.svc \\\n--config-management-plugin kusion\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you are using a private repository, you need to configure the private repository access with private key credentials before executing the create command."),(0,a.kt)("p",{parentName:"admonition"},"Please refer ",(0,a.kt)("a",{parentName:"p",href:"https://argo-cd.readthedocs.io/en/stable/user-guide/private-repositories/#ssh-private-key-credential"},"Private Repositories")," for more details.")),(0,a.kt)("p",null,"After successfully creating, you can see the following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"application 'guestbook-test' created\n")),(0,a.kt)("p",null,"Through the ArgoCD UI, you can see that the created applications have not been synchronized yet.\nHere, you can manually synchronize or set automatic synchronization."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(2474).Z,width:"1330",height:"380"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Set synchronization policy (only ",(0,a.kt)("inlineCode",{parentName:"li"},"unsynced")," resources):")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"argocd app set guestbook-test --sync-option ApplyOutOfSyncOnly=true\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"For more information on synchronization strategies, see ",(0,a.kt)("a",{parentName:"p",href:"https://argo-cd.readthedocs.io/en/stable/user-guide/sync-options/"},"Sync Options"))),(0,a.kt)("p",null,"Sync succeeded:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(44622).Z,width:"2654",height:"362"})),(0,a.kt)("h2",{id:"configure-drift-detection"},"Configure Drift Detection"),(0,a.kt)("p",null,"At this point, the ArgoCD monitoring KCL project has been completed, implement configuration drift detection and achieve result consistency.\nLet's modify the mirror version of ",(0,a.kt)("inlineCode",{parentName:"p"},"guestbook-test")," to implement configuration changes."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Update image")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},' appConfiguration: frontend.Server {\n-    image = "gcr.io/google-samples/gb-frontend:v4"\n+    image = "gcr.io/google-samples/gb-frontend:v5"\n     schedulingStrategy.resource = res_tpl.tiny\n }\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Compile Again")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kusion compile -w appops/guestbook/prod\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Git commit and push")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'git add .\ngit commit -m "manual drifted config for appops/guestbook/prod"\ngit push origin main\n')),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Drift configuration auto-convergence")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(649).Z,width:"2654",height:"414"})))}d.isMDXComponent=!0},2474:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/out-of-sync-37f958b3a8b314e916ea330492dee2f0.jpg"},649:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/reconcile-drifted-config-40ba407f682c028fa3ebd7cd403881a7.jpg"},44622:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/synced-9247a7d5a6437d211b07ae03344a8ac3.jpg"}}]);