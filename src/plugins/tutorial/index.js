function pluginTutorial(context, options) {
  return {
    name: '@iota-wiki/plugin-tutorial',
    async contentLoaded({ actions }) {
      actions.setGlobalData(options);
    },
  };
}

pluginTutorial.validateOptions = ({ options: userOptions }) => {
  const id = userOptions.title.normalize().toLowerCase().replace(/\W/, '-');
  const defaultOptions = {
    id,
    route: id,
  };
  return Object.assign(defaultOptions, userOptions);
};

module.exports = pluginTutorial;
