import React from 'react'
import { shape, array } from 'prop-types'

import RichTextToDOM from '../../../shared/rich-text-to-dom'
import Footer from '../../../shared/footer'
import BlogCard from '../../../shared/blog-card'

import { ContentContainer, Title, RightContentContainer } from './styles'

function RightContent({ data }) {
  const {
    contentfulBlogPages: { title, content },
    allContentfulTopPageBlogCards: { nodes },
  } = data

  return (
    <RightContentContainer>
      <ContentContainer>
        <Title>{title}</Title>
        {nodes.length > 0 ? (
          nodes.map((node) => {
            const { title, shortDescription, url, image } = node

            return <BlogCard title={title} description={shortDescription} url={url} key={title} image={image} />
          })
        ) : (
          <RichTextToDOM richTextJson={content} />
        )}
      </ContentContainer>

      <Footer style={{ padding: '4rem 8rem' }} />
    </RightContentContainer>
  )
}

RightContent.propTypes = {
  data: shape({
    allContentfulBlogPages: shape({
      edges: array.isRequired,
    }),
  }),
}

export default RightContent
