module.exports = {
    wallets: [
      'what-is-a-wallet',
      {
        type: 'category',
        label: 'Official',
        collapsed: true,
        items: [
          {
            type: 'category',
            label: 'Firefly',
            collapsed: false,
            items: [
              'firefly/general',
              'firefly/user-guide',
              'firefly/user-guide-ledger',
              'firefly/faq-and-troubleshooting',
            ],
          },
        ],
      },
      {
        type: 'category',
        label: 'Third Party',
        collapsed: false,
        items: [
          {
            type: 'link',
            label: 'Tanglepay',
            href:  'https://tanglepay.com'
          }
        ],
      },
      {
        type: 'category',
        label: 'Developer',
        collapsed: true,
        items: [
          {
            type: 'link',
            label: 'CLI Wallet',
            href:  'cli-wallet/welcome'
          },
          'developer/iota-devnet-wallet'
        ],
      },
    ]
};