"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[66],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,h=d["".concat(c,".").concat(p)]||d[p]||m[p]||i;return n?o.createElement(h,a(a({ref:t},l),{},{components:n})):o.createElement(h,a({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},57434:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const i={sidebar_position:1},a="How to Contribute Document?",s={unversionedId:"community/contribute/contribute-docs",id:"version-0.5.3/community/contribute/contribute-docs",title:"How to Contribute Document?",description:"This document mainly makes partial modifications to existing documents. If you are submitting blog posts, adding new documents or adjusting the document directory structure, please contact team members first.",source:"@site/versioned_docs/version-0.5.3/community/contribute/contribute-docs.md",sourceDirName:"community/contribute",slug:"/community/contribute/contribute-docs",permalink:"/docs/0.5.3/community/contribute/contribute-docs",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.3/community/contribute/contribute-docs.md",tags:[],version:"0.5.3",lastUpdatedBy:"peefy",lastUpdatedAt:1707103391,formattedLastUpdatedAt:"Feb 5, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"community",previous:{title:"Contribute Guide",permalink:"/docs/0.5.3/community/contribute/"},next:{title:"How to Contribute Code?",permalink:"/docs/0.5.3/community/contribute/contribute-code"}},c={},u=[{value:"1. Basic Specifications",id:"1-basic-specifications",level:2},{value:"2. Basic mode of using document content",id:"2-basic-mode-of-using-document-content",level:2},{value:"3. Test and submit PR",id:"3-test-and-submit-pr",level:2}],l={toc:u},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-contribute-document"},"How to Contribute Document?"),(0,r.kt)("p",null,"This document mainly makes partial modifications to existing documents. If you are submitting blog posts, adding new documents or adjusting the document directory structure, please contact team members first."),(0,r.kt)("p",null,"KCL documents are divided into user guides, development documents, internal documents, reference manuals and blog articles. Their differences are as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"User's Guide: The corresponding usage document allows users to quickly use the KCL tool to complete their work at the minimum cost, without involving too much internal principles and implementation"),(0,r.kt)("li",{parentName:"ul"},"Reference: KCL language, tools, IDE and other documents with all features, covering the most extensive but trivial content"),(0,r.kt)("li",{parentName:"ul"},"Blog: There are no special restrictions. They can be shared for specific scenarios, technical points or overall development prospects")),(0,r.kt)("p",null,"When contributing different types of documents, it is better to combine the above positioning to make some appropriate tailoring for different content to give readers the best experience."),(0,r.kt)("h2",{id:"1-basic-specifications"},"1. Basic Specifications"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In addition to the title, the internal subtitles shall be numbered as much as possible for easy reading"),(0,r.kt)("li",{parentName:"ul"},"The document automatically output by the tool needs a link to the source code, and the subtitle can be without number"),(0,r.kt)("li",{parentName:"ul"},"Try not to paste large pieces of code (within 30 lines). It is better to provide text explanations and corresponding reference links for the code"),(0,r.kt)("li",{parentName:"ul"},"There are diagrams and truths, but overly complex architecture diagrams are not recommended"),(0,r.kt)("li",{parentName:"ul"},"Internal link: in the form of ",(0,r.kt)("a",{parentName:"li",href:"/docs/user_docs/getting-started/intro"},(0,r.kt)("inlineCode",{parentName:"a"},"/docs/user_docs/getting-started/intro"))," absolute path")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Punctuation and space")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Chinese punctuation is preferred in Chinese documents"),(0,r.kt)("li",{parentName:"ul"},"One space is required between Chinese and English"),(0,r.kt)("li",{parentName:"ul"},"One space needs to be added between Chinese and numbers"),(0,r.kt)("li",{parentName:"ul"},"Chinese uses full width punctuation without adding spaces before and after punctuation"),(0,r.kt)("li",{parentName:"ul"},"English content uses half width punctuation, with a space after the punctuation"),(0,r.kt)("li",{parentName:"ul"},"You need to leave a space before and after the link, but you do not need to add a space near the beginning of the paragraph and Chinese full width punctuation.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Picture and resource file names")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The file name and directory name can only use numbers, English letters and underscores",(0,r.kt)("inlineCode",{parentName:"li"},"_")," And minus sign '-'"),(0,r.kt)("li",{parentName:"ul"},"Pictures of the current document are placed in the images directory of the current directory"),(0,r.kt)("li",{parentName:"ul"},"Vector pictures can be viewed through ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/jgraph/drawio-desktop/releases"},"drawio offline version")," (and submit source files at the same time), and export png format pictures at 200% resolution")),(0,r.kt)("h2",{id:"2-basic-mode-of-using-document-content"},"2. Basic mode of using document content"),(0,r.kt)("p",null,"Each usage document can be regarded as a relatively complete sharing or blog post (the reference manual is no longer such). Using documents to organize content follows the following pattern:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Overview: What problems do you want to solve and what effects do you want to achieve in this article? You can put a screenshot of the final effect first"),(0,r.kt)("li",{parentName:"ol"},"Dependent environment: what tools need to be installed, and provide relevant links"),(0,r.kt)("li",{parentName:"ol"},"Introduce this article to build a relationship diagram or architecture diagram of resources"),(0,r.kt)("li",{parentName:"ol"},"Give the test method. Try to use community common methods (such as kube, curl command, or browser) to test"),(0,r.kt)("li",{parentName:"ol"},"Summary and Outlook. Briefly review the current operation process and some places that can be expanded (some links can be given)")),(0,r.kt)("h2",{id:"3-test-and-submit-pr"},"3. Test and submit PR"),(0,r.kt)("p",null,"First, clone the document warehouse, and then test the viewing effect locally with the 'npm run start' and 'npm run build' commands to ensure that you can browse normally and then submit PR."))}m.isMDXComponent=!0}}]);