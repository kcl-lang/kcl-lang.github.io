"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[85591],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),i=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=i(a),d=n,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return a?r.createElement(h,p(p({ref:t},s),{},{components:a})):r.createElement(h,p({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,p=new Array(o);p[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:n,p[1]=l;for(var i=2;i<o;i++)p[i]=a[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4160:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=a(87462),n=(a(67294),a(3905));const o={},p="kpm push",l={unversionedId:"tools/cli/package-management/command-reference/push",id:"version-0.6.0/tools/cli/package-management/command-reference/push",title:"kpm push",description:"Push a package to the kpm registry.",source:"@site/versioned_docs/version-0.6.0/tools/cli/package-management/command-reference/8.push.md",sourceDirName:"tools/cli/package-management/command-reference",slug:"/tools/cli/package-management/command-reference/push",permalink:"/docs/0.6.0/tools/cli/package-management/command-reference/push",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.6.0/tools/cli/package-management/command-reference/8.push.md",tags:[],version:"0.6.0",lastUpdatedBy:"Peefy",lastUpdatedAt:1705584615,formattedLastUpdatedAt:"Jan 18, 2024",sidebarPosition:8,frontMatter:{},sidebar:"tools",previous:{title:"kpm logout",permalink:"/docs/0.6.0/tools/cli/package-management/command-reference/logout"},next:{title:"kpm pull",permalink:"/docs/0.6.0/tools/cli/package-management/command-reference/pull"}},c={},i=[{value:"Usage",id:"usage",level:2},{value:"Description",id:"description",level:2},{value:"options",id:"options",level:2},{value:"--tar_path",id:"--tar_path",level:3},{value:"--help, -h",id:"--help--h",level:3},{value:"Examples",id:"examples",level:2},{value:"push the current package",id:"push-the-current-package",level:3},{value:"push a tar to the registry",id:"push-a-tar-to-the-registry",level:3}],s={toc:i},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"kpm-push"},"kpm push"),(0,n.kt)("p",null,"Push a package to the kpm registry."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kpm push [options][kpm_registry]\n")),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"kpm push")," will push a package to the kpm registry."),(0,n.kt)("h2",{id:"options"},"options"),(0,n.kt)("h3",{id:"--tar_path"},"--tar_path"),(0,n.kt)("p",null,"The path to the tar file to push."),(0,n.kt)("h3",{id:"--help--h"},"--help, -h"),(0,n.kt)("p",null,"Show help for ",(0,n.kt)("inlineCode",{parentName:"p"},"kpm push")," command."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("h3",{id:"push-the-current-package"},"push the current package"),(0,n.kt)("p",null,"You can use ",(0,n.kt)("inlineCode",{parentName:"p"},"kpm push")," under the kcl package root directory to upload a kcl package to an OCI-based registry."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"# create a new kcl package.\n$ kpm init <package_name>\n# enter the kcl package root directory\n$ cd <package_name>\n# push it to an oci registry\n$ kpm push <oci_url>\n")),(0,n.kt)("h3",{id:"push-a-tar-to-the-registry"},"push a tar to the registry"),(0,n.kt)("p",null,"You can also use ",(0,n.kt)("inlineCode",{parentName:"p"},"kpm push")," to upload a tar file to an OCI-based registry."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kpm push --tar_path <tar_path> <oci_url>\n")))}m.isMDXComponent=!0}}]);