import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import { MediaContextProvider, Media } from '../../../styles/global'

import Link from '../../../common/link'

const LogoWhite = () => {
  return (
    <Link to="/">
      <MediaContextProvider>
        <Media lessThan="large">
          <StaticImage
            placeholder="blurred"
            layout="fixed"
            src="../../../images/vnet-logo-white.svg"
            alt="Vnet Machina"
            width={40}
            height={40}
            as="div"
            loading="eager"
          />
        </Media>
        <Media greaterThanOrEqual="large">
          <StaticImage
            placeholder="blurred"
            layout="fixed"
            src="../../../images/vnet-logo-white.svg"
            alt="Vnet Machina"
            width={80}
            height={80}
            as="div"
            loading="eager"
          />
        </Media>
      </MediaContextProvider>
    </Link>
  )
}

export default LogoWhite
