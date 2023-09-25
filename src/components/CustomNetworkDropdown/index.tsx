import React, { useState, useRef, useEffect } from 'react';
import { renderToString } from 'react-dom/server';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useLocation } from '@docusaurus/router';
import { useCollapsible, Collapsible } from '@docusaurus/theme-common';
import NavbarNavLink from '@theme/NavbarItem/NavbarNavLink';
import NavbarItem, { type LinkLikeNavbarItemProps } from '@theme/NavbarItem';
import type {
  DesktopOrMobileNavBarItemProps,
  Props as DropdownNavbarItemProps,
} from '@theme/NavbarItem/DropdownNavbarItem';
import './styles.css';

import icons from '@site/src/icons';
import {
  fetchSitemapUrlsFromNetwork,
  getBestNetworkUrlMatch,
} from '@site/src/utils/networkUtils';

const { IotaCore, Shimmer, Next } = icons;

interface NetworkDropdownItem {
  label: string;
  routeBasePath: string;
}

interface NetworkDropdownProps extends DropdownNavbarItemProps {
  label: string;
  items: NetworkDropdownItem[];
}

enum Network {
  Iota = '/',
  Shimmer = '/shimmer/',
  Next = '/next/',
}

function NetworkDropdownNavbarItemDesktop({
  items,
  position,
  className,
  ...props
}: DesktopOrMobileNavBarItemProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        !dropdownRef.current ||
        dropdownRef.current.contains(event.target as Node)
      ) {
        return;
      }
      setShowDropdown(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div
      ref={dropdownRef}
      className={clsx(
        'navbar__item',
        'dropdown',
        'dropdown--hoverable',
        'network-dropdown',
        {
          'dropdown--right': position === 'right',
          'dropdown--show': showDropdown,
        },
      )}
    >
      <NavbarNavLink
        aria-haspopup='true'
        aria-expanded={showDropdown}
        role='button'
        href={props.to ? undefined : '#'}
        className={clsx('navbar__link', className)}
        {...props}
        onClick={props.to ? undefined : (e) => e.preventDefault()}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            setShowDropdown(!showDropdown);
          }
        }}
      >
        {props.children ?? props.label}
      </NavbarNavLink>
      <ul className='dropdown__menu'>
        {items.map((childItemProps, i) => (
          <NavbarItem
            isDropdownItem
            onKeyDown={(e) => {
              if (i === items.length - 1 && e.key === 'Tab') {
                e.preventDefault();
                setShowDropdown(false);
                const nextNavbarItem =
                  dropdownRef.current?.nextElementSibling ?? null;
                if (nextNavbarItem) {
                  const targetItem =
                    nextNavbarItem instanceof HTMLAnchorElement
                      ? nextNavbarItem
                      : // Next item is another dropdown; focus on the inner
                        // anchor element instead so there's outline
                        nextNavbarItem.querySelector('a');
                  targetItem.focus();
                }
              }
            }}
            activeClassName='dropdown__link--active'
            {...childItemProps}
            key={i}
          />
        ))}
      </ul>
    </div>
  );
}

function NetworkDropdownNavbarItemMobile({
  items,
  className,
  onClick,
  ...props
}: DesktopOrMobileNavBarItemProps) {
  delete props.position;
  const { collapsed, toggleCollapsed } = useCollapsible({
    initialState: () => true,
  });

  return (
    <li
      className={clsx('menu__list-item', 'network-dropdown', {
        'menu__list-item--collapsed': collapsed,
      })}
    >
      <NavbarNavLink
        role='button'
        className={clsx(
          'menu__link menu__link--sublist menu__link--sublist-caret',
          className,
        )}
        {...props}
        onClick={(e) => {
          e.preventDefault();
          toggleCollapsed();
        }}
      >
        {props.children ?? props.label}
      </NavbarNavLink>
      <Collapsible lazy as='ul' className='menu__list' collapsed={collapsed}>
        {items.map((childItemProps, i) => (
          <NavbarItem
            mobile
            isDropdownItem
            onClick={onClick}
            activeClassName='menu__link--active'
            {...childItemProps}
            key={i}
          />
        ))}
      </Collapsible>
    </li>
  );
}

export default function NetworkDropdownNavbarItem({
  mobile = false,
  items,
  ...props
}: NetworkDropdownProps): JSX.Element {
  const { pathname } = useLocation();
  const {
    siteConfig: { baseUrl },
  } = useDocusaurusContext();

  const basePathToIcon = {
    '/': IotaCore,
    '/shimmer/': Shimmer,
    '/next/': Next,
  };

  const subpath = pathname.substring(baseUrl.length);

  const {
    siteConfig: { url: siteUrl },
  } = useDocusaurusContext();

  const networkPaths: Network[] = [Network.Iota, Network.Shimmer, Network.Next];

  const [basePathSitemap, setBasePathSitemap] = useState<
    Record<string, string[]>
  >({});

  const FALLBACK_ROUTE = '/404';

  useEffect(() => {
    for (const networkPath of networkPaths) {
      if (networkPath === Network.Next) {
        continue;
      }
      if (!basePathSitemap[networkPath]) {
        fetchSitemapUrlsFromNetwork(siteUrl, networkPath)
          .then((urlsFromNetwork) => {
            if (!urlsFromNetwork?.length) {
              throw new Error(
                `No urls found for network ${networkPath} in sitemap`,
              );
            }
            setBasePathSitemap((prevUrls) => ({
              ...prevUrls,
              [networkPath]: urlsFromNetwork,
            }));
            if (networkPath === Network.Shimmer) {
              // Use the urls from the Shimmer network in Next
              setBasePathSitemap((prevUrls) => ({
                ...prevUrls,
                [Network.Next]: urlsFromNetwork,
              }));
            }
          })
          .catch((err) => console.error(err));
      }
    }
  }, []);

  const htmlItems = items.map<LinkLikeNavbarItemProps>((value) => {
    const Icon = basePathToIcon[value.routeBasePath];

    let url = value.routeBasePath + subpath;
    // only do if we are not in homepage
    if (subpath) {
      const bestMatch = getBestNetworkUrlMatch(
        subpath,
        basePathSitemap[value.routeBasePath],
      );

      // If no match redirect to /404
      if (bestMatch === '/' || !bestMatch) {
        const basePath = value.routeBasePath.endsWith('/')
          ? value.routeBasePath.slice(0, -1)
          : value.routeBasePath;

        url = basePath + FALLBACK_ROUTE;
      } else {
        url = value.routeBasePath + bestMatch;
      }
    }

    return {
      type: 'html',
      value: renderToString(
        <a className='dropdown__link network-dropdown__link' href={url}>
          <Icon className='network-dropdown__icon' />
          {value.label}
        </a>,
      ),
    };
  });

  const Comp = mobile
    ? NetworkDropdownNavbarItemMobile
    : NetworkDropdownNavbarItemDesktop;
  return <Comp items={htmlItems} {...props} />;
}
