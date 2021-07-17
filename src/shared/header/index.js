import React from 'react'
import { string } from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
// import Headroom from 'react-headroom'

import Link from '../../common/link'
import blackLogo from '../../images/vnet-logo-black.svg'

import { Wrapper } from './styles'

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
    // <Headroom style={{ zIndex: '9999' }}>
    <Wrapper>
      <Link to="/">
        <StaticImage
          placeholder="blurred"
          layout="fixed"
          src="../../images/vnet-logo-black.svg"
          alt="Vnet Machina"
          width={80}
          height={80}
          as="div"
          loading="eager"
        />
      </Link>

      <div style={{ zIndex: -11 }}>
        {heading.map((data, index) => {
          return (
            <React.Fragment key={index}>
              <Link to={data.link} asButton style={{ marginLeft: '20px' }}>
                {data.title}
              </Link>
            </React.Fragment>
          )
        })}
      </div>
    </Wrapper>
    // </Headroom>
  )
}

Header.propTypes = {
  path: string.isRequired,
}

export default Header
