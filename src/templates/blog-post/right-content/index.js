import React from 'react'
import { shape, array, func, bool } from 'prop-types'

import RichTextToDOM from '../../../shared/rich-text-to-dom'
import Comments from '../../../components/comments'

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
  const isTopSection = !!nodes.length

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
        <Content isCollapsed={isCollapsed} isTopSection={isTopSection}>
          {isTopSection ? (
            nodes.map((node, index) => {
              const { title, shortDescription, cardUrl, image } = node

              let orientation = 'default'
              if (index % 2 == 0) {
                orientation = 'reverse'
              }

              return (
                <StyledCard
                  title={title}
                  description={shortDescription}
                  link={cardUrl}
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
          {!isTopSection && <Comments />}
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
