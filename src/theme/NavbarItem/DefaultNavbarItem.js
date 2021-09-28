/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import IconExternalLink from '@theme/IconExternalLink';
import isInternalUrl from '@docusaurus/isInternalUrl';
const dropdownLinkActiveClass = 'dropdown__link--active';
function NavLink({
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
}) {
  // TODO all this seems hacky
  // {to: 'version'} should probably be forbidden, in favor of {to: '/version'}
  const toUrl = useBaseUrl(to);
  const activeBaseUrl = useBaseUrl(activeBasePath);
  const normalizedHref = useBaseUrl(href, {
    forcePrependBaseUrl: true,
  });
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

NavLink.propTypes = {
  activeBasePath: PropTypes.string,
  activeBaseRegex: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
  label: PropTypes.string,
  sublabel: PropTypes.string,
  icon: PropTypes.string,
  activeClassName: PropTypes.string,
  prependBaseUrlToHref: PropTypes.bool,
};

NavLink.defaultProps = {
  activeClassName: 'navbar__link--active',
};

export { NavLink };

function DefaultNavbarItemDesktop({
  className,
  isDropdownItem = false,
  ...props
}) {
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

DefaultNavbarItemDesktop.propTypes = {
  className: PropTypes.string,
  isDropdownItem: PropTypes.bool,
};

DefaultNavbarItemDesktop.defaultProps = {
  isDropdownItem: false,
};

function DefaultNavbarItemMobile({ className, ...props }) {
  /* eslint-disable-next-line react/prop-types */
  delete props.isDropdownItem;

  return (
    <li className='menu__list-item'>
      <NavLink className={clsx('menu__link', className)} {...props} />
    </li>
  );
}

DefaultNavbarItemMobile.propTypes = {
  className: PropTypes.string,
};

function DefaultNavbarItem({ mobile = false, to, label, ...props }) {
  /* eslint-disable-next-line react/prop-types */
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

DefaultNavbarItem.propTypes = {
  mobile: PropTypes.bool,
  to: PropTypes.string,
  label: PropTypes.string,
};

DefaultNavbarItem.defaultProps = {
  mobile: false,
};

export default DefaultNavbarItem;
