import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

import Icon from '../../../common/icon'

const subNavStyles = ({ showArrow }) =>
  !showArrow &&
  css`
    margin-left: 40px;
  `

const subNavArrowStyles = ({ hasSubLinks }) =>
  hasSubLinks &&
  css`
    margin-left: 60px;
  `

const NavBox = styled.div`
  padding: 8px 12px;
  border-radius: 2px;
  width: 280px;
  margin: 20px;
  cursor: pointer;
  ${subNavStyles};
  ${subNavArrowStyles};
`

const Title = styled.span`
  font-size: 1.6rem;
`
const StyledLink = styled(Link)`
  font-size: 2rem;
`

const StyledIcon = styled(Icon)`
  transform: ${({ isSelected }) => (isSelected ? 'rotate(90deg)' : '')};
  width: 14px;
  height: 14px;
  margin-right: 12px;
`

export { NavBox, Title, StyledLink, StyledIcon }
