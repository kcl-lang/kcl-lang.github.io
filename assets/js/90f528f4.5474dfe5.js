"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[3061],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(g,r(r({ref:t},c),{},{components:n})):a.createElement(g,r({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85460:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const i={slug:"2022-kcl-0.5.0-release-blog",title:"KCL v0.5.0 Release Blog",authors:{name:"KCL Team",title:"KCL Team"},tags:["Release Blog","KCL"]},r=void 0,l={permalink:"/blog/2022-kcl-0.5.0-release-blog",editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/blog/2023-07-14-kcl-0.5.0-release/index.md",source:"@site/blog/2023-07-14-kcl-0.5.0-release/index.md",title:"KCL v0.5.0 Release Blog",description:"Introduction",date:"2023-07-14T00:00:00.000Z",formattedDate:"July 14, 2023",tags:[{label:"Release Blog",permalink:"/blog/tags/release-blog"},{label:"KCL",permalink:"/blog/tags/kcl"}],readingTime:12.21,hasTruncateMarker:!1,authors:[{name:"KCL Team",title:"KCL Team"}],frontMatter:{slug:"2022-kcl-0.5.0-release-blog",title:"KCL v0.5.0 Release Blog",authors:{name:"KCL Team",title:"KCL Team"},tags:["Release Blog","KCL"]},prevItem:{title:"KCL Introduction Slides",permalink:"/blog/2023-07-18-kcl-intro-slides"},nextItem:{title:"Rewrite KCL LSP in Rust",permalink:"/blog/2023/07/10/kcl-LSP"}},s={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"Language",id:"language",level:2},{value:"Top-level Variable Output",id:"top-level-variable-output",level:3},{value:"Index Signature",id:"index-signature",level:3},{value:"Runtime Backtrace Output",id:"runtime-backtrace-output",level:3},{value:"Bugfix",id:"bugfix",level:3},{value:"Type Error in Filter Expressions",id:"type-error-in-filter-expressions",level:4},{value:"Lambda Closure Error",id:"lambda-closure-error",level:4},{value:"String Literal Union Type Error Containing UTF-8 Characters",id:"string-literal-union-type-error-containing-utf-8-characters",level:4},{value:"Tools &amp; IDE",id:"tools--ide",level:2},{value:"KCL OpenAPI Tool",id:"kcl-openapi-tool",level:3},{value:"Kubernetes KCL Package Conversion Optimization",id:"kubernetes-kcl-package-conversion-optimization",level:4},{value:"Bugfix",id:"bugfix-1",level:4},{value:"Package Management Tool",id:"package-management-tool",level:3},{value:"Managing KCL Programs through the kpm Tool",id:"managing-kcl-programs-through-the-kpm-tool",level:4},{value:"OCI Registry",id:"oci-registry",level:4},{value:"Integrations",id:"integrations",level:2},{value:"CI Integrations",id:"ci-integrations",level:3},{value:"CD Integrations",id:"cd-integrations",level:3},{value:"Kubernetes Configuration Management Tool Plugin",id:"kubernetes-configuration-management-tool-plugin",level:3},{value:"Other Updates and Bug Fixes",id:"other-updates-and-bug-fixes",level:2},{value:"Documents",id:"documents",level:2},{value:"Community",id:"community",level:2},{value:"Next",id:"next",level:2},{value:"FAQ",id:"faq",level:2},{value:"Additional Resources",id:"additional-resources",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"The KCL team is pleased to announce that KCL v0.5.0 is now available! This release has brought three key updates to everyone: ",(0,o.kt)("strong",{parentName:"p"},"Language"),", ",(0,o.kt)("strong",{parentName:"p"},"Tools"),", and ",(0,o.kt)("strong",{parentName:"p"},"Integrations"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Use KCL language and IDE with more complete features and fewer errors to improve code writing experience and efficiency.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Use KPM, KCL OpenAPI, OCI Registry and other tools to directly use and share your cloud native domain models, reducing learning and hands-on costs.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Using community tools such as Github Action, ArgoCD, and Kubectl KCL plugins to integrate and extend support to improve automation efficiency."))),(0,o.kt)("p",null,"You can visit the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl/releases/tag/v0.5.0"},"KCL release page")," or the ",(0,o.kt)("a",{parentName:"p",href:"https://kcl-lang.io/"},"KCL website")," to get KCL binary download link and more detailed release information."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl"},"KCL")," is an open-source, constraint-based record and functional language. KCL improves the writing of numerous complex configurations, such as cloud-native scenarios, through its mature programming language technology and practice. It is dedicated to building better modularity, scalability, and stability around configurations, simpler logic writing, faster automation, and great built-in or API-driven integrations."),(0,o.kt)("p",null,"This blog will introduce the content of KCL v0.5.0 and recent developments in the KCL community to readers."),(0,o.kt)("h2",{id:"language"},"Language"),(0,o.kt)("h3",{id:"top-level-variable-output"},"Top-level Variable Output"),(0,o.kt)("p",null,"In previous versions of KCL, running the following KCL code will not output YAML. In KCL v0.5.0, we improved this and supported exporting top-level variables to YAML configuration to reduce additional KCL code and command-line parameters, such as for the following KCL code (main.k)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'schema Nginx:\n    http: Http\n\nschema Http:\n    server: Server\n\nschema Server:\n    listen: int | str\n    location?: Location\n\nschema Location:\n    root: str\n    index: str\n\nNginx {  # Nginx will be output\n    http.server = {\n        listen = 80\n        location = {\n            root = "/var/www/html"\n            index = "index.html"\n        }\n    }\n}\n')),(0,o.kt)("p",null,"In the new version, running KCL code can directly obtain the following output"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"$ kcl main.k\nhttp:\n  server:\n    listen: 80\n    location:\n      root: /var/www/html\n      index: index.html\n")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl/pull/556"},"here")," for more."),(0,o.kt)("h3",{id:"index-signature"},"Index Signature"),(0,o.kt)("p",null,"In previous versions of KCL, running the KCL command-line tool once only displayed one error message and warning. In KCL v0.5.0, it supported the ability to display multiple errors and warnings in one compilation and improved error information to improve the efficiency of KCL code error troubleshooting, such as for the following KCL code (main.k)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'schema TeamSpec:\n    fullName: str\n    name = id\n    shortName: str = name\n\nschema TeamMap:\n    [n: str]: TeamSpec = TeamSpec {\n        name = n  # n is the schema index signature key alias, we can use it directly\n    }\n\nteamMap = TeamMap {\n    a.fullName = "alpha"\n    b.fullName = "bravo"\n}\n')),(0,o.kt)("p",null,"In the new version, running KCL code can directly obtain the following output."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kcl main.k\nteamMap:\n  b:\n    fullName: bravo\n    name: b\n    shortName: b\n  a:\n    fullName: alpha\n    name: a\n    shortName: a\n")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl/pull/582"},"here")," for more."),(0,o.kt)("h3",{id:"runtime-backtrace-output"},"Runtime Backtrace Output"),(0,o.kt)("p",null,"In previous versions of KCL, when writing the following KCL code, the two schema configurations with the same name were merged and output. In KCL v0.5.0, it was required to explicitly use the attribute merge operator instead of the attribute overlay operator."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"schema Fib:\n    n1 = n - 1\n    n2 = n1 - 1\n    n: int\n    value: int\n\n    if n <= 1:\n        value = [][n]  # There is a index overflow runtime error.\n    elif n == 2:\n        value = 1\n    else:\n        value = Fib {n = n1}.value + Fib {n = n2}.value\n\nfib8 = Fib {n = 4}.value\n")),(0,o.kt)("p",null,"After execution, we will receive the following error message"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kcl main.k -d\nerror[E3M38]: EvaluationError\nEvaluationError\n --\x3e main.k:8\n  |\n8 |         value = [][n]  # There is a index overflow runtime error.\n  |  list index out of range: 1\n  |\nnote: backtrace:\n        1: __main__.Fib\n                at main.k:8\n        2: __main__.Fib\n                at main.k:12\n        3: __main__.Fib\n                at main.k:12\n        4: main\n                at main.k:14\n")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl/pull/528"},"here")," for more."),(0,o.kt)("h3",{id:"bugfix"},"Bugfix"),(0,o.kt)("h4",{id:"type-error-in-filter-expressions"},"Type Error in Filter Expressions"),(0,o.kt)("p",null,"Before KCL v0.5.0, filter expressions returned incorrect types (should return the type of the iterator instead of the type of the iterated object). In KCL v0.5.0, we fixed similar issues."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'schema Student:\n    name: str\n    grade: int\n\nstudents: [Student] = [\n    {name = "Alice", grade = 85}\n    {name = "Bob", grade = 70}\n]\n\nstudentsGrade70: [Student] = filter s in students {\n    s.grade == 70\n}  # Previously, we received a type mismatch error here. In KCL v0.5.0, we fixed similar issues.\n')),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl/pull/546"},"here")," for more."),(0,o.kt)("h4",{id:"lambda-closure-error"},"Lambda Closure Error"),(0,o.kt)("p",null,"In previous versions of KCL, for the following KCL code, there was an error where the ",(0,o.kt)("inlineCode",{parentName:"p"},"versions")," attribute was not assigned as expected. In KCL v0.5.0, we fixed similar issues."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"z = 1\nadd = lambda x { lambda y { x + y + z} }  # `x` is the closure of the inner lambda.\nres = add(1)(1)  # 3\n")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl/pull/548"},"here")," for more."),(0,o.kt)("h4",{id:"string-literal-union-type-error-containing-utf-8-characters"},"String Literal Union Type Error Containing UTF-8 Characters"),(0,o.kt)("p",null,"In previous versions of KCL, using string literal union type that contains UTF-8 characters resulted in an unexpected type error. In KCL v0.5.0 version, we fixed similar issues like this."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'msg: "\u65e0\u9700\u5bb9\u707e" | "\u6807\u51c6\u578b" | "\u6d41\u6c34\u578b" = "\u6d41\u6c34\u578b"\n')),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl/pull/600"},"here")," for more."),(0,o.kt)("h2",{id:"tools--ide"},"Tools & IDE"),(0,o.kt)("h3",{id:"kcl-openapi-tool"},"KCL OpenAPI Tool"),(0,o.kt)("p",null,"The kcl-openapi command-line tool supports conversion from OpenAPI Spec to KCL code. Installation can be obtained through ",(0,o.kt)("inlineCode",{parentName:"p"},"go install")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# go install\ngo install kcl-lang.io/kcl-openapi@latest\n\n# curl install (MacOS & Linux)\ncurl -fsSL https://kcl-lang.io/script/install-kcl-openapi.sh | /bin/bash\n")),(0,o.kt)("h4",{id:"kubernetes-kcl-package-conversion-optimization"},"Kubernetes KCL Package Conversion Optimization"),(0,o.kt)("p",null,"The v0.5.0 version optimizes the experience of using Kubernetes KCL packages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Built-in Kubernetes package: KCL provides out of the box KCL packages for Kubernetes 1.14-1.27 versions, which can be obtained through the package management tool ",(0,o.kt)("inlineCode",{parentName:"li"},"kpm pull k8s:<version>"),"."),(0,o.kt)("li",{parentName:"ul"},"If you need to convert other Kubernetes versions of the KCL model on your own, you can use the following preprocessing script to convert the ",(0,o.kt)("inlineCode",{parentName:"li"},"swagger.json")," file downloaded from the Kubernetes repository into the KCL package. Change 1.27 of the following command to the desired Kubernetes version.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"version=1.27\nspec_path=swagger.json\nscript_path=main.py\nwget https://raw.githubusercontent.com/kubernetes/kubernetes/release-${version}/api/openapi-spec/swagger.json -O swagger.json\nwget https://raw.githubusercontent.com/kcl-lang/kcl-openapi/main/scripts/preprocess/main.py -O main.py\npython3 ${script_path} ${spec_path} --omit-status --rename=io.k8s=k8s\nkcl-openapi generate model -f processed-${spec_path}\n")),(0,o.kt)("p",null,"The expected execution output of the script is the corresponding version of the KCL Kubernetes model, and the generated path is ",(0,o.kt)("inlineCode",{parentName:"p"},"<workspace path>/models/k8s"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ tree models/k8s\nmodels/k8s\n\u251c\u2500\u2500 api\n\u2502   \u251c\u2500\u2500 admissionregistration\n\u2502   \u2502   \u251c\u2500\u2500 v1\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 match_condition.k\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 mutating_webhook.k\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 mutating_webhook_configuration.k\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 mutating_webhook_configuration_list.k\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 rule_with_operations.k\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 service_reference.k\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 validating_webhook.k\n...\n")),(0,o.kt)("h4",{id:"bugfix-1"},"Bugfix"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Escape attribute names with the ",(0,o.kt)("inlineCode",{parentName:"li"},"-")," character as ",(0,o.kt)("inlineCode",{parentName:"li"},"_")," to comply with KCL v0.5.0 syntax, ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/kcl-lang/kcl-openapi/pull/43"},"see details")),(0,o.kt)("li",{parentName:"ul"},"Automatically recognize and set import as reference aliases to avoid reference conflicts, ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/kcl-lang/kcl-openapi/pull/45"},"see details")),(0,o.kt)("li",{parentName:"ul"},"Fix the issue of attribute description indentation in docstring, and automatically indent the internal line breaks of attribute descriptions. ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/kcl-lang/kcl-openapi/pull/46"},"See details")),(0,o.kt)("li",{parentName:"ul"},"Fix the generated reference path to be the full reference path based on the root directory of the package, ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/kcl-lang/kcl-openapi/pull/51"},"see details"))),(0,o.kt)("h3",{id:"package-management-tool"},"Package Management Tool"),(0,o.kt)("p",null,"In the new version of KCL v0.5.0, we have provided a new KCL package management tool, which allows users to access the KCL modules in the community with a few commands."),(0,o.kt)("h4",{id:"managing-kcl-programs-through-the-kpm-tool"},"Managing KCL Programs through the kpm Tool"),(0,o.kt)("p",null,"Before using kpm, it is necessary to ensure that you are currently working in a KCL package. You can use the command kpm init to create a standard KCL package."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kpm init kubernetes_demo && cd kubernetes_demo && kpm add k8s\n")),(0,o.kt)("p",null,"Write a KCL code to import the Kubernetes models (main.k)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import k8s.api.apps.v1 as apps\n\napps.Deployment {\n    metadata.name = "nginx-deployment"\n    spec = {\n        replicas = 3\n        selector.matchLabels.app = "nginx"\n        template.metadata.labels = selector.matchLabels\n        template.spec.containers = [\n            {\n                name = selector.matchLabels.app\n                image = "nginx:1.14.2"\n                ports = [\n                    {containerPort = 80}\n                ]\n            }\n        ]\n    }\n}\n')),(0,o.kt)("p",null,"By combining the ",(0,o.kt)("inlineCode",{parentName:"p"},"kpm run")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," command lines, we can directly distribute resource configurations to the cluster."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kpm run | kubectl apply -f -\n\ndeployment.apps/nginx-deployment configured\n")),(0,o.kt)("h4",{id:"oci-registry"},"OCI Registry"),(0,o.kt)("p",null,"The kpm tool supports pushing KCL packages through OCI Registry. The default OCI Registry currently provided by kpm is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/orgs/kcl-lang/packages"},"https://github.com/orgs/kcl-lang/packages"),"."),(0,o.kt)("p",null,"You can browse the KCL package you need here. We currently provide the KCL package for k8s, which supports all versions of k8s from 1.14 to 1.27. Welcome to open ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kpm/issues"},"Issues")," to co build KCL models."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/user_docs/guides/package-management/overview"},"here")," for more information about the ",(0,o.kt)("strong",{parentName:"p"},"kpm")," tool."),(0,o.kt)("h2",{id:"integrations"},"Integrations"),(0,o.kt)("h3",{id:"ci-integrations"},"CI Integrations"),(0,o.kt)("p",null,"In the new version of KCL, we have provided an example scheme of ",(0,o.kt)("strong",{parentName:"p"},"Github Actions as the CI integration"),". We hope to implement the end-to-end application development process by using containers, Continuous Integration (CI) for configuration generation, and GitOps for Continuous Deployment (CD). The overall workflow is as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Develop application code and submit it to the GitHub repository to trigger CI (using Python Flask web application as an example).")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"app",src:n(71781).Z,width:"1080",height:"492"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GitHub Actions generate container images from application code and push them to the ",(0,o.kt)("inlineCode",{parentName:"li"},"docker.io")," container registry.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"app-ci",src:n(44765).Z,width:"1080",height:"498"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GitHub Actions automatically synchronizes and updates the KCL manifest deployment file based on the version of the container image in the docker.io container registry.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"auto-update",src:n(68907).Z,width:"1080",height:"526"})),(0,o.kt)("p",null,"We can obtain the deployment manifest source code for compilation and verification, and the following YAML output will be obtained"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: flask_demo\n  labels:\n    app: flask_demo\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: flask_demo\n  template:\n    metadata:\n      labels:\n        app: flask_demo\n    spec:\n      containers:\n        - name: flask_demo\n          image: "kcllang/flask_demo:6428cff4309afc8c1c40ad180bb9cfd82546be3e"\n          ports:\n            - protocol: TCP\n              containerPort: 5000\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: flask_demo\n  labels:\n    app: flask_demo\nspec:\n  type: NodePort\n  selector:\n    app: flask_demo\n  ports:\n    - port: 5000\n      protocol: TCP\n      targetPort: 5000\n')),(0,o.kt)("p",null,"From the above configuration, it can be seen that the image of the resource is indeed automatically updated to the newly constructed image content. In addition, we can also use the Argo CD KCL plugin to automatically synchronize data from the Git repository and deploy the application to the Kubernetes cluster."),(0,o.kt)("p",null,"For more details, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/user_docs/guides/ci-integration/github-actions"},"here")),(0,o.kt)("h3",{id:"cd-integrations"},"CD Integrations"),(0,o.kt)("p",null,"In addition, we also provide ",(0,o.kt)("strong",{parentName:"p"},"ArgoCD as an example solution for CD integration"),". Through Github Action CI integration and ArgoCD KCL plugin, we can complete end-to-end GitOps workflow, improve application configuration automatic change and deployment efficiency. The following is an overview and synchronization of Kubernetes configuration using ArgoCD application. By using ArgoCD's ability, when application code changes, it is automatically updated and deployed synchronously."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Application Overview"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"argocd-app",src:n(54476).Z,width:"1080",height:"512"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Configuration Synchronization"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"argocd-sync",src:n(2169).Z,width:"1080",height:"367"})),(0,o.kt)("p",null,"For more details, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/user_docs/guides/gitops/gitops-quick-start"},"here")),(0,o.kt)("h3",{id:"kubernetes-configuration-management-tool-plugin"},"Kubernetes Configuration Management Tool Plugin"),(0,o.kt)("p",null,"In KCL v0.5.0, we provide KCL plugin support for configuration management tools such as Kubectl, Helm, Kustomize, and KPT in the Kubernetes community through a unified programming interface. By writing a few lines of configuration code, we can non-invasive edit and validate existing Kustomize YAML and Helm Charts, such as modifying resource labels/annotations, injecting sidecar containers, and validate resources using KCL schema, defining your own abstract models and share them, etc."),(0,o.kt)("p",null,"Below is a detailed explanation of the integration of Kubectl tool with KCL as an example. You can click ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kubectl-kcl"},"here")," to obtain the installation of Kubectl KCL plugin."),(0,o.kt)("p",null,"First, execute the following command to obtain a configuration example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/kcl-lang/kubectl-kcl.git && cd ./kubectl-kcl/examples/\n")),(0,o.kt)("p",null,"Then execute the following command to show the configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ cat krm-kcl-abstration.yaml\napiVersion: krm.kcl.dev/v1alpha1\nkind: KCLRun\nmetadata:\n  name: web-service-abtraction\nspec:\n  params:\n    name: app\n    containers:\n      nginx:\n        image: nginx\n        ports:\n        - containerPort: 80\n    service:\n      ports:\n      - port: 80\n    labels:\n      name: app\n  source: oci://ghcr.io/kcl-lang/web-service\n")),(0,o.kt)("p",null,"In the above configuration, we used a Kubernetes web service application abstract model that has been predetermined on OCI ",(0,o.kt)("inlineCode",{parentName:"p"},"oci://ghcr.io/kcl-lang/web-service")," and configured the required configuration fields for the model through the ",(0,o.kt)("inlineCode",{parentName:"p"},"params")," field. The original Kubernetes YAML output can be obtained and applied by executing the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl kcl apply -f krm-kcl-abstration.yaml\n\ndeployment.apps/app created\nservice/app created\n")),(0,o.kt)("p",null,"More detailed introductions and use cases of Kubernetes configuration management tools can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/krm-kcl/tree/main/examples"},"here")),(0,o.kt)("p",null,"At present, the integration of Kubernetes configuration management tools supported by KCL is still in its early stages. If you have more ideas and requirements, welcome to open issues to discuss."),(0,o.kt)("h2",{id:"other-updates-and-bug-fixes"},"Other Updates and Bug Fixes"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl/compare/v0.4.6...v0.5.0"},"here")," for more updates and bug fixes."),(0,o.kt)("h2",{id:"documents"},"Documents"),(0,o.kt)("p",null,"The versioning semantic option is added to the ",(0,o.kt)("a",{parentName:"p",href:"https://kcl-lang.io/"},"KCL website"),". Currently, v0.4.3, v0.4.4, v0.4.5, v0.4.6 and v0.5.0 versions are supported."),(0,o.kt)("h2",{id:"community"},"Community"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Thank @harri2012 for his first contribution to the KCL IDE plugin \ud83d\ude4c"),(0,o.kt)("li",{parentName:"ul"},"Thank @niconical for his contribution to the KCL command line basic code and CI/CD scripts \ud83d\ude4c"),(0,o.kt)("li",{parentName:"ul"},"Thank @Ekko for his contribution to the integration of KCL cloud native tools \ud83d\ude4c"),(0,o.kt)("li",{parentName:"ul"},'Congratulations to Junxing Zhu his successful selection into the GitLink Programming Summer Camp (GLCC) "Terraform/JsonSchema to KCL Schema" project \ud83c\udf89'),(0,o.kt)("li",{parentName:"ul"},'Congratulations to Yiming Ren on her successful selection of the topic "IDE plug-in enhancement and language server integration" in the summer of open source \ud83c\udf89'),(0,o.kt)("li",{parentName:"ul"},"We have relocated KCL 30+ repos as a whole to the new Github ",(0,o.kt)("strong",{parentName:"li"},"kcl-lang")," organization, keeping the project address in mind ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/kcl-lang"},"https://github.com/kcl-lang")," \u2764\ufe0f"),(0,o.kt)("li",{parentName:"ul"},"KCL's joining CNCF Landscape is a small encouragement and recognition from the cloud native community. The next step is to strive to join CNCF Sandbox and make more contributions to the cloud native community \ud83d\udcaa")),(0,o.kt)("h2",{id:"next"},"Next"),(0,o.kt)("p",null,"It is expected that in September 2023, we will release ",(0,o.kt)("strong",{parentName:"p"},"KCL v0.6.0"),". The expected key evolution includes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"KCL language is further improved for convenience, the user interface is continuously optimized and experience is improved, user support and pain points are solved."),(0,o.kt)("li",{parentName:"ul"},"More IDE extensions, package management tools, Kubernetes scenario integration, feature support, and user experience improvement."),(0,o.kt)("li",{parentName:"ul"},"Provide more out-of-box KCL model support for cloud-native scenarios, mainly including containers, services, computing, storage, and networks."),(0,o.kt)("li",{parentName:"ul"},"More CI/CD integrations such as Jenkins, Gitlab CI, FluxCD, etc."),(0,o.kt)("li",{parentName:"ul"},"Support ",(0,o.kt)("inlineCode",{parentName:"li"},"helmfile")," KCL plugins, directly generating, mutating, and validating Kubernetes resources through the KCL code."),(0,o.kt)("li",{parentName:"ul"},"Support for mutating and validating YAML by running KCL code through the admission controller at the Kubernetes runtime.")),(0,o.kt)("p",null,"For more details, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/community/release-policy/roadmap"},"KCL 2023 Roadmap")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl/milestone/6"},"KCL v0.6.0 Milestone"),"."),(0,o.kt)("p",null,"If you have more ideas and needs, welcome to open ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl/issues"},"Issues")," and join our community for communication as well \ud83d\ude4c \ud83d\ude4c \ud83d\ude4c"),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("p",null,"For more information, see ",(0,o.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/user_docs/support/"},"KCL FAQ"),"."),(0,o.kt)("h2",{id:"additional-resources"},"Additional Resources"),(0,o.kt)("p",null,"Thank all KCL users for their valuable feedback and suggestions during this version release. For more resources, please refer to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kcl-lang.io/"},"KCL Website")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kusionstack.io/"},"Kusion Website")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/kcl-lang/kcl"},"KCL Repo")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/kusion"},"Kusion Repo")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/konfig"},"Konfig Repo"))),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/community"},"community")," for ways to join us. \ud83d\udc4f\ud83d\udc4f\ud83d\udc4f"))}m.isMDXComponent=!0},44765:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/app-ci-94594b17db9b52918933ac683a5baa24.png"},71781:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/app-9b58ce8fdae4fc93fb73e51f1507a42c.png"},54476:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/argocd-app-e33be631832e8adb5aac927f4e407324.png"},2169:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/argocd-sync-7e3a1c0e61a74d6ded86e27558a594c5.png"},68907:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/auto-update-bf4b3f79c897171c238e83441fa8fa86.png"}}]);