"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[10433],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),i=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=i(n),u=r,k=s["".concat(p,".").concat(u)]||s[u]||m[u]||l;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[s]="string"==typeof e?e:r,o[1]=c;for(var i=2;i<l;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22048:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var a=n(87462),r=(n(67294),n(3905));const l={sidebar_position:2},o="\u6587\u6863\u751f\u6210\u5de5\u5177",c={unversionedId:"tools/cli/kcl/docgen",id:"tools/cli/kcl/docgen",title:"\u6587\u6863\u751f\u6210\u5de5\u5177",description:"KCL \u547d\u4ee4\u884c\u5de5\u5177\u652f\u6301\u4ece KCL \u6e90\u7801\u4e2d\u4e00\u952e\u63d0\u53d6\u6a21\u578b\u6587\u6863\uff0c\u5e76\u652f\u6301 Markdown, HTML, OpenAPI \u7b49\u8f93\u51fa\u683c\u5f0f\u3002\u672c\u6587\u4ecb\u7ecd KCL \u8bed\u8a00\u7684\u6587\u6863\u89c4\u8303\uff0c\u4e3e\u4f8b\u8bf4\u660e\u5982\u4f55\u4f7f\u7528 KCL \u6587\u6863\u751f\u6210\u5de5\u5177\u63d0\u53d6\u6587\u6863\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tools/cli/kcl/docgen.md",sourceDirName:"tools/cli/kcl",slug:"/tools/cli/kcl/docgen",permalink:"/zh-CN/docs/next/tools/cli/kcl/docgen",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/tools/cli/kcl/docgen.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1706869561,formattedLastUpdatedAt:"2024\u5e742\u67082\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tools",previous:{title:"\u8fd0\u884c KCL \u4ee3\u7801",permalink:"/zh-CN/docs/next/tools/cli/kcl/run"},next:{title:"\u4ee3\u7801\u683c\u5f0f\u5316\u5de5\u5177",permalink:"/zh-CN/docs/next/tools/cli/kcl/fmt"}},p={},i=[{value:"KCL \u8bed\u8a00\u7684\u6587\u6863\u89c4\u8303",id:"kcl-\u8bed\u8a00\u7684\u6587\u6863\u89c4\u8303",level:2},{value:"\u4ece KCL \u6e90\u7801\u751f\u6210\u6587\u6863",id:"\u4ece-kcl-\u6e90\u7801\u751f\u6210\u6587\u6863",level:2},{value:"\u6587\u6863\u5de5\u5177\u9644\u5f55",id:"\u6587\u6863\u5de5\u5177\u9644\u5f55",level:2},{value:"\u5e38\u89c1\u7684 reST \u6982\u5ff5",id:"\u5e38\u89c1\u7684-rest-\u6982\u5ff5",level:3},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"kcl doc",id:"kcl-doc",level:3},{value:"kcl doc generate",id:"kcl-doc-generate",level:3}],d={toc:i},s="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u6587\u6863\u751f\u6210\u5de5\u5177"},"\u6587\u6863\u751f\u6210\u5de5\u5177"),(0,r.kt)("p",null,"KCL \u547d\u4ee4\u884c\u5de5\u5177\u652f\u6301\u4ece KCL \u6e90\u7801\u4e2d\u4e00\u952e\u63d0\u53d6\u6a21\u578b\u6587\u6863\uff0c\u5e76\u652f\u6301 Markdown, HTML, OpenAPI \u7b49\u8f93\u51fa\u683c\u5f0f\u3002\u672c\u6587\u4ecb\u7ecd KCL \u8bed\u8a00\u7684\u6587\u6863\u89c4\u8303\uff0c\u4e3e\u4f8b\u8bf4\u660e\u5982\u4f55\u4f7f\u7528 KCL \u6587\u6863\u751f\u6210\u5de5\u5177\u63d0\u53d6\u6587\u6863\u3002"),(0,r.kt)("h2",{id:"kcl-\u8bed\u8a00\u7684\u6587\u6863\u89c4\u8303"},"KCL \u8bed\u8a00\u7684\u6587\u6863\u89c4\u8303"),(0,r.kt)("p",null,"KCL\u6587\u4ef6\u7684\u6587\u6863\u4e3b\u8981\u5305\u542b\u5982\u4e0b\u4e24\u4e2a\u90e8\u5206\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5f53\u524d KCL \u6a21\u5757\u7684\u6587\u6863\uff1a\u5bf9\u5f53\u524d KCL \u6587\u4ef6\u7684\u8bf4\u660e"),(0,r.kt)("li",{parentName:"ul"},"KCL \u6587\u4ef6\u5185\u5305\u542b\u7684\u6240\u6709 Schema \u7684\u6587\u6863\uff1a\u5bf9\u5f53\u524d Schema \u7684\u8bf4\u660e\uff0c\u5176\u4e2d\u5305\u542b Schema \u63cf\u8ff0\u3001Schema \u5404\u5c5e\u6027\u7684\u63cf\u8ff0\u3001Examples \u4e09\u90e8\u5206\uff0c\u5177\u4f53\u683c\u5f0f\u5982\u4e0b\uff1a")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Schema \u63cf\u8ff0")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'"""\u8fd9\u662fSchema\u4e00\u4e2a\u7b80\u77ed\u7684\u63cf\u8ff0\u4fe1\u606f\n"""\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Schema \u5404\u5c5e\u6027\u7684\u63cf\u8ff0\uff1a\u5305\u542b\u5c5e\u6027\u63cf\u8ff0\u3001\u5c5e\u6027\u7c7b\u578b\u3001\u9ed8\u8ba4\u503c\u3001\u662f\u5426\u53ef\u9009")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'"""\nAttributes\n----------\nx : type, default is a, optional.\n    Description of parameter `x`.\ny : type, default is b, required.\n    Description of parameter `y`.\n"""\n')),(0,r.kt)("p",null,"\u5176\u4e2d\uff0c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"----------")," \u8868\u793a ",(0,r.kt)("inlineCode",{parentName:"p"},"Attributes")," \u4e3a\u4e00\u4e2a\u6807\u9898(",(0,r.kt)("inlineCode",{parentName:"p"},"-")," \u7b26\u53f7\u957f\u5ea6\u4e0e\u6807\u9898\u957f\u5ea6\u4fdd\u6301\u4e00\u81f4)\uff0c\u5c5e\u6027\u540d\u79f0\u4e0e\u5c5e\u6027\u7c7b\u578b\u7528\u5192\u53f7 ",(0,r.kt)("inlineCode",{parentName:"p"},":")," \u5206\u9694\uff0c\u5c5e\u6027\u7684\u8bf4\u660e\u53e6\u8d77\u4e00\u884c\u5e76\u589e\u52a0\u7f29\u8fdb\u8fdb\u884c\u4e66\u5199\u3002\u5c5e\u6027\u7684\u9ed8\u8ba4\u503c\u8bf4\u660e\u8ddf\u5728\u5c5e\u6027\u7c7b\u578b\u4e4b\u540e\u4f7f\u7528\u9017\u53f7 ",(0,r.kt)("inlineCode",{parentName:"p"},",")," \u5206\u9694\uff0c\u4e66\u5199\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"default is {\u9ed8\u8ba4\u503c}")," \u5f62\u5f0f\uff0c\u6b64\u5916\u9700\u8981\u8bf4\u660e\u5c5e\u6027\u662f\u5426\u4e3a\u53ef\u9009/\u5fc5\u9009\uff0c\u5bf9\u4e8e\u53ef\u9009\u5c5e\u6027\u5728\u9ed8\u8ba4\u503c\u4e4b\u540e\u4e66\u5199 ",(0,r.kt)("inlineCode",{parentName:"p"},"optional"),"\uff0c\u5bf9\u4e8e\u5fc5\u9009\u5c5e\u6027\u5728\u9ed8\u8ba4\u503c\u4e4b\u540e\u4e66\u5199 ",(0,r.kt)("inlineCode",{parentName:"p"},"required"),"\u3002"),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'"""\nExamples\n--------\nval = Schema {\n    name = "Alice"\n    age = 18\n}\n"""\n')),(0,r.kt)("p",null,"\u6b64\u5916\uff0cKCL \u6587\u6863\u5b57\u7b26\u4e32\u8bed\u6cd5\u5e94\u91c7\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://docutils.sourceforge.io/rst.html"},"re-structured text (reST)")," \u8bed\u6cd5\u5b50\u96c6\uff0c\u5e76\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://www.sphinx-doc.org/en/master/"},"Sphinx")," \u6e32\u67d3\u5448\u73b0\u3002"),(0,r.kt)("h2",{id:"\u4ece-kcl-\u6e90\u7801\u751f\u6210\u6587\u6863"},"\u4ece KCL \u6e90\u7801\u751f\u6210\u6587\u6863"),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl doc generate")," \u547d\u4ee4\uff0c\u4ece\u7528\u6237\u6307\u5b9a\u7684\u6587\u4ef6\u6216\u76ee\u5f55\u4e2d\u63d0\u53d6\u6587\u6863\uff0c\u5e76\u8f93\u51fa\u5230\u6307\u5b9a\u76ee\u5f55\u3002"),(0,r.kt)("p",null,"\u4e3a\u5f53\u524d KCL \u5305\u751f\u6210 Markdown \u6587\u6863\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"/docs")," \u76ee\u5f55 (\u5305\u542b kcl.mod \u6587\u4ef6)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kcl doc generate\n")),(0,r.kt)("p",null,"\u4e3a\u5f53\u524d KCL \u5305\u751f\u6210 HTML \u6587\u6863\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"/docs")," \u76ee\u5f55 (\u5305\u542b kcl.mod \u6587\u4ef6)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kcl doc generate --format html\n")),(0,r.kt)("p",null,"\u6307\u5b9a KCL \u5305\u8def\u5f84\u751f\u6210 Markdown \u6587\u6863\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"/docs")," \u76ee\u5f55"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kcl doc generate --file-path <package path>\n")),(0,r.kt)("p",null,"\u6307\u5b9a KCL \u5305\u8def\u5f84\u751f\u6210 Markdown \u6587\u6863\u5e76\u4fdd\u5b58\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"<\u76ee\u6807\u76ee\u5f55>"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kcl doc generate --file-path <package path> --target <target directory>\n")),(0,r.kt)("h2",{id:"\u6587\u6863\u5de5\u5177\u9644\u5f55"},"\u6587\u6863\u5de5\u5177\u9644\u5f55"),(0,r.kt)("h3",{id:"\u5e38\u89c1\u7684-rest-\u6982\u5ff5"},"\u5e38\u89c1\u7684 reST \u6982\u5ff5"),(0,r.kt)("p",null,"\u5bf9\u4e8e reST \u683c\u5f0f\u7684\u6587\u6863\uff0c\u6bb5\u843d\u548c\u7f29\u8fdb\u5f88\u91cd\u8981\uff0c\u65b0\u6bb5\u843d\u7528\u7a7a\u767d\u884c\u6807\u8bb0\uff0c\u7f29\u8fdb\u5373\u4e3a\u8868\u793a\u8f93\u51fa\u4e2d\u7684\u7f29\u8fdb\u3002\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u65b9\u5f0f\u8868\u793a\u5b57\u4f53\u6837\u5f0f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"*","\u659c\u4f53","*"),(0,r.kt)("li",{parentName:"ul"},"*","*","\u7c97\u4f53","*","*"),(0,r.kt)("li",{parentName:"ul"},"`","`","\u7b49\u5bbd\u5b57\u4f53","`","`")),(0,r.kt)("p",null,"\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://docutils.sourceforge.io/rst.html"},"reST \u6587\u6863"),"\u83b7\u5f97\u66f4\u591a\u5e2e\u52a9\u3002"),(0,r.kt)("h2",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("h3",{id:"kcl-doc"},"kcl doc"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'This command shows documentation for KCL package or symbol.\n\nUsage:\n  kcl doc [command]\n\nAliases:\n  doc, d\n\nExamples:\n  # Generate document for current package\n  kcl doc generate\n\n\nAvailable Commands:\n  generate    Generates documents from code and examples\n\nFlags:\n  -h, --help   help for doc\n\nUse "kcl doc [command] --help" for more information about a command.\n')),(0,r.kt)("h3",{id:"kcl-doc-generate"},"kcl doc generate"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'Usage:\n  kcl doc generate [flags]\n\nAliases:\n  generate, gen, g\n\nExamples:\n  # Generate Markdown document for current package\n  kcl doc generate\n\n  # Generate Html document for current package\n  kcl doc generate --format html\n\n  # Generate Markdown document for specific package\n  kcl doc generate --file-path <package path>\n\n  # Generate Markdown document for specific package to a <target directory>\n  kcl doc generate --file-path <package path> --target <target directory>\n\n\nFlags:\n      --escape-html         Whether to escape html symbols when the output format is markdown. Always scape when the output format is html. Default to false.\n      --file-path string    Relative or absolute path to the KCL package root when running kcl-doc command from\n                            outside of the KCL package root directory.\n                            If not specified, the current work directory will be used as the KCL package root.\n      --format string       The document format to generate. Supported values: markdown, html, openapi. (default "md")\n  -h, --help                help for generate\n      --ignore-deprecated   Do not generate documentation for deprecated schemas.\n      --target string       If not specified, the current work directory will be used. A docs/ folder will be created under the target directory.\n      --template string     The template directory based on the KCL package root. If not specified, the built-in templates will be used.\n')))}m.isMDXComponent=!0}}]);