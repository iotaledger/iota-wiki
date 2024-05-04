import type {
  OptionValidationContext,
  LoadContext,
  Plugin,
} from '@docusaurus/types';

import type { NormalizedOptions, UserOptions } from '../typesypes';

export interface Options {
  title: string;
  description: string;
  tags: string[];
  source?: string;
  preview?: string;
}

export interface DefaultOptions {
  id: string;
  route: string;
}

export type UserOptions = Options & Partial<DefaultOptions>;
export type NormalizedOptions = Options & DefaultOptions;
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
