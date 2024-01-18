"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[872],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37673:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"Data Integration",sidebar_position:4},i=void 0,l={unversionedId:"user_docs/guides/data-integration",id:"version-0.5.1/user_docs/guides/data-integration",title:"Data Integration",description:"Introduction",source:"@site/versioned_docs/version-0.5.1/user_docs/guides/data-integration.md",sourceDirName:"user_docs/guides",slug:"/user_docs/guides/data-integration",permalink:"/docs/0.5.1/user_docs/guides/data-integration",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.1/user_docs/guides/data-integration.md",tags:[],version:"0.5.1",lastUpdatedBy:"Peefy",lastUpdatedAt:1705584615,formattedLastUpdatedAt:"Jan 18, 2024",sidebarPosition:4,frontMatter:{title:"Data Integration",sidebar_position:4},sidebar:"user_docs",previous:{title:"Schema Definition",permalink:"/docs/0.5.1/user_docs/guides/schema-definition"},next:{title:"Automation",permalink:"/docs/0.5.1/user_docs/guides/automation"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Use KCL for Data Integration",id:"use-kcl-for-data-integration",level:2},{value:"1. Get the Example",id:"1-get-the-example",level:3},{value:"2. YAML Integration",id:"2-yaml-integration",level:3},{value:"3. JSON Integration",id:"3-json-integration",level:3},{value:"Summary",id:"summary",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"In KCL, we can not only compile and output the configuration code written by KCL into YAML format data, but also directly embed JSON/YAML and other data into the KCL language."),(0,r.kt)("h2",{id:"use-kcl-for-data-integration"},"Use KCL for Data Integration"),(0,r.kt)("h3",{id:"1-get-the-example"},"1. Get the Example"),(0,r.kt)("p",null,"Firstly, let's get the example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/kcl-lang/kcl-lang.io.git/\ncd ./kcl-lang.io/examples/data-integration\n")),(0,r.kt)("h3",{id:"2-yaml-integration"},"2. YAML Integration"),(0,r.kt)("p",null,"We can run the following command to show the YAML integration config."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat yaml.k\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import yaml\n\nschema Server:\n    ports: [int]\n\nserver: Server = yaml.decode("""\\\nports:\n- 80\n- 8080\n""")\nserver_yaml = yaml.encode({\n    ports = [80, 8080]\n})\n')),(0,r.kt)("p",null,"In the above code, we use the built-in ",(0,r.kt)("inlineCode",{parentName:"p"},"yaml")," module of KCL and its ",(0,r.kt)("inlineCode",{parentName:"p"},"yaml.decode")," function directly integrates YAML data, and uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"Server")," schema to directly verify the integrated YAML data. In addition, we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"yaml.encode")," to serialize YAML data. We can obtain the configuration output through the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kcl yaml.k\n")),(0,r.kt)("p",null,"The output is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"server:\n  ports:\n    - 80\n    - 8080\nserver_yaml: |\n  ports:\n    - 80\n    - 8080\n")),(0,r.kt)("h3",{id:"3-json-integration"},"3. JSON Integration"),(0,r.kt)("p",null,"Similarly, for JSON data, we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"json.encode")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"json.decode")," function performs data integration in the same way."),(0,r.kt)("p",null,"We can run the following command to show the JSON integration config."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat json.k\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import json\n\nschema Server:\n    ports: [int]\n\nserver: Server = json.decode('{\"ports\": [80, 8080]}')\nserver_json = json.encode({\n    ports = [80, 8080]\n})\n")),(0,r.kt)("p",null,"The output of the execution command is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kcl json.k\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"server:\n  ports:\n    - 80\n    - 8080\nserver_json: '{\"ports\": [80, 8080]}'\n")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"This document introduces how to perform data integration in KCL, using the built-in yaml and json modules to directly integrate YAML and JSON data into the KCL language, and verify and serialize it using the corresponding decoding and encoding functions."))}p.isMDXComponent=!0}}]);