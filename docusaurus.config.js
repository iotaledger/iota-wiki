const { glob, merge } = require('./src/utils/config');
const path = require('path');

const {
  CONTENT = '',
  ENVIRONMENT = 'iota',
  MODE = 'development',
} = process.env;

const isProduction = MODE === 'production';

const external = glob(CONTENT, path.join(ENVIRONMENT, 'external'));
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
  plugins: ['docusaurus-plugin-matomo'],
};
const analytics = {
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        gtag: {
          trackingID: 'G-KVB88SVNF8',
          anonymizeIP: true,
        },
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
  analytics,
);
