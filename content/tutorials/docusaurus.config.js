var requireGlob = require('require-glob');

const reducer = function (_options, result, fileObject, _i, _fileObjects) {
    if (fileObject && fileObject.exports) {
        const { plugins, staticDirectories } = fileObject.exports;

        if (!result) {
            result = {
                plugins,
                staticDirectories,
            }
        } else {
            if (!result.plugins)
                result.plugins = plugins;
            else
                result.plugins.concat(plugins);
            if (!result.staticDirectories)
                result.staticDirectories = staticDirectories;
            else
                result.staticDirectories.concat(staticDirectories);
        }
    }

    return result;
}

const config = requireGlob.sync('./**/docusaurus.config.js', { reducer })

module.exports = {
    title: 'Tutorials',
    url: '/',
    baseUrl: '/',
    themes: ['@docusaurus/theme-classic'
    ],
    plugins: [
        ...config.plugins
    ],
    staticDirectories: [
        ...config.staticDirectories
    ],
};