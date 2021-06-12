import React from 'react'
import { array } from 'prop-types'

import BlogCard from '../../../shared/blog-card'

import { Container, Title, Wrapper } from './styles'

function MiscBlogs({ miscBlogs }) {
  return (
    <Container>
      <Title>MiscBlogs</Title>
      <Wrapper>
        {miscBlogs.map((blog, index) => {
          const { title, description, image, banneLink, altText } = blog

          let orientation = 'default'
          if (index % 2 == 0) {
            orientation = 'reverse'
          }

          return (
            <div style={{ marginBottom: '8rem' }} key={index}>
              <BlogCard
                title={title}
                description={description}
                image={image}
                banneLink={banneLink}
                altText={altText}
                orientation={orientation}
              />
            </div>
          )
        })}
      </Wrapper>
    </Container>
  )
}

MiscBlogs.propTypes = {
  miscBlogs: array.isRequired,
}

export default MiscBlogs