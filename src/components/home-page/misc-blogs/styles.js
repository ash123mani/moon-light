import styled from 'styled-components'

import { mediaQueries } from '../../../styles/utils/responsive'

const Container = styled.div`
  padding: 6rem 10%;

  @media ${mediaQueries['large-down']} {
    padding: 6rem 5%;
  }
`

const Title = styled.h3`
  font-size: 4.2rem;

  @media ${mediaQueries['large-down']} {
    font-size: 2.4rem;
  }
`

const Wrapper = styled.div`
  margin-top: 6rem;

  @media ${mediaQueries['large-down']} {
    margin-top: 2rem;
  }
`

export { Container, Title, Wrapper }
