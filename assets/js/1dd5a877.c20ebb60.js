"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[65684],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(f,l(l({ref:t},s),{},{components:n})):a.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83028:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={sidebar_position:2},l="Doc",i={unversionedId:"tools/cli/kcl/docgen",id:"version-0.8.0/tools/cli/kcl/docgen",title:"Doc",description:"The KCL Document tool supports extracting model documents from KCL source code and supports to output Markdown, HTML and OpenAPI formats. This document introduces the document specification of the KCL language, gives an example of how to use the KCL Document tool to extract documents.",source:"@site/versioned_docs/version-0.8.0/tools/cli/kcl/docgen.md",sourceDirName:"tools/cli/kcl",slug:"/tools/cli/kcl/docgen",permalink:"/docs/tools/cli/kcl/docgen",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.8.0/tools/cli/kcl/docgen.md",tags:[],version:"0.8.0",lastUpdatedBy:"peefy",lastUpdatedAt:1709797004,formattedLastUpdatedAt:"Mar 7, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tools",previous:{title:"Run",permalink:"/docs/tools/cli/kcl/run"},next:{title:"Format",permalink:"/docs/tools/cli/kcl/fmt"}},c={},p=[{value:"Document Specification of KCL",id:"document-specification-of-kcl",level:2},{value:"Generating Documentation From KCL",id:"generating-documentation-from-kcl",level:2},{value:"Appendix",id:"appendix",level:2},{value:"Concept of reST",id:"concept-of-rest",level:3},{value:"Args",id:"args",level:2},{value:"kcl doc",id:"kcl-doc",level:3},{value:"kcl doc generate",id:"kcl-doc-generate",level:3}],s={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"doc"},"Doc"),(0,o.kt)("p",null,"The KCL Document tool supports extracting model documents from KCL source code and supports to output Markdown, HTML and OpenAPI formats. This document introduces the document specification of the KCL language, gives an example of how to use the KCL Document tool to extract documents."),(0,o.kt)("h2",{id:"document-specification-of-kcl"},"Document Specification of KCL"),(0,o.kt)("p",null,"The documentation of the KCL file mainly contains the following two parts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Current KCL module document: description of the current KCL file"),(0,o.kt)("li",{parentName:"ul"},"All schema documents contained in the KCL file: a description of the current schema, including schema description, schema attribute descriptions, and Examples. The specific format is as follows:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Schema description")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'"""This is a brief description of the Schema\n"""\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Description of each attribute of Schema: including attribute description, attribute type, default value, optional or required")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'"""\nAttributes\n----------\nx : type, default is a, optional.\n    Description of parameter `x`.\ny : type, default is b, required.\n    Description of parameter `y`.\n"""\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"----------")," indicates that ",(0,o.kt)("inlineCode",{parentName:"p"},"Attributes")," is a title (the length of the symbol ",(0,o.kt)("inlineCode",{parentName:"p"},"-")," is the same as the length of the title), the attribute name and attribute type are separated by a colon ",(0,o.kt)("inlineCode",{parentName:"p"},":"),", the description of the attribute is written on another line with indentation. The default value of the attribute is separated by a comma ",(0,o.kt)("inlineCode",{parentName:"p"},",")," after the attribute type, and it is written in the form of ",(0,o.kt)("inlineCode",{parentName:"p"},"default is {default value}"),". In addition, it is necessary to indicate whether the attribute is optional/required. Write ",(0,o.kt)("inlineCode",{parentName:"p"},"optional")," after the default value for an optional attribute, and write ",(0,o.kt)("inlineCode",{parentName:"p"},"required")," after the default value for a required attribute."),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Examples")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'"""\nExamples\n--------\nval = Schema {\n    name = "Alice"\n    age = 18\n}\n"""\n')),(0,o.kt)("p",null,"In addition, the KCL docstring syntax should use a subset of the ",(0,o.kt)("a",{parentName:"p",href:"https://docutils.sourceforge.io/rst.html"},"re-structured text (reST)")," and be rendered using the ",(0,o.kt)("a",{parentName:"p",href:"https://www.sphinx-doc.org/en/master/"},"Sphinx"),"."),(0,o.kt)("h2",{id:"generating-documentation-from-kcl"},"Generating Documentation From KCL"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"kcl doc generate")," command to extract documentation from a user-specified file or directory and output it to the specified directory."),(0,o.kt)("p",null,"Generate Markdown document for current package with a ",(0,o.kt)("inlineCode",{parentName:"p"},"kcl.mod")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kcl doc generate\n")),(0,o.kt)("p",null,"Generate HTML document for current package"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kcl doc generate --format html\n")),(0,o.kt)("p",null,"Generate Markdown document for specific package"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kcl doc generate --file-path <package path>\n")),(0,o.kt)("p",null,"Generate Markdown document for specific package to a ",(0,o.kt)("inlineCode",{parentName:"p"},"<target directory>")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kcl doc generate --file-path <package path> --target <target directory>\n")),(0,o.kt)("h2",{id:"appendix"},"Appendix"),(0,o.kt)("h3",{id:"concept-of-rest"},"Concept of reST"),(0,o.kt)("p",null,"For documents in reST format, paragraphs and indentation are important, new paragraphs are marked with blank lines, and indentation is the indentation indicated in the output. Font styles can be expressed as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"*","Italic","*"),(0,o.kt)("li",{parentName:"ul"},"*","*","Bold","*","*"),(0,o.kt)("li",{parentName:"ul"},"`","`","Monospaced","`","`")),(0,o.kt)("p",null,"Refer to ",(0,o.kt)("a",{parentName:"p",href:"https://docutils.sourceforge.io/rst.html"},"reST")," for more information."),(0,o.kt)("h2",{id:"args"},"Args"),(0,o.kt)("h3",{id:"kcl-doc"},"kcl doc"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'This command shows documentation for KCL package or symbol.\n\nUsage:\n  kcl doc [command]\n\nAliases:\n  doc, d\n\nExamples:\n  # Generate document for current package\n  kcl doc generate\n\n\nAvailable Commands:\n  generate    Generates documents from code and examples\n\nFlags:\n  -h, --help   help for doc\n\nUse "kcl doc [command] --help" for more information about a command.\n')),(0,o.kt)("h3",{id:"kcl-doc-generate"},"kcl doc generate"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'Usage:\n  kcl doc generate [flags]\n\nAliases:\n  generate, gen, g\n\nExamples:\n  # Generate Markdown document for current package\n  kcl doc generate\n\n  # Generate Html document for current package\n  kcl doc generate --format html\n\n  # Generate Markdown document for specific package\n  kcl doc generate --file-path <package path>\n\n  # Generate Markdown document for specific package to a <target directory>\n  kcl doc generate --file-path <package path> --target <target directory>\n\n\nFlags:\n      --escape-html         Whether to escape html symbols when the output format is markdown. Always scape when the output format is html. Default to false.\n      --file-path string    Relative or absolute path to the KCL package root when running kcl-doc command from\n                            outside of the KCL package root directory.\n                            If not specified, the current work directory will be used as the KCL package root.\n      --format string       The document format to generate. Supported values: markdown, html, openapi. (default "md")\n  -h, --help                help for generate\n      --ignore-deprecated   Do not generate documentation for deprecated schemas.\n      --target string       If not specified, the current work directory will be used. A docs/ folder will be created under the target directory.\n      --template string     The template directory based on the KCL package root. If not specified, the built-in templates will be used.\n')))}u.isMDXComponent=!0}}]);