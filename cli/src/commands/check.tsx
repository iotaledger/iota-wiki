import { Command, Option } from 'clipanion';
import path from 'path';

const internalConfig = require.resolve('../docusaurus/config/build.js');
const SUPPORTED_PLUGINS = [
  "@docusaurus/plugin-content-docs",
  "@docusaurus/plugin-content-pages",
]

export class Check extends Command {
  static paths = [[`check`]];

  directory = Option.String({
    required: false,
  });

  static usage = Command.Usage({
    description: `Check the provided directory for broken links (the current working directory by default).`,
  });

  async execute() {
    const { engine } = await import('unified-engine');
    const { remark } = await import('remark');

    const directory = this.directory || process.cwd();

    process.env["IOTA_WIKI_DIRECTORY"] = directory;
    const { plugins = [] } = require(internalConfig);

    const pluginPaths = plugins.reduce((pluginPaths, plugin) => {
      if (Array.isArray(plugin)) {
        const [ name, config ] = plugin;
        
        if (SUPPORTED_PLUGINS.includes(name)) {
          const pluginPath = path.relative('', config.path);
          return [ ...pluginPaths, pluginPath ];
        }
      }
      return pluginPaths;
    }, []);

    function done(error) {
      if (error) throw error
    }

    engine(
      {
        processor: remark(),
        files: pluginPaths,
        extensions: ['md', 'mdx'],
        plugins: ['remark-lint-no-dead-urls'],
        color: true,
        quiet: true,
      },
      done
    )
  }
}
