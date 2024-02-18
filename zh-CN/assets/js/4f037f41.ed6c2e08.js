"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[75258],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=i.createContext({}),m=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=m(e.components);return i.createElement(u.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=m(n),g=r,d=p["".concat(u,".").concat(g)]||p[g]||s[g]||a;return n?i.createElement(d,l(l({ref:t},c),{},{components:n})):i.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=g;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var m=2;m<a;m++)l[m]=n[m];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},87710:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>m});var i=n(87462),r=(n(67294),n(3905));const a={},l="Git \u63d0\u4ea4\u6307\u5357",o={unversionedId:"community/contribute/git-guideline",id:"version-0.5.1/community/contribute/git-guideline",title:"Git \u63d0\u4ea4\u6307\u5357",description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Git \u63d0\u4ea4\u53d8\u66f4\u65f6\u9700\u8981\u6ce8\u610f\u7684\u4e8b\u9879\uff0c\u5982\u679c\u62d2\u7edd\u63a5\u53d7\u672c\u6587\u7684\u5185\u5bb9\u4f1a\u5bfc\u81f4\u63d0\u4ea4\u7684\u53d8\u66f4\u65e0\u6cd5\u88ab\u63a5\u53d7\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.5.1/community/contribute/git-guideline.md",sourceDirName:"community/contribute",slug:"/community/contribute/git-guideline",permalink:"/zh-CN/docs/0.5.1/community/contribute/git-guideline",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.1/community/contribute/git-guideline.md",tags:[],version:"0.5.1",lastUpdatedBy:"Peefy",lastUpdatedAt:1708241829,formattedLastUpdatedAt:"2024\u5e742\u670818\u65e5",frontMatter:{},sidebar:"community",previous:{title:"\u5982\u4f55\u8d21\u732e\u4ee3\u7801?",permalink:"/zh-CN/docs/0.5.1/community/contribute/contribute-code"}},u={},m=[{value:"1. \u5173\u4e8e issue",id:"1-\u5173\u4e8e-issue",level:2},{value:"2. \u5173\u4e8e Git \u5206\u652f",id:"2-\u5173\u4e8e-git-\u5206\u652f",level:2},{value:"3. \u5173\u4e8e Git Commit",id:"3-\u5173\u4e8e-git-commit",level:2},{value:"4. \u5173\u4e8e pull request",id:"4-\u5173\u4e8e-pull-request",level:2},{value:"5. \u76ee\u524d type \u652f\u6301\u7684\u7c7b\u578b",id:"5-\u76ee\u524d-type-\u652f\u6301\u7684\u7c7b\u578b",level:2},{value:'<a name="cla"></a> 6. Contributor License Agreement (CLA)',id:"-6-contributor-license-agreement-cla",level:2}],c={toc:m},p="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"git-\u63d0\u4ea4\u6307\u5357"},"Git \u63d0\u4ea4\u6307\u5357"),(0,r.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4e86 Git \u63d0\u4ea4\u53d8\u66f4\u65f6\u9700\u8981\u6ce8\u610f\u7684\u4e8b\u9879\uff0c\u5982\u679c\u62d2\u7edd\u63a5\u53d7\u672c\u6587\u7684\u5185\u5bb9\u4f1a\u5bfc\u81f4\u63d0\u4ea4\u7684\u53d8\u66f4\u65e0\u6cd5\u88ab\u63a5\u53d7\u3002"),(0,r.kt)("h2",{id:"1-\u5173\u4e8e-issue"},"1. \u5173\u4e8e issue"),(0,r.kt)("p",null,"\u5728\u63d0\u4ea4\u4e00\u4e2a issue \u4e4b\u524d\uff0c\u8bf7\u5148\u67e5\u9605\u5df2\u7ecf\u5173\u95ed\u7684 issue \uff0c\u4e5f\u8bb8\u5728\u5173\u95ed\u7684 issue \u4e2d\u5df2\u7ecf\u5b58\u5728\u5408\u9002\u7684\u89e3\u51b3\u65b9\u6848\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u6ca1\u6709\u627e\u5230\u5408\u9002\u7684\u65b9\u6848\uff0c\u6211\u4eec\u63d0\u4f9b\u4e864\u79cd\u6a21\u7248\u5728\u521b\u5efa issue \u7684\u65f6\u5019\u4f7f\u7528\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bug Report : \u53d1\u73b0\u4e86\u4e00\u4e2a Bug\uff0c\u53ef\u4ee5\u901a\u8fc7 Bug Report \u6a21\u7248\u521b\u5efa issue \u4e0e\u6211\u4eec\u8054\u7cfb\u3002"),(0,r.kt)("li",{parentName:"ul"},"Enhancement : \u5f00\u53d1\u8005\u5bf9\u5de5\u5177\u8fdb\u884c\u4e86\u589e\u5f3a\uff0c\u53ef\u4ee5\u901a\u8fc7 Enhancement \u6a21\u7248\u521b\u5efa issue \u6765\u4ecb\u7ecd\u589e\u52a0\u7684\u5185\u5bb9\u3002"),(0,r.kt)("li",{parentName:"ul"},"Feature Request : \u5728\u4f7f\u7528\u7684\u8fc7\u7a0b\u4e2d\u60f3\u8981\u4e3a\u5de5\u5177\u589e\u52a0\u67d0\u4e9b\u65b0\u7684\u7279\u6027\u6216\u8005\u529f\u80fd\uff0c\u53ef\u4ee5\u901a\u8fc7 Feature Request \u6a21\u7248\u521b\u5efa issue \u6765\u63cf\u8ff0\u65b0\u7279\u6027\u3002"),(0,r.kt)("li",{parentName:"ul"},"Ask a Question : \u5982\u679c\u6709\u4efb\u4f55\u7684\u7591\u95ee\uff0c\u53ef\u4ee5\u901a\u8fc7 Ask a Question \u6a21\u7248\u6765\u521b\u5efa\u4e00\u4e2a issue \u4e0e\u6211\u4eec\u8054\u7cfb\u3002")),(0,r.kt)("p",null,"\u5728\u9009\u62e9\u5408\u9002\u7684\u6a21\u7248\u540e\uff0c\u53ea\u9700\u8981\u586b\u5199\u6a21\u7248\u4e0a\u7684\u8981\u6c42\u586b\u5199\u7684\u5185\u5bb9\u5373\u53ef\u3002\u5982\u679c\u5728\u521b\u5efa issue \u7684\u65f6\u5019\u53d1\u73b0\u6ca1\u6709\u6a21\u7248\uff0c\u6216\u8005\u6a21\u7248\u5185\u5bb9\u4e3a\u7a7a\uff0c\u53ef\u4ee5\u901a\u8fc7\u5fae\u4fe1\u7fa4\uff0c\u9489\u9489\u7fa4\u6216\u8005\u90ae\u4ef6\u5411\u6211\u4eec\u53cd\u9988\u8fd9\u4e2a\u95ee\u9898\u3002"),(0,r.kt)("h2",{id:"2-\u5173\u4e8e-git-\u5206\u652f"},"2. \u5173\u4e8e Git \u5206\u652f"),(0,r.kt)("p",null,"\u8981\u5411 kcl-lang \u8d21\u732e\u4ee3\u7801\uff0c\u60a8\u5fc5\u987b\u62e5\u6709\u4e00\u4e2a GitHub \u5e10\u6237\uff0c\u4ee5\u4fbf\u60a8\u53ef\u4ee5\u5c06\u4ee3\u7801\u63a8\u9001\u5230\u60a8\u81ea\u5df1\u7684\u5206\u652f\u5e76\u521b\u5efa\u62c9\u53d6\u8bf7\u6c42\u3002\u6211\u4eec\u63a8\u8350\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines"},"Angular \u89c4\u8303")," \u4e3a\u60a8\u81ea\u5df1\u7684\u5206\u652f\u547d\u540d\u3002\n\u63a8\u8350\u7684\u683c\u5f0f\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{type}-{a_short_description}\n")),(0,r.kt)("p",null,"\u5206\u652f\u540d\u79f0\u4e3b\u8981\u5305\u62ec\u4e24\u4e2a\u5b57\u6bb5\uff0c\u5e76\u901a\u8fc7 \u201c-\u201d \u5206\u5272\u3002\u5176\u4e2d\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"{type} : \u5f53\u524d\u5206\u652f\u5185\u5bb9\u7684\u7c7b\u578b\u3002"),(0,r.kt)("li",{parentName:"ul"},"{a_short_description}: \u4e00\u4e2a\u7b80\u77ed\u7684\u63cf\u8ff0\uff0c\u4ecb\u7ecd\u8fd9\u4e2a\u5206\u652f\u7684\u4e3b\u8981\u5185\u5bb9\u3002")),(0,r.kt)("p",null,"e.g. \u5f20\u4e09\u9996\u5148 Fork \u4ed3\u5e93\u5230\u81ea\u5df1\u8d26\u6237\u4e0b\uff0c\u7136\u540e\u521b\u5efa\u5bf9\u5e94\u540d\u79f0 ",(0,r.kt)("inlineCode",{parentName:"p"},"zhangsan:fix-output-fmt-bug")," \u7684\u5206\u652f\uff08\u5192\u53f7\u4e4b\u524d\u662f\u5f20\u4e09\u7684\u8d26\u53f7\uff09\uff0c\u7528\u4e8e\u4fee\u590d\u8f93\u51fa\u683c\u5f0f\u5316 bug\u3002"),(0,r.kt)("h2",{id:"3-\u5173\u4e8e-git-commit"},"3. \u5173\u4e8e Git Commit"),(0,r.kt)("p",null,"\u6211\u4eec\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/commitizen/cz-cli"},"Commitizen")," \u4e66\u5199 Commit Message\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u6ce8: \u5982\u679c\u76f4\u63a5\u4f7f\u7528 Commitizen \u751f\u6210 Commit Message\uff0c\u9700\u8981\u6ce8\u610f\u56e0\u4e3a Commitizen\n\u662f\u5f00\u53d1\u4eba\u5458\u7ba1\u7406 commit \u7684\u5de5\u5177\uff0c\u4e0e\u9879\u76ee\u672c\u8eab\u65e0\u5173\u8054\uff0c\u56e0\u6b64\u7531 Commitizen \u751f\u6210\u7684\u4e2d\u95f4\u4ea7\u7269\n(\u5982: node_modules \u6587\u4ef6\u76ee\u5f55)\u53ef\u80fd\u6ca1\u6709\u5728\u9879\u76ee .gitignore \u6587\u4ef6\u4e2d\u3002\n\n\u60a8\u53ef\u4ee5 git add {filename} \u9009\u62e9\u8981\u63d0\u4ea4\u7684\u6587\u4ef6\u800c\u5ffd\u89c6\u4e2d\u95f4\u4ea7\u7269\u3002\n\u6216\u8005\u60a8\u53ef\u4ee5\u5411 .gitignore \u6587\u4ef6\u4e2d\u6dfb\u52a0\u5982\u4e0b\u5185\u5bb9\u800c\u81ea\u52a8\u5ffd\u89c6\u4e2d\u95f4\u4ea7\u7269\uff1a\n# commitizen\npackage.json\npackage-lock.json\nnode_modules/*\n")),(0,r.kt)("p",null,"\u5982\u679c\u624b\u52a8\u7f16\u5199 Commit Message\uff0c\u6211\u4eec\u4e5f\u5efa\u8bae\u91c7\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/commitizen/cz-cli"},"Commitizen")," \u7684 commit message \u683c\u5f0f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{type} ( {component_or_file} ) {a_short_description}\n    {a_longer_description}\n    BREAKING CHANGE: {breaking_change_description}.\n    {linked issue}\n")),(0,r.kt)("p",null,"\u5176\u4e2d\u4e3b\u8981\u5305\u62ec6\u4e2a\u5b57\u6bb5\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"{type} : \u5f53\u524d commit \u5bf9\u5e94\u7684\u5206\u652f\u7684\u7c7b\u578b\u3002"),(0,r.kt)("li",{parentName:"ul"},"{component_or_file}: \u5f53\u524d commit \u6539\u52a8\u7684\u6a21\u5757\u6216\u8005\u6587\u4ef6\u7684\u540d\u79f0\u3002"),(0,r.kt)("li",{parentName:"ul"},"{a_short_description}: \u7b80\u77ed\u7684\u63cf\u8ff0\u4ecb\u7ecd commit \u4e2d\u7684\u5185\u5bb9\u3002"),(0,r.kt)("li",{parentName:"ul"},"{a_longer_description}: \u8be6\u7ec6\u7684\u63cf\u8ff0\u7528\u6765\u4ecb\u7ecd commit \u4e2d\u7684\u5185\u5bb9\u3002"),(0,r.kt)("li",{parentName:"ul"},"{breaking_change_description}: \u5982\u679c commit \u4e2d\u5305\u542b\u7834\u73af\u517c\u5bb9\u6027\u7684\u6539\u52a8\uff0c\u9700\u8981\u5bf9\u517c\u5bb9\u6027\u6539\u52a8\u4ea7\u751f\u7684\u5f71\u54cd\u8fdb\u884c\u4ecb\u7ecd\u3002"),(0,r.kt)("li",{parentName:"ul"},"{linked issue}: \u4e0e\u5f53\u524d\u8fd9\u4e2a commit \u5173\u8054\u7684 issue\u3002")),(0,r.kt)("p",null,"\u5176\u4e2d {breaking_change_description} \u548c {linked issue} \u5982\u679c commit \u4e2d\u4e0d\u5305\u542b\u7834\u574f\u517c\u5bb9\u6027\u7684\u6539\u52a8\u548c\u5173\u8054\u7684 issue\uff0c\u53ef\u4ee5\u7701\u7565\u3002"),(0,r.kt)("p",null,"e.g. \u5f20\u4e09\u5728\u5206\u652f ",(0,r.kt)("inlineCode",{parentName:"p"},"zhangsan:fix-output-fmt-bug")," \u4e2d\u521b\u5efa\u7684 commit\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'\n  fix(kcl-printer): fix an output format bug in kcl-printer\n\n  There is an output format bug in kcl-printer because ...,\n  So, The calling of method "XXX" is replaced by "HHHH"...,\n  ...\n\n  -- \u5982\u679c\u6ca1\u6709\u7834\u574f\u517c\u5bb9\u6027\u7684\u6539\u52a8\u548c\u5173\u8054\u7684 issue \u53ef\u4ee5\u7701\u7565\u4e0b\u9762\u5185\u5bb9\u3002\n\n  BREAKING CHANGE: This change maybe cause .......\n\n  fix #123\n\n')),(0,r.kt)("h2",{id:"4-\u5173\u4e8e-pull-request"},"4. \u5173\u4e8e pull request"),(0,r.kt)("p",null,"\u5728\u63d0\u4ea4\u4e00\u4e2a PR \u4e4b\u524d\uff0c\u53ef\u80fd\u9700\u8981\u4f18\u5148\u8003\u8651\u4ee5\u4e0b\u51e0\u4e2a\u95ee\u9898:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8bf7\u5148\u67e5\u9605\u5df2\u7ecf\u5173\u95ed\u7684 PR \uff0c\u4e5f\u8bb8\u5728\u5df2\u7ecf\u5173\u95ed\u7684 PR \u4e2d\uff0c\u53ef\u80fd\u5b58\u5728\u5df2\u7ecf\u5b8c\u6210\u7684\u89e3\u51b3\u65b9\u6848\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6211\u4eec\u5efa\u8bae\u5728\u63d0\u4ea4\u53d8\u66f4\u4e4b\u524d\uff0c\u63d0\u4ea4\u4e00\u4e2a\u5bf9\u5e94\u7684 issue \u63cf\u8ff0\u53d8\u66f4\u4e2d\u5c06\u8981\u89e3\u51b3\u7684\u95ee\u9898\uff0c\u5e76\u5c06\u53d8\u66f4\u5bf9\u5e94\u7684 PR \u4e0e issue \u5173\u8054\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u5411\u6211\u4eec\u63d0\u4ea4 PR \u4e4b\u540e\uff0c\u8bf7\u7b7e\u7f72 ",(0,r.kt)("a",{parentName:"li",href:"#cla"},"Contributor License Agreement (CLA)")," \uff0c\u5982\u679c\u62d2\u7edd\u7b7e\u7f72\uff0c\u6211\u4eec\u5c06\u65e0\u6cd5\u63a5\u53d7 PR\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8bf7\u786e\u4fdd\u6bcf\u6b21\u6539\u52a8\u90fd\u521b\u5efa\u4e86\u4e00\u4e2a\u65b0\u7684\u5206\u652f\uff0c\u5e76\u6839\u636e\u4e0a\u6587\u4e2d\u63d0\u5230\u7684\u89c4\u8303\u4e3a\u5206\u652f\u547d\u540d\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4e00\u6b21 PR \u8bf7\u4e0d\u8981\u8d85\u8fc7\u4e24\u4e2a commit \uff0c\u8bf7\u5c06\u591a\u4f59\u7684 commit \u901a\u8fc7 squash \u538b\u7f29\uff0c\u5e76\u6839\u636e\u4e0a\u6587\u4e2d\u63d0\u5230\u7684\u89c4\u8303\uff0c\u7f16\u5199 commit message \u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6211\u4eec\u63d0\u4f9b\u4e86 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kcl-lang/.github/blob/main/.github/PULL_REQUEST_TEMPLATE.md"},"PR \u6a21\u7248"),"\uff0c\u53ea\u9700\u8981\u6dfb\u52a0\u6a21\u7248\u4e2d\u8981\u6c42\u7684\u5185\u5bb9\u5373\u53ef\uff0c\u5982\u679c\u5728\u521b\u5efaPR\u65f6\u53d1\u73b0\u6ca1\u6709\u6a21\u7248\u6216\u8005\u6a21\u7248\u5185\u5bb9\u4e3a\u7a7a\uff0c\u53ef\u4ee5\u901a\u8fc7\u5fae\u4fe1\u7fa4\uff0c\u9489\u9489\u7fa4\u6216\u8005\u90ae\u4ef6\u5411\u6211\u4eec\u53cd\u9988\u8fd9\u4e2a\u95ee\u9898\u3002")),(0,r.kt)("p",null,"\u6211\u4eec\u5efa\u8baePR\u7684\u6807\u9898\u4e0e\u5206\u652f\u540d\u3001commit message \u98ce\u683c\u4fdd\u6301\u4e00\u81f4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{type} ( {component_name_or_file_name} ) :{a_short_description}\n")),(0,r.kt)("p",null,"e.g. \u5f20\u4e09\u4e3a\u5206\u652f",(0,r.kt)("inlineCode",{parentName:"p"},"fix/zhangsan/fix_output_fmt_bug"),"\u521b\u5efa\u7684PR\u540d\u79f0\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"fix(kcl-printer): fix an output format bug in kcl-printer.\n")),(0,r.kt)("h2",{id:"5-\u76ee\u524d-type-\u652f\u6301\u7684\u7c7b\u578b"},"5. \u76ee\u524d type \u652f\u6301\u7684\u7c7b\u578b"),(0,r.kt)("p",null,"\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines"},"Angular \u89c4\u8303"),"\uff0ctype \u652f\u6301\u7c7b\u578b\u7684\u7c7b\u578b\u5982\u4e0b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- feat:     -- \u6dfb\u52a0\u4e86\u65b0\u7684\u529f\u80fd\u7279\u6027\u3002\n- fix:      -- \u8fdb\u884c\u4e86 Bug \u7684\u4fee\u590d\u3002\n- docs:     -- \u8fdb\u884c\u4e86\u6587\u6863\u90e8\u5206\u7684\u4fee\u6539\u3002\n- style:    -- \u5bf9\u4ee3\u7801\u683c\u5f0f\u7684\u4fee\u6539\uff0c\u5e76\u4e0d\u5f71\u54cd\u4ee3\u7801\u7684\u529f\u80fd\uff0c\u5982\uff1a\u5220\u9664\u591a\u4f59\u7a7a\u683c\uff0c\u4ee3\u7801\u7f29\u8fdb\u7b49\u3002\n- refactor: -- \u5728\u4e0d\u6539\u53d8\u4ee3\u7801\u529f\u80fd\u7684\u57fa\u7840\u4e0a\u5bf9\u4ee3\u7801\u8fdb\u884c\u4e86\u7684\u91cd\u6784\u3002\n- perf:     -- \u5bf9\u4ee3\u7801\u8fdb\u884c\u4e86\u6027\u80fd\u4f18\u5316\u3002\n- test:     -- \u6dfb\u52a0\u6216\u8005\u8c03\u6574\u5df2\u6709\u7684\u6d4b\u8bd5\u7528\u4f8b\u3002\n- build:    -- \u5bf9\u6784\u5efa\u7cfb\u7edf\u6216\u8005\u5916\u90e8\u4f9d\u8d56\u5e93\u8fdb\u884c\u4e86\u8c03\u6574\u3002\n- ci:       -- \u8c03\u6574\u4e86 CI \u7684\u914d\u7f6e\u6587\u4ef6\u6216\u8005\u811a\u672c\u3002\n- chore:    -- \u5bf9\u6e90\u4ee3\u7801\u548c\u6d4b\u8bd5\u6587\u4ef6\u4e4b\u5916\u5176\u4ed6\u90e8\u5206\u7684\u8c03\u6574\u3002\n- revert:   -- \u5bf9 commit \u8fdb\u884c\u56de\u6eda\u3002\n")),(0,r.kt)("h2",{id:"-6-contributor-license-agreement-cla"},(0,r.kt)("a",{name:"cla"})," 6. Contributor License Agreement (CLA)"),(0,r.kt)("p",null,'\u5728\u7b2c\u4e00\u6b21\u5411\u6211\u4eec\u63d0\u4ea4 PR \u4e4b\u540e\uff0c\u5728 PR \u4e2d\u7684 CLA \u68c0\u67e5\u5c06\u4f1a\u5931\u8d25\u5e76\u63d0\u793a\u7b7e\u7f72 CLA\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u81ea\u5df1\u7684\u8d26\u6237\u4e4b\u95f4\u5728 PR \u56de\u590d "I have read the CLA Document and I hereby sign the CLA" \u8868\u793a\u540c\u610f\u7b7e\u7f72 CLA\uff0c\u7136\u540e\u624b\u52a8\u91cd\u542f\u5931\u8d25\u7684 CLA \u68c0\u67e5 Action \u5373\u53ef\u3002\u5f53 PR \u88ab\u6210\u529f\u5408\u5e76\u4e4b\u540e\u5c06\u4f1a\u88ab\u9501\u5b9a\u4e0d\u80fd\u518d\u4fee\u6539\u3002'))}s.isMDXComponent=!0}}]);