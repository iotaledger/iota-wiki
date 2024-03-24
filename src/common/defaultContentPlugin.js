import remarkMath from 'remark-math';
import remarkCodeImport from 'remark-code-import';
import remarkImportPartial from 'remark-import-partial';
import remarkRemoveComments from 'remark-remove-comments';
import npm2yarn from '@docusaurus/remark-plugin-npm2yarn';
import rehypeJargon from 'rehype-jargon';
import rehypeJargonConfig from '../../common/jargon.js';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/plugin-content-docs').Options} */
export default async () => {
  return {
    editUrl: 'https://github.com/iotaledger/iota-wiki/edit/main/',
    showLastUpdateTime: true,
    remarkPlugins: [
      remarkMath,
      remarkCodeImport,
      remarkImportPartial,
      remarkRemoveComments,
      [npm2yarn, { sync: true }],
    ],
    rehypePlugins: [
      rehypeKatex,
      [rehypeJargon, { jargon: rehypeJargonConfig }],
    ],
  };
};
