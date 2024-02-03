"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[39641],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),g=a,k=p["".concat(o,".").concat(g)]||p[g]||d[g]||l;return n?r.createElement(k,s(s({ref:t},u),{},{components:n})):r.createElement(k,s({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=g;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<l;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},83606:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={},s="\u7528 Rust \u91cd\u5199\u7684 KCL LSP",i={permalink:"/zh-CN/blog/2023/07/10/kcl-LSP",editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/blog/2023-07-10-kcl-LSP/index.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2023-07-10-kcl-LSP/index.md",title:"\u7528 Rust \u91cd\u5199\u7684 KCL LSP",description:"KCL \u7684 v0.4.6 \u7248\u672c\u5728\u8bed\u8a00\u3001\u5de5\u5177\u94fe\u3001\u793e\u533a\u96c6\u6210&\u6269\u5c55\u652f\u6301\u7b49\u65b9\u9762\u8fdb\u884c\u4e86\u91cd\u70b9\u66f4\u65b0\u3002\u672c\u6587\u5c06\u4e3a\u60a8\u8be6\u7ec6\u4ecb\u7ecdIDE\u7684\u65b0\u529f\u80fd\u3001LSP\u7684\u4ecb\u7ecd\u3001KCL LSP Server\u7aef\u7684\u8bbe\u8ba1\u548c\u5b9e\u73b0\u4ee5\u53ca\u672a\u6765\u7684\u89c4\u5212\u548c\u671f\u671b\u3002",date:"2023-07-10T00:00:00.000Z",formattedDate:"2023\u5e747\u670810\u65e5",tags:[],readingTime:10.54,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"KCL v0.5.0 \u53d1\u5e03\u65e5\u5fd7",permalink:"/zh-CN/blog/2022-kcl-0.5.0-release-blog"},nextItem:{title:"WAIC 2023 \u4f1a\u8bae KCL \u4ecb\u7ecd\u5185\u5bb9",permalink:"/zh-CN/blog/2023-03-26-kcl-os2atc-meeting"}},o={authorsImageUrls:[]},c=[{value:"IDE\u7684\u65b0\u7279\u6027",id:"ide\u7684\u65b0\u7279\u6027",level:2},{value:"\u4ec0\u4e48\u662f LSP\uff1f",id:"\u4ec0\u4e48\u662f-lsp",level:2},{value:"\u4e3a\u4ec0\u4e48\u7528 Rust \u91cd\u5199",id:"\u4e3a\u4ec0\u4e48\u7528-rust-\u91cd\u5199",level:2},{value:"KCL LSP Server\u7684\u8bbe\u8ba1\u4e0e\u5b9e\u73b0",id:"kcl-lsp-server\u7684\u8bbe\u8ba1\u4e0e\u5b9e\u73b0",level:2},{value:"\u9047\u5230\u7684\u95ee\u9898",id:"\u9047\u5230\u7684\u95ee\u9898",level:2},{value:"1. \u4e3a\u4ec0\u4e48\u9700\u8981\u865a\u62df\u6587\u4ef6\u7cfb\u7edf\uff1f",id:"1-\u4e3a\u4ec0\u4e48\u9700\u8981\u865a\u62df\u6587\u4ef6\u7cfb\u7edf",level:3},{value:"2. \u5982\u4f55\u5904\u7406\u4e0d\u5b8c\u6574\u7684\u4ee3\u7801\uff1f",id:"2-\u5982\u4f55\u5904\u7406\u4e0d\u5b8c\u6574\u7684\u4ee3\u7801",level:3},{value:"\u603b\u7ed3\u4e0e\u5c55\u671b",id:"\u603b\u7ed3\u4e0e\u5c55\u671b",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...l}=e;return(0,a.kt)(p,(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"KCL \u7684 v0.4.6 \u7248\u672c\u5728\u8bed\u8a00\u3001\u5de5\u5177\u94fe\u3001\u793e\u533a\u96c6\u6210&\u6269\u5c55\u652f\u6301\u7b49\u65b9\u9762\u8fdb\u884c\u4e86\u91cd\u70b9\u66f4\u65b0\u3002\u672c\u6587\u5c06\u4e3a\u60a8\u8be6\u7ec6\u4ecb\u7ecdIDE\u7684\u65b0\u529f\u80fd\u3001LSP\u7684\u4ecb\u7ecd\u3001KCL LSP Server\u7aef\u7684\u8bbe\u8ba1\u548c\u5b9e\u73b0\u4ee5\u53ca\u672a\u6765\u7684\u89c4\u5212\u548c\u671f\u671b\u3002"),(0,a.kt)("h2",{id:"ide\u7684\u65b0\u7279\u6027"},"IDE\u7684\u65b0\u7279\u6027"),(0,a.kt)("p",null,"\u5728\u8fd9\u6b21\u66f4\u65b0\u4e2d\uff0c\u6211\u4eec\u53d1\u5e03\u4e86\u5168\u65b0 KCL VSCode \u63d2\u4ef6\uff0c\u5e76\u4e14\u7528 Rust \u91cd\u5199\u4e86 LSP \u7684 Server \u7aef\u3002\u6211\u4eec\u63d0\u4f9b\u4e86 IDE \u4e2d\u5e38\u7528\u7684\u4ee3\u7801\u8f85\u52a9\u529f\u80fd\uff0c\u5982\u9ad8\u4eae\u3001\u8df3\u8f6c\u3001\u8865\u5168\u3001Outline\u3001\u60ac\u505c\u3001\u9519\u8bef\u63d0\u793a\u7b49\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u9ad8\u4eae:"),(0,a.kt)("img",{alt:"Highlight",src:n(31088).Z,width:"1312",height:"782"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u8df3\u8f6c:"),(0,a.kt)("img",{alt:"Goto Definition",src:n(33910).Z,width:"1312",height:"780"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u8865\u5168:"),(0,a.kt)("img",{alt:"Completion",src:n(25050).Z,width:"1312",height:"780"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Outline:"),(0,a.kt)("img",{alt:"Outline",src:n(73556).Z,width:"1312",height:"780"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Hover:"),(0,a.kt)("img",{alt:"Hover",src:n(86818).Z,width:"1312",height:"780"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Diagnostics:"),(0,a.kt)("img",{alt:"Diagnostics",src:n(80427).Z,width:"1312",height:"780"}))),(0,a.kt)("p",null,"\u6b22\u8fce\u5230 ",(0,a.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/tools/Ide/vs-code/"},"KCL VSCode \u63d2\u4ef6")," \u4e86\u89e3\u66f4\u591a\ud83d\udc4f\ud83c\udffb\ud83d\udc4f\ud83c\udffb\ud83d\udc4f\ud83c\udffb"),(0,a.kt)("h2",{id:"\u4ec0\u4e48\u662f-lsp"},"\u4ec0\u4e48\u662f LSP\uff1f"),(0,a.kt)("p",null,"\u5728\u8fd9\u6b21\u66f4\u65b0\u4e2d\uff0c\u6211\u4eec\u57fa\u4e8e LSP \u5b9e\u73b0\u4e86\u4ee5\u4e0a\u80fd\u529b\u3002LSP \u6307\u7684\u662f Language Server Protocol\uff0c\u5b83\u662f\u7531\u5fae\u8f6f\u5728 2016 \u5e74\u63a8\u51fa\u7684\u4e00\u79cd\u7528\u4e8e\u7f16\u7a0b\u8bed\u8a00\u5de5\u5177\u7684\u534f\u8bae\u3002\u501f\u7528\u4e00\u5f20\u56fe\uff0c\u5f88\u5bb9\u6613\u5c31\u53ef\u4ee5\u7406\u89e3 LSP\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"LSP",src:n(11749).Z,width:"1162",height:"538"})),(0,a.kt)("p",null,"\u901a\u8fc7 LSP \uff0c\u7f16\u8f91\u5668\u548c IDE \u53ef\u4ee5\u901a\u8fc7 JSON-RPC \u901a\u4fe1\u534f\u8bae\u4e0e\u540e\u7aef\u8fd0\u884c\u7684\u8bed\u8a00\u670d\u52a1\u5668(Server \u7aef)\u8fdb\u884c\u901a\u4fe1\u3002\u8bed\u8a00\u670d\u52a1\u5668\u53ef\u4ee5\u63d0\u4f9b\u4ee3\u7801\u5206\u6790\u3001\u81ea\u52a8\u8865\u5168\u3001\u8bed\u6cd5\u9ad8\u4eae\u3001\u5b9a\u4e49\u8df3\u8f6c\u7b49\u529f\u80fd\u3002\u57fa\u4e8e LSP\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u5728\u4e0d\u540c\u7684\u7f16\u8f91\u5668\u548c IDE \u4e4b\u95f4\u8fc1\u79fb\uff0c\u4f7f\u5f97\u8bed\u8a00\u5de5\u5177\u7684\u5f00\u53d1\u4ece M(\u8bed\u8a00\u6570\u91cf) ","*"," N(\u7f16\u8f91\u5668/IDE\u6570\u91cf) \u964d\u4f4e\u4e3a M + N\u3002"),(0,a.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u7528-rust-\u91cd\u5199"},"\u4e3a\u4ec0\u4e48\u7528 Rust \u91cd\u5199"),(0,a.kt)("p",null,"KCL \u7f16\u8bd1\u5668\u548c\u5176\u4ed6\u5de5\u5177\u6700\u521d\u7531 Python \u5b9e\u73b0\uff0c\u56e0\u4e3a\u6027\u80fd\u539f\u56e0\uff0c\u6211\u4eec\u7528 Rust \u8bed\u8a00\u91cd\u5199\u4e86\u7f16\u8bd1\u5668\u3002\u5728\u6b64\u4e4b\u540e\uff0c\u6211\u4eec\u4f7f\u7528 Rust \u9010\u6b65\u91cd\u5199\u4e86 KCL \u7684\u5176\u4ed6\u5de5\u5177\uff0c\u5982\u6d4b\u8bd5\u5de5\u5177\u3001Format \u5de5\u5177\u7b49\u3002\u5728\u8fd9\u6b21\u66f4\u65b0\u4e2d\uff0c\u6211\u4eec\u7528 Rust \u91cd\u5199\u4e86 LSP Server \u7aef\uff0c\u5176\u4e3b\u8981\u8003\u8651\u56e0\u7d20\u4e5f\u662f\u6027\u80fd\u3002"),(0,a.kt)("p",null,"\u8fc7\u53bb\uff0cPython \u7248\u672c\u7684 Server \u7aef\u5728\u5904\u7406\u4e00\u4e9b\u590d\u6742\u7684\u573a\u666f\uff08\u7f16\u8bd1\u6587\u4ef6\u6570\u91cf\u8d85\u8fc7200\u4e2a\uff09\u65f6\uff0c\u5904\u7406\u4e00\u4e2a\u8df3\u8f6c\u7684\u8bf7\u6c42\uff0cServer \u7aef\u4ece\u63a5\u6536\u5230\u8bf7\u6c42\u5230\u8ba1\u7b97\u7ed3\u679c\u5e76\u54cd\u5e94\uff0c\u65f6\u95f4\u957f\u8fbe 6 \u79d2\u4ee5\u4e0a\uff0c\u51e0\u4e4e\u662f\u4e0d\u53ef\u7528\u72b6\u6001\u3002\u7531\u4e8e Server \u7aef\u7684\u5b9e\u73b0\u4e3b\u8981\u57fa\u4e8e\u8bed\u8a00\u7f16\u8bd1\u5668\u524d\u4e2d\u7aef\u7684\u8bcd\u6cd5\u89e3\u6790\u548c\u8bed\u4e49\u5206\u6790\uff0c\u5728\u6211\u4eec\u4f7f\u7528 Rust \u91cd\u5199\u4ee5\u540e\uff0c\u8fd9\u90e8\u5206\u6027\u80fd\u5206\u522b\u63d0\u5347\u4e86 20 \u548c 40 \u500d\uff0c \u5e26\u6765\u7684\u663e\u8457\u7ed3\u679c\u5c31\u662f Server \u7aef\u7684\u54cd\u5e94\u65f6\u95f4\u5f97\u5230\u4e86\u5de8\u5927\u63d0\u5347\uff0c\u5bf9\u4e8e\u540c\u6837\u7684\u573a\u666f\uff0c\u54cd\u5e94\u65f6\u95f4\u7f29\u77ed\u81f3 100 \u6beb\u79d2\u5de6\u53f3\u3002\u800c\u5bf9\u4e8e\u4e00\u4e9b\u7b80\u5355\u7684\u573a\u666f\uff0c\u54cd\u5e94\u65f6\u95f4\u53ea\u6709\u51e0\u6beb\u79d2\uff0c\u505a\u5230\u4e86\u7528\u6237\u65e0\u611f\u3002"),(0,a.kt)("h2",{id:"kcl-lsp-server\u7684\u8bbe\u8ba1\u4e0e\u5b9e\u73b0"},"KCL LSP Server\u7684\u8bbe\u8ba1\u4e0e\u5b9e\u73b0"),(0,a.kt)("p",null,"KCL LSP Server \u7684\u8bbe\u8ba1\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"KCL-LSP",src:n(24289).Z,width:"627",height:"421"})),(0,a.kt)("p",null,"\u4e3b\u8981\u6d41\u7a0b\u53ef\u4ee5\u5206\u4e3a\u51e0\u4e2a\u9636\u6bb5\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5efa\u7acb\u8fde\u63a5\uff0c\u521d\u59cb\u5316 LSP \u80fd\u529b\u3002\u5728 IDE \u7684 Client \u7aef\uff0c\u6253\u5f00\u7279\u5b9a\u6587\u4ef6\uff08KCL\u7684 ","*",".k\uff09\u65f6\uff0cIDE \u4f1a\u542f\u52a8\u672c\u5730\u7684 kcl_language_server \u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u542f\u52a8 Server \u7aef\u3002\u8fd9\u4e2a\u6587\u4ef6\u4e0e KCL \u4e00\u8d77\u53d1\u5e03\uff0c\u5e76\u5b89\u88c5\u5728 KCL \u7684 bin \u76ee\u5f55\u4e0b\u3002Server \u542f\u52a8\u540e\u4f1a\u5efa\u7acb standard IO \u7684 Connection\uff0c\u5e76\u7b49\u5f85 Client \u53d1\u9001\u7684\u521d\u59cb\u5316\u8bf7\u6c42\u3002Server \u7aef\u63a5\u6536\u521d\u59cb\u5316\u8bf7\u6c42\u540e\u4f1a\u5b9a\u4e49 Server \u7aef\u4fe1\u606f\u548c\u80fd\u529b\uff0c\u5e76\u8fd4\u56de\u7ed9 Client\uff0c\u4ee5\u6b64\u5b8c\u6210 LSP \u7684\u521d\u59cb\u5316\u8fde\u63a5\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5efa\u7acb\u8fde\u63a5\u540e\uff0cServer \u7aef\u4f1a\u542f\u52a8\u4e00\u4e2a\u8f6e\u8be2\u51fd\u6570\uff0c\u4e0d\u65ad\u63a5\u6536\u6765\u81ea Client \u7684 LSP Message\uff0c\u4f8b\u5982 Notification\uff08\u6253\u5f00/\u5173\u95ed/\u53d8\u66f4/\u5220\u9664\u6587\u4ef6\u7b49\uff09\u548c Request\uff08\u8df3\u8f6c\u3001\u60ac\u505c\u7b49\uff09\uff0c\u4ee5\u53ca\u6765\u81ea Server \u7aef\u81ea\u8eab\u7684 Task\u3002\u5e76\u7edf\u4e00\u5c01\u88c5\u6210\u4e8b\u4ef6\uff08Event\uff09\u4ea4\u7ed9\u4e0b\u4e00\u6b65\u5904\u7406\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5bf9\u4e8e\u5404\u79cd\u4e8b\u4ef6\uff0c\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u5904\u7406\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Rust"},"/// Handles an event from one of the many sources that the language server subscribes to.\nfn handle_event(&mut self, event: Event) -> anyhow::Result<()> {\n    // 1. Process the incoming event\n    match event {\n        Event::Task(task) => self.handle_task(task)?,\n        Event::Lsp(msg) => match msg {\n            lsp_server::Message::Request(req) => self.on_request(req, start_time)?,\n            lsp_server::Message::Notification(not) => self.on_notification(not)?,\n            _ => {}\n        },\n    };\n\n    // 2. Process changes\n    let state_changed: bool = self.process_vfs_changes();\n\n    // 3. Handle Diagnostics\n    if state_changed{\n        let mut snapshot = self.snapshot();\n        let task_sender = self.task_sender.clone();\n        // Spawn the diagnostics in the threadpool\n        self.thread_pool.execute(move || {\n            handle_diagnostics(snapshot, task_sender)\uff1f;\n        });\n    }\n\n    Ok(())\n}\n")),(0,a.kt)("p",null,"3.1 \u4efb\u52a1\u5206\u53d1\uff1a\u6839\u636e\u4efb\u52a1\u7c7b\u578b\uff0c\u505a\u51fd\u6570\u5206\u53d1\u3002\u5728\u5b50\u51fd\u6570\u4e2d\uff0c\u4f1a\u8fdb\u4e00\u6b65\u57fa\u4e8e Request \u6216 Notification \u7684\u7c7b\u578b\u7ee7\u7eed\u5206\u53d1\u5230\u6700\u7ec8\u7684\u5904\u7406\u51fd\u6570\u4e2d\uff0c\u5982\u5904\u7406\u6587\u4ef6\u53d8\u66f4\u3001\u5904\u7406\u8df3\u8f6c\u8bf7\u6c42\u7b49\u3002\u8fd9\u4e9b\u51fd\u6570\u4f1a\u6839\u636e\u57fa\u4e8e\u7f16\u8bd1\u5668\u4e2d\u524d\u7aef\u7f16\u8bd1\u51fa\u7684\u8bed\u4e49\u6a21\u578b\uff08AST\uff0c\u7b26\u53f7\u8868\uff0c\u9519\u8bef\u4fe1\u606f\u7b49\uff09\u505a\u5206\u6790\uff0c\u8ba1\u7b97\u751f\u6210\u5bf9\u5e94\u7684 Response\uff08\u5982\u8df3\u8f6c\u8bf7\u6c42\u7684\u76ee\u6807\u4f4d\u7f6e\uff09\u3002"),(0,a.kt)("p",null,"3.2 \u5904\u7406\u53d8\u66f4\uff1a\u7528\u6237\u5728\u4fee\u6539\u4ee3\u7801\u6216\u66f4\u6539\u6587\u4ef6\u65f6\uff0c\u4f1a\u53d1\u9001\u5bf9\u5e94\u7684 Notification\u3002\u5728\u524d\u4e00\u6b65\u7684\u5904\u7406\u4e2d\uff0c\u4f1a\u5c06\u53d8\u66f4\u4fdd\u5b58\u5728\u865a\u62df\u6587\u4ef6\u7cfb\u7edf\uff08VFS\uff09\u4e2d\u3002Server \u7aef\u4f1a\u6839\u636e\u65b0\u7684\u6e90\u4ee3\u7801\uff0c\u8fdb\u884c\u91cd\u65b0\u7f16\u8bd1\uff0c\u4fdd\u5b58\u65b0\u7684\u8bed\u4e49\u6a21\u578b\uff0c\u4ee5\u4f9b\u4e0b\u4e00\u4e2a\u8bf7\u6c42\u505a\u5904\u7406\u3002"),(0,a.kt)("p",null,"3.3 \u9519\u8bef\u5904\u7406\uff1a\u8fd9\u91cc\u7684\u9519\u8bef\u5e76\u975e\u6307 Server \u7aef\u7684\u8fd0\u884c\u9519\u8bef\uff0c\u800c\u662f\u4ee3\u7801\u7f16\u8bd1\u4e2d\u7684\u8bed\u6cd5\u3001\u8bed\u4e49\u9519\u8bef\uff0c\u7f16\u8bd1\u8b66\u544a\u7b49\u3002Client \u7aef\u5e76\u6ca1\u6709\u5bf9\u5e94\u7684\u8bf7\u6c42\u7c7b\u578b\u6765\u8bf7\u6c42\u8fd9\u4e9b\u9519\u8bef\uff0c\u800c\u662f\u7531 Server \u7aef\u4e3b\u52a8\u53d1\u9001 Diagnostics\u3002\u56e0\u6b64\uff0c\u5728\u53d1\u751f\u53d8\u66f4\u540e\uff0c\u540c\u6b65\u5730\u5c06\u9519\u8bef\u4fe1\u606f\u66f4\u65b0\u81f3 Client \u7aef\u3002"),(0,a.kt)("h2",{id:"\u9047\u5230\u7684\u95ee\u9898"},"\u9047\u5230\u7684\u95ee\u9898"),(0,a.kt)("h3",{id:"1-\u4e3a\u4ec0\u4e48\u9700\u8981\u865a\u62df\u6587\u4ef6\u7cfb\u7edf"},"1. \u4e3a\u4ec0\u4e48\u9700\u8981\u865a\u62df\u6587\u4ef6\u7cfb\u7edf\uff1f"),(0,a.kt)("p",null,"\u5728\u6700\u521d\u7684\u8bbe\u8ba1\u4e2d\uff0c\u5e76\u6ca1\u6709\u8003\u8651\u4f7f\u7528\u865a\u62df\u6587\u4ef6\u7cfb\u7edf\u3002\u6211\u4eec\u6bcf\u6b21\u4ece\u6587\u4ef6\u7cfb\u7edf\u4e2d\u83b7\u53d6\u6e90\u4ee3\u7801\uff0c\u8fdb\u884c\u7f16\u8bd1\u548c\u5206\u6790\u3002\u5bf9\u4e8e\u4e00\u4e9b\u201c\u9759\u6001\u201d\u7684\u4efb\u52a1\uff0c\u5982\u8df3\u8f6c\uff0c\u53ef\u4ee5\u5728\u53d8\u66f4\u4ee3\u7801\u540e\u4fdd\u5b58\u5230\u6587\u4ef6\u7cfb\u7edf\uff0c\u7136\u540e\u518d\u8fdb\u884c\u8df3\u8f6c\u7684\u64cd\u4f5c\u3002\u914d\u5408\u5230 VS Code \u7684\u81ea\u52a8\u4fdd\u5b58\u529f\u80fd\uff0c\u4f53\u9a8c\u4e0a\u5e76\u6ca1\u6709\u660e\u663e\u7684\u5dee\u8ddd\u3002\u4f46\u5bf9\u4e8e\u4ee3\u7801\u8865\u5168\u8fd9\u4e00\u529f\u80fd\uff0cIDE \u4e2d\u8f93\u5165\u7684\u8865\u5168trigger\uff08\u5982 \u201c.\u201d\uff09\u4f1a\u89e6\u53d1\u6587\u4ef6\u53d8\u66f4\u7684\u901a\u77e5\u548c\u4ee3\u7801\u8865\u5168\u7684\u8bf7\u6c42\uff0c\u4f46\u5bf9\u5e94\u7684\u4ee3\u7801\u8fd8\u672a\u4fdd\u5b58\u5230\u6587\u4ef6\u7cfb\u7edf\u4e2d\uff0c\u7f16\u8bd1\u540e\u7684\u8bed\u4e49\u6a21\u578b\u65e0\u6cd5\u505a\u5bf9\u5e94\u7684\u5206\u6790\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u501f\u52a9 Rust Analyzer \u5bf9\u5e94\u7684 vfs \u7684create\uff0c\u5728 Server \u7aef\u5f15\u5165\u4e86\u865a\u62df\u6587\u4ef6\u7cfb\u7edf\uff0c\u5c06\u7f16\u8bd1\u7684\u5165\u53e3\u4ece\u6587\u4ef6\u8def\u5f84\u53d8\u4e3a\u4e86 source code\u3002Client \u7aef\u8f93\u5165\u4ee3\u7801\u540e\uff0c\u6587\u4ef6\u53d8\u66f4\u7684\u901a\u77e5\u4f1a\u5148\u66f4\u65b0\u865a\u62df\u6587\u4ef6\u7cfb\u7edf\uff0c\u91cd\u65b0\u7f16\u8bd1\u6587\u4ef6\uff0c\u751f\u6210\u65b0\u7684\u8bed\u4e49\u6a21\u578b\uff0c\u7136\u540e\u518d\u5904\u7406\u8865\u5168\u8bf7\u6c42\u3002"),(0,a.kt)("h3",{id:"2-\u5982\u4f55\u5904\u7406\u4e0d\u5b8c\u6574\u7684\u4ee3\u7801"},"2. \u5982\u4f55\u5904\u7406\u4e0d\u5b8c\u6574\u7684\u4ee3\u7801\uff1f"),(0,a.kt)("p",null,"\u6211\u4eec\u9047\u5230\u7684\u53e6\u4e00\u4e2a\u6bd4\u8f83\u5927\u7684\u95ee\u9898\u662f\u5982\u4f55\u5904\u7406\u4e0d\u5b8c\u6574\u7684\u4ee3\u7801\u3002\u540c\u6837\u7684\uff0c\u5bf9\u4e8e\u8df3\u8f6c\u8fd9\u7c7b\u201c\u9759\u6001\u201d\u7684\u4efb\u52a1\uff0c\u53ef\u4ee5\u5047\u5b9a\u4ee3\u7801\u662f\u5b8c\u6574\u3001\u6b63\u786e\u7684\u3002\u4f46\u5bf9\u4e8e\u8865\u5168\u64cd\u4f5c\uff0c\u5982\u4ee5\u4e0b\u4ee3\u7801\uff0c\u5e0c\u671b\u5728\u8f93\u5165.\u540e\uff0c\u8865\u5168\u5b57\u7b26\u4e32\u7684\u51fd\u6570\u3002\u5bf9\u4e8e\u7f16\u8bd1\u6d41\u7a0b\uff0c\u7b2c\u4e8c\u884c\u5b9e\u9645\u4e0a\u662f\u4e0d\u5b8c\u6574\u7684\u4ee3\u7801\uff0c\u65e0\u6cd5\u7f16\u8bd1\u51fa\u6b63\u5e38\u7684 AST \u6811\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Rust"},'s: str = "hello kcl"\nlen = s.\n')),(0,a.kt)("p",null,"\u4e3a\u6b64\uff0c\u6211\u4eec\u5728 KCL \u7684\u7f16\u8bd1\u4e2d\u5b9e\u73b0\u4e86\u8bed\u6cd5\u548c\u8bed\u4e49\u4e0a\u7684\u591a\u79cd\u9519\u8bef\u6062\u590d\uff0c\u4fdd\u8bc1\u7f16\u8bd1\u8fc7\u7a0b\u59cb\u7ec8\u80fd\u4ea7\u751f\u5b8c\u6574\u7684 AST \u548c\u7b26\u53f7\u8868\u3002\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u65b0\u589e\u4e86\u4e00\u4e2a\u8868\u793a\u7a7a\u7684 AST \u8282\u70b9\u4f5c\u4e3a\u5360\u4f4d\u7b26\uff0c\u4f7f\u5f97\u7b2c\u4e8c\u884c\u80fd\u591f\u751f\u6210\u5b8c\u6574\u7684 AST\u3002\u5728\u5904\u7406\u8865\u5168\u7684\u8bf7\u6c42\u65f6\uff0c\u4f1a\u6839\u636e s \u7684\u7c7b\u578b\u548c\u5176\u4ed6\u8bed\u4e49\u4fe1\u606f\uff0c\u8865\u5168\u51fd\u6570\u540d\u3001schema attr \u6216 pkg \u4e2d\u5b9a\u4e49\u7684 schema \u540d\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Rust Analyzer architecture:"),(0,a.kt)("p",{parentName:"blockquote"},"Architecture Invariant: parsing never fails, the parser produces (T, Vec","<","Error",">",") rather than Result","<","T, Error",">",".")),(0,a.kt)("h2",{id:"\u603b\u7ed3\u4e0e\u5c55\u671b"},"\u603b\u7ed3\u4e0e\u5c55\u671b"),(0,a.kt)("p",null,"KCL \u7684 IDE \u63d2\u4ef6\u76ee\u524d\u5df2\u7ecf\u5b9e\u73b0\u9ad8\u4eae\u3001\u8df3\u8f6c\u3001\u8865\u5168\u3001Outline\u3001\u60ac\u505c\u3001\u9519\u8bef\u63d0\u793a\u7b49\u529f\u80fd\u3002\u8fd9\u4e9b\u529f\u80fd\u63d0\u5347\u4e86 KCL \u7528\u6237\u7684\u5f00\u53d1\u6548\u7387\u3002\u7136\u800c\uff0c\u4f5c\u4e3a\u4e00\u6b3e IDE \u63d2\u4ef6\uff0c\u5b83\u7684\u529f\u80fd\u8fd8\u4e0d\u591f\u5b8c\u6574\u3002\u5728\u672a\u6765\u7684\u5f00\u53d1\u4e2d\uff0c\u6211\u4eec\u4f1a\u7ee7\u7eed\u5b8c\u5584\uff0c\u672a\u6765\u7684\u5de5\u4f5c\u6709\u4ee5\u4e0b\u51e0\u4e2a\u65b9\u5411\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u66f4\u591a\u7684\u8bed\u8a00\u80fd\u529b\uff1a\u63d0\u4f9b\u66f4\u591a\u7684\u529f\u80fd\uff0c\u5982\u4ee3\u7801\u91cd\u6784\uff0c\u9519\u8bef\u7684quick fix\uff0c\u4ee3\u7801 fmt\u7b49\uff0c\u8fdb\u4e00\u6b65\u5b8c\u5584\u529f\u80fd\uff0c\u63d0\u5347\u5f00\u53d1\u6548\u7387"),(0,a.kt)("li",{parentName:"ul"},"\u66f4\u591a\u7684 IDE \u63a5\u5165\uff1a\u76ee\u524d\uff0cKCL \u867d\u7136\u63d0\u4f9b\u4e86 LSP\uff0c\u53ea\u63a5\u5165\u4e86 VS Code\uff0c\u672a\u6765\u4f1a\u57fa\u4e8e LSP \u7684\u80fd\u529b\u4e3a KCL \u7528\u6237\u63d0\u4f9b\u66f4\u591a\u9009\u62e9\u3002"),(0,a.kt)("li",{parentName:"ul"},"AI \u80fd\u529b\u7684\u96c6\u6210\uff1a\u76ee\u524d\uff0cChatGPT \u98ce\u9761\u5168\u7f51\uff0c\u5404\u884c\u5404\u4e1a\u90fd\u5728\u5173\u6ce8\u3002\u6211\u4eec\u4e5f\u5728\u63a2\u7d22 AI\xd7KCL \u7684\u7ed3\u5408\uff0c\u63d0\u4f9b\u66f4\u667a\u80fd\u7684\u7814\u53d1\u4f53\u9a8c\u3002\u603b\u4e4b\uff0c\u6211\u4eec\u4f1a\u7ee7\u7eed\u5b8c\u5584\u548c\u4f18\u5316 KCL \u7684 IDE \u63d2\u4ef6\uff0c\u8ba9\u5b83\u66f4\u52a0\u6210\u719f\u548c\u5b9e\u7528\u3002\u4e3aKCL\u7528\u6237\u5e26\u6765\u66f4\u52a0\u65b9\u4fbf\u548c\u9ad8\u6548\u7684\u5f00\u53d1\u4f53\u9a8c\u3002\n\u5982\u679c\u60a8\u6709\u66f4\u591a\u7684\u60f3\u6cd5\u548c\u9700\u6c42\uff0c\u6b22\u8fce\u5728 KCL Github \u4ed3\u5e93\u53d1\u8d77 Issue \u6216\u8ba8\u8bba\uff0c\u4e5f\u6b22\u8fce\u52a0\u5165\u6211\u4eec\u7684\u793e\u533a\u8fdb\u884c\u4ea4\u6d41 \ud83d\ude4c \ud83d\ude4c \ud83d\ude4c")))}d.isMDXComponent=!0},24289:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/kcl-LSP-789ffa07d0239265e5851188a8ca5327.png"},11749:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/lsp-c853f0881ecd058c34768312009038da.png"},25050:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Completion-584771cd4bed237e74d3da3decaa9757.gif"},80427:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Diagnostics-716fc3b938a94e4db2cbafaad4f4174d.gif"},33910:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/GotoDef-0875243eacd6b76e49b7a5b95cb9ce55.gif"},31088:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Highlight-ddacdde9f18d504f7a103583c2f76b86.png"},86818:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Hover-339697d17ca0d4f167b1b1a904c9f1aa.gif"},73556:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Outline-c443b2ee1e35746795e7b09c11f3f4da.gif"}}]);