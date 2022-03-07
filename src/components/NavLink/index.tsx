import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import isInternalUrl from '@docusaurus/isInternalUrl';
import IconExternalLink from '@theme/IconExternalLink';
import type { Props as NavLinkProps } from '@theme/NavbarItem/DefaultNavbarItem';
import './styles.css';

const dropdownLinkActiveClass = 'dropdown__link--active';

export interface ExtendedNavLinkProps extends NavLinkProps {
  sublabel?: string;
  icon?: string;
}

export default function NavLink({
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
