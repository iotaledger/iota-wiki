import external from '@iota-wiki/core/docusaurus.config';
import { merge } from '@wiki/utils/config';

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
