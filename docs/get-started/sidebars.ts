module.exports = {
  getStarted: [
    {
      type: 'category',
      label: 'Introduction',
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Introduction',
        description:
          'Learn more about both our mainnet and our staging network Shimmer.',
        slug: '/introduction',
        keywords: ['introduction', 'iota', 'shimmer'],
      },
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
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'The Community',
      link: {
        type: 'doc',
        id: 'the-community/community-links',
      },
      collapsed: true,
      items: [
        'the-community/how-to-support',
        'the-community/discord',
        'the-community/x-teams',
        'the-community/social-media',
      ],
    },
    {
      type: 'category',
      label: 'Programs & Funding',
      items: [
        'programs/touchpoint',
        'programs/bug-bounties',
        'programs/community-treasury',
      ],
    },
    {
      type: 'category',
      label: 'Wallets',
      link: {
        type: 'generated-index',
        title: 'Wallets',
        description: 'A list of all wallets including community wallets.',
        slug: '/wallets',
        keywords: ['wallets', 'firefly', 'tanglepay'],
      },
      items: [
        'wallets/firefly',
        'wallets/bloom',
        {
          type: 'link',
          label: 'TanglePay',
          href: 'https://tanglepay.com/',
          description: 'Your IOTA & Shimmer Wallet for DeFi and NFTs.',
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
          href: 'https://explorer.shimmer.network/',
        },
      ],
    },
    'research-papers',
    'faq',
  ],
};
