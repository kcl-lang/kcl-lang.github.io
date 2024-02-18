"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[6333],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?i.createElement(f,l(l({ref:t},s),{},{components:n})):i.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[u]="string"==typeof e?e:o,l[1]=r;for(var c=2;c<a;c++)l[c]=n[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37946:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=n(87462),o=(n(67294),n(3905));const a={sidebar_position:5},l="Command Line Tool",r={unversionedId:"user_docs/support/faq-cli",id:"version-0.4.4/user_docs/support/faq-cli",title:"Command Line Tool",description:"1. What is the function of the settings.yaml in the application directory of the Konfig?",source:"@site/versioned_docs/version-0.4.4/user_docs/support/faq-cli.md",sourceDirName:"user_docs/support",slug:"/user_docs/support/faq-cli",permalink:"/docs/0.4.4/user_docs/support/faq-cli",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.4.4/user_docs/support/faq-cli.md",tags:[],version:"0.4.4",lastUpdatedBy:"Peefy",lastUpdatedAt:1708241829,formattedLastUpdatedAt:"Feb 18, 2024",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"user_docs",previous:{title:"YAML",permalink:"/docs/0.4.4/user_docs/support/faq-yaml"}},p={},c=[{value:"1. What is the function of the <code>settings.yaml</code> in the application directory of the Konfig?",id:"1-what-is-the-function-of-the-settingsyaml-in-the-application-directory-of-the-konfig",level:3},{value:"2. How to input dynamic options? How to get dynamic options in code?",id:"2-how-to-input-dynamic-options-how-to-get-dynamic-options-in-code",level:3},{value:"3. How to compile multiple files?",id:"3-how-to-compile-multiple-files",level:3},{value:"4. What is the function of the <code>settings.yaml</code> in the application directory of the KCL?",id:"4-what-is-the-function-of-the-settingsyaml-in-the-application-directory-of-the-kcl",level:3}],s={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"command-line-tool"},"Command Line Tool"),(0,o.kt)("h3",{id:"1-what-is-the-function-of-the-settingsyaml-in-the-application-directory-of-the-konfig"},"1. What is the function of the ",(0,o.kt)("inlineCode",{parentName:"h3"},"settings.yaml")," in the application directory of the Konfig?"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.yaml")," in KCL indicates the configuration file of the KCL command line tool. You can put the compiled configuration into it, such as the file to be compiled, the option dynamic parameter that needs to be input(",(0,o.kt)("inlineCode",{parentName:"p"},"-d"),"), whether to ignore the null value(",(0,o.kt)("inlineCode",{parentName:"p"},"-n"),") and other configurations."),(0,o.kt)("p",null,"For example, for the following arguments:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kcl main.k -D key=value -n -r\n")),(0,o.kt)("p",null,"It can be replaced by the following command line arguments and ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.yaml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\nkcl -Y settings.yaml\n")),(0,o.kt)("p",null,"settings.yaml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"kcl_cli_configs:\n  files:\n    - main.k\n  disable_none: true\n  strict_range_check: true\nkcl_options:\n  - key: key\n    value: value\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"kcl_cli_configs")," indicates configurable compilation arguments, ",(0,o.kt)("inlineCode",{parentName:"li"},"file")," indicates the KCL file used for compilation\uff0c",(0,o.kt)("inlineCode",{parentName:"li"},"disable_none")," indicates whether to use ",(0,o.kt)("inlineCode",{parentName:"li"},"-n"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"strict_range_check")," indicates whether to use ",(0,o.kt)("inlineCode",{parentName:"li"},"-r"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"kcl_options")," indicates dynamic options that can be configured, ",(0,o.kt)("inlineCode",{parentName:"li"},"key")," indicates option name, ",(0,o.kt)("inlineCode",{parentName:"li"},"value")," indicates option value")),(0,o.kt)("p",null,"Note: The file name does not need to be ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.yaml"),", but the configuration in it must meet the requirements."),(0,o.kt)("h3",{id:"2-how-to-input-dynamic-options-how-to-get-dynamic-options-in-code"},"2. How to input dynamic options? How to get dynamic options in code?"),(0,o.kt)("p",null,"KCL supports multiple ways to input dynamic options"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-D"),": Use the command line argument ",(0,o.kt)("inlineCode",{parentName:"li"},"-D")," to input dynamic options. It supports basic data types str/int/float/bool and structured data types list/dict")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'kcl main.k -D env-type=TEST -D deploy-topology=\'[{"cluster":"my-cluster","idc":"my-idc","replicas":2,"workspace":"my-idc","zone":"my-zone"}]\'\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-Y"),": Use the command line argument ",(0,o.kt)("inlineCode",{parentName:"li"},"-Y")," to input dynamic options by configuration file:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"kcl_options:\n  - key: env-type\n    value: TEST\n  - key: deploy-topology\n    value:\n      - cluster: my-cluster\n        idc: my-idc\n        replicas: 2\n        workspace: my-workspace\n        zone: my-zone\n")),(0,o.kt)("p",null,"Use the built-in function ",(0,o.kt)("inlineCode",{parentName:"p"},"option()")," to get it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'env = option("env-type")\ndeploy_topology = option("deploy-topology")\n')),(0,o.kt)("p",null,"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"env: TEST\ndeploy_topology:\n  - cluster: my-cluster\n    idc: my-idc\n    replicas: 2\n    workspace: my-workspace\n    zone: my-zone\n")),(0,o.kt)("h3",{id:"3-how-to-compile-multiple-files"},"3. How to compile multiple files?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Input multiple files in the command line:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kcl file1.k file2.k file3.k\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Set multiple files in configuration file and use command line argument ",(0,o.kt)("inlineCode",{parentName:"li"},"-Y"),":")),(0,o.kt)("p",null,"settings.yaml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"kcl_cli_configs:\n  files:\n    - file1.k\n    - file2.k\n    - file3.k\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kcl -Y settings.yaml\n")),(0,o.kt)("h3",{id:"4-what-is-the-function-of-the-settingsyaml-in-the-application-directory-of-the-kcl"},"4. What is the function of the ",(0,o.kt)("inlineCode",{parentName:"h3"},"settings.yaml")," in the application directory of the KCL?"),(0,o.kt)("p",null,"A Stack is an isolated logical workspace within a project. Stacks uniquely belong to a unique development group, such as the front-end development group in a web project, and uniquely represent a specific development phase, such as dev, test, or prod. From a development perspective, Stack is the basic unit of configuration for the KCL project. From an execution perspective, KCL code units are deployed into a Stack."))}d.isMDXComponent=!0}}]);