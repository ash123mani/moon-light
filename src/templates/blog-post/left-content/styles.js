import styled, { css } from 'styled-components'

import { mediaQueries } from '../../../styles/utils'

const expand = ({ isCollapsed }) => {
  return (
    isCollapsed &&
    css`
      width: 0em;
    `
  )
}

const NavContainer = styled.aside`
  height: 100vh;
  position: absolute;
  z-index: 10;
  top: 0px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  width: 80%;
  background-color: var(--dark-black);
  transition-property: width;
  transition-duration: 0.5s;
  transition-timing-function: ease-in;
  ${expand};

  @media ${mediaQueries['large-up']} {
    position: sticky;
    width: 320px;
  }
`

export { NavContainer }
