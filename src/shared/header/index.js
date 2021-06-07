import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Link from '../../common/link'

import { Wrapper } from './styles'

function Header() {
  return (
    <Wrapper>
      <div>
        <Link to="/">
          <StaticImage src="../../images/vnet-logo.svg" alt="A dinosaur" width={60} height={60} />
        </Link>
      </div>

      <div style={{ zIndex: -11 }}>
        <Link to="/" asButton>
          <span>Routing</span>
        </Link>
        <Link to="/blog" asButton style={{ marginLeft: '20px' }}>
          Switching
        </Link>
        <Link to="/blog" asButton style={{ marginLeft: '20px' }}>
          Platform
        </Link>
        <Link to="/blog" asButton style={{ marginLeft: '20px' }}>
          VMware
        </Link>
        <Link to="/blog" asButton style={{ marginLeft: '20px' }}>
          Misclenious
        </Link>
        <Link to="/blog" asButton style={{ marginLeft: '20px' }}>
          Contact us
        </Link>
      </div>
    </Wrapper>
  )
}

export default Header
