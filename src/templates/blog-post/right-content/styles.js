import styled, { css } from 'styled-components'

import BlogCard from '../../../shared/blog-card'
import Icon from '../../../common/icon'
import Footer from '../../../shared/footer'

const expand = css`
  transition-property: padding;
  transition-duration: 0.5s;
  transition-timing-function: ease-in;
`

const animate = ({ isCollapsed }) => {
  return (
    isCollapsed &&
    css`
      padding-left: 30rem;
      padding-right: 30rem;
    `
  )
}

const animateExpandIcon = ({ isCollapsed }) => {
  return isCollapsed
    ? css`
        transform: translateX(0%);
      `
    : css`
        transform: translateX(-200%);
      `
}

const RightContentContainer = styled.div`
  flex: 1;
  height: auto;
  /* position: relative; */
`

const ContentContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  position: relative;
`

const TitleContainer = styled.div`
  height: 120px;
  padding: 0rem 8rem;
  display: flex;
  align-items: center;
  flex: 1;
  border-bottom: 1px solid var(--border);
  /* position: relative; */
  ${animate}
  ${expand};
`

const Title = styled.h1`
  font-size: 3.6rem;
  font-weight: 600;
  color: var(--dark-black);
`

const StyledIcon = styled(Icon)`
  position: fixed;
  left: 10px;
  top: 124px;
  cursor: pointer;
  height: 18px;
  width: 18px;
  padding: 4px;
  background: var(--medium-black);
  border-radius: 4px;
  transition: transform 0.5s;
  transition-delay: ${({ isCollapsed }) => (isCollapsed ? '0.5s' : '0s')};
  ${animateExpandIcon};
`

const Content = styled.div`
  padding: 4rem 8rem;
  ${expand};
  ${animate};
`

const StyledCard = styled(BlogCard)`
  & .blog-link .card .content .title {
    font-size: 2.4rem;
  }

  & .blog-link .card .content .description {
    font-size: 1.8rem;
  }
`

const StyledFooter = styled(Footer)`
  padding: 4rem 8rem;
  ${expand};
  ${animate};
`

export { TitleContainer, Title, StyledIcon, ContentContainer, Content, RightContentContainer, StyledCard, StyledFooter }
