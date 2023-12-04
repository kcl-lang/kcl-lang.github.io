"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[83734],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,k=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return t?a.createElement(k,l(l({ref:n},c),{},{components:t})):a.createElement(k,l({ref:n},c))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[u]="string"==typeof e?e:r,l[1]=p;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6353:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const i={title:"\u81ea\u52a8\u5316",sidebar_position:6},l=void 0,p={unversionedId:"user_docs/guides/automation",id:"version-0.4.5/user_docs/guides/automation",title:"\u81ea\u52a8\u5316",description:"\u5728 KCL \u4e2d\u63d0\u4f9b\u4e86\u5f88\u591a\u81ea\u52a8\u5316\u76f8\u5173\u7684\u80fd\u529b\uff0c\u4e3b\u8981\u5305\u62ec\u5de5\u5177\u548c\u591a\u8bed\u8a00 API\u3002 \u901a\u8fc7 packageidentifier : keyidentifier\u7684\u6a21\u5f0f\u652f\u6301\u5bf9\u4efb\u610f\u914d\u7f6e\u952e\u503c\u7684\u7d22\u5f15\uff0c\u4ece\u800c\u5b8c\u6210\u5bf9\u4efb\u610f\u952e\u503c\u7684\u589e\u5220\u6539\u67e5\u3002\u6bd4\u5982\u4e0b\u56fe\u6240\u793a\u4fee\u6539\u67d0\u4e2a\u5e94\u7528\u914d\u7f6e\u7684\u955c\u50cf\u5185\u5bb9\uff0c\u53ef\u4ee5\u76f4\u63a5\u6267\u884c\u5982\u4e0b\u6307\u4ee4\u4fee\u6539\u955c\u50cf\uff0c\u4fee\u6539\u524d\u540e\u7684 diff \u5982\u4e0b\u56fe\u6240\u793a\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.4.5/user_docs/guides/automation.md",sourceDirName:"user_docs/guides",slug:"/user_docs/guides/automation",permalink:"/zh-CN/docs/0.4.5/user_docs/guides/automation",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.4.5/user_docs/guides/automation.md",tags:[],version:"0.4.5",lastUpdatedBy:"peefy",lastUpdatedAt:1701659761,formattedLastUpdatedAt:"2023\u5e7412\u67084\u65e5",sidebarPosition:6,frontMatter:{title:"\u81ea\u52a8\u5316",sidebar_position:6},sidebar:"user_docs",previous:{title:"\u6570\u636e\u96c6\u6210",permalink:"/zh-CN/docs/0.4.5/user_docs/guides/data-integration"},next:{title:"Kubernetes",permalink:"/zh-CN/docs/0.4.5/user_docs/guides/working-with-k8s/"}},o={},s=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u4fee\u6539\u793a\u4f8b",id:"\u4fee\u6539\u793a\u4f8b",level:3},{value:"\u5220\u9664\u793a\u4f8b",id:"\u5220\u9664\u793a\u4f8b",level:3},{value:"API",id:"api",level:3}],c={toc:s},u="wrapper";function m(e){let{components:n,...i}=e;return(0,r.kt)(u,(0,a.Z)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5728 KCL \u4e2d\u63d0\u4f9b\u4e86\u5f88\u591a\u81ea\u52a8\u5316\u76f8\u5173\u7684\u80fd\u529b\uff0c\u4e3b\u8981\u5305\u62ec\u5de5\u5177\u548c\u591a\u8bed\u8a00 API\u3002 \u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"package_identifier : key_identifier"),"\u7684\u6a21\u5f0f\u652f\u6301\u5bf9\u4efb\u610f\u914d\u7f6e\u952e\u503c\u7684\u7d22\u5f15\uff0c\u4ece\u800c\u5b8c\u6210\u5bf9\u4efb\u610f\u952e\u503c\u7684\u589e\u5220\u6539\u67e5\u3002\u6bd4\u5982\u4e0b\u56fe\u6240\u793a\u4fee\u6539\u67d0\u4e2a\u5e94\u7528\u914d\u7f6e\u7684\u955c\u50cf\u5185\u5bb9\uff0c\u53ef\u4ee5\u76f4\u63a5\u6267\u884c\u5982\u4e0b\u6307\u4ee4\u4fee\u6539\u955c\u50cf\uff0c\u4fee\u6539\u524d\u540e\u7684 diff \u5982\u4e0b\u56fe\u6240\u793a\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(62787).Z,width:"1828",height:"502"})),(0,r.kt)("p",null,"\u6b64\u5916\uff0cKCL \u7684\u81ea\u52a8\u5316\u80fd\u529b\u4e5f\u53ef\u4ee5\u88ab\u96c6\u6210\u5230 CI/CD \u4e2d\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(5912).Z,width:"890",height:"247"})),(0,r.kt)("p",null,"KCL \u5141\u8bb8\u4f7f\u7528\u901a\u8fc7 CLI ",(0,r.kt)("inlineCode",{parentName:"p"},"-O|--overrides")," \u53c2\u6570\u4fee\u6539\u914d\u7f6e\u6a21\u578b\u4e2d\u7684\u503c\uff0c\u8fd9\u4e2a\u53c2\u6570\u901a\u5e38\u7531\u4e09\u4e2a\u90e8\u5206\u7ec4\u6210: \u5305\u540d ",(0,r.kt)("inlineCode",{parentName:"p"},"pkg"),", \u914d\u7f6e\u6807\u8bc6\u7b26 ",(0,r.kt)("inlineCode",{parentName:"p"},"identifier"),", \u914d\u7f6e\u5c5e\u6027 ",(0,r.kt)("inlineCode",{parentName:"p"},"attribute")," \u548c\u8986\u76d6\u503c ",(0,r.kt)("inlineCode",{parentName:"p"},"override_value")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kcl main.k -O override_spec\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"override_spec"),": \u8868\u793a\u9700\u8981\u4fee\u6539\u7684\u914d\u7f6e\u6a21\u578b\u5b57\u6bb5\u548c\u503c\u7684\u7edf\u4e00\u8868\u793a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'override_spec: [[pkgpath] ":"] identifier ("=" value | "-")\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pkgpath"),": \u8868\u793a\u9700\u8981\u4fee\u6539\u6807\u8bc6\u7b26\u7684\u5305\u8def\u5f84\uff0c\u901a\u5e38\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"a.b.c")," \u7684\u5f62\u5f0f\uff0c\u5bf9\u4e8e main \u5305\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"pkgpath")," \u8868\u793a\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"__main__"),", \u53ef\u7701\u7565\uff0c\u7701\u7565\u4e0d\u5199\u65f6\u8868\u793a main \u5305"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"identifier"),": \u8868\u793a\u9700\u8981\u4fee\u6539\u914d\u7f6e\u7684\u6807\u8bc6\u7b26\uff0c\u901a\u5e38\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"a.b.c")," \u7684\u5f62\u5f0f"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value"),": \u8868\u793a\u9700\u8981\u4fee\u6539\u914d\u7f6e\u7684\u503c\uff0c\u53ef\u4ee5\u662f\u4efb\u610f\u5408\u6cd5\u7684 KCL \u8868\u8fbe\u5f0f\uff0c\u6bd4\u5982\u6570\u5b57/\u5b57\u7b26\u4e32\u5b57\u9762\u503c\uff0clist/dict/schema \u8868\u8fbe\u5f0f\u7b49"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"="),": \u8868\u793a\u4fee\u6539identifier\u7684\u503c",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5f53 identifier \u5b58\u5728\u65f6\uff0c\u4fee\u6539\u5df2\u6709 identifier\u7684\u503c\u4e3a value"),(0,r.kt)("li",{parentName:"ul"},"\u5f53 identifier \u4e0d\u5b58\u5728\u65f6\uff0c\u6dfb\u52a0 identifier\u5c5e\u6027\uff0c\u5e76\u5c06\u5176\u503c\u8bbe\u7f6e\u4e3a value"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-"),": \u8868\u793a\u5220\u9664 identifier\u5c5e\u6027",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5f53 identifier \u5b58\u5728\u65f6\uff0c\u76f4\u63a5\u8fdb\u884c\u5220\u9664"),(0,r.kt)("li",{parentName:"ul"},"\u5f53 identifier \u4e0d\u5b58\u5728\u65f6\uff0c\u5bf9\u914d\u7f6e\u4e0d\u4f5c\u4efb\u4f55\u4fee\u6539")))),(0,r.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u5f53 ",(0,r.kt)("inlineCode",{parentName:"p"},"identifier")," \u51fa\u73b0\u591a\u6b21\u65f6\uff0c\u4fee\u6539/\u5220\u9664\u5168\u90e8 ",(0,r.kt)("inlineCode",{parentName:"p"},"identifier")," \u7684\u503c"),(0,r.kt)("p",null,"\u6b64\u5916\uff0c\u5728 KCL \u4e2d\u8fd8\u63d0\u4f9b\u4e86 API \u7528\u4e8e\u53d8\u91cf\u67e5\u8be2\u548c\u4fee\u6539\uff0c\u8be6\u89c1 ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/xlang-api/"},"API \u6587\u6863")),(0,r.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("h3",{id:"\u4fee\u6539\u793a\u4f8b"},"\u4fee\u6539\u793a\u4f8b"),(0,r.kt)("p",null,"KCL \u4ee3\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'schema Person:\n    name: str\n    age: int\n\nperson = Person {\n    name = "Alice"\n    age = 18\n}\n')),(0,r.kt)("p",null,"\u6267\u884c\u5982\u4e0b\u547d\u4ee4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'kcl main.k -O :person.name=\\"Bob\\" -O :person.age=10\n')),(0,r.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"person:\n  name: Bob\n  age: 10\n")),(0,r.kt)("p",null,"\u6b64\u5916\uff0c\u5f53\u6211\u4eec\u4f7f\u7528 KCL CLI ",(0,r.kt)("inlineCode",{parentName:"p"},"-d")," \u53c2\u6570\u65f6\uff0cKCL \u6587\u4ef6\u5c06\u540c\u65f6\u4fee\u6539\u4e3a\u4ee5\u4e0b\u5185\u5bb9"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'kcl main.k -O :person.name=\\"Bob\\" -O :person.age=10 -d\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'schema Person:\n    name: str\n    age: int\n\nperson = Person {\n    name = "Bob"\n    age = 10\n}\n')),(0,r.kt)("p",null,"\u53e6\u5916\u4e00\u4e2a\u66f4\u590d\u6742\u7684\u4f8b\u5b50"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'schema Person:\n    name: str\n    age: int\n    ids?: [int]\n\nperson = Person {\n    name = "Alice"\n    age = 10\n}\n')),(0,r.kt)("p",null,"\u6267\u884c\u5982\u4e0b\u547d\u4ee4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kcl main.k -O :person.ids=\\[1,2\\]\n")),(0,r.kt)("p",null,"\u8f93\u51fa\u4e3a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"person:\n  name: Alice\n  age: 10\n  ids:\n    - 1\n    - 2\n")),(0,r.kt)("h3",{id:"\u5220\u9664\u793a\u4f8b"},"\u5220\u9664\u793a\u4f8b"),(0,r.kt)("p",null,"KCL \u4ee3\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'schema Config:\n    x?: int = 1\n    y?: str = "s"\n\nconfig = Config {\n    x = 2\n}\n')),(0,r.kt)("p",null,"\u6267\u884c\u5982\u4e0b\u547d\u4ee4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kcl main.k -O config.x-\n")),(0,r.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"config:\n  x: 1\n  y: s\n")),(0,r.kt)("h3",{id:"api"},"API"),(0,r.kt)("p",null,"\u6b64\u5916\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u901a\u8fc7",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/xlang-api/overview"},"\u591a\u8bed\u8a00 API")," \u81ea\u52a8\u4fee\u6539\u914d\u7f6e\u5c5e\u6027"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u9762\u7684 KCL \u4ee3\u7801\u7247\u6bb5 (\u547d\u540d\u4e3a main.k) \u548c RestAPI \u4e3a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import regex\n\nschema AppConfig:\n    image: str\n\n    check:\n        regex.match(image, r"^([a-z0-9\\.\\:]+)\\.([a-z]+)\\:([a-z0-9]+)\\/([a-z0-9\\.]+)\\/([a-z0-9-_.:]+)$"), "image name should satisfy the \\`REPOSITORY:TAG\\` form"\n\nappConfig = AppConfig {\n    image = "nginx:1.13.9"\n}\n')),(0,r.kt)("p",null,"\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u542f\u52a8 RestAPI \u670d\u52a1\u7aef"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'kclvm -m gunicorn "kclvm.program.rpc-server.__main__:create_app()" -t 120 -w 4 -k uvicorn.workers.UvicornWorker -b :2021\n')),(0,r.kt)("p",null,"\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4 POST \u547d\u4ee4\u8bf7\u6c42\u914d\u7f6e\u4fee\u6539\u670d\u52a1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST http://127.0.0.1:2021/api:protorpc/KclvmService.OverrideFile -H \'content-type: accept/json\' -d \'{\n    "file": "main.k",\n    "specs": ["appConfig.image=\\"nginx:1.14.0\\""]\n}\'\n')),(0,r.kt)("p",null,"\u670d\u52a1\u8c03\u7528\u5b8c\u6210\u540e\uff0cmain.k \u4f1a\u88ab\u4fee\u6539\u4e3a\u5982\u4e0b\u5f62\u5f0f:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import regex\n\nschema AppConfig:\n    image: str\n\n    check:\n        regex.match(image, r"^([a-z0-9\\.\\:]+)\\.([a-z]+)\\:([a-z0-9]+)\\/([a-z0-9\\.]+)\\/([a-z0-9-_.:]+)$"), "image name should satisfy the \\`REPOSITORY:TAG\\` form"\n\nappConfig = AppConfig {\n    image = "nginx:1.14.0"\n}\n')))}m.isMDXComponent=!0},62787:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/14-kcl-image-update-de385287fb7173d5825bdb00bd85c6c0.png"},5912:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/15-kcl-automation-e3e81ff935a111c098153bae5bf5b34e.png"}}]);