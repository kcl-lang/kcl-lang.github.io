"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[20058],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=s,g=u["".concat(i,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:s,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3659:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),s=(n(67294),n(3905));const r={sidebar_position:5},o="Test Tool",l={unversionedId:"tools/cli/kcl/test",id:"version-0.4.4/tools/cli/kcl/test",title:"Test Tool",description:"Intro",source:"@site/versioned_docs/version-0.4.4/tools/cli/kcl/test.md",sourceDirName:"tools/cli/kcl",slug:"/tools/cli/kcl/test",permalink:"/docs/0.4.4/tools/cli/kcl/test",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.4.4/tools/cli/kcl/test.md",tags:[],version:"0.4.4",lastUpdatedBy:"peefy",lastUpdatedAt:1689687201,formattedLastUpdatedAt:"Jul 18, 2023",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tools",previous:{title:"Docgen",permalink:"/docs/0.4.4/tools/cli/kcl/docgen"},next:{title:"OpenAPI Tools",permalink:"/docs/0.4.4/tools/cli/openapi/"}},i={},p=[{value:"Intro",id:"intro",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"Failed Test Case",id:"failed-test-case",level:2},{value:"Option Args",id:"option-args",level:2},{value:"Plugin Test",id:"plugin-test",level:2},{value:"Integration Test",id:"integration-test",level:2},{value:"Batch Test",id:"batch-test",level:2},{value:"Args",id:"args",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,s.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"test-tool"},"Test Tool"),(0,s.kt)("h2",{id:"intro"},"Intro"),(0,s.kt)("p",null,"The KCL Test tool and ",(0,s.kt)("inlineCode",{parentName:"p"},"testing")," package provide a simple testing framework to test KCL code. All KCL files in each directory are a set of tests, and each schema starts with ",(0,s.kt)("inlineCode",{parentName:"p"},"Test")," in each ",(0,s.kt)("inlineCode",{parentName:"p"},"test.k")," is a test case."),(0,s.kt)("h2",{id:"how-to-use"},"How to use"),(0,s.kt)("p",null,"There is a KCL file ",(0,s.kt)("inlineCode",{parentName:"p"},"hello.k"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'schema Person:\n    name: str = "kcl"\n    age: int = 1\n\nhello = Person {\n    name = "hello kcl"\n    age = 102\n}\n')),(0,s.kt)("p",null,"Build a test file ",(0,s.kt)("inlineCode",{parentName:"p"},"hello_test.k"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"schema TestPerson:\n    a = Person{}\n    assert a.name == 'kcl'\n\nschema TestPerson_age:\n    a = Person{}\n    assert a.age == 1\n\nschema TestPerson_ok:\n    a = Person{}\n    assert a.name == \"kcl\"\n    assert a.age == 1\n")),(0,s.kt)("p",null,"Execute the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"$ kcl-test\nok   /pkg/to/app [365.154142ms]\n$ \n")),(0,s.kt)("h2",{id:"failed-test-case"},"Failed Test Case"),(0,s.kt)("p",null,"Modify ",(0,s.kt)("inlineCode",{parentName:"p"},"hello_test.k")," to the following code to build failed test case:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"# Copyright 2021 The KCL Authors. All rights reserved.\n\nimport testing\n\nschema TestPerson:\n    a = Person{}\n    assert a.name == 'kcl2'\n\nschema TestPerson_age:\n    a = Person{}\n    assert a.age == 123\n\nschema TestPerson_ok:\n    a = Person{}\n    assert a.name == \"kcl2\"\n    assert a.age == 1\n")),(0,s.kt)("p",null,"Output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"$ kcl-test\nFAIL /pkg/to/app [354.153775ms]\n---- <TestPerson> failed [48.817552ms]\n     KCL Runtime Error: File /pkg/to/app/hello_test.k:7:\n             assert a.name == 'kcl2'\n     Assertion failure\n---- <TestPerson_age> failed [47.515009ms]\n     KCL Runtime Error: File /pkg/to/app/hello_test.k:11:\n             assert a.age == 123\n     Assertion failure\n---- <TestPerson_ok> failed [47.26677ms]\n     KCL Runtime Error: File /pkg/to/app/hello_test.k:15:\n             assert a.name == \"kcl2\"\n     Assertion failure\n$\n")),(0,s.kt)("h2",{id:"option-args"},"Option Args"),(0,s.kt)("p",null,"Literal type command line arguments can be specified via the testing package:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'schema TestOptions:\n    testing.arguments("name", "ktest")\n    testing.arguments("age", "123")\n    testing.arguments("int0", 0)\n    testing.arguments("float0", 0.0)\n    testing.arguments("bool-true", True)\n    testing.arguments("bool-false", False)\n\n    name = option("name")\n    assert name == "ktest"\n\n    age = option("age")\n    assert age == 123\n\n    assert option("int0") == 0\n    assert option("float0") == 0.0\n    assert option("bool-true") == True\n    assert option("bool-false") == False\n')),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"testing.arguments")," defines a set of key-value arguments, valid only in the current test."),(0,s.kt)("p",null,"The option arguments can also be loaded from the ",(0,s.kt)("inlineCode",{parentName:"p"},"settings.yaml"),". There is a file ",(0,s.kt)("inlineCode",{parentName:"p"},"settings.yaml"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"  - key: app-name\n    value: app\n  - key: env-type\n    value: prod\n  - key: image\n    value: reg.docker.inc.com/test-image\n")),(0,s.kt)("p",null,"Parameters can then be configured via ",(0,s.kt)("inlineCode",{parentName:"p"},'testing.setting_file("./settings.yaml")'),". At the same time, ",(0,s.kt)("inlineCode",{parentName:"p"},"testing.arguments()")," is still supported to override the parameters in the configuration file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'schema TestOptions_setting:\n    testing.setting_file("./settings.yaml")\n    testing.arguments("file", "settings.yaml")\n\n    assert option("app-name") == "app"\n    assert option("file") == "settings.yaml"\n')),(0,s.kt)("h2",{id:"plugin-test"},"Plugin Test"),(0,s.kt)("p",null,"Automatically switch to plugin mode if the directory to be tested contains ",(0,s.kt)("inlineCode",{parentName:"p"},"plugin.py")," and test files. Then set the environment variable ",(0,s.kt)("inlineCode",{parentName:"p"},"KCL_PLUGINS_ROOT")," before the test (plugins in other directories can no longer be accessed) to test the current plugin, and restore the previous ",(0,s.kt)("inlineCode",{parentName:"p"},"KCL_PLUGINS_ROOT")," after the test is completed."),(0,s.kt)("h2",{id:"integration-test"},"Integration Test"),(0,s.kt)("p",null,"Automatically execute integration tests when the directory contains ",(0,s.kt)("inlineCode",{parentName:"p"},"*.k"),". If there is ",(0,s.kt)("inlineCode",{parentName:"p"},"stdout.golden")," then verify the output. If there is ",(0,s.kt)("inlineCode",{parentName:"p"},"stderr.golden")," then verify the error. Supports the ",(0,s.kt)("inlineCode",{parentName:"p"},"settings.yaml")," file to define command line arguments."),(0,s.kt)("h2",{id:"batch-test"},"Batch Test"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"kcl-test path")," Execute the test of the specified directory. It can be omitted if it's the same directory that the command is executed"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"kcl-test -run=regexp")," Execute the test which matches patterns"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"kcl-test ./...")," Execute unit tests recursively")),(0,s.kt)("h2",{id:"args"},"Args"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"$ kcl-test -h\nNAME:\n   kcl-go test - test packages\n\nUSAGE:\n   kcl-go test [command options] [packages]\n\nOPTIONS:\n   --run value    Run only those tests matching the regular expression.\n   --quiet, -q    Set quiet mode (default: false)\n   --verbose, -v  Log all tests as they are run (default: false)\n   --debug, -d    Run in debug mode (for developers only) (default: false)\n   --help, -h     show help (default: false)\n")))}m.isMDXComponent=!0}}]);