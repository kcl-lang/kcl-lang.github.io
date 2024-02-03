"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[42180],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>g});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},k=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),m=c(n),s=l,g=m["".concat(p,".").concat(s)]||m[s]||u[s]||r;return n?a.createElement(g,o(o({ref:t},k),{},{components:n})):a.createElement(g,o({ref:t},k))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},75309:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(87462),l=(n(67294),n(3905));const r={slug:"2023-new-version-feature-interpretation-kclvm-go-feature-overview",title:"KCL \u65b0\u7248\u672c\u529f\u80fd\u89e3\u8bfb\u7cfb\u5217 - Go SDK \u529f\u80fd\u901f\u89c8\uff01",authors:{name:"KCL Team",title:"KCL Team"},tags:["KCL","kcl-go"]},o=void 0,i={permalink:"/zh-CN/blog/2023-new-version-feature-interpretation-kclvm-go-feature-overview",editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/blog/2023-04-27-new-version-feature-interpretation-kclvm-go-feature-overview/index.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2023-04-27-new-version-feature-interpretation-kclvm-go-feature-overview/index.md",title:"KCL \u65b0\u7248\u672c\u529f\u80fd\u89e3\u8bfb\u7cfb\u5217 - Go SDK \u529f\u80fd\u901f\u89c8\uff01",description:"KCL \u662f\u4ec0\u4e48\uff1f",date:"2023-04-27T00:00:00.000Z",formattedDate:"2023\u5e744\u670827\u65e5",tags:[{label:"KCL",permalink:"/zh-CN/blog/tags/kcl"},{label:"kcl-go",permalink:"/zh-CN/blog/tags/kcl-go"}],readingTime:5.84,hasTruncateMarker:!1,authors:[{name:"KCL Team",title:"KCL Team"}],frontMatter:{slug:"2023-new-version-feature-interpretation-kclvm-go-feature-overview",title:"KCL \u65b0\u7248\u672c\u529f\u80fd\u89e3\u8bfb\u7cfb\u5217 - Go SDK \u529f\u80fd\u901f\u89c8\uff01",authors:{name:"KCL Team",title:"KCL Team"},tags:["KCL","kcl-go"]},prevItem:{title:"KCL \u4e0e\u5176\u4ed6 Kubernetes \u914d\u7f6e\u7ba1\u7406\u5de5\u5177\u7684\u5f02\u540c - Kustomize \u7bc7",permalink:"/zh-CN/blog/2023-05-20-vs-kustomize"},nextItem:{title:"KCL v0.4.6 \u53d1\u5e03\u65e5\u5fd7",permalink:"/zh-CN/blog/2022-kcl-0.4.6-release-blog"}},p={authorsImageUrls:[void 0]},c=[{value:"KCL \u662f\u4ec0\u4e48\uff1f",id:"kcl-\u662f\u4ec0\u4e48",level:2},{value:"<code>KCL Go SDK</code> \u662f\u4ec0\u4e48\uff1f",id:"kcl-go-sdk-\u662f\u4ec0\u4e48",level:2},{value:"\u65b0\u7248\u672c <code>KCL Go SDK</code> \u89e3\u51b3\u4e86\u4ec0\u4e48\u95ee\u9898\uff1f",id:"\u65b0\u7248\u672c-kcl-go-sdk-\u89e3\u51b3\u4e86\u4ec0\u4e48\u95ee\u9898",level:2},{value:"\u547d\u4ee4\u884c <code>KCL Go SDK</code>\u5feb\u901f\u4f53\u9a8c",id:"\u547d\u4ee4\u884c-kcl-go-sdk\u5feb\u901f\u4f53\u9a8c",level:2},{value:"Go \u4ee3\u7801\u5982\u4f55\u96c6\u6210 KCL",id:"go-\u4ee3\u7801\u5982\u4f55\u96c6\u6210-kcl",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2},{value:"\u5176\u4ed6\u8d44\u6e90",id:"\u5176\u4ed6\u8d44\u6e90",level:2}],k={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,l.kt)(m,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"kcl-\u662f\u4ec0\u4e48"},"KCL \u662f\u4ec0\u4e48\uff1f"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl"},"KCL")," \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u57fa\u4e8e\u7ea6\u675f\u7684\u8bb0\u5f55\u53ca\u51fd\u6570\u8bed\u8a00\uff0c\u671f\u671b\u901a\u8fc7\u6210\u719f\u7684\u7f16\u7a0b\u8bed\u8a00\u6280\u672f\u548c\u5b9e\u8df5\u6765\u6539\u8fdb\u5bf9\u5927\u91cf\u7e41\u6742\u914d\u7f6e\u548c\u7b56\u7565\u7684\u7f16\u5199\uff0c\u81f4\u529b\u4e8e\u6784\u5efa\u56f4\u7ed5\u914d\u7f6e\u7684\u66f4\u597d\u7684\u6a21\u5757\u5316\u3001\u6269\u5c55\u6027\u548c\u7a33\u5b9a\u6027\uff0c\u66f4\u7b80\u5355\u7684\u903b\u8f91\u7f16\u5199\uff0c\u4ee5\u53ca\u66f4\u5feb\u7684\u81ea\u52a8\u5316\u96c6\u6210\u548c\u826f\u597d\u7684\u751f\u6001\u5ef6\u5c55\u6027\u3002"),(0,l.kt)("h2",{id:"kcl-go-sdk-\u662f\u4ec0\u4e48"},(0,l.kt)("inlineCode",{parentName:"h2"},"KCL Go SDK")," \u662f\u4ec0\u4e48\uff1f"),(0,l.kt)("p",null,"kclvm \u662f\u4e00\u4e2a KCL \u8bed\u8a00\u7684\u8fd0\u884c\u65f6\u5e93\uff0c\u5b83\u63d0\u4f9b\u4e86\u4e00\u4e2a\u4e0e KCL \u7f16\u8bd1\u5668\u4ea4\u4e92\u7684\u7f16\u7a0b\u63a5\u53e3\u3002\u5b83\u662f\u4e00\u4e2a\u5ba2\u6237\u7aef\u5e93\uff0c\u53ef\u7528\u4e8e\u5bf9 KCL\u6e90\u4ee3\u7801\u6267\u884c\u5404\u79cd\u64cd\u4f5c\uff0c\u4f8b\u5982 \u6267\u884c\u3001\u683c\u5f0f\u5316\u7b49\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"KCL Go SDK"),"\u662f kclvm \u7684 Go \u8bed\u8a00\u5305\u88c5\uff0c\u63d0\u4f9b\u4e86 Go \u8bed\u8a00\u7684 SDK\uff0c\u65b9\u4fbf\u4e86\u5728\u4e91\u539f\u751f\u73af\u5883\u4e0b KCL \u8bed\u8a00\u7684\u96c6\u6210\u3002"),(0,l.kt)("p",null,"\u76ee\u524d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"KCL Go SDK")," \u5ba2\u6237\u7aef\u6784\u5efa\u5728 kclvm json2 rpc API \u4e4b\u4e0a\uff0c\u8fd9\u610f\u5473\u7740\u5b83\u4f7f\u7528\u548c\u5176\u4ed6\u8bed\u8a00\u7684 kclvm \u5ba2\u6237\u7aef\u4f7f\u7528\u7684\u76f8\u540c API \u4e0e KCL \u6e90\u4ee3\u7801\u4ea4\u4e92\uff0c\u8fd9\u4e0e\u5176\u4ed6\u8bed\u8a00\u7684 KCL SDK \u5de5\u4f5c\u65b9\u5f0f\u7c7b\u4f3c\uff0c\u4f46\u63d0\u4f9b\u4e86\u66f4\u52a0\u53cb\u597d\u7684 Go \u8bed\u8a00\u98ce\u683c\u7684\u5305\u88c5\u3002"),(0,l.kt)("h2",{id:"\u65b0\u7248\u672c-kcl-go-sdk-\u89e3\u51b3\u4e86\u4ec0\u4e48\u95ee\u9898"},"\u65b0\u7248\u672c ",(0,l.kt)("inlineCode",{parentName:"h2"},"KCL Go SDK")," \u89e3\u51b3\u4e86\u4ec0\u4e48\u95ee\u9898\uff1f"),(0,l.kt)("p",null,"KCL \u4f5c\u4e3a\u4e00\u95e8\u914d\u7f6e\u578b\u8bed\u8a00\uff0c\u548c\u4e91\u539f\u751f\u9886\u57df\u6709\u7740\u6781\u5176\u7d27\u5bc6\u7684\u8054\u7cfb\uff0c\u800c\u53e6\u4e00\u65b9\u9762\uff0cGo \u8bed\u8a00\u5df2\u7ecf\u6210\u4e3a\u4e86\u4e91\u539f\u751f\u9886\u57df\u901a\u7528\u7f16\u7a0b\u8bed\u8a00\u7684\u4e8b\u5b9e\u6807\u51c6\u3002\u5728\u8fd9\u6837\u7684\u80cc\u666f\u4e0b\uff0c\u5f00\u53d1 KCL \u7684 Go SDK \u6765\u5b8c\u6210 KCL \u7f16\u8bd1\u5668\u4e0e Go \u8bed\u8a00\u7684\u76f4\u63a5\u4ea4\u4e92\u5c31\u6709\u4e86\u5fc5\u8981\uff0c\u8fd9\u4e5f\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"KCL Go SDK"),"\u8bde\u751f\u7684\u539f\u56e0\u3002"),(0,l.kt)("p",null,"\u6700\u521d\u7248\u672c\u7684 KCL \u7f16\u8bd1\u5668\u53ca\u8fd0\u884c\u65f6\u4f7f\u7528 python \u7f16\u5199\uff0c\u7531\u4e8e python \u8bed\u8a00\u672c\u8eab\u7684\u6027\u80fd\u95ee\u9898\u548c\u5176\u52a8\u6001\u8bed\u8a00\u7684\u7279\u6027\uff0c\u521d\u7248 KCL \u8bed\u8a00\u7684\u8fd0\u884c\u901f\u5ea6\u548c\u5b89\u5168\u6027\u90fd\u6709\u5f88\u5927\u63d0\u5347\u7a7a\u95f4\u3002\u51fa\u4e8e\u5b89\u5168\u4e0e\u6548\u7387\u95ee\u9898\u7684\u8003\u8651\uff0c\u540e\u7eed\u7248\u672c KCL \u7f16\u8bd1\u5668\u53c8\u4f7f\u7528\u4e86 rust \u8bed\u8a00\u7f16\u5199\uff0c\u56e0\u6b64\u65b0\u7248\u672c\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"KCL Go SDK"),"\u57fa\u4e8e Rust \u5b9e\u73b0\u7684 KCL \u6838\u5fc3\u8fdb\u884c\u5305\u88c5\uff0c\u53bb\u9664\u4e86 python \u4f9d\u8d56\uff0c\u7b80\u5316\u4e86\u5b89\u88c5\uff0c\u4f18\u5316\u4e86\u4f7f\u7528\u4f53\u9a8c\u3002"),(0,l.kt)("p",null,"\u65b0\u7248\u672c",(0,l.kt)("inlineCode",{parentName:"p"},"KCL Go SDK"),"\u53ef\u4ee5\u89c6\u4e3a\u4e00\u4e2a\u7eaf Go \u5305\u4f7f\u7528\uff0c\u65e0\u9700\u4efb\u4f55\u5916\u7f6e\u4f9d\u8d56\uff0c\u53ef\u4ee5\u901a\u8fc7\u4e00\u952e",(0,l.kt)("inlineCode",{parentName:"p"},"go install"),"\u5373\u53ef\u5b8c\u6210\u5b89\u88c5\u4f7f\u7528\u3002"),(0,l.kt)("h2",{id:"\u547d\u4ee4\u884c-kcl-go-sdk\u5feb\u901f\u4f53\u9a8c"},"\u547d\u4ee4\u884c ",(0,l.kt)("inlineCode",{parentName:"h2"},"KCL Go SDK"),"\u5feb\u901f\u4f53\u9a8c"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"KCL Go SDK"),"\u63d0\u4f9b\u4e86\u4e00\u4e2a\u81ea\u5e26\u7684 KCL Go \u547d\u4ee4\u884c\uff0c\u652f\u6301\u7528\u6237\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"go install"),"\u6765\u4e00\u952e\u5b89\u88c5 kclvm \u7684 Go \u547d\u4ee4\u884c\u5de5\u5177 ",(0,l.kt)("inlineCode",{parentName:"p"},"kcl-go"),"\uff0c\u5176\u8981\u6c42\u672c\u5730 Go \u7248\u672c\u4e3a1.18+, \u540c\u65f6\u8981\u6c42\u672c\u5730\u6709\u5b8c\u6574\u7684 CGO \u5de5\u5177\u94fe\u3002"),(0,l.kt)("p",null,"\u53ea\u9700\u6267\u884c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"go install kusionstack.io/kclvm-go/cmds/kcl-go@latest\n")),(0,l.kt)("p",null,"\u65b0\u5efa KCL \u6e90\u6587\u4ef6 hello.k"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'apiVersion = "apps/v1"\nkind = "Deployment"\nmetadata = {\n    name = "nginx"\n    labels.app = "nginx"\n}\nspec = {\n    replicas = 3\n    selector.matchLabels = metadata.labels\n    template.metadata.labels = metadata.labels\n    template.spec.containers = [\n        {\n            name = metadata.name\n            image = "${metadata.name}:1.14.2"\n            ports = [{ containerPort = 80 }]\n        }\n    ]\n}\n')),(0,l.kt)("p",null,"\u4e4b\u540e\u53ef\u4ee5\u76f4\u63a5\u5728\u547d\u4ee4\u884c\u4e2d\u6267\u884c KCL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ kcl-go run ./hello.k\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx\n  labels:\n    app: nginx\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n        - name: nginx\n          image: "nginx:1.14.2"\n          ports:\n            - containerPort: 80\n')),(0,l.kt)("h2",{id:"go-\u4ee3\u7801\u5982\u4f55\u96c6\u6210-kcl"},"Go \u4ee3\u7801\u5982\u4f55\u96c6\u6210 KCL"),(0,l.kt)("p",null,"\u4ee5\u4e0a\u4e00\u8282\u7684 hello.k \u4e3a\u4f8b\uff0c\u6784\u5efa\u4ee5\u4e0b\u7684 main.go \u4ee3\u7801\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "kusionstack.io/kclvm-go"\n)\n\nfunc main() {\n    result := kclvm.MustRun("./hello.k").GetRawYamlResult()\n    fmt.Println(result)\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'kclvm.MustRun("./hello.k").GetRawYamlResult()'),"\u8fd0\u884c\u5bf9\u5e94\u7684kcl\u6e90\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"fmt.Println(result)"),"\u6253\u5370\u8fd0\u884c\u7ed3\u679c")),(0,l.kt)("p",null,"\u672c\u5730\u73af\u5883\u8981\u6c42 Go \u7248\u672c\u4e3a1.18+,\u4e0e\u5b8c\u6574\u7684 CGO \u5de5\u5177\u94fe\u3002\u8fd0\u884c\u547d\u4ee4\u884c\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"KCL Go SDK"),"\u4f9d\u8d56"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"go get kusionstack.io/kclvm-go@main\n")),(0,l.kt)("p",null,"\u6267\u884c Go \u7a0b\u5e8f\uff0c\u7ed3\u679c\u4e3a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ go run main.go\nname: kcl\nage: 1\nx0:\n  name: kcl\n  age: 1\nx1:\n  name: kcl\n  age: 101\n")),(0,l.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,l.kt)("p",null,"\u901a\u8fc7\u8fd9\u4e00\u6b21\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"KCL Go SDK")," \u7684\u7248\u672c\u53d8\u66f4\uff0c\u6211\u4eec\u53bb\u9664\u4e86 python \u4f9d\u8d56\u5e76\u5207\u6362\u81f3\u6027\u80fd\u66f4\u52a0\u4f18\u79c0\u7684 rust \u8fd0\u884c\u65f6\u3002\u6587\u7ae0\u5206\u522b\u7b80\u5355\u5c55\u793a\u4e86\u5982\u4f55\u4f7f\u7528 \xa0",(0,l.kt)("inlineCode",{parentName:"p"},"kcl-go")," \u547d\u4ee4\u884c\u5de5\u5177\u6267\u884c KCL \u6e90\u4ee3\u7801, \u4ee5\u53ca\u5982\u4f55\u5c06 KCL \u96c6\u6210\u81f3\u60a8\u7684 Go \u7a0b\u5e8f\u4e4b\u4e2d\u3002"),(0,l.kt)("p",null,"\u5f53\u7136\u9664\u4e86\u7b80\u5355\u7684\u7f16\u8bd1\u5e76\u8fd0\u884c KCL \u6e90\u7801\u4e4b\u5916\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"KCL Go SDK")," \u8fd8\u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684\u529f\u80fd\u4ee5\u65b9\u4fbf\u7528\u6237\u66f4\u597d\u5730\u5728 Go \u4e2d\u96c6\u6210 KCL \uff0c \u5305\u62ec\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"KCL \u9759\u6001\u9519\u8bef\u5206\u6790\uff08lint\u4e0e\u683c\u5f0f\u5316\uff09"),(0,l.kt)("li",{parentName:"ul"},"KCL \u4f9d\u8d56\u5206\u6790\u3001"),(0,l.kt)("li",{parentName:"ul"},"Go \u7ed3\u6784\u4f53\u548c KCL Schema \u4e92\u76f8\u8f6c\u6362\u7b49\u7b49")),(0,l.kt)("h2",{id:"\u5176\u4ed6\u8d44\u6e90"},"\u5176\u4ed6\u8d44\u6e90"),(0,l.kt)("p",null,"\u611f\u8c22\u6240\u6709 KCL \u7528\u6237\u548c\u793e\u533a\u5c0f\u4f19\u4f34\u5728\u6b64\u6b21\u7248\u672c\u66f4\u65b0\u8fc7\u7a0b\u4e2d\u63d0\u51fa\u7684\u5b9d\u8d35\u53cd\u9988\u4e0e\u5efa\u8bae\u3002\u53d7\u9650\u4e8e\u6587\u7ae0\u7bc7\u5e45\uff0c\u540e\u7eed\u6211\u4eec\u4f1a\u64b0\u5199\u66f4\u591a KCL v0.4.6 \u65b0\u7248\u672c\u529f\u80fd\u89e3\u8bfb\u7cfb\u5217\u6587\u7ae0\uff0c\u656c\u8bf7\u671f\u5f85!"),(0,l.kt)("p",null,"\u66f4\u591a\u5176\u4ed6\u8d44\u6e90\u8bf7\u53c2\u8003\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kcl-lang.io/"},"KCL \u7f51\u7ad9")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kusionstack.io/"},"Kusion \u7f51\u7ad9")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/kcl-lang/kcl"},"KCL Github \u4ed3\u5e93")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/kcl-lang/kcl-go"},"kclvm-go Github \u4ed3\u5e93")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/kusion"},"Kusion Github \u4ed3\u5e93")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/konfig"},"Konfig Github \u4ed3\u5e93"))),(0,l.kt)("p",null,"\u6b22\u8fce\u52a0\u5165\u6211\u4eec\u7684\u793e\u533a\u8fdb\u884c\u4ea4\u6d41 \ud83d\udc4f\ud83d\udc4f\ud83d\udc4f\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/community"},"https://github.com/kcl-lang/community")," \ud83d\udc4f\ud83d\udc4f\ud83d\udc4f"))}u.isMDXComponent=!0}}]);