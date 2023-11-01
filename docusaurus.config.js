const { glob, merge } = require('./src/utils/config');
const path = require('path');
const { create_doc_plugin } = require('./src/utils/config');
const contentConfigs = require('./contentPlugins');
const articleRedirectsFile = require('./articleRedirects');
const switcherConfig = require('./switcherConfig');
const {
  buildPluginsConfig,
  maintainPluginsConfig,
} = require('./versionedConfig');
const {
  createVersionRedirects,
} = require('./src/utils/pluginConfigGenerators');

module.exports = async () => {
  const contentPlugins = await Promise.all(
    (
      await contentConfigs()
    ).map(async (contentConfig) => await create_doc_plugin(contentConfig)),
  );

  const buildMainVersionRedirects = createVersionRedirects(buildPluginsConfig);
  const maintainMainVersionRedirects = createVersionRedirects(
    maintainPluginsConfig,
  );

  // Get tutorials
  const additionalPlugins = await glob(['tutorials']);

  const { MODE = 'development', SELECTED_SECTION = 'all' } = process.env;

  if (!['development', 'production'].includes(MODE)) {
    throw "Set MODE to 'development', or 'production'";
  }

  const isProduction = MODE === 'production';

  const navbarItems = [
    {
      label: 'Get Started',
      to: '/get-started/introduction/iota/introduction/',
      activeBaseRegex: '^(/[^/]+)?/get-started/.*',
    },
    {
      label: 'Learn',
      to: '/learn/protocols/introduction',
      activeBaseRegex: '^(/[^/]+)?/learn/.*',
    },
    {
      label: 'Build',
      to: '/build/welcome/',
      activeBaseRegex:
        '^(/[^/]+)?/build/.*|' +
        '^(/[^/]+)?/iota-sdk/.*|' +
        '^(/[^/]+)?/identity.rs/.*|' +
        '^(/[^/]+)?/iota.rs/.*|' +
        '^(/[^/]+)?/iota.js/.*|' +
        '^(/[^/]+)?/wallet.rs/.*|' +
        '^(/[^/]+)?/stronghold.rs/.*|' +
        '^(/[^/]+)?/streams/.*|' +
        '^(/[^/]+)?/wasp-cli/.*|' +
        '^(/[^/]+)?/wasp-wasm/.*|' +
        '^(/[^/]+)?/wasp-evm/.*',
    },
    {
      label: 'Maintain',
      to: '/maintain/welcome',
      activeBaseRegex:
        '^(/[^/]+)?/maintain/.*|' +
        '^(/[^/]+)?/hornet/.*|' +
        '^(/[^/]+)?/wasp/.*|' +
        '^(/[^/]+)?/chronicle/.*|' +
        '^(/[^/]+)?/goshimmer/.*',
    },
  ];

  const activeNavbarItems = navbarItems.filter((item) => {
    return (
      SELECTED_SECTION === 'all' ||
      new RegExp(item.activeBaseRegex).test(`/${SELECTED_SECTION}/`)
    );
  });

  const themeConfig = {
    themeConfig: {
      image: 'img/iota-wiki.png',
      navbar: {
        hideOnScroll: true,
        logo: {
          alt: 'IOTA Wiki Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo_dark.svg',
        },
        items: activeNavbarItems,
      },
      footer: {},
      socials: [
        {
          url: 'https://www.youtube.com/c/iotafoundation',
          backgroundColor: 'var(--ifm-color-gray-900)',
        },
        {
          url: 'https://www.github.com/iotaledger/',
          backgroundColor: '#2C3850',
        },
        {
          url: 'https://discord.iota.org/',
          backgroundColor: '#4B576F',
        },
        {
          url: 'https://www.twitter.com/iota/',
          backgroundColor: '#6A768E',
        },
        {
          url: 'https://www.reddit.com/r/iota/',
          backgroundColor: '#7D89A1',
        },
        {
          url: 'https://www.linkedin.com/company/iotafoundation/',
          backgroundColor: '#8995AD',
        },
        {
          url: 'https://www.instagram.com/iotafoundation/',
          backgroundColor: '#99A5BD',
        },
      ],
      algolia: {
        appId: 'YTLE56KAO4',
        apiKey: '75358d60d302f7f93f630d63128abb03',
        indexName: 'iota',
        contextualSearch: true,
      },
      imageZoom: {
        selector:
          '.markdown :not(a) > img:not(.image-gallery-image):not(.image-gallery-thumbnail-image)',
        // Optional medium-zoom options
        // see: https://www.npmjs.com/package/medium-zoom#options
        options: {
          background: 'rgba(0, 0, 0, 0.6)',
        },
      },
      imageSlider: {
        videoPlaceholder: '/img/infographics/video-placeholder.png',
      },
      prism: {
        additionalLanguages: ['java', 'rust', 'solidity', 'toml'],
      },
      colorMode: {
        defaultMode: 'dark',
      },
      switcher: switcherConfig,
    },
  };

  const production = {
    themeConfig: {
      matomo: {
        matomoUrl: 'https://matomo.iota-community.org/',
        siteId: '13',
      },
    },
    plugins: [
      // Temporarily disabled because of Cookiebot blocking required scripts.
      // path.resolve(__dirname, 'plugins', 'cookiebot'),
      path.resolve(__dirname, 'plugins', 'matomo'),
      [
        '@docusaurus/plugin-google-gtag',
        {
          trackingID: 'G-KVB88SVNF8',
          anonymizeIP: true,
        },
      ],
    ],
  };

  return merge(
    {
      title: 'IOTA Wiki',
      tagline: 'The complete reference for IOTA and Shimmer',
      baseUrl: '/',
      url: 'https://wiki.iota.org',
      onBrokenLinks: 'throw',
      onBrokenMarkdownLinks: 'log',
      favicon: 'img/favicon.ico',
      trailingSlash: true,
      organizationName: 'iota-wiki', // Usually your GitHub org/user name.
      projectName: 'iota-wiki', // Usually your repo name.
      stylesheets: [
        'https://fonts.googleapis.com/css?family=Material+Icons',
        {
          href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
          type: 'text/css',
          integrity:
            'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
          crossorigin: 'anonymous',
        },
      ],
      presets: [
        [
          '@docusaurus/preset-classic',
          {
            docs: false,
            blog: false,
            theme: {
              customCss: require.resolve('./src/css/custom.css'),
            },
            sitemap: {
              changefreq: 'daily',
              priority: 0.5,
            },
            pages: {
              path: path.resolve(__dirname, './src/pages'),
            },
          },
        ],
      ],
      plugins: [
        ...contentPlugins,
        [
          '@docusaurus/plugin-content-docs',
          {
            id: 'iota-tips',
            path: path.resolve(__dirname, './docs/external/tips'),
            routeBasePath: 'tips',
            editUrl: ({ docPath }) =>
              `https://github.com/iotaledger/tips/edit/main/${docPath}`,
            remarkPlugins: [require('remark-import-partial')],
            include: ['tips/**/*.md', 'README.md'],

            // Create own sidebar to flatten hierarchy and use own labeling
            async sidebarItemsGenerator({
              defaultSidebarItemsGenerator,
              ...args
            }) {
              const items = await defaultSidebarItemsGenerator(args);

              const result = items[1].items.map((item) => {
                if (item.type === 'category') {
                  if (item.link.type === 'doc') {
                    // Get TIP number and append TIP name
                    item.label = item.link.id.slice(-4) + '-' + item.label;
                  }
                }
                return item;
              });

              return [items[0]].concat(result);
            },
          },
        ],
        [
          'docusaurus-plugin-openapi-docs',
          {
            id: 'openapi',
            docsPluginId: 'apis', // e.g. "classic" or the plugin-content-docs id
            config: {
              coreApiChrysalis: {
                specPath:
                  'https://raw.githubusercontent.com/iotaledger/tips/main/tips/TIP-0013/rest-api.yaml',
                outputDir: path.resolve(
                  __dirname,
                  'docs/build/apis/docs/core/v1',
                ),
                sidebarOptions: {
                  groupPathsBy: 'tag',
                },
              },
              coreApiShimmer: {
                specPath:
                  'https://raw.githubusercontent.com/iotaledger/tips/main/tips/TIP-0025/core-rest-api.yaml',
                outputDir: path.resolve(
                  __dirname,
                  'docs/build/apis/docs/core/v2',
                ),
                sidebarOptions: {
                  groupPathsBy: 'tag',
                },
              },
              waspApi: {
                specPath:
                  'https://raw.githubusercontent.com/iotaledger/wasp/develop/clients/apiclient/api/openapi.yaml',
                outputDir: path.resolve(__dirname, 'docs/build/apis/docs/wasp'),
                sidebarOptions: {
                  groupPathsBy: 'tag',
                },
              },
              indexerApi: {
                specPath:
                  'https://raw.githubusercontent.com/iotaledger/tips/main/tips/TIP-0026/indexer-rest-api.yaml',
                outputDir: path.resolve(
                  __dirname,
                  'docs/build/apis/docs/indexer',
                ),
                sidebarOptions: {
                  groupPathsBy: 'tag',
                },
              },
              poiApi: {
                specPath:
                  'https://raw.githubusercontent.com/iotaledger/inx-poi/develop/rest-api.yaml',
                outputDir: path.resolve(__dirname, 'docs/build/apis/docs/poi'),
                sidebarOptions: {
                  groupPathsBy: 'tag',
                },
              },
              explorerApi: {
                specPath:
                  'https://raw.githubusercontent.com/iotaledger/inx-chronicle/main/documentation/api/api-explorer.yml',
                outputDir: path.resolve(
                  __dirname,
                  'docs/build/apis/docs/explorer',
                ),
                sidebarOptions: {
                  groupPathsBy: 'tag',
                },
              },
              ircMetadata: {
                specPath:
                  'https://raw.githubusercontent.com/iotaledger/inx-irc-metadata/develop/rest-api.yaml',
                outputDir: path.resolve(
                  __dirname,
                  'docs/build/apis/docs/irc-metadata',
                ),
                sidebarOptions: {
                  groupPathsBy: 'tag',
                },
              },
            },
          },
        ],
        [
          '@docusaurus/plugin-client-redirects',
          {
            redirects: articleRedirectsFile.articleRedirects,
            // directory redirects - only added for directories that didn't have a direct match
            createRedirects(existingPath) {
              const redirects = [
                // Version redirects are only used to asign paths with the actual version to the "current" version
                ...buildMainVersionRedirects,
                ...maintainMainVersionRedirects,
                {
                  from: '/develop/nodes/rest-api',
                  to: '/apis/core/v1',
                },
                {
                  from: '/shimmer/chronicle',
                  to: '/chronicle/1.0-rc.1',
                },
                {
                  from: '/shimmer/cli-wallet',
                  to: '/cli-wallet',
                },
                {
                  from: '/shimmer/community',
                  to: '/community',
                },
                {
                  from: '/shimmer/develop/nodes/core-rest-api',
                  to: '/apis/core/v2',
                },
                {
                  from: '/shimmer/goshimmer',
                  to: '/goshimmer',
                },
                {
                  from: '/shimmer/hornet',
                  to: '/hornet',
                },
                {
                  from: '/shimmer/identity.rs',
                  to: '/identity.rs/0.7',
                },
                {
                  from: '/shimmer/introduction',
                  to: '/introduction/stardust',
                },
                {
                  from: '/shimmer/iota-sdk',
                  to: '/iota-sdk',
                },
                {
                  from: '/shimmer/iota.js',
                  to: '/iota.js',
                },
                {
                  from: '/shimmer/iota.rs',
                  to: '/iota.rs/2.0-rc.7',
                },
                {
                  from: '/shimmer/smart-contracts/guide/chains_and_nodes',
                  to: '/smart-contracts/guide/chains_and_nodes',
                },
                {
                  from: '/shimmer/smart-contracts/guide/core_concepts',
                  to: '/learn/smart-contracts/core_concepts',
                },
                {
                  from: '/shimmer/smart-contracts/guide/evm/compatibility',
                  to: '/smart-contracts/guide/evm/compatibility',
                },
                {
                  from: '/shimmer/smart-contracts/guide/evm',
                  to: '/smart-contracts/guide/evm',
                },
                {
                  from: '/shimmer/smart-contracts/guide/solo',
                  to: '/smart-contracts/guide/solo',
                },
                {
                  from: '/shimmer/smart-contracts/guide/wasm_vm',
                  to: '/smart-contracts/guide/wasm_vm',
                },
                {
                  from: '/shimmer/stronghold.rs',
                  to: '/stronghold.rs',
                },
                {
                  from: '/shimmer/team',
                  to: '/team',
                },
                {
                  from: '/shimmer/tutorials',
                  to: '/tutorials',
                },
                {
                  from: '/shimmer/wallet.rs',
                  to: '/wallet.rs/1.0-rc.6',
                },
                {
                  from: '/shimmer/learn/governance/',
                  to: '/learn/governance/',
                },
              ];

              let paths = [];
              for (const redirect of redirects) {
                if (existingPath.startsWith(redirect.to)) {
                  paths.push(existingPath.replace(redirect.to, redirect.from));
                }
              }

              return paths.length > 0 ? paths : undefined;
            },
          },
        ],
        'plugin-image-zoom',
      ],
      stylesheets: [
        {
          href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
          type: 'text/css',
          integrity:
            'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
          crossorigin: 'anonymous',
        },
      ],
      themes: [
        'docusaurus-theme-openapi-docs',
        '@saucelabs/theme-github-codeblock',
        '@iota-wiki/theme',
      ],
      staticDirectories: [path.resolve(__dirname, 'static')],
    },
    themeConfig,
    isProduction ? production : {},
    ...additionalPlugins,
  );
};
