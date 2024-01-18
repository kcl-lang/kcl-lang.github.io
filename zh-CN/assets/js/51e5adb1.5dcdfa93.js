"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[63732],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=p(n),k=l,h=s["".concat(o,".").concat(k)]||s[k]||m[k]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=k;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[s]="string"==typeof e?e:l,i[1]=u;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},20487:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>u,toc:()=>p});var a=n(87462),l=(n(67294),n(3905));const r={sidebar_position:3},i="Go API",u={unversionedId:"reference/xlang-api/go-api",id:"version-0.4.4/reference/xlang-api/go-api",title:"Go API",description:"KCL Go SDK",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.4.4/reference/xlang-api/go-api.md",sourceDirName:"reference/xlang-api",slug:"/reference/xlang-api/go-api",permalink:"/zh-CN/docs/0.4.4/reference/xlang-api/go-api",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.4.4/reference/xlang-api/go-api.md",tags:[],version:"0.4.4",lastUpdatedBy:"Peefy",lastUpdatedAt:1705584615,formattedLastUpdatedAt:"2024\u5e741\u670818\u65e5",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"reference",previous:{title:"Rest API",permalink:"/zh-CN/docs/0.4.4/reference/xlang-api/rest-api"},next:{title:"Python API",permalink:"/zh-CN/docs/0.4.4/reference/xlang-api/python-api"}},o={},p=[{value:"KCL Go SDK",id:"kcl-go-sdk",level:2},{value:"Index",id:"index",level:2},{value:"func FormatCode",id:"func-formatcode",level:2},{value:"Output",id:"output",level:4},{value:"func FormatPath",id:"func-formatpath",level:2},{value:"func InitKclvmRuntime",id:"func-initkclvmruntime",level:2},{value:"func LintPath",id:"func-lintpath",level:2},{value:"Output",id:"output-1",level:4},{value:"func OverrideFile",id:"func-overridefile",level:2},{value:"func RunPlayground",id:"func-runplayground",level:2},{value:"func ValidateCode",id:"func-validatecode",level:2},{value:"type KCLResult",id:"type-kclresult",level:2},{value:"Output",id:"output-2",level:4},{value:"Output",id:"output-3",level:4},{value:"func EvalCode",id:"func-evalcode",level:3},{value:"type KCLResultList",id:"type-kclresultlist",level:2},{value:"func MustRun",id:"func-mustrun",level:3},{value:"Output",id:"output-4",level:4},{value:"func Run",id:"func-run",level:3},{value:"Output",id:"output-5",level:4},{value:"func RunFiles",id:"func-runfiles",level:3},{value:"type KclType",id:"type-kcltype",level:2},{value:"func GetSchemaType",id:"func-getschematype",level:3},{value:"type Option",id:"type-option",level:2},{value:"func WithCode",id:"func-withcode",level:3},{value:"func WithDisableNone",id:"func-withdisablenone",level:3},{value:"func WithKFilenames",id:"func-withkfilenames",level:3},{value:"func WithOptions",id:"func-withoptions",level:3},{value:"Output",id:"output-6",level:4},{value:"func WithOverrides",id:"func-withoverrides",level:3},{value:"func WithPrintOverridesAST",id:"func-withprintoverridesast",level:3},{value:"func WithSettings",id:"func-withsettings",level:3},{value:"func WithWorkDir",id:"func-withworkdir",level:3},{value:"type ValidateOptions",id:"type-validateoptions",level:2}],c={toc:p},s="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(s,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"go-api"},"Go API"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/kcl-lang/kcl-go"\n')),(0,l.kt)("h2",{id:"kcl-go-sdk"},"KCL Go SDK"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510         \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510           \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502     kcl files   \u2502         \u2502    KCL-Go-API   \u2502           \u2502  KCLResultList  \u2502\n\u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502         \u2502                 \u2502           \u2502                 \u2502\n\u2502  \u2502    1.k    \u2502  \u2502         \u2502                 \u2502           \u2502                 \u2502\n\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502         \u2502                 \u2502           \u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502         \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502         \u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502           \u2502  \u2502 KCLResult \u2502\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25b6\u2502x.Get("a.b.c") \u2502\n\u2502  \u2502    2.k    \u2502  \u2502         \u2502  \u2502 Run(path) \u2502  \u2502           \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502         \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502\u2500\u2500\u2500\u2500\u2510    \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502           \u2502                 \u2502\n\u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502    \u2502    \u2502                 \u2502           \u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502         \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502  \u2502    3.k    \u2502  \u2502    \u2502    \u2502                 \u2502           \u2502  \u2502 KCLResult \u2502\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25b6\u2502x.Get("k", &v) \u2502\n\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502    \u2502    \u2502                 \u2502           \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502         \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502    \u251c\u2500\u2500\u2500\u25b6\u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25b6\u2502                 \u2502\n\u2502  \u2502setting.yml\u2502  \u2502    \u2502    \u2502  \u2502RunFiles() \u2502  \u2502           \u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502         \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502    \u2502    \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502           \u2502  \u2502 KCLResult \u2502\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25b6\u2502x.JSONString() \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518    \u2502    \u2502                 \u2502           \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502         \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                       \u2502    \u2502                 \u2502           \u2502                 \u2502\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510    \u2502    \u2502                 \u2502           \u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502         \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502     Options     \u2502    \u2502    \u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502           \u2502  \u2502 KCLResult \u2502\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25b6\u2502x.YAMLString() \u2502\n\u2502WithOptions      \u2502    \u2502    \u2502  \u2502MustRun()  \u2502  \u2502           \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502         \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u2502WithOverrides    \u2502\u2500\u2500\u2500\u2500\u2518    \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502           \u2502                 \u2502\n\u2502WithWorkDir      \u2502         \u2502                 \u2502           \u2502                 \u2502\n\u2502WithDisableNone  \u2502         \u2502                 \u2502           \u2502                 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518         \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518           \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n')),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example"),(0,l.kt)("p",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'{\n    const k_code = `\nimport kcl_plugin.hello\n\nname = "kcl"\nage = 1\n\ntwo = hello.add(1, 1)\n\nschema Person:\n    name: str = "kcl"\n    age: int = 1\n\nx0 = Person {}\nx1 = Person {\n    age = 101\n}\n`\n\n    yaml := kclvm.MustRun("testdata/main.k", kclvm.WithCode(k_code)).First().YAMLString()\n    fmt.Println(yaml)\n\n    fmt.Println("----")\n\n    result := kclvm.MustRun("./testdata/main.k").First()\n    fmt.Println(result.JSONString())\n\n    fmt.Println("----")\n    fmt.Println("x0.name:", result.Get("x0.name"))\n    fmt.Println("x1.age:", result.Get("x1.age"))\n\n    fmt.Println("----")\n\n    var person struct {\n        Name string\n        Age  int\n    }\n    fmt.Printf("person: %+v\\n", result.Get("x1", &person))\n}\n')))),(0,l.kt)("h2",{id:"index"},"Index"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#go-api"},"Go API"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#kcl-go-sdk"},"KCL Go SDK")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#index"},"Index")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#func-formatcode"},"func FormatCode")," - ",(0,l.kt)("a",{parentName:"li",href:"#output"},"Output")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#func-formatpath"},"func FormatPath")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#func-initkclvmruntime"},"func InitKclvmRuntime")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#func-lintpath"},"func LintPath")," - ",(0,l.kt)("a",{parentName:"li",href:"#output-1"},"Output")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#func-overridefile"},"func OverrideFile")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#func-runplayground"},"func RunPlayground")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#func-validatecode"},"func ValidateCode")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#type-kclresult"},"type KCLResult")," - ",(0,l.kt)("a",{parentName:"li",href:"#output-2"},"Output")," - ",(0,l.kt)("a",{parentName:"li",href:"#output-3"},"Output"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#func-evalcode"},"func EvalCode")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#type-kclresultlist"},"type KCLResultList"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#func-mustrun"},"func MustRun"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#output-4"},"Output")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#func-run"},"func Run"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#output-5"},"Output")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#func-runfiles"},"func RunFiles")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#type-kcltype"},"type KclType"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#func-getschematype"},"func GetSchemaType")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#type-option"},"type Option"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#func-withcode"},"func WithCode")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#func-withdisablenone"},"func WithDisableNone")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#func-withkfilenames"},"func WithKFilenames")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#func-withoptions"},"func WithOptions"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#output-6"},"Output")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#func-withoverrides"},"func WithOverrides")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#func-withprintoverridesast"},"func WithPrintOverridesAST")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#func-withsettings"},"func WithSettings")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#func-withworkdir"},"func WithWorkDir")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#type-validateoptions"},"type ValidateOptions"))))),(0,l.kt)("h2",{id:"func-formatcode"},"func ",(0,l.kt)("a",{parentName:"h2",href:"https://github.com/kcl-lang/kcl-go/blob/main/kclvm.go#L98"},"FormatCode")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func FormatCode(code interface{}) ([]byte, error)\n")),(0,l.kt)("p",null,"FormatCode returns the formatted code","."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example"),(0,l.kt)("p",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"{\n    out, err := kclvm.FormatCode(`a  =  1+2`)\n    if err != nil {\n        log.Fatal(err)\n    }\n    fmt.Println(string(out))\n\n}\n")),(0,l.kt)("h4",{id:"output"},"Output"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"a = 1 + 2\n")))),(0,l.kt)("h2",{id:"func-formatpath"},"func ",(0,l.kt)("a",{parentName:"h2",href:"https://github.com/kcl-lang/kcl-go/blob/main/kclvm.go#L110"},"FormatPath")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func FormatPath(path string) (changedPaths []string, err error)\n")),(0,l.kt)("p",null,"FormatPath formats files from the given path path: if path is ","`",".","`"," or empty string\\, all KCL files in current directory will be formatted\\, not recursively if path is ","`","path/file",".","k","`","\\, the specified KCL file will be formatted if path is ","`","path/to/dir","`","\\, all KCL files in the specified dir will be formatted\\, not recursively if path is ","`","path/to/dir/",".",".",".","`","\\, all KCL files in the specified dir will be formatted recursively"),(0,l.kt)("p",null,"the returned changedPaths are the changed file paths ","(","relative path",")"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example"),(0,l.kt)("p",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'{\n    changedPaths, err := kclvm.FormatPath("testdata/fmt")\n    if err != nil {\n        log.Fatal(err)\n    }\n    fmt.Println(changedPaths)\n}\n')))),(0,l.kt)("h2",{id:"func-initkclvmruntime"},"func ",(0,l.kt)("a",{parentName:"h2",href:"https://github.com/kcl-lang/kcl-go/blob/main/kclvm.go#L52"},"InitKclvmRuntime")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func InitKclvmRuntime(n int)\n")),(0,l.kt)("p",null,"InitKclvmRuntime init kclvm process","."),(0,l.kt)("h2",{id:"func-lintpath"},"func ",(0,l.kt)("a",{parentName:"h2",href:"https://github.com/kcl-lang/kcl-go/blob/main/kclvm.go#L115"},"LintPath")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func LintPath(path string) (results []string, err error)\n")),(0,l.kt)("p",null,"LintPath lint files from the given path"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example"),(0,l.kt)("p",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'{\n\n    results, err := kclvm.LintPath("testdata/lint/import.k")\n    if err != nil {\n        log.Fatal(err)\n    }\n    for _, s := range results {\n        fmt.Println(s)\n    }\n\n}\n')),(0,l.kt)("h4",{id:"output-1"},"Output"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Unable to import abc.\na is reimported multiple times.\na imported but unused.\n")))),(0,l.kt)("h2",{id:"func-overridefile"},"func ",(0,l.kt)("a",{parentName:"h2",href:"https://github.com/kcl-lang/kcl-go/blob/main/kclvm.go#L124"},"OverrideFile")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func OverrideFile(file string, specs []string) (bool, error)\n")),(0,l.kt)("p",null,"OverrideFile rewrites a file with override spec file: string","."," The File that need to be overridden specs: ","[","]","string","."," List of specs that need to be overridden","."," Each spec string satisfies the form: \\<pkgpath",">",":\\<field_path",">","=\\<filed_value",">"," or \\<pkgpath",">",":\\<field_path",">","-"," When the pkgpath is '","_","_","main","_","_","'\\, it can be omitted","."),(0,l.kt)("h2",{id:"func-runplayground"},"func ",(0,l.kt)("a",{parentName:"h2",href:"https://github.com/kcl-lang/kcl-go/blob/main/kclvm.go#L150"},"RunPlayground")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func RunPlayground(address string) error\n")),(0,l.kt)("p",null,"RunPlayground start KCL playground on given address","."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example"),(0,l.kt)("p",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'{\n    addr := "localhost:2022"\n    fmt.Printf("listen at http://%s\\n", addr)\n\n    kclvm.RunPlayground(addr)\n}\n')))),(0,l.kt)("h2",{id:"func-validatecode"},"func ",(0,l.kt)("a",{parentName:"h2",href:"https://github.com/kcl-lang/kcl-go/blob/main/kclvm.go#L129"},"ValidateCode")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func ValidateCode(data, code string, opt *ValidateOptions) (ok bool, err error)\n")),(0,l.kt)("p",null,"ValidateCode validate data match code"),(0,l.kt)("h2",{id:"type-kclresult"},"type ",(0,l.kt)("a",{parentName:"h2",href:"https://github.com/kcl-lang/kcl-go/blob/main/kclvm.go#L45"},"KCLResult")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"type KCLResult = kcl.KCLResult\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example"),(0,l.kt)("p",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'{\n    const k_code = `\nimport kcl_plugin.hello\n\nname = "kcl"\nage = 1\n\ntwo = hello.add(1, 1)\n\nschema Person:\n    name: str = "kcl"\n    age: int = 1\n\nx0 = Person {name = "kcl-go"}\nx1 = Person {age = 101}\n`\n\n    result := kclvm.MustRun("testdata/main.k", kclvm.WithCode(k_code)).First()\n\n    fmt.Println("x0.name:", result.Get("x0.name"))\n    fmt.Println("x1.age:", result.Get("x1.age"))\n\n}\n')),(0,l.kt)("h4",{id:"output-2"},"Output"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"x0.name: kcl-go\nx1.age: 101\n")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example ('et_struct)"),(0,l.kt)("p",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'{\n    const k_code = `\nschema Person:\n    name: str = "kcl"\n    age: int = 1\n    X: int = 2\n\nx = {\n    "a": Person {age = 101}\n    "b": 123\n}\n`\n\n    result := kclvm.MustRun("testdata/main.k", kclvm.WithCode(k_code)).First()\n\n    var person struct {\n        Name string\n        Age  int\n    }\n    fmt.Printf("person: %+v\\n", result.Get("x.a", &person))\n    fmt.Printf("person: %+v\\n", person)\n\n}\n')),(0,l.kt)("h4",{id:"output-3"},"Output"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"person: &{Name:kcl Age:101}\nperson: {Name:kcl Age:101}\n")))),(0,l.kt)("h3",{id:"func-evalcode"},"func ",(0,l.kt)("a",{parentName:"h3",href:"https://github.com/kcl-lang/kcl-go/blob/main/kclvm.go#L133"},"EvalCode")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func EvalCode(code string) (*KCLResult, error)\n")),(0,l.kt)("h2",{id:"type-kclresultlist"},"type ",(0,l.kt)("a",{parentName:"h2",href:"https://github.com/kcl-lang/kcl-go/blob/main/kclvm.go#L46"},"KCLResultList")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"type KCLResultList = kcl.KCLResultList\n")),(0,l.kt)("h3",{id:"func-mustrun"},"func ",(0,l.kt)("a",{parentName:"h3",href:"https://github.com/kcl-lang/kcl-go/blob/main/kclvm.go#L57"},"MustRun")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func MustRun(path string, opts ...Option) *KCLResultList\n")),(0,l.kt)("p",null,"MustRun is like Run but panics if return any error","."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example"),(0,l.kt)("p",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'{\n    yaml := kclvm.MustRun("testdata/main.k", kclvm.WithCode(`name = "kcl"`)).First().YAMLString()\n    fmt.Println(yaml)\n\n}\n')),(0,l.kt)("h4",{id:"output-4"},"Output"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"name: kcl\n")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example (Settings)"),(0,l.kt)("p",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'{\n    yaml := kclvm.MustRun("./testdata/app0/kcl.yaml").First().YAMLString()\n    fmt.Println(yaml)\n}\n')))),(0,l.kt)("h3",{id:"func-run"},"func ",(0,l.kt)("a",{parentName:"h3",href:"https://github.com/kcl-lang/kcl-go/blob/main/kclvm.go#L62"},"Run")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func Run(path string, opts ...Option) (*KCLResultList, error)\n")),(0,l.kt)("p",null,"Run evaluates the KCL program with path and opts\\, then returns the object list","."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example (Get Field)"),(0,l.kt)("p",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'{\n\n    x, err := kclvm.Run("./testdata/app0/kcl.yaml")\n    assert(err == nil, err)\n\n    fmt.Println(x.First().Get("deploy_topology.1.zone"))\n\n}\n')),(0,l.kt)("h4",{id:"output-5"},"Output"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"RZ24A\n")))),(0,l.kt)("h3",{id:"func-runfiles"},"func ",(0,l.kt)("a",{parentName:"h3",href:"https://github.com/kcl-lang/kcl-go/blob/main/kclvm.go#L67"},"RunFiles")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func RunFiles(paths []string, opts ...Option) (*KCLResultList, error)\n")),(0,l.kt)("p",null,"RunFiles evaluates the KCL program with multi file path and opts\\, then returns the object list","."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example"),(0,l.kt)("p",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'{\n    result, _ := kclvm.RunFiles([]string{"./testdata/app0/kcl.yaml"})\n    fmt.Println(result.First().YAMLString())\n}\n')))),(0,l.kt)("h2",{id:"type-kcltype"},"type ",(0,l.kt)("a",{parentName:"h2",href:"https://github.com/kcl-lang/kcl-go/blob/main/kclvm.go#L48"},"KclType")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"type KclType = kcl.KclType\n")),(0,l.kt)("h3",{id:"func-getschematype"},"func ",(0,l.kt)("a",{parentName:"h3",href:"https://github.com/kcl-lang/kcl-go/blob/main/kclvm.go#L145"},"GetSchemaType")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func GetSchemaType(file, code, schemaName string) ([]*KclType, error)\n")),(0,l.kt)("p",null,"GetSchemaType returns schema types from a kcl file or code","."),(0,l.kt)("p",null,"file: string The kcl filename code: string The kcl code string schema_name: string The schema name got\\, when the schema name is empty\\, all schemas are returned","."),(0,l.kt)("h2",{id:"type-option"},"type ",(0,l.kt)("a",{parentName:"h2",href:"https://github.com/kcl-lang/kcl-go/blob/main/kclvm.go#L43"},"Option")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"type Option = kcl.Option\n")),(0,l.kt)("h3",{id:"func-withcode"},"func ",(0,l.kt)("a",{parentName:"h3",href:"https://github.com/kcl-lang/kcl-go/blob/main/kclvm.go#L72"},"WithCode")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func WithCode(codes ...string) Option\n")),(0,l.kt)("p",null,"WithCode returns a Option which hold a kcl source code list","."),(0,l.kt)("h3",{id:"func-withdisablenone"},"func ",(0,l.kt)("a",{parentName:"h3",href:"https://github.com/kcl-lang/kcl-go/blob/main/kclvm.go#L90"},"WithDisableNone")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func WithDisableNone(disableNone bool) Option\n")),(0,l.kt)("p",null,"WithDisableNone returns a Option which hold a disable none switch","."),(0,l.kt)("h3",{id:"func-withkfilenames"},"func ",(0,l.kt)("a",{parentName:"h3",href:"https://github.com/kcl-lang/kcl-go/blob/main/kclvm.go#L75"},"WithKFilenames")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func WithKFilenames(filenames ...string) Option\n")),(0,l.kt)("p",null,"WithKFilenames returns a Option which hold a filenames list","."),(0,l.kt)("h3",{id:"func-withoptions"},"func ",(0,l.kt)("a",{parentName:"h3",href:"https://github.com/kcl-lang/kcl-go/blob/main/kclvm.go#L78"},"WithOptions")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func WithOptions(key_value_list ...string) Option\n")),(0,l.kt)("p",null,"WithOptions returns a Option which hold a key=value pair list for option function","."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example"),(0,l.kt)("p",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'{\n    const code = `\nname = option("name")\nage = option("age")\n`\n    x, err := kclvm.Run("hello.k", kclvm.WithCode(code),\n        kclvm.WithOptions("name=kcl", "age=1"),\n    )\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    fmt.Println(x.First().YAMLString())\n\n}\n')),(0,l.kt)("h4",{id:"output-6"},"Output"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"age: 1\nname: kcl\n")))),(0,l.kt)("h3",{id:"func-withoverrides"},"func ",(0,l.kt)("a",{parentName:"h3",href:"https://github.com/kcl-lang/kcl-go/blob/main/kclvm.go#L81"},"WithOverrides")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func WithOverrides(override_list ...string) Option\n")),(0,l.kt)("p",null,"WithOverrides returns a Option which hold a override list","."),(0,l.kt)("h3",{id:"func-withprintoverridesast"},"func ",(0,l.kt)("a",{parentName:"h3",href:"https://github.com/kcl-lang/kcl-go/blob/main/kclvm.go#L93"},"WithPrintOverridesAST")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func WithPrintOverridesAST(printOverridesAST bool) Option\n")),(0,l.kt)("p",null,"WithPrintOverridesAST returns a Option which hold a printOverridesAST switch","."),(0,l.kt)("h3",{id:"func-withsettings"},"func ",(0,l.kt)("a",{parentName:"h3",href:"https://github.com/kcl-lang/kcl-go/blob/main/kclvm.go#L84"},"WithSettings")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func WithSettings(filename string) Option\n")),(0,l.kt)("p",null,"WithSettings returns a Option which hold a settings file","."),(0,l.kt)("h3",{id:"func-withworkdir"},"func ",(0,l.kt)("a",{parentName:"h3",href:"https://github.com/kcl-lang/kcl-go/blob/main/kclvm.go#L87"},"WithWorkDir")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func WithWorkDir(workDir string) Option\n")),(0,l.kt)("p",null,"WithWorkDir returns a Option which hold a work dir","."),(0,l.kt)("h2",{id:"type-validateoptions"},"type ",(0,l.kt)("a",{parentName:"h2",href:"https://github.com/kcl-lang/kcl-go/blob/main/kclvm.go#L44"},"ValidateOptions")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"type ValidateOptions = validate.ValidateOptions\n")),(0,l.kt)("p",null,"Generated by ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/princjef/gomarkdoc"},"gomarkdoc")))}m.isMDXComponent=!0}}]);