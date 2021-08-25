/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, {useState, useRef, useEffect} from 'react';
import clsx from 'clsx';
import {
  isSamePath,
  useCollapsible,
  Collapsible,
  useLocalPathname,
} from '@docusaurus/theme-common';
import {NavLink} from '@theme/NavbarItem/DefaultNavbarItem';
import NavbarItem from '@theme/NavbarItem';
const dropdownLinkActiveClass = 'dropdown__link--active';

function deriveKey(a, b) {
  return (.5 * (a + b) * (a + b + 1)) + b
}

function isItemActive(item, localPathname) {
  if (isSamePath(item.to, localPathname)) {
    return true;
  }

  if (
    item.activeBaseRegex &&
    new RegExp(item.activeBaseRegex).test(localPathname)
  ) {
    return true;
  }

  if (item.activeBasePath && localPathname.startsWith(item.activeBasePath)) {
    return true;
  }

  return false;
}

function containsActiveItems(items, localPathname) {
  return items.some((item) => isItemActive(item, localPathname));
}

function MegaDropdownNavbarItemDesktop({columns, position, className, ...props}) {
  const dropdownRef = useRef(null);
  const dropdownMenuRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!dropdownRef.current || dropdownRef.current.contains(event.target)) {
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
      className={clsx('navbar__item', 'dropdown', 'dropdown--hoverable', {
        'dropdown--right': position === 'right',
        'dropdown--show': showDropdown,
      })}>
      <NavLink
        className={clsx('navbar__item navbar__link', className)}
        onClick={props.to ? undefined : (e) => e.preventDefault()}
        {...props}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            setShowDropdown(!showDropdown);
          }
        }}>
        {props.children ?? props.label}
      </NavLink>
      <div ref={dropdownMenuRef} className="dropdown__menu">
        {columns.map((rows, columnKey) => (
          rows.map((children, rowKey) => (
            <ul key={deriveKey(columnKey, rowKey)}>
              {children.map((childItemProps, childKey) => (
                <NavbarItem
                  isDropdownItem
                  onKeyDown={(e) => {
                    if (
                      columnKey === columns.length - 1 &&
                      rowKey === row.length - 1 &&
                      childKey === children.length - 1 &&
                      e.key === 'Tab'
                    ) {
                      e.preventDefault();
                      setShowDropdown(false);
                      const nextNavbarItem = dropdownRef.current.nextElementSibling;

                      if (nextNavbarItem) {
                        nextNavbarItem.focus();
                      }
                    }
                  }}
                  activeClassName={dropdownLinkActiveClass}
                  {...childItemProps}
                  key={childKey}
                />
              ))}
            </ul>
          ))
        ))}
      </div>
    </div>
  );
}

function MegaDropdownNavbarItemMobile({
  columns,
  className,
  position: _position,
  // Need to destructure position from props so that it doesn't get passed on.
  ...props
}) {
  const localPathname = useLocalPathname();
  const containsActive = containsActiveItems(columns, localPathname);
  const {collapsed, toggleCollapsed, setCollapsed} = useCollapsible({
    initialState: () => !containsActive,
  }); // Expand/collapse if any item active after a navigation

  useEffect(() => {
    if (containsActive) {
      setCollapsed(!containsActive);
    }
  }, [localPathname, containsActive]);
  return (
    <li
      className={clsx('menu__list-item', {
        'menu__list-item--collapsed': collapsed,
      })}>
      <NavLink
        role="button"
        className={clsx('menu__link menu__link--sublist', className)}
        {...props}
        onClick={(e) => {
          e.preventDefault();
          toggleCollapsed();
        }}>
        {props.children ?? props.label}
      </NavLink>
      <Collapsible lazy as="ul" className="menu__list" collapsed={collapsed}>
        {columns.map((rows, columnKey) => (
          rows.map((children, rowKey) => (
            children.map((childItemProps, childKey) => (
              <NavbarItem
                mobile
                isDropdownItem
                onClick={props.onClick}
                activeClassName="menu__link--active"
                {...childItemProps}
                key={deriveKey(deriveKey(columnKey, rowKey), childKey)}
              />
            ))
          ))
        ))}
      </Collapsible>
    </li>
  );
}

function MegaDropdownNavbarItem({mobile = false, ...props}) {
  const Comp = mobile ? MegaDropdownNavbarItemMobile : MegaDropdownNavbarItemDesktop;
  return <Comp {...props} />;
}

export default MegaDropdownNavbarItem;
