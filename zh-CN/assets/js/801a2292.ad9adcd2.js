"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[40632],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),k=l,m=u["".concat(c,".").concat(k)]||u[k]||d[k]||a;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=k;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:l,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},42855:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),l=(n(67294),n(3905));const a={sidebar_position:1},o="\u5feb\u901f\u5f00\u59cb",i={unversionedId:"tools/cli/openapi/quick-start",id:"version-0.5.0/tools/cli/openapi/quick-start",title:"\u5feb\u901f\u5f00\u59cb",description:"1. \u5b89\u88c5 KCLOpenAPI \u5de5\u5177",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.5.0/tools/cli/openapi/quick-start.md",sourceDirName:"tools/cli/openapi",slug:"/tools/cli/openapi/quick-start",permalink:"/zh-CN/docs/0.5.0/tools/cli/openapi/quick-start",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.0/tools/cli/openapi/quick-start.md",tags:[],version:"0.5.0",lastUpdatedBy:"peefy",lastUpdatedAt:1701659761,formattedLastUpdatedAt:"2023\u5e7412\u67084\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tools",previous:{title:"OpenAPI Tools",permalink:"/zh-CN/docs/0.5.0/tools/cli/openapi/"},next:{title:"CRD to KCL",permalink:"/zh-CN/docs/0.5.0/tools/cli/openapi/crd-to-kcl"}},c={},p=[{value:"1. \u5b89\u88c5 KCLOpenAPI \u5de5\u5177",id:"1-\u5b89\u88c5-kclopenapi-\u5de5\u5177",level:2},{value:"1.1 \u901a\u8fc7 go install \u5b89\u88c5",id:"11-\u901a\u8fc7-go-install-\u5b89\u88c5",level:2},{value:"1.2 \u901a\u8fc7 curl|sh \u5b89\u88c5\uff08\u4ec5\u9650 MacOS &amp; Linux\uff09",id:"12-\u901a\u8fc7-curlsh-\u5b89\u88c5\u4ec5\u9650-macos--linux",level:2},{value:"1.3 \u4e0b\u8f7d\u53d1\u5e03\u5305",id:"13-\u4e0b\u8f7d\u53d1\u5e03\u5305",level:2},{value:"1.4 \u9a8c\u8bc1\u5b89\u88c5\u7ed3\u679c",id:"14-\u9a8c\u8bc1\u5b89\u88c5\u7ed3\u679c",level:2},{value:"2. \u751f\u6210 KCL \u6587\u4ef6",id:"2-\u751f\u6210-kcl-\u6587\u4ef6",level:2}],s={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,l.kt)("h2",{id:"1-\u5b89\u88c5-kclopenapi-\u5de5\u5177"},"1. \u5b89\u88c5 KCLOpenAPI \u5de5\u5177"),(0,l.kt)("p",null,"\u76ee\u524d\u6709\u591a\u79cd\u5b89\u88c5\u65b9\u5f0f\u53ef\u9009\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#11-%E9%80%9A%E8%BF%87-go-install-%E5%AE%89%E8%A3%85"},"\u901a\u8fc7 go install \u5b89\u88c5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#12-%E9%80%9A%E8%BF%87-curlsh-%E5%AE%89%E8%A3%85%EF%BC%88%E4%BB%85%E9%99%90-MacOS--Linux%EF%BC%89"},"\u901a\u8fc7 curl|sh \u5b89\u88c5\uff08\u4ec5\u9650 MacOS & Linux\uff09")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#13-%E4%B8%8B%E8%BD%BD%E5%8F%91%E5%B8%83%E5%8C%85"},"\u4e0b\u8f7d\u53d1\u5e03\u5305"))),(0,l.kt)("h2",{id:"11-\u901a\u8fc7-go-install-\u5b89\u88c5"},"1.1 \u901a\u8fc7 go install \u5b89\u88c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"go install kcl-lang.io/kcl-openapi@latest\n")),(0,l.kt)("h2",{id:"12-\u901a\u8fc7-curlsh-\u5b89\u88c5\u4ec5\u9650-macos--linux"},"1.2 \u901a\u8fc7 curl|sh \u5b89\u88c5\uff08\u4ec5\u9650 MacOS & Linux\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -fsSL https://kcl-lang.io/script/install-kcl-openapi.sh | /bin/bash\n")),(0,l.kt)("h2",{id:"13-\u4e0b\u8f7d\u53d1\u5e03\u5305"},"1.3 \u4e0b\u8f7d\u53d1\u5e03\u5305"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'# 1. \u4e0b\u8f7d\u4e8c\u8fdb\u5236\u7a0b\u5e8f\n# https://github.com/kcl-lang/kcl-openapi/releases\n\n# 2. \u89e3\u538b\u53d1\u5e03\u5305\uff0c\u5e76\u5c06\u547d\u4ee4\u6dfb\u52a0\u81f3 PATH\nexport PATH="<Your directory to store KCLOpenapi binary>:$PATH"\n')),(0,l.kt)("h2",{id:"14-\u9a8c\u8bc1\u5b89\u88c5\u7ed3\u679c"},"1.4 \u9a8c\u8bc1\u5b89\u88c5\u7ed3\u679c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\u279c  kcl-openapi -v\nkcl-openapi 0.5.0\n")),(0,l.kt)("h2",{id:"2-\u751f\u6210-kcl-\u6587\u4ef6"},"2. \u751f\u6210 KCL \u6587\u4ef6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/0.5.0/tools/cli/openapi/openapi-to-kcl"},"\u5c06 OpenAPI \u63cf\u8ff0\u6587\u4ef6\u8f6c\u6362\u4e3a KCL")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/0.5.0/tools/cli/openapi/crd-to-kcl"},"\u5c06 Kubernetes CRD \u8f6c\u6362\u4e3a KCL"))))}d.isMDXComponent=!0}}]);