"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[1140],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},k=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,p=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),m=i(n),u=a,g=m["".concat(p,".").concat(u)]||m[u]||s[u]||c;return n?r.createElement(g,l(l({ref:t},k),{},{components:n})):r.createElement(g,l({ref:t},k))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,l=new Array(c);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var i=2;i<c;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},59553:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>c,metadata:()=>o,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const c={},l="\u53d1\u5e03 KCL \u5305\u5230 ghcr.io",o={unversionedId:"user_docs/guides/package-management/how-to/share_your_pkg",id:"user_docs/guides/package-management/how-to/share_your_pkg",title:"\u53d1\u5e03 KCL \u5305\u5230 ghcr.io",description:"kpm \u662f\u4e00\u4e2a\u7528\u4e8e\u7ba1\u7406 kcl \u5305\u7684\u5de5\u5177\u3002\u672c\u6587\u5c06\u6307\u5bfc\u60a8\u5982\u4f55\u4f7f\u7528 kpm \u5c06\u60a8\u7684 kcl \u5305\u63a8\u9001\u5230\u53d1\u5e03\u5230 OCI Registry \u4e2d\u3002kpm \u9ed8\u8ba4\u4f7f\u7528 ghcr.io \u4f5c\u4e3a OCI Registry, \u60a8\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539 kpm \u914d\u7f6e\u6587\u4ef6\u6765\u66f4\u6539\u9ed8\u8ba4\u7684 OCI Registry\u3002\u5173\u4e8e\u5982\u4f55\u4fee\u6539 kpm \u914d\u7f6e\u6587\u4ef6\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 kpm oci registry",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user_docs/guides/package-management/4-how-to/4-share_your_pkg.md",sourceDirName:"user_docs/guides/package-management/4-how-to",slug:"/user_docs/guides/package-management/how-to/share_your_pkg",permalink:"/zh-CN/docs/next/user_docs/guides/package-management/how-to/share_your_pkg",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/user_docs/guides/package-management/4-how-to/4-share_your_pkg.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1703569910,formattedLastUpdatedAt:"2023\u5e7412\u670826\u65e5",sidebarPosition:4,frontMatter:{},sidebar:"user_docs",previous:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/zh-CN/docs/next/user_docs/guides/package-management/quick-start"},next:{title:"\u53d1\u5e03 KCL \u5305\u5230 docker.io",permalink:"/zh-CN/docs/next/user_docs/guides/package-management/how-to/share_your_pkg_docker"}},p={},i=[{value:"\u6b65\u9aa4 1\uff1a\u5b89\u88c5 kpm",id:"\u6b65\u9aa4-1\u5b89\u88c5-kpm",level:2},{value:"\u6b65\u9aa4 2\uff1a\u521b\u5efa\u4e00\u4e2a ghcr.io \u4ee4\u724c",id:"\u6b65\u9aa4-2\u521b\u5efa\u4e00\u4e2a-ghcrio-\u4ee4\u724c",level:2},{value:"\u6b65\u9aa4 3\uff1a\u767b\u5f55 ghcr.io",id:"\u6b65\u9aa4-3\u767b\u5f55-ghcrio",level:2},{value:"\u6b65\u9aa4 4\uff1a\u63a8\u9001\u60a8\u7684 kcl \u5305",id:"\u6b65\u9aa4-4\u63a8\u9001\u60a8\u7684-kcl-\u5305",level:2},{value:"1. \u4e00\u4e2a\u5408\u6cd5\u7684 kcl \u5305",id:"1-\u4e00\u4e2a\u5408\u6cd5\u7684-kcl-\u5305",level:3},{value:"2. \u63a8\u9001 kcl \u5305",id:"2-\u63a8\u9001-kcl-\u5305",level:3}],k={toc:i},m="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u53d1\u5e03-kcl-\u5305\u5230-ghcrio"},"\u53d1\u5e03 KCL \u5305\u5230 ghcr.io"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kpm"},"kpm")," \u662f\u4e00\u4e2a\u7528\u4e8e\u7ba1\u7406 kcl \u5305\u7684\u5de5\u5177\u3002\u672c\u6587\u5c06\u6307\u5bfc\u60a8\u5982\u4f55\u4f7f\u7528 kpm \u5c06\u60a8\u7684 kcl \u5305\u63a8\u9001\u5230\u53d1\u5e03\u5230 OCI Registry \u4e2d\u3002kpm \u9ed8\u8ba4\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://ghcr.io"},"ghcr.io")," \u4f5c\u4e3a OCI Registry, \u60a8\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539 kpm \u914d\u7f6e\u6587\u4ef6\u6765\u66f4\u6539\u9ed8\u8ba4\u7684 OCI Registry\u3002\u5173\u4e8e\u5982\u4f55\u4fee\u6539 kpm \u914d\u7f6e\u6587\u4ef6\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kpm/blob/main/docs/kpm_oci-zh.md#kpm-registry"},"kpm oci registry")),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u6b65\u9aa4\uff0c\u6307\u5bfc\u60a8\u5982\u4f55\u4f7f\u7528 kpm \u5c06\u60a8\u7684 kcl \u5305\u63a8\u9001\u5230 ghcr.io\u3002"),(0,a.kt)("h2",{id:"\u6b65\u9aa4-1\u5b89\u88c5-kpm"},"\u6b65\u9aa4 1\uff1a\u5b89\u88c5 kpm"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u60a8\u9700\u8981\u5728\u60a8\u7684\u8ba1\u7b97\u673a\u4e0a\u5b89\u88c5 kpm\u3002\u60a8\u53ef\u4ee5\u6309\u7167 ",(0,a.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/user_docs/guides/package-management/installation"},"kpm \u5b89\u88c5\u6587\u6863"),"\u4e2d\u7684\u8bf4\u660e\u8fdb\u884c\u64cd\u4f5c\u3002"),(0,a.kt)("h2",{id:"\u6b65\u9aa4-2\u521b\u5efa\u4e00\u4e2a-ghcrio-\u4ee4\u724c"},"\u6b65\u9aa4 2\uff1a\u521b\u5efa\u4e00\u4e2a ghcr.io \u4ee4\u724c"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528 kpm \u9ed8\u8ba4\u7684 OCI Registry, \u8981\u5c06 kcl \u5305\u63a8\u9001\u5230 ghcr.io\uff0c\u60a8\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u7528\u4e8e\u8eab\u4efd\u9a8c\u8bc1\u7684\u4ee4\u724c\u3002\u60a8\u53ef\u4ee5\u53c2\u8003\u4ee5\u4e0b\u6587\u6863\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.github.com/zh/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic"},"\u521b\u5efa ghcr.io token"))),(0,a.kt)("h2",{id:"\u6b65\u9aa4-3\u767b\u5f55-ghcrio"},"\u6b65\u9aa4 3\uff1a\u767b\u5f55 ghcr.io"),(0,a.kt)("p",null,"\u5728\u5b89\u88c5\u4e86 kpm \u5e76\u521b\u5efa\u4e86 ghcr.io \u4ee4\u724c\u540e\uff0c\u60a8\u9700\u8981\u4f7f\u7528 kpm \u767b\u5f55 ghcr.io\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u8fdb\u884c\u64cd\u4f5c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kpm login -u <USERNAME> -p <TOKEN> ghcr.io\n")),(0,a.kt)("p",null,"\u5176\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"<USERNAME>")," \u662f\u60a8\u7684 GitHub \u7528\u6237\u540d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"<TOKEN>")," \u662f\u60a8\u5728\u6b65\u9aa4 2 \u4e2d\u521b\u5efa\u7684\u4ee4\u724c\u3002"),(0,a.kt)("p",null,"\u5173\u4e8e\u5982\u4f55\u4f7f\u7528 kpm \u767b\u5f55 ghcr.io \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"https://kcl-lang.io/zh-CN/docs/reference/package-management/command-reference/login"},"kpm login"),"\u3002"),(0,a.kt)("h2",{id:"\u6b65\u9aa4-4\u63a8\u9001\u60a8\u7684-kcl-\u5305"},"\u6b65\u9aa4 4\uff1a\u63a8\u9001\u60a8\u7684 kcl \u5305"),(0,a.kt)("p",null,"\u73b0\u5728\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 kpm \u5c06\u60a8\u7684 kcl \u5305\u63a8\u9001\u5230 ghcr.io\u3002"),(0,a.kt)("h3",{id:"1-\u4e00\u4e2a\u5408\u6cd5\u7684-kcl-\u5305"},"1. \u4e00\u4e2a\u5408\u6cd5\u7684 kcl \u5305"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u60a8\u9700\u8981\u786e\u4fdd\u60a8\u63a8\u9001\u7684\u5185\u5bb9\u662f\u7b26\u5408\u4e00\u4e2a kcl \u5305\u7684\u89c4\u8303\uff0c\u5373\u5fc5\u987b\u5305\u542b\u5408\u6cd5\u7684 kcl.mod \u548c kcl.mod.lock \u6587\u4ef6\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u4e0d\u77e5\u9053\u5982\u4f55\u5f97\u5230\u4e00\u4e2a\u5408\u6cd5\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl.mod")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl.mod.lock"),"\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"kpm init")," \u547d\u4ee4\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# \u521b\u5efa\u4e00\u4e2a\u540d\u4e3a my_package \u7684 kcl \u5305\nkpm init my_package\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kpm init my_package")," \u547d\u4ee4\u5c06\u4f1a\u4e3a\u60a8\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 kcl \u5305 ",(0,a.kt)("inlineCode",{parentName:"p"},"my_package"),", \u5e76\u4e3a\u8fd9\u4e2a\u5305\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl.mod")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl.mod.lock")," \u6587\u4ef6\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u5df2\u7ecf\u6709\u4e86\u4e00\u4e2a\u5305\u542b kcl \u6587\u4ef6\u7684\u76ee\u5f55 ",(0,a.kt)("inlineCode",{parentName:"p"},"exist_kcl_package"),"\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5c06\u5176\u8f6c\u6362\u4e3a\u4e00\u4e2a kcl \u5305\uff0c\u5e76\u4e3a\u5176\u521b\u5efa\u5408\u6cd5\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl.mod")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl.mod.lock"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# \u5728 exist_kcl_package \u76ee\u5f55\u4e0b\n$ pwd\n/home/user/exist_kcl_package\n\n# \u6267\u884c kpm init \u547d\u4ee4\u6765\u521b\u5efa kcl.mod \u548c kcl.mod.lock\n$ kpm init\n")),(0,a.kt)("p",null,"\u5173\u4e8e\u5982\u4f55\u4f7f\u7528 kpm init \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"https://kcl-lang.io/zh-CN/docs/reference/package-management/command-reference/init"},"kpm init"),"\u3002"),(0,a.kt)("h3",{id:"2-\u63a8\u9001-kcl-\u5305"},"2. \u63a8\u9001 kcl \u5305"),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl")," \u5305\u7684\u6839\u76ee\u5f55\u4e0b\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u8fdb\u884c\u64cd\u4f5c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# \u5728 exist_kcl_package \u5305\u7684\u6839\u76ee\u5f55\u4e0b\n$ pwd\n/home/user/exist_kcl_package\n\n# \u63a8\u9001 kcl \u5305\u5230\u9ed8\u8ba4\u7684 OCI Registry\n$ kpm push\n")),(0,a.kt)("p",null,"\u5b8c\u6210\u4e0a\u8ff0\u6b65\u9aa4\u540e\uff0c\u60a8\u5c31\u6210\u529f\u5730\u5c06\u60a8\u7684 kcl \u5305\u63a8\u9001\u5230\u4e86\u9ed8\u8ba4\u7684 OCI Registry \u4e2d\u3002\n\u5173\u4e8e\u5982\u4f55\u4f7f\u7528 kpm push \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"https://kcl-lang.io/zh-CN/docs/reference/package-management/command-reference/push"},"kpm push"),"\u3002"))}s.isMDXComponent=!0}}]);