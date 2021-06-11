import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Headroom from 'react-headroom'

import Link from '../../common/link'

import { Wrapper } from './styles'

function Header() {
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

  return (
    <Headroom style={{ zIndex: '9999' }}>
      <Wrapper>
        <div>
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
        </div>

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
    </Headroom>
  )
}

export default Header
