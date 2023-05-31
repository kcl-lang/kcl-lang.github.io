"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[17577],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,k=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(k,p(p({ref:n},c),{},{components:t})):r.createElement(k,p({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var s=2;s<o;s++)p[s]=t[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},50296:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const o={title:"\u62bd\u8c61",sidebar_position:3},p=void 0,l={unversionedId:"user_docs/guides/abstraction",id:"version-0.4.6/user_docs/guides/abstraction",title:"\u62bd\u8c61",description:"\u4ec0\u4e48\u662f\u62bd\u8c61",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.4.6/user_docs/guides/abstraction.md",sourceDirName:"user_docs/guides",slug:"/user_docs/guides/abstraction",permalink:"/zh-CN/docs/0.4.6/user_docs/guides/abstraction",draft:!1,editUrl:"https://github.com/KusionStack/kcl-lang.io/tree/main/versioned_docs/version-0.4.6/user_docs/guides/abstraction.md",tags:[],version:"0.4.6",lastUpdatedBy:"peefy",lastUpdatedAt:1685538105,formattedLastUpdatedAt:"2023\u5e745\u670831\u65e5",sidebarPosition:3,frontMatter:{title:"\u62bd\u8c61",sidebar_position:3},sidebar:"user_docs",previous:{title:"\u6821\u9a8c",permalink:"/zh-CN/docs/0.4.6/user_docs/guides/validation"},next:{title:"\u6a21\u578b\u5b9a\u4e49",permalink:"/zh-CN/docs/0.4.6/user_docs/guides/schema-definition"}},i={},s=[{value:"\u4ec0\u4e48\u662f\u62bd\u8c61",id:"\u4ec0\u4e48\u662f\u62bd\u8c61",level:2},{value:"\u4f7f\u7528 KCL \u8fdb\u884c\u62bd\u8c61",id:"\u4f7f\u7528-kcl-\u8fdb\u884c\u62bd\u8c61",level:2},{value:"1. \u83b7\u53d6\u793a\u4f8b",id:"1-\u83b7\u53d6\u793a\u4f8b",level:3},{value:"2. \u5c06\u5e94\u7528\u914d\u7f6e\u8f6c\u6362\u4e3a Docker Compose \u914d\u7f6e",id:"2-\u5c06\u5e94\u7528\u914d\u7f6e\u8f6c\u6362\u4e3a-docker-compose-\u914d\u7f6e",level:3},{value:"3. \u5c06\u5e94\u7528\u914d\u7f6e\u8f6c\u6362\u4e3a Kubernetes Deployment and Service \u8d44\u6e90\u6e05\u5355",id:"3-\u5c06\u5e94\u7528\u914d\u7f6e\u8f6c\u6362\u4e3a-kubernetes-deployment-and-service-\u8d44\u6e90\u6e05\u5355",level:3},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:2},{value:"\u66f4\u591a\u4fe1\u606f",id:"\u66f4\u591a\u4fe1\u606f",level:2}],c={toc:s};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4ec0\u4e48\u662f\u62bd\u8c61"},"\u4ec0\u4e48\u662f\u62bd\u8c61"),(0,a.kt)("p",null,"\u62bd\u8c61\u662f\u6307\u4e00\u4e2a\u5b9e\u4f53\u7684\u7b80\u5316\u8868\u793a\uff0c\u5b83\u5141\u8bb8\u9690\u85cf\u7279\u5b9a\u7684\u5177\u4f53\u7ec6\u8282\uff0c\u540c\u65f6\u5411\u7a0b\u5e8f\u5458\u63d0\u4f9b\u6700\u76f8\u5173\u7684\u4fe1\u606f\u3002\u6bcf\u4e00\u4e2a\u62bd\u8c61\u90fd\u662f\u4e3a\u6ee1\u8db3\u7279\u5b9a\u9700\u6c42\u800c\u5b9a\u5236\u7684\uff0c\u5e76\u4e14\u53ef\u4ee5\u6781\u5927\u5730\u63d0\u9ad8\u7ed9\u5b9a\u5b9e\u4f53\u7684\u53ef\u7528\u6027\u3002\u5728 KCL \u7684\u4e0a\u4e0b\u6587\u4e2d\uff0c\u62bd\u8c61\u53ef\u4ee5\u4f7f\u4ee3\u7801\u66f4\u5bb9\u6613\u7406\u89e3\u548c\u7ef4\u62a4\uff0c\u540c\u65f6\u4e5f\u53ef\u4ee5\u7b80\u5316\u7528\u6237\u754c\u9762\u3002"),(0,a.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u4ee3\u7801\u62bd\u8c61\u5e76\u4e0d\u662f\u4e3a\u4e86\u51cf\u5c11\u4ee3\u7801\u5927\u5c0f\uff0c\u800c\u662f\u4e3a\u4e86\u63d0\u9ad8\u4ee3\u7801\u7684\u53ef\u7ef4\u62a4\u6027\u548c\u53ef\u6269\u5c55\u6027\u3002\u5728\u62bd\u8c61\u4ee3\u7801\u7684\u8fc7\u7a0b\u4e2d\uff0c\u5e94\u8003\u8651\u53ef\u91cd\u7528\u6027\u3001\u53ef\u8bfb\u6027\u548c\u53ef\u6269\u5c55\u6027\u7b49\u56e0\u7d20\uff0c\u5e76\u6839\u636e\u9700\u8981\u5bf9\u4ee3\u7801\u8fdb\u884c\u4e0d\u65ad\u4f18\u5316\u3002"),(0,a.kt)("p",null,"\u826f\u597d\u7684\u62bd\u8c61\u53ef\u4ee5\u63d0\u4f9b\u5982\u4e0b\u4ef7\u503c"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u63d0\u4f9b\u4e0d\u540c\u7684\u7126\u70b9\uff0c\u4e0d\u540c\u89d2\u8272\u548c\u573a\u666f\u5173\u6ce8\u70b9\u5206\u79bb\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5c4f\u853d\u8f83\u4f4e\u7ea7\u522b\u7684\u7ec6\u8282\uff0c\u907f\u514d\u6f5c\u5728\u7684\u9519\u8bef\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u63d0\u5347\u7528\u6237\u754c\u9762\u548c\u81ea\u52a8\u5316\u53cb\u597d\u6027\u3002")),(0,a.kt)("p",null,"KCL \u81ea\u8eab\u53ef\u80fd\u4e0d\u4f1a\u8bc4\u4f30\u7528\u6237\u5b9a\u4e49\u6a21\u578b\u62bd\u8c61\u7684\u5408\u7406\u6027\uff0c\u4f46\u5b83\u63d0\u4f9b\u4e86\u6280\u672f\u89e3\u51b3\u65b9\u6848\u6765\u5e2e\u52a9\u7528\u6237\u6784\u5efa\u62bd\u8c61\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528-kcl-\u8fdb\u884c\u62bd\u8c61"},"\u4f7f\u7528 KCL \u8fdb\u884c\u62bd\u8c61"),(0,a.kt)("p",null,"\u73b0\u5728\uff0c\u8ba9\u6211\u4eec\u5c06 Docker Compose \u548c Kubernetes \u8d44\u6e90\u62bd\u8c61\u4e3a\u5e94\u7528\u7a0b\u5e8f\u914d\u7f6e"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Docker Compose")," \u662f\u4e00\u4e2a\u7528\u4e8e\u5b9a\u4e49\u548c\u8fd0\u884c\u591a\u5bb9\u5668 Docker \u5e94\u7528\u7a0b\u5e8f\u7684\u5de5\u5177\u3002\u4f7f\u7528 Docker Compose\uff0c\u60a8\u53ef\u4ee5\u5728\u4e00\u4e2a\u6587\u4ef6\u4e2d\u5b9a\u4e49\u5e94\u7528\u7a0b\u5e8f\u7684\u670d\u52a1\u3001\u7f51\u7edc\u548c\u5377\uff0c\u7136\u540e\u4f7f\u7528\u5b83\u4f5c\u4e3a\u4e00\u4e2a\u5355\u5143\u542f\u52a8\u548c\u505c\u6b62\u5e94\u7528\u7a0b\u5e8f\u3002Docker Compose \u901a\u8fc7\u5904\u7406\u7f51\u7edc\u3001\u5b58\u50a8\u548c\u5176\u4ed6\u57fa\u7840\u8bbe\u65bd\u95ee\u9898\u7684\u7ec6\u8282\uff0c\u7b80\u5316\u4e86\u8fd0\u884c\u590d\u6742\u7684\u591a\u5bb9\u5668\u5e94\u7528\u7a0b\u5e8f\u7684\u8fc7\u7a0b\u3002"),(0,a.kt)("p",null,"Kubernetes \u6e05\u5355\u662f\u5b9a\u4e49 Kubernete \u5bf9\u8c61\uff08\u5982 Pods\u3001Deployments \u548c Services\uff09\u7684 YAML \u6587\u4ef6\u3002\u6e05\u5355\u63d0\u4f9b\u4e86\u4e00\u79cd\u58f0\u660e\u6027\u7684\u65b9\u6cd5\u6765\u5b9a\u4e49\u5e94\u7528\u7a0b\u5e8f\u7684\u6240\u9700\u72b6\u6001\uff0c\u5305\u62ec\u526f\u672c\u6570\u91cf\u3001\u8981\u4f7f\u7528\u7684\u955c\u50cf\u548c\u7f51\u7edc\u914d\u7f6e\u3002Kubernetes \u4f7f\u7528\u6e05\u5355\u6765\u521b\u5efa\u548c\u7ba1\u7406\u90e8\u7f72\u548c\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\u6240\u9700\u7684\u8d44\u6e90\u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4e9b\u53c2\u8003\u8d44\u6599\uff0c\u53ef\u4ee5\u5e2e\u52a9\u4e86\u89e3\u66f4\u591a\u5173\u4e8e Docker Compose \u548c Kubernetes \u76f8\u5173\u7684\u4fe1\u606f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/"},"Docker Compose \u6587\u6863")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/"},"Kubernetes \u5bf9\u8c61\u6587\u6863"))),(0,a.kt)("p",null,"\u4ee5\u5e94\u7528\u7a0b\u5e8f\u4e3a\u4e2d\u5fc3\u7684\u5f00\u53d1\u4f7f\u5f00\u53d1\u4eba\u5458\u80fd\u591f\u4e13\u6ce8\u4e8e\u5176\u5de5\u4f5c\u8d1f\u8f7d\u7684\u4f53\u7cfb\u7ed3\u6784\uff0c\u800c\u4e0d\u662f\u76ee\u6807\u73af\u5883\u3001\u57fa\u7840\u8bbe\u65bd\u6216\u5e73\u53f0\u4e2d\u7684\u6280\u672f\u6808\u3002\u6211\u4eec\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"App")," \u7ed3\u6784\u5b9a\u4e49\u4e86\u5e94\u7528\u7a0b\u5e8f\u6a21\u578b\uff0c\u7136\u540e\u4f7f\u7528 KCL CLI \u5c06\u5176\u7ffb\u8bd1\u5230\u591a\u4e2a\u5e73\u53f0\uff0c\u4f8b\u5982\u4e0d\u540c\u7248\u672c\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Docker Compose")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"Kubernetes"),"\u3002\u8be5\u5e94\u7528\u7a0b\u5e8f\u6a21\u578b\u65e8\u5728\u901a\u8fc7\u53ea\u9700\u5b9a\u4e49\u4e00\u4e2a\u8de8\u591a\u4e2a\u5e73\u53f0\u5de5\u4f5c\u7684 KCL \u6587\u4ef6\u6765\u51cf\u5c11\u5f00\u53d1\u4eba\u5458\u7684\u5de5\u4f5c\u91cf\u548c\u8ba4\u77e5\u8d1f\u8377\u3002\u73b0\u5728\uff0c\u8ba9\u6211\u4eec\u5b66\u4e60\u5982\u4f55\u505a\u5230\u8fd9\u4e00\u70b9\u3002"),(0,a.kt)("h3",{id:"1-\u83b7\u53d6\u793a\u4f8b"},"1. \u83b7\u53d6\u793a\u4f8b"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u6267\u884c git \u547d\u4ee4\u83b7\u5f97\u7528\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/KusionStack/kcl-lang.io.git/\ncd ./kcl-lang.io/examples/abstraction\n")),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u663e\u793a\u914d\u7f6e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cat main.k\n")),(0,a.kt)("p",null,"\u8f93\u51fa\u4e3a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import .app\n\napp.App {\n    name = "app"\n    containers.ngnix = {\n        image = "ngnix"\n        ports = [{containerPort = 80}]\n    }\n    service.ports = [{ port = 80 }]\n}\n')),(0,a.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"App")," schema \u5b9a\u4e49\u4e86\u4e00\u4e2a\u914d\u7f6e\uff0c\u5176\u4e2d\u6211\u4eec\u914d\u7f6e\u4e86\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"ngnix")," \u5bb9\u5668\uff0c\u5e76\u5f00\u542f ",(0,a.kt)("inlineCode",{parentName:"p"},"80")," \u7aef\u53e3\u914d\u7f6e\u3002"),(0,a.kt)("p",null,"\u6b64\u5916\uff0cKCL \u5141\u8bb8\u5f00\u53d1\u4eba\u5458\u4ee5\u58f0\u660e\u5f0f\u7684\u65b9\u5f0f\u5b9a\u4e49\u5e94\u7528\u7a0b\u5e8f\u6240\u9700\u7684\u8d44\u6e90\uff0c\u5e76\u5141\u8bb8\u751f\u6210\u7279\u5b9a\u4e8e\u5e73\u53f0\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"docker_compose.yaml")," \u6216 Kubernetes ",(0,a.kt)("inlineCode",{parentName:"p"},"manifests.yaml")," \u6587\u4ef6\u3002\u63a5\u4e0b\u6765\uff0c\u8ba9\u6211\u4eec\u751f\u6210\u76f8\u5e94\u7684\u914d\u7f6e\u3002"),(0,a.kt)("h3",{id:"2-\u5c06\u5e94\u7528\u914d\u7f6e\u8f6c\u6362\u4e3a-docker-compose-\u914d\u7f6e"},"2. \u5c06\u5e94\u7528\u914d\u7f6e\u8f6c\u6362\u4e3a Docker Compose \u914d\u7f6e"),(0,a.kt)("p",null,"\u5982\u679c\u6211\u4eec\u60f3\u5c06\u5e94\u7528\u7a0b\u5e8f\u914d\u7f6e\u8f6c\u6362\u4e3a Docker Compose \u914d\u7f6e\uff0c\u6211\u4eec\u53ef\u4ee5\u7b80\u5355\u5730\u8fd0\u884c\u5982\u4e0b\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kcl main.k docker_compose_render.k\nservices:\n  app:\n    image: ngnix\n    ports:\n      - published: 80\n        target: 80\n        protocol: TCP\n")),(0,a.kt)("h3",{id:"3-\u5c06\u5e94\u7528\u914d\u7f6e\u8f6c\u6362\u4e3a-kubernetes-deployment-and-service-\u8d44\u6e90\u6e05\u5355"},"3. \u5c06\u5e94\u7528\u914d\u7f6e\u8f6c\u6362\u4e3a Kubernetes Deployment and Service \u8d44\u6e90\u6e05\u5355"),(0,a.kt)("p",null,"\u5982\u679c\u6211\u4eec\u60f3\u5c06\u5e94\u7528\u7a0b\u5e8f\u914d\u7f6e\u8f6c\u6362\u4e3a Kubernetes \u6e05\u5355\uff0c\u6211\u4eec\u53ef\u4ee5\u7b80\u5355\u5730\u8fd0\u884c\u5982\u4e0b\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kcl main.k kubernetes_render.k\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: app\n  labels:\n    app: app\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: app\n  template:\n    metadata:\n      labels:\n        app: app\n    spec:\n      containers:\n        - name: ngnix\n          image: ngnix\n          ports:\n            - protocol: TCP\n              containerPort: 80\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: app\n  labels:\n    app: app\nspec:\n  selector:\n    app: app\n  ports:\n    - port: 80\n      protocol: TCP\n")),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u60f3\u4e86\u89e3\u6709\u5173\u5e94\u7528\u7a0b\u5e8f\u6a21\u578b\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u53ef\u4ee5\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/kcl-lang.io/tree/main/examples/abstraction"},"\u6b64\u5904"),"."),(0,a.kt)("h2",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),(0,a.kt)("p",null,"\u901a\u8fc7\u4f7f\u7528 KCL\uff0c\u6211\u4eec\u80fd\u591f\u5206\u79bb\u6a21\u578b\u7684\u62bd\u8c61\u548c\u5b9e\u73b0\u7ec6\u8282\uff0c\u5141\u8bb8\u5c06\u62bd\u8c61\u6a21\u578b\u6620\u5c04\u5230\u5404\u79cd\u57fa\u7840\u8bbe\u65bd\u6216\u5e73\u53f0\u3002\u8fd9\u662f\u901a\u8fc7\u4e0d\u540c\u5b9e\u73b0\u4e4b\u95f4\u7684\u7075\u6d3b\u5207\u6362\u548c KCL \u7ec4\u5408\u7f16\u8bd1\u6765\u5b9e\u73b0\u7684\uff0c\u4ee5\u5c4f\u853d\u914d\u7f6e\u5dee\u5f02\uff0c\u51cf\u8f7b\u8ba4\u77e5\u8d1f\u62c5\u3002"),(0,a.kt)("h2",{id:"\u66f4\u591a\u4fe1\u606f"},"\u66f4\u591a\u4fe1\u606f"),(0,a.kt)("p",null,"\u9664\u4e86\u624b\u52a8\u7ef4\u62a4\u914d\u7f6e\u5916\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u4f7f\u7528 KCL API \u5c06",(0,a.kt)("strong",{parentName:"p"},"\u81ea\u52a8\u914d\u7f6e\u66f4\u6539\u80fd\u529b"),"\u96c6\u6210\u5230\u6211\u4eec\u7684\u5e94\u7528\u7a0b\u5e8f\u4e2d\u3002\u6709\u5173 KCL \u81ea\u52a8\u5316\u80fd\u529b\u7684\u76f8\u5173\u8bf4\u660e\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/docs/user_docs/guides/automation"},"\u6b64\u5904"),"\u3002"))}u.isMDXComponent=!0}}]);