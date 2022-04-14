import type {
  OptionValidationContext,
  LoadContext,
  Plugin,
} from "@docusaurus/types";
import { UserOptions, NormalizedOptions } from "./options";

export default async function pluginTutorial(
  context: LoadContext,
  options: NormalizedOptions
): Promise<Plugin> {
  return {
    name: "@iota-wiki/plugin-tutorial",
    async contentLoaded({ actions }) {
      actions.setGlobalData(options);
    },
  };
}

function titleToLowerKebabcase(title: string): string {
  return title.normalize().toLowerCase().replace(/\W/, "-");
}

export function validateOptions({
  options,
}: OptionValidationContext<UserOptions, NormalizedOptions>): NormalizedOptions {
  const lowerKebabCaseTitle = titleToLowerKebabcase(options.title);
  return Object.assign(
    {
      id: lowerKebabCaseTitle,
      route: lowerKebabCaseTitle,
    },
    options
  );
}
