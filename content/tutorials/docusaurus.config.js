// eslint-disable-next-line @typescript-eslint/no-var-requires
var requireGlob = require('require-glob');
// eslint-disable-next-line @typescript-eslint/no-var-requires
var path = require('path');

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
  plugins: [
    '@docusaurus/plugin-ideal-image',
    [
      '@docusaurus/plugin-content-pages',
      {
        id: 'tutorials',
        path: path.resolve(__dirname, './src/pages'),
      },
    ],
    ...config.plugins,
  ],
  staticDirectories: [...config.staticDirectories],
};
