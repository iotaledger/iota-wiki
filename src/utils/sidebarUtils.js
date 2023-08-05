const path = require('path');
const fs = require('fs');
const { kebabCase } = require('lodash');

function normalizePaths(base, item) {
  if (Array.isArray(item)) {
    return item.map((i) => normalizePaths(base, i));
  } else if (item && item.constructor === Object) {
    if (item.type) {
      return {
        ...item,
        id: item.id ? normalizePaths(base, item.id) : undefined,
        items: item.items ? normalizePaths(base, item.items) : undefined,
        dirName: item.dirName ? normalizePaths(base, item.dirName) : undefined,
        link: item.link ? normalizePaths(base, item.link) : undefined,
      };
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
      kebabCase(p),
      normalizePaths(p, Object.entries(m.default)[0][1]),
    ]),
  );

  const filePath = `sidebars-${rootPath}.js`;
  const fileData = `module.exports = ${JSON.stringify(sidebars)}`;

  fs.writeFileSync(filePath, fileData);
  return filePath;
}

module.exports = {
  gatherSidebars,
};
