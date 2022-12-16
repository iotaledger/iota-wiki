module.exports = {
  use: [
    {
      type: 'category',
      label: 'Wallets',
      collapsed: false,
      items: [
        'wallets/what-is-a-wallet',
        {
          type: 'category',
          label: 'Official',
          collapsed: false,
          items: [
            {
              type: 'category',
              label: 'Firefly',
              collapsed: false,
              items: [
                'wallets/firefly/general',
                'wallets/firefly/user-guide',
                'wallets/firefly/user-guide-ledger',
                'wallets/firefly/faq-and-troubleshooting',
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
              href: 'https://tanglepay.com',
            },
          ],
        },
      ],
    },
  ],
};
