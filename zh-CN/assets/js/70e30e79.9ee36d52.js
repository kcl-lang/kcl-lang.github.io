"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[88391],{3905:(e,t,l)=>{l.d(t,{Zo:()=>u,kt:()=>d});var n=l(67294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var p=n.createContext({}),k=function(e){var t=n.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},u=function(e){var t=k(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=k(l),c=a,d=s["".concat(p,".").concat(c)]||s[c]||m[c]||r;return l?n.createElement(d,i(i({ref:t},u),{},{components:l})):n.createElement(d,i({ref:t},u))}));function d(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=l.length,i=new Array(r);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var k=2;k<r;k++)i[k]=l[k];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}c.displayName="MDXCreateElement"},77639:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>k});var n=l(87462),a=(l(67294),l(3905));const r={slug:"2024-02-21-biweekly-newsletter",title:"KCL \u793e\u533a\u5f00\u6e90\u53cc\u5468\u62a5 (2024 01.19 - 2024.02.21) | KCL v0.7.5 \u7248\u672c\u548c Flux KCL \u96c6\u6210\u66f4\u65b0\u901f\u9012",authors:{name:"KCL \u56e2\u961f",title:"KCL \u56e2\u961f"},tags:["KCL","Biweekly-Newsletter"]},i=void 0,o={permalink:"/zh-CN/blog/2024-02-21-biweekly-newsletter",editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/blog/2024-02-21-biweekly-newsletter/index.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2024-02-21-biweekly-newsletter/index.md",title:"KCL \u793e\u533a\u5f00\u6e90\u53cc\u5468\u62a5 (2024 01.19 - 2024.02.21) | KCL v0.7.5 \u7248\u672c\u548c Flux KCL \u96c6\u6210\u66f4\u65b0\u901f\u9012",description:"KCL \u662f\u4e00\u4e2a CNCF \u57fa\u91d1\u4f1a\u6258\u7ba1\u7684\u57fa\u4e8e\u7ea6\u675f\u7684\u8bb0\u5f55\u53ca\u51fd\u6570\u8bed\u8a00\uff0c\u671f\u671b\u901a\u8fc7\u6210\u719f\u7684\u7f16\u7a0b\u8bed\u8a00\u6280\u672f\u548c\u5b9e\u8df5\u6765\u6539\u8fdb\u5bf9\u5927\u91cf\u7e41\u6742\u914d\u7f6e\u6bd4\u5982\u4e91\u539f\u751f Kubernetes \u914d\u7f6e\u573a\u666f\u7684\u7f16\u5199\uff0c\u81f4\u529b\u4e8e\u6784\u5efa\u56f4\u7ed5\u914d\u7f6e\u7684\u66f4\u597d\u7684\u6a21\u5757\u5316\u3001\u6269\u5c55\u6027\u548c\u7a33\u5b9a\u6027\uff0c\u66f4\u7b80\u5355\u7684\u903b\u8f91\u7f16\u5199\uff0c\u4ee5\u53ca\u66f4\u7b80\u5355\u7684\u81ea\u52a8\u5316\u548c\u751f\u6001\u5de5\u5177\u96c6\u6210\u3002",date:"2024-02-21T00:00:00.000Z",formattedDate:"2024\u5e742\u670821\u65e5",tags:[{label:"KCL",permalink:"/zh-CN/blog/tags/kcl"},{label:"Biweekly-Newsletter",permalink:"/zh-CN/blog/tags/biweekly-newsletter"}],readingTime:10.82,hasTruncateMarker:!1,authors:[{name:"KCL \u56e2\u961f",title:"KCL \u56e2\u961f"}],frontMatter:{slug:"2024-02-21-biweekly-newsletter",title:"KCL \u793e\u533a\u5f00\u6e90\u53cc\u5468\u62a5 (2024 01.19 - 2024.02.21) | KCL v0.7.5 \u7248\u672c\u548c Flux KCL \u96c6\u6210\u66f4\u65b0\u901f\u9012",authors:{name:"KCL \u56e2\u961f",title:"KCL \u56e2\u961f"},tags:["KCL","Biweekly-Newsletter"]},nextItem:{title:"KCL \u793e\u533a\u5f00\u6e90\u53cc\u5468\u62a5 (2024 01.04 - 2024.01.18) | KCL v0.7.4 \u7248\u672c\u53d1\u5e03\uff01",permalink:"/zh-CN/blog/2024-01-18-biweekly-newsletter"}},p={authorsImageUrls:[void 0]},k=[{value:"\u5185\u5bb9\u6982\u8ff0",id:"\u5185\u5bb9\u6982\u8ff0",level:2},{value:"\u7279\u522b\u9e23\u8c22",id:"\u7279\u522b\u9e23\u8c22",level:2},{value:"\u7cbe\u9009\u66f4\u65b0",id:"\u7cbe\u9009\u66f4\u65b0",level:2},{value:"Flux KCL \u96c6\u6210",id:"flux-kcl-\u96c6\u6210",level:3},{value:"\u5de5\u4f5c\u6d41\u7a0b",id:"\u5de5\u4f5c\u6d41\u7a0b",level:4},{value:"\u5177\u4f53\u6b65\u9aa4",id:"\u5177\u4f53\u6b65\u9aa4",level:4},{value:"1. \u914d\u7f6e Kubernetes",id:"1-\u914d\u7f6e-kubernetes",level:5},{value:"2. \u5b89\u88c5 Flux KCL Controller",id:"2-\u5b89\u88c5-flux-kcl-controller",level:5},{value:"3. \u914d\u7f6e\u9700\u8981\u6301\u7eed\u4ea4\u4ed8\u7684 Git \u4ed3\u5e93",id:"3-\u914d\u7f6e\u9700\u8981\u6301\u7eed\u4ea4\u4ed8\u7684-git-\u4ed3\u5e93",level:5},{value:"4. \u63d0\u4ea4\u4e1a\u52a1\u4ee3\u7801",id:"4-\u63d0\u4ea4\u4e1a\u52a1\u4ee3\u7801",level:5},{value:"5. \u914d\u7f6e\u81ea\u52a8\u66f4\u65b0",id:"5-\u914d\u7f6e\u81ea\u52a8\u66f4\u65b0",level:5},{value:"\u5176\u4ed6\u8d44\u6e90",id:"\u5176\u4ed6\u8d44\u6e90",level:2}],u={toc:k},s="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{src:l(37339).Z,width:"1127",height:"435"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang"},"KCL")," \u662f\u4e00\u4e2a CNCF \u57fa\u91d1\u4f1a\u6258\u7ba1\u7684\u57fa\u4e8e\u7ea6\u675f\u7684\u8bb0\u5f55\u53ca\u51fd\u6570\u8bed\u8a00\uff0c\u671f\u671b\u901a\u8fc7\u6210\u719f\u7684\u7f16\u7a0b\u8bed\u8a00\u6280\u672f\u548c\u5b9e\u8df5\u6765\u6539\u8fdb\u5bf9\u5927\u91cf\u7e41\u6742\u914d\u7f6e\u6bd4\u5982\u4e91\u539f\u751f Kubernetes \u914d\u7f6e\u573a\u666f\u7684\u7f16\u5199\uff0c\u81f4\u529b\u4e8e\u6784\u5efa\u56f4\u7ed5\u914d\u7f6e\u7684\u66f4\u597d\u7684\u6a21\u5757\u5316\u3001\u6269\u5c55\u6027\u548c\u7a33\u5b9a\u6027\uff0c\u66f4\u7b80\u5355\u7684\u903b\u8f91\u7f16\u5199\uff0c\u4ee5\u53ca\u66f4\u7b80\u5355\u7684\u81ea\u52a8\u5316\u548c\u751f\u6001\u5de5\u5177\u96c6\u6210\u3002"),(0,a.kt)("p",null,"\u672c\u680f\u76ee\u5c06\u4f1a\u53cc\u5468\u66f4\u65b0 KCL \u8bed\u8a00\u793e\u533a\u6700\u65b0\u52a8\u6001\uff0c\u5305\u62ec\u529f\u80fd\u3001\u5b98\u7f51\u66f4\u65b0\u548c\u6700\u65b0\u7684\u793e\u533a\u52a8\u6001\u7b49\uff0c\u5e2e\u52a9\u5927\u5bb6\u66f4\u597d\u5730\u4e86\u89e3 KCL \u793e\u533a\uff01"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"KCL \u5b98\u7f51\uff1a",(0,a.kt)("a",{parentName:"em",href:"https://kcl-lang.io"},"https://kcl-lang.io")))),(0,a.kt)("h2",{id:"\u5185\u5bb9\u6982\u8ff0"},"\u5185\u5bb9\u6982\u8ff0"),(0,a.kt)("p",null,"\u611f\u8c22\u6240\u6709\u8d21\u732e\u8005\u8fc7\u53bb\u4e24\u5468 (2024 01.19 - 2024.02.01) \u7684\u6770\u51fa\u5de5\u4f5c\uff0c\u4ee5\u4e0b\u662f\u91cd\u70b9\u5185\u5bb9\u6982\u8ff0"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\ud83d\udce6 \u6a21\u578b\u66f4\u65b0")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u65b0\u589e Podinfo \u5e94\u7528\u914d\u7f6e\u6a21\u578b\uff0c\u652f\u6301\u8bbe\u7f6e\u5916\u90e8\u52a8\u6001\u53c2\u6570\u5982 ",(0,a.kt)("inlineCode",{parentName:"li"},"replicas")," \u7b49\uff0c\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7\u4e00\u6761\u547d\u4ee4\u6e32\u67d3 Kubernetes \u8d44\u6e90\u914d\u7f6e\uff0c\u5e76\u4e14\u53ef\u4ee5\u5728\u6b64\u6a21\u578b\u7684\u57fa\u7840\u4e0a\u4fee\u6539\u5e76\u81ea\u5b9a\u4e49\u8d44\u6e90\u6a21\u7248")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kcl run oci://ghcr.io/kcl-lang/podinfo -D replicas=2\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\ud83c\udfc4 \u8bed\u8a00\u66f4\u65b0")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6539\u5584\u7f16\u8bd1\u65f6\u5bf9\u8c61\u5c5e\u6027\u627e\u4e0d\u5230\u7684\u62a5\u9519\u4fe1\u606f"),(0,a.kt)("li",{parentName:"ul"},"\u4fee\u590d Schema \u5bf9\u8c61\u5fc5\u9009\u5c5e\u6027\u9012\u5f52\u68c0\u67e5\u9519\u8bef"),(0,a.kt)("li",{parentName:"ul"},"\u63d0\u5347 Schema \u7d22\u5f15\u7b7e\u540d\u7c7b\u578b\u68c0\u67e5\u5065\u58ee\u6027")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\ud83d\udd27 \u5de5\u5177\u94fe\u66f4\u65b0")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u6587\u6863\u5de5\u5177\u66f4\u65b0")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u5728\u751f\u6210\u7684 Markdown \u683c\u5f0f\u6587\u6863\u5bf9\u591a\u884c\u5b57\u7b26\u4f7f\u7528 HTML \u8f6c\u4e49"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"CodeQL KCL \u5de5\u5177")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u521d\u6b65\u652f\u6301 CodeQL KCL dbschema \u5b9a\u4e49\u4ee5\u53ca\u5bf9 KCL \u8bed\u6cd5\u8bed\u4e49\u8fdb\u884c\u6570\u636e\u63d0\u53d6\uff0c\u5e76\u53ef\u901a\u8fc7 CodeQL \u8fdb\u884c\u6570\u636e\u67e5\u8be2\u5bf9 KCL \u4ee3\u7801\u8fdb\u884c\u9759\u6001\u5206\u6790\u548c\u626b\u63cf\uff0c\u63d0\u5347\u4ee3\u7801\u5b89\u5168")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\ud83d\udcbb IDE \u66f4\u65b0")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u8bed\u4e49\u9ad8\u4eae"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"KCL IDE \u4f18\u5316\u4e86\u8bed\u4e49\u9ad8\u4eae\u3002"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u9519\u8bef\u4fee\u590d"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4fee\u590d\u4e86\u5b57\u7b26\u4e32\u540e\u8ddf\u6ce8\u91ca\u4e2d\u8865\u5168\u9519\u8bef\u7684\u95ee\u9898"),(0,a.kt)("li",{parentName:"ul"},"\u4fee\u590d\u4e86 Schema \u5185\u90e8\u5c5e\u6027\u7b26\u53f7\u4e0d\u80fd\u8df3\u8f6c\u7684\u95ee\u9898")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\ud83c\udf81 API \u66f4\u65b0")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u65b0\u589e\u8bed\u6cd5\u548c\u8bed\u4e49\u5206\u6790 API \u7528\u4e8e\u5bf9 KCL \u4ee3\u7801\u8fdb\u884c\u5206\u6790"),(0,a.kt)("li",{parentName:"ul"},"\u65b0\u589e\u6784\u5efa\u4e8c\u8fdb\u5236\u4ea7\u7269 API \u7528\u4e8e\u7f13\u5b58\u7f16\u8bd1\u7ed3\u679c"),(0,a.kt)("li",{parentName:"ul"},"\u65b0\u589e\u8fd0\u884c\u4e8c\u8fdb\u5236\u4ea7\u7269 API \u7528\u4e8e\u76f4\u63a5\u8fd0\u884c\u7f16\u8bd1\u7ed3\u679c\uff0c\u907f\u514d\u91cd\u590d\u7f16\u8bd1\u5e76\u63d0\u5347\u6027\u80fd"),(0,a.kt)("li",{parentName:"ul"},"\u65b0\u589e\u4ee3\u7801\u751f\u6210 API \u4ee5\u7f16\u7a0b\u65b9\u5f0f\u5b9e\u73b0 KCL \u4ee3\u7801\u751f\u6210\u800c\u4e0d\u662f\u7f16\u5199\u590d\u6742\u7684\u6a21\u7248")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\ud83d\ude80 SDK \u66f4\u65b0")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"KCL Go SDK \u66f4\u65b0\u81f3 0.7.5 \u7248\u672c"),(0,a.kt)("li",{parentName:"ul"},"KCL Python SDK \u66f4\u65b0\u81f3 0.7.5 \u7248\u672c"),(0,a.kt)("li",{parentName:"ul"},"KCL Rust SDK \u66f4\u65b0\u81f3 0.7.5 \u7248\u672c"),(0,a.kt)("li",{parentName:"ul"},"KCL Java SDK \u65b0\u589e\u8bed\u6cd5\u6811\u3001\u4f5c\u7528\u57df\u3001\u7b26\u53f7\u7b49\u8bed\u6cd5\u8bed\u4e49\u7ed3\u6784\u5b9a\u4e49\u53ca\u76f8\u5173\u67e5\u8be2 API")),(0,a.kt)("p",null,"\u66f4\u591a\u5185\u5bb9\u8be6\u89c1: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/lib"},"https://github.com/kcl-lang/lib")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\ud83d\udea2 \u96c6\u6210\u66f4\u65b0")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9664\u4e86\u4f7f\u7528 ArgoCD KCL \u63d2\u4ef6\uff0cKCL \u73b0\u5728\u652f\u6301\u4f7f\u7528 KCL Flux Controller \u5bf9\u5b58\u50a8\u5728 Git \u4ed3\u5e93\u7684 KCL \u914d\u7f6e\u8fdb\u884c GitOps\uff0c\u8be6\u89c1 ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/kcl-lang/flux-kcl-controller"},"https://github.com/kcl-lang/flux-kcl-controller"),"\uff0c\u6b22\u8fce\u5171\u5efa \ud83d\udc4f")),(0,a.kt)("h2",{id:"\u7279\u522b\u9e23\u8c22"},"\u7279\u522b\u9e23\u8c22"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u6392\u540d\u4e0d\u5206\u5148\u540e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u611f\u8c22 @octonawish-akcodes \u5bf9 KCL \u4ee3\u7801\u6e05\u7406\u548c FAQ \u6587\u6863\u7684\u6301\u7eed\u8d21\u732e \ud83d\ude4c"),(0,a.kt)("li",{parentName:"ul"},"\u611f\u8c22 @satyazzz123 \u5bf9 KRM KCL \u652f\u6301\u8bfb\u53d6\u73af\u5883\u53d8\u91cf\u529f\u80fd\u7684\u8d21\u732e \ud83d\ude4c"),(0,a.kt)("li",{parentName:"ul"},"\u611f\u8c22 @AkashKumar7902 \u5bf9 KCL \u5305\u7ba1\u7406\u5de5\u5177\u529f\u80fd\u7684\u8d21\u732e \ud83d\ude4c"),(0,a.kt)("li",{parentName:"ul"},"\u611f\u8c22 @UtkarshUmre \u5bf9 KCL linux-arm64 \u6784\u5efa CI \u7684\u8d21\u732e \ud83d\ude4c"),(0,a.kt)("li",{parentName:"ul"},"\u611f\u8c22 @steeling, @rozaliev, @CloudZero357, @martingreber, @az, @Art3mK,@AdmiralNemo \u548c @Erick \u7b49\u5728\u8fd1\u4e24\u5468\u4f7f\u7528 KCL \u8fc7\u7a0b\u4e2d\u63d0\u4f9b\u7684\u5b9d\u8d35\u5efa\u8bae\u4e0e\u53cd\u9988 \ud83d\ude4c")),(0,a.kt)("h2",{id:"\u7cbe\u9009\u66f4\u65b0"},"\u7cbe\u9009\u66f4\u65b0"),(0,a.kt)("h3",{id:"flux-kcl-\u96c6\u6210"},"Flux KCL \u96c6\u6210"),(0,a.kt)("p",null,"\u5c06 KCL \u4e0e Flux \u7b49 GitOps \u5de5\u5177\u4e00\u8d77\u4f7f\u7528\u5177\u6709\u5982\u4e0b\u597d\u5904:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7 KCL \u8bed\u8a00\u7684\u62bd\u8c61\u80fd\u529b\u548c\u53ef\u7f16\u7a0b\u80fd\u529b\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec",(0,a.kt)("strong",{parentName:"li"},"\u7b80\u5316\u590d\u6742\u7684 Kubernetes \u90e8\u7f72\u914d\u7f6e\u6587\u4ef6"),"\uff0c\u964d\u4f4e\u624b\u52a8\u7f16\u5199 YAML \u6587\u4ef6\u7684\u9519\u8bef\u7387\uff0c\u5c06\u914d\u7f6e\u7ea6\u675f\u68c0\u67e5\u63a7\u5236\u5728\u7f16\u8bd1\u65f6\uff0c\u7f16\u5199\u5373\u611f\u77e5\u9519\u8bef\uff1b\u540c\u65f6\u53ef\u4ee5\u6d88\u9664\u591a\u4f59\u7684\u914d\u7f6e\u6a21\u7248\uff0c\u63d0\u5347\u591a\u73af\u5883\u591a\u79df\u6237\u7684\u914d\u7f6e\u6269\u5c55\u80fd\u529b\uff0c\u63d0\u9ad8\u914d\u7f6e\u7684\u53ef\u8bfb\u6027\u548c\u53ef\u7ef4\u62a4\u6027\u3002"),(0,a.kt)("li",{parentName:"ul"},"KCL \u5141\u8bb8\u5f00\u53d1\u4eba\u5458\u4ee5\u58f0\u660e\u5f0f\u7684\u65b9\u5f0f\u5b9a\u4e49\u5e94\u7528\u7a0b\u5e8f\u6240\u9700\u7684\u8d44\u6e90\uff0c\u901a\u8fc7\u5c06 KCL \u548c Flux \u76f8\u7ed3\u5408\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u66f4\u597d\u5730\u5b9e\u73b0",(0,a.kt)("strong",{parentName:"li"},"\u57fa\u7840\u8bbe\u65bd\u5373\u4ee3\u7801\uff08IaC\uff09"),"\uff0c\u63d0\u9ad8\u90e8\u7f72\u6548\u7387\uff0c\u7b80\u5316\u5e94\u7528\u7a0b\u5e8f\u7684\u914d\u7f6e\u7ba1\u7406\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Flux\uff0c\u5f00\u53d1\u4eba\u5458\u548c\u8fd0\u7ef4\u56e2\u961f\u53ef\u4ee5\u901a\u8fc7\u5206\u522b\u4fee\u6539\u5e94\u7528\u548c\u914d\u7f6e\u4ee3\u7801\u6765\u7ba1\u7406\u5e94\u7528\u7a0b\u5e8f\u7684\u90e8\u7f72\uff0cFlux Controller \u5c06\u81ea\u52a8\u540c\u6b65\u5bf9\u914d\u7f6e\u7684\u66f4\u6539\uff0c\u4ece\u800c\u5b9e\u73b0\u6301\u7eed\u90e8\u7f72\u5e76\u786e\u4fdd\u4e00\u81f4\u6027\u3002\u5982\u679c\u51fa\u73b0\u95ee\u9898\uff0c\u53ef\u4ee5\u5b9e\u73b0\u5feb\u901f\u56de\u6eda\u3002")),(0,a.kt)("h4",{id:"\u5de5\u4f5c\u6d41\u7a0b"},"\u5de5\u4f5c\u6d41\u7a0b"),(0,a.kt)("p",null,"\u5728\u6b64\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528\u4e00\u4e2a Python Flask \u5e94\u7528\u548c Github Actions \u4f5c\u4e3a CI \u793a\u4f8b\uff0c\u4f7f\u7528\u90e8\u7f72\u5728\u96c6\u7fa4\u4e2d Flux KCL Controller \u4f5c\u4e3a CD \u793a\u4f8b\uff0c\u4f7f\u7528 KCL \u5b9a\u4e49\u9700\u8981\u90e8\u7f72\u7684 Kubernetes \u8d44\u6e90"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u4f60\u53ef\u4ee5\u5728\u6b64\u65b9\u6848\u4e2d\u4f7f\u7528\u4efb\u4f55\u5bb9\u5668\u5316\u5e94\u7528\u4ee5\u53ca\u4e0d\u540c\u7684 CI \u548c CD \u7cfb\u7edf\u5982 Gitlab CI\uff0cJenkins CI\uff0cArgoCD \u7b49")),(0,a.kt)("p",null,"\u6211\u4eec\u5c06 Python Flask \u5e94\u7528\u4ee3\u7801\u548c\u914d\u7f6e\u4ee3\u7801\u5206\u6210\u4e24\u4e2a\u4ed3\u5e93\uff0c",(0,a.kt)("em",{parentName:"p"},"\u4ee5\u5b9e\u73b0\u4e0d\u540c\u89d2\u8272\u5982\u5f00\u53d1\u4eba\u5458\u548c\u8fd0\u7ef4\u56e2\u961f\u7684\u5173\u6ce8\u70b9\u5206\u79bb")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e1a\u52a1\u4ee3\u7801\u4ed3\u5e93: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/kcl-lang/flask-demo"},"https://github.com/kcl-lang/flask-demo")),(0,a.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u6e05\u5355\u4ed3\u5e93: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/kcl-lang/flask-demo-kcl-manifests"},"https://github.com/kcl-lang/flask-demo-kcl-manifests"))),(0,a.kt)("p",null,"\u6574\u4f53\u5de5\u4f5c\u6d41\u7a0b\u5982\u4e0b\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4ece Github \u62c9\u53d6\u5e94\u7528\u4ee3\u7801"),(0,a.kt)("li",{parentName:"ol"},"\u5e94\u7528\u4ee3\u7801\u5f00\u53d1\u5e76\u63d0\u4ea4\u5230\u63d0\u4ea4\u5230 GitHub \u5b58\u50a8\u5e93"),(0,a.kt)("li",{parentName:"ol"},"\u89e6\u53d1 GitHub Actions \u5bf9\u5e94\u7528\u4ee3\u7801\u8fdb\u884c\u7f16\u8bd1\uff0c\u751f\u6210\u5bb9\u5668\u955c\u50cf\uff0c\u5e76\u5c06\u5bb9\u5668\u955c\u50cf\u63a8\u9001\u5230 Docker Hub \u5bb9\u5668\u6ce8\u518c\u8868"),(0,a.kt)("li",{parentName:"ol"},"\u89e6\u53d1 GitHub Actions \u6839\u636e docker.io \u5bb9\u5668\u6ce8\u518c\u8868\u4e2d\u5bb9\u5668\u955c\u50cf\u7684\u7248\u672c\u53f7\u5e76\u540c\u6b65\u66f4\u65b0 KCL \u5b9a\u4e49\u7684 Kubernetes \u6e05\u5355\u90e8\u7f72\u6587\u4ef6"),(0,a.kt)("li",{parentName:"ol"},"Flux KCL Controller \u83b7\u53d6 KCL \u5b9a\u4e49\u7684 Kubernetes \u6e05\u5355\u66f4\u6539\u5e76\u66f4\u65b0\u90e8\u7f72\u81f3 Kubernetes \u96c6\u7fa4")),(0,a.kt)("h4",{id:"\u5177\u4f53\u6b65\u9aa4"},"\u5177\u4f53\u6b65\u9aa4"),(0,a.kt)("h5",{id:"1-\u914d\u7f6e-kubernetes"},"1. \u914d\u7f6e Kubernetes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b89\u88c5 ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/k3d-io/k3d"},"K3d")," \u5e76\u521b\u5efa\u4e00\u4e2a\u96c6\u7fa4")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"k3d cluster create\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u4f60\u53ef\u4ee5\u5728\u6b64\u65b9\u6848\u4e2d\u4f7f\u7528\u5176\u4ed6\u65b9\u5f0f\u521b\u5efa\u60a8\u81ea\u5df1\u7684 Kubernetes \u96c6\u7fa4\uff0c\u5982 kind, minikube \u7b49\u3002")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b89\u88c5 Kubectl"),(0,a.kt)("li",{parentName:"ul"},"\u5b89\u88c5 Kustomize")),(0,a.kt)("h5",{id:"2-\u5b89\u88c5-flux-kcl-controller"},"2. \u5b89\u88c5 Flux KCL Controller"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"flux-kcl-workflow",src:l(750).Z,width:"1498",height:"454"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/kcl-lang/flux-kcl-controller.git && cd flux-kcl-controller && make deploy\n")),(0,a.kt)("h5",{id:"3-\u914d\u7f6e\u9700\u8981\u6301\u7eed\u4ea4\u4ed8\u7684-git-\u4ed3\u5e93"},"3. \u914d\u7f6e\u9700\u8981\u6301\u7eed\u4ea4\u4ed8\u7684 Git \u4ed3\u5e93"),(0,a.kt)("p",null,"\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"gitrepo.yaml")," \u6587\u4ef6\uff0c\u5b9a\u4e49 ",(0,a.kt)("inlineCode",{parentName:"p"},"GitRepository")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"KCLRun")," \u5bf9\u8c61\uff0c\u7528\u6765\u914d\u7f6e\u76d1\u63a7\u9700\u8981\u6301\u7eed\u4ea4\u4ed8\u7684 Git \u4ed3\u5e93\u4ee5\u53ca\u8fd0\u884c KCL \u914d\u7f6e\u6240\u9700\u7684\u989d\u5916\u53c2\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: source.toolkit.fluxcd.io/v1\nkind: GitRepository\nmetadata:\n  name: kcl-deployment\n  namespace: default\nspec:\n  interval: 10s # \u6bcf\u9694 10s \u68c0\u67e5\u4e00\u6b21\u4ed3\u5e93\n  url: https://github.com/kcl-lang/flask-demo-kcl-manifests.git\n  ref:\n    branch: main # \u76d1\u63a7 main \u5206\u652f\n---\napiVersion: krm.kcl.dev.fluxcd/v1alpha1\nkind: KCLRun\nmetadata:\n  name: kcl-git-controller\n  namespace: default\nspec:\n  sourceRef:\n    kind: GitRepository\n    name: kcl-deployment\n")),(0,a.kt)("p",null,"\u4f7f\u7528\u547d\u4ee4 ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl apply -f gitrepo.yaml")," \u5c06\u8be5\u5bf9\u8c61\u90e8\u7f72\u5230\u96c6\u7fa4\u4e2d\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u60a8\u4f7f\u7528\u7684\u662f\u79c1\u6709\u5b58\u50a8\u5e93\uff0c\u9700\u8981\u4f7f\u7528\u79c1\u94a5\u51ed\u636e\u914d\u7f6e\u4e13\u7528\u79c1\u6709\u5b58\u50a8\u5e93\u8bbf\u95ee\u6743\u9650\u3002\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"https://fluxcd.io/flux/components/source/gitrepositories/"},"\u8fd9\u91cc"),"\u4ee5\u83b7\u53d6\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u4f60\u4e5f\u53ef\u4ee5\u5728\u6b64\u65b9\u6848\u4e2d\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://fluxcd.io/flux/components/source/ocirepositories/"},"OCIRepository"),"\uff0c\u5bf9\u6587\u7ae0\u5f00\u5934\u63d0\u5230\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"oci://ghcr.io/kcl-lang/podinfo")," \u914d\u7f6e\u5305\u8fdb\u884c\u6301\u7eed\u4ea4\u4ed8\uff0c\u6bd4\u5982\u4e0b\u9762\u7684\u914d\u7f6e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: source.toolkit.fluxcd.io/v1beta2\nkind: OCIRepository\nmetadata:\n  name: podinfo\n  namespace: default\nspec:\n  interval: 5m0s\n  url: oci://ghcr.io/kcl-lang/podinfo\n  ref:\n    tag: latest\n---\napiVersion: krm.kcl.dev.fluxcd/v1alpha1\nkind: KCLRun\nmetadata:\n  name: kcl-git-controller\n  namespace: default\nspec:\n  sourceRef:\n    kind: OCIRepository\n    name: podinfo\n")),(0,a.kt)("h5",{id:"4-\u63d0\u4ea4\u4e1a\u52a1\u4ee3\u7801"},"4. \u63d0\u4ea4\u4e1a\u52a1\u4ee3\u7801"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u4ee3\u7801")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/kcl-lang/flask-demo.git/\ncd flask-demo\n")),(0,a.kt)("p",null,"flask-demo \u4ed3\u5e93\u63d0\u4ea4\u4ee3\u7801\u540e\uff0cGithub \u4f1a\u81ea\u52a8\u6784\u5efa\u5bb9\u5668\u955c\u50cf\uff0c\u5e76\u5c06\u5236\u54c1\u63a8\u9001\u5230 Docker hub \u4e2d\uff0c\u4f1a\u518d\u89e6\u53d1 flask-demo-kcl-manifests \u4ed3\u5e93\u7684 Action\uff0c",(0,a.kt)("a",{parentName:"p",href:"/docs/user_docs/guides/automation"},"\u901a\u8fc7 KCL \u81ea\u52a8\u5316 API")," \u4fee\u6539\u90e8\u7f72\u6e05\u5355\u4ed3\u5e93\u4e2d\u7684\u955c\u50cf\u5730\u5740\u3002\u73b0\u5728\u8ba9\u6211\u4eec\u4e3a flask-demo \u4ed3\u5e93\u521b\u5efa\u4e00\u4e2a\u63d0\u4ea4\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u4ee3\u7801\u63d0\u4ea4\u540e\u89e6\u53d1\u4e1a\u52a1\u4ed3\u5e93 Github CI \u6d41\u7a0b"),(0,a.kt)("p",null,(0,a.kt)("img",{src:l(4991).Z,width:"2252",height:"1038"})),(0,a.kt)("h5",{id:"5-\u914d\u7f6e\u81ea\u52a8\u66f4\u65b0"},"5. \u914d\u7f6e\u81ea\u52a8\u66f4\u65b0"),(0,a.kt)("p",null,"\u5f53\u4e1a\u52a1\u4ed3\u5e93 Github CI \u6d41\u7a0b\u6267\u884c\u5b8c\u6210\u540e\uff0c\u4f1a\u81ea\u52a8\u5728\u5b58\u653e KCL \u8d44\u6e90\u914d\u7f6e\u7684\u4ed3\u5e93\u89e6\u53d1\u4e00\u4e2a CI \u81ea\u52a8\u66f4\u65b0\u914d\u7f6e\u5e76\u63d0\u4ea4\u5230 flask-demo-kcl-manifests main \u5206\u652f\uff0ccommit \u4fe1\u606f\u5982\u4e0b"),(0,a.kt)("p",null,(0,a.kt)("img",{src:l(47725).Z,width:"2240",height:"1090"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6211\u4eec\u53ef\u4ee5\u83b7\u5f97\u90e8\u7f72\u6e05\u5355\u6e90\u7801\u8fdb\u884c\u7f16\u8bd1\u9a8c\u8bc1")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/kcl-lang/flask-demo-kcl-manifests.git/\ncd flask-demo-kcl-manifests\ngit checkout main && git pull && kcl\n")),(0,a.kt)("p",null,"\u8f93\u51fa YAML \u4e3a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: flask_demo\n  labels:\n    app: flask_demo\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: flask_demo\n  template:\n    metadata:\n      labels:\n        app: flask_demo\n    spec:\n      containers:\n        - name: flask_demo\n          image: "kcllang/flask_demo:6428cff4309afc8c1c40ad180bb9cfd82546be3e"\n          ports:\n            - protocol: TCP\n              containerPort: 5000\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: flask_demo\n  labels:\n    app: flask_demo\nspec:\n  type: NodePort\n  selector:\n    app: flask_demo\n  ports:\n    - port: 5000\n      protocol: TCP\n      targetPort: 5000\n')),(0,a.kt)("p",null,"\u4ece\u4e0a\u8ff0\u914d\u7f6e\u53ef\u4ee5\u770b\u51fa\u8d44\u6e90\u7684\u955c\u50cf\u786e\u5b9e\u81ea\u52a8\u66f4\u65b0\u4e3a\u4e86\u65b0\u6784\u5efa\u7684\u955c\u50cf\u5185\u5bb9\u3002\u540c\u65f6 Flux KCL Controller \u4f1a\u81ea\u52a8\u62c9\u53d6\u914d\u7f6e\u5e76\u66f4\u65b0\u5230\u96c6\u7fa4\uff0c\u8fd9\u6837\u5c31\u5b9e\u73b0\u4e86\u4e1a\u52a1\u4ee3\u7801\u63d0\u4ea4\u5e76\u90e8\u7f72 Kubernetes \u7684 e2e \u5b8c\u6574\u81ea\u52a8\u5316\u6d41\u7a0b\uff0c\u6bcf\u6b21\u53ea\u9700\u63d0\u4ea4\u4e1a\u52a1\u4ee3\u7801\u5373\u53ef\uff0c\u5f53\u7136\u53ef\u4ee5\u8fdb\u4e00\u6b65\u642d\u914d Flagger \u5b9e\u73b0\u591a\u79cd\u90e8\u7f72\u7b56\u7565\u5982\u91d1\u4e1d\u96c0\u53d1\u5e03\u3001\u84dd\u7eff\u53d1\u5e03\u7b49\u3002"),(0,a.kt)("h2",{id:"\u5176\u4ed6\u8d44\u6e90"},"\u5176\u4ed6\u8d44\u6e90"),(0,a.kt)("p",null,"\u2764\ufe0f \u611f\u8c22\u6240\u6709 KCL \u7528\u6237\u548c\u793e\u533a\u5c0f\u4f19\u4f34\u5728\u793e\u533a\u4e2d\u63d0\u51fa\u7684\u5b9d\u8d35\u53cd\u9988\u4e0e\u5efa\u8bae\u3002\u540e\u7eed\u6211\u4eec\u4f1a\u53d1\u5e03\u66f4\u591a KCL \u4e91\u539f\u751f\u6a21\u578b\u548c\u5de5\u5177\u96c6\u6210\u6587\u7ae0\uff0c\u656c\u8bf7\u671f\u5f85! \u67e5\u770b ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"https://github.com/kcl-lang/community"},"KCL \u793e\u533a"))," \u52a0\u5165\u6211\u4eec\u3002"),(0,a.kt)("p",null,"\u66f4\u591a\u5176\u4ed6\u8d44\u6e90\u8bf7\u53c2\u8003\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kcl-lang.io/"},"KCL \u7f51\u7ad9")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kusionstack.io/"},"KusionStack \u7f51\u7ad9")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/kcl-lang/kcl/milestone/8"},"KCL v0.8.0 Milestone"))))}m.isMDXComponent=!0},37339:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/biweekly-newsletter-zh-bd4cf8c2bcc913a580e7b0e5d6691a08.png"},750:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/flux-kcl-workflow-2034d3f8dd5679d0a74f94d8067e8110.png"},4991:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/app-ci-8be610b01c177f72ff2f2f617b7305bd.png"},47725:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/image-auto-update-514f27b74172b114a5dc877e98fd88f4.png"}}]);