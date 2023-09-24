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
  let plugins = [];

  for (const plugin of pluginConfig) {
    const mainVersion = findMainVersion(plugin);

    for (const version of plugin.versions) {
      const { label, badges, ...rest } = version;
      // TODO: This could be removed once we don't use points in paths anymore.
      const plugin_name_path = plugin.routeBasePath
        ? plugin.routeBasePath
        : plugin.id;
      const extended_base_path =
        basePath + plugin_name_path + '/' + (label ? label : '');
      if (plugin.versions.length > 1) {
        plugins.push({
          id: plugin.id + (label ? '-' + label.replace(/\./g, '-') : ''),
          path: path.resolve(extended_base_path + '/docs'),
          routeBasePath: plugin_name_path,
          sidebarPath: path.resolve(extended_base_path + '/sidebars.js'),
          versions:{
                  current: {
                    label: label,
                    path: mainVersion.label === label ? undefined : label,
                    badge: true,
                  },
          },
          ...rest,
        });
      }
      else {
        plugins.push({
          id: plugin.id + (label ? '-' + label.replace(/\./g, '-') : ''),
          path: path.resolve(extended_base_path + '/docs'),
          routeBasePath: plugin_name_path,
          sidebarPath: path.resolve(extended_base_path + '/sidebars.js'),
          ...rest,
        });
      }
    }
  }

  return plugins;
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
    id: plugin.id + (mainVersion.label ? '-' + mainVersion.label.replace(/\./g, '-') : ''),
    versions: plugin.versions.map((version) => {
      const { label, badges } = version;
      return {
        id: plugin.id + (label ? '-' + label.replace(/\./g, '-') : ''),
        label,
        badges,
      };
    }),
  }});
}

module.exports = {
  generatePluginConfig,
  generateSwitcherConfig,
};
