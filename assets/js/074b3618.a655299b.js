"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[71991],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=i.createContext({}),s=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(d.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),c=a,f=u["".concat(d,".").concat(c)]||u[c]||m[c]||r;return n?i.createElement(f,o(o({ref:t},p),{},{components:n})):i.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},83811:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var i=n(87462),a=(n(67294),n(3905));const r={title:"Automation",sidebar_position:6},o=void 0,l={unversionedId:"user_docs/guides/automation",id:"version-0.4.3/user_docs/guides/automation",title:"Automation",description:"KCL provides many automation related capabilities, mainly including tools and multilingual APIs. Via packageidentifier : keyidentifier mode, KCL supports the indexing of any configured key value, thus completing the addition, deletion, modification and query of any key value. For example, the following figure shows that we can directly execute the following command to modify the image. The code diff before and after modification is also shown in the figure.",source:"@site/versioned_docs/version-0.4.3/user_docs/guides/automation.md",sourceDirName:"user_docs/guides",slug:"/user_docs/guides/automation",permalink:"/docs/0.4.3/user_docs/guides/automation",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.4.3/user_docs/guides/automation.md",tags:[],version:"0.4.3",lastUpdatedBy:"peefy",lastUpdatedAt:1709797004,formattedLastUpdatedAt:"Mar 7, 2024",sidebarPosition:6,frontMatter:{title:"Automation",sidebar_position:6},sidebar:"user_docs",previous:{title:"Data Integration",permalink:"/docs/0.4.3/user_docs/guides/data-integration"},next:{title:"Kubernetes",permalink:"/docs/0.4.3/user_docs/guides/working-with-k8s/"}},d={},s=[{value:"Examples",id:"examples",level:2},{value:"Override Update Sample",id:"override-update-sample",level:3},{value:"Override Delete Sample",id:"override-delete-sample",level:3}],p={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"KCL provides many automation related capabilities, mainly including tools and multilingual APIs. Via ",(0,a.kt)("inlineCode",{parentName:"p"},"package_identifier : key_identifier")," mode, KCL supports the indexing of any configured key value, thus completing the addition, deletion, modification and query of any key value. For example, the following figure shows that we can directly execute the following command to modify the image. The code diff before and after modification is also shown in the figure."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(62787).Z,width:"1828",height:"502"})),(0,a.kt)("p",null,"In addition, the automation capability of KCL can be realized and integrated into CI/CD."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5912).Z,width:"890",height:"247"})),(0,a.kt)("p",null,"KCL allows us to directly modify the values in the configuration model through the KCL CLI ",(0,a.kt)("inlineCode",{parentName:"p"},"-O|--overrides")," parameter. The parameter contains three parts e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"pkg"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"identifier"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"attribute")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"override_value"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kcl main.k -O override_spec\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"override_spec")," represents a unified representation of the configuration model fields and values that need to be modified")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'override_spec: [[pkgpath] ":"] identifier ("=" value | "-")\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pkgpath"),": Indicates the path of the package whose identifier needs to be modified, usually in the form of ",(0,a.kt)("inlineCode",{parentName:"li"},"a.b.c"),". For the main package, ",(0,a.kt)("inlineCode",{parentName:"li"},"pkgpath")," is expressed as ",(0,a.kt)("inlineCode",{parentName:"li"},"__main__"),", which can be omitted. If omitted, it means the main package."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"identifier"),": Indicates the identifier that needs to modify the configuration, usually in the form of ",(0,a.kt)("inlineCode",{parentName:"li"},"a.b.c"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"value"),": Indicates the value of the configuration that needs to be modified, which can be any legal KCL expression, such as number/string literal value, list/dict/schema expression, etc."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"="),": means to modify the value of identifier.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"When the identifier exists, modify the value of the existing identifier to value."),(0,a.kt)("li",{parentName:"ul"},"When identifier does not exist, add the identifier attribute and set its value to value."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-"),": means to delete the identifier attribute.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"When the identifier exists, delete it directly."),(0,a.kt)("li",{parentName:"ul"},"When the identifier does not exist, no modification is made to the configuration.")))),(0,a.kt)("p",null,"Note: When ",(0,a.kt)("inlineCode",{parentName:"p"},"identifier")," appears multiple times, modify/delete all ",(0,a.kt)("inlineCode",{parentName:"p"},"identifier")," values"),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"override-update-sample"},"Override Update Sample"),(0,a.kt)("p",null,"KCL code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'schema Person:\n    name: str\n    age: int\n\nperson = Person {\n    name = "Alice"\n    age = 18\n}\n')),(0,a.kt)("p",null,"The command is"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'kcl main.k -O :person.name=\\"Bob\\" -O :person.age=10\n')),(0,a.kt)("p",null,"The output is"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"person:\n  name: Bob\n  age: 10\n")),(0,a.kt)("p",null,"Besides, when we use KCL CLI ",(0,a.kt)("inlineCode",{parentName:"p"},"-d")," argument, the KCL file will be modified to the following content at the same time"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'kcl main.k -O :person.name=\\"Bob\\" -O :person.age=10 -d\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'schema Person:\n    name: str\n    age: int\n\nperson = Person {\n    name = "Bob"\n    age = 10\n}\n')),(0,a.kt)("p",null,"Another more complicated example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'schema Person:\n    name: str\n    age: int\n    ids?: [int]\n\nperson = Person {\n    name = "Alice"\n    age = 10\n}\n')),(0,a.kt)("p",null,"The command is"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kcl main.k -O :person.ids=\\[1,2\\]\n")),(0,a.kt)("p",null,"The output is"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"person:\n  name: Alice\n  age: 10\n  ids:\n    - 1\n    - 2\n")),(0,a.kt)("h3",{id:"override-delete-sample"},"Override Delete Sample"),(0,a.kt)("p",null,"KCL code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'schema Config:\n    x?: int = 1\n    y?: str = "s"\n\nconfig = Config {\n    x = 2\n}\n')),(0,a.kt)("p",null,"The command is"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kcl main.k -O config.x-\n")),(0,a.kt)("p",null,"The output is"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"config:\n  x: 1\n  y: s\n")))}m.isMDXComponent=!0},62787:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/14-kcl-image-update-de385287fb7173d5825bdb00bd85c6c0.png"},5912:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/15-kcl-automation-e3e81ff935a111c098153bae5bf5b34e.png"}}]);