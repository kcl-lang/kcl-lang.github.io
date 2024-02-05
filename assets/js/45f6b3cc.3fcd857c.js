"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[78794],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,g=m["".concat(s,".").concat(u)]||m[u]||c[u]||r;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},94882:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={title:"Automation",sidebar_position:6},o=void 0,l={unversionedId:"user_docs/guides/automation",id:"version-0.4.5/user_docs/guides/automation",title:"Automation",description:"KCL provides many automation related capabilities, mainly including tools and multilingual APIs. Via packageidentifier : keyidentifier mode, KCL supports the indexing of any configured key value, thus completing the addition, deletion, modification and query of any key value. For example, the following figure shows that we can directly execute the following command to modify the image. The code diff before and after modification is also shown in the figure.",source:"@site/versioned_docs/version-0.4.5/user_docs/guides/automation.md",sourceDirName:"user_docs/guides",slug:"/user_docs/guides/automation",permalink:"/docs/0.4.5/user_docs/guides/automation",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.4.5/user_docs/guides/automation.md",tags:[],version:"0.4.5",lastUpdatedBy:"peefy",lastUpdatedAt:1707103391,formattedLastUpdatedAt:"Feb 5, 2024",sidebarPosition:6,frontMatter:{title:"Automation",sidebar_position:6},sidebar:"user_docs",previous:{title:"Data Integration",permalink:"/docs/0.4.5/user_docs/guides/data-integration"},next:{title:"Kubernetes",permalink:"/docs/0.4.5/user_docs/guides/working-with-k8s/"}},s={},p=[{value:"Examples",id:"examples",level:2},{value:"Override Update Sample",id:"override-update-sample",level:3},{value:"Override Delete Sample",id:"override-delete-sample",level:3},{value:"API",id:"api",level:3}],d={toc:p},m="wrapper";function c(e){let{components:t,...r}=e;return(0,i.kt)(m,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"KCL provides many automation related capabilities, mainly including tools and multilingual APIs. Via ",(0,i.kt)("inlineCode",{parentName:"p"},"package_identifier : key_identifier")," mode, KCL supports the indexing of any configured key value, thus completing the addition, deletion, modification and query of any key value. For example, the following figure shows that we can directly execute the following command to modify the image. The code diff before and after modification is also shown in the figure."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(62787).Z,width:"1828",height:"502"})),(0,i.kt)("p",null,"In addition, the automation capability of KCL can be realized and integrated into CI/CD."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(5912).Z,width:"890",height:"247"})),(0,i.kt)("p",null,"KCL allows us to directly modify the values in the configuration model through the KCL CLI ",(0,i.kt)("inlineCode",{parentName:"p"},"-O|--overrides")," parameter. The parameter contains three parts e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"pkg"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"identifier"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"attribute")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"override_value"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kcl main.k -O override_spec\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"override_spec")," represents a unified representation of the configuration model fields and values that need to be modified")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'override_spec: [[pkgpath] ":"] identifier ("=" value | "-")\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pkgpath"),": Indicates the path of the package whose identifier needs to be modified, usually in the form of ",(0,i.kt)("inlineCode",{parentName:"li"},"a.b.c"),". For the main package, ",(0,i.kt)("inlineCode",{parentName:"li"},"pkgpath")," is expressed as ",(0,i.kt)("inlineCode",{parentName:"li"},"__main__"),", which can be omitted. If omitted, it means the main package."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"identifier"),": Indicates the identifier that needs to modify the configuration, usually in the form of ",(0,i.kt)("inlineCode",{parentName:"li"},"a.b.c"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"value"),": Indicates the value of the configuration that needs to be modified, which can be any legal KCL expression, such as number/string literal value, list/dict/schema expression, etc."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"="),": means to modify the value of identifier.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"When the identifier exists, modify the value of the existing identifier to value."),(0,i.kt)("li",{parentName:"ul"},"When identifier does not exist, add the identifier attribute and set its value to value."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-"),": means to delete the identifier attribute.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"When the identifier exists, delete it directly."),(0,i.kt)("li",{parentName:"ul"},"When the identifier does not exist, no modification is made to the configuration.")))),(0,i.kt)("p",null,"Note: When ",(0,i.kt)("inlineCode",{parentName:"p"},"identifier")," appears multiple times, modify/delete all ",(0,i.kt)("inlineCode",{parentName:"p"},"identifier")," values"),(0,i.kt)("p",null,"Besides, we provide ",(0,i.kt)("inlineCode",{parentName:"p"},"OverrideFile")," API to achieve the same capabilities. For details, refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/xlang-api/"},"KCL APIs"),"."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"override-update-sample"},"Override Update Sample"),(0,i.kt)("p",null,"KCL code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'schema Person:\n    name: str\n    age: int\n\nperson = Person {\n    name = "Alice"\n    age = 18\n}\n')),(0,i.kt)("p",null,"The command is"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'kcl main.k -O :person.name=\\"Bob\\" -O :person.age=10\n')),(0,i.kt)("p",null,"The output is"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"person:\n  name: Bob\n  age: 10\n")),(0,i.kt)("p",null,"Besides, when we use KCL CLI ",(0,i.kt)("inlineCode",{parentName:"p"},"-d")," argument, the KCL file will be modified to the following content at the same time"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'kcl main.k -O :person.name=\\"Bob\\" -O :person.age=10 -d\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'schema Person:\n    name: str\n    age: int\n\nperson = Person {\n    name = "Bob"\n    age = 10\n}\n')),(0,i.kt)("p",null,"Another more complicated example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'schema Person:\n    name: str\n    age: int\n    ids?: [int]\n\nperson = Person {\n    name = "Alice"\n    age = 10\n}\n')),(0,i.kt)("p",null,"The command is"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kcl main.k -O :person.ids=\\[1,2\\]\n")),(0,i.kt)("p",null,"The output is"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"person:\n  name: Alice\n  age: 10\n  ids:\n    - 1\n    - 2\n")),(0,i.kt)("h3",{id:"override-delete-sample"},"Override Delete Sample"),(0,i.kt)("p",null,"KCL code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'schema Config:\n    x?: int = 1\n    y?: str = "s"\n\nconfig = Config {\n    x = 2\n}\n')),(0,i.kt)("p",null,"The command is"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kcl main.k -O config.x-\n")),(0,i.kt)("p",null,"The output is"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"config:\n  x: 1\n  y: s\n")),(0,i.kt)("h3",{id:"api"},"API"),(0,i.kt)("p",null,"In addition, we can automatically modify the configuration attributes through the ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/xlang-api/overview"},"multilingual API"),"."),(0,i.kt)("p",null,"Take the following KCL code fragment (main.k) and RestAPI as an example."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import regex\n\nschema AppConfig:\n    image: str\n\n    check:\n        regex.match(image, r"^([a-z0-9\\.\\:]+)\\.([a-z]+)\\:([a-z0-9]+)\\/([a-z0-9\\.]+)\\/([a-z0-9-_.:]+)$"), "image name should satisfy the \\`REPOSITORY:TAG\\` form"\n\nappConfig = AppConfig {\n    image = "nginx:1.13.9"\n}\n')),(0,i.kt)("p",null,"The RestAPI service can be started in the following way:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'kclvm -m gunicorn "kclvm.program.rpc-server.__main__:create_app()" -t 120 -w 4 -k uvicorn.workers.UvicornWorker -b :2021\n')),(0,i.kt)("p",null,"The service can then be requested via the POST protocol:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST http://127.0.0.1:2021/api:protorpc/KclvmService.OverrideFile -H \'content-type: accept/json\' -d \'{\n    "file": "main.k",\n    "specs": ["appConfig.image=\\"nginx:1.14.0\\""]\n}\'\n')),(0,i.kt)("p",null,"After the service call is completed, main.k will be modified as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import regex\n\nschema AppConfig:\n    image: str\n\n    check:\n        regex.match(image, r"^([a-z0-9\\.\\:]+)\\.([a-z]+)\\:([a-z0-9]+)\\/([a-z0-9\\.]+)\\/([a-z0-9-_.:]+)$"), "image name should satisfy the \\`REPOSITORY:TAG\\` form"\n\nappConfig = AppConfig {\n    image = "nginx:1.14.0"\n}\n')))}c.isMDXComponent=!0},62787:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/14-kcl-image-update-de385287fb7173d5825bdb00bd85c6c0.png"},5912:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/15-kcl-automation-e3e81ff935a111c098153bae5bf5b34e.png"}}]);