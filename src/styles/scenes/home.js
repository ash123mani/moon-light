import styled from 'styled-components'

import { mediaQueries } from '../utils'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 113px);

  @media ${mediaQueries['large-down']} {
    height: 70vh;
  }
`

export { Container }
