const path = require('path');

module.exports = async () => {
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
    {
      id: 'build',
      path: path.resolve(__dirname, 'docs/build/getting-started'),
      sidebarPath: path.resolve(__dirname, 'docs/build/getting-started/sidebars.ts'),
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
        // '**/_*.{js,jsx,ts,tsx,md}',
        // '**/_*/**',
        '**/*.test.{js,jsx,ts,tsx}',
        '**/__tests__/**',
        '**/_admonitions/_**',
      ],
    },
    {
      id: 'wasp-0-7-0',
      path: path.resolve(__dirname, 'docs/build/wasp/0.7.0/docs'),
      routeBasePath: 'smart-contracts',
      sidebarPath: path.resolve(__dirname, 'docs/build/wasp/0.7.0/sidebars.js'),
    },
    {
      id: 'identity-rs-0-5',
      path: path.resolve(__dirname, 'docs/build/identity.rs/v0.5.0/docs'),
      routeBasePath: 'identity.rs',
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
      sidebarPath: path.resolve(
        __dirname,
        'docs/build/identity.rs/v0.6.0/sidebars.js',
      ),
      versions: {
        current: {
          label: '0.6',
          path: '0.6',
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
      routeBasePath: 'iota.rs/1.4.0',
      sidebarPath: path.resolve(
        __dirname,
        'docs/build/iota.rs/1.4.0/sidebars.js',
      ),
    },
    {
      id: 'iota-rs-2-0-1-rc-7',
      path: path.resolve(__dirname, 'docs/build/iota.rs/2.0.1-rc.7/docs'),
      routeBasePath: 'iota.rs/2.0.1-rc.7',
      sidebarPath: path.resolve(
        __dirname,
        'docs/build/iota.rs/2.0.1-rc.7/sidebars.js',
      ),
    },
    {
      id: 'wallet-rs-0-1-0',
      path: path.resolve(__dirname, 'docs/build/wallet.rs/0.1.0/docs'),
      routeBasePath: 'wallet.rs/0.1.0',
      sidebarPath: path.resolve(
        __dirname,
        'docs/build/wallet.rs/0.1.0/sidebars.js',
      ),
    },
    {
      id: 'wallet-rs-1-0-0-rc-6',
      path: path.resolve(__dirname, 'docs/build/wallet.rs/1.0.0-rc.6/docs'),
      routeBasePath: 'wallet.rs/1.0.0-rc.6',
      sidebarPath: path.resolve(
        __dirname,
        'docs/build/wallet.rs/1.0.0-rc.6/sidebars.js',
      ),
    },
    {
      id: 'stronghold-rs',
      path: path.resolve(__dirname, 'docs/build/stronghold.rs/1.1.0/docs'),
      routeBasePath: 'stronghold.rs',
      sidebarPath: path.resolve(__dirname, 'docs/build/stronghold.rs/1.1.0/sidebars.js'),
    },
    {
      id: 'maintain',
      path: path.resolve(__dirname, 'docs/maintain'),
      routeBasePath: 'maintain',
    },
  ];
};
