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
          type: 'category',
          label: 'EVM Tools',
          collapsed: false,
          link: {
            type: 'generated-index',
            title: 'EVM Tools',
            slug: '/tools/evm',
          },
          items: [
            {
              type: 'category',
              label: 'IOTA',
              collapsed: false,
              link: {
                type: 'generated-index',
                title: 'IOTA EVM Tools',
                slug: '/tools/evm/iota',
              },
              items: [
                {
                  label: 'Explorer',
                  type: 'link',
                  href: 'https://explorer.evm.iota.org',
                },
                {
                  label: 'Toolkit',
                  type: 'link',
                  href: 'https://evm-toolkit.evm.iotaledger.net',
                },
              ],
            },
            {
              type: 'category',
              label: 'IOTA Testnet',
              collapsed: false,
              link: {
                type: 'generated-index',
                title: 'IOTA Testnet EVM Tools',
                slug: '/tools/evm/iota-testnet',
              },
              items: [
                {
                  label: 'Explorer',
                  type: 'link',
                  href: 'https://explorer.evm.testnet.iota.org',
                },
                {
                  label: 'Toolkit & Faucet',
                  type: 'link',
                  href: 'https://evm-toolkit.evm.testnet.iotaledger.net',
                },
              ],
            },
            {
              type: 'category',
              label: 'Shimmer',
              collapsed: true,
              link: {
                type: 'generated-index',
                title: 'ShimmerEVM Tools',
                slug: '/tools/evm/shimmer',
              },
              items: [
                {
                  label: 'Explorer',
                  type: 'link',
                  href: 'https://explorer.evm.shimmer.network',
                },
                {
                  label: 'Toolkit',
                  type: 'link',
                  href: 'https://evm-toolkit.evm.shimmer.network',
                },
              ],
            },
            {
              type: 'category',
              label: 'Shimmer Testnet',
              collapsed: true,
              link: {
                type: 'generated-index',
                title: 'ShimmerEVM Testnet Tools',
                slug: '/tools/evm/shimmer-testnet',
              },
              items: [
                {
                  label: 'Explorer',
                  type: 'link',
                  href: 'https://explorer.evm.testnet.shimmer.network',
                },
                {
                  label: 'EVM Testnet Toolkit & Faucet',
                  type: 'link',
                  href: 'https://evm-toolkit.evm.testnet.shimmer.network/',
                },
              ],
            },
            {
              label: 'Oracles for IOTA EVM and ShimmerEVM',
              type: 'doc',
              id: 'oracles',
            },
            {
              type: 'category',
              label: 'Safe Wallets',
              collapsed: false,
              link: {
                type: 'generated-index',
                title: 'Safe Wallets',
                slug: '/tools/evm/safe',
              },
              items: [
                {
                  type: 'link',
                  label: 'IOTA Safe Wallet',
                  href: 'https://safe.iotaledger.net/',
                },
                {
                  type: 'link',
                  label: 'Shimmer Safe Wallet',
                  href: 'https://safe.smr.network/',
                },
              ],
            },
            {
              label: 'Multicall',
              type: 'doc',
              id: 'multicall',
            },
            {
              type: 'link',
              label: 'WASP CLI',
              description:
                'Wasp CLI is a command line tool for interacting with the Wasp node.',
              href: '/wasp/how-tos/wasp-cli',
            },
          ],
        },
        {
          label: 'Explorer',
          type: 'link',
          href: 'https://explorer.iota.org',
        },
        {
          label: 'IOTA Testnet Faucet',
          type: 'link',
          href: 'https://faucet.testnet.iotaledger.net',
        },
        {
          type: 'link',
          label: 'CLI Wallet',
          href: '/cli-wallet/welcome',
        },
        {
          type: 'link',
          label: 'IOTA Sandbox',
          href: '/iota-sandbox/welcome',
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
