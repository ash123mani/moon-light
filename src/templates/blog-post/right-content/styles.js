import styled, { css } from 'styled-components'

import BlogCard from '../../../shared/blog-card'
import Icon from '../../../common/icon'
import Footer from '../../../shared/footer'

import { mediaQueries } from '../../../styles/utils'

const expand = css`
  transition-property: padding;
  transition-duration: 0.5s;
  transition-timing-function: ease-in;
`

const animate = ({ isCollapsed }) => {
  return (
    isCollapsed &&
    css`
      /* padding-left: 30rem;
      padding-right: 30rem; */
    `
  )
}

const topSectionStyle = ({ isTopSection }) => {
  return (
    isTopSection &&
    css`
      max-width: unset;
      padding: 2rem 4%;

      @media ${mediaQueries['large-up']} {
        padding: 4rem 10rem;
      }
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
  width: 100vw;
  min-height: 100vh;
  height: auto;
  position: relative;

  @media ${mediaQueries['large-up']} {
    width: 100%;
  }
`

const TitleContainer = styled.div`
  margin: 0 auto;
  flex: 1;
  ${animate}
  ${expand};
  padding: 4% 6%;

  @media ${mediaQueries['large-up']} {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0%;
  }
`

const Title = styled.h1`
  font-size: 2.4rem;
  /* line-height: 5.4rem; */
  font-weight: 500;
  width: 100%;
  color: var(--dark-black);
  height: inherit;
  margin: 4rem auto 0 0;
  max-width: 600px;
  display: flex;
  /* align-items: center;
  justify-content: center; */
  /* text-align: center; */

  @media ${mediaQueries['large-up']} {
    font-size: 4rem;
    margin: 4rem auto 2rem;
  }
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
  padding: 1.2rem 6%;
  max-width: 100%;
  margin: 0 auto;
  ${expand};
  ${animate};
  ${topSectionStyle};

  @media ${mediaQueries['large-up']} {
    padding: 2rem 6rem;
    max-width: ${({ isTopSection }) => (isTopSection ? '80%' : '740px')};
  }
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
  padding: 4rem 6%;
  ${expand};
  ${animate};

  @media ${mediaQueries['large-up']} {
    padding: 4rem 8rem;
  }
`

export { TitleContainer, Title, StyledIcon, ContentContainer, Content, RightContentContainer, StyledCard, StyledFooter }
