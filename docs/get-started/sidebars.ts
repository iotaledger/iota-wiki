module.exports = [
        {
            type: 'category',
            label: 'Introduction',
            collapsed: true,
            items: [
                {
                    type: 'category',
                    label: 'IOTA',
                    items:
                        [
                            'get-started/introduction/iota/introduction',
                            'get-started/introduction/iota/mainnet',
                            {
                                type: 'category',
                                label: 'IOTA Token',
                                items: [
                                    'get-started/introduction/iota/iota-token/distribution',
                                    'get-started/introduction/iota/iota-token/buying']
                            },
                            'get-started/introduction/iota/staking',
                        ]
                },
                {
                    type: 'category',
                    label: 'Shimmer',
                    items:
                        [
                            {
                                type: 'category',
                                label: 'Shimmer Token',
                                items: [
                                    'get-started/introduction/shimmer/shimmer-token/distribution',
                                    'get-started/introduction/shimmer/shimmer-token/buying']
                            },
                            'get-started/introduction/shimmer/staging-canary',
                        ]
                },
                {
                    type: 'category',
                    label: 'Community',
                    items:
                        [
                            'get-started/community/community-links',
                            'get-started/community/governance',
                        ]
                },
                {
                    type: 'category',
                    label: 'Programmes',
                    items:
                        [
                            'get-started/programmes/bug-bounties',
                            'get-started/programmes/EDF-grant-programme',
                            'get-started/programmes/touchpoint',
                        ]
                },
                {
                    type: 'category',
                    label: 'Wallets',
                    items:
                        [
                            'get-started/wallets/firefly',
                            {
                                type: 'link',
                                label: 'TanglePay',
                                href: 'https://tanglepay.com/',
                            }

                        ]
                },
                {
                    type: 'category',
                    label: 'Tools',
                    items:
                        [
                            {
                                type: 'link',
                                label: 'IOTA Explorer',
                                href: 'https://explorer.iota.org/mainnet',
                            },
                            {
                                type: 'link',
                                label: 'Shimmer Explorer',
                                href: 'https://explorer.chrysalis.network/',
                            }

                        ]
                },
                'get-started/research-papers',
                'get-started/glossary',
                'get-started/faq',
            ]
        }]
;
