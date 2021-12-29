import React from 'react'
import { arr } from 'prop-types'

import Link from '../../../common/link'

import LogoBlack from '../logo-black'

import { Wrapper, LinksContainerDesktop } from './styles'

const DesktopHeader = ({ heading }) => {
  const links = () => {
    return heading.map((data, index) => {
      return (
        <Link
          key={index}
          to={data.link}
          asButton
          style={{
            marginLeft: `${'20px'}`,
            fontWeight: 'bold',
            marginRight: `${'0px'}`,
            marginBottom: `${'0px'}`,
          }}
        >
          {data.title}
        </Link>
      )
    })
  }
  return (
    <Wrapper>
      <LogoBlack />
      <LinksContainerDesktop>{links()}</LinksContainerDesktop>
    </Wrapper>
  )
}

DesktopHeader.propTypes = {
  heading: arr,
}

export default DesktopHeader
