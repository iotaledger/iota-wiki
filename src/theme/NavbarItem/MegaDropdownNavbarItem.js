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
  return items.some((item) => {
    item.items ? containsActiveItems(item.items, localPathname) : isItemActive(item, localPathname)
  });
}

function createItemCursor({items, label, className, ...props}) {
  const cursor = {items: [], index: 0}

  if (items) {
    if (label) {
      cursor.items.push({label, className})
    }
    cursor.items.push(...items)
  } else {
    cursor.items.push({label, className, ...props})
  }

  return cursor
}

function MegaDropdownItem({className, ...props}) {
  if (props.to || props.href) {
    return (
      <NavLink
        className={clsx(
          'dropdown__link',
          className,
        )}
        {...props}
      />
    )
  }

  if (props.label) {
    return <h4>{props.label}</h4>
  }

  throw 'Mega dropdown item must be a link or a category header.'
}

function MegaDropdownGrid({items, layout}) {
  const itemCursors = items.map(createItemCursor)

  // Layout is in row major order due to CSS grid area syntax
  const rowCount = layout.length
  const columnCount = Math.max(...layout.map(row => row.split(/\s+/).length))

  // Place indexes in column major order.
  const gridIndexes = []
  layout.forEach((row, rowOffset) => {
    row.split(/\s+/).forEach((column, columnOffset) => {
      if (column && column !== '.') {
        gridIndexes[rowOffset + columnOffset * rowCount] = column
      }
    })
  })

  // Resolve items in column major order.
  const gridItems = gridIndexes.map((index) => {
    const cursor = itemCursors[index]
    if (cursor) {
        return cursor.items[cursor.index++] ?? null
    }
  })

  // TODO: Implement menu close behavior when pressing tab on last item.

  // Place items in grid in row major order.
  const grid = []
  for (let rowOffset = 0; rowOffset < rowCount; rowOffset++) {
    const rows = []
    for (let columnOffset = 0; columnOffset < columnCount; columnOffset++) {
      rows.push(gridItems[rowOffset + columnOffset * rowCount])
    }
    grid.push(rows)
  }

  return (
    <div className='mega-dropdown__grid'>
      {grid.map((row, rowKey) => (
        <div className='row mega-dropdown__row' key={rowKey}>
          {row.map((column, columnKey) => (
            <div className='col mega-dropdown__col' key={columnKey}>
              {column ? <MegaDropdownItem {...column} /> : null}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

function MegaDropdownNavbarItemDesktop({items_: items, layout, position, className, ...props}) {
  const localPathname = useLocalPathname();
  const containsActive = containsActiveItems(items, localPathname);
  const dropdownRef = useRef(null);
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
    <>
      <div
        ref={dropdownRef}
        className={clsx('navbar__item', 'dropdown', {
          'dropdown--right': position === 'right',
        })}
        onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}
      >
        <NavLink
          className={clsx(
            'navbar__item navbar__link',
            {
              'navbar__link--active': containsActive,
            },
            className
          )}
          {...props}
          onClick={(e) => e.preventDefault()}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              setShowDropdown(!showDropdown);
            }
          }}>
          {props.children ?? props.label}
        </NavLink>
      </div>
      <div
        className={clsx('mega-dropdown__container', {
          'mega-dropdown__container--show': showDropdown,
        })}
      >
        <MegaDropdownGrid items={items} layout={layout} />
      </div>
    </>
  );
}

function MegaDropdownNavbarItemMobile({
  items_: items,
  className,
  // Need to destructure position and layout from props so that it doesn't get passed on.
  position: _position,
  layout: _layout,
  ...props
}) {
  const localPathname = useLocalPathname();
  const containsActive = containsActiveItems(items, localPathname);
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
        {items.map((itemProps, itemKey) => (
          <NavbarItem
            mobile
            isDropdownItem
            onClick={props.onClick}
            activeClassName="menu__link--active"
            {...itemProps}
            key={itemKey}
          />
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
