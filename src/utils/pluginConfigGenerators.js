const path = require('path');

/**
 * Find main version of a plugin by resolving it to the default version or the first version configured.
 * @param {import('../common/components/Switcher').Doc} plugin
 */
function findMainVersion(plugin) {
  let mainVersion = plugin.versions[0];
  if (plugin.defaultVersion) {
    const foundVersion = plugin.versions.find(
      (version) => version.label === plugin.defaultVersion,
    );
    if (!foundVersion)
      throw `Default version ${plugin.defaultVersion} of doc ${plugin.label} not found.`;

    mainVersion = foundVersion;
  }

  return mainVersion;
}

/**
 * Generate the plugin config from the versioned config.
 * @param {import('../common/components/Switcher').Doc[]} pluginConfig
 * @param {string} basePath
 */
function generatePluginConfig(pluginConfig, basePath) {
  return pluginConfig.flatMap((doc) => {
    const mainVersion = findMainVersion(doc);

    return doc.versions.map((version) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { label, badges, ...rest } = version;

      // TODO: This could be removed once we don't use points in paths anymore.
      const plugin_name_path = doc.routeBasePath ? doc.routeBasePath : doc.id;

      const extended_base_path =
        basePath + plugin_name_path + '/' + (label ? label : '');

      plugin = {
        id: doc.id + (label ? '-' + label.replace(/\./g, '-') : ''),
        path: path.resolve(extended_base_path + '/docs'),
        routeBasePath: plugin_name_path,
        sidebarPath: path.resolve(extended_base_path + '/sidebars.js'),
        ...(doc.versions.length > 1
          ? {
              versions: {
                current: {
                  label,
                  path: mainVersion.label === label ? undefined : label,
                  badge: true,
                },
              },
            }
          : {}),
        ...rest,
      };

      return plugin;
    });
  });
}

/**
 * Generate the switcher config from the versioned config.
 * @param {import('../common/components/Switcher').Doc[]} pluginConfig
 */
function generateSwitcherConfig(pluginConfig) {
  return pluginConfig.map((plugin) => {
    const mainVersion = findMainVersion(plugin);
    return {
      ...plugin,
      id:
        plugin.id +
        (mainVersion.label ? '-' + mainVersion.label.replace(/\./g, '-') : ''),
      versions: plugin.versions.map((version) => {
        const { label, badges } = version;
        return {
          id: plugin.id + (label ? '-' + label.replace(/\./g, '-') : ''),
          label,
          badges,
        };
      }),
    };
  });
}

module.exports = {
  generatePluginConfig,
  generateSwitcherConfig,
};
