module.exports = {
  learn: [
    {
      type: 'category',
      label: 'About IOTA',
      collapsed: false,
      items: [
        'about-iota/an-introduction-to-iota',
        'about-iota/data-transfer',
        'about-iota/value-transfer',
        'about-iota/why-is-iota-feeless',
        'about-iota/roadmap-to-decentralization',
        'about-iota/messages',
        'about-iota/energy-efficiency',
      ],
    },
    {
      type: 'category',
      label: 'IOTA Token',
      collapsed: true,
      items: ['iota-token/buying-iota'],
    },
    {
      type: 'category',
      label: 'Wallets',
      collapsed: true,
      items: [
        'wallets/what-is-a-wallet',
        'wallets/firefly-wallet',
        'wallets/iota-devnet-wallet',
        'wallets/hardware-wallets',
      ],
    },
    {
      type: 'category',
      label: 'Networks',
      collapsed: true,
      items: [
        'networks/iota-1.5-chrysalis',
        'networks/iota-2.0-coordicide',
        'networks/testnets',
        'networks/network-token-migration',
      ],
    },
    {
      type: 'category',
      label: 'Resource Materials',
      collapsed: true,
      items: [
        'resource-materials/glossary',
        'resource-materials/fact-base',
        'resource-materials/infographics',
        'resource-materials/videos',
        "resource-materials/faq's",
      ],
    },
    {
      type: 'category',
      label: 'Research',
      collapsed: true,
      items: ['research/research-outline', 'research/research-papers'],
    },
    {
      type: 'category',
      label: 'Future of IOTA',
      collapsed: true,
      items: [
        'future/future-of-iota',
        {
          type: 'category',
          label: 'Smart Contracts',
          collapsed: false,
          items: [
            'future/smart-contracts/smart-contracts-introduction',
            'future/smart-contracts/smart-contracts-VM-and-languages',
            'future/smart-contracts/smart-contracts-validators',
            'future/smart-contracts/smart-contracts-chains',
            'future/smart-contracts/smart-contracts-dapps',
            'future/smart-contracts/smart-contracts-consensus',
            'future/smart-contracts/smart-contracts-tangle',
            'future/smart-contracts/smart-contracts-community-tutorials',
          ],
        },
      ],
    },
  ],
};
