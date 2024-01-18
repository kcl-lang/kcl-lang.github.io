"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[99504],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},k=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),s=c(n),d=r,u=s["".concat(p,".").concat(d)]||s[d]||m[d]||i;return n?a.createElement(u,l(l({ref:t},k),{},{components:n})):a.createElement(u,l({ref:t},k))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16700:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={},l="kcl.mod: The KCL package Manifest File",o={unversionedId:"user_docs/guides/package-management/how-to/kcl_mod",id:"version-0.7.0/user_docs/guides/package-management/how-to/kcl_mod",title:"kcl.mod: The KCL package Manifest File",description:"The Manifest",source:"@site/versioned_docs/version-0.7.0/user_docs/guides/package-management/4-how-to/8-kcl_mod.md",sourceDirName:"user_docs/guides/package-management/4-how-to",slug:"/user_docs/guides/package-management/how-to/kcl_mod",permalink:"/docs/user_docs/guides/package-management/how-to/kcl_mod",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.7.0/user_docs/guides/package-management/4-how-to/8-kcl_mod.md",tags:[],version:"0.7.0",lastUpdatedBy:"Peefy",lastUpdatedAt:1705584615,formattedLastUpdatedAt:"Jan 18, 2024",sidebarPosition:8,frontMatter:{},sidebar:"user_docs",previous:{title:"Publish Your KCL Module to ArtifactHub",permalink:"/docs/user_docs/guides/package-management/how-to/publish_pkg_to_ah"},next:{title:"Support for OCI Registries",permalink:"/docs/user_docs/guides/package-management/how-to/kpm_oci"}},p={},c=[{value:"The Manifest",id:"the-manifest",level:2},{value:"package",id:"package",level:2},{value:"dependencies",id:"dependencies",level:2},{value:"entries",id:"entries",level:2},{value:"For example:",id:"for-example",level:3},{value:"Note",id:"note",level:3}],k={toc:c},s="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kclmod-the-kcl-package-manifest-file"},"kcl.mod: The KCL package Manifest File"),(0,r.kt)("h2",{id:"the-manifest"},"The Manifest"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl.mod")," file for each module is called its manifest. It is written in the TOML format. It contains metadata that is needed to compile the module."),(0,r.kt)("p",null,"In the MVP version, the sections we plan to support are as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Package metadata:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#package"},"package")," - Defines a package.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#package"},"name")," \u2014 The name of the package."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#package"},"version")," \u2014 The version of the package."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#package"},"edition")," \u2014 The KCL compiler edition."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#package"},"description")," \u2014 The description of the package."))))),(0,r.kt)("li",{parentName:"ul"},"Dependency tables:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#dependencies"},"dependencies")," - Package library dependencies."))),(0,r.kt)("li",{parentName:"ul"},"Compiler settings:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"[profile]"," - The compiler settings.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#entries"},"entries")," - The entry points of the package when compiling.")))))),(0,r.kt)("h2",{id:"package"},"package"),(0,r.kt)("p",null,"The first section in a ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl.mod")," is ","[package]","."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'[package]\nname = "hello_world" # the name of the package\nversion = "0.1.0"    # the current version, obeying semver\nedition = "0.5.0"    # the KCL compiler version\ndescription = "This is a hello world package." # the description of the package\n')),(0,r.kt)("h2",{id:"dependencies"},"dependencies"),(0,r.kt)("p",null,"Your kcl package can depend on other libraries from OCI registries, git repositories, or subdirectories on your local file system."),(0,r.kt)("p",null,"You can specify a dependency by following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},"[dependencies]\n<package name> = <package_version>\n")),(0,r.kt)("p",null,"You can specify a dependency from git repository by git tag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies]\n<package name> = { git = "<git repo url>", tag = "<git repo tag>" } \n')),(0,r.kt)("p",null,"You can specify a dependency from git repository by git commit id."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies]\n<package name> = { git = "<git repo url>", commit = "<git repo commit>" } \n')),(0,r.kt)("p",null,"You can specify a dependency from local file path."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'# Find the kcl.mod under "./xxx/xxx".\n[dependencies]\n<package name> = {path = "<package local path>"} \n')),(0,r.kt)("h2",{id:"entries"},"entries"),(0,r.kt)("p",null,"You can specify the entry points of the package when compiling."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"entries")," is a sub section of ",(0,r.kt)("inlineCode",{parentName:"p"},"profile")," section. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},"[profile]\nentries = [\n   ...\n]\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"entries")," is the relative path of kcl package root path, the ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl.mod")," file path is the package root path. There are two types of file paths formats supported, ",(0,r.kt)("inlineCode",{parentName:"p"},"normal paths")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"mod relative paths"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"normal path: The path is relative to the current package root path."),(0,r.kt)("li",{parentName:"ul"},"mod relative path: The path is relative to the vendor package root path that can be found by the section ",(0,r.kt)("a",{parentName:"li",href:"#dependencies"},"dependencies")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"kcl.mod")," file.")),(0,r.kt)("h3",{id:"for-example"},"For example:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"If the ",(0,r.kt)("inlineCode",{parentName:"li"},"kcl.mod")," is localed in ",(0,r.kt)("inlineCode",{parentName:"li"},"/usr/my_pkg/kcl.mod"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"kpm run")," will take ",(0,r.kt)("inlineCode",{parentName:"li"},"/usr/my_pkg/entry1.k")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"/usr/my_pkg/subdir/entry2.k")," as the entry point of the kcl compiler.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'entries = [\n   "entry1.k",\n   "subdir/entry2.k",\n]\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"If the ",(0,r.kt)("inlineCode",{parentName:"li"},"kcl.mod")," is localed in ",(0,r.kt)("inlineCode",{parentName:"li"},"/usr/my_pkg/kcl.mod"),", and the current kcl package depends on the kcl package ",(0,r.kt)("inlineCode",{parentName:"li"},"k8s"),". You can use the ",(0,r.kt)("inlineCode",{parentName:"li"},"mod relative paths")," the take the kcl file in the package ",(0,r.kt)("inlineCode",{parentName:"li"},"k8s")," as the entry point of the kcl compiler.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'entries = [\n   "entry1.k",\n   "subdir/entry2.k",\n   "{k8s:KCL_MOD}/core/api/v1/deployment.k"\n]\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"mod relative paths")," must contains the preffix ",(0,r.kt)("inlineCode",{parentName:"p"},"{k8s:KCL_MOD}"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"k8s")," is the package name, ",(0,r.kt)("inlineCode",{parentName:"p"},"{k8s:KCL_MOD}")," means the package root path of the package ",(0,r.kt)("inlineCode",{parentName:"p"},"k8s"),". Therefore, if the package root path of ",(0,r.kt)("inlineCode",{parentName:"p"},"k8s")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"/.kcl/kpm/k8s"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"entries")," show above will take ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/my_pkg/entry1.k"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/my_pkg/subdir/entry2.k")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"/.kcl/kpm/k8s/core/api/v1/deployment.k")," as the entry point of the kcl compiler. "),(0,r.kt)("h3",{id:"note"},"Note"),(0,r.kt)("p",null,"You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"normal path")," to specify the compilation entry point in the current package path, and use ",(0,r.kt)("inlineCode",{parentName:"p"},"mod relative path")," to specify the entry point in a third-party package."),(0,r.kt)("p",null,"Therefore, the file path specified by ",(0,r.kt)("inlineCode",{parentName:"p"},"normal path")," must come from the same package, that is, the ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl.mod")," path found from the normal path must only find one ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl.mod")," file, otherwise the compiler will output an error."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("p",null,"In the path ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/kcl1"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/usr/kcl1\n      |--- kcl.mod\n      |--- entry1.k\n")),(0,r.kt)("p",null,"In the path ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/kcl2"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/usr/kcl2\n      |--- kcl.mod\n      |--- entry2.k\n")),(0,r.kt)("p",null,"If you compile with this ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl.mod")," in the path ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/kcl1"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'entries = [\n   "entry1.k", # The corresponding kcl.mod file is /usr/kcl1/kcl.mod\n   "/usr/kcl2/entry2.k", # The corresponding kcl.mod file is /usr/kcl2/kcl.mod\n]\n')),(0,r.kt)("p",null,"You will get an error:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"error[E3M38]: conflict kcl.mod file paths\n")))}m.isMDXComponent=!0}}]);