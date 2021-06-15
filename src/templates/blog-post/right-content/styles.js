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
  font-size: 3.2rem;
  /* font-weight: 400; */
  padding: 2.4rem 0rem;
`

const StyledBlogCard = styled(BlogCard)`
  & .content .title {
    font-size: 2.4rem;
  }

  & .content .description {
    font-size: 1.6rem;
  }
`

export { Title, ContentContainer, RightContentContainer, StyledBlogCard }
