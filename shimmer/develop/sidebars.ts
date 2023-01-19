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
                        'what-is-shimmer/nodes/about-nodes',
                        'what-is-shimmer/nodes/hornet',]
                },
                'what-is-shimmer/libraries/client-libraries',
            ],
        },
        {
            type: 'category',
            label: 'Start Building',
            items: [
                {
                    type: 'category',
                    label: 'Intro to Clients',
                    link:{
                        type:'doc',
                        id: 'start-building/intro-to-clients/getting-started',
                    },
                    items: [
                        'start-building/intro-to-clients/getting-started',
                        'start-building/intro-to-clients/getting-started-with-imports',
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

        {
            type: 'category',
            label: 'Documentation',
            items:[
                {
                    type: 'link',
                    label: 'Protocol Overview',
                    href: '/introduction/welcome',
                },
                {
                    type: 'category',
                    label: 'Smart Contracts',
                    collapsed: true,
                    items: [
                        {
                            label: 'Documentation',
                            type: 'link',
                            href: '/smart-contracts/overview',
                        },
                        {
                            label: 'Node (WASP)',
                            type: 'link',
                            href: '/smart-contracts/guide/chains_and_nodes/running-a-node',
                        },
                        {
                            type: 'link',
                            label: 'WASP CLI',
                            href: '/smart-contracts/guide/chains_and_nodes/wasp-cli',
                        },
                        {
                            label: 'Schema Tool',
                            type: 'link',
                            href: '/smart-contracts/guide/wasm_vm/schema',
                        },
                    ],
                },
                {
                    type: 'category',
                    label: 'Libraries',
                    collapsed: false,
                    items: [
                        {
                            label: 'Client',
                            type: 'link',
                            href: '/iota.rs/welcome',
                        },
                        {
                            label: 'Wallet.rs',
                            type: 'link',
                            href: '/wallet.rs/welcome',
                        },
                        {
                            label: 'Client Typescript',
                            type: 'link',
                            href: '/iotajs/welcome',
                        },
                        {
                            label: 'Identity',
                            type: 'link',
                            href: '/identity.rs/introduction',
                        },
                        {
                            label: 'Stronghold',
                            type: 'link',
                            href: '/stronghold.rs/welcome',
                        },
                    ],
                },
                {
                    type: 'category',
                    label: 'Node Software',
                    collapsed: false,
                    items: [
                        {
                            label: 'Hornet',
                            type: 'link',
                            href: '/hornet/welcome',
                        },
                        {
                            type: 'category',
                            label: 'INX Plugins',
                            collapsed: true,
                            items: [
                                {
                                    type: 'link',
                                    label: 'Indexer',
                                    href: '/inx-indexer/welcome',
                                },
                                {
                                    type: 'link',
                                    label: 'MQTT',
                                    href: '/inx-mqtt/welcome',
                                },
                                {
                                    type: 'link',
                                    label: 'PoI',
                                    href: '/inx-poi/welcome',
                                },
                                {
                                    type: 'link',
                                    label: 'Participation',
                                    href: '/inx-participation/welcome',
                                },
                                {
                                    type: 'link',
                                    label: 'Coordinator',
                                    href: '/inx-coordinator/welcome',
                                },
                                {
                                    type: 'link',
                                    label: 'Faucet',
                                    href: '/inx-faucet/welcome',
                                },
                                {
                                    type: 'link',
                                    label: 'Dashboard',
                                    href: '/inx-dashboard/welcome',
                                },
                                {
                                    type: 'link',
                                    label: 'Spammer',
                                    href: '/inx-spammer/welcome',
                                },
                                {
                                    type: 'link',
                                    label: 'Wasp',
                                    href: '/smart-contracts/guide/chains_and_nodes/running-a-node',
                                },
                                {
                                    type: 'link',
                                    label: 'Chronicle',
                                    href: '/chronicle/welcome',
                                },
                            ],
                        },
                    ],
                },
            ]
        }
    ],
};
