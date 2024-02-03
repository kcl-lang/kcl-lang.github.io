"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[74855],{3905:(e,t,l)=>{l.d(t,{Zo:()=>c,kt:()=>b});var a=l(67294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var o=a.createContext({}),p=function(e){var t=a.useContext(o),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},k="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var l=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),k=p(l),m=n,b=k["".concat(o,".").concat(m)]||k[m]||s[m]||r;return l?a.createElement(b,i(i({ref:t},c),{},{components:l})):a.createElement(b,i({ref:t},c))}));function b(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=l.length,i=new Array(r);i[0]=m;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[k]="string"==typeof e?e:n,i[1]=u;for(var p=2;p<r;p++)i[p]=l[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,l)}m.displayName="MDXCreateElement"},51253:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>u,toc:()=>p});var a=l(87462),n=(l(67294),l(3905));const r={slug:"2023-12-15-kubevela-integration",title:"\u5b9e\u73b0\u9ad8\u6548\u4e91\u539f\u751f\u5e94\u7528\u90e8\u7f72\u8fd0\u7ef4 - KCL \u4e0e KubeVela \u5feb\u901f\u96c6\u6210\u6307\u5357",authors:{name:"KCL \u56e2\u961f",title:"KCL \u56e2\u961f"},tags:["KCL","KubeVela"]},i=void 0,u={permalink:"/zh-CN/blog/2023-12-15-kubevela-integration",editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/blog/2023-12-15-kubevela-integration/index.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2023-12-15-kubevela-integration/index.md",title:"\u5b9e\u73b0\u9ad8\u6548\u4e91\u539f\u751f\u5e94\u7528\u90e8\u7f72\u8fd0\u7ef4 - KCL \u4e0e KubeVela \u5feb\u901f\u96c6\u6210\u6307\u5357",description:"cover",date:"2023-12-15T00:00:00.000Z",formattedDate:"2023\u5e7412\u670815\u65e5",tags:[{label:"KCL",permalink:"/zh-CN/blog/tags/kcl"},{label:"KubeVela",permalink:"/zh-CN/blog/tags/kube-vela"}],readingTime:6.68,hasTruncateMarker:!1,authors:[{name:"KCL \u56e2\u961f",title:"KCL \u56e2\u961f"}],frontMatter:{slug:"2023-12-15-kubevela-integration",title:"\u5b9e\u73b0\u9ad8\u6548\u4e91\u539f\u751f\u5e94\u7528\u90e8\u7f72\u8fd0\u7ef4 - KCL \u4e0e KubeVela \u5feb\u901f\u96c6\u6210\u6307\u5357",authors:{name:"KCL \u56e2\u961f",title:"KCL \u56e2\u961f"},tags:["KCL","KubeVela"]},prevItem:{title:"2023 CNCF KCD \u6df1\u5733\u793e\u533a\u4f1a\u8bae KCL & KusionStack \u4ecb\u7ecd\u5185\u5bb9",permalink:"/zh-CN/blog/2023-12-18-kcl-kcd-shenzhen-meeting"},nextItem:{title:"KCL \u5728\u5de5\u7a0b\u5316\u914d\u7f6e\u7b56\u7565\u573a\u666f\u7684\u63a2\u7d22\u548c\u843d\u5730\u4f7f\u7528",permalink:"/zh-CN/blog/2023-12-09-engineering-config-policy-with-kcl-meeting"}},o={authorsImageUrls:[void 0]},p=[{value:"\u5c06 KCL \u4e0e KubeVela \u4e00\u8d77\u4f7f\u7528",id:"\u5c06-kcl-\u4e0e-kubevela-\u4e00\u8d77\u4f7f\u7528",level:2},{value:"\u5de5\u4f5c\u6d41\u7a0b",id:"\u5de5\u4f5c\u6d41\u7a0b",level:2},{value:"\u5177\u4f53\u6b65\u9aa4",id:"\u5177\u4f53\u6b65\u9aa4",level:2},{value:"0. \u5148\u51b3\u6761\u4ef6",id:"0-\u5148\u51b3\u6761\u4ef6",level:3},{value:"1. \u914d\u7f6e Kubernetes \u96c6\u7fa4",id:"1-\u914d\u7f6e-kubernetes-\u96c6\u7fa4",level:3},{value:"2. \u5b89\u88c5 KubeVela",id:"2-\u5b89\u88c5-kubevela",level:3},{value:"3. \u5b89\u88c5 KCL \u5e76\u7f16\u5199\u914d\u7f6e",id:"3-\u5b89\u88c5-kcl-\u5e76\u7f16\u5199\u914d\u7f6e",level:3},{value:"4. \u90e8\u7f72\u5e94\u7528\u5e76\u9a8c\u8bc1",id:"4-\u90e8\u7f72\u5e94\u7528\u5e76\u9a8c\u8bc1",level:3},{value:"\u7ed3\u8bba",id:"\u7ed3\u8bba",level:2}],c={toc:p},k="wrapper";function s(e){let{components:t,...r}=e;return(0,n.kt)(k,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"cover",src:l(47370).Z,width:"712",height:"350"})),(0,n.kt)("h1",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://kubevela.net/"},"KubeVela")," \u662f\u4e00\u4e2a CNCF \u57fa\u91d1\u4f1a\u6258\u7ba1\u7684\u73b0\u4ee3\u7684\u5e94\u7528\u4ea4\u4ed8\u7cfb\u7edf\uff0c\u5b83\u57fa\u4e8e Open Application Model\uff08OAM\uff09\u89c4\u8303\u6784\u5efa\uff0c\u65e8\u5728\u5c4f\u853d Kubernetes \u7684\u590d\u6742\u6027\uff0c\u63d0\u4f9b\u4e00\u5957\u7b80\u5355\u6613\u7528\u7684\u547d\u4ee4\u884c\u5de5\u5177\u548c APIs\uff0c\u8ba9\u5f00\u53d1\u8005\u65e0\u9700\u5173\u5fc3\u5e95\u5c42\u7ec6\u8282\u5373\u53ef\u90e8\u7f72\u548c\u8fd0\u7ef4\u4e91\u539f\u751f\u5e94\u7528\u3002"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://kcl-lang.io"},"KCL")," \u662f\u4e00\u4e2a CNCF \u57fa\u91d1\u4f1a\u6258\u7ba1\u7684\u9762\u5411\u4e91\u539f\u751f\u573a\u666f\u7684\u914d\u7f6e\u53ca\u7b56\u7565\u8bed\u8a00\uff0c\u671f\u671b\u901a\u8fc7\u6210\u719f\u7684\u7f16\u7a0b\u8bed\u8a00\u6280\u672f\u548c\u5b9e\u8df5\u6765\u6539\u8fdb\u5bf9\u5927\u91cf\u7e41\u6742\u914d\u7f6e\u6bd4\u5982\u4e91\u539f\u751f Kubernetes \u914d\u7f6e\u573a\u666f\u7684\u7f16\u5199\uff0c\u81f4\u529b\u4e8e\u6784\u5efa\u56f4\u7ed5\u914d\u7f6e\u7684\u66f4\u597d\u7684\u6a21\u5757\u5316\u3001\u6269\u5c55\u6027\u548c\u7a33\u5b9a\u6027\uff0c\u66f4\u7b80\u5355\u7684\u903b\u8f91\u7f16\u5199\uff0c\u4ee5\u53ca\u66f4\u7b80\u5355\u7684\u81ea\u52a8\u5316\u548c\u751f\u6001\u5de5\u5177\u96c6\u6210\u3002"),(0,n.kt)("p",null,"KCL \u5efa\u7acb\u5728\u4e00\u4e2a\u5b8c\u5168\u5f00\u653e\u7684\u4e91\u539f\u751f\u4e16\u754c\u5f53\u4e2d\uff0c\u4e0d\u4e0e\u4efb\u4f55\u7f16\u6392/\u5f15\u64ce\u5de5\u5177\u6216\u8005 Kubernetes \u63a7\u5236\u5668\u7ed1\u5b9a\uff0c\u53ef\u4ee5\u540c\u65f6\u4e3a Kubernetes \u5ba2\u6237\u7aef\u548c\u8fd0\u884c\u65f6\u63d0\u4f9b API \u62bd\u8c61\u3001\u7ec4\u5408\u548c\u6821\u9a8c\u7684\u80fd\u529b\u3002"),(0,n.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u6839\u636e\u573a\u666f\u9009\u62e9\u5408\u9002\u7684\u4e91\u539f\u751f\u5de5\u5177\u6bd4\u5982 Kubectl, Helm, Kustomize, KPT, KusionStack, KubeVela, Helmfile, Crossplane \u6216 ArgoCD \u7b49\u6765\u548c KCL \u7ed3\u5408\u5c06\u914d\u7f6e\u751f\u6548\u5230\u96c6\u7fa4\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"integration",src:l(23155).Z,width:"2606",height:"672"})),(0,n.kt)("p",null,"\u672c\u7bc7\u6587\u7ae0\u662f\u5c06 KCL \u4e0e KubeVela \u4e00\u8d77\u4f7f\u7528\u5b9e\u73b0\u9ad8\u6548\u4e91\u539f\u751f\u5e94\u7528\u90e8\u7f72\u8fd0\u7ef4\u7684\u7cfb\u5217\u6587\u7ae0\u7b2c\u4e00\u7bc7\uff0c\u540e\u7eed\u6211\u4eec\u4f1a\u5206\u4eab\u66f4\u591a\u9ad8\u7ea7\u7528\u6cd5\uff0c\u5c3d\u60c5\u671f\u5f85\u3002"),(0,n.kt)("h2",{id:"\u5c06-kcl-\u4e0e-kubevela-\u4e00\u8d77\u4f7f\u7528"},"\u5c06 KCL \u4e0e KubeVela \u4e00\u8d77\u4f7f\u7528"),(0,n.kt)("p",null,"\u5c06 KCL \u4e0e KubeVela \u4e00\u8d77\u4f7f\u7528\u5177\u6709\u5982\u4e0b\u597d\u5904:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u66f4\u7b80\u5355\u7684\u914d\u7f6e"),"\uff1a\u5728\u5ba2\u6237\u7aef\u5c42\u9762\u4e3a KubeVela OAM \u914d\u7f6e\u63d0\u4f9b\u66f4\u5f3a\u7684\u6a21\u7248\u5316\u80fd\u529b\u5982\u6761\u4ef6\uff0c\u5faa\u73af\u7b49\uff0c\u51cf\u5c11\u6837\u677f YAML \u4e66\u5199\uff0c\u540c\u65f6\u590d\u7528 KCL \u6a21\u578b\u5e93\u548c\u5de5\u5177\u94fe\u751f\u6001\uff0c\u63d0\u5347\u914d\u7f6e\u53ca\u7b56\u7565\u7f16\u5199\u7684\u4f53\u9a8c\u548c\u7ba1\u7406\u6548\u7387\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u66f4\u597d\u7684\u53ef\u7ef4\u62a4\u6027"),"\uff1a\u901a\u8fc7 KCL \u53ef\u4ee5\u63d0\u4f9b\u66f4\u6709\u5229\u4e8e\u7248\u672c\u63a7\u5236\u548c\u56e2\u961f\u534f\u4f5c\u7684\u914d\u7f6e\u6587\u4ef6\u7ed3\u6784\uff0c\u800c\u4e0d\u662f\u56f4\u7ed5 YAML \u8fdb\u884c\u914d\u7f6e\uff0c\u540c\u65f6\u642d\u914d KCL \u7f16\u5199\u7684 OAM \u5e94\u7528\u6a21\u578b\uff0c\u53ef\u4ee5\u4f7f\u5f97\u5e94\u7528\u914d\u7f6e\u66f4\u6613\u4e8e\u7ef4\u62a4\u548c\u8fed\u4ee3\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u66f4\u7b80\u5316\u7684\u64cd\u4f5c"),"\uff1a\u7ed3\u5408 KCL \u7684\u914d\u7f6e\u7b80\u6d01\u6027\u548c KubeVela \u7684\u6613\u7528\u6027\uff0c\u53ef\u4ee5\u7b80\u5316\u65e5\u5e38\u7684\u64cd\u4f5c\u4efb\u52a1\uff0c\u6bd4\u5982\u90e8\u7f72\u66f4\u65b0\u3001\u6269\u5c55\u6216\u56de\u6eda\u5e94\u7528\u3002\u5f00\u53d1\u8005\u53ef\u4ee5\u66f4\u52a0\u4e13\u6ce8\u4e8e\u5e94\u7528\u672c\u8eab\uff0c\u800c\u4e0d\u662f\u90e8\u7f72\u8fc7\u7a0b\u4e2d\u7684\u7e41\u7410\u7ec6\u8282\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u66f4\u597d\u7684\u8de8\u56e2\u961f\u534f\u4f5c"),"\uff1a\u901a\u8fc7 KCL \u914d\u7f6e\u5206\u5757\u7f16\u5199\u4ee5\u53ca\u5305\u7ba1\u7406\u80fd\u529b\u4e0e KubeVela \u7ed3\u5408\u4f7f\u7528\uff0c\u53ef\u4ee5\u5b9a\u4e49\u66f4\u6e05\u6670\u7684\u754c\u9650\uff0c\u4f7f\u5f97\u4e0d\u540c\u7684\u56e2\u961f\uff08\u5982\u5f00\u53d1\u3001\u6d4b\u8bd5\u548c\u8fd0\u7ef4\u56e2\u961f\uff09\u53ef\u4ee5\u6709\u6761\u7406\u5730\u534f\u4f5c\u3002\u6bcf\u4e2a\u56e2\u961f\u53ef\u4ee5\u4e13\u6ce8\u4e8e\u5176\u804c\u8d23\u8303\u56f4\u5185\u7684\u4efb\u52a1\uff0c\u5206\u522b\u4ea4\u4ed8\u3001\u5206\u4eab\u548c\u590d\u7528\u5404\u81ea\u7684\u914d\u7f6e\uff0c\u800c\u4e0d\u7528\u62c5\u5fc3\u5176\u4ed6\u65b9\u9762\u7684\u7ec6\u8282\u3002")),(0,n.kt)("h2",{id:"\u5de5\u4f5c\u6d41\u7a0b"},"\u5de5\u4f5c\u6d41\u7a0b"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"workflow",src:l(56846).Z,width:"1058",height:"340"})),(0,n.kt)("p",null,"\u5728\u6b64\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528 KCL Playground \u5e94\u7528\u4e3a\u4f8b\uff08\u8fd9\u662f\u4f7f\u7528 Go \u548c HTML5 \u7f16\u5199\u7684\u5e94\u7528\uff09\uff0c\u540c\u65f6\u4f7f\u7528 KCL \u5b9a\u4e49\u9700\u8981\u90e8\u7f72\u7684 OAM \u914d\u7f6e"),(0,n.kt)("p",null,"\u6574\u4f53\u5de5\u4f5c\u6d41\u7a0b\u5982\u4e0b"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5e94\u7528\u4ee3\u7801\u5f00\u53d1\u4ea7\u51fa Docker \u955c\u50cf"),(0,n.kt)("li",{parentName:"ol"},"\u4f7f\u7528 KCL \u7f16\u5199 OAM \u914d\u7f6e"),(0,n.kt)("li",{parentName:"ol"},"\u4f7f\u7528 KubeVela \u53d1\u5e03\u914d\u7f6e"),(0,n.kt)("li",{parentName:"ol"},"\u9a8c\u8bc1\u5e94\u7528\u8fd0\u884c\u60c5\u51b5")),(0,n.kt)("h2",{id:"\u5177\u4f53\u6b65\u9aa4"},"\u5177\u4f53\u6b65\u9aa4"),(0,n.kt)("h3",{id:"0-\u5148\u51b3\u6761\u4ef6"},"0. \u5148\u51b3\u6761\u4ef6"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u719f\u6089 Unix/Linux \u7684\u57fa\u672c\u547d\u4ee4"),(0,n.kt)("li",{parentName:"ul"},"\u719f\u6089 Git \u4f7f\u7528"),(0,n.kt)("li",{parentName:"ul"},"\u4e86\u89e3 Kubernetes \u57fa\u672c\u77e5\u8bc6"),(0,n.kt)("li",{parentName:"ul"},"\u4e86\u89e3 KubeVela"),(0,n.kt)("li",{parentName:"ul"},"\u4e86\u89e3 KCL \u57fa\u672c\u77e5\u8bc6")),(0,n.kt)("h3",{id:"1-\u914d\u7f6e-kubernetes-\u96c6\u7fa4"},"1. \u914d\u7f6e Kubernetes \u96c6\u7fa4"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5b89\u88c5 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/k3d-io/k3d"},"K3d")," \u5e76\u521b\u5efa\u4e00\u4e2a\u96c6\u7fa4")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"k3d cluster create\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u4f60\u53ef\u4ee5\u5728\u6b64\u65b9\u6848\u4e2d\u4f7f\u7528\u5176\u4ed6\u65b9\u5f0f\u521b\u5efa\u60a8\u81ea\u5df1\u7684 Kubernetes \u96c6\u7fa4\uff0c\u5982 kind, minikube \u7b49\u3002")),(0,n.kt)("h3",{id:"2-\u5b89\u88c5-kubevela"},"2. \u5b89\u88c5 KubeVela"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5b89\u88c5 KubeVela CLI")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSl https://kubevela.net/script/install.sh | bash\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5b89\u88c5 KubeVela Core")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"vela install\n")),(0,n.kt)("h3",{id:"3-\u5b89\u88c5-kcl-\u5e76\u7f16\u5199\u914d\u7f6e"},"3. \u5b89\u88c5 KCL \u5e76\u7f16\u5199\u914d\u7f6e"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5b89\u88c5 KCL")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSL https://kcl-lang.io/script/install-cli.sh | /bin/bash\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u65b0\u5efa\u5de5\u7a0b\u5e76\u6dfb\u52a0 OAM \u4f9d\u8d56")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kcl mod init kcl-play-svc && cd kcl-play-svc && kcl mod add oam\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5728 main.k \u4e2d\u7f16\u5199\u5982\u4e0b\u4ee3\u7801")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'import oam\n\noam.Application {\n    metadata.name = "kcl-play-svc"\n    spec.components = [{\n        name = metadata.name\n        type = "webservice"\n        properties = {\n            image = "kcllang/kcl"\n            ports = [{port = 80, expose = True}]\n            cmd = ["kcl", "play"]\n        }\n    }]\n}\n')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff0c\u4f60\u53ef\u4ee5\u5728 ArtifactHub \u4e0a\u67e5\u9605\u5230\u76f8\u5e94\u7684 OAM \u6a21\u578b\u6587\u6863\u6216\u8005\u76f4\u63a5\u5728 IDE \u4e2d\u67e5\u770b ",(0,n.kt)("a",{parentName:"p",href:"https://artifacthub.io/packages/kcl/kcl-module/oam"},"https://artifacthub.io/packages/kcl/kcl-module/oam")," or in the IDE extension.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"oam-definition-hover",src:l(82463).Z,width:"1048",height:"630"})),(0,n.kt)("h3",{id:"4-\u90e8\u7f72\u5e94\u7528\u5e76\u9a8c\u8bc1"},"4. \u90e8\u7f72\u5e94\u7528\u5e76\u9a8c\u8bc1"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e0b\u53d1\u914d\u7f6e")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kcl run | vela up -f -\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7aef\u53e3\u8f6c\u53d1")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"vela port-forward kcl-play-svc\n")),(0,n.kt)("p",null,"\u7136\u540e\u6211\u4eec\u53ef\u4ee5\u5728\u6d4f\u89c8\u5668\u4e2d\u770b\u5230 KCL Playground \u5e94\u7528\u6210\u529f\u8fd0\u884c"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kcl-play-svc",src:l(79190).Z,width:"2326",height:"858"})),(0,n.kt)("h2",{id:"\u7ed3\u8bba"},"\u7ed3\u8bba"),(0,n.kt)("p",null,"\u901a\u8fc7\u672c\u7bc7\u6587\u7ae0\u7684\u6559\u7a0b\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 KubeVela \u548c KCL \u7b49\u521d\u6b65\u90e8\u7f72\u4e91\u539f\u751f\u5e94\u7528\uff0c\u540e\u7eed\u6211\u4eec\u5c06\u901a\u8fc7\u66f4\u591a\u6587\u7ae0\u8bb2\u89e3\u5982\u4f55\u5728\u5ba2\u6237\u7aef\u4f7f\u7528 KCL \u8fdb\u4e00\u6b65\u6269\u5c55 KubeVela \u7684\u80fd\u529b"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528 KCL \u7684\u7ee7\u627f\u3001\u7ec4\u5408\u548c\u6821\u9a8c\u624b\u6bb5\u6269\u5c55 OAM \u6a21\u578b\uff0c\u6bd4\u5982\u6839\u636e\u60a8\u7684\u57fa\u7840\u8bbe\u65bd\u6216\u8005\u7ec4\u7ec7\u57fa\u4e8e OAM \u5b9a\u4e49\u66f4\u9002\u5408\u7684\u5e94\u7528\u62bd\u8c61\u6a21\u578b"),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528 KCL \u914d\u7f6e\u5206\u5757\u7f16\u5199\uff0c\u6761\u4ef6\uff0c\u903b\u8f91\uff0c\u5faa\u73af\u548c\u6a21\u5757\u5316\u80fd\u529b\u66f4\u597d\u5730\u7ec4\u7ec7 OAM \u591a\u73af\u5883\u914d\u7f6e\uff0c\u63d0\u5347\u6a21\u7248\u5316\u80fd\u529b\uff0c\u6bd4\u5982\u5c06\u8f83\u957f\u7684 App Definition \u5206\u6563\u5230\u4e0d\u540c\u7684\u6587\u4ef6\u8fdb\u884c\u7ec4\u7ec7\uff0c\u51cf\u5c11\u6837\u677f\u914d\u7f6e"),(0,n.kt)("li",{parentName:"ul"},"\u4e0e KusionStack \u548c ArgoCD \u7b49\u9879\u76ee\u8fdb\u4e00\u6b65\u96c6\u6210\u5b9e\u73b0\u66f4\u597d\u7684 GitOps"),(0,n.kt)("li",{parentName:"ul"},"\u5c06\u66f4\u591a\u7684\u4e91\u539f\u751f\u80fd\u529b\u6216 Kubernetes Operator \u5982 KubeBlocks \u548c Crossplane \u7b49\u5b9e\u73b0\u66f4\u597d\u7684\u6570\u636e\u5e93\u8fd0\u7ef4\u4ee5\u53ca\u7edf\u4e00\u7684\u4e91 API \u548c Kubernetes API \u53ef\u7f16\u7a0b\u63a5\u5165"),(0,n.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u66f4\u591a\u4f7f\u7528\u573a\u666f...")))}s.isMDXComponent=!0},47370:(e,t,l)=>{l.d(t,{Z:()=>a});const a=l.p+"assets/images/cover-c640e1eb03f64663e0c2a8902a36a702.png"},23155:(e,t,l)=>{l.d(t,{Z:()=>a});const a=l.p+"assets/images/integration-c0c6e40b3644da0976464727ec78cfdd.png"},79190:(e,t,l)=>{l.d(t,{Z:()=>a});const a=l.p+"assets/images/kcl-play-svc-17cdd017ee58347075be64904d62e73f.png"},82463:(e,t,l)=>{l.d(t,{Z:()=>a});const a=l.p+"assets/images/oam-definition-hover-bf557b943b8e7abe7c4d13e91d1c48d9.png"},56846:(e,t,l)=>{l.d(t,{Z:()=>a});const a=l.p+"assets/images/workflow-65f3b48f48ffc200fd831743c0738a81.png"}}]);