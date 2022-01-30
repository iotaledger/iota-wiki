/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { FooterLinkItem, useThemeConfig } from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage, { Props as ThemedImageProps } from '@theme/ThemedImage';
import Social from '@site/src/components/Social';

function FooterLink({
  to,
  href,
  label,
  prependBaseUrlToHref,
  ...props
}: FooterLinkItem) {
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, { forcePrependBaseUrl: true });

  return (
    <Link
      className='footer__link-item'
      {...(href
        ? {
            href: prependBaseUrlToHref ? normalizedHref : href,
          }
        : {
            to: toUrl,
          })}
      {...props}
    >
      {label}
    </Link>
  );
}

function FooterLogo({
  sources,
  alt,
  width,
  height,
}: Pick<ThemedImageProps, 'sources' | 'alt' | 'width' | 'height'>) {
  return (
    <ThemedImage
      className='footer__logo'
      alt={alt}
      sources={sources}
      width={width}
      height={height}
    />
  );
}

function Footer(): JSX.Element | null {
  const { footer } = useThemeConfig();
  const { copyright, links = [], logo = {} } = footer || {};
  const sources = {
    light: useBaseUrl(logo.src),
    dark: useBaseUrl(logo.srcDark || logo.src),
  };

  if (!footer) {
    return null;
  }

  return (
    <footer
      className={clsx('footer', 'padding--none', {
        'footer--dark': footer.style === 'dark',
      })}
    >
      <div className='container'>
        {links && links.length > 0 && (
          <div className='row footer__links padding-vert--xl'>
            {links.map((linkItem, i) => (
              <div key={i} className='col footer__col'>
                {linkItem.title != null ? (
                  <h4 className='footer__title'>{linkItem.title}</h4>
                ) : null}
                {linkItem.items != null &&
                Array.isArray(linkItem.items) &&
                linkItem.items.length > 0 ? (
                  <ul className='footer__items'>
                    {linkItem.items.map((item, key) =>
                      item.html ? (
                        <li
                          key={key}
                          className='footer__item' // Developer provided the HTML, so assume it's safe.
                          // eslint-disable-next-line react/no-danger
                          dangerouslySetInnerHTML={{
                            __html: item.html,
                          }}
                        />
                      ) : (
                        <li key={item.href || item.to} className='footer__item'>
                          <FooterLink {...item} />
                        </li>
                      ),
                    )}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        )}
        {(logo || copyright) && (
          <div className='footer__bottom padding-bottom--xl'>
            {logo && (logo.src || logo.srcDark) && (
              <div>
                {logo.href ? (
                  <Link href={logo.href}>
                    <FooterLogo alt={logo.alt} sources={sources} />
                  </Link>
                ) : (
                  <FooterLogo alt={logo.alt} sources={sources} />
                )}
              </div>
            )}
            {copyright ? (
              <div
                className='footer__copyright' // Developer provided the HTML, so assume it's safe.
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: copyright,
                }}
              />
            ) : null}
          </div>
        )}
      </div>
      <Social />
    </footer>
  );
}

export default React.memo(Footer);
