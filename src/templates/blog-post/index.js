import React, { useState } from 'react'
import { shape, array } from 'prop-types'
import { graphql } from 'gatsby'

import SEO from '../../common/seo'
import { MediaContextProvider, Media } from '../../styles/global'

import RightContent from './right-content'
import LeftContent from './left-content'

import { Container, StyledMedia } from './styles'

function BlogPost({ data }) {
  const [isCollapsedDesktop, setIsCollapsedDesktop] = useState(false)
  const [isCollapsedMobile, setIsCollapsedMobile] = useState(true)
  const {
    contentfulBlogPages: { title },
  } = data

  const handleCollapse = (flag) => {
    setIsCollapsedDesktop(flag)
    setIsCollapsedMobile(flag)
  }

  return (
    <React.Fragment>
      <SEO title={title} />
      <Container>
        <MediaContextProvider>
          <Media lessThan="large">
            <LeftContent title={title} isCollapsed={isCollapsedMobile} onCollapse={handleCollapse} />
          </Media>
          <Media lessThan="large">
            <RightContent data={data} isCollapsed={isCollapsedMobile} onCollapse={handleCollapse} />
          </Media>

          <Media greaterThanOrEqual="large">
            <LeftContent title={title} isCollapsed={isCollapsedDesktop} onCollapse={handleCollapse} />
          </Media>
          <StyledMedia greaterThanOrEqual="large">
            <RightContent data={data} isCollapsed={isCollapsedDesktop} onCollapse={handleCollapse} />
          </StyledMedia>
        </MediaContextProvider>
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
