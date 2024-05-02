"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[49458],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),v=a,m=u["".concat(s,".").concat(v)]||u[v]||d[v]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=v;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},46981:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:1},o="Introduction",l={unversionedId:"reference/xlang-api/overview",id:"version-0.8/reference/xlang-api/overview",title:"Introduction",description:"The KCL language provides general programming language APIs.",source:"@site/versioned_docs/version-0.8/reference/xlang-api/overview.md",sourceDirName:"reference/xlang-api",slug:"/reference/xlang-api/overview",permalink:"/docs/reference/xlang-api/overview",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.8/reference/xlang-api/overview.md",tags:[],version:"0.8",lastUpdatedBy:"Peefy",lastUpdatedAt:1714663025,formattedLastUpdatedAt:"May 2, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"reference",previous:{title:"Introduction",permalink:"/docs/reference/plugin/overview"},next:{title:"Rest API",permalink:"/docs/reference/xlang-api/rest-api"}},s={},c=[{value:"C/Rust APIs",id:"crust-apis",level:2},{value:"REST-API",id:"rest-api",level:2},{value:"Start REST Service",id:"start-rest-service",level:3},{value:"<code>BuiltinService</code>",id:"builtinservice",level:3},{value:"<code>KclvmService</code>",id:"kclvmservice",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"The KCL language provides general programming language APIs."),(0,a.kt)("h2",{id:"crust-apis"},"C/Rust APIs"),(0,a.kt)("p",null,"The core of KCL is developed in Rust, and the C language API is exported externally for packaging and integration in other high-level languages such as Go, Python, etc."),(0,a.kt)("h2",{id:"rest-api"},"REST-API"),(0,a.kt)("p",null,"The C-API provided by KCL does not have a REST-API. The REST-API is defined by Protobuf."),(0,a.kt)("h3",{id:"start-rest-service"},"Start REST Service"),(0,a.kt)("p",null,"The RestAPI service can be started in the following way:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kcl server\n")),(0,a.kt)("p",null,"The service can then be requested via the POST protocol:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl -X POST http://127.0.0.1:2021/api:protorpc/BuiltinService.Ping --data '{}'\n")),(0,a.kt)("p",null,"The output is"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "error": "",\n  "result": {}\n}\n')),(0,a.kt)("p",null,"The POST request and the returned JSON data are consistent with the structure defined by Protobuf."),(0,a.kt)("h3",{id:"builtinservice"},(0,a.kt)("inlineCode",{parentName:"h3"},"BuiltinService")),(0,a.kt)("p",null,"Where the ",(0,a.kt)("inlineCode",{parentName:"p"},"/api:protorpc/BuiltinService.Ping")," path represents the ",(0,a.kt)("inlineCode",{parentName:"p"},"Ping")," method of the ",(0,a.kt)("inlineCode",{parentName:"p"},"BuiltinService")," service."),(0,a.kt)("p",null,"The complete ",(0,a.kt)("inlineCode",{parentName:"p"},"BuiltinService")," is defined by Protobuf:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"service BuiltinService {\n    rpc Ping(Ping_Args) returns(Ping_Result);\n    rpc ListMethod(ListMethod_Args) returns(ListMethod_Result);\n}\n\nmessage Ping_Args {\n    string value = 1;\n}\nmessage Ping_Result {\n    string value = 1;\n}\n\nmessage ListMethod_Args {\n    // empty\n}\nmessage ListMethod_Result {\n    repeated string method_name_list = 1;\n}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Ping")," method can verify whether the service is normal, and the ",(0,a.kt)("inlineCode",{parentName:"p"},"ListMethod")," method can query the list of all services and functions provided."),(0,a.kt)("h3",{id:"kclvmservice"},(0,a.kt)("inlineCode",{parentName:"h3"},"KclvmService")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"KclvmService")," service is a service related to KCL functionality. The usage is the same as the ",(0,a.kt)("inlineCode",{parentName:"p"},"BuiltinService")," service."),(0,a.kt)("p",null,"For example, there is the following ",(0,a.kt)("inlineCode",{parentName:"p"},"Person")," structure definition:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"schema Person:\n    key: str\n\n    check:\n        \"value\" in key  # 'key' is required and 'key' must contain \"value\"\n")),(0,a.kt)("p",null,"Then we want to use ",(0,a.kt)("inlineCode",{parentName:"p"},"Person")," to verify the following JSON data:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{ "key": "value" }\n')),(0,a.kt)("p",null,"This can be done through the ",(0,a.kt)("inlineCode",{parentName:"p"},"ValidateCode")," method of the ",(0,a.kt)("inlineCode",{parentName:"p"},"KclvmService")," service. Refer to the ",(0,a.kt)("inlineCode",{parentName:"p"},"ValidateCode_Args")," structure of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ValidateCode")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"message ValidateCode_Args {\n    string data = 1;\n    string code = 2;\n    string schema = 3;\n    string attribute_name = 4;\n    string format = 5;\n}\n")),(0,a.kt)("p",null,"Construct the JSON data required by the POST request according to the ",(0,a.kt)("inlineCode",{parentName:"p"},"ValidateCode_Args")," structure, which contains the ",(0,a.kt)("inlineCode",{parentName:"p"},"Person")," definition and the JSON data to be verified:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": "\\nschema Person:\\n    key: str\\n\\n    check:\\n        \\"value\\" in key  # \'key\' is required and \'key\' must contain \\"value\\"\\n",\n  "data": "{\\"key\\": \\"value\\"}"\n}\n')),(0,a.kt)("p",null,"Save this JSON data to the ",(0,a.kt)("inlineCode",{parentName:"p"},"vet-hello.json")," file and verify it with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -X POST \\\n    http://127.0.0.1:2021/api:protorpc/KclvmService.ValidateCode \\\n    -H  "accept: application/json" \\\n    --data @./vet-hello.json\n{\n    "error": "",\n    "result": {\n        "success": true\n    }\n}\n')))}d.isMDXComponent=!0}}]);