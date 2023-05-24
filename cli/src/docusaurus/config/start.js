const path = require('path');
const { merge } = require('@wiki/utils/config');

const externalPath = path.resolve(process.cwd(), 'docusaurus.config.js');

module.exports = async () => {
  const external = require(externalPath);

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

  return merge(await external(), internal);
}
