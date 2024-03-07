"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[34655],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(n),s=r,u=d["".concat(l,".").concat(s)]||d[s]||k[s]||i;return n?a.createElement(u,c(c({ref:t},m),{},{components:n})):a.createElement(u,c({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=s;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:r,c[1]=o;for(var p=2;p<i;p++)c[p]=n[p];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},16603:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={},c="kpm init",o={unversionedId:"reference/package-management/command-reference/init",id:"version-0.5.6/reference/package-management/command-reference/init",title:"kpm init",description:"Init a kcl package.",source:"@site/versioned_docs/version-0.5.6/reference/package-management/command-reference/1.init.md",sourceDirName:"reference/package-management/command-reference",slug:"/reference/package-management/command-reference/init",permalink:"/docs/0.5.6/reference/package-management/command-reference/init",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.6/reference/package-management/command-reference/1.init.md",tags:[],version:"0.5.6",lastUpdatedBy:"peefy",lastUpdatedAt:1709797004,formattedLastUpdatedAt:"Mar 7, 2024",sidebarPosition:1,frontMatter:{},sidebar:"reference",previous:{title:"kpm",permalink:"/docs/0.5.6/reference/package-management/command-reference/"},next:{title:"kpm add",permalink:"/docs/0.5.6/reference/package-management/command-reference/add"}},l={},p=[{value:"Usage",id:"usage",level:2},{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"--help, -h",id:"--help--h",level:3},{value:"Examples",id:"examples",level:2},{value:"Init the current directory into a kcl package",id:"init-the-current-directory-into-a-kcl-package",level:3},{value:"Init a kcl package with a name",id:"init-a-kcl-package-with-a-name",level:3}],m={toc:p},d="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kpm-init"},"kpm init"),(0,r.kt)("p",null,"Init a kcl package."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kpm init [options][package_name]\n")),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"kpm init")," will initialize a kcl package in the current directory. If the package name is not provided, the name of the current directory will be used."),(0,r.kt)("p",null,"If the package name is provided, a subdirectory with the name of the package will be created and the package will be initialized in that directory."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"kpm init")," will create ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl.mod"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl.mod.lock")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"main.k")," under the package directory."),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("h3",{id:"--help--h"},"--help, -h"),(0,r.kt)("p",null,"Show help for ",(0,r.kt)("inlineCode",{parentName:"p"},"kpm init")," command."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"init-the-current-directory-into-a-kcl-package"},"Init the current directory into a kcl package"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# create an empty directory\n$ mkdir my_package\n\n# cd into the directory\n$ cd my_package\n\n# init the current directory into a kcl package\n$ kpm init\n")),(0,r.kt)("h3",{id:"init-a-kcl-package-with-a-name"},"Init a kcl package with a name"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# init a kcl package with a name 'my_package'\nkpm init my_package\n")))}k.isMDXComponent=!0}}]);