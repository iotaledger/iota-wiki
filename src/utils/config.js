const path = require('path');

/**
 * Merges multiple configuration objects into one object.
 * @param  {...any} targets
 * @returns {any}
 */
function merge(...targets) {
  if (targets.every(Array.isArray)) {
    // [ [ value, ... ], ... ] => [ value, ... ]
    return targets.flat();
  } else if (
    targets.every((target) => target && target.constructor === Object)
  ) {
    // [{ key: value, ...}, ...] => { key: [value, ...], ...}
    let map = targets.reduce((map, target) => {
      Object.entries(target).forEach(([key, value]) => {
        if (map.has(key)) {
          map.get(key).push(value);
        } else {
          map.set(key, [value]);
        }
      });
      return map;
    }, new Map());

    // { key: [value, ...], ...} => { key: merge(value, ...), ... }}
    return Object.fromEntries(
      Array.from(map.entries(), ([key, values]) => [key, merge(...values)]),
    );
  } else {
    // [ ..., value ] => value
    return targets.pop();
  }
}

function getRelativePathToCallsite() {
  // Store original prepareStackTrace.
  const originalPrepareStackTrace = Error.prepareStackTrace;

  // Get origin and destination callsites, skipping the callsite of this function.
  Error.prepareStackTrace = (_, stack) => stack;
  const [origin, destination] = new Error().stack.slice(1, 3);

  // Restore original prepareStackTrace.
  Error.prepareStackTrace = originalPrepareStackTrace;

  // Get relative directory path from origin to destination in Posix form.
  return path
    .relative(
      path.dirname(origin.getFileName()),
      path.dirname(destination.getFileName()),
    )
    .split(path.sep)
    .join(path.posix.sep);
}

/**
 * Finds configuration files using glob path patterns relative to
 * where `glob` is called.
 * @param {string[]} patterns
 * @param {string} directoryPath
 * @returns
 */
async function glob(patterns, directoryPath = '.') {
  if (patterns.some((pattern) => !pattern?.trim()))
    throw 'Glob pattern cannot be empty.';

  if (!patterns) return [];

  const { globby } = await import('globby');

  // Get the relative path to where `glob` was called from.
  const relativePath = getRelativePathToCallsite();

  // Construct patterns relative to this module so we can import matching modules.
  const configPathPatterns = patterns.map((pattern) =>
    path.join(relativePath, directoryPath, pattern, 'docusaurus.config.js'),
  );

  // Disregard any `node_modules` directories when expanding the patterns.
  configPathPatterns.push('!node_modules');

  // Expand configuration path patterns and import them.
  const configPaths = await globby(configPathPatterns, { cwd: __dirname });
  const configs = configPaths.map((configPath) => require(configPath));

  // Allow async functions returning a configuration object.
  return await Promise.all(
    configs.map((config) => (typeof config === 'function' ? config() : config)),
  );
}

module.exports = {
  glob,
  merge,
};
