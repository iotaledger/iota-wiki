import type {
  OptionValidationContext,
  LoadContext,
  Plugin,
} from '@docusaurus/types';

import type { NormalizedOptions, UserOptions } from './types';

export default async function pluginTutorial(
  context: LoadContext,
  options: NormalizedOptions,
): Promise<Plugin> {
  return {
    name: '@iota-wiki/plugin-tutorial',
    async contentLoaded({ actions }) {
      actions.setGlobalData(options);
    },
  };
}

export function validateOptions({
  options: userOptions,
}: OptionValidationContext<UserOptions, NormalizedOptions>): NormalizedOptions {
  const id = userOptions.title.normalize().toLowerCase().replace(/\W/, '-');

  const defaultOptions = {
    id,
    route: id,
  };

  return Object.assign(defaultOptions, userOptions);
}
