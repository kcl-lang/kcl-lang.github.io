"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[68132],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var r=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=p(t),m=s,u=g["".concat(l,".").concat(m)]||g[m]||d[m]||a;return t?r.createElement(u,i(i({ref:n},c),{},{components:t})):r.createElement(u,i({ref:n},c))}));function u(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=t.length,i=new Array(a);i[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[g]="string"==typeof e?e:s,i[1]=o;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},94588:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=t(87462),s=(t(67294),t(3905));const a={sidebar_position:2},i="Rest API",o={unversionedId:"reference/xlang-api/rest-api",id:"version-0.5.0/reference/xlang-api/rest-api",title:"Rest API",description:"1. Start REST Service",source:"@site/versioned_docs/version-0.5.0/reference/xlang-api/rest-api.md",sourceDirName:"reference/xlang-api",slug:"/reference/xlang-api/rest-api",permalink:"/docs/0.5.0/reference/xlang-api/rest-api",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.0/reference/xlang-api/rest-api.md",tags:[],version:"0.5.0",lastUpdatedBy:"Peefy",lastUpdatedAt:1703569910,formattedLastUpdatedAt:"Dec 26, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"reference",previous:{title:"Introduction",permalink:"/docs/0.5.0/reference/xlang-api/overview"},next:{title:"Go API",permalink:"/docs/0.5.0/reference/xlang-api/go-api"}},l={},p=[{value:"1. Start REST Service",id:"1-start-rest-service",level:2},{value:"2. <code>BuiltinService</code>",id:"2-builtinservice",level:2},{value:"3. <code>KclvmService</code>",id:"3-kclvmservice",level:2},{value:"4. Complete Protobuf Service Definition",id:"4-complete-protobuf-service-definition",level:2}],c={toc:p},g="wrapper";function d(e){let{components:n,...t}=e;return(0,s.kt)(g,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"rest-api"},"Rest API"),(0,s.kt)("h2",{id:"1-start-rest-service"},"1. Start REST Service"),(0,s.kt)("p",null,"The RestAPI service can be started in the following ways:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'python3 -m pip install kclvm -U\npython3 -m gunicorn "kclvm.program.rpc-server.__main__:create_app()" -t 120 -w 4 -k uvicorn.workers.UvicornWorker -b :2021\n')),(0,s.kt)("p",null,"or"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"go install kcl-lang.io/kcl-go/cmds/kcl-go@main\nkcl-go rest-server\n")),(0,s.kt)("p",null,"The service can then be requested via the POST protocol:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -X POST http://127.0.0.1:2021/api:protorpc/BuiltinService.Ping --data \'{}\'\n{\n    "error": "",\n    "result": {}\n}\n')),(0,s.kt)("p",null,"The POST request and the returned JSON data are consistent with the structure defined by Protobuf."),(0,s.kt)("h2",{id:"2-builtinservice"},"2. ",(0,s.kt)("inlineCode",{parentName:"h2"},"BuiltinService")),(0,s.kt)("p",null,"Where the ",(0,s.kt)("inlineCode",{parentName:"p"},"/api:protorpc/BuiltinService.Ping")," path represents the ",(0,s.kt)("inlineCode",{parentName:"p"},"Ping")," method of the ",(0,s.kt)("inlineCode",{parentName:"p"},"BuiltinService")," service."),(0,s.kt)("p",null,"The complete ",(0,s.kt)("inlineCode",{parentName:"p"},"BuiltinService")," is defined by Protobuf:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-protobuf"},"service BuiltinService {\n    rpc Ping(Ping_Args) returns(Ping_Result);\n    rpc ListMethod(ListMethod_Args) returns(ListMethod_Result);\n}\n\nmessage Ping_Args {\n    string value = 1;\n}\nmessage Ping_Result {\n    string value = 1;\n}\n\nmessage ListMethod_Args {\n    // empty\n}\nmessage ListMethod_Result {\n    repeated string method_name_list = 1;\n}\n")),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"Ping")," method can verify whether the service is normal, and the ",(0,s.kt)("inlineCode",{parentName:"p"},"ListMethod")," method can query the list of all services and functions provided."),(0,s.kt)("h2",{id:"3-kclvmservice"},"3. ",(0,s.kt)("inlineCode",{parentName:"h2"},"KclvmService")),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"KclvmService")," service is a service related to KCL functionality. The usage is the same as the ",(0,s.kt)("inlineCode",{parentName:"p"},"BuiltinService")," service."),(0,s.kt)("p",null,"For example, there is the following ",(0,s.kt)("inlineCode",{parentName:"p"},"Person")," structure definition:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"schema Person:\n    key: str\n\n    check:\n        \"value\" in key  # 'key' is required and 'key' must contain \"value\"\n")),(0,s.kt)("p",null,"Then we want to use ",(0,s.kt)("inlineCode",{parentName:"p"},"Person")," to verify the following JSON data:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{ "key": "value" }\n')),(0,s.kt)("p",null,"This can be done through the ",(0,s.kt)("inlineCode",{parentName:"p"},"ValidateCode")," method of the ",(0,s.kt)("inlineCode",{parentName:"p"},"KclvmService")," service. Refer to the ",(0,s.kt)("inlineCode",{parentName:"p"},"ValidateCode_Args")," structure of the ",(0,s.kt)("inlineCode",{parentName:"p"},"ValidateCode")," method:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-protobuf"},"message ValidateCode_Args {\n    string data = 1;\n    string code = 2;\n    string schema = 3;\n    string attribute_name = 4;\n    string format = 5;\n}\n")),(0,s.kt)("p",null,"Construct the JSON data required by the POST request according to the ",(0,s.kt)("inlineCode",{parentName:"p"},"ValidateCode_Args")," structure, which contains the ",(0,s.kt)("inlineCode",{parentName:"p"},"Person")," definition and the JSON data to be verified:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": "\\nschema Person:\\n    key: str\\n\\n    check:\\n        \\"value\\" in key  # \'key\' is required and \'key\' must contain \\"value\\"\\n",\n  "data": "{\\"key\\": \\"value\\"}"\n}\n')),(0,s.kt)("p",null,"Save this JSON data to the ",(0,s.kt)("inlineCode",{parentName:"p"},"vet-hello.json")," file and verify it with the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -X POST \\\n    http://127.0.0.1:2021/api:protorpc/KclvmService.ValidateCode \\\n    -H  "accept: application/json" \\\n    --data @./vet-hello.json\n{\n    "error": "",\n    "result": {\n        "success": true\n    }\n}\n')),(0,s.kt)("h2",{id:"4-complete-protobuf-service-definition"},"4. Complete Protobuf Service Definition"),(0,s.kt)("p",null,"Cross-language APIs defined via Protobuf(",(0,s.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl-go/blob/main/pkg/spec/gpyrpc/gpyrpc.proto"},"https://github.com/kcl-lang/kcl-go/blob/main/pkg/spec/gpyrpc/gpyrpc.proto"),"):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-protobuf"},'// Copyright 2023 The KCL Authors. All rights reserved.\n//\n// This file defines the request parameters and return structure of the KCL RPC server.\n// We can use the following command to start a KCL RPC server.\n\nsyntax = "proto3";\n\npackage gpyrpc;\n\nimport "google/protobuf/any.proto";\nimport "google/protobuf/descriptor.proto";\n\n// ----------------------------------------------------------------------------\n\n// kcl main.k -D name=value\nmessage CmdArgSpec {\n    string name = 1;\n    string value = 2;\n}\n\n// kcl main.k -O pkgpath:path.to.field=field_value\nmessage CmdOverrideSpec {\n    string pkgpath = 1;\n    string field_path = 2;\n    string field_value = 3;\n    string action = 4;\n}\n\n// ----------------------------------------------------------------------------\n// gpyrpc request/response/error types\n// ----------------------------------------------------------------------------\n\nmessage RestResponse {\n    google.protobuf.Any result = 1;\n    string error = 2;\n    KclError kcl_err = 3;\n}\n\nmessage KclError {\n    string ewcode = 1; // See kclvm/kcl/error/kcl_err_msg.py\n    string name = 2;\n    string msg = 3;\n    repeated KclErrorInfo error_infos = 4;\n}\n\nmessage KclErrorInfo {\n    string err_level = 1;\n    string arg_msg = 2;\n    string filename = 3;\n    string src_code = 4;\n    string line_no = 5;\n    string col_no = 6;\n}\n\n// ----------------------------------------------------------------------------\n// service requset/response\n// ----------------------------------------------------------------------------\n\n// gpyrpc.BuiltinService\nservice BuiltinService {\n    rpc Ping(Ping_Args) returns(Ping_Result);\n    rpc ListMethod(ListMethod_Args) returns(ListMethod_Result);\n}\n\n// gpyrpc.KclvmService\nservice KclvmService {\n    rpc Ping(Ping_Args) returns(Ping_Result);\n\n    rpc ExecProgram(ExecProgram_Args) returns(ExecProgram_Result);\n\n    rpc FormatCode(FormatCode_Args) returns(FormatCode_Result);\n    rpc FormatPath(FormatPath_Args) returns(FormatPath_Result);\n    rpc LintPath(LintPath_Args) returns(LintPath_Result);\n    rpc OverrideFile(OverrideFile_Args) returns (OverrideFile_Result);\n\n    rpc GetSchemaType(GetSchemaType_Args) returns(GetSchemaType_Result);\n    rpc GetSchemaTypeMapping(GetSchemaTypeMapping_Args) returns(GetSchemaTypeMapping_Result);\n    rpc ValidateCode(ValidateCode_Args) returns(ValidateCode_Result);\n\n    rpc ListDepFiles(ListDepFiles_Args) returns(ListDepFiles_Result);\n    rpc LoadSettingsFiles(LoadSettingsFiles_Args) returns(LoadSettingsFiles_Result);\n}\n\nmessage Ping_Args {\n    string value = 1;\n}\nmessage Ping_Result {\n    string value = 1;\n}\n\nmessage ListMethod_Args {\n    // empty\n}\nmessage ListMethod_Result {\n    repeated string method_name_list = 1;\n}\n\nmessage ParseFile_AST_Args {\n    string filename = 1;\n    string source_code = 2;\n}\nmessage ParseFile_AST_Result {\n    string ast_json = 1; // json value\n    KclError kcl_err = 2;\n}\n\nmessage ParseProgram_AST_Args {\n    repeated string k_filename_list = 1;\n}\nmessage ParseProgram_AST_Result {\n    string ast_json = 1; // json value\n    KclError kcl_err = 2;\n}\n\nmessage ExecProgram_Args {\n    string work_dir = 1;\n\n    repeated string k_filename_list = 2;\n    repeated string k_code_list = 3;\n\n    repeated CmdArgSpec args = 4;\n    repeated CmdOverrideSpec overrides = 5;\n\n    bool disable_yaml_result = 6;\n\n    bool print_override_ast = 7;\n\n    // -r --strict-range-check\n    bool strict_range_check = 8;\n\n    // -n --disable-none\n    bool disable_none = 9;\n    // -v --verbose\n    int32 verbose = 10;\n\n    // -d --debug\n    int32 debug = 11;\n\n    // yaml/json: sort keys\n    bool sort_keys = 12;\n    // include schema type path in JSON/YAML result\n    bool include_schema_type_path = 13;\n}\nmessage ExecProgram_Result {\n    string json_result = 1;\n    string yaml_result = 2;\n\n    string escaped_time = 101;\n}\n\nmessage ResetPlugin_Args {\n    string plugin_root = 1;\n}\nmessage ResetPlugin_Result {\n    // empty\n}\n\nmessage FormatCode_Args {\n    string source = 1;\n}\n\nmessage FormatCode_Result {\n    bytes formatted = 1;\n}\n\nmessage FormatPath_Args {\n    string path = 1;\n}\n\nmessage FormatPath_Result {\n    repeated string changed_paths = 1;\n}\n\nmessage LintPath_Args {\n    repeated string paths = 1;\n}\n\nmessage LintPath_Result {\n    repeated string results = 1;\n}\n\nmessage OverrideFile_Args {\n    string file = 1;\n    repeated string specs = 2;\n    repeated string import_paths = 3;\n}\n\nmessage OverrideFile_Result {\n    bool result = 1;\n}\n\nmessage EvalCode_Args {\n    string code = 1;\n}\nmessage EvalCode_Result {\n    string json_result = 2;\n}\n\nmessage ResolveCode_Args {\n    string code = 1;\n}\n\nmessage ResolveCode_Result {\n    bool success = 1;\n}\n\nmessage GetSchemaType_Args {\n    string file = 1;\n    string code = 2;\n    string schema_name = 3;\n}\nmessage GetSchemaType_Result {\n    repeated KclType schema_type_list = 1;\n}\n\nmessage GetSchemaTypeMapping_Args {\n    string file = 1;\n    string code = 2;\n    string schema_name = 3;\n}\nmessage GetSchemaTypeMapping_Result {\n    map<string, KclType> schema_type_mapping = 1;\n}\n\nmessage ValidateCode_Args {\n    string data = 1;\n    string code = 2;\n    string schema = 3;\n    string attribute_name = 4;\n    string format = 5;\n}\n\nmessage ValidateCode_Result {\n    bool success = 1;\n    string err_message = 2;\n}\n\nmessage Position {\n    int64 line = 1;\n    int64 column = 2;\n    string filename = 3;\n}\n\nmessage ListDepFiles_Args {\n    string work_dir = 1;\n    bool use_abs_path = 2;\n    bool include_all = 3;\n    bool use_fast_parser = 4;\n}\n\nmessage ListDepFiles_Result {\n    string pkgroot = 1;\n    string pkgpath = 2;\n    repeated string files = 3;\n}\n\n// ---------------------------------------------------------------------------------\n// LoadSettingsFiles API\n//    Input work dir and setting files and return the merged kcl singleton config.\n// ---------------------------------------------------------------------------------\n\nmessage LoadSettingsFiles_Args {\n    string work_dir = 1;\n    repeated string files = 2;\n}\n\nmessage LoadSettingsFiles_Result {\n    CliConfig kcl_cli_configs = 1;\n    repeated KeyValuePair kcl_options = 2;\n}\n\nmessage CliConfig {\n    repeated string files = 1;\n    string output = 2;\n    repeated string overrides = 3;\n    repeated string path_selector = 4;\n    bool strict_range_check = 5;\n    bool disable_none = 6;\n    int64 verbose = 7;\n    bool debug = 8;\n}\n\nmessage KeyValuePair {\n    string key = 1;\n    string value = 2;\n}\n\n// ----------------------------------------------------------------------------\n// JSON Schema Lit\n// ----------------------------------------------------------------------------\n\nmessage KclType {\n    string type = 1;                     // schema, dict, list, str, int, float, bool, any, union, number_multiplier\n    repeated KclType union_types = 2 ;   // union types\n    string default = 3;                  // default value\n\n    string schema_name = 4;              // schema name\n    string schema_doc = 5;               // schema doc\n    map<string, KclType> properties = 6; // schema properties\n    repeated string required = 7;        // required schema properties, [property_name1, property_name2]\n\n    KclType key = 8;                     // dict key type\n    KclType item = 9;                    // dict/list item type\n\n    int32 line = 10;\n\n    repeated Decorator decorators = 11;  // schema decorators\n}\n\nmessage Decorator {\n    string name = 1;\n    repeated string arguments = 2;\n    map<string, string> keywords = 3;\n}\n\n// ----------------------------------------------------------------------------\n// END\n// ----------------------------------------------------------------------------\n')))}d.isMDXComponent=!0}}]);