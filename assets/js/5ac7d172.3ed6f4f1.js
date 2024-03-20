"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[42515],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>d});var t=r(67294);function s(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){s(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,s=function(e,n){if(null==e)return{};var r,t,s={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(s[r]=e[r]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),g=c(r),m=s,d=g["".concat(l,".").concat(m)]||g[m]||u[m]||i;return r?t.createElement(d,a(a({ref:n},p),{},{components:r})):t.createElement(d,a({ref:n},p))}));function d(e,n){var r=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var i=r.length,a=new Array(i);a[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[g]="string"==typeof e?e:s,a[1]=o;for(var c=2;c<i;c++)a[c]=r[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},25539:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var t=r(87462),s=(r(67294),r(3905));const i={sidebar_position:2},a="Rest API",o={unversionedId:"reference/xlang-api/rest-api",id:"version-0.4.3/reference/xlang-api/rest-api",title:"Rest API",description:"1. Start REST Service",source:"@site/versioned_docs/version-0.4.3/reference/xlang-api/rest-api.md",sourceDirName:"reference/xlang-api",slug:"/reference/xlang-api/rest-api",permalink:"/docs/0.4.3/reference/xlang-api/rest-api",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.4.3/reference/xlang-api/rest-api.md",tags:[],version:"0.4.3",lastUpdatedBy:"peefy",lastUpdatedAt:1710906677,formattedLastUpdatedAt:"Mar 20, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"reference",previous:{title:"Introduction",permalink:"/docs/0.4.3/reference/xlang-api/overview"},next:{title:"go-api",permalink:"/docs/0.4.3/reference/xlang-api/go-api"}},l={},c=[{value:"1. Start REST Service",id:"1-start-rest-service",level:2},{value:"2. <code>BuiltinService</code>",id:"2-builtinservice",level:2},{value:"3. <code>KclvmService</code>",id:"3-kclvmservice",level:2},{value:"4. Complete Protobuf Service Definition",id:"4-complete-protobuf-service-definition",level:2}],p={toc:c},g="wrapper";function u(e){let{components:n,...r}=e;return(0,s.kt)(g,(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"rest-api"},"Rest API"),(0,s.kt)("h2",{id:"1-start-rest-service"},"1. Start REST Service"),(0,s.kt)("p",null,"The RestAPI service can be started in the following way:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'kclvm -m gunicorn "kclvm.program.rpc-server.__main__:create_app()" -t 120 -w 4 -k uvicorn.workers.UvicornWorker -b :2021\n')),(0,s.kt)("p",null,"The service can then be requested via the POST protocol:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -X POST http://127.0.0.1:2021/api:protorpc/BuiltinService.Ping --data \'{}\'\n{\n    "error": "",\n    "result": {}\n}\n')),(0,s.kt)("p",null,"The POST request and the returned JSON data are consistent with the structure defined by Protobuf."),(0,s.kt)("h2",{id:"2-builtinservice"},"2. ",(0,s.kt)("inlineCode",{parentName:"h2"},"BuiltinService")),(0,s.kt)("p",null,"Where the ",(0,s.kt)("inlineCode",{parentName:"p"},"/api:protorpc/BuiltinService.Ping")," path represents the ",(0,s.kt)("inlineCode",{parentName:"p"},"Ping")," method of the ",(0,s.kt)("inlineCode",{parentName:"p"},"BuiltinService")," service."),(0,s.kt)("p",null,"The complete ",(0,s.kt)("inlineCode",{parentName:"p"},"BuiltinService")," is defined by Protobuf:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-protobuf"},"service BuiltinService {\n    rpc Ping(Ping_Args) returns(Ping_Result);\n    rpc ListMethod(ListMethod_Args) returns(ListMethod_Result);\n}\n\nmessage Ping_Args {\n    string value = 1;\n}\nmessage Ping_Result {\n    string value = 1;\n}\n\nmessage ListMethod_Args {\n    // empty\n}\nmessage ListMethod_Result {\n    repeated string method_name_list = 1;\n}\n")),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"Ping")," method can verify whether the service is normal, and the ",(0,s.kt)("inlineCode",{parentName:"p"},"ListMethod")," method can query the list of all services and functions provided."),(0,s.kt)("h2",{id:"3-kclvmservice"},"3. ",(0,s.kt)("inlineCode",{parentName:"h2"},"KclvmService")),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"KclvmService")," service is a service related to KCL functionality. The usage is the same as the ",(0,s.kt)("inlineCode",{parentName:"p"},"BuiltinService")," service."),(0,s.kt)("p",null,"For example, there is the following ",(0,s.kt)("inlineCode",{parentName:"p"},"Person")," structure definition:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"schema Person:\n    key: str\n\n    check:\n        \"value\" in key  # 'key' is required and 'key' must contain \"value\"\n")),(0,s.kt)("p",null,"Then we want to use ",(0,s.kt)("inlineCode",{parentName:"p"},"Person")," to verify the following JSON data:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{ "key": "value" }\n')),(0,s.kt)("p",null,"This can be done through the ",(0,s.kt)("inlineCode",{parentName:"p"},"ValidateCode")," method of the ",(0,s.kt)("inlineCode",{parentName:"p"},"KclvmService")," service. Refer to the ",(0,s.kt)("inlineCode",{parentName:"p"},"ValidateCode_Args")," structure of the ",(0,s.kt)("inlineCode",{parentName:"p"},"ValidateCode")," method:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-protobuf"},"message ValidateCode_Args {\n    string data = 1;\n    string code = 2;\n    string schema = 3;\n    string attribute_name = 4;\n    string format = 5;\n}\n")),(0,s.kt)("p",null,"Construct the JSON data required by the POST request according to the ",(0,s.kt)("inlineCode",{parentName:"p"},"ValidateCode_Args")," structure, which contains the ",(0,s.kt)("inlineCode",{parentName:"p"},"Person")," definition and the JSON data to be verified:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": "\\nschema Person:\\n    key: str\\n\\n    check:\\n        \\"value\\" in key  # \'key\' is required and \'key\' must contain \\"value\\"\\n",\n  "data": "{\\"attr_name\\": {\\"key\\": \\"value\\"}}"\n}\n')),(0,s.kt)("p",null,"Save this JSON data to the ",(0,s.kt)("inlineCode",{parentName:"p"},"vet-hello.json")," file and verify it with the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -X POST \\\n    http://127.0.0.1:2021/api:protorpc/KclvmService.ValidateCode \\\n    -H  "accept: application/json" \\\n    --data @./vet-hello.json\n{\n    "error": "",\n    "result": {\n        "success": true\n    }\n}\n')),(0,s.kt)("h2",{id:"4-complete-protobuf-service-definition"},"4. Complete Protobuf Service Definition"),(0,s.kt)("p",null,"Cross-language APIs defined via Protobuf(",(0,s.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl-go/blob/main/pkg/spec/gpyrpc/gpyrpc.proto"},"https://github.com/kcl-lang/kcl-go/blob/main/pkg/spec/gpyrpc/gpyrpc.proto"),"):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-protobuf"},'// Copyright 2021 The KCL Authors. All rights reserved.\n//\n// This file defines the request parameters and return structure of the KCL RPC server.\n// We can use the following command to start a KCL RPC server.\n//\n// ```\n// kclvm -m kclvm.program.rpc-server -http=:2021\n// ```\n//\n// The service can then be requested via the POST protocol:\n//\n// ```\n// $ curl -X POST http://127.0.0.1:2021/api:protorpc/BuiltinService.Ping --data \'{}\'\n// {\n//    "error": "",\n//    "result": {}\n// }\n// ```\n\nsyntax = "proto3";\n\npackage gpyrpc;\n\noption go_package = "kcl-lang.io/kcl-go/pkg/spec/gpyrpc;gpyrpc";\n\nimport "google/protobuf/any.proto";\nimport "google/protobuf/descriptor.proto";\n\n// ----------------------------------------------------------------------------\n\n// kcl main.k -D name=value\nmessage CmdArgSpec {\n    string name = 1;\n    string value = 2;\n}\n\n// kcl main.k -O pkgpath:path.to.field=field_value\nmessage CmdOverrideSpec {\n    string pkgpath = 1;\n    string field_path = 2;\n    string field_value = 3;\n    string action = 4;\n}\n\n// ----------------------------------------------------------------------------\n// gpyrpc request/response/error types\n// ----------------------------------------------------------------------------\n\nmessage RestResponse {\n    google.protobuf.Any result = 1;\n    string error = 2;\n    KclError kcl_err = 3;\n}\n\nmessage KclError {\n    string ewcode = 1; // See kclvm/kcl/error/kcl_err_msg.py\n    string name = 2;\n    string msg = 3;\n    repeated KclErrorInfo error_infos = 4;\n}\n\nmessage KclErrorInfo {\n    string err_level = 1;\n    string arg_msg = 2;\n    string filename = 3;\n    string src_code = 4;\n    string line_no = 5;\n    string col_no = 6;\n}\n\n// ----------------------------------------------------------------------------\n// service requset/response\n// ----------------------------------------------------------------------------\n\n// gpyrpc.BuiltinService\nservice BuiltinService {\n    rpc Ping(Ping_Args) returns(Ping_Result);\n    rpc ListMethod(ListMethod_Args) returns(ListMethod_Result);\n}\n\n// gpyrpc.KclvmService\nservice KclvmService {\n    rpc Ping(Ping_Args) returns(Ping_Result);\n\n    rpc ParseFile_LarkTree(ParseFile_LarkTree_Args) returns(ParseFile_LarkTree_Result);\n    rpc ParseFile_AST(ParseFile_AST_Args) returns(ParseFile_AST_Result);\n    rpc ParseProgram_AST(ParseProgram_AST_Args) returns(ParseProgram_AST_Result);\n\n    rpc ExecProgram(ExecProgram_Args) returns(ExecProgram_Result);\n\n    rpc ResetPlugin(ResetPlugin_Args) returns(ResetPlugin_Result);\n\n    rpc FormatCode(FormatCode_Args) returns(FormatCode_Result);\n    rpc FormatPath(FormatPath_Args) returns(FormatPath_Result);\n    rpc LintPath(LintPath_Args) returns(LintPath_Result);\n    rpc OverrideFile(OverrideFile_Args) returns (OverrideFile_Result);\n\n    rpc EvalCode(EvalCode_Args) returns(EvalCode_Result);\n    rpc ResolveCode(ResolveCode_Args) returns(ResolveCode_Result);\n    rpc GetSchemaType(GetSchemaType_Args) returns(GetSchemaType_Result);\n    rpc ValidateCode(ValidateCode_Args) returns(ValidateCode_Result);\n    rpc SpliceCode(SpliceCode_Args) returns(SpliceCode_Result);\n\n    rpc Complete(Complete_Args) returns(Complete_Result);\n    rpc GoToDef(GoToDef_Args) returns(GoToDef_Result);\n    rpc DocumentSymbol(DocumentSymbol_Args) returns(DocumentSymbol_Result);\n    rpc Hover(Hover_Args) returns(Hover_Result);\n\n    rpc ListDepFiles(ListDepFiles_Args) returns(ListDepFiles_Result);\n    rpc LoadSettingsFiles(LoadSettingsFiles_Args) returns(LoadSettingsFiles_Result);\n}\n\nmessage Ping_Args {\n    string value = 1;\n}\nmessage Ping_Result {\n    string value = 1;\n}\n\nmessage ListMethod_Args {\n    // empty\n}\nmessage ListMethod_Result {\n    repeated string method_name_list = 1;\n}\n\nmessage ParseFile_LarkTree_Args {\n    string filename = 1;\n    string source_code = 2;\n    bool ignore_file_line = 3;\n}\nmessage ParseFile_LarkTree_Result {\n    string lark_tree_json = 1;\n}\n\nmessage ParseFile_AST_Args {\n    string filename = 1;\n    string source_code = 2;\n}\nmessage ParseFile_AST_Result {\n    string ast_json = 1; // json value\n}\n\nmessage ParseProgram_AST_Args {\n    repeated string k_filename_list = 1;\n}\nmessage ParseProgram_AST_Result {\n    string ast_json = 1; // json value\n}\n\nmessage ExecProgram_Args {\n    string work_dir = 1;\n\n    repeated string k_filename_list = 2;\n    repeated string k_code_list = 3;\n\n    repeated CmdArgSpec args = 4;\n    repeated CmdOverrideSpec overrides = 5;\n\n    bool disable_yaml_result = 6;\n\n    bool print_override_ast = 7;\n\n    // -r --strict-range-check\n    bool strict_range_check = 8;\n\n    // -n --disable-none\n    bool disable_none = 9;\n    // -v --verbose\n    int32 verbose = 10;\n\n    // -d --debug\n    int32 debug = 11;\n}\nmessage ExecProgram_Result {\n    string json_result = 1;\n    string yaml_result = 2;\n\n    string escaped_time = 101;\n}\n\nmessage ResetPlugin_Args {\n    string plugin_root = 1;\n}\nmessage ResetPlugin_Result {\n    // empty\n}\n\nmessage FormatCode_Args {\n    string source = 1;\n}\n\nmessage FormatCode_Result {\n    bytes formatted = 1;\n}\n\nmessage FormatPath_Args {\n    string path = 1;\n}\n\nmessage FormatPath_Result {\n    repeated string changedPaths = 1;\n}\n\nmessage LintPath_Args {\n    string path = 1;\n}\n\nmessage LintPath_Result {\n    repeated string results = 1;\n}\n\nmessage OverrideFile_Args {\n    string file = 1;\n    repeated string specs = 2;\n}\n\nmessage OverrideFile_Result {\n    bool result = 1;\n}\n\nmessage EvalCode_Args {\n    string code = 1;\n}\nmessage EvalCode_Result {\n    string json_result = 2;\n}\n\nmessage ResolveCode_Args {\n    string code = 1;\n}\n\nmessage ResolveCode_Result {\n    bool success = 1;\n}\n\nmessage GetSchemaType_Args {\n    string file = 1;\n    string code = 2;\n    string schema_name = 3; // emtry is all\n}\nmessage GetSchemaType_Result {\n    repeated KclType schema_type_list = 1;\n}\n\nmessage ValidateCode_Args {\n    string data = 1;\n    string code = 2;\n    string schema = 3;\n    string attribute_name = 4;\n    string format = 5;\n}\n\nmessage ValidateCode_Result {\n    bool success = 1;\n    string err_message = 2;\n}\n\nmessage CodeSnippet {\n    string schema = 1;\n    string rule = 2;\n}\n\nmessage SpliceCode_Args {\n    repeated CodeSnippet codeSnippets = 1;\n}\n\nmessage SpliceCode_Result {\n    string spliceCode = 1;\n}\n\nmessage Position {\n    int64 line = 1;\n    int64 column = 2;\n    string filename = 3;\n}\n\nmessage Complete_Args {\n    Position pos = 1;\n    string name = 2;\n    string code = 3;\n}\n\nmessage Complete_Result {\n    string completeItems = 1;\n}\n\nmessage GoToDef_Args {\n    Position pos = 1;\n    string code = 2;\n}\n\nmessage GoToDef_Result {\n    string locations = 1;\n}\n\nmessage DocumentSymbol_Args {\n    string file = 1;\n    string code = 2;\n}\n\nmessage DocumentSymbol_Result {\n    string symbol = 1;\n}\n\nmessage Hover_Args {\n    Position pos = 1;\n    string code = 2;\n}\n\nmessage Hover_Result {\n    string hoverResult = 1;\n}\n\nmessage ListDepFiles_Args {\n    string work_dir = 1;\n    bool use_abs_path = 2;\n    bool include_all = 3;\n    bool use_fast_parser = 4;\n}\n\nmessage ListDepFiles_Result {\n    string pkgroot = 1;\n    string pkgpath = 2;\n    repeated string files = 3;\n}\n\n// ---------------------------------------------------------------------------------\n// LoadSettingsFiles API\n//    Input work dir and setting files and return the merged kcl singleton config.\n// ---------------------------------------------------------------------------------\n\nmessage LoadSettingsFiles_Args {\n    string work_dir = 1;\n    repeated string files = 2;\n}\n\nmessage LoadSettingsFiles_Result {\n    CliConfig kcl_cli_configs = 1;\n    repeated KeyValuePair kcl_options = 2;\n}\n\nmessage CliConfig {\n    repeated string files = 1;\n    string output = 2;\n    repeated string overrides = 3;\n    repeated string path_selector = 4;\n    bool strict_range_check = 5;\n    bool disable_none = 6;\n    int64 verbose = 7;\n    bool debug = 8;\n}\n\nmessage KeyValuePair {\n    string key = 1;\n    string value = 2;\n}\n\n// ----------------------------------------------------------------------------\n// JSON Schema Lit\n// ----------------------------------------------------------------------------\n\nmessage KclType {\n    string type = 1;                     // schema, dict, list, str, int, float, bool, any, union, number_multiplier\n    repeated KclType union_types = 2 ;   // union types\n    string default = 3;                  // default value\n\n    string schema_name = 4;              // schema name\n    string schema_doc = 5;               // schema doc\n    map<string, KclType> properties = 6; // schema properties\n    repeated string required = 7;        // required schema properties, [property_name1, property_name2]\n\n    KclType key = 8;                     // dict key type\n    KclType item = 9;                    // dict/list item type\n\n    int32 line = 10;\n\n    repeated Decorator decorators = 11;  // schema decorators\n}\n\nmessage Decorator {\n    string name = 1;\n    repeated string arguments = 2;\n    map<string, string> keywords = 3;\n}\n\n// ----------------------------------------------------------------------------\n// END\n// ----------------------------------------------------------------------------\n')))}u.isMDXComponent=!0}}]);