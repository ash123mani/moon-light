import React, { useState } from 'react'
import { array, bool } from 'prop-types'

import NavTab from '../nav-tab'

import { Container, NavContent } from './styles'

function NavContainer(props) {
  const { navs, isTop = true } = props

  const [selected, setSelected] = useState([])
  // const isSelected =

  const handleNavTabClick = (nav) => {
    let newLinks = []
    if (selected.includes(nav.url)) {
      newLinks = selected.filter((item) => item !== nav.url)
    } else {
      newLinks = selected.concat(nav.url)
    }
    setSelected(newLinks)
  }

  return (
    <Container>
      {navs.map((nav, index) => {
        const hasSubLinks = nav.pages && !!nav.pages.length
        const isSelected = selected.includes(nav.url)

        console.log('nav is', nav)

        return (
          <NavContent key={index} isTop={isTop}>
            <NavTab
              showArrow={isTop}
              url={nav.url}
              title={nav.title}
              onClick={(e) => handleNavTabClick(nav, e)}
              isSelected={isSelected}
              hasSubLinks={hasSubLinks}
            />

            {isSelected && hasSubLinks && <NavContainer navs={nav.pages} key={index} isTop={false} />}
          </NavContent>
        )
      })}
    </Container>
  )
}

NavContainer.propTypes = {
  navs: array.isRequired,
  isTop: bool,
}

NavContainer.defaultProps = {
  isTop: true,
}

export default NavContainer
