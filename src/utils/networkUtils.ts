export async function fetchSitemapUrlsFromNetwork(
  siteUrl: string,
  networkPath: string,
) {
  try {
    const response = await fetch(siteUrl + networkPath + 'sitemap.xml');
    const data = await response.text();

    const domParser = new DOMParser();
    const xmlDoc = domParser.parseFromString(data, 'text/xml');
    const sitemapLocationNodes = Array.from(xmlDoc.getElementsByTagName('loc'));

    const relativeUrls = sitemapLocationNodes.map((node) =>
      node.textContent.substring(siteUrl.length).substring(networkPath.length),
    );

    return relativeUrls;
  } catch (e) {
    console.error(e);
  }
}

export function getBestNetworkUrlMatch(
  pathToFind: string,
  urlsToSearch: string[],
): string {
  const fallbackPagesToConsider: string[] = ['welcome', 'overview'];

  const splitUrl = pathToFind.split('/').filter((p) => p !== '');

  if (!urlsToSearch?.length) {
    return '/';
  }

  for (let i = splitUrl.length; i > 0; i--) {
    const pathToTry = splitUrl.slice(0, i).join('/');
    if (urlsToSearch.includes(pathToTry + '/')) {
      return pathToTry + '/';
    } else {
      // If the path was not found in the other network, try to find a fallback page
      for (const fallbackPage of fallbackPagesToConsider) {
        const fallbackPath = `${pathToTry}/${fallbackPage}/`;
        if (urlsToSearch.includes(fallbackPath)) {
          return fallbackPath;
        }
      }
    }
  }

  // Return the root path if no match was found
  return '/';
}
