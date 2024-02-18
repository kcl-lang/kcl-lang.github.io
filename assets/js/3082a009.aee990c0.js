"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[52587],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>g});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(t),d=i,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return t?a.createElement(g,r(r({ref:n},s),{},{components:t})):a.createElement(g,r({ref:n},s))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[m]="string"==typeof e?e:i,r[1]=o;for(var c=2;c<l;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},76223:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=t(87462),i=(t(67294),t(3905));const l={title:"Write simple config with KCL",linkTitle:"Write simple config with KCL",type:"docs",weight:2,description:"Write simple config with KCL",sidebar_position:1},r=void 0,o={unversionedId:"reference/lang/codelab/simple",id:"version-0.5.1/reference/lang/codelab/simple",title:"Write simple config with KCL",description:"Write simple config with KCL",source:"@site/versioned_docs/version-0.5.1/reference/lang/codelab/simple.md",sourceDirName:"reference/lang/codelab",slug:"/reference/lang/codelab/simple",permalink:"/docs/0.5.1/reference/lang/codelab/simple",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.1/reference/lang/codelab/simple.md",tags:[],version:"0.5.1",lastUpdatedBy:"Peefy",lastUpdatedAt:1708241829,formattedLastUpdatedAt:"Feb 18, 2024",sidebarPosition:1,frontMatter:{title:"Write simple config with KCL",linkTitle:"Write simple config with KCL",type:"docs",weight:2,description:"Write simple config with KCL",sidebar_position:1},sidebar:"reference",previous:{title:"Code Lab",permalink:"/docs/0.5.1/reference/lang/codelab/"},next:{title:"Write complex config using KCL Schema",permalink:"/docs/0.5.1/reference/lang/codelab/schema"}},p={},c=[{value:"1. Introduction",id:"1-introduction",level:2},{value:"What We Will Learn",id:"what-we-will-learn",level:3},{value:"2. Write Key-Value Pairs",id:"2-write-key-value-pairs",level:2},{value:"3. Write Simple Logic",id:"3-write-simple-logic",level:2},{value:"4. Write Collections",id:"4-write-collections",level:2},{value:"5. Append Items Into Collections",id:"5-append-items-into-collections",level:2},{value:"6. Write Assert",id:"6-write-assert",level:2},{value:"7. Use Handy Built-in Support",id:"7-use-handy-built-in-support",level:2},{value:"8. Reuse Variables in Another Module",id:"8-reuse-variables-in-another-module",level:2},{value:"9. Config with Input Arguments",id:"9-config-with-input-arguments",level:2},{value:"10. Simplify Logic Expression using Dict",id:"10-simplify-logic-expression-using-dict",level:2},{value:"11. The Final Step",id:"11-the-final-step",level:2}],s={toc:c},m="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(m,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-introduction"},"1. Introduction"),(0,i.kt)("p",null,"KCL is a simple and easy-to-use configuration language, where users can simply write the reusable configuration code."),(0,i.kt)("p",null,"In this first codelab, we will learn how to write a simple config with KCL."),(0,i.kt)("p",null,"Learning this codelab only requires basic programming knowledge, and experience with python will make it even easier."),(0,i.kt)("h3",{id:"what-we-will-learn"},"What We Will Learn"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Write simple key-value configuration in a programmable way"),(0,i.kt)("li",{parentName:"ol"},"Write simple logic in KCL code"),(0,i.kt)("li",{parentName:"ol"},"Write collections in KCL code"),(0,i.kt)("li",{parentName:"ol"},"Test and debug with KCL code"),(0,i.kt)("li",{parentName:"ol"},"Use built-in support in KCL code"),(0,i.kt)("li",{parentName:"ol"},"Share and reuse KCL code"),(0,i.kt)("li",{parentName:"ol"},"Write config with dynamic input arguments")),(0,i.kt)("h2",{id:"2-write-key-value-pairs"},"2. Write Key-Value Pairs"),(0,i.kt)("p",null,"Generate a simple config by creating a ",(0,i.kt)("inlineCode",{parentName:"p"},"my_config.k"),", we can fill in the following code without strict format which describes the configuration of deploy."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'cpu = 256\nmemory = 512\nimage = "nginx:1.14.2"\nservice = "my-service"\n')),(0,i.kt)("p",null,"In the code above, cpu and memory are declared as int value, while image and service are string literal."),(0,i.kt)("p",null,"Run with KCL, we will see the generated data in yaml format as below:"),(0,i.kt)("p",null,"KCL command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kcl my_config.k\n")),(0,i.kt)("p",null,"Stdout:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"cpu: 256\nmemory: 512\nimage: nginx:1.14.2\nservice: my-service\n")),(0,i.kt)("p",null,"The exported variable is immutable by default so that once it is declared, we can't modify it some where else."),(0,i.kt)("h2",{id:"3-write-simple-logic"},"3. Write Simple Logic"),(0,i.kt)("p",null,"Sometimes we want to write a logic in configuration, then we can use:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mutable and non-exported variable starting with ",(0,i.kt)("inlineCode",{parentName:"li"},"_")),(0,i.kt)("li",{parentName:"ul"},"If-else statement")),(0,i.kt)("p",null,"A non-exported variable means it will not appear in the output YAML, and it can be assigned multiple times."),(0,i.kt)("p",null,"Here is a sample to show how to adjust the resource with conditions."),(0,i.kt)("p",null,"KCL command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"kcl my_config.k\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'_priority = 1 # a non-exported and mutable variable\n_cpu = 256 # a non-exported and mutable variable\n\nif _priority == 1:\n    _cpu = 256\nelif _priority == 2:\n    _cpu = 512\nelif _priority == 3:\n    _cpu = 1024\nelse:\n    _cpu = 2048\n\ncpu = _cpu\nmemory = _cpu * 2\nimage = "nginx:1.14.2"\nservice = "my-service"\n')),(0,i.kt)("p",null,"Run with KCL, we will see the generated data in yaml format as below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"kcl my_config.k\n")),(0,i.kt)("p",null,"Stdout:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"cpu: 256\nmemory: 512\nimage: nginx:1.14.2\nservice: my-service\n")),(0,i.kt)("p",null,".. note::\nKCL has rich support of operators and string member functions, please read manual and specification for more details."),(0,i.kt)("h2",{id:"4-write-collections"},"4. Write Collections"),(0,i.kt)("p",null,"We can use collections to represent complex data types. The collections which are already supported are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"list"),(0,i.kt)("li",{parentName:"ul"},"dict")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'_priority = 1  # a non-exported and mutable variable\n_cpu = 256  # a non-exported and mutable variable\n\nif _priority == 1:\n    _cpu = 256\nelif _priority == 2:\n    _cpu = 512\nelif _priority == 3:\n    _cpu = 1024\nelse:\n    _cpu = 2048\n\ncpu = _cpu\nmemory = _cpu * 2\ncommand = ["nginx"] # a list\nlabels = {run = "my-nginx"} # a dict\nimage = "nginx:1.14.2"\nservice = "my-service"\n')),(0,i.kt)("p",null,"Run with kcl, we will see the generated data as yaml format as below:"),(0,i.kt)("p",null,"KCL command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kcl my_config.k\n")),(0,i.kt)("p",null,"Stdout:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"cpu: 512\nmemory: 1024\ncommand:\n  - nginx\nlabels:\n  run: my-nginx\nimage: nginx:1.14.2\nservice: my-service\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Check manual and specification out for more about collection date type and member functions.")),(0,i.kt)("h2",{id:"5-append-items-into-collections"},"5. Append Items Into Collections"),(0,i.kt)("p",null,"We can combine logical expressions, comprehensions, slices, unions and other characteristics to dynamically add elements to the collection"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'_priority = 1 # a non-exported and mutable variable\n_cpu = 256 # a non-exported and mutable variable\n_env = "pre-prod"\n\nif _priority == 1:\n    _cpu = 256\nelif _priority == 2:\n    _cpu = 512\nelif _priority == 3:\n    _cpu = 1024\nelse:\n    _cpu = 2048\n\ncpu = _cpu\nmemory = _cpu * 2\n_command = ["nginx"] # a list\n_command = _command + ["-f", "file"]  # Append items into command using + operator to contact two lists\ncommand = [c.lower() for c in _command]  # Take each element in the list to lowercase\n_labels = {\n    run = "my-nginx"\n    if _env:\n        env = _env  # Append a dict key-value pair when the _env is not None/Undefined or empty using if expressions\n} # a dict\nlabels = _labels\nimage = "nginx:1.14.2"\nservice = "my-service"\n')),(0,i.kt)("p",null,"Run with kcl, we will see the generated data as yaml format as below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"kcl my_config.k\n")),(0,i.kt)("p",null,"Stdout:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"cpu: 256\nmemory: 512\ncommand:\n  - nginx\n  - -f\n  - file\nlabels:\n  run: my-nginx\nimage: nginx:1.14.2\nservice: my-service\n")),(0,i.kt)("h2",{id:"6-write-assert"},"6. Write Assert"),(0,i.kt)("p",null,"To make code testable and robust, we can verify config data with assertions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'_priority = 1 # a non-exported and mutable variable\n_cpu = 256 # a non-exported and mutable variable\n\nif _priority == 1:\n    _cpu = 256\nelif _priority == 2:\n    _cpu = 512\nelif _priority == 3:\n    _cpu = 1024\nelse:\n    _cpu = 2048\n\ncpu = _cpu\nmemory = _cpu * 2\ncommand = ["nginx"] # a list\nlabels = {run = "my-nginx"} # a dict\nimage = "nginx:1.14.2"\nservice = "my-service"\nassert "env" in labels, "env label is a must"\nassert cpu >= 256, "cpu cannot be less than 256"\n')),(0,i.kt)("p",null,"Run with KCL, we will see eval failure with an error message as output as below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kcl my_config.k\n")),(0,i.kt)("p",null,"Stderr:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Assertion failure: env label is a must.\n")),(0,i.kt)("p",null,"After adding env:pre-prod pair into labels, we will get the output as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"cpu: 512\nmemory: 1024\ncommand:\n  - nginx\nlabels:\n  run: my-nginx\n  env: pre-prod\nimage: nginx:1.14.2\nservice: my-service\n")),(0,i.kt)("h2",{id:"7-use-handy-built-in-support"},"7. Use Handy Built-in Support"),(0,i.kt)("p",null,"What's more, we can use built-in functions to help we debug or simplify coding."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'_priority = 1  # a non-exported and mutable variable\n_cpu = 256  # a non-exported and mutable variable\n\nif _priority == 1:\n    _cpu = 256\nelif _priority == 2:\n    _cpu = 512\nelif _priority == 3:\n    _cpu = 1024\nelse:\n    _cpu = 2048\n\n_name = "nginx"\n# exported variables\ncpu = _cpu\nmemory = _cpu * 2\ncommand = [_name] # a list\nlabels = {\n    run = "my-{}".format(_name)\n    env = "pre-prod"\n} # a dict\nimage = "{}:1.14.2".format(_name) # string format\nservice = "my-service"\n\n# debugging\nprint(labels) # debugging by print\n\n# test\nassert len(labels) > 0, "labels can\'t be empty" # use len() to get list length\nassert "env" in labels, "env label is a must"\nassert cpu >= 256, "cpu cannot be less than 256"\n')),(0,i.kt)("p",null,"This sample shows how we use ",(0,i.kt)("inlineCode",{parentName:"p"},"format()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"len()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"print()")," function to help customize the config."),(0,i.kt)("p",null,"Run with KCL, we will see the generated data in yaml format as below:"),(0,i.kt)("p",null,"KCL command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kcl my_config.k\n")),(0,i.kt)("p",null,"Stdout:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"cpu: 512\nmemory: 1024\ncommand:\n  - nginx\nlabels:\n  run: my-nginx\n  env: pre-prod\nimage: nginx:1.14.2\nservice: my-service\nrun: my-nginx\nenv: pre-prod\n")),(0,i.kt)("p",null,"Note: more built-in functions and modules can be seen in spec/module"),(0,i.kt)("h2",{id:"8-reuse-variables-in-another-module"},"8. Reuse Variables in Another Module"),(0,i.kt)("p",null,"To make our code well-organized, we can simply separate our code to ",(0,i.kt)("inlineCode",{parentName:"p"},"my_config.k")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"my_config_test.k"),"."),(0,i.kt)("p",null,"Config data defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"my_config.k"),","),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'_priority = 1  # a non-exported and mutable variable\n_cpu = 256  # a non-exported and mutable variable\n\nif _priority == 1:\n    _cpu = 256\nelif _priority == 2:\n    _cpu = 512\nelif _priority == 3:\n    _cpu = 1024\nelse:\n    _cpu = 2048\n_name = "nginx"\n\n# exported variables\ncpu = _cpu\nmemory = _cpu * 2\ncommand = [_name] # a list\nlabels = {\n    run = "my-{}".format(_name)\n    env = "pre-prod"\n} # a dict\nimage = "{}:1.14.2".format(_name) # string format\nservice = "my-service"\n')),(0,i.kt)("p",null,"And test code defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"my_config_test.k"),", in which we can import ",(0,i.kt)("inlineCode",{parentName:"p"},"my_config.k"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import my_config\n\n# debugging\nprint(my_config.labels) # debugging by print\n\n# test\nassert len(my_config.labels) > 0, "labels can\'t be empty" # use len() to get list length\nassert "env" in my_config.labels, "env label is a must"\nassert my_config.cpu >= 256, "cpu cannot be less than256"\n')),(0,i.kt)("h2",{id:"9-config-with-input-arguments"},"9. Config with Input Arguments"),(0,i.kt)("p",null,"Sometimes we need to get external input via parameters dynamically from the end user or platform."),(0,i.kt)("p",null,"In this case, we can pass in ",(0,i.kt)("inlineCode",{parentName:"p"},"priority")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"env")," on demand:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Pass in arguments: ",(0,i.kt)("inlineCode",{parentName:"li"},"-D priority=1 -D env=pre-prod")),(0,i.kt)("li",{parentName:"ul"},"Get value by ",(0,i.kt)("inlineCode",{parentName:"li"},"option")," keyword in KCL code")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'_priority = option("priority") # a non-exported and mutable variable\n_env = option("env") # a non-exported and mutable variable\n_cpu = 256 # a non-exported and mutable variable\n\nif _priority == 1:\n    _cpu = 256\nelif _priority == 2:\n    _cpu = 512\nelif _priority == 3:\n    _cpu = 1024\nelse:\n    _cpu = 2048\n\n_name = "nginx"\n# exported variables\ncpu = _cpu\nmemory = _cpu * 2\ncommand = [_name] # a list\nlabels = {\n    run = "my-{}".format(_name)\n    env = _env\n} # a dict\nimage = "{}:1.14.2".format(_name) # string format\nservice = "my-service"\n')),(0,i.kt)("p",null,"Run with KCL, we will see the generated data in yaml format as below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kcl my_config.k -D priority=2 -D env=pre-prod\n")),(0,i.kt)("p",null,"Stdout:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"cpu: 512\nmemory: 1024\ncommand:\n  - nginx\nlabels:\n  run: my-nginx\n  env: pre-prod\nimage: nginx:1.14.2\nservice: my-service\n")),(0,i.kt)("h2",{id:"10-simplify-logic-expression-using-dict"},"10. Simplify Logic Expression using Dict"),(0,i.kt)("p",null,"When we need to write complex logic, we can use dict to simplify the writing of logic."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'_priority = option("priority") # a non-exported and mutable variable\n_env = option("env") # a non-exported and mutable variable\n_priorityCpuMap = {\n    "1" = 256\n    "2" = 512\n    "3" = 1024\n}\n# Using a dict to simplify logic and the default value is 2048\n_cpu = _priorityCpuMap[_priority] or 2048\n_name = "nginx"\n# exported variables\ncpu = _cpu\nmemory = _cpu * 2\ncommand = [_name] # a list\nlabels = {\n    run = "my-{}".format(_name)\n    env = _env\n} # a dict\nimage = "{}:1.14.2".format(_name) # string format\nservice = "my-service"\n')),(0,i.kt)("p",null,"Run with KCL, we will see the generated data in yaml format as below:"),(0,i.kt)("p",null,"KCL command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kcl my_config.k -D priority=2 -D env=pre-prod\n")),(0,i.kt)("p",null,"Stdout:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"cpu: 512\nmemory: 1024\ncommand:\n  - nginx\nlabels:\n  run: my-nginx\n  env: pre-prod\nimage: nginx:1.14.2\nservice: my-service\n")),(0,i.kt)("h2",{id:"11-the-final-step"},"11. The Final Step"),(0,i.kt)("p",null,"Congratulations!"),(0,i.kt)("p",null,"We have completed the first lesson about KCL, we have used KCL to replace our key-value text file to get better programming support."),(0,i.kt)("p",null,"Please check schema codelab out now to learn how to write an advanced config collaboratively with KCL ",(0,i.kt)("inlineCode",{parentName:"p"},"schema")," mechanism."))}u.isMDXComponent=!0}}]);