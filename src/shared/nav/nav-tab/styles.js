import styled from 'styled-components'
import { Link } from 'gatsby'

const NavBox = styled.div`
  padding: 8px 12px;
  background: #fbfbfb;
  margin-bottom: 8px;
  border-radius: 2px;
`

const Title = styled.span`
  font-size: 2rem;
`
const StyledLink = styled(Link)`
  font-size: 2rem;
`

export { NavBox, Title, StyledLink }
