"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[49466],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),d=n,k=u["".concat(i,".").concat(d)]||u[d]||g[d]||l;return a?r.createElement(k,o(o({ref:t},c),{},{components:a})):r.createElement(k,o({ref:t},c))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},11269:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const l={id:"gitops-quick-start",sidebar_label:"\u5feb\u901f\u5f00\u59cb"},o="\u5feb\u901f\u5f00\u59cb",s={unversionedId:"user_docs/guides/gitops/gitops-quick-start",id:"version-0.7/user_docs/guides/gitops/gitops-quick-start",title:"\u5feb\u901f\u5f00\u59cb",description:"\u7b80\u4ecb",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.7/user_docs/guides/gitops/1-quick-start.md",sourceDirName:"user_docs/guides/gitops",slug:"/user_docs/guides/gitops/gitops-quick-start",permalink:"/zh-CN/docs/0.7/user_docs/guides/gitops/gitops-quick-start",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.7/user_docs/guides/gitops/1-quick-start.md",tags:[],version:"0.7",lastUpdatedBy:"Peefy",lastUpdatedAt:1714663025,formattedLastUpdatedAt:"2024\u5e745\u67082\u65e5",sidebarPosition:1,frontMatter:{id:"gitops-quick-start",sidebar_label:"\u5feb\u901f\u5f00\u59cb"},sidebar:"user_docs",previous:{title:"\u6700\u4f73\u5b9e\u8df5",permalink:"/zh-CN/docs/0.7/user_docs/guides/working-with-konfig/practice"},next:{title:"Github Actions",permalink:"/zh-CN/docs/0.7/user_docs/guides/ci-integration/github-actions"}},i={},p=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u4ec0\u4e48\u662f GitOps",id:"\u4ec0\u4e48\u662f-gitops",level:3},{value:"\u5c06 KCL \u4e0e ArgoCD \u4e00\u8d77\u4f7f\u7528",id:"\u5c06-kcl-\u4e0e-argocd-\u4e00\u8d77\u4f7f\u7528",level:3},{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:2},{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb-1",level:2},{value:"1. \u83b7\u53d6\u793a\u4f8b",id:"1-\u83b7\u53d6\u793a\u4f8b",level:3},{value:"2. \u5b89\u88c5 Kubernetes \u548c GitOps \u5de5\u5177",id:"2-\u5b89\u88c5-kubernetes-\u548c-gitops-\u5de5\u5177",level:3},{value:"\u914d\u7f6e Kubernetes \u96c6\u7fa4\u548c ArgoCD \u63a7\u5236\u5668",id:"\u914d\u7f6e-kubernetes-\u96c6\u7fa4\u548c-argocd-\u63a7\u5236\u5668",level:4},{value:"\u5b89\u88c5 ArgoCD \u5ba2\u6237\u7aef\u5de5\u5177",id:"\u5b89\u88c5-argocd-\u5ba2\u6237\u7aef\u5de5\u5177",level:4}],c={toc:p},u="wrapper";function g(e){let{components:t,...l}=e;return(0,n.kt)(u,(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,n.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,n.kt)("h3",{id:"\u4ec0\u4e48\u662f-gitops"},"\u4ec0\u4e48\u662f GitOps"),(0,n.kt)("p",null,"GitOps \u662f\u4e00\u79cd\u5b9e\u73b0\u6301\u7eed\u4ea4\u4ed8\u7684\u73b0\u4ee3\u65b9\u5f0f\u3002\u5b83\u7684\u6838\u5fc3\u601d\u60f3\u662f\u62e5\u6709\u4e00\u4e2a\u5305\u542b\u73af\u5883\u548c\u5e94\u7528\u7a0b\u5e8f\u914d\u7f6e\u7684 Git \u5b58\u50a8\u5e93\u3002\u901a\u8fc7\u66f4\u6539\u5e94\u7528\u5b58\u50a8\u5e93\u4e2d\u7684\u6587\u4ef6\uff0c\u53ef\u4ee5\u81ea\u52a8\u90e8\u7f72\u5e94\u7528\u7a0b\u5e8f\u3002\u5e94\u7528 GitOps \u7684\u597d\u5904\u5305\u62ec\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u63d0\u9ad8\u751f\u4ea7\u529b\uff0c\u6301\u7eed\u4ea4\u4ed8\u53ef\u4ee5\u52a0\u5feb\u90e8\u7f72\u65f6\u95f4\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u964d\u4f4e\u5f00\u53d1\u4eba\u5458\u90e8\u7f72\u7684\u969c\u788d\u3002\u901a\u8fc7\u63a8\u9001\u4ee3\u7801\u800c\u4e0d\u662f\u5bb9\u5668\u914d\u7f6e\uff0c\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u5728\u4e0d\u77e5\u9053\u5176\u5185\u90e8\u5b9e\u73b0\u7684\u60c5\u51b5\u4e0b\u8f7b\u677e\u90e8\u7f72 Kubernetes \u96c6\u7fa4\u548c\u5e94\u7528\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u8ffd\u8e2a\u53d8\u66f4\u8bb0\u5f55\u3002\u4f7f\u7528 Git \u7ba1\u7406\u914d\u7f6e\u4f7f\u6bcf\u4e00\u9879\u66f4\u6539\u90fd\u5177\u6709\u53ef\u8ddf\u8e2a\u6027\uff0c\u4ece\u800c\u589e\u5f3a\u5ba1\u8ba1\u8ddf\u8e2a\u3002")),(0,n.kt)("h3",{id:"\u5c06-kcl-\u4e0e-argocd-\u4e00\u8d77\u4f7f\u7528"},"\u5c06 KCL \u4e0e ArgoCD \u4e00\u8d77\u4f7f\u7528"),(0,n.kt)("p",null,"\u5c06 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl"},"KCL")," \u4e0e ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/argoproj/argo-cd"},"ArgoCD")," \u7b49 GitOps \u5de5\u5177\u4e00\u8d77\u4f7f\u7528\u5177\u6709\u5982\u4e0b\u597d\u5904:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u901a\u8fc7 KCL \u8bed\u8a00\u7684",(0,n.kt)("a",{parentName:"li",href:"/docs/user_docs/guides/abstraction"},"\u62bd\u8c61\u80fd\u529b"),"\u548c\u53ef\u7f16\u7a0b\u80fd\u529b\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec",(0,n.kt)("strong",{parentName:"li"},"\u7b80\u5316\u590d\u6742\u7684 Kubernetes \u90e8\u7f72\u914d\u7f6e\u6587\u4ef6"),"\uff0c\u964d\u4f4e\u624b\u52a8\u7f16\u5199 YAML \u6587\u4ef6\u7684\u9519\u8bef\u7387\uff0c\u6d88\u9664\u591a\u4f59\u7684\u914d\u7f6e\u6a21\u7248\uff0c\u63d0\u5347\u591a\u73af\u5883\u591a\u79df\u6237\u7684\u914d\u7f6e\u6269\u5c55\u80fd\u529b\uff0c\u540c\u65f6\u63d0\u9ad8\u914d\u7f6e\u7684\u53ef\u8bfb\u6027\u548c\u53ef\u7ef4\u62a4\u6027\u3002"),(0,n.kt)("li",{parentName:"ul"},"KCL \u5141\u8bb8\u5f00\u53d1\u4eba\u5458\u4ee5\u58f0\u660e\u5f0f\u7684\u65b9\u5f0f\u5b9a\u4e49\u5e94\u7528\u7a0b\u5e8f\u6240\u9700\u7684\u8d44\u6e90\uff0c\u901a\u8fc7\u5c06 KCL \u548c ArgoCD \u76f8\u7ed3\u5408\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u66f4\u597d\u5730\u5b9e\u73b0",(0,n.kt)("strong",{parentName:"li"},"\u57fa\u7840\u8bbe\u65bd\u5373\u4ee3\u7801\uff08IaC\uff09"),"\uff0c\u63d0\u9ad8\u90e8\u7f72\u6548\u7387\uff0c\u7b80\u5316\u5e94\u7528\u7a0b\u5e8f\u7684\u914d\u7f6e\u7ba1\u7406\u3002"),(0,n.kt)("li",{parentName:"ul"},"ArgoCD \u53ef\u4ee5",(0,n.kt)("strong",{parentName:"li"},"\u81ea\u52a8\u5316"),"\u5730\u5b9e\u73b0\u5e94\u7528\u7a0b\u5e8f\u7684\u8fde\u7eed\u90e8\u7f72\uff0c\u5e76\u63d0\u4f9b\u53cb\u597d\u7684\u53ef\u89c6\u5316\u754c\u9762\u3002")),(0,n.kt)("p",null,"\u4f7f\u7528 GitOps\uff0c\u5f00\u53d1\u4eba\u5458\u548c\u8fd0\u7ef4\u56e2\u961f\u53ef\u4ee5\u901a\u8fc7\u5206\u522b\u4fee\u6539\u5e94\u7528\u548c\u914d\u7f6e\u4ee3\u7801\u6765\u7ba1\u7406\u5e94\u7528\u7a0b\u5e8f\u7684\u90e8\u7f72\uff0cGitOps \u5de5\u5177\u94fe\u5c06\u81ea\u52a8\u540c\u6b65\u5bf9\u914d\u7f6e\u7684\u66f4\u6539\uff0c\u4ece\u800c\u5b9e\u73b0\u6301\u7eed\u90e8\u7f72\u5e76\u786e\u4fdd\u4e00\u81f4\u6027\u3002\u5982\u679c\u51fa\u73b0\u95ee\u9898\uff0c\u53ef\u4ee5\u4f7f\u7528 GitOps \u5de5\u5177\u94fe\u5feb\u901f\u56de\u6eda\u3002"),(0,n.kt)("h2",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5b89\u88c5 ",(0,n.kt)("a",{parentName:"li",href:"https://kcl-lang.io/docs/user_docs/getting-started/install"},"KCL"))),(0,n.kt)("h2",{id:"\u5feb\u901f\u5f00\u59cb-1"},"\u5feb\u901f\u5f00\u59cb"),(0,n.kt)("h3",{id:"1-\u83b7\u53d6\u793a\u4f8b"},"1. \u83b7\u53d6\u793a\u4f8b"),(0,n.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u6267\u884c git \u547d\u4ee4\u83b7\u5f97\u7528\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/kcl-lang/kcl-lang.io.git/\ncd ./kcl-lang.io/examples/gitops\n")),(0,n.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u663e\u793a\u914d\u7f6e"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cat config/main.k\n")),(0,n.kt)("p",null,"The output is"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'import .app\n\nconfig = app.App {\n    name = "kcl-guestbook-ui"\n    containers.guestbook = {\n        image = "gcr.io/heptio-images/ks-guestbook-demo:0.2"\n        ports = [{containerPort = 80}]\n    }\n    service.ports = [{ port = 80 }]\n    service.type = "LoadBalancer"\n}\n')),(0,n.kt)("p",null,"\u5728\u4e0a\u8ff0\u4ee3\u7801\u4e2d\uff0c\u6211\u4eec\u5b9a\u4e49\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"App")," schema \u5b9a\u4e49\u4e86\u5e94\u7528\u7684\u914d\u7f6e\uff0c\u5176\u4e2d\u6211\u4eec\u914d\u7f6e\u4e86\u4e00\u4e2a\u955c\u50cf\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"gcr.io/heptio-images/ks-guestbook-demo:0.2")," \u5bb9\u5668\uff0c\u5e76\u542f\u7528\u4e86 ",(0,n.kt)("inlineCode",{parentName:"p"},"80")," \u7aef\u53e3\u3002"),(0,n.kt)("h3",{id:"2-\u5b89\u88c5-kubernetes-\u548c-gitops-\u5de5\u5177"},"2. \u5b89\u88c5 Kubernetes \u548c GitOps \u5de5\u5177"),(0,n.kt)("h4",{id:"\u914d\u7f6e-kubernetes-\u96c6\u7fa4\u548c-argocd-\u63a7\u5236\u5668"},"\u914d\u7f6e Kubernetes \u96c6\u7fa4\u548c ArgoCD \u63a7\u5236\u5668"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5b89\u88c5 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/k3d-io/k3d"},"K3d")," \u5e76\u521b\u5efa\u4e00\u4e2a\u96c6\u7fa4")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"k3d cluster create mycluster\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u4f60\u53ef\u4ee5\u5728\u6b64\u65b9\u6848\u4e2d\u4f7f\u7528\u5176\u4ed6\u65b9\u5f0f\u521b\u5efa\u60a8\u81ea\u5df1\u7684 Kubernetes \u96c6\u7fa4\uff0c\u5982 kind, minikube \u7b49\u3002")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5b89\u88c5 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/argoproj/argo-cd/releases/"},"ArgoCD"),".")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create namespace argocd\nkubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5b89\u88c5 ArgoCD KCL \u63d2\u4ef6")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl apply -f ./install/kcl-cmp.yaml && kubectl -n argocd patch deploy/argocd-repo-server -p "$(cat ./install/patch-argocd-repo-server.yaml)"\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"li"},"kubectl get")," \u547d\u4ee4\u67e5\u770b argocd \u63a7\u5236\u5668\u5bb9\u5668\u662f\u5426\u521d\u59cb\u5316\u5b8c\u6210\u8fdb\u5165\u8fd0\u884c\uff08Running\uff09\u72b6\u6001\u3002")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod -n argocd -l app.kubernetes.io/name=argocd-repo-server\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u6253\u5f00 ArgoCD UI")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward svc/argocd-server -n argocd 8080:443\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6253\u5f00\u6d4f\u89c8\u5668 ",(0,n.kt)("inlineCode",{parentName:"li"},"https://localhost:8080"),' \u8f93\u5165\u7528\u6237\u540d "admin" \u548c\u5bc6\u7801\u767b\u9646 ArgoCD UI\uff0c\u5bc6\u7801\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u5f97\u5230:')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d\n')),(0,n.kt)("h4",{id:"\u5b89\u88c5-argocd-\u5ba2\u6237\u7aef\u5de5\u5177"},"\u5b89\u88c5 ArgoCD \u5ba2\u6237\u7aef\u5de5\u5177"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5b89\u88c5 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/argoproj/argo-cd/releases"},"ArgoCD \u5ba2\u6237\u7aef\u5de5\u5177"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'\u4f7f\u7528\u7528\u6237\u540d "admin" \u548c\u521a\u624d\u5f97\u5230\u7684\u5bc6\u7801\u767b\u9646'))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"argocd login localhost:8080\n")),(0,n.kt)("p",null,"\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u521b\u5efa\u4e00\u4e2a ArgoCD KCL \u5e94\u7528"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"argocd app create guestbook \\\n--repo https://github.com/kcl-lang/kcl-lang.io \\\n--path examples/gitops/config \\\n--dest-namespace default \\\n--dest-server https://kubernetes.default.svc \\\n--config-management-plugin kcl-v1.0\n")),(0,n.kt)("p",null,"\u5982\u679c\u521b\u5efa\u6210\u529f\uff0c\u60a8\u53ef\u4ee5\u770b\u5230\u5982\u4e0b\u8f93\u51fa:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"application 'guestbook' created\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u60a8\u4f7f\u7528\u7684\u662f\u79c1\u6709\u5b58\u50a8\u5e93\uff0c\u5219\u5728\u6267\u884c create \u547d\u4ee4\u4e4b\u524d\uff0c\u9700\u8981\u4f7f\u7528\u79c1\u94a5\u51ed\u636e\u914d\u7f6e\u4e13\u7528\u79c1\u6709\u5b58\u50a8\u5e93\u8bbf\u95ee\u6743\u9650\u3002\u8bf7\u53c2\u9605",(0,n.kt)("a",{parentName:"p",href:"https://argo-cd.readthedocs.io/en/stable/user-guide/private-repositories/"},"\u8fd9\u91cc"),"\u4ee5\u83b7\u53d6\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u3002")),(0,n.kt)("p",null,"\u901a\u8fc7 ArgoCD UI\uff0c\u60a8\u53ef\u4ee5\u770b\u5230\u521b\u5efa\u7684\u5e94\u7528\u7a0b\u5e8f\u5c1a\u672a\u540c\u6b65\uff0c\u60a8\u53ef\u4ee5\u624b\u52a8\u8fdb\u884c\u914d\u7f6e\u540c\u6b65\u6216\u8bbe\u7f6e\u4e3a\u81ea\u52a8\u540c\u6b65\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(21957).Z,width:"2128",height:"1008"})),(0,n.kt)("p",null,"\u6709\u5173\u540c\u6b65\u7b56\u7565\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u53ef\u4ee5\u8bf7\u53c2\u9605",(0,n.kt)("a",{parentName:"p",href:"https://argo-cd.readthedocs.io/en/stable/user-guide/sync-options/"},"\u8fd9\u91cc")),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(44029).Z,width:"3328",height:"1132"})))}g.isMDXComponent=!0},44029:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/argocd-kcl-app-dashboard-82ae80d5dbb9da2eeb3e8f3efe867c01.jpg"},21957:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/argocd-kcl-app-3eda0ee903240a2371c45cd384c14653.jpg"}}]);