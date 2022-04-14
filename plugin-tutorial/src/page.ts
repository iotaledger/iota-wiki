import type {
  OptionValidationContext,
  LoadContext,
  Plugin,
} from "@docusaurus/types";

interface DefaultOptions {
  id: string;
  route: string;
}

export type UserOptions = Partial<DefaultOptions>;
export type NormalizedOptions = DefaultOptions;

export default async function pluginTutorial(
  context: LoadContext,
  options: NormalizedOptions
): Promise<Plugin> {
  return {
    name: "@iota-wiki/plugin-tutorial/page",
    getThemePath() {
      return "../lib/theme";
    },
    getTypeScriptThemePath() {
      return "../src/theme";
    },
    async contentLoaded({ actions }) {
      actions.addRoute({
        path: options.route,
        component: "@theme/Tutorials",
      });
    },
  };
}

export function validateOptions({
  options,
}: OptionValidationContext<UserOptions, NormalizedOptions>): NormalizedOptions {
  return Object.assign(
    {
      id: "default",
      route: "tutorials",
    },
    options
  );
}
