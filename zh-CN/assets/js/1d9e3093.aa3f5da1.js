"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[7027],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(n),g=a,d=m["".concat(p,".").concat(g)]||m[g]||u[g]||l;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},92427:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={},o="kpm login",i={unversionedId:"tools/cli/package-management/command-reference/login",id:"version-0.6.0/tools/cli/package-management/command-reference/login",title:"kpm login",description:"\u767b\u9646 kpm registry.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.6.0/tools/cli/package-management/command-reference/6.login.md",sourceDirName:"tools/cli/package-management/command-reference",slug:"/tools/cli/package-management/command-reference/login",permalink:"/zh-CN/docs/0.6.0/tools/cli/package-management/command-reference/login",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.6.0/tools/cli/package-management/command-reference/6.login.md",tags:[],version:"0.6.0",lastUpdatedBy:"Peefy",lastUpdatedAt:1708241829,formattedLastUpdatedAt:"2024\u5e742\u670818\u65e5",sidebarPosition:6,frontMatter:{},sidebar:"tools",previous:{title:"kpm run",permalink:"/zh-CN/docs/0.6.0/tools/cli/package-management/command-reference/run"},next:{title:"kpm logout",permalink:"/zh-CN/docs/0.6.0/tools/cli/package-management/command-reference/logout"}},p={},c=[{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u9009\u9879",id:"\u9009\u9879",level:2},{value:"--username, -u",id:"--username--u",level:3},{value:"--password, -p",id:"--password--p",level:3},{value:"--help, -h",id:"--help--h",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u767b\u9646\u5230 kpm registry, \u901a\u8fc7\u53c2\u6570\u8f93\u5165\u7528\u6237\u540d\u548c\u5bc6\u7801",id:"\u767b\u9646\u5230-kpm-registry-\u901a\u8fc7\u53c2\u6570\u8f93\u5165\u7528\u6237\u540d\u548c\u5bc6\u7801",level:3},{value:"\u767b\u9646\u5230 kpm registry, \u901a\u8fc7\u53c2\u6570\u8f93\u5165\u7528\u6237\u540d\uff0c\u5bc6\u7801\u901a\u8fc7\u4ea4\u4e92\u5f0f\u8f93\u5165",id:"\u767b\u9646\u5230-kpm-registry-\u901a\u8fc7\u53c2\u6570\u8f93\u5165\u7528\u6237\u540d\u5bc6\u7801\u901a\u8fc7\u4ea4\u4e92\u5f0f\u8f93\u5165",level:3},{value:"\u767b\u9646\u5230 kpm registry, \u7528\u6237\u540d\u548c\u5bc6\u7801\u901a\u8fc7\u4ea4\u4e92\u5f0f\u8f93\u5165",id:"\u767b\u9646\u5230-kpm-registry-\u7528\u6237\u540d\u548c\u5bc6\u7801\u901a\u8fc7\u4ea4\u4e92\u5f0f\u8f93\u5165",level:3}],s={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kpm-login"},"kpm login"),(0,a.kt)("p",null,"\u767b\u9646 kpm registry."),(0,a.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kpm login [options][kpm_registry]\n")),(0,a.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kpm login")," \u5c06\u4f1a\u767b\u9646 kpm registry\u3002"),(0,a.kt)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),(0,a.kt)("h3",{id:"--username--u"},"--username, -u"),(0,a.kt)("p",null,"\u6307\u5b9a kpm registry \u7684\u7528\u6237\u540d\u3002"),(0,a.kt)("h3",{id:"--password--p"},"--password, -p"),(0,a.kt)("p",null,"\u6307\u5b9a kpm registry \u7684\u5bc6\u7801\u3002"),(0,a.kt)("h3",{id:"--help--h"},"--help, -h"),(0,a.kt)("p",null,"\u5c55\u793a ",(0,a.kt)("inlineCode",{parentName:"p"},"kpm login")," \u547d\u4ee4\u7684\u5e2e\u52a9\u4fe1\u606f\u3002"),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("h3",{id:"\u767b\u9646\u5230-kpm-registry-\u901a\u8fc7\u53c2\u6570\u8f93\u5165\u7528\u6237\u540d\u548c\u5bc6\u7801"},"\u767b\u9646\u5230 kpm registry, \u901a\u8fc7\u53c2\u6570\u8f93\u5165\u7528\u6237\u540d\u548c\u5bc6\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kpm login -u <account_name> -p <password> <oci_registry>\n")),(0,a.kt)("p",null,"\u671f\u671b\u8f93\u51fa\u4e3a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"Login succeeded\n")),(0,a.kt)("h3",{id:"\u767b\u9646\u5230-kpm-registry-\u901a\u8fc7\u53c2\u6570\u8f93\u5165\u7528\u6237\u540d\u5bc6\u7801\u901a\u8fc7\u4ea4\u4e92\u5f0f\u8f93\u5165"},"\u767b\u9646\u5230 kpm registry, \u901a\u8fc7\u53c2\u6570\u8f93\u5165\u7528\u6237\u540d\uff0c\u5bc6\u7801\u901a\u8fc7\u4ea4\u4e92\u5f0f\u8f93\u5165"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kpm login -u <account_name> <oci_registry>\n")),(0,a.kt)("p",null,"\u671f\u671b\u8f93\u51fa\u4e3a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"Password:\nLogin succeeded\n")),(0,a.kt)("h3",{id:"\u767b\u9646\u5230-kpm-registry-\u7528\u6237\u540d\u548c\u5bc6\u7801\u901a\u8fc7\u4ea4\u4e92\u5f0f\u8f93\u5165"},"\u767b\u9646\u5230 kpm registry, \u7528\u6237\u540d\u548c\u5bc6\u7801\u901a\u8fc7\u4ea4\u4e92\u5f0f\u8f93\u5165"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kpm login <oci_registry>\n")),(0,a.kt)("p",null,"\u671f\u671b\u8f93\u51fa\u4e3a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"Username: <account_name>\nPassword:\nLogin succeeded\n")))}u.isMDXComponent=!0}}]);