"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[53730],{3905:(e,t,l)=>{l.d(t,{Zo:()=>o,kt:()=>h});var a=l(67294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function n(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?n(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):n(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function p(e,t){if(null==e)return{};var l,a,r=function(e,t){if(null==e)return{};var l,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)l=n[a],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)l=n[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},o=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var l=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),u=c(l),m=r,h=u["".concat(s,".").concat(m)]||u[m]||k[m]||n;return l?a.createElement(h,i(i({ref:t},o),{},{components:l})):a.createElement(h,i({ref:t},o))}));function h(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=l.length,i=new Array(n);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var c=2;c<n;c++)i[c]=l[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,l)}m.displayName="MDXCreateElement"},38992:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>n,metadata:()=>p,toc:()=>c});var a=l(87462),r=(l(67294),l(3905));const n={slug:"2023-11-08-biweekly-newsletter",title:"KCL \u793e\u533a\u5f00\u6e90\u53cc\u5468\u62a5 (2023 10.26 - 11.08) | \u8d85\u591a IDE \u4f53\u9a8c\u63d0\u5347\u548c\u5f00\u7bb1\u5373\u7528\u7684\u6a21\u578b",authors:{name:"KCL \u56e2\u961f",title:"KCL \u56e2\u961f"},tags:["KCL","Biweekly-Newsletter"]},i=void 0,p={permalink:"/zh-CN/blog/2023-11-08-biweekly-newsletter",editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/blog/2023-11-08-biweekly-newsletter/index.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2023-11-08-biweekly-newsletter/index.md",title:"KCL \u793e\u533a\u5f00\u6e90\u53cc\u5468\u62a5 (2023 10.26 - 11.08) | \u8d85\u591a IDE \u4f53\u9a8c\u63d0\u5347\u548c\u5f00\u7bb1\u5373\u7528\u7684\u6a21\u578b",description:"KCL \u662f\u4e00\u4e2a CNCF \u57fa\u91d1\u4f1a\u6258\u7ba1\u7684\u57fa\u4e8e\u7ea6\u675f\u7684\u8bb0\u5f55\u53ca\u51fd\u6570\u8bed\u8a00\u5e76\u901a\u8fc7\u6210\u719f\u7684\u7f16\u7a0b\u8bed\u8a00\u6280\u672f\u548c\u5b9e\u8df5\u6765\u6539\u8fdb\u5bf9\u5927\u91cf\u7e41\u6742\u914d\u7f6e\u6bd4\u5982\u4e91\u539f\u751f Kubernetes \u914d\u7f6e\u573a\u666f\u7684\u7f16\u5199\uff0c\u81f4\u529b\u4e8e\u6784\u5efa\u56f4\u7ed5\u914d\u7f6e\u7684\u66f4\u597d\u7684\u6a21\u5757\u5316\u3001\u6269\u5c55\u6027\u548c\u7a33\u5b9a\u6027\uff0c\u66f4\u7b80\u5355\u7684\u903b\u8f91\u7f16\u5199\uff0c\u4ee5\u53ca\u66f4\u7b80\u5355\u7684\u81ea\u52a8\u5316\u548c\u751f\u6001\u5de5\u5177\u96c6\u6210\u3002",date:"2023-11-08T00:00:00.000Z",formattedDate:"2023\u5e7411\u67088\u65e5",tags:[{label:"KCL",permalink:"/zh-CN/blog/tags/kcl"},{label:"Biweekly-Newsletter",permalink:"/zh-CN/blog/tags/biweekly-newsletter"}],readingTime:5.075,hasTruncateMarker:!1,authors:[{name:"KCL \u56e2\u961f",title:"KCL \u56e2\u961f"}],frontMatter:{slug:"2023-11-08-biweekly-newsletter",title:"KCL \u793e\u533a\u5f00\u6e90\u53cc\u5468\u62a5 (2023 10.26 - 11.08) | \u8d85\u591a IDE \u4f53\u9a8c\u63d0\u5347\u548c\u5f00\u7bb1\u5373\u7528\u7684\u6a21\u578b",authors:{name:"KCL \u56e2\u961f",title:"KCL \u56e2\u961f"},tags:["KCL","Biweekly-Newsletter"]},prevItem:{title:"\u5feb\u6765\u770b\u770b\uff0c\u8fd9\u91cc\u6709\u4f60\u9700\u8981\u7684 Kubernetes \u6a21\u578b\uff01",permalink:"/zh-CN/blog/2023-11-20-search-k8s-module-on-artifacthub"},nextItem:{title:"KCL \u793e\u533a\u5f00\u6e90\u53cc\u5468\u62a5 (2023 10.12 - 10.25) | IDE \u63d2\u4ef6\u652f\u6301\u5f15\u7528\u67e5\u627e\u3001\u5305\u7ba1\u7406\u96c6\u6210 ArtifactHub",permalink:"/zh-CN/blog/2023-10-25-biweekly-newsletter"}},s={authorsImageUrls:[void 0]},c=[{value:"\u5185\u5bb9\u6982\u8ff0",id:"\u5185\u5bb9\u6982\u8ff0",level:2},{value:"\u7279\u522b\u9e23\u8c22",id:"\u7279\u522b\u9e23\u8c22",level:2},{value:"\u7cbe\u9009\u66f4\u65b0",id:"\u7cbe\u9009\u66f4\u65b0",level:2},{value:"KCL IDE \u63d2\u4ef6\u66f4\u65b0",id:"kcl-ide-\u63d2\u4ef6\u66f4\u65b0",level:3},{value:"KCL \u5305\u7ba1\u7406\u5de5\u5177",id:"kcl-\u5305\u7ba1\u7406\u5de5\u5177",level:3},{value:"KCL \u8bed\u8a00\u66f4\u65b0",id:"kcl-\u8bed\u8a00\u66f4\u65b0",level:3},{value:"KCL \u5bfc\u5165\u5de5\u5177",id:"kcl-\u5bfc\u5165\u5de5\u5177",level:3},{value:"\u5176\u4ed6\u8d44\u6e90",id:"\u5176\u4ed6\u8d44\u6e90",level:2}],o={toc:c},u="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{src:l(37339).Z,width:"1127",height:"435"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang"},"KCL")," \u662f\u4e00\u4e2a CNCF \u57fa\u91d1\u4f1a\u6258\u7ba1\u7684\u57fa\u4e8e\u7ea6\u675f\u7684\u8bb0\u5f55\u53ca\u51fd\u6570\u8bed\u8a00\u5e76\u901a\u8fc7\u6210\u719f\u7684\u7f16\u7a0b\u8bed\u8a00\u6280\u672f\u548c\u5b9e\u8df5\u6765\u6539\u8fdb\u5bf9\u5927\u91cf\u7e41\u6742\u914d\u7f6e\u6bd4\u5982\u4e91\u539f\u751f Kubernetes \u914d\u7f6e\u573a\u666f\u7684\u7f16\u5199\uff0c\u81f4\u529b\u4e8e\u6784\u5efa\u56f4\u7ed5\u914d\u7f6e\u7684\u66f4\u597d\u7684\u6a21\u5757\u5316\u3001\u6269\u5c55\u6027\u548c\u7a33\u5b9a\u6027\uff0c\u66f4\u7b80\u5355\u7684\u903b\u8f91\u7f16\u5199\uff0c\u4ee5\u53ca\u66f4\u7b80\u5355\u7684\u81ea\u52a8\u5316\u548c\u751f\u6001\u5de5\u5177\u96c6\u6210\u3002"),(0,r.kt)("p",null,"\u672c\u680f\u76ee\u5c06\u4f1a\u53cc\u5468\u66f4\u65b0 KCL \u8bed\u8a00\u793e\u533a\u6700\u65b0\u52a8\u6001\uff0c\u5305\u62ec\u529f\u80fd\u3001\u5b98\u7f51\u66f4\u65b0\u548c\u6700\u65b0\u7684\u793e\u533a\u52a8\u6001\u7b49\uff0c\u5e2e\u52a9\u5927\u5bb6\u66f4\u597d\u5730\u4e86\u89e3 KCL \u793e\u533a\uff01"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"KCL \u5b98\u7f51\uff1a",(0,r.kt)("a",{parentName:"em",href:"https://kcl-lang.io"},"https://kcl-lang.io")))),(0,r.kt)("h2",{id:"\u5185\u5bb9\u6982\u8ff0"},"\u5185\u5bb9\u6982\u8ff0"),(0,r.kt)("p",null,"\u611f\u8c22\u6240\u6709\u8d21\u732e\u8005\u8fc7\u53bb\u4e24\u5468 (2023 10.26 - 11.08) \u7684\u6770\u51fa\u5de5\u4f5c\uff0c\u4ee5\u4e0b\u662f\u91cd\u70b9\u5408\u5e76\u5185\u5bb9\u6982\u8ff0"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\ud83d\udd27 \u8bed\u8a00\u53ca\u5de5\u5177\u94fe\u66f4\u65b0")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"KCL IDE \u66f4\u65b0 - \u66f4\u667a\u80fd\u7684\u914d\u7f6e\u503c\u8865\u5168\u3001\u5c5e\u6027\u5217\u8868\u8865\u5168\u3001\u51fd\u6570\u53c2\u6570\u8865\u5168\u3001\u5185\u7f6e\u5305\u5f15\u7528\u8865\u5168\u548c docstring \u8865\u5168\u7b49"),(0,r.kt)("li",{parentName:"ul"},"KCL \u5305\u7ba1\u7406\u5de5\u5177 KPM \u66f4\u65b0 - \u66f4\u6d41\u7545\u7684\u521b\u5efa\u3001\u53d1\u5e03 KCL \u5305\u7684\u5de5\u4f5c\u6d41\uff1a\u652f\u6301\u57fa\u4e8e\u7248\u672c\u7cfb\u7edf\u7684\u5305\u66f4\u65b0\u548c\u53d1\u5e03\u7684\u81ea\u52a8\u5316\u6d41\u7a0b\uff1b\u6b64\u5916\uff0c\u73b0\u5df2\u5141\u8bb8\u5bf9KCL\u5305\u7684\u5143\u4fe1\u606f\u81ea\u5b9a\u4e49\u914d\u7f6e"),(0,r.kt)("li",{parentName:"ul"},"KCL \u6a21\u578b\u66f4\u65b0 - \u5f00\u7bb1\u5373\u7528\u7684 KCL \u6a21\u578b\u65b0\u589e\u81f3 120+"),(0,r.kt)("li",{parentName:"ul"},"KCL \u8bed\u8a00\u66f4\u65b0 - \u4f18\u5316\u4e86 schema \u5b57\u6bb5\u7c7b\u578b\u4e0d\u5339\u914d\u7684\u62a5\u9519\u4fe1\u606f\uff0c\u652f\u6301 lambda \u7c7b\u578b\u6ce8\u89e3\uff0c\u4ee5\u53ca\u4e2a\u522b\u7f16\u8bd1\u95ee\u9898\u4fee\u590d\uff1b\u7cfb\u7edf\u5e93\u652f\u6301\u5bf9 JSON/YAML \u5b57\u7b26\u4e32\u7684\u9a8c\u8bc1\u3001\u5e8f\u5217\u5316\u548c\u53cd\u5e8f\u5217\u5316"),(0,r.kt)("li",{parentName:"ul"},"KCL \u5bfc\u5165\u5de5\u5177\u53d1\u5e03\uff1a\u652f\u6301\u4ece YAML/JSON/CRD/Terraform Schema \u4e00\u952e\u751f\u6210 KCL \u914d\u7f6e/\u6a21\u578b\uff0c\u5b9e\u73b0\u81ea\u52a8\u5316\u8fc1\u79fb")),(0,r.kt)("h2",{id:"\u7279\u522b\u9e23\u8c22"},"\u7279\u522b\u9e23\u8c22"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u6392\u540d\u4e0d\u5206\u5148\u540e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u611f\u8c22 @jakezhu9 \u5bf9 KCL benchmark \u7531\u5355\u7ebf\u7a0b Rc \u5230 Arc \u7684\u6539\u8fdb\uff0c\u5bf9 KCL \u5bfc\u5165\u5de5\u5177\u4e2d\u5173\u4e8e\u5f15\u7528\u8def\u5f84\u7684 bug\u4fee\u590d \ud83d\ude4c ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("a",{parentName:"em",href:"https://github.com/kcl-lang/kcl-go/pull/170"},"https://github.com/kcl-lang/kcl-go/pull/170"))," \u7b49"),(0,r.kt)("li",{parentName:"ul"},"\u611f\u8c22 @liangyuanpeng \u4e3a KCL \u6a21\u578b\u8d21\u732e karmada \u6a21\u578b\u5305\uff0c\u6b22\u8fce\uff01\ud83d\ude4c ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("a",{parentName:"em",href:"https://github.com/kcl-lang/artifacthub/pull/48/files"},"https://github.com/kcl-lang/artifacthub/pull/48/files"))),(0,r.kt)("li",{parentName:"ul"},"\u6b64\u5916\uff0c\u611f\u8c22 @Matt Gowie, @ddh \u5bf9 KCL \u7684\u5173\u6ce8\u548c\u5b9d\u8d35\u53cd\u9988 \ud83d\ude4c")),(0,r.kt)("h2",{id:"\u7cbe\u9009\u66f4\u65b0"},"\u7cbe\u9009\u66f4\u65b0"),(0,r.kt)("h3",{id:"kcl-ide-\u63d2\u4ef6\u66f4\u65b0"},"KCL IDE \u63d2\u4ef6\u66f4\u65b0"),(0,r.kt)("p",null,"KCL IDE \u63d2\u4ef6\u57fa\u4e8e\u65b0\u589e\u4e86\u5927\u91cf\u8865\u5168\u63d0\u793a\uff0c\u91cd\u70b9\u9488\u5bf9",(0,r.kt)("strong",{parentName:"p"},"\u914d\u7f6e\u5b9a\u4e49"),"\u8fd9\u4e00\u6838\u5fc3\u73af\u8282\uff0c\u7b80\u5316\u7528\u6237\u57fa\u4e8e\u6a21\u578b\u7f16\u5199\u914d\u7f6e\u7684\u5fc3\u667a\u3001\u63d0\u5347\u914d\u7f6e\u7f16\u8f91\u7684\u6548\u7387\u3002\u6b64\u5916\uff0c\u589e\u5f3a\u4e86\u8c03\u7528\u5185\u7f6e\u51fd\u6570\u65f6\u53c2\u6570\u8865\u5168\u3002talk is cheap\uff0c\u6211\u4eec\u76f4\u63a5\u6765\u770b\u6548\u679c\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{src:l(7550).Z,width:"850",height:"401"})),(0,r.kt)("p",null,(0,r.kt)("img",{src:l(79905).Z,width:"640",height:"302"})),(0,r.kt)("p",null,"\u800c\u5bf9\u4e8e",(0,r.kt)("strong",{parentName:"p"},"\u6a21\u578b\u8bbe\u8ba1"),"\u73af\u8282\uff0c\u4e5f\u65b0\u589e\u4e86\u5bf9 docstring \u7684\u5feb\u901f\u751f\u6210\uff0c\u51cf\u5c11\u624b\u6572 boilerplate\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{src:l(98261).Z,width:"1023",height:"728"})),(0,r.kt)("h3",{id:"kcl-\u5305\u7ba1\u7406\u5de5\u5177"},"KCL \u5305\u7ba1\u7406\u5de5\u5177"),(0,r.kt)("p",null,"\u5305\u7ba1\u7406\u5de5\u5177\u73b0\u5df2\u4e32\u8054\u8d77 KCL \u5305\u521b\u5efa-\u66f4\u65b0-\u4ee3\u7801\u5ba1\u67e5-\u53d1\u5e03\u7684\u6838\u5fc3\u5de5\u4f5c\u6d41\uff0c\u5e76\u57fa\u4e8e\u6b64\u65b0\u589e\u5f00\u7bb1\u5373\u7528\u7684 KCL \u6a21\u578b\u5305\u81f3 120+\uff0c\u7528\u6237\u53ef\u53c2\u7167",(0,r.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/user_docs/guides/working-with-k8s/publish-modules/"},"\u7f16\u5199\u5e76\u53d1\u5e03 Kubernetes KCL \u4ee3\u7801\u5305")," \u5373\u523b\u4f7f\u7528\u3002"),(0,r.kt)("h3",{id:"kcl-\u8bed\u8a00\u66f4\u65b0"},"KCL \u8bed\u8a00\u66f4\u65b0"),(0,r.kt)("p",null,"KCL \u7684\u7f16\u8bd1\u547d\u4ee4\u5bf9\u9519\u8bef\u4fe1\u606f\u7684\u8f93\u51fa\u4f18\u5316\u7ee7\u7eed\u63a8\u8fdb\uff0c\u81f4\u529b\u4e8e\u63d0\u4f9b\u6e05\u6670\u6613\u61c2\u7684\u6307\u5f15\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u5feb\u901f\u5b9a\u4f4d\u548c\u4fee\u590d\u95ee\u9898\uff0c\u7f16\u5199\u51fa\u6b63\u786e\u7684\u4ee3\u7801\u3002\u8fd1\u671f\uff0cKCL \u4f18\u5316\u4e86 schema \u5b57\u6bb5\u7c7b\u578b\u4e0d\u5339\u914d\u7684\u62a5\u9519\u4fe1\u606f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"before:\n",(0,r.kt)("img",{src:l(47638).Z,width:"1080",height:"185"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"after:\n",(0,r.kt)("img",{src:l(76666).Z,width:"1080",height:"320"})))),(0,r.kt)("p",null,"\u6b64\u5916\uff0c\u8fd8\u652f\u6301\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"-\u2014recursive")," \u9009\u9879\u5141\u8bb8 kcl \u9012\u5f52\u7f16\u8bd1\u5b50\u76ee\u5f55\uff0c\u652f\u6301\u5728 lambda \u8868\u8fbe\u5f0f\u4e2d\u6dfb\u52a0\u7c7b\u578b\u6ce8\u89e3\uff0c\u7cfb\u7edf\u5e93\u652f\u6301\u4e86\u5bf9 JSON/YAML \u5b57\u7b26\u4e32\u7684\u9a8c\u8bc1\u3001\u5e8f\u5217\u5316\u548c\u53cd\u5e8f\u5217\u5316\uff1b\u4fee\u590d\u4e86\u5e26\u6709\u4e09\u65b9\u5e93\u7684 KCL \u7a0b\u5e8f\u7f13\u5b58\u5931\u6548\u7684\u95ee\u9898\uff1b\u4fee\u590d\u4e86\u7f16\u8bd1\u5165\u5e93\u6587\u4ef6\u8de8 kcl.mod \u60c5\u51b5\u4e0b\u7684\u8def\u5f84\u51b2\u7a81\u9519\u8bef\uff1b\u4fee\u590d KCL \u51fd\u6570\u9ed8\u8ba4\u503c\u8bed\u4e49\u68c0\u67e5\u9519\u8bef\u7b49\u3002"),(0,r.kt)("h3",{id:"kcl-\u5bfc\u5165\u5de5\u5177"},"KCL \u5bfc\u5165\u5de5\u5177"),(0,r.kt)("p",null,"\u652f\u6301\u4ece YAML/JSON/CRD/Terraform Schema \u4e00\u952e\u751f\u6210 KCL \u914d\u7f6e/\u6a21\u578b\uff0c\u5b9e\u73b0\u81ea\u52a8\u5316\u8fc1\u79fb\uff0c\u76f8\u5173\u6307\u5357\u8bf7\u53c2\u7167",(0,r.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/user_docs/guides/working-with-k8s/adopt-from-kubernetes"},"\u4e00\u952e\u4ece Kubernetes \u751f\u6001\u8fc1\u79fb\u5230 KCL")),(0,r.kt)("h2",{id:"\u5176\u4ed6\u8d44\u6e90"},"\u5176\u4ed6\u8d44\u6e90"),(0,r.kt)("p",null,"\u2764\ufe0f \u611f\u8c22\u6240\u6709 KCL \u7528\u6237\u548c\u793e\u533a\u5c0f\u4f19\u4f34\u5728\u793e\u533a\u4e2d\u63d0\u51fa\u7684\u5b9d\u8d35\u53cd\u9988\u4e0e\u5efa\u8bae\u3002\u9884\u8ba1 11 \u6708\u5e95\u6211\u4eec\u4f1a\u6b63\u5f0f\u53d1\u5e03 KCL v0.7 \u65b0\u7248\u672c\uff0c\u656c\u8bf7\u671f\u5f85!"),(0,r.kt)("p",null,"\u66f4\u591a\u5176\u4ed6\u8d44\u6e90\u8bf7\u53c2\u8003\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://kcl-lang.io/"},"KCL \u7f51\u7ad9"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://kusionstack.io/"},"KusionStack \u7f51\u7ad9"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/community/release-policy/roadmap"},"KCL 2023 \u8def\u7ebf\u89c4\u5212"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl/milestone/7"},"KCL v0.7.0 Milestone"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl/issues"},"KCL Github Issues"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/orgs/kcl-lang/discussions"},"KCL Github Discussion"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/community"},"KCL Community")))))}k.isMDXComponent=!0},37339:(e,t,l)=>{l.d(t,{Z:()=>a});const a=l.p+"assets/images/biweekly-newsletter-zh-bd4cf8c2bcc913a580e7b0e5d6691a08.png"},79905:(e,t,l)=>{l.d(t,{Z:()=>a});const a=l.p+"assets/images/config-completion-99e49bbda5b33f7ff7fb3ecb54050d82.gif"},98261:(e,t,l)=>{l.d(t,{Z:()=>a});const a=l.p+"assets/images/docstring-gen-882f1ecbd5845a659b1f0623b58ccb13.gif"},7550:(e,t,l)=>{l.d(t,{Z:()=>a});const a=l.p+"assets/images/module-function-completion-bee0f3843b5a931de523f25776bbb7a6.gif"},76666:(e,t,l)=>{l.d(t,{Z:()=>a});const a=l.p+"assets/images/schema-expr-type-error-after-5c78dffcaec4e93ed2770080dd198e64.png"},47638:(e,t,l)=>{l.d(t,{Z:()=>a});const a=l.p+"assets/images/schema-expr-type-error-before-fbb3b4d4a2222f4cb1418a1075f2582f.png"}}]);