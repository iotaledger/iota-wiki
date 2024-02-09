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
          label: 'IOTA Sandbox',
          href: '/iota-sandbox/welcome',
        },
        {
          type: 'link',
          label: 'CLI Wallet',
          href: '/cli-wallet/welcome',
        },
        {
          type: 'link',
          label: 'WASP CLI',
          href: '/wasp/how-tos/wasp-cli',
        },
        {
          label: 'Schema Tool',
          type: 'link',
          href: '/isc/schema/introduction',
        },
        {
          label: 'Explorer',
          type: 'link',
          href: 'https://explorer.shimmer.network',
        },
        {
          label: 'Shimmer EVM Explorer',
          type: 'link',
          href: 'https://explorer.evm.shimmer.network/',
        },
        {
          label: 'Shimmer EVM Toolkit',
          type: 'link',
          href: 'https://evm-toolkit.evm.shimmer.network/',
        },
        {
          label: 'Shimmer EVM Testnet Toolkit & Faucet',
          type: 'link',
          href: 'https://evm-toolkit.evm.testnet.shimmer.network/',
        },
        {
          label: 'Oracles for Shimmer EVM',
          type: 'doc',
          id: 'oracles',
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
          label: 'IotaSDK.NET',
          href: 'https://github.com/IOTA-NET/IotaSDK.NET',
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
