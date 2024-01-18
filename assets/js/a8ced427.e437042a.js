"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[55589],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=i,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(k,r(r({ref:t},u),{},{components:n})):a.createElement(k,r({ref:t},u))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42309:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const o={title:"Automation",sidebar_position:6},r=void 0,l={unversionedId:"user_docs/guides/automation",id:"version-0.4.6/user_docs/guides/automation",title:"Automation",description:"Introduction",source:"@site/versioned_docs/version-0.4.6/user_docs/guides/automation.md",sourceDirName:"user_docs/guides",slug:"/user_docs/guides/automation",permalink:"/docs/0.4.6/user_docs/guides/automation",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.4.6/user_docs/guides/automation.md",tags:[],version:"0.4.6",lastUpdatedBy:"Peefy",lastUpdatedAt:1705584615,formattedLastUpdatedAt:"Jan 18, 2024",sidebarPosition:6,frontMatter:{title:"Automation",sidebar_position:6},sidebar:"user_docs",previous:{title:"Data Integration",permalink:"/docs/0.4.6/user_docs/guides/data-integration"},next:{title:"Overview",permalink:"/docs/0.4.6/user_docs/guides/package-management/overview"}},p={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Use KCL for Automation",id:"use-kcl-for-automation",level:2},{value:"1. Get the Example",id:"1-get-the-example",level:3},{value:"2. Use KCL CLI for Automation",id:"2-use-kcl-cli-for-automation",level:3},{value:"Override Configuration",id:"override-configuration",level:4},{value:"Delete Configuration",id:"delete-configuration",level:4},{value:"3. Use KCL API for Automation",id:"3-use-kcl-api-for-automation",level:3},{value:"Summary",id:"summary",level:2}],u={toc:s},c="wrapper";function d(e){let{components:t,...o}=e;return(0,i.kt)(c,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"KCL provides many automation related capabilities, mainly including tools and multilingual APIs. Via ",(0,i.kt)("inlineCode",{parentName:"p"},"package_identifier : key_identifier")," mode, KCL supports the indexing of any configured key value, thus completing the addition, deletion, modification and query of any key value. For example, the following figure shows that we can directly execute the following command to modify the image. The code diff before and after modification is also shown in the figure."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(62787).Z,width:"1828",height:"502"})),(0,i.kt)("p",null,"In addition, the automation capability of KCL can be realized and integrated into CI/CD."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(5912).Z,width:"890",height:"247"})),(0,i.kt)("h2",{id:"use-kcl-for-automation"},"Use KCL for Automation"),(0,i.kt)("h3",{id:"1-get-the-example"},"1. Get the Example"),(0,i.kt)("p",null,"Firstly, let's get the example."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/kcl-lang/kcl-lang.io.git/\ncd ./kcl-lang.io/examples/automation\n")),(0,i.kt)("p",null,"We can run the following command to show the config."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cat main.k\n")),(0,i.kt)("p",null,"The output is"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'schema App:\n    """The application model."""\n    name: str\n    replicas: int\n    labels?: {str:str} = {app = name}\n\napp: App {\n    name = "app"\n    replicas = 1\n    labels.key = "value"\n}\n')),(0,i.kt)("p",null,"We can run the command to get the config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kcl main.k\n")),(0,i.kt)("p",null,"The output is"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"app:\n  name: app\n  replicas: 1\n  labels:\n    app: app\n    key: value\n")),(0,i.kt)("h3",{id:"2-use-kcl-cli-for-automation"},"2. Use KCL CLI for Automation"),(0,i.kt)("p",null,"KCL allows us to directly modify the values in the configuration model through the KCL CLI ",(0,i.kt)("inlineCode",{parentName:"p"},"-O|--overrides")," parameter. The parameter contains three parts e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"pkg"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"identifier"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"attribute")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"override_value"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kcl main.k -O override_spec\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"override_spec")," represents a unified representation of the configuration model fields and values that need to be modified")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'override_spec: [[pkgpath] ":"] identifier ("=" value | "-")\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pkgpath"),": indicates the package path where the identifier needs to be modified, usually in the form of ",(0,i.kt)("inlineCode",{parentName:"li"},"a.b.c"),". For the main package,",(0,i.kt)("inlineCode",{parentName:"li"},"pkgpath")," is represented as ",(0,i.kt)("inlineCode",{parentName:"li"},"__ main__"),". When omitted or not written, it indicates the main package"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"identifier")," indicates the identifier that needs to modify the configuration, usually in the form of ",(0,i.kt)("inlineCode",{parentName:"li"},"a.b.c"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"value")," indicates the value of the configuration that needs to be modified, which can be any legal KCL expression, such as number/string literal value, list/dict/schema expression, etc."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"=")," denotes modifying of the value of the identifier."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," denotes deleting of the identifier.")),(0,i.kt)("h4",{id:"override-configuration"},"Override Configuration"),(0,i.kt)("p",null,"Run the command to update the application name."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kcl main.k -O app.name='new_app'\n")),(0,i.kt)("p",null,"The output is"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"app:\n  name: new_app\n  replicas: 1\n  labels:\n    app: new_app\n    key: value\n")),(0,i.kt)("p",null,"We can see the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," attribute of the ",(0,i.kt)("inlineCode",{parentName:"p"},"app")," config is updated to ",(0,i.kt)("inlineCode",{parentName:"p"},"new_app"),"."),(0,i.kt)("p",null,"Besides, when we use KCL CLI ",(0,i.kt)("inlineCode",{parentName:"p"},"-d")," argument, the KCL file will be modified to the following content at the same time."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kcl main.k -O app.name='new_app' -d\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'schema App:\n    """The application model."""\n    name: str\n    replicas: int\n    labels?: {str:str} = {app = name}\n\napp: App {\n    name = "new_app"\n    replicas = 1\n    labels: {key = "value"}\n}\n')),(0,i.kt)("h4",{id:"delete-configuration"},"Delete Configuration"),(0,i.kt)("p",null,"Run the command to delete the ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," attribute of ",(0,i.kt)("inlineCode",{parentName:"p"},"labels"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kcl main.k -O app.labels.key-\n")),(0,i.kt)("p",null,"The output is"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"app:\n  name: app\n  replicas: 1\n  labels:\n    app: app\n")),(0,i.kt)("h3",{id:"3-use-kcl-api-for-automation"},"3. Use KCL API for Automation"),(0,i.kt)("p",null,"In addition, we can automatically modify the configuration attributes through the ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/xlang-api/overview"},"multilingual API"),"."),(0,i.kt)("p",null,"Take the RestAPI as an example. The RestAPI service can be started in the following way:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'python3 -m pip install kclvm -U\npython3 -m gunicorn "kclvm.program.rpc-server.__main__:create_app()" -t 120 -w 4 -k uvicorn.workers.UvicornWorker -b :2021\n')),(0,i.kt)("p",null,"The service can then be requested via the POST protocol:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST http://127.0.0.1:2021/api:protorpc/KclvmService.OverrideFile -H \'content-type: accept/json\' -d \'{\n    "file": "main.k",\n    "specs": ["app.name=\\"nginx\\""]\n}\'\n')),(0,i.kt)("p",null,"After the service call is completed, main.k will be modified as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'schema App:\n    """The application model."""\n    name: str\n    replicas: int\n    labels?: {str:str} = {app = name}\n\napp: App {\n    name = "nginx"\n    replicas = 1\n    labels: {\n        "key" = "value"\n    }\n}\n')),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"The document introduces the automation capabilities of KCL, including tools and multilingual APIs. It supports indexing of any configured key value, allowing for the addition, deletion, modification, and querying of any key value. It can also be integrated into CI/CD. The document provides an example of using KCL to automate configuration management, including using the KCL CLI to override and delete configurations, and using the KCL API to modify configuration attributes. For more information about KCL automation and Override API, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/lang/tour#kcl-cli-variable-override"},"here"),"."))}d.isMDXComponent=!0},62787:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/14-kcl-image-update-de385287fb7173d5825bdb00bd85c6c0.png"},5912:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/15-kcl-automation-e3e81ff935a111c098153bae5bf5b34e.png"}}]);