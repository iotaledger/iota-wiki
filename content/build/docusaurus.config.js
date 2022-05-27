// @ts-check
// eslint-disable-next-line @typescript-eslint/no-var-requires
var requireGlob = require('require-glob');

const env = process.env.BUILD;
const globs = env.split(',').map(item => `${item}/docusaurus.config.js`);

const reducer = function (_options, result, fileObject) {
    if (fileObject && fileObject.exports) {
        const { plugins, staticDirectories } = fileObject.exports;

        if (Object.keys(result).length === 0) {
            result = {
                plugins,
                staticDirectories,
            };
        } else {
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
    [
        ...globs,
        '!node_modules',
    ],
    {
        reducer,
    },
);

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Build',
    url: '/',
    baseUrl: '/',
    themes: ['@docusaurus/theme-classic'],
    plugins: !config.plugins ? [] : [
        ...config.plugins
    ],
    staticDirectories: !config.staticDirectories ? [] : [
        ...config.staticDirectories
    ],
};
