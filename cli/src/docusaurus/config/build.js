const { merge } = require('@wiki/utils/config');

const path = require('path');
const externalPath = path.resolve(process.cwd(), 'docusaurus.config.js')
const external = require(externalPath);

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

  return merge(await external(), internal);
};
