import React, { useState } from 'react'
import { string } from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
// import Headroom from 'react-headroom'

import { MediaContextProvider, Media } from '../../styles/global'

import Link from '../../common/link'

import { Wrapper, LinksContainerDesktop, LinksContainerMobile, Explore, MobieHeaderContainer } from './styles'

function Header({ path }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

  const links = () => (
    <>
      {heading.map((data, index) => {
        return (
          <MediaContextProvider key={index}>
            <Media lessThan="large">
              <Link
                to={data.link}
                asButton
                style={{
                  marginLeft: `${'20px'}`,
                  fontWeight: 'bold',
                  marginRight: `${'4%'}`,
                  marginBottom: `${'12px'}`,
                  display: `inline-block`,
                  float: 'right',
                }}
              >
                {data.title}
              </Link>
            </Media>
            <Media greaterThanOrEqual="large">
              <Link
                to={data.link}
                asButton
                style={{
                  marginLeft: `${'20px'}`,
                  fontWeight: 'bold',
                  marginRight: `${'0px'}`,
                  marginBottom: `${'0px'}`,
                }}
              >
                {data.title}
              </Link>
            </Media>
          </MediaContextProvider>
        )
      })}
    </>
  )

  if (path !== '/') {
    return null
  }

  const mobileHeader = (
    <MobieHeaderContainer>
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
        <Explore onClick={toggleMenu} isOpen={isMenuOpen}>
          {isMenuOpen ? 'Close' : 'Explore Me'}
        </Explore>
      </Wrapper>
      {isMenuOpen && <LinksContainerMobile>{links(isMenuOpen)}</LinksContainerMobile>}
    </MobieHeaderContainer>
  )

  const desktopHeader = (
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
      <LinksContainerDesktop>{links()}</LinksContainerDesktop>
    </Wrapper>
  )

  return (
    <MediaContextProvider>
      <Media lessThan="large">{mobileHeader}</Media>
      <Media greaterThanOrEqual="large">{desktopHeader}</Media>
    </MediaContextProvider>
  )
}

Header.propTypes = {
  path: string.isRequired,
}

export default Header
