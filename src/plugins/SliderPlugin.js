module.exports = (context, options) => ({
  name: 'iota-wiki-slider-plugin',
  contentLoaded: async ({ actions }) => {
    const { globby } = await import('globby');
    const path = await import('path');

    const results = await Promise.all(
      context.siteConfig.staticDirectories.map((directory) =>
        globby(options.pattern, {
          cwd: path.resolve(directory, options.basePath),
        }),
      ),
    );
    const files = results.flat();
    actions.setGlobalData({ basePath: options.basePath, files });
  },
});
