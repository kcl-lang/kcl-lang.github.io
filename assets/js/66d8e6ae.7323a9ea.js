"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[16689],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),g=s(a),d=o,k=g["".concat(i,".").concat(d)]||g[d]||u[d]||l;return a?n.createElement(k,r(r({ref:t},p),{},{components:a})):n.createElement(k,r({ref:t},p))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[g]="string"==typeof e?e:o,r[1]=c;for(var s=2;s<l;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},56346:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var n=a(87462),o=(a(67294),a(3905));const l={},r="Support for OCI Registries",c={unversionedId:"user_docs/guides/package-management/how-to/kpm_oci",id:"user_docs/guides/package-management/how-to/kpm_oci",title:"Support for OCI Registries",description:"KCL package management tool supports saving and sharing KCL packages through OCI Registries.",source:"@site/docs/user_docs/guides/package-management/4-how-to/9-kpm_oci.md",sourceDirName:"user_docs/guides/package-management/4-how-to",slug:"/user_docs/guides/package-management/how-to/kpm_oci",permalink:"/docs/next/user_docs/guides/package-management/how-to/kpm_oci",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/user_docs/guides/package-management/4-how-to/9-kpm_oci.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1708241829,formattedLastUpdatedAt:"Feb 18, 2024",sidebarPosition:9,frontMatter:{},sidebar:"user_docs",previous:{title:"kcl.mod: The KCL package Manifest File",permalink:"/docs/next/user_docs/guides/package-management/how-to/kcl_mod"},next:{title:"Overview",permalink:"/docs/next/user_docs/guides/working-with-k8s/overview"}},i={},s=[{value:"Default registry",id:"default-registry",level:2},{value:"Quick start",id:"quick-start",level:2},{value:"<code>kcl registry login</code> to login OCI Registry",id:"kcl-registry-login-to-login-oci-registry",level:3},{value:"1. Login OCI Registry with account and password",id:"1-login-oci-registry-with-account-and-password",level:4},{value:"2. Login OCI Registry with account and interactive input password",id:"2-login-oci-registry-with-account-and-interactive-input-password",level:4},{value:"3. Login OCI Registry with interactive input account and password",id:"3-login-oci-registry-with-interactive-input-account-and-password",level:4},{value:"<code>kcl registry logout</code> to logout OCI Registry",id:"kcl-registry-logout-to-logout-oci-registry",level:3},{value:"<code>kcl mod push</code> to upload a KCL package",id:"kcl-mod-push-to-upload-a-kcl-package",level:3},{value:"<code>kcl mod pull</code> to download a KCL package",id:"kcl-mod-pull-to-download-a-kcl-package",level:3},{value:"<code>kcl mod run</code> to compile a KCL package",id:"kcl-mod-run-to-compile-a-kcl-package",level:3}],p={toc:s},g="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(g,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"support-for-oci-registries"},"Support for OCI Registries"),(0,o.kt)("p",null,"KCL package management tool supports saving and sharing KCL packages through OCI Registries."),(0,o.kt)("h2",{id:"default-registry"},"Default registry"),(0,o.kt)("p",null,"KCL package management tool uses ",(0,o.kt)("inlineCode",{parentName:"p"},"ghcr.io")," to save KCL packages by default."),(0,o.kt)("p",null,"Default registry - ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/orgs/kcl-lang/packages"},"https://github.com/orgs/kcl-lang/packages")),(0,o.kt)("p",null,"You can adjust the registry and repository name of the OCI registry in the configuration file. The configuration file of the KCL package management tool is located at ",(0,o.kt)("inlineCode",{parentName:"p"},"$KCL_PKG_PATH/.kpm/config/kpm.json"),", if the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"KCL_PKG_PATH")," is not set, it is saved by default in ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/.kcl/kpm/.kpm/config/kpm.json"),"."),(0,o.kt)("p",null,"The default content of the configuration file is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "DefaultOciRegistry": "ghcr.io",\n  "DefaultOciRepo": "kcl-lang",\n  "DefaultOciPlainHttp": true\n}\n')),(0,o.kt)("h2",{id:"quick-start"},"Quick start"),(0,o.kt)("p",null,"In the following content, we will use ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:5001")," as an example OCI Registry, and add an account ",(0,o.kt)("inlineCode",{parentName:"p"},"test")," with a password ",(0,o.kt)("inlineCode",{parentName:"p"},"1234")," to this OCI Registry, and upload a package named ",(0,o.kt)("inlineCode",{parentName:"p"},"MyPkg")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"v0.1.0"),"."),(0,o.kt)("h3",{id:"kcl-registry-login-to-login-oci-registry"},(0,o.kt)("inlineCode",{parentName:"h3"},"kcl registry login")," to login OCI Registry"),(0,o.kt)("p",null,"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"kcl registry login")," in four ways."),(0,o.kt)("h4",{id:"1-login-oci-registry-with-account-and-password"},"1. Login OCI Registry with account and password"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kcl registry login -u <account_name> -p <password> <oci_registry>\nLogin succeeded\n")),(0,o.kt)("p",null,"For the example, the command is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kcl registry login -u test -p 1234 localhost:5001\n")),(0,o.kt)("h4",{id:"2-login-oci-registry-with-account-and-interactive-input-password"},"2. Login OCI Registry with account and interactive input password"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kcl registry login -u <account_name> <oci_registry>\nPassword:\nLogin succeeded\n")),(0,o.kt)("p",null,"For the example, the command is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kcl registry login -u test localhost:5001\nPassword: 1234\nLogin succeeded\n")),(0,o.kt)("h4",{id:"3-login-oci-registry-with-interactive-input-account-and-password"},"3. Login OCI Registry with interactive input account and password"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kcl registry login <oci_registry>\nUsername: <account_name>\nPassword:\nLogin succeeded\n")),(0,o.kt)("p",null,"For the example, the command is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kcl registry login localhost:5001\nUsername: test\nPassword: 1234\nLogin succeeded\n")),(0,o.kt)("h3",{id:"kcl-registry-logout-to-logout-oci-registry"},(0,o.kt)("inlineCode",{parentName:"h3"},"kcl registry logout")," to logout OCI Registry"),(0,o.kt)("p",null,"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"kcl registry logout")," to logout an OCI Registry."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kpm logout <registry>\n")),(0,o.kt)("p",null,"For the example, the command is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kpm logout localhost:5001\n")),(0,o.kt)("h3",{id:"kcl-mod-push-to-upload-a-kcl-package"},(0,o.kt)("inlineCode",{parentName:"h3"},"kcl mod push")," to upload a KCL package"),(0,o.kt)("p",null,"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"kcl mod push")," to upload a KCL package to an OCI Registry."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# Create a new kcl package.\n$ kcl mod init <package_name>\n# Enter the root directory of the kcl package\n$ cd <package_name>\n# Upload the kcl package to an oci registry\n$ kcl mod push\n")),(0,o.kt)("p",null,"For the example, the commands are as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kcl mod init MyPkg\n$ cd MyPkg\n$ kcl mod push\n")),(0,o.kt)("p",null,"You can also specify the url of the OCI registry in the ",(0,o.kt)("inlineCode",{parentName:"p"},"kcl mod push")," command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# Create a new kcl package.\n$ kcl mod init <package_name>\n# Enter the root directory of the kcl package\n$ cd <package_name>\n# Upload the kcl package to an oci registry\n$ kcl mod push <oci_url>\n")),(0,o.kt)("p",null,"For the example, you can push the kcl package to ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:5001")," by the command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kcl mod init MyPkg\n$ cd MyPkg\n$ kcl mod push oci://localhost:5001/test/MyPkg --tag v0.1.0\n")),(0,o.kt)("h3",{id:"kcl-mod-pull-to-download-a-kcl-package"},(0,o.kt)("inlineCode",{parentName:"h3"},"kcl mod pull")," to download a KCL package"),(0,o.kt)("p",null,"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"kcl mod pull")," to download a KCL package from the default OCI registry. KPM will automatically search for the kcl package from the OCI registry in ",(0,o.kt)("inlineCode",{parentName:"p"},"kpm.json"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kpm pull <package_name>:<package_version>\n")),(0,o.kt)("p",null,"For the example, the command is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kpm pull MyPkg:v0.1.0\n")),(0,o.kt)("p",null,"Or, you can download a kcl package from the specified OCI registry url."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kcl mod pull <oci_url>\n")),(0,o.kt)("p",null,"For the example, the command is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kcl mod pull oci://localhost:5001/test/MyPkg --tag v0.1.0\n")),(0,o.kt)("h3",{id:"kcl-mod-run-to-compile-a-kcl-package"},(0,o.kt)("inlineCode",{parentName:"h3"},"kcl mod run")," to compile a KCL package"),(0,o.kt)("p",null,"KCL package management tool can directly compile a kcl package through the url of OCI."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kcl run <oci_url>\n")),(0,o.kt)("p",null,"For the example, the command is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kcl run oci://localhost:5001/test/MyPkg --tag v0.1.0\n")))}u.isMDXComponent=!0}}]);