"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[59921],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),m=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=m(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=m(t),u=a,f=c["".concat(s,".").concat(u)]||c[u]||d[u]||i;return t?r.createElement(f,l(l({ref:n},p),{},{components:t})):r.createElement(f,l({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var m=2;m<i;m++)l[m]=t[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},14777:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var r=t(87462),a=(t(67294),t(3905));const i={title:"manifests",linkTitle:"manifests",type:"docs",description:"manifests system module",weight:100},l=void 0,o={unversionedId:"reference/model/manifests",id:"reference/model/manifests",title:"manifests",description:"manifests system module",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/reference/model/manifests.md",sourceDirName:"reference/model",slug:"/reference/model/manifests",permalink:"/zh-CN/docs/next/reference/model/manifests",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/reference/model/manifests.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1705584615,formattedLastUpdatedAt:"2024\u5e741\u670818\u65e5",frontMatter:{title:"manifests",linkTitle:"manifests",type:"docs",description:"manifests system module",weight:100},sidebar:"reference",previous:{title:"json",permalink:"/zh-CN/docs/next/reference/model/json"},next:{title:"math",permalink:"/zh-CN/docs/next/reference/model/math"}},s={},m=[{value:"yaml_stream",id:"yaml_stream",level:2}],p={toc:m},c="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"yaml_stream"},"yaml_stream"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'yaml_stream(values: [any], opts: {str:} = {\n    sort_keys = False\n    ignore_private = True\n    ignore_none = False\n    sep = "---"\n})\n')),(0,a.kt)("p",null,"\u8fd9\u4e2a\u51fd\u6570\u7684\u529f\u80fd\u662f\u5c06 KCL \u5bf9\u8c61\u5217\u8868\u5e8f\u5217\u5316\u4e3a\u5e26 ",(0,a.kt)("inlineCode",{parentName:"p"},"---")," \u5206\u9694\u7b26\u7684\u6837\u5f0f YAML \u8f93\u51fa\uff0c\u5b83\u5177\u6709\u4e24\u4e2a\u53c2\u6570:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"values")," - \u4e00\u4e2a KCL \u5bf9\u8c61\u5217\u8868"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"opts")," - YAML \u5e8f\u5217\u5316\u9009\u9879",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sort_keys"),"\uff1a\u662f\u5426\u6309\u5c5e\u6027\u540d\u79f0\u7684\u5b57\u5178\u5e8f\u5bf9\u5e8f\u5217\u5316\u7ed3\u679c\u8fdb\u884c\u6392\u5e8f\uff08\u9ed8\u8ba4\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"False"),"\uff09\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ignore_private"),"\uff1a\u662f\u5426\u5ffd\u7565\u540d\u79f0\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"li"},"_")," \u5f00\u5934\u7684\u5c5e\u6027\u5e8f\u5217\u5316\u8f93\u51fa\uff08\u9ed8\u8ba4\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"True"),"\uff09\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ignore_none"),"\uff1a\u662f\u5426\u5ffd\u7565\u503c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"None")," \u7684\u5c5e\u6027\uff08\u9ed8\u8ba4\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"False"),"\uff09\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sep"),"\uff1a\u5728\u591a\u4e2a YAML \u6587\u6863\u4e4b\u95f4\u9009\u62e9\u600e\u6837\u7684\u5206\u9694\u7b26\uff08\u9ed8\u8ba4\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},'"---"'),"\uff09\u3002")))),(0,a.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u901a\u8fc7\u4e00\u4e2a\u4f8b\u5b50\u6765\u8bf4\u660e:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# \u4f7f\u7528 `import` \u5173\u952e\u8bcd\u5bfc\u5165 `manifests` \u6a21\u5757\nimport manifests\n\n# `Deployment` schema \u5b9a\u4e49\nschema Deployment:\n    apiVersion: str = "v1"\n    kind: str = "Deployment"\n    metadata: {str:} = {\n        name = "deploy"\n    }\n    spec: {str:} = {\n        replica = 2\n    }\n\n# `Service` schema \u5b9a\u4e49\nschema Service:\n    apiVersion: str = "v1"\n    kind: str = "Service"\n    metadata: {str:} = {\n         name = "svc"\n    }\n    spec: {str:} = {}\n\n# \u5b9a\u4e49\u4e24\u4e2a `Deployment` \u8d44\u6e90\ndeployments = [Deployment {}, Deployment {}]\n# \u5b9a\u4e49\u4e24\u4e2a `Service` \u8d44\u6e90\nservices = [Service {}, Service {}]\n# \u5c06\u5b83\u4eec\u653e\u5165 KCL \u5217\u8868\uff0c\u5e76\u8c03\u7528 `manifests.yaml_stream` \u51fd\u6570\u3002\nmanifests.yaml_stream(deployments + services)\n')),(0,a.kt)("p",null,"\u9996\u5148\u6211\u4eec\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"import")," \u5173\u952e\u5b57\u5bfc\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"manifests")," \u6a21\u5757\u5e76\u5b9a\u4e49 2 \u4e2a Deployment \u4ee5\u53ca 2 \u4e2a Service \u8d44\u6e90\uff0c\u5f53\u6211\u4eec\u60f3\u4ee5 YAML stream \u5e76\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"---")," \u4f5c\u4e3a\u5206\u9694\u7b26\u7684\u683c\u5f0f\u4f9d\u6b21\u8f93\u51fa\u8fd9 4 \u4e2a\u8d44\u6e90\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u5b83\u4eec\u5408\u5e76\u4e3a\u4e00\u4e2a KCL \u5217\u8868\u5e76\u4f5c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"manifests.yaml_stream")," \u51fd\u6570\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"values")," \u5f62\u53c2\u8fdb\u884c\u4f20\u5165 (\u5982\u65e0\u7279\u6b8a\u9700\u6c42\uff0copts \u53c2\u6570\u4e00\u822c\u4f7f\u7528\u9ed8\u8ba4\u503c\u5373\u53ef)\uff0c\u6700\u7ec8\u5f97\u5230 YAML \u8f93\u51fa\u4e3a:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Deployment\nmetadata:\n  name: deploy\nspec:\n  replica: 2\n---\napiVersion: v1\nkind: Deployment\nmetadata:\n  name: deploy\nspec:\n  replica: 2\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: svc\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: svc\n")))}d.isMDXComponent=!0}}]);