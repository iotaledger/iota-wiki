module.exports = {
  develop: [
    {
      type: 'category',
      label: 'Learn',
      items: [
        'introduction',
        {
          type: 'category',
          label: 'Intro to Clients',
          items: [
            {
              type: 'category',
              label: 'Seeds, Accounts and Addresses',
              items: [
                'intro-to-clients/seeds-accounts-and-addresses/seed-mnemonics',
                'intro-to-clients/seeds-accounts-and-addresses/accounts-and-addresses',
              ],
            },
            'intro-to-clients/simple-transfer',
          ],
        },
        {
          type: 'category',
          label: 'Clients in Shimmer',
          items: [
            {
              type: 'category',
              label: 'Output Unlock Conditions',
              items: [
                'clients-in-shimmer/output-unlock-conditions/expiration',
                'clients-in-shimmer/output-unlock-conditions/timelock',
                'clients-in-shimmer/output-unlock-conditions/storage-deposit-return',
              ],
            },
            {
              type: 'category',
              label: 'Output Features',
              items: [
                'clients-in-shimmer/output-features/sender',
                'clients-in-shimmer/output-features/metadata',
                'clients-in-shimmer/output-features/tag',
              ],
            },
            {
              type: 'category',
              label: 'Alias Transactions',
              items: [
                {
                  type: 'doc',
                  id: 'clients-in-shimmer/alias/introduction',
                  label: 'Introduction',
                },
                'clients-in-shimmer/alias/create',
                'clients-in-shimmer/alias/state-transitions',
                'clients-in-shimmer/alias/governance-transitions',
                'clients-in-shimmer/alias/destroy',
                'clients-in-shimmer/alias/unlock-alias-funds',
              ],
            },
            {
              type: 'category',
              label: 'Native Tokens and Foundries',
              items: [
                'clients-in-shimmer/native-token/introduction',
                'clients-in-shimmer/native-token/create-foundry',
                'clients-in-shimmer/native-token/mint-tokens',
                'clients-in-shimmer/native-token/melt-tokens',
                'clients-in-shimmer/native-token/burn-tokens',
                'clients-in-shimmer/native-token/storage-deposits',
              ],
            },
            {
              type: 'category',
              label: 'NFTs',
              items: [
                'clients-in-shimmer/nft/introduction',
                'clients-in-shimmer/nft/mint',
                'clients-in-shimmer/nft/transfer',
                'clients-in-shimmer/nft/claim',
                'clients-in-shimmer/nft/burn',
                'clients-in-shimmer/nft/nft-as-a-wallet',
                'clients-in-shimmer/nft/nft-collections',
              ],
            },
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
              items: ['identity/concepts/verifiable_credentials/overview'],
            },
            'identity/glossary',
            'identity/faq',
          ],
        },
      ],
    },
  ],
};
