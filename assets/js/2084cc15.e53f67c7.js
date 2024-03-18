"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[96262],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),s=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(a),g=n,d=u["".concat(l,".").concat(g)]||u[g]||k[g]||r;return a?o.createElement(d,c(c({ref:t},p),{},{components:a})):o.createElement(d,c({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:n,c[1]=i;for(var s=2;s<r;s++)c[s]=a[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,a)}g.displayName="MDXCreateElement"},46720:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>k,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var o=a(87462),n=(a(67294),a(3905));const r={},c="Share Your Package to ghcr.io",i={unversionedId:"user_docs/guides/package-management/how-to/share_your_pkg",id:"version-0.5/user_docs/guides/package-management/how-to/share_your_pkg",title:"Share Your Package to ghcr.io",description:"This article will guide you on how to use kcl package management tool to push your kcl package to an OCI Registry for publication. The kcl package management tool uses ghcr.io as the default OCI Registry, and you can change the default OCI Registry by modifying the configuration file. For information on how to modify the configuration file, see kcl mod oci registry",source:"@site/versioned_docs/version-0.5/user_docs/guides/package-management/how-to/4-share_your_pkg.md",sourceDirName:"user_docs/guides/package-management/how-to",slug:"/user_docs/guides/package-management/how-to/share_your_pkg",permalink:"/docs/0.5/user_docs/guides/package-management/how-to/share_your_pkg",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5/user_docs/guides/package-management/how-to/4-share_your_pkg.md",tags:[],version:"0.5",lastUpdatedBy:"peefy",lastUpdatedAt:1710771316,formattedLastUpdatedAt:"Mar 18, 2024",sidebarPosition:4,frontMatter:{},sidebar:"user_docs",previous:{title:"Quick Start",permalink:"/docs/0.5/user_docs/guides/package-management/quick-start"},next:{title:"Share Your Package to docker.io",permalink:"/docs/0.5/user_docs/guides/package-management/how-to/share_your_pkg_docker"}},l={},s=[{value:"Step 1: Install KCL CLI",id:"step-1-install-kcl-cli",level:2},{value:"Step 2: Create a ghcr.io token",id:"step-2-create-a-ghcrio-token",level:2},{value:"Step 3: Log in to ghcr.io",id:"step-3-log-in-to-ghcrio",level:2},{value:"Step 4: Push your kcl package",id:"step-4-push-your-kcl-package",level:2},{value:"1. A valid kcl package",id:"1-a-valid-kcl-package",level:3},{value:"2. Pushing the KCL Package",id:"2-pushing-the-kcl-package",level:3}],p={toc:s},u="wrapper";function k(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"share-your-package-to-ghcrio"},"Share Your Package to ghcr.io"),(0,n.kt)("p",null,"This article will guide you on how to use kcl package management tool to push your kcl package to an OCI Registry for publication. The kcl package management tool uses ",(0,n.kt)("a",{parentName:"p",href:"https://ghcr.io"},"ghcr.io")," as the default OCI Registry, and you can change the default OCI Registry by modifying the configuration file. For information on how to modify the configuration file, see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kpm/blob/main/docs/kpm_oci.md#kpm-registry"},"kcl mod oci registry")),(0,n.kt)("p",null,"Here is a simple step-by-step guide on how to use kcl package management tool to push your kcl package to ghcr.io."),(0,n.kt)("h2",{id:"step-1-install-kcl-cli"},"Step 1: Install KCL CLI"),(0,n.kt)("p",null,"First, you need to install KCL CLI on your computer. You can follow the instructions in the ",(0,n.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/user_docs/getting-started/install"},"KCL CLI installation documentation"),"."),(0,n.kt)("h2",{id:"step-2-create-a-ghcrio-token"},"Step 2: Create a ghcr.io token"),(0,n.kt)("p",null,"If you are using the default OCI Registry, to push a kcl package to ghcr.io, you need to create a token for authentication. You can follow the instruction."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic"},"Creating a ghcr.io access token"))),(0,n.kt)("h2",{id:"step-3-log-in-to-ghcrio"},"Step 3: Log in to ghcr.io"),(0,n.kt)("p",null,"After installing KCL CLI and creating a ghcr.io token, you need to log in to ghcr.io. You can do this using the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kcl registry login -u <USERNAME> -p <TOKEN> ghcr.io\n")),(0,n.kt)("p",null,"Where ",(0,n.kt)("inlineCode",{parentName:"p"},"<USERNAME>")," is your GitHub username, ",(0,n.kt)("inlineCode",{parentName:"p"},"<TOKEN>")," is the token you created in step 2"),(0,n.kt)("p",null,"For more information on how to log in to ghcr.io, see ",(0,n.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/reference/package-management/command-reference/login"},"kcl registry login"),"."),(0,n.kt)("h2",{id:"step-4-push-your-kcl-package"},"Step 4: Push your kcl package"),(0,n.kt)("p",null,"Now, you can use kpm to push your kcl package to ghcr.io."),(0,n.kt)("h3",{id:"1-a-valid-kcl-package"},"1. A valid kcl package"),(0,n.kt)("p",null,"First, you need to make sure that what you are pushing conforms to the specifications of a kcl package, i.e., it must contain valid kcl.mod and kcl.mod.lock files."),(0,n.kt)("p",null,"If you don't know how to get a valid kcl.mod and kcl.mod.lock, you can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"kcl mod init")," command."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"# Create a new kcl package named my_package\nkcl mod init my_package\n")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"kcl mod init my_package")," command will create a new kcl package ",(0,n.kt)("inlineCode",{parentName:"p"},"my_package")," for you and create the ",(0,n.kt)("inlineCode",{parentName:"p"},"kcl.mod")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"kcl.mod.lock")," files for this package."),(0,n.kt)("p",null,"If you already have a directory containing kcl files ",(0,n.kt)("inlineCode",{parentName:"p"},"exist_kcl_package"),", you can use the following command to convert it into a kcl package and create valid ",(0,n.kt)("inlineCode",{parentName:"p"},"kcl.mod")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"kcl.mod.lock")," files for it."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"# In the exist_kcl_package directory\n$ pwd\n/home/user/exist_kcl_package\n\n# Run the `kcl mod init` command to create the `kcl.mod` and `kcl.mod.lock` files\n$ kcl mod init\n")),(0,n.kt)("p",null,"For more information on how to use ",(0,n.kt)("inlineCode",{parentName:"p"},"kcl mod init"),", see ",(0,n.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/tools/cli/package-management/command-reference/init"},"kcl mod init"),"."),(0,n.kt)("h3",{id:"2-pushing-the-kcl-package"},"2. Pushing the KCL Package"),(0,n.kt)("p",null,"You can use the following command in the root directory of your ",(0,n.kt)("inlineCode",{parentName:"p"},"kcl")," package:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"# In the root directory of the exist_kcl_package package\n$ pwd\n/home/user/exist_kcl_package\n\n# Pushing the KCL Package to Default OCI Registry\n$ kcl mod push\n")),(0,n.kt)("p",null,"After completing these steps, you have successfully pushed your KCL Package to the default OCI Registry.\nFor more information on how to use ",(0,n.kt)("inlineCode",{parentName:"p"},"kcl mod push"),", see ",(0,n.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/tools/cli/package-management/command-reference/push"},"kcl mod push"),"."))}k.isMDXComponent=!0}}]);