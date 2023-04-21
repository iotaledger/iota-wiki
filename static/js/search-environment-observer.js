function handleOnClick(e) {
  const isUserInSearchPage = window.location.pathname.includes('/search/');
  const targetHref = e.target.href;

  if (isUserInSearchPage && targetHref) {
    const url = new URL(targetHref);

    const isFromSameEnvironment = isSameEnvironment(url.pathname);
    if (!isFromSameEnvironment) {
      e.preventDefault();
      window.location.href = targetHref;
    }
  }
}

function isSameEnvironment(targetPathname) {
  const environmentPath =
    window.location.pathname === '/search/'
      ? '/'
      : window.location.pathname.split('/')[0];
  const isUserInIOTAEnvironment = environmentPath === '/';
  const isEnvironmentSubroute = ['/shimmer/', '/next/'].some((subroute) =>
    targetPathname.startsWith(subroute),
  );
  const isUrlFromSameEnvironment = targetPathname.startsWith(environmentPath);

  return (
    (isUserInIOTAEnvironment && !isEnvironmentSubroute) ||
    (!isUserInIOTAEnvironment && isUrlFromSameEnvironment)
  );
}

document.addEventListener('click', (e) => handleOnClick(e), true);
