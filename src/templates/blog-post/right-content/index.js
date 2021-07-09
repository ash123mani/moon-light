import React from 'react'
import { shape, array, func, bool } from 'prop-types'

import RichTextToDOM from '../../../shared/rich-text-to-dom'

import {
  ContentContainer,
  Content,
  TitleContainer,
  Title,
  StyledIcon,
  RightContentContainer,
  StyledCard,
  StyledFooter,
} from './styles'

function RightContent({ data, onCollapse, isCollapsed }) {
  const {
    contentfulBlogPages: { title, content },
    allContentfulTopPageBlogCards: { nodes },
  } = data

  const handleExpand = () => {
    onCollapse(!isCollapsed)
  }

  return (
    <RightContentContainer>
      <ContentContainer>
        <TitleContainer isCollapsed={isCollapsed}>
          <Title>{title}</Title>
          <StyledIcon name="shrink" onClick={handleExpand} isCollapsed={isCollapsed} />
        </TitleContainer>
        <Content isCollapsed={isCollapsed}>
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
                  cardStyles={{ marginBottom: '4rem' }}
                />
              )
            })
          ) : (
            <RichTextToDOM richTextJson={content} />
          )}
        </Content>
      </ContentContainer>

      <StyledFooter isCollapsed={isCollapsed} />
    </RightContentContainer>
  )
}

RightContent.propTypes = {
  data: shape({
    allContentfulBlogPages: shape({
      edges: array.isRequired,
    }),
  }),
  onCollapse: func.isRequired,
  isCollapsed: bool,
}

RightContent.defaultProps = {
  isCollapsed: false,
}

export default RightContent
