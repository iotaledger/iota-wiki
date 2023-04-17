import type { Plugin } from '@docusaurus/types';

export default function iotaWikiTheme(): Plugin<void> {
  return {
    name: '@iota-wiki/theme',

    getThemePath() {
      return '../dist/theme';
    },
    getTypeScriptThemePath() {
      return '../src/theme';
    },
  };
}
