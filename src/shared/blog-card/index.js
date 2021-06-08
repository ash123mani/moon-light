import React from 'react'
import { oneOf, object } from 'prop-types'
import { GatsbyImage } from 'gatsby-plugin-image'

import Link from '../../common/link'

import { BlogCard as Card, Content, BlogTitle, BlogDescription } from './styles'

function BlogCard({ orientation, blog }) {
  const { title, description, gatsbyImageData } = blog

  return (
    <Link to="/blog">
      <Card orientation={orientation}>
        <GatsbyImage
          alt={title}
          image={gatsbyImageData}
          as="div"
          style={{
            width: '350px',
            height: '100%',
          }}
        />
        <Content>
          <BlogTitle>{title}</BlogTitle>
          <BlogDescription>{description}</BlogDescription>
        </Content>
      </Card>
    </Link>
  )
}

BlogCard.propTypes = {
  orientation: oneOf(['reverse']),
  blog: object.isRequired,
}

BlogCard.defaultProps = {
  orientation: 'default',
}

export default BlogCard
