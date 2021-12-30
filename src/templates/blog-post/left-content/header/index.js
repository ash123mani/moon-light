import React from 'react'
import { func, bool } from 'prop-types'
import { StaticImage } from 'gatsby-plugin-image'

import Link from '../../../../common/link'

import { MediaContextProvider, Media } from '../../../../styles/global'

import { NonIndexPageHeader, StyledIcon, Wrapper, StyledCloseIcon } from './styles'

function BlogPageHeader({ onShrinkClick, isCollapsed }) {
  const handleExpand = () => {
    onShrinkClick(!isCollapsed)
  }

  return (
    <NonIndexPageHeader>
      <MediaContextProvider>
        <Media lessThan="large">
          <Wrapper>
            <StyledCloseIcon name="close" onClick={handleExpand} />
            <Link to="/">
              <StaticImage
                placeholder="blurred"
                layout="fixed"
                src="../../../../images/vnet-logo-white.svg"
                alt="Vnet Machina"
                width={40}
                height={40}
                as="div"
                loading="eager"
              />
            </Link>
          </Wrapper>
        </Media>
        <Media greaterThanOrEqual="large">
          <Link to="/">
            <StaticImage
              placeholder="blurred"
              layout="fixed"
              src="../../../../images/vnet-logo-white.svg"
              alt="Vnet Machina"
              width={80}
              height={80}
              as="div"
              loading="eager"
            />
          </Link>
        </Media>
        <Media greaterThanOrEqual="large">{!isCollapsed && <StyledIcon name="expand" onClick={handleExpand} />}</Media>
      </MediaContextProvider>
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
