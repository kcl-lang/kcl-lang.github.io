"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[34144],{3905:(e,t,l)=>{l.d(t,{Zo:()=>s,kt:()=>d});var n=l(67294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(l),k=a,d=m["".concat(p,".").concat(k)]||m[k]||c[k]||r;return l?n.createElement(d,o(o({ref:t},s),{},{components:l})):n.createElement(d,o({ref:t},s))}));function d(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=l.length,o=new Array(r);o[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<r;u++)o[u]=l[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,l)}k.displayName="MDXCreateElement"},58959:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var n=l(87462),a=(l(67294),l(3905));const r={},o="\u5c06\u60a8\u7684 KCL \u5305\u53d1\u5e03\u5230 ArtifactHub",i={unversionedId:"user_docs/guides/package-management/how-to/publish_pkg_to_ah",id:"version-0.7.0/user_docs/guides/package-management/how-to/publish_pkg_to_ah",title:"\u5c06\u60a8\u7684 KCL \u5305\u53d1\u5e03\u5230 ArtifactHub",description:"\u6211\u4eec\u5df2\u7ecf\u5c06 (ArtifactHub, AH) \u96c6\u6210\u4e3a KCL \u6a21\u5757\u7684\u5e02\u573a\uff0c\u5e76\u4e14\u6211\u4eec\u7ef4\u62a4\u4e00\u4e2a github \u4ed3\u5e93 modules \u7528\u6765\u4fdd\u5b58\u53d1\u5e03\u5230 AH \u7684 KCL \u6a21\u5757\u3002\u5982\u679c\u60a8\u5e0c\u671b\u5c06\u60a8\u7684 KCL \u6a21\u5757\u53d1\u5e03\u5230\u6211\u4eec\u7684\u5e02\u573a\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u63d0\u4ea4 PR \u7684\u65b9\u5f0f\u5c06\u60a8\u7684 KCL \u6a21\u5757\u63d0\u4ea4\u5230\u8fd9\u4e2a\u4ed3\u5e93\u4e2d\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.7.0/user_docs/guides/package-management/4-how-to/7-publish_pkg_to_ah.md",sourceDirName:"user_docs/guides/package-management/4-how-to",slug:"/user_docs/guides/package-management/how-to/publish_pkg_to_ah",permalink:"/zh-CN/docs/user_docs/guides/package-management/how-to/publish_pkg_to_ah",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.7.0/user_docs/guides/package-management/4-how-to/7-publish_pkg_to_ah.md",tags:[],version:"0.7.0",lastUpdatedBy:"Peefy",lastUpdatedAt:1703569910,formattedLastUpdatedAt:"2023\u5e7412\u670826\u65e5",sidebarPosition:7,frontMatter:{},sidebar:"user_docs",previous:{title:"\u5982\u4f55\u5728 github action \u4e2d\u4f7f\u7528 kpm \u53d1\u5e03\u60a8\u7684 KCL \u5305",permalink:"/zh-CN/docs/user_docs/guides/package-management/how-to/push_github_action"},next:{title:"Kubernetes",permalink:"/zh-CN/docs/user_docs/guides/working-with-k8s/"}},p={},u=[{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb",level:2},{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:3},{value:"\u4ee3\u7801\u4ed3\u5e93",id:"\u4ee3\u7801\u4ed3\u5e93",level:3},{value:"\u51c6\u5907\u60a8\u7684 KCL \u5305",id:"\u51c6\u5907\u60a8\u7684-kcl-\u5305",level:3},{value:"\u901a\u8fc7 PR \u53d1\u5e03\u60a8\u7684\u5305",id:"\u901a\u8fc7-pr-\u53d1\u5e03\u60a8\u7684\u5305",level:3},{value:"1. \u4e0b\u8f7d\u4ee3\u7801\u4ed3\u5e93",id:"1-\u4e0b\u8f7d\u4ee3\u7801\u4ed3\u5e93",level:4},{value:"2. \u4e3a\u60a8\u7684\u5305\u521b\u5efa\u4e00\u4e2a\u5206\u652f",id:"2-\u4e3a\u60a8\u7684\u5305\u521b\u5efa\u4e00\u4e2a\u5206\u652f",level:4},{value:"3. \u6dfb\u52a0\u60a8\u7684\u5305",id:"3-\u6dfb\u52a0\u60a8\u7684\u5305",level:4},{value:"4. \u63d0\u4ea4\u60a8\u7684\u5305",id:"4-\u63d0\u4ea4\u60a8\u7684\u5305",level:4},{value:"5. \u63d0\u4ea4 PR",id:"5-\u63d0\u4ea4-pr",level:4},{value:"\u901a\u8fc7 PR \u5347\u7ea7\u60a8\u7684\u5305",id:"\u901a\u8fc7-pr-\u5347\u7ea7\u60a8\u7684\u5305",level:3}],s={toc:u},m="wrapper";function c(e){let{components:t,...l}=e;return(0,a.kt)(m,(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5c06\u60a8\u7684-kcl-\u5305\u53d1\u5e03\u5230-artifacthub"},"\u5c06\u60a8\u7684 KCL \u5305\u53d1\u5e03\u5230 ArtifactHub"),(0,a.kt)("p",null,"\u6211\u4eec\u5df2\u7ecf\u5c06 ",(0,a.kt)("a",{parentName:"p",href:"https://artifacthub.io/"},"(ArtifactHub, AH)")," \u96c6\u6210\u4e3a KCL \u6a21\u5757\u7684\u5e02\u573a\uff0c\u5e76\u4e14\u6211\u4eec\u7ef4\u62a4\u4e00\u4e2a github \u4ed3\u5e93 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/modules"},(0,a.kt)("inlineCode",{parentName:"a"},"modules"))," \u7528\u6765\u4fdd\u5b58\u53d1\u5e03\u5230 AH \u7684 KCL \u6a21\u5757\u3002\u5982\u679c\u60a8\u5e0c\u671b\u5c06\u60a8\u7684 KCL \u6a21\u5757\u53d1\u5e03\u5230\u6211\u4eec\u7684\u5e02\u573a\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u63d0\u4ea4 PR \u7684\u65b9\u5f0f\u5c06\u60a8\u7684 KCL \u6a21\u5757\u63d0\u4ea4\u5230\u8fd9\u4e2a\u4ed3\u5e93\u4e2d\u3002"),(0,a.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,a.kt)("p",null,"\u5728\u60a8\u63d0\u4ea4 PR \u4e4b\u524d\uff0c\u6709\u4e00\u4e9b\u4e8b\u60c5\u60a8\u9700\u8981\u4ed4\u7ec6\u8003\u8651\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"modules")," \u4ed3\u5e93\u4e2d\u7684\u6240\u6709 KCL \u6a21\u5757\u7684\u6e90\u4ee3\u7801\u90fd\u662f",(0,a.kt)("strong",{parentName:"p"},"\u516c\u5f00\u7684"),"\uff0c\u5982\u679c\u60a8\u5e0c\u671b\u60a8\u7684 KCL \u6a21\u5757\u662f\u79c1\u6709\u7684\uff0c\u62b1\u6b49\u6211\u4eec\u76ee\u524d\u4e0d\u652f\u6301\uff0c\u60a8\u53ef\u4ee5\u5c1d\u8bd5\u901a\u8fc7\u6784\u5efa\u60a8\u81ea\u5df1\u7684\u4ed3\u5e93\u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c\u60a8\u5e0c\u671b\u5c06\u60a8\u7684 KCL \u6a21\u5757\u53d1\u5e03\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"modules")," \u4e2d\u5e76\u4e14\u80fd\u591f\u5728 AH \u4e0a\u88ab\u627e\u5230\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u60a8\u7684 KCL \u6a21\u5757\u5fc5\u987b\u5e26\u6709\u4e00\u4e2a\u7248\u672c\u53f7\uff0c\u5e76\u4e14\u7248\u672c\u53f7\u5fc5\u987b\u7b26\u5408 ",(0,a.kt)("a",{parentName:"strong",href:"https://semver.org/"},"\u8bed\u4e49\u5316\u7248\u672c")," \u7684\u5b9a\u4e49"),"\uff0c\u5373 kcl.mod \u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"version")," \u5b57\u6bb5\u662f\u975e\u7a7a\u7684\uff0c\u5e76\u4e14\u7b26\u5408\u8bed\u4e49\u5316\u7248\u672c\u7684\u5b9a\u4e49\u3002"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'[package]\nname = "mynginx"\nedition = "*"\nversion = "0.0.1" # \u8fd9\u4e2a\u5b57\u6bb5\u4e0d\u53ef\u4ee5\u4e3a\u7a7a\uff0c\u5e76\u4e14\u5fc5\u987b\u7b26\u5408\u8bed\u4e49\u5316\u7248\u672c\u7684\u5b9a\u4e49\u3002\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u4e00\u65e6\u4e00\u4e2a KCL \u6a21\u5757\u7684\u67d0\u4e2a\u7248\u672c\u88ab\u53d1\u5e03\uff0c\u5176\u5185\u5bb9\u5c31\u4e0d\u80fd\u88ab\u6539\u53d8\u3002\u6211\u4eec\u4e0d\u5141\u8bb8 KCL \u6a21\u5757\u7684\u5185\u5bb9\u5728\u4e0d\u6539\u53d8\u6a21\u5757\u7248\u672c\u7684\u60c5\u51b5\u4e0b\u88ab\u6539\u53d8"),"\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u5982\u679c\u60a8\u63d0\u4ea4\u4e86\u4e00\u4e2a PR\uff0c\u6539\u53d8\u4e86 KCL \u6a21\u5757\u7684\u5185\u5bb9\uff0c\u5e76\u4e14\u60a8\u5e0c\u671b\u6240\u6709\u4eba\u90fd\u80fd\u591f\u4f7f\u7528\u60a8\u6240\u505a\u7684\u6539\u53d8\uff0c\u90a3\u4e48\u60a8\u5fc5\u987b\u5347\u7ea7\u60a8\u7684 KCL \u6a21\u5757\u7684\u7248\u672c\uff0c\u5373\u6539\u53d8 kcl.mod \u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"version")," \u5b57\u6bb5\u3002\u5982\u679c\u60a8\u9047\u5230\u4e86\u67d0\u4e9b\u7279\u6b8a\u60c5\u51b5\u5fc5\u987b\u8981\u6539\u53d8\u67d0\u4e2a\u7248\u672c\u7684 KCL \u6a21\u5757\u5185\u5bb9\uff0c\u8bf7\u5728\u4ed3\u5e93\u4e2d\u63d0\u51fa issue \u5e76\u4e14\u8054\u7cfb\u6211\u4eec\u3002")),(0,a.kt)("h2",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,a.kt)("p",null,"\u5728\u4e0b\u4e00\u8282\u4e2d\uff0c\u6211\u4eec\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"helloworld")," \u793a\u4f8b\u5411\u60a8\u5c55\u793a\u5982\u4f55\u53d1\u5e03\u60a8\u7684 KCL \u5305\u5e76\u4e14\u5728 AH \u4e0a\u627e\u5230\u4ed6\u4eec\u3002"),(0,a.kt)("h3",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b89\u88c5 ",(0,a.kt)("a",{parentName:"li",href:"https://kcl-lang.io/docs/user_docs/getting-started/install"},"KCL")),(0,a.kt)("li",{parentName:"ul"},"\u5b89\u88c5 ",(0,a.kt)("a",{parentName:"li",href:"https://git-scm.com/book/zh/v2/%E8%B5%B7%E6%AD%A5-%E5%AE%89%E8%A3%85-Git"},"git")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.github.com/zh/get-started/signing-up-for-github/signing-up-for-a-new-github-account"},"\u6ce8\u518c\u4e00\u4e2a Github \u8d26\u6237(\u53ef\u9009)"))),(0,a.kt)("h3",{id:"\u4ee3\u7801\u4ed3\u5e93"},"\u4ee3\u7801\u4ed3\u5e93"),(0,a.kt)("p",null,"\u6ce8\u610f\uff1a\u5982\u679c\u60a8\u5e0c\u671b\u5c06\u60a8\u7684 KCL \u5305\u53d1\u5e03\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl-lang")," \u5b98\u65b9\u7684 Registry \u4e2d\uff0c\u90a3\u4e48\u60a8\u7684 KCL \u5305\u7684\u6e90\u4ee3\u7801\u5c06\u4ee5\u5f00\u6e90\u7684\u5f62\u5f0f\u4fdd\u5b58\u5728\u5f53\u524d\u4ed3\u5e93\u4e2d\uff0c\u60a8\u9700\u8981\u5c06\u60a8\u7684\u5305\u7684\u6e90\u4ee3\u7801\u901a\u8fc7 PR \u63d0\u4ea4\u5230\u8fd9\u4e2a\u4ed3\u5e93\u4e2d\u3002"),(0,a.kt)("h3",{id:"\u51c6\u5907\u60a8\u7684-kcl-\u5305"},"\u51c6\u5907\u60a8\u7684 KCL \u5305"),(0,a.kt)("p",null,"\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl mod init <module_name>")," \u547d\u4ee4, \u60a8\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u5408\u6cd5\u7684 KCL \u7a0b\u5e8f\u6a21\u5757\u3002"),(0,a.kt)("p",null,"\u76ee\u524d\uff0c\u4ed3\u5e93\u80fd\u591f\u8bc6\u522b\u7684\u5408\u6cd5\u7684\u7a0b\u5e8f\u7684\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<module_name>\n    |- kcl.mod (\u5fc5\u9009\u7684)\n    |- kcl.mod.lock (\u53ef\u9009\u7684)\n    |- artifacthub-pkg.yaml \uff08\u53ef\u9009\u7684\uff09\n    |- README.md \uff08\u53ef\u9009\u7684\uff09\n    |- (*.k) kcl program files\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"kcl.mod : \u4f5c\u4e3a KCL \u7a0b\u5e8f\u5305\u7684\u6807\u8bc6\u6587\u4ef6\uff0c\u8fd9\u4e2a\u6587\u4ef6",(0,a.kt)("strong",{parentName:"li"},"\u5fc5\u9009\u7684"),"\uff0c\u5305\u542b kcl.mod \u6587\u4ef6\u7684\u76ee\u5f55\u4f1a\u88ab\u6807\u8bc6\u4e3a\u6587\u4ef6\u7684\u6839\u76ee\u5f55\u3002"),(0,a.kt)("li",{parentName:"ul"},"kcl.mod.lock : \u81ea\u52a8\u751f\u6210\u7684\u7528\u6765\u56fa\u5b9a\u4f9d\u8d56\u7248\u672c\u7684\u6587\u4ef6\uff0c\u8fd9\u4e2a\u6587\u4ef6",(0,a.kt)("strong",{parentName:"li"},"\u53ef\u9009\u7684"),"\uff0c\u4e0d\u9700\u8981\u624b\u52a8\u6539\u52a8\u3002"),(0,a.kt)("li",{parentName:"ul"},"artifacthub-pkg.yaml : \u8fd9\u4e2a\u6587\u4ef6\u662f",(0,a.kt)("strong",{parentName:"li"},"\u53ef\u9009\u7684"),"\uff0c\u56e0\u4e3a\u6211\u4eec\u7684\u4ed3\u5e93\u76ee\u524d\u901a\u8fc7 artifacthub \u5c55\u793a\u6240\u6709\u7684\u5305\uff0c\u901a\u8fc7 artifacthub-pkg.yaml \u6765\u914d\u7f6e\u60a8\u60f3\u8981\u5305\u7684\u4fe1\u606f\uff0c\u8fd9\u91cc\u6211\u4eec\u91c7\u53d6\u7684\u7b56\u7565\u662f",(0,a.kt)("strong",{parentName:"li"},"\u5982\u679c\u5728\u60a8\u7684\u5305\u7684 kcl.mod \u6587\u4ef6\u6240\u5728\u76ee\u5f55\u4e2d\u6709\u4e00\u4e2a\u540d\u4e3a artifacthub-pkg.yaml \u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u90a3\u4e48\uff0c\u6211\u4eec\u5c06\u4f7f\u7528\u60a8\u63d0\u4f9b artifacthub-pkg.yaml \u6765\u5c55\u793a\u60a8\u7684\u5305\u7684\u4fe1\u606f\uff0c\u5426\u5219\uff0c\u6211\u4eec\u5c06\u4f1a\u4f7f\u7528\u4e00\u4e9b\u9ed8\u8ba4\u7684\u4fe1\u606f\u751f\u6210\u5bf9\u5e94\u7684 artifacthub-pkg.yaml \u6587\u4ef6\u3002")),(0,a.kt)("li",{parentName:"ul"},"README.md : \u4e00\u4e2a markdown \u6587\u4ef6\u4f5c\u4e3a\u60a8\u7684\u5305\u7684\u6587\u6863\uff0c\u8fd9\u4e2a\u6587\u4ef6\u662f",(0,a.kt)("strong",{parentName:"li"},"\u53ef\u9009\u7684"),"\uff0c",(0,a.kt)("strong",{parentName:"li"},"\u5982\u679c\u60a8\u4e0d\u63d0\u4f9b\u8fd9\u4e2a\u6587\u4ef6\uff0cartifacthub \u4e0a\u5c06\u4e0d\u4f1a\u5c55\u793a\u60a8\u7684\u5305\u7684\u6587\u6863\u3002")),(0,a.kt)("li",{parentName:"ul"},"(","*",".k) kcl program files: \u60a8\u7684 KCL \u7a0b\u5e8f\u7684\u6e90\u4ee3\u7801\u3002")),(0,a.kt)("h3",{id:"\u901a\u8fc7-pr-\u53d1\u5e03\u60a8\u7684\u5305"},"\u901a\u8fc7 PR \u53d1\u5e03\u60a8\u7684\u5305"),(0,a.kt)("h4",{id:"1-\u4e0b\u8f7d\u4ee3\u7801\u4ed3\u5e93"},"1. \u4e0b\u8f7d\u4ee3\u7801\u4ed3\u5e93"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u60a8\u9700\u8981\u4f7f\u7528 git \u5c06\u4ed3\u5e93 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/modules"},"https://github.com/kcl-lang/modules")," \u4e0b\u8f7d\u5230\u60a8\u7684\u672c\u5730"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/kcl-lang/modules --depth=1\n")),(0,a.kt)("h4",{id:"2-\u4e3a\u60a8\u7684\u5305\u521b\u5efa\u4e00\u4e2a\u5206\u652f"},"2. \u4e3a\u60a8\u7684\u5305\u521b\u5efa\u4e00\u4e2a\u5206\u652f"),(0,a.kt)("p",null,"\u6211\u4eec\u63a8\u8350\u60a8\u7684\u5206\u652f\u540d\u4e3a\uff1apublish-pkg-<module_name>, <module_name> \u4e3a\u60a8\u5305\u7684\u540d\u79f0\u3002"),(0,a.kt)("p",null,"\u4ee5\u5305 helloworld \u4e3a\u4f8b"),(0,a.kt)("p",null,"\u8fdb\u5165\u60a8\u4e0b\u8f7d\u7684 modules \u76ee\u5f55\u4e2d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cd modules\n")),(0,a.kt)("p",null,"\u4e3a\u5305 helloworld \u521b\u5efa\u4e00\u4e2a\u5206\u652f ",(0,a.kt)("inlineCode",{parentName:"p"},"publish-pkg-helloworld")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout -b publish-pkg-helloworld\n")),(0,a.kt)("h4",{id:"3-\u6dfb\u52a0\u60a8\u7684\u5305"},"3. \u6dfb\u52a0\u60a8\u7684\u5305"),(0,a.kt)("p",null,"\u60a8\u9700\u8981\u5c06\u60a8\u7684\u5305\u79fb\u52a8\u5230\u5f53\u524d\u76ee\u5f55\u4e0b\uff0c\u5728\u6211\u4eec\u7684\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl mod init")," \u547d\u4ee4\u521b\u5efa\u5305 helloworld"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kcl mod init helloworld\n")),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u4e3a helloworld \u5305\u589e\u52a0\u4e00\u4e2a README.md \u6587\u4ef6\u4fdd\u5b58\u5728\u5305\u7684\u6839\u76ee\u5f55\u4e0b\uff0c\u7528\u6765\u5c55\u793a\u5728 AH \u7684\u9996\u9875\u4e2d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'echo "## Introduction" >> helloworld/README.md\necho "This is a kcl module named helloworld." >> helloworld/README.md\n')),(0,a.kt)("h4",{id:"4-\u63d0\u4ea4\u60a8\u7684\u5305"},"4. \u63d0\u4ea4\u60a8\u7684\u5305"),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u63d0\u4ea4\u60a8\u7684\u5305"),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"git add .")," \u547d\u4ee4\u5c06\u60a8\u7684\u5305\u6dfb\u52a0\u5230 git \u7684\u6682\u5b58\u533a\u4e2d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git add .\n")),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"git commit -s")," \u547d\u4ee4\u63d0\u4ea4\u60a8\u7684\u5305, \u6211\u4eec\u63a8\u8350\u60a8\u7684 commit message \u9075\u5faa \u201cpublish module <module_name>\u201d \u7684\u683c\u5f0f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'git commit -m "publish module helloworld" -s\n')),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"git push")," \u547d\u4ee4\u5c06\u60a8\u7684\u5305\u63d0\u4ea4\u5230\u60a8\u7684\u5206\u652f publish-pkg-<module_name> \u4e2d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git push\n")),(0,a.kt)("h4",{id:"5-\u63d0\u4ea4-pr"},"5. \u63d0\u4ea4 PR"),(0,a.kt)("p",null,"\u5c06\u60a8\u7684\u5206\u652f publish-pkg-<module_name> \u5411\u4ed3\u5e93\u7684 main \u5206\u652f\u63d0\u4ea4 PR\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.github.com/zh/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request"},"\u5982\u4f55\u521b\u5efa PR"))),(0,a.kt)("h3",{id:"\u901a\u8fc7-pr-\u5347\u7ea7\u60a8\u7684\u5305"},"\u901a\u8fc7 PR \u5347\u7ea7\u60a8\u7684\u5305"),(0,a.kt)("p",null,"\u5b8c\u6210\u5305\u7684\u5185\u5bb9\u4e0a\u4f20\u540e\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7 PR \u5347\u7ea7\u60a8\u7684\u5305\u3002"),(0,a.kt)("p",null,"\u6ce8\u610f\uff1a",(0,a.kt)("strong",{parentName:"p"},"\u6211\u4eec\u6ca1\u6709\u63d0\u4f9b\u4efb\u4f55\u6539\u53d8\u5305\u7684\u5185\u5bb9\u4f46\u662f\u4e0d\u6539\u53d8\u7248\u672c\u53f7\u7684\u5347\u7ea7\u7b56\u7565\u3002")," \u5982\u679c\u60a8\u60f3\u8981\u5347\u7ea7\u60a8\u7684\u5305\uff0c\u5e76\u5e0c\u671b\u60a8\u5347\u7ea7\u540e\u7684\u5305\u88ab\u5c55\u793a\u5728 AH \u4e0a\uff0c\u60a8\u9700\u8981\u4fee\u6539\u60a8\u7684\u5305\u7684\u7248\u672c\u53f7\u3002\u5373\u5728 kcl.mod \u6587\u4ef6\u7684 module \u7ae0\u8282\u4e2d\u7684 version \u5b57\u6bb5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[package]\nname = "my_module"\nedition = "*"\nversion = "0.1.0" # \u6539\u53d8\u8fd9\u4e2a\u5b57\u6bb5\u6765\u5347\u7ea7\u60a8\u7684\u5305\ndescription = "This is my module."\n')),(0,a.kt)("p",null,"\u540c\u6837\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u60a8\u65e0\u6cd5\u591a\u6b21\u4e0a\u4f20\u540c\u4e00\u4e2a\u7248\u672c\u53f7\u7684 KCL \u5305"),"\uff0c\u4e00\u65e6\u60a8\u7684\u5305\u7684\u7248\u672c\u53f7\u5df2\u7ecf\u88ab\u4f7f\u7528\uff0c\u60a8\u5c06\u65e0\u6cd5\u518d\u6b21\u4f7f\u7528\u8fd9\u4e2a\u7248\u672c\u53f7\uff0c\u518d\u6b21\u4e0a\u4f20\u8fd9\u4e2a\u5305\u7684\u65b9\u5f0f\u5c31\u53ea\u6709\u5347\u7ea7\u7248\u672c\u53f7\u3002"))}c.isMDXComponent=!0}}]);