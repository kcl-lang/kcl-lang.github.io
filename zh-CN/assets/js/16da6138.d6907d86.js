"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[75654],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>k});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),i=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},m=function(e){var n=i(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=i(t),c=l,k=d["".concat(s,".").concat(c)]||d[c]||u[c]||r;return t?a.createElement(k,p(p({ref:n},m),{},{components:t})):a.createElement(k,p({ref:n},m))}));function k(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,p=new Array(r);p[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[d]="string"==typeof e?e:l,p[1]=o;for(var i=2;i<r;i++)p[i]=t[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},10445:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>i});var a=t(87462),l=(t(67294),t(3905));const r={},p="KCL \u4e0e\u5176\u4ed6 Kubernetes \u914d\u7f6e\u7ba1\u7406\u5de5\u5177\u7684\u5f02\u540c - Kustomize \u7bc7",o={unversionedId:"user_docs/guides/working-with-k8s/vs_kustomize",id:"version-0.4.6/user_docs/guides/working-with-k8s/vs_kustomize",title:"KCL \u4e0e\u5176\u4ed6 Kubernetes \u914d\u7f6e\u7ba1\u7406\u5de5\u5177\u7684\u5f02\u540c - Kustomize \u7bc7",description:"\u8fd9\u4e00\u8282\u6211\u4eec\u901a\u8fc7\u4e0e\u5176\u4ed6 Kubernetes \u914d\u7f6e\u7ba1\u7406\u5de5\u5177\u7684\u5bf9\u6bd4\u5982 Kustomize \u4ecb\u7ecd KCL \u5728 Kubernetes \u914d\u7f6e\u7ba1\u7406\u573a\u666f\u66f4\u4e30\u5bcc\u7684\u5185\u5bb9\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.4.6/user_docs/guides/working-with-k8s/vs_kustomize.md",sourceDirName:"user_docs/guides/working-with-k8s",slug:"/user_docs/guides/working-with-k8s/vs_kustomize",permalink:"/zh-CN/docs/0.4.6/user_docs/guides/working-with-k8s/vs_kustomize",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.4.6/user_docs/guides/working-with-k8s/vs_kustomize.md",tags:[],version:"0.4.6",lastUpdatedBy:"Peefy",lastUpdatedAt:1706869561,formattedLastUpdatedAt:"2024\u5e742\u67082\u65e5",frontMatter:{},sidebar:"user_docs",previous:{title:"KCL \u4e0e\u5176\u4ed6 Kubernetes \u914d\u7f6e\u7ba1\u7406\u5de5\u5177\u7684\u5f02\u540c - Helm \u7bc7",permalink:"/zh-CN/docs/0.4.6/user_docs/guides/working-with-k8s/vs_helm"},next:{title:"\u6982\u8ff0",permalink:"/zh-CN/docs/0.4.6/user_docs/guides/working-with-konfig/overview"}},s={},i=[{value:"KCL \u548c Kustomize \u7684\u533a\u522b",id:"kcl-\u548c-kustomize-\u7684\u533a\u522b",level:2},{value:"Kustomize",id:"kustomize",level:3},{value:"KCL",id:"kcl",level:3},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:2}],m={toc:i},d="wrapper";function u(e){let{components:n,...t}=e;return(0,l.kt)(d,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"kcl-\u4e0e\u5176\u4ed6-kubernetes-\u914d\u7f6e\u7ba1\u7406\u5de5\u5177\u7684\u5f02\u540c---kustomize-\u7bc7"},"KCL \u4e0e\u5176\u4ed6 Kubernetes \u914d\u7f6e\u7ba1\u7406\u5de5\u5177\u7684\u5f02\u540c - Kustomize \u7bc7"),(0,l.kt)("p",null,"\u8fd9\u4e00\u8282\u6211\u4eec\u901a\u8fc7\u4e0e\u5176\u4ed6 Kubernetes \u914d\u7f6e\u7ba1\u7406\u5de5\u5177\u7684\u5bf9\u6bd4\u5982 Kustomize \u4ecb\u7ecd KCL \u5728 Kubernetes \u914d\u7f6e\u7ba1\u7406\u573a\u666f\u66f4\u4e30\u5bcc\u7684\u5185\u5bb9\u3002"),(0,l.kt)("h2",{id:"kcl-\u548c-kustomize-\u7684\u533a\u522b"},"KCL \u548c Kustomize \u7684\u533a\u522b"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://kustomize.io/"},"Kustomize")," \u63d0\u4f9b\u4e86\u4e00\u79cd\u65e0\u9700\u6a21\u677f\u548c\u5373\u53ef\u81ea\u5b9a\u4e49 Kubernetes \u8d44\u6e90\u57fa\u7840\u914d\u7f6e\u548c\u5dee\u5f02\u5316\u914d\u7f6e\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u901a\u8fc7\u6587\u4ef6\u7ea7\u7684 YAML \u914d\u7f6e\u65b9\u5f0f\u5b8c\u6210\u914d\u7f6e\u5408\u5e76\u6216\u8986\u76d6\u3002\u5728 Kustomize \u4e2d\u7528\u6237\u9700\u8981\u66f4\u8be6\u7ec6\u5730\u4e86\u89e3\u5c06\u8981\u53d1\u751f\u66f4\u6539\u7684\u5185\u5bb9\u548c\u4f4d\u7f6e\uff0c\u5bf9\u4e8e\u590d\u6742\u9012\u5f52\u8fc7\u6df1\u7684\u57fa\u7840 YAML \u53ef\u80fd\u4e0d\u592a\u5bb9\u6613\u901a\u8fc7\u9009\u62e9\u5668\u6765\u5339\u914d Kustomize \u6587\u4ef6\u3002"),(0,l.kt)("p",null,"\u800c\u5728 KCL \u4e2d\uff0c\u7528\u6237\u53ef\u4ee5\u76f4\u63a5\u628a\u5bf9\u5e94\u4ee3\u7801\u9700\u8981\u4fee\u6539\u7684\u914d\u7f6e\u4e66\u5199\u5728\u5bf9\u5e94\u7684\u5730\u65b9\uff0c\u514d\u53bb\u4e86\u9605\u8bfb\u57fa\u7840 YAML \u7684\u6210\u672c\uff0c\u540c\u65f6\u80fd\u591f\u901a\u8fc7\u4ee3\u7801\u7684\u65b9\u5f0f\u590d\u7528\u914d\u7f6e\u7247\u6bb5\uff0c\u907f\u514d YAML \u914d\u7f6e\u7684\u5927\u91cf\u590d\u5236\u7c98\u8d34\uff0c\u4fe1\u606f\u5bc6\u5ea6\u66f4\u9ad8\uff0c\u4e5f\u4e0d\u5bb9\u6613\u51fa\u9519\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\u4ee5\u4e00\u4e2a\u7ecf\u5178\u7684 Kustomize \u591a\u73af\u5883\u914d\u7f6e\u7ba1\u7406\u4f8b\u5b50\u8be6\u7ec6\u8bf4\u660e Kustomize \u548c KCL \u5728 Kubernetes \u8d44\u6e90\u914d\u7f6e\u7ba1\u7406\u4e0a\u7684\u533a\u522b\u3002"),(0,l.kt)("h3",{id:"kustomize"},"Kustomize"),(0,l.kt)("p",null,"Kustomize \u6709 base \u548c overlay \u7684\u6982\u5ff5\uff0cbases \u548c overlays \u4e00\u822c\u662f\u4e00\u4e2a\u5305\u542b ",(0,l.kt)("inlineCode",{parentName:"p"},"kustomization.yaml")," \u6587\u4ef6\u7684\u76ee\u5f55\uff0c\u4e00\u4e2a base \u53ef\u4ee5\u88ab\u591a\u4e2a overlay \u4f7f\u7528"),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u884c\u83b7\u5f97\u4e00\u4e2a\u5178\u578b\u7684 Kustomize \u5de5\u7a0b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa base \u76ee\u5f55\u5e76\u65b0\u5efa\u4e00\u4e2a deployment \u8d44\u6e90")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# Create a directory to hold the base\nmkdir base\n# Create a base/deployment.yaml\ncat <<EOF > base/deployment.yaml\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: ldap\n  labels:\n    app: ldap\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: ldap\n  template:\n    metadata:\n      labels:\n        app: ldap\n    spec:\n      containers:\n        - name: ldap\n          image: osixia/openldap:1.1.11\n          args: ["--copy-service"]\n          volumeMounts:\n            - name: ldap-data\n              mountPath: /var/lib/ldap\n          ports:\n            - containerPort: 389\n              name: openldap\n      volumes:\n        - name: ldap-data\n          emptyDir: {}\nEOF\n# Create a base/kustomization.yaml\ncat <<EOF > base/kustomization.yaml\nresources:\n- deployment.yaml\nEOF\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa\u4e00\u4e2a prod \u76ee\u5f55\u5e76\u653e\u7f6e\u751f\u4ea7\u73af\u5883\u7684\u914d\u7f6e")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Create a directory to hold the prod overlay\nmkdir prod\n# Create a prod/deployment.yaml\ncat <<EOF > prod/deployment.yaml\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: ldap\nspec:\n  replicas: 6\n  template:\n    spec:\n      volumes:\n        - name: ldap-data\n          emptyDir: null\n          gcePersistentDisk:\n            readOnly: true\n            pdName: ldap-persistent-storage\nEOF\ncat <<EOF > prod/kustomization.yaml\nresources:\n  - ../base\npatchesStrategicMerge:\n  - deployment.yaml\nEOF\n")),(0,l.kt)("p",null,"\u6b64\u65f6\u6211\u4eec\u53ef\u4ee5\u5f97\u5230\u4e00\u4e2a\u57fa\u672c\u7684 Kustomzie \u76ee\u5f55"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-txt"},".\n\u251c\u2500\u2500 base\n\u2502   \u251c\u2500\u2500 deployment.yaml\n\u2502   \u2514\u2500\u2500 kustomization.yaml\n\u2514\u2500\u2500 prod\n    \u251c\u2500\u2500 deployment.yaml\n    \u2514\u2500\u2500 kustomization.yaml\n")),(0,l.kt)("p",null,"\u5176\u4e2d\uff0cbase \u76ee\u5f55\u5b58\u653e\u7684\u662f\u57fa\u672c\u7684 deployment \u914d\u7f6e\uff0cprod \u73af\u5883\u5b58\u653e\u7684\u662f\u9700\u8981\u8986\u76d6\u7684 deployment \u914d\u7f6e\uff0c\u5728\u5176\u4e2d\u6307\u5b9a\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"metadata.name")," \u7b49\u5b57\u6bb5\u7528\u4e8e\u8868\u793a\u5bf9\u54ea\u4e2a\u8d44\u6e90\u8fdb\u884c\u8986\u76d6"),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u884c\u663e\u793a prod \u73af\u5883\u7684\u771f\u5b9e deployment \u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl kustomize ./prod\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  labels:\n    app: ldap\n  name: ldap\nspec:\n  replicas: 6\n  selector:\n    matchLabels:\n      app: ldap\n  template:\n    metadata:\n      labels:\n        app: ldap\n    spec:\n      containers:\n      - args:\n        - --copy-service\n        image: osixia/openldap:1.1.11\n        name: ldap\n        ports:\n        - containerPort: 389\n          name: openldap\n        volumeMounts:\n        - mountPath: /var/lib/ldap\n          name: ldap-data\n      volumes:\n      - gcePersistentDisk:\n          pdName: ldap-persistent-storage\n          readOnly: true\n        name: ldap-data\n")),(0,l.kt)("p",null,"\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u884c\u76f4\u63a5\u5c06\u914d\u7f6e\u4e0b\u53d1\u5230\u96c6\u7fa4\u5f53\u4e2d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl apply -k ./prod\n\ndeployment.apps/ldap created\n")),(0,l.kt)("h3",{id:"kcl"},"KCL"),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u7f16\u5199\u5982\u4e0b KCL \u4ee3\u7801\u5e76\u547d\u540d\u4e3a main.k"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'apiVersion = "apps/v1"\nkind = "Deployment"\nmetadata = {\n    name = "ldap"\n    labels.app = "ldap"\n}\nspec = {\n    replicas = 1\n    # When env is prod, override the `replicas` attribute with `6`\n    if option("env") == "prod": replicas = 6\n    # Assign `metadata.labels` to `selector.matchLabels`\n    selector.matchLabels = metadata.labels\n    template.metadata.labels = metadata.labels\n    template.spec.containers = [\n        {\n            name = metadata.name\n            image = "osixia/openldap:1.1.11"\n            args = ["--copy-service"]\n            volumeMounts = [{ name = "ldap-data", mountPath = "/var/lib/ldap" }]\n            ports = [{ containerPort = 80, name = "openldap" }]\n        }\n    ]\n    template.spec.volumes = [\n        {\n            name = "ldap-data"\n            emptyDir = {}\n            # When env is prod\n            # override the `emptyDir` attribute with `None`\n            # patch a `gcePersistentDisk` attribute with the value `{readOnly = True, pdName = "ldap-persistent-storage"}`\n            if option("env") == "prod":\n                emptyDir = None\n                gcePersistentDisk = {\n                    readOnly = True\n                    pdName = "ldap-persistent-storage"\n                }\n        }\n    ]\n}\n')),(0,l.kt)("p",null,"\u4e0a\u8ff0 KCL \u4ee3\u7801\u4e2d\u6211\u4eec\u5206\u522b\u58f0\u660e\u4e86\u4e00\u4e2a Kubernetes Deployment \u8d44\u6e90\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"apiVersion"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"kind"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"metadata")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"spec")," \u7b49\u53d8\u91cf\uff0c\u5e76\u5206\u522b\u8d4b\u503c\u4e86\u76f8\u5e94\u7684\u5185\u5bb9\uff0c\u7279\u522b\u5730\uff0c\u6211\u4eec\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"metadata.labels")," \u5b57\u6bb5\u5206\u522b\u91cd\u7528\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"spec.selector.matchLabels")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"spec.template.metadata.labels")," \u5b57\u6bb5\u3002\u53ef\u4ee5\u770b\u51fa\uff0c\u76f8\u6bd4\u4e8e Kustomize \u6216\u8005 YAML\uff0cKCL \u5b9a\u4e49\u7684\u6570\u636e\u7ed3\u6784\u66f4\u52a0\u7d27\u51d1\uff0c\u800c\u4e14\u53ef\u4ee5\u901a\u8fc7\u5b9a\u4e49\u5c40\u90e8\u53d8\u91cf\u5b9e\u73b0\u914d\u7f6e\u91cd\u7528\u3002"),(0,l.kt)("p",null,"\u5728 KCL \u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u6761\u4ef6\u8bed\u53e5\u548c option \u51fd\u6570\u52a8\u6001\u5730\u63a5\u6536\u5916\u90e8\u53c2\u6570\uff0c\u4e3a\u4e0d\u540c\u7684\u73af\u5883\u9700\u8981\u8bbe\u7f6e\u4e0d\u540c\u7684\u914d\u7f6e\u503c\u751f\u6210\u4e0d\u540c\u73af\u5883\u7684\u8d44\u6e90\u3002\u6bd4\u5982\u5bf9\u4e8e\u5982\u4e0a\u4ee3\u7801\uff0c\u6211\u4eec\u7f16\u5199\u4e86\u4e00\u4e2a\u6761\u4ef6\u8bed\u53e5\u5e76\u8f93\u5165\u4e00\u4e2a\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"env")," \u7684\u52a8\u6001\u53c2\u6570\uff0c\u5f53 ",(0,l.kt)("inlineCode",{parentName:"p"},"env")," \u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"prod")," \u65f6\uff0c\u6211\u4eec\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"replicas")," \u5b57\u6bb5\u7531 ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," \u8986\u76d6\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"6"),"\uff0c\u5e76\u4e14\u5bf9\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"ldap-data")," \u7684 volume \u914d\u7f6e\u8fdb\u884c\u4e00\u4e9b\u8c03\u6574\uff0c\u5982\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"emptyDir")," \u5b57\u6bb5\u4fee\u6539\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"None"),", \u589e\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"gcePersistentDisk")," \u7684\u914d\u7f6e\u503c\u7b49\u3002"),(0,l.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u67e5\u770b\u4e0d\u540c\u73af\u5883\u914d\u7f6e\u7684 diff"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"diff \\\n  <(kcl main.k) \\\n  <(kcl main.k -D env=prod) |\\\n  more\n")),(0,l.kt)("p",null,"\u8f93\u51fa\u5982\u4e0b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-diff"},"8c8\n<   replicas: 1\n---\n>   replicas: 6\n30c30,33\n<         emptyDir: {}\n---\n>         emptyDir: null\n>         gcePersistentDisk:\n>           readOnly: true\n>           pdName: ldap-persistent-storage\n")),(0,l.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u751f\u4ea7\u73af\u5883\u7684\u914d\u7f6e\u548c\u57fa\u672c\u914d\u7f6e\u7684 diff \u4e3b\u8981\u5728\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"replicas")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"emptyDir")," \u7b49\u5b57\u6bb5\uff0c\u4e0e\u9884\u671f\u76f8\u7b26"),(0,l.kt)("p",null,"\u6b64\u5916\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 KCL \u547d\u4ee4\u884c\u5de5\u5177\u7684 -o \u53c2\u6570\u5c06\u7f16\u8bd1\u4ea7\u751f\u7684 YAML \u8f93\u51fa\u5230\u6587\u4ef6\u4e2d\uff0c\u5e76\u67e5\u770b\u6587\u4ef6\u4e4b\u95f4\u7684 diff"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Generate base deployment\nkcl main.k -o deployment.yaml\n# Generate prod deployment\nkcl main.k -o prod-deployment.yaml -D env=prod\n# Diff prod deployment and base deployment\ndiff prod-deployment.yaml deployment.yaml\n")),(0,l.kt)("p",null,"\u5f53\u7136\u6211\u4eec\u4e5f\u53ef\u4ee5\u5c06 KCL \u5de5\u5177\u4e0e kubectl \u7b49\u5de5\u5177\u7ed3\u5408\u4f7f\u7528\uff0c\u5c06\u751f\u4ea7\u73af\u5883\u7684\u914d\u7f6e\u4e0b\u53d1\u5230\u96c6\u7fa4\u5f53\u4e2d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ kcl main.k -D env=prod | kubectl apply -f -\n\ndeployment.apps/ldap created\n")),(0,l.kt)("p",null,"\u53ef\u4ee5\u4ece\u547d\u4ee4\u884c\u7684\u7ed3\u679c\u770b\u51fa\u4e0e\u6211\u4eec\u4f7f\u7528\u76f4\u63a5\u4f7f\u7528 Kustomize \u914d\u7f6e\u548c kubectl apply \u7684\u4e00\u4e2a Deployment \u4f53\u9a8c\u5b8c\u5168\u4e00\u81f4\uff0c\u5e76\u4e14\u65e0\u66f4\u591a\u7684\u526f\u4f5c\u7528"),(0,l.kt)("p",null,"\u6700\u540e\uff0c\u901a\u8fc7 kubectl \u68c0\u67e5\u90e8\u7f72\u72b6\u6001"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deploy\n\nNAME   READY   UP-TO-DATE   AVAILABLE   AGE\nldap   0/6     6            0           15s\n")),(0,l.kt)("h2",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),(0,l.kt)("p",null,"\u672c\u671f\u5185\u5bb9\u5927\u6982\u7b80\u5355\u4ecb\u7ecd\u4e86\u7528 KCL \u7f16\u5199\u590d\u6742\u591a\u73af\u5883 Kubernetes \u914d\u7f6e\u7684\u5feb\u901f\u5165\u95e8\u548c\u4f7f\u7528 Kustomize \u5de5\u5177\u8fdb\u884c Kubernetes \u591a\u73af\u5883\u914d\u7f6e\u7ba1\u7406\u7684\u5bf9\u6bd4\uff0c\u53ef\u4ee5\u770b\u51fa\u76f8\u6bd4\u4e8e Kustomize, KCL \u5728\u5b9e\u73b0\u914d\u7f6e\u590d\u7528\u548c\u8986\u76d6\u7684\u57fa\u7840\u4e0a\uff0c\u901a\u8fc7\u4ee3\u7801\u5316\u7684\u65b9\u5f0f\u51cf\u5c11\u4e86\u914d\u7f6e\u6587\u4ef6\u7684\u4e2a\u6570\u548c\u4ee3\u7801\u884c\u6570\uff0c\u63d0\u5347\u4e86\u4fe1\u606f\u5bc6\u5ea6\u6bd4\uff0c\u5e76\u4e14\u540c Kustomize \u4e00\u6837\u662f\u4e00\u4e2a\u7eaf\u5ba2\u6237\u7aef\u65b9\u6848\uff0c\u5e76\u4e0d\u4f1a\u5bf9\u96c6\u7fa4\u6709\u989d\u5916\u4f9d\u8d56\u6216\u9020\u6210\u8d1f\u62c5\u3002"))}u.isMDXComponent=!0}}]);