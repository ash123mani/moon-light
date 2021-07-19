import React from 'react'
import { func, bool } from 'prop-types'
import { StaticImage } from 'gatsby-plugin-image'

import Link from '../../../../common/link'

import { NonIndexPageHeader, StyledIcon } from './styles'

function BlogPageHeader({ onShrinkClick, isCollapsed }) {
  const handleExpand = () => {
    onShrinkClick(!isCollapsed)
  }

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
      {!isCollapsed && <StyledIcon name="expand" onClick={handleExpand} />}
    </NonIndexPageHeader>
  )
}

BlogPageHeader.propTypes = {
  onShrinkClick: func.isRequired,
  isCollapsed: bool,
}

BlogPageHeader.defaultProps = {
  isCollapsed: false,
}

export default BlogPageHeader
