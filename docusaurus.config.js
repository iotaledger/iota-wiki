const { glob, merge } = require('./src/utils/config');
const path = require('path');

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

const external = glob(EXTERNAL, path.join(ENVIRONMENT, 'external'));
const tutorials = require('./tutorials/docusaurus.config');
const common = require('./common/docusaurus.config');
const environment = require(`./${ENVIRONMENT}/docusaurus.config`);
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
    'docusaurus-plugin-matomo',
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-KVB88SVNF8',
        anonymizeIP: true,
      },
    ],
  ],
};

module.exports = merge(
  ...external,
  tutorials,
  common,
  environment,
  search,
  isProduction ? production : {},
);
