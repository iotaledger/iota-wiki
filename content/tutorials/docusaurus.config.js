// eslint-disable-next-line @typescript-eslint/no-var-requires
var requireGlob = require('require-glob');

const reducer = function (_options, result, fileObject) {
  if (fileObject && fileObject.exports) {
    // Do not include tutorials that do not provide the needed configuration
    if (!fileObject.exports.tutorial) {
      console.log(
        "WARNING: no tutorial configuration in '%s'",
        fileObject.path,
      );
      return result;
    }

    const { tutorial, plugins, staticDirectories } = fileObject.exports;

    if (!result) {
      result = {
        tutorials: [tutorial],
        plugins,
        staticDirectories,
      };
    } else {
      result.tutorials.push(tutorial);

      if (!result.plugins) result.plugins = plugins;
      else result.plugins.concat(plugins);
      if (!result.staticDirectories)
        result.staticDirectories = staticDirectories;
      else result.staticDirectories.concat(staticDirectories);
    }
  }

  return result;
};

const config = requireGlob.sync('./**/docusaurus.config.js', { reducer });

module.exports = {
  title: 'Tutorials',
  url: '/',
  baseUrl: '/',
  themes: ['@docusaurus/theme-classic'],
  plugins: [
    [
      // This plugin takes a list of tutorials as config and
      // sets that list as global plugin data so the tutorials
      // section can import it.
      (_, options) => {
        return {
          name: 'tutorials-plugin',
          async contentLoaded({ actions }) {
            actions.setGlobalData(options.tutorials);
          },
        };
      },
      {
        tutorials: config.tutorials,
      },
    ],
    ...config.plugins,
  ],
  staticDirectories: [...config.staticDirectories],
};
