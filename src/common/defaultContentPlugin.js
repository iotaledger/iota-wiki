/** @type {import('@docusaurus/plugin-content-docs').Options} */
module.exports = {
  editUrl: 'https://github.com/iotaledger/iota-wiki/edit/main/',
  showLastUpdateTime: true,
  remarkPlugins: [
    require('remark-math'),
    require('remark-code-import'),
    require('remark-import-partial'),
    require('remark-remove-comments'),
  ],
  rehypePlugins: [require('rehype-katex')],
};
