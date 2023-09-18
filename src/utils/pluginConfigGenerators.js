const path = require('path');

/**
 * Generate the plugin config from the versioned config.
 * @param {import('../common/components/Switcher').Doc} pluginConfig
 * @param {string} basePath
 */
function generatePluginConfig(pluginConfig, basePath) {
    let plugins = [];
    for (const plugin of pluginConfig) {

        // Resolve main version to the default version or the first version configured.
        let mainVersion = plugin.versions[0];
        if (plugin.defaultVersion) {
          const foundVersion = plugin.versions.find(
            (version) => version.label === plugin.defaultVersion,
          );
          if (!foundVersion)
            throw `Default version ${plugin.defaultVersion} of doc ${plugin.label} not found.`;

          mainVersion = foundVersion;
        }

        for (const version of plugin.versions) {
            const {label, badges, ...rest} = version;
            plugins.push({
                id: plugin.id + (label ? '-' + label.replace(/\./g, '-') : ''),
                path: path.resolve(basePath + plugin.id + '/' + (label ? label : '') + '/docs'),
                routeBasePath: plugin.routeBasePath ? plugin.routeBasePath : plugin.id,
                sidebarPath: path.resolve(basePath + plugin.id + '/' + (label ? label : '') + '/sidebars.js'),
                versions: 
                plugin.versions.length > 1 ? {
                    current: {
                      label: label,
                      path: mainVersion.label === label ? undefined : label,
                      badge: true,
                    },
                } : 
                undefined,
                ...rest,
            });
        }
    }

    return plugins;
};

/**
 * Generate the switcher config from the versioned config.
 * @param {import('../common/components/Switcher').Doc[]} pluginConfig
 */
function generateSwitcherConfig(pluginConfig) {
  let plugins = [];
  for (const plugin of pluginConfig) {
      //TODO: Rethink how we use ids in the switcher and/or determine the main plugin id
      const firstLabel = plugin.versions[0].label;
      plugins.push({
          id: plugin.id + (firstLabel ? '-' + firstLabel.replace(/\./g, '-') : ''),
          label: plugin.label,
          icon: plugin.icon,
          description: plugin.description,
          subsection: plugin.subsection,
          versions: plugin.versions.map((version) => {
              const {label, badges} = version;
              return {
                  id: plugin.id + (label ? '-' + label.replace(/\./g, '-') : ''),
                  label: label,
                  badges: badges,
              };
          }),
      });
  }

  return plugins;
};

module.exports = {
    generatePluginConfig,
    generateSwitcherConfig
};