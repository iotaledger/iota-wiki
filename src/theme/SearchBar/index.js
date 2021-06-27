/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import { CSSTransition } from 'react-transition-group'
import {useThemeConfig} from '@docusaurus/theme-common';
import styles from './styles.module.css';

const SearchBar = () => {
  const {
    searchMode: {
      switchConfig: {closeIcon, closeIconStyle, searchIcon, searchIconStyle},
    },
  } = useThemeConfig();

  const container = React.useRef(null)
  const search = React.useRef(null)
  const [active, setActive] = React.useState(false)

  const duration = 300;

  const onEnter = () => {
    let searchStyle = search.current.style
    let containerStyle = container.current.style

    const {
      left, top, right, bottom, width, height
    } = search.current.getBoundingClientRect()

    // Take the search out of the flow, placing it
    // at the same position.
    searchStyle.position = 'fixed'
    searchStyle.left = left + 'px'
    searchStyle.top = top + 'px'
    searchStyle.right = `calc(100% - ${right}px)`
    searchStyle.bottom = `calc(100% - ${bottom}px)`

    // Replace the search with the container.
    containerStyle.width = width + 'px'
    containerStyle.height = height + 'px'
  }

  const onEntering = () => {
    let searchStyle = search.current.style

    // Take the search out of the flow, placing it
    // at the same position.
    searchStyle.transition = `all ${duration}ms ease-in-out`
    searchStyle.left = '0'
    searchStyle.top = '0'
    searchStyle.right = '0'
    searchStyle.bottom = '0'
    searchStyle.borderRadius = '0'
  }

  const onExit = () => {
    let searchStyle = search.current.style

    const {
      left, top, right, bottom
    } = container.current.getBoundingClientRect()

    searchStyle.left = left + 'px'
    searchStyle.top = top + 'px'
    searchStyle.right = `calc(100% - ${right}px)`
    searchStyle.bottom = `calc(100% - ${bottom}px)`
  }

  const onExited = () => {
    let searchStyle = search.current.style
    let containerStyle = container.current.style

    searchStyle.transition = null
    searchStyle.position = null
    searchStyle.left = null
    searchStyle.top = null
    searchStyle.right = null
    searchStyle.bottom = null
    searchStyle.borderRadius = null

    // Remove the container.
    containerStyle.width = null
    containerStyle.height = null
  }

  return (
    <div ref={container}>
      <CSSTransition
        in={active}
        timeout={duration}
        nodeRef={search}
        onEnter={onEnter}
        onEntering={onEntering}
        onExit={onExit}
        onExited={onExited}
      >
        <div className={styles.search} ref={search}>
          <div className={styles.searchBar}>
            <span className={clsx(styles.searchBarIcon, 'margin--sm')} style={searchIconStyle}>{searchIcon}</span>
            <input
              className={styles.searchBarInput}
              type='text'
              container='Search'
              onFocus={() => setActive(true)}
              onBlur={() => setActive(false)}
            />
          </div>
        </div>
      </CSSTransition>
    </div>
  )
}

export default SearchBar
