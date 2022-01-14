import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Link from '../../common/link'
import instagram from '../../images/instagram.svg'
import twitter from '../../images/twitter.svg'
import linkedin from '../../images/linkedin.svg'
import facebook from '../../images/facebook.svg'
import mail from '../../images/mail.svg'
import { MediaContextProvider, Media } from '../../styles/global'

import {
  Container,
  TopContent,
  Title,
  About,
  StyledDivider,
  BottomContainer,
  AllLinks,
  StyledLink,
  BottomTitle,
  UserIds,
} from './styles'

const svgMapper = {
  instagram,
  twitter,
  linkedin,
  facebook,
  mail,
}

function Footer(props) {
  const data = useStaticQuery(graphql`
    query Footer {
      contentfulHeaderAndFooter {
        footerLinks {
          footer {
            title
            subtitle
            pageLinks {
              title
              links {
                title
                link
                placement
              }
            }
            contactLinks {
              title
              links {
                link
                type
                name
                placement
              }
            }
          }
        }
      }
    }
  `)

  const {
    contentfulHeaderAndFooter: {
      footerLinks: {
        footer: {
          title,
          subtitle,
          pageLinks: { title: pageLinksTitle, links: allPageLinks },
          contactLinks: { title: contactsTitle, links: allContactLinks },
        },
      },
    },
  } = data

  function renderPageLinksSection() {
    return allPageLinks.map((pageLink, index) => {
      return (
        <StyledLink to={pageLink.link} key={index}>
          {pageLink.title}
        </StyledLink>
      )
    })
  }

  function renderContactLinksSection() {
    return allContactLinks.map((contactLink, index) => {
      return (
        <StyledLink to={contactLink.link} key={index}>
          <img
            src={svgMapper[contactLink.name]}
            alt={contactLink.name}
            style={{
              width: '32px',
              height: '32px',
            }}
          />
          <UserIds>{contactLink.name}</UserIds>
        </StyledLink>
      )
    })
  }

  return (
    <Container {...props}>
      <TopContent>
        <Title>{title}</Title>
        <About>{subtitle}</About>
      </TopContent>

      <StyledDivider />

      <BottomContainer>
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
        <MediaContextProvider>
          <Media lessThan="large">
            <AllLinks>
              <BottomTitle>{pageLinksTitle}</BottomTitle>
              {renderPageLinksSection()}
            </AllLinks>
          </Media>
          <Media lessThan="large">
            <AllLinks>
              <BottomTitle>{contactsTitle}</BottomTitle>
              {renderContactLinksSection()}
            </AllLinks>
          </Media>
          <Media greaterThanOrEqual="large">
            <AllLinks>
              <BottomTitle>{pageLinksTitle}</BottomTitle>
              {renderPageLinksSection()}
            </AllLinks>
          </Media>

          <Media greaterThanOrEqual="large">
            <AllLinks>
              <BottomTitle>{contactsTitle}</BottomTitle>
              {renderContactLinksSection()}
            </AllLinks>
          </Media>
        </MediaContextProvider>
      </BottomContainer>
    </Container>
  )
}

export default Footer
