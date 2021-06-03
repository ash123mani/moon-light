import React from 'react'
import { string, func } from 'prop-types'

import { NavBox, Title, StyledLink } from './styles'

function NavTab({ title, link, onClick }) {
  return (
    <NavBox onClick={onClick}>
      <StyledLink to={`#${link}`}>
        <Title>{title}</Title>
      </StyledLink>
    </NavBox>
  )
}

NavTab.propTypes = {
  onClick: func.isRequired,
  link: string.isRequired,
  title: string.isRequired,
}

export default NavTab
