"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[71415],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),i=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=i(r),d=n,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return r?a.createElement(h,l(l({ref:t},s),{},{components:r})):a.createElement(h,l({ref:t},s))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:n,l[1]=c;for(var i=2;i<o;i++)l[i]=r[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},34976:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var a=r(87462),n=(r(67294),r(3905));const o={},l="kcl mod push",c={unversionedId:"tools/cli/package-management/command-reference/push",id:"version-0.8.0/tools/cli/package-management/command-reference/push",title:"kcl mod push",description:"Push a package to the kcl mod registry.",source:"@site/versioned_docs/version-0.8.0/tools/cli/package-management/command-reference/8.push.md",sourceDirName:"tools/cli/package-management/command-reference",slug:"/tools/cli/package-management/command-reference/push",permalink:"/docs/tools/cli/package-management/command-reference/push",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.8.0/tools/cli/package-management/command-reference/8.push.md",tags:[],version:"0.8.0",lastUpdatedBy:"peefy",lastUpdatedAt:1709797004,formattedLastUpdatedAt:"Mar 7, 2024",sidebarPosition:8,frontMatter:{},sidebar:"tools",previous:{title:"kcl registry logout",permalink:"/docs/tools/cli/package-management/command-reference/logout"},next:{title:"kcl mod pull",permalink:"/docs/tools/cli/package-management/command-reference/pull"}},p={},i=[{value:"Usage",id:"usage",level:2},{value:"Description",id:"description",level:2},{value:"options",id:"options",level:2},{value:"--tar_path",id:"--tar_path",level:3},{value:"--help, -h",id:"--help--h",level:3},{value:"Examples",id:"examples",level:2},{value:"push the current package",id:"push-the-current-package",level:3},{value:"push a tar to the registry",id:"push-a-tar-to-the-registry",level:3}],s={toc:i},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"kcl-mod-push"},"kcl mod push"),(0,n.kt)("p",null,"Push a package to the kcl mod registry."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kcl mod push [options][kpm_registry]\n")),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"kcl mod push")," will push a package to the kcl mod registry."),(0,n.kt)("h2",{id:"options"},"options"),(0,n.kt)("h3",{id:"--tar_path"},"--tar_path"),(0,n.kt)("p",null,"The path to the tar file to push."),(0,n.kt)("h3",{id:"--help--h"},"--help, -h"),(0,n.kt)("p",null,"Show help for ",(0,n.kt)("inlineCode",{parentName:"p"},"kcl mod push")," command."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("h3",{id:"push-the-current-package"},"push the current package"),(0,n.kt)("p",null,"You can use ",(0,n.kt)("inlineCode",{parentName:"p"},"kcl mod push")," under the kcl package root directory to upload a kcl package to an OCI-based registry."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"# create a new kcl package.\n$ kcl mod init <package_name>\n# enter the kcl package root directory\n$ cd <package_name>\n# push it to an oci registry\n$ kcl mod push <oci_url>\n")),(0,n.kt)("h3",{id:"push-a-tar-to-the-registry"},"push a tar to the registry"),(0,n.kt)("p",null,"You can also use ",(0,n.kt)("inlineCode",{parentName:"p"},"kcl mod push")," to upload a tar file to an OCI-based registry."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kcl mod push --tar_path <tar_path> <oci_url>\n")))}m.isMDXComponent=!0}}]);