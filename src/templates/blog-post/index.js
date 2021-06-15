import React from 'react'
import { shape, array } from 'prop-types'
import { graphql } from 'gatsby'

import SEO from '../../common/seo'

import RightContent from './right-content'
import LeftContent from './left-content'

import { Container } from './styles'

function BlogPost({ data }) {
  const {
    contentfulBlogPages: { title },
  } = data

  return (
    <React.Fragment>
      <SEO title={title} />
      <Container>
        <LeftContent />
        <RightContent data={data} />
      </Container>
    </React.Fragment>
  )
}

export const query = graphql`
  query BlogPageQuery($url: String!) {
    contentfulBlogPages(url: { eq: $url }) {
      url
      title
      isTopContent
      createdAt
      bannerImage {
        gatsbyImageData(placeholder: DOMINANT_COLOR, formats: [WEBP], layout: FULL_WIDTH, quality: 65)
      }
      content {
        raw
      }
      blogs {
        pages {
          title
          subtitle
          url
        }
      }
    }
  }
`

BlogPost.propTypes = {
  data: shape({
    allContentfulBlogPages: shape({
      edges: array.isRequired,
    }),
  }),
}

export default BlogPost
