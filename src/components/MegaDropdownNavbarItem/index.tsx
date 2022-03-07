/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import {
  isSamePath,
  useCollapsible,
  useHideableNavbar,
  useThemeConfig,
  Collapsible,
  useLocalPathname,
} from '@docusaurus/theme-common';
import NavLink from '@site/src/components/NavLink';
import NavbarItem from '@theme/NavbarItem';
import type { Props as NavLinkProps } from '@theme/NavbarItem/DefaultNavbarItem';
import './styles.css';

const dropdownLinkActiveClass = 'dropdown__link--active';

interface DesktopOrMobileMegaDropdownNavbarItemProps extends NavLinkProps {
  readonly position?: 'left' | 'right';
  readonly items_: readonly [];
  readonly layout?;
  readonly className?: string;
}

export interface Props extends DesktopOrMobileMegaDropdownNavbarItemProps {
  readonly mobile?: boolean;
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

  return item.activeBasePath && localPathname.startsWith(item.activeBasePath);
}

function containsActiveItems(items, localPathname) {
  return items.some((item) => isItemActive(item, localPathname));
}

function createItemCursor({ items, label, className, ...props }) {
  const cursor = { items: [], index: 0 };

  if (items) {
    if (label) {
      cursor.items.push({ label, className });
    }
    cursor.items.push(...items);
  } else {
    cursor.items.push({ label, className, ...props });
  }

  return cursor;
}

function MegaDropdownItem({
  className,
  to,
  href,
  label,
  ...props
}: NavLinkProps) {
  if (to || href) {
    return (
      <NavLink
        className={clsx('dropdown__link', className)}
        activeClassName={dropdownLinkActiveClass}
        to={to}
        href={href}
        label={label}
        {...props}
      />
    );
  }

  if (label) {
    return <div className='dropdown__label'>{label}</div>;
  }

  throw 'Mega dropdown item must be a link or a category header.';
}

/***
 * Loop through the megamenu's grouped items and return ungrouped items
 * @param groupedItems array
 * @returns array of ungrouped items
 */
function getUngroupedItemsList(groupedItems) {
  const items = [];
  groupedItems.map((itemList) => {
    itemList.items.map((item) => {
      items.push(item);
    });
  });
  return items;
}

/**
 Add support for a changing label in dropdowns
 according to the selected dropdown item
 **/
function getDropdownProps(props, items, localPathname) {
  const activeItem = items.filter((item) => isItemActive(item, localPathname));
  if (activeItem.length) {
    return {
      activeBaseRegex: activeItem[0].activeBaseRegex,
      label: props.label + ' | ' + activeItem[0].label,
    };
  }

  return props;
}

function MegaDropdownNavbarItemDesktop({
  items_: items,
  layout,
  position,
  className,
  ...props
}: DesktopOrMobileMegaDropdownNavbarItemProps) {
  const localPathname = useLocalPathname();
  const dropdownRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const {
    navbar: { hideOnScroll },
  } = useThemeConfig();
  const { isNavbarVisible } = useHideableNavbar(hideOnScroll);

  const itemCursors = items.map(createItemCursor);
  /**
   Added consts to get the dropdown label if a dropdown item is selected
   **/
  const ungroupedItems = getUngroupedItemsList(items);
  const dropdownProps = getDropdownProps(
    props,
    ungroupedItems,
    useLocalPathname(),
  );
  const containsActive = containsActiveItems(ungroupedItems, localPathname);

  // Layout is in row major order due to CSS grid area syntax
  const rowCount = layout.length;
  const columnCount = Math.max(...layout.map((row) => row.split(/\s+/).length));

  // Place indexes in column major order.
  const gridIndexes = [];
  layout.forEach((row, rowOffset) => {
    row.split(/\s+/).forEach((column, columnOffset) => {
      if (column && column !== '.') {
        gridIndexes[rowOffset + columnOffset * rowCount] = column;
      }
    });
  });

  // Resolve items in column major order.
  const gridItems = gridIndexes.map((index) => {
    const cursor = itemCursors[index];
    if (cursor) {
      return cursor.items[cursor.index++] ?? null;
    }
  });

  // Place items in grid in row major order.
  const grid = [];
  let lastItem = null;
  for (let rowOffset = 0; rowOffset < rowCount; rowOffset++) {
    const rows = [];
    for (let columnOffset = 0; columnOffset < columnCount; columnOffset++) {
      const item = gridItems[rowOffset + columnOffset * rowCount];
      rows.push(item);
      if (item) {
        lastItem = item;
      }
    }
    grid.push(rows);
  }

  // Add tab behavior to last item
  lastItem.onKeyDown = (e) => {
    if (e.key === 'Tab') {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    if (!isNavbarVisible) {
      setShowDropdown(false);
    }
  }, [isNavbarVisible]);

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
      className={clsx('dropdown', 'dropdown--hoverable', 'dropdown--mega', {
        'dropdown--right': position === 'right',
        'dropdown--show': showDropdown,
      })}
      onMouseLeave={() => setShowDropdown(false)}
    >
      <NavLink
        className={clsx('navbar__item navbar__link', className, {
          'navbar__link--active': containsActive,
        })}
        {...dropdownProps}
        onClick={(e) => e.preventDefault()}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            setShowDropdown(!showDropdown);
          }
        }}
        onMouseEnter={() => setShowDropdown(true)}
      >
        {props.children ?? props.label}
      </NavLink>
      <div className='dropdown__container'>
        <div className='dropdown__menu'>
          {grid.map((row, rowKey) => (
            <div className='row row--no-gutters dropdown__row' key={rowKey}>
              {row.map((column, columnKey) => (
                <div
                  className='col margin-horiz--xs dropdown__col'
                  key={columnKey}
                >
                  {column ? <MegaDropdownItem {...column} /> : null}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MegaDropdownNavbarItemMobile({
  items_: items,
  className,
  ...props
}: DesktopOrMobileMegaDropdownNavbarItemProps) {
  delete props.position;
  delete props.layout;

  const localPathname = useLocalPathname();
  /**
   Added const to get the dropdown label if a dropdown item is selected
   **/
  const ungroupedItems = getUngroupedItemsList(items);
  const dropdownProps = getDropdownProps(
    props,
    ungroupedItems,
    useLocalPathname(),
  );
  const containsActive = containsActiveItems(ungroupedItems, localPathname);
  const { collapsed, toggleCollapsed, setCollapsed } = useCollapsible({
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
      })}
    >
      <NavLink
        role='button'
        className={clsx('menu__link menu__link--sublist', className)}
        {...props}
        onClick={(e) => {
          e.preventDefault();
          toggleCollapsed();
        }}
      >
        {dropdownProps}
      </NavLink>
      <Collapsible lazy as='ul' className='menu__list' collapsed={collapsed}>
        {items.map((itemProps, itemKey) => (
          <NavbarItem
            mobile
            isDropdownItem
            onClick={props.onClick}
            activeClassName='menu__link--active'
            {...itemProps}
            key={itemKey}
          />
        ))}
      </Collapsible>
    </li>
  );
}

function MegaDropdownNavbarItem({
  mobile = false,
  ...props
}: Props): JSX.Element {
  const Comp = mobile
    ? MegaDropdownNavbarItemMobile
    : MegaDropdownNavbarItemDesktop;
  return <Comp {...props} />;
}

export default MegaDropdownNavbarItem;
