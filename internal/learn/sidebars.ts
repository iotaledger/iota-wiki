module.exports = {
  learn: [
    {
      type: 'category',
      label: 'About IOTA',
      collapsed: false,
      items: [
        'about-iota/an-introduction-to-iota',
        'about-iota/data-transfer',
        'about-iota/value-transfer',
        'about-iota/why-is-iota-feeless',
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
      items: ['media-library/infographics','media-library/project-presentations', 'media-library/videos'],
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
        'the-community/discord',
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
        'contribute-to-wiki/welcome',
        {
          type: 'category',
          label: 'For Community',
          items: ['contribute-to-wiki/for_community/community_guide'],
        },
        {
          type: 'category',
          label: 'For Developers',
          items: [
            {
              type: 'doc',
              label: "Developer's Guide",
              id: 'contribute-to-wiki/for_devs/developer_guide',
            },
            {
              type: 'category',
              label: 'Toolbox',
              items: [
                {
                  type: 'doc',
                  label: 'Introduction',
                  id: 'contribute-to-wiki/for_devs/toolbox/toolbox',
                },
                {
                  type: 'doc',
                  label: 'The Right Questions',
                  id: 'contribute-to-wiki/for_devs/toolbox/questions',
                },
                {
                  type: 'doc',
                  label: 'Mind Map',
                  id: 'contribute-to-wiki/for_devs/toolbox/mind_map',
                },
              ],
            },
            {
              type: 'doc',
              label: 'Request a Technical Writer',
              id: 'contribute-to-wiki/for_devs/request_tw',
            },
          ],
        },
        {
          type: 'category',
          label: 'For Writers',
          items: [
            {
              type: 'doc',
              label: "Technical Writer's Guide",
              id: 'contribute-to-wiki/for_tws/writer_guide',
            },
            {
              type: 'doc',
              label: 'Structure',
              id: 'contribute-to-wiki/for_tws/structure',
            },
            {
              type: 'doc',
              label: 'Matter',
              id: 'contribute-to-wiki/for_tws/matter',
            },
            {
              type: 'doc',
              label: 'Form',
              id: 'contribute-to-wiki/for_tws/form',
            },
            {
              type: 'doc',
              label: 'Mechanics',
              id: 'contribute-to-wiki/for_tws/mechanics',
            },
            {
              type: 'doc',
              label: 'Formatting',
              id: 'contribute-to-wiki/for_tws/formatting',
            },
            {
              type: 'doc',
              label: 'Third-Party Works',
              id: 'contribute-to-wiki/for_tws/third-party_works',
            },
          ],
        },
      ],
    },
  ],
};
