"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[68898],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),k=o,g=p["".concat(s,".").concat(k)]||p[k]||d[k]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=k;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4915:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={id:"structure",sidebar_label:"\u5de5\u7a0b\u7ed3\u6784"},i="Konfig \u5de5\u7a0b\u7ed3\u6784",c={unversionedId:"user_docs/guides/working-with-konfig/structure",id:"version-0.4.6/user_docs/guides/working-with-konfig/structure",title:"Konfig \u5de5\u7a0b\u7ed3\u6784",description:"\u672c\u6587\u4e3b\u8981\u89e3\u91ca Konfig \u914d\u7f6e\u5927\u5e93\u7684\u76ee\u5f55\u548c\u4ee3\u7801\u7ed3\u6784",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.4.6/user_docs/guides/working-with-konfig/2-structure.md",sourceDirName:"user_docs/guides/working-with-konfig",slug:"/user_docs/guides/working-with-konfig/structure",permalink:"/zh-CN/docs/0.4.6/user_docs/guides/working-with-konfig/structure",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.4.6/user_docs/guides/working-with-konfig/2-structure.md",tags:[],version:"0.4.6",lastUpdatedBy:"peefy",lastUpdatedAt:1690883666,formattedLastUpdatedAt:"2023\u5e748\u67081\u65e5",sidebarPosition:2,frontMatter:{id:"structure",sidebar_label:"\u5de5\u7a0b\u7ed3\u6784"},sidebar:"user_docs",previous:{title:"\u6982\u8ff0",permalink:"/zh-CN/docs/0.4.6/user_docs/guides/working-with-konfig/overview"},next:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/zh-CN/docs/0.4.6/user_docs/guides/working-with-konfig/guide"}},s={},l=[{value:"\u6574\u4f53\u7ed3\u6784",id:"\u6574\u4f53\u7ed3\u6784",level:2},{value:"\u6838\u5fc3\u6a21\u578b\u5e93\u7ed3\u6784",id:"\u6838\u5fc3\u6a21\u578b\u5e93\u7ed3\u6784",level:2},{value:"Project \u548c Stack \u7ed3\u6784",id:"project-\u548c-stack-\u7ed3\u6784",level:2},{value:"Project",id:"project",level:3},{value:"Stack",id:"stack",level:3},{value:"Project \u4e0e Stack \u4e4b\u95f4\u7684\u5173\u7cfb",id:"project-\u4e0e-stack-\u4e4b\u95f4\u7684\u5173\u7cfb",level:3}],u={toc:l},p="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"konfig-\u5de5\u7a0b\u7ed3\u6784"},"Konfig \u5de5\u7a0b\u7ed3\u6784"),(0,o.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u89e3\u91ca Konfig \u914d\u7f6e\u5927\u5e93\u7684\u76ee\u5f55\u548c\u4ee3\u7801\u7ed3\u6784"),(0,o.kt)("h2",{id:"\u6574\u4f53\u7ed3\u6784"},"\u6574\u4f53\u7ed3\u6784"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u251c\u2500\u2500 .github             # CI \u811a\u672c\n\u251c\u2500\u2500 Makefile            # \u901a\u8fc7 Makefile \u5c01\u88c5\u5e38\u7528\u547d\u4ee4\n\u251c\u2500\u2500 README.md           # \u914d\u7f6e\u5927\u5e93\u8bf4\u660e\n\u251c\u2500\u2500 appops              # \u5e94\u7528\u8fd0\u7ef4\u76ee\u5f55\uff0c\u7528\u6765\u653e\u7f6e\u6240\u6709\u5e94\u7528\u7684 KCL \u8fd0\u7ef4\u914d\u7f6e\n\u2502   \u251c\u2500\u2500 clickhouse-operator\n\u2502   \u251c\u2500\u2500 code-city\n\u2502   \u251c\u2500\u2500 guestbook\n\u2502   \u251c\u2500\u2500 http-echo\n\u2502   \u2514\u2500\u2500 nginx-example\n\u251c\u2500\u2500 base                # \u6a21\u578b\u5e93\n\u2502   \u251c\u2500\u2500 examples        # \u6837\u4f8b\u4ee3\u7801\n\u2502   \u2502   \u251c\u2500\u2500 monitoring  # \u76d1\u63a7\u914d\u7f6e\u6837\u4f8b\n\u2502   \u2502   \u251c\u2500\u2500 native      # Kubernetes \u8d44\u6e90\u914d\u7f6e\u6837\u4f8b\n\u2502   \u2502   \u251c\u2500\u2500 provider    # \u57fa\u7840\u8d44\u6e90\u914d\u7f6e\u6837\u4f8b\n\u2502   \u2502   \u2514\u2500\u2500 server      # \u4e91\u539f\u751f\u5e94\u7528\u8fd0\u7ef4\u914d\u7f6e\u6a21\u578b\u6837\u4f8b\n\u2502   \u2514\u2500\u2500 pkg\n\u2502       \u251c\u2500\u2500 kusion_kubernetes   # Kubernetes \u5e95\u5c42\u6a21\u578b\u5e93\n\u2502       \u251c\u2500\u2500 kusion_models       # \u6838\u5fc3\u6a21\u578b\u5e93\n\u2502       \u251c\u2500\u2500 kusion_prometheus   # Prometheus \u5e95\u5c42\u6a21\u578b\u5e93\n\u2502       \u2514\u2500\u2500 kusion_provider     # \u57fa\u7840\u8d44\u6e90 \u5e95\u5c42\u6a21\u578b\u5e93\n\u2514\u2500\u2500 kcl.mod             # \u5927\u5e93\u914d\u7f6e\u6587\u4ef6\uff0c\u901a\u5e38\u7528\u6765\u6807\u8bc6\u5927\u5e93\u6839\u76ee\u5f55\u4f4d\u7f6e\u4ee5\u53ca\u5927\u5e93\u6240\u9700\u4f9d\u8d56\n")),(0,o.kt)("h2",{id:"\u6838\u5fc3\u6a21\u578b\u5e93\u7ed3\u6784"},"\u6838\u5fc3\u6a21\u578b\u5e93\u7ed3\u6784"),(0,o.kt)("p",null,"\u6838\u5fc3\u6a21\u578b\u5e93\u4e00\u822c\u547d\u540d\u4e3a kusion_models\uff0c\u4e3b\u8981\u5305\u542b\u524d\u7aef\u6a21\u578b\u3001\u540e\u7aef\u6a21\u578b\u3001Mixin\u3001\u6e32\u67d3\u5668\u7b49\uff0c\u76ee\u5f55\u7ed3\u6784\u4e3a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 commons         # \u57fa\u7840\u8d44\u6e90\u6838\u5fc3\u6a21\u578b\u5e93\n\u251c\u2500\u2500 kube            # \u4e91\u539f\u751f\u8d44\u6e90\u6838\u5fc3\u6a21\u578b\u5e93\n\u2502   \u251c\u2500\u2500 backend         # \u540e\u7aef\u6a21\u578b\n\u2502   \u251c\u2500\u2500 frontend        # \u524d\u7aef\u6a21\u578b\n\u2502   \u2502   \u251c\u2500\u2500 common          # \u901a\u7528\u524d\u7aef\u6a21\u578b\n\u2502   \u2502   \u251c\u2500\u2500 configmap       # ConfigMap \u524d\u7aef\u6a21\u578b\n\u2502   \u2502   \u251c\u2500\u2500 container       # \u5bb9\u5668\u524d\u7aef\u6a21\u578b\n\u2502   \u2502   \u251c\u2500\u2500 ingress         # Ingress \u524d\u7aef\u6a21\u578b\n\u2502   \u2502   \u251c\u2500\u2500 resource        # \u8d44\u6e90\u89c4\u683c\u524d\u7aef\u6a21\u578b\n\u2502   \u2502   \u251c\u2500\u2500 secret          # Secret \u524d\u7aef\u6a21\u578b\n\u2502   \u2502   \u251c\u2500\u2500 service         # Service \u524d\u7aef\u6a21\u578b\n\u2502   \u2502   \u251c\u2500\u2500 sidecar         # Sidecar \u5bb9\u5668\u524d\u7aef\u6a21\u578b\n\u2502   \u2502   \u251c\u2500\u2500 strategy        # \u7b56\u7565\u524d\u7aef\u6a21\u578b\n\u2502   \u2502   \u251c\u2500\u2500 volume          # Volume \u524d\u7aef\u6a21\u578b\n\u2502   \u2502   \u2514\u2500\u2500 server.k        # \u4e91\u539f\u751f\u5e94\u7528\u8fd0\u7ef4\u524d\u7aef\u6a21\u578b\n\u2502   \u251c\u2500\u2500 metadata        # \u5e94\u7528\u8fd0\u7ef4\u7684\u5143\u6570\u636e\u6a21\u578b\n\u2502   \u251c\u2500\u2500 mixins          # \u7edf\u4e00\u653e\u7f6e\u53ef\u590d\u7528\u7684 Mixin\n\u2502   \u251c\u2500\u2500 render          # \u6e32\u67d3\u5668\uff0c\u628a\u524d\u540e\u7aef\u6a21\u578b\u8054\u7cfb\u5728\u4e00\u8d77\u7684\u6865\u6881\n\u2502   \u251c\u2500\u2500 templates       # \u9759\u6001\u914d\u7f6e\n\u2502   \u2514\u2500\u2500 utils           # \u5de5\u5177\u65b9\u6cd5\n\u2514\u2500\u2500 metadata        # \u901a\u7528\u5143\u6570\u636e\u6a21\u578b\n")),(0,o.kt)("h2",{id:"project-\u548c-stack-\u7ed3\u6784"},"Project \u548c Stack \u7ed3\u6784"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(31079).Z,width:"1204",height:"764"})),(0,o.kt)("p",null,"Project \u548c Stack \u662f\u7528\u4e8e\u7ec4\u7ec7 Konfig \u7684\u903b\u8f91\u9694\u79bb\u6982\u5ff5\u3002"),(0,o.kt)("h3",{id:"project"},"Project"),(0,o.kt)("p",null,'\u4efb\u4f55\u5305\u542b\u6587\u4ef6 "project.yaml" \u7684\u6587\u4ef6\u5939\u90fd\u5c06\u88ab\u89c6\u4e3a\u4e00\u4e2a Project\uff0c"project.yaml" \u7528\u4e8e\u63cf\u8ff0\u6b64 Project \u7684\u5143\u6570\u636e\uff0c\u5982 "name" \u548c "tenant" \u7b49\u3002\u9879\u76ee\u5fc5\u987b\u5177\u6709\u660e\u786e\u7684\u4e1a\u52a1\u8bed\u4e49\uff0c\u7528\u6237\u53ef\u4ee5\u5c06\u5e94\u7528\u7a0b\u5e8f\u6216\u8fd0\u7ef4\u573a\u666f\u6620\u5c04\u5230\u9879\u76ee\u3002'),(0,o.kt)("h3",{id:"stack"},"Stack"),(0,o.kt)("p",null,'\u4e0eProject\u4e00\u6837\uff0c\u5305\u542b\u6587\u4ef6 "stack.yaml" \u7684\u4efb\u4f55\u6587\u4ef6\u5939\u90fd\u5c06\u88ab\u89c6\u4e3a\u4e00\u4e2a Stack\uff0c"stack.yaml" \u7528\u4e8e\u63cf\u8ff0\u6b64 Stack \u7684\u5143\u6570\u636e\u3002Stack \u662f\u4e00\u7ec4 KCL \u6587\u4ef6\uff0c\u8868\u793a\u53ef\u4ee5\u5355\u72ec\u914d\u7f6e\u548c\u90e8\u7f72\u7684\u6700\u5c0f\u64cd\u4f5c\u5355\u5143\uff0c\u5b83\u901a\u5e38\u4ee3\u8868 CI/CD \u8fc7\u7a0b\u4e2d\u7684\u4e0d\u540c\u9636\u6bb5\u3002'),(0,o.kt)("h3",{id:"project-\u4e0e-stack-\u4e4b\u95f4\u7684\u5173\u7cfb"},"Project \u4e0e Stack \u4e4b\u95f4\u7684\u5173\u7cfb"),(0,o.kt)("p",null,"\u4e00\u4e2a Project \u5305\u542b\u4e00\u4e2a\u6216\u591a\u4e2a Stack\uff0cStack \u5fc5\u987b\u5c5e\u4e8e\u4e14\u53ea\u80fd\u5c5e\u4e8e\u4e00\u4e2a Project\u3002\u7528\u6237\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u9700\u8981\u89e3\u91ca Project \u548c Stack \u7684\u542b\u4e49\uff0c\u5e76\u7075\u6d3b\u7ec4\u7ec7 Konfig \u7ed3\u6784\u3002\u6839\u636e\u6211\u4eec\u7684\u7ecf\u9a8c\uff0c\u6211\u4eec\u63d0\u4f9b\u4ee5\u4e0b\u793a\u4f8b\u4f5c\u4e3a\u6700\u4f73\u5b9e\u8df5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 README.md       # Project \u4ecb\u7ecd\u6587\u4ef6\n\u251c\u2500\u2500 base            # \u5404\u73af\u5883\u901a\u7528\u914d\u7f6e\n\u2502   \u2514\u2500\u2500 base.k      # \u901a\u7528 KCL \u914d\u7f6e\n\u251c\u2500\u2500 dev             # \u73af\u5883\u7279\u6709\u914d\u7f6e\n\u2502   \u251c\u2500\u2500 ci-test     # \u6d4b\u8bd5\u76ee\u5f55\n\u2502   \u2502   \u251c\u2500\u2500 settings.yaml       # \u6d4b\u8bd5\u6570\u636e\n\u2502   \u2502   \u2514\u2500\u2500 stdout.golden.yaml  # \u6d4b\u8bd5\u671f\u671b\u7ed3\u679c\n\u2502   \u251c\u2500\u2500 kcl.yaml    # \u591a\u6587\u4ef6\u7f16\u8bd1\u914d\u7f6e\uff0c\u662f KCL \u7f16\u8bd1\u7684\u5165\u53e3\n\u2502   \u251c\u2500\u2500 main.k      # \u5f53\u524d\u73af\u5883 KCL \u914d\u7f6e\n\u2502   \u2514\u2500\u2500 stack.yaml  # Stack \u914d\u7f6e\u6587\u4ef6\n\u2514\u2500\u2500 project.yaml    # Project \u914d\u7f6e\u6587\u4ef6\n")),(0,o.kt)("p",null,'Project \u901a\u5e38\u8868\u793a\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\uff0cStack \u8868\u793a\u8be5\u5e94\u7528\u7a0b\u5e8f\u7684\u4e0d\u540c\u73af\u5883\u7684\u914d\u7f6e\uff0c\u4f8b\u5982 dev\u3001pre \u548c prod \u7b49\u3002\u901a\u7528\u914d\u7f6e\u53ef\u4ee5\u5b58\u50a8\u5728\u8be5 Project \u4e0b\u7684 "base" \u76ee\u5f55\u4e2d\u3002'))}d.isMDXComponent=!0},31079:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/project-stack-1538e650948e141eabc6d5cfa42aa54c.png"}}]);