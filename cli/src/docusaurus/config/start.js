import { merge } from '@wiki/utils/config';
import chokidar from 'chokidar';

let externalConfig = require('@site/docusaurus.config.js');

let internalConfig = {
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
  }
};

// Watch for changes on the external configuration file
chokidar.watch(externalConfig).on('change', () => {
  console.log('External configuration file changed, reloading...');
  externalConfig = require('@site/docusaurus.config.js');
  internalConfig = merge(externalConfig, internalConfig);
});

module.exports = internalConfig;
