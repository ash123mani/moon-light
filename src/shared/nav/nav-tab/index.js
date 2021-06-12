import React, { memo } from 'react'
import { string, func, bool } from 'prop-types'

import { NavBox, Title, StyledLink, StyledIcon } from './styles'

function NavTab({ title, url, onClick, showArrow, isSelected, hasSubLinks, onLinkClick }) {
  return (
    <NavBox showArrow={showArrow} hasSubLinks={hasSubLinks}>
      {hasSubLinks ? (
        <StyledIcon name="arrow-forward" isSelected={isSelected} onClick={onClick} />
      ) : (
        <StyledIcon name="circle" />
      )}

      <StyledLink to={url} onClick={onLinkClick}>
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
  onLinkClick: func.isRequired,
}

NavTab.defaultProps = {
  isSelected: false,
  hasSubLinks: false,
}

export default memo(NavTab)
