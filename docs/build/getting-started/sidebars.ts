module.exports = {
  build: [
    'welcome',
    {
      type: 'doc',
      label: 'Networks & Endpoints',
      id: 'networks-endpoints',
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
          href: '/wasp-cli/how-tos/wasp-cli',
        },
        {
          label: 'Schema Tool',
          type: 'link',
          href: '/wasp-wasm/how-tos/schema-tool/introduction',
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
        {
          type: 'link',
          label: 'Shimmer++',
          href: 'https://eddytheco.github.io/Shimmerpp/about/',
        },
      ],
    },
  ],
};
