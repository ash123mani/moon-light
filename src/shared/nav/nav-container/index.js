import React, { useState } from 'react'
import { object } from 'prop-types'

import NavTab from '../nav-tab'

import { Container, NavContent } from './styles'

function NavContainer(props) {
  const { navs } = props

  const [selected, setSelected] = useState([])

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
        return (
          <NavContent key={index}>
            <NavTab link={nav.link} title={nav.title} onClick={(e) => handleNavTabClick(nav, e)} />
            {selected.includes(nav.link) && nav.subLinks && !!nav.subLinks.length && (
              <NavContainer navs={nav.subLinks} key={index} />
            )}
          </NavContent>
        )
      })}
    </Container>
  )
}

NavContainer.propTypes = {
  navs: object.isRequired,
}

export default NavContainer
