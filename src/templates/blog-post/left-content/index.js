import React from 'react'
import { func, bool } from 'prop-types'

import NavMenu from '../../../components/blog-page/nav-menu'
import Header from './header'

import { NavContainer } from './styles'

function LeftContent({ onCollapse, isCollapsed }) {
  return (
    <NavContainer isCollapsed={isCollapsed}>
      <Header onShrinkClick={onCollapse} isCollapsed={isCollapsed} />
      <NavMenu />
    </NavContainer>
  )
}

LeftContent.propTypes = {
  onCollapse: func.isRequired,
  isCollapsed: bool,
}

LeftContent.defaultProps = {
  isCollapsed: false,
}

export default LeftContent
