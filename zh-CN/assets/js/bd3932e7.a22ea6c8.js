"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[21192],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=s(n),k=l,m=u["".concat(c,".").concat(k)]||u[k]||d[k]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=k;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[u]="string"==typeof e?e:l,o[1]=a;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},59354:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var r=n(87462),l=(n(67294),n(3905));const i={sidebar_position:5},o="\u4ee3\u7801\u98ce\u683c\u68c0\u67e5\u5de5\u5177",a={unversionedId:"tools/cli/kcl/lint",id:"version-0.7/tools/cli/kcl/lint",title:"\u4ee3\u7801\u98ce\u683c\u68c0\u67e5\u5de5\u5177",description:"KCL \u652f\u6301\u901a\u8fc7\u5185\u7f6e\u7684\u547d\u4ee4\u884c\u5de5\u5177\u5bf9 KCL \u4ee3\u7801\u8fdb\u884c\u68c0\u67e5\uff0c\u5e76\u652f\u6301\u591a\u79cd\u8f93\u51fa\u683c\u5f0f\u3002\u672c\u6587\u6863\u5c55\u793a KCL Lint \u5de5\u5177\u7684\u4f7f\u7528\u65b9\u5f0f\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.7/tools/cli/kcl/lint.md",sourceDirName:"tools/cli/kcl",slug:"/tools/cli/kcl/lint",permalink:"/zh-CN/docs/0.7/tools/cli/kcl/lint",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.7/tools/cli/kcl/lint.md",tags:[],version:"0.7",lastUpdatedBy:"peefy",lastUpdatedAt:1710771316,formattedLastUpdatedAt:"2024\u5e743\u670818\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tools",previous:{title:"\u6570\u636e\u548c\u7ed3\u6784\u5bfc\u5165\u5de5\u5177",permalink:"/zh-CN/docs/0.7/tools/cli/kcl/import"},next:{title:"\u6d4b\u8bd5\u5de5\u5177",permalink:"/zh-CN/docs/0.7/tools/cli/kcl/test"}},c={},s=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u5de5\u7a0b\u7ed3\u6784",id:"\u5de5\u7a0b\u7ed3\u6784",level:3},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u4ee3\u7801\u98ce\u683c\u68c0\u67e5\u5de5\u5177"},"\u4ee3\u7801\u98ce\u683c\u68c0\u67e5\u5de5\u5177"),(0,l.kt)("p",null,"KCL \u652f\u6301\u901a\u8fc7\u5185\u7f6e\u7684\u547d\u4ee4\u884c\u5de5\u5177\u5bf9 KCL \u4ee3\u7801\u8fdb\u884c\u68c0\u67e5\uff0c\u5e76\u652f\u6301\u591a\u79cd\u8f93\u51fa\u683c\u5f0f\u3002\u672c\u6587\u6863\u5c55\u793a KCL Lint \u5de5\u5177\u7684\u4f7f\u7528\u65b9\u5f0f\u3002"),(0,l.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("h3",{id:"\u5de5\u7a0b\u7ed3\u6784"},"\u5de5\u7a0b\u7ed3\u6784"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},".\n\u2514\u2500\u2500 Test\n    \u2514\u2500\u2500 kcl.mod\n    \u2514\u2500\u2500 a.k\n    \u2514\u2500\u2500 b.k\n    \u2514\u2500\u2500 dir\n        \u2514\u2500\u2500 c.k\n    \u2514\u2500\u2500 test.k\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"a.k"),",",(0,l.kt)("inlineCode",{parentName:"p"},"b.k"),",",(0,l.kt)("inlineCode",{parentName:"p"},"c.k"),",",(0,l.kt)("inlineCode",{parentName:"p"},"test.k")," \u4e3a\u6d4b\u8bd5\u7684 kcl \u6587\u4ef6\u3002"),(0,l.kt)("p",null,"\u547d\u4ee4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kcl lint your_config.k\n")),(0,l.kt)("p",null,"\u6216"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kcl lint your_config_path\n")),(0,l.kt)("h2",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"This command lints the kcl code. 'kcl lint' takes multiple input for arguments.\n\nFor example, 'kcl lint path/to/kcl.k' will lint the file named path/to/kcl.k\n\nUsage:\n  kcl lint [flags]\n\nExamples:\n  # Lint a single file and output YAML\n  kcl lint path/to/kcl.k\n\n  # Lint multiple files\n  kcl lint path/to/kcl1.k path/to/kcl2.k\n\n  # Lint OCI packages\n  kcl lint oci://ghcr.io/kcl-lang/hello-world\n\n  # Lint the current package\n  kcl lint\n\n\nFlags:\n  -D, --argument strings        Specify the top-level argument\n  -d, --debug                   Run in debug mode\n  -n, --disable_none            Disable dumping None values\n  -E, --external strings        Specify the mapping of package name and path where the package is located\n      --format string           Specify the output format (default \"yaml\")\n  -h, --help                    help for lint\n      --no_style                Set to prohibit output of command line waiting styles, including colors, etc.\n  -o, --output string           Specify the YAML/JSON output file path\n  -O, --overrides strings       Specify the configuration override path and value\n  -S, --path_selector strings   Specify the path selectors\n  -q, --quiet                   Set the quiet mode (no output)\n  -Y, --setting strings         Specify the command line setting files\n  -k, --sort_keys               Sort output result keys\n  -r, --strict_range_check      Do perform strict numeric range checks\n  -t, --tag string              Specify the tag for the OCI or Git artifact\n  -V, --vendor                  Run in vendor mode\n")))}d.isMDXComponent=!0}}]);