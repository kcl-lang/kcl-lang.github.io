"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[41814],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),k=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=k(e.components);return o.createElement(i.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=k(n),u=r,m=d["".concat(i,".").concat(u)]||d[u]||s[u]||a;return n?o.createElement(m,l(l({ref:t},p),{},{components:n})):o.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:r,l[1]=c;for(var k=2;k<a;k++)l[k]=n[k];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},14924:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>k});var o=n(87462),r=(n(67294),n(3905));const a={},l="\u53d1\u5e03 KCL \u5305\u5230 docker.io",c={unversionedId:"user_docs/guides/package-management/how-to/share_your_pkg_docker",id:"version-0.5.5/user_docs/guides/package-management/how-to/share_your_pkg_docker",title:"\u53d1\u5e03 KCL \u5305\u5230 docker.io",description:"\u672c\u6587\u5c06\u6307\u5bfc\u60a8\u5982\u4f55\u4f7f\u7528 kcl \u5305\u7ba1\u7406\u5c06\u60a8\u7684 kcl \u5305\u63a8\u9001\u5230\u53d1\u5e03\u5230 docker.io \u4e2d\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.5.5/user_docs/guides/package-management/4-how-to/5-share_your_pkg_docker.md",sourceDirName:"user_docs/guides/package-management/4-how-to",slug:"/user_docs/guides/package-management/how-to/share_your_pkg_docker",permalink:"/zh-CN/docs/0.5.5/user_docs/guides/package-management/how-to/share_your_pkg_docker",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.5/user_docs/guides/package-management/4-how-to/5-share_your_pkg_docker.md",tags:[],version:"0.5.5",lastUpdatedBy:"Peefy",lastUpdatedAt:1708241829,formattedLastUpdatedAt:"2024\u5e742\u670818\u65e5",sidebarPosition:5,frontMatter:{},sidebar:"user_docs",previous:{title:"\u53d1\u5e03 KCL \u5305\u5230 ghcr.io",permalink:"/zh-CN/docs/0.5.5/user_docs/guides/package-management/how-to/share_your_pkg"},next:{title:"\u5982\u4f55\u5728 github action \u4e2d\u4f7f\u7528 kcl \u5305\u7ba1\u7406\u53d1\u5e03\u60a8\u7684 KCL \u5305",permalink:"/zh-CN/docs/0.5.5/user_docs/guides/package-management/how-to/push_github_action"}},i={},k=[{value:"\u6b65\u9aa4 1\uff1a\u5b89\u88c5 KCL CLI",id:"\u6b65\u9aa4-1\u5b89\u88c5-kcl-cli",level:2},{value:"\u6b65\u9aa4 2\uff1a\u521b\u5efa\u4e00\u4e2a docker.io \u8d26\u6237",id:"\u6b65\u9aa4-2\u521b\u5efa\u4e00\u4e2a-dockerio-\u8d26\u6237",level:2},{value:"\u6b65\u9aa4 3\uff1a\u767b\u5f55 docker.io",id:"\u6b65\u9aa4-3\u767b\u5f55-dockerio",level:2},{value:"\u6b65\u9aa4 4\uff1a\u63a8\u9001\u60a8\u7684 kcl \u5305",id:"\u6b65\u9aa4-4\u63a8\u9001\u60a8\u7684-kcl-\u5305",level:2},{value:"1. \u4e00\u4e2a\u5408\u6cd5\u7684 kcl \u5305",id:"1-\u4e00\u4e2a\u5408\u6cd5\u7684-kcl-\u5305",level:3},{value:"2. \u63a8\u9001 kcl \u5305",id:"2-\u63a8\u9001-kcl-\u5305",level:3}],p={toc:k},d="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u53d1\u5e03-kcl-\u5305\u5230-dockerio"},"\u53d1\u5e03 KCL \u5305\u5230 docker.io"),(0,r.kt)("p",null,"\u672c\u6587\u5c06\u6307\u5bfc\u60a8\u5982\u4f55\u4f7f\u7528 kcl \u5305\u7ba1\u7406\u5c06\u60a8\u7684 kcl \u5305\u63a8\u9001\u5230\u53d1\u5e03\u5230 docker.io \u4e2d\u3002"),(0,r.kt)("h2",{id:"\u6b65\u9aa4-1\u5b89\u88c5-kcl-cli"},"\u6b65\u9aa4 1\uff1a\u5b89\u88c5 KCL CLI"),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u60a8\u9700\u8981\u5728\u60a8\u7684\u8ba1\u7b97\u673a\u4e0a\u5b89\u88c5 KCL CLI\u3002\u60a8\u53ef\u4ee5\u6309\u7167 ",(0,r.kt)("a",{parentName:"p",href:"https://kcl-lang.io/zh-CN/docs/user_docs/getting-started/install"},"KCL CLI \u5b89\u88c5\u6587\u6863"),"\u4e2d\u7684\u8bf4\u660e\u8fdb\u884c\u64cd\u4f5c\u3002"),(0,r.kt)("h2",{id:"\u6b65\u9aa4-2\u521b\u5efa\u4e00\u4e2a-dockerio-\u8d26\u6237"},"\u6b65\u9aa4 2\uff1a\u521b\u5efa\u4e00\u4e2a docker.io \u8d26\u6237"),(0,r.kt)("p",null,"\u60a8\u9700\u8981\u521b\u5efa\u4e00\u4e2a docker.io \u8d26\u6237\u4ee5\u652f\u6301\u60a8\u7684 kcl \u5305\u7684\u63a8\u9001\u3002"),(0,r.kt)("h2",{id:"\u6b65\u9aa4-3\u767b\u5f55-dockerio"},"\u6b65\u9aa4 3\uff1a\u767b\u5f55 docker.io"),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 docker.io \u7684\u8d26\u6237\u540d\u548c\u5bc6\u7801\u767b\u5f55\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kcl registry login -u <USERNAME> -p <TOKEN> docker.io\n")),(0,r.kt)("p",null,"\u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"<USERNAME>")," \u662f\u60a8\u7684 docker.io \u7528\u6237\u540d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"<PASSWORD>")," \u662f\u60a8 docker.io \u8d26\u6237\u7684\u5bc6\u7801\u3002"),(0,r.kt)("p",null,"\u5173\u4e8e\u5982\u4f55\u4f7f\u7528 KCL CLI \u767b\u5f55 docker.io \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"https://kcl-lang.io/zh-CN/docs/tools/cli/package-management/command-reference/login"},"kcl registry login"),"\u3002"),(0,r.kt)("h2",{id:"\u6b65\u9aa4-4\u63a8\u9001\u60a8\u7684-kcl-\u5305"},"\u6b65\u9aa4 4\uff1a\u63a8\u9001\u60a8\u7684 kcl \u5305"),(0,r.kt)("p",null,"\u73b0\u5728\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 KCL CLI \u5c06\u60a8\u7684 kcl \u5305\u63a8\u9001\u5230 docker.io\u3002"),(0,r.kt)("h3",{id:"1-\u4e00\u4e2a\u5408\u6cd5\u7684-kcl-\u5305"},"1. \u4e00\u4e2a\u5408\u6cd5\u7684 kcl \u5305"),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u60a8\u9700\u8981\u786e\u4fdd\u60a8\u63a8\u9001\u7684\u5185\u5bb9\u662f\u7b26\u5408\u4e00\u4e2a kcl \u5305\u7684\u89c4\u8303\uff0c\u5373\u5fc5\u987b\u5305\u542b\u5408\u6cd5\u7684 kcl.mod \u548c kcl.mod.lock \u6587\u4ef6\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u4e0d\u77e5\u9053\u5982\u4f55\u5f97\u5230\u4e00\u4e2a\u5408\u6cd5\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl.mod")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl.mod.lock"),"\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl mod init")," \u547d\u4ee4\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\uff1a\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a my_package \u7684 kcl \u5305"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u521b\u5efa\u4e00\u4e2a\u540d\u4e3a my_package \u7684 kcl \u5305\nkcl mod init my_package\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"kcl mod init my_package")," \u547d\u4ee4\u5c06\u4f1a\u4e3a\u60a8\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 kcl \u5305 ",(0,r.kt)("inlineCode",{parentName:"p"},"my_package"),", \u5e76\u4e3a\u8fd9\u4e2a\u5305\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl.mod")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl.mod.lock")," \u6587\u4ef6\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u5df2\u7ecf\u6709\u4e86\u4e00\u4e2a\u5305\u542b kcl \u6587\u4ef6\u7684\u76ee\u5f55 ",(0,r.kt)("inlineCode",{parentName:"p"},"exist_kcl_package"),"\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5c06\u5176\u8f6c\u6362\u4e3a\u4e00\u4e2a kcl \u5305\uff0c\u5e76\u4e3a\u5176\u521b\u5efa\u5408\u6cd5\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl.mod")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl.mod.lock"),"\u3002"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"exist_kcl_package")," \u76ee\u5f55\u4e0b\u6267\u884c:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kcl mod init\n")),(0,r.kt)("p",null,"\u5173\u4e8e\u5982\u4f55\u4f7f\u7528 kpm init \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"https://kcl-lang.io/zh-CN/docs/tools/cli/package-management/command-reference/init"},"kcl mod init"),"\u3002"),(0,r.kt)("h3",{id:"2-\u63a8\u9001-kcl-\u5305"},"2. \u63a8\u9001 kcl \u5305"),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl")," \u5305\u7684\u6839\u76ee\u5f55\u4e0b\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u8fdb\u884c\u64cd\u4f5c\uff1a"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"exist_kcl_package")," \u5305\u7684\u6839\u76ee\u5f55\u4e0b, \u6267\u884c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kcl mod push oci://docker.io/<USERNAME>/exist_kcl_package\n")),(0,r.kt)("p",null,"\u5b8c\u6210\u4e0a\u8ff0\u6b65\u9aa4\u540e\uff0c\u60a8\u5c31\u6210\u529f\u5730\u5c06\u60a8\u7684 kcl \u5305 ",(0,r.kt)("inlineCode",{parentName:"p"},"exist_kcl_package")," \u63a8\u9001\u5230\u4e86 docker.io \u4e2d\u3002\n\u5173\u4e8e\u5982\u4f55\u4f7f\u7528 kcl mod push \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"https://kcl-lang.io/zh-CN/docs/tools/cli/package-management/command-reference/push"},"kcl mod push"),"\u3002"))}s.isMDXComponent=!0}}]);