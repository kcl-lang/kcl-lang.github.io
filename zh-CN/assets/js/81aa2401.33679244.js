"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[95535],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(n),m=l,f=s["".concat(d,".").concat(m)]||s[m]||u[m]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[s]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68493:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),l=(n(67294),n(3905));const a={title:"yaml",linkTitle:"yaml",type:"docs",description:"yaml \u7f16\u7801\u89e3\u7801",weight:300},o=void 0,i={unversionedId:"reference/model/yaml",id:"version-0.7.0/reference/model/yaml",title:"yaml",description:"yaml \u7f16\u7801\u89e3\u7801",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.7.0/reference/model/yaml.md",sourceDirName:"reference/model",slug:"/reference/model/yaml",permalink:"/zh-CN/docs/0.7.0/reference/model/yaml",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.7.0/reference/model/yaml.md",tags:[],version:"0.7.0",lastUpdatedBy:"peefy",lastUpdatedAt:1709797004,formattedLastUpdatedAt:"2024\u5e743\u67087\u65e5",frontMatter:{title:"yaml",linkTitle:"yaml",type:"docs",description:"yaml \u7f16\u7801\u89e3\u7801",weight:300},sidebar:"reference",previous:{title:"units",permalink:"/zh-CN/docs/0.7.0/reference/model/units"},next:{title:"\u63d2\u4ef6\u7cfb\u7edf",permalink:"/zh-CN/docs/0.7.0/reference/plugin/"}},d={},c=[{value:"encode",id:"encode",level:2},{value:"encode_all",id:"encode_all",level:2},{value:"decode",id:"decode",level:2},{value:"decode_all",id:"decode_all",level:2},{value:"dump_to_file",id:"dump_to_file",level:2},{value:"validate",id:"validate",level:2}],p={toc:c},s="wrapper";function u(e){let{components:t,...n}=e;return(0,l.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"encode"},"encode"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"encode(\n    data: any,\n    sort_keys: bool = False,\n    ignore_private: bool = False,\n    ignore_none: bool = False\n) -> str\n")),(0,l.kt)("p",null,"\u5c06 KCL \u5bf9\u8c61 ",(0,l.kt)("inlineCode",{parentName:"p"},"data")," \u5e8f\u5217\u5316\u4e3a YAML \u683c\u5f0f\u7684\u5b57\u7b26\u4e32\u3002"),(0,l.kt)("h2",{id:"encode_all"},"encode_all"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"encode(\n    data: [any],\n    sort_keys: bool = False,\n    ignore_private: bool = False,\n    ignore_none: bool = False\n) -> str\n")),(0,l.kt)("p",null,"\u5c06 KCL \u5bf9\u8c61\u5217\u8868 ",(0,l.kt)("inlineCode",{parentName:"p"},"data")," \u5e8f\u5217\u5316\u4e3a\u5305\u542b ",(0,l.kt)("inlineCode",{parentName:"p"},"---")," \u5206\u9694\u7b26\u7684 YAML Stream \u683c\u5f0f\u7684\u5b57\u7b26\u4e32\u3002"),(0,l.kt)("h2",{id:"decode"},"decode"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"decode(value: str) -> any")),(0,l.kt)("p",null,"\u53cd\u5e8f\u5217\u5316 ",(0,l.kt)("inlineCode",{parentName:"p"},"value"),"\uff08\u4e00\u4e2a\u5305\u542b YAML \u683c\u5f0f\u6587\u6863\u7684\u5b57\u7b26\u4e32\u5b9e\u4f8b\uff09\u4e3a\u4e00\u4e2a KCL \u5bf9\u8c61\u3002"),(0,l.kt)("h2",{id:"decode_all"},"decode_all"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"decode_all(value: str) -> [any]")),(0,l.kt)("p",null,"\u53cd\u5e8f\u5217\u5316 ",(0,l.kt)("inlineCode",{parentName:"p"},"value"),"\uff08\u4e00\u4e2a\u5305\u542b ",(0,l.kt)("inlineCode",{parentName:"p"},"---")," \u5206\u9694\u7b26\u7684 YAML Stream \u683c\u5f0f\u6587\u6863\u7684\u5b57\u7b26\u4e32\u5b9e\u4f8b\uff09\u4e3a\u4e00\u4e2a KCL \u5bf9\u8c61\u5217\u8868\u3002"),(0,l.kt)("h2",{id:"dump_to_file"},"dump_to_file"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"dump_to_file(\n    data: any,\n    filename: str,\n    sort_keys: bool = False,\n    ignore_private: bool = False,\n    ignore_none: bool = False\n) -> None\n")),(0,l.kt)("p",null,"\u5c06 KCL \u5bf9\u8c61 ",(0,l.kt)("inlineCode",{parentName:"p"},"data")," \u5e8f\u5217\u5316\u4e3a YAML \u683c\u5f0f\u7684\u5b57\u7b26\u4e32\uff0c\u5e76\u5c06\u5176\u5199\u5165\u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},"filename")," \u4e2d\u3002"),(0,l.kt)("h2",{id:"validate"},"validate"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"validate(value: str) -> bool\n")),(0,l.kt)("p",null,"\u9a8c\u8bc1\u7ed9\u5b9a\u7684\u5b57\u7b26\u4e32\u662f\u5426\u662f\u4e00\u4e2a\u5408\u6cd5\u7684 YAML \u6216\u8005 YAML Stream \u683c\u5f0f\u7684\u5b57\u7b26\u4e32\u3002"))}u.isMDXComponent=!0}}]);