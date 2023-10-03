import { Command, Option } from 'clipanion';
import path from 'path';
import visit from 'unist-util-visit';
import { Node } from 'unist';
import checkUrl from 'link-check';
import { parse } from 'node-html-parser';

const buildConfig = require.resolve('../docusaurus/config/build.js');
const SUPPORTED_PLUGINS = [
  '@docusaurus/plugin-content-docs',
  '@docusaurus/plugin-content-pages',
  '@iota-wiki/plugin-docs',
];
const SUPPORTED_PROTOCOLS = ['http:', 'https:'];

interface LinkNode extends Node {
  url: string;
}

interface JsxOrHtmlNode extends Node {
  value: string;
}

function isLinkNode(node: Node): node is LinkNode {
  return node.type === 'link';
}

function isJsxOrHtmlNode(node: Node): node is JsxOrHtmlNode {
  return node.type === 'jsx' || node.type === 'html';
}

export class Check extends Command {
  static paths = [[`check`]];

  directory = Option.String({
    required: false,
  });

  static usage = Command.Usage({
    description: `Check the provided directory for broken links (the current working directory by default).`,
  });

  async execute() {
    console.time('check');
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

    const urls = [];

    // A Remark plugin that visits all link-like elements, extracts the URLs,
    // and adds them to the `urls` array.
    function RemarkLinkVisitor() {
      return async (tree) => {
        visit(tree, (node) => {
          if (isLinkNode(node)) urls.push(node.url);
          if (isJsxOrHtmlNode(node)) {
            const element = parse(node.value);
            if (element.tagName === 'a')
              urls.push(element.getAttribute('href'));
          }
        });
        return tree;
      };
    }

    // The Unified engine that runs the RemarkLinkVisitor plugin on all
    // reachable markdown files.
    await new Promise<number>((resolve, reject) =>
      engine(
        {
          processor: remark(),
          files: [pluginPaths],
          extensions: ['md', 'mdx'],
          plugins: [RemarkLinkVisitor],
          silent: true,
        },
        (error, status) => {
          error ? reject(error) : resolve(status);
        },
      ),
    );
    const results = [];

    // Validate URLs, extract the remote URLs, and gather them by hostname.
    const urlsByHostname = urls.reduce<Map<string, Set<string>>>(
      (urlsByHostname, url) => {
        let validUrl: URL;

        try {
          validUrl = new URL(url);
        } catch (error) {
          results.push({ status: 'error', url, message: error });
          return urlsByHostname;
        }

        if (
          validUrl.hostname !== 'localhost' &&
          SUPPORTED_PROTOCOLS.includes(validUrl.protocol)
        ) {
          if (urlsByHostname.has(validUrl.hostname)) {
            urlsByHostname.get(validUrl.hostname).add(validUrl.href);
          } else {
            urlsByHostname.set(validUrl.hostname, new Set([validUrl.href]));
          }
        } else {
          results.push({ status: 'error', url, message: 'ignored' });
        }

        return urlsByHostname;
      },
      new Map<string, Set<string>>(),
    );

    // Check all links for liveness. The checking is done in sequence per hostname
    // to prevent getting rate limitted on a hostname.
    // It will build an array of objects with a status of `alive`, `dead`, or `error` and
    // a message providing info about the result.
    await Promise.all(
      Array.from(urlsByHostname.values()).map(async (urls) => {
        for (const url of Array.from(urls)) {
          await new Promise<void>((resolve) => {
            checkUrl(url, (error, result) => {
              if (error) results.push({ status: 'error', url, message: error });
              else
                results.push({
                  status: result.status,
                  url,
                  message: result.statusCode,
                });
              resolve();
            });
          });
        }
      }),
    );

    const segragatedResults = {
      error: results.filter(({ status }) => status === 'error'),
      alive: results.filter(({ status }) => status === 'alive'),
      dead: results.filter(({ status }) => status === 'dead'),
    };

    console.error(`${JSON.stringify(segragatedResults.dead, null, 4)}`);

    console.log(
      `alive: ${segragatedResults.alive.length}, dead: ${segragatedResults.dead.length}, error: ${segragatedResults.error.length}`,
    );

    console.timeEnd('check');

    return segragatedResults.dead.length > 0 ? 1 : 0;
  }
}
