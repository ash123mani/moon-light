import React from 'react'
import { func } from 'prop-types'
import { StaticImage } from 'gatsby-plugin-image'

import Link from '../../../../common/link'
import Icon from '../../../../common/icon'

import { TopSection } from './styles'

const MobileHeader = ({ onMenuExpand }) => {
  return (
    <TopSection>
      <Icon name="menu" height="24px" width="24px" onClick={onMenuExpand} />
      <Link to="/">
        <StaticImage
          placeholder="blurred"
          layout="fixed"
          src="../../../images/vnet-logo-black.svg"
          alt="Vnet Machina"
          width={40}
          height={40}
          as="div"
          loading="eager"
        />
      </Link>
    </TopSection>
  )
}

MobileHeader.propTypes = {
  onMenuExpand: func.isRequired,
}

export default MobileHeader
