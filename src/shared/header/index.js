import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Link from '../../common/link'

import { Wrapper } from './styles'

function Header() {
  const data = useStaticQuery(graphql`
    query Header {
      contentfulHomePage {
        headerData {
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
    contentfulHomePage: {
      headerData: { heading },
    },
  } = data

  return (
    <Wrapper>
      <div>
        <Link to="/">
          <StaticImage
            placeholder="blurred"
            layout="fixed"
            src="../../images/vnet-logo.svg"
            alt="Vnet Machina"
            width={60}
            height={60}
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
  )
}

export default Header
