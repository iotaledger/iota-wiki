import { Command, Option } from 'clipanion';
import path from 'path';
import visit from 'unist-util-visit';
import checkUrl from 'link-check';
import { parse } from 'node-html-parser';

const buildConfig = require.resolve('../docusaurus/config/build.js');
const SUPPORTED_PLUGINS = [
  '@docusaurus/plugin-content-docs',
  '@docusaurus/plugin-content-pages',
  '@iota-wiki/plugin-docs',
];
const SUPPORTED_PROTOCOLS = ['http:', 'https:'];

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

    process.env['IOTA_WIKI_DIRECTORY'] = directory;
    const config = require(buildConfig);
    const { plugins = [] } = await config();

    const pluginPaths = plugins.reduce((pluginPaths, plugin) => {
      if (Array.isArray(plugin)) {
        const [name, config] = plugin;

        if (SUPPORTED_PLUGINS.includes(name)) {
          // Our build system relies on `path` being set for these plugins,
          // so it is safe to assume it exists in the config object.
          const pluginPath = path.relative('', config.path);
          return [...pluginPaths, pluginPath];
        }
      }
      return pluginPaths;
    }, []);

    const hostnames = new Map<string, Set<string>>();

    function RemarkLinkVisitor() {
      return async (tree) => {
        visit(tree, (node) => {
          let url: URL;
          if (node.type === 'link') {
            // @ts-ignore
            url = new URL(node.url);
          }
          if (node.type === 'jsx' || node.type === 'html') {
            // @ts-ignore
            const element = parse(node.value);
            if (element.tagName === 'a') {
              url = new URL(element.getAttribute('href'));
            }
          }
          if (url && SUPPORTED_PROTOCOLS.includes(url.protocol)) {
            if (hostnames.has(url.hostname)) {
              hostnames.get(url.hostname).add(url.href);
            } else {
              hostnames.set(url.hostname, new Set([url.href]));
            }
          }
        });
        return tree;
      };
    }

    const result = await new Promise<number>((resolve, reject) =>
      engine(
        {
          processor: remark(),
          files: pluginPaths,
          extensions: ['md', 'mdx'],
          plugins: [RemarkLinkVisitor],
        },
        (error, status) => {
          error ? reject(error) : resolve(status);
        },
      ),
    );

    const results = [];

    await Promise.all(
      Array.from(hostnames.values()).map(async (urls) => {
        for (const url of Array.from(urls)) {
          console.log(`Checking ${url}...`);
          await new Promise<void>((resolve) => {
            checkUrl(url, (err, result) => {
              if (err) results.push({ status: 'error', message: err });
              else
                results.push({
                  status: result.status,
                  message: `${url} => ${result.statusCode}`,
                });
              resolve();
            });
          });
        }
      }),
    );

    const alive = results.filter(({ status }) => status === 'alive');
    const dead = results.filter(({ status }) => status === 'dead');
    dead.forEach(({ status, message }) => console.log(`${status}: ${message}`));
    console.log(`alive: ${alive.length}, dead: ${dead.length}`);

    return result;
  }
}
