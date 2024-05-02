"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[24959],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=i(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[m]="string"==typeof e?e:a,o[1]=c;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82001:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const l={title:"template",linkTitle:"template",type:"docs",description:"\u6a21\u7248\u64cd\u4f5c",weight:100},o=void 0,c={unversionedId:"reference/model/template",id:"reference/model/template",title:"template",description:"\u6a21\u7248\u64cd\u4f5c",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/reference/model/template.md",sourceDirName:"reference/model",slug:"/reference/model/template",permalink:"/zh-CN/docs/next/reference/model/template",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/reference/model/template.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1714663025,formattedLastUpdatedAt:"2024\u5e745\u67082\u65e5",frontMatter:{title:"template",linkTitle:"template",type:"docs",description:"\u6a21\u7248\u64cd\u4f5c",weight:100},sidebar:"reference",previous:{title:"regex",permalink:"/zh-CN/docs/next/reference/model/regex"},next:{title:"units",permalink:"/zh-CN/docs/next/reference/model/units"}},p={},i=[{value:"execute",id:"execute",level:2},{value:"html_escape",id:"html_escape",level:2}],s={toc:i},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"execute"},"execute"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"execute(template: str, data: {str:any} = {}) -> str")),(0,a.kt)("p",null,"\u5c06\u89e3\u6790\u8fc7\u7684\u6a21\u677f\u5e94\u7528\u4e8e\u6307\u5b9a\u7684\u6570\u636e\u5bf9\u8c61\uff0c\u5e76\u8fd4\u56de\u5b57\u7b26\u4e32\u8f93\u51fa\u3002\u67e5\u770b ",(0,a.kt)("a",{parentName:"p",href:"https://handlebarsjs.com/"},"https://handlebarsjs.com/")," \u83b7\u53d6\u66f4\u591a\u6587\u6863\u548c\u793a\u4f8b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python3"},'import template\n\ncontent = template.execute("""\\\n<div class="entry">\n{{#if author}}\n<h1>{{firstName}} {{lastName}}</h1>\n{{/if}}\n</div>\n""", {\n  author: True,\n  firstName: "Yehuda",\n  lastName: "Katz",\n})\n')),(0,a.kt)("h2",{id:"html_escape"},"html_escape"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"html_escape(data: str) -> str")),(0,a.kt)("p",null,"\u5c06\u5b57\u7b26 ",(0,a.kt)("inlineCode",{parentName:"p"},'&"<>')," \u66ff\u6362\u4e3a\u7b49\u6548\u7684 html / xml\u5b9e\u4f53\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python3"},'\nimport template\n\ncontent = template.html_escape("""\\\n<div class="entry">\n{{#if author}}\n<h1>{{firstName}} {{lastName}}</h1>\n{{/if}}\n</div>\n""")\n')))}u.isMDXComponent=!0}}]);