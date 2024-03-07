"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[25282],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},40953:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"Errors",linkTitle:"Errors",type:"docs",weight:2,description:"Errors"},s=void 0,i={unversionedId:"reference/lang/spec/error",id:"version-0.5.2/reference/lang/spec/error",title:"Errors",description:"Errors",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.5.2/reference/lang/spec/error.md",sourceDirName:"reference/lang/spec",slug:"/reference/lang/spec/error",permalink:"/zh-CN/docs/0.5.2/reference/lang/spec/error",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.2/reference/lang/spec/error.md",tags:[],version:"0.5.2",lastUpdatedBy:"peefy",lastUpdatedAt:1709797004,formattedLastUpdatedAt:"2024\u5e743\u67087\u65e5",frontMatter:{title:"Errors",linkTitle:"Errors",type:"docs",weight:2,description:"Errors"},sidebar:"reference",previous:{title:"Data Types",permalink:"/zh-CN/docs/0.5.2/reference/lang/spec/datatypes"},next:{title:"Expressions",permalink:"/zh-CN/docs/0.5.2/reference/lang/spec/expressions"}},l={},p=[{value:"Syntax",id:"syntax",level:2},{value:"The Implementation",id:"the-implementation",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When errors happen, developers should be able to detect the error and abort\nexecution. Thus, KCL introduce the ",(0,a.kt)("inlineCode",{parentName:"p"},"assert")," syntax."),(0,a.kt)("p",null,"In the previous topic of ",(0,a.kt)("inlineCode",{parentName:"p"},"schema")," syntax. Errors can also be raised when a\nschema is violated."),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,"The syntax of the ",(0,a.kt)("inlineCode",{parentName:"p"},"assert")," statement is the following."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bnf"},"assert_stmt: 'assert' test ['if' test] [',' test]\n")),(0,a.kt)("p",null,"In the basic form, an ",(0,a.kt)("inlineCode",{parentName:"p"},"assert")," statement evaluates an expression. If the\nexpression is evaluated to ",(0,a.kt)("inlineCode",{parentName:"p"},"False"),", the assertion is failed, and an error\nshould be reported."),(0,a.kt)("p",null,"In the extended form, an error message can be provided. The error message is\nanother expression. It is only evaluated when the expression to be evaluated\nis evaluated to ",(0,a.kt)("inlineCode",{parentName:"p"},"False"),". The evaluation result of the error message is printed\nwhen reporting the error."),(0,a.kt)("p",null,"The following is an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'a = 1\nb = 3\ncondition = False\n# a != b evaluates to True, therefore no error should happen.\nassert a != b\n# a == b is False, in the reported error message, the message "SOS" should be printed.\nassert a == b, "SOS"\n# if condition is True, then assert `a == b`, if failed, the message "error message" will be printed.\nassert a == b if condition, "error message"\n')),(0,a.kt)("h2",{id:"the-implementation"},"The Implementation"),(0,a.kt)("p",null,"When an error happens, no matter it is caused by the ",(0,a.kt)("inlineCode",{parentName:"p"},"assert")," or the ",(0,a.kt)("inlineCode",{parentName:"p"},"schema")," syntax,\nthe virtual machine should exit with an exit code greater than ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,a.kt)("p",null,"The virtual machine may choose to dump the back trace information, and it is strongly recommended to implement it."),(0,a.kt)("p",null,"In practice, KCL can dump back trace by default, and an argument can be introduced to disable it."))}u.isMDXComponent=!0}}]);