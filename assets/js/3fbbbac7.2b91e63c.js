"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[8887],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(t),m=i,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return t?a.createElement(f,r(r({ref:n},c),{},{components:t})):a.createElement(f,r({ref:n},c))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},97471:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=t(87462),i=(t(67294),t(3905));const o={id:"practice",sidebar_label:"Best Practice"},r="Best Practice",s={unversionedId:"user_docs/guides/working-with-konfig/practice",id:"user_docs/guides/working-with-konfig/practice",title:"Best Practice",description:'This document aims to explain the best practices for integrating new models into the Konfig library and designing, building and writing KCL code models. New models are generally designed and abstracted using the best practice of separating front-end and back-end models. The direct purpose of distinguishing between front-end and back-end models is to separate "user interface" and "model implementation", achieving a user-friendly and simple configuration interface as well as automated configuration query and modification interfaces.',source:"@site/docs/user_docs/guides/working-with-konfig/4-best-practice.md",sourceDirName:"user_docs/guides/working-with-konfig",slug:"/user_docs/guides/working-with-konfig/practice",permalink:"/docs/next/user_docs/guides/working-with-konfig/practice",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/user_docs/guides/working-with-konfig/4-best-practice.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1706869561,formattedLastUpdatedAt:"Feb 2, 2024",sidebarPosition:4,frontMatter:{id:"practice",sidebar_label:"Best Practice"},sidebar:"user_docs",previous:{title:"Quick Start",permalink:"/docs/next/user_docs/guides/working-with-konfig/guide"},next:{title:"Quick Start",permalink:"/docs/next/user_docs/guides/gitops/gitops-quick-start"}},l={},d=[{value:"Workflow",id:"workflow",level:2},{value:"Model Structure",id:"model-structure",level:2},{value:"Best Practices for Konfig Modeling",id:"best-practices-for-konfig-modeling",level:2},{value:"Use Single Attribute Instead of Configuration Templates",id:"use-single-attribute-instead-of-configuration-templates",level:3},{value:"Use Literal Type and Union Type",id:"use-literal-type-and-union-type",level:3},{value:"Use Dict Instead of List As Much As Possible",id:"use-dict-instead-of-list-as-much-as-possible",level:3},{value:"Write Validation Expressions for Models",id:"write-validation-expressions-for-models",level:3},{value:"Use Numerical Unit Type",id:"use-numerical-unit-type",level:3},{value:"Automated Modification of Front-end Model Instances",id:"automated-modification-of-front-end-model-instances",level:3},{value:"Use Functions",id:"use-functions",level:3},{value:"Use Package and Module",id:"use-package-and-module",level:3},{value:"Simplify Logical Expressions Using Configuration",id:"simplify-logical-expressions-using-configuration",level:3},{value:"Separate Logic and Data",id:"separate-logic-and-data",level:3},{value:"Add Comments for Models",id:"add-comments-for-models",level:3},{value:"Backend Model",id:"backend-model",level:2}],c={toc:d},u="wrapper";function p(e){let{components:n,...o}=e;return(0,i.kt)(u,(0,a.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"best-practice"},"Best Practice"),(0,i.kt)("p",null,"This document aims to explain the best practices for integrating new models into the Konfig library and designing, building and writing KCL code models. New models are generally designed and abstracted using the best practice of separating front-end and back-end models. The direct purpose of distinguishing between front-end and back-end models is to separate ",(0,i.kt)("inlineCode",{parentName:"p"},'"user interface"')," and ",(0,i.kt)("inlineCode",{parentName:"p"},'"model implementation"'),", achieving a user-friendly and simple configuration interface as well as automated configuration query and modification interfaces."),(0,i.kt)("h2",{id:"workflow"},"Workflow"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(87839).Z,width:"2760",height:"1512"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Coding"),". Use the KCL OpenAPI tool to generate KCL schemas from the Customer Resources Definitions (CRDs) or OpenAPI Swagger models. These schemas define the atomic capabilities of the platform."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Abstraction"),". Based on these atomic capabilities, the platform abstracts user-oriented front-end models and provides a set of templates. These front-\nend models cannot work independently, and corresponding back-end models are required. These back-end models will eventually obtain an instance of the front-end model at runtime; it parses the input front-end model and converts it into Kubernetes resources."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Configuration"),". Developers or SREs describe the requirements of applications based on front-end models. Users can define the base and different environment configurations for different environments e.g., base, development and production and different localities. In most cases, defining configurations only requires declaring key-value pairs. For some complex scenarios, users can define the logic to generate configurations."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Automation"),". After defining the user's configuration, all components have been defined and are ready to be automated. The platform can compile, execute, output, modify, query, and perform other automatic works through the KCL CLI or GPL-binding APIs. Users can also deploy the KCL configuration to the Kubernetes cluster with tools.")),(0,i.kt)("h2",{id:"model-structure"},"Model Structure"),(0,i.kt)("p",null,"Just as web applications provide a friendly user interface, and user input is further inferred at the backend of the application to obtain the final data that falls into the database, similarly, using KCL for model design also follows the logic of front-end and back-end separation. In addition, when the downstream required data content changes, we only need to modify the rendering/logic of the user configuration data to the backend model, thereby avoiding large-scale modification of user configurations."),(0,i.kt)("p",null,"Taking the sidecar configuration of application services as an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# Config user interface.\nuser_sidecar_feature_gates: str\n\n# Downstream config of processing.\nsidecars = [\n    {\n        name = "sidecar_name"  # Additional template for sidecars parameters, users do not need to configure them.\n        feature_gates = user_sidecar_feature_gates\n    }\n]\n')),(0,i.kt)("h2",{id:"best-practices-for-konfig-modeling"},"Best Practices for Konfig Modeling"),(0,i.kt)("h3",{id:"use-single-attribute-instead-of-configuration-templates"},"Use Single Attribute Instead of Configuration Templates"),(0,i.kt)("p",null,"For some backend models, the configuration attributes that need to be filled in are often large and comprehensive designs, requiring users to actively input more complex configuration templates, and the filling content of this attribute is basically the same for different users. For example, the configuration of logic shown below requires users to fill in a large amount of template data, which has a high mental cost."),(0,i.kt)("p",null,"A simple best practice is to abstract such commonly used and complex templates into a simple attribute ",(0,i.kt)("inlineCode",{parentName:"p"},"overQuota")," with the ",(0,i.kt)("inlineCode",{parentName:"p"},"bool")," type in the front-end model, allowing users to do multiple-choice questions instead of filling in blank questions. For example, when the ",(0,i.kt)("inlineCode",{parentName:"p"},"overQuota")," attribute is ",(0,i.kt)("inlineCode",{parentName:"p"},"True"),", the back-end model will render this complex logic."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The front-end attribute ",(0,i.kt)("inlineCode",{parentName:"li"},"overQuota"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"overQuota: bool\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The back-end YAML output:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'spec:\n  template:\n    spec:\n      affinity:\n        nodeAffinity:\n          requiredDuringSchedulingIgnoredDuringExecution:\n            nodeSelectorTerms:\n              - matchExpressions:\n                  - key: k8s/is-over-quota\n                    operator: In\n                    values:\n                      - "true"\n')),(0,i.kt)("p",null,"In addition, different template names can be designed according to specific business scenarios to fill in the blanks, such as designing an attribute template in the code shown below to assist users in template selection instead of directly filling in the template content. The legal template value can be ",(0,i.kt)("inlineCode",{parentName:"p"},'"success_ratio"')," or ",(0,i.kt)("inlineCode",{parentName:"p"},'"service_cost"'),". When the backend model extends more templates, the front-end code does not need to make any modifications, only needs to adapt the corresponding template logic in the backend model."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'schema SLI:\n    template: str = "success_ratio"\n')),(0,i.kt)("p",null,"In addition, it is recommended to avoid using complex structures directly as front-end model attributes to avoid users needing to rely on too many KCL syntax features (such as unpacking, looping, etc.) or writing many temporary variables to complete the instantiation of the structure when using the model."),(0,i.kt)("h3",{id:"use-literal-type-and-union-type"},"Use Literal Type and Union Type"),(0,i.kt)("p",null,"In the above section, it was mentioned that a string attribute can be used to represent different template names, and further, a literal type can be used to express the optional content of the template. For example, the following improvements can be made."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'schema SLI:\n    template: "success_ratio" | "service_cost" = "success_ratio"\n')),(0,i.kt)("p",null,"The type of template is a combination of two string types, indicating that the template can only be ",(0,i.kt)("inlineCode",{parentName:"p"},'"success_ratio"')," or ",(0,i.kt)("inlineCode",{parentName:"p"},'"service_cost"'),". When the user fills in the values of other strings, the KCL compiler will report an error."),(0,i.kt)("p",null,"In addition to using union types for literal types, KCL also supports union for complex types such as schema types. For the support of this backend ",(0,i.kt)("strong",{parentName:"p"},"oneof")," configuration, KCL has built-in composite structure union types for support. For example, we can define our own SLI front-end types for various scenarios: ",(0,i.kt)("inlineCode",{parentName:"p"},"CustomSliDataSource"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"PQLSLIDataSource"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"StackSLIDataSource"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"schema CustomSLIDataSource:\n    customPluginUrl: str\n\nschema PQLSLIDataSource:\n    total?: str\n    error?: str\n    success?: str\n    cost?: str\n    count?: str\n\nschema StackSLIDataSource:\n    stack: str\n    groupBy?: str\n    metric?: str\n\n# Simplify type definitions using type aliases\ntype DataSource = CustomSLIDataSource | PQLSLIDataSource | StackSLIDataSource\n\nschema DataConfiguration:\n    sources: {str: DataSource}\n")),(0,i.kt)("p",null,"The advantage of designing this front-end model is that the compiler can statically check that the type written by the user can only be a certain type. If the back-end model is used directly, it cannot directly obtain the mapping relationship between different types of types and the fields that need to be filled in from the model."),(0,i.kt)("p",null,"In addition, the overall design of the front-end model should also consider horizontal scalability, using the union type as much as possible, fully utilizing the advantages of coding, and avoiding unnecessary large amounts of code restructuring and modification when connecting to different backend or backend models. In addition, for the factory pattern commonly used in other GPL languages, union types can also be used instead in KCL. For example, if you want to obtain a constructor of a type based on the content of a string, you can directly use union types for optimization."),(0,i.kt)("p",null,"Using the factory pattern in KCL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'schema DataA:\n    id?: int = 1\n    value?: str = "value"\n\nschema DataB:\n    name?: str = "DataB"\n\n_dataFactory: {str:} = {\n    DataA = DataA\n    DataB = DataB\n}\ndataA = _dataFactory["DataA"]()\ndataB = _dataFactory["DataB"]()\n')),(0,i.kt)("p",null,"Replacing the factory pattern with the KCL union type."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'schema DataA:\n    id?: int = 1\n    value?: str = "value"\n\nschema DataB:\n    name?: str = "DataB"\n\n# Just use the union type.\ndataA: DataA | DataB = DataA()\ndataB: DataA | DataB = DataB()\n')),(0,i.kt)("h3",{id:"use-dict-instead-of-list-as-much-as-possible"},"Use Dict Instead of List As Much As Possible"),(0,i.kt)("p",null,"To make it easier to modify configurations on-site or automate queries, it is advisable to define list or array attributes as dictionary types for easy indexing. In many complex configuration scenarios, the index of a list is arbitrary and the order of elements has no impact on the configuration. Using a dictionary type instead of a list type allows for more convenient data querying and modification. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'schema Person:\n    name: str\n    age: int\n\nschema House:\n    persons: [Person]\n\nhouse = House {\n    persons = [\n        Person {\n            name = "Alice"\n            age = 18\n        }\n        Person {\n            name = "Bob"\n            age = 10\n        }\n    ]\n}\n')),(0,i.kt)("p",null,"For example, in the above example, if you want to query the age of the person named ",(0,i.kt)("inlineCode",{parentName:"p"},'"Alice"')," from the list of persons in the house, you need to loop through the list to find Alice's age. However, if you define persons as a dictionary like the following code, it not only looks more concise in code, but you can also directly retrieve Alice's age by using house.persons.Alice.age. In addition, the information of the entire configuration is complete and has no redundant information."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"schema Person:\n    age: int\n\nschema House:\n    persons: {str: Person}  # Use Dict Instead of List\n\nhouse = House {\n    persons = {\n        Alice = Person { age = 18 }\n        Bob = Person { age = 10 }\n    }\n}\n")),(0,i.kt)("h3",{id:"write-validation-expressions-for-models"},"Write Validation Expressions for Models"),(0,i.kt)("p",null,"For frontend models, it is often necessary to validate the fields filled in by users. In this case, KCL's check expressions can be used in conjunction with KCL's built-in functions/syntax/system libraries to perform field validation. For frontend model validation, it is recommended to directly write it in the frontend model definition as a prerequisite for validation, in order to avoid unexpected errors that may occur when the errors are passed to the backend model."),(0,i.kt)("p",null,"Use all/any expressions and check expressions for validation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import regex\n\nschema ConfigMap:\n    name: str\n    data: {str:str}\n    configMounts?: [ConfigMount]\n\n    check:\n        all k in data {\n            regex.match(k, r\"[A-Za-z0-9_.-]*\")\n        }, \"a valid config key must consist of alphanumeric characters, '-', '_' or '.'\"\n\nschema ConfigMount:\n    containerName: str\n    mountPath: str\n    subPath?: str\n\n    check:\n        \":\" not in mountPath, \"mount path must not contain ':'\"\n")),(0,i.kt)("h3",{id:"use-numerical-unit-type"},"Use Numerical Unit Type"),(0,i.kt)("p",null,"Numbers with units in KCL have a built-in type of ",(0,i.kt)("inlineCode",{parentName:"p"},"units.NumberMultiplier"),", and any arithmetic operations are not allowed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import units\n\ntype NumberMultiplier = units.NumberMultiplier\n\nx0: NumberMultiplier = 1M  # Ok\nx1: NumberMultiplier = x0  # Ok\nx2 = x0 + x1  # Error: unsupported operand type(s) for +: 'number_multiplier(1M)' and 'number_multiplier(1M)'\n")),(0,i.kt)("p",null,"We can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"int()/float()")," function and ",(0,i.kt)("inlineCode",{parentName:"p"},"str()")," function to convert the number unit type to integer or string type, and the resulting string retains the units of the original number unit type."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'a: int = int(1Ki)  # 1024\nb: str = str(1Mi)  # "1Mi"\n')),(0,i.kt)("p",null,"The definitions related to Kubernetes Resource in Konfig can be written using numerical unit types"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import units\n\ntype NumberMultiplier = units.NumberMultiplier\n\nschema Resource:\n    cpu?:           NumberMultiplier | int = 1\n    memory?:        NumberMultiplier = 1024Mi\n    disk?:          NumberMultiplier = 10Gi\n    epchygontee?:   int\n")),(0,i.kt)("h3",{id:"automated-modification-of-front-end-model-instances"},"Automated Modification of Front-end Model Instances"),(0,i.kt)("p",null,"In KCL, automated modification of front-end model instances can be achieved through the CLI and API. For example, if we want to modify the image content of an application (Konfig Stack Path: apps/nginx example/dev) configuration, we can directly execute the following command to modify the image content."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'kcl -Y kcl.yaml ci-test/settings.yaml -o ci-test/stdout.golden.yaml -d -O :appConfiguration.image=\\"test-image-v1\\"\n')),(0,i.kt)("p",null,"For more documentation related to automation, please refer to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/user_docs/guides/automation"},"Automation Documents")," section."),(0,i.kt)("h3",{id:"use-functions"},"Use Functions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# Define a function that adds two numbers and returns the result\u3002\nadd = lambda x, y {\n    x + y\n}\n# Define a function that subs two numbers and returns the result\u3002\nsub = lambda x, y {\n    x - y\n}\n# Call the function, pass in arguments, and obtain the return value.\nresult = sub(add(2, 3), 2)  # The result is 3.\n")),(0,i.kt)("p",null,"The output YAML is"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"result: 3\n")),(0,i.kt)("h3",{id:"use-package-and-module"},"Use Package and Module"),(0,i.kt)("p",null,"Create a package called ",(0,i.kt)("inlineCode",{parentName:"p"},"utils.k"),", define a KCL function called ",(0,i.kt)("inlineCode",{parentName:"p"},"add")," in it, and import it into another file for use."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"utils.k"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# utils.k\n\n# Define a function that adds two numbers and returns the result\u3002\nadd = lambda x, y {\n    x + y\n}\n\n# Define a function that subs two numbers and returns the result\u3002\nsub = lambda x, y {\n    x - y\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"main.k"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# main.k\nimport .utils\n\n# Call the function, pass in arguments, and obtain the return value.\nresult = utils.sub(utils.add(2, 3), 2)  # The result is 3.\n")),(0,i.kt)("h3",{id:"simplify-logical-expressions-using-configuration"},"Simplify Logical Expressions Using Configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# Complex Logic, `_cpu` is a non-exported and mutable attribute.\n_cpu = 256\n_priority = "1"\n\nif _priority == "1":\n    _cpu = 256\nelif _priority == "2":\n    _cpu = 512\nelif _priority == "3":\n    _cpu = 1024\nelse:\n    _cpu = 2048\n\n# Simplify Logic Expression using Config\ncpuMap = {\n    "1" = 256\n    "2" = 512\n    "3" = 1024\n}\n# Get cpu from the cpuMap, when not found, use the default value 2048.\ncpu = cpuMap[_priority] or 2048\n')),(0,i.kt)("p",null,"The output is"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'cpuMap:\n  "1": 256\n  "2": 512\n  "3": 1024\ncpu256: 256\ncpu2048: 2048\n')),(0,i.kt)("h3",{id:"separate-logic-and-data"},"Separate Logic and Data"),(0,i.kt)("p",null,"We can use KCL ",(0,i.kt)("strong",{parentName:"p"},"schema"),", ",(0,i.kt)("strong",{parentName:"p"},"config"),", and ",(0,i.kt)("strong",{parentName:"p"},"lambda")," to separate ",(0,i.kt)("strong",{parentName:"p"},"data")," and ",(0,i.kt)("strong",{parentName:"p"},"logic")," as much as possible."),(0,i.kt)("p",null,"For example, we can write the following code (main.k)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'schema Student:\n    """Define a `Student` schema model with documents.\n\n    Attributes\n    ----------\n    name : str, required\n        The name of the student.\n    id : int, required.\n        The id number of the student.\n    grade : int, required.\n        The grade of the student.\n\n    Examples\n    --------\n    s = Student {\n        name = "Alice"\n        id = 1\n        grade = 80\n    }\n\n    """\n    name: str\n    id: int\n    grade: int\n\n    # Define constraints for the `Student` model.\n    check:\n        id >= 0\n        0 <= grade <= 100\n\n# Student data.\nstudents: [Student] = [\n    {name = "Alice", id = 1, grade = 85}\n    {name = "Bob", id = 2, grade = 70}\n    {name = "Charlie", id = 3, grade = 90}\n    {name = "David", id = 4, grade = 80}\n    {name = "Eve", id = 5, grade = 95}\n]\n\n# Student logic.\nquery_student_where_name = lambda students: [Student], name: str {\n    # Query the first student where name is `name`\n    filter s in students {\n        s.name == name\n    }?[0]\n}\n\nalice = query_student_where_name(students, name="Alice")\nbob = query_student_where_name(students, name="Bob")\n')),(0,i.kt)("p",null,"The output is"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"students:\n  - name: Alice\n    id: 1\n    grade: 85\n  - name: Bob\n    id: 2\n    grade: 70\n  - name: Charlie\n    id: 3\n    grade: 90\n  - name: David\n    id: 4\n    grade: 80\n  - name: Eve\n    id: 5\n    grade: 95\nalice:\n  name: Alice\n  id: 1\n  grade: 85\nbob:\n  name: Bob\n  id: 2\n  grade: 70\n")),(0,i.kt)("h3",{id:"add-comments-for-models"},"Add Comments for Models"),(0,i.kt)("p",null,"To facilitate user understanding and automatic model documentation generation, it is necessary to write comments for the defined model. The comment content usually includes an explanation of the model, an explanation of model fields, types, default values, usage examples, and more. For detailed KCL schema code commenting guidelines and automatic model documentation generation, please refer to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/tools/cli/kcl/docgen"},"KCL Documentation Specification"),". Additionally, we can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"kcl-doc generate")," command to extract documentation from the user-specified file or directory and output it to the specified directory."),(0,i.kt)("h2",{id:"backend-model"},"Backend Model"),(0,i.kt)("p",null,'The backend model is an "implementation model," which mainly includes the logical code to map the frontend model to the backend model. After the frontend model is written, we can use the frontend model schema to create frontend model instances, and write the corresponding backend mapping/rendering code to convert these frontend instances into the backend model. By using KCL\'s multi-file compilation and ',(0,i.kt)("inlineCode",{parentName:"p"},"Schema.instances()")," function, the frontend and backend code can be highly decoupled, so that users only need to focus on frontend configuration without being aware of the complex validation and logical code of the model."))}p.isMDXComponent=!0},87839:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/workflow-fa76d42e94daccfa2b4755f9387abc73.png"}}]);