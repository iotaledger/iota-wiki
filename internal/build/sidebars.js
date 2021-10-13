module.exports = {
  build: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/architecture',
        'getting-started/environment',
        'getting-started/send-a-first-message',
      ],
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
