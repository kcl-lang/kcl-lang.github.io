"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[61817],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},27812:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={},l="OpenAPI to KCL",i={unversionedId:"tools/cli/openapi/openapi-to-kcl",id:"version-0.4.3/tools/cli/openapi/openapi-to-kcl",title:"OpenAPI to KCL",description:"Command",source:"@site/versioned_docs/version-0.4.3/tools/cli/openapi/openapi-to-kcl.md",sourceDirName:"tools/cli/openapi",slug:"/tools/cli/openapi/openapi-to-kcl",permalink:"/docs/0.4.3/tools/cli/openapi/openapi-to-kcl",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.4.3/tools/cli/openapi/openapi-to-kcl.md",tags:[],version:"0.4.3",lastUpdatedBy:"peefy",lastUpdatedAt:1690883666,formattedLastUpdatedAt:"Aug 1, 2023",frontMatter:{},sidebar:"tools",previous:{title:"CRD to KCL",permalink:"/docs/0.4.3/tools/cli/openapi/crd-to-kcl"},next:{title:"KCL OpenAPI Spec",permalink:"/docs/0.4.3/tools/cli/openapi/spec"}},p={},c=[],s={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"openapi-to-kcl"},"OpenAPI to KCL"),(0,o.kt)("p",null,"Command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kcl-openapi generate model -f ${your_open_api_spec.yaml} -t ${the_kcl_files_output_dir}\n")),(0,o.kt)("p",null,"Example"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"test_open_api_spec.yaml:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'definitions:\n  v1.TestInt:\n    type: object\n    properties:\n      name:\n        type: string\n        format: int-or-string\n    required:\n      - name\n    x-kcl-type:\n      import:\n        package: v1.test_int\n        alias: test_int\n      type: TestInt\nswagger: "2.0"\ninfo:\n  title: KCL\n  version: v0.0.2\npaths: {}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Command")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kcl-openapi generate model -f test_open_api_spec.yaml -t ~/\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Output ~/models/v1/test_int.k")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'"""\nThis is the test_int module in v1 package.\nThis file was generated by the KCL auto-gen tool. DO NOT EDIT.\nEditing this file might prove futile when you re-run the KCL auto-gen generate command.\n"""\n\n\nschema TestInt:\n    """v1 test int\n\n    Attributes\n    ----------\n    name : int | str, default is Undefined, required\n        name\n    """\n\n\n    name: int | str\n\n')))}m.isMDXComponent=!0}}]);