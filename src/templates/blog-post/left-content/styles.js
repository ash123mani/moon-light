import styled, { css } from 'styled-components'

import { mediaQueries } from '../../../styles/utils'

const expand = ({ isCollapsed }) => {
  console.log('isCollapsed', isCollapsed)
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
  background-color: var(--dark-black);
  transition-property: width;
  transition-duration: 0.5s;
  transition-timing-function: ease-in;
  width: 100%;
  ${expand};

  @media ${mediaQueries['large-up']} {
    position: sticky;
    width: 320px;
    ${expand};
  }
`

export { NavContainer }
