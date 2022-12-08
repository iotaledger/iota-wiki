import path from 'path';
import { merge } from '@wiki/utils/config';
import common from './common';

const { IOTA_WIKI_DIRECTORY } = process.env;

const external = require(path.resolve(
  process.cwd(),
  IOTA_WIKI_DIRECTORY,
  'docusaurus.config.js',
));

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

module.exports = merge(external, common, internal);
