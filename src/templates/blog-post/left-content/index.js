import React from 'react'

import NavMenu from '../../../components/blog-page/nav-menu'
import Header from '../../../shared/header'

import { NavContainer } from './styles'

function LeftContent() {
  return (
    <NavContainer>
      <Header />
      <NavMenu />
    </NavContainer>
  )
}

export default LeftContent
