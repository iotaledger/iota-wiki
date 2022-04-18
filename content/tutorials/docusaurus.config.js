// eslint-disable-next-line @typescript-eslint/no-var-requires
var requireGlob = require('require-glob');

const reducer = function (_options, result, fileObject) {
  if (fileObject && fileObject.exports) {
    const { tutorial, plugins, staticDirectories } = fileObject.exports;

    if (Object.keys(result).length === 0) {
      result = {
        tutorials: [tutorial],
        plugins,
        staticDirectories,
      };
    } else {
      result.tutorials.push(tutorial);

      if (!result.plugins) result.plugins = plugins;
      else result.plugins = result.plugins.concat(plugins);
      if (!result.staticDirectories)
        result.staticDirectories = staticDirectories;
      else
        result.staticDirectories =
          result.staticDirectories.concat(staticDirectories);
    }
  }

  return result;
};

const config = requireGlob.sync(
  ['*/**/docusaurus.config.js', '!node_modules'],
  {
    reducer,
  },
);

module.exports = {
  title: 'Tutorials',
  url: '/',
  baseUrl: '/',
  themes: ['@docusaurus/theme-classic'],
  plugins: [
    '@iota-wiki/plugin-tutorial-page',
    ...config.plugins,
  ],
  staticDirectories: [...config.staticDirectories],
};
