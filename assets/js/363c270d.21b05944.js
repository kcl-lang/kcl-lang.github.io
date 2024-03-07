"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[17561],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93637:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={},o="Installation",i={unversionedId:"user_docs/guides/package-management/installation",id:"version-0.5.3/user_docs/guides/package-management/installation",title:"Installation",description:"Install kpm",source:"@site/versioned_docs/version-0.5.3/user_docs/guides/package-management/2-installation.md",sourceDirName:"user_docs/guides/package-management",slug:"/user_docs/guides/package-management/installation",permalink:"/docs/0.5.3/user_docs/guides/package-management/installation",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.3/user_docs/guides/package-management/2-installation.md",tags:[],version:"0.5.3",lastUpdatedBy:"peefy",lastUpdatedAt:1709797004,formattedLastUpdatedAt:"Mar 7, 2024",sidebarPosition:2,frontMatter:{},sidebar:"user_docs",previous:{title:"Overview",permalink:"/docs/0.5.3/user_docs/guides/package-management/overview"},next:{title:"Quick Start",permalink:"/docs/0.5.3/user_docs/guides/package-management/quick-start"}},s={},p=[{value:"Install <code>kpm</code>",id:"install-kpm",level:2},{value:"Go install",id:"go-install",level:3},{value:"Download from GITHUB release page",id:"download-from-github-release-page",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("h2",{id:"install-kpm"},"Install ",(0,r.kt)("inlineCode",{parentName:"h2"},"kpm")),(0,r.kt)("p",null,"Before installing and using kpm, ensure that KCL has been installed successfully."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/user_docs/getting-started/install"},"How to install KCL")),(0,r.kt)("h3",{id:"go-install"},"Go install"),(0,r.kt)("p",null,"You can download kpm via go install."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"go install kcl-lang.io/kpm@latest\n")),(0,r.kt)("h3",{id:"download-from-github-release-page"},"Download from GITHUB release page"),(0,r.kt)("p",null,"You can get ",(0,r.kt)("inlineCode",{parentName:"p"},"kpm")," from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kpm/releases"},"kpm github release")," and set the ",(0,r.kt)("inlineCode",{parentName:"p"},"kpm")," binary path to the environment variable PATH."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# KPM_INSTALLATION_PATH is the path of the `kpm` binary.\nexport PATH=$KPM_INSTALLATION_PATH:$PATH\n")),(0,r.kt)("p",null,"Use the following command to ensure that you install ",(0,r.kt)("inlineCode",{parentName:"p"},"kpm")," successfully."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kpm --help\n")),(0,r.kt)("p",null,"If you get the following output, you have successfully installed ",(0,r.kt)("inlineCode",{parentName:"p"},"kpm")," and you can proceed to the following steps."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"NAME:\n   kpm - kpm is a kcl package manager\n\nUSAGE:\n   kpm  <command> [arguments]...\n\nCOMMANDS:\n   init      initialize new module in current directory\n   add       add new dependency\n   pkg       package a kcl package into tar\n   metadata  output the resolved dependencies of a package\n   run       compile kcl package.\n   login     login to a registry\n   logout    logout from a registry\n   push      push kcl package to OCI registry.\n   pull      pull kcl package from OCI registry.\n   help, h   Shows a list of commands or help for one command\n\nGLOBAL OPTIONS:\n   --help, -h  show help\n")))}d.isMDXComponent=!0}}]);