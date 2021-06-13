import React, { memo } from 'react'
import { string, func, bool } from 'prop-types'

import { NavBox, Title, StyledLink, StyledIcon, LensIcon } from './styles'

function NavTab({ title, url, onClick, showArrow, isSelected, hasSubLinks }) {
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : ''

  return (
    <NavBox showArrow={showArrow} hasSubLinks={hasSubLinks} isSelected={url === currentPath} onClick={onClick}>
      {hasSubLinks ? (
        <StyledIcon name="arrow-forward" isSelected={isSelected} height="12px" width="12px" />
      ) : (
        <LensIcon name="lens" height="8px" width="8px" />
      )}

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

export default memo(NavTab)
