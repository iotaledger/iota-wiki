const path = require('path');

module.exports = {
  plugins: [
    [
      '@docusaurus/plugin-content-pages',
      {
        id: 'single-page-tutorials',
        path: path.resolve(__dirname, 'pages'),
        routeBasePath: '/tutorials',
      },
    ],
    [
      '@iota-wiki/plugin-tutorial',
      {
        title: 'Send IOTA Tokens with Javascript',
        description:
          'In this tutorial you will learn how to send IOTA Tokens in the Devnet.',
        preview: '/send-iota-tokens-with-javascript.svg',
        route: 'tutorials/send-iota-tokens-with-javascript',
        tags: ['text', 'getting-started', 'client', 'js', 'mainnet'],
      },
    ],
    [
      '@iota-wiki/plugin-tutorial',
      {
        title: 'Run a Wasp Node',
        description: 'In this tutorial you will learn how to run a wasp node.',
        preview: '/IOTA-Smart-Contract-Tutorials-A.jpg',
        route: 'smart-contracts/guide/chains_and_nodes/running-a-node',
        tags: ['text', 'video'],
      },
    ],
    [
      '@iota-wiki/plugin-tutorial',
      {
        title: 'Run a Wasp Chain',
        description: 'In this tutorial you will learn how to run a wasp chain.',
        preview: '/IOTA-Smart-Contract-Tutorials-B.jpg',
        route: 'smart-contracts/guide/chains_and_nodes/setting-up-a-chain',
        tags: ['text', 'video'],
      },
    ],
    [
      '@iota-wiki/plugin-tutorial',
      {
        title: 'Deploy a WASM Smart Contract',
        description:
          'In this tutorial you will learn how to deploy a wasm smart contract.',
        preview: '/IOTA-Smart-Contract-Tutorials-C.jpg',
        route:
          'smart-contracts/guide/chains_and_nodes/setting-up-a-chain#deploying-a-wasm-contract',
        tags: ['text', 'video'],
      },
    ],
    [
      '@iota-wiki/plugin-tutorial',
      {
        title: 'Run a EVM Chain',
        description: 'In this tutorial you will learn how to run an EVM node.',
        preview: '/IOTA-Smart-Contract-Tutorials-D.jpg',
        route: 'smart-contracts/guide/evm/create-chain',
        tags: ['text', 'video'],
      },
    ],
    [
      '@iota-wiki/plugin-tutorial',
      {
        title: 'Deploy Solidity Smart Contract using Remix + Metamask',
        description:
          'In this tutorial you will learn how to deploy a solidity smart contract on EVM using remix and metamask.',
        preview: '/IOTA-Smart-Contract-Tutorials-E.jpg',
        route: 'smart-contracts/guide/evm/tooling#remix',
        tags: ['text', 'video'],
      },
    ],
    [
      '@iota-wiki/plugin-tutorial',
      {
        title: 'Deploy Solidity Smart Contract using Hardhat',
        description:
          'In this tutorial you will learn how to deploy a solidity smart contract on EVM using hardhat.',
        preview: '/IOTA-Smart-Contract-Tutorials-F.jpg',
        route: 'smart-contracts/guide/evm/tooling#hardhat',
        tags: ['text', 'video'],
      },
    ],
    [
      '@iota-wiki/plugin-tutorial',
      {
        title: 'Generate WASM Smart Contract using Schema Tool',
        description:
          'In this tutorial you will learn how to use schema tool to generate smart contract template code on rust and golang',
        preview: '/IOTA-Smart-Contract-Tutorials-G.jpg',
        route: 'smart-contracts/guide/wasm_vm/usage',
        tags: ['text', 'video'],
      },
    ],
    [
      '@iota-wiki/plugin-tutorial',
      {
        title: 'Generate WASM Smart Contract using Schema Tool in Typescript',
        description:
          'In this tutorial you will learn how to use schema tool to generate smart contract template code on typescript',
        preview: '/IOTA-Smart-Contract-Tutorials-G.jpg',
        route: 'https://www.youtube.com/watch?v=P5HMgmY3DMM',
        tags: ['video'],
      },
    ],
    [
      '@iota-wiki/plugin-tutorial',
      {
        title: 'Send Shimmer Tokens with wallet.rs',
        description:
          'In this tutorial you will learn how to send Shimmer Tokens with wallet.rs.',
        preview: '/send-shimmer-tokens-with-wallet-lib.png',
        route: 'tutorials/send-shimmer-tokens-with-wallet-lib',
        tags: ['text', 'wallet', 'getting-started', 'rust', 'shimmer'],
      },
    ],
    [
      '@iota-wiki/plugin-tutorial',
      {
        title: 'Interact with IOTA Node Extension (INX)',
        description:
          'In this tutorial you will learn how to interact with the IOTA Node Extension (INX) interface based on gRPC.',
        preview: '/hornet-inx-interaction.png',
        route: 'tutorials/hornet-inx-interaction',
        tags: ['text', 'getting-started', 'shimmer', 'js'],
      },
    ],
    [
      '@iota-wiki/plugin-tutorial',
      {
        title: 'Tokenless Data Notarization',
        description:
          'Proove that a block was part of the past Tangle, even if this part of the Tangle was already pruned from network nodes.',
        preview: '/proof-inclusion-of-a-block.png',
        route: 'tutorials/proof-inclusion-of-a-block',
        tags: ['text', 'getting-started', 'js', 'client', 'shimmer'],
      },
    ],
    [
      '@iota-wiki/plugin-tutorial',
      {
        title: 'Setup testnet address and receive funds from faucet',
        description:
          'In this tutorial you will learn how to create a seed and address with wallet.rs and receive testnet tokens from the faucet.',
        preview: '/wallet-setup.png',
        route: 'tutorials/wallet-setup',
        tags: ['text', 'getting-started', 'node_js', 'wallet', 'shimmer'],
      },
    ],
    [
      '@iota-wiki/plugin-tutorial',
      {
        title: 'How to Setup iota.js for Development',
        description:
          'In this tutorial you will learn how to create a new project, generate a new address and receive x funds from the faucet.',
        preview: '/setup_iota-js_for_development.png',
        route: 'tutorials/setup_iota-js_for_development',
        tags: ['text', 'getting-started', 'client', 'shimmer', 'js'],
      },
    ],
    [
      '@iota-wiki/plugin-tutorial',
      {
        title: 'Create a NFT with wallet.rs and IPFS',
        description:
          'In this tutorial you will learn how to create a NFT on the Shimmer network with wallet.rs and IPFS.',
        preview: '/create-nft-with-wallet-lib.png',
        route: 'tutorials/create-nft-with-wallet-lib',
        tags: [
          'text',
          'getting-started',
          'node_js',
          'wallet',
          'ipfs',
          'shimmer',
        ],
      },
    ],
    [
      '@iota-wiki/plugin-tutorial',
      {
        title: 'Send Shimmer Tokens with Javascript',
        description:
          'In this tutorial you will learn how to send Shimmer Tokens in the testnet.',
        preview: '/send-shimmer-tokens-with-javascript.png',
        route: 'tutorials/send-shimmer-tokens-with-javascript',
        tags: [
          'text',
          'shimmer',
          'javascript',
          'client',
          'getting-started',
          'iota.rs (js binding)',
          'shimmer',
        ],
      },
    ],
    [
      '@iota-wiki/plugin-tutorial',
      {
        title:
          'Connect to Shimmer EVM Testnet and deploy a Solidity Smart Contract',
        description:
          'In this tutorial, we will connect to Shimmer EVM Testnet, connect Metamask to it, get funded and deploy a smart contract in Solidity.',
        preview: '/connect-shimmerevm-testnet-and-deploy.png',
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
      '@iota-wiki/plugin-tutorial',
      {
        title: 'Deploy a Solidity Smart Contract Using Hardhat',
        description:
          'In this tutorial, you will learn how to set up Hardhat and use it to build, test and deploy a simple smart contract on ShimmerEVM.',
        preview: '/shimmerevm-hardhat.jpg',
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
    [
      '@iota-wiki/plugin-tutorial',
      {
        title: 'Create a Simple Voting dApp on ShimmerEVM',
        description:
          'This tutorial will guide you as you write and deploy a voting dApp on ShimmerEVM. You can vote on a few options and view the results; all data will be stored on-chain.',
        preview: '/shimmerevm-dapp-voting.jpg',
        route: 'tutorials/shimmerevm-dapp-voting',
        tags: ['text', 'shimmer', 'solidity', 'iscp'],
      },
    ],
    [
      '@iota-wiki/plugin-tutorial',
      {
        title: 'Setup WASP locally using Docker',
        description:
          'In this tutorial you will learn how to setup WASP and Hornet locally for Development setup.',
        preview: '/wasp-setup-shimmer.png',
        route: 'https://youtu.be/ltem9Bh_4hA',
        tags: ['text', 'shimmer', 'video', 'wasp', 'iscp'],
      },
    ],
  ],
  staticDirectories: [path.resolve(__dirname, 'static')],
};
