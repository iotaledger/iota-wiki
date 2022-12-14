module.exports = {
  about: [
    {
      type: 'category',
      label: 'How It Works',
      collapsed: false,
      items: [
        'about-iota/an-introduction-to-iota',
        'about-iota/tangle',
        'about-iota/data-transfer',
        'about-iota/value-transfer',
        'about-iota/why-is-iota-feeless',
        'about-iota/coordinator',
        'about-iota/roadmap-to-decentralization',
        'about-iota/messages',
        'about-iota/energy-efficiency',
      ],
    },
    {
      type: 'category',
      label: 'IOTA Token',
      collapsed: true,
      items: ['iota-token/buying-iota', 'iota-token/staking-iota'],
    },
    {
      type: 'category',
      label: 'Use Cases',
      collapsed: true,
      items: [
        'use-cases/data-confidence',
        'use-cases/eco-social-projects',
        'use-cases/healthcare',
        'use-cases/industry-applications',
        'use-cases/mobility',
        'use-cases/real-estate',
        'use-cases/trade-and-supply-chain',
      ],
    },
    {
      type: 'category',
      label: 'Research',
      collapsed: true,
      items: [
        'research/research-outline',
        'research/research-papers',
        'research/iota-2.0-coordicide',
        {
          type: 'link',
          label: 'Coordicide Specs',
          href: '/IOTA-2.0-Research-Specifications/Preface',
        },
        {
          type: 'link',
          label: 'GoShimmer',
          href: '/goshimmer/welcome',
        },
        'research/iota-devnet-wallet',
      ],
    },
    'glossary',
    'faqs',
  ],
};
