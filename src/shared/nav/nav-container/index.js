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
    if (selected.includes(nav.link)) {
      newLinks = selected.filter((item) => item !== nav.link)
    } else {
      newLinks = selected.concat(nav.link)
    }
    setSelected(newLinks)
  }

  return (
    <Container>
      {navs.map((nav, index) => {
        const hasSubLinks = nav.subLinks && !!nav.subLinks.length
        const isSelected = selected.includes(nav.link)

        return (
          <NavContent key={index} isTop={isTop}>
            <NavTab
              showArrow={isTop}
              link={nav.link}
              title={nav.title}
              onClick={(e) => handleNavTabClick(nav, e)}
              isSelected={isSelected}
              hasSubLinks={hasSubLinks}
            />

            {isSelected && hasSubLinks && <NavContainer navs={nav.subLinks} key={index} isTop={false} />}
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
