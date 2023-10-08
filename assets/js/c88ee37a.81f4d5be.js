"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[86683],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?i.createElement(k,o(o({ref:t},u),{},{components:n})):i.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49680:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const r={sidebar_position:1},o="Visual Studio Code",s={unversionedId:"tools/Ide/vs-code",id:"version-0.6.0/tools/Ide/vs-code",title:"Visual Studio Code",description:"Quick Start",source:"@site/versioned_docs/version-0.6.0/tools/Ide/vs-code.md",sourceDirName:"tools/Ide",slug:"/tools/Ide/vs-code",permalink:"/docs/tools/Ide/vs-code",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.6.0/tools/Ide/vs-code.md",tags:[],version:"0.6.0",lastUpdatedBy:"He1pa",lastUpdatedAt:1696668701,formattedLastUpdatedAt:"Oct 7, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tools",previous:{title:"IDE",permalink:"/docs/tools/Ide/"},next:{title:"NeoVim",permalink:"/docs/tools/Ide/neovim"}},l={},c=[{value:"Quick Start",id:"quick-start",level:2},{value:"Features",id:"features",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Known Issues",id:"known-issues",level:2},{value:"Ask for help",id:"ask-for-help",level:2},{value:"Contributing",id:"contributing",level:2},{value:"License",id:"license",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"visual-studio-code"},"Visual Studio Code"),(0,a.kt)("h2",{id:"quick-start"},"Quick Start"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1.")," ",(0,a.kt)("a",{parentName:"li",href:"https://kcl-lang.io/docs/user_docs/getting-started/install"},"Install KCL")," on your system. Please check that ",(0,a.kt)("inlineCode",{parentName:"li"},"kcl")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"kcl-language-server")," are installed and have been added to your PATH:")),(0,a.kt)("p",null,"In MacOs and Linux:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"which kcl\nwhich kcl-language-server\n")),(0,a.kt)("p",null,"In Windows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"where kcl\nwhere kcl-language-server\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2.")," Install the ",(0,a.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=kcl.kcl-vscode-extension"},"KCL extension")," for Visual Studio Code. This extension requires the VS Code 1.50+."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3.")," Reopen VS Code and create a KCL file and begin your KCL tour!")),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("p",null,"This extension provides some coding assistance, including the following features:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Syntax Highlight:"),(0,a.kt)("img",{alt:"Highlight",src:n(79102).Z,width:"1312",height:"782"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Goto Definition:")," Goto definition of schema, variable, schema attribute, map key and import pkg.\n",(0,a.kt)("img",{alt:"Goto Definition",src:n(30130).Z,width:"1312",height:"780"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Completion:")," Completion for keywords, dot(",(0,a.kt)("inlineCode",{parentName:"li"},"."),"), variables and schema attribute.\n",(0,a.kt)("img",{alt:"Completion",src:n(23696).Z,width:"1312",height:"780"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Outline:")," Main definition(schema def) and variables in KCL file.\n",(0,a.kt)("img",{alt:"Outline",src:n(87560).Z,width:"1312",height:"780"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Hover:")," Identifier information (type, function signature and documents).\n",(0,a.kt)("img",{alt:"Hover",src:n(57945).Z,width:"1312",height:"780"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Diagnostics:")," Warnings and errors in KCL file.\n",(0,a.kt)("img",{alt:"Diagnostics",src:n(64189).Z,width:"1312",height:"780"}))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Tips: You can enhance the effect of diagnostics by installing another extension: ",(0,a.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens"},"Error Lens"),".")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Format:")," Format a KCL file or snippet code\n",(0,a.kt)("img",{alt:"Format",src:n(43117).Z,width:"1320",height:"778"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Quick fix:")," Quick fix some diagnostics\n",(0,a.kt)("img",{alt:"Qucik Fix",src:n(539).Z,width:"1320",height:"778"}))),(0,a.kt)("p",null,"Other useful features such as refactoring and testing are in development."),(0,a.kt)("h2",{id:"dependencies"},"Dependencies"),(0,a.kt)("p",null,"We recommend that you use the latest version of KCL, but the minimum required version for this extension is 0.4.6. If you are using an earlier version, the extension may not work properly."),(0,a.kt)("h2",{id:"known-issues"},"Known Issues"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl/issues/524"},"here"),"."),(0,a.kt)("h2",{id:"ask-for-help"},"Ask for help"),(0,a.kt)("p",null,"If the extension isn't working as you expect, please contact us with ",(0,a.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/community/intro/support"},"community")," for help."),(0,a.kt)("h2",{id:"contributing"},"Contributing"),(0,a.kt)("p",null,"We are working actively on improving the KCL development on VS Code. All kinds of contributions are welcomed. You can refer to our ",(0,a.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/community/contribute"},"contribution guide"),". It introduces how to build and run the extension locally, and describes the process of sending a contribution."),(0,a.kt)("h2",{id:"license"},"License"),(0,a.kt)("p",null,"Apache License 2.0"))}p.isMDXComponent=!0},23696:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Completion-584771cd4bed237e74d3da3decaa9757.gif"},64189:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Diagnostics-716fc3b938a94e4db2cbafaad4f4174d.gif"},43117:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Format-59d8915e1e2c361896c65e296bb0a1b3.gif"},30130:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/GotoDef-0875243eacd6b76e49b7a5b95cb9ce55.gif"},79102:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Highlight-7e1f5208ba57f3ebe9926efba8e270a2.png"},57945:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Hover-339697d17ca0d4f167b1b1a904c9f1aa.gif"},87560:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Outline-c443b2ee1e35746795e7b09c11f3f4da.gif"},539:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/QuickFix-0f41e6016659a53c369573c28c88d54e.gif"}}]);