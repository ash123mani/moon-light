import React from 'react'
import { object } from 'prop-types'
import { graphql } from 'gatsby'

import { Container } from '../styles/pages/home'
import ImageCarousel from '../components/home-page/carousel'

function IndexPage({ data }) {
  const {
    contentfulHomePage: { homePageBlogs },
  } = data
  console.log('Index', data)

  return (
    <React.Fragment>
      <Container>
        <ImageCarousel blogs={homePageBlogs} />
      </Container>
    </React.Fragment>
  )
}

export const query = graphql`
  query Index {
    contentfulHomePage {
      homePageBlogs {
        title
        description
        gatsbyImageData(placeholder: DOMINANT_COLOR, formats: [WEBP], layout: FULL_WIDTH)
      }
    }
  }
`

IndexPage.propTypes = {
  data: object.isRequired,
}

export default IndexPage
