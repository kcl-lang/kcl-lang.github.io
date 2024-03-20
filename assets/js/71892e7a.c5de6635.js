"use strict";(self.webpackChunkkcl_website=self.webpackChunkkcl_website||[]).push([[75574],{3905:(e,t,i)=>{i.d(t,{Zo:()=>_,kt:()=>k});var n=i(67294);function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){l(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,l=function(e,t){if(null==e)return{};var i,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var p=n.createContext({}),s=function(e){var t=n.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},_=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,_=o(e,["components","mdxType","originalType","parentName"]),c=s(i),u=l,k=c["".concat(p,".").concat(u)]||c[u]||d[u]||r;return i?n.createElement(k,a(a({ref:t},_),{},{components:i})):n.createElement(k,a({ref:t},_))}));function k(e,t){var i=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=i.length,a=new Array(r);a[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:l,a[1]=o;for(var s=2;s<r;s++)a[s]=i[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},75591:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=i(87462),l=(i(67294),i(3905));const r={title:"net",linkTitle:"net",type:"docs",description:"net system module",weight:100},a=void 0,o={unversionedId:"reference/model/net",id:"version-0.5/reference/model/net",title:"net",description:"net system module",source:"@site/versioned_docs/version-0.5/reference/model/net.md",sourceDirName:"reference/model",slug:"/reference/model/net",permalink:"/docs/0.5/reference/model/net",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5/reference/model/net.md",tags:[],version:"0.5",lastUpdatedBy:"peefy",lastUpdatedAt:1710906677,formattedLastUpdatedAt:"Mar 20, 2024",frontMatter:{title:"net",linkTitle:"net",type:"docs",description:"net system module",weight:100},sidebar:"reference",previous:{title:"math",permalink:"/docs/0.5/reference/model/math"},next:{title:"regex",permalink:"/docs/0.5/reference/model/regex"}},p={},s=[{value:"split_host_port",id:"split_host_port",level:2},{value:"join_host_port",id:"join_host_port",level:2},{value:"fqdn",id:"fqdn",level:2},{value:"parse_IP",id:"parse_ip",level:2},{value:"to_IP4",id:"to_ip4",level:2},{value:"to_IP16",id:"to_ip16",level:2},{value:"IP_string",id:"ip_string",level:2},{value:"is_IPv4",id:"is_ipv4",level:2},{value:"is_IP",id:"is_ip",level:2},{value:"is_loopback_IP",id:"is_loopback_ip",level:2},{value:"is_multicast_IP",id:"is_multicast_ip",level:2},{value:"is_interface_local_multicast_IP",id:"is_interface_local_multicast_ip",level:2},{value:"is_link_local_multicast_IP",id:"is_link_local_multicast_ip",level:2},{value:"is_link_local_unicast_IP",id:"is_link_local_unicast_ip",level:2},{value:"is_global_unicast_IP",id:"is_global_unicast_ip",level:2},{value:"is_unspecified_IP",id:"is_unspecified_ip",level:2}],_={toc:s},c="wrapper";function d(e){let{components:t,...i}=e;return(0,l.kt)(c,(0,n.Z)({},_,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"split_host_port"},"split_host_port"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"split_host_port(ip_end_point: str) -> List[str]")),(0,l.kt)("p",null,"Split the ",(0,l.kt)("inlineCode",{parentName:"p"},"host")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"port")," from the ",(0,l.kt)("inlineCode",{parentName:"p"},"ip_end_point"),"."),(0,l.kt)("h2",{id:"join_host_port"},"join_host_port"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"join_host_port(host, port) -> str")),(0,l.kt)("p",null,"Merge the ",(0,l.kt)("inlineCode",{parentName:"p"},"host")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"port"),"."),(0,l.kt)("h2",{id:"fqdn"},"fqdn"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"fqdn(name: str = '') -> str")),(0,l.kt)("p",null,"Return Fully Qualified Domain Name (FQDN)."),(0,l.kt)("h2",{id:"parse_ip"},"parse_IP"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"parse_IP(ip) -> str")),(0,l.kt)("p",null,"Parse ",(0,l.kt)("inlineCode",{parentName:"p"},"ip")," to a real IP address"),(0,l.kt)("h2",{id:"to_ip4"},"to_IP4"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"to_IP4(ip) -> str")),(0,l.kt)("p",null,"Get the IP4 form of ",(0,l.kt)("inlineCode",{parentName:"p"},"ip"),"."),(0,l.kt)("h2",{id:"to_ip16"},"to_IP16"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"to_IP16(ip) -> int")),(0,l.kt)("p",null,"Get the IP16 form of ",(0,l.kt)("inlineCode",{parentName:"p"},"ip"),"."),(0,l.kt)("h2",{id:"ip_string"},"IP_string"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"IP_string(ip: str | int) -> str")),(0,l.kt)("p",null,"Get the IP string."),(0,l.kt)("h2",{id:"is_ipv4"},"is_IPv4"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"is_IPv4(ip: str) -> bool")),(0,l.kt)("p",null,"Whether ",(0,l.kt)("inlineCode",{parentName:"p"},"ip")," is a IPv4 one."),(0,l.kt)("h2",{id:"is_ip"},"is_IP"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"is_IP(ip: str) -> bool")),(0,l.kt)("p",null,"Whether ",(0,l.kt)("inlineCode",{parentName:"p"},"ip")," is a valid ip address."),(0,l.kt)("h2",{id:"is_loopback_ip"},"is_loopback_IP"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"is_loopback_IP(ip: str) -> bool")),(0,l.kt)("p",null,"Whether ",(0,l.kt)("inlineCode",{parentName:"p"},"ip")," is a loopback one."),(0,l.kt)("h2",{id:"is_multicast_ip"},"is_multicast_IP"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"is_multicast_IP(ip: str) -> bool")),(0,l.kt)("p",null,"Whether ",(0,l.kt)("inlineCode",{parentName:"p"},"ip")," is a multicast one."),(0,l.kt)("h2",{id:"is_interface_local_multicast_ip"},"is_interface_local_multicast_IP"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"is_interface_local_multicast_IP(ip: str) -> bool")),(0,l.kt)("p",null,"Whether ",(0,l.kt)("inlineCode",{parentName:"p"},"ip")," is a interface, local and multicast one."),(0,l.kt)("h2",{id:"is_link_local_multicast_ip"},"is_link_local_multicast_IP"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"is_link_local_multicast_IP(ip: str) -> bool")),(0,l.kt)("p",null,"Whether ",(0,l.kt)("inlineCode",{parentName:"p"},"ip")," is a link local and multicast one."),(0,l.kt)("h2",{id:"is_link_local_unicast_ip"},"is_link_local_unicast_IP"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"is_link_local_unicast_IP(ip: str) -> bool")),(0,l.kt)("p",null,"Whether ",(0,l.kt)("inlineCode",{parentName:"p"},"ip")," is a link local and unicast one."),(0,l.kt)("h2",{id:"is_global_unicast_ip"},"is_global_unicast_IP"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"is_global_unicast_IP(ip: str) -> bool")),(0,l.kt)("p",null,"Whether ",(0,l.kt)("inlineCode",{parentName:"p"},"ip")," is a global and unicast one."),(0,l.kt)("h2",{id:"is_unspecified_ip"},"is_unspecified_IP"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"is_unspecified_IP(ip: str) -> bool")),(0,l.kt)("p",null,"Whether ",(0,l.kt)("inlineCode",{parentName:"p"},"ip")," is a unspecified one."))}d.isMDXComponent=!0}}]);