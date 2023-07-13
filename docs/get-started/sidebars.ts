module.exports = {
    getStarted: [
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
                            'introduction/iota/introduction',
                            'introduction/iota/mainnet',
                            {
                                type: 'category',
                                label: 'IOTA Token',
                                items: [
                                    'introduction/iota/iota-token/distribution',
                                    'introduction/iota/iota-token/buying']
                            },
                            'introduction/iota/staking',
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
                                    'introduction/shimmer/shimmer-token/distribution',
                                    'introduction/shimmer/shimmer-token/buying']
                            },
                            'introduction/shimmer/staging-canary',
                        ]
                },
                {
                    type: 'category',
                    label: 'Community',
                    items:
                        [
                            'community/community-links',
                            'community/governance',
                        ]
                },
                {
                    type: 'category',
                    label: 'Programmes',
                    items:
                        [
                            'programmes/bug-bounties',
                            'programmes/EDF-grant-programme',
                            'programmes/touchpoint',
                        ]
                },
                {
                    type: 'category',
                    label: 'Wallets',
                    items:
                        [
                            'wallets/firefly',
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
                'research-papers',
                'glossary',
                'faq',
            ]
        }]
}
;
