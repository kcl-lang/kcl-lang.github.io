"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[72516],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=l.createContext({}),s=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=s(e.components);return l.createElement(o.Provider,{value:t},e.children)},p="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,m=p["".concat(o,".").concat(d)]||p[d]||k[d]||r;return n?l.createElement(m,u(u({ref:t},c),{},{components:n})):l.createElement(m,u({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,u=new Array(r);u[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:a,u[1]=i;for(var s=2;s<r;s++)u[s]=n[s];return l.createElement.apply(null,u)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28840:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>u,default:()=>k,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var l=n(87462),a=(n(67294),n(3905));const r={},u="KubeVela",i={unversionedId:"user_docs/guides/working-with-kubevela/index",id:"user_docs/guides/working-with-kubevela/index",title:"KubeVela",description:"KubeVela \u662f\u4e00\u4e2a CNCF \u57fa\u91d1\u4f1a\u6258\u7ba1\u7684\u73b0\u4ee3\u7684\u5e94\u7528\u4ea4\u4ed8\u7cfb\u7edf\uff0c\u5b83\u57fa\u4e8e Open Application Model\uff08OAM\uff09\u89c4\u8303\u6784\u5efa\uff0c\u65e8\u5728\u5c4f\u853d Kubernetes \u7684\u590d\u6742\u6027\uff0c\u63d0\u4f9b\u4e00\u5957\u7b80\u5355\u6613\u7528\u7684\u547d\u4ee4\u884c\u5de5\u5177\u548c APIs\uff0c\u8ba9\u5f00\u53d1\u8005\u65e0\u9700\u5173\u5fc3\u5e95\u5c42\u7ec6\u8282\u5373\u53ef\u90e8\u7f72\u548c\u8fd0\u7ef4\u4e91\u539f\u751f\u5e94\u7528\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user_docs/guides/working-with-kubevela/index.md",sourceDirName:"user_docs/guides/working-with-kubevela",slug:"/user_docs/guides/working-with-kubevela/",permalink:"/zh-CN/docs/next/user_docs/guides/working-with-kubevela/",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/user_docs/guides/working-with-kubevela/index.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1714663025,formattedLastUpdatedAt:"2024\u5e745\u67082\u65e5",frontMatter:{},sidebar:"user_docs",previous:{title:"KusionStack",permalink:"/zh-CN/docs/next/user_docs/guides/working-with-kusion/"},next:{title:"\u6838\u5fc3\u6982\u5ff5",permalink:"/zh-CN/docs/next/user_docs/concepts/"}},o={},s=[{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb",level:2},{value:"1. \u914d\u7f6e Kubernetes \u96c6\u7fa4",id:"1-\u914d\u7f6e-kubernetes-\u96c6\u7fa4",level:3},{value:"2. \u5b89\u88c5 KubeVela",id:"2-\u5b89\u88c5-kubevela",level:3},{value:"3. \u5b89\u88c5 KCL \u5e76\u7f16\u5199\u914d\u7f6e",id:"3-\u5b89\u88c5-kcl-\u5e76\u7f16\u5199\u914d\u7f6e",level:3},{value:"4. \u90e8\u7f72\u5e94\u7528\u5e76\u9a8c\u8bc1",id:"4-\u90e8\u7f72\u5e94\u7528\u5e76\u9a8c\u8bc1",level:3},{value:"\u7ed3\u8bba",id:"\u7ed3\u8bba",level:2}],c={toc:s},p="wrapper";function k(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,l.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kubevela"},"KubeVela"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://kubevela.net/"},"KubeVela")," \u662f\u4e00\u4e2a CNCF \u57fa\u91d1\u4f1a\u6258\u7ba1\u7684\u73b0\u4ee3\u7684\u5e94\u7528\u4ea4\u4ed8\u7cfb\u7edf\uff0c\u5b83\u57fa\u4e8e Open Application Model\uff08OAM\uff09\u89c4\u8303\u6784\u5efa\uff0c\u65e8\u5728\u5c4f\u853d Kubernetes \u7684\u590d\u6742\u6027\uff0c\u63d0\u4f9b\u4e00\u5957\u7b80\u5355\u6613\u7528\u7684\u547d\u4ee4\u884c\u5de5\u5177\u548c APIs\uff0c\u8ba9\u5f00\u53d1\u8005\u65e0\u9700\u5173\u5fc3\u5e95\u5c42\u7ec6\u8282\u5373\u53ef\u90e8\u7f72\u548c\u8fd0\u7ef4\u4e91\u539f\u751f\u5e94\u7528\u3002"),(0,a.kt)("p",null,"\u5c06 KCL \u4e0e KubeVela \u4e00\u8d77\u4f7f\u7528\u5177\u6709\u5982\u4e0b\u597d\u5904:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u66f4\u7b80\u5355\u7684\u914d\u7f6e"),"\uff1a\u5728\u5ba2\u6237\u7aef\u5c42\u9762\u4e3a KubeVela OAM \u914d\u7f6e\u63d0\u4f9b\u66f4\u5f3a\u7684\u6a21\u7248\u5316\u80fd\u529b\u5982\u6761\u4ef6\uff0c\u5faa\u73af\u7b49\uff0c\u51cf\u5c11\u6837\u677f YAML \u4e66\u5199\uff0c\u540c\u65f6\u590d\u7528 KCL \u6a21\u578b\u5e93\u548c\u5de5\u5177\u94fe\u751f\u6001\uff0c\u63d0\u5347\u914d\u7f6e\u53ca\u7b56\u7565\u7f16\u5199\u7684\u4f53\u9a8c\u548c\u7ba1\u7406\u6548\u7387\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u66f4\u597d\u7684\u53ef\u7ef4\u62a4\u6027"),"\uff1a\u901a\u8fc7 KCL \u53ef\u4ee5\u63d0\u4f9b\u66f4\u6709\u5229\u4e8e\u7248\u672c\u63a7\u5236\u548c\u56e2\u961f\u534f\u4f5c\u7684\u914d\u7f6e\u6587\u4ef6\u7ed3\u6784\uff0c\u800c\u4e0d\u662f\u56f4\u7ed5 YAML \u8fdb\u884c\u914d\u7f6e\uff0c\u540c\u65f6\u642d\u914d KCL \u7f16\u5199\u7684 OAM \u5e94\u7528\u6a21\u578b\uff0c\u53ef\u4ee5\u4f7f\u5f97\u5e94\u7528\u914d\u7f6e\u66f4\u6613\u4e8e\u7ef4\u62a4\u548c\u8fed\u4ee3\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u66f4\u7b80\u5316\u7684\u64cd\u4f5c"),"\uff1a\u7ed3\u5408 KCL \u7684\u914d\u7f6e\u7b80\u6d01\u6027\u548c KubeVela \u7684\u6613\u7528\u6027\uff0c\u53ef\u4ee5\u7b80\u5316\u65e5\u5e38\u7684\u64cd\u4f5c\u4efb\u52a1\uff0c\u6bd4\u5982\u90e8\u7f72\u66f4\u65b0\u3001\u6269\u5c55\u6216\u56de\u6eda\u5e94\u7528\u3002\u5f00\u53d1\u8005\u53ef\u4ee5\u66f4\u52a0\u4e13\u6ce8\u4e8e\u5e94\u7528\u672c\u8eab\uff0c\u800c\u4e0d\u662f\u90e8\u7f72\u8fc7\u7a0b\u4e2d\u7684\u7e41\u7410\u7ec6\u8282\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u66f4\u597d\u7684\u8de8\u56e2\u961f\u534f\u4f5c"),"\uff1a\u901a\u8fc7 KCL \u914d\u7f6e\u5206\u5757\u7f16\u5199\u4ee5\u53ca\u5305\u7ba1\u7406\u80fd\u529b\u4e0e KubeVela \u7ed3\u5408\u4f7f\u7528\uff0c\u53ef\u4ee5\u5b9a\u4e49\u66f4\u6e05\u6670\u7684\u754c\u9650\uff0c\u4f7f\u5f97\u4e0d\u540c\u7684\u56e2\u961f\uff08\u5982\u5f00\u53d1\u3001\u6d4b\u8bd5\u548c\u8fd0\u7ef4\u56e2\u961f\uff09\u53ef\u4ee5\u6709\u6761\u7406\u5730\u534f\u4f5c\u3002\u6bcf\u4e2a\u56e2\u961f\u53ef\u4ee5\u4e13\u6ce8\u4e8e\u5176\u804c\u8d23\u8303\u56f4\u5185\u7684\u4efb\u52a1\uff0c\u5206\u522b\u4ea4\u4ed8\u3001\u5206\u4eab\u548c\u590d\u7528\u5404\u81ea\u7684\u914d\u7f6e\uff0c\u800c\u4e0d\u7528\u62c5\u5fc3\u5176\u4ed6\u65b9\u9762\u7684\u7ec6\u8282\u3002")),(0,a.kt)("h2",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,a.kt)("h3",{id:"1-\u914d\u7f6e-kubernetes-\u96c6\u7fa4"},"1. \u914d\u7f6e Kubernetes \u96c6\u7fa4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b89\u88c5 ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/k3d-io/k3d"},"K3d")," \u5e76\u521b\u5efa\u4e00\u4e2a\u96c6\u7fa4")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"k3d cluster create\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u4f60\u53ef\u4ee5\u5728\u6b64\u65b9\u6848\u4e2d\u4f7f\u7528\u5176\u4ed6\u65b9\u5f0f\u521b\u5efa\u60a8\u81ea\u5df1\u7684 Kubernetes \u96c6\u7fa4\uff0c\u5982 kind, minikube \u7b49\u3002")),(0,a.kt)("h3",{id:"2-\u5b89\u88c5-kubevela"},"2. \u5b89\u88c5 KubeVela"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b89\u88c5 KubeVela CLI")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSl https://kubevela.net/script/install.sh | bash\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b89\u88c5 KubeVela Core")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"vela install\n")),(0,a.kt)("h3",{id:"3-\u5b89\u88c5-kcl-\u5e76\u7f16\u5199\u914d\u7f6e"},"3. \u5b89\u88c5 KCL \u5e76\u7f16\u5199\u914d\u7f6e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b89\u88c5 KCL")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSL https://kcl-lang.io/script/install-cli.sh | /bin/bash\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u65b0\u5efa\u5de5\u7a0b\u5e76\u6dfb\u52a0 OAM \u4f9d\u8d56")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kcl mod init kcl-play-svc && cd kcl-play-svc && kcl mod add oam\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728 main.k \u4e2d\u7f16\u5199\u5982\u4e0b\u4ee3\u7801")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import oam\n\noam.Application {\n    metadata.name = "kcl-play-svc"\n    spec.components = [{\n        name = metadata.name\n        type = "webservice"\n        properties = {\n            image = "kcllang/kcl"\n            ports = [{port = 80, expose = True}]\n            cmd = ["kcl", "play"]\n        }\n    }]\n}\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff0c\u4f60\u53ef\u4ee5\u5728 ArtifactHub \u4e0a\u67e5\u9605\u5230\u76f8\u5e94\u7684 OAM \u6a21\u578b\u6587\u6863\u6216\u8005\u76f4\u63a5\u5728 IDE \u4e2d\u67e5\u770b ",(0,a.kt)("a",{parentName:"p",href:"https://artifacthub.io/packages/kcl/kcl-module/oam"},"https://artifacthub.io/packages/kcl/kcl-module/oam")," or in the IDE extension.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"oam-definition-hover",src:n(82463).Z,width:"1048",height:"630"})),(0,a.kt)("h3",{id:"4-\u90e8\u7f72\u5e94\u7528\u5e76\u9a8c\u8bc1"},"4. \u90e8\u7f72\u5e94\u7528\u5e76\u9a8c\u8bc1"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e0b\u53d1\u914d\u7f6e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kcl run | vela up -f -\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7aef\u53e3\u8f6c\u53d1")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"vela port-forward kcl-play-svc\n")),(0,a.kt)("p",null,"\u7136\u540e\u6211\u4eec\u53ef\u4ee5\u5728\u6d4f\u89c8\u5668\u4e2d\u770b\u5230 KCL Playground \u5e94\u7528\u6210\u529f\u8fd0\u884c"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kcl-play-svc",src:n(79190).Z,width:"2326",height:"858"})),(0,a.kt)("h2",{id:"\u7ed3\u8bba"},"\u7ed3\u8bba"),(0,a.kt)("p",null,"\u901a\u8fc7\u672c\u7bc7\u6587\u6863\u7684\u6559\u7a0b\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 KubeVela \u548c KCL \u7b49\u521d\u6b65\u90e8\u7f72\u4e91\u539f\u751f\u5e94\u7528\uff0c\u672a\u6765\u6211\u4eec\u5c06\u8865\u5145\u66f4\u591a\u6587\u6863\u8bb2\u89e3\u5982\u4f55\u5728\u5ba2\u6237\u7aef\u4f7f\u7528 KCL \u8fdb\u4e00\u6b65\u6269\u5c55 KubeVela \u7684\u80fd\u529b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 KCL \u7684\u7ee7\u627f\u3001\u7ec4\u5408\u548c\u6821\u9a8c\u624b\u6bb5\u6269\u5c55 OAM \u6a21\u578b\uff0c\u6bd4\u5982\u6839\u636e\u60a8\u7684\u57fa\u7840\u8bbe\u65bd\u6216\u8005\u7ec4\u7ec7\u57fa\u4e8e OAM \u5b9a\u4e49\u66f4\u9002\u5408\u7684\u5e94\u7528\u62bd\u8c61\u6a21\u578b"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 KCL \u914d\u7f6e\u5206\u5757\u7f16\u5199\uff0c\u6761\u4ef6\uff0c\u903b\u8f91\uff0c\u5faa\u73af\u548c\u6a21\u5757\u5316\u80fd\u529b\u66f4\u597d\u5730\u7ec4\u7ec7 OAM \u591a\u73af\u5883\u914d\u7f6e\uff0c\u63d0\u5347\u6a21\u7248\u5316\u80fd\u529b\uff0c\u6bd4\u5982\u5c06\u8f83\u957f\u7684 App Definition \u5206\u6563\u5230\u4e0d\u540c\u7684\u6587\u4ef6\u8fdb\u884c\u7ec4\u7ec7\uff0c\u51cf\u5c11\u6837\u677f\u914d\u7f6e"),(0,a.kt)("li",{parentName:"ul"},"\u4e0e KusionStack \u548c ArgoCD \u7b49\u9879\u76ee\u8fdb\u4e00\u6b65\u96c6\u6210\u5b9e\u73b0\u66f4\u597d\u7684 GitOps")))}k.isMDXComponent=!0},79190:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/kcl-play-svc-17cdd017ee58347075be64904d62e73f.png"},82463:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/oam-definition-hover-bf557b943b8e7abe7c4d13e91d1c48d9.png"}}]);