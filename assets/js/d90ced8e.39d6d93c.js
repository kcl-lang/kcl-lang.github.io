"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[63619],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72783:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const r={sidebar_position:5},i="Docgen",l={unversionedId:"tools/cli/kcl/docgen",id:"version-0.4.5/tools/cli/kcl/docgen",title:"Docgen",description:"The KCL Docgen tool supports extracting model documents from KCL source code and supports multiple output formats: JSON, YAML and Markdown. This article introduces the document specification of the KCL language, gives an example of how to use the KCL Docgen tool to extract documents, and shows the process of importing localization documents.",source:"@site/versioned_docs/version-0.4.5/tools/cli/kcl/docgen.md",sourceDirName:"tools/cli/kcl",slug:"/tools/cli/kcl/docgen",permalink:"/docs/0.4.5/tools/cli/kcl/docgen",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.4.5/tools/cli/kcl/docgen.md",tags:[],version:"0.4.5",lastUpdatedBy:"Peefy",lastUpdatedAt:1703569910,formattedLastUpdatedAt:"Dec 26, 2023",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tools",previous:{title:"Validation",permalink:"/docs/0.4.5/tools/cli/kcl/vet"},next:{title:"Test Tool",permalink:"/docs/0.4.5/tools/cli/kcl/test"}},s={},c=[{value:"1. Document Specification of KCL",id:"1-document-specification-of-kcl",level:2},{value:"2. Generating Documentation From KCL",id:"2-generating-documentation-from-kcl",level:2},{value:"3. Add Documentation for Localized Languages",id:"3-add-documentation-for-localized-languages",level:2},{value:"4. Appendix",id:"4-appendix",level:2},{value:"1. Concept of reST",id:"1-concept-of-rest",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"docgen"},"Docgen"),(0,a.kt)("p",null,"The KCL Docgen tool supports extracting model documents from KCL source code and supports multiple output formats: JSON, YAML and Markdown. This article introduces the document specification of the KCL language, gives an example of how to use the KCL Docgen tool to extract documents, and shows the process of importing localization documents."),(0,a.kt)("h2",{id:"1-document-specification-of-kcl"},"1. Document Specification of KCL"),(0,a.kt)("p",null,"The documentation of the KCL file mainly contains the following two parts:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Current KCL Module document: description of the current KCL file"),(0,a.kt)("li",{parentName:"ul"},"All schema documents contained in the KCL file: a description of the current schema, including schema description, schema attribute descriptions, and Examples. The specific format is as follows:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Schema description")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'"""This is a brief description of the Schema\n"""\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Description of each attribute of Schema: including attribute description, attribute type, default value, optional or required")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'"""\nAttributes\n----------\nx : type, default is a, optional.\n    Description of parameter `x`.\ny : type, default is b, required.\n    Description of parameter `y`.\n"""\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"----------")," indicates that ",(0,a.kt)("inlineCode",{parentName:"p"},"Attributes")," is a title (the length of the symbol ",(0,a.kt)("inlineCode",{parentName:"p"},"-")," is the same as the length of the title), the attribute name and attribute type are separated by a colon ",(0,a.kt)("inlineCode",{parentName:"p"},":"),", the description of the attribute is written on another line with indentation. The default value of the attribute is separated by a comma ",(0,a.kt)("inlineCode",{parentName:"p"},",")," after the attribute type, and it is written in the form of ",(0,a.kt)("inlineCode",{parentName:"p"},"default is {default value}"),". In addition, it is necessary to indicate whether the attribute is optional/required. Write ",(0,a.kt)("inlineCode",{parentName:"p"},"optional")," after the default value for an optional attribute, and write ",(0,a.kt)("inlineCode",{parentName:"p"},"required")," after the default value for a required attribute."),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'"""\nExamples\n--------\nval = Schema {\n    name = "Alice"\n    age = 18\n}\n"""\n')),(0,a.kt)("p",null,"In addition, the KCL docstring syntax should use a subset of the ",(0,a.kt)("a",{parentName:"p",href:"https://docutils.sourceforge.io/rst.html"},"re-structured text (reST)")," and be rendered using the ",(0,a.kt)("a",{parentName:"p",href:"https://www.sphinx-doc.org/en/master/"},"Sphinx"),"."),(0,a.kt)("h2",{id:"2-generating-documentation-from-kcl"},"2. Generating Documentation From KCL"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl-doc generate")," command to extract documentation from a user-specified file or directory and output it to the specified directory."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Args")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"usage: kcl-doc generate [-h] [--format YAML] [-o OUTPUT] [--r]\n                        [--i18n-locale LOCALE] [--repo-url REPO_URL]\n                        [files [files ...]]\n\npositional arguments:\n  files                 KCL file paths. If there's more than one files to\n                        generate, separate them by space\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --format YAML         Doc file format, support YAML, JSON and MARKDOWN.\n                        Defaults to MARKDOWN\n  -o OUTPUT, --output-path OUTPUT\n                        Specify the output directory. Defaults to ./kcl_doc\n  --r, -R, --recursive  Search directory recursively\n  --i18n-locale LOCALE  I18n locale, e.g.: zh, zh_cn, en, en_AS. Defaults to\n                        en\n  --repo-url REPO_URL   The source code repository url. It will be displayed in\n                        the generated doc to link to the source code.\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Extract documents from the file(s) and output them to the specified directory")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"kcl-doc generate your_config.k your_another_config.k -o your_docs_output_dir\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"From the specified directory, recursively find the KCL file(s) and extract the documentation")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"kcl-doc generate your_config_dir -r -o your_docs_output_dir\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"When generating documentation, specify the source code repository address. The generated documentation will contain links to source files")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"kcl-doc generate your_config.k -o your_docs_output_dir --repo-url https://url/to/source_code\n")),(0,a.kt)("h2",{id:"3-add-documentation-for-localized-languages"},"3. Add Documentation for Localized Languages"),(0,a.kt)("p",null,"As shown before, by default, the documentation extracted by the documentation generation tool is based on the content of the source docstring, and thus the language of the documentation depends on the language in which the docstring was written. If you need to add localized language documentation to the source file, you can follow the steps below:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Initialize the i18n configuration file. This step generates the corresponding i18n configuration file based on the specified KCL file. The file format can be JSON/YAML, and the default is YAML. The output profile name will end in the specified target localization language")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"kcl-doc init-i18n your_config.k --format JSON --i18n-locale your_target_locale\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Modify the i18n configuration file and update each doc field in your locale language")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Generate localized documents from the modified i18n configuration file"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"kcl-doc generate your_config_dir --i18n-locale your_target_locale --format Markdown\n")),(0,a.kt)("p",null,"Next, a simple example is used to demonstrate the process of adding localized language documents."),(0,a.kt)("p",null,"3.1 Prepare the KCL file, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"server.k"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```python\nschema Server:\n    """Server is the common user interface for long-running\n    services adopting the best practice of Kubernetes.\n\n    Attributes\n    ----------\n    workloadType : str, default is "Deployment", required\n        Use this attribute to specify which kind of long-running service you want.\n        Valid values: Deployment, CafeDeployment.\n        See also: k8s/core/v1/workload_metadata.k.\n    name : str, required\n        A Server-level attribute.\n        The name of the long-running service.\n        See also: k8s/core/v1/metadata.k.\n    labels : {str:str}, optional\n        A Server-level attribute.\n        The labels of the long-running service.\n        See also: k8s/core/v1/metadata.k.\n\n    Examples\n    ----------------------\n    myCustomApp = AppConfiguration {\n        name = "componentName"\n    }\n    """\n\n    workloadType: str = "Deployment"\n    name: str\n    labels?: {str: str}\n```\n')),(0,a.kt)("p",null,"3.2 Get the initialized i18n configuration file from the ",(0,a.kt)("inlineCode",{parentName:"p"},"server.k"),". For example, if you want to add Chinese documents to it, specify the format of the generated configuration file as YAML"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"```text\nkcl-doc init-i18n server.k --format YAML --i18n-locale zh_cn\n```\n\nThis command will create the directory `kcl_doc` under the current directory and generate the i18n configuration file `kcl_doc/i18n_server_zh_cn.yaml`. Its contents are as follows:\n\n```yaml\nname: server\nrelative_path: ./server.k\nschemas:\n- name: Server\n  doc: |\n    Server is the common user interface for long-running\n    services adopting the best practice of Kubernetes.\n  attributes:\n  - name: workloadType\n    doc: |\n      Use this attribute to specify which kind of long-running service you want.\n      Valid values: Deployment, CafeDeployment.\n      See also: k8s/core/v1/workload_metadata.k.\n    type:\n      type_str: str\n      type_category: BUILTIN\n      builtin_type: STRING\n    default_value: '\"Deployment\"'\n    is_optional: false\n  - name: name\n    doc: |\n      A Server-level attribute.\n      The name of the long-running service.\n      See also: k8s/core/v1/metadata.k.\n    type:\n      type_str: str\n      type_category: BUILTIN\n      builtin_type: STRING\n    is_optional: false\n    default_value: ''\n  - name: labels\n    doc: |\n      A Server-level attribute.\n      The labels of the long-running service.\n      See also: k8s/core/v1/metadata.k.\n    type:\n      type_str: '{str: str}'\n      type_category: DICT\n      dict_type:\n        key_type:\n          type_str: str\n          type_category: BUILTIN\n          builtin_type: STRING\n        value_type:\n          type_str: str\n          type_category: BUILTIN\n          builtin_type: STRING\n    is_optional: true\n    default_value: ''\n  examples: |\n    myCustomApp = AppConfiguration {\n        name = \"componentName\"\n    }\ndoc: ''\nsource_code_url: ''\n```\n")),(0,a.kt)("p",null,"3.3 Modify all the ",(0,a.kt)("inlineCode",{parentName:"p"},"doc")," fields to the Chinese description. The modified configuration is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"```yaml\nname: server\nrelative_path: ./server.k\nschemas:\n- name: Server\n  doc: |\n    Server \u6a21\u578b\u5b9a\u4e49\u4e86\u91c7\u7528 Kubernetes \u6700\u4f73\u5b9e\u8df5\u7684\u6301\u7eed\u8fd0\u884c\u7684\u670d\u52a1\u7684\u901a\u7528\u914d\u7f6e\u63a5\u53e3\n  attributes:\n  - name: workloadType\n    doc: |\n      workloadType \u5c5e\u6027\u5b9a\u4e49\u4e86\u670d\u52a1\u7684\u7c7b\u578b\uff0c\u662f\u670d\u52a1\u7ea7\u522b\u7684\u5c5e\u6027\u3002\u5408\u6cd5\u7684\u53d6\u503c\u6709\uff1aDeployment, CafeDeployment.\n      \u53e6\u8bf7\u67e5\u770b\uff1ak8s/core/v1/workload_metadata.k.\n    type:\n      type_str: str\n      type_category: BUILTIN\n      builtin_type: STRING\n    default_value: '\"Deployment\"'\n    is_optional: false\n  - name: name\n    doc: |\n      name \u4e3a\u670d\u52a1\u7684\u540d\u79f0\uff0c\u662f\u670d\u52a1\u7ea7\u522b\u7684\u5c5e\u6027\u3002\n      \u53e6\u8bf7\u67e5\u770b\uff1ak8s/core/v1/metadata.k.\n    type:\n      type_str: str\n      type_category: BUILTIN\n      builtin_type: STRING\n    is_optional: false\n    default_value: ''\n  - name: labels\n    doc: |\n      labels \u4e3a\u670d\u52a1\u7684\u6807\u7b7e\uff0c\u662f\u670d\u52a1\u7ea7\u522b\u7684\u5c5e\u6027\u3002\n      \u53e6\u8bf7\u67e5\u770b\uff1ak8s/core/v1/metadata.k.\n    type:\n      type_str: '{str: str}'\n      type_category: DICT\n      dict_type:\n        key_type:\n          type_str: str\n          type_category: BUILTIN\n          builtin_type: STRING\n        value_type:\n          type_str: str\n          type_category: BUILTIN\n          builtin_type: STRING\n    is_optional: true\n    default_value: ''\n  examples: |\n    myCustomApp = AppConfiguration {\n        name = \"componentName\"\n    }\ndoc: ''\nsource_code_url: ''\n```\n")),(0,a.kt)("p",null,"3.4 Based on the modified i18n configuration, generate documents in localized languages. Execute the following command to output the Chinese document ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl_doc/doc_server_zh_cn.md"),". The commands and the contents of the generated documents are as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"kcl-doc generate server.k --i18n-locale zh_cn --format Markdown\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},'# server\n\n## Schema Server\n\nServer \u6a21\u578b\u5b9a\u4e49\u4e86\u91c7\u7528 Kubernetes \u6700\u4f73\u5b9e\u8df5\u7684\u6301\u7eed\u8fd0\u884c\u7684\u670d\u52a1\u7684\u901a\u7528\u914d\u7f6e\u63a5\u53e3\n\n### Attributes\n\n| Name and Description                                                                                                                                                 | Type       | Default Value | Required     |\n| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ------------- | ------------ |\n| **workloadType**<br />workloadType \u5c5e\u6027\u5b9a\u4e49\u4e86\u670d\u52a1\u7684\u7c7b\u578b\uff0c\u662f\u670d\u52a1\u7ea7\u522b\u7684\u5c5e\u6027\u3002\u5408\u6cd5\u7684\u53d6\u503c\u6709\uff1aDeployment, CafeDeployment.<br />\u53e6\u8bf7\u67e5\u770b\uff1ak8s/core/v1/workload_metadata.k. | str        | "Deployment"  | **required** |\n| **name**<br />name \u4e3a\u670d\u52a1\u7684\u540d\u79f0\uff0c\u662f\u670d\u52a1\u7ea7\u522b\u7684\u5c5e\u6027\u3002<br />\u53e6\u8bf7\u67e5\u770b\uff1ak8s/core/v1/metadata.k.                                                                           | str        | Undefined     | **required** |\n| **labels**<br />labels \u4e3a\u670d\u52a1\u7684\u6807\u7b7e\uff0c\u662f\u670d\u52a1\u7ea7\u522b\u7684\u5c5e\u6027\u3002<br />\u53e6\u8bf7\u67e5\u770b\uff1ak8s/core/v1/metadata.k.                                                                       | {str: str} | Undefined     | optional     |\n\n### Examples\n\n```\nmyCustomApp = AppConfiguration {\n    name = "componentName"\n}\n```\n\n\x3c!-- Auto generated by kcl-doc tool, please do not edit. --\x3e\n')),(0,a.kt)("h2",{id:"4-appendix"},"4. Appendix"),(0,a.kt)("h3",{id:"1-concept-of-rest"},"1. Concept of reST"),(0,a.kt)("p",null,"For documents in reST format, paragraphs and indentation are important, new paragraphs are marked with blank lines, and indentation is the indentation indicated in the output. Font styles can be expressed as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"*","Italic","*"),(0,a.kt)("li",{parentName:"ul"},"*","*","Bold","*","*"),(0,a.kt)("li",{parentName:"ul"},"`","`","Monospaced","`","`")),(0,a.kt)("p",null,"Refer to ",(0,a.kt)("a",{parentName:"p",href:"https://docutils.sourceforge.io/rst.html"},"reST")," for more information."))}u.isMDXComponent=!0}}]);