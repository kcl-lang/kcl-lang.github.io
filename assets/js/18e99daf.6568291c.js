"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[37923],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=s(n),m=l,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[u]="string"==typeof e?e:l,i[1]=a;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91655:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var r=n(87462),l=(n(67294),n(3905));const o={sidebar_position:5},i="Lint",a={unversionedId:"tools/cli/kcl/lint",id:"version-0.7.0/tools/cli/kcl/lint",title:"Lint",description:"The KCL Lint tool supports checking some warning-level defects in KCL code and supports multiple output formats. This document shows how to use the KCL Lint tool.",source:"@site/versioned_docs/version-0.7.0/tools/cli/kcl/lint.md",sourceDirName:"tools/cli/kcl",slug:"/tools/cli/kcl/lint",permalink:"/docs/tools/cli/kcl/lint",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.7.0/tools/cli/kcl/lint.md",tags:[],version:"0.7.0",lastUpdatedBy:"peefy",lastUpdatedAt:1702459904,formattedLastUpdatedAt:"Dec 13, 2023",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tools",previous:{title:"Import",permalink:"/docs/tools/cli/kcl/import"},next:{title:"Test",permalink:"/docs/tools/cli/kcl/test"}},c={},s=[{value:"Example",id:"example",level:2},{value:"Project Structure",id:"project-structure",level:3},{value:"Args",id:"args",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"lint"},"Lint"),(0,l.kt)("p",null,"The KCL Lint tool supports checking some warning-level defects in KCL code and supports multiple output formats. This document shows how to use the KCL Lint tool."),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("h3",{id:"project-structure"},"Project Structure"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},".\n\u2514\u2500\u2500 Test\n    \u2514\u2500\u2500 kcl.mod\n    \u2514\u2500\u2500 a.k\n    \u2514\u2500\u2500 b.k\n    \u2514\u2500\u2500 dir\n        \u2514\u2500\u2500 c.k\n    \u2514\u2500\u2500 test.k\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"a.k"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"b.k"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"c.k")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"test.k")," are the kcl file to be checked."),(0,l.kt)("p",null,"Args\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kcl lint your_config.k\n")),(0,l.kt)("p",null,"or"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kcl lint your_config_path\n")),(0,l.kt)("h2",{id:"args"},"Args"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"This command lints the kcl code. 'kcl lint' takes multiple input for arguments.\n\nFor example, 'kcl lint path/to/kcl.k' will lint the file named path/to/kcl.k\n\nUsage:\n  kcl lint [flags]\n\nExamples:\n  # Lint a single file and output YAML\n  kcl lint path/to/kcl.k\n\n  # Lint multiple files\n  kcl lint path/to/kcl1.k path/to/kcl2.k\n\n  # Lint OCI packages\n  kcl lint oci://ghcr.io/kcl-lang/hello-world\n\n  # Lint the current package\n  kcl lint\n\n\nFlags:\n  -D, --argument strings        Specify the top-level argument\n  -d, --debug                   Run in debug mode\n  -n, --disable_none            Disable dumping None values\n  -E, --external strings        Specify the mapping of package name and path where the package is located\n      --format string           Specify the output format (default \"yaml\")\n  -h, --help                    help for lint\n      --no_style                Set to prohibit output of command line waiting styles, including colors, etc.\n  -o, --output string           Specify the YAML/JSON output file path\n  -O, --overrides strings       Specify the configuration override path and value\n  -S, --path_selector strings   Specify the path selectors\n  -q, --quiet                   Set the quiet mode (no output)\n  -Y, --setting strings         Specify the command line setting files\n  -k, --sort_keys               Sort output result keys\n  -r, --strict_range_check      Do perform strict numeric range checks\n  -t, --tag string              Specify the tag for the OCI or Git artifact\n  -V, --vendor                  Run in vendor mode\n")))}d.isMDXComponent=!0}}]);