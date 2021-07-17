import React, { useState } from 'react'
import { shape, array } from 'prop-types'
import { graphql } from 'gatsby'

import SEO from '../../common/seo'

import RightContent from './right-content'
import LeftContent from './left-content'

import { Container } from './styles'

function BlogPost({ data }) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const {
    contentfulBlogPages: { title },
  } = data

  const handleCollapse = (flag) => {
    setIsCollapsed(flag)
  }

  return (
    <React.Fragment>
      <SEO title={title} />
      <Container>
        <LeftContent title={title} onCollapse={handleCollapse} isCollapsed={isCollapsed} />
        <RightContent data={data} isCollapsed={isCollapsed} onCollapse={handleCollapse} />
      </Container>
    </React.Fragment>
  )
}

export const query = graphql`
  query BlogPageQuery($url: String!) {
    contentfulBlogPages(url: { eq: $url }) {
      url
      title
      createdAt
      bannerImage {
        gatsbyImageData(placeholder: DOMINANT_COLOR, formats: [WEBP], layout: FULL_WIDTH, quality: 65)
      }
      content {
        raw
        references {
          __typename
          ... on ContentfulAsset {
            contentful_id
            gatsbyImageData
            title
          }
        }
      }
    }

    allContentfulTopPageBlogCards(filter: { url: { eq: $url } }) {
      nodes {
        cardUrl
        title
        shortDescription
        image {
          gatsbyImageData(placeholder: DOMINANT_COLOR, formats: [WEBP], layout: FULL_WIDTH, quality: 65)
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
    allContentfulTopPageBlogCards: shape({
      nodes: array.isRequired,
    }),
  }),
}

export default BlogPost
