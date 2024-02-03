"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[61996],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(i,".").concat(m)]||u[m]||g[m]||o;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:a,l[1]=c;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1433:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={slug:"2022-kcl-setta-paper",title:"KCL \u8bba\u6587\u88ab SETTA 2022 \u4f1a\u8bae\u5f55\u7528",authors:{name:"\u5f90\u9e4f\u98de",title:"KCL \u56e2\u961f\u6210\u5458"},tags:["KCL","Configuration"]},l=void 0,c={permalink:"/zh-CN/blog/2022-kcl-setta-paper",editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/blog/2022-10-13-kcl-setta-paper/index.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2022-10-13-kcl-setta-paper/index.md",title:"KCL \u8bba\u6587\u88ab SETTA 2022 \u4f1a\u8bae\u5f55\u7528",description:"\u8fd1\u65e5\uff0c\u7531 KCL \u56e2\u961f\u6210\u5458\u64b0\u5199\u7684\u5173\u4e8e KCL \u521b\u65b0\u8bba\u6587\u88ab SETTA 2022 \u56fd\u9645\u4f1a\u8bae\u957f\u6587\u5f55\u7528\u3002",date:"2022-10-13T00:00:00.000Z",formattedDate:"2022\u5e7410\u670813\u65e5",tags:[{label:"KCL",permalink:"/zh-CN/blog/tags/kcl"},{label:"Configuration",permalink:"/zh-CN/blog/tags/configuration"}],readingTime:1.595,hasTruncateMarker:!1,authors:[{name:"\u5f90\u9e4f\u98de",title:"KCL \u56e2\u961f\u6210\u5458"}],frontMatter:{slug:"2022-kcl-setta-paper",title:"KCL \u8bba\u6587\u88ab SETTA 2022 \u4f1a\u8bae\u5f55\u7528",authors:{name:"\u5f90\u9e4f\u98de",title:"KCL \u56e2\u961f\u6210\u5458"},tags:["KCL","Configuration"]},prevItem:{title:"SETTA 2022 \u4f1a\u8bae KCL \u4ecb\u7ecd\u5185\u5bb9",permalink:"/zh-CN/blog/2022-kcl-setta-meeting"},nextItem:{title:"\u58f0\u660e\u5f0f\u914d\u7f6e\u6280\u672f\u6982\u8ff0",permalink:"/zh-CN/blog/2022-declarative-config-overview"}},i={authorsImageUrls:[void 0]},p=[],s={toc:p},u="wrapper";function g(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8fd1\u65e5\uff0c\u7531 KCL \u56e2\u961f\u6210\u5458\u64b0\u5199\u7684\u5173\u4e8e KCL \u521b\u65b0\u8bba\u6587\u88ab SETTA 2022 \u56fd\u9645\u4f1a\u8bae\u957f\u6587\u5f55\u7528\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(73729).Z,width:"756",height:"852"})),(0,a.kt)("p",null,"Symposium on Dependable Software Engineering\uff08\u4ee5\u4e0b\u7b80\u79f0 SETTA\uff09\u53ef\u9760\u8f6f\u4ef6\u5de5\u7a0b\u7814\u8ba8\u4f1a\u65e8\u5728\u5c06\u56fd\u9645\u7814\u7a76\u4eba\u5458\u805a\u96c6\u5728\u4e00\u8d77\uff0c\u5c31\u7f29\u5c0f\u5f62\u5f0f\u5316\u65b9\u6cd5\u4e0e\u8f6f\u4ef6\u5de5\u7a0b\u4e4b\u95f4\u7684\u5dee\u8ddd\u4ea4\u6d41\u7814\u7a76\u6210\u679c\u548c\u60f3\u6cd5\u3002\u4f8b\u5982\uff0c\u5c06\u5f62\u5f0f\u5316\u6280\u672f\u548c\u5de5\u5177\u5e94\u7528\u4e8e\u5de5\u7a0b\u5927\u578b\u7cfb\u7edf\uff08\u5982\u7f51\u7edc\u7269\u7406\u7cfb\u7edf (CPS)\u3001\u7269\u8054\u7f51 (IoT)\u3001\u4f01\u4e1a\u7cfb\u7edf\u3001\u57fa\u4e8e\u4e91\u7684\u7cfb\u7edf\u7b49\uff09\u3002"),(0,a.kt)("p",null,"\u6b64\u6b21\u88ab\u5f55\u7528\u7684\u8bba\u6587\u4e3a\u300aKCL: A Declarative Language for Large-scale Configuration and Policy Management\u300b\uff0c\u8be5\u8bba\u6587\u7684\u6838\u5fc3\u521b\u65b0\u70b9\u662f\u63d0\u51fa\u4e86 KCL \u58f0\u660e\u5f0f\u8bed\u8a00\u3001\u5f00\u53d1\u673a\u5236\u4ee5\u53ca\u4e00\u81f4\u7684\u5de5\u4f5c\u6d41\u7a0b\u3002\u901a\u8fc7\u8bed\u8a00\u7684\u5efa\u6a21\u53ca\u7ea6\u675f\u80fd\u529b\uff0c\u53ef\u4ee5\u63d0\u5347\u8fd0\u7ef4\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u7684\u591a\u56e2\u961f\u534f\u4f5c\u751f\u4ea7\u529b\u4ee5\u53ca\u6548\u7387\uff0c\u540c\u65f6\u786e\u4fdd\u5927\u89c4\u6a21\u914d\u7f6e\u548c\u7b56\u7565\u7ba1\u7406\u7684\u7a33\u5b9a\u6027\u3002"),(0,a.kt)("p",null,"\u6b64\u5916\uff0cSETTA 2022 \u5c06\u5728\u5317\u4eac\u65f6\u95f4 10 \u6708 27 \u65e5\u81f3 10 \u6708 28 \u65e5\u4e3e\u529e\u7ebf\u4e0a\u4f1a\u8bae\uff0c\u5c4a\u65f6\u4f1a\u5206\u4eab KCL \u8bba\u6587\u8be6\u7ec6\u5185\u5bb9\uff0c\u6b22\u8fce\u52a0\u5165 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/community"},"KCL \u793e\u533a")," \u8fdb\u884c\u56f4\u89c2\u3002SETTA 2022 \u4f1a\u8bae\u8bae\u7a0b\u8be6\u60c5\u8bf7\u53c2\u8003\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://lcs.ios.ac.cn/setta2022/program.php"},"https://lcs.ios.ac.cn/setta2022/program.php")),(0,a.kt)("p",null,"\u6ce8\uff1a\u76ee\u524d KCL \u5df2\u5728 Github \u5f00\u6e90\uff0c\u6b22\u8fce\u8bbf\u95ee ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl"},"https://github.com/kcl-lang/kcl")," \u83b7\u5f97\u66f4\u591a\u4fe1\u606f\u3002"))}g.isMDXComponent=!0},73729:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/kcl_paper_setta-fd6fd3c3ec523f850510540c49302bc4.png"}}]);