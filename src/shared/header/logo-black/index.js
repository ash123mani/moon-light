import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Link from '../../../common/link'

import { MediaContextProvider, Media } from '../../../styles/global'

const LogoBlack = () => {
  return (
    <Link to="/">
      <MediaContextProvider>
        <Media lessThan="large">
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
        </Media>
        <Media greaterThanOrEqual="large">
          <StaticImage
            placeholder="blurred"
            layout="fixed"
            src="../../../images/vnet-logo-black.svg"
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

export default LogoBlack
