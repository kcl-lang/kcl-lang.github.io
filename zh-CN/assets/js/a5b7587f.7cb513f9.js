"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[94404],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>c});var l=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=l.createContext({}),u=function(e){var n=l.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=u(e.components);return l.createElement(o.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},k=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=u(t),k=r,c=s["".concat(o,".").concat(k)]||s[k]||m[k]||a;return t?l.createElement(c,i(i({ref:n},d),{},{components:t})):l.createElement(c,i({ref:n},d))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=k;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[s]="string"==typeof e?e:r,i[1]=p;for(var u=2;u<a;u++)i[u]=t[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}k.displayName="MDXCreateElement"},94240:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var l=t(87462),r=(t(67294),t(3905));const a={title:"builtin",sidebar_position:1},i=void 0,p={unversionedId:"reference/model/builtin",id:"version-0.5.4/reference/model/builtin",title:"builtin",description:"KCL \u63d0\u4f9b\u4e86\u4e00\u4e2a\u5185\u7f6e\u7cfb\u7edf\u6a21\u5757\u7684\u5217\u8868\uff0c\u8fd9\u4e9b\u6a21\u5757\u662f\u81ea\u52a8\u52a0\u8f7d\u7684\uff0c\u65e0\u9700\u63d0\u4f9b\u4efb\u4f55\u6a21\u5757\u540d\u79f0\u5373\u53ef\u76f4\u63a5\u4f7f\u7528\u3002\u4f8b\u5982\uff0cprint \u5c31\u662f\u4e00\u4e2a\u5e7f\u6cdb\u4f7f\u7528\u7684\u5185\u7f6e\u6a21\u5757\u63d0\u4f9b\u7684\u51fd\u6570\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.5.4/reference/model/builtin.md",sourceDirName:"reference/model",slug:"/reference/model/builtin",permalink:"/zh-CN/docs/0.5.4/reference/model/builtin",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.4/reference/model/builtin.md",tags:[],version:"0.5.4",lastUpdatedBy:"Peefy",lastUpdatedAt:1706869561,formattedLastUpdatedAt:"2024\u5e742\u67082\u65e5",sidebarPosition:1,frontMatter:{title:"builtin",sidebar_position:1},sidebar:"reference",previous:{title:"\u6982\u89c8",permalink:"/zh-CN/docs/0.5.4/reference/model/overview"},next:{title:"base64",permalink:"/zh-CN/docs/0.5.4/reference/model/base64"}},o={},u=[{value:"\u7c7b\u578b\u8f6c\u6362\u51fd\u6570",id:"\u7c7b\u578b\u8f6c\u6362\u51fd\u6570",level:2},{value:"String \u7c7b\u578b\u6210\u5458\u51fd\u6570",id:"string-\u7c7b\u578b\u6210\u5458\u51fd\u6570",level:2},{value:"print",id:"print",level:2},{value:"multiplyof",id:"multiplyof",level:2},{value:"isunique",id:"isunique",level:2},{value:"len",id:"len",level:2},{value:"abs",id:"abs",level:2},{value:"all_true",id:"all_true",level:2},{value:"any_true",id:"any_true",level:2},{value:"bin",id:"bin",level:2},{value:"hex",id:"hex",level:2},{value:"oct",id:"oct",level:2},{value:"option",id:"option",level:2},{value:"ord",id:"ord",level:2},{value:"sorted",id:"sorted",level:2},{value:"range",id:"range",level:2},{value:"min",id:"min",level:2},{value:"max",id:"max",level:2},{value:"sum",id:"sum",level:2},{value:"pow",id:"pow",level:2},{value:"round",id:"round",level:2},{value:"typeof",id:"typeof",level:2},{value:"zip",id:"zip",level:2}],d={toc:u},s="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(s,(0,l.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"KCL \u63d0\u4f9b\u4e86\u4e00\u4e2a\u5185\u7f6e\u7cfb\u7edf\u6a21\u5757\u7684\u5217\u8868\uff0c\u8fd9\u4e9b\u6a21\u5757\u662f\u81ea\u52a8\u52a0\u8f7d\u7684\uff0c\u65e0\u9700\u63d0\u4f9b\u4efb\u4f55\u6a21\u5757\u540d\u79f0\u5373\u53ef\u76f4\u63a5\u4f7f\u7528\u3002\u4f8b\u5982\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"print")," \u5c31\u662f\u4e00\u4e2a\u5e7f\u6cdb\u4f7f\u7528\u7684\u5185\u7f6e\u6a21\u5757\u63d0\u4f9b\u7684\u51fd\u6570\u3002"),(0,r.kt)("h2",{id:"\u7c7b\u578b\u8f6c\u6362\u51fd\u6570"},"\u7c7b\u578b\u8f6c\u6362\u51fd\u6570"),(0,r.kt)("p",null,"KCL\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"bool"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"int"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"float"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"str"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"list"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"dict"),"\u7b49\u7c7b\u578b\u6709\u5185\u7f6e\u540c\u540d\u7684\u8f6c\u6362\u51fd\u6570\u3002\u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"int")," \u4e0d\u4ec5\u4ec5\u53ef\u4ee5\u7528\u4e8e\u622a\u65ad\u6d6e\u70b9\u6570\uff0c\u4e5f\u53ef\u4ee5\u7528\u6765\u5c06\u5b57\u7b26\u4e32\u8f6c\u5316\u4e3a\u6574\u6570\uff08\u89e3\u6790\u65f6\u4e3a10\u8fdb\u5236\uff0c\u4e5f\u53ef\u4ee5\u5236\u5b9a\u5176\u4ed6\u503c\uff09\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u662f\u7c7b\u578b\u76f8\u5173\u51fd\u6570\u5e38\u89c1\u7684\u7528\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'b1 = bool(1)  # true\nb2 = bool(1.5)  # true\nb3 = bool("true")  # true\nb4 = bool("")  # false\nb5 = bool([])  # false\nb6 = bool({})  # false\n\ni1 = int("11")  # 11\ni2 = int("11", base=8)  # 9\ni3 = int("11", base=2)  # 3\n\nf1 = float(1)  # 1.0\nf2 = float("1.5")  # 1.5\n\ns1 = str(1)  # 1\n\nl1 = list([1, 2, 3])\n')),(0,r.kt)("h2",{id:"string-\u7c7b\u578b\u6210\u5458\u51fd\u6570"},"String \u7c7b\u578b\u6210\u5458\u51fd\u6570"),(0,r.kt)("p",null,"\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/lang/spec/datatypes"},"String \u6587\u6863")),(0,r.kt)("h2",{id:"print"},"print"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"print(*args:any, end:str='\\n')")),(0,r.kt)("p",null,"\u5185\u7f6e\u7684\u6253\u5370\u51fd\u6570\uff0c\u63d0\u4f9b\u4e0d\u540c\u7c7b\u578b\u7684\u53ef\u53d8\u53c2\u6570\u6253\u5370\uff0c\u9ed8\u8ba4\u5728\u7ed3\u5c3e\u6dfb\u52a0\u4e00\u4e2a\u6362\u884c\u7b26\u53f7\u3002\u4ee5\u4e0b\u4e0a\u5e38\u89c1\u7684\u7528\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"print(\"hello KCL\")\nprint()\nprint(None, end=':')\nprint(None)\nprint(True)\nprint(False)\nprint(123)\nprint(123.0)\nprint('abc ${123}')\nprint(\"abc ${456}\")\nprint([1,'a', True])\nprint(1,'a', True)\nprint({})\nprint({a: 123})\n")),(0,r.kt)("p",null,"\u8f93\u51fa\u683c\u5f0f\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"hello KCL\n\nNone:None\nTrue\nFalse\n123\n123.0\nabc 123\nabc 456\n[1, 'a', True]\n1 a True\n{}\n{'a': 123}\n")),(0,r.kt)("p",null,"\u5982\u679c\u4e0d\u5e0c\u671b\u5728\u9ed8\u8ba4\u6362\u884c\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"end=''")," \u547d\u540d\u53c2\u6570\u91cd\u65b0\u6307\u5b9a\u7ed3\u5c3e\u7684\u5b57\u7b26\u4e32\u3002"),(0,r.kt)("h2",{id:"multiplyof"},"multiplyof"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"multiplyof(a:int, b:int) -> bool")),(0,r.kt)("p",null,"\u5224\u65ad\u6574\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," \u662f\u5426\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," \u7684\u6574\u6570\u500d\uff0c\u8fd4\u56de\u5e03\u5c14\u503c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"print(multiplyof(2, 1))  # True\nprint(multiplyof(1, 2))  # False\nprint(multiplyof(0, 1))  # True\nprint(multiplyof(0, 2))  # True\nprint(multiplyof(1, 0))  # Error\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"0")," \u662f\u4efb\u4f55\u6570\u7684\u500d\u6570\u3002\u4f46\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," \u4e0d\u80fd\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"\uff0c\u5426\u5219\u5c06\u629b\u51fa\u5f02\u5e38\u3002"),(0,r.kt)("h2",{id:"isunique"},"isunique"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"isunique(list: [any]) -> bool")),(0,r.kt)("p",null,"\u5224\u65ad\u6570\u7ec4\u4e2d\u662f\u5426\u5b58\u5728\u91cd\u590d\u7684\u5143\u7d20\uff0c\u8fd4\u56de\u5e03\u5c14\u503c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"print(isunique([]))     # True\nprint(isunique([1]))    # True\nprint(isunique([1, 2])) # True\n\nprint(isunique([1, 1]))     # False\nprint(isunique([1, 1.0]))   # False\nprint(isunique([1.1, 1.1])) # False\n\nprint(isunique(['abc', \"abc\"]))      # False\nprint(isunique(['abc', \"a${'bc'}\"])) # False\n")),(0,r.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\u6574\u6570\u548c\u6d6e\u70b9\u6570\u4f1a\u5ffd\u7565\u7c7b\u578b\u5dee\u5f02\uff0c\u6839\u636e\u503c\u662f\u5426\u76f8\u7b49\u5224\u65ad\u3002"),(0,r.kt)("h2",{id:"len"},"len"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"len(x: str | [any] | {:}) -> int")),(0,r.kt)("p",null,"\u8fd4\u56de\u5b57\u7b26\u4e32\u3001\u5217\u8868\u548c\u6570\u7ec4\u7684\u957f\u5ea6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'print(len([])) # 0\nprint(len({})) # 0\n\nprint(len([1]))       # 1\nprint(len({abc:123})) # 1\n\nprint("abc") # 3\n')),(0,r.kt)("p",null,"\u6ce8\uff1a\u4e0d\u652f\u6301\u5bf9 ",(0,r.kt)("inlineCode",{parentName:"p"},"schema")," \u5bf9\u8c61\u8ba1\u7b97\u957f\u5ea6\u3002"),(0,r.kt)("h2",{id:"abs"},"abs"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"abs(x: number) -> number")),(0,r.kt)("p",null,"\u8ba1\u7b97 ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," \u7684\u7edd\u5bf9\u503c\u3002"),(0,r.kt)("h2",{id:"all_true"},"all_true"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"all_true(x:str|[]|{:}) -> bool")),(0,r.kt)("p",null,"\u5224\u65ad\u5217\u8868\u6216\u5b57\u5178\u7c7b\u5168\u90e8\u5143\u7d20\u4e3a\u771f\uff0c\u7528\u6cd5\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"print(all_true([])) # True\nprint(all_true({})) # True\n\nprint(all_true([True])) # True\nprint(all_true([1]))    # True\n\nprint(all_true([True, False])) # False\nprint(all_true([True, None]))  # False\n")),(0,r.kt)("p",null,"\u5f53\u5217\u8868\u4e3a\u7a7a\u65f6\u8fd4\u56de\u771f\u3002"),(0,r.kt)("h2",{id:"any_true"},"any_true"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"any_true(x:str|[]|{:}) -> bool")),(0,r.kt)("p",null,"\u5224\u65ad\u53ef\u8fed\u4ee3\u5bf9\u8c61\u4e2d\u81f3\u5c11\u6709\u4e00\u4e2a\u5143\u7d20\u4e3a\u771f\uff0c\u7528\u6cd5\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"print(any_true([]))  # False\nprint(any_true([1])) # True\n")),(0,r.kt)("h2",{id:"bin"},"bin"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"bin(x:number) -> str")),(0,r.kt)("p",null,"\u8fd4\u56de\u6574\u6570\u7684\u4e8c\u8fdb\u5236\u8868\u793a\u7684\u5b57\u7b26\u4e32\uff0c\u7528\u6cd5\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"print(bin(8)) # 0b1000\n")),(0,r.kt)("h2",{id:"hex"},"hex"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"hex(number)")),(0,r.kt)("p",null,"\u8fd4\u56de\u6574\u6570\u7684\u5341\u516d\u8fdb\u5236\u8868\u793a\u7684\u5b57\u7b26\u4e32\uff0c\u7528\u6cd5\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"print(hex(18)) # 0x12\n")),(0,r.kt)("h2",{id:"oct"},"oct"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"oct(number)")),(0,r.kt)("p",null,"\u8fd4\u56de\u6574\u6570\u7684\u516b\u8fdb\u5236\u8868\u793a\u7684\u5b57\u7b26\u4e32\uff0c\u7528\u6cd5\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"print(oct(10)) # 0o12\n")),(0,r.kt)("h2",{id:"option"},"option"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"option(key:str, type:str='', required=False, default=None, help=\"\") -> any")),(0,r.kt)("p",null,"\u83b7\u53d6\u547d\u4ee4\u884c\u53c2\u6570\u8f93\u5165\u7684\u503c\u3002"),(0,r.kt)("h2",{id:"ord"},"ord"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ord(c) -> int")),(0,r.kt)("p",null,"\u83b7\u53d6\u5b57\u7b26\u7684 Unicode \u7801\u70b9\u503c\uff0c\u7528\u6cd5\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"print(ord('A')) # 65\nprint(ord('B')) # 66\nprint(ord('C')) # 67\n")),(0,r.kt)("h2",{id:"sorted"},"sorted"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sorted(x: []) -> []")),(0,r.kt)("p",null,"\u8fd4\u56de\u6392\u5e8f\u540e\u7684\u5217\u8868\uff0c\u7528\u6cd5\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"_a = []\n_b = [2, 1]\n\n_c = sorted(_a)\n_d = sorted(_b)\n\nprint(_a) # []\nprint(_b) # [2, 1]\nprint(_c) # []\nprint(_d) # [1, 2]\n")),(0,r.kt)("h2",{id:"range"},"range"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"range(start:int, end:int, step=1) -> [int]")),(0,r.kt)("p",null,"\u4ea7\u751f\u8fed\u4ee3\u5217\u8868\uff0c\u7528\u6cd5\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"print(range(1,5))      # [1, 2, 3, 4]\nprint(range(1,5, 2))   # [1, 3]\nprint(range(5, 1, -1)) # [5, 4, 3, 2]\n")),(0,r.kt)("h2",{id:"min"},"min"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"min(x:[number]) -> number")),(0,r.kt)("p",null,"\u8fd4\u56de\u5217\u8868\u4e2d\u6700\u5c0f\u7684\u5143\u7d20\uff0c\u7528\u6cd5\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"print(min([1,2])) # 1\nprint(min([2,1])) # 1\n")),(0,r.kt)("h2",{id:"max"},"max"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"max(x:[number]) -> number")),(0,r.kt)("p",null,"\u8fd4\u56de\u5217\u8868\u4e2d\u6700\u5927\u7684\u5143\u7d20\uff0c\u7528\u6cd5\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"print(max([1,2])) # 2\nprint(max([2,1])) # 2\n")),(0,r.kt)("h2",{id:"sum"},"sum"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sum(x:[number], init_value=0) -> number")),(0,r.kt)("p",null,"\u8fd4\u56de\u5217\u8868\u4e2d\u5168\u90e8\u5143\u7d20\u7684\u548c\uff0c\u7528\u6cd5\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"print(sum([1,2]))       # 3\nprint(sum([2,1], 1000)) # 1003\n")),(0,r.kt)("h2",{id:"pow"},"pow"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pow(x: number, y: number, z: number = None) -> number")),(0,r.kt)("p",null,"\u8ba1\u7b97 ",(0,r.kt)("inlineCode",{parentName:"p"},"x**y"),"\uff0c\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"p"},"z")," \u975e\u7a7a\u5219\u8ba1\u7b97 ",(0,r.kt)("inlineCode",{parentName:"p"},"(x**y)%z"),"\uff0c\u652f\u6301\u6574\u6570\u548c\u6d6e\u70b9\u6570\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u5e38\u89c1\u7684\u7528\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"print(pow(2,3))    # 8\nprint(pow(2, 3, 5)) # 8%5 == 3\n\nprint(pow(2, 0.5)) # 1.414\n")),(0,r.kt)("h2",{id:"round"},"round"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"round(number: int|float, ndigits:int|None) -> float | int")),(0,r.kt)("p",null,"\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," \u7684\u56db\u820d\u4e94\u5165\u8fd1\u4f3c\u503c\u3002\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"p"},"ndigits")," \u975e ",(0,r.kt)("inlineCode",{parentName:"p"},"None")," \u5219\u8fd4\u56de\u6d6e\u70b9\u6570\u5e76\u4fdd\u7559\u6307\u5b9a\u4f4d\u6570\u7684\u5c0f\u6570\uff08\u4e0d\u80fd\u4e3a\u8d1f\u6570\uff09\uff0c\u5426\u5219\u8fd4\u56de\u6574\u6570\u7ed3\u6784\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u662f\u5e38\u7528\u7684\u7528\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"print(round(1))   # 1\nprint(round(1.4)) # 1\nprint(round(1.5)) # 2\n\nprint(round(1.5555, 1)) # 1.6\nprint(round(1.5555, 2)) # 1.56\n\nprint(round(1.5555))    # 2\nprint(round(1.5555, 0)) # 2.0\n")),(0,r.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"ndigits")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"None")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," \u7684\u533a\u522b\u662f\u524d\u7f00\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"int")," \u7c7b\u578b\u3001\u540e\u8005\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"float")," \u7c7b\u578b\u3002"),(0,r.kt)("h2",{id:"typeof"},"typeof"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"typeof(x: any, full_name: bool = False) -> str")),(0,r.kt)("p",null,"\u8f93\u51fa ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," \u5728\u8fd0\u7b97\u65f6\u7684\u7c7b\u578b\u3002\u5f53 ",(0,r.kt)("inlineCode",{parentName:"p"},"full_name")," \u53c2\u6570\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"True")," \u65f6\uff0c\u5c06\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"pkg.schema")," \u5f62\u5f0f\u7684\u5305\u524d\u7f00\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u662f\u5e38\u89c1\u7684\u7528\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import sub as pkg\n\n_a = 1\n\nt1 = typeof(_a)\nt2 = typeof("abc")\n\nschema Person:\n    name?: any\n\n_x1 = Person{}\nt3 = typeof(_x1)\n\n_x2 = pkg.Person{}\nt4 = typeof(_x2)\nt5 = typeof(_x2, full_name=True)\n\nt6 = typeof(_x1, full_name=True)\n\n# \u8f93\u51fa\n# t1: int\n# t2: str\n# t3: Person\n# t4: Person\n# t5: sub.Person\n# t6: __main__.Person\n')),(0,r.kt)("h2",{id:"zip"},"zip"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"zip(*args: str|list|dict)")),(0,r.kt)("p",null,"\u7528\u4e8e\u5c06\u53ef\u8fed\u4ee3\u7684\u5bf9\u8c61\u4f5c\u4e3a\u53c2\u6570\uff0c\u5c06\u5bf9\u8c61\u4e2d\u5bf9\u5e94\u7684\u5143\u7d20\u6253\u5305\u6210\u4e00\u4e2a\u4e2a\u5143\u7ec4\uff0c\u7136\u540e\u8fd4\u56de\u7531\u8fd9\u4e9b\u5143\u7ec4\u7ec4\u6210\u7684\u5217\u8868\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u662f\u5e38\u89c1\u7684\u7528\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"a = zip([0, 1, 2], [3, 4, 5])\nb = zip([0, 1], [3, 4, 5])\nc = zip([0, 1, 2], [3, 4, 5, 6])\n\n# \u8f93\u51fa\n# a:\n# - - 0\n#   - 3\n# - - 1\n#   - 4\n# - - 2\n#   - 5\n# b:\n# - - 0\n#   - 3\n# - - 1\n#   - 4\n# c:\n# - - 0\n#   - 3\n# - - 1\n#   - 4\n# - - 2\n")))}m.isMDXComponent=!0}}]);