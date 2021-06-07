import React from 'react'

import navLinks from '../../mocks/links'
import { NavContainer } from '../shared/nav'

import { Container, NavWrapper } from '../styles/pages/blog'

function BlogPage() {
  return (
    <React.Fragment>
      <title>Vnet Macina</title>
      <Container>
        <NavWrapper>
          <NavContainer navs={navLinks} />
        </NavWrapper>
        {/* <h1 style={{ flex: 1 }}>Right</h1> */}
      </Container>
    </React.Fragment>
  )
}

export default BlogPage
