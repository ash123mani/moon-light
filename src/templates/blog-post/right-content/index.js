import React from 'react'
import { shape, array } from 'prop-types'

import RichTextToDOM from '../../../shared/rich-text-to-dom'
import Footer from '../../../shared/footer'

import { ContentContainer, Title, RightContentContainer, StyledCard } from './styles'

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
          nodes.map((node, index) => {
            const { title, shortDescription, url, image } = node

            let orientation = 'default'
            if (index % 2 == 0) {
              orientation = 'reverse'
            }

            return (
              <StyledCard
                title={title}
                description={shortDescription}
                link={url}
                key={title}
                image={image}
                orientation={orientation}
                cardStyles={{ marginBottom: '8rem' }}
              />
            )
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
