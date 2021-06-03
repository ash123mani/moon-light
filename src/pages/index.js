import * as React from 'react'

import navLinks from '../../mocks/links'
import { NavContainer } from '../shared/nav'

const IndexPage = () => {
  return <NavContainer navs={navLinks} />
}

export default IndexPage
