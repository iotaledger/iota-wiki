const path = require('path');

const MAIN_BADGE = 'IOTA';

/**
 * Find main version of a plugin by resolving it to the first version with the corresponding batch.
 * @param {import('../common/components/Switcher').Doc} plugin
 */
function findMainVersion(plugin, badge = MAIN_BADGE) {
  return plugin.versions.find((version) =>
    version.badges.some((b) => b.includes(badge)),
  );
}

/**
 * Generate the plugin config from the versioned config.
 * @param {import('../common/components/Switcher').Doc[]} pluginConfig
 * @param {string} basePath
 */
function generatePluginConfig(pluginConfig, basePath) {
  return pluginConfig.flatMap((doc) => {
    const mainVersion = findMainVersion(doc) ?? doc.versions[0];

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
 * Generate directs versioned links to the main version.
 * @param {import('../common/components/Switcher').Doc[]} versionedConfig - An array of versioned plugin configurations.
 * @returns {Array} - An array of redirects.
 */
function createVersionRedirects(versionedConfig) {
  redirects = [];
  for (const doc of versionedConfig) {
    // Find main version
    const mainVersion = findMainVersion(doc);
    const mainShimmerVersion = findMainVersion(doc, 'Shimmer');

    // TODO: This could be removed once we don't use points in paths anymore.
    const routeBasePath = doc.routeBasePath ? doc.routeBasePath : doc.id;

    if (mainVersion) {
      if (doc.versions.length > 1) {
        // Redirect deep version link to route base path
        redirects.push({
          from: '/' + routeBasePath + '/' + mainVersion.label,
          to: '/' + routeBasePath,
        });
      }

      // Redirect to main IOTA version
      redirects.push({
        from: '/' + routeBasePath + '/iota',
        to: '/' + routeBasePath,
      });

      // Redirect to main IOTA version
      redirects.push({
        from: '/' + routeBasePath + '/iota',
        to: '/' + routeBasePath,
      });
    }

    if (mainShimmerVersion && mainShimmerVersion !== mainVersion)
      // Redirect to main Shimmer version
      redirects.push({
        from: '/' + routeBasePath + '/shimmer/',
        to: '/' + routeBasePath + '/' + mainShimmerVersion.label,
      });
    else if (mainShimmerVersion === mainVersion)
      // Redirect to main Shimmer version if it is the main version
      redirects.push({
        from: '/' + routeBasePath + '/shimmer/',
        to: '/' + routeBasePath,
      });
  }

  return redirects;
}

/**
 * Generate the switcher config from the versioned config.
 * @param {import('../common/components/Switcher').Doc[]} pluginConfig
 */
function generateSwitcherConfig(pluginConfig) {
  return pluginConfig.map((plugin) => {
    const mainVersion = findMainVersion(plugin) ?? plugin.versions[0];
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
  createVersionRedirects,
  MAIN_BADGE,
};
