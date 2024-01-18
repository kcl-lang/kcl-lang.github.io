"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[53917],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>b});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=s(o),p=r,b=d["".concat(u,".").concat(p)]||d[p]||m[p]||i;return o?n.createElement(b,c(c({ref:t},l),{},{components:o})):n.createElement(b,c({ref:t},l))}));function b(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,c=new Array(i);c[0]=p;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[d]="string"==typeof e?e:r,c[1]=a;for(var s=2;s<i;s++)c[s]=o[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},601:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var n=o(87462),r=(o(67294),o(3905));const i={sidebar_position:2},c="How to Contribute Code?",a={unversionedId:"community/contribute/contribute-code",id:"version-0.5.3/community/contribute/contribute-code",title:"How to Contribute Code?",description:"Welcome to participate in the KCL co construction to improve the code, documentation and testing, and also welcome to provide feedback through Issues. If you want to add KCL language features, please submit through the KEP process.",source:"@site/versioned_docs/version-0.5.3/community/contribute/contribute-code.md",sourceDirName:"community/contribute",slug:"/community/contribute/contribute-code",permalink:"/docs/0.5.3/community/contribute/contribute-code",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.3/community/contribute/contribute-code.md",tags:[],version:"0.5.3",lastUpdatedBy:"Peefy",lastUpdatedAt:1705584615,formattedLastUpdatedAt:"Jan 18, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"community",previous:{title:"How to Contribute Document?",permalink:"/docs/0.5.3/community/contribute/contribute-docs"},next:{title:"Git Commit Guide",permalink:"/docs/0.5.3/community/contribute/git-guideline"}},u={},s=[{value:"1. Misspellings in Code and Comments",id:"1-misspellings-in-code-and-comments",level:2},{value:"2. How to Contribute KCL",id:"2-how-to-contribute-kcl",level:2},{value:"3. How to Contribute VS Code KCL Plugin",id:"3-how-to-contribute-vs-code-kcl-plugin",level:2}],l={toc:s},d="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-contribute-code"},"How to Contribute Code?"),(0,r.kt)("p",null,"Welcome to participate in the KCL co construction to improve the code, documentation and testing, and also welcome to provide feedback through Issues. If you want to add KCL language features, please submit through the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/KEP"},"KEP")," process."),(0,r.kt)("h2",{id:"1-misspellings-in-code-and-comments"},"1. Misspellings in Code and Comments"),(0,r.kt)("p",null,"If you only need to modify the typos in the code and comments, you can directly modify and submit the PR to the repository. It is important to keep the code style as consistent as possible."),(0,r.kt)("h2",{id:"2-how-to-contribute-kcl"},"2. How to Contribute KCL"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl/blob/main/docs/dev_guide/1.about_this_guide.md"},"KCL contribute guide")," for more information."),(0,r.kt)("h2",{id:"3-how-to-contribute-vs-code-kcl-plugin"},"3. How to Contribute VS Code KCL Plugin"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/vscode-kcl/blob/main/docs/CONTRIBUTING.md"},"VS Code KCL plugin contribute guide")," for more information."))}m.isMDXComponent=!0}}]);