import React from 'react'
import { string } from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
// import Headroom from 'react-headroom'

import { MediaContextProvider, Media } from '../../styles/global'

import DesktopHeader from './desktop'
import MobileHeader from './mobile'

function Header({ path }) {
  const data = useStaticQuery(graphql`
    query Header {
      contentfulHeaderAndFooter {
        headingLinks {
          heading {
            title
            link
            placement
          }
        }
      }
    }
  `)

  const {
    contentfulHeaderAndFooter: {
      headingLinks: { heading },
    },
  } = data

  if (path !== '/') {
    return null
  }

  return (
    <MediaContextProvider>
      <Media lessThan="large">
        <MobileHeader heading={heading} />
      </Media>
      <Media greaterThanOrEqual="large">
        <DesktopHeader heading={heading} />
      </Media>
    </MediaContextProvider>
  )
}

Header.propTypes = {
  path: string.isRequired,
}

export default Header
