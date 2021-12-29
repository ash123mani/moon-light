import styled from 'styled-components'

import { mediaQueries } from '../../../styles/utils'

const Container = styled.div`
  padding: 2rem 4%;

  @media ${mediaQueries['large-up']} {
    padding: 6rem 10%;
  }
`

const Title = styled.h3`
  font-size: 2.4rem;

  @media ${mediaQueries['medium-up']} {
    font-size: 4.2rem;
  }
`

const BlogCards = styled.div`
  margin-bottom: 2rem;

  @media ${mediaQueries['medium-up']} {
    margin-bottom: 4rem;
  }
`

const Wrapper = styled.div`
  margin-top: 2rem;

  @media ${mediaQueries['medium-up']} {
    margin-top: 6rem;
  }
`

export { Container, Title, Wrapper, BlogCards }
