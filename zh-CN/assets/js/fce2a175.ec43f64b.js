"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[8136],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>s});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),i=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},u=function(e){var n=i(e.components);return t.createElement(p.Provider,{value:n},e.children)},k="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),k=i(r),d=a,s=k["".concat(p,".").concat(d)]||k[d]||m[d]||l;return r?t.createElement(s,c(c({ref:n},u),{},{components:r})):t.createElement(s,c({ref:n},u))}));function s(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,c=new Array(l);c[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[k]="string"==typeof e?e:a,c[1]=o;for(var i=2;i<l;i++)c[i]=r[i];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},44031:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var t=r(87462),a=(r(67294),r(3905));const l={},c="kpm run",o={unversionedId:"reference/package-management/command-reference/run",id:"version-0.5.6/reference/package-management/command-reference/run",title:"kpm run",description:"\u7f16\u8bd1\u4e00\u4e2a kcl \u5305\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.5.6/reference/package-management/command-reference/5.run.md",sourceDirName:"reference/package-management/command-reference",slug:"/reference/package-management/command-reference/run",permalink:"/zh-CN/docs/0.5.6/reference/package-management/command-reference/run",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.6/reference/package-management/command-reference/5.run.md",tags:[],version:"0.5.6",lastUpdatedBy:"peefy",lastUpdatedAt:1701659761,formattedLastUpdatedAt:"2023\u5e7412\u67084\u65e5",sidebarPosition:5,frontMatter:{},sidebar:"reference",previous:{title:"kpm metadata",permalink:"/zh-CN/docs/0.5.6/reference/package-management/command-reference/metadata"},next:{title:"kpm login",permalink:"/zh-CN/docs/0.5.6/reference/package-management/command-reference/login"}},p={},i=[{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u9009\u9879",id:"\u9009\u9879",level:2},{value:"--input",id:"--input",level:3},{value:"--tag",id:"--tag",level:3},{value:"--vendor",id:"--vendor",level:3},{value:"--kcl_args",id:"--kcl_args",level:3},{value:"--help, -h",id:"--help--h",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u7f16\u8bd1\u5f53\u524d kcl \u5305",id:"\u7f16\u8bd1\u5f53\u524d-kcl-\u5305",level:3},{value:"\u7f16\u8bd1\u4e00\u4e2a kcl \u5305 tar \u6587\u4ef6",id:"\u7f16\u8bd1\u4e00\u4e2a-kcl-\u5305-tar-\u6587\u4ef6",level:3},{value:"\u7f16\u8bd1\u4e00\u4e2a kcl \u5305\u6765\u81ea oci url",id:"\u7f16\u8bd1\u4e00\u4e2a-kcl-\u5305\u6765\u81ea-oci-url",level:3},{value:"\u7f16\u8bd1\u4e00\u4e2a kcl \u5305\u6765\u81ea oci ref",id:"\u7f16\u8bd1\u4e00\u4e2a-kcl-\u5305\u6765\u81ea-oci-ref",level:3}],u={toc:i},k="wrapper";function m(e){let{components:n,...r}=e;return(0,a.kt)(k,(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kpm-run"},"kpm run"),(0,a.kt)("p",null,"\u7f16\u8bd1\u4e00\u4e2a kcl \u5305\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kpm run [options][package_source]\n")),(0,a.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kpm run")," \u4f1a\u7f16\u8bd1\u4e00\u4e2a kcl \u5305\u3002"),(0,a.kt)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),(0,a.kt)("h3",{id:"--input"},"--input"),(0,a.kt)("p",null,"\u6307\u5b9a\u5305\u7684\u5165\u53e3\u6587\u4ef6\u8def\u5f84\u3002"),(0,a.kt)("h3",{id:"--tag"},"--tag"),(0,a.kt)("p",null,"\u6307\u5b9a oci url \u7684\u5305\u7684 tag\u3002"),(0,a.kt)("h3",{id:"--vendor"},"--vendor"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--vendor")," \u9009\u9879\u4f1a\u5c06\u4f9d\u8d56\u5305\u79fb\u52a8\u5230\u5f53\u524d\u5305\uff0c\u5e76\u81ea\u52a8\u4e0b\u8f7d\u7f3a\u5931\u7684\u4f9d\u8d56\u5305\u3002"),(0,a.kt)("h3",{id:"--kcl_args"},"--kcl_args"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--kcl_args")," \u63cf\u8ff0\u4e86\u4f20\u9012\u7ed9 kcl \u7f16\u8bd1\u5668\u7684\u53c2\u6570\u3002"),(0,a.kt)("h3",{id:"--help--h"},"--help, -h"),(0,a.kt)("p",null,"\u5c55\u793a ",(0,a.kt)("inlineCode",{parentName:"p"},"kpm run")," \u547d\u4ee4\u7684\u5e2e\u52a9\u4fe1\u606f\u3002"),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("h3",{id:"\u7f16\u8bd1\u5f53\u524d-kcl-\u5305"},"\u7f16\u8bd1\u5f53\u524d kcl \u5305"),(0,a.kt)("p",null,"\u5728 kcl \u5305\u76ee\u5f55\u4e0b\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"kpm run")," \u53ef\u4ee5\u7528\u4e8e\u7f16\u8bd1\u5f53\u524d kcl \u5305\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kpm run\n")),(0,a.kt)("h3",{id:"\u7f16\u8bd1\u4e00\u4e2a-kcl-\u5305-tar-\u6587\u4ef6"},"\u7f16\u8bd1\u4e00\u4e2a kcl \u5305 tar \u6587\u4ef6"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kpm run")," \u53ef\u4ee5\u7528\u4e8e\u7f16\u8bd1\u4e00\u4e2a kcl \u5305 tar \u6587\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kpm run /Users/demo/my_package.tar\n")),(0,a.kt)("h3",{id:"\u7f16\u8bd1\u4e00\u4e2a-kcl-\u5305\u6765\u81ea-oci-url"},"\u7f16\u8bd1\u4e00\u4e2a kcl \u5305\u6765\u81ea oci url"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kpm run")," \u53ef\u4ee5\u7528\u4e8e\u7f16\u8bd1\u4e00\u4e2a kcl \u5305\u4ece oci url\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kpm run --tag 0.0.1 oci://localhost:5001/test/my_package\n")),(0,a.kt)("h3",{id:"\u7f16\u8bd1\u4e00\u4e2a-kcl-\u5305\u6765\u81ea-oci-ref"},"\u7f16\u8bd1\u4e00\u4e2a kcl \u5305\u6765\u81ea oci ref"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kpm run")," \u53ef\u4ee5\u7528\u4e8e\u7f16\u8bd1\u4e00\u4e2a kcl \u5305\u4ece oci ref\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kpm run test/my_package:0.0.1\n")))}m.isMDXComponent=!0}}]);