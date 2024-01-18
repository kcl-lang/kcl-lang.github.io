"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[7443],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),i=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},l=function(e){var n=i(e.components);return r.createElement(c.Provider,{value:n},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=i(t),k=a,g=m["".concat(c,".").concat(k)]||m[k]||s[k]||o;return t?r.createElement(g,d(d({ref:n},l),{},{components:t})):r.createElement(g,d({ref:n},l))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,d=new Array(o);d[0]=k;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p[m]="string"==typeof e?e:a,d[1]=p;for(var i=2;i<o;i++)d[i]=t[i];return r.createElement.apply(null,d)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},34323:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var r=t(87462),a=(t(67294),t(3905));const o={},d="kpm add",p={unversionedId:"reference/package-management/command-reference/add",id:"version-0.5.2/reference/package-management/command-reference/add",title:"kpm add",description:"Add a dependency to a kcl package.",source:"@site/versioned_docs/version-0.5.2/reference/package-management/command-reference/2.add.md",sourceDirName:"reference/package-management/command-reference",slug:"/reference/package-management/command-reference/add",permalink:"/docs/0.5.2/reference/package-management/command-reference/add",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.2/reference/package-management/command-reference/2.add.md",tags:[],version:"0.5.2",lastUpdatedBy:"Peefy",lastUpdatedAt:1705584615,formattedLastUpdatedAt:"Jan 18, 2024",sidebarPosition:2,frontMatter:{},sidebar:"reference",previous:{title:"kpm init",permalink:"/docs/0.5.2/reference/package-management/command-reference/init"},next:{title:"kpm pkg",permalink:"/docs/0.5.2/reference/package-management/command-reference/pkg"}},c={},i=[{value:"Usage",id:"usage",level:2},{value:"Description",id:"description",level:2},{value:"options",id:"options",level:2},{value:"--git",id:"--git",level:3},{value:"--tag",id:"--tag",level:3},{value:"--help, -h",id:"--help--h",level:3},{value:"Examples",id:"examples",level:2},{value:"Add a dependency from kcl registry",id:"add-a-dependency-from-kcl-registry",level:3},{value:"Add a dependency from git repository",id:"add-a-dependency-from-git-repository",level:3}],l={toc:i},m="wrapper";function s(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kpm-add"},"kpm add"),(0,a.kt)("p",null,"Add a dependency to a kcl package."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kpm add [options][package_reference]\n")),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kpm add")," will add a dependency to a kcl package. The dependency can be from a git repository, or a kcl registry."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"package_reference")," is a kcl package reference, looks like ",(0,a.kt)("inlineCode",{parentName:"p"},"package_name:version"),"."),(0,a.kt)("h2",{id:"options"},"options"),(0,a.kt)("h3",{id:"--git"},"--git"),(0,a.kt)("p",null,"Specify the git url of the dependency from a git repository."),(0,a.kt)("h3",{id:"--tag"},"--tag"),(0,a.kt)("p",null,"Specify the tag of the dependency from a git repository."),(0,a.kt)("h3",{id:"--help--h"},"--help, -h"),(0,a.kt)("p",null,"Show help for ",(0,a.kt)("inlineCode",{parentName:"p"},"kpm add")," command."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"add-a-dependency-from-kcl-registry"},"Add a dependency from kcl registry"),(0,a.kt)("p",null,"Add kcl dependency named ",(0,a.kt)("inlineCode",{parentName:"p"},"k8s")," to the current package.The version of the dependency will be the latest version."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kpm add k8s\n")),(0,a.kt)("p",null,"Add kcl dependency named 'k8s' with version 'v1.27.2'."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kpm add k8s:v1.27.2\n")),(0,a.kt)("h3",{id:"add-a-dependency-from-git-repository"},"Add a dependency from git repository"),(0,a.kt)("p",null,"Add kcl dependency named ",(0,a.kt)("inlineCode",{parentName:"p"},"konfig")," with version ",(0,a.kt)("inlineCode",{parentName:"p"},"v0.1.0")," from git repository."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kpm add --git https://github.com/awesome-kusion/konfig.git --tag v0.1.0\n")))}s.isMDXComponent=!0}}]);