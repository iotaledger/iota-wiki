export default function pluginTutorial(options) {
  return {
    name: '@iota-wiki/plugin-tutorial',
    async contentLoaded({ actions }) {
      actions.setGlobalData(options);
    },
  };
}

export function validateOptions({ options: userOptions }) {
  const id = userOptions.title.normalize().toLowerCase().replace(/\W/, '-');

  const defaultOptions = {
    id,
    route: id,
  };

  return Object.assign(defaultOptions, userOptions);
}
