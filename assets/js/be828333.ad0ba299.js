"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[12038],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>m});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return t?n.createElement(g,o(o({ref:a},p),{},{components:t})):n.createElement(g,o({ref:a},p))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},81610:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=t(87462),r=(t(67294),t(3905));const l={description:"The Official IOTA Wallet Library Java API examples.",image:"/img/logo/iota_mark_light.png",keywords:["api","Java","examples","type","node","client","reference"]},o="Examples in Java",i={unversionedId:"examples/java",id:"examples/java",title:"Examples in Java",description:"The Official IOTA Wallet Library Java API examples.",source:"@site/content/build/wallet.rs/production/documentation/docs/examples/java.md",sourceDirName:"examples",slug:"/examples/java",permalink:"/wallet.rs/examples/java",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/production/documentation/content/build/wallet.rs/production/documentation/docs/examples/java.md",tags:[],version:"current",frontMatter:{description:"The Official IOTA Wallet Library Java API examples.",image:"/img/logo/iota_mark_light.png",keywords:["api","Java","examples","type","node","client","reference"]},sidebar:"docs",previous:{title:"Examples in Python",permalink:"/wallet.rs/examples/python"},next:{title:"Wallet Library Specifications",permalink:"/wallet.rs/reference/specifications"}},s={},c=[{value:"Backup and Restore",id:"backup-and-restore",level:2},{value:"Transfering Funds",id:"transfering-funds",level:2},{value:"Listen to Events",id:"listen-to-events",level:2}],p={toc:c};function u(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"examples-in-java"},"Examples in Java"),(0,r.kt)("p",null,"This section will guide you through several examples using the Java binding of the ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet.rs")," library. You can also find the code for the examples in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/bindings/java/examples/java-app")," folder in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wallet.rs/tree/dev/bindings/java/examples/java-app"},"official GitHub repository"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/iotaledger/wallet.rs\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd wallet.rs/bindings/java\n")),(0,r.kt)("p",null,"Examples are all collected in a sample project. By default, it runs a node info example, but there are more."),(0,r.kt)("p",null,"You can run the example with Gradle or Maven using the following commands:"),(0,r.kt)("p",null,"Gradle: ",(0,r.kt)("inlineCode",{parentName:"p"},"./gradlew examples:java-app:test --info")),(0,r.kt)("p",null,"Maven: ",(0,r.kt)("inlineCode",{parentName:"p"},"cd examples/java-app && mvn test")),(0,r.kt)("h2",{id:"backup-and-restore"},"Backup and Restore"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create an account manager and set a password:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'AccountManager manager = AccountManager.Builder().finish();\n\nmanager.setStrongholdPassword("password");\nmanager.storeMnemonic(AccountSignerType.STRONGHOLD, null);\n\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Create your account:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'ClientOptions clientOptions = new ClientOptionsBuilder()\n    .withNode("https://api.lb-0.h.chrysalis-devnet.iota.cafe")\n    .build();\nAccount account = manager\n    .createAccount(client_options)\n    .alias("alias")\n    .initialise();\nString id = account.id();\n\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Secure your account in a backup file:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// backup the stored accounts to ./backup/${backup_name}\nPath backupPath = manager.backup("./backup");\n')),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"You can import the backup later, or in another application using the following snippet:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'manager.importAccounts(backupPath, "password");\n\nAccount imported_account_handle = manager.getAccount(id);\n')),(0,r.kt)("p",null,"That's it! You can now backup and restore your account!"),(0,r.kt)("h2",{id:"transfering-funds"},"Transfering Funds"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Get or Create your account:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'AccountManager manager = AccountManager.Builder().finish();\n\nmanager.setStrongholdPassword("password");\n\n// Get account or create a new one\nString accountAlias = "alias";\nAccount account;\ntry {\n    account = manager.getAccount(accountAlias)\n} catch (WalletException e) {\n    // first we\'ll create an example account and store it\n    manager.storeMnemonic(AccountSignerType.STRONGHOLD, null);\n    ClientOptions clientOptions = new ClientOptionsBuilder()\n        .withNode("https://api.lb-0.h.chrysalis-devnet.iota.cafe")\n        .build();\n    account = manager\n        .createAccount(client_options)\n        .alias(accountAlias)\n        .initialise();\n}\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Generate the address:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Address address = account.generateAddress();\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Print and wait:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'System.out.println("Send iotas from the faucet to {} and press enter after the transaction got confirmed" +\n    address\n);\n\nSystem.in.read();\n')),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Send and wait:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'System.out.println("Sending transfer...");\nMessage message = account\n    .transfer(\n        Transfer.builder(\n            AddressWrapper.parse("atoi1qzt0nhsf38nh6rs4p6zs5knqp6psgha9wsv74uajqgjmwc75ugupx3y7x0r"),\n            10000000,\n            OutputKind.SIGNATURE_LOCKED_DUST_ALLOWANCE),\n        )\n        .finish(),\n    );\nSystem.out.println("Message sent: " + message.id());\n')),(0,r.kt)("h2",{id:"listen-to-events"},"Listen to Events"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"You can find more advanced examples in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wallet.rs/tree/dev/bindings/java/examples/java-app"},"examples")," folder."))}u.isMDXComponent=!0}}]);