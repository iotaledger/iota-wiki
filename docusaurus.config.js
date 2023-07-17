const { merge } = require('./src/utils/config');
const path = require('path');
const { create_doc_plugin, globStatic } = require('./src/utils/config');
const common = require('./common/docusaurus.config');
const contentConfigs = require('./contentPlugins');

module.exports = async () => {
  const contentPlugins = (await contentConfigs()).map((contentConfig) =>
    create_doc_plugin(contentConfig),
  );

  const { MODE = 'development' } = process.env;

  if (!['development', 'production'].includes(MODE)) {
    throw "Set MODE to 'development', or 'production'";
  }

  const isProduction = MODE === 'production';

  const scripts = {
    scripts: ['/js/search-environment-observer.js'],
  };

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
        items: [
          {
            label: 'Get Started',
            to: '/get-started/introduction/iota/introduction/',
            activeBaseRegex: '^(/[^/]+)?/get-started/.*',
          },
          {
            label: 'Learn',
            to: '/learn/stardust/introduction',
            activeBaseRegex: '^(/[^/]+)?/learn/.*',
          },
          {
            label: 'Build',
            to: '/iota-sdk/welcome',
            activeBaseRegex:
              '^(/[^/]+)?/iota-sdk/.*|' +
              '^(/[^/]+)?/build/.*|' +
              '^(/[^/]+)?/identity.rs/.*|' +
              '^(/[^/]+)?/iota.rs/.*|' +
              '^(/[^/]+)?/iota.js/.*|' +
              '^(/[^/]+)?/wallet.rs/.*|' +
              '^(/[^/]+)?/stronghold.rs/.*|' +
              '^(/[^/]+)?/streams/.*|' +
              '^(/[^/]+)?/smart-contracts/.*',
          },
          {
            label: 'Maintain',
            to: '/hornet/welcome',
            activeBaseRegex: '^(/[^/]+)?/hornet/.*',
          },
        ],
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

  const staticDirs = await globStatic('/docs/**/static/', __dirname);

  return merge(
    common,
    {
      title: 'IOTA Wiki',
      tagline: 'The complete reference for IOTA/Shimmer',
      baseUrl: '/',
      presets: [
        [
          '@docusaurus/preset-classic',
          {
            docs: false,
            blog: false,
            theme: {
              customCss: require.resolve('./src/iota/css/custom.css'),
            },
            sitemap: {
              changefreq: 'daily',
              priority: 0.5,
            },
            pages: {
              path: path.resolve(__dirname, '../src/iota/pages'),
            },
          },
        ],
      ],
      plugins: [...contentPlugins],
      stylesheets: [
        {
          href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
          type: 'text/css',
          integrity:
            'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
          crossorigin: 'anonymous',
        },
      ],
      staticDirectories: [...staticDirs],
    },
    themeConfig,
    isProduction ? production : {},
    scripts,
  );
};
