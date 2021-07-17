import React from 'react'
import { object } from 'prop-types'
import { graphql } from 'gatsby'

import { Container } from '../styles/pages/home'
import ImageCarousel from '../components/home-page/carousel'
import MiscBlogs from '../components/home-page/misc-blogs'
import SEO from '../common/seo'

function IndexPage({ data }) {
  const {
    allContentfulHomePageBanners: { nodes: banners },
    allContentfulHotBlogs: { nodes: hotBlogs },
  } = data

  return (
    <React.Fragment>
      <SEO title="Vnet Machina" />
      <Container>
        <ImageCarousel blogs={banners} />
      </Container>
      <MiscBlogs miscBlogs={hotBlogs} />
    </React.Fragment>
  )
}

export const query = graphql`
  query Index {
    allContentfulHomePageBanners {
      nodes {
        title
        description
        banneLink
        category
        altText
        image {
          gatsbyImageData(placeholder: DOMINANT_COLOR, formats: [WEBP], layout: FULL_WIDTH, quality: 65)
        }
      }
    }

    allContentfulHotBlogs {
      nodes {
        title
        subtTitle
        blogUrl
        imageUrl {
          gatsbyImageData(placeholder: DOMINANT_COLOR, formats: [WEBP], layout: FULL_WIDTH, quality: 65)
        }
      }
    }
  }
`

IndexPage.propTypes = {
  data: object.isRequired,
}

export default IndexPage
