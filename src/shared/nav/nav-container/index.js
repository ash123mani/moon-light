import React, { useState, useEffect } from 'react'
import { array, bool, string } from 'prop-types'

import NavTab from '../nav-tab'

import { Container, NavContent } from './styles'

function NavContainer(props) {
  const { navs, isTop = true } = props

  const currentPath = typeof window !== 'undefined' ? window.location.pathname : ''
  const [selected, setSelected] = useState([])

  useEffect(() => {
    setSelected([currentPath])
  }, [])

  function handleNavTabClick(nav) {
    let newLinks = []

    console.log('selected inside handleNavTabClick', selected)
    console.log('selected nav.url', nav.url)
    if (selected.includes(nav.url)) {
      newLinks = selected.filter((item) => item !== nav.url)
    } else {
      newLinks = selected.concat(nav.url)
    }

    setSelected(newLinks)
  }

  return (
    <Container>
      {navs.map((nav) => {
        const topUrl = nav.url
        const hasSubLinks = nav.pages && !!nav.pages.length
        console.log('topUrl', topUrl)
        console.log('selected-inside', selected)
        const isArrowSelected = selected.includes(topUrl) || currentPath.includes(nav.url)
        // currentPath.includes(nav.url)
        // const isCurrentUrlPartOfTree = hasSubLinks && currentPath.includes(nav.url)

        let isOpen = false

        if (isArrowSelected && selected.includes(currentPath)) {
          isOpen = true
        }

        return (
          <NavContent key={nav.url} isTop={isTop}>
            <NavTab
              showArrow={isTop}
              url={nav.url}
              title={nav.title}
              onClick={(e) => handleNavTabClick(nav, e)}
              isSelected={isOpen}
              hasSubLinks={hasSubLinks}
            />

            {isOpen && hasSubLinks && <NavContainer navs={nav.pages} isTop={false} />}
          </NavContent>
        )
      })}
    </Container>
  )
}

NavContainer.propTypes = {
  navs: array.isRequired,
  isTop: bool,
  currentPath: string.isRe,
}

NavContainer.defaultProps = {
  isTop: true,
}

export default NavContainer
