"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[8013],{3905:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>h});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=a.createContext({}),d=function(e){var t=a.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},m=function(e){var t=d(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=d(o),c=n,h=p["".concat(u,".").concat(c)]||p[c]||s[c]||r;return o?a.createElement(h,l(l({ref:t},m),{},{components:o})):a.createElement(h,l({ref:t},m))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,l=new Array(r);l[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var d=2;d<r;d++)l[d]=o[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,o)}c.displayName="MDXCreateElement"},81656:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=o(87462),n=(o(67294),o(3905));const r={},l="Publish Your KCL Module to ArtifactHub",i={unversionedId:"user_docs/guides/package-management/how-to/publish_pkg_to_ah",id:"user_docs/guides/package-management/how-to/publish_pkg_to_ah",title:"Publish Your KCL Module to ArtifactHub",description:"We have integrated (artifacthub.io, AH) as the market of KCL modules, and we maintain a github repo modules for the KCL module published to AH. If you want to publish your KCL module to our market, you can submit PR to the repo.",source:"@site/docs/user_docs/guides/package-management/4-how-to/7-publish_pkg_to_ah.md",sourceDirName:"user_docs/guides/package-management/4-how-to",slug:"/user_docs/guides/package-management/how-to/publish_pkg_to_ah",permalink:"/docs/next/user_docs/guides/package-management/how-to/publish_pkg_to_ah",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/user_docs/guides/package-management/4-how-to/7-publish_pkg_to_ah.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1706869561,formattedLastUpdatedAt:"Feb 2, 2024",sidebarPosition:7,frontMatter:{},sidebar:"user_docs",previous:{title:"Push Your KCL Package by GitHub Action",permalink:"/docs/next/user_docs/guides/package-management/how-to/push_github_action"},next:{title:"kcl.mod: The KCL package Manifest File",permalink:"/docs/next/user_docs/guides/package-management/how-to/kcl_mod"}},u={},d=[{value:"NOTE",id:"note",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Code Repository",id:"code-repository",level:3},{value:"Prepare your KCL Module",id:"prepare-your-kcl-module",level:3},{value:"Publish your module by PR",id:"publish-your-module-by-pr",level:3},{value:"1. Clone the code repository",id:"1-clone-the-code-repository",level:4},{value:"2. Create a branch for your module",id:"2-create-a-branch-for-your-module",level:4},{value:"3. Add your KCL module",id:"3-add-your-kcl-module",level:4},{value:"4. Commit your module",id:"4-commit-your-module",level:4},{value:"5. Submit a PR",id:"5-submit-a-pr",level:4},{value:"Upgrade your module by PR",id:"upgrade-your-module-by-pr",level:3}],m={toc:d},p="wrapper";function s(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"publish-your-kcl-module-to-artifacthub"},"Publish Your KCL Module to ArtifactHub"),(0,n.kt)("p",null,"We have integrated ",(0,n.kt)("a",{parentName:"p",href:"https://artifacthub.io/"},"(artifacthub.io, AH)")," as the market of KCL modules, and we maintain a github repo ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/modules"},(0,n.kt)("inlineCode",{parentName:"a"},"modules"))," for the KCL module published to AH. If you want to publish your KCL module to our market, you can submit PR to the repo."),(0,n.kt)("h2",{id:"note"},"NOTE"),(0,n.kt)("p",null,"Before you submit your PR, there are a few things you need to consider carefully:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"All source code of KCL modules in ",(0,n.kt)("inlineCode",{parentName:"p"},"modules")," are ",(0,n.kt)("strong",{parentName:"p"},"public"),", if you want your KCL module to be private, sorry we currently do not support it, you can try to solve this problem by building your own repository.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If you want to publish your KCL module to ",(0,n.kt)("inlineCode",{parentName:"p"},"modules")," and can be found on ",(0,n.kt)("inlineCode",{parentName:"p"},"AH"),", ",(0,n.kt)("strong",{parentName:"p"},"The version of your module is required, and the version number must comply with the definition of ",(0,n.kt)("a",{parentName:"strong",href:"https://semver.org/"},"semantic versioning")),", that is, the ",(0,n.kt)("inlineCode",{parentName:"p"},"version")," field in the kcl.mod, and must comply with the definition of semantic versioning."))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'[package]\nname = "mynginx"\nedition = "*"\nversion = "0.0.1" # This field is required and it must comply with the definition of semantic versioning.\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Once a version of a module is published, its content cannot be changed. We do not allow the content of a module to be changed without changing the module version"),". That is, if you submit a PR, change the content of the KCL module, and you want everyone to be able to use the changes you made, then you must upgrade the version of your KCL module, i.e., change the ",(0,n.kt)("inlineCode",{parentName:"li"},"version")," field in kcl.mod. If you encounter difficulties that require you to change the content of a certain version of the module, please raise an issue in the repository and contact us.")),(0,n.kt)("h2",{id:"quick-start"},"Quick Start"),(0,n.kt)("p",null,"In the next section, we will show you how to publish your module with a ",(0,n.kt)("inlineCode",{parentName:"p"},"helloworld")," example."),(0,n.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Install ",(0,n.kt)("a",{parentName:"li",href:"https://kcl-lang.io/docs/user_docs/getting-started/install"},"KCL")),(0,n.kt)("li",{parentName:"ul"},"Install ",(0,n.kt)("a",{parentName:"li",href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"},"git")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.github.com/en/get-started/signing-up-for-github/signing-up-for-a-new-github-account"},"Register a GitHub account (optional)"))),(0,n.kt)("h3",{id:"code-repository"},"Code Repository"),(0,n.kt)("p",null,"NOTE: If you want to publish your KCL module to the ",(0,n.kt)("inlineCode",{parentName:"p"},"kcl-lang")," official registry, then the source code of your KCL module will be saved in this repo, you need to submit the source code of your module to this repository via PR."),(0,n.kt)("h3",{id:"prepare-your-kcl-module"},"Prepare your KCL Module"),(0,n.kt)("p",null,"By the ",(0,n.kt)("inlineCode",{parentName:"p"},"kcl mod init <module_name>")," command, you can create a valid KCL module."),(0,n.kt)("p",null,"Currently, the directory structure of a valid KCL module that the repository can recognize is as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"<module_name>\n    |- kcl.mod (required)\n    |- kcl.mod.lock (optional)\n    |- artifacthub-pkg.yaml (optional)\n    |- README.md (optional)\n    |- (*.k) kcl program files\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"kcl.mod : As the identification file of the KCL module, this file is ",(0,n.kt)("strong",{parentName:"p"},"required"),", and the directory containing the kcl.mod file will be identified as the root directory of the file.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"kcl.mod.lock : Automatically generated file to fix dependency versions, this file is ",(0,n.kt)("strong",{parentName:"p"},"optional")," and does not need to be manually modified.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"artifacthub-pkg.yaml : This file is ",(0,n.kt)("strong",{parentName:"p"},"optional"),", because our repository currently displays all modules through artifacthub.io, you can configure the information you want to show through artifacthub-pkg.yaml. Our strategy is that ",(0,n.kt)("strong",{parentName:"p"},"if there is a configuration file named artifacthub-pkg.yaml in the directory where your module's kcl.mod file is located, then we will use the artifacthub-pkg.yaml you provided to display the information of your module, otherwise, we will use some default information to generate the corresponding artifacthub-pkg.yaml file."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"README.md : A markdown file as the documentation for your module, this file is ",(0,n.kt)("strong",{parentName:"p"},"optional"),", ",(0,n.kt)("strong",{parentName:"p"},"if you do not provide this file, it will not be displayed on artifacthub.io"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"(","*",".k) kcl program files: The source code of your KCL program."))),(0,n.kt)("h3",{id:"publish-your-module-by-pr"},"Publish your module by PR"),(0,n.kt)("h4",{id:"1-clone-the-code-repository"},"1. Clone the code repository"),(0,n.kt)("p",null,"First, you need to clone the repository"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/kcl-lang/modules --depth=1\n")),(0,n.kt)("h4",{id:"2-create-a-branch-for-your-module"},"2. Create a branch for your module"),(0,n.kt)("p",null,"We recommend that your branch name be: ",(0,n.kt)("inlineCode",{parentName:"p"},"publish-pkg-<module_name>"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"<module_name>")," is the name of your module."),(0,n.kt)("p",null,"Take the module ",(0,n.kt)("inlineCode",{parentName:"p"},"helloworld")," as an example"),(0,n.kt)("p",null,"Enter the ",(0,n.kt)("inlineCode",{parentName:"p"},"modules")," directory you downloaded"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"cd modules\n")),(0,n.kt)("p",null,"Create a branch ",(0,n.kt)("inlineCode",{parentName:"p"},"publish-pkg-helloworld")," for the module ",(0,n.kt)("inlineCode",{parentName:"p"},"helloworld")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout -b publish-pkg-helloworld\n")),(0,n.kt)("h4",{id:"3-add-your-kcl-module"},"3. Add your KCL module"),(0,n.kt)("p",null,"You need to move your module to the current directory. In our example, we use the ",(0,n.kt)("inlineCode",{parentName:"p"},"kcl mod init")," command to create the module ",(0,n.kt)("inlineCode",{parentName:"p"},"helloworld")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kcl mod init helloworld\n")),(0,n.kt)("p",null,"You can add a ",(0,n.kt)("inlineCode",{parentName:"p"},"README.md")," file to the root directory of the module to display on the homepage of AH."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'echo "## Introduction" >> helloworld/README.md\necho "This is a kcl module named helloworld." >> helloworld/README.md\n')),(0,n.kt)("h4",{id:"4-commit-your-module"},"4. Commit your module"),(0,n.kt)("p",null,"You can use the following command to commit your module"),(0,n.kt)("p",null,"Use ",(0,n.kt)("inlineCode",{parentName:"p"},"git add .")," command to add your module to the staging area of git"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git add .\n")),(0,n.kt)("p",null,"Use ",(0,n.kt)("inlineCode",{parentName:"p"},"git commit -s"),' command to commit your module, we recommend that your commit message follow the format "publish module <module_name>".'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'git commit -m "publish module helloworld" -s\n')),(0,n.kt)("p",null,"Use ",(0,n.kt)("inlineCode",{parentName:"p"},"git push")," command to submit your module to your branch ",(0,n.kt)("inlineCode",{parentName:"p"},"publish-pkg-<module_name>")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git push\n")),(0,n.kt)("h4",{id:"5-submit-a-pr"},"5. Submit a PR"),(0,n.kt)("p",null,"Finally, you need to submit a PR to the main branch of the repository with your branch ",(0,n.kt)("inlineCode",{parentName:"p"},"publish-pkg-<module_name>"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request"},"How to create PR"))),(0,n.kt)("h3",{id:"upgrade-your-module-by-pr"},"Upgrade your module by PR"),(0,n.kt)("p",null,"After completing the upload of the module content, you can upgrade your module by PR."),(0,n.kt)("p",null,"NOTE: ",(0,n.kt)("strong",{parentName:"p"},"We do not provide any upgrade strategy that changes the content of the module but does not change the version number.")," If you want to upgrade your module and want your upgraded module to be displayed on AH, you need to modify the version number of your module. That is, the version field in the module section of the kcl.mod file."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-toml"},'[package]\nname = "my_module"\nedition = "*"\nversion = "0.1.0" # change this field to upgrade your module\ndescription = "This is my module."\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"At the same time, you cannot upload the same version module multiple times.")," Once the version number of your module has been used, you will not be able to use this version number again. The only way to upload this module again is to upgrade the version number."))}s.isMDXComponent=!0}}]);