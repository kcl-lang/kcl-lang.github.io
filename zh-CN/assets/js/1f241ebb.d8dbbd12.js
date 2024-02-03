"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[64101],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=l,g=u["".concat(i,".").concat(m)]||u[m]||k[m]||r;return a?n.createElement(g,o(o({ref:t},c),{},{components:a})):n.createElement(g,o({ref:t},c))}));function g(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:l,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},82696:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>k,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(87462),l=(a(67294),a(3905));const r={slug:"2023-07-31-kcl-github-argocd-gitops",title:"\u4f7f\u7528 Github\u3001Argo CD \u548c KCL \u5b9e\u73b0 GitOps \u4ee5\u7b80\u5316 DevOps",authors:{name:"KCL Team",title:"KCL Team"},tags:["KCL","Github","ArgoCD","GitOps"]},o=void 0,s={permalink:"/zh-CN/blog/2023-07-31-kcl-github-argocd-gitops",editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/blog/2023-07-31-kcl-github-argocd-gitops/index.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2023-07-31-kcl-github-argocd-gitops/index.md",title:"\u4f7f\u7528 Github\u3001Argo CD \u548c KCL \u5b9e\u73b0 GitOps \u4ee5\u7b80\u5316 DevOps",description:"\u524d\u8a00",date:"2023-07-31T00:00:00.000Z",formattedDate:"2023\u5e747\u670831\u65e5",tags:[{label:"KCL",permalink:"/zh-CN/blog/tags/kcl"},{label:"Github",permalink:"/zh-CN/blog/tags/github"},{label:"ArgoCD",permalink:"/zh-CN/blog/tags/argo-cd"},{label:"GitOps",permalink:"/zh-CN/blog/tags/git-ops"}],readingTime:11.33,hasTruncateMarker:!1,authors:[{name:"KCL Team",title:"KCL Team"}],frontMatter:{slug:"2023-07-31-kcl-github-argocd-gitops",title:"\u4f7f\u7528 Github\u3001Argo CD \u548c KCL \u5b9e\u73b0 GitOps \u4ee5\u7b80\u5316 DevOps",authors:{name:"KCL Team",title:"KCL Team"},tags:["KCL","Github","ArgoCD","GitOps"]},prevItem:{title:"KCL \u793e\u533a\u5f00\u6e90\u53cc\u5468\u62a5 (2023 07.26 - 08.09) | KCL 0.5.1 \u548c 0.5.2 \u7248\u672c\u6b63\u5f0f\u53d1\u5e03",permalink:"/zh-CN/blog/2023-08-09-biweekly-newsletter"},nextItem:{title:"KCL \u4ecb\u7ecd PPT",permalink:"/zh-CN/blog/2023-07-18-kcl-intro-slides"}},i={authorsImageUrls:[void 0]},p=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u4ec0\u4e48\u662f GitOps",id:"\u4ec0\u4e48\u662f-gitops",level:3},{value:"\u5c06 KCL \u4e0e GitOps \u4e00\u8d77\u4f7f\u7528",id:"\u5c06-kcl-\u4e0e-gitops-\u4e00\u8d77\u4f7f\u7528",level:3},{value:"\u5de5\u4f5c\u6d41\u7a0b",id:"\u5de5\u4f5c\u6d41\u7a0b",level:2},{value:"\u5177\u4f53\u6b65\u9aa4",id:"\u5177\u4f53\u6b65\u9aa4",level:2},{value:"0. \u5148\u51b3\u6761\u4ef6",id:"0-\u5148\u51b3\u6761\u4ef6",level:3},{value:"1. \u914d\u7f6e Kubernetes \u96c6\u7fa4",id:"1-\u914d\u7f6e-kubernetes-\u96c6\u7fa4",level:3},{value:"2. \u914d\u7f6e ArgoCD",id:"2-\u914d\u7f6e-argocd",level:3},{value:"\u914d\u7f6e ArgoCD \u63a7\u5236\u5668",id:"\u914d\u7f6e-argocd-\u63a7\u5236\u5668",level:4},{value:"\u914d\u7f6e ArgoCD \u5ba2\u6237\u7aef\u5de5\u5177",id:"\u914d\u7f6e-argocd-\u5ba2\u6237\u7aef\u5de5\u5177",level:4},{value:"3. \u83b7\u5f97\u4e1a\u52a1\u4ee3\u7801",id:"3-\u83b7\u5f97\u4e1a\u52a1\u4ee3\u7801",level:3},{value:"4. \u63d0\u4ea4\u5e94\u7528\u4ee3\u7801",id:"4-\u63d0\u4ea4\u5e94\u7528\u4ee3\u7801",level:3},{value:"5. \u914d\u7f6e\u81ea\u52a8\u66f4\u65b0",id:"5-\u914d\u7f6e\u81ea\u52a8\u66f4\u65b0",level:3},{value:"\u7ed3\u8bba",id:"\u7ed3\u8bba",level:2}],c={toc:p},u="wrapper";function k(e){let{components:t,...r}=e;return(0,l.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,l.kt)("p",null,"\u5728\u73b0\u4ee3\u8f6f\u4ef6\u5f00\u53d1\u4e2d\uff0cGitOps \u4f5c\u4e3a\u7ba1\u7406\u57fa\u7840\u67b6\u6784\u548c\u5e94\u7528\u7a0b\u5e8f\u7684\u5355\u4e00\u771f\u76f8\u81ea\u52a8\u5316\u7684\u65b9\u6cd5\u53ef\u4ee5\u63d0\u9ad8\u6548\u7387\u548c\u51cf\u5c11\u4eba\u4e3a\u9519\u8bef\u65b9\u9762\u53d1\u6325\u7740\u5173\u952e\u4f5c\u7528\uff0c\u76ee\u524d\u5e7f\u6cdb\u6d41\u884c\u4e8e\u4e91\u539f\u751f\u7b49\u9886\u57df\u3002\u4f46\u662f\u5173\u4e8e GitOps \u76f8\u5173\u7684\u5b9e\u8df5\u793a\u4f8b\u5e76\u4e0d\u591a\u89c1\uff0c\u672c\u6587\u5c06\u4ee5 KCL\u3001Github\u3001ArgoCD \u548c GitOps \u4f5c\u4e3a\u4e00\u4e2a\u4f7f\u7528\u793a\u4f8b\u6765\u8be6\u7ec6\u4ecb\u7ecd\uff0c\u5e0c\u671b\u53ef\u4ee5\u5e2e\u52a9\u5927\u5bb6\u5b9e\u8df5\u81ea\u5df1\u7684 GitOps \u81ea\u52a8\u5316\u6d41\u7a0b\u5e76\u7b80\u5316 DevOps\u3002"),(0,l.kt)("h3",{id:"\u4ec0\u4e48\u662f-gitops"},"\u4ec0\u4e48\u662f GitOps"),(0,l.kt)("p",null,"GitOps \u662f\u4e00\u79cd\u5b9e\u73b0\u6301\u7eed\u4ea4\u4ed8\u7684\u73b0\u4ee3\u65b9\u5f0f\u3002\u5b83\u7684\u6838\u5fc3\u601d\u60f3\u662f\u62e5\u6709\u4e00\u4e2a\u5305\u542b\u73af\u5883\u548c\u5e94\u7528\u7a0b\u5e8f\u914d\u7f6e\u7684 Git \u5b58\u50a8\u5e93\u3002\u901a\u8fc7\u66f4\u6539\u5e94\u7528\u5b58\u50a8\u5e93\u4e2d\u7684\u6587\u4ef6\uff0c\u53ef\u4ee5\u81ea\u52a8\u90e8\u7f72\u5e94\u7528\u7a0b\u5e8f\u3002\u5e94\u7528 GitOps \u7684\u597d\u5904\u5305\u62ec\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u63d0\u9ad8\u751f\u4ea7\u529b\uff0c\u6301\u7eed\u4ea4\u4ed8\u53ef\u4ee5\u52a0\u5feb\u90e8\u7f72\u65f6\u95f4\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u964d\u4f4e\u5f00\u53d1\u4eba\u5458\u90e8\u7f72\u7684\u969c\u788d\u3002\u901a\u8fc7\u63a8\u9001\u4ee3\u7801\u800c\u4e0d\u662f\u5bb9\u5668\u914d\u7f6e\uff0c\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u5728\u4e0d\u77e5\u9053\u5176\u5185\u90e8\u5b9e\u73b0\u7684\u60c5\u51b5\u4e0b\u8f7b\u677e\u90e8\u7f72 Kubernetes \u96c6\u7fa4\u548c\u5e94\u7528\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u8ffd\u8e2a\u53d8\u66f4\u8bb0\u5f55\u3002\u4f7f\u7528 Git \u7ba1\u7406\u914d\u7f6e\u4f7f\u6bcf\u4e00\u9879\u66f4\u6539\u90fd\u5177\u6709\u53ef\u8ddf\u8e2a\u6027\uff0c\u4ece\u800c\u589e\u5f3a\u5ba1\u8ba1\u8ddf\u8e2a\u3002")),(0,l.kt)("h3",{id:"\u5c06-kcl-\u4e0e-gitops-\u4e00\u8d77\u4f7f\u7528"},"\u5c06 KCL \u4e0e GitOps \u4e00\u8d77\u4f7f\u7528"),(0,l.kt)("p",null,"\u5c06 KCL \u4e0e GitOps \u5de5\u5177\u4e00\u8d77\u4f7f\u7528\u5177\u6709\u5982\u4e0b\u597d\u5904:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7 KCL \u8bed\u8a00\u7684\u62bd\u8c61\u80fd\u529b\u548c\u53ef\u7f16\u7a0b\u80fd\u529b\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec",(0,l.kt)("strong",{parentName:"li"},"\u7b80\u5316\u590d\u6742\u7684 Kubernetes \u90e8\u7f72\u914d\u7f6e\u6587\u4ef6"),"\uff0c\u964d\u4f4e\u624b\u52a8\u7f16\u5199 YAML \u6587\u4ef6\u7684\u9519\u8bef\u7387\uff0c\u5c06\u914d\u7f6e\u7ea6\u675f\u68c0\u67e5\u63a7\u5236\u5728\u7f16\u8bd1\u65f6\uff0c\u7f16\u5199\u5373\u611f\u77e5\u9519\u8bef\uff1b\u540c\u65f6\u53ef\u4ee5\u6d88\u9664\u591a\u4f59\u7684\u914d\u7f6e\u6a21\u7248\uff0c\u63d0\u5347\u591a\u73af\u5883\u591a\u79df\u6237\u7684\u914d\u7f6e\u6269\u5c55\u80fd\u529b\uff0c\u63d0\u9ad8\u914d\u7f6e\u7684\u53ef\u8bfb\u6027\u548c\u53ef\u7ef4\u62a4\u6027\u3002"),(0,l.kt)("li",{parentName:"ul"},"KCL \u5141\u8bb8\u5f00\u53d1\u4eba\u5458\u4ee5\u58f0\u660e\u5f0f\u7684\u65b9\u5f0f\u5b9a\u4e49\u5e94\u7528\u7a0b\u5e8f\u6240\u9700\u7684\u8d44\u6e90\uff0c\u901a\u8fc7\u5c06 KCL \u548c ArgoCD \u76f8\u7ed3\u5408\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u66f4\u597d\u5730\u5b9e\u73b0",(0,l.kt)("strong",{parentName:"li"},"\u57fa\u7840\u8bbe\u65bd\u5373\u4ee3\u7801\uff08IaC\uff09"),"\uff0c\u63d0\u9ad8\u90e8\u7f72\u6548\u7387\uff0c\u7b80\u5316\u5e94\u7528\u7a0b\u5e8f\u7684\u914d\u7f6e\u7ba1\u7406\u3002"),(0,l.kt)("li",{parentName:"ul"},"ArgoCD \u53ef\u4ee5",(0,l.kt)("strong",{parentName:"li"},"\u81ea\u52a8\u5316"),"\u5730\u5b9e\u73b0\u5e94\u7528\u7a0b\u5e8f\u7684\u8fde\u7eed\u90e8\u7f72\uff0c\u5e76\u63d0\u4f9b\u53cb\u597d\u7684 KCL \u914d\u7f6e",(0,l.kt)("strong",{parentName:"li"},"\u53ef\u89c6\u5316\u7ba1\u7406\u754c\u9762"),"\u3002")),(0,l.kt)("p",null,"\u4f7f\u7528 GitOps\uff0c\u5f00\u53d1\u4eba\u5458\u548c\u8fd0\u7ef4\u56e2\u961f\u53ef\u4ee5\u901a\u8fc7\u5206\u522b\u4fee\u6539\u5e94\u7528\u548c\u914d\u7f6e\u4ee3\u7801\u6765\u7ba1\u7406\u5e94\u7528\u7a0b\u5e8f\u7684\u90e8\u7f72\uff0cGitOps \u5de5\u5177\u94fe\u5c06\u81ea\u52a8\u540c\u6b65\u5bf9\u914d\u7f6e\u7684\u66f4\u6539\uff0c\u4ece\u800c\u5b9e\u73b0\u6301\u7eed\u90e8\u7f72\u5e76\u786e\u4fdd\u4e00\u81f4\u6027\u3002\u5982\u679c\u51fa\u73b0\u95ee\u9898\uff0c\u53ef\u4ee5\u4f7f\u7528 GitOps \u5de5\u5177\u94fe\u5feb\u901f\u56de\u6eda\u3002"),(0,l.kt)("h2",{id:"\u5de5\u4f5c\u6d41\u7a0b"},"\u5de5\u4f5c\u6d41\u7a0b"),(0,l.kt)("p",null,"\u5728\u6b64\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528\u4e00\u4e2a Python Flask \u5e94\u7528\u548c Github Actions \u4f5c\u4e3a CI \u793a\u4f8b\uff0c\u4f7f\u7528 ArgoCD \u4f5c\u4e3a CD \u793a\u4f8b\uff0c\u4f7f\u7528 KCL \u5b9a\u4e49\u9700\u8981\u90e8\u7f72\u7684 Kubernetes \u8d44\u6e90"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u4f60\u53ef\u4ee5\u5728\u6b64\u65b9\u6848\u4e2d\u4f7f\u7528\u4efb\u4f55\u5bb9\u5668\u5316\u5e94\u7528\u4ee5\u53ca\u4e0d\u540c\u7684 CI \u548c CD \u7cfb\u7edf\u5982 Gitlab CI\uff0cJenkins CI\uff0cFluxCD \u7b49\uff0c\u540e\u7eed\u6211\u4eec\u4f1a\u51fa\u66f4\u591a\u7684\u793a\u4f8b\u6587\u7ae0\u6765\u8fdb\u884c\u8bf4\u660e")),(0,l.kt)("p",null,"\u6211\u4eec\u5c06 Python Flask \u5e94\u7528\u4ee3\u7801\u548c\u914d\u7f6e\u4ee3\u7801\u5206\u6210\u4e24\u4e2a\u4ed3\u5e93\uff0c",(0,l.kt)("em",{parentName:"p"},"\u4ee5\u5b9e\u73b0\u4e0d\u540c\u89d2\u8272\u5982\u5f00\u53d1\u4eba\u5458\u548c\u8fd0\u7ef4\u56e2\u961f\u7684\u5173\u6ce8\u70b9\u5206\u79bb")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e1a\u52a1\u4ee3\u7801\u4ed3\u5e93: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/kcl-lang/flask-demo"},"https://github.com/kcl-lang/flask-demo")),(0,l.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u6e05\u5355\u4ed3\u5e93: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/kcl-lang/flask-demo-kcl-manifests"},"https://github.com/kcl-lang/flask-demo-kcl-manifests"))),(0,l.kt)("p",null,"\u6574\u4f53\u5de5\u4f5c\u6d41\u7a0b\u5982\u4e0b\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"workflow",src:a(40543).Z,width:"1048",height:"624"})),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4ece Github \u62c9\u53d6\u5e94\u7528\u4ee3\u7801"),(0,l.kt)("li",{parentName:"ol"},"\u5e94\u7528\u4ee3\u7801\u5f00\u53d1\u5e76\u63d0\u4ea4\u5230\u63d0\u4ea4\u5230 GitHub \u5b58\u50a8\u5e93"),(0,l.kt)("li",{parentName:"ol"},"\u89e6\u53d1 GitHub Actions \u5bf9\u5e94\u7528\u4ee3\u7801\u8fdb\u884c\u7f16\u8bd1\uff0c\u751f\u6210\u5bb9\u5668\u955c\u50cf\uff0c\u5e76\u5c06\u5bb9\u5668\u955c\u50cf\u63a8\u9001\u5230 Docker Hub \u5bb9\u5668\u6ce8\u518c\u8868"),(0,l.kt)("li",{parentName:"ol"},"\u89e6\u53d1 GitHub Actions \u6839\u636e docker.io \u5bb9\u5668\u6ce8\u518c\u8868\u4e2d\u5bb9\u5668\u955c\u50cf\u7684\u7248\u672c\u53f7\u5e76\u540c\u6b65\u66f4\u65b0 KCL \u5b9a\u4e49\u7684 Kubernetes \u6e05\u5355\u90e8\u7f72\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ol"},"ArgoCD \u83b7\u53d6 KCL \u5b9a\u4e49\u7684 Kubernetes \u6e05\u5355\u66f4\u6539\u5e76\u66f4\u65b0\u90e8\u7f72\u81f3 Kubernetes \u96c6\u7fa4")),(0,l.kt)("h2",{id:"\u5177\u4f53\u6b65\u9aa4"},"\u5177\u4f53\u6b65\u9aa4"),(0,l.kt)("h3",{id:"0-\u5148\u51b3\u6761\u4ef6"},"0. \u5148\u51b3\u6761\u4ef6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u719f\u6089 Unix/Linux \u7684\u57fa\u672c\u547d\u4ee4"),(0,l.kt)("li",{parentName:"ul"},"\u719f\u6089 Git \u4ee5\u53ca Github Action \u4f7f\u7528"),(0,l.kt)("li",{parentName:"ul"},"\u4e86\u89e3 Kubernetes \u57fa\u672c\u77e5\u8bc6"),(0,l.kt)("li",{parentName:"ul"},"\u4e86\u89e3 ArgoCD \u7b49\u5de5\u5177"),(0,l.kt)("li",{parentName:"ul"},"\u4e86\u89e3 KCL \u57fa\u672c\u77e5\u8bc6")),(0,l.kt)("h3",{id:"1-\u914d\u7f6e-kubernetes-\u96c6\u7fa4"},"1. \u914d\u7f6e Kubernetes \u96c6\u7fa4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b89\u88c5 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3d-io/k3d"},"K3d")," \u5e76\u521b\u5efa\u4e00\u4e2a\u96c6\u7fa4")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"k3d cluster create mycluster\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u4f60\u53ef\u4ee5\u5728\u6b64\u65b9\u6848\u4e2d\u4f7f\u7528\u5176\u4ed6\u65b9\u5f0f\u521b\u5efa\u60a8\u81ea\u5df1\u7684 Kubernetes \u96c6\u7fa4\uff0c\u5982 kind, minikube \u7b49\u3002")),(0,l.kt)("h3",{id:"2-\u914d\u7f6e-argocd"},"2. \u914d\u7f6e ArgoCD"),(0,l.kt)("h4",{id:"\u914d\u7f6e-argocd-\u63a7\u5236\u5668"},"\u914d\u7f6e ArgoCD \u63a7\u5236\u5668"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u4f60\u53ef\u4ee5\u5728\u6b64\u65b9\u6848\u4e2d\u4f7f\u7528\u5176\u4ed6\u65b9\u5f0f\u521b\u5efa\u60a8\u81ea\u5df1\u7684 Kubernetes \u96c6\u7fa4\uff0c\u5982 kind, minikube \u7b49\u3002")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b89\u88c5 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/argoproj/argo-cd/releases/"},"ArgoCD"),".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create namespace argocd\nkubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b89\u88c5 ArgoCD KCL \u63d2\u4ef6")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'git clone https://github.com/kcl-lang/kcl-lang.io.git/ && cd ./kcl-lang.io/examples/gitops\nkubectl apply -f ./install/kcl-cmp.yaml && kubectl -n argocd patch deploy/argocd-repo-server -p "$(cat ./install/patch-argocd-repo-server.yaml)"\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"li"},"kubectl get")," \u547d\u4ee4\u67e5\u770b argocd \u63a7\u5236\u5668\u5bb9\u5668\u662f\u5426\u521d\u59cb\u5316\u5b8c\u6210\u8fdb\u5165\u8fd0\u884c\uff08Running\uff09\u72b6\u6001\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod -n argocd -l app.kubernetes.io/name=argocd-repo-server\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u6253\u5f00 ArgoCD UI")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward svc/argocd-server -n argocd 8080:443\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6253\u5f00\u6d4f\u89c8\u5668 ",(0,l.kt)("inlineCode",{parentName:"li"},"https://localhost:8080"),' \u8f93\u5165\u7528\u6237\u540d "admin" \u548c\u5bc6\u7801\u767b\u9646 ArgoCD UI\uff0c\u5bc6\u7801\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u5f97\u5230:')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d\n')),(0,l.kt)("h4",{id:"\u914d\u7f6e-argocd-\u5ba2\u6237\u7aef\u5de5\u5177"},"\u914d\u7f6e ArgoCD \u5ba2\u6237\u7aef\u5de5\u5177"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5b89\u88c5 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/argoproj/argo-cd/releases"},"ArgoCD \u5ba2\u6237\u7aef\u5de5\u5177"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},'\u4f7f\u7528\u7528\u6237\u540d "admin" \u548c\u521a\u624d\u5f97\u5230\u7684\u5bc6\u7801\u767b\u9646'))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"argocd login localhost:8080\n")),(0,l.kt)("p",null,"\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u521b\u5efa\u4e00\u4e2a ArgoCD KCL \u5e94\u7528"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"argocd app create flaskdemo \\\n--repo https://github.com/kcl-lang/flask-demo-kcl-manifests \\\n--path . \\\n--dest-namespace default \\\n--dest-server https://kubernetes.default.svc \\\n--config-management-plugin kcl-v1.0\n")),(0,l.kt)("p",null,"\u5982\u679c\u521b\u5efa\u6210\u529f\uff0c\u60a8\u53ef\u4ee5\u770b\u5230\u5982\u4e0b\u8f93\u51fa:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"application 'flaskdemo' created\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u60a8\u4f7f\u7528\u7684\u662f\u79c1\u6709\u5b58\u50a8\u5e93\uff0c\u5219\u5728\u6267\u884c create \u547d\u4ee4\u4e4b\u524d\uff0c\u9700\u8981\u4f7f\u7528\u79c1\u94a5\u51ed\u636e\u914d\u7f6e\u4e13\u7528\u79c1\u6709\u5b58\u50a8\u5e93\u8bbf\u95ee\u6743\u9650\u3002\u8bf7\u53c2\u9605",(0,l.kt)("a",{parentName:"p",href:"https://argo-cd.readthedocs.io/en/stable/user-guide/private-repositories/"},"\u8fd9\u91cc"),"\u4ee5\u83b7\u53d6\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u3002")),(0,l.kt)("p",null,"\u901a\u8fc7 ArgoCD UI\uff0c\u60a8\u53ef\u4ee5\u770b\u5230\u521b\u5efa\u7684\u5e94\u7528\u7a0b\u5e8f\u5c1a\u672a\u540c\u6b65\uff0c\u60a8\u53ef\u4ee5\u624b\u52a8\u8fdb\u884c\u914d\u7f6e\u540c\u6b65\u6216\u8bbe\u7f6e\u4e3a\u81ea\u52a8\u540c\u6b65\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(21957).Z,width:"2128",height:"1008"})),(0,l.kt)("p",null,"\u6709\u5173\u540c\u6b65\u7b56\u7565\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u53ef\u4ee5\u8bf7\u53c2\u9605",(0,l.kt)("a",{parentName:"p",href:"https://argo-cd.readthedocs.io/en/stable/user-guide/sync-options/"},"\u8fd9\u91cc")),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(44029).Z,width:"3328",height:"1132"})),(0,l.kt)("h3",{id:"3-\u83b7\u5f97\u4e1a\u52a1\u4ee3\u7801"},"3. \u83b7\u5f97\u4e1a\u52a1\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/kcl-lang/flask-demo.git/\ncd flask-demo\n")),(0,l.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u4f7f\u7528 Python \u7f16\u5199\u7684 Web \u5e94\u7528\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u5e94\u7528\u76ee\u5f55\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Dockerfile")," \u6765\u751f\u6210\u8fd9\u4e2a\u5e94\u7528\u7684\u5bb9\u5668\u955c\u50cf\uff0c\u540c\u65f6\u53ef\u4ee5\u901a\u8fc7 Github CI \u81ea\u52a8\u6784\u5efa ",(0,l.kt)("inlineCode",{parentName:"p"},"flask_demo")," \u955c\u50cf\uff0cCI \u914d\u7f6e\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'# This is a basic workflow to help you get started with Actions\n\nname: CI\n\n# Controls when the workflow will run\non:\n  # Triggers the workflow on push or pull request events but only for the main branch\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\n\n  # Allows you to run this workflow manually from the Actions tab\n  workflow_dispatch:\n\n# A workflow run is made up of one or more jobs that can run sequentially or in parallel\njobs:\n  # This workflow contains a single job called "build"\n  build:\n    # The type of runner that the job will run on\n    runs-on: ubuntu-latest\n\n    # Steps represent a sequence of tasks that will be executed as part of the job\n    steps:\n      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it\n      - uses: actions/checkout@v2\n\n      - name: Docker Login\n        uses: docker/login-action@v1.10.0\n        with:\n          username: ${{ secrets.DOCKER_USERNAME }}\n          password: ${{ secrets.DOCKER_PASSWORD }}\n          logout: true\n\n      # Runs a set of commands using the runners shell\n      - name: build image\n        run: |\n          make image\n          docker tag flask_demo:latest ${{ secrets.DOCKER_USERNAME }}/flask_demo:${{ github.sha }}\n          docker push ${{ secrets.DOCKER_USERNAME }}/flask_demo:${{ github.sha }}\n\n      # Trigger KCL manifest\n      - name: Trigger CI\n        uses: InformaticsMatters/trigger-ci-action@1.0.1\n        with:\n          ci-owner: kcl-lang\n          ci-repository: flask-demo-kcl-manifests\n          ci-ref: refs/heads/main\n          ci-user: kcl-bot\n          ci-user-token: ${{ secrets.DEPLOY_ACCESS_TOKEN }}\n          ci-name: CI\n          ci-inputs: >-\n            image=${{ secrets.DOCKER_USERNAME }}/flask_demo\n            sha-tag=${{ github.sha }}\n')),(0,l.kt)("p",null,"\u6211\u4eec\u9700\u8981\u6e90\u7801\u4ed3\u5e93\u7684\u5de5\u4f5c\u6d41\u81ea\u52a8\u89e6\u53d1\u90e8\u7f72\u6e05\u5355\u4ed3\u5e93\u4e2d\u7684\u5de5\u4f5c\u6d41\uff0c\u6b64\u65f6\u9700\u8981\u521b\u5efa\u5177\u6709 Github CI \u64cd\u4f5c\u6743\u9650\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"secrets.DEPLOY_ACCESS_TOKEN")," \u4ee5\u53ca Docker Hub \u955c\u50cf\u63a8\u9001\u7684\u8d26\u53f7\u4fe1\u606f ",(0,l.kt)("inlineCode",{parentName:"p"},"secrets.DOCKER_USERNAME")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"secrets.DOCKER_PASSWORD"),", \u8fd9\u4e9b\u53ef\u4ee5\u5728 Github \u4ed3\u5e93\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Secrets and variables")," \u8bbe\u7f6e\u4e2d\u8fdb\u884c\u914d\u7f6e\uff0c\u5982\u4e0b\u56fe\u6240\u793a"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(37711).Z,width:"2204",height:"632"})),(0,l.kt)("h3",{id:"4-\u63d0\u4ea4\u5e94\u7528\u4ee3\u7801"},"4. \u63d0\u4ea4\u5e94\u7528\u4ee3\u7801"),(0,l.kt)("p",null,"flask-demo \u4ed3\u5e93\u63d0\u4ea4\u4ee3\u7801\u540e\uff0cGithub \u4f1a\u81ea\u52a8\u6784\u5efa\u5bb9\u5668\u955c\u50cf\uff0c\u5e76\u5c06\u5236\u54c1\u63a8\u9001\u5230 Docker hub \u4e2d\uff0c\u4f1a\u518d\u89e6\u53d1 flask-demo-kcl-manifests \u4ed3\u5e93\u7684 Action\uff0c",(0,l.kt)("a",{parentName:"p",href:"/docs/user_docs/guides/automation"},"\u901a\u8fc7 KCL \u81ea\u52a8\u5316 API")," \u4fee\u6539\u90e8\u7f72\u6e05\u5355\u4ed3\u5e93\u4e2d\u7684\u955c\u50cf\u5730\u5740\u3002\u73b0\u5728\u8ba9\u6211\u4eec\u4e3a flask-demo \u4ed3\u5e93\u521b\u5efa\u4e00\u4e2a\u63d0\u4ea4\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u4ee3\u7801\u63d0\u4ea4\u540e\u89e6\u53d1\u4e1a\u52a1\u4ed3\u5e93 Github CI \u6d41\u7a0b"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(4991).Z,width:"2252",height:"1038"})),(0,l.kt)("h3",{id:"5-\u914d\u7f6e\u81ea\u52a8\u66f4\u65b0"},"5. \u914d\u7f6e\u81ea\u52a8\u66f4\u65b0"),(0,l.kt)("p",null,"\u5f53\u4e1a\u52a1\u4ed3\u5e93 Github CI \u6d41\u7a0b\u6267\u884c\u5b8c\u6210\u540e\uff0c\u4f1a\u81ea\u52a8\u5728\u5b58\u653e KCL \u8d44\u6e90\u914d\u7f6e\u7684\u4ed3\u5e93\u89e6\u53d1\u4e00\u4e2a CI \u81ea\u52a8\u66f4\u65b0\u914d\u7f6e\u5e76\u63d0\u4ea4\u5230 flask-demo-kcl-manifests main \u5206\u652f\uff0ccommit \u4fe1\u606f\u5982\u4e0b"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(47725).Z,width:"2240",height:"1090"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6211\u4eec\u53ef\u4ee5\u83b7\u5f97\u90e8\u7f72\u6e05\u5355\u6e90\u7801\u8fdb\u884c\u7f16\u8bd1\u9a8c\u8bc1")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/kcl-lang/flask-demo-kcl-manifests.git/\ncd flask-demo-kcl-manifests\ngit checkout main && git pull && kcl\n")),(0,l.kt)("p",null,"\u8f93\u51fa YAML \u4e3a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: flask_demo\n  labels:\n    app: flask_demo\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: flask_demo\n  template:\n    metadata:\n      labels:\n        app: flask_demo\n    spec:\n      containers:\n        - name: flask_demo\n          image: "kcllang/flask_demo:6428cff4309afc8c1c40ad180bb9cfd82546be3e"\n          ports:\n            - protocol: TCP\n              containerPort: 5000\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: flask_demo\n  labels:\n    app: flask_demo\nspec:\n  type: NodePort\n  selector:\n    app: flask_demo\n  ports:\n    - port: 5000\n      protocol: TCP\n      targetPort: 5000\n')),(0,l.kt)("p",null,"\u4ece\u4e0a\u8ff0\u914d\u7f6e\u53ef\u4ee5\u770b\u51fa\u8d44\u6e90\u7684\u955c\u50cf\u786e\u5b9e\u81ea\u52a8\u66f4\u65b0\u4e3a\u4e86\u65b0\u6784\u5efa\u7684\u955c\u50cf\u5185\u5bb9\u3002"),(0,l.kt)("p",null,"\u6b64\u5916\uff0c\u6211\u4eec\u53ef\u4ee5\u5728 ArgoCD UI \u754c\u9762\u4e2d\u5c06\u540c\u6b65\u7b56\u7565\u8bbe\u7f6e\u4e3a\u81ea\u52a8\u540c\u6b65\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u5b9e\u73b0\u4e1a\u52a1\u4ee3\u7801\u63d0\u4ea4\u5e76\u90e8\u7f72 Kubernetes \u7684 e2e \u5b8c\u6574\u81ea\u52a8\u5316\u6d41\u7a0b\u3002"),(0,l.kt)("h2",{id:"\u7ed3\u8bba"},"\u7ed3\u8bba"),(0,l.kt)("p",null,"\u901a\u8fc7\u672c\u7bc7\u6587\u7ae0\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 Github, ArgoCD \u548c KCL \u7b49\u521b\u5efa GitOps \u81ea\u52a8\u5316\u6d41\u6c34\u7ebf\uff0c\u53ef\u4ee5\u9ad8\u6548\u7a33\u5b9a\u5730\u6784\u5efa\u5bb9\u5668\u5316\u5e94\u7528\uff0c\u540c\u65f6\u81ea\u52a8\u5316\u66f4\u65b0\u6700\u65b0\u7684 Docker \u955c\u50cf\u6807\u7b7e\uff0c\u5e76\u4fdd\u6301 Git \u914d\u7f6e\u4e0e\u96c6\u7fa4\u914d\u7f6e\u4e00\u81f4\u3002\u6b64\u5916\uff0c\u901a\u8fc7\u5c06 KCL \u548c ArgoCD \u76f8\u7ed3\u5408\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u66f4\u597d\u5730\u5b9e\u73b0\u57fa\u7840\u8bbe\u65bd\u5373\u4ee3\u7801\uff08IaC\uff09\uff0c\u63d0\u9ad8\u90e8\u7f72\u6548\u7387\uff0c\u5b9e\u73b0\u4e0d\u540c\u89d2\u8272\u7684\u5173\u6ce8\u70b9\u5206\u79bb\u5e76\u7b80\u5316\u5e94\u7528\u7a0b\u5e8f\u7684\u914d\u7f6e\u7ba1\u7406\u3002"))}k.isMDXComponent=!0},40543:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/workflow-4707133c144cbe28bfea3f5a1563bd4c.jpg"},4991:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/app-ci-8be610b01c177f72ff2f2f617b7305bd.png"},37711:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/github-secrets-997c2a5201a5ae259e3310d6015d1f9e.png"},47725:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-auto-update-514f27b74172b114a5dc877e98fd88f4.png"},44029:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/argocd-kcl-app-dashboard-82ae80d5dbb9da2eeb3e8f3efe867c01.jpg"},21957:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/argocd-kcl-app-3eda0ee903240a2371c45cd384c14653.jpg"}}]);