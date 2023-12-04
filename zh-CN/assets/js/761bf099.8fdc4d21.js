"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[50950],{3905:(e,t,n)=>{n.d(t,{Zo:()=>N,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},N=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},o="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},E=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,N=_(e,["components","mdxType","originalType","parentName"]),o=p(n),E=i,d=o["".concat(s,".").concat(E)]||o[E]||m[E]||a;return n?r.createElement(d,l(l({ref:t},N),{},{components:n})):r.createElement(d,l({ref:t},N))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=E;var _={};for(var s in t)hasOwnProperty.call(t,s)&&(_[s]=t[s]);_.originalType=e,_[o]="string"==typeof e?e:i,l[1]=_;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}E.displayName="MDXCreateElement"},79402:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>_,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={title:"KCL Spec",linkTitle:"KCL Spec",type:"docs",weight:2,description:"KCL Spec"},l=void 0,_={unversionedId:"reference/lang/spec/kcl-spec",id:"version-0.5.6/reference/lang/spec/kcl-spec",title:"KCL Spec",description:"KCL Spec",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.5.6/reference/lang/spec/kcl-spec.md",sourceDirName:"reference/lang/spec",slug:"/reference/lang/spec/kcl-spec",permalink:"/zh-CN/docs/0.5.6/reference/lang/spec/kcl-spec",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.6/reference/lang/spec/kcl-spec.md",tags:[],version:"0.5.6",lastUpdatedBy:"peefy",lastUpdatedAt:1701659761,formattedLastUpdatedAt:"2023\u5e7412\u67084\u65e5",frontMatter:{title:"KCL Spec",linkTitle:"KCL Spec",type:"docs",weight:2,description:"KCL Spec"},sidebar:"reference",previous:{title:"Expressions",permalink:"/zh-CN/docs/0.5.6/reference/lang/spec/expressions"},next:{title:"Lexical",permalink:"/zh-CN/docs/0.5.6/reference/lang/spec/lexical"}},s={},p=[{value:"Lexical rules",id:"lexical-rules",level:2},{value:"Keywords and reserved words",id:"keywords-and-reserved-words",level:3},{value:"Line comment",id:"line-comment",level:3},{value:"Operators",id:"operators",level:3},{value:"Delimiters",id:"delimiters",level:3},{value:"Operator precedence",id:"operator-precedence",level:3},{value:"Grammar",id:"grammar",level:2}],N={toc:p},o="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(o,(0,r.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"lexical-rules"},"Lexical rules"),(0,i.kt)("h3",{id:"keywords-and-reserved-words"},"Keywords and reserved words"),(0,i.kt)("p",null,"The following are the keywords of the KCL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"True       False      None        Undefined   import\nand        or         in          is          not\nas         if         else        elif        for\nschema     mixin      protocol    check       assert\nall        any        map         filter      lambda\nrule\n")),(0,i.kt)("p",null,"The following are reserved words for the KCL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"pass       return     validate   rule        flow\ndef        del        raise      except      try\nfinally    while      from       with        yield\nglobal     nonlocal   struct     class       final\n")),(0,i.kt)("h3",{id:"line-comment"},"Line comment"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# a comment\n")),(0,i.kt)("h3",{id:"operators"},"Operators"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"+       -       *       **      /       //      %\n<<      >>      &       |       ^       <       >\n~       <=      >=      ==      !=      =\n+=      -=      *=      **=     /=      //=     %=\n<<=     >>=     &=      ^=\n")),(0,i.kt)("h3",{id:"delimiters"},"Delimiters"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"(       )       [       ]       {       }\n,       :       .       ;       @\n")),(0,i.kt)("h3",{id:"operator-precedence"},"Operator precedence"),(0,i.kt)("p",null,"The following list of operators is ordered from ",(0,i.kt)("strong",{parentName:"p"},"highest to lowest"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Operator"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"**")),(0,i.kt)("td",{parentName:"tr",align:null},"Exponentiation (highest priority)"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"+x")," ",(0,i.kt)("inlineCode",{parentName:"td"},"-x")," ",(0,i.kt)("inlineCode",{parentName:"td"},"~x")),(0,i.kt)("td",{parentName:"tr",align:null},"Positive, negative, bitwise NOT"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"*")," ",(0,i.kt)("inlineCode",{parentName:"td"},"/")," ",(0,i.kt)("inlineCode",{parentName:"td"},"%")," ",(0,i.kt)("inlineCode",{parentName:"td"},"//")),(0,i.kt)("td",{parentName:"tr",align:null},"Multiplication, division, floor division and remainder"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"+")," ",(0,i.kt)("inlineCode",{parentName:"td"},"-")),(0,i.kt)("td",{parentName:"tr",align:null},"Addition and subtraction"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<<")," ",(0,i.kt)("inlineCode",{parentName:"td"},">>")),(0,i.kt)("td",{parentName:"tr",align:null},"Left and right shifts"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"&")),(0,i.kt)("td",{parentName:"tr",align:null},"Bitwise AND"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"^")),(0,i.kt)("td",{parentName:"tr",align:null},"Bitwise XOR"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"`"),(0,i.kt)("td",{parentName:"tr",align:null},"`"),(0,i.kt)("td",{parentName:"tr",align:null},"Bitwise OR")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"in"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"not in"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"is"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"is not"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"<"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"<="),", ",(0,i.kt)("inlineCode",{parentName:"td"},">"),", ",(0,i.kt)("inlineCode",{parentName:"td"},">="),", ",(0,i.kt)("inlineCode",{parentName:"td"},"!="),", ",(0,i.kt)("inlineCode",{parentName:"td"},"==")),(0,i.kt)("td",{parentName:"tr",align:null},"Comparisons, including membership and identity operators"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"not")),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean NOT"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"and")),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean AND"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"or")),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean OR"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"if \u2013 else")),(0,i.kt)("td",{parentName:"tr",align:null},"Conditional expression ="),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"="),", ",(0,i.kt)("inlineCode",{parentName:"td"},"+="),", ",(0,i.kt)("inlineCode",{parentName:"td"},"-="),", ",(0,i.kt)("inlineCode",{parentName:"td"},"*="),", ",(0,i.kt)("inlineCode",{parentName:"td"},"/="),", ",(0,i.kt)("inlineCode",{parentName:"td"},"%="),", ",(0,i.kt)("inlineCode",{parentName:"td"},"&="),", `"),(0,i.kt)("td",{parentName:"tr",align:null},"=",(0,i.kt)("inlineCode",{parentName:"td"},", "),"^=",(0,i.kt)("inlineCode",{parentName:"td"},", "),"*","*","=",(0,i.kt)("inlineCode",{parentName:"td"},", "),"//=",(0,i.kt)("inlineCode",{parentName:"td"},", "),"<<=",(0,i.kt)("inlineCode",{parentName:"td"},", "),">>=`"),(0,i.kt)("td",{parentName:"tr",align:null},"Assign")))),(0,i.kt)("h2",{id:"grammar"},"Grammar"),(0,i.kt)("p",null,"KCL uses Python's ",(0,i.kt)("a",{parentName:"p",href:"https://lark-parser.readthedocs.io/en/latest/"},"LarkParser")," tool to describe the grammar, and the specification rules are as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bnf"},'//////////// KCL grammar ////////////\nstart: (NEWLINE | statement)*\n\nstatement: simple_stmt | compound_stmt\nsimple_stmt: (assign_stmt | unification_stmt | expr_stmt | assert_stmt | import_stmt | type_alias_stmt) NEWLINE\ncompound_stmt: if_stmt | schema_stmt | rule_stmt\n\n//////////// import_stmt ////////////\nimport_stmt: IMPORT dot_name (AS NAME)?\ndot_name: (leading_dots identifier) | identifier\nleading_dots: DOT+\n\n/////////// assert_stmt ////////////\nassert_stmt: ASSERT simple_expr (IF simple_expr)? (COMMA test)?\n\n//////////// if_stmt ////////////\nif_stmt: IF test COLON execution_block (ELIF test COLON execution_block)* (ELSE COLON execution_block)?\nexecution_block: if_simple_stmt | NEWLINE _INDENT schema_init_stmt+ _DEDENT\nif_simple_stmt: (simple_assign_stmt | unification_stmt | expr_stmt | assert_stmt) NEWLINE\n\n//////////// assign_stmt ////////////\nassign_stmt: identifier [COLON type] (ASSIGN identifier)* ASSIGN test\n    | identifier (COMP_PLUS | COMP_MINUS | COMP_MULTIPLY | COMP_DOUBLE_STAR | COMP_DIVIDE\n    | COMP_DOUBLE_DIVIDE | COMP_MOD | COMP_AND | COMP_OR | COMP_XOR | COMP_SHIFT_LEFT\n    | COMP_SHIFT_RIGHT) test\n\nsimple_assign_stmt: identifier ASSIGN test\n    | identifier (COMP_PLUS | COMP_MINUS | COMP_MULTIPLY | COMP_DOUBLE_STAR | COMP_DIVIDE\n    | COMP_DOUBLE_DIVIDE | COMP_MOD | COMP_AND | COMP_OR | COMP_XOR | COMP_SHIFT_LEFT\n    | COMP_SHIFT_RIGHT) test\n\n//////////// unification_stmt ////////////\nunification_stmt: identifier COLON schema_expr\n\n//////////// schema_stmt ////////////\nschema_stmt: [decorators] (SCHEMA|MIXIN|PROTOCOL) NAME [LEFT_BRACKETS [schema_arguments] RIGHT_BRACKETS] [LEFT_PARENTHESES identifier (COMMA identifier)* RIGHT_PARENTHESES] [for_host] COLON NEWLINE [schema_body]\nschema_arguments: schema_argument (COMMA schema_argument)*\nschema_argument: NAME [COLON type] [ASSIGN test]\nschema_body: _INDENT (string NEWLINE)* [mixin_stmt] (schema_attribute_stmt|schema_init_stmt|schema_index_signature)* [check_block] _DEDENT\nschema_attribute_stmt: attribute_stmt NEWLINE\nattribute_stmt: [decorators] identifier [QUESTION] COLON type [(ASSIGN|COMP_OR) test]\nschema_init_stmt: if_simple_stmt | if_stmt\nschema_index_signature: LEFT_BRACKETS [NAME COLON] [ELLIPSIS] basic_type RIGHT_BRACKETS COLON type [ASSIGN test] NEWLINE\n\n//////////// rule_stmt ////////////\nrule_stmt: [decorators] RULE NAME [LEFT_BRACKETS [schema_arguments] RIGHT_BRACKETS] [LEFT_PARENTHESES identifier (COMMA identifier)* RIGHT_PARENTHESES] [for_host] COLON NEWLINE [rule_body]\nrule_body: _INDENT (string NEWLINE)* check_expr+ _DEDENT\n\nfor_host: FOR identifier\n\n/////////// decorators ////////////\ndecorators: (AT decorator_expr NEWLINE)+\ndecorator_expr: identifier [call_suffix]\n\n//////////// type ////////////\ntype: type_element (OR type_element)*\ntype_element: schema_type | basic_type | compound_type | literal_type\nschema_type: identifier\nbasic_type: STRING_TYPE | INT_TYPE | FLOAT_TYPE | BOOL_TYPE | ANY_TYPE\ncompound_type: list_type | dict_type\nlist_type: LEFT_BRACKETS (type)? RIGHT_BRACKETS\ndict_type: LEFT_BRACE (type)? COLON (type)? RIGHT_BRACE\nliteral_type: string | number | TRUE | FALSE | NONE\n\n//////////// type alias ////////////\ntype_alias_stmt: TYPE NAME ASSIGN type\n\n//////////// check_stmt ////////////\ncheck_block: CHECK COLON NEWLINE _INDENT check_expr+ _DEDENT\ncheck_expr: simple_expr [IF simple_expr] [COMMA primary_expr] NEWLINE\n\n//////////// mixin_stmt ////////////\nmixin_stmt: MIXIN LEFT_BRACKETS [mixins | multiline_mixins] RIGHT_BRACKETS NEWLINE\nmultiline_mixins: NEWLINE _INDENT mixins NEWLINE _DEDENT\nmixins: identifier (COMMA (NEWLINE mixins | identifier))*\n\n\n//////////// expression_stmt ////////////\nexpr_stmt: testlist_expr\ntestlist_expr: test (COMMA test)*\ntest: if_expr | simple_expr\nif_expr: simple_expr IF simple_expr ELSE test\n\nsimple_expr: unary_expr | binary_expr | primary_expr\n\nunary_expr: un_op simple_expr\nbinary_expr: simple_expr bin_op simple_expr\n\nbin_op: L_OR | L_AND\n    | OR | XOR | AND\n    | SHIFT_LEFT | SHIFT_RIGHT\n    | PLUS | MINUS | MULTIPLY | DIVIDE | MOD | DOUBLE_DIVIDE\n    | DOUBLE_STAR\n    | EQUAL_TO | NOT_EQUAL_TO\n    | LESS_THAN | GREATER_THAN | LESS_THAN_OR_EQUAL_TO | GREATER_THAN_OR_EQUAL_TO\n    | IN | L_NOT IN | IS | IS L_NOT | L_NOT | AS\nun_op: L_NOT | PLUS | MINUS | NOT\n\nprimary_expr: identifier call_suffix | operand | primary_expr select_suffix | primary_expr call_suffix | primary_expr slice_suffix\noperand: identifier | number | string | constant | quant_expr | list_expr | list_comp | config_expr | dict_comp | schema_expr | lambda_expr | LEFT_PARENTHESES test RIGHT_PARENTHESES\nselect_suffix: [QUESTION] DOT NAME\ncall_suffix: LEFT_PARENTHESES [arguments [COMMA]] RIGHT_PARENTHESES\nslice_suffix: [QUESTION] LEFT_BRACKETS (test | [test] COLON [test] [COLON [test]]) RIGHT_BRACKETS\narguments: argument (COMMA argument)*\nargument: test | NAME ASSIGN test | MULTIPLY test | DOUBLE_STAR test\n\n\n//////////// operand ////////////\nidentifier: NAME (DOT NAME)*\nquant_expr: quant_op [ identifier COMMA ] identifier IN quant_target LEFT_BRACE (simple_expr [IF simple_expr] | NEWLINE _INDENT simple_expr [IF simple_expr] NEWLINE _DEDENT)? RIGHT_BRACE\nquant_target: string | identifier | list_expr | list_comp | config_expr | dict_comp\nquant_op: ALL | ANY | FILTER | MAP\nlist_expr: LEFT_BRACKETS [list_items | NEWLINE [_INDENT list_items _DEDENT]] RIGHT_BRACKETS\nlist_items: list_item ((COMMA [NEWLINE] | [NEWLINE]) list_item)* [COMMA] [NEWLINE]\nlist_item: test | star_expr | if_item\nlist_comp: LEFT_BRACKETS (list_item comp_clause+ | NEWLINE _INDENT list_item comp_clause+ _DEDENT) RIGHT_BRACKETS\ndict_comp: LEFT_BRACE (entry comp_clause+ | NEWLINE _INDENT entry comp_clause+ _DEDENT) RIGHT_BRACE\nentry: test (COLON | ASSIGN | COMP_PLUS) test\ncomp_clause: FOR loop_variables [COMMA] IN simple_expr [NEWLINE] [IF test [NEWLINE]]\nif_entry: IF test COLON if_entry_exec_block (ELIF test COLON if_entry_exec_block)* (ELSE COLON if_entry_exec_block)?\nif_entry_exec_block: (test (COLON | ASSIGN | COMP_PLUS) test | double_star_expr | if_entry) [NEWLINE] | NEWLINE _INDENT (test (COLON | ASSIGN | COMP_PLUS) test | double_star_expr | if_entry) ((COMMA [NEWLINE] | [NEWLINE]) (test (COLON | ASSIGN | COMP_PLUS) test | double_star_expr | if_entry))* [COMMA] [NEWLINE] _DEDENT\nif_item: IF test COLON if_item_exec_block (ELIF test COLON if_item_exec_block)* (ELSE COLON if_item_exec_block)?\nif_item_exec_block: list_item [NEWLINE] | NEWLINE _INDENT list_item ((COMMA [NEWLINE] | NEWLINE) list_item)* [COMMA] [NEWLINE] _DEDENT\n\nstar_expr: MULTIPLY test\ndouble_star_expr: DOUBLE_STAR test\nloop_variables: primary_expr (COMMA primary_expr)*\nschema_expr: identifier (LEFT_PARENTHESES [arguments] RIGHT_PARENTHESES)? config_expr\nconfig_expr: LEFT_BRACE [config_entries | NEWLINE [_INDENT config_entries _DEDENT]] RIGHT_BRACE\nconfig_entries: config_entry ((COMMA [NEWLINE] | [NEWLINE]) config_entry)* [COMMA] [NEWLINE]\nconfig_entry: test (COLON | ASSIGN | COMP_PLUS) test | double_star_expr | if_entry\n\n//////////// lambda_expr ////////////\nlambda_expr: LAMBDA [schema_arguments] [RIGHT_ARROW type] LEFT_BRACE [expr_stmt | NEWLINE _INDENT schema_init_stmt+ _DEDENT] RIGHT_BRACE\n\n//////////// misc ////////////\nnumber: DEC_NUMBER [multiplier] | HEX_NUMBER | BIN_NUMBER | OCT_NUMBER | FLOAT_NUMBER\nmultiplier: SI_N_L | SI_U_L | SI_M_L | SI_K_L | SI_K | SI_M | SI_G | SI_T | SI_P\n    | SI_K_IEC | SI_M_IEC | SI_G_IEC | SI_T_IEC | SI_P_IEC\nstring: STRING | LONG_STRING\nconstant : TRUE | FALSE | NONE | UNDEFINED\n// Tokens\n\nASSIGN: "="\nCOLON: ":"\nSEMI_COLON: ";"\nCOMMA: ","\nQUESTION: "?"\nELLIPSIS: "..."\nRIGHT_ARROW: "->"\nLEFT_PARENTHESES: "("\nRIGHT_PARENTHESES: ")"\nLEFT_BRACKETS: "["\nRIGHT_BRACKETS: "]"\nLEFT_BRACE: "{"\nRIGHT_BRACE: "}"\nPLUS: "+"\nMINUS: "-"\nMULTIPLY: "*"\nDIVIDE: "/"\nMOD: "%"\nDOT: "."\nAND: "&"\nOR: "|"\nXOR: "^"\nNOT: "~"\nLESS_THAN: "<"\nGREATER_THAN: ">"\nEQUAL_TO: "=="\nNOT_EQUAL_TO: "!="\nGREATER_THAN_OR_EQUAL_TO: ">="\nLESS_THAN_OR_EQUAL_TO: "<="\nDOUBLE_STAR: "**"\nDOUBLE_DIVIDE: "//"\nSHIFT_LEFT: "<<"\nSHIFT_RIGHT: ">>"\nAT: "@"\n\nCOMP_PLUS: "+="\nCOMP_MINUS: "-="\nCOMP_MULTIPLY: "*="\nCOMP_DIVIDE: "/="\nCOMP_MOD: "%="\nCOMP_AND: "&="\nCOMP_OR: "|="\nCOMP_XOR: "^="\nCOMP_DOUBLE_STAR: "**="\nCOMP_DOUBLE_DIVIDE: "//="\nCOMP_SHIFT_LEFT: "<<="\nCOMP_SHIFT_RIGHT: ">>="\n\n// Special tokens\nIMPORT: "import"\nAS: "as"\nRULE: "rule"\nSCHEMA: "schema"\nMIXIN: "mixin"\nPROTOCOL: "protocol"\nCHECK: "check"\nFOR: "for"\nASSERT: "assert"\nIF: "if"\nELIF: "elif"\nELSE: "else"\nL_OR: "or"\nL_AND: "and"\nL_NOT: "not"\nIN: "in"\nIS: "is"\nLAMBDA: "lambda"\nALL: "all"\nANY: "any"\nFILTER: "filter"\nMAP: "map"\nTYPE: "type"\n\nANY_TYPE: "any"\nSTRING_TYPE: "str"\nINT_TYPE: "int"\nFLOAT_TYPE: "float"\nBOOL_TYPE: "bool"\n\n// Constant tokens\nTRUE: "True"\nFALSE: "False"\nNONE: "None"\nUNDEFINED: "Undefined"\n\n// Binary prefix\nSI_N_L: "n"\nSI_U_L: "u"\nSI_M_L: "m"\nSI_K_L: "k"\nSI_K: "K"\nSI_M: "M"\nSI_G: "G"\nSI_T: "T"\nSI_P: "P"\nSI_K_IEC: "Ki"\nSI_M_IEC: "Mi"\nSI_G_IEC: "Gi"\nSI_T_IEC: "Ti"\nSI_P_IEC: "Pi"\nIEC: "i"\n\nNAME: /\\$?[a-zA-Z_]\\w*/\nCOMMENT: /#[^\\n]*/\nNEWLINE: ( /\\r?\\n[\\t ]*/ | COMMENT )+\n\nSTRING: /r?("(?!"").*?(?<!\\\\)(\\\\\\\\)*?"|\'(?!\'\').*?(?<!\\\\)(\\\\\\\\)*?\')/i\nLONG_STRING: /r?(""".*?(?<!\\\\)(\\\\\\\\)*?"""|\'\'\'.*?(?<!\\\\)(\\\\\\\\)*?\'\'\')/is\n\nDEC_NUMBER: /\\-?0|\\-?[1-9]\\d*/i\nHEX_NUMBER.2: /\\-?0[xX][0-9a-fA-F]+/i\nOCT_NUMBER.2: /\\-?0[oO]?[0-7]+/i\nBIN_NUMBER.2 : /\\-?0[bB][0-1]+/i\nFLOAT_NUMBER.2: /(([-+]?\\d+\\.\\d*|\\.\\d+)(e[-+]?\\d+)?|\\d+(e[-+]?\\d+))/i\n\n%ignore /[\\t \\f]+/  // WS\n%ignore /\\\\[\\t \\f]*\\r?\\n/   // LINE_CONT\n%declare _INDENT _DEDENT\n')))}m.isMDXComponent=!0}}]);