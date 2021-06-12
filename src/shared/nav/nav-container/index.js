import React, { useState } from 'react'
import { array, bool, string } from 'prop-types'

import NavTab from '../nav-tab'

import { Container, NavContent } from './styles'

function NavContainer(props) {
  const { navs, isTop = true } = props
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : ''

  const [selected, setSelected] = useState([currentPath])

  function handleNavTabClick(nav) {
    console.log('selected', selected)
    console.log('nav.url', nav.url)

    let newLinks = []
    if (selected.includes(nav.url)) {
      console.log('nav.url', nav.url)

      newLinks = selected.filter((item) => item !== nav.url)
      console.log('selected-after', newLinks)
    } else {
      newLinks = selected.concat(nav.url)
    }
    setSelected(newLinks)
  }

  return (
    <Container>
      {navs.map((nav) => {
        // const topUrl = nav.url
        const hasSubLinks = nav.pages && !!nav.pages.length
        const isArrowSelected = selected.includes(nav.url)
        const isCurrentUrlPartOfTree = hasSubLinks && currentPath.includes(nav.url)
        // const isCurrentUrlSelected = currentPath === nav.url
        let open = false

        if (isArrowSelected || isCurrentUrlPartOfTree) {
          open = true
        }

        return (
          <NavContent key={nav.url} isTop={isTop}>
            <NavTab
              showArrow={isTop}
              url={nav.url}
              title={nav.title}
              onClick={(e) => handleNavTabClick(nav, e)}
              isSelected={open}
              hasSubLinks={hasSubLinks}
            />

            {open && hasSubLinks && <NavContainer navs={nav.pages} isTop={false} />}
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
