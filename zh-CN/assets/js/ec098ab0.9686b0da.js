"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[99948],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),o=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},m=function(e){var n=o(e.components);return a.createElement(i.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=o(t),k=r,d=u["".concat(i,".").concat(k)]||u[k]||c[k]||l;return t?a.createElement(d,p(p({ref:n},m),{},{components:t})):a.createElement(d,p({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,p=new Array(l);p[0]=k;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[u]="string"==typeof e?e:r,p[1]=s;for(var o=2;o<l;o++)p[o]=t[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},14447:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var a=t(87462),r=(t(67294),t(3905));const l={},p="\u4f7f\u7528 KCL \u751f\u6210\u5e76\u7ba1\u7406 Kubernetes \u8d44\u6e90\u914d\u7f6e",s={unversionedId:"user_docs/guides/working-with-k8s/generate_k8s_manifests",id:"version-0.4.4/user_docs/guides/working-with-k8s/generate_k8s_manifests",title:"\u4f7f\u7528 KCL \u751f\u6210\u5e76\u7ba1\u7406 Kubernetes \u8d44\u6e90\u914d\u7f6e",description:"\u6240\u8c13\u914d\u7f6e\u5c31\u662f\u5f53\u6211\u4eec\u90e8\u7f72\u8f6f\u4ef6\u7cfb\u7edf\u65f6\uff0c\u6211\u4eec\u5e76\u4e0d\u8ba4\u4e3a\u5b83\u4eec\u662f\u56fa\u5b9a\u4e0d\u53d8\u7684\u3002\u4e0d\u65ad\u53d1\u5c55\u7684\u4e1a\u52a1\u9700\u6c42\u3001\u57fa\u7840\u67b6\u6784\u8981\u6c42\u548c\u5176\u4ed6\u56e0\u7d20\u610f\u5473\u7740\u7cfb\u7edf\u4e0d\u65ad\u53d8\u5316\u3002\u5f53\u6211\u4eec\u9700\u8981\u5feb\u901f\u66f4\u6539\u7cfb\u7edf\u884c\u4e3a\uff0c\u5e76\u4e14\u66f4\u6539\u8fc7\u7a0b\u9700\u8981\u6602\u8d35\u3001\u5197\u957f\u7684\u91cd\u5efa\u548c\u91cd\u65b0\u90e8\u7f72\u8fc7\u7a0b\u65f6\uff0c\u4e1a\u52a1\u4ee3\u7801\u66f4\u6539\u5f80\u5f80\u662f\u4e0d\u591f\u7684\u3002\u800c\u914d\u7f6e\u53ef\u4ee5\u4e3a\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u79cd\u4f4e\u5f00\u9500\u7684\u65b9\u5f0f\u6765\u6539\u53d8\u7cfb\u7edf\u529f\u80fd\uff0c\u6bd4\u5982\u6211\u4eec\u4f1a\u7ecf\u5e38\u4e3a\u7cfb\u7edf\u7f16\u5199\u4e00\u4e9b\u5982\u4e0b\u6240\u793a\u7684 JSON \u6216 YAML \u6587\u4ef6\u4f5c\u4e3a\u6211\u4eec\u7cfb\u7edf\u7684\u914d\u7f6e\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.4.4/user_docs/guides/working-with-k8s/generate_k8s_manifests.md",sourceDirName:"user_docs/guides/working-with-k8s",slug:"/user_docs/guides/working-with-k8s/generate_k8s_manifests",permalink:"/zh-CN/docs/0.4.4/user_docs/guides/working-with-k8s/generate_k8s_manifests",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.4.4/user_docs/guides/working-with-k8s/generate_k8s_manifests.md",tags:[],version:"0.4.4",lastUpdatedBy:"Peefy",lastUpdatedAt:1703569910,formattedLastUpdatedAt:"2023\u5e7412\u670826\u65e5",frontMatter:{},sidebar:"user_docs",previous:{title:"From Kubernetes",permalink:"/zh-CN/docs/0.4.4/user_docs/guides/working-with-k8s/adopt_from_kubernetes"},next:{title:"KCL \u4e0e\u5176\u4ed6 Kubernetes \u914d\u7f6e\u7ba1\u7406\u5de5\u5177\u7684\u5f02\u540c - Helm \u7bc7",permalink:"/zh-CN/docs/0.4.4/user_docs/guides/working-with-k8s/vs_helm"}},i={},o=[{value:"\u4e3a\u4ec0\u4e48\u4f7f\u7528 KCL",id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528-kcl",level:2},{value:"\u4f7f\u7528 KCL \u751f\u6210\u5e76\u7ba1\u7406 Kubernetes \u8d44\u6e90",id:"\u4f7f\u7528-kcl-\u751f\u6210\u5e76\u7ba1\u7406-kubernetes-\u8d44\u6e90",level:2},{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:3},{value:"\u751f\u6210 Kubernetes \u8d44\u6e90",id:"\u751f\u6210-kubernetes-\u8d44\u6e90",level:3},{value:"\u7f16\u5199\u4ee3\u7801\u7ba1\u7406 Kubernetes \u8d44\u6e90",id:"\u7f16\u5199\u4ee3\u7801\u7ba1\u7406-kubernetes-\u8d44\u6e90",level:3}],m={toc:o},u="wrapper";function c(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u4f7f\u7528-kcl-\u751f\u6210\u5e76\u7ba1\u7406-kubernetes-\u8d44\u6e90\u914d\u7f6e"},"\u4f7f\u7528 KCL \u751f\u6210\u5e76\u7ba1\u7406 Kubernetes \u8d44\u6e90\u914d\u7f6e"),(0,r.kt)("p",null,"\u6240\u8c13\u914d\u7f6e\u5c31\u662f\u5f53\u6211\u4eec\u90e8\u7f72\u8f6f\u4ef6\u7cfb\u7edf\u65f6\uff0c\u6211\u4eec\u5e76\u4e0d\u8ba4\u4e3a\u5b83\u4eec\u662f\u56fa\u5b9a\u4e0d\u53d8\u7684\u3002\u4e0d\u65ad\u53d1\u5c55\u7684\u4e1a\u52a1\u9700\u6c42\u3001\u57fa\u7840\u67b6\u6784\u8981\u6c42\u548c\u5176\u4ed6\u56e0\u7d20\u610f\u5473\u7740\u7cfb\u7edf\u4e0d\u65ad\u53d8\u5316\u3002\u5f53\u6211\u4eec\u9700\u8981\u5feb\u901f\u66f4\u6539\u7cfb\u7edf\u884c\u4e3a\uff0c\u5e76\u4e14\u66f4\u6539\u8fc7\u7a0b\u9700\u8981\u6602\u8d35\u3001\u5197\u957f\u7684\u91cd\u5efa\u548c\u91cd\u65b0\u90e8\u7f72\u8fc7\u7a0b\u65f6\uff0c\u4e1a\u52a1\u4ee3\u7801\u66f4\u6539\u5f80\u5f80\u662f\u4e0d\u591f\u7684\u3002\u800c\u914d\u7f6e\u53ef\u4ee5\u4e3a\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u79cd\u4f4e\u5f00\u9500\u7684\u65b9\u5f0f\u6765\u6539\u53d8\u7cfb\u7edf\u529f\u80fd\uff0c\u6bd4\u5982\u6211\u4eec\u4f1a\u7ecf\u5e38\u4e3a\u7cfb\u7edf\u7f16\u5199\u4e00\u4e9b\u5982\u4e0b\u6240\u793a\u7684 JSON \u6216 YAML \u6587\u4ef6\u4f5c\u4e3a\u6211\u4eec\u7cfb\u7edf\u7684\u914d\u7f6e\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JSON \u914d\u7f6e")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "server": {\n    "addr": "127.0.0.1",\n    "listen": 4545\n  },\n  "database": {\n    "enabled": true,\n    "ports": [8000, 8001, 8002]\n  }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"YAML \u914d\u7f6e")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"server:\n  addr: 127.0.0.1\n  listen: 4545\ndatabase:\n  enabled: true\n  ports:\n    - 8000\n    - 8001\n    - 8002\n")),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u6839\u636e\u9700\u8981\u9009\u62e9\u5728 JSON \u548c YAML \u6587\u4ef6\u4e2d\u5b58\u50a8\u9759\u6001\u914d\u7f6e\u3002\u6b64\u5916\uff0c\u914d\u7f6e\u8fd8\u53ef\u4ee5\u5b58\u50a8\u5728\u5141\u8bb8\u66f4\u7075\u6d3b\u914d\u7f6e\u7684\u9ad8\u7ea7\u8bed\u8a00\u4e2d\uff0c\u901a\u8fc7\u4ee3\u7801\u7f16\u5199\u3001\u6e32\u67d3\u5e76\u5f97\u5230\u9759\u6001\u914d\u7f6e\u3002KCL \u5c31\u662f\u8fd9\u6837\u4e00\u79cd\u914d\u7f6e\u8bed\u8a00\uff0c\u6211\u4eec\u53ef\u4ee5\u7f16\u5199 KCL \u4ee3\u7801\u6765\u751f\u6210 JSON/YAML \u7b49\u914d\u7f6e\u3002"),(0,r.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528-kcl"},"\u4e3a\u4ec0\u4e48\u4f7f\u7528 KCL"),(0,r.kt)("p",null,'\u5f53\u6211\u4eec\u7ba1\u7406 Kubernetes \u8d44\u6e90\u6e05\u5355\u65f6\uff0c\u6211\u4eec\u5e38\u5e38\u4f1a\u624b\u5199\u7ef4\u62a4\uff0c\u6216\u8005\u4f7f\u7528 Helm \u548c Kustomize \u7b49\u5de5\u5177\u6765\u7ef4\u62a4\u6211\u4eec YAML \u914d\u7f6e\u6216\u8005\u914d\u7f6e\u6a21\u7248\uff0c\u7136\u540e\u901a\u8fc7 kubectl \u548c helm \u547d\u4ee4\u884c\u7b49\u5de5\u5177\u5c06\u8d44\u6e90\u4e0b\u53d1\u5230\u96c6\u7fa4\u3002\u4f46\u662f\u4f5c\u4e3a\u4e00\u4e2a "YAML \u5de5\u7a0b\u5e08" \u6bcf\u5929\u7ef4\u62a4 YAML \u914d\u7f6e\u65e0\u7591\u662f\u7410\u788e\u4e14\u65e0\u804a\u7684\uff0c\u5e76\u4e14\u5bb9\u6613\u51fa\u9519\u3002'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata: ... # Omit\nspec:\n  selector:\n    matchlabels:\n      cell: RZ00A\n  replicas: 2\n  template:\n    metadata: ... # Omit\n    spec:\n      tolerations:\n      - effect: NoSchedules\n        key: is-over-quota\n        operator: Equal\n        value: 'true'\n      containers:\n      - name: test-app\n          image: images.example/app:v1 # Wrong ident\n        resources:\n          limits:\n            cpu: 2 # Wrong type. The type of cpu should be str\n            memory: 4Gi\n            # Field missing: ephemeral-storage\n      affinity:\n        nodeAffinity:\n          requiredDuringSchedulingIgnoredDuringExecution:\n            nodeSelectorTerms:\n            - matchExpressions:\n              - key: is-over-quota\n                operator: In\n                values:\n                - 'true'\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"YAML \u4e2d\u7684\u7ed3\u6784\u5316\u6570\u636e\u662f\u65e0\u7c7b\u578b\u7684\uff0c\u7f3a\u4e4f\u9a8c\u8bc1\u65b9\u6cd5\uff0c\u65e0\u6cd5\u7acb\u5373\u68c0\u67e5\u6240\u6709\u6570\u636e\u7684\u6709\u6548\u6027"),(0,r.kt)("li",{parentName:"ul"},"YAML \u7f16\u7a0b\u80fd\u529b\u6b20\u4f73\uff0c\u5bb9\u6613\u5199\u51fa\u4e0d\u6b63\u786e\u7684\u7f29\u8fdb\uff0c\u4e5f\u6ca1\u6709\u903b\u8f91\u5224\u65ad\u7b49\u5e38\u89c1\u4ee3\u7801\u7ec4\u7ec7\u65b9\u5f0f\uff0c\u5bb9\u6613\u5199\u51fa\u5927\u91cf\u91cd\u590d\u914d\u7f6e\uff0c\u96be\u4ee5\u7ef4\u62a4"),(0,r.kt)("li",{parentName:"ul"},"Kubernetes \u8bbe\u8ba1\u662f\u590d\u6742\u7684\uff0c\u7528\u6237\u5f88\u96be\u7406\u89e3\u6240\u6709\u7ec6\u8282\uff0c\u6bd4\u5982\u4e0a\u9762\u914d\u7f6e\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"toleration")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"affinity")," \u5b57\u6bb5\uff0c\u5982\u679c\u7528\u6237\u4e0d\u7406\u89e3\u8c03\u5ea6\u903b\u8f91\uff0c\u5b83\u53ef\u80fd\u88ab\u9519\u8bef\u5730\u7701\u7565\u6389\u6216\u8005\u591a\u4f59\u7684\u6dfb\u52a0")),(0,r.kt)("p",null,"\u56e0\u6b64\uff0cKCL \u671f\u671b\u5728 Kubernetes YAML \u8d44\u6e90\u7ba1\u7406\u89e3\u51b3\u5982\u4e0b\u95ee\u9898\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7528",(0,r.kt)("strong",{parentName:"li"},"\u751f\u4ea7\u7ea7\u9ad8\u6027\u80fd\u7f16\u7a0b\u8bed\u8a00"),"\u4ee5",(0,r.kt)("strong",{parentName:"li"},"\u7f16\u5199\u4ee3\u7801"),"\u7684\u65b9\u5f0f\u63d0\u5347\u914d\u7f6e\u7684\u7075\u6d3b\u5ea6\uff0c\u6bd4\u5982\u6761\u4ef6\u8bed\u53e5\u3001\u5faa\u73af\u3001\u51fd\u6570\u3001\u5305\u7ba1\u7406\u7b49\u7279\u6027\u63d0\u5347\u914d\u7f6e\u91cd\u7528\u7684\u80fd\u529b"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u4ee3\u7801\u5c42\u9762\u63d0\u5347",(0,r.kt)("strong",{parentName:"li"},"\u914d\u7f6e\u8bed\u4e49\u9a8c\u8bc1"),"\u7684\u80fd\u529b\uff0c\u6bd4\u5982\u5b57\u6bb5\u53ef\u9009/\u5fc5\u9009\u3001\u7c7b\u578b\u3001\u8303\u56f4\u7b49\u914d\u7f6e\u68c0\u67e5\u80fd\u529b"),(0,r.kt)("li",{parentName:"ul"},"\u63d0\u4f9b",(0,r.kt)("strong",{parentName:"li"},"\u914d\u7f6e\u5206\u5757\u7f16\u5199\u3001\u7ec4\u5408\u548c\u62bd\u8c61\u7684\u80fd\u529b"),"\uff0c\u6bd4\u5982\u7ed3\u6784\u5b9a\u4e49\u3001\u7ed3\u6784\u7ee7\u627f\u3001\u7ea6\u675f\u5b9a\u4e49\u7b49\u80fd\u529b")),(0,r.kt)("h2",{id:"\u4f7f\u7528-kcl-\u751f\u6210\u5e76\u7ba1\u7406-kubernetes-\u8d44\u6e90"},"\u4f7f\u7528 KCL \u751f\u6210\u5e76\u7ba1\u7406 Kubernetes \u8d44\u6e90"),(0,r.kt)("h3",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,r.kt)("p",null,"\u9996\u5148\u53ef\u4ee5\u5728 ",(0,r.kt)("a",{parentName:"p",href:"/docs/user_docs/getting-started/kcl-quick-start"},"KCL \u5feb\u901f\u5f00\u59cb")," \u6839\u636e\u6307\u5bfc\u4e0b\u8f7d\u5e76\u5b89\u88c5 KCL\uff0c\u7136\u540e\u51c6\u5907\u4e00\u4e2a ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/"},"Kubernetes")," \u73af\u5883"),(0,r.kt)("h3",{id:"\u751f\u6210-kubernetes-\u8d44\u6e90"},"\u751f\u6210 Kubernetes \u8d44\u6e90"),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u7f16\u5199\u5982\u4e0b KCL \u4ee3\u7801\u5e76\u547d\u540d\u4e3a main.k \uff0cKCL \u53d7 Python \u542f\u53d1\uff0c\u57fa\u7840\u8bed\u6cd5\u5341\u5206\u63a5\u8fd1 Python, \u6bd4\u8f83\u5bb9\u6613\u5b66\u4e60\u548c\u4e0a\u624b, \u914d\u7f6e\u6a21\u5f0f\u5199\u6cd5\u5f88\u7b80\u5355\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"k [: T] = v"),", \u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"k")," \u8868\u793a\u914d\u7f6e\u7684\u5c5e\u6027\u540d\u79f0; ",(0,r.kt)("inlineCode",{parentName:"p"},"v")," \u8868\u793a\u914d\u7f6e\u7684\u5c5e\u6027\u503c; ",(0,r.kt)("inlineCode",{parentName:"p"},": T")," \u8868\u793a\u4e00\u4e2a\u53ef\u9009\u7684\u7c7b\u578b\u6ce8\u89e3\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'apiVersion = "apps/v1"\nkind = "Deployment"\nmetadata = {\n    name = "nginx"\n    labels.app = "nginx"\n}\nspec = {\n    replicas = 3\n    selector.matchLabels = metadata.labels\n    template.metadata.labels = metadata.labels\n    template.spec.containers = [\n        {\n            name = metadata.name\n            image = "${metadata.name}:1.14.2"\n            ports = [{ containerPort = 80 }]\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"\u4e0a\u8ff0 KCL \u4ee3\u7801\u4e2d\u6211\u4eec\u5206\u522b\u58f0\u660e\u4e86\u4e00\u4e2a Kubernetes Deployment \u8d44\u6e90\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"apiVersion"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"kind"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"metadata")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"spec")," \u7b49\u53d8\u91cf\uff0c\u5e76\u5206\u522b\u8d4b\u503c\u4e86\u76f8\u5e94\u7684\u5185\u5bb9\uff0c\u7279\u522b\u5730\uff0c\u6211\u4eec\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata.labels")," \u5b57\u6bb5\u5206\u522b\u91cd\u7528\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.selector.matchLabels")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.template.metadata.labels")," \u5b57\u6bb5\u3002\u53ef\u4ee5\u770b\u51fa\uff0c\u76f8\u6bd4\u4e8e YAML\uff0cKCL \u5b9a\u4e49\u7684\u6570\u636e\u7ed3\u6784\u66f4\u52a0\u7d27\u51d1\uff0c\u800c\u4e14\u53ef\u4ee5\u901a\u8fc7\u5b9a\u4e49\u5c40\u90e8\u53d8\u91cf\u5b9e\u73b0\u914d\u7f6e\u91cd\u7528\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u884c\u5f97\u5230\u4e00\u4e2a Kubernetes YAML \u6587\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kcl main.k\n")),(0,r.kt)("p",null,"\u8f93\u51fa\u4e3a:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\n  labels:\n    app: nginx\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n        - name: nginx\n          image: nginx:1.14.2\n          ports:\n            - containerPort: 80\n")),(0,r.kt)("p",null,"\u5f53\u7136\u6211\u4eec\u53ef\u4ee5\u5c06 KCL \u5de5\u5177\u4e0e kubectl \u7b49\u5de5\u5177\u7ed3\u5408\u4f7f\u7528\uff0c\u8ba9\u6211\u4eec\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u5e76\u770b\u770b\u6548\u679c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kcl main.k | kubectl apply -f -\n\ndeployment.apps/nginx-deployment configured\n")),(0,r.kt)("p",null,"\u53ef\u4ee5\u4ece\u547d\u4ee4\u884c\u7684\u7ed3\u679c\u770b\u51fa\u4e0e\u6211\u4eec\u4f7f\u7528\u76f4\u63a5\u4f7f\u7528 YAML \u914d\u7f6e\u548c kubectl apply \u7684\u4e00\u4e2a Deployment \u4f53\u9a8c\u5b8c\u5168\u4e00\u81f4"),(0,r.kt)("p",null,"\u901a\u8fc7 kubectl \u68c0\u67e5\u90e8\u7f72\u72b6\u6001"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deploy\n\nNAME               READY   UP-TO-DATE   AVAILABLE   AGE\nnginx-deployment   3/3     3            3           15s\n")),(0,r.kt)("h3",{id:"\u7f16\u5199\u4ee3\u7801\u7ba1\u7406-kubernetes-\u8d44\u6e90"},"\u7f16\u5199\u4ee3\u7801\u7ba1\u7406 Kubernetes \u8d44\u6e90"),(0,r.kt)("p",null,"\u5bf9\u4e8e Kubernetes \u8d44\u6e90\u53d1\u5e03\u65f6\uff0c\u6211\u4eec\u5e38\u5e38\u4f1a\u9047\u5230\u914d\u7f6e\u53c2\u6570\u9700\u8981\u52a8\u6001\u6307\u5b9a\u7684\u573a\u666f\uff0c\u6bd4\u5982\u4e0d\u540c\u7684\u73af\u5883\u9700\u8981\u8bbe\u7f6e\u4e0d\u540c\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"image")," \u5b57\u6bb5\u503c\u751f\u6210\u4e0d\u540c\u73af\u5883\u7684\u8d44\u6e90\u3002\u5bf9\u4e8e\u8fd9\u79cd\u573a\u666f\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 KCL \u7684\u6761\u4ef6\u8bed\u53e5\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"option")," \u51fd\u6570\u52a8\u6001\u5730\u63a5\u6536\u5916\u90e8\u53c2\u6570\u3002\u6211\u4eec\u53ef\u4ee5\u5728\u4e0a\u8ff0\u4f8b\u5b50\u7684\u57fa\u7840\u4e0a\u6839\u636e\u4e0d\u540c\u7684\u73af\u5883\u8c03\u6574\u914d\u7f6e\u53c2\u6570\uff0c\u6bd4\u5982\u5bf9\u4e8e\u5982\u4e0b\u4ee3\u7801\uff0c\u6211\u4eec\u7f16\u5199\u4e86\u4e00\u4e2a\u6761\u4ef6\u8bed\u53e5\u5e76\u8f93\u5165\u4e00\u4e2a\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"env")," \u7684\u52a8\u6001\u53c2\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'apiVersion = "apps/v1"\nkind = "Deployment"\nmetadata = {\n    name = "nginx"\n    labels.app = "nginx"\n}\nspec = {\n    replicas = 3\n    selector.matchLabels = metadata.labels\n    template.metadata.labels = metadata.labels\n    template.spec.containers = [\n        {\n            name = metadata.name\n            image = "${metadata.name}:1.14.2" if option("env") == "prod" else "${metadata.name}:latest"\n            ports = [{ containerPort = 80 }]\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"\u4f7f\u7528 KCL \u547d\u4ee4\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"-D")," \u6807\u8bb0\u63a5\u6536\u4e00\u4e2a\u5916\u90e8\u8bbe\u7f6e\u7684\u52a8\u6001\u53c2\u6570\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kcl main.k -D env=prod\n")),(0,r.kt)("p",null,"\u8f93\u51fa\u4e3a:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\n  labels:\n    app: nginx\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n        - name: nginx\n          image: nginx:1.14.2\n          ports:\n            - containerPort: 80\n")),(0,r.kt)("p",null,"\u4e0a\u8ff0\u4ee3\u7801\u7247\u6bb5\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},'image = metadata.name + ":1.14.2" if option("env") == "prod" else  metadata.name + ":latest"')," \u610f\u601d\u4e3a\uff1a\u5f53\u52a8\u6001\u53c2\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"env")," \u7684\u503c\u88ab\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"prod")," \u65f6\uff0cimage \u5b57\u6bb5\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"nginx:1.14.2"),", \u5426\u5219\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"nginx:latest"),"\uff0c\u56e0\u6b64\u6211\u4eec\u53ef\u4ee5\u6839\u636e\u9700\u8981\u4e3a env \u8bbe\u7f6e\u4e3a\u4e0d\u540c\u7684\u503c\u83b7\u5f97\u4e0d\u540c\u5185\u5bb9\u7684 Kubernetes \u8d44\u6e90\u3002"),(0,r.kt)("p",null,"\u5e76\u4e14 KCL \u652f\u6301\u5c06 option \u51fd\u6570\u52a8\u6001\u53c2\u6570\u7ef4\u62a4\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c\u6bd4\u5982\u7f16\u5199\u4e0b\u9762\u5c55\u793a\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl.yaml")," \u6587\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"kcl_options:\n  - key: env\n    value: prod\n")),(0,r.kt)("p",null,"\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u884c\u4e5f\u53ef\u4ee5\u5f97\u5230\u540c\u6837\u7684 YAML \u8f93\u51fa\uff0c\u4ee5\u7b80\u5316 KCL \u52a8\u6001\u53c2\u6570\u7684\u8f93\u5165\u8fc7\u7a0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kcl main.k -Y kcl.yaml\n")),(0,r.kt)("p",null,"\u8f93\u51fa\u4e3a:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\n  labels:\n    app: nginx\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n        - name: nginx\n          image: nginx:1.14.2\n          ports:\n            - containerPort: 80\n")))}c.isMDXComponent=!0}}]);