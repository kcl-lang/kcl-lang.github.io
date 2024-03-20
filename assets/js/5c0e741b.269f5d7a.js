"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[91459],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=n.createContext({}),i=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=i(a),k=l,d=u["".concat(c,".").concat(k)]||u[k]||s[k]||r;return a?n.createElement(d,p(p({ref:t},m),{},{components:a})):n.createElement(d,p({ref:t},m))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,p=new Array(r);p[0]=k;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:l,p[1]=o;for(var i=2;i<r;i++)p[i]=a[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},44891:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>i});var n=a(87462),l=(a(67294),a(3905));const r={},p="kpm pull",o={unversionedId:"tools/cli/package-management/command-reference/pull",id:"version-0.6/tools/cli/package-management/command-reference/pull",title:"kpm pull",description:"Pull a package from the kpm registry.",source:"@site/versioned_docs/version-0.6/tools/cli/package-management/command-reference/9.pull.md",sourceDirName:"tools/cli/package-management/command-reference",slug:"/tools/cli/package-management/command-reference/pull",permalink:"/docs/0.6/tools/cli/package-management/command-reference/pull",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.6/tools/cli/package-management/command-reference/9.pull.md",tags:[],version:"0.6",lastUpdatedBy:"peefy",lastUpdatedAt:1710906677,formattedLastUpdatedAt:"Mar 20, 2024",sidebarPosition:9,frontMatter:{},sidebar:"tools",previous:{title:"kpm push",permalink:"/docs/0.6/tools/cli/package-management/command-reference/push"},next:{title:"kpm help",permalink:"/docs/0.6/tools/cli/package-management/command-reference/help"}},c={},i=[{value:"Usage",id:"usage",level:2},{value:"Description",id:"description",level:2},{value:"options",id:"options",level:2},{value:"--tag",id:"--tag",level:3},{value:"--help, -h",id:"--help--h",level:3},{value:"Examples",id:"examples",level:2},{value:"pull the package by package name",id:"pull-the-package-by-package-name",level:3},{value:"pull the package by oci url",id:"pull-the-package-by-oci-url",level:3}],m={toc:i},u="wrapper";function s(e){let{components:t,...a}=e;return(0,l.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"kpm-pull"},"kpm pull"),(0,l.kt)("p",null,"Pull a package from the kpm registry."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kpm pull [options][package_source]\n")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"kpm pull")," will pull a package from the kpm registry."),(0,l.kt)("h2",{id:"options"},"options"),(0,l.kt)("h3",{id:"--tag"},"--tag"),(0,l.kt)("p",null,"The tag of the package to pull."),(0,l.kt)("h3",{id:"--help--h"},"--help, -h"),(0,l.kt)("p",null,"Show help for ",(0,l.kt)("inlineCode",{parentName:"p"},"kpm push")," command."),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("h3",{id:"pull-the-package-by-package-name"},"pull the package by package name"),(0,l.kt)("p",null,"You can use ",(0,l.kt)("inlineCode",{parentName:"p"},"kpm pull")," to download a kcl package from the default OCI registry by kcl package name.\n",(0,l.kt)("inlineCode",{parentName:"p"},"kpm")," will download the kcl package from the default OCI registry specified in the configuration file ",(0,l.kt)("inlineCode",{parentName:"p"},"kpm.json"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kpm pull <package_name>:<package_version>\n")),(0,l.kt)("h3",{id:"pull-the-package-by-oci-url"},"pull the package by oci url"),(0,l.kt)("p",null,"You can download a kcl package from an OCI-based registry url."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kpm pull --tag <kcl_package_version> <oci_url>\n")))}s.isMDXComponent=!0}}]);