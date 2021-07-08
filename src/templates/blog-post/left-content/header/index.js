import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Link from '../../../../common/link'

import { NonIndexPageHeader } from './styles'

function BlogPageHeader() {
  return (
    <NonIndexPageHeader>
      <Link to="/">
        <StaticImage
          placeholder="blurred"
          layout="fixed"
          src="../../images/vnet-logo-white.svg"
          alt="Vnet Machina"
          width={80}
          height={80}
          as="div"
          loading="eager"
        />
      </Link>
    </NonIndexPageHeader>
  )
}

export default BlogPageHeader
