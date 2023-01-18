module.exports = function () {
  return {
    name: 'docusaurus-matomo-plugin',
    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: 'script',
            attributes: {
              src: '/js/matomo-cookiebot.js',
              type: 'text/javascript',
              async: false,
            },
          },
          {
            tagName: 'script',
            attributes: {
              src: '/js/matomo.js',
              type: 'text/javascript',
              async: false,
            },
          },
        ],
        preBodyTags: [],
        postBodyTags: [],
      };
    },
  };
};
