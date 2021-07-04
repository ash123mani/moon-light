import styled from 'styled-components'

import BlogCard from '../../../shared/blog-card'

const RightContentContainer = styled.div`
  flex: 1;
  height: 100vh;
  overflow: auto;
`

const ContentContainer = styled.div`
  padding: 4rem 8rem 8rem;
  width: 100%;
`

const Title = styled.h1`
  font-size: 3.6rem;
  font-weight: 600;
  padding: 2.4rem 0rem 4rem;
  color: #003539;
`

const StyledCard = styled(BlogCard)`
  & .blog-link .card .content .title {
    font-size: 2.4rem;
  }

  & .blog-link .card .content .description {
    font-size: 1.8rem;
  }
`

export { Title, ContentContainer, RightContentContainer, StyledCard }
