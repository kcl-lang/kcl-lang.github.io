"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[86677],{3905:(e,t,o)=>{o.d(t,{Zo:()=>k,kt:()=>m});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},k=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,k=l(e,["components","mdxType","originalType","parentName"]),s=p(o),d=n,m=s["".concat(i,".").concat(d)]||s[d]||u[d]||r;return o?a.createElement(m,c(c({ref:t},k),{},{components:o})):a.createElement(m,c({ref:t},k))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,c=new Array(r);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[s]="string"==typeof e?e:n,c[1]=l;for(var p=2;p<r;p++)c[p]=o[p];return a.createElement.apply(null,c)}return a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},54109:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=o(87462),n=(o(67294),o(3905));const r={},c="Share Your Package to docker.io",l={unversionedId:"user_docs/guides/package-management/how-to/share_your_pkg_docker",id:"version-0.5/user_docs/guides/package-management/how-to/share_your_pkg_docker",title:"Share Your Package to docker.io",description:"This article will show you how to use the kcl package management tool to push your kcl packages to docker.io.",source:"@site/versioned_docs/version-0.5/user_docs/guides/package-management/how-to/5-share_your_pkg_docker.md",sourceDirName:"user_docs/guides/package-management/how-to",slug:"/user_docs/guides/package-management/how-to/share_your_pkg_docker",permalink:"/docs/0.5/user_docs/guides/package-management/how-to/share_your_pkg_docker",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5/user_docs/guides/package-management/how-to/5-share_your_pkg_docker.md",tags:[],version:"0.5",lastUpdatedBy:"Peefy",lastUpdatedAt:1714663025,formattedLastUpdatedAt:"May 2, 2024",sidebarPosition:5,frontMatter:{},sidebar:"user_docs",previous:{title:"Share Your Package to ghcr.io",permalink:"/docs/0.5/user_docs/guides/package-management/how-to/share_your_pkg"},next:{title:"Push Your KCL Package by GitHub Action",permalink:"/docs/0.5/user_docs/guides/package-management/how-to/push_github_action"}},i={},p=[{value:"Step 1: Install KCL CLI",id:"step-1-install-kcl-cli",level:2},{value:"Step 2: Create a docker.io account",id:"step-2-create-a-dockerio-account",level:2},{value:"Step 3: Log in to docker.io",id:"step-3-log-in-to-dockerio",level:2},{value:"Step 4: Push your kcl package",id:"step-4-push-your-kcl-package",level:2},{value:"1. A valid kcl package",id:"1-a-valid-kcl-package",level:3},{value:"2. Pushing the KCL Package",id:"2-pushing-the-kcl-package",level:3}],k={toc:p},s="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(s,(0,a.Z)({},k,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"share-your-package-to-dockerio"},"Share Your Package to docker.io"),(0,n.kt)("p",null,"This article will show you how to use the kcl package management tool to push your kcl packages to docker.io."),(0,n.kt)("h2",{id:"step-1-install-kcl-cli"},"Step 1: Install KCL CLI"),(0,n.kt)("p",null,"First, you need to install KCL CLI on your computer. You can follow the instructions in the ",(0,n.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/user_docs/getting-started/install"},"KCL CLI installation documentation"),"."),(0,n.kt)("h2",{id:"step-2-create-a-dockerio-account"},"Step 2: Create a docker.io account"),(0,n.kt)("p",null,"If you want to use ",(0,n.kt)("inlineCode",{parentName:"p"},"docker.io")," as the OCI registry to share your kcl package with others, you need to create a ",(0,n.kt)("inlineCode",{parentName:"p"},"docker.io")," account to support the push of your kcl package."),(0,n.kt)("h2",{id:"step-3-log-in-to-dockerio"},"Step 3: Log in to docker.io"),(0,n.kt)("p",null,"You can use the following command to log in to docker.io."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kcl registry login -u <USERNAME> -p <TOKEN> docker.io\n")),(0,n.kt)("p",null,"Where ",(0,n.kt)("inlineCode",{parentName:"p"},"<USERNAME>")," is your ",(0,n.kt)("inlineCode",{parentName:"p"},"docker.io")," username, and ",(0,n.kt)("inlineCode",{parentName:"p"},"<PASSWORD>")," is your ",(0,n.kt)("inlineCode",{parentName:"p"},"docker.io")," password."),(0,n.kt)("p",null,"For more information on how to log in to ghcr.io, see ",(0,n.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/reference/package-management/command-reference/login"},"kcl registry login"),"."),(0,n.kt)("h2",{id:"step-4-push-your-kcl-package"},"Step 4: Push your kcl package"),(0,n.kt)("p",null,"Now, you can use kpm to push your kcl package to ",(0,n.kt)("inlineCode",{parentName:"p"},"docker.io"),"."),(0,n.kt)("h3",{id:"1-a-valid-kcl-package"},"1. A valid kcl package"),(0,n.kt)("p",null,"First, you need to make sure that what you are pushing conforms to the specifications of a kcl package, i.e., it must contain valid kcl.mod and kcl.mod.lock files."),(0,n.kt)("p",null,"If you don't know how to get a valid kcl.mod and kcl.mod.lock, you can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"kcl mod init")," command."),(0,n.kt)("p",null,"Create a new kcl package named ",(0,n.kt)("inlineCode",{parentName:"p"},"my_package"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kcl mod init my_package\n")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"kcl mod init my_package")," command will create a new kcl package ",(0,n.kt)("inlineCode",{parentName:"p"},"my_package")," for you and create the ",(0,n.kt)("inlineCode",{parentName:"p"},"kcl.mod")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"kcl.mod.lock")," files for this package."),(0,n.kt)("p",null,"If you already have a directory containing kcl files ",(0,n.kt)("inlineCode",{parentName:"p"},"exist_kcl_package"),", you can use the following command to convert it into a kcl package and create valid ",(0,n.kt)("inlineCode",{parentName:"p"},"kcl.mod")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"kcl.mod.lock")," files for it."),(0,n.kt)("p",null,"Run the ",(0,n.kt)("inlineCode",{parentName:"p"},"kcl mod init")," command under the ",(0,n.kt)("inlineCode",{parentName:"p"},"exist_kcl_package")," directory."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kcl mod init\n")),(0,n.kt)("p",null,"For more information on how to use ",(0,n.kt)("inlineCode",{parentName:"p"},"kcl mod init"),", see ",(0,n.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/tools/cli/package-management/command-reference/init"},"kcl mod init"),"."),(0,n.kt)("h3",{id:"2-pushing-the-kcl-package"},"2. Pushing the KCL Package"),(0,n.kt)("p",null,"You can use the following command in the root directory of your ",(0,n.kt)("inlineCode",{parentName:"p"},"kcl")," package:"),(0,n.kt)("p",null,"Run the ",(0,n.kt)("inlineCode",{parentName:"p"},"kcl mod push")," command under the ",(0,n.kt)("inlineCode",{parentName:"p"},"exist_kcl_package")," directory."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kcl mod push oci://docker.io/<USERNAME>/exist_kcl_package\n")),(0,n.kt)("p",null,"After completing these steps, you have successfully pushed your KCL Package ",(0,n.kt)("inlineCode",{parentName:"p"},"exist_kcl_package")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"docker.io"),".\nFor more information on how to use ",(0,n.kt)("inlineCode",{parentName:"p"},"kcl mod push"),", see ",(0,n.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/tools/cli/package-management/command-reference/push"},"kcl mod push"),"."))}u.isMDXComponent=!0}}]);