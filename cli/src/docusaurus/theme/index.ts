import path from 'path';

module.exports = function () {
  return {
    name: 'theme',
    getThemePath() {
      return path.resolve(__dirname, 'components');
    },
    getClientModules() {
      return [path.resolve(__dirname, 'styles.css')];
    },
  };
};
