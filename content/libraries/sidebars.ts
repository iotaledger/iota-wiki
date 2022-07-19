module.exports = {
    libraries: [
        'introduction',
        'clients',
        'wallet',
        'streams',
        'identity',
        'stronghold',
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