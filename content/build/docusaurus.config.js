// @ts-check
// eslint-disable-next-line @typescript-eslint/no-var-requires
var requireGlob = require('require-glob');

const { BUILD = '' } = process.env;
const configs = BUILD.split(',').map(item => `${item}/docusaurus.config.js`);

function reducer(_options, result, fileObject) {
    // TODO: pass default object after shannonmoeller/require-glob#24 is merged.
    if (Object.keys(result).length === 0) result = { plugins: [], staticDirectories: [] };

    if (fileObject && fileObject.exports) {
        const { plugins = [], staticDirectories = []} = fileObject.exports;
        result.plugins.push(...plugins);
        result.staticDirectories.push(...staticDirectories);
    }

    return result;
};

let config = requireGlob.sync([...configs, '!node_modules'], {reducer});

// TODO: remove after shannonmoeller/require-glob#24 is merged.
if (Object.keys(config).length === 0) config = { plugins: [], staticDirectories: [] };

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = config;
