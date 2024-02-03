"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[91400],{3905:(e,t,l)=>{l.d(t,{Zo:()=>p,kt:()=>m});var n=l(67294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var c=n.createContext({}),u=function(e){var t=n.useContext(c),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var l=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(l),g=r,m=s["".concat(c,".").concat(g)]||s[g]||k[g]||a;return l?n.createElement(m,o(o({ref:t},p),{},{components:l})):n.createElement(m,o({ref:t},p))}));function m(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=l.length,o=new Array(a);o[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<a;u++)o[u]=l[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,l)}g.displayName="MDXCreateElement"},53948:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>k,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=l(87462),r=(l(67294),l(3905));const a={slug:"2023-12-19-how-to-apply-kcl-config-to-cluster",title:"\u5982\u4f55\u5c06 KCL \u4ee3\u7801\u90e8\u7f72\u5230\u96c6\u7fa4?",authors:{name:"KCL \u56e2\u961f",title:"KCL \u56e2\u961f"},tags:["KCL"]},o="\u5982\u4f55\u5c06 KCL \u4ee3\u7801\u90e8\u7f72\u5230\u96c6\u7fa4?",i={permalink:"/zh-CN/blog/2023-12-19-how-to-apply-kcl-config-to-cluster",editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/blog/2023-12-19-how-to-apply-kcl-config-to-cluster/index.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2023-12-19-how-to-apply-kcl-config-to-cluster/index.md",title:"\u5982\u4f55\u5c06 KCL \u4ee3\u7801\u90e8\u7f72\u5230\u96c6\u7fa4?",description:"\u4ec0\u4e48\u662f KCL",date:"2023-12-19T00:00:00.000Z",formattedDate:"2023\u5e7412\u670819\u65e5",tags:[{label:"KCL",permalink:"/zh-CN/blog/tags/kcl"}],readingTime:4.925,hasTruncateMarker:!1,authors:[{name:"KCL \u56e2\u961f",title:"KCL \u56e2\u961f"}],frontMatter:{slug:"2023-12-19-how-to-apply-kcl-config-to-cluster",title:"\u5982\u4f55\u5c06 KCL \u4ee3\u7801\u90e8\u7f72\u5230\u96c6\u7fa4?",authors:{name:"KCL \u56e2\u961f",title:"KCL \u56e2\u961f"},tags:["KCL"]},prevItem:{title:"KCL \u793e\u533a\u5f00\u6e90\u53cc\u5468\u62a5 (2023 12.07 - 12.21) | KCL v0.7.2 \u53d1\u5e03\u548c KubeVela/OAM \u96c6\u6210",permalink:"/zh-CN/blog/2023-12-21-biweekly-newsletter"},nextItem:{title:"KCD \u793e\u533a\u4f1a\u8bae\u56de\u987e | \u4e91\u539f\u751f\u7b56\u7565\u914d\u7f6e\u8bed\u8a00 KCL",permalink:"/zh-CN/blog/2023-12-18-cloud-native-configuration-language-kcl"}},c={authorsImageUrls:[void 0]},u=[{value:"\u4ec0\u4e48\u662f KCL",id:"\u4ec0\u4e48\u662f-kcl",level:2},{value:"\u5c06 KCL \u914d\u7f6e\u90e8\u7f72\u5230\u96c6\u7fa4\u7684\u51e0\u79cd\u65b9\u5f0f",id:"\u5c06-kcl-\u914d\u7f6e\u90e8\u7f72\u5230\u96c6\u7fa4\u7684\u51e0\u79cd\u65b9\u5f0f",level:2},{value:"\u4f7f\u7528 Kubectl \u5de5\u5177",id:"\u4f7f\u7528-kubectl-\u5de5\u5177",level:3},{value:"\u4f7f\u7528 CI/CD \u5de5\u5177",id:"\u4f7f\u7528-cicd-\u5de5\u5177",level:3},{value:"\u4f7f\u7528 KRM Function",id:"\u4f7f\u7528-krm-function",level:3},{value:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u62bd\u8c61\u914d\u7f6e\u5de5\u5177",id:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u62bd\u8c61\u914d\u7f6e\u5de5\u5177",level:3},{value:"\u4f7f\u7528 KCL Operator",id:"\u4f7f\u7528-kcl-operator",level:3},{value:"\u4f7f\u7528\u914d\u7f6e\u7ba1\u7406\u5de5\u5177",id:"\u4f7f\u7528\u914d\u7f6e\u7ba1\u7406\u5de5\u5177",level:3}],p={toc:u},s="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4ec0\u4e48\u662f-kcl"},"\u4ec0\u4e48\u662f KCL"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://kcl-lang.io"},"KCL")," \u662f\u4e00\u4e2a CNCF \u57fa\u91d1\u4f1a\u6258\u7ba1\u7684\u9762\u5411\u4e91\u539f\u751f\u573a\u666f\u7684\u914d\u7f6e\u53ca\u7b56\u7565\u8bed\u8a00\uff0c\u671f\u671b\u901a\u8fc7\u6210\u719f\u7684\u7f16\u7a0b\u8bed\u8a00\u6280\u672f\u548c\u5b9e\u8df5\u6765\u6539\u8fdb\u5bf9\u5927\u91cf\u7e41\u6742\u914d\u7f6e\u6bd4\u5982\u4e91\u539f\u751f Kubernetes \u914d\u7f6e\u573a\u666f\u7684\u7f16\u5199\uff0c\u81f4\u529b\u4e8e\u6784\u5efa\u56f4\u7ed5\u914d\u7f6e\u7684\u66f4\u597d\u7684\u6a21\u5757\u5316\u3001\u6269\u5c55\u6027\u548c\u7a33\u5b9a\u6027\uff0c\u66f4\u7b80\u5355\u7684\u903b\u8f91\u7f16\u5199\uff0c\u4ee5\u53ca\u66f4\u7b80\u5355\u7684\u81ea\u52a8\u5316\u548c\u751f\u6001\u5de5\u5177\u96c6\u6210\u3002"),(0,r.kt)("h2",{id:"\u5c06-kcl-\u914d\u7f6e\u90e8\u7f72\u5230\u96c6\u7fa4\u7684\u51e0\u79cd\u65b9\u5f0f"},"\u5c06 KCL \u914d\u7f6e\u90e8\u7f72\u5230\u96c6\u7fa4\u7684\u51e0\u79cd\u65b9\u5f0f"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"cloud-native-tool-integration",src:l(92218).Z,width:"1386",height:"608"})),(0,r.kt)("p",null,"\u56e0\u4e3a KCL \u672c\u8eab\u53ef\u4ee5\u8f93\u51fa\u4e3a YAML/JSON \u6587\u4ef6\uff0c\u56e0\u6b64\u7406\u8bba\u4e0a\u652f\u6301\u5c06 YAML/JSON \u914d\u7f6e\u90e8\u7f72\u5230\u96c6\u7fa4\u7684\u65b9\u5f0f\uff0c\u90fd\u53ef\u4ee5\u5c06 KCL \u914d\u7f6e\u90e8\u7f72\u5230\u96c6\u7fa4\uff0c\u901a\u5e38\u6211\u4eec\u5c06 KCL \u6587\u4ef6\u653e\u5728 Git \u6216\u8005 Module Registry \u4e2d\u4fdd\u5b58\u65b9\u4fbf\u4e0e\u4e0d\u540c\u7684\u89d2\u8272\u548c\u56e2\u961f\u4e4b\u95f4\u5171\u4eab\u914d\u7f6e\uff0c\u4f46\u662f KCL \u53ef\u4ee5\u505a\u5230\u7684\u8fdc\u4e0d\u6b62\u8fd9\u4e9b\uff0c\u8fd9\u91cc\u5c06\u53ef\u4ee5\u5c06 KCL \u914d\u7f6e\u90e8\u7f72\u5230\u7684\u96c6\u7fa4\u4e3b\u8981\u5206\u4e3a\u5982\u4e0b\u51e0\u79cd\u60c5\u51b5\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u4f7f\u7528 kubectl"),": \u8bbf\u95ee Kubernetes \u96c6\u7fa4\u6700\u57fa\u672c\u7684\u65b9\u5f0f\u5c31\u662f\u4f7f\u7528 Kubectl\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 kubectl apply \u547d\u4ee4\u76f4\u63a5\u5c06 KCL \u751f\u6210\u7684 Kubernetes YAML \u914d\u7f6e\u6587\u4ef6\u90e8\u7f72\u5230\u96c6\u7fa4\u4e2d\u3002\u8fd9\u79cd\u65b9\u5f0f\u7b80\u5355\u5feb\u6377\uff0c\u9002\u7528\u4e8e\u5355\u4e2a\u6216\u5c11\u91cf\u8d44\u6e90\u7684\u90e8\u7f72"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u4f7f\u7528 CI/CD \u5de5\u5177"),": \u53ef\u4ee5\u4f7f\u7528 CI/CD \u5de5\u5177\uff08\u4f8b\u5982 Jenkins\u3001GitLab CI\u3001CircleCI\u3001ArgoCD\u3001FluxCD \u7b49\uff09\u6765\u5b9e\u73b0 GitOps \u81ea\u52a8\u5316\u90e8\u7f72 Kubernetes YAML \u914d\u7f6e\u6587\u4ef6\u5230\u96c6\u7fa4\u4e2d\u3002\u901a\u8fc7\u5b9a\u4e49 CI/CD \u6d41\u7a0b\u548c\u914d\u7f6e\u6587\u4ef6\uff0c\u53ef\u4ee5\u5b9e\u73b0\u81ea\u52a8\u5316\u6784\u5efa\u548c\u90e8\u7f72\u5230\u96c6\u7fa4\u4e2d"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u4f7f\u7528\u652f\u6301 KRM Function \u89c4\u8303\u7684\u5de5\u5177"),": KRM Function \u5141\u8bb8\u7528\u6237\u4f7f\u7528\u5176\u4ed6\u8bed\u8a00\u5305\u62ec KCL \u6765\u63d0\u5347 YAML \u6a21\u7248\u548c\u903b\u8f91\u7f16\u5199\u80fd\u529b\u6bd4\u5982\u7f16\u5199\u6761\u4ef6\u3001\u5faa\u73af\u7b49\uff0c\u8fd9\u7c7b\u5de5\u5177\u4e3b\u8981\u5305\u62ec Kustomize, KPT, Crossplane \u7b49\uff0c\u867d\u7136 Helm \u5e76\u6ca1\u6709\u539f\u751f\u652f\u6301\uff0c\u4f46\u662f\u6211\u4eec\u53ef\u4ee5\u5c06 Helm \u548c Kustomize \u7ed3\u5408\u4f7f\u7528\u6765\u5b9e\u73b0"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u4f7f\u7528\u5ba2\u6237\u7aef/\u8fd0\u884c\u65f6\u81ea\u5b9a\u4e49\u62bd\u8c61\u914d\u7f6e\u5de5\u5177\u8fdb\u884c\u90e8\u7f72"),": \u5982 KusionStack, KubeVela \u7b49\uff0c\u5f53\u7136 KCL \u5141\u8bb8\u60a8\u81ea\u5b9a\u4e49\u60a8\u559c\u6b22\u7684\u5e94\u7528\u914d\u7f6e\u6a21\u578b\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u4f7f\u7528 KCL Operator"),": \u7ed3\u5408 Kubernetes Mutation Webhook \u548c Validation Webhook \u652f\u6301\u8fd0\u884c\u65f6\u7f16\u5199\u914d\u7f6e\u6216\u7b56\u7565\u3002+",(0,r.kt)("strong",{parentName:"li"},"\u4f7f\u7528\u914d\u7f6e\u7ba1\u7406\u5de5\u5177"),": \u7ed3\u5408\u914d\u7f6e\u7ba1\u7406\u5de5\u5177\uff08\u4f8b\u5982 Puppet\u3001Chef\u3001Ansible \u7b49\uff09\u6765\u81ea\u52a8\u5316\u90e8\u7f72 Kubernetes YAML \u914d\u7f6e\u5230\u96c6\u7fa4\u4e2d\u3002\u8fd9\u4e9b\u5de5\u5177\u53ef\u4ee5\u901a\u8fc7\u5b9a\u4e49 KCL \u6a21\u677f\u548c\u53d8\u91cf\u6765\u5b9e\u73b0\u52a8\u6001\u914d\u7f6e\u90e8\u7f72")),(0,r.kt)("p",null,"KCL \u652f\u6301\u591a\u79cd\u90e8\u7f72\u65b9\u5f0f\u548c\u4e91\u539f\u751f\u5de5\u5177\u96c6\u6210\u6709\u4ee5\u4e0b\u51e0\u4e2a\u539f\u56e0\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u7075\u6d3b\u6027"),"\uff1a\u4e0d\u540c\u7684\u90e8\u7f72\u65b9\u5f0f\u9002\u7528\u4e8e\u4e0d\u540c\u7684\u573a\u666f\u548c\u9700\u6c42\uff0c\u56e0\u6b64\u63d0\u4f9b\u591a\u79cd\u9009\u62e9\u53ef\u4ee5\u4f7f\u7528\u6237\u6839\u636e\u5176\u7279\u5b9a\u7684\u60c5\u51b5\u9009\u62e9\u6700\u5408\u9002\u7684\u65b9\u5f0f\u6765\u90e8\u7f72\u5e94\u7528\u7a0b\u5e8f\u6216\u914d\u7f6e\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5de5\u5177\u751f\u6001\u7cfb\u7edf"),"\uff1aKubernetes \u662f\u4e00\u4e2a\u751f\u6001\u7cfb\u7edf\u5e9e\u5927\u7684\u5e73\u53f0\uff0c\u6709\u8bb8\u591a\u5de5\u5177\u548c\u6280\u672f\u88ab\u5e7f\u6cdb\u5e94\u7528\u3002\u652f\u6301\u591a\u79cd\u90e8\u7f72\u65b9\u5f0f\u53ef\u4ee5\u4e3a\u7528\u6237\u63d0\u4f9b\u66f4\u591a\u9009\u62e9\uff0c\u6ee1\u8db3\u5176\u4f7f\u7528\u4e60\u60ef\u548c\u6280\u672f\u504f\u597d\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u89c4\u8303\u548c\u6807\u51c6"),"\uff1aKubernetes \u793e\u533a\u52aa\u529b\u63a8\u52a8\u6807\u51c6\u548c\u89c4\u8303\uff0c\u4f8b\u5982 OAM, KRM Function \u89c4\u8303\u548c Helm Charts \u7b49\u3002\u901a\u8fc7\u7edf\u4e00\u7684 KRM KCL \u89c4\u8303\u548c KCL Module \u63d0\u4f9b\u591a\u79cd\u652f\u6301\u65b9\u5f0f\uff0c\u53ef\u4ee5\u6ee1\u8db3\u4e0d\u540c\u89c4\u8303\u548c\u6807\u51c6\u7684\u9700\u6c42\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u81ea\u52a8\u5316\u548c\u96c6\u6210"),"\uff1a\u4e00\u4e9b\u90e8\u7f72\u65b9\u5f0f\u53ef\u4ee5\u901a\u8fc7\u81ea\u52a8\u5316\u5de5\u5177\u548c CI/CD \u7ba1\u9053\u8fdb\u884c\u96c6\u6210\uff0c\u4ee5\u5b9e\u73b0\u81ea\u52a8\u5316\u7684\u90e8\u7f72\u6d41\u7a0b\u3002\u56e0\u6b64\uff0c\u63d0\u4f9b\u591a\u79cd\u65b9\u5f0f\u53ef\u4ee5\u6ee1\u8db3\u4e0d\u540c\u81ea\u52a8\u5316\u548c\u96c6\u6210\u7684\u9700\u6c42\u3002")),(0,r.kt)("p",null,"\u7efc\u4e0a\u6240\u8ff0\uff0c\u652f\u6301\u591a\u79cd\u90e8\u7f72\u65b9\u5f0f\u53ef\u4ee5\u4e3a\u7528\u6237\u63d0\u4f9b\u66f4\u5927\u7684\u7075\u6d3b\u6027\u548c\u9009\u62e9\u6743\uff0c\u7528\u6237\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u9700\u6c42\u548c\u504f\u597d\u6765\u90e8\u7f72\u5e94\u7528\u7a0b\u5e8f\u6216\u914d\u7f6e\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u662f\u5404\u4e2a\u90e8\u7f72\u65b9\u5f0f\u7684\u5177\u4f53\u4f7f\u7528\u65b9\u5f0f"),(0,r.kt)("h3",{id:"\u4f7f\u7528-kubectl-\u5de5\u5177"},"\u4f7f\u7528 Kubectl \u5de5\u5177"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://kcl-lang.io/blog/2023-11-20-search-k8s-module-on-artifacthub"},"https://kcl-lang.io/blog/2023-11-20-search-k8s-module-on-artifacthub")),(0,r.kt)("h3",{id:"\u4f7f\u7528-cicd-\u5de5\u5177"},"\u4f7f\u7528 CI/CD \u5de5\u5177"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://kcl-lang.io/blog/2023-07-31-kcl-github-argocd-gitops"},"https://kcl-lang.io/blog/2023-07-31-kcl-github-argocd-gitops")),(0,r.kt)("h3",{id:"\u4f7f\u7528-krm-function"},"\u4f7f\u7528 KRM Function"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://kcl-lang.io/blog/2023-10-23-cloud-native-supply-chain-krm-kcl-spec"},"https://kcl-lang.io/blog/2023-10-23-cloud-native-supply-chain-krm-kcl-spec")),(0,r.kt)("h3",{id:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u62bd\u8c61\u914d\u7f6e\u5de5\u5177"},"\u4f7f\u7528\u81ea\u5b9a\u4e49\u62bd\u8c61\u914d\u7f6e\u5de5\u5177"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://kcl-lang.io/blog/2023-12-15-kubevela-integration"},"https://kcl-lang.io/blog/2023-12-15-kubevela-integration")),(0,r.kt)("h3",{id:"\u4f7f\u7528-kcl-operator"},"\u4f7f\u7528 KCL Operator"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/user_docs/guides/working-with-k8s/mutate-manifests/kcl-operator"},"https://kcl-lang.io/docs/user_docs/guides/working-with-k8s/mutate-manifests/kcl-operator")),(0,r.kt)("h3",{id:"\u4f7f\u7528\u914d\u7f6e\u7ba1\u7406\u5de5\u5177"},"\u4f7f\u7528\u914d\u7f6e\u7ba1\u7406\u5de5\u5177"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl/issues/952"},"https://github.com/kcl-lang/kcl/issues/952")))}k.isMDXComponent=!0},92218:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/cloud-native-tool-integration-b2157c3d2b3210c16f145176928e2cfc.png"}}]);