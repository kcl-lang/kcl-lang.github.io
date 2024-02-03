"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[45032],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=n.createContext({}),l=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(d.Provider,{value:r},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,c=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=l(t),u=a,f=m["".concat(d,".").concat(u)]||m[u]||p[u]||c;return t?n.createElement(f,o(o({ref:r},s),{},{components:t})):n.createElement(f,o({ref:r},s))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=u;var i={};for(var d in r)hasOwnProperty.call(r,d)&&(i[d]=r[d]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<c;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},72295:(e,r,t)=>{t.d(r,{Z:()=>d});var n=t(67294),a=t(86010),c=t(39960),o=t(44996);const i={disabled:"disabled_OCxU",card:"card_HCHm","Card-with-image":"Card-with-image_DUm4","Card-without-image":"Card-without-image_thTk","Card-container":"Card-container_Hxgs","Card-image":"Card-image_ud45","Card-icon":"Card-icon_KjUn","Card-iconset__container":"Card-iconset__container_Ig5G","Card-icon-default":"Card-icon-default_vE0K","Card-icon-hover":"Card-icon-hover_Rl7T","Card-icon-row":"Card-icon-row_Y7dQ","Card-icon--active":"Card-icon--active_anFW","Card-ionicon":"Card-ionicon_rF57","Card-content":"Card-content_j__g","Card-header":"Card-header_Gs72","Card-size-lg":"Card-size-lg_wdTb","markdown-content":"markdown-content_CXsk"};const d=function(e){const r=void 0===e.href,t=void 0!==e.href&&/^http/.test(e.href),d="undefined"===e.header?null:n.createElement("header",{className:i["Card-header"]},e.header),l=e.hoverIcon||e.icon,s=n.createElement(n.Fragment,null,e.img&&n.createElement("img",{src:(0,o.Z)(e.img),className:"Card-image"}),n.createElement("div",{className:i["Card-container"]},(e.icon||l)&&n.createElement("div",{className:i["Card-icon-row"]},e.icon&&n.createElement("img",{src:(0,o.Z)(e.icon),className:i["Card-icon"]+" "+i["Card-icon-default"]}),l&&n.createElement("img",{src:(0,o.Z)(l),className:i["Card-icon"]+" "+i["Card-icon-hover"]})),e.ionicon&&n.createElement("ion-icon",{name:e.ionicon,className:i["Card-ionicon"]}),e.iconset&&n.createElement("div",{className:i["Card-iconset__container"]},e.iconset.split(",").map(((r,t)=>n.createElement("img",{src:(0,o.Z)(r),className:`${i["Card-icon"]} ${t===e.activeIndex?i["Card-icon-active"]:""}`,"data-index":t,key:t})))),e.header&&d,n.createElement("div",{className:i["Card-content"]},e.children))),m=(0,a.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return r?n.createElement("docs-card",{class:i[m]},n.createElement("div",{className:(0,a.Z)(i.card,i["docs-card"])},s)):t?n.createElement("docs-card",{class:i[m]},n.createElement("a",{className:(0,a.Z)(i.card,i["docs-card"]),href:e.href,target:"_blank"},s)):n.createElement("docs-card",{class:i[m]},n.createElement(c.Z,{to:e.href,className:(0,a.Z)(i.card,i["docs-card"])},s))}},4434:(e,r,t)=>{t.d(r,{Z:()=>a});var n=t(67294);const a=function(e){return n.createElement("docs-cards",{class:e.className},e.children)}},92421:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>d,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=t(87462),a=(t(67294),t(3905)),c=t(72295),o=t(4434);const i={sidebar_position:0},d="\u6982\u89c8",l={unversionedId:"reference/model/overview",id:"reference/model/overview",title:"\u6982\u89c8",description:"KCL \u901a\u8fc7\u5185\u7f6e\u6a21\u5757\u3001\u7cfb\u7edf\u5e93\u6a21\u5757\u548c\u63d2\u4ef6\u6a21\u5757\u63d0\u4f9b\u5de5\u7a0b\u5316\u7684\u6269\u5c55\u80fd\u529b\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/reference/model/overview.md",sourceDirName:"reference/model",slug:"/reference/model/overview",permalink:"/zh-CN/docs/next/reference/model/overview",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/reference/model/overview.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1706869561,formattedLastUpdatedAt:"2024\u5e742\u67082\u65e5",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"reference",previous:{title:"\u7c7b\u578b\u7cfb\u7edf",permalink:"/zh-CN/docs/next/reference/lang/types/"},next:{title:"builtin",permalink:"/zh-CN/docs/next/reference/model/builtin"}},s={},m=[{value:"\u7cfb\u7edf\u5e93\u6a21\u5757",id:"\u7cfb\u7edf\u5e93\u6a21\u5757",level:2}],p={toc:m},u="wrapper";function f(e){let{components:r,...i}=e;return(0,a.kt)(u,(0,n.Z)({},p,i,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6982\u89c8"},"\u6982\u89c8"),(0,a.kt)("p",null,"KCL \u901a\u8fc7\u5185\u7f6e\u6a21\u5757\u3001\u7cfb\u7edf\u5e93\u6a21\u5757\u548c\u63d2\u4ef6\u6a21\u5757\u63d0\u4f9b\u5de5\u7a0b\u5316\u7684\u6269\u5c55\u80fd\u529b\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(86288).Z,width:"1544",height:"884"})),(0,a.kt)("p",null,"\u7528\u6237\u4ee3\u7801\u4e2d\u4e0d\u7528\u5bfc\u5165\u76f4\u63a5\u4f7f\u7528 builtin \u7684\u51fd\u6570\uff08\u6bd4\u5982\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"len")," \u8ba1\u7b97\u5217\u8868\u7684\u957f\u5ea6\u3001\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"typeof")," \u83b7\u53d6\u503c\u7684\u7c7b\u578b\u7b49\uff09\uff0c\u800c\u5bf9\u4e8e\u5b57\u7b26\u4e32\u7b49\u57fa\u7840\u7c7b\u578b\u4e5f\u63d0\u4f9b\u4e86\u4e00\u4e9b\u5185\u7f6e\u65b9\u6cd5\uff08\u6bd4\u5982\u8f6c\u5316\u5b57\u7b26\u4e32\u7684\u5927\u5c0f\u5199\u7b49\u65b9\u6cd5\uff09\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u76f8\u5bf9\u590d\u6742\u7684\u901a\u7528\u5de5\u4f5c\u5219\u901a\u8fc7\u6807\u51c6\u5e93\u63d0\u4f9b\uff0c\u6bd4\u5982\u901a\u8fc7 import \u5bfc\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"math")," \u5e93\u5c31\u53ef\u4ee5\u4f7f\u7528\u76f8\u5173\u7684\u6570\u5b66\u51fd\u6570\uff0c\u53ef\u4ee5\u901a\u8fc7\u5bfc\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"regex")," \u5e93\u4f7f\u7528\u6b63\u5219\u8868\u8fbe\u5f0f\u5e93\u3002"),(0,a.kt)("h2",{id:"\u7cfb\u7edf\u5e93\u6a21\u5757"},"\u7cfb\u7edf\u5e93\u6a21\u5757"),(0,a.kt)(o.Z,{mdxType:"DocsCards"},(0,a.kt)(c.Z,{header:"\u5185\u7f6e\u51fd\u6570",href:"builtin",mdxType:"DocsCard"},(0,a.kt)("p",null,"\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u7684\u5185\u7f6e\u51fd\u6570")),(0,a.kt)(c.Z,{header:"base64",href:"base64",mdxType:"DocsCard"},(0,a.kt)("p",null,"\u63d0\u4f9b\u4e86 Base64\uff08RFC 3548\uff09\u6570\u636e\u7f16\u7801\u51fd\u6570\u3002")),(0,a.kt)(c.Z,{header:"crypto",href:"crypto",mdxType:"DocsCard"},(0,a.kt)("p",null,"\u63d0\u4f9b\u4e86\u5e38\u89c1\u52a0\u5bc6\u7b97\u6cd5\u548c\u534f\u8bae\u7684\u5b9e\u73b0\u3002")),(0,a.kt)(c.Z,{header:"datetime",href:"datetime",mdxType:"DocsCard"},(0,a.kt)("p",null,"\u5177\u4f53\u7684\u65e5\u671f/\u65f6\u95f4\u548c\u76f8\u5173\u7c7b\u578b\u548c\u51fd\u6570\u3002")),(0,a.kt)(c.Z,{header:"json",href:"json",mdxType:"DocsCard"},(0,a.kt)("p",null,"\u63d0\u4f9b\u4e86\u4e0e JSON \u76f8\u5173\u7684\u7f16\u7801/\u89e3\u7801\u51fd\u6570\u3002")),(0,a.kt)(c.Z,{header:"manifests",href:"manifests",mdxType:"DocsCard"},(0,a.kt)("p",null,"\u63d0\u4f9b\u4e86\u7ed3\u6784\u5e8f\u5217\u5316\u8f93\u51fa KCL \u6570\u636e\u7684\u80fd\u529b\u3002")),(0,a.kt)(c.Z,{header:"math",href:"math",mdxType:"DocsCard"},(0,a.kt)("p",null,"\u63d0\u4f9b\u4e86\u5e38\u7528\u7684\u6570\u5b66\u8ba1\u7b97\u51fd\u6570\u3002")),(0,a.kt)(c.Z,{header:"net",href:"net",mdxType:"DocsCard"},(0,a.kt)("p",null,"\u4e00\u4e2a\u8f7b\u91cf\u7ea7\u7684 IPv4/IPv6 \u64cd\u4f5c\u5e93\u3002")),(0,a.kt)(c.Z,{header:"regex",href:"regex",mdxType:"DocsCard"},(0,a.kt)("p",null,"\u63d0\u4f9b\u4e86\u5e38\u7528\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u51fd\u6570\u3002")),(0,a.kt)(c.Z,{header:"units",href:"units",mdxType:"DocsCard"},(0,a.kt)("p",null,"\u63d0\u4f9b\u4e86\u4e00\u4e9b\u6570\u5b57\u548c\u56fd\u9645\u6807\u51c6\u5355\u4f4d\u4e4b\u95f4\u7684\u8f6c\u6362\u51fd\u6570\u3002")),(0,a.kt)(c.Z,{header:"yaml",href:"yaml",mdxType:"DocsCard"},(0,a.kt)("p",null,"\u63d0\u4f9b\u4e86\u4e0e YAML \u76f8\u5173\u7684\u7f16\u7801/\u89e3\u7801\u51fd\u6570\u3002"))))}f.isMDXComponent=!0},86288:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/kcl-module-932adc11509c27525525ea8b2bd715f5.png"}}]);