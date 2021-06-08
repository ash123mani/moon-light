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
          let orientation = 'default'
          if (index % 2 == 0) {
            orientation = 'reverse'
          }
          return (
            <div style={{ marginBottom: '3rem' }} key={index}>
              <BlogCard blog={blog} orientation={orientation} />
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
