"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[36727],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},23718:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const o={},i="CRD to KCL",s={unversionedId:"tools/cli/openapi/crd-to-kcl",id:"version-0.5.5/tools/cli/openapi/crd-to-kcl",title:"CRD to KCL",description:"\u547d\u4ee4",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.5.5/tools/cli/openapi/crd-to-kcl.md",sourceDirName:"tools/cli/openapi",slug:"/tools/cli/openapi/crd-to-kcl",permalink:"/zh-CN/docs/0.5.5/tools/cli/openapi/crd-to-kcl",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.5/tools/cli/openapi/crd-to-kcl.md",tags:[],version:"0.5.5",lastUpdatedBy:"peefy",lastUpdatedAt:1702459904,formattedLastUpdatedAt:"2023\u5e7412\u670813\u65e5",frontMatter:{},sidebar:"tools",previous:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/zh-CN/docs/0.5.5/tools/cli/openapi/quick-start"},next:{title:"OpenAPI to KCL",permalink:"/zh-CN/docs/0.5.5/tools/cli/openapi/openapi-to-kcl"}},l={},c=[],p={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"crd-to-kcl"},"CRD to KCL"),(0,a.kt)("p",null,"\u547d\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kcl-openapi generate model --crd -f ${your_CRD.yaml} -t ${the_kcl_files_output_dir} --skip-validation\n")),(0,a.kt)("h1",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8f93\u5165\u6587\u4ef6\uff1atest_crontab_CRD.yaml:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# Deprecated in v1.16 in favor of apiextensions.k8s.io/v1\napiVersion: apiextensions.k8s.io/v1beta1\nkind: CustomResourceDefinition\nmetadata:\n  # name must match the spec fields below, and be in the form: <plural>.<group>\n  name: crontabs.stable.example.com\nspec:\n  # group name to use for REST API: /apis/<group>/<version>\n  group: stable.example.com\n  # list of versions supported by this CustomResourceDefinition\n  versions:\n    - name: v1\n      # Each version can be enabled/disabled by Served flag.\n      served: true\n      # One and only one version must be marked as the storage version.\n      storage: true\n  # either Namespaced or Cluster\n  scope: Namespaced\n  names:\n    # plural name to be used in the URL: /apis/<group>/<version>/<plural>\n    plural: crontabs\n    # singular name to be used as an alias on the CLI and for display\n    singular: crontab\n    # kind is normally the CamelCased singular type. Your resource manifests use this.\n    kind: CronTab\n    # shortNames allow shorter string to match your resource on the CLI\n    shortNames:\n      - ct\n  preserveUnknownFields: false\n  validation:\n    openAPIV3Schema:\n      type: object\n      properties:\n        spec:\n          type: object\n          properties:\n            cronSpec:\n              type: string\n            image:\n              type: string\n            replicas:\n              type: integer\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u547d\u4ee4")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kcl-openapi generate model -f test_crontab_CRD.yaml -t ~/ --skip-validation --crd\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8f93\u51fa\u6587\u4ef6\uff1a ~/models/stable_example_com_v1_cron_tab.k")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'"""\nThis file was generated by the KCL auto-gen tool. DO NOT EDIT.\nEditing this file might prove futile when you re-run the KCL auto-gen generate command.\n"""\nimport kusion_kubernetes.apimachinery.apis\n\n\nschema CronTab:\n    """stable example com v1 cron tab\n\n    Attributes\n    ----------\n    apiVersion : str, default is "stable.example.com/v1", required\n         APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources\n    kind : str, default is "CronTab", required\n         Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds\n    metadata : apis.ObjectMeta, default is Undefined, optional\n        metadata\n    spec : StableExampleComV1CronTabSpec, default is Undefined, optional\n        spec\n    """\n\n\n    apiVersion: "stable.example.com/v1" = "stable.example.com/v1"\n\n    kind: "CronTab" = "CronTab"\n\n    metadata?: apis.ObjectMeta\n\n    spec?: StableExampleComV1CronTabSpec\n\n\nschema StableExampleComV1CronTabSpec:\n    """stable example com v1 cron tab spec\n\n    Attributes\n    ----------\n    cronSpec : str, default is Undefined, optional\n        cron spec\n    image : str, default is Undefined, optional\n        image\n    replicas : int, default is Undefined, optional\n        replicas\n    """\n\n\n    cronSpec?: str\n\n    image?: str\n\n    replicas?: int\n')))}d.isMDXComponent=!0}}]);