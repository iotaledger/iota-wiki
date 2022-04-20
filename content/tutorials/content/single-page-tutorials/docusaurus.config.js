// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  plugins: [
    [
      '@iota-wiki/plugin-tutorial',
      {
        title: 'Send IOTA Tokens with Javascript',
        description:
          'In this tutorial you will learn how to send IOTA Tokens in the Devnet.',
        preview: 'send-iota-tokens-with-javascript.png',
        route: 'send-iota-tokens-with-javascript',
        tags: ['text'],
      },
    ],
    [
      '@docusaurus/plugin-content-pages',
      {
        id: 'single-page-tutorials',
        path: path.resolve(__dirname, './tutorials'),
      },
    ],
  ],
  staticDirectories: [path.resolve(__dirname, './images')],
};
