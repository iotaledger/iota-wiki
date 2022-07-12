module.exports = {
    networks: [
        'iota-1.5-chrysalis',
        'iota-2.0-coordicide',
        'testnets',
        'network-token-migration',
        {
            type: 'category',
            label: 'Developer',
            collapsed: false,
            items: [
                {
                    type: 'link',
                    label: 'Chrysalis',
                    href:  'https://stardust.iota-community.org/introduction/welcome'
                },
                {
                    type: 'link',
                    label: 'Stardust',
                    href:  'https://stardust.iota-community.org/introduction/develop/welcome'
                }
            ],
        },
    ]
};