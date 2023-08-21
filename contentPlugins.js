const path = require('path');

module.exports = async () => {
  const buildPlugins = [
    {
      id: 'build',
      globalSidebars: ['build'],
      path: path.resolve(__dirname, 'docs/build/getting-started'),
      sidebarPath: path.resolve(
        __dirname,
        'docs/build/getting-started/sidebars.ts',
      ),
      routeBasePath: 'build',
    },
    {
      id: 'iota-sdk-1-0-0',
      path: path.resolve(__dirname, 'docs/build/iota-sdk/1.0.0/docs'),
      routeBasePath: 'iota-sdk',
      sidebarPath: require.resolve('./docs/build/iota-sdk/1.0.0/sidebars.js'),
      //overriding default exclude array to include the python api's classes with _ at the beginning
      //but still exclude any _admonitions
      exclude: [
        '**/*.test.{js,jsx,ts,tsx}',
        '**/__tests__/**',
        '**/_admonitions/_**',
      ],
    },
    {
      id: 'smart-contract-0-7-0',
      path: path.resolve(__dirname, 'docs/build/wasp/0.7.0/docs'),
      routeBasePath: 'smart-contracts',
      sidebarPath: path.resolve(__dirname, 'docs/build/wasp/0.7.0/sidebars.js'),
    },
    {
      id: 'identity-rs-0-5',
      path: path.resolve(__dirname, 'docs/build/identity.rs/v0.5.0/docs'),
      routeBasePath: 'identity.rs',
      bannerPath: path.resolve(__dirname, 'banners/identity-deprecated.mdx'),
      sidebarPath: path.resolve(
        __dirname,
        'docs/build/identity.rs/v0.5.0/sidebars.js',
      ),
      versions: {
        current: {
          label: '0.5',
          path: '0.5',
          badge: true,
        },
      },
    },
    {
      id: 'identity-rs-0-6',
      path: path.resolve(__dirname, 'docs/build/identity.rs/v0.6.0/docs'),
      routeBasePath: 'identity.rs',
      bannerPath: path.resolve(
        __dirname,
        'banners/identity-stronghold-migration.mdx',
      ),
      sidebarPath: path.resolve(
        __dirname,
        'docs/build/identity.rs/v0.6.0/sidebars.js',
      ),
      versions: {
        current: {
          label: '0.6',
          badge: true,
        },
      },
    },
    {
      id: 'identity-rs-0-7-alpha',
      path: path.resolve(__dirname, 'docs/build/identity.rs/0.7-alpha/docs'),
      routeBasePath: 'identity.rs',
      sidebarPath: path.resolve(
        __dirname,
        'docs/build/identity.rs/0.7-alpha/sidebars.js',
      ),
      versions: {
        current: {
          label: '0.7',
          path: '0.7',
          badge: true,
        },
      },
    },
    {
      id: 'identity-rs-next',
      path: path.resolve(__dirname, 'docs/build/identity.rs/next/docs'),
      routeBasePath: 'identity.rs',
      sidebarPath: path.resolve(
        __dirname,
        'docs/build/identity.rs/next/sidebars.js',
      ),
      versions: {
        current: {
          label: 'next',
          path: 'next',
          badge: true,
        },
      },
    },
    {
      id: 'iota-rs-1-4-0',
      path: path.resolve(__dirname, 'docs/build/iota.rs/1.4.0/docs'),
      routeBasePath: 'iota.rs',
      sidebarPath: path.resolve(
        __dirname,
        'docs/build/iota.rs/1.4.0/sidebars.js',
      ),
      versions: {
        current: {
          label: '1.4.0',
          badge: true,
        },
      },
    },
    {
      id: 'iota-rs-2-0-1-rc-7',
      path: path.resolve(__dirname, 'docs/build/iota.rs/2.0.1-rc.7/docs'),
      routeBasePath: 'iota.rs',
      sidebarPath: path.resolve(
        __dirname,
        'docs/build/iota.rs/2.0.1-rc.7/sidebars.js',
      ),
      versions: {
        current: {
          label: '2.0.1-rc.7',
          path: '2.0.1-rc.7',
          badge: true,
        },
      },
    },
    {
      id: 'iotajs',
      path: path.resolve(__dirname, 'docs/build/iota.js/2.0.0-rc.1/docs'),
      routeBasePath: 'iota.js',
      sidebarPath: path.resolve(
        __dirname,
        'docs/build/iota.js/2.0.0-rc.1/sidebars.js',
      ),
    },
    {
      id: 'wallet-rs-0-1-0',
      path: path.resolve(__dirname, 'docs/build/wallet.rs/0.1.0/docs'),
      routeBasePath: 'wallet.rs',
      sidebarPath: path.resolve(
        __dirname,
        'docs/build/wallet.rs/0.1.0/sidebars.js',
      ),
      versions: {
        current: {
          label: '0.1.0',
          badge: true,
        },
      },
    },
    {
      id: 'wallet-rs-1-0-0-rc-6',
      path: path.resolve(__dirname, 'docs/build/wallet.rs/1.0.0-rc.6/docs'),
      routeBasePath: 'wallet.rs',
      sidebarPath: path.resolve(
        __dirname,
        'docs/build/wallet.rs/1.0.0-rc.6/sidebars.js',
      ),
      versions: {
        current: {
          label: '1.0.0-rc.6',
          path: '1.0.0-rc.6',
          badge: true,
        },
      },
    },
    {
      id: 'stronghold-rs',
      path: path.resolve(__dirname, 'docs/build/stronghold.rs/1.1.0/docs'),
      routeBasePath: 'stronghold.rs',
      sidebarPath: path.resolve(
        __dirname,
        'docs/build/stronghold.rs/1.1.0/sidebars.js',
      ),
    },
    {
      id: 'iota-streams',
      path: path.resolve(__dirname, 'docs/build/streams/0.2.0/docs'),
      routeBasePath: 'streams',
      sidebarPath: path.resolve(
        __dirname,
        'docs/build/streams/0.2.0/sidebars.js',
      ),
    },
  ];

  const maintainPlugins = [
    {
      id: 'hornet-1-2-4',
      path: path.resolve(__dirname, 'docs/maintain/hornet/1.2.4/docs'),
      routeBasePath: 'hornet',
      sidebarPath: path.resolve(
        __dirname,
        'docs/maintain/hornet/1.2.4/sidebars.js',
      ),
      versions: {
        current: {
          label: '1.2.4',
          badge: true,
        },
      },
    },
    {
      id: 'hornet-2-0-0-rc-6',
      path: path.resolve(__dirname, 'docs/maintain/hornet/2.0.0-rc.6/docs'),
      routeBasePath: 'hornet',
      sidebarPath: path.resolve(
        __dirname,
        'docs/maintain/hornet/2.0.0-rc.6/sidebars.js',
      ),
      versions: {
        current: {
          label: '2.0.0-rc.6',
          path: '2.0.0-rc.6',
          badge: true,
        },
      },
    },
    {
      id: 'wasp-0-7-0',
      path: path.resolve(__dirname, 'docs/maintain/wasp/0.7.0/docs'),
      routeBasePath: 'wasp',
      sidebarPath: path.resolve(
        __dirname,
        'docs/maintain/wasp/0.7.0/sidebars.js',
      ),
    },
    {
      id: 'chronicle-rs',
      path: path.resolve(__dirname, 'docs/maintain/chronicle/0.3.0/docs'),
      routeBasePath: 'chronicle',
      sidebarPath: path.resolve(
        __dirname,
        'docs/maintain/chronicle/0.3.0/sidebars.js',
      ),
      versions: {
        current: {
          label: '0.3.0',
          badge: true,
        },
      },
    },
    {
      id: 'inx-chronicle',
      path: path.resolve(__dirname, 'docs/maintain/chronicle/1.0.0-rc.1/docs'),
      routeBasePath: 'chronicle',
      sidebarPath: path.resolve(
        __dirname,
        'docs/maintain/chronicle/1.0.0-rc.1/sidebars.js',
      ),
      versions: {
        current: {
          label: '1.0.0-rc.1',
          path: '1.0.0-rc.1',
          badge: true,
        },
      },
    },
    {
      id: 'goshimmer',
      path: path.resolve(__dirname, 'docs/maintain/goshimmer/0.9.8/docs'),
      routeBasePath: 'goshimmer',
      sidebarPath: path.resolve(
        __dirname,
        'docs/maintain/goshimmer/0.9.8/sidebars.js',
      ),
    },
  ];

  return [
    {
      id: 'get-started',
      path: path.resolve(__dirname, 'docs/get-started'),
      sidebarPath: path.resolve(__dirname, 'docs/get-started/sidebars.ts'),
      routeBasePath: 'get-started',
    },
    {
      id: 'learn',
      path: path.resolve(__dirname, 'docs/learn'),
      sidebarPath: path.resolve(__dirname, 'docs/learn/sidebars.ts'),
      routeBasePath: 'learn',
    },
    ...buildPlugins,
    ...maintainPlugins,
  ];
};
