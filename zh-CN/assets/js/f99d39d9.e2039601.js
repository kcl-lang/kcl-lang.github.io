"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[73832],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),s=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(i.Provider,{value:n},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(t),u=r,m=d["".concat(i,".").concat(u)]||d[u]||k[u]||l;return t?a.createElement(m,o(o({ref:n},c),{},{components:t})):a.createElement(m,o({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=u;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p[d]="string"==typeof e?e:r,o[1]=p;for(var s=2;s<l;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},92203:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const l={sidebar_position:3},o="KCL \u8bed\u8a00\u901f\u89c8",p={unversionedId:"user_docs/getting-started/kcl-quick-start",id:"version-0.5.5/user_docs/getting-started/kcl-quick-start",title:"KCL \u8bed\u8a00\u901f\u89c8",description:"KCL \u662f\u4e00\u4e2a\u9762\u76f8\u4e91\u539f\u751f\u914d\u7f6e\u7b56\u7565\u9886\u57df\u7684\u7f16\u7a0b\u8bed\u8a00\u3002KCL \u8bbe\u8ba1\u4e4b\u521d\u53d7 Python3 \u542f\u53d1\uff0c\u540c\u65f6\u5438\u6536\u4e86\u58f0\u660e\u5f0f\u3001OOP \u7f16\u7a0b\u8303\u5f0f\u7684\u8bbe\u8ba1\u7406\u5ff5\uff0c\u662f\u4e00\u79cd\u4e13\u7528\u4e8e\u914d\u7f6e\u7b56\u7565\u5b9a\u4e49\u3001\u6821\u9a8c\u7684\u9759\u6001\u5f3a\u7c7b\u578b\u7684\u9762\u76f8\u914d\u7f6e\u548c\u7b56\u7565\u573a\u666f\u7684\u8bed\u8a00\u3002\u672c\u8282\u6211\u4eec\u5c06\u5feb\u901f\u5c55\u793a KCL \u8bed\u8a00\u7684\u57fa\u672c\u7279\u6027\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.5.5/user_docs/getting-started/kcl-quick-start.md",sourceDirName:"user_docs/getting-started",slug:"/user_docs/getting-started/kcl-quick-start",permalink:"/zh-CN/docs/0.5.5/user_docs/getting-started/kcl-quick-start",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.5/user_docs/getting-started/kcl-quick-start.md",tags:[],version:"0.5.5",lastUpdatedBy:"Peefy",lastUpdatedAt:1705584615,formattedLastUpdatedAt:"2024\u5e741\u670818\u65e5",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"user_docs",previous:{title:"\u5b89\u88c5",permalink:"/zh-CN/docs/0.5.5/user_docs/getting-started/install"},next:{title:"\u7528\u6237\u624b\u518c",permalink:"/zh-CN/docs/0.5.5/user_docs/guides/"}},i={},s=[{value:"1. Hello KCL",id:"1-hello-kcl",level:2},{value:"2. \u518d\u590d\u6742\u4e00\u70b9\u7684\u914d\u7f6e",id:"2-\u518d\u590d\u6742\u4e00\u70b9\u7684\u914d\u7f6e",level:2},{value:"3. schema \u5b9a\u4e49\u914d\u7f6e\u7684\u7ed3\u6784",id:"3-schema-\u5b9a\u4e49\u914d\u7f6e\u7684\u7ed3\u6784",level:2}],c={toc:s},d="wrapper";function k(e){let{components:n,...l}=e;return(0,r.kt)(d,(0,a.Z)({},c,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kcl-\u8bed\u8a00\u901f\u89c8"},"KCL \u8bed\u8a00\u901f\u89c8"),(0,r.kt)("p",null,"KCL \u662f\u4e00\u4e2a\u9762\u76f8\u4e91\u539f\u751f\u914d\u7f6e\u7b56\u7565\u9886\u57df\u7684\u7f16\u7a0b\u8bed\u8a00\u3002KCL \u8bbe\u8ba1\u4e4b\u521d\u53d7 Python3 \u542f\u53d1\uff0c\u540c\u65f6\u5438\u6536\u4e86\u58f0\u660e\u5f0f\u3001OOP \u7f16\u7a0b\u8303\u5f0f\u7684\u8bbe\u8ba1\u7406\u5ff5\uff0c\u662f\u4e00\u79cd\u4e13\u7528\u4e8e\u914d\u7f6e\u7b56\u7565\u5b9a\u4e49\u3001\u6821\u9a8c\u7684\u9759\u6001\u5f3a\u7c7b\u578b\u7684\u9762\u76f8\u914d\u7f6e\u548c\u7b56\u7565\u573a\u666f\u7684\u8bed\u8a00\u3002\u672c\u8282\u6211\u4eec\u5c06\u5feb\u901f\u5c55\u793a KCL \u8bed\u8a00\u7684\u57fa\u672c\u7279\u6027\u3002"),(0,r.kt)("h2",{id:"1-hello-kcl"},"1. Hello KCL"),(0,r.kt)("p",null,"\u5b66\u4e60\u65b0\u8bed\u8a00\u7684\u6700\u4f73\u9014\u5f84\u662f\u81ea\u5df1\u4eb2\u624b\u5199\u51e0\u4e2a\u5c0f\u7a0b\u5e8f\uff0c\u914d\u7f6e\u8bed\u8a00\u4e5f\u662f\u5982\u6b64\u3002KCL \u4f5c\u4e3a\u4e00\u79cd\u914d\u7f6e\u7b56\u7565\u8bed\u8a00\uff0c\u6211\u4eec\u53ef\u4ee5\u50cf\u5199\u914d\u7f6e\u4e00\u6837\u5199 KCL \u7a0b\u5e8f\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u7b80\u5355\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"hello.k")," \u7a0b\u5e8f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'hello = "KCL"\n')),(0,r.kt)("p",null,"\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"hello")," \u5c5e\u6027\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},'"KCL"')," \u5b57\u7b26\u4e32\u3002\u7136\u540e\u5c06\u4ee3\u7801\u4fdd\u5b58\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"hello.k")," \u6587\u4ef6\u4e2d\u3002"),(0,r.kt)("p",null,"\u5982\u4f55\u6267\u884c\u8fd9\u4e2a\u7a0b\u5e8f\u53d6\u51b3\u4e8e\u5177\u4f53\u7684\u5f00\u53d1\u73af\u5883\uff0c\u6211\u4eec\u5148\u5047\u8bbe\u672c\u5730\u7684 macOS \u6216\u8005\u662f Linux \u7cfb\u7edf\u5df2\u7ecf\u5b89\u88c5\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl")," \u547d\u4ee4\uff08\u6216\u8005\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"docker run --rm -it kcllang/kcl")," \u8fdb\u5165 Docker \u73af\u5883\u6d4b\u8bd5\uff09\u3002\u7136\u540e\u5728\u6587\u4ef6\u6240\u5728\u7684\u76ee\u5f55\u547d\u4ee4\u884c\u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4\u6267\u884c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kcl hello.k\n")),(0,r.kt)("p",null,"\u8f93\u51fa\u4e3a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"hello: KCL\n")),(0,r.kt)("p",null,"\u547d\u4ee4\u884c\u6267\u884c\u7684\u6548\u679c\u5982\u56fe\u6240\u793a\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(44001).Z,width:"1944",height:"888"})),(0,r.kt)("p",null,"\u8f93\u51fa\u7684\u662f YAML \u683c\u5f0f\u7684\u914d\u7f6e\u6570\u636e\u3002\u8fd9\u4e2a\u7a0b\u5e8f\u867d\u7136\u7b80\u5355\uff0c\u4f46\u662f\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u6267\u884c KCL \u914d\u7f6e\u7a0b\u5e8f\u5230\u8f93\u51fa\u7ed3\u679c\u9a8c\u8bc1\u4e86\u5f00\u53d1\u73af\u5883\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl")," \u547d\u4ee4\u884c\u7684\u57fa\u672c\u7528\u6cd5\u3002"),(0,r.kt)("h2",{id:"2-\u518d\u590d\u6742\u4e00\u70b9\u7684\u914d\u7f6e"},"2. \u518d\u590d\u6742\u4e00\u70b9\u7684\u914d\u7f6e"),(0,r.kt)("p",null,"\u5e38\u89c1\u7684\u914d\u7f6e\u6570\u636e\u9664\u4e86\u7684\u666e\u901a\u7684 key-value \u5bf9\uff0c\u8fd8\u6709\u5d4c\u5957\u7684\u5b57\u5178\u548c\u5217\u8868\u7c7b\u578b\uff0c\u540c\u65f6 value \u57fa\u7840\u7c7b\u578b\u9664\u4e86\u5b57\u7b26\u4e32\u8fd8\u6709\u5e03\u5c14\u548c\u6570\u503c\u7b49\u7c7b\u578b\u3002\u4e0b\u9762\u662f\u66f4\u4e3a\u590d\u6742\u4e00\u70b9\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"server.k")," \u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# This is a KCL document\n\ntitle = "KCL Example"\n\nowner = {\n    name = "The KCL Authors"\n    data = "2020-01-02T03:04:05"\n}\n\ndatabase = {\n    enabled = True\n    ports = [8000, 8001, 8002]\n    data = [["delta", "phi"], [3.14]]\n    temp_targets = {cpu = 79.5, case = 72.0}\n}\n\nservers = [\n    {ip = "10.0.0.1", role = "frontend"}\n    {ip = "10.0.0.2", role = "backend"}\n]\n')),(0,r.kt)("p",null,"\u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"#")," \u5f00\u5934\u7684\u8868\u793a\u884c\u6ce8\u91ca\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"owner")," \u7684 value \u662f\u4e00\u4e2a\u5b57\u5178\uff0c\u5b57\u5178\u7684\u9762\u503c\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"{}")," \u65b9\u5f0f\u5305\u542b\u7684\u5185\u5bb9\uff0c\u5b57\u5178\u5185\u90e8\u7684 key-value \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},'hello = "KCL"')," \u4f8b\u5b50\u7684\u5199\u6cd5\u7c7b\u4f3c\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"database")," \u5219\u662f\u53e6\u4e00\u4e2a\u5b57\u5178\uff0c\u5176\u4e2d\u5b57\u5178\u5c5e\u6027\u7684 value \u51fa\u73b0\u4e86\u5e03\u5c14 ",(0,r.kt)("inlineCode",{parentName:"p"},"True"),"\u3001\u5217\u8868 ",(0,r.kt)("inlineCode",{parentName:"p"},"[]")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"{}")," \u5b57\u5178\uff0c\u5176\u4e2d\u5217\u8868\u548c\u5b57\u5178\u4e2d\u8fd8\u51fa\u73b0\u4e86\u6570\u503c\u7c7b\u578b\u7684 value\u3002 \u6700\u540e\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"servers")," \u5c5e\u6027\u5219\u662f\u4e00\u4e2a\u5217\u8868\uff0c\u5217\u8868\u5185\u90e8\u5d4c\u5957\u7740\u5b57\u5178\uff08\u5b57\u5178\u548c\u5217\u8868\u4ee5\u53ca\u540e\u7eed\u5c06\u8981\u8bb2\u5230\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"schema")," \u90fd\u53ef\u4ee5\u76f8\u4e92\u5d4c\u5957\uff09\u3002"),(0,r.kt)("p",null,"\u8be5\u914d\u7f6e\u8f93\u51fa\u7684 YAML \u7ed3\u679c\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"$ kcl server.k\ntitle: KCL Example\nowner:\n  name: The KCL Authors\n  data: '2020-01-02T03:04:05'\ndatabase:\n  enabled: true\n  ports:\n  - 8000\n  - 8001\n  - 8002\n  data:\n  - - delta\n    - phi\n  - - 3.14\n  temp_targets:\n    cpu: 79.5\n    case: 72.0\nservers:\n- ip: 10.0.0.1\n  role: frontend\n- ip: 10.0.0.2\n  role: backend\n")),(0,r.kt)("h2",{id:"3-schema-\u5b9a\u4e49\u914d\u7f6e\u7684\u7ed3\u6784"},"3. schema \u5b9a\u4e49\u914d\u7f6e\u7684\u7ed3\u6784"),(0,r.kt)("p",null,"KCL \u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"schema")," \u8bed\u6cd5\u7ed3\u6784\u4e3a\u6709\u7740\u56fa\u5b9a\u5c5e\u6027\u7ed3\u6784\u548c\u9ed8\u8ba4\u503c\u884c\u4e3a\u7684\u5c5e\u6027\u63d0\u4f9b\u62bd\u8c61\u652f\u6301\u3002"),(0,r.kt)("p",null,"\u6bd4\u5982\u4e0a\u9762\u4f8b\u5b50\u7684\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"database")," \u7684\u914d\u7f6e\u4e00\u822c\u662f\u7528\u9ed8\u8ba4\u503c\u5373\u53ef\u3002\u8fd9\u6837\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4e3a\u6570\u636e\u5e93\u7684\u9ed8\u8ba4\u914d\u7f6e\u5b9a\u4e49\u4e00\u4e2a\u7ed3\u6784\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'schema DatabaseConfig:\n    enabled: bool = True\n    ports: [int] = [8000, 8001, 8002]\n    data: [[str|float]] = [["delta", "phi"], [3.14]]\n    temp_targets: {str: float} = {cpu = 79.5, case = 72.0}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"enabled")," \u662f\u5e03\u5c14\u7c7b\u578b\uff1b",(0,r.kt)("inlineCode",{parentName:"p"},"ports")," \u4e3a\u6574\u6570\u5217\u8868\u7c7b\u578b\uff1b",(0,r.kt)("inlineCode",{parentName:"p"},"data")," \u4e3a\u5217\u8868\u7684\u5217\u8868\uff0c\u5185\u5c42\u7684\u5217\u8868\u5143\u7d20\u662f\u5b57\u7b26\u4e32\u6216\u8005\u6d6e\u70b9\u6570\u7c7b\u578b\uff1b",(0,r.kt)("inlineCode",{parentName:"p"},"temp_targets")," \u5219\u662f\u4e00\u4e2a\u5b57\u5178\u7c7b\u578b\uff0c\u5b57\u5178\u7684\u5c5e\u6027\u503c\u662f\u6d6e\u70b9\u6570\u7c7b\u578b\u3002\u5e76\u4e14 ",(0,r.kt)("inlineCode",{parentName:"p"},"DatabaseConfig")," \u7684\u6bcf\u4e2a\u5c5e\u6027\u90fd\u5b9a\u4e49\u4e86\u9ed8\u8ba4\u503c\u3002"),(0,r.kt)("p",null,"\u7136\u540e\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"database = DatabaseConfig {}")," \u5c31\u53ef\u4ee5\u4ea7\u751f\u548c\u9ed8\u8ba4\u503c\u76f8\u540c\u5c5e\u6027\u7684\u7ed3\u6784\u3002\u7528\u6237\u4e5f\u53ef\u4ee5\u4fee\u6539\u9ed8\u8ba4\u503c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"database = DatabaseConfig {\n    ports = [2020, 2021]\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"schema DatabaseConfig")," \u4e0d\u4ec5\u4ec5\u4e3a\u5c5e\u6027\u63d0\u4f9b\u4e86\u9ed8\u8ba4\u503c\uff0c\u8fd8\u4e3a\u5c5e\u6027\u6dfb\u52a0\u4e86\u7c7b\u578b\u4fe1\u606f\u3002\u56e0\u6b64\uff0c\u5982\u679c\u7528\u6237\u4e0d\u5c0f\u5fc3\u5199\u9519\u5c5e\u6027\u503c\u7c7b\u578b\u7684\u8bdd\uff0cKCL \u5c06\u4f1a\u7ed9\u51fa\u53cb\u597d\u7684\u9519\u8bef\u63d0\u793a\uff0c\u6bd4\u5982\u4e0b\u9762\u7684\u4f8b\u5b50\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"ports")," \u9519\u8bef\u5730\u5199\u6210\u4e86\u6d6e\u70b9\u6570\u7c7b\u578b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"database = DatabaseConfig {\n    ports = [1.2, 1.3]\n}\n")),(0,r.kt)("p",null,"\u6267\u884c\u65f6\u5c06\u4ea7\u751f\u7c7b\u4f3c\u4ee5\u4e0b\u7684\u9519\u8bef\uff08\u663e\u793a\u7684\u6587\u4ef6\u8def\u5f84\u548c\u672c\u5730\u73af\u5883\u6709\u5173\uff09\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kcl server.k\n")),(0,r.kt)("p",null,"\u8f93\u51fa\u4e3a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"error[E2G22]: TypeError\n --\x3e /path/to/server.k:8:5\n  |\n8 |     ports = [1.2, 1.3]\n  |     ^ expected [int], got [float(1.2)|float(1.3)]\n  |\n\n --\x3e /path/to/server.k:3:5\n  |\n3 |     ports: [int] = [8000, 8001, 8002]\n  |     ^ variable is defined here, its type is [int], but got [float(1.2)|float(1.3)]\n  |\n")),(0,r.kt)("p",null,"\u7c7b\u4f3c\u5730\u6211\u4eec\u53ef\u4ee5\u7528\u4ee5\u4e0b\u7684\u4ee3\u7801\u5c01\u88c5 ",(0,r.kt)("inlineCode",{parentName:"p"},"servers")," \u90e8\u5206\u7684\u5c5e\u6027\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'schema ServerConfig:\n    ip: str\n    role: "frontend" | "backend"\n\nservers = [\n    ServerConfig {ip = "10.0.0.1", role = "frontend"}\n    ServerConfig {ip = "10.0.0.2", role = "backend"}\n]\n')),(0,r.kt)("p",null,"\u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"ServerConfig")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"ip")," \u662f\u5b57\u7b26\u4e32\u7c7b\u578b\uff0c\u5e76\u6ca1\u6709\u7ed9\u51fa\u9ed8\u8ba4\u503c\u3002\u7528\u6237\u5728\u751f\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"ServerConfig")," \u7c7b\u578b\u7684\u5c5e\u6027\u65f6\u5fc5\u987b\u624b\u5de5\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"ip")," \u5c5e\u6027\u7684\u503c\uff0c\u5426\u5219 KCL \u5c06\u4f1a\u62a5\u51fa\u7f3a\u5c11\u5fc5\u586b\u5c5e\u6027\u7684\u9519\u8bef\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"role")," \u5c5e\u6027\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},'"frontend" | "backend"')," \u679a\u4e3e\u5b57\u7b26\u4e32\u7c7b\u578b\u3002"),(0,r.kt)("p",null,"\u6b64\u5916\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"schema")," \u8fd8\u53ef\u4ee5\u7ed3\u5408 ",(0,r.kt)("inlineCode",{parentName:"p"},"check"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"mixin"),"\u3001\u53ef\u9009\u5c5e\u6027\u3001\u7ee7\u627f\u548c\u6269\u5c55\u6a21\u5757\u5b9e\u73b0\u66f4\u4e3a\u590d\u6742\u7684\u914d\u7f6e\u548c\u7b56\u7565\u6570\u636e\u7684\u62bd\u8c61\uff0c\u7ec6\u8282\u53ef\u4ee5\u53c2\u8003\u624b\u518c\u90e8\u5206\u7684\u6587\u6863\u3002"))}k.isMDXComponent=!0},44001:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/hello-86644801c77c9a1ca5662da7e16dd1de.gif"}}]);