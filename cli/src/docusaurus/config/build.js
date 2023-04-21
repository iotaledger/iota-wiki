import { merge } from '@wiki/utils/config';

const external = require('@site/docusaurus.config.js');

const internal = {
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onDuplicateRoutes: 'throw',
  themeConfig: {
    navbar: {
      logo: {
        href: 'https://wiki.iota.org',
      },
    },
  },
};

module.exports = merge(external, internal);
