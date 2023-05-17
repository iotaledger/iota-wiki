module.exports = {
  develop: [
    {
      type: 'category',
      label: 'Learn',
      items: [
        'introduction',
        {
          type: 'category',
          label: 'Seeds, Accounts and Addresses',
          items: [
            'seeds-accounts-and-addresses/seed-mnemonics',
            'seeds-accounts-and-addresses/accounts-and-addresses',
          ],
        },
        'simple-transfer',
        {
          type: 'category',
          label: 'Output Unlock Conditions',
          items: [
            'output-unlock-conditions/expiration',
            'output-unlock-conditions/timelock',
            'output-unlock-conditions/storage-deposit-return',
          ],
        },
        {
          type: 'category',
          label: 'Output Features',
          items: [
            'output-features/sender',
            'output-features/metadata',
            'output-features/tag',
          ],
        },
        {
          type: 'category',
          label: 'Alias Transactions',
          link: {
            type: 'doc',
            id: 'alias/introduction',
          },
          items: [
            {
              type: 'doc',
              id: 'alias/introduction',
              label: 'Introduction',
            },
            'alias/create',
            'alias/state-transitions',
            'alias/governance-transitions',
            'alias/destroy',
            'alias/unlock-alias-funds',
          ],
        },
        {
          type: 'category',
          label: 'Native Tokens and Foundries',
          items: [
            'native-token/introduction',
            'native-token/create-foundry',
            'native-token/mint-tokens',
            'native-token/melt-tokens',
            'native-token/burn-tokens',
            'native-token/storage-deposits',
          ],
        },
        {
          type: 'category',
          label: 'NFTs',
          items: [
            'nft/introduction',
            'nft/mint',
            'nft/transfer',
            'nft/claim',
            'nft/burn',
            'nft/nft-as-a-wallet',
            'nft/nft-collections',
          ],
        },

        //Identity
        {
          type: 'category',
          label: 'Identity',
          items: [
            {
              type: 'doc',
              id: 'identity/introduction',
              label: 'Introduction',
            },
            {
              type: 'doc',
              id: 'identity/decentralized_identity',
              label: 'Decentralized Identity',
            },
            {
              type: 'category',
              label: 'Decentralized Identifiers (DID)',
              items: [
                'identity/concepts/decentralized_identifiers/overview',
                'identity/concepts/decentralized_identifiers/alias',
              ],
            },

            {
              type: 'category',
              label: 'Verifiable Credentials',
              items: [
                'identity/concepts/verifiable_credentials/overview',
              ],
            },
            'identity/glossary',
            'identity/faq',
          ],
        },
      ],

    },
  ],
};
