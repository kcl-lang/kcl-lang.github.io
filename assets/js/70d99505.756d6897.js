"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[3482],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=i(n),k=r,g=s["".concat(c,".").concat(k)]||s[k]||m[k]||o;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=k;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[s]="string"==typeof e?e:r,l[1]=d;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},87054:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>i});var a=n(87462),r=(n(67294),n(3905));const o={},l="kcl mod add",d={unversionedId:"tools/cli/package-management/command-reference/add",id:"version-0.7.0/tools/cli/package-management/command-reference/add",title:"kcl mod add",description:"Add a dependency to a kcl package.",source:"@site/versioned_docs/version-0.7.0/tools/cli/package-management/command-reference/2.add.md",sourceDirName:"tools/cli/package-management/command-reference",slug:"/tools/cli/package-management/command-reference/add",permalink:"/docs/tools/cli/package-management/command-reference/add",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.7.0/tools/cli/package-management/command-reference/2.add.md",tags:[],version:"0.7.0",lastUpdatedBy:"Peefy",lastUpdatedAt:1708241829,formattedLastUpdatedAt:"Feb 18, 2024",sidebarPosition:2,frontMatter:{},sidebar:"tools",previous:{title:"kcl mod init",permalink:"/docs/tools/cli/package-management/command-reference/init"},next:{title:"kcl mod pkg",permalink:"/docs/tools/cli/package-management/command-reference/pkg"}},c={},i=[{value:"Usage",id:"usage",level:2},{value:"Description",id:"description",level:2},{value:"options",id:"options",level:2},{value:"--git",id:"--git",level:3},{value:"--tag",id:"--tag",level:3},{value:"--help, -h",id:"--help--h",level:3},{value:"Examples",id:"examples",level:2},{value:"Add a dependency from kcl registry",id:"add-a-dependency-from-kcl-registry",level:3},{value:"Add a dependency from git repository",id:"add-a-dependency-from-git-repository",level:3}],p={toc:i},s="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kcl-mod-add"},"kcl mod add"),(0,r.kt)("p",null,"Add a dependency to a kcl package."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kcl mod add [options][package_reference]\n")),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"kcl mod add")," will add a dependency to a kcl package. The dependency can be from a git repository, or a kcl registry."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"package_reference")," is a kcl package reference, looks like ",(0,r.kt)("inlineCode",{parentName:"p"},"package_name:version"),"."),(0,r.kt)("h2",{id:"options"},"options"),(0,r.kt)("h3",{id:"--git"},"--git"),(0,r.kt)("p",null,"Specify the git url of the dependency from a git repository."),(0,r.kt)("h3",{id:"--tag"},"--tag"),(0,r.kt)("p",null,"Specify the tag of the dependency from a git repository."),(0,r.kt)("h3",{id:"--help--h"},"--help, -h"),(0,r.kt)("p",null,"Show help for ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl mod add")," command."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"add-a-dependency-from-kcl-registry"},"Add a dependency from kcl registry"),(0,r.kt)("p",null,"Add kcl dependency named ",(0,r.kt)("inlineCode",{parentName:"p"},"k8s")," to the current package.The version of the dependency will be the latest version."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kcl mod add k8s\n")),(0,r.kt)("p",null,"Add kcl dependency named 'k8s' with version 'v1.27.2'."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kcl mod add k8s:v1.27.2\n")),(0,r.kt)("h3",{id:"add-a-dependency-from-git-repository"},"Add a dependency from git repository"),(0,r.kt)("p",null,"Add kcl dependency named ",(0,r.kt)("inlineCode",{parentName:"p"},"konfig")," with version ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.1.0")," from git repository."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kcl mod add --git https://github.com/awesome-kusion/konfig.git --tag v0.1.0\n")))}m.isMDXComponent=!0}}]);