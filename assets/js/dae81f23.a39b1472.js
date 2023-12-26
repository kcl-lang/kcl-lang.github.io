"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[96463],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=m(n),d=a,f=c["".concat(l,".").concat(d)]||c[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99638:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const i={title:"manifests",linkTitle:"manifests",type:"docs",description:"manifests system module",weight:100},o=void 0,s={unversionedId:"reference/model/manifests",id:"version-0.6.0/reference/model/manifests",title:"manifests",description:"manifests system module",source:"@site/versioned_docs/version-0.6.0/reference/model/manifests.md",sourceDirName:"reference/model",slug:"/reference/model/manifests",permalink:"/docs/0.6.0/reference/model/manifests",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.6.0/reference/model/manifests.md",tags:[],version:"0.6.0",lastUpdatedBy:"Peefy",lastUpdatedAt:1703569910,formattedLastUpdatedAt:"Dec 26, 2023",frontMatter:{title:"manifests",linkTitle:"manifests",type:"docs",description:"manifests system module",weight:100},sidebar:"reference",previous:{title:"json",permalink:"/docs/0.6.0/reference/model/json"},next:{title:"math",permalink:"/docs/0.6.0/reference/model/math"}},l={},m=[{value:"yaml_stream",id:"yaml_stream",level:2}],p={toc:m},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"yaml_stream"},"yaml_stream"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'yaml_stream(values: [any], opts: {str:} = {\n    sort_keys = False\n    ignore_private = True\n    ignore_none = False\n    sep = "---"\n})\n')),(0,a.kt)("p",null,"This function is used to serialize the KCL object list into YAML output with the --- separator. It has two parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"values")," - A list of KCL objects"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"opts")," - The YAML serialization options",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sort_keys"),": Whether to sort the serialized results in the dictionary order of attribute names (the default is ",(0,a.kt)("inlineCode",{parentName:"li"},"False"),")."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ignore_private"),": Whether to ignore the attribute output whose name starts with the character ",(0,a.kt)("inlineCode",{parentName:"li"},"_")," (the default value is ",(0,a.kt)("inlineCode",{parentName:"li"},"True"),")."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ignore_none"),": Whether to ignore the attribute with the value of' None '(the default value is ",(0,a.kt)("inlineCode",{parentName:"li"},"False"),")."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sep"),": Set the separator between multiple YAML documents (the default value is ",(0,a.kt)("inlineCode",{parentName:"li"},'"---"'),").")))),(0,a.kt)("p",null,"Here's an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# Use the `import` keyword to import the `manifests` module.\nimport manifests\n\n# The schema `Deployment` definition.\nschema Deployment:\n    apiVersion: str = "v1"\n    kind: str = "Deployment"\n    metadata: {str:} = {\n        name = "deploy"\n    }\n    spec: {str:} = {\n        replica = 2\n    }\n\n# The schema `Service` definition.\nschema Service:\n    apiVersion: str = "v1"\n    kind: str = "Service"\n    metadata: {str:} = {\n         name = "svc"\n    }\n    spec: {str:} = {}\n\n# Define two `Deployment` resources.\ndeployments = [Deployment {}, Deployment {}]\n# Define two `Service` resources.\nservices = [Service {}, Service {}]\n# Put them into a KCL list and call the `manifests.yaml_stream` function.\nmanifests.yaml_stream(deployments + services)\n')),(0,a.kt)("p",null,"First, we use the ",(0,a.kt)("inlineCode",{parentName:"p"},"import")," keyword to import the ",(0,a.kt)("inlineCode",{parentName:"p"},"manifests")," module and define two deployment resources and two service resources. When we want to output these four resources in YAML stream format with ",(0,a.kt)("inlineCode",{parentName:"p"},"---")," as the separator, we can put them into a KCL list and use the ",(0,a.kt)("inlineCode",{parentName:"p"},"manifests.yaml_stream")," function pass it to the ",(0,a.kt)("inlineCode",{parentName:"p"},"values")," parameter (if there is no special requirement, the ",(0,a.kt)("inlineCode",{parentName:"p"},"opts")," parameter can generally use the default value). Finally, the YAML output is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Deployment\nmetadata:\n  name: deploy\nspec:\n  replica: 2\n---\napiVersion: v1\nkind: Deployment\nmetadata:\n  name: deploy\nspec:\n  replica: 2\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: svc\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: svc\n")))}u.isMDXComponent=!0}}]);