module.exports = {
    libraries: [
        'introduction',
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