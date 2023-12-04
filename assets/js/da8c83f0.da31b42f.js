"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[75454],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=s,k=u["".concat(i,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:s,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45695:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(87462),s=(n(67294),n(3905));const r={sidebar_position:6},l="Test",o={unversionedId:"tools/cli/kcl/test",id:"version-0.7.0/tools/cli/kcl/test",title:"Test",description:"Introduction",source:"@site/versioned_docs/version-0.7.0/tools/cli/kcl/test.md",sourceDirName:"tools/cli/kcl",slug:"/tools/cli/kcl/test",permalink:"/docs/tools/cli/kcl/test",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.7.0/tools/cli/kcl/test.md",tags:[],version:"0.7.0",lastUpdatedBy:"peefy",lastUpdatedAt:1701659761,formattedLastUpdatedAt:"Dec 4, 2023",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tools",previous:{title:"Lint",permalink:"/docs/tools/cli/kcl/lint"},next:{title:"Validation",permalink:"/docs/tools/cli/kcl/vet"}},i={},c=[{value:"Introduction",id:"introduction",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"Failed Test Case",id:"failed-test-case",level:2},{value:"Args",id:"args",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,s.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"test"},"Test"),(0,s.kt)("h2",{id:"introduction"},"Introduction"),(0,s.kt)("p",null,"The KCL Test tool provides a simple testing framework to test KCL code. All KCL files in each directory are a set of tests, and each lambda starts with ",(0,s.kt)("inlineCode",{parentName:"p"},"test_")," in each ",(0,s.kt)("inlineCode",{parentName:"p"},"*_test.k")," is a test case."),(0,s.kt)("h2",{id:"how-to-use"},"How to use"),(0,s.kt)("p",null,"There is a KCL file ",(0,s.kt)("inlineCode",{parentName:"p"},"hello.k"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'schema Person:\n    name: str = "kcl"\n    age: int = 1\n\nhello = Person {\n    name = "hello kcl"\n    age = 102\n}\n')),(0,s.kt)("p",null,"Build a test file ",(0,s.kt)("inlineCode",{parentName:"p"},"hello_test.k"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"test_person = lambda {\n    a = Person{}\n    assert a.name == 'kcl'\n}\ntest_person_age = lambda {\n    a = Person{}\n    assert a.age == 1\n}\ntest_person_ok = lambda {\n    a = Person{}\n    assert a.name == \"kcl\"\n    assert a.age == 1\n}\n")),(0,s.kt)("p",null,"Execute the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"kcl test\n")),(0,s.kt)("p",null,"The output is"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"test_person: PASS (2ms)\ntest_person_age: PASS (1ms)\ntest_person_ok: PASS (1ms)\n--------------------------------------------------------------------------------\nPASS: 3/3\n")),(0,s.kt)("h2",{id:"failed-test-case"},"Failed Test Case"),(0,s.kt)("p",null,"Modify ",(0,s.kt)("inlineCode",{parentName:"p"},"hello_test.k")," to the following code to build failed test case:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"test_person = lambda {\n    a = Person{}\n    assert a.name == 'kcl2'\n}\ntest_person_age = lambda {\n    a = Person{}\n    assert a.age == 123\n}\ntest_person_ok = lambda {\n    a = Person{}\n    assert a.name == \"kcl2\"\n    assert a.age == 1\n}\n")),(0,s.kt)("p",null,"Run the command"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"kcl test\n")),(0,s.kt)("p",null,"Output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"test_person: FAIL (6ms)\nEvaluationError\n --\x3e hello_test.k:3:1\n  |\n3 |     assert a.name == 'kcl2'\n  |\n  |\n\n\ntest_person_age: FAIL (3ms)\nEvaluationError\n --\x3e hello_test.k:7:1\n  |\n7 |     assert a.age == 123\n  |\n  |\n\n\ntest_person_ok: FAIL (2ms)\nEvaluationError\n  --\x3e hello_test.k:11:1\n   |\n11 |     assert a.name == \"kcl2\"\n   |\n   |\n\n\n--------------------------------------------------------------------------------\nFAIL: 3/3\n")),(0,s.kt)("h2",{id:"args"},"Args"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"kcl test path")," Execute the test of the specified directory. It can be omitted if it's the same directory that the command is executed"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"kcl test --run=regexp")," Execute the test which matches patterns"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"kcl test ./...")," Execute unit tests recursively")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"This command automates testing the packages named by the import paths.\n\n'KCL test' re-compiles each package along with any files with names matching\nthe file pattern \"*_test.k\". These additional files can contain test functions\nthat starts with \"test_*\".\n\nUsage:\n  kcl test [flags]\n\nAliases:\n  test, t\n\nExamples:\n  # Test whole current package recursively\n  kcl test ./...\n\n  # Test package named 'pkg'\n  kcl test pkg\n\n  # Test with the fail fast mode.\n  kcl test ./... --fail-fast\n\n  # Test with the regex expression filter 'test_func'\n  kcl test ./... --run test_func\n\n\nFlags:\n      --fail-fast    Exist when meet the first fail test case in the test process.\n  -h, --help         help for test\n      --run string   If specified, only run tests containing this string in their names.\n")))}d.isMDXComponent=!0}}]);