
module.exports = 
{   
    learn: [
        {
            type: 'category',
            label: 'About IOTA',
            collapsed: false,
            items: [
                'learn/about-iota/an-introduction-to-iota', 
                'learn/about-iota/data-transfer', 
                'learn/about-iota/value-transfer',
                'learn/about-iota/why-is-iota-feeless',
                'learn/about-iota/roadmap-to-decentralization',
                'learn/about-iota/messages',
                'learn/about-iota/security',
                'learn/about-iota/energy-efficiency',
            ],
        },
        {
            type: 'category',
            label: 'IOTA Token',
            collapsed: true,
            items: [
                'learn/iota-token/overview',
                'learn/iota-token/buying-iota',
                'learn/iota-token/exchanges',
                'learn/iota-token/transfering-tokens',
                'learn/iota-token/token-security',
            ],
        },
        {
            type: 'category',
            label: 'Wallets',
            collapsed: true,
            items: [
                'learn/wallets/what-is-a-wallet',
                'learn/wallets/firefly-wallet',
                'learn/wallets/iota-devnet-wallet',
                'learn/wallets/hardware-wallets',
            ],
        },
        {
            type: 'category',
            label: 'Networks',
            collapsed: true,
            items: [
                'learn/networks/iota-1.5-chrysalis',
                'learn/networks/iota-2.0-coordicide',
                'learn/networks/testnets',
                'learn/networks/network-token-migration'
            ],
        },
        {
            type: 'category',
            label: 'Resource Materials',
            collapsed: true,
            items: [
                'learn/resource-materials/glossary',
                'learn/resource-materials/fact-base',
                'learn/resource-materials/infographics',
                'learn/resource-materials/videos',
                'learn/resource-materials/faq\'s',
            ],
          },
          {
            type: 'category',
            label: 'Research',
            collapsed: true,
            items: [
                'learn/research/research-outline',
                'learn/research/research-papers',
                'learn/research/grants',
          ],
        },
    ],
    
    participate: [
        {
            type: 'category',
            label: 'Support The Network',
            collapsed: false,
            items: [
                'participate/support-the-network/about-nodes',
                'participate/support-the-network/become-a-node-operator',
                'participate/support-the-network/node-software',
                'participate/support-the-network/create-an-application',
            ],
        },        
        {
            type: 'category',
            label: 'The Community',
            collapsed: true,
            items: [
                'participate/the-community/discord',
                'participate/the-community/x-teams',
                'participate/the-community/git-hub',
                'participate/the-community/social-media',
            ],
        },        
        {
            type: 'category',
            label: 'Partnerships',
            collapsed: true,
            items: [
                'participate/partnerships/iota-partnerships',
            ],
        },        
        {
            type: 'category',
            label: 'Funding',
            collapsed: true,
            items: [
                'participate/funding/edf-funding',
                'participate/funding/community-treasury',
            ],
        }, 
        {
            type: 'category',
            label: 'Use Cases',
            collapsed: true,
            items: [
                'participate/use-cases/industry-applications',
                'participate/use-cases/internet-of-things',
                'participate/use-cases/digital-assets',
                'participate/use-cases/nfts',
                'participate/use-cases/data-confidence',
                'participate/use-cases/eco-social-projects',
                'participate/use-cases/private-tangle',
            ],
        },
        {
            type: 'category',
            label: 'Solutions',
            collapsed: true,
            items: [
                'participate/solutions/introduction',
                'participate/solutions/streams',
                'participate/solutions/identity',
                'participate/solutions/smart-contracts',
                'participate/solutions/access',
                'participate/solutions/stronghold',
                'participate/solutions/oracles',
                {
                    type: 'category',
                    label: 'Utilities',
                    collapsed: true,
                    items: [
                        'participate/solutions/utilities/tangle-explorer',
                        'participate/solutions/utilities/visualizer',
                        'participate/solutions/utilities/iota-ipfs',
                    ],
                },
            ],
        },
        {
            type: 'category',
            label: 'Contribute To Wiki',
            collapsed: true,
            items: [
                'participate/contribute-to-wiki/welcome',
                {
                    type: 'category',
                    label: 'For Community',
                    items: 
                    [
                        'participate/contribute-to-wiki/for_community/community_guide',
                    ],
                },
                {
                    type: 'category',
                    label: 'For Developers',
                    items: 
                    [
                      {
                        type: 'doc',
                        label: 'Developer\'s Guide',
                        id: 'participate/contribute-to-wiki/for_devs/developer_guide'
                      },
                      {
                        type: 'category',
                        label: 'Toolbox',
                        items:
                        [
                          {
                            type: 'doc',
                            label: 'Introduction',
                            id: 'participate/contribute-to-wiki/for_devs/toolbox/toolbox'
                          },
                          {
                            type: 'doc',
                            label: 'The Right Questions',
                            id: 'participate/contribute-to-wiki/for_devs/toolbox/questions'
                          },
                          {
                            type: 'doc',
                            label: 'Mind Map',
                            id: 'participate/contribute-to-wiki/for_devs/toolbox/mind_map'
                          },
                        ]
                      },
                      {
                        type: 'doc',
                        label: 'Request a Technical Writer',
                        id: 'participate/contribute-to-wiki/for_devs/request_tw'
                      }
                    ],
                },
                {
                type: 'category',
                label: 'For Writers',
                items: 
                [
                    {
                    type: 'doc',
                    label: 'Technical Writer\'s Guide',
                    id: 'participate/contribute-to-wiki/for_tws/writer_guide'
                    },
                    {
                    type: 'doc',
                    label: 'Style Guide',
                    id: 'participate/contribute-to-wiki/for_tws/style_guide'
                    },
                    {
                    type: 'doc',
                    label: 'Internal Review Process',
                    id: 'participate/contribute-to-wiki/for_tws/internal_review',
                    },
                ],
                },
            ],
        },
    ],


    build: [
        {
            type: 'category',
            label: 'Getting Started',
            collapsed: false,
            items: [
                'build/getting-started/architecture',
                'build/getting-started/environment',
                'build/getting-started/send-a-first-message',
            ],
        },        
        {
            type: 'category',
            label: 'Fundamentals',
            collapsed: true,
            items: [
                'build/fundamentals/cryptography',
                'build/fundamentals/consensus',
                'build/fundamentals/mana',
                'build/fundamentals/utxo',
                'build/fundamentals/dapps',
            ],
        },        
        {
            type: 'category',
            label: 'Exchange Integration',
            collapsed: true,
            items: [
                'build/exchange-integration/exchange-integration-guide',
            ],
        },        
        {
            type: 'category',
            label: 'Tutorials',
            collapsed: true,
            items: [
                'build/tutorials/hackster',
                'build/tutorials/youtube',
                'build/tutorials/twitch',
            ],
        },
    ],   
};
