"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[86640],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=l,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},80324:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(87462),l=(r(67294),r(3905));const a={title:"regex",linkTitle:"regex",type:"docs",description:"regex system module",weight:100},o=void 0,i={unversionedId:"reference/model/regex",id:"version-0.4.3/reference/model/regex",title:"regex",description:"regex system module",source:"@site/versioned_docs/version-0.4.3/reference/model/regex.md",sourceDirName:"reference/model",slug:"/reference/model/regex",permalink:"/docs/0.4.3/reference/model/regex",draft:!1,editUrl:"https://github.com/KusionStack/kcl-lang.io/tree/main/versioned_docs/version-0.4.3/reference/model/regex.md",tags:[],version:"0.4.3",lastUpdatedBy:"peefy",lastUpdatedAt:1685538105,formattedLastUpdatedAt:"May 31, 2023",frontMatter:{title:"regex",linkTitle:"regex",type:"docs",description:"regex system module",weight:100},sidebar:"reference",previous:{title:"net",permalink:"/docs/0.4.3/reference/model/net"},next:{title:"units",permalink:"/docs/0.4.3/reference/model/units"}},p={},c=[{value:"replace",id:"replace",level:2},{value:"match",id:"match",level:2},{value:"compile",id:"compile",level:2},{value:"findall",id:"findall",level:2},{value:"search",id:"search",level:2},{value:"split",id:"split",level:2}],s={toc:c};function u(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"replace"},"replace"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"replace(string: str, pattern: str, replace: str, count=0) -> str")),(0,l.kt)("p",null,"Return the string obtained by replacing the leftmost non-overlapping occurrences of the pattern in string by the replacement."),(0,l.kt)("h2",{id:"match"},"match"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"match(string: str, pattern: str) -> bool")),(0,l.kt)("p",null,"Try to apply the pattern at the start of the string, returning a bool value True if any match was found, or False if no match was found."),(0,l.kt)("h2",{id:"compile"},"compile"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"compile(pattern: str) -> bool")),(0,l.kt)("p",null,"Compile a regular expression pattern, returning a bool value denoting whether the pattern is valid."),(0,l.kt)("h2",{id:"findall"},"findall"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"findall(string: str, pattern: str) -> List[str]")),(0,l.kt)("p",null,"Return a list of all non-overlapping matches in the string."),(0,l.kt)("h2",{id:"search"},"search"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"search(string: str, pattern: str) -> bool")),(0,l.kt)("p",null,"Scan through string looking for a match to the pattern, returning a bool value True if any match was found, or False if no match was found."),(0,l.kt)("h2",{id:"split"},"split"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"split(string: str, pattern: str, maxsplit=0) -> List[str]")),(0,l.kt)("p",null,"Scan through string looking for a match to the pattern, returning a Match object, or None if no match was found."))}u.isMDXComponent=!0}}]);