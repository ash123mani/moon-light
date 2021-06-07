import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import vnetLogo from '../../images/icon.png'

function Image() {
  return <StaticImage src={vnetLogo} alt="A dinosaur" width={200} height={200} />
}

export default Image
