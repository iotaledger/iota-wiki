module.exports = {
  participate: [
    {
      type: 'category',
      label: 'Support The Network',
      collapsed: false,
      items: [
        'support-the-network/about-nodes',
        'support-the-network/become-a-node-operator',
        'support-the-network/node-software',
      ],
    },
    {
      type: 'category',
      label: 'The Community',
      collapsed: true,
      items: [
        'the-community/discord',
        'the-community/x-teams',
        'the-community/git-hub',
        'the-community/social-media',
      ],
    },
    {
      type: 'link',
      label: 'Partnerships',
      href: 'https://www.iota.org/solutions/partnerships',
    },
    {
      type: 'category',
      label: 'Funding',
      collapsed: true,
      items: ['funding/edf-funding', 'funding/community-treasury'],
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
      label: 'Frameworks',
      collapsed: true,
      items: [
        'frameworks/introduction',
        'frameworks/streams',
        'frameworks/identity',
        'frameworks/smart-contracts',
        'frameworks/access',
        'frameworks/stronghold',
        'frameworks/oracles',
        {
          type: 'category',
          label: 'Utilities',
          collapsed: true,
          items: [
            'frameworks/utilities/tangle-explorer',
            'frameworks/utilities/visualizer',
            'frameworks/utilities/iota-ipfs',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Contribute To Wiki',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Getting Started',
          items: [
              'contribute-to-wiki/getting_started/welcome',
              'contribute-to-wiki/getting_started/quick_advice',
          ],
        },
        {
          type: 'category',
          label: 'How Tos',
          items: [
            'contribute-to-wiki/how_tos/developer',
            'contribute-to-wiki/how_tos/documentation_setup',
            'contribute-to-wiki/how_tos/request_tw',
          ],
        },
        {
          type: 'category',
          label: 'Concepts',
          items: [
              'contribute-to-wiki/concepts/third-party_works',
            {
              type: 'category',
              label: 'Writing Tools',
              items: [
                'contribute-to-wiki/concepts/tools/overview',
                'contribute-to-wiki/concepts/tools/questions',
                'contribute-to-wiki/concepts/tools/mind_map',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Reference',
          items: [
            {
              type: 'category',
              label: 'Style Guidelines',
              items:
              [
                'contribute-to-wiki/reference/style/manifesto',
                'contribute-to-wiki/reference/style/structure',
                'contribute-to-wiki/reference/style/matter',
                'contribute-to-wiki/reference/style/form',
                'contribute-to-wiki/reference/style/mechanics',
                'contribute-to-wiki/reference/style/formatting',
              ],
            },
            {
              type: 'category',
              label: 'Documentation Structure',
              items:
              [
                'contribute-to-wiki/reference/structure/overview',
                'contribute-to-wiki/reference/structure/getting_started',
                'contribute-to-wiki/reference/structure/how_tos',
                'contribute-to-wiki/reference/structure/tutorials',
                'contribute-to-wiki/reference/structure/concepts',
                'contribute-to-wiki/reference/structure/reference',
              ],
            },
          ],
        },
      ],
    },
  ],
};
