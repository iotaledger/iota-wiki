module.exports = {
  build: [
    'welcome',
    {
      type: 'category',
      label: 'Networks',
      collapsed: true,
      items: ['networks/iota-1.5', 'networks/iota-2.0'],
    },
    {
      type: 'category',
      label: 'Fundamentals',
      collapsed: true,
      items: [
        'fundamentals/cryptography',
        'fundamentals/consensus',
        'fundamentals/mana',
        'fundamentals/utxo',
        'fundamentals/dapps',
      ],
    },
    {
      type: 'category',
      label: 'Exchange Integration',
      collapsed: true,
      items: ['exchange-integration/exchange-integration-guide'],
    },
    {
      type: 'category',
      label: 'Tutorials',
      collapsed: true,
      items: ['tutorials/hackster', 'tutorials/youtube', 'tutorials/twitch'],
    },
  ],
};
