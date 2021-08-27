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
  return items.flat(2).some((item) => {
    item.sections ? containsActiveItems(item.sections, localPathname) : isItemActive(item, localPathname)
  });
}

function MegaDropdownNavbarItemDesktop({sections, position, className, ...props}) {
  const localPathname = useLocalPathname();
  const containsActive = containsActiveItems(sections, localPathname);
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
        <div
          ref={dropdownMenuRef}
          className='mega-dropdown__menu'
        >
          <div className='mega-dropdown__section mega-dropdown__section--row'>
            {sections.map((items, sectionKey) => (
              <div className='mega-dropdown__section' key={sectionKey}>
                {items.map(({sections: subSections, className: itemClassName, ...itemProps}, itemKey) => (
                  (subSections ?
                    <div className={clsx('mega-dropdown__section', itemClassName)} key={itemKey}>
                      {itemProps.label ??
                        <div className='mega-dropdown__header'>
                          {itemProps.label}
                        </div>
                      }
                      <div className='mega-dropdown__section mega-dropdown__section--row'>
                        {subSections.map((subItems, subSectionKey) => (
                          <div className='mega-dropdown__section' key={subSectionKey}>
                            {subItems.map(({className: subItemClassName, ...subItemProps}, subItemKey) => (
                              <NavLink
                                className={clsx(
                                  'dropdown__link',
                                  subItemClassName,
                                )}
                                activeClassName={dropdownLinkActiveClass}
                                onKeyDown={(e) => {
                                  if (
                                    sectionKey === sections.length - 1 &&
                                    itemKey === items.length - 1 &&
                                    subSectionKey === subSections.length - 1 &&
                                    subItemKey === subItems.length - 1 &&
                                    e.key === 'Tab'
                                  ) {
                                    setShowDropdown(false);
                                  }
                                }}
                                {...subItemProps}
                                key={subItemKey}
                              />
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  :
                    <NavLink
                      className={clsx(
                        'dropdown__link',
                        itemClassName,
                      )}
                      activeClassName={dropdownLinkActiveClass}
                      onKeyDown={(e) => {
                        if (
                          sectionKey === sections.length - 1 &&
                          itemKey === items.length - 1 &&
                          e.key === 'Tab'
                        ) {
                          setShowDropdown(false);
                        }
                      }}
                      {...itemProps}
                      key={itemKey}
                    />
                  )
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function MegaDropdownNavbarItemMobile({
  sections,
  className,
  position: _position,
  // Need to destructure position from props so that it doesn't get passed on.
  ...props
}) {
  const localPathname = useLocalPathname();
  const containsActive = containsActiveItems(sections, localPathname);
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
        {sections.flat(2).map((itemProps, itemKey) => (
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
