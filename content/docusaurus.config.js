// eslint-disable-next-line @typescript-eslint/no-var-requires
var requireGlob = require('require-glob');

const { CONTENT = '' } = process.env;
const configs = CONTENT.split(',').map(item => `${item}/docusaurus.config.js`);

function reducer(_options, result, fileObject) {
    if (fileObject && fileObject.exports) {
        const { plugins = [], staticDirectories = []} = fileObject.exports;
        result.plugins.push(...plugins);
        result.staticDirectories.push(...staticDirectories);
    }

    return result;
};

let config = requireGlob.sync([...configs, '!node_modules'], {
    initialValue: { plugins: [], staticDirectories: [] },
    reducer
});

module.exports = config;
