import styled from 'styled-components'

import BlogCard from '../../../shared/blog-card'

const RightContentContainer = styled.div`
  flex: 1;
  height: auto;
  position: relative;
`

const ContentContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  position: relative;
`

const Title = styled.h1`
  font-size: 3.6rem;
  font-weight: 600;
  height: 120px;
  padding: 0rem 8rem;
  display: flex;
  align-items: center;
  color: var(--dark-black);
  border-bottom: 1px solid var(--border);
  /* position: sticky;
  top: 0; */
  /* z-index: 2; */
  background-color: white;
`

const Content = styled.div`
  padding: 4rem 8rem;
`

const StyledCard = styled(BlogCard)`
  & .blog-link .card .content .title {
    font-size: 2.4rem;
  }

  & .blog-link .card .content .description {
    font-size: 1.8rem;
  }
`

export { Title, ContentContainer, Content, RightContentContainer, StyledCard }
