"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[63187],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),k=o,m=p["".concat(c,".").concat(k)]||p[k]||d[k]||i;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=k;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},27350:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const i={},a="KusionStack",s={unversionedId:"user_docs/guides/working-with-kusion/index",id:"version-0.7/user_docs/guides/working-with-kusion/index",title:"KusionStack",description:"KusionStack \u662f\u5f00\u6e90\u7684\u4e91\u539f\u751f\u53ef\u7f16\u7a0b\u6280\u672f\u6808\uff01",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.7/user_docs/guides/working-with-kusion/index.md",sourceDirName:"user_docs/guides/working-with-kusion",slug:"/user_docs/guides/working-with-kusion/",permalink:"/zh-CN/docs/0.7/user_docs/guides/working-with-kusion/",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.7/user_docs/guides/working-with-kusion/index.md",tags:[],version:"0.7",lastUpdatedBy:"peefy",lastUpdatedAt:1710906677,formattedLastUpdatedAt:"2024\u5e743\u670820\u65e5",frontMatter:{},sidebar:"user_docs",previous:{title:"Validate Terraform Configuration",permalink:"/zh-CN/docs/0.7/user_docs/guides/working-with-terraform/validation"},next:{title:"KubeVela",permalink:"/zh-CN/docs/0.7/user_docs/guides/working-with-kubevela/"}},c={},u=[],l={toc:u},p="wrapper";function d(e){let{components:t,...i}=e;return(0,o.kt)(p,(0,n.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kusionstack"},"KusionStack"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"KusionStack \u662f\u5f00\u6e90\u7684\u4e91\u539f\u751f\u53ef\u7f16\u7a0b\u6280\u672f\u6808\uff01")),(0,o.kt)("p",null,"KusionStack \u662f\u4e00\u4e2a\u53ef\u7f16\u7a0b\u3001\u9ad8\u7075\u6d3b\u6027\u7684\u5e94\u7528\u4ea4\u4ed8\u53ca\u8fd0\u7ef4\u6280\u672f\u6808\uff0c\u7075\u611f\u6e90\u4e8e\u878d\u5408\uff08Fusion\uff09\u4e00\u8bcd\uff0c\u65e8\u5728\u5e2e\u52a9\u4f01\u4e1a\u6784\u5efa\u7684\u5e94\u7528\u8fd0\u7ef4\u914d\u7f6e\u7ba1\u7406\u5e73\u9762\u53ca DevOps \u751f\u6001\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u878d\u5408",(0,o.kt)("strong",{parentName:"li"},"\u4e13\u6709\u4e91"),"\uff0c",(0,o.kt)("strong",{parentName:"li"},"\u6df7\u5408\u4e91"),"\uff0c",(0,o.kt)("strong",{parentName:"li"},"\u591a\u4e91"),"\u6df7\u5408\u573a\u666f"),(0,o.kt)("li",{parentName:"ol"},"\u878d\u5408\u4ee5",(0,o.kt)("strong",{parentName:"li"},"\u4e91\u539f\u751f\u6280\u672f"),"\u4e3a\u4e3b\uff0c\u540c\u65f6\u91c7\u7528",(0,o.kt)("strong",{parentName:"li"},"\u591a\u79cd\u5e73\u53f0\u6280\u672f"),"\u7684\u6df7\u5408\u5e73\u53f0\u6280\u672f\u9009\u578b"),(0,o.kt)("li",{parentName:"ol"},"\u878d\u5408",(0,o.kt)("strong",{parentName:"li"},"\u591a\u9879\u76ee"),"\u3001",(0,o.kt)("strong",{parentName:"li"},"\u591a\u56e2\u961f"),"\u3001",(0,o.kt)("strong",{parentName:"li"},"\u591a\u89d2\u8272"),"\u3001",(0,o.kt)("strong",{parentName:"li"},"\u591a\u79df\u6237"),"\u3001",(0,o.kt)("strong",{parentName:"li"},"\u591a\u73af\u5883"),"\u7684\u4f01\u4e1a\u7ea7\u8bc9\u6c42")),(0,o.kt)("p",null,"\u57fa\u4e8e Platform as Code \uff08\u5e73\u53f0\u670d\u52a1\u5373\u4ee3\u7801\uff09\u7406\u5ff5\uff0c\u7814\u53d1\u8005\u53ef\u4ee5\u5feb\u901f\u6536\u655b\u56f4\u7ed5",(0,o.kt)("strong",{parentName:"p"},"\u5e94\u7528\u8fd0\u7ef4\u751f\u547d\u5468\u671f"),"\u7684\u5168\u91cf\u914d\u7f6e\u5b9a\u4e49\uff0c\u9762\u5411",(0,o.kt)("strong",{parentName:"p"},"\u6df7\u5408\u6280\u672f\u4f53\u7cfb\u53ca\u4e91\u73af\u5883"),"\uff0c\u5b8c\u6210\u4ece\u5e94\u7528\u8fd0\u7ef4\u7814\u53d1\u5230\u4e0a\u7ebf\u7684",(0,o.kt)("strong",{parentName:"p"},"\u7aef\u5230\u7aef\u5de5\u4f5c\u6d41\u7a0b"),"\uff0c\u771f\u6b63\u505a\u5230",(0,o.kt)("strong",{parentName:"p"},"\u4e00\u5904\u7f16\u5199\uff0c\u968f\u5904\u4ea4\u4ed8"),"\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(43007).Z,width:"2852",height:"962"})),(0,o.kt)("p",null,"\u66f4\u591a\u6587\u6863\u8bf7\u53c2\u8003: ",(0,o.kt)("a",{parentName:"p",href:"https://kusionstack.io/"},"https://kusionstack.io/")))}d.isMDXComponent=!0},43007:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/kusion-stack-1-494a7deb96c7270018a08019da33e6fb.png"}}]);