import styled, { css } from 'styled-components'

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
  position: sticky;
  top: 0px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  width: 320px;
  background-color: var(--dark-black);
  transition-property: width;
  transition-duration: 0.5s;
  transition-timing-function: ease-in;
  ${expand};
`

export { NavContainer }
