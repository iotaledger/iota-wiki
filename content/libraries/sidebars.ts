module.exports = {
    libraries: [
        'introduction',
        'streams',
        'identity',
        'smart-contracts',
        'access',
        'stronghold',
        'oracles',
        {
            type: 'category',
            label: 'Utilities',
            collapsed: true,
            items: [
                'utilities/tangle-explorer',
                'utilities/visualizer',
                'utilities/iota-ipfs',
            ],
        },
    ]
};