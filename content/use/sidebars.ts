module.exports = {
  use: [
    {
      type: 'category',
      label: 'Wallets',
      collapsed: true,
      items: [
        'wallets/what-is-a-wallet',
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
              href:  '/cli-wallet/welcome'
            },
          ],
        },
      ],
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
  ]
};