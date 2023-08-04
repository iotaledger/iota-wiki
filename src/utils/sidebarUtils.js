const path = require('path');
const fs = require('fs');

function normalizePaths(base, item) {
  if (Array.isArray(item)) {
    return item.map((i) => normalizePaths(base, i));
  } else if (item && item.constructor === Object) {
    if (item.type) {
      if (item.items)
        return {
          ...item,
          items: normalizePaths(base, item.items),
        };
      if (item.id)
        return {
          ...item,
          id: normalizePaths(base, item.id),
        };
      if (item.dirName) {
        return {
          ...item,
          dirName: normalizePaths(base, item.dirName),
        };
      }
      return item;
    }
    return Object.fromEntries(
      Object.entries(item).map(([key, value]) => [
        key,
        normalizePaths(base, value),
      ]),
    );
  } else if (typeof item === 'string') {
    return path.posix.join(base, item);
  } else {
    return item;
  }
}

async function gatherSidebars(rootPath) {
  const { globby } = await import('globby');
  const paths = await globby('**/sidebars.js', { cwd: rootPath });
  const entries = await Promise.all(
    paths.map(async (p) => [
      path.dirname(p),
      await import(path.posix.join(process.cwd(), rootPath, p)),
    ]),
  );
  const sidebars = Object.fromEntries(
    entries.map(([p, m]) => [
      p,
      normalizePaths(p, Object.entries(m.default)[0][1]),
    ]),
  );

  fs.writeFileSync(
    'sidebars.js',
    `module.exports = ${JSON.stringify(sidebars)}`,
  );
}

gatherSidebars('docs');
