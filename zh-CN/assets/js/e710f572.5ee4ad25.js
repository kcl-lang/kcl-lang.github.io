"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[41458],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),m=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=m(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=m(t),u=l,k=p["".concat(s,".").concat(u)]||p[u]||c[u]||o;return t?a.createElement(k,r(r({ref:n},d),{},{components:t})):a.createElement(k,r({ref:n},d))}));function k(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,r=new Array(o);r[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:l,r[1]=i;for(var m=2;m<o;m++)r[m]=t[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},62471:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var a=t(87462),l=(t(67294),t(3905));const o={title:"Code Style",linkTitle:"Code Style",type:"docs",weight:2,description:"Code Style"},r=void 0,i={unversionedId:"reference/lang/spec/codestyle",id:"version-0.5.3/reference/lang/spec/codestyle",title:"Code Style",description:"Code Style",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.5.3/reference/lang/spec/codestyle.md",sourceDirName:"reference/lang/spec",slug:"/reference/lang/spec/codestyle",permalink:"/zh-CN/docs/0.5.3/reference/lang/spec/codestyle",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.3/reference/lang/spec/codestyle.md",tags:[],version:"0.5.3",lastUpdatedBy:"Peefy",lastUpdatedAt:1706869561,formattedLastUpdatedAt:"2024\u5e742\u67082\u65e5",frontMatter:{title:"Code Style",linkTitle:"Code Style",type:"docs",weight:2,description:"Code Style"},sidebar:"reference",previous:{title:"KCL \u8bed\u8a00\u89c4\u8303",permalink:"/zh-CN/docs/0.5.3/reference/lang/spec/"},next:{title:"Data Types",permalink:"/zh-CN/docs/0.5.3/reference/lang/spec/datatypes"}},s={},m=[{value:"Introduction",id:"introduction",level:2},{value:"Source File Encoding",id:"source-file-encoding",level:2},{value:"Code Layout",id:"code-layout",level:2},{value:"Indentation",id:"indentation",level:3},{value:"Tabs or Spaces",id:"tabs-or-spaces",level:3},{value:"Blank Lines",id:"blank-lines",level:3},{value:"Inline Expressions",id:"inline-expressions",level:3},{value:"Line Break and Continuation lines",id:"line-break-and-continuation-lines",level:3},{value:"When to Use Trailing Commas",id:"when-to-use-trailing-commas",level:3},{value:"Maximum Line Length",id:"maximum-line-length",level:3},{value:"Symbol Break White Space",id:"symbol-break-white-space",level:3},{value:"Whitespace in Expressions and Statements",id:"whitespace-in-expressions-and-statements",level:3},{value:"Naming Conventions",id:"naming-conventions",level:2},{value:"Naming Styles",id:"naming-styles",level:3},{value:"Names to Avoid",id:"names-to-avoid",level:3},{value:"Package and Module Names",id:"package-and-module-names",level:3},{value:"Schema Names",id:"schema-names",level:3},{value:"Constants",id:"constants",level:3},{value:"Import",id:"import",level:2},{value:"Comments",id:"comments",level:2},{value:"Block Comments",id:"block-comments",level:3},{value:"Inline Comments",id:"inline-comments",level:3},{value:"Documentation Strings",id:"documentation-strings",level:3},{value:"String",id:"string",level:2},{value:"Number",id:"number",level:2},{value:"Operators",id:"operators",level:2},{value:"Binary Operators",id:"binary-operators",level:3},{value:"Unary Operators",id:"unary-operators",level:3},{value:"Dict",id:"dict",level:2},{value:"List",id:"list",level:2},{value:"Slice",id:"slice",level:2},{value:"Schema",id:"schema",level:2},{value:"Attribute Annotations",id:"attribute-annotations",level:3},{value:"Arguments",id:"arguments",level:3},{value:"Keywords",id:"keywords",level:2},{value:"Function",id:"function",level:2}],d={toc:m},p="wrapper";function c(e){let{components:n,...t}=e;return(0,l.kt)(p,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"This document gives the KCL code style conventions. Good code style can play a vital role in the development and maintenance of the project. We can learn the KCL code style by referring to the full text of the description and sample codes, and use KCL format and lint tools to help coding."),(0,l.kt)("h2",{id:"source-file-encoding"},"Source File Encoding"),(0,l.kt)("p",null,"KCL file encoding should always use ",(0,l.kt)("strong",{parentName:"p"},"UTF-8"),"."),(0,l.kt)("h2",{id:"code-layout"},"Code Layout"),(0,l.kt)("h3",{id:"indentation"},"Indentation"),(0,l.kt)("p",null,"Use ",(0,l.kt)("strong",{parentName:"p"},"4 spaces")," per indentation level such as in the schema statement and if statement."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"schema PersonA:\n  name: str  # non-recommended\n  age: int\n\nschema PersonB:\n    name: str  # recommended\n    age: int\n\nif True:\n    a = 1  # recommended\nelif True:\n  b = 2  # non-recommended\nelse:\n      c = 3  # non-recommended\n")),(0,l.kt)("p",null,"The closing brace/bracket/parenthesis on multiline constructs should line up under ",(0,l.kt)("strong",{parentName:"p"},"first character")," of the line that starts the multiline construct, as in:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# valid and recommended\nmy_list = [\n    1, 2, 3,\n    4, 5, 6,\n]\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# invalid\nmy_list = [\n    1, 2, 3,\n    4, 5, 6,\n    ]\n")),(0,l.kt)("h3",{id:"tabs-or-spaces"},"Tabs or Spaces"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Spaces are the preferred indentation method."),(0,l.kt)("li",{parentName:"ul"},"Tabs should be used solely to remain consistent with code that is already indented with tabs.")),(0,l.kt)("p",null,"KCL disallows mixing the use of tabs and spaces for indentation and an error will be reported during the compile time."),(0,l.kt)("h3",{id:"blank-lines"},"Blank Lines"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Surround top-level schema definitions with one blank line."),(0,l.kt)("li",{parentName:"ul"},"Keep at most one blank line between two statements and remove redundant blank lines."),(0,l.kt)("li",{parentName:"ul"},"Remove extra blank characters at the end of the line"),(0,l.kt)("li",{parentName:"ul"},"Remove extra blank characters in a blank line."),(0,l.kt)("li",{parentName:"ul"},"There is no blank line in the header of the file, start writing from the first line."),(0,l.kt)("li",{parentName:"ul"},"Only one blank line will be left at the end of the KCL file.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# Remove blank lines in the file header\na = 1  # Remove white space at the end of the line\n# Keep at most one blank line between two statements\n\nb = 2\n# Only leave one blank line at the end of the file\n\n")),(0,l.kt)("h3",{id:"inline-expressions"},"Inline Expressions"),(0,l.kt)("p",null,"Write indentation of KCL ",(0,l.kt)("inlineCode",{parentName:"p"},"if"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"elif"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"else")," and other conditions on different lines."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'if True: print("")  # non-recommended\n\nif True:  # recommended\n    print("")\n')),(0,l.kt)("h3",{id:"line-break-and-continuation-lines"},"Line Break and Continuation lines"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"For long expressions, use the line continuation symbol ",(0,l.kt)("inlineCode",{parentName:"li"},"\\")," and keep the left end of multiple expressions aligned."),(0,l.kt)("li",{parentName:"ul"},"The 4-space rule is optional for continuation lines.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'anotherString = "Too long expression " + \\\n            "Too long expression "  # non-recommended\n\nlongString = "Too long expression " + \\\n             "Too long expression " + \\\n             "Too long expression "  # recommended\n')),(0,l.kt)("h3",{id:"when-to-use-trailing-commas"},"When to Use Trailing Commas"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Always use trailing commas.")),(0,l.kt)("h3",{id:"maximum-line-length"},"Maximum Line Length"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The general recommendation is ",(0,l.kt)("strong",{parentName:"li"},"80 characters")," but not absolute.")),(0,l.kt)("h3",{id:"symbol-break-white-space"},"Symbol Break White Space"),(0,l.kt)("p",null,"Try to keep the spaces between different symbols, but not too many, usually one is good."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"a = 1  # recommended\nb    =    1    +   2  # non-recommended\n")),(0,l.kt)("h3",{id:"whitespace-in-expressions-and-statements"},"Whitespace in Expressions and Statements"),(0,l.kt)("p",null,"Avoid extraneous whitespace in the following situations:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The parentheses ",(0,l.kt)("inlineCode",{parentName:"li"},"()"),", brackets ",(0,l.kt)("inlineCode",{parentName:"li"},"[]")," and braces ",(0,l.kt)("inlineCode",{parentName:"li"},"{}")," in the expression have no spaces inside.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'a = (1 + 2)  # recommended\nb = ( 1 + 2 )  # non-recommended\n\nc = [1, 2, 3]  # recommended\nd = [ 1, 2, 3 ]  # non-recommended\n\ne = {key = "value"}  # recommended\nf = { key = "value" }  # non-recommended\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"spam(ham[1], {eggs = 2})  # recommended\nspam( ham[ 1 ], { eggs = 2 } )  # non-recommended\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Between a trailing comma and a following close parenthesis.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"foo = [0,]  # recommended\nbar = [0, ]  # non-recommended\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Immediately before the open parenthesis that starts the argument list of a function call.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"print(1)  # recommended\nprint (1)  # non-recommended\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Immediately before the open parenthesis that starts indexing or slicing.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"dct = {key = \"value\"}\nlst = [1, 2, 3]\n\na = dct['key']  # recommended\nb = dct ['key']  # non-recommended\n\nc = lst[0]  # recommended\nd = lst [1]  # non-recommended\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"More than one space around an assignment ",(0,l.kt)("inlineCode",{parentName:"li"},"=")," (or other) operator to align it with another.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# recommended:\nx = 1\ny = 2\nlong_variable = 3\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# non-recommended:\nx             = 1\ny             = 2\nlong_variable = 3\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Always surround these binary operators with a single space on either side: assignment (",(0,l.kt)("inlineCode",{parentName:"li"},"="),"), augmented assignment (",(0,l.kt)("inlineCode",{parentName:"li"},"+="),", ",(0,l.kt)("inlineCode",{parentName:"li"},"-="),", etc.), comparisons (",(0,l.kt)("inlineCode",{parentName:"li"},"=="),", ",(0,l.kt)("inlineCode",{parentName:"li"},"<"),", ",(0,l.kt)("inlineCode",{parentName:"li"},">"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"!="),", ",(0,l.kt)("inlineCode",{parentName:"li"},"<="),", ",(0,l.kt)("inlineCode",{parentName:"li"},">="),", ",(0,l.kt)("inlineCode",{parentName:"li"},"in"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"not in"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"is"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"is not"),"), booleans (",(0,l.kt)("inlineCode",{parentName:"li"},"and"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"or"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"not"),").")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# recommended:\ni = i + 1\nsubmitted += 1\nx = x * 2 - 1\nhypot2 = x * x + y * y\nc = (a + b) * (a - b)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# non-recommended:\ni = i+1\nsubmitted+=1\nx = x*2 - 1\nhypot2 = x*x + y*y\nc = (a+b) * (a-b)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Break one blank line between different statements e.g., import, schema and expression statements.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import math\nimport net\n\nschema Person:\n    name: str\n\nperson = Person {\n    name = "Alice"\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Compound statements (multiple statements on the same line) are generally discouraged")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# recommended:\nif foo == 'blah':\n    do_blah_thing()\ndo_one()\ndo_two()\ndo_three()\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# non-recommended:\nif foo == 'blah': do_blah_thing()\ndo_one(); do_two(); do_three()\n")),(0,l.kt)("h2",{id:"naming-conventions"},"Naming Conventions"),(0,l.kt)("h3",{id:"naming-styles"},"Naming Styles"),(0,l.kt)("p",null,"The following naming styles are commonly distinguished:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"b")," (single lowercase letter)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"B")," (single uppercase letter)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"lowercase")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"lower_case_with_underscores")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"UPPERCASE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"UPPER_CASE_WITH_UNDERSCORES")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CapitalizedWords")," (capitalize all letters of the acronym in ",(0,l.kt)("inlineCode",{parentName:"li"},"CapitalizedWords")," e.g., ",(0,l.kt)("inlineCode",{parentName:"li"},"HTTPServer"),".)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"mixedCase")," (differs from ",(0,l.kt)("inlineCode",{parentName:"li"},"CapitalizedWords")," by initial lowercase character)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Capitalized_Words_With_Underscores")," (ugly and non-recommended)")),(0,l.kt)("h3",{id:"names-to-avoid"},"Names to Avoid"),(0,l.kt)("p",null,"Never use the characters 'l' (lowercase letter el), 'O' (uppercase letter oh), or 'I' (uppercase letter eye) as single-character variable names."),(0,l.kt)("h3",{id:"package-and-module-names"},"Package and Module Names"),(0,l.kt)("p",null,"Package and module names should have short, all-lowercase names."),(0,l.kt)("h3",{id:"schema-names"},"Schema Names"),(0,l.kt)("p",null,"Schema names should normally use the ",(0,l.kt)("inlineCode",{parentName:"p"},"CapWords")," convention."),(0,l.kt)("h3",{id:"constants"},"Constants"),(0,l.kt)("p",null,"Constants are usually defined on a module level and written in all capital letters with underscores separating words such as ",(0,l.kt)("inlineCode",{parentName:"p"},"MAX_OVERFLOW")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"TOTAL"),"."),(0,l.kt)("h2",{id:"import"},"Import"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Imports should usually be on separate lines."),(0,l.kt)("li",{parentName:"ul"},"Imports are always put at the top of the file, just after any module comments and docstrings, and before module globals and constants."),(0,l.kt)("li",{parentName:"ul"},"Imports should be grouped in the following order and we should put a blank line between each group of imports.",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"Standard library imports."),(0,l.kt)("li",{parentName:"ol"},"Related third party plugin imports."),(0,l.kt)("li",{parentName:"ol"},"Local application/library specific imports."))),(0,l.kt)("li",{parentName:"ul"},"Use an alias when we import a package name with a relatively long path."),(0,l.kt)("li",{parentName:"ul"},"Leave only one space between the Import keyword and the package name.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"import net  # recommended\nimport    math  # non-recommended\n\nimport ..pkg.internal_pkg as alias_pkg  # recommended\n")),(0,l.kt)("h2",{id:"comments"},"Comments"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Comments should be complete sentences. The first word should be capitalized unless it is an identifier that begins with a lower-case letter (never alter the case of identifiers!)."),(0,l.kt)("li",{parentName:"ul"},"Block comments generally consist of one or more paragraphs built out of complete sentences, with each sentence ending in a period."),(0,l.kt)("li",{parentName:"ul"},"Use two spaces after a sentence-ending period in multi-sentence comments, except after the final sentence.")),(0,l.kt)("h3",{id:"block-comments"},"Block Comments"),(0,l.kt)("p",null,"Block comments generally apply to some (or all) code that follows them, and are indented to the same level as that code. Each line of a block comment starts with a ",(0,l.kt)("inlineCode",{parentName:"p"},"#")," and ",(0,l.kt)("strong",{parentName:"p"},"a single space"),"(unless it is indented text inside the comment)."),(0,l.kt)("p",null,"Paragraphs inside a block comment are separated by a line containing a single ",(0,l.kt)("inlineCode",{parentName:"p"},"#"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# This is a block comment\na = 1\n")),(0,l.kt)("h3",{id:"inline-comments"},"Inline Comments"),(0,l.kt)("p",null,"Use inline comments sparingly."),(0,l.kt)("p",null,"An inline comment is a comment on the same line as a statement. Inline comments should be separated by ",(0,l.kt)("strong",{parentName:"p"},"at least two spaces")," from the statement. They should start with a ",(0,l.kt)("inlineCode",{parentName:"p"},"#")," and ",(0,l.kt)("strong",{parentName:"p"},"a single space"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"a = 1  # This is an inline comment\n")),(0,l.kt)("h3",{id:"documentation-strings"},"Documentation Strings"),(0,l.kt)("p",null,"Write doc strings for all public schema and schema attributes."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'schema Person:\n    """\n    Person schema doc string\n    """\n\n    name: str = "Alice"\n')),(0,l.kt)("h2",{id:"string"},"String"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Single-quoted strings and double-quoted strings are the same in KCL."),(0,l.kt)("li",{parentName:"ul"},"Use double-quoted string with lowercase prefix"),(0,l.kt)("li",{parentName:"ul"},"For triple-quoted strings, always use double quote characters to be consistent with the docstring convention."),(0,l.kt)("li",{parentName:"ul"},"When a string contains single or double quote characters, use the other one to avoid backslashes in the string.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'strC = "\'123\'"  # recommended\nstrD = "\\"123\\""  # non-recommended\n')),(0,l.kt)("h2",{id:"number"},"Number"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Use lowercase for the prefix of non-decimal numbers, and use uppercase for the number itself.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"foo = 0xAB  # recommended\nbar = 0Xab  # non-recommended\n")),(0,l.kt)("h2",{id:"operators"},"Operators"),(0,l.kt)("h3",{id:"binary-operators"},"Binary Operators"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Leave only one space before and after the assignment ",(0,l.kt)("inlineCode",{parentName:"li"},"="),"."),(0,l.kt)("li",{parentName:"ul"},"Leave only one space before and after the binary operator in the expression.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"a = 1  # recommended\nb=2  # non-recommended\nc= 3  # non-recommended\nd =4  # non-recommended\n\n_value = (1 + 2 * 3)  # recommended\n_value = (1+2*3)  # non-recommended\n")),(0,l.kt)("h3",{id:"unary-operators"},"Unary Operators"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"There is only no space after unary operators e.g., ",(0,l.kt)("inlineCode",{parentName:"li"},"~"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"+")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"-"),".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"_value = 1 + -2 * ~3  # recommended\n_value = 1+ - 2 * ~ 3  # non-recommended\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"There is no space after ",(0,l.kt)("inlineCode",{parentName:"li"},"**")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"*")," in the dict/list deduction expressions and argument expressions.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'_list = [1, 2, 3]\n_list = [*_list, [4, 5 ,6]]  # recommended\n_list = [* _list, [4, 5 ,6]]  # non-recommended\n\n_dict = {**{k = "v"}, **{k = "v"}}  # recommended\n_dict = {** {k = "v"}, ** {k = "v"}}  # non-recommended\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Use ",(0,l.kt)("inlineCode",{parentName:"li"},"is not")," operator rather than ",(0,l.kt)("inlineCode",{parentName:"li"},"not ... is"),".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# recommended:\nif foo is not None:\n    a = 1\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# non-recommended:\nif not foo is None:\n    a = 1\n")),(0,l.kt)("h2",{id:"dict"},"Dict"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"There is no space before the colon ",(0,l.kt)("inlineCode",{parentName:"li"},":")," at the instantiation of KCL dict and schema config, and a space after the colon ",(0,l.kt)("inlineCode",{parentName:"li"},":"),".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'d1 = {labels: {k1 = "v1"}}  # recommended\nd2 = {labels : {k1 = "v1"}}  # non-recommended\nd3 = {labels :{k1 = "v1"}}  # non-recommended\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Always surround the override attribute operator ",(0,l.kt)("inlineCode",{parentName:"li"},"=")," and the insert attribute operator ",(0,l.kt)("inlineCode",{parentName:"li"},"+=")," with a single space on either sid.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'d1 = {key = "value"}  # recommended\nd2 = {key= "value"}  # non-recommended\nd3 = {key ="value"}  # non-recommended\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"d1 = {key += [0, 1, 2]}  # recommended\nd2 = {key+= [0, 1, 2]}  # non-recommended\nd3 = {key +=[0, 1, 2]}  # non-recommended\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Remove all commas at the end of the line in the KCL multiline dict because the end commas of each line are optional.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'d = {\n    key1 = "value1"\n    key2 = "value2"\n    key3 = "value3"\n    key4 = "value4"\n}\n')),(0,l.kt)("h2",{id:"list"},"List"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Keep only ",(0,l.kt)("strong",{parentName:"li"},"one space")," after the comma ",(0,l.kt)("inlineCode",{parentName:"li"},",")," separating elements in the list")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"a = [1, 2, 3]  # recommended\nb = [1,2,3]  # non-recommended\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Keep only ",(0,l.kt)("strong",{parentName:"li"},"one space")," before and after the comprehension expression token ",(0,l.kt)("inlineCode",{parentName:"li"},"for")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"in")," in the dict and list.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"a = [i for i in range(10)]  # recommended\nb = [i  for  i  in  range(10)]   # non-recommended\n")),(0,l.kt)("h2",{id:"slice"},"Slice"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Keep the same number of spaces before and after the colon ",(0,l.kt)("inlineCode",{parentName:"li"},":")," of the list slice.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"l = [1, 2, 3]\na = l[0:2]  # recommended\nb = l[0 : 2]  # non-recommended\nc = l[0: 2]  # non-recommended\n\nd = l[0 + 0 : 1 + 1]  # recommended\ne = l[0 + 0:1 + 1]  # non-recommended\n")),(0,l.kt)("h2",{id:"schema"},"Schema"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Leave only one space before and after the schema attribute assignment ",(0,l.kt)("inlineCode",{parentName:"li"},"="),"."),(0,l.kt)("li",{parentName:"ul"},"Always add a doc string to a schema, which is a good programming habit.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'schema Person:\n    """\n    Schema doc string\n    """\n    name: str = "Alice"  # recommended\n    age : int=12  # non-recommended\n\nperson = Person {}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Keep ",(0,l.kt)("strong",{parentName:"li"},"no spaces")," around the schema inheritance operator ",(0,l.kt)("inlineCode",{parentName:"li"},"()"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"schema Base:\n    name: str\n\nschema Person(Base):  # recommended\n    age: int\n\nschema Schema ( Base ):  # non-recommended\n    age: int\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Keep ",(0,l.kt)("strong",{parentName:"li"},"only one space")," between the brackets and the schema name of the config at schema instantiation.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"schema Base:\n    name: str\n\nschema Person(Base):\n    age: int\n\npersonA = Person{}  # non-recommended\npersonB = Person {}  # recommended\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Keep ",(0,l.kt)("strong",{parentName:"li"},"only one space")," between the ",(0,l.kt)("strong",{parentName:"li"},"mixin")," keyword and the following ",(0,l.kt)("inlineCode",{parentName:"li"},"[]")," operator")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'schema NameMixin:\n    name: str = "name"\n\nschema Person:\n    mixin   [NameMixin]  # non-recommended\n    age: int\n\nschema Parent:\n    mixin [NameMixin]  # recommended\n    age: int\n')),(0,l.kt)("h3",{id:"attribute-annotations"},"Attribute Annotations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Annotations for schema attributes should have a single space after the colon ",(0,l.kt)("inlineCode",{parentName:"li"},":")," and no space before the colon ",(0,l.kt)("inlineCode",{parentName:"li"},":"),".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# recommended:\nschema Person:\n    name: str  # No space before the colon `:`\n    age: int = 18  # Spaces around assignment`=`\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'# non-recommended:\nschema Person:\n    codeA:int  # No space after the colon `:`\n    codeB : int  # Space before the colon `:`\n    name: str="Alice"  # No spaces around assignment`=`\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"There are no spaces around the colon ",(0,l.kt)("inlineCode",{parentName:"li"},":")," in the dict type annotation.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"schema Person:\n    labels: {str:str}  # recommended\n    keyValues: {str : str}  # non-recommended\n")),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"There are no spaces around the assignment ",(0,l.kt)("inlineCode",{parentName:"li"},"=")," in the function/schema/decorator keyword arguments (kwargs).")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'schema Person[nameVar]:\n    # Decorator kwargs\n    @deprecated(strict=False)  # recommended\n    name: str = nameVar\n\n    @deprecated(strict = False)  # non-recommended\n    age: int\n\n# Schema kwargs\npersonA = Person(nameVar="Alice") {}  # recommended\npersonB = Person(nameVar = "Bob") {}  # non-recommended\n\n# Function kwargs\nprint("", end=\'\')  # recommended\nprint("", end = \'\')  # non-recommended\n')),(0,l.kt)("h2",{id:"keywords"},"Keywords"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Only one space is usually reserved around the keyword, such as ",(0,l.kt)("inlineCode",{parentName:"li"},"schema"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"mixin"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"is")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"not"),", etc.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'schema NameMixin:\n    check:\n        name not None\n\nschema Person:\n    """\n    Person schema definition\n    """\n    mixin [NameMixin]\n\n    name: str = "Alice"\n    age: int\n\nperson = Person {\n    age = 18\n}\n')),(0,l.kt)("h2",{id:"function"},"Function"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"There are no spaces around the function/package select operator ",(0,l.kt)("inlineCode",{parentName:"li"},".")),(0,l.kt)("li",{parentName:"ul"},"There are no spaces between the function name and the parentheses ",(0,l.kt)("inlineCode",{parentName:"li"},"()"),".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"import math\n\nprint(math.log(10))   # recommended\nprint( math . log (10))  # non-recommended\n")))}c.isMDXComponent=!0}}]);