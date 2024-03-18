"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[71667],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>g});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),d=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=d(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(t),p=a,g=u["".concat(s,".").concat(p)]||u[p]||m[p]||i;return t?n.createElement(g,o(o({ref:r},l),{},{components:t})):n.createElement(g,o({ref:r},l))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var d=2;d<i;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},72295:(e,r,t)=>{t.d(r,{Z:()=>s});var n=t(67294),a=t(86010),i=t(39960),o=t(44996);const c={disabled:"disabled_OCxU",card:"card_HCHm","Card-with-image":"Card-with-image_DUm4","Card-without-image":"Card-without-image_thTk","Card-container":"Card-container_Hxgs","Card-image":"Card-image_ud45","Card-icon":"Card-icon_KjUn","Card-iconset__container":"Card-iconset__container_Ig5G","Card-icon-default":"Card-icon-default_vE0K","Card-icon-hover":"Card-icon-hover_Rl7T","Card-icon-row":"Card-icon-row_Y7dQ","Card-icon--active":"Card-icon--active_anFW","Card-ionicon":"Card-ionicon_rF57","Card-content":"Card-content_j__g","Card-header":"Card-header_Gs72","Card-size-lg":"Card-size-lg_wdTb","markdown-content":"markdown-content_CXsk"};const s=function(e){const r=void 0===e.href,t=void 0!==e.href&&/^http/.test(e.href),s="undefined"===e.header?null:n.createElement("header",{className:c["Card-header"]},e.header),d=e.hoverIcon||e.icon,l=n.createElement(n.Fragment,null,e.img&&n.createElement("img",{src:(0,o.Z)(e.img),className:"Card-image"}),n.createElement("div",{className:c["Card-container"]},(e.icon||d)&&n.createElement("div",{className:c["Card-icon-row"]},e.icon&&n.createElement("img",{src:(0,o.Z)(e.icon),className:c["Card-icon"]+" "+c["Card-icon-default"]}),d&&n.createElement("img",{src:(0,o.Z)(d),className:c["Card-icon"]+" "+c["Card-icon-hover"]})),e.ionicon&&n.createElement("ion-icon",{name:e.ionicon,className:c["Card-ionicon"]}),e.iconset&&n.createElement("div",{className:c["Card-iconset__container"]},e.iconset.split(",").map(((r,t)=>n.createElement("img",{src:(0,o.Z)(r),className:`${c["Card-icon"]} ${t===e.activeIndex?c["Card-icon-active"]:""}`,"data-index":t,key:t})))),e.header&&s,n.createElement("div",{className:c["Card-content"]},e.children))),u=(0,a.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return r?n.createElement("docs-card",{class:c[u]},n.createElement("div",{className:(0,a.Z)(c.card,c["docs-card"])},l)):t?n.createElement("docs-card",{class:c[u]},n.createElement("a",{className:(0,a.Z)(c.card,c["docs-card"]),href:e.href,target:"_blank"},l)):n.createElement("docs-card",{class:c[u]},n.createElement(i.Z,{to:e.href,className:(0,a.Z)(c.card,c["docs-card"])},l))}},4434:(e,r,t)=>{t.d(r,{Z:()=>a});var n=t(67294);const a=function(e){return n.createElement("docs-cards",{class:e.className},e.children)}},79030:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>c,metadata:()=>d,toc:()=>u});var n=t(87462),a=(t(67294),t(3905)),i=t(72295),o=t(4434);const c={title:"\u6982\u8ff0",sidebar_position:0},s=void 0,d={unversionedId:"user_docs/guides/working-with-k8s/overview",id:"version-0.8/user_docs/guides/working-with-k8s/overview",title:"\u6982\u8ff0",description:"Kubernetes",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.8/user_docs/guides/working-with-k8s/0-overview.md",sourceDirName:"user_docs/guides/working-with-k8s",slug:"/user_docs/guides/working-with-k8s/overview",permalink:"/zh-CN/docs/user_docs/guides/working-with-k8s/overview",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.8/user_docs/guides/working-with-k8s/0-overview.md",tags:[],version:"0.8",lastUpdatedBy:"peefy",lastUpdatedAt:1710771316,formattedLastUpdatedAt:"2024\u5e743\u670818\u65e5",sidebarPosition:0,frontMatter:{title:"\u6982\u8ff0",sidebar_position:0},sidebar:"user_docs",previous:{title:"\u652f\u6301 OCI Registries",permalink:"/zh-CN/docs/user_docs/guides/package-management/how-to/kpm_oci"},next:{title:"\u4ece Kubernetes \u8fc1\u79fb\u6216\u96c6\u6210",permalink:"/zh-CN/docs/user_docs/guides/working-with-k8s/adopt-from-kubernetes"}},l={},u=[{value:"Kubernetes",id:"kubernetes",level:2},{value:"\u7528\u4f8b",id:"\u7528\u4f8b",level:2},{value:"\u6587\u6863",id:"\u6587\u6863",level:2}],m={toc:u},p="wrapper";function g(e){let{components:r,...t}=e;return(0,a.kt)(p,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"kubernetes"},"Kubernetes"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/"},"Kubernetes")," \u662f\u4e00\u4e2a\u5f00\u6e90\u9879\u76ee\uff0c\u7528\u4e8e\u5728\u4e00\u7ec4\u673a\u5668\u96c6\u7fa4\u4e0a\u8fd0\u884c\u548c\u7ba1\u7406\u5bb9\u5668\u5316\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang"},"KCL")," \u53ef\u4ee5\u5c06 Kubernetes \u8d44\u6e90 API \u516c\u5f00\u4e3a\u8de8\u5e38\u89c1\u4e91\u539f\u751f\u5de5\u5177\u548c\u5e94\u7528\u7a0b\u5e8f\u7684 KCL \u4ee3\u7801\u6a21\u5757\u3002\u6b64\u5916\uff0c\u53ef\u4ee5\u4f7f\u7528 KCL \u56f4\u7ed5\u8fd9\u4e9b API \u6a21\u5757\u8fdb\u884c\u7f16\u7a0b\u548c\u914d\u7f6e\u3001\u7b56\u7565\u7ba1\u7406\u3002"),(0,a.kt)("h2",{id:"\u7528\u4f8b"},"\u7528\u4f8b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u52a8\u6001\u914d\u7f6e\u7b56\u7565\u7ba1\u7406"),"\uff1a\u4f7f\u7528\u73b0\u4ee3\u8bed\u8a00\uff08\u5305\u62ec\u51fd\u6570\u3001\u7c7b\u578b\u3001\u6761\u4ef6\u8bed\u53e5\u548c\u4e30\u5bcc\u7684 IDE \u96c6\u6210\u5f00\u53d1\u73af\u5883\u529f\u80fd\uff09\u6765\u521b\u5efa\u3001\u7f16\u6392\u3001\u66f4\u6539\u6216\u9a8c\u8bc1\u5e94\u7528\u8d1f\u8f7d\u7684 Kubernetes API \u8d44\u6e90\uff0c\u800c\u4e0d\u662f\u4f7f\u7528 YAML\u3001JSON\u3001\u811a\u672c\u548c\u6a21\u677f\u7b49\u65b9\u5f0f\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u63a5\u5165 Kubernetes \u5df2\u6709\u751f\u6001"),"\uff1a\u5c06 Kubernetes \u914d\u7f6e\u6e05\u5355\u548c\u81ea\u5b9a\u4e49\u8d44\u6e90\u7c7b\u578b\u8f6c\u6362\u4e3a KCL \u914d\u7f6e\u548c Schema \u5e76\u4f7f\u7528\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Kubernetes \u5305\u7ba1\u7406"),"\uff1a\u4f7f\u7528 KCL \u5305\u7ba1\u7406\u5de5\u5177\u4ece Registry \u4e0b\u8f7d\u5b89\u88c5\u548c\u53d1\u5e03\u5e94\u7528\u8d1f\u8f7d\u3001\u5bb9\u5668\u548c\u670d\u52a1\u7b49\u6a21\u578b\u3002")),(0,a.kt)("h2",{id:"\u6587\u6863"},"\u6587\u6863"),(0,a.kt)(o.Z,{mdxType:"DocsCards"},(0,a.kt)(i.Z,{header:"\u4ece Kubernetes \u8fc1\u79fb",href:"adopt-from-kubernetes",mdxType:"DocsCard"},(0,a.kt)("p",null,"\u5c06 Kubernetes \u6e05\u5355\u548c CRD \u8f6c\u6362\u4e3a KCL \u4ee3\u7801\u7684\u6307\u5357\u3002")),(0,a.kt)(i.Z,{header:"Kubernetes \u914d\u7f6e\u7ba1\u7406",href:"generate-k8s-manifests",mdxType:"DocsCard"},(0,a.kt)("p",null,"\u4f7f\u7528 KCL \u751f\u6210 Kubernetes \u6e05\u5355\u7684\u6307\u5357\u3002")),(0,a.kt)(i.Z,{header:"\u4e91\u539f\u751f\u5de5\u5177\u96c6\u6210",href:"mutate-manifests/kubectl-kcl-plugin",mdxType:"DocsCard"},(0,a.kt)("p",null,"\u63d0\u4f9b\u4e00\u4e9b\u4e91\u539f\u751f\u5de5\u5177\u96c6\u6210\uff0c\u4ee5\u53ca\u4f7f\u7528 KCL \u6a21\u5757\u5bf9 Kubernetes \u6e05\u5355\u8fdb\u884c\u53d8\u5f02\u6216\u9a8c\u8bc1\u7684\u6307\u5357\u3002"))))}g.isMDXComponent=!0}}]);