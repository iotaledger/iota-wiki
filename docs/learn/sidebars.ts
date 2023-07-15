module.exports = {
  build: [
    {
      type: 'category',
      label: 'Stardust',
      collapsed: true,
      items: [
        'stardust/introduction',
        {
          type: 'category',
          label: 'Core Concepts',
          items: [
            'stardust/core-concepts/multi-asset-ledger',
            'stardust/core-concepts/consensus',
            'stardust/core-concepts/output-unlock-conditions',
            'stardust/core-concepts/output-features',
            'stardust/core-concepts/storage-deposit',
          ],
        },
        'stardust/tips',
      ],
    },
    {
      type: 'category',
      label: 'Chrysalis',
      collapsed: true,
      items: [
        'chrysalis/introduction',
        {
          type: 'category',
          label: 'Core Concepts',
          items: [
            'chrysalis/core-concepts/white-flag-consensus',
            'chrysalis/core-concepts/switch-to-UTXO',
            'chrysalis/core-concepts/EdDSA-support',
            'chrysalis/core-concepts/binary-transaction-layout',
          ],
        },
        'chrysalis/tips',
      ],
    },
    {
      type: 'category',
      label: 'IOTA 2.0',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Introduction',
          items: [
            'iota2.0/introduction/five-principles',
            'iota2.0/introduction/digital-autonomy',
          ],
        },
        {
          type: 'category',
          label: 'Core Concepts',
          items: [
            'iota2.0/core-concepts/consensus',
            'iota2.0/core-concepts/mana',
            'iota2.0/core-concepts/data-flow',
            'iota2.0/core-concepts/networking',
            'iota2.0/core-concepts/data-structures',
            'iota2.0/core-concepts/validators',
            'iota2.0/core-concepts/communication',
          ],
        },
        'iota2.0/tips',
      ],
    },
  ],
};
