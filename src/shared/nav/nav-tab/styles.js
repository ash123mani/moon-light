import styled, { css } from 'styled-components'

import Icon from '../../../common/icon'
import Link from '../../../common/link'

const subNavStyles = ({ showArrow }) =>
  !showArrow &&
  css`
    /* margin-left: 60px; */
  `

const subNavArrowStyles = ({ hasSubLinks }) =>
  !hasSubLinks
    ? css`
        margin-left: 24px;
        /* padding-left: 0px; */
      `
    : css`
        margin-left: 12px;
      `

const NavBox = styled.div`
  border: ${({ isSelected }) => (isSelected ? '1px solid var(--light-white)' : 'none')};
  display: flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 4px;
  max-width: 240px;
  min-width: 240px;
  width: auto;
  margin: 8px;
  cursor: pointer;
  /* border: 1px solid #ffffff5c; */

  /* ${subNavStyles}; */
  ${subNavArrowStyles}
`

const Title = styled.span`
  font-size: 1.6rem;
  color: #ffffffc4;
`
const StyledLink = styled(Link)`
  font-size: 2rem;
`

const StyledIcon = styled(Icon)`
  transform: ${({ isSelected }) => (isSelected ? 'rotate(90deg)' : '')};
  margin-right: 4px;
  padding: 4px;

  &:hover {
    /* background-color: var(--light-black); */
    border-radius: 4px;
    border: 1px solid var(--light-white);
  }
`

const LensIcon = styled(Icon)`
  margin-right: 8px;
  height: 6px;
  width: 6px;
`

export { NavBox, Title, StyledLink, StyledIcon, LensIcon }
