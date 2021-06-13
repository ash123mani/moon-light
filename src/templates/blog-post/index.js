import React from 'react'
import { shape, array } from 'prop-types'
import { graphql } from 'gatsby'

import NavMenu from '../../components/blog-page/nav-menu'

import { Container } from './styles'

function BlogPost({ data }) {
  const {
    contentfulBlogPages: { url, title },
  } = data

  return (
    <React.Fragment>
      <title>Vnet Macina</title>
      <Container>
        <NavMenu />
        <div>
          <h1>
            {title} {url}
          </h1>
        </div>
      </Container>
    </React.Fragment>
  )
}

export const query = graphql`
  query BlogPageQuery($url: String!) {
    contentfulBlogPages(url: { eq: $url }) {
      url
      title
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
