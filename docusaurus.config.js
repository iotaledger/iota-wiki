const { glob, merge } = require('./src/utils/config');
const path = require('path');

module.exports = async () => {
  const {
    ENVIRONMENT = 'iota',
    EXTERNAL = '',
    MODE = 'development',
  } = process.env;

  if (!['iota', 'shimmer', 'next'].includes(ENVIRONMENT)) {
    throw "Set ENVIRONMENT to 'iota', 'shimmer', or 'next'";
  }

  if (!['development', 'production'].includes(MODE)) {
    throw "Set MODE to 'development', or 'production'";
  }

  const isProduction = MODE === 'production';

  const externalPathPatterns = EXTERNAL.split(',')
    .map((pathPattern) => pathPattern.trim())
    .filter((pathPattern) => pathPattern !== '');
  const externalDirectory = path.join(ENVIRONMENT, 'external');
  const external = await glob(externalPathPatterns, externalDirectory);

  const internal = await glob(['tutorials', 'common', ENVIRONMENT]);

  const scripts = {
    scripts: ['/js/search-environment-observer.js'],
  };

  const search = {
    themeConfig: {
      algolia: {
        appId: 'YTLE56KAO4',
        apiKey: '75358d60d302f7f93f630d63128abb03',
        indexName: 'iota',
        contextualSearch: true,
        searchParameters: {
          facetFilters: [`environment:${ENVIRONMENT}`],
        },
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

  return merge(
    ...external,
    ...internal,
    search,
    isProduction ? production : {},
    scripts,
  );
};
