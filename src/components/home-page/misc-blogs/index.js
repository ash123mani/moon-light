import React from 'react'
import { array } from 'prop-types'
import { useMediaQuery } from 'react-responsive'

import BlogCard from '../../../shared/blog-card'
import { mediaQueries } from '../../../styles/utils'

import { Container, Title, Wrapper } from './styles'

function MiscBlogs({ miscBlogs }) {
  const isLargeDown = useMediaQuery({ query: mediaQueries['large-down'] })

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
            <div style={{ marginBottom: `${isLargeDown ? '2rem' : '4rem'}` }} key={index}>
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
