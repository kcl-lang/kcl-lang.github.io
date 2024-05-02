"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[54104],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),d=r,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return t?a.createElement(g,o(o({ref:n},c),{},{components:t})):a.createElement(g,o({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},73582:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const i={title:"Generate Kubernetes Manifests",sidebar_position:2},o=void 0,s={unversionedId:"user_docs/guides/working-with-k8s/generate-k8s-manifests",id:"user_docs/guides/working-with-k8s/generate-k8s-manifests",title:"Generate Kubernetes Manifests",description:"Introduction",source:"@site/docs/user_docs/guides/working-with-k8s/2-generate-k8s-manifests.md",sourceDirName:"user_docs/guides/working-with-k8s",slug:"/user_docs/guides/working-with-k8s/generate-k8s-manifests",permalink:"/docs/next/user_docs/guides/working-with-k8s/generate-k8s-manifests",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/user_docs/guides/working-with-k8s/2-generate-k8s-manifests.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1714663025,formattedLastUpdatedAt:"May 2, 2024",sidebarPosition:2,frontMatter:{title:"Generate Kubernetes Manifests",sidebar_position:2},sidebar:"user_docs",previous:{title:"Adopt From Kubernetes",permalink:"/docs/next/user_docs/guides/working-with-k8s/adopt-from-kubernetes"},next:{title:"Kubectl KCL Plugin",permalink:"/docs/next/user_docs/guides/working-with-k8s/mutate-manifests/kubectl-kcl-plugin"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisite",id:"prerequisite",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"1. Generate Kubernetes Resource",id:"1-generate-kubernetes-resource",level:3},{value:"2. Write Code to Manage Kubernetes resources",id:"2-write-code-to-manage-kubernetes-resources",level:3},{value:"3. Get the Kubernetes Modules from Registry",id:"3-get-the-kubernetes-modules-from-registry",level:3},{value:"Summary",id:"summary",level:2}],c={toc:p},m="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,'When we manage the Kubernetes resources, we often maintain it by hand, or use Helm and Kustomize tools to maintain our YAML configurations or configuration templates, and then apply the resources to the cluster through kubectl tools. However, as a "YAML engineer", maintaining YAML configuration every day is undoubtedly trivial and boring, and prone to errors. For example as follows:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata: ... # Omit\nspec:\n  selector:\n    matchlabels:\n      cell: RZ00A\n  replicas: 2\n  template:\n    metadata: ... # Omit\n    spec:\n      tolerations:\n      - effect: NoSchedules\n        key: is-over-quota\n        operator: Equal\n        value: 'true'\n      containers:\n      - name: test-app\n          image: images.example/app:v1 # Wrong ident\n        resources:\n          limits:\n            cpu: 2 # Wrong type. The type of cpu should be str\n            memory: 4Gi\n            # Field missing: ephemeral-storage\n      affinity:\n        nodeAffinity:\n          requiredDuringSchedulingIgnoredDuringExecution:\n            nodeSelectorTerms:\n            - matchExpressions:\n              - key: is-over-quota\n                operator: In\n                values:\n                - 'true'\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The structured data in YAML is untyped and lacks validation methods, so the validity of all data cannot be checked immediately."),(0,r.kt)("li",{parentName:"ul"},"YAML has poor programming ability. It is easy to write incorrect indents and has no common code organization methods such as logical judgment. It is easy to write a large number of repeated configurations and difficult to maintain."),(0,r.kt)("li",{parentName:"ul"},"The design of Kubernetes is complex, and it is difficult for users to understand all the details, such as the ",(0,r.kt)("inlineCode",{parentName:"li"},"toleration")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"affinity")," fields in the above configuration. If users do not understand the scheduling logic, it may be wrongly omitted or superfluous added.")),(0,r.kt)("p",null,"Therefore, KCL expects to solve the following problems in Kubernetes YAML resource management:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("strong",{parentName:"li"},"production level high-performance programming language")," to ",(0,r.kt)("strong",{parentName:"li"},"write code")," to improve the flexibility of configuration, such as conditional statements, loops, functions, package management and other features to improve the ability of configuration reuse."),(0,r.kt)("li",{parentName:"ul"},"Improve the ability of ",(0,r.kt)("strong",{parentName:"li"},"configuration semantic verification")," at the code level, such as optional/required fields, types, ranges, and other configuration checks."),(0,r.kt)("li",{parentName:"ul"},"Provide ",(0,r.kt)("strong",{parentName:"li"},"the ability to write, combine and abstract configuration blocks"),", such as structure definition, structure inheritance, constraint definition, etc.")),(0,r.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("p",null,"First, you can visit the ",(0,r.kt)("a",{parentName:"p",href:"/docs/user_docs/getting-started/kcl-quick-start"},"KCL Quick Start")," to download and install KCL according to the instructions, and then prepare a ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/"},"Kubernetes")," environment."),(0,r.kt)("h2",{id:"quick-start"},"Quick Start"),(0,r.kt)("h3",{id:"1-generate-kubernetes-resource"},"1. Generate Kubernetes Resource"),(0,r.kt)("p",null,"We can write the following KCL code and name it ",(0,r.kt)("inlineCode",{parentName:"p"},"main.k"),". KCL is inspired by Python. Its basic syntax is very close to Python, which is easy to learn. The configuration mode is simple, ",(0,r.kt)("inlineCode",{parentName:"p"},"k [: T] = v"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"k")," denotes the configured attribute name, ",(0,r.kt)("inlineCode",{parentName:"p"},"v")," denotes the configured attribute value and ",(0,r.kt)("inlineCode",{parentName:"p"},": T")," denotes an optional type annotation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'apiVersion = "apps/v1"\nkind = "Deployment"\nmetadata = {\n    name = "nginx"\n    labels.app = "nginx"\n}\nspec = {\n    replicas = 3\n    selector.matchLabels = metadata.labels\n    template.metadata.labels = metadata.labels\n    template.spec.containers = [\n        {\n            name = metadata.name\n            image = "${metadata.name}:1.14.2"\n            ports = [{ containerPort = 80 }]\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"In the above KCL code, we declare the ",(0,r.kt)("inlineCode",{parentName:"p"},"apiVersion"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"kind"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"spec")," and other variables of a Kubernetes ",(0,r.kt)("inlineCode",{parentName:"p"},"Deployment")," resource, and assign the corresponding contents respectively. In particular, we will assign ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata.labels")," fields are reused in ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.selector.matchLabels")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.template.metadata.labels")," field. It can be seen that, compared with YAML, the data structure defined by KCL is more compact, and configuration reuse can be realized by defining local variables."),(0,r.kt)("p",null,"We can get a Kubernetes YAML file by executing the following command line"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kcl main.k\n")),(0,r.kt)("p",null,"The output is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\n  labels:\n    app: nginx\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n        - name: nginx\n          image: nginx:1.14.2\n          ports:\n            - containerPort: 80\n")),(0,r.kt)("p",null,"Of course, we can use KCL together with kubectl and other tools. Let's execute the following commands and see the result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kcl main.k | kubectl apply -f -\n")),(0,r.kt)("p",null,"The output is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"deployment.apps/nginx-deployment configured\n")),(0,r.kt)("p",null,"It can be seen from the command line that it is completely consistent with the deployment experience of using YAML configuration and kubectl application directly."),(0,r.kt)("p",null,"Check the deployment status through kubectl"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get deploy\n")),(0,r.kt)("p",null,"The output is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"NAME               READY   UP-TO-DATE   AVAILABLE   AGE\nnginx-deployment   3/3     3            3           15s\n")),(0,r.kt)("h3",{id:"2-write-code-to-manage-kubernetes-resources"},"2. Write Code to Manage Kubernetes resources"),(0,r.kt)("p",null,"When publishing Kubernetes resources, we often encounter scenarios where configuration parameters need to be dynamically specified. For example, different environments need to set different ",(0,r.kt)("inlineCode",{parentName:"p"},"image")," field values to generate resources in different environments. For this scenario, we can dynamically receive external parameters through KCL conditional statements and ",(0,r.kt)("inlineCode",{parentName:"p"},"option")," functions. Based on the above example, we can adjust the configuration parameters according to different environments. For example, for the following code, we wrote a conditional statement and entered a dynamic parameter named ",(0,r.kt)("inlineCode",{parentName:"p"},"env"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'apiVersion = "apps/v1"\nkind = "Deployment"\nmetadata = {\n    name = "nginx"\n    labels.app = "nginx"\n}\nspec = {\n    replicas = 3\n    selector.matchLabels = metadata.labels\n    template.metadata.labels = metadata.labels\n    template.spec.containers = [\n        {\n            name = metadata.name\n            image = "${metadata.name}:1.14.2" if option("env") == "prod" else "${metadata.name}:latest"\n            ports = [{ containerPort = 80 }]\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"Use the KCL command line ",(0,r.kt)("inlineCode",{parentName:"p"},"-D")," flag to receive an external dynamic parameter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kcl main.k -D env=prod\n")),(0,r.kt)("p",null,"The output is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\n  labels:\n    app: nginx\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n        - name: nginx\n          image: nginx:1.14.2\n          ports:\n            - containerPort: 80\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},'image=metadata.name+": 1.14.2" if option ("env")=="prod" else metadata.name + ": latest"')," in the above code snippet means that when the value of the dynamic parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"env")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"prod"),", the value of the image field is ",(0,r.kt)("inlineCode",{parentName:"p"},"nginx: 1.14.2"),"; otherwise, it is' nginx: latest'. Therefore, we can set env to different values as required to obtain Kubernetes resources with different contents."),(0,r.kt)("p",null,"KCL also supports maintaining the dynamic parameters of the option function in the configuration file, such as writing the ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl.yaml")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"kcl_options:\n  - key: env\n    value: prod\n")),(0,r.kt)("p",null,"The same YAML output can be obtained by using the following command line to simplify the input process of KCL dynamic parameters."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kcl main.k -Y kcl.yaml\n")),(0,r.kt)("p",null,"The output is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\n  labels:\n    app: nginx\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n        - name: nginx\n          image: nginx:1.14.2\n          ports:\n            - containerPort: 80\n")),(0,r.kt)("h3",{id:"3-get-the-kubernetes-modules-from-registry"},"3. Get the Kubernetes Modules from Registry"),(0,r.kt)("p",null,"The Kubernetes KCL modules among all versions (v1.14-v1.28) are pre-generated, you get it by executing ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl mod add k8s:<version>")," under your project. More modules can be seen ",(0,r.kt)("a",{parentName:"p",href:"https://artifacthub.io/packages/search?org=kcl&sort=relevance&page=1"},"here")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kcl mod init my-module && cd my-module\nkcl mod add k8s\n")),(0,r.kt)("p",null,"Write the KCL code in ",(0,r.kt)("inlineCode",{parentName:"p"},"main.k")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Import and use the contents of the external dependency \'k8s\'.\nimport k8s.api.apps.v1 as apps\n\napps.Deployment {\n    metadata.name = "nginx-deployment"\n    metadata.labels.app = "nginx"\n    spec: {\n        replicas = 3\n        selector.matchLabels = metadata.labels\n        template: {\n            metadata.labels = metadata.labels\n            spec.containers = [{\n                name = metadata.labels.app\n                image = "nginx:1.14.2"\n                ports: [{\n                    containerPort = 80\n                }]\n            }]\n        }\n    }\n}\n')),(0,r.kt)("p",null,"Run the following code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kcl run\n")),(0,r.kt)("p",null,"The output is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  labels:\n    app: nginx\n  name: nginx-deployment\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n        - image: nginx:1.14.2\n          name: nginx\n          ports:\n            - containerPort: 80\n")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"KCL can be used to generate and manage Kubernetes resources, addressing the limitations of managing YAML configurations, such as a lack of validation methods and poor programming capabilities. It can also dynamically receive external parameters through conditional statements and option functions, allowing configuration parameters to be adjusted according to different environments. In addition, KCL can be used in conjunction with other tools such as kubectl to apply configuration to the cluster."))}u.isMDXComponent=!0}}]);