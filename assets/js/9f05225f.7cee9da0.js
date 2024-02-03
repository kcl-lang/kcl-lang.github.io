"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[74107],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=i,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return t?a.createElement(g,o(o({ref:n},c),{},{components:t})):a.createElement(g,o({ref:n},c))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},88741:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=t(87462),i=(t(67294),t(3905));const r={title:"Generate Kubernetes Manifests",sidebar_position:2},o=void 0,s={unversionedId:"user_docs/guides/working-with-k8s/generate-k8s-manifests",id:"version-0.5.5/user_docs/guides/working-with-k8s/generate-k8s-manifests",title:"Generate Kubernetes Manifests",description:"Introduction",source:"@site/versioned_docs/version-0.5.5/user_docs/guides/working-with-k8s/2-generate-k8s-manifests.md",sourceDirName:"user_docs/guides/working-with-k8s",slug:"/user_docs/guides/working-with-k8s/generate-k8s-manifests",permalink:"/docs/0.5.5/user_docs/guides/working-with-k8s/generate-k8s-manifests",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.5/user_docs/guides/working-with-k8s/2-generate-k8s-manifests.md",tags:[],version:"0.5.5",lastUpdatedBy:"Peefy",lastUpdatedAt:1706869561,formattedLastUpdatedAt:"Feb 2, 2024",sidebarPosition:2,frontMatter:{title:"Generate Kubernetes Manifests",sidebar_position:2},sidebar:"user_docs",previous:{title:"Adopt From Kubernetes",permalink:"/docs/0.5.5/user_docs/guides/working-with-k8s/adopt-from-kubernetes"},next:{title:"Kubectl KCL Plugin",permalink:"/docs/0.5.5/user_docs/guides/working-with-k8s/mutate-manifests/kubectl-kcl-plugin"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisite",id:"prerequisite",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"1. Generate Kubernetes Resource",id:"1-generate-kubernetes-resource",level:3},{value:"2. Write Code to Manage Kubernetes resources",id:"2-write-code-to-manage-kubernetes-resources",level:3},{value:"Summary",id:"summary",level:2}],c={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,'When we manage the Kubernetes resources, we often maintain it by hand, or use Helm and Kustomize tools to maintain our YAML configurations or configuration templates, and then apply the resources to the cluster through kubectl tools. However, as a "YAML engineer", maintaining YAML configuration every day is undoubtedly trivial and boring, and prone to errors. For example as follows:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata: ... # Omit\nspec:\n  selector:\n    matchlabels:\n      cell: RZ00A\n  replicas: 2\n  template:\n    metadata: ... # Omit\n    spec:\n      tolerations:\n      - effect: NoSchedules\n        key: is-over-quota\n        operator: Equal\n        value: 'true'\n      containers:\n      - name: test-app\n          image: images.example/app:v1 # Wrong ident\n        resources:\n          limits:\n            cpu: 2 # Wrong type. The type of cpu should be str\n            memory: 4Gi\n            # Field missing: ephemeral-storage\n      affinity:\n        nodeAffinity:\n          requiredDuringSchedulingIgnoredDuringExecution:\n            nodeSelectorTerms:\n            - matchExpressions:\n              - key: is-over-quota\n                operator: In\n                values:\n                - 'true'\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The structured data in YAML is untyped and lacks validation methods, so the validity of all data cannot be checked immediately."),(0,i.kt)("li",{parentName:"ul"},"YAML has poor programming ability. It is easy to write incorrect indents and has no common code organization methods such as logical judgment. It is easy to write a large number of repeated configurations and difficult to maintain."),(0,i.kt)("li",{parentName:"ul"},"The design of Kubernetes is complex, and it is difficult for users to understand all the details, such as the ",(0,i.kt)("inlineCode",{parentName:"li"},"toleration")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"affinity")," fields in the above configuration. If users do not understand the scheduling logic, it may be wrongly omitted or superfluous added.")),(0,i.kt)("p",null,"Therefore, KCL expects to solve the following problems in Kubernetes YAML resource management:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("strong",{parentName:"li"},"production level high-performance programming language")," to ",(0,i.kt)("strong",{parentName:"li"},"write code")," to improve the flexibility of configuration, such as conditional statements, loops, functions, package management and other features to improve the ability of configuration reuse."),(0,i.kt)("li",{parentName:"ul"},"Improve the ability of ",(0,i.kt)("strong",{parentName:"li"},"configuration semantic verification")," at the code level, such as optional/required fields, types, ranges, and other configuration checks."),(0,i.kt)("li",{parentName:"ul"},"Provide ",(0,i.kt)("strong",{parentName:"li"},"the ability to write, combine and abstract configuration blocks"),", such as structure definition, structure inheritance, constraint definition, etc.")),(0,i.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,i.kt)("p",null,"First, you can visit the ",(0,i.kt)("a",{parentName:"p",href:"/docs/user_docs/getting-started/kcl-quick-start"},"KCL Quick Start")," to download and install KCL according to the instructions, and then prepare a ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/"},"Kubernetes")," environment."),(0,i.kt)("h2",{id:"quick-start"},"Quick Start"),(0,i.kt)("h3",{id:"1-generate-kubernetes-resource"},"1. Generate Kubernetes Resource"),(0,i.kt)("p",null,"We can write the following KCL code and name it ",(0,i.kt)("inlineCode",{parentName:"p"},"main.k"),". KCL is inspired by Python. Its basic syntax is very close to Python, which is easy to learn. The configuration mode is simple, ",(0,i.kt)("inlineCode",{parentName:"p"},"k [: T] = v"),", where ",(0,i.kt)("inlineCode",{parentName:"p"},"k")," denotes the configured attribute name, ",(0,i.kt)("inlineCode",{parentName:"p"},"v")," denotes the configured attribute value and ",(0,i.kt)("inlineCode",{parentName:"p"},": T")," denotes an optional type annotation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'apiVersion = "apps/v1"\nkind = "Deployment"\nmetadata = {\n    name = "nginx"\n    labels.app = "nginx"\n}\nspec = {\n    replicas = 3\n    selector.matchLabels = metadata.labels\n    template.metadata.labels = metadata.labels\n    template.spec.containers = [\n        {\n            name = metadata.name\n            image = "${metadata.name}:1.14.2"\n            ports = [{ containerPort = 80 }]\n        }\n    ]\n}\n')),(0,i.kt)("p",null,"In the above KCL code, we declare the ",(0,i.kt)("inlineCode",{parentName:"p"},"apiVersion"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"kind"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"spec")," and other variables of a Kubernetes ",(0,i.kt)("inlineCode",{parentName:"p"},"Deployment")," resource, and assign the corresponding contents respectively. In particular, we will assign ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata.labels")," fields are reused in ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.selector.matchLabels")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.template.metadata.labels")," field. It can be seen that, compared with YAML, the data structure defined by KCL is more compact, and configuration reuse can be realized by defining local variables."),(0,i.kt)("p",null,"We can get a Kubernetes YAML file by executing the following command line"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kcl main.k\n")),(0,i.kt)("p",null,"The output is"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\n  labels:\n    app: nginx\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n        - name: nginx\n          image: nginx:1.14.2\n          ports:\n            - containerPort: 80\n")),(0,i.kt)("p",null,"Of course, we can use KCL together with kubectl and other tools. Let's execute the following commands and see the result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kcl main.k | kubectl apply -f -\n")),(0,i.kt)("p",null,"The output is"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"deployment.apps/nginx-deployment configured\n")),(0,i.kt)("p",null,"It can be seen from the command line that it is completely consistent with the deployment experience of using YAML configuration and kubectl application directly."),(0,i.kt)("p",null,"Check the deployment status through kubectl"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get deploy\n")),(0,i.kt)("p",null,"The output is"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"NAME               READY   UP-TO-DATE   AVAILABLE   AGE\nnginx-deployment   3/3     3            3           15s\n")),(0,i.kt)("h3",{id:"2-write-code-to-manage-kubernetes-resources"},"2. Write Code to Manage Kubernetes resources"),(0,i.kt)("p",null,"When publishing Kubernetes resources, we often encounter scenarios where configuration parameters need to be dynamically specified. For example, different environments need to set different ",(0,i.kt)("inlineCode",{parentName:"p"},"image")," field values to generate resources in different environments. For this scenario, we can dynamically receive external parameters through KCL conditional statements and ",(0,i.kt)("inlineCode",{parentName:"p"},"option")," functions. Based on the above example, we can adjust the configuration parameters according to different environments. For example, for the following code, we wrote a conditional statement and entered a dynamic parameter named ",(0,i.kt)("inlineCode",{parentName:"p"},"env"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'apiVersion = "apps/v1"\nkind = "Deployment"\nmetadata = {\n    name = "nginx"\n    labels.app = "nginx"\n}\nspec = {\n    replicas = 3\n    selector.matchLabels = metadata.labels\n    template.metadata.labels = metadata.labels\n    template.spec.containers = [\n        {\n            name = metadata.name\n            image = "${metadata.name}:1.14.2" if option("env") == "prod" else "${metadata.name}:latest"\n            ports = [{ containerPort = 80 }]\n        }\n    ]\n}\n')),(0,i.kt)("p",null,"Use the KCL command line ",(0,i.kt)("inlineCode",{parentName:"p"},"-D")," flag to receive an external dynamic parameter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kcl main.k -D env=prod\n")),(0,i.kt)("p",null,"The output is"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\n  labels:\n    app: nginx\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n        - name: nginx\n          image: nginx:1.14.2\n          ports:\n            - containerPort: 80\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},'image=metadata.name+": 1.14.2" if option ("env")=="prod" else metadata.name + ": latest"')," in the above code snippet means that when the value of the dynamic parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"env")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"prod"),", the value of the image field is ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx: 1.14.2"),"; otherwise, it is' nginx: latest'. Therefore, we can set env to different values as required to obtain Kubernetes resources with different contents."),(0,i.kt)("p",null,"KCL also supports maintaining the dynamic parameters of the option function in the configuration file, such as writing the ",(0,i.kt)("inlineCode",{parentName:"p"},"kcl.yaml")," file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"kcl_options:\n  - key: env\n    value: prod\n")),(0,i.kt)("p",null,"The same YAML output can be obtained by using the following command line to simplify the input process of KCL dynamic parameters."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kcl main.k -Y kcl.yaml\n")),(0,i.kt)("p",null,"The output is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\n  labels:\n    app: nginx\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n        - name: nginx\n          image: nginx:1.14.2\n          ports:\n            - containerPort: 80\n")),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"KCL can be used to generate and manage Kubernetes resources, addressing the limitations of managing YAML configurations, such as a lack of validation methods and poor programming capabilities. It can also dynamically receive external parameters through conditional statements and option functions, allowing configuration parameters to be adjusted according to different environments. In addition, KCL can be used in conjunction with other tools such as kubectl to apply configuration to the cluster."))}d.isMDXComponent=!0}}]);