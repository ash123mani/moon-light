import React from 'react'
import { shape, array } from 'prop-types'
import { graphql } from 'gatsby'

// import navLinks from '../../mocks/links'
import { NavContainer } from '../shared/nav'

import { Container, NavWrapper } from '../styles/pages/blog'

function BlogPage({ data }) {
  const {
    contentfulNavigations: {
      navigations: { pages },
    },
  } = data

  return (
    <React.Fragment>
      <title>Vnet Macina</title>
      <Container>
        <NavWrapper>
          <NavContainer navs={pages} />
        </NavWrapper>
        {/* <h1 style={{ flex: 1 }}>Right</h1> */}
      </Container>
    </React.Fragment>
  )
}

export const query = graphql`
  query BlogPage {
    contentfulNavigations {
      navigations {
        pages {
          title
          url
          pages {
            title
            url
            pages {
              title
              url
              pages {
                title
                url
              }
            }
          }
        }
      }
    }
  }
`

BlogPage.propTypes = {
  data: shape({
    contentfulNavigations: shape({
      navigations: shape({
        pages: array,
      }),
    }),
  }),
}

export default BlogPage
