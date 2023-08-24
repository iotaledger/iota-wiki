module.exports = {
  build: [
    {
      type: 'category',
      label: 'Networks',
      collapsed: true,
      items: [
        'networks/overview',
        'networks/mainnet',
        'networks/shimmer',
        'networks/public-testnets',
        'networks/legacy-mainnet',
      ],
    },
    {
      type: 'category',
      label: 'Endpoints',
      collapsed: true,
      items: [
        'endpoints/mainnet',
        'endpoints/devnet',
        'endpoints/shimmer',
        'endpoints/testnet',
      ],
    },
    {
      type: 'category',
      label: 'Tools',
      link: {
        type: 'generated-index',
        title: 'Tools',
        slug: '/tools',
      },
      items: [
        {
          type: 'link',
          label: 'CLI Wallet',
          href: '/cli-wallet/welcome',
        },
        {
          type: 'link',
          label: 'WASP CLI',
          href: '/smart-contracts/guide/chains_and_nodes/wasp-cli',
        },
        {
          label: 'Schema Tool',
          type: 'link',
          href: '/smart-contracts/guide/wasm_vm/schema',
        },
        {
          label: 'Explorer',
          type: 'link',
          href: 'https://explorer.shimmer.network',
        },
        {
          label: 'Testnet Faucet',
          type: 'link',
          href: 'https://faucet.testnet.shimmer.network',
        },
      ],
    },
    {
      type: 'category',
      label: 'Community Libs',
      collapsed: true,
      items: [
        {
          type: 'link',
          label: 'tanglePHP',
          href: 'https://tanglephp.com/',
        },
        {
          type: 'link',
          label: 'IotaWallet.NET',
          href: 'https://github.com/IOTA-NET/IotaWallet.NET',
        },
      ],
    },
  ],
};
