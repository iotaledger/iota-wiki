const pluginTutorial = require('../src/plugins/tutorial');

module.exports = [
  [
    '@docusaurus/plugin-content-pages',
    {
      id: 'single-page-tutorials',
      path: './docs/tutorials',
      routeBasePath: '/tutorials',
    },
  ],
  [
    pluginTutorial,
    {
      title: 'Run a Wasp Node',
      description: 'In this tutorial you will learn how to run a wasp node.',
      preview: '/img/tutorials/IOTA-Smart-Contract-Tutorials-A.jpg',
      route: '/wasp/how-tos/running-a-node',
      tags: ['text', 'video'],
    },
  ],
  [
    pluginTutorial,
    {
      title: 'Run a Wasp Chain',
      description: 'In this tutorial you will learn how to run a wasp chain.',
      preview: '/img/tutorials/IOTA-Smart-Contract-Tutorials-B.jpg',
      route: '/wasp/how-tos/setting-up-a-chain',
      tags: ['text', 'video'],
    },
  ],
  [
    pluginTutorial,
    {
      title: 'Deploy a WASM Smart Contract',
      description:
        'In this tutorial you will learn how to deploy a wasm smart contract.',
      preview: '/img/tutorials/IOTA-Smart-Contract-Tutorials-C.jpg',
      route: '/wasp/how-tos/setting-up-a-chain#deploying-a-wasm-contract',
      tags: ['text', 'video'],
    },
  ],
  [
    pluginTutorial,
    {
      title: 'Deploy a Solidity Smart Contract Using Remix + Metamask',
      description:
        'In this tutorial you will learn how to deploy a solidity smart contract on EVM using remix and metamask.',
      preview: '/img/tutorials/IOTA-Smart-Contract-Tutorials-E.jpg',
      route: '/isc/getting-started/tools#remix',
      tags: ['text', 'video'],
    },
  ],
  [
    pluginTutorial,
    {
      title: 'Generate a WASM Smart Contract Using the Schema Tool',
      description:
        'In this tutorial you will learn how to use schema tool to generate smart contract template code on rust and golang',
      preview: '/img/tutorials/IOTA-Smart-Contract-Tutorials-G.png',
      route: '/isc/schema/how-tos/usage',
      tags: ['text', 'video'],
    },
  ],
  [
    pluginTutorial,
    {
      title:
        'Generate a WASM Smart Contract Using the Schema Tool in Typescript',
      description:
        'In this tutorial you will learn how to use schema tool to generate smart contract template code on typescript',
      preview: '/img/tutorials/IOTA-Smart-Contract-Tutorials-G.png',
      route: 'https://www.youtube.com/watch?v=P5HMgmY3DMM',
      tags: ['video'],
    },
  ],
  [
    pluginTutorial,
    {
      title: 'Interact with IOTA Node Extension (INX)',
      description:
        'In this tutorial you will learn how to interact with the IOTA Node Extension (INX) interface based on gRPC.',
      preview: '/img/tutorials/hornet-inx-interaction.png',
      route: 'tutorials/hornet-inx-interaction',
      tags: ['text', 'getting-started', 'shimmer', 'js'],
    },
  ],
  [
    pluginTutorial,
    {
      title: 'Tokenless Data Notarization',
      description:
        'Proove that a block was part of the past Tangle, even if this part of the Tangle was already pruned from network nodes.',
      preview: '/img/tutorials/proof-inclusion-of-a-block.png',
      route: 'tutorials/proof-inclusion-of-a-block',
      tags: ['text', 'getting-started', 'js', 'client', 'shimmer'],
    },
  ],
  [
    pluginTutorial,
    {
      title: 'Set Up a Testnet Address and Receive Funds From the Faucet',
      description:
        'In this tutorial you will learn how to create a seed and address with wallet.rs and receive testnet tokens from the faucet.',
      preview: '/img/tutorials/wallet-setup.png',
      route: 'tutorials/wallet-setup',
      tags: ['text', 'getting-started', 'node_js', 'wallet', 'shimmer'],
    },
  ],
  [
    pluginTutorial,
    {
      title: 'How to Set Up iota.js for Development',
      description:
        'In this tutorial you will learn how to create a new project, generate a new address and receive x funds from the faucet.',
      preview: '/img/tutorials/setup_iota-js_for_development.png',
      route: 'tutorials/setup_iota-js_for_development',
      tags: ['text', 'getting-started', 'client', 'shimmer', 'js'],
    },
  ],
  [
    pluginTutorial,
    {
      title:
        'Connect to Shimmer EVM Testnet and Deploy a Solidity Smart Contract',
      description:
        'In this tutorial, we will connect to Shimmer EVM Testnet, connect Metamask to it, get funded and deploy a smart contract in Solidity.',
      preview: '/img/tutorials/connect-shimmerevm-testnet-and-deploy.png',
      route: 'tutorials/shimmerevm-testnet-setup',
      tags: [
        'text',
        'shimmer',
        'solidity',
        'getting-started',
        'wasp',
        'iscp',
        'video',
      ],
    },
  ],
  [
    pluginTutorial,
    {
      title:
        'Tutorial - Deploy a Solidity Smart Contract on ShimmerEVM Testnet Using Hardhat',
      description:
        'In this tutorial, you will learn how to set up Hardhat and use it to build, test and deploy a simple smart contract on ShimmerEVM.',
      preview: '/img/tutorials/shimmerevm-hardhat.jpg',
      route: 'tutorials/shimmerevm-testnet-hardhat',
      tags: [
        'text',
        'shimmer',
        'solidity',
        'shimmerevm',
        'hardhat',
        'iscp',
        'video',
      ],
    },
  ],
  [
    pluginTutorial,
    {
      title: 'Create a Simple Voting dApp on ShimmerEVM',
      description:
        'This tutorial will guide you as you write and deploy a voting dApp on ShimmerEVM. You can vote on a few options and view the results; all data will be stored on-chain.',
      preview: '/img/tutorials/shimmerevm-dapp-voting.jpg',
      route: 'tutorials/shimmerevm-dapp-voting',
      tags: ['text', 'shimmer', 'solidity', 'iscp'],
    },
  ],
  [
    pluginTutorial,
    {
      title: 'Set Up WASP locally Using Docker',
      description:
        'In this tutorial you will learn how to set up WASP and Hornet locally for Development setup.',
      preview: '/img/tutorials/wasp-setup-shimmer.png',
      route: 'https://youtu.be/ltem9Bh_4hA',
      tags: ['text', 'shimmer', 'video', 'wasp', 'iscp'],
    },
  ],
  [
    pluginTutorial,
    {
      title: 'Create an NFT with the IOTA SDK and IPFS in NodeJs',
      description:
        'In this tutorial you will learn how to create a NFT on the Shimmer network with iota-sdk and IPFS.',
      preview: '/img/tutorials/create-nft-with-wallet-lib.png',
      route: 'tutorials/create-nft-with-iota-sdk',
      tags: [
        'text',
        'getting-started',
        'node_js',
        'iota-sdk',
        'ipfs',
        'shimmer',
        'sdk',
      ],
    },
  ],
  [
    pluginTutorial,
    {
      title: 'Send Shimmer Tokens with IOTA SDK in NodeJs',
      description:
        'In this tutorial you will learn how to send Shimmer Tokens with IOTA SDK in NodeJs.',
      preview: '/img/tutorials/send-shimmer-tokens-with-iota-sdk.png',
      route: 'tutorials/send-shimmer-tokens-with-iota-sdk',
      tags: ['text', 'iota-sdk', 'sdk', 'getting-started', 'rust', 'shimmer'],
    },
  ],
  [
    pluginTutorial,
    {
      title: 'Connect to Shimmer EVM and Deploy a Solidity Smart Contract',
      description:
        'In this tutorial, we will connect to Shimmer EVM, connect Metamask to it, get funded and deploy a smart contract in Solidity.',
      preview: '/img/tutorials/connect-shimmerevm-and-deploy.png',
      route: 'tutorials/shimmerevm-setup',
      tags: [
        'text',
        'shimmer',
        'solidity',
        'getting-started',
        'wasp',
        'iscp',
        'video',
      ],
    },
  ],
  [
    pluginTutorial,
    {
      title:
        'Tutorial - Deploy a Solidity Smart Contract on ShimmerEVM Using Hardhat',
      description:
        'In this tutorial, you will learn how to set up Hardhat and use it to build, test and deploy a simple smart contract on ShimmerEVM.',
      preview: '/img/tutorials/shimmerevm-hardhat.jpg',
      route: 'tutorials/shimmerevm-hardhat',
      tags: [
        'text',
        'shimmer',
        'solidity',
        'shimmerevm',
        'hardhat',
        'iscp',
        'video',
      ],
    },
  ],
];
