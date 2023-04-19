const { merge } = require('@wiki/utils/config');
const common = require('./common');

module.exports = async function createConfig() {
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

  return merge(await common(), internal);
};
