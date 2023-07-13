module.exports = {
    build: [
        {
            type: 'category',
            label: 'Networks',
            collapsed: true,
            items: [
                'networks/legacy-mainnet',
                'networks/mainnet',
                'networks/overview',
                'networks/public-testnets',
                'networks/shimmer',
            ],
        },
        {
            type: 'category',
            label: 'Community Libs',
            collapsed: true,
            items: [

                {
                    type: 'link',
                    label: 'tanglePHP',
                    href: 'https://tanglephp.com/',
                },
                {
                    type: 'link',
                    label: 'IotaWallet.NET',
                    href: 'https://github.com/IOTA-NET/IotaWallet.NET',
                },
            ]
        }
    ]
}