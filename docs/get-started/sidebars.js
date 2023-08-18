module.exports = {
  'get-started': [
    {
      type: 'category',
      label: 'Introduction',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'IOTA',
          collapsed: false,
          items: [
            'introduction/iota/introduction',
            'introduction/iota/iota-token',
            'introduction/iota/staking',
          ],
        },
        {
          type: 'category',
          label: 'Shimmer',
          collapsed: false,
          items: [
            'introduction/shimmer/introduction',
            'introduction/shimmer/shimmer-token',
            'introduction/shimmer/governance',
          ],
        },
      ],
    },
    {
      type: 'doc',
      label: 'Community Links',
      id: 'community-links',
    },
    {
      type: 'category',
      label: 'Programmes',
      items: [
        'programmes/touchpoint',
        'programmes/EDF-grant-programme',
        'programmes/bug-bounties',
      ],
    },
    {
      type: 'category',
      label: 'Wallets',
      items: [
        'wallets/firefly',
        {
          type: 'link',
          label: 'TanglePay',
          href: 'https://tanglepay.com/',
        },
      ],
    },
    {
      type: 'category',
      label: 'Tools',
      items: [
        {
          type: 'link',
          label: 'IOTA Explorer',
          href: 'https://explorer.iota.org/mainnet',
        },
        {
          type: 'link',
          label: 'Shimmer Explorer',
          href: 'https://explorer.chrysalis.network/',
        },
      ],
    },
    'research-papers',
    'glossary',
    'faq',
  ],
};
