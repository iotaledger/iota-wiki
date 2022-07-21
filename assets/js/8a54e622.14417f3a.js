"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[91012],{63695:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=["components"],s={},i="Send Shimmer tokens with wallet.rs",c={type:"mdx",permalink:"/send-shimmer-tokens-with-wallet-lib",source:"@site/content/tutorials/single-page-tutorials/send-shimmer-tokens-with-wallet-lib.md",title:"Send Shimmer tokens with wallet.rs",description:"Introduction",frontMatter:{}},u=[{value:"Introduction",id:"introduction",level:2},{value:"What you will learn",id:"what-you-will-learn",level:3},{value:"Setup your environment",id:"setup-your-environment",level:2},{value:"Create an account",id:"create-an-account",level:2},{value:"Generate an address",id:"generate-an-address",level:2},{value:"Get some tokens",id:"get-some-tokens",level:2},{value:"Check the balance",id:"check-the-balance",level:2},{value:"Send tokens",id:"send-tokens",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}],d={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"send-shimmer-tokens-with-walletrs"},"Send Shimmer tokens with wallet.rs"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"This tutorial shows how to get Shimmer testnet tokens and send them to another address."),(0,o.kt)("h3",{id:"what-you-will-learn"},"What you will learn"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a Stronghold account"),(0,o.kt)("li",{parentName:"ul"},"Generate a Shimmer address"),(0,o.kt)("li",{parentName:"ul"},"Get some Shimmer testnet tokens"),(0,o.kt)("li",{parentName:"ul"},"Fetch your balance"),(0,o.kt)("li",{parentName:"ul"},"Send tokens to another address")),(0,o.kt)("h2",{id:"setup-your-environment"},"Setup your environment"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/cargo/getting-started/installation.html"},"Install Rust")," and update to the latest stable version by running ",(0,o.kt)("inlineCode",{parentName:"p"},"rustup update stable"),"."),(0,o.kt)("p",null,"The next step is to clone the ",(0,o.kt)("inlineCode",{parentName:"p"},"wallet.rs")," repository and change to the ",(0,o.kt)("inlineCode",{parentName:"p"},"develop")," branch."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/iotaledger/wallet.rs\ncd wallet.rs\ngit checkout develop\n")),(0,o.kt)("p",null,"Open the repository in your favorite code editor and navigate to the first example in the ",(0,o.kt)("inlineCode",{parentName:"p"},"examples")," directory called ",(0,o.kt)("inlineCode",{parentName:"p"},"01_create_wallet.rs"),"."),(0,o.kt)("p",null,"We will go through the code line by line later, so don't worry if you don't understand it all yet. First we will configure the environment variables the example needs. It will read them from a ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file, for which there is an example available in the root of the repository."),(0,o.kt)("p",null,"In the root of the repository, copy the ",(0,o.kt)("inlineCode",{parentName:"p"},".env.example")," to a new ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cp .env.example .env\n")),(0,o.kt)("p",null,"If you want, you can change the ",(0,o.kt)("a",{parentName:"p",href:"https://en.bitcoin.it/wiki/BIP_0039"},"BIP39 mnemonic")," and choose a different password, but be sure to set the node URLs to a Shimmer testnet node (we use the nodes provided by IF in this tutorial). For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'NON_SECURE_USE_OF_DEVELOPMENT_MNEMONIC="curve live black weird verb salon box increase hidden bread edit yard match mercy unable depart dismiss wife stock strong estate isolate such gasp"\nSTRONGHOLD_PASSWORD="some_hopefully_secure_password"\nNODE_URL="https://api.testnet.shimmer.network"\nFAUCET_URL="https://faucet.testnet.shimmer.network/api/enqueue"\n')),(0,o.kt)("h2",{id:"create-an-account"},"Create an account"),(0,o.kt)("p",null,"Now that we have all details, let's go through the example code."),(0,o.kt)("p",null,"After including the needed dependencies, we have have the main function that loads the environment variables from the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file we created earlier. It uses the information to set up ",(0,o.kt)("a",{parentName:"p",href:"/stronghold.rs/welcome"},"Stronghold")," to store our seed safely."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'    // This example uses dotenv, which is not safe for use in production\n    dotenv().ok();\n\n    // Setup Stronghold secret_manager\n    let mut secret_manager = StrongholdSecretManager::builder()\n        .password(&env::var("STRONGHOLD_PASSWORD").unwrap())\n        .try_build(PathBuf::from("wallet.stronghold"))?;\n\n    // Only required the first time, can also be generated with `manager.generate_mnemonic()?`\n    let mnemonic = env::var("NON_SECURE_USE_OF_DEVELOPMENT_MNEMONIC").unwrap();\n\n    // The mnemonic only needs to be stored the first time\n    secret_manager.store_mnemonic(mnemonic).await?;\n')),(0,o.kt)("p",null,"It then uses the Stronghold manager and client options to create an account manager which we can use to interact with the Shimmer token accounts in our wallet."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'    // Create the account manager with the secret_manager and client options\n    let client_options = ClientOptions::new()\n        .with_node(&env::var("NODE_URL").unwrap())?\n        .with_node_sync_disabled();\n\n    let manager = AccountManager::builder()\n        .with_secret_manager(SecretManager::Stronghold(secret_manager))\n        .with_client_options(client_options)\n        .with_coin_type(SHIMMER_COIN_TYPE)\n        .finish()\n        .await?;\n')),(0,o.kt)("p",null,"With the account manager set up, we are ready to create an account to receive some tokens. The account is created with alias ",(0,o.kt)("inlineCode",{parentName:"p"},"Alice"),", so we can easily retrieve it at a later time."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'    // Create a new account\n    let _account = manager\n        .create_account()\n        .with_alias("Alice".to_string())\n        .finish()\n        .await?;\n')),(0,o.kt)("p",null,"Now that we understand the code, let's run it and create our account."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cargo run --example 01_create_wallet\n")),(0,o.kt)("p",null,"If everything worked correctly, you will see the message ",(0,o.kt)("inlineCode",{parentName:"p"},"Generated a new account")," and you will find a Stronghold file and a database directory have been created to store the current state of your wallet."),(0,o.kt)("h2",{id:"generate-an-address"},"Generate an address"),(0,o.kt)("p",null,"In this step, we will generate a new address to receive some testnet tokens. For this we will use the second example called ",(0,o.kt)("inlineCode",{parentName:"p"},"02_generate_address.rs"),"."),(0,o.kt)("p",null,"Here again we read the environment variables from the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file and then we recreate the account manager which will use the Stronghold file and database that were created in the previous step."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"    // This example uses dotenv, which is not safe for use in production\n    dotenv().ok();\n\n    // Create the account manager\n    let manager = AccountManager::builder().finish().await?;\n")),(0,o.kt)("p",null,"Then we will get the account using the alias we set earlier and provide the Stronghold password to unlock it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'    // Get the account we generated with `01_create_wallet`\n    let account = manager.get_account("Alice").await?;\n\n    // Set the stronghold password\n    manager\n        .set_stronghold_password(&env::var("STRONGHOLD_PASSWORD").unwrap())\n        .await?;\n')),(0,o.kt)("p",null,"Now we are ready to generate a new address, which will be derived from the mnemonic that we set earlier. For our convenience, we will print the address in ",(0,o.kt)("a",{parentName:"p",href:"https://en.bitcoin.it/wiki/Bech32"},"Bech32 format")," so we can copy it and use it to send and receive tokens and find the address in the ",(0,o.kt)("a",{parentName:"p",href:"https://explorer.testnet.shimmer.network/testnet"},"testnet explorer"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'    let address = account.generate_addresses(1, None).await?;\n    println!("Generated address: {}", address[0].address().to_bech32());\n')),(0,o.kt)("p",null,"Let's run it and get our address."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cargo run --example 02_generate_address\n")),(0,o.kt)("p",null,"You can see all testnet addresses begin with ",(0,o.kt)("inlineCode",{parentName:"p"},"rms"),", which is the reverse of what real Shimmer addresses start with. This is how you can tell testnet and real addresses apart."),(0,o.kt)("h2",{id:"get-some-tokens"},"Get some tokens"),(0,o.kt)("p",null,"To get tokens, you can either use the ",(0,o.kt)("a",{parentName:"p",href:"https://faucet.testnet.shimmer.network"},"faucet webpage")," or use the third example called ",(0,o.kt)("inlineCode",{parentName:"p"},"03_get_funds.rs")," by running ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo run --example 03_get_funds"),". Either way you will receive tokens on the address we just generated."),(0,o.kt)("h2",{id:"check-the-balance"},"Check the balance"),(0,o.kt)("p",null,"Now you should have some tokens. To validate that, we can use the library to inspect our account, like in the fourth example called ",(0,o.kt)("inlineCode",{parentName:"p"},"04_get_balance.rs"),". Same as previously it will recreate the manager and open the account."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'    // Create the account manager\n    let manager = AccountManager::builder().finish().await?;\n\n    // Get the account we generated with `01_create_wallet`\n    let account = manager.get_account("Alice").await?;\n')),(0,o.kt)("p",null,"Now to find your balance, first your account needs to be synced so your local state is synchronized with the state of your account in the network."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"    // Sync and get the balance\n    let _account_balance = account.sync(None).await?;\n    // If already synced, just get the balance\n    let account_balance = account.balance().await?;\n")),(0,o.kt)("p",null,"Let's run the code and see if we did receive the tokens."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash="},"cargo run --example 04_get_balance\n")),(0,o.kt)("p",null,"This should show a positive balance. If no tokens appear, try to request tokens from the faucet again. If that still doesn't work, please come over to ",(0,o.kt)("a",{parentName:"p",href:"https://discord.iota.org/"},"our Discord")," and we'll sort it out."),(0,o.kt)("h2",{id:"send-tokens"},"Send tokens"),(0,o.kt)("p",null,"Now that we have some tokens, we can send them around. Open the fifth example called ",(0,o.kt)("inlineCode",{parentName:"p"},"05_transaction.rs"),". If you want you can use another testnet address or ask someone in ",(0,o.kt)("a",{parentName:"p",href:"https://discord.iota.org/"},"our Discord")," to send you their testnet address and change line 31 to that address."),(0,o.kt)("p",null,"This will again set up a manager, open our account and unlock it using our password."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'    // This example uses dotenv, which is not safe for use in production\n    dotenv().ok();\n\n    // Create the account manager\n    let manager = AccountManager::builder().finish().await?;\n\n    // Get the account we generated with `01_create_wallet`\n    let account = manager.get_account("Alice").await?;\n\n    // Set the stronghold password\n    manager\n        .set_stronghold_password(&env::var("STRONGHOLD_PASSWORD").unwrap())\n        .await?;\n')),(0,o.kt)("p",null,"Next we will tell the account manager the amount of tokens we want to send to what address by defining an output. The function to send tokens accepts a list of outputs, so in this case we will provide a list with one entry."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'    // Send a transaction with 1 Mi\n    let outputs = vec![AddressWithAmount {\n        address: "rms1qpszqzadsym6wpppd6z037dvlejmjuke7s24hm95s9fg9vpua7vluaw60xu".to_string(),\n        amount: 1_000_000,\n    }];\n    let transaction = account.send_amount(outputs, None).await?;\n')),(0,o.kt)("p",null,"Let's send the transaction."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cargo run --example 05_transaction\n")),(0,o.kt)("p",null,"This could take some time. The manager will automatically go through your addresses to find enough tokens to match the amount you want to send. Then it will sign the resulting transaction and send it to the node. It will warn you when you don't have enough balance, but otherwise it will show you the transaction ID, which you can use to find your transaction in the ",(0,o.kt)("a",{parentName:"p",href:"https://explorer.testnet.shimmer.network/testnet"},"testnet explorer"),"."),(0,o.kt)("p",null,"Congratulations, you are now able to manage your tokens programmatically!"),(0,o.kt)("h2",{id:"whats-next"},"What's next?"),(0,o.kt)("p",null,"You now can create an account, generate addresses and transfer tokens. Check out the ",(0,o.kt)("a",{parentName:"p",href:"/wallet.rs/welcome"},"documentation")," to see what more you can do. Create some native tokens, non-fungible tokens (NFTs) and develop your own application! Have fun and good luck!"))}p.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(i,".").concat(h)]||p[h]||d[h]||o;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);