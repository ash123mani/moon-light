import React from 'react'
import { string, func, bool } from 'prop-types'

import { NavBox, Title, StyledLink, StyledIcon } from './styles'

function NavTab({ title, link, onClick, showArrow, isSelected, hasSubLinks }) {
  return (
    <NavBox onClick={onClick} showArrow={showArrow}>
      {hasSubLinks && <StyledIcon name="arrow-forward" isSelected={isSelected} />}

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
  showArrow: bool.isRequired,
  isSelected: bool,
  hasSubLinks: bool,
}

NavTab.defaultProps = {
  isSelected: false,
  hasSubLinks: false,
}

export default NavTab
