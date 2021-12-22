import React from 'react'
import { oneOf, string, object } from 'prop-types'

import Link from '../../common/link'
import Image from '../../common/image'
import { MediaContextProvider, Media } from '../../styles/global'

import { BlogCard as Card, Content, BlogTitle, BlogDescription } from './styles'

function BlogCard({ title, description, image, link, altText, orientation, cardStyles }) {
  return (
    <Link to={link} className="blog-link">
      <Card orientation={orientation} style={cardStyles} className="card">
        {image && (
          <MediaContextProvider>
            <Media greaterThanOrEqual="medium">
              <Image
                alt={altText}
                image={image.gatsbyImageData}
                imgStyle={{
                  width: '350px',
                  height: '100%',
                  borderRadius: '8px',
                }}
              />
            </Media>
          </MediaContextProvider>
        )}

        <Content className="content">
          <BlogTitle className="title">{title}</BlogTitle>
          <BlogDescription className="description">{description}</BlogDescription>
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
  link: string.isRequired,
  altText: string.isRequired,
  cardStyles: object,
}

BlogCard.defaultProps = {
  orientation: 'none',
  cardStyles: {},
}

export default BlogCard
