import styled from 'styled-components'

import Link from '../../common/link'

const GatsbyLink = styled(Link)`
  /* color: blue; */
  font-size: 1.8rem;
  line-height: 1.6;
  /* color: #003539; */
  text-decoration: underline;
  color: blue;
  opacity: 0.6;

  &:hover {
    color: blue;
    opacity: 0.8;
  }
`

export default GatsbyLink
