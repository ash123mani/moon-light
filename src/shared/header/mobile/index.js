import React, { useState } from 'react'
import { arr } from 'prop-types'

import LogoWhite from '../logo-white'
import Icon from '../../../common/icon'
import Link from '../../../common/link'
import LogoBlack from '../logo-black'

import { Wrapper, MobieHeaderContainer, LinksContainerMobile } from './styles'

const MobileHeader = ({ heading }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const links = () => {
    return heading.map((data, index) => {
      return (
        <Link
          key={index}
          to={data.link}
          asButton
          style={{
            marginLeft: `${'0px'}`,
            marginRight: `${'0px'}`,
            marginBottom: `${'0px'}`,
            borderRadius: `${'0px'}`,
            borderBottom: `1px solid var(--light-white)`,
          }}
        >
          {data.title}
        </Link>
      )
    })
  }

  return (
    <MobieHeaderContainer>
      <Wrapper isMenuOpen={isMenuOpen}>
        {isMenuOpen ? <LogoWhite /> : <LogoBlack />}
        <Icon name={isMenuOpen ? 'close' : 'menu'} onClick={toggleMenu} height="24px" width="24px" />
      </Wrapper>
      <LinksContainerMobile isMenuOpen={isMenuOpen}>{links(isMenuOpen)}</LinksContainerMobile>
    </MobieHeaderContainer>
  )
}

MobileHeader.propTypes = {
  heading: arr,
}

MobileHeader.defaultProps = {
  heading: [],
}

export default MobileHeader
