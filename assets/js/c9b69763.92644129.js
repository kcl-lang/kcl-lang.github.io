"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[49567],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return t?a.createElement(h,o(o({ref:n},c),{},{components:t})):a.createElement(h,o({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},17908:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const i={title:"Schema Definition",sidebar_position:3},o=void 0,s={unversionedId:"user_docs/guides/schema-definition",id:"version-0.4.3/user_docs/guides/schema-definition",title:"Schema Definition",description:"The core scenario of KCL is write configurations and constraints. and a core feature of KCL is modeling. The keyword schema in KCL can be used to define structures and constraints, such as attribute types, default values, range check, and various other constraints. In addition, structures defined with KCL schema can be used in turn to verify implementation, validate input (JSON, YAML and other structured data) or generate code (multilingual structures, OpenAPI, and so on).",source:"@site/versioned_docs/version-0.4.3/user_docs/guides/schema-definition.md",sourceDirName:"user_docs/guides",slug:"/user_docs/guides/schema-definition",permalink:"/docs/0.4.3/user_docs/guides/schema-definition",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.4.3/user_docs/guides/schema-definition.md",tags:[],version:"0.4.3",lastUpdatedBy:"peefy",lastUpdatedAt:1710771316,formattedLastUpdatedAt:"Mar 18, 2024",sidebarPosition:3,frontMatter:{title:"Schema Definition",sidebar_position:3},sidebar:"user_docs",previous:{title:"Validation",permalink:"/docs/0.4.3/user_docs/guides/validation"},next:{title:"Data Integration",permalink:"/docs/0.4.3/user_docs/guides/data-integration"}},l={},p=[{value:"Define Structures and Constraints",id:"define-structures-and-constraints",level:2}],c={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The core scenario of KCL is write configurations and constraints. and a core feature of KCL is ",(0,r.kt)("strong",{parentName:"p"},"modeling"),". The keyword ",(0,r.kt)("inlineCode",{parentName:"p"},"schema")," in KCL can be used to define structures and constraints, such as attribute types, default values, range check, and various other constraints. In addition, structures defined with KCL schema can be used in turn to verify implementation, validate input (JSON, YAML and other structured data) or generate code (multilingual structures, OpenAPI, and so on)."),(0,r.kt)("h2",{id:"define-structures-and-constraints"},"Define Structures and Constraints"),(0,r.kt)("p",null,"For example, we have the KCL file (main.k) defined below. In it, we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"schema")," keyword to define three models ",(0,r.kt)("inlineCode",{parentName:"p"},"App"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Service")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Volume"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"App")," model has four attributes ",(0,r.kt)("inlineCode",{parentName:"p"},"domainType"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"containerPort"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"volumes")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"services"),", where"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The type of ",(0,r.kt)("inlineCode",{parentName:"li"},"domainType"),' is a string literal union type, similar to an "enumeration", which means that the value of ',(0,r.kt)("inlineCode",{parentName:"li"},"domainType")," can only take one of ",(0,r.kt)("inlineCode",{parentName:"li"},'"Standard"'),", ",(0,r.kt)("inlineCode",{parentName:"li"},'"Customized"')," and ",(0,r.kt)("inlineCode",{parentName:"li"},'"Global"'),"."),(0,r.kt)("li",{parentName:"ul"},"The type of ",(0,r.kt)("inlineCode",{parentName:"li"},"containerPort")," is an integer (",(0,r.kt)("inlineCode",{parentName:"li"},"int"),"). In addition, we use the ",(0,r.kt)("inlineCode",{parentName:"li"},"check")," keyword to define its value range from 1 to 65535."),(0,r.kt)("li",{parentName:"ul"},"The type of ",(0,r.kt)("inlineCode",{parentName:"li"},"services")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"Service")," schema list type, and we use ",(0,r.kt)("inlineCode",{parentName:"li"},"?")," to mark it as an optional attribute."),(0,r.kt)("li",{parentName:"ul"},"The type of ",(0,r.kt)("inlineCode",{parentName:"li"},"volumes")," is a ",(0,r.kt)("inlineCode",{parentName:"li"},"Volume")," schema list type, and we use ",(0,r.kt)("inlineCode",{parentName:"li"},"?")," to mark it as an optional attribute.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'schema App:\n    domainType: "Standard" | "Customized" | "Global"\n    containerPort: int\n    services?: [Service]  # `?` specifies a optional attribute\n    volumes?: [Volume]  # `?` specifies a optional attribute\n\n    check:\n        1 <= containerPort <= 65535  # `containerPort` must be in range [1, 65535]\n\nschema Service:\n    clusterIP: str\n    $type: str\n\n    check:\n        clusterIP == "None" if $type == "ClusterIP" # When `type` is "ClusterIP", `clusterIP` must be `"None"`\n\nschema Volume:\n    container: str = "*"  # The default value of `container` is "*"\n    mountPath: str\n\n    check:\n        mountPath not in ["/", "/boot", "/home", "dev", "/etc", "/root"]  # `mountPath` must not be one of the list `["/", "/boot", "/home", "dev", "/etc", "/root"]`\n\napp: App {\n    domainType = "Standard"\n    containerPort = 80\n    volumes = [\n        {\n            mountPath = "/tmp"\n        }\n    ]\n    services = [\n        {\n            clusterIP = "None"\n            $type = "ClusterIP"\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"We can get the YAML output of the ",(0,r.kt)("inlineCode",{parentName:"p"},"app")," instance by using the following command line"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kcl main.k\napp:\n  domainType: Standard\n  containerPort: 80\n  volumes:\n  - container: '*'\n    mountPath: /tmp\n  services:\n  - clusterIP: None\n    type: ClusterIP\n")),(0,r.kt)("p",null,"In addition, we can put the ",(0,r.kt)("inlineCode",{parentName:"p"},"app")," model into a separate ",(0,r.kt)("inlineCode",{parentName:"p"},"app_module.k"),", then we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," keyword in ",(0,r.kt)("inlineCode",{parentName:"p"},"main.k")," for modular management, such as the following file structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 app_module.k\n\u2514\u2500\u2500 main.k\n")),(0,r.kt)("p",null,"The content of ",(0,r.kt)("inlineCode",{parentName:"p"},"app_module.k")," is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'schema App:\n    domainType: "Standard" | "Customized" | "Global"\n    containerPort: int\n    volumes: [Volume]\n    services: [Service]\n\n    check:\n        1 <= containerPort <= 65535\n\nschema Service:\n    clusterIP: str\n    $type: str\n\n    check:\n        clusterIP == "None" if $type == "ClusterIP"\n\nschema Volume:\n    container: str = "*"  # The default value of `container` is "*"\n    mountPath: str\n\n    check:\n        mountPath not in ["/", "/boot", "/home", "dev", "/etc", "/root"]\n')),(0,r.kt)("p",null,"The content of ",(0,r.kt)("inlineCode",{parentName:"p"},"main.k")," is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import .app_module  # A relative path import\n\napp: app_module.App {\n    domainType = "Standard"\n    containerPort = 80\n    volumes = [\n        {\n            mountPath = "/tmp"\n        }\n    ]\n    services = [\n        {\n            clusterIP = "None"\n            $type = "ClusterIP"\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"We can still get the YAML output of the ",(0,r.kt)("inlineCode",{parentName:"p"},"app")," instance by using the following command line"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kcl main.k\napp:\n  domainType: Standard\n  containerPort: 80\n  volumes:\n  - container: '*'\n    mountPath: /tmp\n  services:\n  - clusterIP: None\n    type: ClusterIP\n")))}d.isMDXComponent=!0}}]);