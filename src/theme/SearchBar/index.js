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

    searchStyle.position = 'fixed'
    searchStyle.left = left + 'px'
    searchStyle.top = top + 'px'
    searchStyle.right = `calc(100% - ${right}px)`
    searchStyle.bottom = `calc(100% - ${bottom}px)`

    containerStyle.width = width + 'px'
    containerStyle.height = height + 'px'
  }

  const onEntering = () => {
    let searchStyle = search.current.style

    searchStyle.left = '0'
    searchStyle.top = '0'
    searchStyle.right = '0'
    searchStyle.bottom = '0'
  }

  const onExiting = () => {
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

    searchStyle.position = null
    searchStyle.left = null
    searchStyle.top = null
    searchStyle.right = null
    searchStyle.bottom = null

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
        onExiting={onExiting}
        onExited={onExited}
      >
        <div className={styles.search} ref={search}>
          <div className={styles.searchBar}>
            <span className={clsx(styles.searchBarIcon, 'margin--sm')} style={searchIconStyle}>{searchIcon}</span>
            <input
              className={styles.searchBarInput}
              type='text'
              placeholder='Search'
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
