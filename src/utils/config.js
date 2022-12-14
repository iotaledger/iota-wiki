const requireGlob = require('require-glob');
const callsite = require('callsite');
const path = require('path');

function merge(...targets) {
  if (targets.every(Array.isArray)) {
    return targets.flat();
  } else if (
    targets.every((target) => target && target.constructor === Object)
  ) {
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

    return Object.fromEntries(
      Array.from(map.entries(), ([key, values]) => [key, merge(...values)]),
    );
  } else {
    return targets.pop();
  }
}

function glob(items, directory = '.') {
  const caller = callsite()[1];
  const callerDirectory = path.dirname(caller.getFileName());
  const patterns = items
    .split(',')
    .map((item) =>
      path.join(
        callerDirectory,
        directory,
        item.trim(),
        'docusaurus.config.js',
      ),
    );

  const configs = requireGlob.sync([...patterns, '!node_modules'], {
    initialValue: [],
    mapper: (options, filePath) => {
      filePath = require.resolve(path.resolve(options.cwd, filePath));

      if (options.bustCache) {
        delete require.cache[filePath];
      }

      return require(filePath);
    },
    reducer: (_options, fileObjects, fileObject) => {
      if (fileObject) {
        fileObjects.push(fileObject);
      }

      return fileObjects;
    },
  });

  return configs;
}

module.exports = {
  glob,
  merge,
};
