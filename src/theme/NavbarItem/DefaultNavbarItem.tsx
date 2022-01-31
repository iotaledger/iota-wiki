/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import type {
  DesktopOrMobileNavBarItemProps,
  Props as NavLinkProps,
} from '@theme/NavbarItem/DefaultNavbarItem';
import IconExternalLink from '@theme/IconExternalLink';
import isInternalUrl from '@docusaurus/isInternalUrl';

const dropdownLinkActiveClass = 'dropdown__link--active';

interface ExtendedNavLinkProps extends NavLinkProps {
  sublabel?: string;
  icon?: string;
}

export function NavLink({
  activeBasePath,
  activeBaseRegex,
  to,
  href,
  label,
  sublabel,
  icon,
  activeClassName = 'navbar__link--active',
  prependBaseUrlToHref,
  ...props
}: ExtendedNavLinkProps): JSX.Element {
  // TODO all this seems hacky
  // {to: 'version'} should probably be forbidden, in favor of {to: '/version'}
  const toUrl = useBaseUrl(to);
  const activeBaseUrl = useBaseUrl(activeBasePath);
  const normalizedHref = useBaseUrl(href, { forcePrependBaseUrl: true });
  const isExternalLink = label && href && !isInternalUrl(href);
  const isDropdownLink = activeClassName === dropdownLinkActiveClass;

  const checkIsActive = (_match, location) =>
    activeBaseRegex
      ? new RegExp(activeBaseRegex).test(location.pathname)
      : location.pathname.startsWith(activeBaseUrl);

  return (
    <Link
      {...(href
        ? {
            href: prependBaseUrlToHref ? normalizedHref : href,
          }
        : {
            isNavLink: true,
            activeClassName,
            to: toUrl,
            ...(activeBasePath || activeBaseRegex
              ? {
                  isActive: checkIsActive,
                }
              : null),
          })}
      {...props}
    >
      <div className='link'>
        {icon && <div className='link__icon'>{icon}</div>}
        <div className='link__body'>
          <div className='link__label'>
            {isExternalLink ? (
              <span>
                {label}
                <IconExternalLink
                  {...(isDropdownLink && {
                    width: 12,
                    height: 12,
                  })}
                />
              </span>
            ) : (
              label
            )}
          </div>
          {sublabel && <div className='link__sublabel'>{sublabel}</div>}
        </div>
      </div>
    </Link>
  );
}

function DefaultNavbarItemDesktop({
  className,
  isDropdownItem = false,
  ...props
}: DesktopOrMobileNavBarItemProps) {
  const element = (
    <NavLink
      className={clsx(
        isDropdownItem ? 'dropdown__link' : 'navbar__item navbar__link',
        className,
      )}
      {...props}
    />
  );

  if (isDropdownItem) {
    return <li>{element}</li>;
  }

  return element;
}

function DefaultNavbarItemMobile({
  className,
  ...props
}: DesktopOrMobileNavBarItemProps) {
  delete props.isDropdownItem;

  return (
    <li className='menu__list-item'>
      <NavLink className={clsx('menu__link', className)} {...props} />
    </li>
  );
}

function DefaultNavbarItem({
  mobile = false,
  to,
  label,
  ...props
}: ExtendedNavLinkProps): JSX.Element {
  delete props.position;

  /**
   * Added to enable non-clickable category headers.
   * To use simply add an navBar items in the config
   * with to:'category-header'
   */
  if (to === 'category-header') {
    const categorySeparatorStyles = {
      fontSize: '10px',
      color: 'var(--ifm-color-emphasis-600)',
      paddingTop: '10px',
    };
    return <li style={categorySeparatorStyles}>{label}</li>;
  } else {
    const Comp = mobile ? DefaultNavbarItemMobile : DefaultNavbarItemDesktop;
    return <Comp to={to} label={label} {...props} />;
  }
}

export default DefaultNavbarItem;
