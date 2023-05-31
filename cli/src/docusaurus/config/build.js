const { merge } = require('@wiki/utils/config');
const common = require('./common');

module.exports = async () => {
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

  return merge(await common(), internal);
};
