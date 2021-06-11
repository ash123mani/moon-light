import styled, { css } from 'styled-components'
// import { Link } from 'gatsby'

import Icon from '../../../common/icon'
import Link from '../../../common/link'

const subNavStyles = ({ showArrow }) =>
  !showArrow &&
  css`
    margin-left: 60px;
  `

const subNavArrowStyles = ({ hasSubLinks }) =>
  !hasSubLinks &&
  css`
    /* margin-left: 24px; */
  `

const NavBox = styled.div`
  padding: 8px 12px;
  border-radius: 2px;
  max-width: 240px;
  min-width: 200px;
  width: auto;
  margin: 8px;
  cursor: pointer;
  /* ${subNavStyles}; */
  ${subNavArrowStyles}
`

const Title = styled.span`
  font-size: 1.6rem;
`
const StyledLink = styled(Link)`
  font-size: 2rem;
`

const StyledIcon = styled(Icon)`
  transform: ${({ isSelected }) => (isSelected ? 'rotate(90deg)' : '')};
  width: 12px;
  height: 12px;
  margin-right: 8px;
`

export { NavBox, Title, StyledLink, StyledIcon }
