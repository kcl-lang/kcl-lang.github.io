"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[47683],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,h=d["".concat(l,".").concat(p)]||d[p]||m[p]||r;return n?i.createElement(h,s(s({ref:t},u),{},{components:n})):i.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6219:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const r={},s="KCL Release Policy",o={unversionedId:"community/release-policy/kcl",id:"community/release-policy/kcl",title:"KCL Release Policy",description:"The KCL development team uses Semantic Versioning to simplify management. The version format follows the pattern of major.minor.patch. The version increments as follows: major version for incompatible API changes, minor version for backward-compatible functionality additions, and patch version for backward-compatible bug fixes. The overall goal is to release a minor version with feature enhancements every six months, with occasional patch versions as needed.",source:"@site/docs/community/release-policy/kcl.md",sourceDirName:"community/release-policy",slug:"/community/release-policy/kcl",permalink:"/docs/next/community/release-policy/kcl",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/community/release-policy/kcl.md",tags:[],version:"current",lastUpdatedBy:"peefy",lastUpdatedAt:1702459904,formattedLastUpdatedAt:"Dec 13, 2023",frontMatter:{},sidebar:"community",previous:{title:"Release Policy",permalink:"/docs/next/community/release-policy/"},next:{title:"Roadmap",permalink:"/docs/next/community/release-policy/roadmap"}},l={},c=[{value:"Release Process and Rules",id:"release-process-and-rules",level:2},{value:"Release Components",id:"release-components",level:2},{value:"Lifecycle of a Feature",id:"lifecycle-of-a-feature",level:2}],u={toc:c},d="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kcl-release-policy"},"KCL Release Policy"),(0,a.kt)("p",null,"The KCL development team uses ",(0,a.kt)("a",{parentName:"p",href:"https://semver.org/"},"Semantic Versioning")," to simplify management. The version format follows the pattern of major.minor.patch. The version increments as follows: major version for incompatible API changes, minor version for backward-compatible functionality additions, and patch version for backward-compatible bug fixes. The overall goal is to release a minor version with feature enhancements every six months, with occasional patch versions as needed."),(0,a.kt)("p",null,"The KCL project version release strategy is as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Major Version: The major version is increased when there are significant architectural changes or major new features. The current major version for the KCL project is 0."),(0,a.kt)("li",{parentName:"ul"},"Minor Version: The minor version is increased when there are significant changes to added features and functionalities. The current minor version is 5, and versions 0.5, 0.6, and 0.7 will be released in the year 2023."),(0,a.kt)("li",{parentName:"ul"},"Patch Version: The patch version is increased when there are updates to fix bugs or improve performance. The patch version starts from 0 and increments by 1."),(0,a.kt)("li",{parentName:"ul"},"Release Cycle: Before reaching version 1.0.0, the plan is to release a new minor version every 3 months. During this period, user feedback will be continuously collected, and necessary fixes and improvements will be made."),(0,a.kt)("li",{parentName:"ul"},"Release Process: Before releasing a new version, rigorous testing and review are conducted to ensure the quality of the new version. After finalizing the release and completing the testing, the source code, binaries, and images of the new version will be published on Github, along with detailed documentation and usage guides."),(0,a.kt)("li",{parentName:"ul"},"Version Support: Long-term support will be provided for the latest version, including bug fixes and security updates. Limited support will be provided for older versions, with fixes only done when necessary.")),(0,a.kt)("h2",{id:"release-process-and-rules"},"Release Process and Rules"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Feature Development: Main branch development, branch releases, block user issues, critical bugs, security vulnerabilities, and high-priority fixes. It is given higher priority over general feature development and should be completed within a week."),(0,a.kt)("li",{parentName:"ul"},"Iteration Cycle: The iteration cycle is typically 3 months, with a new minor version released every 3 months."),(0,a.kt)("li",{parentName:"ul"},"Version Planning: Two weeks before the release, an alpha version is produced, followed by a beta version one week before the release. Alpha versions can still include feature merging, while beta versions only include bug fixes. The final release version is tagged as a long-term saved release branch."),(0,a.kt)("li",{parentName:"ul"},"Release Plan: A detailed release plan (Github Milestone) is created at the beginning of each release cycle, including release dates, version numbers, feature lists, and testing plans. The release plan should be followed as closely as possible to ensure timely releases."),(0,a.kt)("li",{parentName:"ul"},"Pre-release Testing: Comprehensive testing, including unit testing, integration testing, fuzz testing, stress testing, and user acceptance testing, is conducted before releasing a new version. The new version is only released when it passes all tests without any issues."),(0,a.kt)("li",{parentName:"ul"},"Version Rollback: If serious issues are discovered after the release, the version will be rolled back immediately, and the issues will be fixed as soon as possible. Users will be promptly notified through email, social media, etc., and provided with solutions."),(0,a.kt)("li",{parentName:"ul"},"Release Documentation: Detailed documentation, including release notes, update logs, API documentation, and usage guides, is provided during the release to help users understand and use the new version. In KCL, this documentation is maintained on the KCL website."),(0,a.kt)("li",{parentName:"ul"},"Version Compatibility: When releasing a new version, compatibility is maintained as much as possible to minimize the need for modifications and adaptations by users. Since KCL has not reached version 1 yet, there are no compatibility guarantees at the moment. The goal of KCL is to minimize major changes unless they provide significant benefits, such as solving problems in the target scenarios or improving the overall user experience. For features or changes that may introduce compatibility issues, appropriate prompts and solutions will be provided. Gradual upgrade guides or automated migration tools will be offered to help users smoothly transition to the new version.")),(0,a.kt)("h2",{id:"release-components"},"Release Components"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(16082).Z,width:"1404",height:"776"})),(0,a.kt)("p",null,"For each version release, all related components of KCL depend on the same major version of the KCL core. The dependencies are organized in a tree structure and released and regression tested in a specific order until the release testing is completed, with efforts made to avoid triangular dependencies and prohibit circular dependencies."),(0,a.kt)("h2",{id:"lifecycle-of-a-feature"},"Lifecycle of a Feature"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Design and Documentation: Clearly answer the motivations, problems to be solved, and goals of the feature through issues. Define user requirements and user stories. Specify what the feature does, how it is implemented, its difficulty level, estimated time, dependencies, and testing requirements. (Tips: Split large designs into smaller ones, find a simple and sustainable solution through trade-offs and extensive research, and ensure scalability to adapt to future business or technical changes. Finalize the design through continuous discussions and design reviews)."),(0,a.kt)("li",{parentName:"ul"},"Code Implementation: Iteratively develop the feature through frequent small changes, continuous communication and collaboration. Design unit tests, integration tests, and benchmark tests in advance to ensure 100% test coverage, complete comments, and clear logic. Continuously collect feedback through demonstrations."),(0,a.kt)("li",{parentName:"ul"},"Documentation Writing: Update user documentation on the KCL website."),(0,a.kt)("li",{parentName:"ul"},"Testing and Feedback: Before releasing the feature, allow some peers/users to try and test these new features through written documentation rather than oral descriptions. Receive feedback and make improvements."),(0,a.kt)("li",{parentName:"ul"},"Release and Announcements: Write Release Notes, PR articles, interpret scenarios and new features, and promote through various channels.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: All the above information is public and should be made available for all community developers to participate, discuss, and contribute.")))}m.isMDXComponent=!0},16082:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/kcl-components-b601779e5d2636de5d40d6ae15c4309d.png"}}]);