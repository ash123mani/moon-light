import React from 'react'
import { string, func, bool } from 'prop-types'

import { NavBox, Title, StyledLink, StyledIcon } from './styles'

function NavTab({ title, url, onClick, showArrow, isSelected, hasSubLinks }) {
  console.log('url sis', url)
  return (
    <NavBox onClick={onClick} showArrow={showArrow} hasSubLinks={hasSubLinks}>
      {hasSubLinks ? <StyledIcon name="arrow-forward" isSelected={isSelected} /> : <StyledIcon name="circle" />}

      <StyledLink to={url}>
        <Title>{title}</Title>
      </StyledLink>
    </NavBox>
  )
}

NavTab.propTypes = {
  onClick: func.isRequired,
  url: string.isRequired,
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
