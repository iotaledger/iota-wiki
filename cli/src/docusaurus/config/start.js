import external from '@iota-wiki/core/docusaurus.config';
import { merge } from '@wiki/utils/config';

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

module.exports = merge(external, internal);
