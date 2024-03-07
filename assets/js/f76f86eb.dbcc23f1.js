"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[16138],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),i=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=i(a),d=n,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return a?r.createElement(h,l(l({ref:t},s),{},{components:a})):r.createElement(h,l({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:n,l[1]=c;for(var i=2;i<o;i++)l[i]=a[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},72385:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var r=a(87462),n=(a(67294),a(3905));const o={},l="kcl mod push",c={unversionedId:"tools/cli/package-management/command-reference/push",id:"tools/cli/package-management/command-reference/push",title:"kcl mod push",description:"Push a package to the kcl mod registry.",source:"@site/docs/tools/cli/package-management/command-reference/8.push.md",sourceDirName:"tools/cli/package-management/command-reference",slug:"/tools/cli/package-management/command-reference/push",permalink:"/docs/next/tools/cli/package-management/command-reference/push",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/tools/cli/package-management/command-reference/8.push.md",tags:[],version:"current",lastUpdatedBy:"peefy",lastUpdatedAt:1709797004,formattedLastUpdatedAt:"Mar 7, 2024",sidebarPosition:8,frontMatter:{},sidebar:"tools",previous:{title:"kcl registry logout",permalink:"/docs/next/tools/cli/package-management/command-reference/logout"},next:{title:"kcl mod pull",permalink:"/docs/next/tools/cli/package-management/command-reference/pull"}},p={},i=[{value:"Usage",id:"usage",level:2},{value:"Description",id:"description",level:2},{value:"options",id:"options",level:2},{value:"--tar_path",id:"--tar_path",level:3},{value:"--help, -h",id:"--help--h",level:3},{value:"Examples",id:"examples",level:2},{value:"push the current package",id:"push-the-current-package",level:3},{value:"push a tar to the registry",id:"push-a-tar-to-the-registry",level:3}],s={toc:i},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"kcl-mod-push"},"kcl mod push"),(0,n.kt)("p",null,"Push a package to the kcl mod registry."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kcl mod push [options][kpm_registry]\n")),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"kcl mod push")," will push a package to the kcl mod registry."),(0,n.kt)("h2",{id:"options"},"options"),(0,n.kt)("h3",{id:"--tar_path"},"--tar_path"),(0,n.kt)("p",null,"The path to the tar file to push."),(0,n.kt)("h3",{id:"--help--h"},"--help, -h"),(0,n.kt)("p",null,"Show help for ",(0,n.kt)("inlineCode",{parentName:"p"},"kcl mod push")," command."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("h3",{id:"push-the-current-package"},"push the current package"),(0,n.kt)("p",null,"You can use ",(0,n.kt)("inlineCode",{parentName:"p"},"kcl mod push")," under the kcl package root directory to upload a kcl package to an OCI-based registry."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"# create a new kcl package.\n$ kcl mod init <package_name>\n# enter the kcl package root directory\n$ cd <package_name>\n# push it to an oci registry\n$ kcl mod push <oci_url>\n")),(0,n.kt)("h3",{id:"push-a-tar-to-the-registry"},"push a tar to the registry"),(0,n.kt)("p",null,"You can also use ",(0,n.kt)("inlineCode",{parentName:"p"},"kcl mod push")," to upload a tar file to an OCI-based registry."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kcl mod push --tar_path <tar_path> <oci_url>\n")))}m.isMDXComponent=!0}}]);