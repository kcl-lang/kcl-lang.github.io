"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[59933],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return n?i.createElement(h,r(r({ref:t},u),{},{components:n})):i.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:o,r[1]=c;for(var s=2;s<a;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62729:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var i=n(87462),o=(n(67294),n(3905));const a={},r="Git Commit Guide",c={unversionedId:"community/contribute/git-guideline",id:"community/contribute/git-guideline",title:"Git Commit Guide",description:"This document describes the matters needing attention when Git submits changes. If you refuse to accept the contents of this article, the submitted changes will not be accepted.",source:"@site/docs/community/contribute/git-guideline.md",sourceDirName:"community/contribute",slug:"/community/contribute/git-guideline",permalink:"/docs/next/community/contribute/git-guideline",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/community/contribute/git-guideline.md",tags:[],version:"current",lastUpdatedBy:"peefy",lastUpdatedAt:1709797004,formattedLastUpdatedAt:"Mar 7, 2024",frontMatter:{},sidebar:"community",previous:{title:"How to Contribute Code?",permalink:"/docs/next/community/contribute/contribute-code"}},l={},s=[{value:"1. About issue",id:"1-about-issue",level:2},{value:"2. About Git Branch",id:"2-about-git-branch",level:2},{value:"3. About Git Commit",id:"3-about-git-commit",level:2},{value:"4. About pull request",id:"4-about-pull-request",level:2},{value:"5. Supported PR Types",id:"5-supported-pr-types",level:2},{value:'<a name="cla"></a> 6. Contributor License Agreement (CLA)',id:"-6-contributor-license-agreement-cla",level:2}],u={toc:s},m="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"git-commit-guide"},"Git Commit Guide"),(0,o.kt)("p",null,"This document describes the matters needing attention when Git submits changes. If you refuse to accept the contents of this article, the submitted changes will not be accepted."),(0,o.kt)("h2",{id:"1-about-issue"},"1. About issue"),(0,o.kt)("p",null,"Before submitting an issue, please check the closed issue. There may already be an appropriate solution in the closed issue."),(0,o.kt)("p",null,"If no suitable solution is found, we provide four templates to use when creating an issue."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Bug Report: If a bug is found, you can contact us by creating an issue through the bug report template."),(0,o.kt)("li",{parentName:"ul"},"Enhancement: The developer has enhanced the tool, and can create an issue through the enhancement template to introduce the added content."),(0,o.kt)("li",{parentName:"ul"},"Feature Request: If you want to add some new features or functions to the tool during use, you can create an issue through the Feature Request template to describe the new features."),(0,o.kt)("li",{parentName:"ul"},"Ask a Question: If you have any questions, you can create an issue through the Ask a Question template to contact us.")),(0,o.kt)("p",null,"After selecting the appropriate template, you only need to fill in the required content on the template. If you find that there is no template or the template content is empty when creating the issue, you can feed back this problem to us through WeChat group, nail group or email."),(0,o.kt)("h2",{id:"2-about-git-branch"},"2. About Git Branch"),(0,o.kt)("p",null,"To contribute code to KCL, you must have a GitHub account so that you can push the code to your own branch and create pull requests. We recommend reference ","[Angular Specification]","\uff08 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#"},"https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#")," -Git commit guidelines) name your own branches."),(0,o.kt)("p",null,"The recommended format is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{type}-{a_short_description}\n")),(0,o.kt)("p",null,'The branch name mainly includes two fields, which are separated by "-". Including:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"{type}"),": the type of the current branch content."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"{a_short_description}"),": A short description of the main content of this branch.")),(0,o.kt)("p",null,"For example, Alice first transfers the Fork warehouse to his own account, and then creates a branch with the corresponding name 'alice: fix output fmt bug' (Alice's account is before the colon) to fix the output formatting bug."),(0,o.kt)("h2",{id:"3-about-git-commit"},"3. About Git Commit"),(0,o.kt)("p",null,"We refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/commitizen/cz-cli"},"Commitizen")," to write a Commit Message."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Note: If you directly use Commit to generate a Commit Message, please note that\nIt is a tool for developers to manage commit. It is not related to the project itself, so it is an intermediate product generated by Commiten\n(For example, the node_modules file directory) may not be in the project. gitignore file.\n\nYou can git add {filename} select the file to submit and ignore the intermediate product.\nOr you can add the following content to the. gitignore file and automatically ignore the intermediate products:\n# commitizen\npackage.json\npackage-lock.json\nnode_modules/*\n")),(0,o.kt)("p",null,"If you manually write a commit Message, we also recommend ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/commitizen/cz-cli"},"Commiten")," for the commit message format."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{type} ( {component_or_file} ) {a_short_description}\n{a_longer_description}\nBREAKING CHANGE: {breaking_change_description}.\n{linked issue}\n")),(0,o.kt)("p",null,"It mainly includes 6 fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"{type}"),": the type of the branch corresponding to the current commit."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"{component_or_file}"),": the name of the module or file that the current commit changes."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"{a_short_description}"),": A short description describes the content of the commit."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"{a_longer_description}"),": The detailed description is used to introduce the content in the commit."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"{breaking_change_description}"),": If the commit contains broken compatibility changes, the impact of compatibility changes needs to be introduced."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"{linked issue}"),": the issue associated with the current commit.")),(0,o.kt)("p",null,"Where ",(0,o.kt)("inlineCode",{parentName:"p"},"{breaking_change_description}")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"{linked issue}")," can be omitted if the commit does not contain compatibility breaking changes and associated issues."),(0,o.kt)("p",null,"For example, the commit created by Alice in branch 'alice: fix output fmt bug'."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'fix(kcl-printer): fix an output format bug in kcl-printer\n\nThere is an output format bug in kcl-printer because ...,\nSo, The calling of method "XXX" is replaced by "HHHH"...,\n...\n\n--If there is no change to break the compatibility and the associated issue, the following contents can be omitted.\nBREAKING CHANGE: This change maybe cause .......\n\nfix #123\n')),(0,o.kt)("h2",{id:"4-about-pull-request"},"4. About pull request"),(0,o.kt)("p",null,"Before submitting a PR, priority may be given to the following issues:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Please check the closed PRs first. There may be completed solutions in the closed PRs."),(0,o.kt)("li",{parentName:"ul"},"We suggest that before submitting the change, submit a corresponding issue to describe the problems to be solved in the change, and associate the PR corresponding to the change with the issue."),(0,o.kt)("li",{parentName:"ul"},"After submitting the PR to us, please sign ","[Contributor License Agreement (CLA)]"," (# cla). If you refuse to sign, we will not accept the PR."),(0,o.kt)("li",{parentName:"ul"},"Make sure that each change creates a new branch and names the branch according to the specifications mentioned above."),(0,o.kt)("li",{parentName:"ul"},"PR should not exceed two commit at a time. Please compress the extra commit with squash and write a commit message according to the specifications mentioned above."),(0,o.kt)("li",{parentName:"ul"},"We provide ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/kcl-lang/.github/blob/main/.github/PULL_REQUEST_TEMPLATE.md"},"PR template"),". You only need to add the content required in the template. If you find no template or the template content is empty when creating a PR, you can feed back this problem to us through WeChat group, nail group or email.")),(0,o.kt)("p",null,"We suggest that the PR title be consistent with the branch name and the commit message style:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{type} ( {component_name_or_file_name} ) :{a_short_description}\n")),(0,o.kt)("p",null,"For example, Alice creates the PR name ",(0,o.kt)("inlineCode",{parentName:"p"},"fix/alice/fix_output_fmt_bug")," for one branch."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"fix(kcl-printer): fix an output format bug in kcl-printer.\n")),(0,o.kt)("h2",{id:"5-supported-pr-types"},"5. Supported PR Types"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- feat: -- New features have been added.\n- fix: -- Bug is repaired.\n- docs: -- The document part has been modified.\n- style: -- The modification of code format does not affect the functions of the code, such as deleting redundant spaces, code indentation, etc.\n- refactor: -- refactoring code without changing its function.\n- perf: -- Performs performance optimization on the code.\n- test: -- Add or adjust existing test cases.\n- build: -- Adjust the build system or external dependent libraries.\n- ci: -- The configuration file or script of the CI has been adjusted.\n- choice: -- Adjustments to other parts of the source code and test files.\n- reverse: -- Rollback commit.\n")),(0,o.kt)("h2",{id:"-6-contributor-license-agreement-cla"},(0,o.kt)("a",{name:"cla"})," 6. Contributor License Agreement (CLA)"),(0,o.kt)("p",null,'After the PR is submitted to us for the first time, the CLA check in the PR will fail and prompt to sign the CLA. You can reply "I have read the CLA Document and I hereby sign the CLA" between your accounts in PR to agree to sign the CLA, and then manually restart the failed CLA check action. After PR is successfully merged, it will be locked and cannot be modified.'))}p.isMDXComponent=!0}}]);