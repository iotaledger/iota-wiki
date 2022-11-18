const { glob, merge } = require('./src/utils/config');
const path = require('path');

const { CONTENT = '', ENVIRONMENT = 'iota' } = process.env;

const external = glob(CONTENT, path.join(ENVIRONMENT, 'external'));
const tutorials = require('./tutorials/single-page-tutorials/docusaurus.config');
const common = require('./docusaurus-common.config');
const environment = require(`./docusaurus-${ENVIRONMENT}.config`);
const production = {
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
    matomo: {
      matomoUrl: 'https://matomo.iota-community.org/',
      siteId: '13',
    },
  },
  plugins: ['docusaurus-plugin-matomo'],
};

module.exports = merge(...external, tutorials, common, environment, production);
