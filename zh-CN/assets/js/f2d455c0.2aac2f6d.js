"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[5550],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>_});var r=n(67294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,o=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=i(n),f=c,_=s["".concat(l,".").concat(f)]||s[f]||m[f]||o;return n?r.createElement(_,p(p({ref:t},u),{},{components:n})):r.createElement(_,p({ref:t},u))}));function _(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=n.length,p=new Array(o);p[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[s]="string"==typeof e?e:c,p[1]=a;for(var i=2;i<o;i++)p[i]=n[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3164:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>i});var r=n(87462),c=(n(67294),n(3905));const o={},p="project_context",a={unversionedId:"reference/plugin/project_context",id:"version-0.5.3/reference/plugin/project_context",title:"project_context",description:"project_context extract base info from project.yaml&stack.yaml",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.5.3/reference/plugin/project_context.md",sourceDirName:"reference/plugin",slug:"/reference/plugin/project_context",permalink:"/zh-CN/docs/0.5.3/reference/plugin/project_context",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.3/reference/plugin/project_context.md",tags:[],version:"0.5.3",lastUpdatedBy:"Peefy",lastUpdatedAt:1705584615,formattedLastUpdatedAt:"2024\u5e741\u670818\u65e5",frontMatter:{},sidebar:"reference",previous:{title:"\u7b80\u4ecb",permalink:"/zh-CN/docs/0.5.3/reference/plugin/overview"},next:{title:"\u591a\u8bed\u8a00",permalink:"/zh-CN/docs/0.5.3/reference/xlang-api/"}},l={},i=[{value:"<code>get_project_current_path</code>",id:"get_project_current_path",level:2},{value:"<code>get_project_input_file</code>",id:"get_project_input_file",level:2},{value:"<code>get_project_context</code>",id:"get_project_context",level:2},{value:"<code>get_stack_context</code>",id:"get_stack_context",level:2}],u={toc:i},s="wrapper";function m(e){let{components:t,...n}=e;return(0,c.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"project_context"},"project_context"),(0,c.kt)("p",null,"project_context extract base info from project.yaml&stack.yaml"),(0,c.kt)("p",null,(0,c.kt)("em",{parentName:"p"},"version: 0.0.1")),(0,c.kt)("h2",{id:"get_project_current_path"},(0,c.kt)("inlineCode",{parentName:"h2"},"get_project_current_path")),(0,c.kt)("p",null,"return the relative path of first file"),(0,c.kt)("p",null,"Example:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-py"},"import kcl_plugin.project_context as ctx\n\npath = ctx.get_project_current_path()\nprint(path)\n")),(0,c.kt)("h2",{id:"get_project_input_file"},(0,c.kt)("inlineCode",{parentName:"h2"},"get_project_input_file")),(0,c.kt)("p",null,"return compiling file list"),(0,c.kt)("p",null,"Example:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-py"},"import kcl_plugin.project_context as ctx\n\ninput_file = ctx.get_project_input_file()\nprint(input_file)\n")),(0,c.kt)("h2",{id:"get_project_context"},(0,c.kt)("inlineCode",{parentName:"h2"},"get_project_context")),(0,c.kt)("p",null,"return the current project context from project.yaml"),(0,c.kt)("p",null,"Example:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-py"},"import kcl_plugin.project_context as ctx\n\nproject = ctx.get_project_context()\n# Get project name\nprint(project?.name)\n")),(0,c.kt)("h2",{id:"get_stack_context"},(0,c.kt)("inlineCode",{parentName:"h2"},"get_stack_context")),(0,c.kt)("p",null,"return the current stack context from stack.yaml"),(0,c.kt)("p",null,"Example:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-py"},"import kcl_plugin.project_context as ctx\n\nstack = ctx.get_stack_context()\n# Get stack name\nprint(stack?.name)\n")))}m.isMDXComponent=!0}}]);