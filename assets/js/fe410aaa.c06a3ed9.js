"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[78448],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,k=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=u;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[d]="string"==typeof e?e:i,l[1]=r;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},73516:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const o={},l="KCL Module and Package",r={unversionedId:"user_docs/concepts/package-and-module",id:"version-0.4.6/user_docs/concepts/package-and-module",title:"KCL Module and Package",description:"This section mainly describes how to organize files in KCL.",source:"@site/versioned_docs/version-0.4.6/user_docs/concepts/package-and-module.md",sourceDirName:"user_docs/concepts",slug:"/user_docs/concepts/package-and-module",permalink:"/docs/0.4.6/user_docs/concepts/package-and-module",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.4.6/user_docs/concepts/package-and-module.md",tags:[],version:"0.4.6",lastUpdatedBy:"peefy",lastUpdatedAt:1689687201,formattedLastUpdatedAt:"Jul 18, 2023",frontMatter:{},sidebar:"user_docs",previous:{title:"Concepts",permalink:"/docs/0.4.6/user_docs/concepts/"},next:{title:"FAQ",permalink:"/docs/0.4.6/user_docs/support/"}},c={},p=[{value:"Overview",id:"overview",level:2},{value:"Module",id:"module",level:2},{value:"Creating a module",id:"creating-a-module",level:3},{value:"Package",id:"package",level:2},{value:"Relative Import Path",id:"relative-import-path",level:3},{value:"Absolute Import Path",id:"absolute-import-path",level:3},{value:"Builtin Package",id:"builtin-package",level:3},{value:"Plugin Package",id:"plugin-package",level:3},{value:"Main Package",id:"main-package",level:3},{value:"Files belonging to a main package",id:"files-belonging-to-a-main-package",level:4},{value:"The relationship and difference between <code>kcl.mod</code> and <code>kcl.yaml</code>",id:"the-relationship-and-difference-between-kclmod-and-kclyaml",level:2}],s={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"kcl-module-and-package"},"KCL Module and Package"),(0,i.kt)("p",null,"This section mainly describes how to organize files in KCL."),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Within a ",(0,i.kt)("strong",{parentName:"p"},"module"),", KCL organizes files grouped by ",(0,i.kt)("strong",{parentName:"p"},"package"),". A package can be defined within a module or be imported externally (through KCL package manager ",(0,i.kt)("inlineCode",{parentName:"p"},"kpm"),"). In the latter case, KCL maintains a copy of the package within the module in a dedicated location."),(0,i.kt)("h2",{id:"module"},"Module"),(0,i.kt)("p",null,"A KCL module contains a configuration laid out in a directory hierarchy. It contains everything that is needed to deterministically determine the outcome of a KCL configuration. The root of this directory is marked by containing a ",(0,i.kt)("inlineCode",{parentName:"p"},"kcl.mod")," directory. The contents of this directory are mostly managed by the kcl tool such as ",(0,i.kt)("inlineCode",{parentName:"p"},"kpm"),", etc. In that sense, ",(0,i.kt)("inlineCode",{parentName:"p"},"kcl.mod")," is analogous to the ",(0,i.kt)("inlineCode",{parentName:"p"},".git")," directory marking the root directory of a repo, but where its contents are mostly managed by the git tool. Besides, a KCL module is the largest unit of the file organization, has a fixed location of all KCL files and dependencies."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: The use of a KCL module e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"kcl.mod")," is optional, but required if one wants to manage, distribute, share and reuse code with a semantic version.")),(0,i.kt)("h3",{id:"creating-a-module"},"Creating a module"),(0,i.kt)("p",null,"A module can be created by running the following command within the module root:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kpm init [module name]\n")),(0,i.kt)("p",null,"The module name is ",(0,i.kt)("strong",{parentName:"p"},"required")," if a package within the module needs to import another package within the module. A module can also be created by setting up the ",(0,i.kt)("inlineCode",{parentName:"p"},"kcl.mod")," file manually."),(0,i.kt)("h2",{id:"package"},"Package"),(0,i.kt)("p",null,'In KCL, a package is usually composed of a "folder" containing KCL files. This folder can be a real disk physical path, or it can be composed of multiple KCL files (usually main package). Different packages are uniquely located by different package paths (such as ',(0,i.kt)("inlineCode",{parentName:"p"},"kubernetes.core.v1"),")"),(0,i.kt)("p",null,"Within the same module, different packages can be imported from each other through the import statement of relative or absolute path. During the KCL parsing process, the relative import will be replaced by absolute import and the corresponding KCL code will be found through the package path."),(0,i.kt)("h3",{id:"relative-import-path"},"Relative Import Path"),(0,i.kt)("p",null,"We can use the operator ",(0,i.kt)("inlineCode",{parentName:"p"},".")," to realize the relative path import of KCL entry files."),(0,i.kt)("p",null,"main.k:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import .model1  # Current directory module\nimport ..service  # Parent directory\nimport ...root  # Parent of parent directory\n\ns = service.ImageService {}\nm = root.Schema {}\n")),(0,i.kt)("h3",{id:"absolute-import-path"},"Absolute Import Path"),(0,i.kt)("p",null,"The semantics of ",(0,i.kt)("inlineCode",{parentName:"p"},"import a.b.c.d")," is"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"kcl.mod")," not exist, regard the current directory as the package root and search the path ",(0,i.kt)("inlineCode",{parentName:"li"},"a/b/c/d")," from the current directory."),(0,i.kt)("li",{parentName:"ol"},"If the current directory search fails, search from the root path ",(0,i.kt)("inlineCode",{parentName:"li"},"ROOT_PATH/a/b/c/d"),", else raise an import error.")),(0,i.kt)("p",null,"The definition of the root path ",(0,i.kt)("inlineCode",{parentName:"p"},"ROOT_PATH")," is the directory corresponding to the ",(0,i.kt)("inlineCode",{parentName:"p"},"kcl.mod")," file from the current directory."),(0,i.kt)("p",null,"Code structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},". \n\u2514\u2500\u2500 root\n    \u251c\u2500\u2500 kcl.mod\n    \u251c\u2500\u2500 model\n    \u2502   \u251c\u2500\u2500 model1.k\n    |   \u251c\u2500\u2500 model2.k\n    \u2502   \u2514\u2500\u2500 main.k\n    \u251c\u2500\u2500 service\n    \u2502   \u2514\u2500\u2500 service1.k\n    \u2514\u2500\u2500 mixin\n        \u2514\u2500\u2500 mixin1.k\n")),(0,i.kt)("h3",{id:"builtin-package"},"Builtin Package"),(0,i.kt)("p",null,"KCL has a collection of builtin packages such as ",(0,i.kt)("inlineCode",{parentName:"p"},"math"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"regex"),", etc. To use a builtin package, import it directly and invoke the functions using its qualified identifier. For instance,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import regex\n\nimage = "nginx:1.14.2"\nis_match = regex.match(image, "^[a-zA-Z]+:\\d+\\.\\d+\\.\\d+$")\n\n')),(0,i.kt)("p",null,"The output YAML is"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"image: nginx:1.14.2\nis_match: true\n")),(0,i.kt)("h3",{id:"plugin-package"},"Plugin Package"),(0,i.kt)("p",null,"KCL also has a collection of plugin packages such as ",(0,i.kt)("inlineCode",{parentName:"p"},"hello"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"project_context"),", etc. To use a plugin package, import it with a ",(0,i.kt)("inlineCode",{parentName:"p"},"kcl_plugin.")," package path prefix and invoke the functions using its qualified identifier. For instance,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import kcl_plugin.hello\n\nresult = hello.add(1, 1)\n")),(0,i.kt)("p",null,"The output YAML is"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"result: 2\n")),(0,i.kt)("h3",{id:"main-package"},"Main Package"),(0,i.kt)("p",null,"In KCL, the composition of the main package is usually determined by the compiler parameters. This is because the KCL schema and constraints can be split across files in the package, or even organized across directories, considering the convenience of writing and maintaining the configuration in isolated blocks."),(0,i.kt)("h4",{id:"files-belonging-to-a-main-package"},"Files belonging to a main package"),(0,i.kt)("p",null,"It is up to the user to decide which configurations and constraints to use using the KCL command line. For example,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kcl file1.k file2.k\n")),(0,i.kt)("p",null,"Thus, the main package contains two KCL files named ",(0,i.kt)("inlineCode",{parentName:"p"},"file1.k")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"file2.k"),"."),(0,i.kt)("p",null,"If KCL is told to load the files for a specific directory, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kcl ./path/to/package\n")),(0,i.kt)("p",null,"It will only look KCL files with ",(0,i.kt)("inlineCode",{parentName:"p"},".k")," suffix and ignore files with ",(0,i.kt)("inlineCode",{parentName:"p"},"_")," prefix or ",(0,i.kt)("inlineCode",{parentName:"p"},"_test.k")," into the main package. Besides, if the ",(0,i.kt)("inlineCode",{parentName:"p"},"./path/to/package")," contains ",(0,i.kt)("inlineCode",{parentName:"p"},"kcl.yaml")," files, ",(0,i.kt)("inlineCode",{parentName:"p"},"kcl.yaml")," files be ignored."),(0,i.kt)("p",null,"In addition, we can set main package files through configuring the command-line compilation setting file (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"kcl.yaml"),") as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"kcl_cli_configs:\n  files:\n    - file1.k\n    - file2.k\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kcl -Y kcl.yaml\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: If we do not specify any input files for KCL, KCL will find the default ",(0,i.kt)("inlineCode",{parentName:"p"},"kcl.yaml")," from the command line execution path to read the input file. Besides, if we tell KCL both the input files and the compilation setting file, KCL will take input files entered by the user as the final value.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# Whether the \'files\' field is configured in `kcl.yaml` or not, the final value of input files is ["file1.k", "file2.k"]\nkcl -Y kcl.yaml file1.k file2.k\n')),(0,i.kt)("h2",{id:"the-relationship-and-difference-between-kclmod-and-kclyaml"},"The relationship and difference between ",(0,i.kt)("inlineCode",{parentName:"h2"},"kcl.mod")," and ",(0,i.kt)("inlineCode",{parentName:"h2"},"kcl.yaml")),(0,i.kt)("p",null,"First of all, in KCL, ",(0,i.kt)("inlineCode",{parentName:"p"},"kcl.mod")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"kcl.yaml")," are both optional. The difference is that ",(0,i.kt)("inlineCode",{parentName:"p"},"kcl.mod")," determines the root path of the package path and whether a KCL module has the requirement of distribution and reuse, and ",(0,i.kt)("inlineCode",{parentName:"p"},"kcl.yaml")," determines the KCL file composition of the main package."),(0,i.kt)("p",null,"Secondly, for a kcl module for external use only, ",(0,i.kt)("inlineCode",{parentName:"p"},"kcl.yaml")," is optional but ",(0,i.kt)("inlineCode",{parentName:"p"},"kcl.mod")," is required, because it needs to declare the KCL version, module version, dependency and other information."),(0,i.kt)("p",null,"Finally, for the KCL IDE plug-in, it needs to know the main package information to form a complete compilation process, so it needs to automatically look up the composition of the main package according to the position of the cursor, because no one can specify this information through the KCL command line. The general query logic is to find whether ",(0,i.kt)("inlineCode",{parentName:"p"},"kcl.yaml")," exists. If it is found, the main package consists of the ",(0,i.kt)("inlineCode",{parentName:"p"},"files")," attribute in ",(0,i.kt)("inlineCode",{parentName:"p"},"kcl.yaml"),", and if not found, the main package consists of the current file. The KCL IDE plug-in is selectively aware of the ",(0,i.kt)("inlineCode",{parentName:"p"},"kcl.mod")," file. When the ",(0,i.kt)("inlineCode",{parentName:"p"},"kcl.mod")," file exists, the IDE plug-in reads the corresponding information of all package paths and their real paths in the external dependencies."))}m.isMDXComponent=!0}}]);