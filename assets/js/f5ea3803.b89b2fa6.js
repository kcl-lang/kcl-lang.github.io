"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[20802],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var r=a.createContext({}),c=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(r.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),h=i,u=m["".concat(r,".").concat(h)]||m[h]||d[h]||o;return n?a.createElement(u,l(l({ref:t},p),{},{components:n})):a.createElement(u,l({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=h;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s[m]="string"==typeof e?e:i,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},58726:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const o={slug:"2023-12-09-kcl-new-semantic-model",title:"Unlocking Advanced Code Intelligence with the KCL Semantic Model",authors:{name:"KCL Team Member",title:"KCL Team Member"},tags:["KCL","Semantic"]},l=void 0,s={permalink:"/blog/2023-12-09-kcl-new-semantic-model",editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/blog/2023-12-09-kcl-new-semantic-model/index.md",source:"@site/blog/2023-12-09-kcl-new-semantic-model/index.md",title:"Unlocking Advanced Code Intelligence with the KCL Semantic Model",description:"What is the KCL semantic model?",date:"2023-12-09T00:00:00.000Z",formattedDate:"December 9, 2023",tags:[{label:"KCL",permalink:"/blog/tags/kcl"},{label:"Semantic",permalink:"/blog/tags/semantic"}],readingTime:11.195,hasTruncateMarker:!1,authors:[{name:"KCL Team Member",title:"KCL Team Member"}],frontMatter:{slug:"2023-12-09-kcl-new-semantic-model",title:"Unlocking Advanced Code Intelligence with the KCL Semantic Model",authors:{name:"KCL Team Member",title:"KCL Team Member"},tags:["KCL","Semantic"]},prevItem:{title:"Efficient Cloud Native Application Deployment - KCL and KubeVela Integration Quick Guide",permalink:"/blog/2023-12-15-kubevela-integration"},nextItem:{title:"Exploration of KCL in Engineering Configuration and Policy Scenarios",permalink:"/blog/2023-12-09-engineering-config-policy-with-kcl-meeting"}},r={authorsImageUrls:[void 0]},c=[{value:"What is the KCL semantic model?",id:"what-is-the-kcl-semantic-model",level:2},{value:"Why does KCL need a new semantic model?",id:"why-does-kcl-need-a-new-semantic-model",level:2},{value:"Main Idea: Map Reduce",id:"main-idea-map-reduce",level:2},{value:"New Semantic Model Pipeline",id:"new-semantic-model-pipeline",level:2},{value:"Semantic Database: GlobalState",id:"semantic-database-globalstate",level:2},{value:"SymbolData",id:"symboldata",level:3},{value:"ScopeData",id:"scopedata",level:3},{value:"SemanticDB",id:"semanticdb",level:3},{value:"Summary",id:"summary",level:2}],p={toc:c},m="wrapper";function d(e){let{components:t,...o}=e;return(0,i.kt)(m,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-is-the-kcl-semantic-model"},"What is the KCL semantic model?"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image.png",src:n(23455).Z,width:"1480",height:"1238"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'"Semantic model" refers to the in-memory representation of modules, functions, and types that appear in source code. This representation is fully "resolved": all expressions have types (note that there may be expression types that cannot be deduced in the KCL, they will be defined as any ',(0,i.kt)("strong",{parentName:"li"},"Type"),"), and all references are bound to declarations, etc."),(0,i.kt)("li",{parentName:"ul"},"The client can submit a small amount of input data (typically changes to a single file) and get a new code model to explain the changes."),(0,i.kt)("li",{parentName:"ul"},"The underlying engine ensures that the model is ",(0,i.kt)("strong",{parentName:"li"},"Lazy (on demand) and incremental")," computational and can be updated quickly for small changes.")),(0,i.kt)("h2",{id:"why-does-kcl-need-a-new-semantic-model"},"Why does KCL need a new semantic model?"),(0,i.kt)("p",null,"First, we can take a brief look at the design of the old semantic model: ",(0,i.kt)("img",{alt:"image.png",src:n(43389).Z,width:"1216",height:"812"})," the old semantic model can be simply regarded as a collection of a large number of scopes, in which different scopes store the parent-child nodes between the scopes, as well as the symbol strings and corresponding types contained therein. It can simply meet the requirements of the compiler for type checking and code generation. But a simple structure involving an advanced tool chain, such as an IDE, is not sufficient. A few examples of typical IDE queries:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"What is the type of the AST node under the corresponding position?"),(0,i.kt)("li",{parentName:"ul"},"Where are all the references to the current AST node? \uff08find reference\uff09"),(0,i.kt)("li",{parentName:"ul"},"Which node is referenced by the current AST node? \uff08find definition\uff09"),(0,i.kt)("li",{parentName:"ul"},"All symbols accessible at the current position?")),(0,i.kt)("p",null,"Only the old semantic model is used, which requires the IDE to traverse the AST for many times and perform repeated calculations. We can simply analyze the problems of the old semantic model, and we can find that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The old semantic model was more difficult to query information, and only stored the mapping from character string to symbol"),(0,i.kt)("li",{parentName:"ul"},"The association between symbols and the weak association between symbols and scopes often leads to the need to traverse all scopes when querying for relevant information"),(0,i.kt)("li",{parentName:"ul"},"A large amount of intermediate information is discarded in the analysis process and is not cached, resulting in repeated operations for multiple queries.")),(0,i.kt)("p",null,"In short, the old semantic model can not meet the query needs of the advanced tool chain, and a lot of information is missing. On the other hand, the old semantic model does not support incremental compilation, which also reduces the user experience of the tool chain."),(0,i.kt)("h2",{id:"main-idea-map-reduce"},"Main Idea: Map Reduce"),(0,i.kt)("p",null,"The idea of the Map Reduce architecture is to split the analysis into a relatively simple indexing phase and a separate full analysis phase."),(0,i.kt)("p",null,"The core constraint of indexing is that it runs on a per-file basis, with the indexer taking the text of a single file, parsing it, and spitting out some data about that file. The indexer cannot touch other files. Full analysis can read other files and use the information in the index to save effort."),(0,i.kt)("p",null,"This sounds too abstract, so let's look at a concrete example-Java. In Java, each file begins with a package declaration. The indexer concatenates the package name with the class name to get the fully qualified name. It also collects the set of methods declared in the class, the list of superclasses and interfaces, and so on."),(0,i.kt)("p",null,"The data for each file is merged into an index that maps fully qualified names (FQNs) to classes. The index is inexpensive to update, and when a file modification request arrives, the contribution to that file in the index is removed, the text of the file is changed, and the indexer runs on the new text and adds the new contribution. The amount of work to be done is proportional to the number of files changed and is independent of the total number of files."),(0,i.kt)("p",null,"Let's see how to use the FQN index to quickly provide completion."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// File ./mypackage/Foo.java\npackage mypackage;\n\nimport java.util.*;\n\npublic class Foo {\n    public static Bar f() {\n        return new Bar();\n    }\n}\n\n// File ./mypackage/Bar.java\npackage mypackage;\n\npublic class Bar {\n    public void g() {}\n}\n\n// File ./Main.java\nimport mypackage.Foo;\n\npublic class Main {\n    public static void main(String[] args) {\n        Foo.f().\n    }\n}\n")),(0,i.kt)("p",null,"The user just entered ",(0,i.kt)("inlineCode",{parentName:"p"},"Foo.f().")," We need to clarify that the receiver expression type is ",(0,i.kt)("inlineCode",{parentName:"p"},"Bar")," and suggest ",(0,i.kt)("inlineCode",{parentName:"p"},"g ")," as completion."),(0,i.kt)("p",null,"Firstly, when the file ",(0,i.kt)("inlineCode",{parentName:"p"},"Main.java")," is modified, we run the indexer on this individual file without any changes (the file still contains the class ",(0,i.kt)("inlineCode",{parentName:"p"},"Main")," with static ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," methods), so we do not need to update the FQN index."),(0,i.kt)("p",null,"Next, we need to resolve the name ",(0,i.kt)("inlineCode",{parentName:"p"},"Foo"),". We parsed the file ",(0,i.kt)("inlineCode",{parentName:"p"},"Main.java")," and noticed the ",(0,i.kt)("inlineCode",{parentName:"p"},"import mypackage.Foo")," and search for ",(0,i.kt)("inlineCode",{parentName:"p"},"mypackage.Foo")," in the FQN index. In the index, we found that ",(0,i.kt)("inlineCode",{parentName:"p"},"Foo")," has a static method ",(0,i.kt)("inlineCode",{parentName:"p"},"f"),", so we successfully resolved the call to ",(0,i.kt)("inlineCode",{parentName:"p"},"f()"),". The index also stores the return type of ",(0,i.kt)("inlineCode",{parentName:"p"},"f"),", but please note that the index stores the string ",(0,i.kt)("inlineCode",{parentName:"p"},"Bar")," instead of a direct reference to the class ",(0,i.kt)("inlineCode",{parentName:"p"},"Bar"),"."),(0,i.kt)("p",null,"The reason for doing this is that the ",(0,i.kt)("inlineCode",{parentName:"p"},"import java.util.*")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"Foo.java")," can cause the ",(0,i.kt)("inlineCode",{parentName:"p"},"Bar")," to be inferred as either ",(0,i.kt)("inlineCode",{parentName:"p"},"java.util.Bar'")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"mypackage.Bar"),', the indexer doesn\'t know which one it is because it can only "see" the text of the file ',(0,i.kt)("inlineCode",{parentName:"p"},"Foo.java"),". In other words, although the index does store the return types of methods, it stores them in an unresolved form."),(0,i.kt)("p",null,"The next step is to parse the identifier ",(0,i.kt)("inlineCode",{parentName:"p"},"Bar")," in the context of ",(0,i.kt)("inlineCode",{parentName:"p"},"Foo.java"),". This will continue to use FQN indexing and navigate to class ",(0,i.kt)("inlineCode",{parentName:"p"},"mypackage.Bar"),". So in the end, we found the method ",(0,i.kt)("inlineCode",{parentName:"p"},"g")," that we wanted to complete."),(0,i.kt)("p",null,"During the completion process, only three files were touched upon in total. The FQN index allows us to completely ignore all other files in the project."),(0,i.kt)("p",null,"One problem with the methods described so far is that parsing types from indexes requires a lot of work. For example, if ",(0,i.kt)("inlineCode",{parentName:"p"},"Foo.f'")," is called multiple times, this task may be repeated. The solution is to add a cache. The name resolution result will be remembered, so only one resolution is required. Any changes will cause the cache to completely invalid - the cost of rebuilding the cache using indexes is not that high."),(0,i.kt)("p",null,"To summarize, the working principle of the first method is as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'Each file is independently and parallelly indexed, generating a "stub" - a set of visible top-level declarations with unresolved types.'),(0,i.kt)("li",{parentName:"ol"},"Merge all stubs into one indexed data structure."),(0,i.kt)("li",{parentName:"ol"},"Name parsing and type inference are mainly based on stubs."),(0,i.kt)("li",{parentName:"ol"},"Name resolution is lazy (we only parse types from stubs when needed) and memory based (each type is parsed only once)."),(0,i.kt)("li",{parentName:"ol"},"The cache will be completely invalidated every time a change is made"),(0,i.kt)("li",{parentName:"ol"},"The index is incrementally updated:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If the editor has not changed the stub of the file, there is no need to change the index."),(0,i.kt)("li",{parentName:"ul"},"Otherwise, the old index will be deleted and the new index will be added again")))),(0,i.kt)("p",null,"This method is simple enough and has excellent performance. Most of the work is mainly in the indexing phase, and we can execute these tasks in parallel. Two examples of this architecture are ",(0,i.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/idea/"},"IntelliJ")," And ",(0,i.kt)("a",{parentName:"p",href:"https://sorbet.org/"},"Sorbet"),"."),(0,i.kt)("p",null,"The main drawback of this method is that it is only effective when it is effective - specifically, not every language has a clearly defined concept of FQN. But overall, designing modules and name parsing is always good for languages, and specifically, in the current situation, KCL just meets this condition."),(0,i.kt)("h2",{id:"new-semantic-model-pipeline"},"New Semantic Model Pipeline"),(0,i.kt)("p",null,"The overall pipeline of the new semantic model is as follows:\n",(0,i.kt)("img",{alt:"image.png",src:n(99893).Z,width:"954",height:"772"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image.png",src:n(53649).Z,width:"960",height:"778"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image.png",src:n(50120).Z,width:"1316",height:"1296"}),"\nCompared with the analysis process of the original semantic model, the new semantic model adds two rounds of pass, namer and advanced ","_"," resolve, so as to enhance the support for the advanced tool chain without affecting the original compiler process."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"resolver")," is based on file level work, mainly involving the initialization of the ",(0,i.kt)("inlineCode",{parentName:"li"},"GlobalState"),", parsing the source code into AST, and establishing the mapping of AST nodes to types for later stages to use. Therefore, we can cache the output of a single file index to completely skip parsing the file when its content has not changed."),(0,i.kt)("li",{parentName:"ul"},"The early stage of ",(0,i.kt)("inlineCode",{parentName:"li"},"namer")," will also be based on file level work, which collects global symbols defined in the file, and then merges the symbols based on FQN to obtain a unique ",(0,i.kt)("inlineCode",{parentName:"li"},"GlobalState"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Based on file level, it means we can easily perform incremental compilation in the first two stages"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"advanced_resolver")," will traverse the AST to resolve local symbols and point symbol references to their definitions, while setting the owner symbol for the local scope, such as ",(0,i.kt)("inlineCode",{parentName:"li"},"Schema")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Package"))),(0,i.kt)("h2",{id:"semantic-database-globalstate"},"Semantic Database: GlobalState"),(0,i.kt)("p",null,"The core structure of the new semantic model is ",(0,i.kt)("inlineCode",{parentName:"p"},"core::GlobalState")," that the tool chain mainly uses it to complete the interaction and query with the compiler."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"/// GlobalState is used to store semantic information of KCL source code\n#[derive(Default, Debug, Clone)]\npub struct GlobalState {\n    // store all allocated symbols\n    symbols: KCLSymbolData,\n    // store all allocated scopes\n    scopes: ScopeData,\n    // store package infomation for name mapping\n    packages: PackageDB,\n    // store semantic information after analysis\n    pub(crate) sema_db: SemanticDB,\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GlobalState")," is used as a semantic database for the new semantic model and is the final product of semantic analysis, mainly containing four aspects of information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SymbolData"),": stores all symbols in the AST and their corresponding semantic information, and maintain the reference relationship."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ScopeData"),": stores all scopes involved in the AST, while separating symbols, maintaining symbol visibility and scope nesting relationships"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PackageDB"),": stores package information, such as a collection of files for the package, import information, and so on."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SemanticDB"),": stores auxiliary information to speed up queries, such as symbol sorting and position caching.")),(0,i.kt)("h3",{id:"symboldata"},"SymbolData"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"SymbolData")," is responsible for managing the allocation of symbols and storing the allocated symbols and related semantic information. Here we borrow the arena design of rust to access the relevant symbols."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Default, Debug, Clone)]\npub struct KCLSymbolData {\n    pub(crate) values: Arena<ValueSymbol>,\n    pub(crate) packages: Arena<PackageSymbol>,\n    pub(crate) attributes: Arena<AttributeSymbol>,\n    pub(crate) schemas: Arena<SchemaSymbol>,\n    pub(crate) type_aliases: Arena<TypeAliasSymbol>,\n    pub(crate) unresolved: Arena<UnresolvedSymbol>,\n    pub(crate) rules: Arena<RuleSymbol>,\n\n    pub(crate) symbols_info: SymbolDB,\n}\n")),(0,i.kt)("p",null,"In the new semantic model, we use ",(0,i.kt)("inlineCode",{parentName:"p"},"core::SymbolRef")," to represent a reference to a symbol, and also use ",(0,i.kt)("inlineCode",{parentName:"p"},"SymbolRef")," to access ",(0,i.kt)("inlineCode",{parentName:"p"},"SymbolData")," for the specific symbol information."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Debug, Clone, Copy, PartialEq, Eq, PartialOrd, Ord, Hash)]\npub struct SymbolRef {\n    pub(crate) id: generational_arena::Index,\n    pub(crate) kind: SymbolKind,\n}\n")),(0,i.kt)("p",null,"Specifically, Symbols with different types will be taken out from ",(0,i.kt)("inlineCode",{parentName:"p"},"SymbolData")," according to ",(0,i.kt)("inlineCode",{parentName:"p"},"SymbolRef::kind")," and converted to abstract ",(0,i.kt)("inlineCode",{parentName:"p"},"trait Symbol"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"pub type KCLSymbol = dyn Symbol<SymbolData = KCLSymbolData,\n    SemanticInfo = KCLSymbolSemanticInfo>;\npub fn get_symbol(&self, id: SymbolRef) -> Option<&KCLSymbol> {\n        match id.get_kind() {\n            SymbolKind::Schema => self\n                .schemas\n                .get(id.get_id())\n                .map(|symbol| symbol as &KCLSymbol),\n            ...\n        }\n    }\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"pub trait Symbol {\n    type SymbolData;\n    type SemanticInfo;\n    fn get_sema_info(&self) -> &Self::SemanticInfo;\n    fn is_global(&self) -> bool;\n    fn get_range(&self) -> Range;\n    fn get_owner(&self) -> Option<SymbolRef>;\n    fn get_definition(&self) -> Option<SymbolRef>;\n    fn get_name(&self) -> String;\n    fn get_id(&self) -> Option<SymbolRef>;\n    fn get_attribute(&self, ...) -> Option<SymbolRef>;\n    fn has_attribute(&self, ...) -> bool;\n\n    fn get_all_attributes(&self, ...) -> Vec<SymbolRef>;\n\n    fn simple_dump(&self) -> String;\n\n    fn full_dump(&self, data: &Self::SymbolData) -> Option<String>;\n}\n")),(0,i.kt)("p",null,"hrough this trait, the tool chain can easily complete the query of symbol semantic information and reference relationship."),(0,i.kt)("h3",{id:"scopedata"},"ScopeData"),(0,i.kt)("p",null,"The design idea of ",(0,i.kt)("inlineCode",{parentName:"p"},"ScopeData")," is actually similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"SymbolData"),", it stores ",(0,i.kt)("inlineCode",{parentName:"p"},"Scope")," with different types and using ",(0,i.kt)("inlineCode",{parentName:"p"},"ScopeRef")," to access them."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Default, Debug, Clone)]\npub struct ScopeData {\n    /// map pkgpath to root_scope\n    pub(crate) root_map: IndexMap<String, ScopeRef>,\n    pub(crate) locals: generational_arena::Arena<LocalSymbolScope>,\n    pub(crate) roots: generational_arena::Arena<RootSymbolScope>,\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"pub trait Scope {\n    type SymbolData;\n    fn get_filename(&self) -> &str;\n    fn get_parent(&self) -> Option<ScopeRef>;\n    fn get_children(&self) -> Vec<ScopeRef>;\n\n    fn contains_pos(&self, pos: &Position) -> bool;\n\n    fn get_owner(&self) -> Option<SymbolRef>;\n    fn look_up_def(&self, ...) -> Option<SymbolRef>;\n\n    fn get_all_defs(&self, ...) -> HashMap<String, SymbolRef>;\n\n    fn dump(&self, scope_data: &ScopeData,\n            symbol_data: &Self::SymbolData) -> Option<String>;\n}\n")),(0,i.kt)("h3",{id:"semanticdb"},"SemanticDB"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"SemanticDB")," is essentially the caching and integration of partial semantic information of semantic objects. Its main function is to accelerate the maintenance and querying of internal information in ",(0,i.kt)("inlineCode",{parentName:"p"},"GlobalState"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Debug, Default, Clone)]\npub struct SemanticDB {\n    pub(crate) file_sema_map: IndexMap<String, FileSemanticInfo>,\n}\n\n#[derive(Debug, Clone)]\npub struct FileSemanticInfo {\n    pub(crate) filename: String,\n    pub(crate) symbols: Vec<SymbolRef>,\n    pub(crate) scopes: Vec<ScopeRef>,\n    pub(crate) symbol_locs: IndexMap<SymbolRef, CachedLocation>,\n    pub(crate) local_scope_locs: IndexMap<ScopeRef, CachedRange>,\n}\n")),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"The new semantic model of KCL essentially only does two things, one is to sink the repeated calculation of the tool chain in the application layer to the semantic layer, and design a corresponding mechanism to simplify the information query, and the other is to re-analyze and cache the information lost in the semantic analysis process. There are several main purposes for doing so:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The calculation process is gathered, and the intrusion of the application layer into the semantic core of the compiler is prevented"),(0,i.kt)("li",{parentName:"ul"},"The cache mechanism is improved, and the implementation of incremental compilation is simplified, so that the query speed is accelerated."),(0,i.kt)("li",{parentName:"ul"},"Improve maintainability by simplifying the development of the application layer tool chain and reducing the handling of Corner Cases by the tool chain")),(0,i.kt)("p",null,"In practice, the above objectives are basically achieved. After migration, the code volume of LSP related functions is reduced by about 60%, and the compilation speed is increased by about 500% after incremental compilation."))}d.isMDXComponent=!0},23455:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/01-a4f6cb66bb886db68b7fb33069e7d7bc.png"},43389:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/02-40975ad67009f082400bce523d31386c.png"},99893:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/03-c2c78dc8d47dd97ac1ae13c114b6c30d.png"},53649:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/04-f50a1ff5aa06ed172217d6176fafdb14.png"},50120:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/05-1a4d9bc6eb1226873d9264609ddff30b.png"}}]);