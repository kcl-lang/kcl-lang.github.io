"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[82439],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,m=d["".concat(c,".").concat(u)]||d[u]||g[u]||o;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4201:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={},l="kcl registry login",i={unversionedId:"tools/cli/package-management/command-reference/login",id:"version-0.7.0/tools/cli/package-management/command-reference/login",title:"kcl registry login",description:"Login to the kcl registry.",source:"@site/versioned_docs/version-0.7.0/tools/cli/package-management/command-reference/6.login.md",sourceDirName:"tools/cli/package-management/command-reference",slug:"/tools/cli/package-management/command-reference/login",permalink:"/docs/tools/cli/package-management/command-reference/login",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.7.0/tools/cli/package-management/command-reference/6.login.md",tags:[],version:"0.7.0",lastUpdatedBy:"Peefy",lastUpdatedAt:1706869561,formattedLastUpdatedAt:"Feb 2, 2024",sidebarPosition:6,frontMatter:{},sidebar:"tools",previous:{title:"kcl mod metadata",permalink:"/docs/tools/cli/package-management/command-reference/metadata"},next:{title:"kcl registry logout",permalink:"/docs/tools/cli/package-management/command-reference/logout"}},c={},s=[{value:"Usage",id:"usage",level:2},{value:"Description",id:"description",level:2},{value:"options",id:"options",level:2},{value:"--username",id:"--username",level:3},{value:"--password",id:"--password",level:3},{value:"--help, -h",id:"--help--h",level:3},{value:"Examples",id:"examples",level:2},{value:"login to a registry with account and password",id:"login-to-a-registry-with-account-and-password",level:3},{value:"login to a registry with account, and enter the password interactively",id:"login-to-a-registry-with-account-and-enter-the-password-interactively",level:3},{value:"login to a registry, and enter the account and password interactively",id:"login-to-a-registry-and-enter-the-account-and-password-interactively",level:3}],p={toc:s},d="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kcl-registry-login"},"kcl registry login"),(0,a.kt)("p",null,"Login to the kcl registry."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kcl registry login [options][kpm_registry]\n")),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kcl registry login")," will login the kcl registry."),(0,a.kt)("h2",{id:"options"},"options"),(0,a.kt)("h3",{id:"--username"},"--username"),(0,a.kt)("p",null,"Specify the username of the kcl registry."),(0,a.kt)("h3",{id:"--password"},"--password"),(0,a.kt)("p",null,"Specify the password of the kcl registry."),(0,a.kt)("h3",{id:"--help--h"},"--help, -h"),(0,a.kt)("p",null,"Show help for ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl registry login")," command."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"login-to-a-registry-with-account-and-password"},"login to a registry with account and password"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kcl registry login -u <account_name> -p <password> <oci_registry>\n")),(0,a.kt)("p",null,"The output is"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"Login succeeded\n")),(0,a.kt)("h3",{id:"login-to-a-registry-with-account-and-enter-the-password-interactively"},"login to a registry with account, and enter the password interactively"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kcl registry login -u <account_name> <oci_registry>\n")),(0,a.kt)("p",null,"The output is"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"Password:\nLogin succeeded\n")),(0,a.kt)("h3",{id:"login-to-a-registry-and-enter-the-account-and-password-interactively"},"login to a registry, and enter the account and password interactively"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kcl registry login <oci_registry>\n")),(0,a.kt)("p",null,"The output is"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"Username: <account_name>\nPassword:\nLogin succeeded\n")))}g.isMDXComponent=!0}}]);