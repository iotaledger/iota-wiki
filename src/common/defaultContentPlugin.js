/** @type {import('@docusaurus/plugin-content-docs').Options} */
module.exports = async () => {
  const jargonPlugin = (await import('rehype-jargon')).default;
  const jargonConfig = (await import('./../../common/jargon.js')).default;

  return {
    editUrl: 'https://github.com/iotaledger/iota-wiki/edit/main/',
    showLastUpdateTime: true,
    remarkPlugins: [
      require('remark-math'),
      require('remark-code-import'),
      require('remark-import-partial'),
      require('remark-remove-comments'),
    ],
    rehypePlugins: [
      require('rehype-katex'),
      [jargonPlugin, { jargon: jargonConfig }],
    ],
  };
};
