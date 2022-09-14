"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[9951],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,y=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28936:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={description:"This section provides a checklist of steps for running a reliable and secure node.",image:"/img/Banner/banner_hornet_security_101.png",keywords:["IOTA Node","Hornet Node","Hornet","Security","explanation"]},i="Security 101",s={unversionedId:"explanations/security_101",id:"explanations/security_101",title:"Security 101",description:"This section provides a checklist of steps for running a reliable and secure node.",source:"@site/content/build/hornet/production/documentation/docs/explanations/security_101.md",sourceDirName:"explanations",slug:"/explanations/security_101",permalink:"/hornet/explanations/security_101",draft:!1,editUrl:"https://github.com/gohornet/hornet/edit/production/documentation/content/build/hornet/production/documentation/docs/explanations/security_101.md",tags:[],version:"current",frontMatter:{description:"This section provides a checklist of steps for running a reliable and secure node.",image:"/img/Banner/banner_hornet_security_101.png",keywords:["IOTA Node","Hornet Node","Hornet","Security","explanation"]},sidebar:"mySidebar",previous:{title:"Nodes 101",permalink:"/hornet/explanations/nodes_101"},next:{title:"Peering Configuration",permalink:"/hornet/explanations/peering"}},l={},c=[{value:"Securing Your Device",id:"securing-your-device",level:2},{value:"Securing SSH logins",id:"securing-ssh-logins",level:3},{value:"Blocking Unnecessary Ports",id:"blocking-unnecessary-ports",level:3},{value:"Deciding Whether to Enable Remote Proof of Work",id:"deciding-whether-to-enable-remote-proof-of-work",level:2},{value:"Load Balancing",id:"load-balancing",level:2},{value:"Reverse Proxy",id:"reverse-proxy",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"security-101"},"Security 101"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Hornet Node Security 101",src:n(56867).Z,width:"862",height:"200"})),(0,o.kt)("p",null,"You can follow the checklists below to run your node securely."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Servers that are reachable from the Internet are a constant target from security challengers. Please follow the security essentials summarized in this article.")),(0,o.kt)("h2",{id:"securing-your-device"},"Securing Your Device"),(0,o.kt)("p",null,"The security of the device running your node is of the utmost importance to stop attackers from gaining access to the node."),(0,o.kt)("p",null,"You should consider ",(0,o.kt)("a",{parentName:"p",href:"#securing-ssh-logins"},"securing SSH logins")," and ",(0,o.kt)("a",{parentName:"p",href:"#blocking-unnecessary-ports"},"blocking unnecessary ports")," before running a node on your device."),(0,o.kt)("h3",{id:"securing-ssh-logins"},"Securing SSH logins"),(0,o.kt)("p",null,"You can take measures to protect your device from unauthorized access when logging in through SSH from several readily avilable sources. The ",(0,o.kt)("a",{parentName:"p",href:"https://blog.devolutions.net/2017/04/10-steps-to-secure-open-ssh"},"10 Steps to Secure Open SSH")," guide and the tools found on ",(0,o.kt)("a",{parentName:"p",href:"https://www.fail2ban.org/wiki/index.php/Main_Page"},"Fail2ban")," should help strengthen your node's security."),(0,o.kt)("h3",{id:"blocking-unnecessary-ports"},"Blocking Unnecessary Ports"),(0,o.kt)("p",null,"Attackers can abuse any open ports on your device. To secure your device against attacks on unused open ports, you can close all ports except the ones that you are using."),(0,o.kt)("p",null,"You can use a firewall for port security since all operating systems include firewall options. Using a firewall lets you completely block unused and unnecessary ports."),(0,o.kt)("p",null,"On cloud platforms such as AWS, Azure, or GCP, you can block ports on VPS networking settings."),(0,o.kt)("h2",{id:"deciding-whether-to-enable-remote-proof-of-work"},"Deciding Whether to Enable Remote Proof of Work"),(0,o.kt)("p",null,"When you are configuring your node, you have the option to allow it to do proof of work (PoW). If you enable this feature, clients can ask your node to remotely do PoW."),(0,o.kt)("p",null,"PoW takes time and uses your node's computational power. So, consider enabling it according to your infrastructure."),(0,o.kt)("h2",{id:"load-balancing"},"Load Balancing"),(0,o.kt)("p",null,"If you run more than one node, it is a good practice to make sure that you distribute the API requests among all of them."),(0,o.kt)("p",null,"To evenly distribute the API requests among all your nodes, you can run a reverse proxy server that will act as a load balancer (",(0,o.kt)("a",{parentName:"p",href:"http://www.haproxy.org/"},"HAProxy"),", ",(0,o.kt)("a",{parentName:"p",href:"https://traefik.io/"},"Traefik"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.nginx.com/"},"Nginx"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.apache.org/"},"Apache"),", etc.). This way, you can have one domain name for your reverse proxy server that all nodes will send their API calls to. On the backend, the nodes with the most spare computational power will process the request and return the response."),(0,o.kt)("p",null,"Since broadcasted messages are atomic and nodes provide RESTful API to communicate, you will not need sticky sessions or similar technologies."),(0,o.kt)("h2",{id:"reverse-proxy"},"Reverse Proxy"),(0,o.kt)("p",null,"We recommend that you use a reverse proxy in front of a node is even if you are deploying a single node. Using a reverse proxy adds an additional security layer that can handle tasks such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"IP address filtering. "),(0,o.kt)("li",{parentName:"ul"},"Abuse rate limiting. "),(0,o.kt)("li",{parentName:"ul"},"SSL encrypting."),(0,o.kt)("li",{parentName:"ul"},"Additional authorization layer.")))}p.isMDXComponent=!0},56867:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/banner_hornet_security_101-d9bbdb66c022b46cc9bf9111f8df607b.png"}}]);