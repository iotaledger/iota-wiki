module.exports = {
    develop: [
        'getting-started',
        {
            type: 'category',
            label: 'What is Shimmer?',
            link:{
                type: 'doc',
                id:'what-is-shimmer/introduction',
            },
            items: [
                'what-is-shimmer/networks',
                'what-is-shimmer/tokens-and-wallets',
                {
                    type:'category',
                    label: 'Nodes',
                        link:{
                        type:'doc',
                            id:'what-is-shimmer/nodes/about-nodes',
                        },
                        items:[
                'what-is-shimmer/nodes/hornet',]
                },
                'what-is-shimmer/libraries/client-libraries',
            ],
        },
        {
            type: 'category',
            label: 'Start building',
            items: [
                {
                    type: 'category',
                    label: 'Intro to Clients',
                    items: [
                        'start-building/intro-to-clients/seeds-accounts-and-addresses',
                        'start-building/intro-to-clients/outputs-and-transactions'
                    ],
                },
                {
                    type: 'category',
                    label: 'Clients in Shimmer',
                    items: [
                        'start-building/clients-in-shimmer/output-features',
                        'start-building/clients-in-shimmer/unlock-conditions',
                        'start-building/clients-in-shimmer/alias-outputs',
                        'start-building/clients-in-shimmer/foundries-and-native-tokens',
                        'start-building/clients-in-shimmer/NFTs',
                    ],
                },
                {
                    type: 'category',
                    label: 'Nodes',
                    items: [
                        'start-building/nodes/run-your-own-node/getting_started',
                        'start-building/nodes/run-your-own-node/install-using-docker',
                        'start-building/nodes/run-your-own-node/configure-your-node',
                        'start-building/nodes/run-your-own-node/add-peers',
                        'start-building/nodes/run-your-own-node/install-plugins',
                        {
                            type: 'category',
                            label: 'Core REST API',
                            collapsed: true,
                            items: require('./start-building/nodes/core-rest-api/sidebar'),
                        },
                    ],
                },
                {
                    type: 'category',
                    label: 'Smart Contracts',
                    items: [
                        'start-building/nodes/run-your-own-node/getting_started',
                        'start-building/nodes/run-your-own-node/install-using-docker',
                        'start-building/nodes/run-your-own-node/configure-your-node',
                        'start-building/nodes/run-your-own-node/add-peers',
                        'start-building/nodes/run-your-own-node/install-plugins',
                    ],
                },
                {
                    type: 'link',
                    label: 'Tutorials',
                    href: '/tutorials',
                },
            ],
        },
    ],
};
