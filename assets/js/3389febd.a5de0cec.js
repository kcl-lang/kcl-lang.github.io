"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[71516],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>d});var a=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},l="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(o),g=r,d=l["".concat(c,".").concat(g)]||l[g]||k[g]||n;return o?a.createElement(d,i(i({ref:t},p),{},{components:o})):a.createElement(d,i({ref:t},p))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,i=new Array(n);i[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<n;u++)i[u]=o[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}g.displayName="MDXCreateElement"},82105:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>k,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var a=o(87462),r=(o(67294),o(3905));const n={},i="Push Your KCL Package by GitHub Action",s={unversionedId:"user_docs/guides/package-management/how-to/push_github_action",id:"version-0.7.0/user_docs/guides/package-management/how-to/push_github_action",title:"Push Your KCL Package by GitHub Action",description:"kpm is a tool for managing kcl packages. This article will guide you how to use kpm in GitHub Action to push your kcl package to OCI registry.",source:"@site/versioned_docs/version-0.7.0/user_docs/guides/package-management/4-how-to/6-push_github_action.md",sourceDirName:"user_docs/guides/package-management/4-how-to",slug:"/user_docs/guides/package-management/how-to/push_github_action",permalink:"/docs/user_docs/guides/package-management/how-to/push_github_action",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.7.0/user_docs/guides/package-management/4-how-to/6-push_github_action.md",tags:[],version:"0.7.0",lastUpdatedBy:"peefy",lastUpdatedAt:1701659761,formattedLastUpdatedAt:"Dec 4, 2023",sidebarPosition:6,frontMatter:{},sidebar:"user_docs",previous:{title:"Share Your Package to docker.io",permalink:"/docs/user_docs/guides/package-management/how-to/share_your_pkg_docker"},next:{title:"Publish Your KCL Module to ArtifactHub",permalink:"/docs/user_docs/guides/package-management/how-to/publish_pkg_to_ah"}},c={},u=[{value:"Step 1: Install kpm",id:"step-1-install-kpm",level:2},{value:"Step 2: Create a GitHub account",id:"step-2-create-a-github-account",level:2},{value:"Step 3: Create a GitHub repository for your KCL package",id:"step-3-create-a-github-repository-for-your-kcl-package",level:2},{value:"1. Prepare a GitHub repository for your KCL package",id:"1-prepare-a-github-repository-for-your-kcl-package",level:3},{value:"2. Set OCI Registry, account and password for your Github repository",id:"2-set-oci-registry-account-and-password-for-your-github-repository",level:3},{value:"Step 4: Add your KCL package to the repository and write github action workflow",id:"step-4-add-your-kcl-package-to-the-repository-and-write-github-action-workflow",level:2}],p={toc:u},l="wrapper";function k(e){let{components:t,...o}=e;return(0,r.kt)(l,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"push-your-kcl-package-by-github-action"},"Push Your KCL Package by GitHub Action"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/kpm"},"kpm")," is a tool for managing kcl packages. This article will guide you how to use kpm in GitHub Action to push your kcl package to OCI registry."),(0,r.kt)("h2",{id:"step-1-install-kpm"},"Step 1: Install kpm"),(0,r.kt)("p",null,"At first, you need to install kpm on your computer. You can follow ",(0,r.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/user_docs/guides/package-management/installation"},"kpm installation document"),"."),(0,r.kt)("h2",{id:"step-2-create-a-github-account"},"Step 2: Create a GitHub account"),(0,r.kt)("p",null,"If you already have a GitHub account, you can skip this step."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/get-started/signing-up-for-github/signing-up-for-a-new-github-account"},"Sign up for a new GitHub account")),(0,r.kt)("h2",{id:"step-3-create-a-github-repository-for-your-kcl-package"},"Step 3: Create a GitHub repository for your KCL package"),(0,r.kt)("h3",{id:"1-prepare-a-github-repository-for-your-kcl-package"},"1. Prepare a GitHub repository for your KCL package"),(0,r.kt)("p",null,"You need to prepare a GitHub repository for your KCL package."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/get-started/quickstart/create-a-repo"},"Create a GitHub repository")),(0,r.kt)("p",null,"In this repository, add your KCL program, take the repository ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/awesome-kusion/catalog.git"},"https://github.com/awesome-kusion/catalog.git")," as an example,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 .github\n\u2502   \u2514\u2500\u2500 workflows\n\u2502       \u2514\u2500\u2500 push.yaml # github action workflow\n\u251c\u2500\u2500 LICENSE\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 kcl.mod # kcl.mod to define your kcl package\n\u251c\u2500\u2500 kcl.mod.lock # kcl.mod.lock generated by kpm\n\u2514\u2500\u2500 main.k # Your KCL program\n")),(0,r.kt)("h3",{id:"2-set-oci-registry-account-and-password-for-your-github-repository"},"2. Set OCI Registry, account and password for your Github repository"),(0,r.kt)("p",null,"Take docker.io as an example, you can set secrets ",(0,r.kt)("inlineCode",{parentName:"p"},"REG"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"REG_ACCOUNT")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"REG_TOKEN")," for your repository. The value of ",(0,r.kt)("inlineCode",{parentName:"p"},"REG")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"docker.io"),", the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"REG_ACCOUNT")," is your ",(0,r.kt)("inlineCode",{parentName:"p"},"docker.io")," account, and the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"REG_TOKEN")," is your ",(0,r.kt)("inlineCode",{parentName:"p"},"docker.io")," login password."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository"},"Add secrets to the repository")),(0,r.kt)("p",null,"If you use ",(0,r.kt)("inlineCode",{parentName:"p"},"ghcr.io")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"Registry"),", you need to use GitHub token as secrets."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#personal-access-tokens-classic"},"Create a GitHub Token")),(0,r.kt)("h2",{id:"step-4-add-your-kcl-package-to-the-repository-and-write-github-action-workflow"},"Step 4: Add your KCL package to the repository and write github action workflow"),(0,r.kt)("p",null,"Add github action file ",(0,r.kt)("inlineCode",{parentName:"p"},".github/workflows/push.yml")," to this repository, the content is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"name: KPM Push Workflow\n\non:\n  push:\n    branches:\n      - main\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout\n        uses: actions/checkout@v2\n\n      - name: Set up Go 1.19\n        uses: actions/setup-go@v2\n        with:\n          go-version: 1.19\n\n      - name: Install kpm\n        run: go install kcl-lang.io/kpm@latest\n\n      - name: Login and Push\n        env:\n          KPM_REG: ${{ secrets.REG }}\n          KPM_REPO: ${{ secrets.REG_ACCOUNT }}\n        run: kpm login -u ${{ secrets.REG_ACCOUNT }} -p ${{ secrets.REG_TOKEN }} ${{ secrets.REG }} && kpm push\n\n      - name: Run kpm project from oci registry\n        run: kpm run oci://${{ secrets.REG }}/${{ secrets.REG_ACCOUNT }}/catalog --tag 0.0.1\n")))}k.isMDXComponent=!0}}]);