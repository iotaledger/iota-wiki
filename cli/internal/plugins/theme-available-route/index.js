const path = require('path');

module.exports = function() {
    return {
        name: 'theme-available-route',
        getThemePath: () => path.resolve(__dirname, './theme')
    }
}