import React from 'react'
import { shape, array } from 'prop-types'

import RichTextToDOM from '../../../shared/rich-text-to-dom'
import Footer from '../../../shared/footer'

import SubBlogCard from './sub-blog-card'
import { ContentContainer, Title, RightContentContainer } from './styles'

function RightContent({ data }) {
  const {
    contentfulBlogPages: { title, content, blogs, isTopContent },
  } = data

  const { pages = [] } = blogs || {}

  return (
    <RightContentContainer>
      <ContentContainer>
        <Title>{title}</Title>
        {isTopContent ? (
          pages.map((page) => {
            const { title, subtitle: description, url } = page

            return <SubBlogCard title={title} description={description} url={url} key={url} />
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
