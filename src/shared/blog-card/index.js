import React from 'react'
import { oneOf, string } from 'prop-types'

import Link from '../../common/link'
import Image from '../../common/image'

import { BlogCard as Card, Content, BlogTitle, BlogDescription } from './styles'

function BlogCard({ title, description, image, banneLink, altText, orientation }) {
  return (
    <Link to={banneLink}>
      <Card orientation={orientation}>
        <Image
          alt={altText}
          image={image.gatsbyImageData}
          imgStyle={{
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
  orientation: oneOf(['reverse', 'default']),
  title: string.isRequired,
  description: string.isRequired,
  image: string.isRequired,
  banneLink: string.isRequired,
  altText: string.isRequired,
}

BlogCard.defaultProps = {
  orientation: 'default',
}

export default BlogCard
