"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[50584],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var l=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=l.createContext({}),s=function(e){var t=l.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return l.createElement(c.Provider,{value:t},e.children)},o="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),o=s(a),m=n,h=o["".concat(c,".").concat(m)]||o[m]||k[m]||r;return a?l.createElement(h,i(i({ref:t},u),{},{components:a})):l.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[o]="string"==typeof e?e:n,i[1]=p;for(var s=2;s<r;s++)i[s]=a[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}m.displayName="MDXCreateElement"},64711:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var l=a(87462),n=(a(67294),a(3905));const r={slug:"2023-10-25-biweekly-newsletter",title:"KCL \u793e\u533a\u5f00\u6e90\u53cc\u5468\u62a5 (2023 10.12 - 10.25) | IDE \u63d2\u4ef6\u652f\u6301\u5f15\u7528\u67e5\u627e\u3001\u5305\u7ba1\u7406\u96c6\u6210 ArtifactHub",authors:{name:"KCL \u56e2\u961f",title:"KCL \u56e2\u961f"},tags:["KCL","Biweekly-Newsletter"]},i=void 0,p={permalink:"/zh-CN/blog/2023-10-25-biweekly-newsletter",editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/blog/2023-10-25-biweekly-newsletter/index.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2023-10-25-biweekly-newsletter/index.md",title:"KCL \u793e\u533a\u5f00\u6e90\u53cc\u5468\u62a5 (2023 10.12 - 10.25) | IDE \u63d2\u4ef6\u652f\u6301\u5f15\u7528\u67e5\u627e\u3001\u5305\u7ba1\u7406\u96c6\u6210 ArtifactHub",description:"KCL \u662f\u4e00\u4e2a CNCF \u57fa\u91d1\u4f1a\u6258\u7ba1\u7684\u57fa\u4e8e\u7ea6\u675f\u7684\u8bb0\u5f55\u53ca\u51fd\u6570\u8bed\u8a00\u5e76\u901a\u8fc7\u6210\u719f\u7684\u7f16\u7a0b\u8bed\u8a00\u6280\u672f\u548c\u5b9e\u8df5\u6765\u6539\u8fdb\u5bf9\u5927\u91cf\u7e41\u6742\u914d\u7f6e\u6bd4\u5982\u4e91\u539f\u751f Kubernetes \u914d\u7f6e\u573a\u666f\u7684\u7f16\u5199\uff0c\u81f4\u529b\u4e8e\u6784\u5efa\u56f4\u7ed5\u914d\u7f6e\u7684\u66f4\u597d\u7684\u6a21\u5757\u5316\u3001\u6269\u5c55\u6027\u548c\u7a33\u5b9a\u6027\uff0c\u66f4\u7b80\u5355\u7684\u903b\u8f91\u7f16\u5199\uff0c\u4ee5\u53ca\u66f4\u7b80\u5355\u7684\u81ea\u52a8\u5316\u548c\u751f\u6001\u5de5\u5177\u96c6\u6210\u3002",date:"2023-10-25T00:00:00.000Z",formattedDate:"2023\u5e7410\u670825\u65e5",tags:[{label:"KCL",permalink:"/zh-CN/blog/tags/kcl"},{label:"Biweekly-Newsletter",permalink:"/zh-CN/blog/tags/biweekly-newsletter"}],readingTime:5.88,hasTruncateMarker:!1,authors:[{name:"KCL \u56e2\u961f",title:"KCL \u56e2\u961f"}],frontMatter:{slug:"2023-10-25-biweekly-newsletter",title:"KCL \u793e\u533a\u5f00\u6e90\u53cc\u5468\u62a5 (2023 10.12 - 10.25) | IDE \u63d2\u4ef6\u652f\u6301\u5f15\u7528\u67e5\u627e\u3001\u5305\u7ba1\u7406\u96c6\u6210 ArtifactHub",authors:{name:"KCL \u56e2\u961f",title:"KCL \u56e2\u961f"},tags:["KCL","Biweekly-Newsletter"]},prevItem:{title:"KCL \u793e\u533a\u5f00\u6e90\u53cc\u5468\u62a5 (2023 10.26 - 11.08) | \u8d85\u591a IDE \u4f53\u9a8c\u63d0\u5347\u548c\u5f00\u7bb1\u5373\u7528\u7684\u6a21\u578b",permalink:"/zh-CN/blog/2023-11-08-biweekly-newsletter"},nextItem:{title:"KCD \u793e\u533a\u4f1a\u8bae\u56de\u987e | \u57fa\u4e8e\u4e91\u539f\u751f\u4f9b\u5e94\u94fe\u7684\u914d\u7f6e\u7b56\u7565\u7ba1\u7406\u65b0\u8303\u5f0f - KRM KCL \u89c4\u8303",permalink:"/zh-CN/blog/2023-10-23-cloud-native-supply-chain-krm-kcl-spec"}},c={authorsImageUrls:[void 0]},s=[{value:"\u5185\u5bb9\u6982\u8ff0",id:"\u5185\u5bb9\u6982\u8ff0",level:2},{value:"\u7279\u522b\u9e23\u8c22",id:"\u7279\u522b\u9e23\u8c22",level:2},{value:"\u7cbe\u9009\u66f4\u65b0",id:"\u7cbe\u9009\u66f4\u65b0",level:2},{value:"KCL IDE \u63d2\u4ef6\u66f4\u65b0",id:"kcl-ide-\u63d2\u4ef6\u66f4\u65b0",level:3},{value:"KCL \u5305\u7ba1\u7406\u5de5\u5177",id:"kcl-\u5305\u7ba1\u7406\u5de5\u5177",level:3},{value:"KCL \u8bed\u8a00\u66f4\u65b0",id:"kcl-\u8bed\u8a00\u66f4\u65b0",level:3},{value:"KCL \u547d\u4ee4\u884c\u7edf\u4e00\u754c\u9762",id:"kcl-\u547d\u4ee4\u884c\u7edf\u4e00\u754c\u9762",level:3},{value:"\u793e\u533a\u52a8\u6001",id:"\u793e\u533a\u52a8\u6001",level:3},{value:"\u5176\u4ed6\u8d44\u6e90",id:"\u5176\u4ed6\u8d44\u6e90",level:2}],u={toc:s},o="wrapper";function k(e){let{components:t,...r}=e;return(0,n.kt)(o,(0,l.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(37339).Z,width:"1127",height:"435"})),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang"},"KCL")," \u662f\u4e00\u4e2a CNCF \u57fa\u91d1\u4f1a\u6258\u7ba1\u7684\u57fa\u4e8e\u7ea6\u675f\u7684\u8bb0\u5f55\u53ca\u51fd\u6570\u8bed\u8a00\u5e76\u901a\u8fc7\u6210\u719f\u7684\u7f16\u7a0b\u8bed\u8a00\u6280\u672f\u548c\u5b9e\u8df5\u6765\u6539\u8fdb\u5bf9\u5927\u91cf\u7e41\u6742\u914d\u7f6e\u6bd4\u5982\u4e91\u539f\u751f Kubernetes \u914d\u7f6e\u573a\u666f\u7684\u7f16\u5199\uff0c\u81f4\u529b\u4e8e\u6784\u5efa\u56f4\u7ed5\u914d\u7f6e\u7684\u66f4\u597d\u7684\u6a21\u5757\u5316\u3001\u6269\u5c55\u6027\u548c\u7a33\u5b9a\u6027\uff0c\u66f4\u7b80\u5355\u7684\u903b\u8f91\u7f16\u5199\uff0c\u4ee5\u53ca\u66f4\u7b80\u5355\u7684\u81ea\u52a8\u5316\u548c\u751f\u6001\u5de5\u5177\u96c6\u6210\u3002"),(0,n.kt)("p",null,"\u672c\u680f\u76ee\u5c06\u4f1a\u53cc\u5468\u66f4\u65b0 KCL \u8bed\u8a00\u793e\u533a\u6700\u65b0\u52a8\u6001\uff0c\u5305\u62ec\u529f\u80fd\u3001\u5b98\u7f51\u66f4\u65b0\u548c\u6700\u65b0\u7684\u793e\u533a\u52a8\u6001\u7b49\uff0c\u5e2e\u52a9\u5927\u5bb6\u66f4\u597d\u5730\u4e86\u89e3 KCL \u793e\u533a\uff01"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"KCL \u5b98\u7f51\uff1a",(0,n.kt)("a",{parentName:"em",href:"https://kcl-lang.io"},"https://kcl-lang.io")))),(0,n.kt)("h2",{id:"\u5185\u5bb9\u6982\u8ff0"},"\u5185\u5bb9\u6982\u8ff0"),(0,n.kt)("p",null,"\u611f\u8c22\u6240\u6709\u8d21\u732e\u8005\u8fc7\u53bb\u4e24\u5468 (2023 10.12 - 10.25) \u7684\u6770\u51fa\u5de5\u4f5c\uff0c\u4ee5\u4e0b\u662f\u91cd\u70b9\u5408\u5e76\u5185\u5bb9\u6982\u8ff0"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\ud83d\udd27 \u8bed\u8a00\u53ca\u5de5\u5177\u94fe\u66f4\u65b0")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"KCL IDE \u66f4\u65b0 - \u652f\u6301\u5bf9\u7b26\u53f7\u7684\u5f15\u7528\u8df3\u8f6c\u548c\u91cd\u547d\u540d\uff1b\u4f18\u5316\u4e86\u5f15\u7528\u8bed\u53e5\u548c union \u7c7b\u578b\u7684\u683c\u5f0f\u5316\u8f93\u51fa\uff1b\u4fee\u590d\u4e86\u6587\u4ef6\u53d8\u66f4\u5f15\u53d1\u8bed\u8a00\u670d\u52a1\u5d29\u6e83\u7684\u95ee\u9898"),(0,n.kt)("li",{parentName:"ul"},"KCL \u5305\u7ba1\u7406\u5de5\u5177 KPM \u66f4\u65b0 - kpm \u6b63\u5728\u96c6\u6210 AritifactHub\uff0c\u652f\u6301\u5c06 KCL \u5305\u53d1\u5e03\u5230 ArtifactHub"),(0,n.kt)("li",{parentName:"ul"},"KCL \u8bed\u8a00\u66f4\u65b0 - \u4f18\u5316\u4e86\u65b9\u6cd5\u7684\u53c2\u6570\u7c7b\u578b\u4e0d\u5339\u914d\u7b49\u62a5\u9519\u4fe1\u606f\uff0c\u660e\u786e\u6307\u51fa\u4e86\u4e0d\u5339\u914d\u7684\u7c7b\u578b"),(0,n.kt)("li",{parentName:"ul"},"KCL \u547d\u4ee4\u884c\u7edf\u4e00\u754c\u9762 - \u91cd\u65b0\u8bbe\u8ba1\u4e86 KCL \u76f8\u5173\u5de5\u5177\u7684\u547d\u4ee4\u884c\u7edf\u4e00\u754c\u9762\u548c\u5de5\u4f5c\u6d41\uff0c\u8fdb\u5165\u5b9e\u73b0\u9636\u6bb5")),(0,n.kt)("h2",{id:"\u7279\u522b\u9e23\u8c22"},"\u7279\u522b\u9e23\u8c22"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u6392\u540d\u4e0d\u5206\u5148\u540e"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u611f\u8c22 @jakezhu9 \u5bf9 KCL \u8bed\u6cd5\u89e3\u6790\u5355\u5143\u6d4b\u8bd5\u7684\u6539\u8fdb\uff0c\u5c06\u90e8\u5206\u6d4b\u8bd5\u7528\u4f8b\u7edf\u4e00\u8fc1\u79fb\u5230\u4f7f\u7528 snaptest \u6846\u67b6 \ud83d\ude4c ",(0,n.kt)("em",{parentName:"li"},(0,n.kt)("a",{parentName:"em",href:"https://github.com/kcl-lang/kcl/pull/794"},"https://github.com/kcl-lang/kcl/pull/794"))," \u7b49"),(0,n.kt)("li",{parentName:"ul"},"\u611f\u8c22 @opsnull \u5bf9 KCL \u5b98\u7f51\u6587\u6863\u4e2d\u4ee3\u7801\u793a\u4f8b\u7684\u7ea0\u9519\u548c\u8d21\u732e \ud83d\ude4c ",(0,n.kt)("em",{parentName:"li"},(0,n.kt)("a",{parentName:"em",href:"https://github.com/kcl-lang/kcl-lang.io/pull/182"},"https://github.com/kcl-lang/kcl-lang.io/pull/182"))),(0,n.kt)("li",{parentName:"ul"},"\u611f\u8c22 @prahaladramji \u5bf9 KCL IntelliJ \u63d2\u4ef6\u683c\u5f0f\u5316\u529f\u80fd\u7684\u7ea0\u9519\u548c\u4f18\u5316 \ud83d\ude4c ",(0,n.kt)("em",{parentName:"li"},(0,n.kt)("a",{parentName:"em",href:"https://github.com/kcl-lang/intellij-kcl/pull/15"},"https://github.com/kcl-lang/intellij-kcl/pull/15"))),(0,n.kt)("li",{parentName:"ul"},"\u611f\u8c22 @steeling, @prahaladramji, @liangyuanpen, @Kory Taborn \u7b49\u5728\u4f7f\u7528 KCL \u53ca\u5de5\u5177\u94fe\u8fc7\u7a0b\u4e2d\u63d0\u51fa\u7684\u5b9d\u8d35\u53cd\u9988\u548c\u8ba8\u8bba \ud83d\ude4c")),(0,n.kt)("h2",{id:"\u7cbe\u9009\u66f4\u65b0"},"\u7cbe\u9009\u66f4\u65b0"),(0,n.kt)("h3",{id:"kcl-ide-\u63d2\u4ef6\u66f4\u65b0"},"KCL IDE \u63d2\u4ef6\u66f4\u65b0"),(0,n.kt)("p",null,"\u5728\u5f85\u53d1\u5e03\u7684\u7248\u672c\u4e2d\uff0cKCL IDE \u63d2\u4ef6\u652f\u6301\u4e86\u5bf9\u7b26\u53f7\u7684\u5f15\u7528\u8df3\u8f6c\u53ca\u91cd\u547d\u540d\u529f\u80fd\uff1b\u4f18\u5316\u4e86\u5bf9\u5f15\u7528\u8bed\u53e5\u548cunion\u7c7b\u578b\u7684\u683c\u5f0f\u5316\u8f93\u51fa\u3002\u540c\u65f6\u4fee\u590d\u4e86\u8bed\u8a00\u670d\u52a1\u865a\u62df\u6587\u4ef6\u7cfb\u7edf\u76f8\u5173\u7684bug\uff1a\u6587\u4ef6\u7ef4\u5ea6\u7684\u53d8\u66f4\u5f15\u53d1\u4f1a\u8bed\u8a00\u670d\u52a1\u5d29\u6e83\uff0c\u5fc5\u987b\u91cd\u542f IDE \u6062\u590d\uff0c\u73b0\u5df2\u4fee\u590d\u3002"),(0,n.kt)("p",null,"\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"\u8f6c\u5230\u5f15\u7528"),"\u6216",(0,n.kt)("inlineCode",{parentName:"p"},"\u67e5\u627e\u6240\u6709\u5f15\u7528"),"\uff1a\n",(0,n.kt)("img",{src:a(83154).Z,width:"1682",height:"880"})),(0,n.kt)("p",null,"\u5bf9\u7b26\u53f7\u8fdb\u884c",(0,n.kt)("inlineCode",{parentName:"p"},"\u91cd\u547d\u540d"),"\uff1a\n",(0,n.kt)("img",{src:a(96968).Z,width:"832",height:"513"})),(0,n.kt)("p",null,"\u5bf9\u5f15\u7528\u8bed\u53e5\u548c union \u7c7b\u578b\u7684\u683c\u5f0f\u5316\uff1a\u4f18\u5316\u4e86\u5f15\u7528\u8bed\u53e5\u4e0e\u5176\u4ed6\u4ee3\u7801\u5757\u4e4b\u95f4\u7684\u7a7a\u884c\u884c\u4e3a\uff08\u683c\u5f0f\u5316\u4e3a\u4e00\u4e2a\u7a7a\u884c\uff09\u3001union \u7c7b\u578b\u7684\u7a7a\u683c\u884c\u4e3a\uff08\u591a\u4e2a\u7c7b\u578b\u4e4b\u95f4\u683c\u5f0f\u5316\u4e3a\u4ee5 ",(0,n.kt)("inlineCode",{parentName:"p"},"|")," \u95f4\u9694\uff09\uff1a\n",(0,n.kt)("img",{src:a(65830).Z,width:"590",height:"269"})),(0,n.kt)("h3",{id:"kcl-\u5305\u7ba1\u7406\u5de5\u5177"},"KCL \u5305\u7ba1\u7406\u5de5\u5177"),(0,n.kt)("p",null,"\u5728\u5f85\u53d1\u5e03\u7684\u7248\u672c\u4e2d\uff0ckpm \u652f\u6301\u4e0e ",(0,n.kt)("a",{parentName:"p",href:"https://artifacthub.io/"},"ArtifactHub")," \u7684\u96c6\u6210\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u5411",(0,n.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/artifacthub"},"kcl-lang Registry \u4ed3\u5e93")," \u63d0\u4ea4 PR \u7684\u65b9\u5f0f\u5c06\u60a8\u7684 KCL \u5305\u53d1\u5e03\u5230 ArtifactHub. \u76ee\u524d\u6211\u4eec\u53ef\u4ee5\u5728 ",(0,n.kt)("a",{parentName:"p",href:"https://staging.artifacthub.io/packages/search?ts_query_web=kcl&sort=relevance&page=1"},"ArtifactHub staging \u9875\u9762"),"\u770b\u5230\u9884\u4e0a\u4f20\u7684 KCL k8s \u5305\u7684\u6548\u679c\uff0c\u8be5\u529f\u80fd\u5c06\u5728 v0.6.1 \u7248\u672c\u53d1\u5e03\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(859).Z,width:"2204",height:"1536"})),(0,n.kt)("h3",{id:"kcl-\u8bed\u8a00\u66f4\u65b0"},"KCL \u8bed\u8a00\u66f4\u65b0"),(0,n.kt)("p",null,"KCL \u7684\u7f16\u8bd1\u547d\u4ee4\u6b63\u5728\u6301\u7eed\u5730\u4f18\u5316\u9519\u8bef\u4fe1\u606f\u7684\u8f93\u51fa\uff0c\u81f4\u529b\u4e8e\u63d0\u4f9b\u6e05\u6670\u6613\u61c2\u7684\u6307\u5f15\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u5feb\u901f\u5b9a\u4f4d\u548c\u4fee\u590d\u95ee\u9898\uff0c\u7f16\u5199\u51fa\u6b63\u786e\u7684\u4ee3\u7801\u3002\u8fd1\u671f\uff0cKCL \u5bf9\u65b9\u6cd5\u7c7b\u578b\u548c\u53c2\u6570\u65b9\u9762\u7684\u9519\u8bef\u4fe1\u606f\u8fdb\u884c\u4e86\u4f18\u5316\uff0c\u4f8b\u5982\uff1a\u660e\u786e\u6307\u51fa\u4e86\u65b9\u6cd5\u7684\u53c2\u6570\u7c7b\u578b\u4e0d\u5339\u914d\u7684\u62a5\u9519\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(23345).Z,width:"1254",height:"968"})),(0,n.kt)("p",null,"\u6b64\u5916\uff0c\u8fd8\u4fee\u590d\u4e86\u5c5e\u6027\u8d4b\u503c\u7684\u60f0\u6027\u6c42\u503c\u95ee\u9898\uff0c\u5c06\u5c5e\u6027\u8d4b\u503c\u7684\u8ba1\u7b97\u548c\u7ea6\u675f\u6821\u9a8c\u5ef6\u8fdf\u5230\u914d\u7f6e\u5408\u5e76\u5b8c\u6210\u540e\uff0c\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u7f16\u8bd1\u62a5\u9519\u3002"),(0,n.kt)("h3",{id:"kcl-\u547d\u4ee4\u884c\u7edf\u4e00\u754c\u9762"},"KCL \u547d\u4ee4\u884c\u7edf\u4e00\u754c\u9762"),(0,n.kt)("p",null,"\u4e3a\u5411 KCL \u7528\u6237\u63d0\u4f9b\u4e00\u81f4\u548c\u6807\u51c6\u5316\u7684\u4f53\u9a8c\uff0c\u6211\u4eec\u6b63\u5728\u5bf9 KCL \u7684\u547d\u4ee4\u884c\u754c\u9762\u8fdb\u884c\u8bbe\u8ba1\u6539\u8fdb\uff0c\u4ee5\u8fbe\u5230\u7edf\u4e00\u7684\u7528\u6237\u5de5\u4f5c\u6d41\u3001\u76f8\u5173\u5de5\u5177\u548c\u591a\u8bed\u8a00 API \u7684\u65e0\u7f1d\u96c6\u6210\u3001\u547d\u4ee4\u884c\u5de5\u5177\u7684\u53ef\u6269\u5c55\u6027\u3002\u76ee\u524d\u5b8c\u6210\u4e86\u521d\u6b65\u8bbe\u8ba1\u8fdb\u5165\u5b9e\u73b0\u9636\u6bb5\uff0c\u6b22\u8fce\u611f\u5174\u8da3\u7684\u5c0f\u4f19\u4f34\u4e00\u8d77\u8ba8\u8bba\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl/issues/756"},"https://github.com/kcl-lang/kcl/issues/756")),(0,n.kt)("h3",{id:"\u793e\u533a\u52a8\u6001"},"\u793e\u533a\u52a8\u6001"),(0,n.kt)("p",null,"\u968f\u7740\u52a0\u5165 CNCF sandbox\uff0cCNCF KCL Slack \u9891\u9053\u5df2\u7ecf\u5f00\u901a\uff0c\u4e0e KCL \u8bed\u8a00\u76f8\u5173\u7684\u4ea4\u6d41\u5c06\u9010\u6b65\u8fc1\u79fb\u5230\u65b0\u7684\u9891\u9053\uff0c\u6b22\u8fce\u5927\u5bb6\u52a0\u5165\u4ea4\u6d41\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u52a0\u5165 CNCF \u5de5\u4f5c\u7a7a\u95f4\uff0c\u586b\u5199\u4e2a\u4eba\u90ae\u7bb1\u5373\u53ef: ",(0,n.kt)("a",{parentName:"li",href:"https://communityinviter.com/apps/cloud-native/cncf"},"https://communityinviter.com/apps/cloud-native/cncf")),(0,n.kt)("li",{parentName:"ol"},"\u52a0\u5165 CNCF KCL \u9891\u9053: ",(0,n.kt)("a",{parentName:"li",href:"https://cloud-native.slack.com/archives/C05TC96NWN8"},"https://cloud-native.slack.com/archives/C05TC96NWN8"))),(0,n.kt)("h2",{id:"\u5176\u4ed6\u8d44\u6e90"},"\u5176\u4ed6\u8d44\u6e90"),(0,n.kt)("p",null,"\u2764\ufe0f \u611f\u8c22\u6240\u6709 KCL \u7528\u6237\u548c\u793e\u533a\u5c0f\u4f19\u4f34\u5728\u793e\u533a\u4e2d\u63d0\u51fa\u7684\u5b9d\u8d35\u53cd\u9988\u4e0e\u5efa\u8bae\u3002\u9884\u8ba1 11 \u6708\u5e95\u6211\u4eec\u4f1a\u6b63\u5f0f\u53d1\u5e03 KCL v0.7 \u65b0\u7248\u672c\uff0c\u656c\u8bf7\u671f\u5f85!"),(0,n.kt)("p",null,"\u66f4\u591a\u5176\u4ed6\u8d44\u6e90\u8bf7\u53c2\u8003\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://kcl-lang.io/"},"KCL \u7f51\u7ad9"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://kusionstack.io/"},"KusionStack \u7f51\u7ad9"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/community/release-policy/roadmap"},"KCL 2023 \u8def\u7ebf\u89c4\u5212"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl/milestone/7"},"KCL v0.7.0 Milestone"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl/issues"},"KCL Github Issues"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/orgs/kcl-lang/discussions"},"KCL Github Discussion"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/community"},"KCL Community")))))}k.isMDXComponent=!0},37339:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/biweekly-newsletter-zh-bd4cf8c2bcc913a580e7b0e5d6691a08.png"},65830:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Format-bacf4e759fcb2a5a29f0f219b4dfa8ec.gif"},23345:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/error-msg-b9f86d8cb2dc9273d4a6ab951c562c96.png"},83154:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/FindRefs-8770a657ab949aae7dd82f9e52fc5090.png"},96968:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Rename-82061ac2cb03a77c542d5a4474797228.gif"},859:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/artifacthubStaging-ae8bdb088c72f1d8828d074553c283fe.png"}}]);