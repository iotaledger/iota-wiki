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
