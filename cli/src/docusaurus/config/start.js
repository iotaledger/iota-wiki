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
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'log',
  onDuplicateRoutes: 'log',
  themeConfig: {
    announcementBar: {
      id: 'preview',
      content:
        'This is a local preview. Please find available routes <a href="/404">here</a>.',
      isCloseable: false,
    },
  },
};

module.exports = merge(external, common, internal);
