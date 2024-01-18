"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[8191],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=l,d=u["".concat(i,".").concat(m)]||u[m]||k[m]||r;return n?a.createElement(d,s(s({ref:t},p),{},{components:n})):a.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,s=new Array(r);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:l,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},12038:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>k,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(87462),l=(n(67294),n(3905));const r={sidebar_position:6},s="\u6d4b\u8bd5\u5de5\u5177",o={unversionedId:"tools/cli/kcl/test",id:"version-0.7.0/tools/cli/kcl/test",title:"\u6d4b\u8bd5\u5de5\u5177",description:"\u7b80\u4ecb",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.7.0/tools/cli/kcl/test.md",sourceDirName:"tools/cli/kcl",slug:"/tools/cli/kcl/test",permalink:"/zh-CN/docs/tools/cli/kcl/test",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.7.0/tools/cli/kcl/test.md",tags:[],version:"0.7.0",lastUpdatedBy:"Peefy",lastUpdatedAt:1705584615,formattedLastUpdatedAt:"2024\u5e741\u670818\u65e5",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tools",previous:{title:"\u4ee3\u7801\u98ce\u683c\u68c0\u67e5\u5de5\u5177",permalink:"/zh-CN/docs/tools/cli/kcl/lint"},next:{title:"\u6821\u9a8c\u5de5\u5177",permalink:"/zh-CN/docs/tools/cli/kcl/vet"}},i={},c=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"\u5931\u8d25\u7684\u6d4b\u8bd5",id:"\u5931\u8d25\u7684\u6d4b\u8bd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2}],p={toc:c},u="wrapper";function k(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u6d4b\u8bd5\u5de5\u5177"},"\u6d4b\u8bd5\u5de5\u5177"),(0,l.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,l.kt)("p",null,"KCL \u652f\u6301\u901a\u8fc7\u5185\u7f6e\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"kcl test")," \u547d\u4ee4\u884c\u5de5\u5177\u63d0\u4f9b\u4e86\u7b80\u6613\u7684\u6d4b\u8bd5\u6846\u67b6\u3002\u6bcf\u4e2a\u76ee\u5f55\u4e0b\u7684\u5168\u90e8 KCL \u6587\u4ef6\u662f\u4e00\u4e2a\u6d4b\u8bd5\u6574\u4f53\uff0c\u6bcf\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"_test.k")," \u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"test_")," \u5f00\u5934\u7684 lambda \u51fd\u6570\u662f\u4e00\u4e2a\u6d4b\u8bd5\u7528\u4f8b\u3002"),(0,l.kt)("h2",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,l.kt)("p",null,"\u5047\u8bbe\u6709 hello.k \u6587\u4ef6\uff0c\u4ee3\u7801\u5982\u4e0b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'schema Person:\n    name: str = "kcl"\n    age: int = 1\n\nhello = Person {\n    name = "hello kcl"\n    age = 102\n}\n')),(0,l.kt)("p",null,"\u6784\u9020 hello_test.k \u6d4b\u8bd5\u6587\u4ef6\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"test_person = lambda {\n    a = Person{}\n    assert a.name == 'kcl'\n}\ntest_person_age = lambda {\n    a = Person{}\n    assert a.age == 1\n}\ntest_person_ok = lambda {\n    a = Person{}\n    assert a.name == \"kcl\"\n    assert a.age == 1\n}\n")),(0,l.kt)("p",null,"\u7136\u540e\u518d\u76ee\u5f55\u4e0b\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"kcl test")," \u547d\u4ee4:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kcl test\n")),(0,l.kt)("p",null,"\u8f93\u51fa\u4e3a:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"test_person: PASS (2ms)\ntest_person_age: PASS (1ms)\ntest_person_ok: PASS (1ms)\n--------------------------------------------------------------------------------\nPASS: 3/3\n")),(0,l.kt)("h2",{id:"\u5931\u8d25\u7684\u6d4b\u8bd5"},"\u5931\u8d25\u7684\u6d4b\u8bd5"),(0,l.kt)("p",null,"\u5c06 hello_test.k \u6d4b\u8bd5\u4ee3\u7801\u4fee\u6539\u5982\u4e0b\uff0c\u6784\u9020\u5931\u8d25\u7684\u6d4b\u8bd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"test_person = lambda {\n    a = Person{}\n    assert a.name == 'kcl2'\n}\ntest_person_age = lambda {\n    a = Person{}\n    assert a.age == 123\n}\ntest_person_ok = lambda {\n    a = Person{}\n    assert a.name == \"kcl2\"\n    assert a.age == 1\n}\n")),(0,l.kt)("p",null,"\u6267\u884c\u547d\u4ee4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kcl test\n")),(0,l.kt)("p",null,"\u6d4b\u8bd5\u8f93\u51fa\u7684\u9519\u8bef\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"test_person: FAIL (6ms)\nEvaluationError\n --\x3e hello_test.k:3:1\n  |\n3 |     assert a.name == 'kcl2'\n  |\n  |\n\n\ntest_person_age: FAIL (3ms)\nEvaluationError\n --\x3e hello_test.k:7:1\n  |\n7 |     assert a.age == 123\n  |\n  |\n\n\ntest_person_ok: FAIL (2ms)\nEvaluationError\n  --\x3e hello_test.k:11:1\n   |\n11 |     assert a.name == \"kcl2\"\n   |\n   |\n\n\n--------------------------------------------------------------------------------\nFAIL: 3/3\n")),(0,l.kt)("h2",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"kcl test path")," \u6267\u884c\u6307\u5b9a\u76ee\u5f55\u7684\u6d4b\u8bd5, \u5f53\u524d\u76ee\u5f55\u53ef\u4ee5\u7701\u7565\u8be5\u53c2\u6570"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"kcl test --run=regexp")," \u53ef\u4ee5\u6267\u884c\u5339\u914d\u6a21\u5f0f\u7684\u6d4b\u8bd5"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"kcl test ./...")," \u9012\u5f52\u6267\u884c\u5b50\u76ee\u5f55\u7684\u5355\u5143\u6d4b\u8bd5")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"This command automates testing the packages named by the import paths.\n\n'KCL test' re-compiles each package along with any files with names matching\nthe file pattern \"*_test.k\". These additional files can contain test functions\nthat starts with \"test_*\".\n\nUsage:\n  kcl test [flags]\n\nAliases:\n  test, t\n\nExamples:\n  # Test whole current package recursively\n  kcl test ./...\n\n  # Test package named 'pkg'\n  kcl test pkg\n\n  # Test with the fail fast mode.\n  kcl test ./... --fail-fast\n\n  # Test with the regex expression filter 'test_func'\n  kcl test ./... --run test_func\n\n\nFlags:\n      --fail-fast    Exist when meet the first fail test case in the test process.\n  -h, --help         help for test\n      --run string   If specified, only run tests containing this string in their names.\n")))}k.isMDXComponent=!0}}]);