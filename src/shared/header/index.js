import React, { useState } from 'react'
import { string } from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
// import Headroom from 'react-headroom'
import { useMediaQuery } from 'react-responsive'

import { mediaQueries } from '../../styles/utils/responsive'

import Link from '../../common/link'
import Icon from '../../common/icon'

import { Wrapper, HeaderContainer, LinksContainer } from './styles'

function Header({ path }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMediumDown = useMediaQuery({ query: mediaQueries['medium-down'] })

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const links = (isMenuOpen) => (
    <LinksContainer isMenuOpen={isMenuOpen}>
      {heading.map((data, index) => {
        return (
          <React.Fragment key={index}>
            <Link
              to={data.link}
              asButton
              style={{
                marginLeft: `${isMediumDown ? '0px' : '20px'}`,
                fontWeight: 'bold',
                marginRight: `${isMediumDown ? '20px' : '0px'}`,
                marginBottom: `${isMediumDown ? '10px' : '0px'}`,
              }}
            >
              {data.title}
            </Link>
          </React.Fragment>
        )
      })}
    </LinksContainer>
  )

  if (path !== '/') {
    return null
  }

  if (isMediumDown) {
    return (
      <HeaderContainer>
        <Wrapper>
          <Link to="/">
            <StaticImage
              placeholder="blurred"
              layout="fixed"
              src="../../images/vnet-logo-black.svg"
              alt="Vnet Machina"
              width={60}
              height={60}
              as="div"
              loading="eager"
            />
          </Link>
          <Icon name={isMenuOpen ? 'close' : 'menu'} onClick={toggleMenu} />
        </Wrapper>
        {isMenuOpen && links(isMenuOpen)}
      </HeaderContainer>
    )
  }

  return (
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
      {links()}
    </Wrapper>
  )
}

Header.propTypes = {
  path: string.isRequired,
}

export default Header
