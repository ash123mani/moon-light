import styled from 'styled-components'

import Link from '../../common/link'

const GatsbyLink = styled(Link)`
  font-size: 1.6rem;
  line-height: 2rem;
  color: blue;
  opacity: 0.6;

  &:hover {
    color: blue;
    opacity: 0.8;
  }
`

export default GatsbyLink
