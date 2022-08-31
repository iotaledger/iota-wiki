module.exports = {
  learn: [
    {
      type: 'category',
      label: 'About IOTA',
      collapsed: false,
      items: [
        'about-iota/an-introduction-to-iota',
        'about-iota/tangle',
        'about-iota/data-transfer',
        'about-iota/value-transfer',
        'about-iota/why-is-iota-feeless',
        'about-iota/coordinator',
        'about-iota/roadmap-to-decentralization',
        'about-iota/messages',
        'about-iota/energy-efficiency',
      ],
    },
    {
      type: 'category',
      label: 'IOTA Token',
      collapsed: true,
      items: ['iota-token/buying-iota', 'iota-token/staking-iota'],
    },
    {
      type: 'category',
      label: 'Media Library',
      collapsed: true,
      items: [
        'media-library/infographics',
        'media-library/project-presentations',
        'media-library/videos',
      ],
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
          collapsed: true,
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
        'future/shimmer',
        'future/assembly',
        'future/role-of-iota',
        'future/dust-protection',
        'future/nfts',
      ],
    },
    'glossary',
    'faqs',
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
      label: 'Funding',
      collapsed: true,
      items: ['funding/edf-funding', 'funding/community-treasury'],
    },
    {
      type: 'link',
      label: 'Partnerships',
      href: 'https://www.iota.org/solutions/partnerships',
    },
    {
      type: 'category',
      label: 'The Community',
      collapsed: true,
      items: [
        'the-community/how-to-support',
        'the-community/discord-verification',
        'the-community/x-teams',
        'the-community/git-hub',
        'the-community/social-media',
      ],
    },
    {
      type: 'category',
      label: 'Contribute To Wiki',
      collapsed: true,
      items: [
        {
          type: 'doc',
          label: 'Welcome',
          id:  'contribute-to-wiki/welcome',
        },
        {
          type: 'category',
          label: 'Getting Started',
          items: [
            'contribute-to-wiki/getting_started/edit_an_article',
            'contribute-to-wiki/getting_started/developer',
            'contribute-to-wiki/getting_started/quick_advice',
          ],
        },
        {
          type: 'category',
          label: 'How Tos',
          items: [
            'contribute-to-wiki/how_tos/create_an_issue',
            'contribute-to-wiki/how_tos/write_a_good_tutorial',
            'contribute-to-wiki/how_tos/documentation_setup',
            'contribute-to-wiki/how_tos/how_to_write_how_tos',
            'contribute-to-wiki/how_tos/request_tw',
          ],
        },
        {
          type: 'category',
          label: 'Explanations',
          items: [
              'contribute-to-wiki/explanations/third-party_works',
            {
              type: 'category',
              label: 'Writing Tools',
              items: [
                'contribute-to-wiki/explanations/tools/writing_tools',
                'contribute-to-wiki/explanations/tools/questions',
                'contribute-to-wiki/explanations/tools/mind_map',
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
                'contribute-to-wiki/reference/structure/explanations',
                'contribute-to-wiki/reference/structure/reference',
              ],
            },
          ],
        },
      ],
    },
  ],
};
