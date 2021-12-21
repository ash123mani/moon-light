import React from 'react'
import { array } from 'prop-types'

import BlogCard from '../../../shared/blog-card'

import { Container, Title, Wrapper } from './styles'

function MiscBlogs({ miscBlogs }) {
  return (
    <Container>
      <Title>Hot Blogs</Title>
      <Wrapper>
        {miscBlogs.map((blog, index) => {
          const { title, subtTitle, imageUrl, blogUrl } = blog

          let orientation = 'default'
          if (index % 2 == 0) {
            orientation = 'reverse'
          }

          return (
            <div style={{ marginBottom: `4rem` }} key={index}>
              <BlogCard
                title={title}
                description={subtTitle}
                image={imageUrl}
                link={blogUrl}
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
